import React from "react";
import ReactDOM from "react-dom/client"; // Update this import
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "../src/i18n/i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"


const setAppHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', setAppHeight);
setAppHeight();
// Create a root container using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use the render method of the root object
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
