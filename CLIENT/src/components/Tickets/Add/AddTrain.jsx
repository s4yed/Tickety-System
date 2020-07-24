import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
// import "../../../public/styles/scss/AddTicket.scss"
export default class AddTrain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null,
            date: null,
            time: null,
            train_no: null,
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
            train_no,
            from,
            to,
            price,
            seats,
            ticket_type
        } = this.state;
        const date_time = `${date} ${time}`;
        this.props.onSubmit({date_time, seats,train_no, to, from, price, ticket_type});
    };

    render() {
        return (
                <Form className="addTicket">
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="from" placeholder="From" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="text" name="to" placeholder="To" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control name="date"type="date" placeholder="Date" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name="time" type="time" placeholder="Time" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="ticket_type" placeholder="Ticket Type" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="number" name="train_no" placeholder="Train Number" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type="number" name="price" placeholder="Price" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="number" name="seats" placeholder="Seats" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <button className="submit1" onClick={this.onSubmit}>Add Train</button>
                </Form>
            
        );
    }
}
