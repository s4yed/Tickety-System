import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
export default class Alerts extends Component {
    static propTypes = {
        msg: PropTypes.string.isRequired
    };
    render() {
        
        return (
            <Alert variant="info">
                {this.props.msg}
            </Alert>
        );
    }
}
