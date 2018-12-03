import { fromJS } from "immutable";
import {
  SEARCH_FOUCS,
  SEARCH_BLUR,
  DIV_BLUR,
  DIV_FOUCS
} from "../../contents/types";

const defaultState = fromJS({
  isFocus: false,
  isHover: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOUCS:
      return state.set("isFocus", true);

    case SEARCH_BLUR:
      return state.set("isFocus", false);
    case DIV_FOUCS:
      return state.set("isHover", true);
    case DIV_BLUR:
      return state.set("isHover", false);
    default:
      return state;
  }
};
