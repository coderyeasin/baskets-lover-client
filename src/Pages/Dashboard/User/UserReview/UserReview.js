import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import fededbacks from '../../../../images/review.png'


const UserReview = () => {

    const { users } = useAuth();
    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {    
        fetch('https://arcane-peak-16137.herokuapp.com/orders', {
            method: 'POST',
            headers:{ 'content-type' : 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Thank you ')
                reset()
                history.push('/dashboard')
            }
    })
        console.log(data)
    }

    return (
        <div>
            <Container>
                <Row className="my-5 py-5">
                   
                    <div className="col-md-6">
                        <img src={fededbacks} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3 style={{ color:'#79593f'}}>Post Your Feedback</h3>
                            <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
    
                                <input className="mb-3" type="text" placeholder="out of 5" {...register("star", { required: true, maxLength:5 })} /> <br />
                                
                                <input className="mb-3 p-lg-5 " type="text" placeholder="Please give us valueable feedback" {...register("review", { required: true})} /> <br />
                                
                        
                                <input className="my-3" type="submit" value="Feedback" className="bask_btn rounded border-0 p-2" />
                            </form>
                        </div>
                </Row>
            </Container>
        </div>
    );
};

export default UserReview;