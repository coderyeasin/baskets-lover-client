import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaLocationArrow, FaPhone, FaGoogle, FaInstagram, FaCcAmex,FaCcVisa,FaStripe,FaCcMastercard, FaCcDiscover  } from 'react-icons/fa';


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
                            
                            <p > <FaLocationArrow /> Address: 500 Hennessy Road  <br />
                              Causeway Bay, Hong Kong </p> 
                            <span > <FaPhone /> +1 23456789  </span> <br />
                            <span > <FaEnvelope /> contact@yourdomain.com  </span> <br />
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
                            <span >   <FaGoogle /> Google      </span> <br />
                            <span >   <FaYoutube /> Youtube      </span> <br />
                            <span >   <FaInstagram /> Instagram     </span> <br />
                            <span >   <FaFacebook /> Facebook      </span> <br />
                            <span >   <FaTwitter /> Twitter      </span> <br />
                             <br />
                       </div>
                    </div>
                    <hr className="w-75 mx-auto" />
                    <div className="d-flex" style={{justifyContent:'space-around'}}>
                        <p> Copyrights &copy; All rights reserved</p>
                        <div>
                        <p>Accept Payments: <FaCcAmex /> <FaCcVisa /> <FaStripe /> <FaCcMastercard /> <FaCcDiscover /> </p>
                        </div>
                    </div>
                </Row>
             
            </Container>
        </div>
    );
};

export default Footer;