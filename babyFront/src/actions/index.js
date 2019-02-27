import types from '../store/types';
import { get_list } from '../api/main'
/**
 * 模拟请求接口
 * @param {*} params
 */
export function getList(params) {
    return (dispatch,getState) => {
        dispatch({
            type: types.GET_LIST,
            payload:{
                promise: get_list()
            }
        })
    }
}
