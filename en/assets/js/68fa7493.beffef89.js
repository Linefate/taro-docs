"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49176],{79874:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(r),s=a,m=p["".concat(c,".").concat(s)]||p[s]||g[s]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},57824:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},u=void 0,c={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"version-3.x/apis/media/background-audio/getBackgroundAudioManager",title:"Taro.getBackgroundAudioManager()",description:"Obtains the globally unique background audio manager. The playback of an audio file continues when the Mini Program is switched to the background. However, the audio playback status at the background cannot be controlled by calling an API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/background-audio/getBackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro-docs/en/docs/apis/media/background-audio/getBackgroundAudioManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/background-audio/getBackgroundAudioManager.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},sidebar:"API",previous:{title:"getBackgroundAudioPlayerState",permalink:"/taro-docs/en/docs/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro-docs/en/docs/apis/media/background-audio/BackgroundAudioManager"}},d={},l=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:l},g="wrapper";function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(g,a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Obtains the ",(0,n.kt)("strong",{parentName:"p"},"globally unique")," background audio manager. The playback of an audio file continues when the Mini Program is switched to the background. However, the audio playback status at the background cannot be controlled by calling an API."),(0,n.kt)("p",null,"As of WeChat 6.7.2, you need to configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," attribute in ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"app.json")," in order to continue playing an audio file after the Mini Program switches to the background. This property takes effect directly in the developer and demo versions, but must be approved before working in the official version."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => BackgroundAudioManager\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = 'At this Very Moment'\nbackgroundAudioManager.epname = 'At this Very Moment'\nbackgroundAudioManager.singer = 'Xu Wei'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\n// Plays automatically after src is set\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\n")),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getBackgroundAudioManager"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);