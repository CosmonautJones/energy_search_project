import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUsername, addPassword } from '../actions/index.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.addUsername = this.addUsername.bind(this);
        this.updateNewUsername = this.updateNewUsername.bind(this);
        this.addPassword = this.addPassword.bind(this);
        this.updateNewPassword = this.updateNewPassword.bind(this);
    }

addUsername(event) {
    this.props.addUsername({
        value: this.state.username,
    });
    this.setState({
        username: ''
    });
}
updateNewUsername(event) {
    console.log(this.state.username);
    this.setState({
        username: event.target.value
    });
}

addPassword(event) {
    this.props.addPassword({
        value: this.state.password,
    });
    this.setState({
        password: ''
    });
}
updateNewPassword(event) {
    console.log(this.state.password); 
    this.setState({
        password: event.target.value
    });
}

render() {
    return (
        <div className="LoginForm">
            <form onSubmit={this.addUsername}>
                <input
                    onChange={this.updateNewUsername}
                    placeholder="Add Username"
                    value={this.state.username}
                    ref={this.state.username}
                />
            </form>
            <form onSubmit={this.addPassword}>
                <input
                    onChange={this.updateNewPassword}
                    placeholder="Add Password"
                    value={this.state.password}
                    ref={this.state.password}
                />
            </form>
            <button onClick={this.updateNewUsername}>Submit</button>
        </div>
        );
    }
}

export default connect(null, { addUsername, addPassword })(LoginForm);