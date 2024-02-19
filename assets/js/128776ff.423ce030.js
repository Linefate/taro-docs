"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59381],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33572:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Taro.onBLEConnectionStateChange(CALLBACK)",sidebar_label:"onBLEConnectionStateChange"},c=void 0,l={unversionedId:"apis/device/ble/onBLEConnectionStateChange",id:"version-1.x/apis/device/ble/onBLEConnectionStateChange",title:"Taro.onBLEConnectionStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.onBLEConnectionStateChange\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/onBLEConnectionStateChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/onBLEConnectionStateChange",permalink:"/taro-docs/docs/1.x/apis/device/ble/onBLEConnectionStateChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/ble/onBLEConnectionStateChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onBLEConnectionStateChange(CALLBACK)",sidebar_label:"onBLEConnectionStateChange"},sidebar:"version-1.x/API",previous:{title:"onBLECharacteristicValueChange",permalink:"/taro-docs/docs/1.x/apis/device/ble/onBLECharacteristicValueChange"},next:{title:"readBLECharacteristicValue",permalink:"/taro-docs/docs/1.x/apis/device/ble/readBLECharacteristicValue"}},s={},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],p={toc:u},d="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(d,o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBLEConnectionStateChange.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"wx.onBLEConnectionStateChange")),"\u3002"),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onBLEConnectionStateChange(res => {\n  // \u8be5\u65b9\u6cd5\u56de\u8c03\u4e2d\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u610f\u5916\u65ad\u5f00\u7b49\u5f02\u5e38\u60c5\u51b5\n  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)\n})\n")))}f.isMDXComponent=!0}}]);