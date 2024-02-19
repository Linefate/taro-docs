"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59419],{79874:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return k}});var n=l(93106);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(l),h=r,k=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return l?n.createElement(k,a(a({ref:t},s),{},{components:l})):n.createElement(k,a({ref:t},s))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=l[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},27152:function(e,t,l){l.r(t),l.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}const a={title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},c=void 0,i={unversionedId:"apis/device/bluetooth/getBluetoothDevices",id:"version-3.x/apis/device/bluetooth/getBluetoothDevices",title:"Taro.getBluetoothDevices(option)",description:"Obtains all Bluetooth devices discovered during the active period of the Bluetooth module, including all devices that are already connected to the mobile.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/getBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothDevices",permalink:"/taro-docs/en/docs/apis/device/bluetooth/getBluetoothDevices",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/bluetooth/getBluetoothDevices.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},sidebar:"API",previous:{title:"getConnectedBluetoothDevices",permalink:"/taro-docs/en/docs/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"getBluetoothAdapterState",permalink:"/taro-docs/en/docs/apis/device/bluetooth/getBluetoothAdapterState"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"SuccessCallbackResultBlueToothDevice",id:"successcallbackresultbluetoothdevice",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:s},p="wrapper";function h(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(p,r({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Obtains all Bluetooth devices discovered during the active period of the Bluetooth module, including all devices that are already connected to the mobile."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This API obtains a device list of ",(0,n.kt)("inlineCode",{parentName:"p"},"all Bluetooth devices discovered during the active period of the Bluetooth module"),". If you do not promptly call wx.closeBluetoothAdapter to release system resources after the end of the Bluetooth module process, calling this API will return Bluetooth devices discovered in the previous Bluetooth process. These devices may no longer be near the user, and thus cannot be connected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When a Bluetooth device is discovered, the name field returned by the system is generally the device name in the LocalName field in the broadcast package. If a connection is established with the Bluetooth device, the name field returned by the system changes to the GattName obtained from the Bluetooth device. If you need to dynamically change and display the device name, we recommend using the localName field."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getBluetoothDevices.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"devices"),(0,n.kt)("td",null,(0,n.kt)("code",null,"SuccessCallbackResultBlueToothDevice[]")),(0,n.kt)("td",null,"The list of connected devices corresponding to the UUIDs")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,n.kt)("h3",r({},{id:"successcallbackresultbluetoothdevice"}),"SuccessCallbackResultBlueToothDevice"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"RSSI"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The signal strength of the current Bluetooth device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"advertisData"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ArrayBuffer")),(0,n.kt)("td",null,"The ManufacturerData field in the broadcast data field of the current Bluetooth device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"advertisServiceUUIDs"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",null,"The ServiceUUIDs field in the broadcast data field of the current Bluetooth device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"deviceId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Device ID")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"localName"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The LocalName field in the broadcast data field of the current Bluetooth device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The name of the Bluetooth device. Some devices may not have a name.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"serviceData"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The ServiceData field in the broadcast data field of the current Bluetooth device")))),(0,n.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// Example of an ArrayBuffer converted to a hexadecimal string\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.getBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n    if (res.devices[0]) {\n      console.log(ab2hex(res.devices[0].advertisData))\n    }\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getBluetoothDevices"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}h.isMDXComponent=!0}}]);