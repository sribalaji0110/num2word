import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/scss/index.scss";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
