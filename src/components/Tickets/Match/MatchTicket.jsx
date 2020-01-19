import React, {Component, Fragment} from 'react'
import { Row, Col } from "react-bootstrap";
import "../../../public/styles/scss/Tickets/Match.scss"
import PropTypes from "prop-types";

export default class MatchTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: null
        };
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
    };
    UNSAFE_componentWillMount() {
        const match = this.props.match;
        this.setState({
            match
        });
    }

    render() {
        let {seat, stadium, home_team, away_team, date_time, price, ticket_no} = this.state.match;
        date_time = date_time? date_time.split(" "): "";
        return (
            <Fragment>
                <Row className="ticket">
                    <div className="ticket__header">
                        <h5>FOOTBALL TICKET</h5>
                    </div>
                    <h5 className="ticket__teams">{`${home_team} vs ${away_team}`}</h5>
                    <Row className="ticket__data">
                        <Col sm={5}>
                            <Row>
                                <Col sm={4}>
                                    <h5>Date:</h5>
                                </Col>
                                <Col sm={8}>
                                    <h5>{`${date_time[0]} ${date_time[1]} ${date_time[2]} ${date_time[3]}`}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <h5>Seat:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{seat}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h5>Kick-Off:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{`${date_time[4]} PM`}</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={3}>
                            <h1>V.I.P</h1>
                        </Col>

                        <Col sm={4}>
                            <Row>
                                <Col sm={6}>
                                    <h5>Ticket No.</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{ticket_no}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h5>Stadium:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{stadium}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <h5>Price:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5><strong>{`$${price}.00`}</strong></h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="ticket__footer"></div>
                </Row>
            </Fragment>
        )
    }
}
