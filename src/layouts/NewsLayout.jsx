import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/shared/Footer/Footer';
import RightNav from '../pages/shared/RightNav/RightNav'
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsLayout;