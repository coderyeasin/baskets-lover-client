import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from 'react-bootstrap/Table'
import {Button} from 'react-bootstrap/'
import { useForm } from "react-hook-form";


const ManagelAllOrder = () => {

    const { users } = useAuth();
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("")

    useEffect(() => {
        const url = `https://arcane-peak-16137.herokuapp.com/allorders?email=${users?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const usersOrder = orders.filter(items => items?.id && items?.serviceName)
    
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

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        console.log(data);
    };

    const handleUpdate = (id) => {
        fetch(`https://arcane-peak-16137.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orders)
        })
        //     .then(res => res.json())
        //     .then(data => {
        //         setStatus(data)
        //         console.log(data);
        // })

    }
    

    return (
        <div>
            <h3>Manage ALL orders : {usersOrder?.length} </h3>
            {
                usersOrder.map(order =>    <Table responsive striped bordered hover key={order._id}>
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>User Name</th>
                        <th>Product Name </th>
                        <th>Email</th>
                        <th>Phone Address</th>
                        <th>Status</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{order?.id}</td>
                        <td>{order?.name}</td>
                        <td>{order?.serviceName}</td>
                        <td>{order?.email}</td>
                            <td>{order?.phone}</td>
                            <td>
                                
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select {...register("status")}>
                                    <option value="pending"> {order?.status} </option>
                                    <option value="approved">Approved</option>
                                    {/* <option value="hold">Hold</option> */}
                                </select>
                                <input onClick={()=> handleUpdate(order?._id)} className="my-3" type="submit" />
                                </form>

                        </td>
                            <td>
                                <Button  variant="success">Edit</Button>
                            </td>
                            <td>
                                <Button onClick={()=> handleOrder(order?._id)}  variant="Danger">X</Button>
                            </td>
                        </tr>
                    </tbody>
                    </Table>)
                }
        </div>
    );
};

export default ManagelAllOrder;