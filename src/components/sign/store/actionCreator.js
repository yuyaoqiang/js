import * as actionTypes from "./actionTypes";

export const setLoginState = () => ({
  type: actionTypes.LINK_TO_LOGIN,
  data: null
});
export const setRegisterState = () => ({
  type: actionTypes.LINK_TO_RIGISTER,
  data: null
});

export const saveUser = data => ({
  type: actionTypes.SAVE_USER_INFO,
  data: data
});
export const loginOut = ()=>({
    type: actionTypes.LOGIN_OUT,
    data: null
})
