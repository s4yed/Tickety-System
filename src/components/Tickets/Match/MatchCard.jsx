import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
export default class MatchCard extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    };
    onBuy = (e) => {
        this.props.onBuy(this.props.match.category);
    };
    render() {
        const { stadium, home_team, away_team } = this.props.match;
        return (
            <Card>
                <Card.Img variant="top" src="real-madrid-vs-atletico.jpg" />
                <Card.Body>
                    <Card.Title>{`${home_team}`}</Card.Title>
                    <Card.Title>vs</Card.Title>
                    <Card.Title>{`${away_team}`}</Card.Title>
                    <Card.Text>
                        {stadium}
                    </Card.Text>
                    <Button className="buy" onClick={this.onBuy}>Book</Button>
                </Card.Body>
            </Card>

        );
    }
}
