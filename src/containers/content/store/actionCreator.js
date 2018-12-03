import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";
export const getHomeTitleList = () => {
  return dispatch => {
    return axios
      .get(ajaxUrl.home.homeList)
      .then(res => {
        if (res.data.success) {
          dispatch({
            type: actionTypes.HOME_LIST,
            data: res.data.data
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
};
export const doAutherList = () => {
  return dispatch => {
    return axios
      .get(ajaxUrl.home.autherList)
      .then(res => {
        if (res.data.success) {
          dispatch({
            type: actionTypes.AUTHER_LIST,
            data: res.data.data
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
};
