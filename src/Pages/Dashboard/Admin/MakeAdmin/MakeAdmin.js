import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';


const MakeAdmin = () => {
    
    const [success, setSuccess] = useState(false)

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/orders/admin', {
            method: 'PUT',
            headers:{ 'content-type' : 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data);
                    reset()
                    history.push('/dashboard')
                }

        })
 
    }

    return (
        <div className="my-5 py-5">
            <h3>Make Admin</h3>
            {success &&   <Alert  variant="success">
                   Created New Admin
                </Alert>
                }
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true })} /> <br />

                <input className="my-3" type="submit" value="MakeAdmin" className="btn btn-success" />
            </form>
        </div>
    );
};

export default MakeAdmin;