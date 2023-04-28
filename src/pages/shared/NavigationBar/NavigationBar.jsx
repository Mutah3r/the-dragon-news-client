import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                // console.log('Sign-out successful.');
            }).catch((error) => {
                // An error happened.
                // console.log('An error happened.');
            });
    }
    
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/category/0'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/career'>Career</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '2.5rem' }} />

                            }
                            {
                                user ?
                                    <Button onClick={handleLogout} className='rounded-0' variant="dark">Logout</Button>
                                    : <Link to='/login'>
                                        <Button className='rounded-0' variant="dark">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;