import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
// import { AlertProvider } from "./AlertContext";
const queryClient = new QueryClient();
const theme = {
    colors: {
        primary: "#0070f3",
    },
    // Add other theme properties as needed
};
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            {/* <AlertProvider> */}
            <App />
            {/* </AlertProvider> */}
        </ThemeProvider>
    </QueryClientProvider>,
    document.getElementById("root")
);
