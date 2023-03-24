import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../auth/authSlice";
import {Redirect, Route, RouteProps} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({...rest}) => {
    const user = useSelector(selectCurrentUser);

    if (user === null) return <Redirect to='/auth/login'/>
    return <Route {...rest}/>

};

export default PrivateRoute;
