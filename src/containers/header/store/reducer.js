import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  isFocus: false,
  isShow: false,
  list: [],
  page: 1,
  totalPage: 1
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

    case actionTypes.HEADER_LIST:
      return state.merge(
        {
          list:fromJS(action.data),
          totalPage:action.totalPage
        }
      );

    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.data);
    default:
      return state;
  }
};
