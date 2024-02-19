"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15903],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Vue3"},u=void 0,l={unversionedId:"vue3",id:"vue3",title:"Vue3",description:"Taro can be developed using Vue 3. Developers can use the taro init command to create templates for Vue 3, including default, vuex, and NutUI. We recommend using NutUI4.0 templates for development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/vue3.md",sourceDirName:".",slug:"/vue3",permalink:"/taro-docs/en/docs/next/vue3",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/vue3.md",tags:[],version:"current",frontMatter:{title:"Vue3"},sidebar:"docs",previous:{title:"Page Component",permalink:"/taro-docs/en/docs/next/vue-page"},next:{title:"Vue3 Composition APIs",permalink:"/taro-docs/en/docs/next/composition-api"}},p={},s=[{value:"Other limitations",id:"other-limitations",level:2},{value:"Related Reading",id:"related-reading",level:2}],c={toc:s},m="wrapper";function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(m,o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro can be developed using Vue 3. Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"taro init")," command to create templates for Vue 3, including ",(0,r.kt)("strong",{parentName:"p"},"default"),", ",(0,r.kt)("strong",{parentName:"p"},"vuex"),", and ",(0,r.kt)("a",o({parentName:"p"},{href:"https://nutui.jd.com/"}),"NutUI"),". We recommend using NutUI4.0 templates for development."),(0,r.kt)("p",null,"For details, please refer to the Taro Vue series documentation."),(0,r.kt)("p",null,"Developers can choose to organize their logic using options-style configuration or the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://v3.vuejs.org/guide/composition-api-introduction.html"}),"Composition API")," and browse the ","[Vue 3 documentation]","(",(0,r.kt)("a",o({parentName:"p"},{href:"https://v3."}),"https://v3.")," vuejs.org/) to learn more about Vue3 changes."),(0,r.kt)("h2",o({},{id:"other-limitations"}),"Other limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<style scoped>")," is not supported in the mini-program, it is recommended to use cssModules instead.",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/6662"}),"#6662")),(0,r.kt)("li",{parentName:"ul"},"Elements cannot be inserted outside the DOM tree of a page component, so ",(0,r.kt)("inlineCode",{parentName:"li"},"<teleport>")," is not supported"),(0,r.kt)("li",{parentName:"ul"},"The internal implementation of Vue 3 uses Proxy, which does not work on iOS 9 and below. However, the official Vue team will release a compatible version after the official release."),(0,r.kt)("li",{parentName:"ul"},"Using ref on the H5 side to get the DOM node of the base component now only gets the Vue component instance of the adaptation layer, not the corresponding webComponent root node. This was possible in Vue2 by modifying the refs property of the parent element, but the order of initialization between components has changed in Vue3, so it is not supported for now."),(0,r.kt)("li",{parentName:"ul"},"The v-model binding property of Vue3 has been changed to modelValue and the event binding has been changed to update:modelValue. For example, input automatically corresponds to modelValue and value, update:modelValue and @input, but for Picker, which is an mini program-specific form, it does not, so we recommend not using v-model in this case."),(0,r.kt)("li",{parentName:"ul"},"The VirtualList component needs to implement a Vue3 version (to be implemented)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of all components must remain unique throughout the application (even if they are on different pages), otherwise it may cause problems with events not firing.",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7317"}),"#7317"))),(0,r.kt)("h2",o({},{id:"related-reading"}),"Related Reading"),(0,r.kt)("p",null,"New Vue3 features can be found in the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features"}),"Vue3 documentation"),"."),(0,r.kt)("p",null,"How Taro is compatible with Vue3 can be found in ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md"}),"Taro RFC"),"."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"}),"Developing Applets with Vue3")," by lillian."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"})," NutUI Development Example ")," by jdf2e."))}d.isMDXComponent=!0}}]);