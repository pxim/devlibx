/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 11:53
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 11:53
 */


//-----------------------------------------------------xml文件操作 开始------------------------------------------------//

/**
 * 去除xml转成json后属性里的attr前缀
 * @param ary
 * @returns {*}
 */
export function removeXMLAttr(ary) {
    for(let key in ary) {
        const at = ary[key].attr;
        if(!at) {break;}
        ary[key] = at;
    }
    return ary;
}


//-----------------------------------------------------xml文件操作 结束------------------------------------------------//
