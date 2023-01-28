import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { FormContextProvider } from "./store/form-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
