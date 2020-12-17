/*
 * @Description:
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-11-25 11:59
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-11-25 11:59
 */


/*
//js函数里无限参数的写法
appendChilds(pageObject, videoObject.parentNode, audioObject);
function appendChilds() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
}*/


export function getBase64Image(img) {
    // var x2 = this.getBase64Image(imgBtnDocs2);
    // var image = new Image();
    // image.crossOrigin = 'anonymous';
    // image.src = imgBtnDocs2;
    // image.onload = function () {
    //     var base64 = this.getBase64Image(image);
    //     console.log(base64);
    // }

    // var canvas = document.createElement('canvas');
    // canvas.width = 1024;
    // canvas.height = 768;
    // var ctx = canvas.getContext('2d');
    // var img = new Image;
    // img.crossOrigin = 'Anonymous';
    // img.onload = function () {
    //     canvas.height = img.height;
    //     canvas.width = img.width;
    //     ctx.drawImage(img, 0, 0);
    //     var dataURL = canvas.toDataURL('image/jpeg');
    //     callback.call(this, dataURL);
    //     canvas = null;
    // };
    // img.src = url;

    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    var dataURL = canvas.toDataURL("image/"+ext);
    return dataURL;
}


// 把键盘值（数字 87，86）转成 字符值 A,B等
// var strcode=String.fromCharCode(event.keyCode);






function loadExtJS(url) {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oTitle = document.getElementsByTagName('title');
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = url;
    oHead.appendChild(oScript);

    var fileName = url.substr(url.lastIndexOf("/") + 1);
    var t = window.setInterval(function() {
        if(isInclude(fileName)){
            window.clearInterval(t);
            loadExtFileQueue();
        }else{ }
    }, 50);
}
function loadExtCSS(url) {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript = document.createElement("link");
    oScript.rel = "stylesheet";
    oScript.type = "text/css";
    oScript.href = url;

    var fileName = url.substr(url.lastIndexOf("/") + 1);
    var t = window.setInterval(function() {
        if(isInclude(fileName)){
            window.clearInterval(t);
            loadExtFileQueue();
        }else{ }
    }, 50);
}
function loadExtFile(url,url2,type) {
    var nowURL;
    var res = isExistFile(url);
    if (res === false) {
        // alert("请求的无效资源");
        nowURL = url2;
    } else {
        nowURL = url;
    }
    if(type === "js"){
        loadExtJS(nowURL);
    }else if(type === "css") {
        loadExtCSS(nowURL);
    }
}
var extFileIndex = 0;var extFileList = [];
function loadExtFileQueue() {
    if(extFileIndex < extFileList.length){
        loadExtFile(extFileList[extFileIndex].url,extFileList[extFileIndex].url2,extFileList[extFileIndex].type);
        extFileIndex ++;
    }
}
function setExtFileList(ary) {
    extFileList = ary;
}



//使用方法
// var extFileManifest = [
//     {url:"h5code/js/jquery.min.js",url2:"../h5code/js/jquery.min.js", type:"js"},
//     {url:"h5code/lib/IH5Slide.js",url2:"../h5code/lib/IH5Slide.js", type:"js"},
//     {url:"h5code/js/showMC.js",url2:"../h5code/js/showMC.js", type:"js"}
// ];
// setExtFileList(extFileManifest);
// loadExtFileQueue();
