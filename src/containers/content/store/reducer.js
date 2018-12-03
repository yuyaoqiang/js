import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  homeList: []
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HOME_LIST:
      return state.set("homeList", fromJS(action.data));
    default:
      return state;
  }
};
