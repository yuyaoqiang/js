import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";
import { reducer as headerReducer } from "../containers/header/store";
const store = createStore(
  combineReducers({ header: headerReducer }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
