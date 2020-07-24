import React, { Component } from 'react';
import "../../public/styles/scss/Error.scss"
import { Row } from "react-bootstrap";
class Error403 extends Component {
    render() {
        return (
            <Row className="row_err">
                <div className="err_overlay"></div>
                <h1>
                    403
                    <h5>Unauthorized Access</h5>
                </h1>
            </Row>
        );
    }
}

export default Error403;