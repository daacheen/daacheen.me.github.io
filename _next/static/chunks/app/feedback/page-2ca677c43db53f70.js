(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{635:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},365:function(e,t,n){Promise.resolve().then(n.bind(n,8825))},8825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(9953),i=n(1763),a=n(635),o=n.n(a),u=n(6448),c=n.n(u);n(9873);var l=n(9094),s=n(5980);let d=[[l.LIs,"http://wpa.qq.com/msgrd?v=3&uin=540232834&site=qq&menu=yes","QQ: 540232834"],[l.KKr,"mailto://ddadaal.me@outlook.com","E-mail: ddadaal@outlook.com"],[l.ltd,"https://www.linkedin.com/in/chenjunda/","LinkedIn: 陈俊达"],[l.hJX,"https://github.com/ddadaal","GitHub: ddadaal"],[l.T6$,"https://steamcommunity.com/profiles/76561198104889782","Steam: Victor Crubs"],[l.Vg3,"https://zhihu.com/people/VicCrubs","知乎：陈俊达"],[s.ci9,"https://www.douban.com/people/183064260/","豆瓣: ddadaal"]],f=e=>{let{Src:t,link:n,text:i,size:a}=e,o=14*a;return(0,r.jsx)("a",{href:n,title:i,target:"_blank",className:"block transition hover:scale-125",rel:"noreferrer",children:"object"==typeof t?(0,r.jsx)(c(),{src:t,alt:i,height:o,width:o}):(0,r.jsx)(t,{size:o})})},p=e=>{let{size:t,className:n}=e;return(0,r.jsx)("div",{className:o()("flex py-2 gap-2",n),children:d.map(e=>{let[n,i,a]=e;return(0,r.jsx)("span",{children:(0,r.jsx)(f,{Src:n,link:i,text:a,size:t})},i)})})};var h=n(3636);function g(){return(0,r.jsxs)("div",{className:"max-w-7xl mx-auto p-4 animate-slide-up",children:[(0,r.jsxs)("div",{className:"prose text-center max-w-none",children:[(0,r.jsx)("h1",{children:(0,r.jsx)(h.Vd,{id:"feedback.title"})}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Vd,{id:"feedback.paragraph1"})}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Vd,{id:"feedback.paragraph2"})}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Vd,{id:"feedback.paragraph3"})}),(0,r.jsx)(p,{size:2,className:"justify-center"})]}),(0,r.jsx)(i.CommentPanelWithCurrentLanguage,{articleId:"feedback",articleTitle:"反馈"})]})}},1763:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentPanelWithCurrentLanguage:function(){return s}});var r=n(9953);n(7923);var i=n(7535),a=n.n(i),o=n(9873),u=n(9094),c=n(3636);let l=e=>{let[t,n]=o.useState(!0),i=o.useRef(!0);return(0,o.useEffect)(()=>{if(i.current){i.current=!1;return}n(!1)},[e.language]),(0,o.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(u.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(a(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},s=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(l,{...e,language:n.gitalkLangId})}},5707:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return o},Provider:function(){return u},prefix:function(){return l},useI18n:function(){return c}});var r=n(958),i=n(1946);let a=(0,r.o)(i.yX),o=a.Localized,u=a.Provider,c=a.useI18n,l=a.prefix},3636:function(e,t,n){"use strict";n.d(t,{G3:function(){return i.G3},Mj:function(){return i.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return i.al},zt:function(){return r.Provider}});var r=n(5707),i=n(1946)},1946:function(e,t,n){"use strict";n.d(t,{G3:function(){return a},Mj:function(){return i},al:function(){return o},yX:function(){return r}});let r={"zh-CN":()=>n.e(827).then(n.t.bind(n,9827,19)).then(e=>e.default),"en-US":()=>n.e(746).then(n.t.bind(n,7746,19)).then(e=>e.default)},i={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>i[e],o="zh-CN";Object.keys(i)},7923:function(){},9911:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(9873),i=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,c={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:s,props:c,_owner:o.current}}t.jsx=c,t.jsxs=c},9953:function(e,t,n){"use strict";e.exports=n(9911)},6448:function(e,t,n){e.exports=n(2647)},6605:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(9873),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function c(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var n,i=e.attr,a=e.size,c=e.title,l=u(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(i)}},958:function(e,t,n){"use strict";n.d(t,{o:function(){return g}});var r=n(9873);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e){return Error(`Id ${e} is not valid`)}let o=/(\{\})/,u=(e,t)=>{let n=e;for(let e of t.split(".")){if(void 0===n)throw a(t);n=n[e]}if("string"!=typeof n)throw a(t);return n};function c(){let e=(0,r.useContext)(d);if(!e)throw Error("Wrap the component with I18nProvider.");return e}let l=e=>e,s=e=>t=>e+t,d=r.createContext(void 0),f=async e=>"function"==typeof e?await e():e,p=({id:e,args:t})=>{let n=c();return(0,r.useMemo)(()=>n.translate(e,t),[e,t,n.currentLanguage])},h=()=>({Localized:p});function g(e){return i({},{id:l,Provider:({initialLanguage:t,children:n})=>{let[i,a]=(0,r.useState)(t),c=(0,r.useCallback)(async e=>{a({id:e.id,definitions:await f(e.definitions)})},[e]),l=(0,r.useCallback)(async t=>{let n=e[t];if(!n)throw Error(`No language with id ${t} is found.`);await c({id:t,definitions:n})},[e]),s=(0,r.useCallback)((e,t)=>(function(e,t){let n=e.split(o),r=0,i=!1;for(let e=1;e<n.length;e+=2)"object"==typeof t[r]&&(i=!0),n[e]=t[r++];return i?n:n.join("")})(u(i.definitions,e),t),[e,i]);return r.createElement(d.Provider,{value:{currentLanguage:i,setLanguageById:l,setLanguage:c,translate:s,translateToString:s}},n)},useI18n:c,prefix:s},h())}}},function(e){e.O(0,[309,975,335,647,609,159,890,744],function(){return e(e.s=365)}),_N_E=e.O()}]);