import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const reactQuery = new QueryClient();
const theme = {
  colors: {
    primary: "#dfe2e8",
  },
};

ReactDOM.render(
  <QueryClientProvider client={reactQuery}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
