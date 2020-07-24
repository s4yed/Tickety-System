import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import loginImg from "../../public/images/login.svg";
import AuthService from "../../services/auth/authenticate";
import ValidationService from "../../services/validation";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                usernameError: "",
                emailError: "",
                passwordError: ""
            },
            username: "",
            email: "",
            password: ""
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        formErrors = ValidationService.fieldsValid(name, value, formErrors);
        this.setState({
            [name]: value,
            formErrors
        });
    }

    onSignup = (e) => {
        e.preventDefault();
        const {
            username,
            email,
            password
        } = this.state;
        if (ValidationService.formValid(this.state))
            AuthService.signUp({ username, email, password }).then(status => {
                if (status) {
                    this.setState({
                        username: "",
                        email: "",
                        password: "",
                        formErrors: {
                            usernameError: "",
                            emailError: "",
                            passwordError: ""
                        },
                    });
                } else {
                    this.setState({
                        formErrors: {
                            usernameError: "Username already exists",
                            emailError: "",
                            passwordError: ""
                        },
                    })
                }
            });
    }
    render() {
        if (AuthService.isAuthenticated()) {
            return (
                <Redirect to={`/profile`} />
            )
        }

        const {
            username,
            email,
            password,
            formErrors
        } = this.state;
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Signup</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={this.onSignup} className="form" noValidate>
                        <div className="form-group">
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    className={formErrors.usernameError.length > 0 ? "error" : null}
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                <span className="errorMsg">
                                    {formErrors.usernameError.length > 0 && formErrors.usernameError}
                                </span>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    className={formErrors.emailError.length > 0 ? "error" : null}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                <span className="errorMsg">
                                    {formErrors.emailError.length > 0 && formErrors.emailError}
                                </span>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    className={formErrors.passwordError.length > 0 ? "error" : null}
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                <span className="errorMsg">
                                    {formErrors.passwordError.length > 0 && formErrors.passwordError}
                                </span>
                            </div>
                            <div>
                                <button type="submit" className="btn_auth">Signup</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Register;