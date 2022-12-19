import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { theme } from "configs/defaulttheme";
import { ApolloProvider } from "@apollo/client";
import { graphInstance } from "api/ApolloClient";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={graphInstance}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
