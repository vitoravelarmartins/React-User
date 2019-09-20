import React, { Component } from "react";


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default class GithubUser extends Component {
    state = {
        users: Object
    };


    async componentDidMount() {
        const resposta = await fetch(`https://api.github.com/users/${this.props.username}`)
        const users = await resposta.json();


        this.setState({ users })
        console.log(users)


    }


    render() {

        const { users } = this.state;

        return (
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            V
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={users.name}
                    subheader={'@' + users.login}
                />
                <div>
                    <img src={users.avatar_url}></img>
                </div>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {"Quantidade de Repositorios: " + users.public_repos}
                        <br></br>
                        {"Quantidade de Seguidores: " + users.followers}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>

            </Card>
        );
    }




}







