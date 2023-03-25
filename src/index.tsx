import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';

import {store} from "./store/app/store";
import {Provider} from "react-redux";

import SignIn from "./views/auth/signIn";
import SignUp from "./views/auth/signUp";
import AdminLayout from './layouts/admin';
import MainDashboard from 'views/admin/default';

import PrivateRoutes from "./store/app/components/RequireAuth";
import Marketplace from "./views/admin/marketplace";

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<SignIn/>}/>
                            <Route path='register' element={<SignUp/>}/>
                        </Route>

                        {/* Protected Routes */}
                        <Route element={<PrivateRoutes/>}>
                            <Route element={<AdminLayout/>} path='/*'>
                                <Route element={<MainDashboard/>} path='tasks'/>
                                <Route element={<Marketplace/>} path='dashboard'/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
);
