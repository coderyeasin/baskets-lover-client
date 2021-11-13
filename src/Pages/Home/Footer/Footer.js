import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const bgFooter = {
        color: '#fff',
        background: '#322822'
    }
    return (
        <div style={bgFooter}>
            <Container className="w-75 mx-auto">
                <Row>
                    <div className="col-md-4 py-3">
                        <h4 className="my-3"> Our Location </h4>
                        <div >
                            
                            <p > <FontAwesomeIcon icon={faLocationArrow} /> Address: 500 Hennessy Road  <br />
                              Causeway Bay, Hong Kong </p> 
                            <span > <FontAwesomeIcon icon={faPhone} /> +1 23456789  </span> <br />
                            <span > <FontAwesomeIcon icon={faEnvelope} /> contact@yourdomain.com  </span> <br />
                             <br />
                       </div>
                    </div>
                    <div className="col-md-4 py-3" >
                        <Row style={{justifyContent:'space-around'}}>
                            <div className="col-md-6">
                        <h4 className="my-3"> Best Baskets </h4>
                                <nav>
                                    <ul style={{listStyle:'none'}}>
                                        <li>Top Baskets</li>
                                        <li>Best Baskets</li>
                                        <li>Home Baskets</li>
                                        <li>Design Baskets</li>
                                        <li>Simple Baskets</li>
                                        <li>Roof Baskets</li>
                                        <li>Kitchen Baskets</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-6">
                            <h4 className="my-3"> Popular Links </h4>
                                <nav>
                                    <ul  style={{listStyle:'none'}}>
                                        <li>Features</li>
                                        <li>About us</li>
                                        <li>Products</li>
                                        <li>Baskets</li>
                                        <li>Purchase</li>
                                        <li>Contact us</li>
                                        <li>Privacy Policy</li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </Row>
                    </div>
                    <div className="col-md-4 py-3" >
                        <h4 className="my-3"> Follow us </h4>
                        <div >                          
                            <span > Facebook  <FontAwesomeIcon icon={faCoffee} /> </span> <br />
                            <span > Google  <FontAwesomeIcon icon={faCoffee} /> </span> <br />
                            <span > Youtube <FontAwesomeIcon icon={faCoffee} />  </span> <br />
                            <span > Instagram <FontAwesomeIcon icon={faCoffee} />  </span> <br />
                            <span >  Twitter <FontAwesomeIcon icon={faCoffee} /> </span> <br />
                             <br />
                       </div>
                    </div>
                    <hr className="w-75 mx-auto" />
                    <div className="d-flex" style={{justifyContent:'space-around'}}>
                        <p> Copyright @ All rights reserved</p>
                        <div>
                        <p>Accept Payments: </p>
                        </div>
                    </div>
                </Row>
             
            </Container>
        </div>
    );
};

export default Footer;