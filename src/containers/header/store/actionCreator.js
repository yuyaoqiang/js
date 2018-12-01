import * as actionTypes  from "./actionTypes"
import axios from "axios"
// export const setFoucsAction = data => ({
//   type: actionTypes.SEARCH_FOUCS,
//   data: data
// });
export const setBlurAction = data => ({
  type: actionTypes.SEARCH_BLUR,
  data: data
});
export const setFoucsAction = data => {
     return axios.get("/index").then(res=>{
        console.log(res.data)
        return {
          type: actionTypes.SEARCH_FOUCS,
             data: res.data
        }
      }).catch(err=>{
        console.log(err)
      })
};