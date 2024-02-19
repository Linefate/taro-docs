"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50687],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return y}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),i=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=i(r),m=a,y=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(y,l(l({ref:e},p),{},{components:r})):n.createElement(y,l({ref:e},p))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[s]="string"==typeof t?t:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51061:function(t,e,r){r.r(e),r.d(e,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",authors:"luckyadam",tags:["v1"]},c=void 0,u={permalink:"/taro-docs/blog/2018-12-18-taro-1-2",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2018-12-18-taro-1-2.md",source:"@site/blog/2018-12-18-taro-1-2.md",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",description:"\u5728\u8ddd\u79bb Taro 1.1 \u53d1\u5e03 \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 500 \u591a\u6b21\u63d0\u4ea4\u548c 17 \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002",date:"2018-12-18T00:00:00.000Z",formattedDate:"2018\u5e7412\u670818\u65e5",tags:[{label:"v1",permalink:"/taro-docs/blog/tags/v-1"}],readingTime:7.045,hasTruncateMarker:!0,authors:[{name:"\u9694\u58c1\u8001\u674e",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/luckyadam",imageURL:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",key:"luckyadam"}],frontMatter:{slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",authors:"luckyadam",tags:["v1"]},prevItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro-docs/blog/2019-02-25-taro-ui-2.0"},nextItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/taro-docs/blog/2018-11-05-taro-1-1"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p},f="wrapper";function m(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(f,a({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u8ddd\u79bb ",(0,n.kt)("a",a({parentName:"p"},{href:"https://aotu.io/notes/2018/11/05/taro-1-1/"}),"Taro 1.1 \u53d1\u5e03")," \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 ",(0,n.kt)("strong",{parentName:"p"},"500")," \u591a\u6b21\u63d0\u4ea4\u548c ",(0,n.kt)("strong",{parentName:"p"},"17")," \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002"),(0,n.kt)("p",null,"Taro 1.2 \u6bd4\u8d77 Taro 1.1 \u548c\u5176\u5b83\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\uff0c\u589e\u52a0\u4e86\u8bb8\u591a\u9996\u6b21\u5728\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"#taroize"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"#tt"}),"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"#css"}),"CSS Modules \u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"#mobx"}),"MobX \u652f\u6301"))))}m.isMDXComponent=!0}}]);