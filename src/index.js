import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {configureStore} from "./js/Redux/store";
import App from "./js/components/App";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById("root")
);