import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap'
import AuthService from "../../services/auth/authenticate";
import { Redirect } from "react-router-dom";
export default class Navbar1 extends Component {
    onLogout = e => {
        AuthService.logout();
    };

    render() {
        return (
            <Navbar className="bg-nav">
                <Navbar.Brand href="/">Tickety</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Features</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    {
                        AuthService.isAuthenticated() ?
                            <Fragment >
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <a href="/" onClick={this.onLogout}>
                                    <Button variant="outline-primary">
                                        Logout
                                </Button>
                                </a>
                            </Fragment> :
                            <Fragment >
                                <Link to="/login" style={{ paddingRight: "1em" }}>
                                    <Button variant="outline-primary">
                                        Login
                                </Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="primary">
                                        Register
                                </Button>
                                </Link>
                            </Fragment>
                    }
                </Nav>
            </Navbar>
        );
    }
}
