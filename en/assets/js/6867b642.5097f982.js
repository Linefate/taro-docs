"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66580],{79874:function(t,e,l){l.d(e,{Zo:function(){return s},kt:function(){return m}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=c(l),k=r,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(m,o(o({ref:e},s),{},{components:l})):n.createElement(m,o({ref:e},s))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},53928:function(t,e,l){l.r(e),l.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const o={title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},i=void 0,u={unversionedId:"apis/media/image/chooseImage",id:"version-3.x/apis/media/image/chooseImage",title:"Taro.chooseImage(option)",description:"Selects an image from the local album or takes a photo with the camera.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/image/chooseImage.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseImage",permalink:"/taro-docs/en/docs/apis/media/image/chooseImage",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/image/chooseImage.md",tags:[],version:"3.x",frontMatter:{title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},sidebar:"API",previous:{title:"chooseMessageFile",permalink:"/taro-docs/en/docs/apis/media/image/chooseMessageFile"},next:{title:"cropImage",permalink:"/taro-docs/en/docs/apis/media/image/cropImage"}},c={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"sizeType",id:"sizetype",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ImageFile",id:"imagefile",level:3},{value:"API Support",id:"api-support",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support-1",level:2}],p={toc:s},d="wrapper";function k(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)(d,r({},p,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Selects an image from the local album or takes a photo with the camera."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseImage.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"count"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The maximum number of images allowed")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sizeType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("original" | "compressed")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The size of the select image")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sourceType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("album" | "camera" | "user" | "environment")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The source of the image")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",r({},{id:"sizetype"}),"sizeType"),(0,n.kt)("p",null,"Valid values of object.sizeType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"original"),(0,n.kt)("td",null,"Original image")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"compressed"),(0,n.kt)("td",null,"compressed")))),(0,n.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,n.kt)("p",null,"Valid values of object.sourceType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"album"),(0,n.kt)("td",null,"Selects an image from the album")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,"Takes a photo with the camera")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"user"),(0,n.kt)("td",null,"Using the front camera (Only H5)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"environment"),(0,n.kt)("td",null,"Using the rear camera (Only H5)")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePaths"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",null,"The list of local temporary file paths to images")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFiles"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ImageFile[]")),(0,n.kt)("td",null,"The local temporary file list for images")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",r({},{id:"imagefile"}),"ImageFile"),(0,n.kt)("p",null,"List of local temporary files for images"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"path"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"The path to the local temporary file")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"The size of a local temporary file, in bytes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The MIME type of the file.",(0,n.kt)("br",null),"(Only H5)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"originalFileObj"),(0,n.kt)("td",null,(0,n.kt)("code",null,"File")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The original browser File object.",(0,n.kt)("br",null),"(Only H5)")))),(0,n.kt)("h4",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"ImageFile.type"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"ImageFile.originalFileObj"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  count: 1, // The default value is 9\n  sizeType: ['original', 'compressed'], // You can specify whether the image is original or compressed, both are available by default.\n  sourceType: ['album', 'camera'], // You can specify whether the source is an album or a camera, both are available by default.\n  success: function (res) {\n    // tempFilePath can be used as the src property of the img tag to display images.\n    var tempFilePaths = res.tempFilePaths\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseImage"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);