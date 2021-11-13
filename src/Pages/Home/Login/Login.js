import React from 'react';
import { Alert, Button, ButtonGroup, Container, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import imag from '../../../images/registration.png'

const Login = () => {

    const { errors, setErrors, loginWithGoogle, handleUsersLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { register, handleSubmit, reset } = useForm();




    const onSubmit = data => {    
        // console.log(data);
        handleUsersLogin(data.email, data.password, location, history)
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
                    <h3>Please Login</h3>
            {
                errors && <Alert variant="danger" onClose={() => setErrors(false)} dismissible>
                <Alert.Heading>Wrong Email/Password! Please Provide valid info</Alert.Heading>
                </Alert>
                }
           

             <form onSubmit={handleSubmit(onSubmit)}>

                <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                
                <input className="mb-3" type="password" placeholder="Password" {...register("password", {required: true, maxLength: 100})} /> <br />

                <input className="my-3 border-0 p-2 bask_btn rounded" type="submit" value="Login" /> <br />

                <Link style={{ color: '#79593f' }} className="text-decoration-none" to="/register"> Create A New Account? <b className="primary">Click</b> here</Link> <br />

            </form>
            <p className="text-center my-3 fw-bold">USING SOCIAL MEDIA</p>
                
            <ButtonGroup>
            <Button onClick={() => loginWithGoogle(location, history)} className="bask_btn border-0">Google</Button>
            
                <Button  className="bask_btn border-0">Facebook</Button>
                
                <Button className="bask_btn border-0">Github</Button>
                
            <Button className="bask_btn border-0">Twitter</Button>

           </ButtonGroup>
                    </div>
                </Row>
          </Container>
        </div>
    );
};

export default Login;