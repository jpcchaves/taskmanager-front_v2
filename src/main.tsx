import React from 'react'
import {createRoot} from "react-dom/client";

import {BrowserRouter} from 'react-router-dom';

import './assets/css/App.css';
import App from "./App";

import {Provider} from "react-redux";
import {configureMainStore} from "./store";

const {store} = configureMainStore()

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
