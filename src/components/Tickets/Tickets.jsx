import React, { Component, Fragment, Suspense, lazy } from 'react';
import Search from "../Home/Search";
import Ticket from "../../services/tickets/ticket";
import { Row, Col, Button } from "react-bootstrap";
import CinemaCard from './Cinema/CinemaCard';
import BusCard from './Bus/BusCard';
import TrainCard from './Train/TrainCard';
import MatchCard from "./Match/MatchCard";
import Loading from "../Loading";
import "../../public/styles/scss/Tickets/Ticket.scss"

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: null,
            results: [],
            visiable: 4
        };
    }

    async componentDidMount() {
        const tickets = await Ticket.getAllTickets(1, 50);
        this.setState({
            tickets
        });
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get("q");
        this.onSearch(query ? query : "");
    }
    onBuy = (category) => {
        switch (category) {
            case "BUS":
                this.props.history.push(`/tickets/bus-tickets`);
                break;
            case "MATCH":
                this.props.history.push(`/tickets/match-tickets`);
                break;
            case "TRAIN":
                this.props.history.push(`/tickets/train-tickets`);
                break;
            case "CINEMA":
                this.props.history.push(`/tickets/cinema-tickets`);
                break;
            default:
                this.props.history.push(`/tickets`);
        }
    };

    onSearch = (query) => {
        const q = query.toLowerCase().trim();
        const { tickets } = this.state;
        if (query) {
            let results;
            switch (q) {
                case "bus":
                    results = tickets.filter(val => {
                        return val.category === "BUS"
                    });
                    break;
                case "cinema":
                    results = tickets.filter(val => {
                        return val.category === "CINEMA"
                    });
                    break;
                case "match":
                    results = tickets.filter(val => {
                        return val.category === "MATCH"
                    });
                    break;
                case "train":
                    results = tickets.filter(val => {
                        return val.category === "TRAIN"
                    });
                    break;
                default:
                    results = [];
            }
            this.setState({
                results
            });
            this.props.history.push(`/tickets?q=${query}`);
        }
    };
    onViewMore = () => {
        this.setState((old) => {
            return { visiable: old.visiable + 4 }
        })
    };
    render() {
        const { results } = this.state;
        return (
            <Fragment>
                <Search onSearch={this.onSearch} />
                <Row className="tkts">
                    <Suspense fallback={<Loading className="loading" />}>
                        {
                            results.length > 0 ?
                                results.slice(0, this.state.visiable).map((val) => {
                                    return (
                                        <Col sm={3} key={val._id}>
                                            {
                                                {
                                                    "BUS": <BusCard onBuy={this.onBuy} bus={val} />,
                                                    "MATCH": <MatchCard onBuy={this.onBuy} match={val} />,
                                                    "TRAIN": <TrainCard onBuy={this.onBuy} train={val} />,
                                                    "CINEMA": <CinemaCard onBuy={this.onBuy} cinema={val} />
                                                }[val.category]
                                            }
                                        </Col>
                                    );
                                }) : <p style={{ width: "100%", color: "#c7c7c7", fontSize: "1.5em" }}><strong>No available tickets.</strong></p>
                        }
                    </Suspense>
                </Row>

                <Row className="justify-content-md-center p-4">
                    {
                        this.state.visiable < this.state.results.length &&
                        <Button id="view-more" onClick={this.onViewMore}>View more</Button>
                    }
                </Row>
            </Fragment>
        );
    }
}

export default Tickets;