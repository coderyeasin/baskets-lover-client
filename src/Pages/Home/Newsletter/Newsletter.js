import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';

const Newsletter = () => {
    const letter = {
        background: '#fdf2ec'
    }
    return (
        <div style={letter} className="py-5">
            <Container>
            <InputGroup className=" w-75 mx-auto">
                <FormControl
                placeholder="Get latest Newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2" style={{background:'#79593f', color:'#fff'}}>Subscribe</InputGroup.Text>
            </InputGroup>
             </Container>
        </div>
    );
};

export default Newsletter;