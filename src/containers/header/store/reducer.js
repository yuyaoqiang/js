import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  isFocus: false
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOUCS:
      return state.set("isFocus", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("isFocus", false);
    default:
      return state;
  }
};
