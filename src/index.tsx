import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';

import {store} from "./store/app/store";
import {Provider} from "react-redux";
import SignIn from "./views/auth/signIn";
import SignUp from "./views/auth/signUp";

import AdminLayout from './layouts/admin';


ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <BrowserRouter>
                    <Switch>
                        <Route path='/auth/login' component={SignIn}/>
                        <Route path='/auth/register' component={SignUp}/>
                        <Route path='/admin' component={AdminLayout}/>
                    </Switch>
                </BrowserRouter>
            </React.StrictMode>
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
);
