import React, { Component } from 'react'
import { Spinner, Container } from "react-bootstrap";

export default class Loading extends Component {
    render() {
        return (
            <Container style={{width: "100%"}}>
                <Spinner className={this.props.className} style={{width: "5em", height: "5em"}} animation="grow" />
            </Container>
        )
    }
}
