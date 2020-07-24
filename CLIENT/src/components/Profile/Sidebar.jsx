import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Image, Badge } from "react-bootstrap";
import ReactImageAppear from 'react-image-appear';
import ConstService from "../../services/constants";
const { baseURI } = ConstService;
class Sidebar extends Component {
    static propTypes = {
        user: PropTypes.object,
    };
    render() {
        const { user } = this.props;
        const username = user ? user.username : " ";
        // const filename = user ? user.photo[0].filename : "";
        // const photo = `${baseURI}/images/users/${filename}`;
        // console.log(photo)
        return (
            <div className="profile__sidebar">
                <div className="profile__userpic">
                    <ReactImageAppear
                        src={`${baseURI}/images/users/5de301965dc90b1ba880663b.png`}
                        animation="blurIn"
                        className="img-responsive"
                        easing="ease-in"
                        animationDuration=".5s"
                    />
                    {/* <Image
                        src={photo}
                        className="img-responsive"
                        alt=""
                        roundedCircle
                    /> */}
                </div>
                <div className="profile__usertitle">
                    <div className="profile__usertitle__name">
                        <p>{username[0].toUpperCase() + username.slice(1)}</p>
                    </div>
                    <div className="profile__usertitle__job">
                        <p>{}</p>
                    </div>
                </div>
                {/* <div className="profile-userbuttons">
                                <Button variant="outline-light" size="sm">
                                    Follow
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    Message
                                </Button>
                            </div> */}
                <div className="profile__usermenu">
                    <Nav className="flex-column">
                        <Nav.Link href="/" >
                            {/* this is for icon */}
                            <i className="glyphicon glyphicon-home"></i>
                            Home{" "}
                        </Nav.Link>
                        <Nav.Link href="/profile" onClick={this.props.profile}>
                            <i className="glyphicon glyphicon-user"></i>
                            Profile{" "}
                        </Nav.Link>
                        <Nav.Link href="/tickets">
                            <i className="glyphicon glyphicon-ok"></i>
                            Tickets{" "}
                            <Badge variant="light">{this.props.tickets}</Badge>
                        </Nav.Link>
                        {
                            this.props.admin ?
                                <Nav.Link href="/add-tickets" onClick={this.props.addTicket}>
                                    <i className="glyphicon glyphicon-plus"></i>
                                    Add Tickets{" "}
                                </Nav.Link>
                                : null
                        }
                        <Nav.Link href="/profile/password" onClick={this.props.password}>
                            <i className="glyphicon glyphicon-pencil"></i>
                            Change Password{" "}
                        </Nav.Link>
                        <Nav.Link href="/" onClick={this.props.onLogout}>
                            <i className="glyphicon glyphicon-log-out"></i>
                            Logout{" "}
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}
export default Sidebar;