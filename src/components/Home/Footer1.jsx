import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "../../public/styles/scss/Home/Footer.scss"

export default class Footer1 extends Component {
    render() {
        return (
            <footer className="foot p-4">
                <div className="text-md-left">
                    <div className="row justify-content-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="mb-4 font-weight-bold">Company name</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit.
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="mb-4 font-weight-bold">Products</h5>
                            <p>
                                <a href="#!">Buses</a>
                            </p>
                            <p>
                                <a href="#!">Trains</a>
                            </p>
                            <p>
                                <a href="#!">Cinemas</a>
                            </p>
                            <p>
                                <a href="#!">Football Matches</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="mb-4 font-weight-bold">Useful links</h5>
                            <p>
                                <a href="/login">Your Account</a>
                            </p>
                            <p>
                                <a href="/login">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="/login">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="/login">Help</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="mb-4 font-weight-bold">Contact</h5>
                            <p>
                                <i className="fa fa-home"></i> New York, NY 10012, US</p>
                            <p>
                                <span className="glyphicon glyphicon-envelope"></span> info@gmail.com</p>
                            <p>
                                <i className="fa fa-phone" aria-hidden="true"></i> + 01 234 567 88</p>
                        </div>
                    </div>

                    <hr />
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-2 col-lg-3 text-center">
                            <strong> tickety.com </strong>
                            © 2018 Copyright
                        </div>
                        <div className="col-md-4 col-lg-3 ml-lg-0 text-center">
                            <div>
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="/login"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/login" ><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/login" ><i className="fab fa-google"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/login"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}