import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from 'react-bootstrap/Table'
import {Button} from 'react-bootstrap/'

const ManagelAllOrder = () => {

    const { users } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://arcane-peak-16137.herokuapp.com/allorders?email=${users?.email}`
        fetch(url)
            .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    
    return (
        <div>
            <h3>Manage ALL orders {orders?.length} </h3>
            {
                orders.map(order =>    <Table responsive striped bordered hover key={order._id}>
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>User Name</th>
                        <th>Product Name </th>
                        <th>Email</th>
                        <th>Phone Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{order?.id}</td>
                        <td>{users?.displayName}</td>
                        <td>{order?.serviceName}</td>
                        <td>{order?.email}</td>
                        <td>{order?.phone}</td>
                            <td>
                                <Button variant="success">Edit</Button>
                            </td>
                            <td>
                                <Button variant="Danger">X</Button>
                            </td>
                        </tr>
                    </tbody>
                    </Table>)
                }
        </div>
    );
};

export default ManagelAllOrder;