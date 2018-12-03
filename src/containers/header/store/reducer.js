import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  isFocus: false,
  isShow:false
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOUCS:
      return state.set("isFocus", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("isFocus", false);
    case actionTypes.SEARCH_PAGE_SHOW:
      return state.set("isShow", true);
    case actionTypes.SEARCH_PAGE_HEID:
      return state.set("isShow", false);
    default:
      return state;
  }
};
