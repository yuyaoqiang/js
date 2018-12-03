import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../containers/header/store";
import { reducer as homeReducer } from "../containers/content/store";
export default combineReducers({ header: headerReducer, home: homeReducer });
