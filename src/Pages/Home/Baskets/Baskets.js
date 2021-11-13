import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bask from './Bask/Bask';

const Baskets = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const pureBask = product.filter(items => items.price <= 80)

    return (
        <div className="my-5 py-5">
            <h3 className="text-center text-uppercase" style={{color:'#a17154'}}>Our Baskets</h3>
            <p className="text-center">It will be comfort with your regular life, Makes Happy!!!</p>

            <Container>
                <Row>
                    {
                        pureBask.map(items => <Bask key={items._id} items={items}> </Bask>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Baskets;