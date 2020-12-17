/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020/3/27 14:37
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/3/27 14:37
 */


/*
 * 检测设备是否是移动端
 */
export function isMobile() {
    let bool = false;
    let type = 'PC';
    if(navigator.userAgent.match(/mobile/i)){
        type = 'Mobile';
        bool = true;
    }else{
        type = 'PC';
        bool = false;
    }
    return bool;
}

/*
 * //检测PC，安卓，还是苹果系统
 * 用法：var gSystemType = judgeSystem();
 * @returns {string}
 */
export function checkSystem() {
    // alert(navigator.userAgent);
    var type = "";
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        type = "iOS";
    }else if(/(Android)/i.test(navigator.userAgent)) {
        type = "Android";
    }else {
        type = "PC";
    }
    return type;
}


// var browserInfo = getBrowser();
// BrowserType = browserInfo.browser;
// alert("browser:"+browserInfo.browser+" version:"+browserInfo.version);
/*获取游览器类型*/
export function getBrowser(){
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
                        (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

    if (sys.edge) return { browser : "Edge", version : sys.edge };
    if (sys.ie) return { browser : "IE", version : sys.ie };
    if (sys.firefox) return { browser : "Firefox", version : sys.firefox };
    if (sys.chrome) return { browser : "Chrome", version : sys.chrome };
    if (sys.opera) return { browser : "Opera", version : sys.opera };
    if (sys.safari) return { browser : "Safari", version : sys.safari };

    return { browser : "", version : "0" };
}
