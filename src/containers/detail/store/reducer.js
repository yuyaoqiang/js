import { fromJS } from "immutable";
import { actionTypes } from "./index";
const initState = fromJS({
  detail: [],
  adShow:true
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_DETAIL_DATA:
      return state.set("detail", action.data);
    case actionTypes.SET_AD_STATE:
      return state.set("adShow",false);
    default:
      return state;
  }
};
