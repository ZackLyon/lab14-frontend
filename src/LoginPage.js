import React, { Component } from 'react'
import { login, signUp } from './request-utils.js';

export default class LoginPage extends Component {

    state = {
        login_email: '',
        login_password: '',
        signup_email: '',
        signup_password: ''
    }

    handleSubmitLogin = async (e) => {
        e.preventDefault();

        const { token } = await login(this.state.login_email, this.state.login_password);

        this.props.handleTokenChange(token);

        this.props.history.push('/search-page')
    }

    handleSubmitSignUp = async (e) => {
        e.preventDefault();

        const { token } = await signUp(this.state.signup_email, this.state.signup_password);

        this.props.handleTokenChange(token);

        this.props.history.push('/search-page')
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmitLogin}>
                    <input 
                    type='email'
                    value={this.state.login_email}
                    onChange={(e) => this.setState({ login_email: e.target.value })}
                    />
                    <input 
                    type='password'
                    value={this.state.login_password}
                    onChange={(e) => this.setState({ login_password: e.target.value })}
                    />
                    <button type='submit'>Login</button>
                </form>
                <form
                    onSubmit={this.handleSubmitSignUp}>
                    <input 
                    type='email'
                    value={this.state.signup_email}
                    onChange={(e) => this.setState({ signup_email: e.target.value })}
                    />
                    <input 
                    type='password'
                    value={this.state.signup_password}
                    onChange={(e) => this.setState({ signup_password: e.target.value })}
                    />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}
