import React, { Component, Fragment, Suspense, lazy } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth/authenticate";
import AdminService from "../../services/auth/admin";

import { Col, Row } from "react-bootstrap";
import Alerts from "./Alerts";
import Loading from "../Loading";
import Sidebar from "./Sidebar";
import "../../public/styles/Profile.scss";
import AddTicket from "../Tickets/Add/AddTicket";

const BasicInfo = lazy(() => import("./BasicInfo"));
const Password = lazy(() => import("./Password"));

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            user: null,
            pages: 0,
            basicInfo: {},
            tickets: 15,
            admin: false
        };
    }
    async UNSAFE_componentWillMount() {
        const user = await AuthService.getUserData();
        AdminService.isAdmin().then(admin => {
            console.log(admin)
            this.setState({
                user, admin
            });
        });

    }

    getBasicInfo(basicInfo) {
        this.setState({ basicInfo });
        console.log(basicInfo);
    }

    password = e => {
        e.preventDefault();
        this.setState({
            pages: 1
        });
        this.props.history.push("/profile/password");
    };

    addTicket = e => {
        e.preventDefault();
        if (this.state.admin) {
            this.setState({
                pages: 2
            });
            this.props.history.push("/profile/add-tickets");
        } else {
            this.setState({
                pages: 0
            });
            this.props.history.push("/profile");
        }
    };

    profile = e => {
        e.preventDefault();
        this.setState({
            pages: 0
        });
        this.props.history.push("/profile");

    };

    render() {
        const { message, pages, user, admin, tickets } = this.state;
        if (!AuthService.isAuthenticated()) {
            return <Redirect to="/login" />;
        }
        return (
            <Row className="profile">
                <Col sm={3}>
                    <Sidebar
                        user={user}
                        profile={this.profile}
                        password={this.password}
                        addTicket={this.addTicket}
                        tickets={tickets}
                        logout={this.logout}
                        admin={admin}
                    />
                </Col>
                <Col sm={8}>
                    {
                        {
                            0:
                                <Fragment>
                                    <div className="profile-content">
                                        <div className="head">
                                            <i className="fas fa-info-circle"></i>
                                            Basic Information
                                    </div>

                                        {message ? <Alerts msg={message} /> : null}
                                        <Suspense fallback={<Loading className="loading" />}>
                                            <BasicInfo getData={user} />
                                        </Suspense>
                                    </div>

                                    {/* <div className="profile-content">
                                    <div className="head">
                                        <i className="fas fa-graduation-cap"></i>
                                        Education
                                    </div>
                                    <Suspense fallback={<Loading className="loading"/>}>
                                        <Education setData={user}/>
                                    </Suspense>
                                </div> */}
                                </Fragment>
                            ,
                            1:
                                <Suspense fallback={<Loading className="loading" />}>
                                    <Password className="profile-content" />
                                </Suspense>
                            ,
                            2:
                                <Suspense fallback={<Loading className="loading" />}>
                                    <AddTicket className="profile-content" />
                                    {/*<TrainBooking className="profile-content"/>*/}
                                </Suspense>

                        }[pages]
                    }
                </Col>
            </Row>
        );
    }
}
export default Profile;
