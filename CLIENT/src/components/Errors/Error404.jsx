import React, {Component} from 'react';
import "../../public/styles/scss/Error.scss"
import {Row} from "react-bootstrap";
class Error404 extends Component {
    render() {
        return (
            <Row className="row_err">
                <div className="err_overlay"></div>
                <h1>
                    404
                    <h5>Page Not Found</h5>
                </h1>
            </Row>
        );
    }
}

export default Error404;