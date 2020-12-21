
# devlibx
## 介绍 / Intro

整合的一些开发工具库、插件。

## 安装 / Install
```
npm i devlibx
```

## 引入 / Import

### import 整个包   

```javascript
import * as devlibx from 'devlibx'
```

### import 单个组件

```javascript
import {EventDispatcher} from 'devlibx'
```

## 使用 / Use 

参考api

## 组件 / Component

| 组件              | 说明            | 使用方法                                                     | 备注 |
| ----------------- | --------------- | ------------------------------------------------------------ | ---- |
| `EventDispatcher` | 事件发送类      | [文档](https://github.com/mrdoob/eventdispatcher.js)         |      |
| `pageResponse`    | 自适应缩放库    | [文档](https://github.com/peunzhang/pageResponse)            |      |
| `CNZZ`            | 友盟统计web组件 | [文档](https://developer.umeng.com/docs/67963/cate/67963?acm=lb-zebra-622440-7939396.1003.4.7420515&scm=1003.4.lb-zebra-622440-7939396.OTHER_15819875796941_7420515) [api](https://open.cnzz.com/a/api/apilist/)  用法参考代码里的提示 |      |

## 工具方法 / Util

| 工具方法       | 说明                                        | 使用方法                                       | 备注 所属文件 无用 |
| -------------- | ------------------------------------------- | ---------------------------------------------- | :----------------- |
| isJSON         | 是否是json数据                              |                                                | ObjectType         |
| isXML          | 是否是xml数据                               |                                                |                    |
| xmlToString    | xml数据转成string数据                       |                                                |                    |
| stringToXML    | string数据转成xml数据                       |                                                |                    |
| xml2json       | xml数据转成json数据                         |                                                |                    |
| json2xml       | json数据转成xml数据                         |                                                |                    |
| convertStr2Obj | string数据转成object                        |                                                |                    |
| getURLRequest  | 获取url中"?"符后的字串                      |                                                | URL                |
| isUrlValidSync | 判断一个url是否有效，同步                   |                                                |                    |
| searchSubStr   | 搜索 字符串里 被搜索内容 的所有下标（索引） | searchSubStr("../content/menu/menu.html","/"); | String             |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |
|                |                                             |                                                |                    |