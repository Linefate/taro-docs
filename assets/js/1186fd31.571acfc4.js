"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70940],{79874:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return n?r.createElement(m,o(o({ref:e},f),{},{components:n})):r.createElement(m,o({ref:e},f))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1667:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"WifiInfo",sidebar_label:"WifiInfo"},l=void 0,c={unversionedId:"apis/device/wifi/WifiInfo",id:"apis/device/wifi/WifiInfo",title:"WifiInfo",description:"Wifi \u4fe1\u606f",source:"@site/docs/apis/device/wifi/WifiInfo.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/WifiInfo",permalink:"/taro-docs/docs/next/apis/device/wifi/WifiInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/wifi/WifiInfo.md",tags:[],version:"current",frontMatter:{title:"WifiInfo",sidebar_label:"WifiInfo"},sidebar:"API",previous:{title:"connectWifi",permalink:"/taro-docs/docs/next/apis/device/wifi/connectWifi"},next:{title:"addPhoneRepeatCalendar",permalink:"/taro-docs/docs/next/apis/device/calendar/addPhoneRepeatCalendar"}},p={},f=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2}],u={toc:f},d="wrapper";function s(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(d,a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wifi \u4fe1\u606f"),(0,r.kt)("p",null,"\u6ce8\u610f:\n\u5b89\u5353 Taro.connectWifi / Taro.getConnectedWifi \u82e5\u8bbe\u7f6e\u4e86 partialInfo:true \uff0c\u6216\u8005\u8c03\u7528\u4e86 Taro.onWifiConnectedWithPartialInfo \u4e8b\u4ef6\u3002\u5c06\u4f1a\u8fd4\u56de\u53ea\u5305\u542b SSID \u5c5e\u6027\u7684 WifiInfo \u5bf9\u8c61\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd Wi-Fi \u5df2\u7ecf\u8fde\u63a5\u6210\u529f\uff0c\u4f46\u4f1a\u56e0\u4e3a\u83b7\u53d6\u4e0d\u5230\u5b8c\u6574\u7684 WifiInfo \u5bf9\u8c61\u62a5\u9519\u3002\u5177\u4f53\u9519\u8bef\u4fe1\u606f\u4e3a errCode: 12010, errMsg: can't gain current wifi \u3002\u5982\u679c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u5b8c\u6574\u7684 WifiInfo \u5bf9\u8c61\uff0c\b\u5219\u53ef\u4ee5\u901a\u8fc7\u91c7\u53d6\u4e0a\u8ff0\u7b56\u7565\u89e3\u51b3\u62a5\u9519\u95ee\u9898\u3002"),(0,r.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Wi-Fi \u7684 SSID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"BSSID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Wi-Fi \u7684 BSSID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"secure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Wi-Fi \u662f\u5426\u5b89\u5168")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"signalStrength"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Wi-Fi \u4fe1\u53f7\u5f3a\u5ea6, \u5b89\u5353\u53d6\u503c 0 \uff5e 100 \uff0ciOS \u53d6\u503c 0 \uff5e 1 \uff0c\u503c\u8d8a\u5927\u5f3a\u5ea6\u8d8a\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"frequency"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Wi-Fi \u9891\u6bb5\u5355\u4f4d MHz")))))}s.isMDXComponent=!0}}]);