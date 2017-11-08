import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/global.styles";
import configureStore from "./store/index";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
