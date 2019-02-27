
/**
 * 将reducer的switch分解
 */
export function createReducer (initialParams,reducerMap){
    return (params = initialParams,action) => {
        const reducer = reducerMap[action.type];
        return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params;
    }
}
/**
 * dateFormat(data, format)
 *
 * desc：
 * 时间格式化，默认为 `yyyy-MM-dd` 类型
 *
 * 懵逼了，需要啃下 `es6` 语法。。。
 *
 * */
export function dateFormat(date, format) {
    let _format = format || 'yyyy-MM-dd';

    const d = date;
    const o = {
        'M+': d.getMonth() + 1, // month
        'd+': d.getDate(), // day
        'h+': d.getHours(), // hour
        'm+': d.getMinutes(), // minute
        's+': d.getSeconds(), // second
        'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
        'S': d.getMilliseconds() // millisecond
    };
}
/**
 * cookie 操作
 */

export function setCookie(cname, cvalue, exhours) {
    const date = new Date();
    date.setTime(date.getTime() + (exhours * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cname + '=' + escape(cvalue) + '; ' + expires;
}
export function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) { return unescape(parts.pop().split(';').shift()); }
}
export function delCookie($name) {
    const myDate = new Date();
    myDate.setTime(-1000);//设置时间
    document.cookie = $name + '=\'\'; expires=' + myDate.toGMTString();
}
export function delAllCookie() {
    const myDate = new Date();
    myDate.setTime(-1000);//设置时间
    const data = document.cookie;
    const dataArray = data.split('; ');
    for (let i = 0; i < dataArray.length; i++) {
        const varName = dataArray[i].split('=');
        document.cookie = varName[0] + '=\'\'; expires=' + myDate.toGMTString();
    }

}
