import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold mt-2'>Login With</h4>
            <Button variant="outline-primary" className='mt-2 mb-2 w-100'><FaGoogle className='me-2' />Login with Google</Button>
            <Button variant="outline-secondary" className='w-100'><FaGithub className='me-2' />Login with Github</Button>
            <div className='mt-5'>
                <h4>Find us on</h4>
                <ListGroup className='mt-3'>
                    <ListGroup.Item><FaFacebook className='me-2' />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter  className='me-2'/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram  className='me-2'/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div className='position-relative' >
                <img className='w-100 h-auto' src={bg} alt="" />
                <div className='text-center position-absolute top-50 start-50 translate-middle'>
                    <h2 className='text-white fw-bold'>Create an Amazing Newspaper</h2>
                    <p className='text-light'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='rounded-0' variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;