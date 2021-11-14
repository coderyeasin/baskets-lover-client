import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import nodata from '../../../images/errorss.png'

const NotFound = () => {
    return (
        <div>
            <Container className="my-5">
                <h3 className="my-5 text-center fs-2 text-danger">OOPS!!! You made a mistake</h3>
                <Link to="/home">
                <img className="img-fluid w-75" src={nodata} alt="" />
                </Link>
            </Container>
        </div>
    );
};

export default NotFound;