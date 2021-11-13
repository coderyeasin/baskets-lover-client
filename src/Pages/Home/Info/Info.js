import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import img from '../../../images/cover.jpg'
import gift from '../../../images/slider/fancy-baskets2.jpeg'



const Info = () => {

    const covers = {
        background: `url(${img})`,
        // borderRadius:'20px'
    }

    return (
        <Container className="mb-5" >
          
                <div  style={{marginTop:'-50px'}}>
                        <Card className="w-75 shadow-lg mx-auto" style={covers}>
                            <Card.Body>
                                <Card.Title> <h3 className="my-3 text-uppercase" style={{color:'#a17154'}}>Why Baskets Lover</h3> </Card.Title>
                                <Card.Text>
                                        <p className="w-75 mx-auto" style={{textAlign:'justify'}}>
                                    Make the most of your entryway with baskets that easily slip under a bench or on an upper shelf.  for shoes by tucking a couple of large, sturdy baskets on the floor near the door. On a high shelf, use baskets to sort items you use less frequently.</p>
                                </Card.Text>
                       
                        

                        <Row className="align-items-center mx-auto" style={{textAlign:'justify'}}>
                            <div className="col-md-6">
                                <p   className="p-3">Baskets or fabric bins to corral shallow wire storage miscellaneous items such as candles and extra toiletries. with a variety of storage baskets. Large, lidded wicker baskets work well for bulky items such as blankets, sheets, and bath towels. Use shallow wire storage baskets or fabric bins to corral miscellaneous items such as candles and extra toiletries.</p>
                                </div>
                                
                            <div className="col-md-6 mb-3">
                                <img src={gift} className="img-fluid w-50 " alt="" /> </div>
                    </Row>
                    </Card.Body>
                    </Card>                                        
                </div>
       </Container>
    );
};

export default Info;