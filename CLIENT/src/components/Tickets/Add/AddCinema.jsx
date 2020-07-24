import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
// import "../../../public/styles/scss/Tickets/AddTicket.scss"
export default class AddCinema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinema_name: null,
            time: null,
            movie_name: null,
            date: null,
            address: null,
            price: null,
            ticket_type: null
    
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        let {
            date,
            time,
            seats,
            cinema_name,
            movie_name,
            address,
            price,
            ticket_type
        } = this.state;
        const date_time = `${date} ${time}`;
        this.props.onSubmit({date_time,seats, movie_name, address, cinema_name, price, ticket_type});
    };
    render() {

        return (
                <Form className="addTicket">
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="cinema_name" placeholder="Cinema Name" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="text" name="movie_name" placeholder="Movie Name" onChange={this.handleChange}/>
                        </Col>

                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="address" placeholder="Address" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="date" name="date" placeholder="Date" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="time" name="time" placeholder="Time" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="ticket_type" placeholder="Ticket type" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name="price" type="number" placeholder="Price" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                    <Col>
                        <Form.Control type="number" name="seats" placeholder="Seats" onChange={this.handleChange}/>
                    </Col>
                </Form.Row>
                    <button className="submit1" onClick={this.onSubmit}>Add Cinema</button>
                </Form>
            
        );
    }
}
