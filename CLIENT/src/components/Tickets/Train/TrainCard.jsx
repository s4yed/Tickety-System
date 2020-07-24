import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
export default class TrainCard extends Component {
    static propTypes = {
        train: PropTypes.object.isRequired,
    };
    onBuy = (e) => {
        this.props.onBuy(this.props.train.category);
    };
    render() {
        const { from, to } = this.props.train;
        return (
            <Card>
                <Card.Img variant="top" src="real-madrid-vs-atletico.jpg" />
                <Card.Body>
                    <Card.Title>From :{`${from}`}</Card.Title>
                    <Card.Title>To :{`${to}`}</Card.Title>
                    <Button className="buy" onClick={this.onBuy}>Book</Button>
                </Card.Body>
            </Card>

        );
    }
}
