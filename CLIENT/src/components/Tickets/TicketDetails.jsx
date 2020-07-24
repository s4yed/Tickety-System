import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthService from "../../services/auth/authenticate";
import BusBooking from "./Bus/BusBooking";
import TrainBooking from "./Train/TrainBooking";
import CinemaBooking from "./Cinema/CinemaBooking";
import MatchBooking from './Match/MatchBooking';

class TicketDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticket: null
        };
    }
    static propTypes = {
        category: PropTypes.string,
    };

    render() {
        // let { ticket } = this.state;
        // ticket = ticket ? ticket : {};
        if (!AuthService.isAuthenticated()) {
            return <Redirect to="/login" />;
        }
        return (
            <Fragment>
                {
                    {
                        "bus-tickets": <BusBooking />,
                        "match-tickets": <MatchBooking />,
                        "train-tickets": <TrainBooking />,
                        "cinema-tickets": <CinemaBooking />
                    }[this.props.match.params.category]
                }
            </Fragment>
        );
    }
}

export default TicketDetails;