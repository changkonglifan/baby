import {
  createReducer
} from '../util'
import types from '../store/types'
const initialState = {
  title:'hello world111!'
}
export default createReducer(initialState,{
  [`${types.GET_LIST}_SUCCESS`]:(state,data,params) =>{
    return Object.assign({ }, state ,{
      title: data.demoTitle
    })
  }
});
