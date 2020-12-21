/*
 * @Description: 友盟统计
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-12-21 13:54
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-12-21 13:54
 */
export class CNZZ {
    constructor() {
    }

    /**
     * 统计URL
     * @param url https://s4.cnzz.com/z_stat.php?id=1279478500&web_id=1279478500
     */
    init(url) {
        // document.write('<div style="display:none;">' + code + '</div>');
        // 隐藏cnzz的图标 在统计代码 javascript 中的 ducument.write(unescape("%3Cspan 和 id='cnzz_stat_icon'中间加上 style='display:none;'
        // document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1278849360'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1278849360%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
        // document.write(unescape(props.statsUrl));

        const hm = document.createElement("script");
        hm.src = url;
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    }

    /**
     * https://open.cnzz.com/a/api/trackpageview/
     * @param dataAry [content_url, referer_url]
     */
    addTrackPageview(dataAry) {
        const _czc = window._czc || [];
        // _czc.push(["_trackPageview", content_url, referer_url]);
        // _czc.push(['_trackPageview', '/virtual/login']);
        _czc.push(['_trackPageview', dataAry[0] || '', dataAry[1] || '']);
    }

    /**
     * https://open.cnzz.com/a/api/trackevent/
     * @param dataAry [category,action,label,value,nodeid]
     */
    addTrackEvent(dataAry) {
        const _czc = window._czc || [];
        // _czc.push(["_trackEvent",category,action,label,value,nodeid]);
        _czc.push(['_trackEvent', dataAry[0] || '', dataAry[1] || '', dataAry[2] || '', dataAry[3] || 0, dataAry[4]] || '');
    }
}




/*
// 使用参考
const cnzz = new CNZZ();
cnzz.init('https://s4.cnzz.com/z_stat.php?id=1279478500&web_id=1279478500');
cnzz.addTrackPageview(['/' + document.title]);
cnzz.addTrackEvent([document.title, 'visit', 'course|mobile']);
*/
