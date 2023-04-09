import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./assets/css/App.css";
import App from "./App";

import { Provider } from "react-redux";
import { configureMainStore } from "./store";
import AuthProvider from "./contexts/auth/provider/AuthProvider";

const { store } = configureMainStore();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
