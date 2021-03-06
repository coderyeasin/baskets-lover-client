import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import {Button} from 'react-bootstrap/'

const ManageProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://arcane-peak-16137.herokuapp.com/items')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleProducts= id => {
        const process = window.confirm('Are you sure?')
        if (process) {
            const url = `https://arcane-peak-16137.herokuapp.com/items/${id}`; 
            // const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrder = products.filter(order => order._id !== id)
                        setProducts(remainingOrder)
                    }
                })
        }
}


    return (
        <div>
            <h3>Manage your all products : {products.length}</h3>
            {
                products.map(items =>    <Table responsive striped bordered hover key={items._id}>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{items?.name}</td>
                        <td>${items?.price}</td>
                        <td>{items?.description.slice(0,50)}...</td>
                        <td>{items?.image}</td>
                            <td>
                                <Button variant="success">Edit</Button>
                            </td>
                            <td>
                                <Button onClick={()=> handleProducts(items?._id)}  variant="danger">X</Button>
                            </td>
                        </tr>
                    </tbody>
                    </Table>)
                }
        </div>
    );
};

export default ManageProducts;