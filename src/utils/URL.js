/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 11:57
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 11:57
 */


/*
 * 获取url中"?"符后的字串
 * @returns {Object}
 */
export function getURLRequest() {
    // var url = '?sc=53616c7465645f5fc66def7a641e98dc8f6bf5d0f15d376accbb794f8f77cb6a';
    var strs;
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
