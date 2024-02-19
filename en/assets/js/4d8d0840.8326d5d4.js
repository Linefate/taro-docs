"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28327],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,k=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86267:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={slug:"2020-02-13-taro-next-alpha",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",authors:"yuche"},p=void 0,i={permalink:"/taro-docs/en/blog/2020-02-13-taro-next-alpha",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2020-02-13-taro-next-alpha.md",source:"@site/blog/2020-02-13-taro-next-alpha.md",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",description:"image",date:"2020-02-13T00:00:00.000Z",formattedDate:"February 13, 2020",tags:[],readingTime:7.695,hasTruncateMarker:!0,authors:[{name:"yuche",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",key:"yuche"}],frontMatter:{slug:"2020-02-13-taro-next-alpha",title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",authors:"yuche"},prevItem:{title:"Taro Next H5 \u8de8\u6846\u67b6\u7ec4\u4ef6\u5e93\u5b9e\u8df5",permalink:"/taro-docs/en/blog/2020-4-13-taro-components"},nextItem:{title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",permalink:"/taro-docs/en/blog/2020-01-08-taro-2-0"}},c={authorsImageUrls:[void 0]},u=[{value:"\u540c\u65f6\u652f\u6301 React/Vue/Nerv \u4e09\u79cd\u6846\u67b6",id:"\u540c\u65f6\u652f\u6301-reactvuenerv-\u4e09\u79cd\u6846\u67b6",level:2},{value:"\u4e0d\u9650\u5236\u8bed\u8a00\u3001\u8bed\u6cd5",id:"\u4e0d\u9650\u5236\u8bed\u8a00\u8bed\u6cd5",level:2},{value:"\u66f4\u5feb\u7684\u8fd0\u884c\u901f\u5ea6",id:"\u66f4\u5feb\u7684\u8fd0\u884c\u901f\u5ea6",level:2},{value:"\u66f4\u5feb\u7684\u6784\u5efa\u901f\u5ea6\u548c source-map \u652f\u6301",id:"\u66f4\u5feb\u7684\u6784\u5efa\u901f\u5ea6\u548c-source-map-\u652f\u6301",level:2},{value:"\u4e0d\u5fd8\u521d\u5fc3",id:"\u4e0d\u5fd8\u521d\u5fc3",level:2},{value:"\u7262\u8bb0\u4f7f\u547d",id:"\u7262\u8bb0\u4f7f\u547d",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:u},s="wrapper";function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(s,a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",a({parentName:"p"},{src:"https://img14.360buyimg.com/ling/jfs/t1/103557/3/12087/1051626/5e44b357E4cab8765/d8c821c4a3e1060d.png",alt:"image"}))),(0,n.kt)("p",null,"\u81ea Taro 2.0 \u8d77\uff0c\u6211\u4eec\u5c06\u4f1a\u542f\u52a8\u5bf9\u6574\u4e2a Taro \u7cfb\u7edf\u67b6\u6784\u7684\u9769\u65b0\uff0c\u8fd9\u6b21\u9769\u65b0\u6211\u4eec\u5c06\u5176\u79f0\u4e4b\u4e3a Taro Next\u3002Taro Next \u9769\u65b0\u5b8c\u6210\u4e4b\u540e\uff0cTaro \u672c\u8eab\u7684\u62d3\u5c55\u6027\u3001\u7a33\u5b9a\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u90fd\u4f1a\u5927\u5e45\u63d0\u9ad8\uff0c\u76f8\u5e94\u5730\uff0c\u4f7f\u7528 Taro \u7684\u5f00\u53d1\u8005\u4e5f\u4f1a\u83b7\u5f97\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u964d\u4f4e\u66f4\u591a\u5f00\u53d1\u6210\u672c\u548c\u5b66\u4e60\u6210\u672c\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u4e86",(0,n.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u7cfb\u7edf\u548c\u5c0f\u7a0b\u5e8f\u7aef\u7684\u91cd\u6784"),"\uff0c\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"npm i -g @tarojs/cli@next")," \u5b89\u88c5 Taro CLI \u9884\u89c8\uff08alpha\uff09\u7248\u4e4b\u540e\uff0c\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"taro init")," \u521b\u5efa\u65b0\u9879\u76ee\u5373\u53ef\u4f53\u9a8c Taro Next \u7684\u65b0\u7279\u6027\u3002"),(0,n.kt)("h2",a({},{id:"\u540c\u65f6\u652f\u6301-reactvuenerv-\u4e09\u79cd\u6846\u67b6"}),"\u540c\u65f6\u652f\u6301 React/Vue/Nerv \u4e09\u79cd\u6846\u67b6"),(0,n.kt)("p",null,"\u5728\u65e7\u7248\u672c\u7684 Taro\uff0c\u6211\u4eec\u4ee5\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1\u89c4\u8303\u4e3a\u57fa\u51c6\uff0c\u4f7f\u7528 React/JSX \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u5f00\u53d1\u3002\u800c\u5728 Taro Next\uff0c\u6211\u4eec\u628a\u8fd9\u4e00\u601d\u8def\u91cf\u5316\u4e3a\u4e00\u4e2a\u7f16\u7a0b\u6a21\u578b\uff1a"),(0,n.kt)("p",null,"\u8bbe\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e3a\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"interface"),"\uff0c\u4e0d\u540c\u7684\u6846\u67b6\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\u867d\u7136\u4e0d\u5c3d\u76f8\u540c\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u6846\u67b6\u751f\u547d\u5468\u671f\u5206\u522b\u65b0\u5efa\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"class")," \u53bb ",(0,n.kt)("inlineCode",{parentName:"p"},"implements")," \u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"interface"),"\u3002\u76f8\u5e94\u5730\uff0c\u5c0f\u7a0b\u5e8f\u7684\u7ec4\u4ef6/API/\u8def\u7531\u89c4\u8303\u53ef\u4ee5\u4f7f\u7528\u540c\u6837\u7684\u601d\u8def\u548c\u6a21\u578b\u8ba9\u4e0d\u540c\u6846\u67b6\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u7aef\u4e0a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",a({parentName:"p"},{src:"https://storage.jd.com/taro-source/taro-docs/WechatIMG1393.png",alt:"taro"}))),(0,n.kt)("h2",a({},{id:"\u4e0d\u9650\u5236\u8bed\u8a00\u8bed\u6cd5"}),"\u4e0d\u9650\u5236\u8bed\u8a00\u3001\u8bed\u6cd5"),(0,n.kt)("p",null,"\u7531\u4e8e Taro Next \u7684\u67b6\u6784\u51fa\u73b0\u4e86\u53d8\u5316\uff0c\u8868\u9762\u4e0a\u6765\u770b Taro \u4ece\u4e00\u4e2a\u7f16\u8bd1\u578b\u6846\u67b6\u53d8\u6210\u4e86\u4e00\u4e2a\u8fd0\u884c\u65f6\u6846\u67b6\u3002\u4f46\u7a76\u5176\u5185\u6838\u662f\u6574\u4f53\u7684\u8bbe\u8ba1\u601d\u8def\u51fa\u73b0\u4e86\u53d8\u5316\uff1a\u4ece\u524d\u662f\u300c\u6a21\u62df\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"mock"),"\uff09\u300d\uff0c\u73b0\u5728\u662f\u300c\u5b9e\u73b0\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"implements"),"\uff09\u300d\u3002\u5728 Taro Next \u6211\u4eec\u5b9e\u73b0\u4e86 React \u5728\u5c0f\u7a0b\u5e8f\u4e2d\u7684\u5b8c\u6574\u652f\u6301\uff0c\u56e0\u6b64\u8fd9\u7c7b\u66fe\u7ecf\u7684 Taro \u65e0\u6cd5\u8fd0\u884c\u7684\u4ee3\u7801\u5728 Taro Next \u4e2d\u5b8c\u5168\u6ca1\u6709\u538b\u529b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import { View } from '@tarojs/components'\nfunction Page(props) {\n  const view = React.createElement(View, null, props.text)\n  return [view, React.Children.only(this.props.children)]\n}\n")),(0,n.kt)("p",null,"\u5728\u65e7\u7248\u672c\u7684 Taro \u4e2d\u6211\u4eec\u5bf9 JavaScript \u548c TypeScript \u8fdb\u884c\u4e86 First Class \u7684\u652f\u6301\uff0cTaro Next \u6211\u4eec\u66f4\u8fdb\u4e00\u6b65\uff0c\u539f\u7406\u4e0a\u6700\u7ec8\u53ef\u4ee5\u7f16\u8bd1\u5230 JavaScript \u7684\u8bed\u8a00\u90fd\u53ef\u4ee5\u7528\u6765\u6784\u5efa Taro \u9879\u76ee\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5728 Vue \u4e2d\u4f7f\u7528 CoffeeScript \u7684\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// config.js\n{\n    webpackChain (chain) {\n        chain.merge({\n            module: {\n                rule: {\n                    test: /\\.coffee$/,\n                    use: [ 'coffee-loader' ]\n                }\n            }\n        })\n    }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<template>\n  <view>{{ title }}</view>\n  <view>{{ text }}</view>\n  <input v-model="text" />\n</template>\n\n<script lang="coffee">\n  export default\n      props:\n          title:\n          type: String\n          required: true\n      data: ->\n          text: \'text\'\n<\/script>\n')),(0,n.kt)("h2",a({},{id:"\u66f4\u5feb\u7684\u8fd0\u884c\u901f\u5ea6"}),"\u66f4\u5feb\u7684\u8fd0\u884c\u901f\u5ea6"),(0,n.kt)("p",null,"\u8fd0\u884c\u65f6\u6027\u80fd\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u4e00\u662f\u66f4\u65b0\u6027\u80fd\uff0c\u4e8c\u662f\u521d\u59cb\u5316\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u66f4\u65b0\u6027\u80fd\u800c\u8a00\uff0c\u65e7\u7248\u672c\u7684 Taro \u4f1a\u628a\u5f00\u53d1\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," \u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u5168\u91cf\u7684 diff\uff0c\u6700\u7ec8\u8fd4\u56de\u7ed9\u5c0f\u7a0b\u5e8f\u662f\u6309\u8def\u5f84\u66f4\u65b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"\u3002\u800c\u5728 Taro Next \u4e2d diff \u7684\u5de5\u4f5c\u4ea4\u7ed9\u4e86\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u6846\u67b6\uff08React/Nerv/Vue\uff09\uff0c\u800c\u6846\u67b6 diff \u4e4b\u540e\u7684\u6570\u636e\u4e5f\u4f1a\u901a\u8fc7 Taro \u6309\u8def\u5f84\u53bb\u6700\u5c0f\u5316\u66f4\u65b0\u3002\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u4f7f\u7528\u6846\u67b6\u7684\u7279\u6027\u8fdb\u884c\u66f4\u591a\u66f4\u7ec6\u5fae\u7684\u6027\u80fd\u4f18\u5316\u3002"),(0,n.kt)("p",null,"\u521d\u59cb\u5316\u6027\u80fd\u5219\u662f Taro Next \u7684\u75db\u70b9\u3002\u539f\u751f\u5c0f\u7a0b\u5e8f\u6216\u7f16\u8bd1\u578b\u6846\u67b6\u7684\u521d\u59cb\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u6e32\u67d3\uff0c\u4f46 Taro Next \u5728\u521d\u59cb\u5316\u65f6\u4f1a\u628a\u6846\u67b6\u7684\u6e32\u67d3\u6570\u636e\u8f6c\u5316\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u6570\u636e\uff0c\u591a\u4e86\u4e00\u6b21 ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," \u5f00\u9500\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cTaro \u4ece\u670d\u52a1\u7aef\u6e32\u67d3\u53d7\u5230\u542f\u53d1\uff0c\u5728 Taro CLI \u5c06\u9875\u9762\u521d\u59cb\u5316\u7684\u72b6\u6001\u76f4\u63a5\u6e32\u67d3\u4e3a\u65e0\u72b6\u6001\u7684 wxml\uff0c\u5728\u6846\u67b6\u548c\u4e1a\u52a1\u903b\u8f91\u8fd0\u884c\u4e4b\u524d\u6267\u884c\u6e32\u67d3\u6d41\u7a0b\u3002\u6211\u4eec\u5c06\u8fd9\u4e00\u6280\u672f\u79f0\u4e4b\u4e3a\u9884\u6e32\u67d3\uff08Prerender\uff09\uff0c\u7ecf\u8fc7 Prerender \u7684\u9875\u9762\u521d\u59cb\u6e32\u67d3\u901f\u5ea6\u901a\u5e38\u4f1a\u548c\u539f\u751f\u5c0f\u7a0b\u5e8f\u4e00\u81f4\u751a\u81f3\u66f4\u5feb\u3002"),(0,n.kt)("h2",a({},{id:"\u66f4\u5feb\u7684\u6784\u5efa\u901f\u5ea6\u548c-source-map-\u652f\u6301"}),"\u66f4\u5feb\u7684\u6784\u5efa\u901f\u5ea6\u548c source-map \u652f\u6301"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u7f16\u8bd1\u578b\u6846\u67b6\uff0c\u65e7\u7248\u672c\u7684 Taro \u4f1a\u8fdb\u884c\u5927\u91cf\u7684 AST \u64cd\u4f5c\uff0c\u8fd9\u7c7b\u64cd\u4f5c\u663e\u8457\u5730\u62d6\u6162\u4e86 Taro CLI \u7684\u7f16\u8bd1\u901f\u5ea6\u3002\u800c\u5728 Taro Next \u4e2d\u4e0d\u4f1a\u64cd\u4f5c\u4efb\u4f55\u5f00\u53d1\u8005\u4ee3\u7801\u7684 AST\uff0c\u56e0\u6b64\u7f16\u8bd1\u901f\u5ea6\u5f97\u5230\u4e86\u5927\u5e45\u7684\u63d0\u9ad8\u3002"),(0,n.kt)("p",null,"\u6b63\u56e0\u4e3a AST \u64cd\u4f5c\u7684\u53d6\u6d88\uff0cTaro Next \u4e5f\u8f7b\u677e\u5730\u5b9e\u73b0\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"source-map")," \u7684\u652f\u6301\u3002\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u4f53\u9a8c\u662f\u4e00\u4e2a\u5de8\u5927\u7684\u63d0\u5347\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",a({parentName:"p"},{src:"https://storage.jd.com/taro-source/taro-docs/WechatIMG1402.png",alt:"source-map"}))),(0,n.kt)("h2",a({},{id:"\u4e0d\u5fd8\u521d\u5fc3"}),"\u4e0d\u5fd8\u521d\u5fc3"),(0,n.kt)("p",null,"\u5728\u505a\u5230\u4ee5\u4e0a\u5404\u9879\u7279\u6027\u7684\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u6ca1\u6709\u4e22\u6389\u539f\u6765\u5c31\u5df2\u7ecf\u652f\u6301\u7684\u7279\u6027\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001QQ \u5c0f\u7a0b\u5e8f\u3001\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u7b2c\u4e09\u65b9\u7ec4\u4ef6/\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u7aef\u6761\u4ef6\u7f16\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"\u8de8\u7aef API \u548c\u6837\u5f0f\u5904\u7406")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u7279\u6027\u57fa\u672c\u6d89\u53ca\u5230\u4e86\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u65b9\u65b9\u9762\u9762\uff0c\u867d\u7136\u662f\u9884\u89c8\u7248\uff0c\u4f46 Taro Next \u5df2\u7ecf\u5177\u5907\u4e86\u5f00\u53d1\u751f\u4ea7\u7ea7\u5c0f\u7a0b\u5e8f\u7684\u51c6\u5907\uff0c\u5728 Taro \u56e2\u961f\u5185\u90e8\u548c\u5144\u5f1f\u56e2\u961f\u4e5f\u6709\u591a\u6b3e\u5c0f\u7a0b\u5e8f\u6b63\u5728\u4f7f\u7528 Taro Next \u8fdb\u884c\u5f00\u53d1\u3002\u800c\u5728 Taro Next \u7684 H5 \u7aef\u548c\u79fb\u52a8\u7aef\uff0c\u6211\u4eec\u8fd8\u5728\u8fdb\u884c\u7d27\u5f20\u7684\u5f00\u53d1\u3002\u5f53 Taro Next \u6d4b\u8bd5\uff08beta\uff09\u7248\u53d1\u5e03\u65f6\uff0c\u4f7f\u7528 Taro Next \u6784\u5efa\u7684\u4e00\u5957\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u5728\u5404\u79cd\u5c0f\u7a0b\u5e8f\u3001\u5feb\u5e94\u7528\u3001H5 \u548c\u79fb\u52a8\u7aef\u5f53\u4e2d\u3002\u5728\u672a\u6765\uff0c\u6211\u4eec\u8fd8\u4f1a\u628a Taro Next \u7684\u80fd\u529b\u5f00\u653e\u51fa\u53bb\uff0c\u8ba9\u5f00\u53d1\u8005\u53ea\u8981\u5199\u5c11\u91cf\u7684\u63a5\u5165\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u559c\u6b22\u7684\u4efb\u610f\u6846\u67b6\uff08Angular, Flutter, svelte...\uff09\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u6216\u591a\u7aef\u5e94\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u7262\u8bb0\u4f7f\u547d"}),"\u7262\u8bb0\u4f7f\u547d"),(0,n.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u5728 Taro 2.0 \u53d1\u5e03\u65f6\u6240\u8a00\uff1a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8282\u7269\u98ce\u5149\u4e0d\u76f8\u5f85\uff0c\u6851\u7530\u78a7\u6d77\u987b\u81fe\u6539\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"20 \u5e74\u4ee3\u547c\u5578\u800c\u6765\uff0c\u4e0b\u4e00\u4e2a 10 \u5e74\uff0c\u5f88\u591a\u6846\u67b6\u90fd\u4f1a\u6b7b\u53bb\uff0c\u5f88\u591a\u6280\u672f\u4e5f\u4f1a\u7115\u7136\u800c\u751f\uff0c\u6ca1\u6709\u4ec0\u4e48\u662f\u4e0d\u53d8\u7684\uff0c\u552f\u4e00\u4e0d\u53d8\u7684\u53ea\u6709\u53d8\u5316\uff0c\u6211\u4eec\u80fd\u505a\u7684\u4e5f\u53ea\u80fd\u662f\u62e5\u62b1\u53d8\u5316\u3002")),(0,n.kt)("p",null,"\u524d\u7aef\u6280\u672f\u4e00\u76f4\u5728\u9ad8\u901f\u53d1\u5c55\uff0c\u6d41\u884c\u7684\u6280\u672f\u548c\u6846\u67b6\u6bcf\u5e74\u90fd\u5404\u4e0d\u76f8\u540c\u3002\u4f46\u6211\u4eec\u59cb\u7ec8\u6ca1\u6709\u5fd8\u8bb0\u5f00\u53d1 Taro \u7684\u521d\u5fc3\u548c\u4f7f\u547d\uff1a",(0,n.kt)("strong",{parentName:"p"},"\u964d\u4f4e\u5f00\u53d1\u6210\u672c\uff0c\u63d0\u9ad8\u5f00\u53d1\u4f53\u9a8c\u548c\u5f00\u53d1\u6548\u7387\u3002")),(0,n.kt)("p",null,"\u300c\u4e0d\u5fd8\u521d\u5fc3\uff0c\u7262\u8bb0\u4f7f\u547d\u3002\u300d"),(0,n.kt)("p",null,"\u8fd9\u5c31\u662f Taro \u56e2\u961f\u62e5\u62b1\u53d8\u5316\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u8003\u8d44\u6599"}),"\u53c2\u8003\u8d44\u6599"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/blog/2020-01-02-gmtc"}),"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/docs/migration"}),"Taro Next \u65e7\u7248\u672c\u8fc1\u79fb\u6307\u5357"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/docs/prerender"}),"Prerender"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-benchmark/tree/next"}),"\u6027\u80fd\u6d4b\u8bd5"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/docs/difference-to-others"}),"\u4e0e\u5176\u5b83\u65b0\u578b\u5c0f\u7a0b\u5e8f\u7684\u5bf9\u6bd4")))))}f.isMDXComponent=!0}}]);