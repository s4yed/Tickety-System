import React, { Component } from "react";
import { Row, Form, Table, Col, Button } from 'react-bootstrap'
import logo from './movie.jpg'
import Image from 'react-bootstrap/Image'
import TicketService from "../../../services/tickets/ticket"
import "../../../public/styles/scss/Tickets/CinemaBooking.scss";


export default class CinemaBooking extends Component {
	state = {
		cinemas: null
	};
	componentDidMount() {
		TicketService.getCinemaTickets().then(cinemas => {
			this.setState({
				cinemas
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
	addTicket = (ticket_id) => {
		console.log(ticket_id)
		TicketService.bookTicket({ ticket_id }).then(status => {
			if (!status) return console.log(status);
			console.log(status);
		});
	}
	render() {
		const cinemas = this.state.cinemas ? this.state.cinemas : [];
		return (
			<div className="booking">
				<div className="booking__head"><i className="fas fa-video"></i>Book Cinema Tickets</div>
				<Row>
					<Col>
						<Form.Label>Now Showing:</Form.Label>
						<Form.Group controlId="formGridState">
							<Form.Control as="select" onChange={this.handleChange}>
								<option value='Movie1'>The Hobbit</option>
								<option value='Movie2'>The lord of the rings</option>
								<option value='Movie3'>The King</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col>
						<Image src={logo} fluid />
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
								<option value='type1'>Economy</option>
								<option value='type2'>Vip</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Table striped bordered>
					<thead>
						<tr>
							<th>Ticket Number</th>
							<th>Ticket Type</th>
							<th>Movie Name</th>
							<th>Movie Date</th>
							<th>Movie Time</th>
							<th>Seat Number</th>
							<th>Hall Number</th>
							<th>Price</th>
							<th>Book</th>

						</tr>
					</thead>
					<tbody>
						{
							cinemas.length > 0 ?
								cinemas.map(val => {
									return (
										<tr key={val._id}>
											<td>{val.ticket_no}</td>
											<td>{val.ticket_type}</td>
											<td>{val.movie_name}</td>
											<td>{val.date_time.split(" ")[0]}</td>
											<td>{val.date_time.split(" ")[1]}</td>
											<td>2</td>
											<td>1</td>
											<td>{`$${val.price}`}</td>
											<td><button className="submit1" onClick={this.addTicket(val._id)}>Book</button></td>
										</tr>
									);
								}) : null
						}
					</tbody>
				</Table>
			</div>
		);
	}
}
