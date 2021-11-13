import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './Banner.css';
import slide from '../../../images/cover.jpg'
import first from '../../../images/slider/slider-1.jpg'
import second from '../../../images/slider/slider-2.jpg'
import third from '../../../images/slider/slider-3.jpg'

// import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const Banner = () => {

    return (
        <div className="cover">
            
            <Container className="py-5">
                <Row className="align-items-center mb-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <Row className="align-items-center">
                        <h2 className="text-center" style={{color:'#fdf2ec', fontSize:'42px'}}>Baskets Makes Lifer Easier</h2>
                            <div className="col-md-6">
                               
                                <Rotate top left>
                                        
                                <Card className="fancy_cards" style={{textAlign:'justify'}}>
                            <Card.Img variant="top" height="320px" src={slide} className="position-relative" />
                            <Card.Body  className="position-absolute top-0"  >
                                <Card.Title className="text-center">Make Attractive</Card.Title>
                                <Card.Text >
                                Baskets are an easy storage solution you can use in every room of the house. These handy organizers come in a variety of styles, sizes, and materials so you can effortlessly integrate storage into your decor. Try these storage basket ideas to stylishly organize any space.
                                </Card.Text>
                            </Card.Body>
                                </Card>
                            </Rotate>

                            </div>
                            <div className="col-md-6">
                                <h5 className="text-uppercase" style={{color:'#474340', textAlign:'right'}}>Unique Baskets</h5>
                                <small style={{color:'#fdf2ec', textAlign:'right'}}>We build unique ideas <br /> baskets for all users in the world.</small>
                                <Rotate top right>
                                <Card  className="fancy_cards" style={{textAlign:'justify'}}>
                                <Card.Img variant="top" height="320px" src={slide} className="position-relative" />
                                <Card.Body  className="position-absolute top-0"  >
                                    <Card.Title className="text-center">Interior Design</Card.Title>
                                    <Card.Text>
                                    Open shelves aren't just a pretty spot to they can also ensure often-used items are easy to access. Line up identical baskets on a shelf to organize reading materials, TV remotes, and other small items. Employ large wicker storage baskets on a lower shelf to stash extra throw blankets.
                                    </Card.Text>
                                </Card.Body>
                                    </Card>
                                </Rotate>

                             
                            </div>
                        </Row>
                    </div>


                    <div className="col-md-4">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                    className="d-block w-100 img-fluid"
                                    style={{borderRadius:'5px'}}
                            src={first}
                            alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                    className="d-block w-100"
                                    style={{borderRadius:'5px'}}
                            src={second}
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                    className="d-block w-100"
                                    style={{borderRadius:'5px'}}
                            src={third}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;