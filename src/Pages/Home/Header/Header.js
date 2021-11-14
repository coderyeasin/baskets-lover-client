import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Container, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const { users, logoutUsers } = useAuth();


    // let pageScroll = document.getElementById('nav');
    // window.addEventListener('scroll', function () {
    //     if (window.scrollY >= 100) {
    //         pageScroll.classList.add({background:'red'})
    //     }
    //     else {
    //         pageScroll.classList.remove({background:'red'})
    //     }
    // })
    

    return (
        <div id="nav">
            
            <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" expand="lg">
              <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} className="" height="50px" alt="Basket Lover" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                        >
                        <HashLink className="text-decoration-none menu" to="/home/#home">Home</HashLink>
                        <HashLink className="text-decoration-none menu" to="/explore">Explore</HashLink>
                        <HashLink className="text-decoration-none menu" to="/home/#review">Review</HashLink>
                        {users?.email && <HashLink to="/dashboard" className="text-decoration-none menu">{users?.displayName}</HashLink>}
                      
                        </Nav>
                        
                        {
                            users?.email ?
                            <NavLink to="/home">
                            <Button onClick={logoutUsers} className="menu border-0">Logout</Button>
                            </NavLink>
                                :
                                <NavLink to="/register">
                                <Button className="menu border-0" >Login</Button>
                                </NavLink>
            
                        }
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;