
import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import AddMatch from "./AddMatch";
import AddCinema from "./AddCinema";
import AddTrain from "./AddTrain";
import AddBus from "./AddBus";
import "../../../public/styles/scss/Tickets/AddTicket.scss";
import TicketService from "../../../services/tickets/ticket";
class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Bus'
        };
    }
    handleChange = (e) => {
        this.setState({
            category: e.target.value
        });
    };

    onSubmit = data => {
        let {category} = this.state;
        TicketService.addTicket({category, ...data}).then(data => {
            console.log(data)
        });
    };
    render() {
        return (
            <div className="profile-content">
                <div className="head">
                    <h5>Add Ticket</h5>
                </div>
                <Col className="justify-content-md-center">
                    <Form.Group as={Col} controlId="formGridState" className="select">
                        <Form.Control as="select" onChange={this.handleChange} >
                            <option value='Cinema'>Cinema</option>
                            <option value='Match'>Match</option>
                            <option value='Bus'>Bus</option>
                            <option value='Train'>Train</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {
                    {
                        "Bus": <AddBus onSubmit={this.onSubmit}/>,
                        "Train": <AddTrain onSubmit={this.onSubmit}/>,
                        "Cinema": <AddCinema onSubmit={this.onSubmit}/>,
                        "Match": <AddMatch onSubmit={this.onSubmit}/>
                    }[this.state.category]
                }
            </div>
        );
    }
}
export default AddTicket;
