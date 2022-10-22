import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContex } from '../../App';

const PrivateRoute = ({ children }) => {
    const { loginData } = useContext(userContex)


    const location = useLocation();

    if (loginData?.email) {
        return children;
    }
    return (
        <Navigate to="/login" state={{ form: location }} replace />
    );
};

export default PrivateRoute;