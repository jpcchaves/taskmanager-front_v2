import React from 'react';
import {AuthServiceImpl} from '../services/impl/AuthServiceImpl';
import {useNavigate} from "react-router-dom";

const MakeAuthRegisterService = () => {

    const navigate = useNavigate();

    return new AuthServiceImpl(navigate);
};

export default MakeAuthRegisterService;