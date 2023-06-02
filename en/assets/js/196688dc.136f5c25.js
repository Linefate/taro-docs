"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3883],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=c(r),d=o,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||a;return r?n.createElement(m,l(l({ref:e},u),{},{components:r})):n.createElement(m,l({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},38812:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const l={slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",authors:"yuche",tags:["v1"]},i=void 0,p={permalink:"/taro-docs/en/blog/2019-06-13-taro-1-3",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2019-06-13-taro-1-3.md",source:"@site/blog/2019-06-13-taro-1-3.md",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",description:"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002",date:"2019-06-13T00:00:00.000Z",formattedDate:"June 13, 2019",tags:[{label:"v1",permalink:"/taro-docs/en/blog/tags/v-1"}],readingTime:13.49,hasTruncateMarker:!0,authors:[{name:"yuche",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",key:"yuche"}],frontMatter:{slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",authors:"yuche",tags:["v1"]},prevItem:{title:"Taro \u300c\u7269\u6599\u5e02\u573a\u300d\u53ca\u300c\u4ea4\u6d41\u793e\u533a\u300d \u60ca\u559c\u4e0a\u7ebf",permalink:"/taro-docs/en/blog/2019-06-21-taro-ext-club"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro-docs/en/blog/2019-03-12-mini-program-framework-full-review"}},c={authorsImageUrls:[void 0]},u=[{value:"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1",id:"\u652f\u6301\u5feb\u5e94\u7528\u548c-qq-\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1",level:2},{value:"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks",id:"\u5168\u9762\u652f\u6301-jsx-\u8bed\u6cd5\u548c-react-hooks",level:2},{value:"\u5168\u65b0\u751f\u547d\u5468\u671f\u548c Context API",id:"\u5168\u65b0\u751f\u547d\u5468\u671f\u548c-context-api",level:2},{value:"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027",id:"\u5927\u5e45\u63d0\u9ad8-h5-\u6027\u80fd\u548c\u53ef\u7528\u6027",level:2},{value:"Taro Doctor",id:"taro-doctor",level:2},{value:"\u8fd8\u6709\u66f4\u591a",id:"\u8fd8\u6709\u66f4\u591a",level:2},{value:"\u7ec4\u4ef6\u4f20\u53c2\uff08props\uff09\u7cfb\u7edf\u91cd\u6784",id:"\u7ec4\u4ef6\u4f20\u53c2props\u7cfb\u7edf\u91cd\u6784",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177\uff08CLI\uff09 \u91cd\u6784",id:"\u547d\u4ee4\u884c\u5de5\u5177cli-\u91cd\u6784",level:3},{value:"\u79fb\u52a8\u7aef\u5bb9\u5668\u66f4\u6362",id:"\u79fb\u52a8\u7aef\u5bb9\u5668\u66f4\u6362",level:3},{value:"\u652f\u6301\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",id:"\u652f\u6301\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",level:3},{value:"\u652f\u6301\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d",id:"\u652f\u6301\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1",level:3},{value:"\u5347\u7ea7\u517c\u5bb9\u6027",id:"\u5347\u7ea7\u517c\u5bb9\u6027",level:2},{value:"JSX \u4e2d\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u5fc5\u987b\u7ed1\u5b9a\u4f5c\u7528\u57df",id:"jsx-\u4e2d\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u5fc5\u987b\u7ed1\u5b9a\u4f5c\u7528\u57df",level:4},{value:"\u6682\u65f6\u65e0\u6cd5\u5728\u539f\u751f\u5e94\u7528\u4e2d\u4f7f\u7528 Taro \u7ec4\u4ef6",id:"\u6682\u65f6\u65e0\u6cd5\u5728\u539f\u751f\u5e94\u7528\u4e2d\u4f7f\u7528-taro-\u7ec4\u4ef6",level:4},{value:"\u5728\u6846\u67b6\u4e4b\u5916",id:"\u5728\u6846\u67b6\u4e4b\u5916",level:2}],s={toc:u};function k(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002"),(0,n.kt)("p",null,"Taro 1.3 \u662f\u6211\u4eec\u915d\u917f\u6700\u4e45\u7684\u7248\u672c\uff1a\u7ecf\u5386\u4e86\u6a2a\u8de8 6 \u4e2a\u6708\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u8fd1 2000 \u6b21\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u8fd1\u767e\u4f4d\u5f00\u53d1\u8005\u7684\u5171\u540c\u53c2\u4e0e\u3002\u6211\u4eec\u7ec8\u4e8e\u5728\u4eca\u5929\u9a84\u50b2\u5730\u53d1\u5e03\u4e86 Taro 1.3\u3002"),(0,n.kt)("p",null,"Taro 1.3 \u7684\u7279\u6027\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027"),(0,n.kt)("li",{parentName:"ul"},"Taro Doctor")),(0,n.kt)("h2",o({},{id:"\u652f\u6301\u5feb\u5e94\u7528\u548c-qq-\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"}),"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"),(0,n.kt)("p",null,"\u5feb\u5e94\u7528\u7684\u5f00\u53d1\u6a21\u5f0f\u975e\u5e38\u7279\u522b\uff0c\u5b83\u7684 API\u3001\u7ec4\u4ef6\u7cfb\u7edf\u3001\u7ec4\u4ef6\u5e93\u548c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u7aef\u5dee\u5f02\u975e\u5e38\u5927\uff0c\u5e76\u4e14\u5feb\u5e94\u7528\u53ea\u662f\u4e00\u4e2a\u6807\u51c6\uff0c\u5404\u5bb6\u5b89\u5353\u5382\u5546\u5bf9\u8fd0\u884c\u65f6\u7684\u5b9e\u73b0\u4e5f\u5404\u4e0d\u76f8\u540c\u3002\u800c\u8fd9\u5757\u300c\u786c\u9aa8\u5934\u300d\u7ec8\u4e8e\u4e5f\u88ab Taro \u5543\u4e0b\u4e86\u3002"),(0,n.kt)("p",null,"QQ \u5c0f\u7a0b\u5e8f\u4f5c\u4e3a\u65b0\u5174\u7684\u5c0f\u7a0b\u5e8f\u7c7b\u5bb9\u5668\uff0c\u5927\u5bb6\u666e\u904d\u5bf9\u5b83\u77e5\u4e4b\u751a\u5c11\uff0c\u4f46 Taro \u4e5f\u7387\u5148\u5b9e\u73b0\u4e86\u5bf9 QQ \u5c0f\u7a0b\u5e8f\u7684\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u610f\u5473\u7740 Taro \u771f\u6b63\u5bf9\u4e1a\u754c\u4e3b\u6d41\u5c0f\u7a0b\u5e8f\u5b9e\u73b0\u4e86\u300c\u5168\u8986\u76d6\u300d\uff0c\u4e0d\u7ba1\u4f60\u7684\u4e1a\u52a1\u8981\u652f\u6301\u54ea\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u53ea\u8981\u7ef4\u62a4\u4e00\u5957\u4ee3\u7801\uff0cTaro \u5c31\u80fd\u751f\u6210\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u4ee3\u7801\u3002\u540c\u65f6 Taro \u4e5f\u6210\u4e3a\u4e86\u4e1a\u754c\u9996\u4e2a\u540c\u65f6\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u3001\u6296\u97f3\u5c0f\u7a0b\u5e8f\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5feb\u5e94\u7528\u3001QQ \u5c0f\u7a0b\u5e8f\u5171 6 \u7aef\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1\u6846\u67b6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://i.loli.net/2019/06/12/5d00a06c3241c16517.png",alt:"taro.jd.com.png"}))),(0,n.kt)("h2",o({},{id:"\u5168\u9762\u652f\u6301-jsx-\u8bed\u6cd5\u548c-react-hooks"}),"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u4f7f\u7528 React \u548c JSX \u8bed\u6cd5\u7684\u5f00\u53d1\u6846\u67b6\uff0cTaro \u65e9\u671f\u7684\u7248\u672c\u5728\u7f16\u8bd1\u5668\u548c\u7f16\u8f91\u5668\u68c0\u67e5\u5de5\u5177\u90fd\u5bf9\u8bed\u6cd5\u505a\u4e86\u9ad8\u5f3a\u5ea6\u7684\u9650\u5236\u3002\u800c\u5728 Taro 1.3 \u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5145\u5206\u53d1\u6325\u81ea\u5df1\u7684\u521b\u9020\u529b\u548c\u60f3\u8c61\u529b\uff0c\u53ef\u4ee5\u4efb\u610f\u5730\u5199 ",(0,n.kt)("inlineCode",{parentName:"p"},"if-else"),"\uff0c\u53ef\u4ee5\u4efb\u610f\u5730\u5199\u533f\u540d\u51fd\u6570\uff0c\u53ef\u4ee5\u628a JSX \u653e\u5728\u7c7b\u51fd\u6570\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728\u666e\u901a\u51fd\u6570\u4e2d\uff0c\u7b49\u7b49\u3002\u53ea\u8981\u7f16\u8bd1\u5668\u548c\u548c ESLint \u4e0d\u62a5\u9519\uff0c\u5c31\u53ef\u4ee5\u8fd9\u4e48\u5199\u3002"),(0,n.kt)("p",null,"\u867d\u7136 React Hooks \u6b63\u5f0f\u7a33\u5b9a\u7684\u65f6\u95f4\u5e76\u4e0d\u957f\uff0c\u4f46\u6211\u4eec\u8ba4\u4e3a\u8fd9\u4e2a\u7279\u6027\u80fd\u6709\u6548\u5730\u7b80\u5316\u5f00\u53d1\u6a21\u5f0f\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u5f00\u53d1\u4f53\u9a8c\u3002\u5373\u4fbf Hooks \u7684\u751f\u6001\u548c\u6700\u4f73\u5b9e\u8df5\u8fd8\u5c1a\u672a\u5b8c\u5584\uff0c\u4f46\u6211\u4eec\u76f8\u4fe1\u672a\u6765 Hooks \u4f1a\u6210\u4e3a React \u5f00\u53d1\u6a21\u5f0f\u7684\u4e3b\u6d41\uff0c\u4e5f\u4f1a\u6df1\u523b\u5730\u5f71\u54cd\u5176\u5b83\u6846\u67b6\u672a\u6765\u7684 API \u6784\u6210\u3002\u6240\u4ee5\u6211\u4eec\u4f18\u5148\u628a React Hooks \u5e26\u5230\u4e86 Taro \u4e2d\uff0c\u8fd8\u5199\u4e86\u4e24\u4e2a\u5c0f\u4f8b\u5b50\u5c55\u793a\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528 Hooks\uff1a"),(0,n.kt)("p",null,"V2EX: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-v2ex-hooks"}),"https://github.com/NervJS/taro-v2ex-hooks")),(0,n.kt)("p",null,"TodoMVC: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-todomvc-hooks"}),"https://github.com/NervJS/taro-todomvc-hooks")),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://i.loli.net/2019/06/12/5d00a06a479f225719.png",alt:"carbon.png"}))),(0,n.kt)("h2",o({},{id:"\u5168\u65b0\u751f\u547d\u5468\u671f\u548c-context-api"}),"\u5168\u65b0\u751f\u547d\u5468\u671f\u548c Context API"),(0,n.kt)("p",null,"\u5728 Taro 1.3 \u6211\u4eec\u8fd8\u5b9e\u73b0\u4e86 React 16 \u7684\u65b0\u751f\u547d\u5468\u671f\u51fd\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromProps()")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"getSnapshotBeforeUpdate()"),"\u3002\u5f53\u65b0\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u6ce8\u5165\u5230\u7c7b\u7ec4\u4ef6\u65f6\uff0c\u8001\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u5c06\u4e0d\u4f1a\u88ab\u8c03\u7528\uff0c\u6ca1\u6709\u4f7f\u7528\u65b0\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u5219\u4e0d\u4f1a\u5f71\u54cd\u539f\u6709\u751f\u547d\u5468\u671f\u7684\u8c03\u7528\u3002\u5c31\u591a\u6570\u60c5\u51b5\u800c\u8a00\uff0c\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528\u65b0\u7684\u751f\u547d\u5468\u671f\u6765\u6784\u5efa\u4f60\u7684\u7c7b\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u8fd9\u6837\u80fd\u51cf\u5c11\u4e00\u6b21\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u5f00\u9500\u3002\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u67e5\u770b",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/apis/about/tarocomponent#static-getderivedstatefromprops"}),"\u76f8\u5173\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"Taro 1.3 \u8fd8\u5b9e\u73b0\u4e86 React 16 \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"createContext"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"contextType")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"useContext")," API\u3002\u65b0 Context \u901a\u8fc7\u58f0\u660e\u5f0f\u7684 API \u6765\u4f20\u9012\u7ec4\u4ef6\u7684\u66f4\u65b0\uff0c\u4f7f\u5f97 Taro \u8de8\u7ec4\u4ef6\u901a\u4fe1\u548c\u5171\u4eab\u72b6\u6001\u66f4\u4e3a\u76f4\u89c2\u3002\u540c\u65f6\uff0c\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"react-redux")," \u8fd9\u6837\u7684\u70ed\u95e8\u5e93\u4e5f\u6b63\u5728\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"Context")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Hooks")," \u8fdb\u884c\u91cd\u6784\uff0c\u6211\u4eec\u4e5f\u975e\u5e38\u671f\u5f85\u4e0e\u793e\u533a\u4e00\u8d77\u63a2\u7d22 React/Taro \u65b0\u7684\u5f00\u53d1\u4e0e\u8bbe\u8ba1\u6a21\u5f0f\u3002"),(0,n.kt)("h2",o({},{id:"\u5927\u5e45\u63d0\u9ad8-h5-\u6027\u80fd\u548c\u53ef\u7528\u6027"}),"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u9664\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e4b\u5916\u9700\u6c42\u91cf\u6700\u9ad8\u7684\u7aef\uff0c\u6211\u4eec\u4e00\u76f4\u90fd\u90e8\u7f72\u4e86\u91cd\u8981\u7684\u5f00\u53d1\u6218\u529b\u5728 H5 \u7aef\u3002\u800c\u5728 Taro 1.3 \u4e2d\uff0c\u6211\u4eec\u4f18\u5316\u4e86\u7f16\u8bd1\u4ee3\u7801\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u4e86\u8d44\u6e90\u6700\u5c0f\u5f15\u5165\u548c\u6309\u9700\u5f15\u5165\uff0c\u5c06\u539f\u6709\u6700\u5c0f\u9879\u76ee\u7684\u7f16\u8bd1\u5927\u5c0f\u964d\u4f4e\u4e86 80% \u5de6\u53f3\u3002\u8fd9\u5bf9\u4e8e\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73\u7684 H5 \u7aef\u65e0\u7591\u662f\u5de8\u5927\u7684\u63d0\u5347\u3002"),(0,n.kt)("p",null,"H5 \u7aef\u7684 API \u6570\u91cf\u548c\u8d28\u91cf\u4e5f\u5f97\u5230\u4e86\u5927\u5e45\u5730\u589e\u957f\uff0cTaro 1.3 \u65b0\u589e\u4e86 28 \u4e2a H5 API\uff0c\u89e3\u51b3\u4e86\u4e0a\u767e\u4e2a H5 \u76f8\u5173\u7684 issue\u3002"),(0,n.kt)("p",null,"\u5173\u4e8e H5 \u7aef\u6027\u80fd\u66f4\u611f\u5174\u8da3\u53ef\u4ee5\u67e5\u770b\u6587\u7ae0:",(0,n.kt)("a",o({parentName:"p"},{href:"https://aotu.io/notes/2019/02/28/taro-h5-optimize/"}),"\u300a\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7\u300b"),"\u3002"),(0,n.kt)("h2",o({},{id:"taro-doctor"}),"Taro Doctor"),(0,n.kt)("p",null,"\u6211\u4eec\u8fd8\u4ece Flutter Doctor \u4e2d\u5f97\u5230\u542f\u53d1\uff0c\u5f00\u53d1\u4e86 Taro Doctor\u3002 Taro Doctor \u5c31\u50cf\u4e00\u4e2a\u533b\u751f\u4e00\u6837\uff0c\u53ef\u4ee5\u8bca\u65ad\u9879\u76ee\u7684\u4f9d\u8d56\u3001\u8bbe\u7f6e\u3001\u7ed3\u6784\uff0c\u4ee5\u53ca\u4ee3\u7801\u7684\u89c4\u8303\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u5e76\u5c1d\u8bd5\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,"\u4f46\u548c\u771f\u6b63\u7684\u533b\u751f\u4e0d\u4e00\u6837\uff0cTaro Doctor \u4e0d\u9700\u8981\u6392\u961f\u6302\u53f7\uff0c\u4e5f\u4e0d\u7528\u82b1\u94b1\u3002\u4f60\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8fd0\u884c\u547d\u4ee4\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"taro doctor"),"\uff0c\u5c31\u50cf\u56fe\u91cc\u4e00\u6837\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://i.loli.net/2019/04/19/5cb992ee1b2f1.png",alt:"taro-doctor.png"}))),(0,n.kt)("h2",o({},{id:"\u8fd8\u6709\u66f4\u591a"}),"\u8fd8\u6709\u66f4\u591a"),(0,n.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u7684\u7279\u6027\u4e4b\u5916\uff0cTaro 1.3 \u8fd8\u505a\u4e86\u8bb8\u591a\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u53ef\u80fd\u5bf9\u65e5\u5e38\u5f00\u53d1\u5f71\u54cd\u4e0d\u5927\uff0c\u4f46\u4e3a Taro \u7684\u7a33\u5b9a\u6027\u4ee5\u53ca\u5c06\u6765\u66f4\u591a\u7684\u53ef\u80fd\u6027\u592f\u5b9e\u4e86\u57fa\u7840\uff1a"),(0,n.kt)("h3",o({},{id:"\u7ec4\u4ef6\u4f20\u53c2props\u7cfb\u7edf\u91cd\u6784"}),"\u7ec4\u4ef6\u4f20\u53c2\uff08props\uff09\u7cfb\u7edf\u91cd\u6784"),(0,n.kt)("p",null,"\u5728 Taro 1.0 \u5230 1.2 \u7684\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u4e00\u76f4\u4f7f\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u6846\u67b6\u7684\u7ec4\u4ef6\u4f20\u53c2\u7cfb\u7edf\uff0c\u4f46\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7cfb\u7edf\u6ca1\u529e\u6cd5\u4f20\u9012\u51fd\u6570\u7684\u503c\uff0c\u4e5f\u65e0\u6cd5\u4f20\u9012\u975e\u5177\u540d\u53c2\u6570\uff0c\u5e76\u4e14\u5404\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5b9e\u73b0\u5404\u4e0d\u76f8\u540c\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u5728 Taro 1.3 \u4e2d\u6211\u4eec\u81ea\u5df1\u5b9e\u73b0\u4e86\u4e00\u5957\u7ec4\u4ef6\u4f20\u53c2\u7cfb\u7edf\u3002\u65b0\u7cfb\u7edf\u4f1a\u4f7f\u5f97\u4f20\u53c2\u76f8\u5173\u7684\u4ee3\u7801\u66f4\u4e3a\u53ef\u9760\uff0c\u540c\u65f6\u4e5f\u662f\u6211\u4eec\u652f\u6301\u66f4\u591a JSX \u8bed\u6cd5\u7684\u57fa\u7840\u3002"),(0,n.kt)("h3",o({},{id:"\u547d\u4ee4\u884c\u5de5\u5177cli-\u91cd\u6784"}),"\u547d\u4ee4\u884c\u5de5\u5177\uff08CLI\uff09 \u91cd\u6784"),(0,n.kt)("p",null,"\u5728 Taro 1.3\uff0c\u6211\u4eec\u5c06\u547d\u4ee4\u884c\u5de5\u5177\u4f7f\u7528 TypeScript \u8fdb\u884c\u4e86\u91cd\u6784\u5e76\u9010\u6b65\u6dfb\u52a0\u66f4\u591a\u6d4b\u8bd5\u7528\u4f8b\u3002\u91cd\u6784\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u5927\u80c6\u5730\u4e3a CLI \u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u66ff\u6362\u8001\u65e7\u4f9d\u8d56\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u4f1a\u5c06 CLI \u7684\u529f\u80fd\u4ee5 API \u7684\u5f62\u5f0f\u66b4\u9732\u51fa\u6765\uff0c\u8d4b\u80fd\u7ed9\u5176\u5b83\u5f00\u53d1\u5de5\u5177\u548c\u6211\u4eec\u7684\u5408\u4f5c\u4f19\u4f34\u3002"),(0,n.kt)("h3",o({},{id:"\u79fb\u52a8\u7aef\u5bb9\u5668\u66f4\u6362"}),"\u79fb\u52a8\u7aef\u5bb9\u5668\u66f4\u6362"),(0,n.kt)("p",null,"\u6211\u4eec\u548c\u4eac\u4e1c\u7684 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://ares.jd.com/platform"}),"ARES")," \u56e2\u961f\u5408\u4f5c\uff0c\u628a\u539f\u6709\u7684\u79fb\u52a8\u7aef\u5bb9\u5668 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://expo.io"}),"expo")," \u66ff\u6362\u4e3a\u6df1\u5ea6\u5b9a\u5236\u7684 JDReact\u3002JDReact \u5927\u5e45\u63d0\u5347\u4e86 Taro \u79fb\u52a8\u7aef\u7684\u53ef\u63a7\u6027\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u7a81\u7834 ",(0,n.kt)("inlineCode",{parentName:"p"},"expo")," \u7684\u63a3\u8098\uff0c\u5f15\u5165\u539f\u751f\u79fb\u52a8\u7aef\u4ee3\u7801\uff0c\u63d0\u4f9b\u5b9a\u5236\u529f\u80fd\u548c API\uff0c\u5e76\u4e14\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u7684\u8868\u73b0\u90fd\u4f1a\u66f4\u597d\u3002"),(0,n.kt)("h3",o({},{id:"\u652f\u6301\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"}),"\u652f\u6301\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u662f\u5c0f\u7a0b\u5e8f\u5e26\u6765\u7684\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u4ee3\u7801\u590d\u7528\u7387\uff0c\u964d\u4f4e\u5305\u5927\u5c0f\uff0c\u4e3a\u5f00\u53d1\u8005\u5e26\u6765\u8bf8\u591a\u4fbf\u5229\uff0c\u76ee\u524d\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u652f\u6301\u63d2\u4ef6\u529f\u80fd\u3002\u800c\u4ece 1.3 \u7248\u672c\u5f00\u59cb\uff0cTaro \u652f\u6301\u76f4\u63a5\u5f00\u53d1\u5fae\u4fe1\u4e0e\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\uff0c\u8fd9\u610f\u5473\u7740 Taro \u9879\u76ee\u5c06\u548c\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u65e0\u7f1d\u5bf9\u63a5\uff0c\u4e0d\u518d\u6709\u5f00\u53d1\u6a21\u5f0f\u5207\u6362\u7684\u6210\u672c\u3002"),(0,n.kt)("h3",o({},{id:"\u652f\u6301\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1"}),"\u652f\u6301\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d"),(0,n.kt)("p",null,"\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d\u662f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8054\u5408\u817e\u8baf\u4e91\u56e2\u961f\u63d0\u4f9b\u7684\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5b83\u662f\u4e00\u6b3e Serverless \u670d\u52a1\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u300c\u4e91\u51fd\u6570\u300d\u3001\u300c\u4e91\u6570\u636e\u5e93\u300d\u548c\u300c\u4e91\u6587\u4ef6\u5b58\u50a8\u300d\u4e09\u5927\u80fd\u529b\uff0c\u5e76\u4e14\u5c06\u8fd9\u4e9b\u80fd\u529b\u5c01\u88c5\u6210\u7279\u5b9a\u7684\u63a5\u53e3\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u540e\u7aef\u670d\u52a1\u3002\u4e3a\u4e86\u8ba9 Taro \u5f00\u53d1\u8005\u80fd\u591f\u4eab\u53d7\u5230\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d\u7684\u80fd\u529b\uff0cTaro \u4e5f\u52a0\u5165\u4e86\u5bf9\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d\u7684\u652f\u6301\uff0c\u4e3a\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d\u63d0\u4f9b\u4e86\u521d\u59cb\u5316\u6a21\u677f\uff0c\u5e76\u4e14\u5c06\u5c0f\u7a0b\u5e8f\u4e91\u76f8\u5173\u7684 API \u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u4f7f\u7528\u3002\u540c\u65f6\uff0c\u300c\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u300d\u5df2\u63d0\u4f9b H5 \u7248\u672c\u7684 SDK\uff0cTaro \u652f\u6301\u5c06\u5c0f\u7a0b\u5e8f\u3001H5 \u7684\u8c03\u7528\u65b9\u5f0f\u8fdb\u884c\u7edf\u4e00\u5c01\u88c5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u6253\u9020 Serverless \u7684\u591a\u7aef\u5e94\u7528\u3002"),(0,n.kt)("h2",o({},{id:"\u5347\u7ea7\u517c\u5bb9\u6027"}),"\u5347\u7ea7\u517c\u5bb9\u6027"),(0,n.kt)("p",null,"\u6b63\u5982\u524d\u9762\u6240\u63d0\u5230\uff0cTaro 1.3 \u662f\u4e00\u4e2a\u915d\u917f\u65f6\u95f4\u6700\u4e45\uff0c\u62e5\u6709\u7279\u6027\u6700\u591a\u7684\u5927\u7248\u672c\uff0c\u5bf9 Taro \u5e95\u5c42\u4e5f\u8fdb\u884c\u4e86\u4e0d\u5c0f\u7684\u91cd\u6784\uff0c\u6240\u4ee5\uff0c1.3 \u7248\u672c\u7684\u5347\u7ea7\u5e26\u4e86\u4ee5\u4e0b 2 \u4e2a\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,n.kt)("h4",o({},{id:"jsx-\u4e2d\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u5fc5\u987b\u7ed1\u5b9a\u4f5c\u7528\u57df"}),"JSX \u4e2d\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u5fc5\u987b\u7ed1\u5b9a\u4f5c\u7528\u57df"),(0,n.kt)("p",null,"\u5728\u4e4b\u524d\u7684 Taro \u7248\u672c\u4e2d\uff0cJSX \u4e2d\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\uff0c\u662f\u53ef\u4ee5\u4e0d\u9700\u8981\u7ed1\u5b9a\u4efb\u4f55\u4f5c\u7528\u57df\uff0c\u5c31\u80fd\u8bbf\u95ee\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u7684\uff0c\u4f8b\u5982"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component, Config } from '@tarojs/taro'\nimport { View, Button } from '@tarojs/components'\n\nexport default class Test extends Component {\n  state = {\n    hello: 'noclick',\n  }\n  clickHandler() {\n    this.setState({\n      hello: 'click',\n    })\n  }\n\n  render() {\n    return (\n      <View className={styles.index}>\n        <Button onClick={this.clickHandler}>\u70b9\u51fb</Button>\n      </View>\n    )\n  }\n}\n")),(0,n.kt)("p",null,"\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"<Button />")," \u6309\u94ae\u7ed1\u5b9a\u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5728\u4e4b\u524d\u7248\u672c\u4e2d\u662f\u80fd\u591f\u6b63\u5e38\u6267\u884c\u7684\uff0cTaro \u4f1a\u9ed8\u8ba4\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"clickHandler")," \u7684\u4f5c\u7528\u57df\u7ed1\u5b9a\u4e3a\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4f46\u662f\u8fd9\u5e76\u4e0d\u7b26\u5408 React \u4e2d\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u6240\u4ee5\uff0c\u5728 1.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5bf9\u8fd9\u4e00\u95ee\u9898\u8fdb\u884c\u4e86\u4fee\u590d\uff0c\u73b0\u5728 JSX \u4e2d\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u5fc5\u987b\u7ed1\u5b9a\u4f5c\u7528\u57df\uff0c\u5426\u5219\u5c31\u4f1a\u62a5\u9519\u3002"),(0,n.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d JSX \u90e8\u5206\u53ef\u4ee5\u4fee\u6539\u4e3a\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"render () {\n  return (\n    <View className={styles.index}>\n      <Button onClick={this.clickHandler.bind(this)}>\u70b9\u51fb</Button>\n    </View>\n  )\n}\n")),(0,n.kt)("p",null,"\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"constructor")," \u4e2d\u5c06\u51fd\u6570\u8fdb\u884c\u63d0\u524d\u7ed1\u5b9a\u4f5c\u7528\u57df\uff0c"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"constructor () {\n  this.clickHandlerBind = this.clickHandler.bind(this)\n}\n\nrender () {\n  return (\n    <View className={styles.index}>\n      <Button onClick={this.clickHandlerBind}>\u70b9\u51fb</Button>\n    </View>\n  )\n}\n")),(0,n.kt)("p",null,"\u8fd8\u6709\u4e00\u79cd\u505a\u6cd5\u662f\uff0c\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"clickHandler")," \u5199\u6210\u7bad\u5934\u51fd\u6570\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5728\u65b0\u65e7\u7248\u672c\u4e2d\u5747\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002"),(0,n.kt)("h4",o({},{id:"\u6682\u65f6\u65e0\u6cd5\u5728\u539f\u751f\u5e94\u7528\u4e2d\u4f7f\u7528-taro-\u7ec4\u4ef6"}),"\u6682\u65f6\u65e0\u6cd5\u5728\u539f\u751f\u5e94\u7528\u4e2d\u4f7f\u7528 Taro \u7ec4\u4ef6"),(0,n.kt)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\uff0c\u4f7f\u7528 Taro \u7f16\u8bd1\u540e\u7684\u7ec4\u4ef6\u662f\u53ef\u4ee5\u76f4\u63a5\u7528\u5728\u539f\u751f\u9879\u76ee\u4e2d\u7684\uff0c\u4ee5\u63d0\u5347\u590d\u7528\u6027\uff0c\u4f46 1.3 \u7248\u672c\u7531\u4e8e\u7ec4\u4ef6\u7684 props \u7cfb\u7edf\u5f7b\u5e95\u91cd\u6784\u4e86\uff0c\u5347\u7ea7 1.3 \u540e\u6682\u65f6\u65e0\u6cd5\u5728\u539f\u751f\u9879\u76ee\u4e2d\u4f7f\u7528 Taro \u7ec4\u4ef6\uff0c\u6211\u4eec\u6b63\u5728\u79ef\u6781\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5c06\u7ee7\u7eed\u652f\u6301\u8fd9\u4e00\u7279\u6027\u3002"),(0,n.kt)("h2",o({},{id:"\u5728\u6846\u67b6\u4e4b\u5916"}),"\u5728\u6846\u67b6\u4e4b\u5916"),(0,n.kt)("p",null,"Taro \u56e2\u961f\u9664\u4e86 1.3 \u7248\u672c\u4e2d\u5b8c\u5584\u591a\u7aef\u9002\u914d\uff0c\u63d0\u9ad8\u6846\u67b6\u5f00\u53d1\u4f53\u9a8c\u548c\u5f00\u53d1\u6548\u7387\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u5728\u751f\u6001\u5efa\u8bbe\u4e0a\u4ed8\u51fa\u4e86\u8bf8\u591a\u52aa\u529b\uff0c\u5176\u4e2d\u5305\u62ec\u5168\u65b0\u5347\u7ea7\u7684\u5b98\u7f51\uff0c\u7269\u6599/\u63d2\u4ef6\u5e02\u573a\uff0c\u72ec\u7acb\u7684\u793e\u533a/\u8bba\u575b\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u8ba4\u4e3a\uff0cTaro \u80fd\u591f\u5b89\u8eab\u7acb\u547d\u7684\u672c\u94b1\u662f\u4f5c\u4e3a\u5f00\u53d1\u6846\u67b6\u7684\u786c\u5b9e\u529b\uff0c\u4f46\u771f\u6b63\u51b3\u5b9a Taro \u80fd\u8d70\u591a\u8fdc\u5374\u662f\u751f\u6001\u3001\u793e\u533a\u4ee5\u53ca\u5408\u4f5c\u4f19\u4f34\u3002\n\u6211\u4eec\u5728 1.3 \u5df2\u7ecf\u628a\u5b9e\u529b\u5927\u5e45\u589e\u5f3a\uff0c\u73b0\u5728\u9080\u8bf7\u4f60\u4e00\u8d77\u53c2\u4e0e\u6216\u89c2\u5bdf Taro \u5728\u751f\u6001\u548c\u793e\u533a\u7684\u5efa\u8bbe\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Taro \u5b98\u7f51\uff1a",(0,n.kt)("a",o({parentName:"li"},{href:"https://taro.jd.com"}),"https://taro.jd.com")),(0,n.kt)("li",{parentName:"ul"},"Taro \u7269\u6599\u5e02\u573a: ",(0,n.kt)("a",o({parentName:"li"},{href:"https://taro-ext.jd.com"}),"https://taro-ext.jd.com")),(0,n.kt)("li",{parentName:"ul"},"Taro \u793e\u533a\uff1a",(0,n.kt)("a",o({parentName:"li"},{href:"https://taro-club.jd.com"}),"https://taro-club.jd.com")),(0,n.kt)("li",{parentName:"ul"},"GitHub: ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro"}),"https://github.com/NervJS/taro"))))}k.isMDXComponent=!0}}]);