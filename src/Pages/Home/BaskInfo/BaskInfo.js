import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../../images/cycle.png'
import Zoom from 'react-reveal/Zoom';
import { FaArrowRight } from 'react-icons/fa';

const BaskInfo = () => {
    return (
        <div  style={{background:'#fdf2ec'}}>
             <Container>
            <Row className="align-items-center py-5">
                <div className="col-md-6 order-1" style={{textAlign:'left'}}>
                    <h3 className="text-uppercase" style={{color:'#a17154'}}>Basket Lover is a Best</h3>
                    <Zoom>
                    <p><FaArrowRight style={{color: '#a17154'}} /> The in-basket technique is fairly easy to construct because its raw materials are current problems and paperwork.</p>
                    <p><FaArrowRight style={{color: '#a17154'}} />The in-basket is a flexible instrument.</p>
                    <p><FaArrowRight style={{color: '#a17154'}} />When it is properly developed, effective utilization is to some extent built in because the users are the experts.</p>
                    <p><FaArrowRight style={{color: '#a17154'}} /> The same in-basket can be used to focus on the particular solutions achieved, the method of attack, or the consequences of the actions. </p>
                    <p> <FaArrowRight style={{color: '#a17154'}} />The design of the in-basket permits concentration on limited aspects or balanced coverage of a broad, complex problem.</p>
                    </Zoom>
                </div>
                <div className="col-md-6 order-0">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </Row>
        </Container>
       </div>
    );
};

export default BaskInfo;