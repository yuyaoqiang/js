import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers"
const store = createStore(
  combineReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
