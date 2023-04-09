import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./assets/css/App.css";
import App from "./App";
import AuthProvider from "./contexts/auth/provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
