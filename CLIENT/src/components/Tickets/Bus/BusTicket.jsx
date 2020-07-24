import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/styles/scss/Tickets/Bus.scss";
export default class BusTicket extends Component {
    render() {

    return (
        <Container>
            <div className="abc">
                <Row id="header">
                    <Col md={3}><h2 id="header-name">Tickety</h2></Col>
                </Row>
                <Row id="trip" className="justify-content-md-center">
                    <Row id="from-to" className="justify-content-md-center" >
                        <Col md="auto"><label>From  </label> <h3>Cairo</h3></Col>
                        <Col md="auto"><label>To  </label> <h3>Alex</h3></Col>
                    </Row>
                    <Row id="contain" className="justify-content-md-center">
                        <Col>
                            <Row className="justify-content-md-center"><label>Seat : </label> <div> 24</div></Row>
                            <Row className="justify-content-md-center"><label>Day : </label> <div> Saturday, October 3, 2020</div></Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-md-center"><label>Time : </label> <div> 8:00 AM</div></Row>
                            <Row className="justify-content-md-center"><label>Expected arrival time : </label> <div> 10:25 AM</div></Row>
                        </Col>
                    </Row>
                    <Row id="type" className="justify-content-md-center">
                        <h1>V.I.P</h1>
                    </Row>
                    <Row>
                        <Col>
                            <p>wish you a happy journey</p>
                        </Col>
                    </Row>
                </Row>
                <Row id="footer">
                    <Col><p>tickety.com</p></Col>
                </Row>
            </div>
        </Container>
    );
    }
}
