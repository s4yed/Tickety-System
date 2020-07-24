import React, { Component, Fragment, Suspense, lazy } from "react";
import { Col, Row } from "react-bootstrap";
import Search from "./Search";
import Hero from "./Hero";
import Loading from "../Loading";
import Ticket from "../../services/tickets/ticket";
const Card = lazy(() => import("../Tickets/Match/MatchCard"));

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            items: []
        };
    }
    componentWillMount() {
        Ticket.getTopTickets().then(items => {
            this.setState({
                items
            });
        });
    }
    onSearch = (name) => {
        console.log(name);
    };
    onBuy = async (id) => {

        this.props.history.push(`/tickets/match-tickets`);
    };
    render() {
        const { items } = this.state;
        console.log(items)
        return (
            <Fragment>
                <Row>
                    <Hero />
                    <Search onSearch={this.onSearch} />
                </Row>
                <Row className="prods">
                    <Suspense fallback={<Loading className="loading" />}>
                        {
                            items.map((val) => {
                                return (
                                    <Col sm={3} key={val._id}>
                                        <Card onBuy={this.onBuy} match={val} />
                                    </Col>
                                );
                            })
                        }
                    </Suspense>
                </Row>

            </Fragment>
        );
    }
}
