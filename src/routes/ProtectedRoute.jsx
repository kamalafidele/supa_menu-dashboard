
import React from 'react';
import authStorage from '../auth/storage';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    return authStorage.getToken() ? children : <Navigate to='/login'/>
}

export default ProtectedRoute;