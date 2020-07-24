import React, {Component, Fragment} from 'react'
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../../public/styles/scss/Tickets/Cinema.scss";

class CinemaTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinema: null
        };
    }
    static propTypes = {
        cinema: PropTypes.object.isRequired,
    };
    UNSAFE_componentWillMount() {
        const cinema = this.props.cinema;
        this.setState({
            cinema
        });
    }
    render() {
        let {seat, address, cinema_name, movie_name, date_time, price, ticket_no} = this.state.cinema;
        date_time = date_time? date_time.split(" "): "";
        return (
            <Fragment>
                <Row className="ticket">
                    {/* <div className="ticket__header">
                        <h5>cinama ticket</h5>
                    </div> */}
                    <div className="ticket__photo">
                        {/* note image added from css here */}
                    </div>
                    <Row className="ticket__data">
                        <Col sm={4}>
                            <Row>
                                <Col sm={4}>
                                    <h5>Date : </h5>
                                </Col>
                                <Col sm={8}>
                                    <h5>{`${date_time[0]} ${date_time[1]}`}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <h5>Seat : </h5>
                                </Col>
                                <Col sm={4}>
                                    <h5>{seat}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h5>Hall : </h5>
                                </Col>
                                <Col sm={6}>
                                    <h5></h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={4}>
                            <h1>{movie_name}</h1>
                        </Col>

                        <Col sm={4}>
                            <Row>
                                <Col sm={6}>
                                    <h5>Ticket No : </h5>
                                </Col>
                                <Col sm={4}>
                                    <h5>{ticket_no}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h5>Row : </h5>
                                </Col>
                                <Col sm={4}>
                                    <h5></h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <h5>Price : </h5>
                                </Col>
                                <Col sm={4}>
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

export default CinemaTicket;