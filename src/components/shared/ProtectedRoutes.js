import React, { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
    const { userId } = useContext(AuthContext);
    return userId ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes