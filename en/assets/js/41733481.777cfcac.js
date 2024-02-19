"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68178],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Taro.getUserInfo(option)",sidebar_label:"getUserInfo"},i=void 0,s={unversionedId:"apis/open-api/user-info/getUserInfo",id:"apis/open-api/user-info/getUserInfo",title:"Taro.getUserInfo(option)",description:"Gets user information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/user-info/getUserInfo.md",sourceDirName:"apis/open-api/user-info",slug:"/apis/open-api/user-info/getUserInfo",permalink:"/taro-docs/en/docs/next/apis/open-api/user-info/getUserInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/open-api/user-info/getUserInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.getUserInfo(option)",sidebar_label:"getUserInfo"},sidebar:"API",previous:{title:"getUserProfile",permalink:"/taro-docs/en/docs/next/apis/open-api/user-info/getUserProfile"},next:{title:"UserInfo",permalink:"/taro-docs/en/docs/next/apis/open-api/user-info/UserInfo"}},u={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:c},p="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(p,a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gets user information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API Adjustment Description"),"\nIf this API is called after user authorization is obtained, the user information is returned. If this API is called without user authorization, the authorization pop-up window will not appear, and the fail callback is directly executed. (For details, see ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01"}),"Announcement"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/user-info/wx.getUserInfo.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"lang"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The language of the displayed user information")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"withCredentials"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Indicates whether to include login status information. When withCredentials is true, ",(0,r.kt)("code",null,"Taro.login")," must be called previously and the login status must be effective. In this case, sensitive information such as encryptedData and iv is returned. When withCredentials is false, the login status is not required, and sensitive information such as encryptedData and iv is not returned.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",a({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"cloudID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The Cloud ID corresponding to sensitive data. It is returned only in Mini Programs for which ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/wxcloud/basis/getting-started.html"},"Cloud Base")," is enabled. The open data can be directly obtained via cloud call. See ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#method-cloud"},"details"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"encryptedData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The complete encrypted user data, including the sensitive data. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"iv"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The initial vector of the encryption algorithm. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"rawData"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Raw data string that excludes sensitive information and is used to calculate signatures.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"signature"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The string generated with SHA-1 (rawData + sessionkey), which is used to verify the user information. For details, see ",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#Encryption-Algorithm-for-Encrypted-Data"},"signature, verification, encryption, and decryption of user data"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userInfo"),(0,r.kt)("td",null,(0,r.kt)("code",null,"UserInfo")),(0,r.kt)("td",null,"User information object, excluding openid and other sensitive information.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"// It must be called after user authorization is obtained.\nTaro.getUserInfo({\n  success: function(res) {\n    var userInfo = res.userInfo\n    var nickName = userInfo.nickName\n    var avatarUrl = userInfo.avatarUrl\n    var gender = userInfo.gender // Gender: 0 - Unknown; 1 - Male; 2 - Female\n    var province = userInfo.province\n    var city = userInfo.city\n    var country = userInfo.country\n  }\n})\n")),(0,r.kt)("p",null,"There are two ways to get sensitive data. One is to use the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#decryption-algorithm-for-encrypted-data"}),"Decryption Algorithm for Encrypted Data"),". The acquired open data has the following json structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "openId": "OPENID",\n  "nickName": "NICKNAME",\n  "gender": GENDER,\n  "city": "CITY",\n  "province": "PROVINCE",\n  "country": "COUNTRY",\n  "avatarUrl": "AVATARURL",\n  "unionId": "UNIONID",\n  "watermark": {\n    "appid":"APPID",\n    "timestamp": TIMESTAMP\n  }\n}\n')),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getUserInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);