import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentToken} from "../../auth/authSlice";
import {Redirect} from "react-router-dom";


const RequireAuth = () => {

    const token = useSelector(selectCurrentToken)

    return (
        <>
            {token ? "" : ""}
        </>
    )
};

export default RequireAuth;
