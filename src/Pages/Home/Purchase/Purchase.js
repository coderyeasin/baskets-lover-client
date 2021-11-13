import React, { useEffect, useState } from 'react';
import { Accordion, Container, Modal, Row, Button, Alert } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Rotate from 'react-reveal/Rotate';

        
const Purchase = () => {

    const { users } = useAuth();
    const { id } = useParams();

    const [order, setOrder] = useState([])
    const [collect, setCollect] = useState({})
    const [itemId, setItem] = useState(false)
    const [show, setShow] = useState(false);

    const history = useHistory()
    
    useEffect(() => {
        fetch('https://arcane-peak-16137.herokuapp.com/items')
            .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    
    useEffect(() => {
        const places = order.find(e => e._id === id)
        setCollect(places)
    },[order])



    
//react-hook
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://arcane-peak-16137.herokuapp.com/orders', {
            method: 'POST',
            headers:{ 'content-type' : 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Confirm Your Order Successfully')
                // setCollect(data);
                setShow(false)
                reset()
                history.push('/dashboard')
            }
    })
        console.log(data)
    };
    
let orderId = Math.floor(1000 + Math.random() * 9000);

    return (
        <div>
            <Container className="my-5 py-5">
                <h3 className="text-center text-uppercase"> GEt your Awesome Baskets Now!!! </h3>
                {show&& <Alert variant="success">
                    <p>Congrasulations! your order receive Successfully</p>
                </Alert>
                }
                <Row className="align-items-center">
                    <div className="col-md-8">                       
                        <Rotate left>
                        <img className="img-fluid" src={collect?.image} alt="" />
                        </Rotate>
                    </div>
                    <div className="col-md-4" style={{ textAlign: 'left', paddingTop: '20px' }}>
                        <p className="text-center"> <strong>Order ID: #{orderId} </strong> </p>
                    {/* Modal */}

                    <Button className="bask_btn border-0 p-2 fs-6 rounded-pill shadow text-uppercase" onClick={() => setShow(true)}>
                            Review Order
                        </Button>

                        <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                <Modal.Title className="mx-auto" id="example-custom-modal-styling-title">
                                    <p >{collect?.name}</p>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="mx-auto w-75">
                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="mb-2 rounded-pill border-success ps-2" placeholder="Order ID" {...register("id")} />

                                    <input className="mb-2 rounded-pill border-success ps-2" defaultValue={collect?.name} {...register("serviceName")} />
                                    
                                <input className="mb-2 rounded-pill border-success ps-2" defaultValue={users?.displayName} {...register("name")} />

                                <input className="mb-2 rounded-pill border-success ps-2" defaultValue={users?.email} {...register("email")} />

                                <input className="mb-2 rounded-pill border-success ps-2" placeholder="phone" {...register("phone")} />

                                <input className="mb-2 rounded-pill border-success ps-2" placeholder="address" {...register("address")} /> <br />
                                        
                                {errors.exampleRequired && <span>This field is required</span>}
                                
                                <input className="bask_btn border-0 p-2 fs-6 rounded-pill shadow" type="submit" value="Order Confirm" />
                            </form>
                            
                        </Modal.Body>
                    </Modal>
                                        

                        {/* Description */}
                        
                        <h4 className="mt-3">Name: {collect?.name} </h4>
                        <p className="mb-3">Price: ${collect?.price} </p>
                        
                        {/* detials */}

                        <Accordion defaultActiveKey="0" className="my-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Details</Accordion.Header>
                            <Accordion.Body>
                            <p>{collect?.description} </p>
                                 <li>   Soft-sided, two-toned rope basket </li>
                                   <li> Great for living room or bedroom storage</li>
                                  <li>  Polypropylene with leather handles</li>
                                   <li> Spot clean only</li>
                                  <li>  All ages</li>
                                   <li> Made in Vietnam </li>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Makes Beautiful Life</Accordion.Header>
                            <Accordion.Body>
                                    <p>
                                    Basket makers use a wide variety of materials to create a basket, such as bark, willow rods, leaves, wire, plastic, paper, and rope. There are three basic kinds of baskets—coiled, twined, or woven. A woven basket is made of spokes and weavers: the spokes run up and down and the weavers go over and under the spokes. A coiled basket is made by sewing rings of a fibrous material to the previous ring. Twined baskets have flexible weavers that are twined around the spokes in a variety of patterns.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>                                             

                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;