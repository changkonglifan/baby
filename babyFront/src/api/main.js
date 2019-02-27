import { AjaxServer } from './index';
/**
 * 模拟请求
 * @param {*} params
 */
export async function get_list(params) {
    return AjaxServer('get','/demo')
}
