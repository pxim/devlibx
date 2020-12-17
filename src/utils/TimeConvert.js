/*
 * @Description: 时间转换
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-10-27 18:12
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-10-27 18:12
 */
//---------------------------------------------时间方面的操作 开始------------------------------------------------------//
/*获取时间 格式为 年-月-日_时:分:秒*/
export function getYMDHMSTime(){
    var nowTime = new Date();
    var month = nowTime.getMonth() + 1;
    var day = nowTime.getDate();
    var year = nowTime.getFullYear();
    var hh = nowTime.getHours();
    var mm = nowTime.getMinutes();
    var ss = nowTime.getSeconds();
    var dateString = year + "-" + month + "-" + day + "_" + hh + ":" + mm + ":" + ss;
    return dateString;
}

/*
 * 获取 年月日 时间
 * @returns {*[]} 一个年月日的数组[年，月，日]
 */
export function getYMDTime() {
    let nTime = [];
    const nowData = new Date();
    const year = getPrefixNum(nowData.getFullYear());
    const month = getPrefixNum(nowData.getMonth() + 1);
    const day = getPrefixNum(nowData.getDate());
    // nTime = "[" + year + ":" + month + ":" + day + "]   ";
    nTime = [year, month, day];
    return nTime;
}

/*获取时间 格式为 时分秒 [17:17:06]*/
export function getHMSTime() {
    var str = "";
    var mydata = new Date();
    var hour = getPrefixNum(mydata.getHours());
    var minute = getPrefixNum(mydata.getMinutes());
    var second = getPrefixNum(mydata.getSeconds());
    str = "[" + hour + ":" + minute + ":" + second + "]   ";
    return str;
}
function getPrefixNum(param1) {
    if (param1 < 10 && param1 >= 0) {
        return "0" + param1.toString();
    }
    return param1.toString();
}

/*  转换时间格式 把秒转化为 29分31秒 格式
  * @param time 秒
  * @return  返回格式: 29:31
  */
export function convertTime(time) {
    var min = parseInt(time % 3600 / 60);
    var sec = parseInt(time % 60);

    return (min < 10 ? "0" + min : "" + min)
        + ":" + (sec < 10 ? "0" + sec : "" + sec);
}

/*  转换时间格式 把秒转化为 00时29分31秒 格式
  * @param time 秒
  * @return  返回格式: 29:31
  */
export function convertS2HMS(time) {
    // const hour = parseInt(time % (60*60*24) / 24);
    // const min  = parseInt(time % (60*60) / 60);
    // const sec  = parseInt(time % 60);

    const hour = Math.floor(time / 3600);
    const min = Math.floor((time / 60 % 60));
    const sec = Math.floor((time % 60));

    const str = (hour < 10 ? "0" + hour : "" + hour)
        + ":" + (min < 10 ? "0" + min : "" + min)
        + ":" + (sec < 10 ? "0" + sec : "" + sec);

    return str;
}
//---------------------------------------------时间方面的操作 结束------------------------------------------------------//
