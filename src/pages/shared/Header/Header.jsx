import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container className='my-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3'>
                <Button className='rounded-0' variant="danger">Latest</Button>
                <Marquee className='text-dark bg-light' speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;