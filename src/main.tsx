import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./assets/css/App.css";
import App from "./App";
import AuthProvider from "./contexts/auth/provider/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import TasksProvider from "./contexts/tasks/provider/TasksProvider";
import DashboardProvider from "./contexts/dashboard/provider/DashboardProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <TasksProvider>
            <DashboardProvider>
              <App />
            </DashboardProvider>
          </TasksProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
