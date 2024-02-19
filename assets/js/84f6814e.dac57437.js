"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18852],{79874:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(93106);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90062:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});t(93106);var n=t(79874);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},l=void 0,c={unversionedId:"apis/worker/createWorker",id:"version-2.x/apis/worker/createWorker",title:"Taro.createWorker(scriptPath)",description:"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 Worker.terminate",source:"@site/versioned_docs/version-2.x/apis/worker/createWorker.md",sourceDirName:"apis/worker",slug:"/apis/worker/createWorker",permalink:"/taro-docs/docs/2.x/apis/worker/createWorker",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/worker/createWorker.md",tags:[],version:"2.x",frontMatter:{title:"Taro.createWorker(scriptPath)",sidebar_label:"createWorker"},sidebar:"version-2.x/API",previous:{title:"vibrateLong",permalink:"/taro-docs/docs/2.x/apis/device/vibrate/vibrateLong"},next:{title:"Worker",permalink:"/taro-docs/docs/2.x/apis/worker/"}},p={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s},k="wrapper";function d(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)(k,o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002\u76ee\u524d\u9650\u5236\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a Worker\uff0c\u521b\u5efa\u4e0b\u4e00\u4e2a Worker \u524d\u8bf7\u5148\u8c03\u7528 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html"}),"Worker.terminate")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(scriptPath: string) => Worker\n")),(0,n.kt)("h2",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"scriptPath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"worker \u5165\u53e3\u6587\u4ef6\u7684",(0,n.kt)("strong",null,"\u7edd\u5bf9\u8def\u5f84"))))),(0,n.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const worker = Taro.createWorker('workers/request/index.js') // \u6587\u4ef6\u540d\u6307\u5b9a worker \u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\uff0c\u7edd\u5bf9\u8def\u5f84\n  worker.onMessage(function (res) {\n  console.log(res)\n})\nworker.postMessage({\n  msg: 'hello worker'\n})\nworker.terminate()\n")),(0,n.kt)("h2",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.createWorker"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);