import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./assets/css/App.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import ContextsInjection from "./contexts/ContextsInjection";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ContextsInjection>
          <App />
        </ContextsInjection>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
