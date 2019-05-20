import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./Reducer";

import { setToken } from "./Auth/Token";
import { loadState, saveState } from "./Helper/Storage";

const persistedState = loadState();

/* 
  Persisted state initializes the reducers state with the state previously saved in localStorage.
  setToken stores the JWT retrevied from the server and sets it to localStorage. It is a custom middleware.
*/
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, setToken)
);

/* 
  Stores the changes made to these state values inside the localStorage helper function whenever the state changes.
  Need to install lodash and use the throttle function to make sure this isn't being saved every second.
*/
store.subscribe(() => {
  saveState({
    user: store.getState().user,
    tickets: store.getState().tickets,
    isLoggedIn: store.getState().isLoggedIn,
    categories: store.getState().categories
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);