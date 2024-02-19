"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65928],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});n(93106);var o=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Troubleshooting"},l=void 0,s={unversionedId:"taroize-troubleshooting",id:"taroize-troubleshooting",title:"Troubleshooting",description:"Unsupported Mini Program Features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/taroize-troubleshooting.md",sourceDirName:".",slug:"/taroize-troubleshooting",permalink:"/taro-docs/en/docs/next/taroize-troubleshooting",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/taroize-troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"Convert to React",permalink:"/taro-docs/en/docs/next/convert-to-react"},next:{title:"\u6982\u8ff0",permalink:"/taro-docs/en/docs/next/platform-plugin/"}},p={},d=[{value:"Unsupported Mini Program Features",id:"unsupported-mini-program-features",level:2},{value:"App Object",id:"app-object",level:3},{value:"Page Object",id:"page-object",level:3},{value:"Custom Component",id:"custom-component",level:3},{value:"Wxml Syntax",id:"wxml-syntax",level:3},{value:"Key Questions",id:"key-questions",level:2},{value:"1. No base class handled",id:"1-no-base-class-handled",level:3},{value:"2. Style Scopes",id:"2-style-scopes",level:3},{value:"Solution.",id:"solution",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. wxml syntax conversion problem",id:"1-wxml-syntax-conversion-problem",level:3},{value:"1.1 Component conversion error when using both <code>wx:for</code> and <code>wx:if</code> statements",id:"11-component-conversion-error-when-using-both-wxfor-and-wxif-statements",level:4},{value:"1.2 The root element cannot contain the <code>hidden</code> attribute.",id:"12-the-root-element-cannot-contain-the-hidden-attribute",level:4},{value:"1.3 Compile with an error: SyntaxError: Unexpected token",id:"13-compile-with-an-error-syntaxerror-unexpected-token",level:4},{value:"Solution",id:"solution-1",level:5},{value:"1.4 Run with the following error\uff1a ReferenceError: item is not defined",id:"14-run-with-the-following-error-referenceerror-item-is-not-defined",level:4},{value:"Solution:",id:"solution-2",level:5},{value:"1.5 The GetRegExp method in WXS is not supported.",id:"15-the-getregexp-method-in-wxs-is-not-supported",level:4},{value:"1.6 The use of <code>&lt;template&gt;</code> is not supported in <code>&lt;include&gt;</code>",id:"16-the-use-of-template-is-not-supported-in-include",level:4},{value:"1.7 The catch event is not supported in the template at this time",id:"17-the-catch-event-is-not-supported-in-the-template-at-this-time",level:4},{value:"2. Event",id:"2-event",level:3},{value:"3. CommonJS and ES modular syntax do not mix",id:"3-commonjs-and-es-modular-syntax-do-not-mix",level:3},{value:"4. The selectorQuery API does not get the DOM.",id:"4-the-selectorquery-api-does-not-get-the-dom",level:3},{value:"5. Image does not handle dynamically stitched src",id:"5-image-does-not-handle-dynamically-stitched-src",level:3},{value:"6. The argument to require cannot be a variable",id:"6-the-argument-to-require-cannot-be-a-variable",level:3},{value:"7. The export from syntax is not handled",id:"7-the-export-from-syntax-is-not-handled",level:3},{value:"8. Issues",id:"8-issues",level:3}],m={toc:d},c="wrapper";function u(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)(c,a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"unsupported-mini-program-features"}),"Unsupported Mini Program Features"),(0,o.kt)("h3",a({},{id:"app-object"}),"App Object"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Property"),(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"onError"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"onPageNotFound"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"onUnhandledRejection"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"onThemeChange"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))))),(0,o.kt)("h3",a({},{id:"page-object"}),"Page Object"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Property"),(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"selectComponent"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Recommended to refactor with React ref")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"selectAllComponents"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Recommended to refactor with React ref")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"selectOwnerComponent"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Recommended to refactor with React ref")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"groupSetData"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))))),(0,o.kt)("h3",a({},{id:"custom-component"}),"Custom Component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Property"),(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"moved"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"externalClasses"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Taro 3 does not have custom components, it is recommended to standardize class names or use CSS Module instead")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"relations"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"options"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"definitionFilter"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}))))),(0,o.kt)("h3",a({},{id:"wxml-syntax"}),"Wxml Syntax"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Property"),(0,o.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Circulation"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"[Some grammar restrictions apply]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Event"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),(0,o.kt)("a",a({parentName:"td"},{href:"./taroize-troubleshooting#2-%E4%BA%8B%E4%BB%B6"}),"Some grammar restrictions apply"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"Citation"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),(0,o.kt)("a",a({parentName:"td"},{href:"./taroize-troubleshooting#16-include-%E9%87%8C%E4%B8%8D%E6%94%AF%E6%8C%81%E4%BD%BF%E7%94%A8-template"}),"Some grammar restrictions apply"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),"wxs"),(0,o.kt)("td",a({parentName:"tr"},{align:"left"}),(0,o.kt)("a",a({parentName:"td"},{href:"./taroize-troubleshooting#15-%E4%B8%8D%E6%94%AF%E6%8C%81-wxs-%E9%87%8C%E7%9A%84-getregexp-%E6%96%B9%E6%B3%95"}),"Some grammar restrictions apply"))))),(0,o.kt)("h2",a({},{id:"key-questions"}),"Key Questions"),(0,o.kt)("h3",a({},{id:"1-no-base-class-handled"}),"1. No base class handled"),(0,o.kt)("p",null,"In native development, the public logic of App, Page, and Component construction objects are often integrated into base classes."),(0,o.kt)("p",null,"As ",(0,o.kt)("strong",{parentName:"p"},"Vant-weapp"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// Component\nVantComponent({\n  data: {}\n})\n// Base Classes\nfunction VantComponent(vantOptions = {}) {\n  // Integrate component-specific configuration vantOptions and public configuration into the final configuration object options\n  // ...\n\n  // Call the Component method of the mini program to construct a custom component\n  Component(options);\n}\n")),(0,o.kt)("p",null,"Taro only recognizes the ",(0,o.kt)("inlineCode",{parentName:"p"},"App()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Page()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Component()")," calls that exist in the entry, page, and component files at compile time, and these calls do not exist when the configuration is wrapped using the base class. So the compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"withWeapp")," gets the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"VantComponent({\n  data: {}\n})\n// The mini program configuration object should be passed into withWeapp\n@withWeapp({})\nclass _C extends React.Component {}\n")),(0,o.kt)("p",null,"Therefore we need to manually modify."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// Base classes\nfunction VantComponent(vantOptions = {}) {\n  // Integrate the component-specific configuration vantOptions and the public configuration into the final configuration object options\n  // ...\n\n  // Call the Component method of the mini program to construct a custom component\n  // Component(options);\n  \n  // 1. The base class returns the integrated options directly\n  return options\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// 2. Pass the configuration created by the base class into withWeapp.\nconst options = VantComponent({\n  data: {}\n})\n@withWeapp(options)\nclass _C extends React.Component {}\n")),(0,o.kt)("h3",a({},{id:"2-style-scopes"}),"2. Style Scopes"),(0,o.kt)("p",null,"The custom component in WeChat mini program will generate a React/Vue component in Taro after conversion."),(0,o.kt)("p",null,"However, the components developed in Taro using React/Vue will not generate the corresponding mini program custom components when compiled to the mini program platform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Therefore, the style isolation feature of the WeChat mini program custom component is lost after the conversion to Taro. ")),(0,o.kt)("h4",a({},{id:"solution"}),"Solution."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the conflicting selector."),(0,o.kt)("li",{parentName:"ol"},"Use CSS Modules to rewrite.")),(0,o.kt)("h2",a({},{id:"frequently-asked-questions"}),"Frequently Asked Questions"),(0,o.kt)("h3",a({},{id:"1-wxml-syntax-conversion-problem"}),"1. wxml syntax conversion problem"),(0,o.kt)("p",null,"Converting ",(0,o.kt)("inlineCode",{parentName:"p"},"wxml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," is achieved by manipulating ",(0,o.kt)("inlineCode",{parentName:"p"},"AST"),", and there are some writes that may not take into account, or may be difficult to adapt, resulting in error reporting."),(0,o.kt)("p",null,"The following are some known issues that need to be fixed manually."),(0,o.kt)("h4",a({},{id:"11-component-conversion-error-when-using-both-wxfor-and-wxif-statements"}),"1.1 Component conversion error when using both ",(0,o.kt)("inlineCode",{parentName:"h4"},"wx:for")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"wx:if")," statements"),(0,o.kt)("p",null,"When both ",(0,o.kt)("inlineCode",{parentName:"p"},"wx:for")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wx:if")," statements are used on the component, and the current ",(0,o.kt)("strong",{parentName:"p"},"loop element item")," or ",(0,o.kt)("strong",{parentName:"p"},"loop subscript index")," is used as the judgment condition, the conversion will report an error."),(0,o.kt)("p",null,"eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'// Before the conversion (note that the condition uses the circular subscript index).\n<block wx:for="{{objectArray}}" wx:if="{{index % 2 !== 0}}">\n  <view>objectArray item: {{item.id}}</view>\n</block>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// After the conversion\n{index % 2 !== 0 && (\n  <Block>\n    {objectArray.map((item, index) => {\n      return (\n        <Block>\n          <View>{'objectArray item: ' + item.id}</View>\n        </Block>\n      )\n    })}\n  </Block>\n)}\n")),(0,o.kt)("p",null,"As you can see in the above example, for the conversion of conditional statements, the current processing extracts the condition outside the component. However, if the condition uses ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),", such extraction logic will result in an error reporting ",(0,o.kt)("strong",{parentName:"p"},"variable not defined"),"."),(0,o.kt)("p",null,"For the time being, this can be fixed manually by fixing."),(0,o.kt)("p",null,"Method 1, modify the code ",(0,o.kt)("strong",{parentName:"p"},"before compiling")," to split the loop and conditional statements into two components."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'<block wx:for="{{objectArray}}">\n  <block wx:if="{{index % 2 !== 0}}">\n    <view>objectArray item: {{item.id}}</view>\n  </block>\n</block>\n')),(0,o.kt)("p",null,"Method two, modify the code of ",(0,o.kt)("strong",{parentName:"p"},"post-compile")," to put the conditional judgment into the loop body."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"<Block>\n  {objectArray.map((item, index) => {\n    return (\n      <Block>\n        {index % 2 !== 0 && <View>{'objectArray item: ' + item.id}</View>}\n      </Block>\n    )\n  })}\n</Block>\n")),(0,o.kt)("h4",a({},{id:"12-the-root-element-cannot-contain-the-hidden-attribute"}),"1.2 The root element cannot contain the ",(0,o.kt)("inlineCode",{parentName:"h4"},"hidden")," attribute."),(0,o.kt)("h4",a({},{id:"13-compile-with-an-error-syntaxerror-unexpected-token"}),"1.3 Compile with an error: SyntaxError: Unexpected token"),(0,o.kt)("p",null,'A space is required to the right of the apostrophe "<". ',(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/4243"}),"#4243")),(0,o.kt)("h5",a({},{id:"solution-1"}),"Solution"),(0,o.kt)("p",null,"Check for the following writing style."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'<view>{{a <4? "1": "2"}}</view>\n')),(0,o.kt)("p",null,"Change to\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'<view>{{a < 4? "1": "2"}}</view>\n')),(0,o.kt)("h4",a({},{id:"14-run-with-the-following-error-referenceerror-item-is-not-defined"}),"1.4 Run with the following error\uff1a ReferenceError: item is not defined"),(0,o.kt)("p",null,"Look at the compiled JSX to see if the variable was removed from ",(0,o.kt)("inlineCode",{parentName:"p"},"this.data")," because it was omitted, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{}),"// The following code does not reference item\nconst { a, b, c } = this.data\n")),(0,o.kt)("h5",a({},{id:"solution-2"}),"Solution:"),(0,o.kt)("p",null,"The variable name in ",(0,o.kt)("inlineCode",{parentName:"p"},"this.data")," should not be the same as the variable name used to specify the current subscript of the array, which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"item"),", or the variable name specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"wx:for-index"),"."),(0,o.kt)("h4",a({},{id:"15-the-getregexp-method-in-wxs-is-not-supported"}),"1.5 The GetRegExp method in WXS is not supported."),(0,o.kt)("p",null,"Construct regular expressions using ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp"),"."),(0,o.kt)("h4",a({},{id:"16-the-use-of-template-is-not-supported-in-include"}),"1.6 The use of ",(0,o.kt)("inlineCode",{parentName:"h4"},"<template>")," is not supported in ",(0,o.kt)("inlineCode",{parentName:"h4"},"<include>")),(0,o.kt)("h4",a({},{id:"17-the-catch-event-is-not-supported-in-the-template-at-this-time"}),"1.7 The catch event is not supported in the template at this time"),(0,o.kt)("h3",a({},{id:"2-event"}),"2. Event"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Events do not support binding strings."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"catchtouchmove")," conversion only stops the callback function from bubbling, it does not prevent scroll-through. To prevent scroll-through, you can manually add the ",(0,o.kt)("inlineCode",{parentName:"li"},"catchMove")," property to the compiled ",(0,o.kt)("inlineCode",{parentName:"li"},"View")," component."),(0,o.kt)("li",{parentName:"ul"},"Event capture phase is not supported."),(0,o.kt)("li",{parentName:"ul"},"Responding to events with WXS functions is not supported."),(0,o.kt)("li",{parentName:"ul"},"Mutually exclusive event binding ",(0,o.kt)("inlineCode",{parentName:"li"},"mut-bind")," is not supported."),(0,o.kt)("li",{parentName:"ul"},"Does not support ",(0,o.kt)("inlineCode",{parentName:"li"},"mark")," to identify the specific target node that triggered the event.")),(0,o.kt)("h3",a({},{id:"3-commonjs-and-es-modular-syntax-do-not-mix"}),"3. CommonJS and ES modular syntax do not mix"),(0,o.kt)("p",null,"Possible error messages encountered."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cannot assign to read only property 'exports' of object"),(0,o.kt)("li",{parentName:"ul"},"export '","[something]","' (imported as '","[name]","') was not found in '","[somePath]","'")),(0,o.kt)("p",null,"Where the mini program API is used, Taro will convert ",(0,o.kt)("inlineCode",{parentName:"p"},"wx.api()")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.api()")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"import Taro from '@tarjs/taro")," to the header of the file."),(0,o.kt)("p",null,"If this file originally used ",(0,o.kt)("strong",{parentName:"p"},"CommonJS")," to organize the module, it may cause problems and need to be fixed manually."),(0,o.kt)("h3",a({},{id:"4-the-selectorquery-api-does-not-get-the-dom"}),"4. The selectorQuery API does not get the DOM."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"must be in the ",(0,o.kt)("inlineCode",{parentName:"li"},"onReady"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ready")," life cycle to call the mini program API to get the DOM. 2."),(0,o.kt)("li",{parentName:"ol"},"You don't need to call ",(0,o.kt)("inlineCode",{parentName:"li"},".in(this)")," method.")),(0,o.kt)("h3",a({},{id:"5-image-does-not-handle-dynamically-stitched-src"}),"5. Image does not handle dynamically stitched src"),(0,o.kt)("p",null,"Taro will process the src of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Before conversion.\n<Image src='../../img/icons/0.png' />\n// After conversion.\n<Image src={require('../../img/icons/0.png')} />\n")),(0,o.kt)("p",null,"However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," is a dynamically spliced string, you need to modify it manually: ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," is a dynamically spliced string."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Before conversion.\n<Image src='../../img/icons/' + chart.id + '.png' />\n// After conversion.\n<Image src='../../img/icons/' + chart.id + '.png' />\n// For manual changes, the images also need to be manually copied to the corresponding directory in taroConert/src.\n<Image src={require('../../img/icons/' + chart.id + '.png')} />\n")),(0,o.kt)("h3",a({},{id:"6-the-argument-to-require-cannot-be-a-variable"}),"6. The argument to require cannot be a variable"),(0,o.kt)("p",null,"Possible error messages encountered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The "path" argument must be of type string. Received type undefined')),(0,o.kt)("p",null,"Does not support converting the following writeups.",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/4749"}),"#4749"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"var pathTest = './test.js'\nvar test = require(pathTest)\n")),(0,o.kt)("p",null,"Taro can currently only convert ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," strings to be written."),(0,o.kt)("h3",a({},{id:"7-the-export-from-syntax-is-not-handled"}),"7. The export from syntax is not handled"),(0,o.kt)("p",null,"Temporary manual handling ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/5131"}),"#5131"),"\u3002"),(0,o.kt)("h3",a({},{id:"8-issues"}),"8. Issues"),(0,o.kt)("p",null,"For more questions on reverse conversion, please refer to the Taroize related ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues?q=is%3Aopen+is%3Aissue+label%3AA-taroize"}),"Issues"),"\u3002"))}u.isMDXComponent=!0}}]);