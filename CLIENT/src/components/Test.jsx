import React, { Component } from "react";
import { Carousel,Button } from "react-bootstrap";
import PropTypes from "prop-types";
import match from '../public/images/jbojldmkv4fsnxsi9snc.jpg'
export default class Test extends Component {
    static propTypes = {
        msg: PropTypes.string.isRequired
    };
    
    
    render() {
        
        return (
           
                
            <Carousel>
            <Carousel.Item>
            
              <img
                className="d-block w-100"
                src={match}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={match}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={match}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
        );
    }
}
