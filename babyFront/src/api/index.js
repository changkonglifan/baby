import Api from './api';
const api = new Api({
    baseURI: objBaseURI(),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'timeout': '10000',
    }
});

function objBaseURI() {
    switch (process.env.NODE_ENV) {
        case 'development': return 'developmentObjBaseURI';
        case 'production': return 'productionObjBaseURI';
        default: return 'http://localhost:3000';
    }
}
/**
 * 请求地址
 * @param {*} type
 * @param {*} path
 * @param {*} params
 * @param {*} data
 */
export function AjaxServer(type, path, params, data) {
    return api[type](path, { params, data: data })
}
