"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6477],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14446:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"ReadResult",sidebar_label:"ReadResult"},o=void 0,p={unversionedId:"apis/files/ReadResult",id:"version-3.x/apis/files/ReadResult",title:"ReadResult",description:"\u6587\u4ef6\u8bfb\u53d6\u7ed3\u679c\u3002 \u901a\u8fc7 FileSystemManager.readSync \u63a5\u53e3\u8fd4\u56de",source:"@site/versioned_docs/version-3.x/apis/files/ReadResult.md",sourceDirName:"apis/files",slug:"/apis/files/ReadResult",permalink:"/taro-docs/en/docs/apis/files/ReadResult",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/files/ReadResult.md",tags:[],version:"3.x",frontMatter:{title:"ReadResult",sidebar_label:"ReadResult"},sidebar:"API",previous:{title:"FileSystemManager",permalink:"/taro-docs/en/docs/apis/files/FileSystemManager"},next:{title:"Stats",permalink:"/taro-docs/en/docs/apis/files/Stats"}},c={},s=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s},m="wrapper";function d(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(m,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6587\u4ef6\u8bfb\u53d6\u7ed3\u679c\u3002 \u901a\u8fc7 ",(0,n.kt)("a",a({parentName:"p"},{href:"./FileSystemManager#readsync"}),"FileSystemManager.readSync")," \u63a5\u53e3\u8fd4\u56de"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/ReadResult.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"bytesRead"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u5b9e\u9645\u8bfb\u53d6\u7684\u5b57\u8282\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"arrayBuffer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u88ab\u5199\u5165\u7684\u7f13\u5b58\u533a\u7684\u5bf9\u8c61\uff0c\u5373\u63a5\u53e3\u5165\u53c2\u7684 arrayBuffer")))),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"Harmony"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"ReadResult"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0},34208:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);