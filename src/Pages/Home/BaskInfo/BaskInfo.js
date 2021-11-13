import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../../images/cycle.png'
import Zoom from 'react-reveal/Zoom';

const BaskInfo = () => {
    return (
        <div  style={{background:'#fdf2ec'}}>
             <Container>
            <Row className="align-items-center py-3">
                <div className="col-md-6 order-1" style={{textAlign:'left'}}>
                    <h3 className="text-uppercase" style={{color:'#a17154'}}>Basket Lover is Best</h3>
                    <Zoom>
                    * The in-basket technique is fairly easy to construct because its raw materials are current problems and paperwork. <br />
                    * The in-basket is a flexible instrument. <br />
                    * When it is properly developed, effective utilization is to some extent built in because the users are the experts. <br />
                    * The same in-basket can be used to focus on the particular solutions achieved, the method of attack, or the consequences of the actions. <br />
                    * The design of the in-basket permits concentration on limited aspects or balanced coverage of a broad, complex problem.
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