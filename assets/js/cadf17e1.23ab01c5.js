"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[32717],{79874:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(93106);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28262:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});t(93106);var n=t(79874);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Taro.createMediaQueryObserver()",sidebar_label:"createMediaQueryObserver"},c=void 0,s={unversionedId:"apis/wxml/createMediaQueryObserver",id:"apis/wxml/createMediaQueryObserver",title:"Taro.createMediaQueryObserver()",description:"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a MediaQueryObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 this.createMediaQueryObserver() \u6765\u4ee3\u66ff\u3002",source:"@site/docs/apis/wxml/createMediaQueryObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/createMediaQueryObserver",permalink:"/taro-docs/docs/next/apis/wxml/createMediaQueryObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/wxml/createMediaQueryObserver.md",tags:[],version:"current",frontMatter:{title:"Taro.createMediaQueryObserver()",sidebar_label:"createMediaQueryObserver"},sidebar:"API",previous:{title:"createIntersectionObserver",permalink:"/taro-docs/docs/next/apis/wxml/createIntersectionObserver"},next:{title:"IntersectionObserver",permalink:"/taro-docs/docs/next/apis/wxml/IntersectionObserver"}},l={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p},f="wrapper";function d(e){var{components:r}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a MediaQueryObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"this.createMediaQueryObserver()")," \u6765\u4ee3\u66ff\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:t(41524).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:t(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:t(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:t(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#Media%20Query"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => MediaQueryObserver\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"let createMediaQueryObserver\nif (process.env.TARO_ENV === 'weapp') {\n   // \u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u53ea\u80fd\u83b7\u53d6Page\u7ea7\u7ec4\u4ef6\u5b9e\u4f8b\n   createMediaQueryObserver = Taro.getCurrentInstance().page.createMediaQueryObserver\n} else if (process.env.TARO_ENV === 'h5') {\n   createMediaQueryObserver= Taro.createMediaQueryObserver\n}\nconst mediaQueryObserver = createMediaQueryObserver()\n")))}d.isMDXComponent=!0},34208:function(e,r,t){r.Z=t.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,r,t){r.Z=t.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(e,r,t){r.Z=t.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(e,r,t){r.Z=t.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);