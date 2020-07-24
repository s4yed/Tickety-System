import React, { Component } from 'react';
import loginImg from '../../public/images/login.svg'
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth/authenticate";
import ValidationService from '../../services/validation';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                usernameError: "",
                passwordError: ""
            },
            username: "",
            password: ""
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if (ValidationService.formValid(this.state)) {
            AuthService.login({ username, password }).then(status => {
                if (status) {
                    this.setState({
                        username: "",
                        password: "",
                        formErrors: {
                            usernameError: "",
                            passwordError: "",
                        }
                    });
                } else {
                    this.setState({
                        formErrors: {
                            usernameError: "Invalid username or password",
                            passwordError: "Invalid username or password",
                        }
                    });
                }
            });
        }

    }

    render() {
        const { formErrors } = this.state;
        if (AuthService.isAuthenticated()) {
            return (
                <Redirect to={`/profile`} />
            )
        }
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt=""></img>
                    </div>
                    <form onSubmit={this.onLogin} className="form">
                        <div className="form-group">
                            <div>
                                <label
                                    htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                    placeholder="username" />
                                <span className="errorMsg">
                                    {formErrors.usernameError.length > 0 && formErrors.usernameError}
                                </span>
                            </div>
                            <div>
                                <label
                                    htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    placeholder="password" />
                                <span className="errorMsg"></span>
                            </div>
                            <div>
                                <button
                                    className="btn_auth"
                                    type="submit">Login</button>
                            </div>

                            <div className="forget">
                                <a href="localhost:3000">Forget password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;