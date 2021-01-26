import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorWrapper from "./components/ErrorWrapper";

ReactDOM.render(
  <React.StrictMode>
    <ErrorWrapper>
      <App />
    </ErrorWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
