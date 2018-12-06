import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../containers/header/store";
import { reducer as homeReducer } from "../containers/content/store";
import { reducer as detaillReducer } from "../containers/detail/store";
import { reducer as signReducer } from "../components/sign/store";
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  sign: signReducer,
  detail: detaillReducer,
});
