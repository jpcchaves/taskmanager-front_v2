import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Navigate, Outlet} from 'react-router-dom'

const RequireAuth = () => {

    const {user} = useContext(AuthContext);

    return !user ? <Navigate to="/login" replace/> : <Outlet/>
};

export default RequireAuth;