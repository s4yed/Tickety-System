import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
export default class CinemaCard extends Component {
    static propTypes = {
        cinema: PropTypes.object.isRequired,
    };
    onBuy = (e) => {
        this.props.onBuy(this.props.cinema.category);
    };
    render() {
        const { movie_name, cinema_name, date_time } = this.props.cinema;
        return (
            <Card>
                <Card.Img variant="top" src="real-madrid-vs-atletico.jpg" />
                <Card.Body>
                    <Card.Title>{`${movie_name}`}</Card.Title>
                    <Card.Title>{`${cinema_name}`}</Card.Title>
                    <Card.Title>{`${date_time}`}</Card.Title>
                    <Button className="buy" onClick={this.onBuy}>Book</Button>
                </Card.Body>
            </Card>

        );
    }
}
