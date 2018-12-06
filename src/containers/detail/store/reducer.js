import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  detail: []
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_DETAIL_DATA:
      return state.set("detail", action.data);
      default:
      return state;
  }
};
