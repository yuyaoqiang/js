<<<<<<< HEAD
import { createStore, applyMiddleware , compose } from "redux";
import { combineReducers } from "redux-immutable";
import header from "../reducers/header";
import ReduxThunk from "redux-thunk";
import callAPIMiddleware from "./callAPIMiddleware";
const store = createStore(
  combineReducers({
    header
  }),
  compose(
    applyMiddleware(ReduxThunk,callAPIMiddleware),
    window.devToolsExtension && window.devToolsExtension()
=======
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers"
const store = createStore(
  combineReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
>>>>>>> 1703fcfdd5b9108cbf7e68ed88c656ab3a99d5d1
  )
);
export default store;
