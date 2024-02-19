"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[14730],{79874:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(93106);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59922:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});t(93106);var r=t(79874);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const a={title:"Mini Program Plugin Development"},p=void 0,l={unversionedId:"miniprogram-plugin",id:"miniprogram-plugin",title:"Mini Program Plugin Development",description:"WeChat mini-program plugin development",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/miniprogram-plugin.md",sourceDirName:".",slug:"/miniprogram-plugin",permalink:"/taro-docs/en/docs/next/miniprogram-plugin",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/miniprogram-plugin.md",tags:[],version:"current",frontMatter:{title:"Mini Program Plugin Development"},sidebar:"docs",previous:{title:"Mini Program Cloud Development Template",permalink:"/taro-docs/en/docs/next/wxcloudbase"},next:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u72ec\u7acb\u5206\u5305",permalink:"/taro-docs/en/docs/next/independent-subpackage"}},u={},s=[{value:"WeChat mini-program plugin development",id:"wechat-mini-program-plugin-development",level:2},{value:"Create Plugin Development Templates",id:"create-plugin-development-templates",level:3},{value:"Modify appid",id:"modify-appid",level:3},{value:"Project Structure",id:"project-structure",level:3},{value:"Compile Project",id:"compile-project",level:3},{value:"Add Mini Program Project",id:"add-mini-program-project",level:3},{value:"Using The Plugin Page",id:"using-the-plugin-page",level:3},{value:"Using plugin components",id:"using-plugin-components",level:3},{value:"Plugin components accept external props",id:"plugin-components-accept-external-props",level:4},{value:"Using the plugin interface",id:"using-the-plugin-interface",level:3}],c={toc:s},g="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)(g,i({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"wechat-mini-program-plugin-development"}),"WeChat mini-program plugin development"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WeChat mini-program currently only support development using ",(0,r.kt)("inlineCode",{parentName:"p"},"React"),".")),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/"}),"WeChat Mini Program plugin development overview")),(0,r.kt)("h3",i({},{id:"create-plugin-development-templates"}),"Create Plugin Development Templates"),(0,r.kt)("p",null,"WeChat Mini Program plugins are divided into ",(0,r.kt)("strong",{parentName:"p"},"pages"),", ",(0,r.kt)("strong",{parentName:"p"},"components")," and ",(0,r.kt)("strong",{parentName:"p"},"interfaces"),". Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"taro init")," command and then select Generate ",(0,r.kt)("strong",{parentName:"p"},"WeChat  Mini Program Plugin Template")," to generate a Taro WeChat  Mini Program plugin project containing the above three plugin types in the current directory."),(0,r.kt)("h3",i({},{id:"modify-appid"}),"Modify appid"),(0,r.kt)("p",null,"After creating the template, you first need to modify the ",(0,r.kt)("strong",{parentName:"p"},"appid")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.config.json")," and the ",(0,r.kt)("strong",{parentName:"p"},"prodiver")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.js")," to the same appid."),(0,r.kt)("h3",i({},{id:"project-structure"}),"Project Structure"),(0,r.kt)("p",null,"The recommended plugin project structure is as follows:"),(0,r.kt)("p",null,"Note that the last thing published is the contents of the plugin folder. All the contents of the plugin and its dependencies except for the npm package should be written in the plugin folder. The pages in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," are just for debugging the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"\u251c\u2500\u2500 config                 Project compilation configuration Directory\n\u251c\u2500\u2500 src                    Source Directory\n|   \u251c\u2500\u2500 pages              Debug page Directory for debugging plugins\n|   |   \u2514\u2500\u2500 index          \n|   \u251c\u2500\u2500 plugin             Plugin Directory\n|   |   \u251c\u2500\u2500 doc            Plugin Documentation Directory\n|   |   \u251c\u2500\u2500 components     Component Plugin Directory\n|   |   \u251c\u2500\u2500 pages          Page Plugin Directory\n|   |   \u251c\u2500\u2500 index.js       Interface plugin files\n|   |   \u2514\u2500\u2500 plugin.json    Plugin configuration file\n|   \u251c\u2500\u2500 app.css            General project style\n|   \u2514\u2500\u2500 app.js             Project entry file\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 package.config.json\n")),(0,r.kt)("h3",i({},{id:"compile-project"}),"Compile Project"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bin"}),"taro build --plugin weapp\ntaro build --plugin weapp --watch\n")),(0,r.kt)("h3",i({},{id:"add-mini-program-project"}),"Add Mini Program Project"),(0,r.kt)("p",null,"Add the Taro plugin project root in WeChat Developer Tools."),(0,r.kt)("h3",i({},{id:"using-the-plugin-page"}),"Using The Plugin Page"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("strong",{parentName:"p"},"pages")," field of plugin.json to the page plugin path."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "pages": {\n    "list": "pages/list/list"\n  }\n}\n')),(0,r.kt)("p",null,"The page uses the path: ",(0,r.kt)("strong",{parentName:"p"},"plugin://","[name of registered plugin in app.js]","/","[name of registered page in plugin.json]")," for jumping."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"{1}","{1}":!0}),"<Navigator url='plugin://myPlugin/list'>\n  Go to pages/list!\n</Navigator>\n")),(0,r.kt)("h3",i({},{id:"using-plugin-components"}),"Using plugin components"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"publicComponents")," field of plugin.json adds the component plugin path."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "publicComponents": {\n    "avatar": "components/avatar/avatar"\n  }\n}\n')),(0,r.kt)("p",null,"Configure the plugin name and plugin path in the page configuration config.usingComponents (",(0,r.kt)("strong",{parentName:"p"},"plugin://","[name of plugin registered in app.js]","/","[name of component registered in plugin.json]"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"export default class Index extends Component {\n  config = {\n    usingComponents: {\n      'avatar': 'plugin://myPlugin/avatar'\n    }\n  }\n}\n")),(0,r.kt)("h4",i({},{id:"plugin-components-accept-external-props"}),"Plugin components accept external props"),(0,r.kt)("p",null,"If you need to pass parameters to the plugin, you need to pass them uniformly in the component's ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// General props passing\n<Plugin title={this.state.name} desc={this.state.desc} />\n\n// needs to be transformed to the following form when using the plugin component.\nconst extraProps = {\n  name: this.state.name,\n  desc: this.state.desc\n}\n<Plugin props={extraProps} />\n")),(0,r.kt)("h3",i({},{id:"using-the-plugin-interface"}),"Using the plugin interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"main")," field of plugin.json adds the path to the interface plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "main": "index.js"\n}\n')),(0,r.kt)("p",null,"Use in the page:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"const myPluginInterface = Taro.requirePlugin('myPlugin')\n\nexport default class Index extends Component {\n  componentWillMount () {\n    myPluginInterface.sayHello()\n    const answer = myPluginInterface.answer\n    console.log('answer: ', answer)\n  }\n")))}m.isMDXComponent=!0}}]);