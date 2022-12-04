import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContexts } from '../Contexts/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContexts)
    if (loading) {
        return <button className="btn btn-square loading"></button>
    }
    if (user && user.email) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;