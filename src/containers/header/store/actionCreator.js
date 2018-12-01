import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";
// export const setFoucsAction = data => ({
//   type: actionTypes.SEARCH_FOUCS,
//   data: data
// });
export const setBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR,
  data: null
});
export const setFoucsAction = () => ({
  type: actionTypes.SEARCH_FOUCS,
  data: null
});
