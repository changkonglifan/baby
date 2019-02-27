import types from '../store/types';
/**
 * 模拟请求接口
 * @param {*} params
 */
export function setSiderSelectKey(params) {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_SIDER_SELECT_KEY,
            params:{
                key : params
            }
        })
    }
}
