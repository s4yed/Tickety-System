import React, { Component } from 'react'
// import Home from "./Home";
import { Button, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }
    onChange = (e) => {
        this.setState({
            query: e.target.value
        });
    };
    
    onSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    };
    render() {
        return (
                <Row className="d-flex align-items-center justify-content-center ftco-domain">
                    <Col style={{ display: "contents" }}>
                        <Form action="#" className="domain-form d-flex" onSubmit={this.onSearch}>
                            <div className="form-group domain-name">
                                <InputGroup >
                                    <FormControl
                                        placeholder="matches, movies, ..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={this.onChange}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="secondary" onClick={this.onSearch}>
                                            <i className="fas fa-search"></i>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Form>
                    </Col>
                </Row>
        )
    }
}

export default Search
