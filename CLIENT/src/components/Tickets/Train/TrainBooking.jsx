import React, { Component } from "react";
import { Row, Form, Col, Badge } from 'react-bootstrap'
import TicketService from "../../../services/tickets/ticket"
import "../../../public/styles/scss/Tickets/TrainDet.scss";


export default class TrainBooking extends Component {

	state = {
		trains: null
	};
	componentDidMount() {
		TicketService.getTrainTickets().then(trains => {
			this.setState({
				trains
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

	addTicket = e => {
		e.preventDefault();
	}

	render() {

		return (
			<div className="booking">
				<div className="booking__head"><i className="fas fa-train"></i>Book Train Tickets</div>
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
				{/* <Row>

				
				<Col className="cart2">
				<Form.Label>Quantity:</Form.Label>
						<Form.Group controlId="formGridState">
							<Form.Control as="select" onChange={this.handleChange}>
								<option value='Cinema'>1</option>
								<option value='Match'>2</option>
								<option value='Bus'>3</option>
								<option value='Cinema'>4</option>
								<option value='Cinema'>5</option>
								<option value='Cinema'>6</option>
								<option value='Cinema'>7</option>
								<option value='Cinema'>8</option>

							</Form.Control>
						</Form.Group>
				</Col>
				</Row> */}

				<Row className="ta">
					<Row className="v">
						<Col>
							<p>Departure from Cairo</p>
							<h4>5:00 <span className="sp">AM</span></h4>
							<Badge variant="info">Economy</Badge>
						</Col>
						<Col>
							<p>Arrive to Hurghada</p>
							<h4 className="sp">9:00 <span className="sp">AM</span></h4>
						</Col>
						<Col md={2} style={{ display: "flex", alignItems: "center" }}>
							<button className="submit1" onClick={this.addTicket}>CHOOSE TRIP</button>
						</Col>
						<Col>
							<h4><strong>$80.00</strong></h4>
						</Col>
					</Row>
					<Row className="v">
						<Col>
							<p>Departure from Cairo</p>
							<h4>10:00 <span className="sp">AM</span></h4>
							<Badge variant="info">Economy</Badge>
						</Col>
						<Col>
							<p>Arrive to Alexandria  </p>
							<h4 className="sp">12:30 <span className="sp">AM</span></h4>
						</Col>
						<Col md={2} style={{ display: "flex", alignItems: "center" }}>
							<button className="submit1" onClick={this.addTicket}>CHOOSE TRIP</button>
						</Col>
						<Col>
							<h4><strong>$200.00</strong></h4>
						</Col>
					</Row>
				</Row>
			</div>
		);
	}
}
