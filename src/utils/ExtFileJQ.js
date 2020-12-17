/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 13:24
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 13:24
 */

/*
 * 判断一个url是否可以访问，是否有效
 * @param _url
 * @param fun
 * //用法
 * isUrlValid(_url, function (res) {
 *       if (res === false) {
 *          alert("请求的无效页面");
 *      } else {
 *          //链接正确
 *      }
 *  });
 */
export function isUrlValid(_url, callback) {
    $.ajax({
        url: _url,
        type: "get",
        success: function () {
            //说明请求的url存在，并且可以访问
            if ($.isFunction(callback)) {callback(true);}
        },
        statusCode: {
            404: function () {
                //说明请求的url不存在
                if ($.isFunction(callback)) {callback(false);}
            }
        }
    });
}
