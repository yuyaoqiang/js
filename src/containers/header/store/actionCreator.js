import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";
const changeList =(data)=>({
  type:actionTypes.HEADER_LIST,
  data:data,
  totalPage:Math.ceil(data.length/10)
})
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
export const doChangePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  data: page
});
export const getList = () => {
  return dispatch=>{
    axios.get(ajaxUrl.header.searchList).then(res=>{
          const data = res.data.data;
          dispatch(changeList(data))
    })
  }
}
