import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <Button variant="primary" disabled>
                <Spinner
                    className='me-2'
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

/**
 *  ---------------------
 *          STEPS   
 *  ---------------------
 * 1. check user is logged in or not
 * 2. if user is logged in then allow them to visit the route
 * 3. else redirect the user to the login page
 * 4. setup the private router
 * 5. handle loading
 * */ 