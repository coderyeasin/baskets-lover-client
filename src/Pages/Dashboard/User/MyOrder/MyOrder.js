import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {

    const { users } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://arcane-peak-16137.herokuapp.com/orders?email=${users?.email}`
        fetch(url)
            .then(res => res.json())
        .then(data => setOrders(data))
    },[users?.email])

    const handleOrder = id => {
        const process = window.confirm('Are you sure?')
        if (process) {
            const url = `https://arcane-peak-16137.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrder = orders.filter(order => order._id !== id)
                        setOrders(remainingOrder)
                    }
                })
        }
}


    return (
        <div>
            <Container>
                <Row className="my-5 py-5">
                    <h3 style={{color:'#a17154'}}>My Orders : {orders?.length} </h3>
                    {
                        orders?.map(order => <div className="col-md-4 g-4" key={order?._id}> <Card>
                        <Button onClick={()=> handleOrder(order?._id)} className="w-25 ms-auto bg-danger border-0">X</Button>
                        <Card.Body>
                            <Card.Title>{order?.name}</Card.Title>
                                <Card.Text>
                                    <p>Order no. #{order?.id}</p>
                                    <p className="text-danger">{order?.status || <span className="text-success">Approved</span>}</p>
                                    <p>Product Name: {order?.serviceName}</p>
                                    <p>Your Phone: {order?.phone}</p>
                                    <p>Your Address: {order?.address}</p>
                            </Card.Text>
                        </Card.Body>
                        </Card> </div>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;