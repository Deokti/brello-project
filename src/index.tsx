import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App/App";

import "@fontsource/roboto";
import "./app/styles/index.scss";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
