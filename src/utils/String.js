/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 11:57
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 11:57
 */


/*
 * 搜索 字符串里 被搜索内容 的所有下标（索引）  用法 searchSubStr("../content/menu/menu.html","/");
 * @param str
 * @param subStr
 */
export function searchSubStr(str,subStr){
    var positions = new Array();
    var pos = str.indexOf(subStr);
    while(pos>-1){
        positions.push(pos);
        pos = str.indexOf(subStr,pos+1);
    }
    return positions;
}
