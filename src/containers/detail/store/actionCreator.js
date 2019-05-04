import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";

const  detailAction= (data)=>({
  type:actionTypes.SET_DETAIL_DATA,
  data:data
})

export const adShowAction = ()=>({
  type:actionTypes.SET_AD_STATE,
  data:null
})
export const detail=(params)=>{
  return dispatch=>{
    return axios.get(ajaxUrl.detail.getDetail,params).then(res=>{
      const data = res.data.data;
      dispatch(detailAction(data))
    })
  }
}