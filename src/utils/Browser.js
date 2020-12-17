/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 11:43
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 11:43
 */


/**
 * 屏蔽 游览器 右键菜单
 */
export const forbidBrowserRightMenu = () => {
    //禁用右键菜单;
    document.oncontextmenu = function() {return false;};
    //禁用网页上选取的内容；
    // document.onselectstart = function(){return false;};
    // document.oncopy = function(){return false;};
    // document.oncut = function (){return false;};
}


/*
 *设置控制输出的console不同的颜色和形状的方法
 */
export function nConsole() {
    // console.log('%c' + cube.name + '%c => mouseup', 'color: #fff; background: #41b882; padding: 3px 4px;', 'color: #41b882; background: #fff;');
}
