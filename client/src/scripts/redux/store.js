// This file exports redux store.

import { applyMiddleware, createStore } from "redux";

// Import extra libraries for middleware
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
// import thunk from "redux-thunk";

import ROOT_REDUCER from "./reducers/root-reducer"

const MIDDLEWARE = applyMiddleware(createLogger(), promiseMiddleware());
const STORE = createStore(ROOT_REDUCER, MIDDLEWARE);

export default STORE;
