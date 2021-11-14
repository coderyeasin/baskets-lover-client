import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Rotate from 'react-reveal/Rotate';



const Advantages = () => {
    return (
        <div style={{background:'#fdf2ec'}}>
            <Container className="my-5 py-5">
                <h3 className="text-center fs-1 mb-5 text-uppercase" style={{color:'#a17154'}}>Bask Advantages </h3>
                <Row className="align-items-center">
                    <div className="col-md-7">
                    <Rotate top left>
                    <Card className="mb-3 border-0 shadow text-light" style={{ borderRadius:'20px', background:'#a17154' }}>
                    
                        <Card.Body>
                            <Card.Title>Environmentally friendly</Card.Title>
                            <Card.Text>
                            How to harvest rattan usually only rely on some simple harvesting tools and easy to move from one place to another. This is to be number one from advantages of rattan basket.
                            </Card.Text>
                        </Card.Body>
                        </Card>

                    <Card className="mb-3 border-0 shadow text-light" style={{ borderRadius:'20px', background:'#a17154' }}>                                
                        <Card.Body>
                            <Card.Title>Flexible</Card.Title>
                            <Card.Text>
                            One of the most superior properties of rattan is its flexibility. If you put a lot of items at once into the basket, the rattan basket is not only able to load many objects, but also will not lose its original shape. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Rotate>
                    </div>
                    <div className="col-md-5">
                    <Rotate top right>
                        <Card className="mb-3 border-0 shadow text-light" style={{ 
                                borderRadius: '20px', background: '#a17154'
                            }}>

                        <Card.Body>
                            <Card.Title className="fs-3 pt-3">Ensure Qualities</Card.Title>
                                    <Card.Text className="list-unstyled">
                                        <p >We're looking at first customer satisfaction</p>
                                        
                            <li> INTRICATE, HAND-WOVEN DESIGNS </li>
                            <li>  STRONG AND DURABLE CONSTRUCTION</li>
                            <li>FUNCTIONAL DESIGN COMBINED WITH BEAUTY</li>
                            <li> REMOVABLE, WASHABLE LINERS</li>
                            <li> STURDY POLE OR WOOD HANDLES</li>
                            <li> BEAUTIFUL DECORATIVE ACCENTS</li>
                            <li> 100% HIGHER-GRADE RATTAN</li>

                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Rotate>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Advantages;