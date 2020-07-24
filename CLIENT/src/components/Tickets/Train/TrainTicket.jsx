import React, {Component, Fragment} from 'react'
import { Row, Col } from "react-bootstrap";
import "../../../public/styles/scss/Tickets/TicketTrain.scss"
import PropTypes from "prop-types";
import Ticket from "../../../services/tickets/ticket";

export default class TrainTicket extends Component {
    static propTypes = {
        TicketTrain: PropTypes.object.isRequired,
    };
    state = {
        TicketTrain: null
    };
    UNSAFE_componentWillMount() {
        const TicketTrain = this.props.TicketTrain;
        this.setState({
            TicketTrain
        });
    }

    async componentDidMount() {
        // const TrainTicket = await Ticket.getMatchById(this.props.TrainTicket.params.id);
        // this.setState({
        //     TrainTicket
        // });

    }

    render() {
        let {seat, stadium, home_team, away_team, date_time, price, ticket_type, ticket_no} = this.state.TicketTrain?this.state.TicketTrain:{};
        seat= seat? seat:"";
        stadium= stadium? stadium:"";
        home_team= home_team? home_team:"";
        away_team= away_team? away_team:"";
        date_time= date_time? date_time:"";
        price= price? price:"";
        ticket_type= ticket_type? ticket_type:"";
        ticket_no= ticket_no? ticket_no:"";

        date_time = date_time? date_time.split(" "): "";
        return (
            <Fragment>
                <Row className="ticket">
                    <div className="ticket__header">
                        <h5>Train TICKET</h5>
                    </div>
                    <Row className="ticket__data">
                        <Col sm={5}>
                            <Row >
                                <Col sm={4}>
                                    <h5>Date:</h5>
                                </Col>
                                <Col sm={8}>
                                    <h5>{`${date_time[0]} ${date_time[1]} ${date_time[2]} ${date_time[3]}`}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <h5>Train Number:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{seat? seat : ""}</h5>
                                </Col>
                            </Row>
                            <Row className="R2" >
                                <Col sm={12}>
                                    <h5>Departure Time:</h5>
                                </Col>
                                <Col sm={12}>
                                    <h5 >{`${date_time[4]} PM`}</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="R3" xs={3}>
                            <h1>V.I.P</h1>
                        </Col>

                        <Col sm={4}>
                            <Row>
                                <Col sm={6}>
                                    <h5>From: </h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{ticket_no? ticket_no : ""}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h5>To:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5>{stadium? stadium :""}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <h5>Price:</h5>
                                </Col>
                                <Col sm={6}>
                                    <h5><strong>{`$${price?price:""}.00`}</strong></h5>
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
