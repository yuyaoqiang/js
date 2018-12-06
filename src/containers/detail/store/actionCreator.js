import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";

const  detailAction= (data)=>({
  type:actionTypes.SET_DETAIL_DATA,
  data:data
})

export const detail=(params)=>{
  return dispatch=>{
    return axios.get(ajaxUrl.detail.getDetail,params).then(res=>{
      const data = res.data.data;
      dispatch(detailAction(data))
    })
  }
}