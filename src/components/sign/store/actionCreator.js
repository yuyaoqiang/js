import * as actionTypes from "./actionTypes";
import { ajaxUrl, axios } from "../../../config";

const saveUser = (data) => ({
    type: actionTypes.LOGIN,
    data: data
  });

export const setLoginState=()=>({
    type:actionTypes.LINK_TO_LOGIN,
    data:null
})
export const setRegisterState=()=>({
    type:actionTypes.LINK_TO_RIGISTER,
    data:null
})

export const login = params => {
  return dispatch => {
    axios.post(ajaxUrl.login, params).then(res=>{
        if(res.data.success === true){
            const data = res.data.data;
            dispatch(saveUser(data))
        }else{
            
        }
    })
  };
};