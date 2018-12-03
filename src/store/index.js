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
  )
);
export default store;
