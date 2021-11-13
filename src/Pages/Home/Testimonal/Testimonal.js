import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';

const Testimonal = () => {

    const [review, setReview] = useState([])
  
    useEffect(() => {
        const url = `http://localhost:5000/orders`
        fetch(url)
            .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    
    const feedbacks = review.filter(user => user?.star && user?.review)
    
    return (
        <div>
            <h3 className="mt-5 pt-5 text-uppercase" style={{color:'#a17154'}}> Testimonials  </h3>
            <p className="text center">See how many clients loves and their satisfaction share with us.</p>
            <Container className="m3-5 py-5">
                <Row>
                {
                        feedbacks?.map(order => <div className="col-md-4 g-4" key={order?._id}> <Card style={{background:'#fdf2ec'}}>
                        <Card.Body>
                                <Card.Title>
                                
                                    <Rating
                                    initialRating={order?.star}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star" className="text-warning"
                                    >
                                     </Rating>

                                    
                                </Card.Title>
                                <Card.Text>
                                    <p>{order?.review}</p>
                            </Card.Text>
                        </Card.Body>
                        </Card> </div>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonal;