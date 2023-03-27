import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignIn from "./modules/auth/pages/signIn";
import SignUp from "./modules/auth/pages/signUp";
import PrivateRoutes from "./store/app/components/RequireAuth";
import AdminLayout from "./layouts/admin";
import MainDashboard from "./modules/admin/default";
import Marketplace from "./modules/admin/marketplace";
import Profile from './modules/admin/profile';

import {store} from "./store/app/store";
import theme from "./theme/theme";
import {Provider} from "react-redux";
import {ChakraProvider} from "@chakra-ui/react";

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <Routes>
                    {/* Public Routes */}
                    <Route path='/login' element={<SignIn/>}/>
                    <Route path='/register' element={<SignUp/>}/>

                    {/* Protected Routes */}
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<AdminLayout/>} path='/tk/*'>
                            <Route element={<MainDashboard/>} path='tarefas'/>
                            <Route element={<Marketplace/>} path='dashboard'/>
                            <Route element={<Profile/>} path='perfil'/>
                        </Route>
                    </Route>
                </Routes>
            </ChakraProvider>
        </Provider>
    );
};

export default App;