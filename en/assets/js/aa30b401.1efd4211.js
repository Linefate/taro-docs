"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49869],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),v=a,m=s["".concat(c,".").concat(v)]||s[v]||d[v]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},30263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},l=void 0,c={unversionedId:"apis/device/deviceMotion/onDeviceMotionChange",id:"version-1.x/apis/device/deviceMotion/onDeviceMotionChange",title:"Taro.onDeviceMotionChange(callback)",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",sourceDirName:"apis/device/deviceMotion",slug:"/apis/device/deviceMotion/onDeviceMotionChange",permalink:"/taro-docs/en/docs/1.x/apis/device/deviceMotion/onDeviceMotionChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},sidebar:"version-1.x/API",previous:{title:"stopDeviceMotionListening",permalink:"/taro-docs/en/docs/1.x/apis/device/deviceMotion/stopDeviceMotionListening"},next:{title:"closeBluetoothAdapter",permalink:"/taro-docs/en/docs/1.x/apis/device/bluetooth/closeBluetoothAdapter"}},p={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"callback(res)",id:"callbackres",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"object res",id:"object-res",level:5},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:u},d="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002"),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"callbackres"}),"callback(res)"),(0,r.kt)("p",null,"\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("h4",a({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,r.kt)("h5",a({},{id:"object-res"}),"object res"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"alpha"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5f53\u624b\u673a\u5750\u6807 X/Y \u548c \u5730\u7403 X/Y \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Z \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a alpha\uff0c\u8303\u56f4\u503c\u4e3a [0, 2*PI)\u3002\u9006\u65f6\u9488\u8f6c\u52a8\u4e3a\u6b63\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"beta"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5f53\u624b\u673a\u5750\u6807 Y/Z \u548c\u5730\u7403 Y/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 X \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a beta\u3002\u8303\u56f4\u503c\u4e3a [-1*PI, PI) \u3002\u9876\u90e8\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002\u4e5f\u6709\u53ef\u80fd\u671d\u7740\u7528\u6237\u4e3a\u6b63\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"gamma"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5f53\u624b\u673a X/Z \u548c\u5730\u7403 X/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Y \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a gamma\u3002\u8303\u56f4\u503c\u4e3a [-1*PI/2, PI/2)\u3002\u53f3\u8fb9\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002")))),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onDeviceMotionChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}v.isMDXComponent=!0}}]);