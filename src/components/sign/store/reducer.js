import { fromJS } from "immutable";
import { actionTypes } from "./index";

const initState = fromJS({
    loginOrRegister:true //true为登陆,false为注册
})
export default (state = initState,action)=>{
    switch(action.type){
        case actionTypes.LINK_TO_LOGIN:
        return state.set("loginOrRegister",true);
        case actionTypes.LINK_TO_RIGISTER:
        return state.set("loginOrRegister",false);
        default:
        return state;
    }
}