import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../auth/authSlice";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector(selectCurrentUser);
    
    return (!user ? <Navigate to="/login" replace={true}/> : <Outlet/>
    )
};

export default PrivateRoutes;
