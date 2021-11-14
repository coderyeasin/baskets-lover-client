import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import basket from '../../../../images/hold.jpg'



const AddBraskets = () => {

    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://arcane-peak-16137.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully')
                    console.log(data);
                    reset()
                }
        })
    };
    

    return (
        <Container>
            <Row>
                <div className="col-md-6 my-5">
                    <h3>Add a new Product</h3>
                
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2" placeholder="product name" {...register("name", { required: true })} /> <br />
                    <input className="mb-2" placeholder="description" {...register("description" )} /> <br />
                    <input className="mb-2" placeholder="price" type="number" {...register("price" )} /> <br />
                        <input className="mb-2" placeholder="image" type="text" {...register("image")} /> <br />
                        
                    <input className="bask_btn border-0 p-2 rounded" type="submit" value="Add Product" />
                    </form>
                </div>

                <div className="col-md-6">
                        <img className="img-fluid " src={basket} alt="" />
                </div>
            </Row>
      </Container>
    );
};

export default AddBraskets;