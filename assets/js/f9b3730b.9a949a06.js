"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37351],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(a),s=r,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},14099:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Taro.requestPolymerPayment(option)",sidebar_label:"requestPolymerPayment"},p=void 0,o={unversionedId:"apis/swan/pay/requestPolymerPayment",id:"apis/swan/pay/requestPolymerPayment",title:"Taro.requestPolymerPayment(option)",description:"1\uff09\u767e\u5ea6\u6536\u94f6\u53f0\uff0c\u805a\u5408\u4e86\u4e3b\u6d41\u7684\u767e\u5ea6\u94b1\u5305\u3001\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u3001\u7f51\u94f6\u7b49\u591a\u79cd\u652f\u4ed8\u6e20\u9053\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4e00\u7ad9\u5f0f\u5feb\u901f\u63a5\u5165\u591a\u79cd\u652f\u4ed8\u6e20\u9053\uff0c\u8ba9\u767e\u5ea6\u7528\u6237\u80fd\u5728\u667a\u80fd\u5c0f\u7a0b\u5e8f\u573a\u666f\u4e0b\uff0c\u76f4\u63a5\u5b8c\u6210\u652f\u4ed8\u3001\u4ea4\u6613\u95ed\u73af\uff0c\u63d0\u5347\u7528\u6237\u652f\u4ed8\u4f53\u9a8c\u7684\u540c\u65f6\uff0c\u63d0\u9ad8\u667a\u80fd\u5c0f\u7a0b\u5e8f\u7684\u8ba2\u5355\u8f6c\u5316\u7387\u3002",source:"@site/docs/apis/swan/pay/requestPolymerPayment.md",sourceDirName:"apis/swan/pay",slug:"/apis/swan/pay/requestPolymerPayment",permalink:"/taro-docs/docs/next/apis/swan/pay/requestPolymerPayment",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/swan/pay/requestPolymerPayment.md",tags:[],version:"current",frontMatter:{title:"Taro.requestPolymerPayment(option)",sidebar_label:"requestPolymerPayment"},sidebar:"API",previous:{title:"loadSubPackage",permalink:"/taro-docs/docs/next/apis/swan/download-package/loadSubPackage"},next:{title:"getOptimalPriceInfo",permalink:"/taro-docs/docs/next/apis/swan/pay/getOptimalPriceInfo"}},m={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"OrderInfo",id:"orderinfo",level:3},{value:"FailCallbackResult",id:"failcallbackresult",level:3},{value:"DetailFailData",id:"detailfaildata",level:3}],u={toc:d},k="wrapper";function s(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(k,r({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"1\uff09\u767e\u5ea6\u6536\u94f6\u53f0\uff0c\u805a\u5408\u4e86\u4e3b\u6d41\u7684\u767e\u5ea6\u94b1\u5305\u3001\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u3001\u7f51\u94f6\u7b49\u591a\u79cd\u652f\u4ed8\u6e20\u9053\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4e00\u7ad9\u5f0f\u5feb\u901f\u63a5\u5165\u591a\u79cd\u652f\u4ed8\u6e20\u9053\uff0c\u8ba9\u767e\u5ea6\u7528\u6237\u80fd\u5728\u667a\u80fd\u5c0f\u7a0b\u5e8f\u573a\u666f\u4e0b\uff0c\u76f4\u63a5\u5b8c\u6210\u652f\u4ed8\u3001\u4ea4\u6613\u95ed\u73af\uff0c\u63d0\u5347\u7528\u6237\u652f\u4ed8\u4f53\u9a8c\u7684\u540c\u65f6\uff0c\u63d0\u9ad8\u667a\u80fd\u5c0f\u7a0b\u5e8f\u7684\u8ba2\u5355\u8f6c\u5316\u7387\u3002\n2\uff09\u4e0a\u8ff0\u652f\u4ed8\u6e20\u9053\u5728 C \u7aef\u6536\u94f6\u53f0\u6709\u4e24\u79cd\u5c55\u793a\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u5b9e\u73b0\u3002\n\u65b9\u5f0f\u4e00\uff1a\u5c06\u652f\u4ed8\u6e20\u9053\u5185\u5d4c\u5728\u5c0f\u7a0b\u5e8f\u63d0\u5355\u9875\u9762\u4e2d\uff0c\u5b9e\u73b0\u65b9\u5f0f\u53c2\u8003\u6587\u6863",(0,n.kt)("a",r({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel/"}),"inline-payment-panel\u5185\u5d4c\u652f\u4ed8\u7ec4\u4ef6"),"\u3002\n\u65b9\u5f0f\u4e8c\uff1a\u5728\u7528\u6237\u786e\u8ba4\u8ba2\u5355\u540e\uff0c\u8c03\u8d77\u6536\u94f6\u53f0\u534a\u5c4f\u9762\u677f\u627f\u8f7d\u652f\u4ed8\u6e20\u9053\uff0c\u5b9e\u73b0\u65b9\u5f0f\u53c2\u8003\u6587\u6863\u8c03\u8d77",(0,n.kt)("a",r({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/function/tune_up_2.0/#%E7%99%BE%E5%BA%A6%E6%94%B6%E9%93%B6%E5%8F%B0%E6%8E%A5%E5%8F%A32-0-%E8%AF%B4%E6%98%8E"}),"\u767e\u5ea6\u6536\u94f6\u53f0"),"\u3002"),(0,n.kt)("p",null,"Web \u6001\u8bf4\u660e\uff1a\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u4ea4\u6613\u884c\u4e3a\u5168\u6d41\u7a0b\u95ed\u73af\u4f53\u9a8c\uff0c\u5728 Web \u6001\u4e0b\u8c03\u7528\u8be5\u65b9\u6cd5\u4f1a\u505a\u6253\u5f00\u767e\u5ea6 App \u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u964d\u7ea7\u5904\u7406\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"orderInfo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OrderInfo")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8ba2\u5355\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => any")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(err: FailCallbackResult) => any")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => any")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("h3",r({},{id:"orderinfo"}),"OrderInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dealId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8df3\u8f6c\u767e\u5ea6\u6536\u94f6\u53f0\u652f\u4ed8\u5fc5\u5e26\u53c2\u6570\u4e4b\u4e00\uff0c\u662f\u767e\u5ea6\u6536\u94f6\u53f0\u7684\u8d22\u52a1\u7ed3\u7b97\u51ed\u8bc1\uff0c\u4e0e\u8d26\u53f7\u7ed1\u5b9a\u7684\u7ed3\u7b97\u534f\u8bae\u4e00\u4e00\u5bf9\u5e94\uff0c\u6bcf\u7b14\u4ea4\u6613\u5c06\u7ed3\u7b97\u5230 dealId \u5bf9\u5e94\u7684\u534f\u8bae\u4e3b\u4f53\u3002",(0,n.kt)("br",null),"\u8be6\u89c1",(0,n.kt)("a",r({parentName:"td"},{href:"https://smartprogram.baidu.com/docs/develop/function/parameter/"}),"\u6838\u5fc3\u53c2\u6570\u83b7\u53d6\u4e0e\u7ec4\u88c5"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"appKey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u652f\u4ed8\u80fd\u529b\u5f00\u901a\u540e\u5206\u914d\u7684\u652f\u4ed8 appKey\uff0c\u7528\u4ee5\u8868\u793a\u5e94\u7528\u8eab\u4efd\u7684\u552f\u4e00 ID \uff0c\u5728\u5e94\u7528\u5ba1\u6838\u901a\u8fc7\u540e\u8fdb\u884c\u5206\u914d\uff0c\u4e00\u7ecf\u5206\u914d\u540e\u4e0d\u4f1a\u53d1\u751f\u66f4\u6539\uff0c\u6765\u552f\u4e00\u786e\u5b9a\u4e00\u4e2a\u5e94\u7528\u3002",(0,n.kt)("br",null),"\u8be6\u89c1",(0,n.kt)("a",r({parentName:"td"},{href:"https://smartprogram.baidu.com/docs/develop/function/parameter/"}),"\u6838\u5fc3\u53c2\u6570\u83b7\u53d6\u4e0e\u7ec4\u88c5"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"totalAmount"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8ba2\u5355\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u4eba\u6c11\u5e01\u5206\uff09\u3002\u6ce8\uff1a\u5c0f\u7a0b\u5e8f\u6d4b\u8bd5\u5305\u6d4b\u8bd5\u91d1\u989d\u4e0d\u53ef\u8d85\u8fc7 1000 \u5206")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tpOrderId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u7cfb\u7edf\u521b\u5efa\u7684\u552f\u4e00\u8ba2\u5355 ID \uff0c\u5f53\u652f\u4ed8\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4f1a\u901a\u8fc7\u6b64\u8ba2\u5355 ID \u901a\u77e5\u5f00\u53d1\u8005\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"notifyUrl"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u901a\u77e5\u5f00\u53d1\u8005\u652f\u4ed8\u72b6\u6001\u7684\u56de\u8c03\u5730\u5740\uff0c\u5fc5\u987b\u662f\u5408\u6cd5\u7684 URL \uff0c\u4e0e\u5f00\u53d1\u8005\u5e73\u53f0\u586b\u5199\u7684\u652f\u4ed8\u56de\u8c03\u5730\u5740\u4f5c\u7528\u4e00\u81f4\uff0c\u672a\u586b\u5199\u7684\u4ee5\u5e73\u53f0\u56de\u8c03\u5730\u5740\u4e3a\u51c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dealTitle"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8ba2\u5355\u7684\u540d\u79f0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"signFieldsRange"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u4e8e\u533a\u5206\u9a8c\u7b7e\u5b57\u6bb5\u8303\u56f4\uff0csignFieldsRange \u7684\u503c\uff1a0\uff1a\u539f\u9a8c\u7b7e\u5b57\u6bb5 appKey+dealId+tpOrderId\uff1b1\uff1a\u5305\u542b totalAmount \u7684\u9a8c\u7b7e\uff0c\u9a8c\u7b7e\u5b57\u6bb5\u5305\u62ecappKey+dealId+tpOrderId+totalAmount\u3002\u56fa\u5b9a\u503c\u4e3a 1 \u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"rsaSign"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5bf9appKey+dealId+totalAmount+tpOrderId\u8fdb\u884c RSA \u52a0\u5bc6\u540e\u7684\u7b7e\u540d\uff0c\u9632\u6b62\u8ba2\u5355\u88ab\u4f2a\u9020\u3002",(0,n.kt)("br",null),"\u7b7e\u540d\u8fc7\u7a0b\u89c1",(0,n.kt)("a",r({parentName:"td"},{href:"https://smartprogram.baidu.com/docs/develop/function/sign_v2/"}),"\u7b7e\u540d\u4e0e\u9a8c\u7b7e"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"bizInfo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8ba2\u5355\u8be6\u7ec6\u4fe1\u606f\uff0c\u9700\u8981\u662f\u4e00\u4e2a\u53ef\u89e3\u6790\u4e3a JSON Object \u7684\u5b57\u7b26\u4e32\u3002",(0,n.kt)("br",null),"\u5b57\u6bb5\u5185\u5bb9\u89c1\uff1a ",(0,n.kt)("a",r({parentName:"td"},{href:"https://smartprogram.baidu.com/docs/develop/function/parameter/#%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0%E7%BB%84%E8%A3%85"}),"bizInfo \u7ec4\u88c5"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"payResultUrl"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762 path\u3002Web \u6001\u5c0f\u7a0b\u5e8f\u652f\u4ed8\u6210\u529f\u540e\u8df3\u56de\u7684\u9875\u9762\u8def\u5f84\uff0c\u4f8b\u5982\uff1a'/pages/payResult/payResult'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"inlinePaySign"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5185\u5d4c\u652f\u4ed8\u7ec4\u4ef6\u8fd4\u56de\u7684\u652f\u4ed8\u4fe1\u606f\u52a0\u5bc6 key\uff0c\u4e0e",(0,n.kt)("a",r({parentName:"td"},{href:"https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel"}),"\u5185\u5d4c\u652f\u4ed8\u7ec4\u4ef6"),"\u914d\u5957\u4f7f\u7528\uff0c\u6b64\u503c\u4e0d\u4f20\u6216\u8005\u4f20\u7a7a\u65f6\u9ed8\u8ba4\u8c03\u8d77\u652f\u4ed8\u9762\u677f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"promotionTag"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5e73\u53f0\u8425\u9500\u4fe1\u606f\uff0c\u6b64\u5904\u4f20\u53ef\u4f7f\u7528\u5e73\u53f0\u5238\u7684 spuid\uff0c\u652f\u6301\u901a\u8fc7\u82f1\u6587\u9017\u53f7\u5206\u5272\u4f20\u5165\u591a\u4e2a spuid \u503c\uff0c\u4ec5\u4e0e\u767e\u5ea6\u5408\u4f5c\u5e73\u53f0\u7c7b\u76ee\u5238\u7684\u5f00\u53d1\u8005\u9700\u8981\u586b\u5199")))),(0,n.kt)("h3",r({},{id:"failcallbackresult"}),"FailCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9519\u8bef\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"DetailFailData")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002",(0,n.kt)("br",null),"\u6ce8: \u76ee\u524d\u4ec5\u5728\u5185\u5d4c\u652f\u4ed8\u7ec4\u4ef6\u8c03\u8d77 swan.requestPolymerPayment \u65f6\uff0c\u9009\u62e9\u6570\u5b57\u4eba\u6c11\u5e01 APP \u6e20\u9053\u652f\u4ed8\u4e14\u7528\u6237\u672a\u4e0b\u8f7d\u6570\u5b57\u4eba\u6c11\u5e01 APP \u65f6\uff0c\u8fd4\u56de\u5177\u4f53\u9519\u8bef\u4fe1\u606f data\u3002")))),(0,n.kt)("h3",r({},{id:"detailfaildata"}),"DetailFailData"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"subErrCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u9519\u8bef\u7801\u300220014 \u8868\u793a\u3010\u672a\u4e0b\u8f7d\u6570\u5b57\u4eba\u6c11\u5e01 APP\u3011")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"subErrMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f")))))}s.isMDXComponent=!0},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},26443:function(t,e,a){e.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);