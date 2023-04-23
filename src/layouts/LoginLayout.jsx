import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default LoginLayout;