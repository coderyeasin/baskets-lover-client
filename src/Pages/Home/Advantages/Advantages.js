import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';

const Advantages = () => {
    return (
        <div style={{background:'#fdf2ec'}}>
            <Container className="my-5 py-3">
                <h3 className="text-center fs-1 mb-3 text-uppercase" style={{color:'#a17154'}}>Bask Advantages </h3>
                <Row className="align-items-center">
                    <div className="col-md-7">
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
                    </div>
                    <div className="col-md-5">
                        <Card className="mb-3 border-0 shadow text-light" style={{ borderRadius:'20px', background:'#a17154' }}>
                        
                        <Card.Body>
                            <Card.Title>Our Facilities</Card.Title>
                            <Card.Text className="list-unstyled">
                            <li> Free Delivery </li>
                            <li> No Hidden Charge</li>
                            <li> Resistant</li>
                            <li> Easy care</li>
                            <li> Light but strong</li>
                            <li> Affordable</li>
                            <li> Artistic matting</li>
                            <li> Multi Functional</li>
                            <li> Unique Baskets</li>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Advantages;