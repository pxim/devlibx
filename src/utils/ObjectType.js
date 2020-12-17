/*
 * @Description: 常量object类型判断
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-10-30 14:20
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-10-30 14:20
 */



import {XML} from "../libs/ObjTree";

/**
 * 判断一个字符串是否是JSON格式（http://www.cnblogs.com/lanleiming/p/7096973.html）
 * @param str
 * @returns {boolean}
 */
export function isJSON(str) {
    if (typeof str == 'string') {
        try {
            let obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }

        } catch(e) {
            console.log('It is not a JSON!' +'\n'+'error：'+str +'\n'+e);
            return false;
        }
    }
    // console.log('It is not a string!');
}


/**
 * 验证一个字符串是否是xml格式  errorCode 0是xml正确，1是xml错误，2是无法验证
 * @param xmlStr
 * @returns {{msg: string, error_code: number}}
 */
export function isXML(xmlStr) {
    //errorCode 0是xml正确，1是xml错误，2是无法验证
    var xmlDoc,errorMessage,errorCode = 0;
    // code for IE
    if (window.ActiveXObject) {
        xmlDoc  = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.loadXML(xmlStr);

        if(xmlDoc.parseError.errorCode!=0) {
            errorMessage="XML错误code: " + xmlDoc.parseError.errorCode + "\n";
            errorMessage=errorMessage+"错误原因: " + xmlDoc.parseError.reason;
            errorMessage=errorMessage+"错误位置: " + xmlDoc.parseError.line;
            errorCode = 1;
        } else {
            errorMessage = "XML格式正确";
        }
    }
    // code for Mozilla, Firefox, Opera, chrome, safari,etc.
    else if (document.implementation.createDocument) {
        var parser=new DOMParser();
        xmlDoc = parser.parseFromString(xmlStr,"text/xml");
        var error = xmlDoc.getElementsByTagName("parsererror");
        if (error.length > 0) {
            if(xmlDoc.documentElement.nodeName=="parsererror"){
                errorCode = 1;
                errorMessage = xmlDoc.documentElement.childNodes[0].nodeValue;
            } else {
                errorCode = 1;
                errorMessage = xmlDoc.getElementsByTagName("parsererror")[0].innerHTML;
            }
        } else {
            errorMessage = "XML格式正确";
        }
    } else {
        errorCode = 2;
        errorMessage = "浏览器不支持验证，无法验证XML正确性";
    }
    if(errorCode !== 0) {
        console.log(errorMessage);
    }
    return {
        "msg":errorMessage,
        "error_code":errorCode
    };
}

/*
 * xml转字符串
 * @param xmlData （加载后的xml返回值）
 * @returns {*}
 */
export function xmlToString(xmlData) {
    var xmlString;
    //IE
    if (window.ActiveXObject){
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else{
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString;
}

/*
 * 字符串转xml
 * @param str
 * @returns {*}
 */
export function stringToXML(str) {
    if(document.all){
        var xmlDom=new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.loadXML(str);
        return xmlDom
    }
    else
        return new DOMParser().parseFromString(str, "text/xml");
}

/*
 * xml转json
 * 使用方法 xml2json();  使用之前需引用 jquery-2.2.4.min.js 和 ObjTree.js ()
 * 获取某一属性；// var x1 = tree.root.item[0]['-id'];
 * @param val
 *
 * val = '<?xml version="1.0" encoding="UTF-8"?>\n' +
 '<root>\n' +
 '\t<item id="mItem_1" name="一：拆卸发动机线束" partGroup="1" href="ext/page/scene1/scene1.html">\n' +
 '\t</item>\n' +
 '\t<item id="mItem_2" name="二：拆卸发动机进气导管" partGroup="2" href="ext/page/scene1/scene1.html">\n' +
 '\t</item>\n' +
 '\t<item id="mItem_3" name="三：拆卸进气歧管总成" partGroup="3" href="ext/page/scene1/scene1.html">\n' +
 '</root>\n';
 */
export function xml2json(val, prefix) {
    // var space = "" ? "  " : "";
    var space = "  ";
    prefix = prefix ? prefix : '_';
    var xotree = new XML.ObjTree();
    xotree.attr_prefix = prefix;
    // var idata = $.trim(val);
    var idata = val.trim();
    var tree = xotree.parseXML(idata);
    if (!tree.html) {
        // var str = JSON.stringify(tree, null, space);
        // console.log(str);
        console.log('XML转JSON成功');
        return tree;
    } else {
        console.log('XML格式错误');
        return false;
    }
}
/*
 * json转xml
 * @param val String
 */
export function json2xml(val) {
    try {
        var xotree = new XML.ObjTree();
        // xotree.attr_prefix = '_';
        // var idata = $.trim(val);
        var idata = val.trim();
        var str = xotree.writeXML(JSON.parse(idata));
        console.log(str);
        alert('JSON转XML成功');
        return str;
    } catch (e) {
        alert('JSON格式错误');
        return false;
    }
}


/*
 * 把字符串转成对象Object
 * @param str [str='{name:"Helen",age:"22",sex:"female"}' 或者 str='id:zqcm, startNum:0, endNum:25']
 */
export function convertStr2Obj(str) {
    // const obj = new Function('return '+str)();
    str = str.replace('{', '').replace('}', '').replace(/\s*/g,"");
    const obj = new Object();
    const strs = str.split(",");
    for(let i = 0; i < strs.length; i ++) {
        obj[strs[i].split(":")[0]]=(strs[i].split(":")[1]);
    }
    return obj;
}
