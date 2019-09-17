import React, { Component } from 'react';
import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';


export default class GitUser extends Component {

    state = {
        users: []

    };

    async atulizarUsers() {
        let { username } = this.props;

        if (!username) {
            username = "vitoravelarmartins";
        }


        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const users = await response.json();
        this.setState({ users });
    }

    componentDidMount() {
        this.atulizarUsers();
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.atulizarUsers();
        return true;

    }

    render() {
        const { users } = this.state;
        return (
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>
                            <stron>{user.login}</stron>
                            &nbsp;<a href={user.html_url}>{user.html_url}</a>
                        </li>

                    );
                })}
            </ul>
        );

    }
}






