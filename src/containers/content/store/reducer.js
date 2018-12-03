import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  homeList: [],
  autherList: []
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HOME_LIST:
      return state.set("homeList", fromJS(action.data));
    case actionTypes.AUTHER_LIST:
      return state.set("autherList", fromJS(action.data));
    default:
      return state;
  }
};
