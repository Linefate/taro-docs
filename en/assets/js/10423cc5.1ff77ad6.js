"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[8962],{79874:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(r),k=a,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(s,o(o({ref:e},d),{},{components:r})):n.createElement(s,o({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},40846:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={title:"Taro.uploadFile(param)",sidebar_label:"uploadFile"},i=void 0,p={unversionedId:"apis/network/fileTransfer/uploadFile",id:"version-1.x/apis/network/fileTransfer/uploadFile",title:"Taro.uploadFile(param)",description:"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-1.x/apis/network/fileTransfer/uploadFile.md",sourceDirName:"apis/network/fileTransfer",slug:"/apis/network/fileTransfer/uploadFile",permalink:"/taro-docs/en/docs/1.x/apis/network/fileTransfer/uploadFile",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/network/fileTransfer/uploadFile.md",tags:[],version:"1.x",frontMatter:{title:"Taro.uploadFile(param)",sidebar_label:"uploadFile"},sidebar:"version-1.x/API",previous:{title:"createVideoContext",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/video/createVideoContext"},next:{title:"downloadFile",permalink:"/taro-docs/en/docs/1.x/apis/network/fileTransfer/downloadFile"}},u={},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"Promise&lt;object res&gt; promise",id:"promiseobject-res-promise",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],m={toc:d},c="wrapper";function k(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)(c,a({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.uploadFile.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.uploadFile")),"\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"object-param"}),"object param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"url"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"filePath"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u8981\u4e0a\u4f20\u6587\u4ef6\u8d44\u6e90\u7684\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6587\u4ef6\u5bf9\u5e94\u7684 key\uff0c\u5f00\u53d1\u8005\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a key \u83b7\u53d6\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[header]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"object")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"HTTP \u8bf7\u6c42 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[formData]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"object")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"HTTP \u8bf7\u6c42\u4e2d\u5176\u4ed6\u989d\u5916\u7684 form data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[success()]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[fail()]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[complete()]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("h2",a({},{id:"\u8fd4\u56de\u503c"}),"\u8fd4\u56de\u503c"),(0,n.kt)("h3",a({},{id:"promiseobject-res-promise"}),"Promise","<","object res",">"," promise"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"promise.headersReceive(callback)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u63a5\u6536\u5230http header\u7684\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"promise.progress(callback)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u8bf7\u6c42\u8fdb\u5ea6\u66f4\u65b0\u7684\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"promise.abort()"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4e2d\u65ad\u8bf7\u6c42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"res.statusCode"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u7684\u8fd4\u56de\u72b6\u6001\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"res.data"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"any")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u670d\u52a1\u5668\u7684\u8fd4\u56de\u6570\u636e")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst uploadTask = Taro.uploadFile(params).then(...)\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.uploadFile"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);