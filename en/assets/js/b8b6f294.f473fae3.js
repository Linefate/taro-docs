"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10523],{79874:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,h=c["".concat(i,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"UpdateManager",sidebar_label:"UpdateManager"},p=void 0,i={unversionedId:"apis/base/update/UpdateManager",id:"version-3.x/apis/base/update/UpdateManager",title:"UpdateManager",description:"The UpdateManager object, which is used to manage updates. Instances can be obtained via the Taro.getUpdateManager API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/update/UpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/UpdateManager",permalink:"/taro-docs/en/docs/apis/base/update/UpdateManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/update/UpdateManager.md",tags:[],version:"3.x",frontMatter:{title:"UpdateManager",sidebar_label:"UpdateManager"},sidebar:"API",previous:{title:"getUpdateManager",permalink:"/taro-docs/en/docs/apis/base/update/getUpdateManager"},next:{title:"getLaunchOptionsSync",permalink:"/taro-docs/en/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"}},u={},d=[{value:"Methods",id:"methods",level:2},{value:"applyUpdate",id:"applyupdate",level:3},{value:"onCheckForUpdate",id:"oncheckforupdate",level:3},{value:"onUpdateFailed",id:"onupdatefailed",level:3},{value:"onUpdateReady",id:"onupdateready",level:3},{value:"Parameter",id:"parameter",level:2},{value:"OnCheckForUpdateCallback",id:"oncheckforupdatecallback",level:3},{value:"OnCheckForUpdateResult",id:"oncheckforupdateresult",level:3}],c={toc:d},s="wrapper";function k(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(s,r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The UpdateManager object, which is used to manage updates. Instances can be obtained via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.getUpdateManager")," API."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"methods"}),"Methods"),(0,n.kt)("h3",r({},{id:"applyupdate"}),"applyUpdate"),(0,n.kt)("p",null,"Forces a Mini Program to restart and update to the latest version. This API is called after the new Mini Program version is downloaded (i.e., when the ",(0,n.kt)("inlineCode",{parentName:"p"},"onUpdateReady")," callback is received)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.applyUpdate.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h3",r({},{id:"oncheckforupdate"}),"onCheckForUpdate"),(0,n.kt)("p",null,"Listens on the event that a request for checking for updates is sent to the WeChat backend. WeChat automatically checks for updates when the Mini program cold starts. The developer does not need to trigger this method."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onCheckForUpdate.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCheckForUpdateCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnCheckForUpdateCallback")),(0,n.kt)("td",null,"The callback function for the event that a request for checking for updates is sent to the WeChat backend.")))),(0,n.kt)("h3",r({},{id:"onupdatefailed"}),"onUpdateFailed"),(0,n.kt)("p",null,"Listens on Mini Program update failure event. The app, instead of the developer, triggers the download when a newer version is available. A callback is performed when the download fails (probably due to network problems)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onUpdateFailed.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for Mini Program update failure event.")))),(0,n.kt)("h3",r({},{id:"onupdateready"}),"onUpdateReady"),(0,n.kt)("p",null,"Listens on the event that a newer Mini Program version is available. The app, instead of the developer, triggers the download. A callback is performed after successful download."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onUpdateReady.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that a newer Mini Program version is available.")))),(0,n.kt)("h2",r({},{id:"parameter"}),"Parameter"),(0,n.kt)("h3",r({},{id:"oncheckforupdatecallback"}),"OnCheckForUpdateCallback"),(0,n.kt)("p",null,"The callback function for the event that a request for checking for updates is sent to the WeChat backend."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnCheckForUpdateResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnCheckForUpdateResult"))))),(0,n.kt)("h3",r({},{id:"oncheckforupdateresult"}),"OnCheckForUpdateResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"hasUpdate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",null,"Indicates whether a new version is available")))))}k.isMDXComponent=!0}}]);