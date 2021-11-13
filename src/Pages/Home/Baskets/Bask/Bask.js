import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bask = ({ items }) => {
    const { name, description, price, image } = items
    
    return (
        <div className="col-md-4 g-4">
              <Card className="border-0 fancy_cards">
        <Card.Img variant="top" className="rounded-circle" src={image} />
        <Card.Body style={{marginTop:'-200px', background:'#fdf2ec'}}>
          <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Row className="align-items-center">
                        <div className="col-md-6">
                        <span>  {description.slice(0,100)} </span>
                        </div>
                            <div className="col-md-6">
                            <p>Winter Collection</p>
                                <h4> Price: ${price}</h4>
                                <Link to={`/purchase/${items._id}`}>
                                <Button className="bask_btn border-0 p-2 fs-6 text-uppercase fw-bold" >Order Now</Button>
                                </Link>
                        </div>
                        </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
};

export default Bask;