/*
 * @Description: DOM工具类
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020/1/15 15:10
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/1/15 15:10
 */



export function handleImgBtnOver(event, searchStr, replaceStr) {
    updateImgBtnPath(event.currentTarget, 'over', searchStr, replaceStr);
}
export function handleImgBtnOut(event, searchStr, replaceStr) {
    updateImgBtnPath(event.currentTarget, 'out', searchStr, replaceStr);
}
export function updateImgBtnStateDown(target) {
    updateImgBtnPath(target, 'over');
}
export function updateImgBtnStateUp(target) {
    updateImgBtnPath(target, 'over');
}
//更新当前触发的按钮的图片样式(svg里的图片)
export function updateImgBtnPath(target, type, searchStr, replaceStr) {
    const href = target.getAttribute('src');
    let nowHref = '';
    searchStr = '_' + searchStr;
    replaceStr = '_' + replaceStr;

    switch (type) {
        case 'down':
            if(href.lastIndexOf(searchStr || '0001') !== -1){nowHref =  href.replace(searchStr || '0001', replaceStr || '0002')}
            break;
        case 'up' :
            if(href.lastIndexOf(searchStr || '0002') !== -1){nowHref = href.replace(searchStr || '0002', replaceStr || '0001')}
            break;
        case 'over' :
            if(href.lastIndexOf(searchStr || '0001') !== -1){nowHref =  href.replace(searchStr || '0001', replaceStr || '0002')}
            break;
        case 'out' :
            if(href.lastIndexOf(searchStr || '0002') !== -1){nowHref = href.replace(searchStr || '0002', replaceStr || '0001')}
            break;
        default :
            break;
    }
    if(nowHref !== ''){target.setAttribute('src', nowHref);}
}

export function getImgBtnPath(href, searchStr, replaceStr) {
    searchStr = '_' + searchStr;
    replaceStr = '_' + replaceStr;
    const nowHref =  href.replace(searchStr || '0001', replaceStr || '0002');
    return nowHref;
}

export function updateImgBtnState(target, type) {
    const href = target.getAttribute('src');
    let nowHref = '';

    switch (type) {
        case '1':
            nowHref = href.replace('0002', '0001').replace('0003', '0001');
            break;
        case '2' :
            nowHref = href.replace('0001', '0002').replace('0003', '0002');
            break;
        case '3' :
            nowHref = href.replace('0001', '0003').replace('0002', '0003');
            break;
        default :
            break;
    }
    if(nowHref !== ''){target.setAttribute('src', nowHref);}
}

/*
 * 禁止文本可以复制粘贴
 * @param div
 */
export function forbidTextAction(div) {
    //禁止文本可以复制粘贴
    div.onselectstart = function(){return false;};
    div.onpaste = function(){return false;};
    div.oncopy = function(){return false;};
    div.oncut = function (){return false;};
    div.οncontextmenu = function () {return false;}
}


/*把当前元素 插入 到目标元素后面
* // insertAfter(a1, a2);   // $("#canvas").insertAfter($("#dom_overlay_container"));
*/
export function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    // 如果最后的节点是目标元素，则直接添加
    if(parent.lastChild === targetElement){
        parent.appendChild(newElement)
    }else{
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
