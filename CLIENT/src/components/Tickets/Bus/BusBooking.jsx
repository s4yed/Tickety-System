import React, { Component } from "react";
import { Row, Form, Badge, Col } from 'react-bootstrap'
import TicketService from "../../../services/tickets/ticket"
import "../../../public/styles/scss/SinglePage/Bus.scss";

export default class Bus extends Component {
	state = {
		buses: null
	};
	componentDidMount() {
		TicketService.getBusTickets().then(buses => {
			this.setState({
				buses
			});
		});
	}
	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.value]: e.target.value
		});
		console.log(this.state.selectedItem, e.target.value)
	};

	onBook = e => {
		e.preventDefault();

	}
	render() {

		return (
			<div className="booking">
				<div className="booking__head"><i className="fas fa-train"></i>Book Bus Tickets</div>
				<Row>
					<Col>
						<Form.Label>From:</Form.Label>
						<Form.Group controlId="formGridState">
							<Form.Control as="select" onChange={this.handleChange}>
								<option value='cinema'>Cairo</option>
								<option value='match'>Alexandria</option>
								<option value='bus'>Aswan</option>
							</Form.Control>
						</Form.Group>
					</Col>

					<Col>
						<Form.Label>To:</Form.Label>
						<Form.Group controlId="formGridState">
							<Form.Control as="select" onChange={this.handleChange}>
								<option value='Cinema'>Cairo</option>
								<option value='Match'>Alexandria</option>
								<option value='Bus'>Aswan</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col>
						<Form.Label>Departure Date:</Form.Label>
						<Form.Control name="date" type="date" placeholder="Date" />
					</Col>
					<Col>
						<Form.Label >Departure Time:</Form.Label>
						<Form.Control name="time" type="time" placeholder="Time" />
					</Col>
					<Col>
						<Form.Label>Ticket Type:</Form.Label>
						<Form.Group controlId="formGridState">
							<Form.Control as="select" onChange={this.handleChange}>
								<option value='Cinema'>Economy</option>
								<option value='Match'>Vip</option>
								<option value='Bus'>Sleeper</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Row className="ta">
					<Row className="v">
						<Col>
							<p>Departure from Cairo</p>
							<h4>8:00 <span className="sp">AM</span></h4>
							<Badge variant="info">Economy</Badge>
						</Col>
						<Col>
							<p>Arrive to Hurghada</p>
							<h4 className="sp">10:30 <span className="sp">AM</span></h4>
						</Col>
						<Col md={2} style={{ display: "flex", alignItems: "center" }}>
							<button className="submit1" onClick={this.onBook}>CHOOSE TRIP</button>
						</Col>
						<Col>
							<h4><strong>$180.00</strong></h4>
						</Col>
					</Row>
					<Row className="v">
						<Col>
							<p>Departure from Cairo</p>
							<h4>8:00 <span className="sp">AM</span></h4>
							<Badge variant="info">Economy</Badge>
						</Col>
						<Col>
							<p>Arrive to Alex</p>
							<h4 className="sp">10:30 <span className="sp">AM</span></h4>
						</Col>
						<Col md={2} style={{ display: "flex", alignItems: "center" }}>
							<button className="submit1" onClick={this.onBook}>CHOOSE TRIP</button>
						</Col>
						<Col>
							<h4><strong>$900.00</strong></h4>
						</Col>
					</Row>
				</Row>
			</div>
		);
	}
}
