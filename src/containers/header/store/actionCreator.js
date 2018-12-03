import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";
export const setBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR,
  data: null
});
export const setFoucsAction = () => ({
  type: actionTypes.SEARCH_FOUCS,
  data: null
});
export const doShowAction = () => ({
  type: actionTypes.SEARCH_PAGE_SHOW,
  data: null
});
export const doNotShowAction = () => ({
  type: actionTypes.SEARCH_PAGE_HEID,
  data: null
});
export const DO = () => ({
  type: actionTypes.SEARCH_PAGE_HEID,
  data: null
});
