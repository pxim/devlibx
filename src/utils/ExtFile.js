
//判断是否已经引入js
function isInclude(name){
    var js= /js$/i.test(name);
    var es=document.getElementsByTagName(js?'script':'link');
    for(var i=0;i<es.length;i++)
        if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;
    return false;
}

/**
 * 加载xml文件，用类似isUrlValid
 * @param _url
 * @param callback
 */
export function loadFile(_url, callback) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        try {
            xhttp = new ActiveXObject("Msxml2.XMLHTTP");//旧版IE
        }
        catch (e) { }
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = onStateChange;
    xhttp.open("GET", _url,false);
    xhttp.send();
    function onStateChange() {
        if (xhttp.readyState === 4) {// 4 = "loaded"
            if(xhttp.status === 200) {// 200 = "OK"
                // onXMLComplete(xhttp.responseXML);
                if (typeof callback === 'function') { callback(xhttp.responseXML); }
            }else{
                if (typeof callback === 'function') { callback(false); }
                // alert('加载xml文档出错!');
                console.log("Problem retrieving XML data:" + xhttp.statusText);
            }
        }
    }
}



// 用法
// isUrlValid(url, (status)=>{
//     if (status === false) {alert("请求的无效页面"); return;}
//     //如果status=true，则 链接正确
// });
/**
 * 判断一个url是否有效，异步
 * @param url
 * @param callback
 */
export function isUrlValidAsync(url, callback) {
    var xmlhttp = null;
    if (window.XMLHttpRequest) {
        // code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        // code for IE6, IE5
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");//旧版IE
        }
        catch (e) { }
        // xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//新版IE
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");//新版IE
        }
        catch (e) { }
        if (!xmlhttp) {
            window.alert("不能创建XMLHttpRequest对象");
        }
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    } else {
        alert("Your browser does not support XMLHTTP.");
    }

    function state_Change() {
        if (xmlhttp.readyState === 4)
        {// 4 = "loaded"
            if (xmlhttp.status === 200)
            {// 200 = "OK"
                if(typeof callback === "function") { callback(true); }
            } else {
                // alert("Problem retrieving XML data:" + xmlhttp.statusText);
                if(typeof callback === "function") { callback(false); }
            }
        }
    }
}

/**
 * 判断一个url是否有效，同步
 * @param url
 * @returns {boolean}
 */
function isUrlValidSync(url) {
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();//其他浏览器
    } else if (window.ActiveXObject)
    {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");//旧版IE
        }
        catch (e) { }
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");//新版IE
        }
        catch (e) { }
        if (!xmlhttp) {
            window.alert("不能创建XMLHttpRequest对象");
        }
    }
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    if(xmlhttp.readyState === 4){
        if(xmlhttp.status === 200){
            //url存在
            // console.log(xmlhttp.responseText);
            return true;
        }else{
            return false;
            //alert("该文件不存在"); //url不存在
        }
    }else{
        return false;
    }
}


//------------------------------------------------------------------------------------//

export function loadExtJS(url) {
    var oHead = document.getElementsByTagName('head').item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = url;
    oScript.id = 'ejs_' + url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.js'));
    oHead.appendChild(oScript);
}

export function loadExtCSS(url) {
    var oHead = document.getElementsByTagName('head').item(0);
    var oScript = document.createElement("link");
    oScript.rel = "stylesheet";
    oScript.type = "text/css";
    oScript.href = url;
    oScript.id = 'ecss_' + url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.css'));
    oHead.appendChild(oScript);
}

/*
 * 异步动态加载js文件里的内容文本
 */
export function loadExtJSContext() {
    var url = "../h5code/js/baseAn.js";
    var oHead = document.getElementsByTagName('head').item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var txt = xhttp.responseText;
            oScript.appendChild(document.createTextNode(txt));
            oHead.appendChild(oScript);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

