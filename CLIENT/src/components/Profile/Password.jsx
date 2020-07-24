import React, { Component } from 'react';
import { Row, Form } from "react-bootstrap";
import ValidationService from "../../services/validation";
import UpdateProfileService from '../../services/updateProfile';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: "",
            formError: {
                passwordError: "",
                confirmError: ""
            }
        };
    }
    handleChange = e => {
        const { name, value } = e.target;
        let formError = this.state.formError;
        formError = ValidationService.fieldsValid(name, value, formError);
        
        this.setState({
            [name]: value,
            formError
        });
    }

    onSubmit = e => {
        e.preventDefault();
        let { password, confirmPassword, formError } = this.state;
        this.setState({
            formError: {
                passwordError: "",
                confirmError: ValidationService.passValid(password, confirmPassword, formError)
            }
        });
        UpdateProfileService.updatePassword({password}).then(val => {

            console.log(val)
        })
    }

    render() {
        const { password, confirmPassword, formError } = this.state;
        return (
            <div className="profile-content">
                <div className="head">
                    <i className="fas fa-edit"></i>
                    Change Password
                </div>
                <Form className="form">
                    <Row>
                        <Form.Label className="col-md-3 col-sm-4">Password</Form.Label>
                        <Form.Control
                            className={formError.passwordError.length > 0 ? "col-md-4 col-sm-6 error" : "col-md-4 col-sm-6"}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </Row>
                    <span className="errorMsg">
                            {formError.passwordError.length > 0 && formError.passwordError}
                    </span>
                    <Row>
                        <Form.Label className="col-md-3 col-sm-4">Confirm Password</Form.Label>
                        <Form.Control
                            className={formError.confirmError.length > 0 ? "col-md-4 col-sm-6 error" : "col-md-4 col-sm-6"}
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                        />
                    </Row>
                    <span className="errorMsg">
                            {formError.confirmError.length > 0 && formError.confirmError}
                    </span>
                </Form>
                <button
                        className="submit1"
                        type="submit"
                        onClick={this.onSubmit}
                    >
                        Change Password
                </button>
            </div>
        )
    }
}
export default Password;