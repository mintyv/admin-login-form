import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import postReducer from "./reducers";
import thunk from "redux-thunk";
import autoLogger from "./autologger";

const enhancer = compose(applyMiddleware(thunk), autoLogger());
const store = createStore(postReducer, composeWithDevTools(enhancer));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);