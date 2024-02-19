"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88092],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},86474:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"TaroPlatformBase"},p=void 0,i={unversionedId:"platform-plugin/platform-mini",id:"version-3.x/platform-plugin/platform-mini",title:"TaroPlatformBase",description:"\u6211\u4eec\u628a\u7f16\u8bd1\u65f6\u5e38\u7528\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u4e86\u4e00\u4e2a\u57fa\u7c7b TaroPlatformBase\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7ee7\u627f\u4e8e\u6b64\u57fa\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7aef\u5e73\u53f0\u7684\u7f16\u8bd1\u3002",source:"@site/versioned_docs/version-3.x/platform-plugin/platform-mini.md",sourceDirName:"platform-plugin",slug:"/platform-plugin/platform-mini",permalink:"/taro-docs/docs/platform-plugin/platform-mini",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/platform-plugin/platform-mini.md",tags:[],version:"3.x",frontMatter:{title:"TaroPlatformBase"},sidebar:"docs",previous:{title:"\u7f16\u5199\u7aef\u5e73\u53f0\u63d2\u4ef6",permalink:"/taro-docs/docs/platform-plugin/how"},next:{title:"Reconciler",permalink:"/taro-docs/docs/platform-plugin/reconciler"}},s={},c=[{value:"\u65b9\u6cd5\u4e0e\u5c5e\u6027",id:"\u65b9\u6cd5\u4e0e\u5c5e\u6027",level:2},{value:"constructor (ctx, config)",id:"constructor-ctx-config",level:3},{value:"ctx",id:"ctx",level:3},{value:"this.ctx.modifyWebpackChain",id:"thisctxmodifywebpackchain",level:4},{value:"helper",id:"helper",level:3},{value:"config",id:"config",level:3},{value:"(abstract) platform",id:"abstract-platform",level:3},{value:"(abstract) globalObject",id:"abstract-globalobject",level:3},{value:"(abstract) runtimePath",id:"abstract-runtimepath",level:3},{value:"(abstract) fileType",id:"abstract-filetype",level:3},{value:"(abstract) template",id:"abstract-template",level:3},{value:"(optional) projectConfigJson",id:"optional-projectconfigjson",level:3},{value:"(optional) taroComponentsPath",id:"optional-tarocomponentspath",level:3},{value:"setupTransaction",id:"setuptransaction",level:3},{value:"buildTransaction",id:"buildtransaction",level:3},{value:"start ()",id:"start-",level:3},{value:"generateProjectConfig (src, dist)",id:"generateprojectconfig-src-dist",level:3},{value:"recursiveReplaceObjectKeys (target, keyMap)",id:"recursivereplaceobjectkeys-target-keymap",level:3},{value:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b",id:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b",level:2},{value:"1. \u7ee7\u627f\u57fa\u7c7b",id:"1-\u7ee7\u627f\u57fa\u7c7b",level:3},{value:"2. \u5904\u7406\u6a21\u677f\u903b\u8f91",id:"2-\u5904\u7406\u6a21\u677f\u903b\u8f91",level:3},{value:"3. \u5904\u7406\u7ec4\u4ef6",id:"3-\u5904\u7406\u7ec4\u4ef6",level:3},{value:"3.1 \u7f16\u5199 components.ts",id:"31-\u7f16\u5199-componentsts",level:4},{value:"3.2 \u5408\u5e76\u5230 template.internalComponents",id:"32-\u5408\u5e76\u5230-templateinternalcomponents",level:4},{value:"template.mergeComponents (ctx, patch)",id:"templatemergecomponents-ctx-patch",level:5},{value:"3.3 \u76f4\u63a5\u4fee\u6539 template.internalComponents",id:"33-\u76f4\u63a5\u4fee\u6539-templateinternalcomponents",level:4},{value:"3.4 \u7f16\u5199 components-react.ts",id:"34-\u7f16\u5199-components-reactts",level:4}],m={toc:c},u="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(u,r({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u628a\u7f16\u8bd1\u65f6\u5e38\u7528\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u4e86\u4e00\u4e2a\u57fa\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroPlatformBase"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7ee7\u627f\u4e8e\u6b64\u57fa\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7aef\u5e73\u53f0\u7684\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { TaroPlatformBase } from '@tarojs/service'\nexport default class Weapp extends TaroPlatformBase {\n  // ...\n}\n")),(0,a.kt)("h2",r({},{id:"\u65b9\u6cd5\u4e0e\u5c5e\u6027"}),"\u65b9\u6cd5\u4e0e\u5c5e\u6027"),(0,a.kt)("h3",r({},{id:"constructor-ctx-config"}),"constructor (ctx, config)"),(0,a.kt)("p",null,"\u6784\u9020\u51fd\u6570\uff0c\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"ctx"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u63d2\u4ef6\u4e0a\u4e0b\u6587\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"config"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro \u7f16\u8bd1\u914d\u7f6e")))),(0,a.kt)("h3",r({},{id:"ctx"}),"ctx"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"\u63d2\u4ef6\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"),(0,a.kt)("h4",r({},{id:"thisctxmodifywebpackchain"}),"this.ctx.modifyWebpackChain"),(0,a.kt)("p",null,"\u83b7\u53d6 WebpackChain\uff0c\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  modifyWebpackChain() {\n    // \u901a\u8fc7 this.ctx.modifyWepackChain \u80fd\u83b7\u53d6\u5230 WebpackChain \u5b9e\u4f8b\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      // chain.xxxx\n    })\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"helper"}),"helper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"\u5b58\u653e\u7740\u4e00\u7cfb\u5217\u5de5\u5177\u51fd\u6570\uff0c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/helper")," \u5305\u7684\u5bfc\u51fa\u5185\u5bb9\u3002"),(0,a.kt)("h3",r({},{id:"config"}),"config"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"\u7f16\u8bd1\u914d\u7f6e\u5bf9\u8c61\u3002"),(0,a.kt)("h3",r({},{id:"abstract-platform"}),"(abstract) platform"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"\u5e73\u53f0\u540d\u79f0\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  platform = 'weapp'\n}\n")),(0,a.kt)("h3",r({},{id:"abstract-globalobject"}),"(abstract) globalObject"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6302\u8f7d\u5404\u79cd API \u7684\u5168\u5c40\u5bf9\u8c61\u540d\u79f0\u3002\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"wx"),"\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"my"),"\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  globalObject = 'wx'\n}\n")),(0,a.kt)("h3",r({},{id:"abstract-runtimepath"}),"(abstract) runtimePath"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stirng")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"string[]")),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u7684\u8fd0\u884c\u65f6\u6587\u4ef6\u7684\u89e3\u6790\u8def\u5f84\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'\n}\n")),(0,a.kt)("h3",r({},{id:"abstract-filetype"}),"(abstract) fileType"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"\u5e73\u53f0\u7684\u5404\u79cd\u6587\u4ef6\u7684\u540e\u7f00\u540d\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  fileType = {\n    // \u6a21\u677f\u6587\u4ef6\u540e\u7f00\n    templ: '.wxml',\n    // \u6837\u5f0f\u6587\u4ef6\u540e\u7f00\n    style: '.wxss',\n    // \u914d\u7f6e\u6587\u4ef6\u540e\u7f00\n    config: '.json',\n    // \u811a\u672c\u6587\u4ef6\u540e\u7f00\n    script: '.js',\n    // \u3010\u53ef\u9009\u3011\u6e32\u67d3\u5c42\u811a\u672c\u6587\u4ef6\u540e\u7f00\uff0c\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 wxs\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684 sjs\n    xs: '.wxs',\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"abstract-template"}),"(abstract) template"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u8c61\u5c5e\u6027\uff0c\u5b50\u7c7b\u5fc5\u987b\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"./template"}),"\u6a21\u677f\u5bf9\u8c61"),"\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("h3",r({},{id:"optional-projectconfigjson"}),"(optional) projectConfigJson"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b50\u7c7b\u53ef\u9009\u62e9\u662f\u5426\u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5b50\u7c7b\u6709\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"projectConfigJson"),"\uff0c\u5219\u4f1a\u81ea\u52a8\u62f7\u8d1d\u6b64\u6587\u4ef6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  projectConfigJson = 'project.config.json'\n}\n")),(0,a.kt)("h3",r({},{id:"optional-tarocomponentspath"}),"(optional) taroComponentsPath"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b50\u7c7b\u53ef\u9009\u62e9\u662f\u5426\u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,a.kt)("p",null,"\u7f16\u8bd1\u65f6\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5305\u7684 alias\uff0c\u4e0b\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  taroComponentsPath = '@tarojs/plugin-platform-weapp/dist/components-react'\n}\n")),(0,a.kt)("h3",r({},{id:"setuptransaction"}),"setupTransaction"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setup")," \u9636\u6bb5\u7684\u4e8b\u52a1\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"buildtransaction"}),"buildTransaction"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u9636\u6bb5\u7684\u4e8b\u52a1\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"start-"}),"start ()"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5165\u53e3\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," \u65b9\u6cd5\u5f00\u542f\u7f16\u8bd1\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  // ...\n}\n\nexport default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn({ config }) {\n      const program = new Weapp(ctx, config)\n      await program.start()\n    },\n  })\n}\n")),(0,a.kt)("h3",r({},{id:"generateprojectconfig-src-dist"}),"generateProjectConfig (src, dist)"),(0,a.kt)("p",null,"\u7528\u4e8e\u751f\u6210 project.config.json \u6b64\u7c7b\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"src"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"})),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u9879\u76ee\u6e90\u7801\u4e2d\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"dist"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"'project.config.json'"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7f16\u8bd1\u540e\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0")))),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u628a\u7528\u6237\u7f16\u5199\u7684 `project.tt.json` \u8f93\u51fa\u4e3a `project.config.json`\ngenerateProjectConfig('project.tt.json')\n// \u628a\u7528\u6237\u7f16\u5199\u7684 `project.swan.json` \u8f93\u51fa\u4e3a `project.swan.json`\ngenerateProjectConfig('project.swan.json', 'project.swan.json')\n")),(0,a.kt)("h3",r({},{id:"recursivereplaceobjectkeys-target-keymap"}),"recursiveReplaceObjectKeys (target, keyMap)"),(0,a.kt)("p",null,"\u9012\u5f52\u66ff\u6362\u76ee\u6807\u5bf9\u8c61\u7684 key \u503c\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"target"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u76ee\u6807\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"keyMap"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"key \u503c\u66ff\u6362\u89c4\u5219")))),(0,a.kt)("p",null,"\u4f8b\u5b50\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u914d\u7f6e\u9879 key \u503c\u548c\u5927\u591a\u6570\u5c0f\u7a0b\u5e8f\u7684\u89c4\u8303\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u8fdb\u884c\u5bf9\u9f50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// this.ctx.modifyMiniConfigs \u80fd\u83b7\u53d6\u5230\u5c0f\u7a0b\u5e8f\u5165\u53e3\u548c\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u7684\u5217\u8868\nthis.ctx.modifyMiniConfigs(({ configMap }) => {\n  const replaceKeyMap = {\n    navigationBarTitleText: 'defaultTitle',\n    navigationBarBackgroundColor: 'titleBarColor',\n    enablePullDownRefresh: 'pullRefresh',\n    list: 'items',\n    text: 'name',\n    iconPath: 'icon',\n    selectedIconPath: 'activeIcon',\n    color: 'textColor',\n  }\n  Object.keys(configMap).forEach((key) => {\n    const item = configMap[key]\n    if (item.content) {\n      // \u9012\u5f52\u66ff\u6362\u914d\u7f6e\u6587\u4ef6\u91cc\u7684 key \u503c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684 key \u503c\n      this.recursiveReplaceObjectKeys(item.content, replaceKeyMap)\n    }\n  })\n})\n")),(0,a.kt)("h2",r({},{id:"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b"}),"\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u4ee5\u6269\u5c55\u5bf9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u7f16\u8bd1\u652f\u6301\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b\u3002"),(0,a.kt)("h3",r({},{id:"1-\u7ee7\u627f\u57fa\u7c7b"}),"1. \u7ee7\u627f\u57fa\u7c7b"),(0,a.kt)("p",null,"\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroPlatformBase")," \u4ee5\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Weapp")," \u7c7b\uff0c\u5e76\u5b9e\u73b0\u6240\u6709\u62bd\u8c61\u5c5e\u6027\u3001\u53ef\u9009\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { TaroPlatformBase } from '@tarojs/service'\n\nconst PACKAGE_NAME = '@tarojs/plugin-platform-weapp'\n\nclass Weapp extends TaroPlatformBase {\n  // \u5e73\u53f0\u540d\u79f0\n  platform = 'weapp'\n  // \u5c0f\u7a0b\u5e8f\u5168\u5c40\u5bf9\u8c61\n  globalObject = 'wx'\n  // \u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u7684\u8fd0\u884c\u65f6\u6587\u4ef6\u7684\u89e3\u6790\u8def\u5f84\n  runtimePath = `${PACKAGE_NAME}/dist/runtime`\n  // \u6587\u4ef6\u540e\u7f00\n  fileType = {\n    templ: '.wxml',\n    style: '.wxss',\n    config: '.json',\n    script: '.js',\n    xs: '.wxs'\n  }\n  template = new Template()\n  // \u5c0f\u7a0b\u5e8f\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\n  projectConfigJson = 'project.config.json'\n  // \u5bf9 `@tarojs/components` \u5305\u7684 alias \u8def\u5f84\n  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`\n\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    /**\n    * 1. setupTransaction - init\n    * 2. setup\n    * 3. setupTransaction - close\n    * 4. buildTransaction - init\n    * 5. build\n    * 6. buildTransaction - close\n    */\n\n    // \u53ef\u4ee5\u5728 setup \u7684\u4e0d\u540c\u9636\u6bb5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n\n    // \u53ef\u4ee5\u5728 build \u7684\u4e0d\u540c\u9636\u6bb5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n\nexport default Weapp\n")),(0,a.kt)("h3",r({},{id:"2-\u5904\u7406\u6a21\u677f\u903b\u8f91"}),"2. \u5904\u7406\u6a21\u677f\u903b\u8f91"),(0,a.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a",(0,a.kt)("a",r({parentName:"p"},{href:"./template"}),"\u6a21\u677f\u7c7b"),"\u4ee5\u5904\u7406\u6a21\u677f\u903b\u8f91\uff0c\u628a\u5b83\u7684\u5b9e\u4f8b\u8bbe\u7f6e\u4e3a\u81ea\u5b9a\u4e49\u5e73\u53f0\u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { Template } from './template'\n\nclass Weapp extends TaroPlatformBase {\n  // ...\n  // \u6a21\u677f\u5b9e\u4f8b\n  template = new Template()\n}\n")),(0,a.kt)("h3",r({},{id:"3-\u5904\u7406\u7ec4\u4ef6"}),"3. \u5904\u7406\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u628a\u76ee\u524d\u652f\u6301\u7684 6 \u79cd\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u4e86\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u5c5e\u6027\u7684\u6bd4\u5bf9\uff0c\u5f97\u51fa\u4e86\u4e00\u4efd\u6700\u901a\u7528\u7684\u7ec4\u4ef6\u4ee5\u53ca\u5176\u5c5e\u6027\u3002\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Template")," \u7c7b\u5b9e\u4f8b\u7684 ",(0,a.kt)("a",r({parentName:"p"},{href:"./template#thisinternalcomponents"}),"internalComponents")," \u5c5e\u6027\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4e9b\u901a\u7528\u7ec4\u4ef6\u4ee5\u53ca\u5c5e\u6027\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62bd\u53d6\u8fd9\u4efd\u901a\u7528\u7ec4\u4ef6\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5728\u751f\u6210 B \u5c0f\u7a0b\u5e8f\u7684\u6a21\u677f\u65f6\uff0c\u5c3d\u91cf\u4e0d\u4f1a\u542b\u6709 A \u5c0f\u7a0b\u5e8f\u72ec\u6709\u7684\u7ec4\u4ef6\u6216\u5c5e\u6027\u3002")),(0,a.kt)("p",null,"\u4f46\u968f\u7740\u5404\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u53d1\u5c55\uff0c\u5404\u5e73\u53f0\u90fd\u53ef\u80fd\u72ec\u81ea\u65b0\u589e\u4e00\u4e9b\u7ec4\u4ef6\u6216\u5c5e\u6027\u3002\u8fd9\u65f6\u6211\u4eec\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\u5c31\u9700\u8981\u901a\u8fc7\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"template.internalComponents")," \u6765\u5904\u7406\u8fd9\u4e9b\u7279\u6b8a\u7684\u7ec4\u4ef6\u6216\u5c5e\u6027\u3002"),(0,a.kt)("h4",r({},{id:"31-\u7f16\u5199-componentsts"}),"3.1 \u7f16\u5199 components.ts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"components.ts")," \u53ef\u4ee5\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4ee5\u8868\u793a\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"internalComponents")," \u4fee\u6539\u5c5e\u6027\u3001\u65b0\u589e\u5c5e\u6027\u6216\u65b0\u589e\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u89c4\u8303\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="components.ts"',title:'"components.ts"'}),"import { singleQuote } from '@tarojs/shared'\n\nexport const components = {\n  // \u7ec4\u4ef6\u540d CamelCase\n  ScrollView:\n    // \u5c5e\u6027\u5bf9\u8c61\n    {\n      // value \u4e3a\u7a7a\u5b57\u7b26\u4e32\u65f6\uff0c\u4ee3\u8868\u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u503c\n      'scroll-left': '',\n      // \u5c5e\u6027\u9ed8\u8ba4\u503c\u4e3a\u5e03\u5c14\u503c\u6216\u6570\u5b57\u65f6\uff0cvalue \u5199\u4e3a\u5b57\u7b26\u4e32\n      'enable-flex': 'false',\n      'refresher-threshold': '45',\n      // \u5c5e\u6027\u9ed8\u8ba4\u503c\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u9700\u8981\u4f7f\u7528 singleQuote \u51fd\u6570\u8fdb\u884c\u5305\u88f9\n      'refresher-default-style': singleQuote('black'),\n      // \u4e8b\u4ef6\n      bindRefresherAbort: '',\n    },\n}\n")),(0,a.kt)("h4",r({},{id:"32-\u5408\u5e76\u5230-templateinternalcomponents"}),"3.2 \u5408\u5e76\u5230 template.internalComponents"),(0,a.kt)("p",null,"\u7f16\u5199\u597d ",(0,a.kt)("inlineCode",{parentName:"p"},"components.ts")," \u540e\uff0c\u53ef\u4ee5\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Template")," \u7c7b\u5b9e\u4f8b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeComponents")," \u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\u3002"),(0,a.kt)("h5",r({},{id:"templatemergecomponents-ctx-patch"}),"template.mergeComponents (ctx, patch)"),(0,a.kt)("p",null,"\u5408\u5e76\u7ec4\u4ef6\u8865\u4e01\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.internalComponents"),"\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"ctx"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u63d2\u4ef6\u4e0a\u4e0b\u6587\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"patch"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7ec4\u4ef6\u8865\u4e01")))),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"import { components } from './components'\n\nclass Weapp extends TaroPlatformBase {\n  constructor(ctx, config) {\n    super(ctx, config)\n\n    // \u5728 setup \u9636\u6bb5\u7ed3\u675f\u65f6\uff0c\u4fee\u6539\u6a21\u677f\n    this.setupTransaction.addWrapper({\n      close: this.modifyTemplate,\n    })\n  }\n\n  modifyTemplate() {\n    this.template.mergeComponents(this.ctx, components)\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="components.ts"',title:'"components.ts"'}),"export const components = {\n  ScrollView: {\n    'enable-flex': 'true',\n    'refresher-threshold': '45',\n  },\n  Xyz: {\n    a: '',\n  },\n}\n")),(0,a.kt)("p",null,"\u5047\u8bbe ",(0,a.kt)("inlineCode",{parentName:"p"},"template.internalComponent")," \u7684\u9ed8\u8ba4\u503c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"internalComponent = {\n  ScrollView: {\n    'scroll-left': '',\n    'enable-flex': 'false',\n  },\n}\n")),(0,a.kt)("p",null,"\u5408\u5e76\u540e\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"internalComponent = {\n  ScrollView: {\n    'scroll-left': '',\n    // enable-flex \u7684\u9ed8\u8ba4\u503c\u4fee\u6539\u4e86\n    'enable-flex': 'true',\n    // \u65b0\u589e\u4e86 refresher-threshold \u5c5e\u6027\n    'refresher-threshold': '45',\n  },\n  // \u65b0\u589e\u4e86 Xyz \u7ec4\u4ef6\n  Xyz: {\n    a: '',\n  },\n}\n")),(0,a.kt)("h4",r({},{id:"33-\u76f4\u63a5\u4fee\u6539-templateinternalcomponents"}),"3.3 \u76f4\u63a5\u4fee\u6539 template.internalComponents"),(0,a.kt)("p",null,"\u9664\u4e86\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"template.mergeComponents")," \u8fdb\u884c\u5408\u5e76\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"template.internalComponents"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"class Weapp extends TaroPlatformBase {\n  modifyTemplate() {\n    // \u5220\u9664 Slider \u7ec4\u4ef6\u91cc\u7684\u4e00\u4e9b\u5c5e\u6027\n    this.modifySlider(this.template.internalComponents.Slider)\n    // \u6539\u5199 View \u7ec4\u4ef6\u7684\u5c5e\u6027\u5bf9\u8c61\n    this.template.internalComponents.View = {}\n  }\n\n  modifySlider(slider) {\n    delete slider['block-size']\n    delete slider['block-color']\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u5c3d\u91cf\u7f16\u5199\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"components.ts")," \u8fdb\u884c merge\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u64cd\u4f5c\u3002\u56e0\u4e3a\u8fd0\u884c\u65f6\u4e5f\u9700\u8981\u5408\u5e76\u540e\u7684\u7ec4\u4ef6\u4fe1\u606f\uff0c\u7f16\u5199\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"components.ts")," \u80fd\u8fdb\u884c\u590d\u7528\u3002")),(0,a.kt)("h4",r({},{id:"34-\u7f16\u5199-components-reactts"}),"3.4 \u7f16\u5199 components-react.ts"),(0,a.kt)("p",null,"\u5728 Taro \u91cc\u4f7f\u7528 React\uff0c\u5185\u7f6e\u7ec4\u4ef6\u9700\u8981\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u4e2d\u5f15\u7528\u540e\u518d\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"import { View } from '@tarojs/components'\n")),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u6211\u4eec",(0,a.kt)("strong",{parentName:"p"},"\u589e\u52a0\u4e86\u65b0\u7684\u5185\u7f6e\u7ec4\u4ef6\uff0c\u518d\u4ece ",(0,a.kt)("inlineCode",{parentName:"strong"},"@tarojs/components")," \u4e2d\u5f15\u7528\u5c31\u53d6\u4e0d\u5230\u8fd9\u4e9b\u65b0\u589e\u7684\u7ec4\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u5f53\u6211\u4eec",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u589e\u52a0\u4e86\u7ec4\u4ef6"),"\u65f6\uff0c\u9700\u8981\u7f16\u5199\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"components-react.ts"),"\uff0c\u5e76\u914d\u7f6e Webpack alias\uff0c\u4f9b ",(0,a.kt)("strong",{parentName:"p"},"React")," \u5f15\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"li"},"components-react.ts")," \u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="components-react.ts"',title:'"components-react.ts"'}),"// \u539f\u6709\u7684\u7ec4\u4ef6\nexport * from '@tarojs/components/mini'\n// \u65b0\u589e\u7684\u7ec4\u4ef6\nexport const Editor = 'editor'\nexport const OfficialAccount = 'official-account'\n")),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,a.kt)("a",r({parentName:"li"},{href:"./platform-mini#optional-tarocomponentspath"}),"taroComponentsPath"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'}),"const PACKAGE_NAME = '@tarojs/plugin-platform-weapp'\nclass Weapp extends TaroPlatformBase {\n  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`\n}\n")))}k.isMDXComponent=!0}}]);