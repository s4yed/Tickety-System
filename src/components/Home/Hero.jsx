import React, { Component } from 'react'
import { Button } from "react-bootstrap";
export class Hero extends Component {
    render() {
        return (
            <div className='main hero-wrap img' >
                <div className="overlay"></div>
                <div className="container-fluid px-0">
                    <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-center">
                        <div className="col-md-8 text-center d-flex align-items-center ftco-animate js-fullheight">
                            <div className="text mt-6">
                                <span className="subheading">Ticket Reservation</span>
                                <h1 className="mb-3">Discover the world with us</h1>
                                <p>Get your ticket whether your Location. Don't miss more Events</p>
                                <a href="/tickets">
                                    <Button variant="outline-light" size="lg">Get Your Ticket Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
