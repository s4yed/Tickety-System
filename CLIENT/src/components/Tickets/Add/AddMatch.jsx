import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
// import "../../../public/styles/scss/Tickets/AddTicket.scss"
export default class AddMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home_team: null,
            away_team: null,
            date: null,
            time: null,
            stadium: null,
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
            home_team,
            away_team,
            seats,
            stadium,
            price,
            ticket_type
        } = this.state;
        const date_time = `${date} ${time}`;
        console.log(price)
        this.props.onSubmit({date_time,seats,away_team, home_team, stadium, price, ticket_type});
    };
    render() {

        return (
           
                <Form className="addTicket">
                    <Form.Row>
                        <Col>
                            <Form.Control name="home_team" type="text" placeholder="Home Team" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name="away_team" type="text" placeholder="Away Team" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control name="stadium" type="text" placeholder="Stadium" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name="ticket_type" type="text" placeholder="Ticket type" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control name="date" type="date" placeholder="Date" onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name="time" type="time" placeholder="Time" onChange={this.handleChange}/>
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

                    <button className="submit1" onClick={this.onSubmit}>Add Match</button>
                </Form>
            
        );
    }
}
