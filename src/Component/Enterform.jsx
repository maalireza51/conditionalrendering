import React, { Component } from 'react'
import Chat from './Chat';
import Login from './Login';

export default class Enterform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            name: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleName = this.handleName.bind(this);
    }
    handleLogin(e) {
        this.setState({ ...this.state, logged: !this.state.logged });
        e.preventDefault();
    }
    handleName(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        if (this.state.logged) {
            return <Chat name={this.state.name} handlelogin={this.handleLogin} />
        } else {
            return (
                <Login
                    handleName={this.handleName}
                    handleLogin={this.handleLogin}
                    name={this.state.name}
                />
            )
        }
    }
}
