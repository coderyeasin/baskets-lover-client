import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
        .then(data => setItem(data))
    },[])


    return (
        <div>
            <Container>
                <Row className="my-5 py-5">
                    <h3 className="mt-5 text-center" style={{color:'#a17154'}}>Pick Your Awesome Baskets</h3>
                    <p className="w-75 mx-auto mb-5">Jute Basket is a natural material which is a type of ‘palma‘ with unlimited power. As one of the tropical countries in Asia, Bangladesh is often lined up as the largest rattan producer in the world. Therefore, do not be surprised if you can often find a variety of rattan creations, good for small trinkets such as baskets, until large furniture such as home furnishings. Due to that fact, these crafts are often exported to many countries.</p>
                    {item?.map(product => <div className="col-md-4 g-4" key={product?._id}>
                    <Card className="border-0 fancy_cards">
                            <Card.Img variant="top" className="rounded-circle" src={product?.image} />
                            <Card.Body style={{marginTop:'-200px', background:'#fdf2ec'}}>
                            <Card.Title>{product?.name}</Card.Title>
                                        <Card.Text>
                                            <Row className="align-items-center">
                                            <div className="col-md-6">
                                            <span>  {product?.description.slice(0,100)} </span>
                                            </div>
                                                <div className="col-md-6">
                                                <p>Winter Collection</p>
                                                    <h4> Price: ${product?.price}</h4>
                                                    <Link to={`/purchase/${product._id}`}>
                                                    <Button className="bask_btn border-0 p-2 fs-6 text-uppercase fw-bold" >Order Now</Button>
                                                    </Link>
                                            </div>
                                            </Row>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Explore;