import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/global.styles";
import configureStore from "./store/index";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./components/Root";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
