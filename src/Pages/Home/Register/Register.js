import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import imag from '../../../images/registration.png'

const Register = () => {

    const { newUserRegistration } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {    
        if (data.password !== data.password2) {
            alert('wrong password');
            return
        }
            console.log(data);
            console.log(errors);
          
        newUserRegistration(data.email, data.password, data.name, history)
        reset()
    }

    return (
        <div className="my-5 py-5">
            <Container>
                <Row className="pt-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={imag} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3>Please Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" type="text" placeholder="Your name" {...register("name", { required: true, maxLength: 80 })} /> <br />
                        
                        <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />
                        
                        <input className="mb-3" type="password" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} /> <br />
                        
                            <input className="mb-3" type="password" placeholder="re-type Password" {...register("password2", { required: true, maxLength: 100 })} /> <br />

                            <Link style={{ color: '#79593f' }} className="text-decoration-none" to="/login">Already Registered? Please <b className="primary">Click</b> here</Link> <br />
                            
                        <input className="my-3 border-0 py-2 bask_btn rounded" type="submit" value="Registration"  />
                    </form>

                   
                    </div>
                </Row>
               </Container>
        </div>
    );
};

export default Register;