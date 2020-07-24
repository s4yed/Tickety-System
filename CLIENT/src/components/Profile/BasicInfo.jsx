import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Form } from "react-bootstrap";
import UpdateProfileService from "../../services/updateProfile";
import Alerts from "./Alerts";
class BasicInfo extends Component {
    static propTypes = {
        info: PropTypes.object,
        msg: PropTypes.string
    };
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            username: '',
            phone: '',
            facebook: '',
            email: '',
            selectedFile: null,
            message: ''
        };

        console.log(this.props.setData)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    fileHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    };

    onSubmitPhoto = e => {
        const { selectedFile } = this.state;
        if (!selectedFile) e.preventDefault();
        const data = new FormData();
        data.append('file', selectedFile);
        UpdateProfileService.updatePhoto(data)
            .then(path => {
                if (path.success) {
                    this.setState({
                        avatar: path[1],
                        message: "Your photo uploaded successfully!"
                    });
                }
                else {
                    this.setState({
                        message: path.msg
                    });
                }
            })
            .catch(err => console.error(err));
    };
    onSave = e => {
        e.preventDefault();
        const { fullName, phone, facebook } = this.state;
        if (fullName || phone || facebook) {
            UpdateProfileService.updateData({ fullName, phone, facebook }).then(data => {
                if (!data.status) {
                    this.setState({
                        message: "There is something wrong!"
                    });
                }
                this.setState({
                    message: data.msg
                });
            }).catch(err => console.error(err));
        }
    };
    render() {
        const { message } = this.state;
        const { fullName, username, email, phone, facebook } = this.props.getData ? this.props.getData : "";
        // const {message} = this.state;

        return (
            <div>
                {message ? <Alerts msg={message} /> : null}
                <Form className="form col-xs-2">
                    <Row>
                        <Form.Label className="col-md-2 col-sm-4">Full Name</Form.Label>
                        <Form.Control
                            className="col-md-6 col-sm-6"
                            type="text"
                            name="fullName"
                            value={fullName ? fullName : this.state.fullName}
                            onChange={this.handleChange}

                        />
                    </Row>
                    <Row>
                        <Form.Label className="col-md-2 col-sm-4">Username</Form.Label>
                        <Form.Control
                            className="col-md-6 col-sm-6"
                            type="text"
                            name="username"
                            value={username ? username : ""}
                            disabled
                        />
                    </Row>

                    <Row>
                        <Form.Label className="col-md-2 col-sm-4">Email</Form.Label>
                        <Form.Control
                            className="col-md-6 col-sm-6"
                            type="email"
                            name="email"
                            value={email ? email : ""}
                            disabled
                        />
                    </Row>

                    <Row>
                        <Form.Label className="col-md-2 col-sm-4">Phone</Form.Label>
                        <Form.Control
                            className="col-md-6 col-sm-6"
                            type="text"
                            name="phone"
                            value={phone ? phone : this.state.phone}
                            onChange={this.handleChange}
                        />
                    </Row>

                    <Row>
                        <Form.Label className="col-md-2 col-sm-4">Facebook</Form.Label>
                        <Form.Control
                            className="col-md-6 col-sm-6"
                            type="text"
                            name="facebook"
                            value={facebook ? facebook : this.state.facebook}
                            onChange={this.handleChange}
                        />
                    </Row>

                    <Row>
                        <Form.Label className="col-md-2 col-sm-4" >Change photo</Form.Label>
                        <Form.Control
                            className="col-md-4 col-sm-4"
                            id="file"
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={this.fileHandler}
                        />
                        <button
                            htmlFor="file"
                            className="col-md-2 col-sm-2 savePhoto"
                            type="submit"
                            onClick={this.onSubmitPhoto}
                        >
                            <i className="fas fa-upload"></i>
                            Upload
                        </button>
                    </Row>
                </Form>
                <div>
                    <button type="submit" className="submit1" onClick={this.onSave}>
                        Save
                    </button>
                </div>
            </div>
        );
    }
}
export default BasicInfo;
