"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3719],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return v}});var r=n(93106);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=u(n),k=i,v=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return n?r.createElement(v,o(o({ref:e},s),{},{components:n})):r.createElement(v,o({ref:e},s))}));function v(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=k;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[p]="string"==typeof t?t:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22851:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const o={title:"Taro.startDeviceMotionListening(option)",sidebar_label:"startDeviceMotionListening"},a=void 0,c={unversionedId:"apis/device/motion/startDeviceMotionListening",id:"version-2.x/apis/device/motion/startDeviceMotionListening",title:"Taro.startDeviceMotionListening(option)",description:"\u5f00\u59cb\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u7684\u53d8\u5316\u3002",source:"@site/versioned_docs/version-2.x/apis/device/motion/startDeviceMotionListening.md",sourceDirName:"apis/device/motion",slug:"/apis/device/motion/startDeviceMotionListening",permalink:"/taro-docs/docs/2.x/apis/device/motion/startDeviceMotionListening",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/motion/startDeviceMotionListening.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startDeviceMotionListening(option)",sidebar_label:"startDeviceMotionListening"},sidebar:"version-2.x/API",previous:{title:"stopDeviceMotionListening",permalink:"/taro-docs/docs/2.x/apis/device/motion/stopDeviceMotionListening"},next:{title:"onDeviceMotionChange",permalink:"/taro-docs/docs/2.x/apis/device/motion/onDeviceMotionChange"}},u={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"interval",id:"interval",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:s},d="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(d,i({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f00\u59cb\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u7684\u53d8\u5316\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,r.kt)("h2",i({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",i({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"interval"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"game" | "ui" | "normal"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"normal"')),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u7684\u53d8\u5316\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",i({},{id:"interval"}),"interval"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"game"),(0,r.kt)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0\u6e38\u620f\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 20ms/\u6b21 \u5de6\u53f3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ui"),(0,r.kt)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0 UI \u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 60ms/\u6b21 \u5de6\u53f3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"normal"),(0,r.kt)("td",null,"\u666e\u901a\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 200ms/\u6b21 \u5de6\u53f3")))),(0,r.kt)("h2",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.startDeviceMotionListening"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);