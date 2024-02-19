"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83585],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(93106);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[d]="string"==typeof t?t:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},695:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const l={title:"Taro.setInnerAudioOption(option)",sidebar_label:"setInnerAudioOption"},a=void 0,u={unversionedId:"apis/media/audio/setInnerAudioOption",id:"version-2.x/apis/media/audio/setInnerAudioOption",title:"Taro.setInnerAudioOption(option)",description:"\u8bbe\u7f6e InnerAudioContext \u7684\u64ad\u653e\u9009\u9879\u3002\u8bbe\u7f6e\u4e4b\u540e\u5bf9\u5f53\u524d\u5c0f\u7a0b\u5e8f\u5168\u5c40\u751f\u6548\u3002",source:"@site/versioned_docs/version-2.x/apis/media/audio/setInnerAudioOption.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/setInnerAudioOption",permalink:"/taro-docs/en/docs/2.x/apis/media/audio/setInnerAudioOption",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/audio/setInnerAudioOption.md",tags:[],version:"2.x",frontMatter:{title:"Taro.setInnerAudioOption(option)",sidebar_label:"setInnerAudioOption"},sidebar:"version-2.x/API",previous:{title:"stopVoice",permalink:"/taro-docs/en/docs/2.x/apis/media/audio/stopVoice"},next:{title:"playVoice",permalink:"/taro-docs/en/docs/2.x/apis/media/audio/playVoice"}},c={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:p},s="wrapper";function m(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(s,o({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bbe\u7f6e ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html"}),"InnerAudioContext")," \u7684\u64ad\u653e\u9009\u9879\u3002\u8bbe\u7f6e\u4e4b\u540e\u5bf9\u5f53\u524d\u5c0f\u7a0b\u5e8f\u5168\u5c40\u751f\u6548\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",o({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"mixWithOther"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u662f\u5426\u4e0e\u5176\u4ed6\u97f3\u9891\u6df7\u64ad\uff0c\u8bbe\u7f6e\u4e3a true \u4e4b\u540e\uff0c\u4e0d\u4f1a\u7ec8\u6b62\u5176\u4ed6\u5e94\u7528\u6216\u5fae\u4fe1\u5185\u7684\u97f3\u4e50")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"obeyMuteSwitch"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\uff08\u4ec5\u5728 iOS \u751f\u6548\uff09\u662f\u5426\u9075\u5faa\u9759\u97f3\u5f00\u5173\uff0c\u8bbe\u7f6e\u4e3a false \u4e4b\u540e\uff0c\u5373\u4f7f\u662f\u5728\u9759\u97f3\u6a21\u5f0f\u4e0b\uff0c\u4e5f\u80fd\u64ad\u653e\u58f0\u97f3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.setInnerAudioOption"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);