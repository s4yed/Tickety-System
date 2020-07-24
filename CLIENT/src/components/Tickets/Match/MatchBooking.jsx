import React, { Component } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import TicketService from "../../../services/tickets/ticket"
import "../../../public/styles/scss/SinglePage/Match.scss"
import Photo from "../../../public/images/Match_Ticket_Prices_Map-2_large.jpg"

class MatchBooking extends Component {
    state = {
		matches: null
	};
	componentDidMount() {
		TicketService.getMatchTickets().then(matches => {
			this.setState({
				matches
			});
		});
	}

    render() {

        return (
            <div className="booking">
                <div className="booking__head"><i className="fas fa-train"></i>Book Bus Tickets</div>
                <Row className="justify-content-md-center" id="match">
                </Row>
                <Row className="justify-content-md-center">
                    <Col><h2>Alahly</h2></Col>
                    <h2>VS</h2>
                    <Col><h2>Zamalk</h2></Col>
                </Row>

                <Row className="justify-content-md-center" id="match">
                </Row>

                <Row className="colorSeat">
                    <Col>
                        <Form.Group as={Col} controlId="formGridState" className="select">
                            <Form.Control as="select" onChange={this.handleChange} >
                                <option value='Red'>Choose seat from photo.....</option>
                                <option value='Red'>A - Red</option>
                                <option value='Silver'>B - Silver</option>
                                <option value='Blue'>C - Blue</option>
                                <option value='Green'>D - Green</option>
                                <option value='Orange'>E - Orange</option>
                                <option value='Black'>G - Black</option>
                                <option value='Pink'>H - Pink</option>
                                <option value='Purple'>I - Purple</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>Price : 100$</Col>
                    <Col><button className="submit1">Buy</button></Col>
                </Row>


                <Row className="justify-content-md-center">
                    <Col><Image id="PhotoMatch" src={Photo} /></Col>
                </Row>

            </div>
        );
    }
}
export default MatchBooking;