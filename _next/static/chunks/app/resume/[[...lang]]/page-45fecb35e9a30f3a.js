(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{9870:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,5751,23)),Promise.resolve().then(a.t.bind(a,3593,23)),Promise.resolve().then(a.t.bind(a,7994,23)),Promise.resolve().then(a.bind(a,7566)),Promise.resolve().then(a.bind(a,7791)),Promise.resolve().then(a.bind(a,4538)),Promise.resolve().then(a.bind(a,6257)),Promise.resolve().then(a.bind(a,2400)),Promise.resolve().then(a.bind(a,4406)),Promise.resolve().then(a.t.bind(a,6109,23)),Promise.resolve().then(a.bind(a,1571))},7566:(e,t,a)=>{"use strict";a.d(t,{ArticleFrontmatter:()=>x});var s=a(4001),n=a(4855),r=a.n(n),i=a(5751),l=a.n(i),c=a(5348),d=a(9521),o=a(4833),m=a(8220),h=a(3269),u=a(109);let x=e=>{let{articleId:t,info:a,className:n,langVersions:i}=e,x=(0,h.s9)();return(0,s.jsxs)("div",{className:r()("flex flex-wrap gap-3 my-2 text-sm",n),children:[a.tags?(0,s.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,s.jsx)(d.wJQ,{}),a.tags.map(e=>(0,s.jsx)(l(),{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,m.Z)(x.currentLanguage.id,e)},e))]}):void 0,(0,s.jsxs)("div",{className:"flex items-center",title:x.translateToString("articleFrontmatter.date"),children:[(0,s.jsx)(d.itz,{}),(0,s.jsx)("span",{className:"mx-0.5",children:(0,u.r)((0,u.a)(a.date))})]}),a.last_updated?(0,s.jsxs)("div",{className:"flex items-center",title:x.translateToString("articleFrontmatter.lastUpdated"),children:[(0,s.jsx)(d.W5v,{}),(0,s.jsx)("span",{className:"mx-0.5",children:(0,u.r)((0,u.a)(a.last_updated))})]}):void 0,(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(d.WLb,{}),(0,s.jsx)("span",{className:"mx-0.5",children:(0,s.jsx)(h.Oj,{id:"articleFrontmatter.wordCount",args:[a.wordCount]})})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(d.w_X,{}),(0,s.jsx)("span",{className:"mx-0.5",children:(0,s.jsx)(h.Oj,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(a.readingTime)]})})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(d.f35,{}),(0,s.jsx)("span",{className:"mx-0.5 space-x-1",children:i.map(e=>{var n,r;return(0,s.jsx)(l(),{className:"link link-hover",href:(0,c.join)((0,o.$)({id:t,absolute_path:a.absolute_path}),e),children:null!==(r=null===(n=Object.values(h.eo).find(t=>t.simplified===e))||void 0===n?void 0:n.name)&&void 0!==r?r:e},e)})})]})]})}},7791:(e,t,a)=>{"use strict";a.d(t,{ArticleImage:()=>l});var s=a(4001),n=a(9235),r=a(9237);let i=e=>{let{src:t,width:a}=e;return"".concat(t,"?width=").concat(a.toString())},l=e=>{var t;let{src:a,imageSize:l,imageProps:c}=e;return(0,s.jsxs)("figure",{children:[(0,s.jsx)(r.q7,{alt:null!==(t=c.alt)&&void 0!==t?t:"",original:a,width:l.width,height:l.height,children:e=>{var t;let{ref:r,open:d}=e;return(0,s.jsx)(n.default,{ref:r,loader:i,onClick:d,alt:null!==(t=c.alt)&&void 0!==t?t:"",src:a,width:l.width,height:l.height,className:"cursor-zoom-in mx-auto"})}}),c.alt?(0,s.jsx)("figcaption",{className:"text-center",children:c.alt}):null]})}},4538:(e,t,a)=>{"use strict";a.d(t,{ArticleToc:()=>c});var s=a(4001),n=a(7749),r=a(1761),i=a(3269);let l=e=>{let{entry:{depth:t,value:a,children:n,id:r}}=e;return(0,s.jsxs)("li",{className:"w-full text-sm",children:[(0,s.jsx)("a",{className:"transition hover:bg-base-300 rounded w-full flex p-1","data-tocid":r,href:"#"+(null!=r?r:"").toString(),children:a}),t<=3&&n&&n.length>0?(0,s.jsx)("ul",{className:"pl-2 border-l border-neutral",children:n.map(e=>(0,s.jsx)(l,{entry:e},e.id))}):void 0]})},c=e=>{let{toc:t,hasSummary:a}=e;return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("[data-tocid]"));if(0===e.length)return;let t=0,a=a=>{t!==a&&(e[t].classList.remove("active"),t=a,e[a].classList.add("active"))},s=()=>{for(let t=0;t<e.length-1;t++){let s=e[t].getAttribute("data-tocid");if(s&&function(e){return!!e&&e.getBoundingClientRect().top>=2}(document.getElementById(s))){a(t);return}}a(e.length-1)};return e[0].classList.add("active"),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),a&&(t=[{depth:0,value:(0,s.jsx)("span",{className:"font-bold",children:(0,s.jsx)(i.Oj,{id:"articlePage.toc.summary"})}),id:"summary"},...t]),(0,s.jsxs)("div",{className:"px-1 sticky top-24 max-h-[60vh] overflow-auto",children:[(0,s.jsxs)("div",{className:"flex space-x-1 items-center py-2",children:[(0,s.jsx)(r.k_l,{}),(0,s.jsx)("span",{children:(0,s.jsx)(i.Oj,{id:"articlePage.toc.title"})})]}),(0,s.jsx)("ul",{className:"pl-2 border-l border-neutral",children:t.map(e=>(0,s.jsx)(l,{entry:e},e.id))})]})}},6257:(e,t,a)=>{"use strict";a.d(t,{CommentPanelWithCurrentLanguage:()=>o});var s=a(4001);a(5224);var n=a(1237),r=a.n(n),i=a(7749),l=a(9521),c=a(3269);let d=e=>{let[t,a]=i.useState(!0),n=i.useRef(!0);return(0,i.useEffect)(()=>{if(n.current){n.current=!1;return}a(!1)},[e.language]),(0,i.useEffect)(()=>{t||a(!0)}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,s.jsx)(l.uN,{}),(0,s.jsx)("span",{className:"mx-2",children:(0,s.jsx)(c.Oj,{id:"comments.title"})})]}),t?(0,s.jsx)(r(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},o=e=>{let t=(0,c.s9)(),a=(0,c.Z0)(t.currentLanguage.id);return(0,s.jsx)(d,{...e,language:a.gitalkLangId})}},2400:(e,t,a)=>{"use strict";a.d(t,{Gallery:()=>s.Z2});var s=a(9237)},2201:(e,t,a)=>{"use strict";a.d(t,{LocalizedArticleLink:()=>l});var s=a(4001),n=a(5751),r=a.n(n),i=a(3269);let l=e=>{let{basePath:t,className:a,children:n}=e,l=(0,i.s9)(),c=(0,i.Z0)(l.currentLanguage.id);return(0,s.jsx)(r(),{href:t+"/"+c.simplified,className:a,children:n})}},4406:(e,t,a)=>{"use strict";a.d(t,{RelatedArticles:()=>c});var s=a(4001),n=a(9521),r=a(2201),i=a(4833),l=a(3269);let c=e=>{let{relatedArticles:t}=e,a=(0,l.s9)();if(0!==t.length)return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,s.jsx)(n.Z0P,{}),(0,s.jsx)("span",{className:"mx-2",children:(0,s.jsx)(l.Oj,{id:"articlePage.relatedArticles.text"})})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let n=null!==(t=e.langVersions.find(e=>e.lang===(0,l.Z0)(a.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,s.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("span",{className:"text-sm",children:n.time}),(0,s.jsx)(r.LocalizedArticleLink,{basePath:(0,i.$)(e),children:(0,s.jsx)("h2",{className:"card-title",children:n.title})}),(0,s.jsx)("p",{children:n.excerpt})]})},e.id)})})]})}},4833:(e,t,a)=>{"use strict";a.d(t,{$:()=>s});let s=e=>{var t;return null!==(t=e.absolute_path)&&void 0!==t?t:"/articles/".concat(e.id)}},8220:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(3269);let n=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function r(e,t){var a;let r=n.find(e=>e.tag===t);return null!==(a=null==r?void 0:r[(0,s.Z0)(e).simplified])&&void 0!==a?a:t}},1571:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Localized:()=>i,Provider:()=>l,prefix:()=>d,useI18n:()=>c});var s=a(8088),n=a(2454);let r=(0,s.hU)(n.bx),i=r.Localized,l=r.Provider,c=r.useI18n,d=r.prefix},3269:(e,t,a)=>{"use strict";a.d(t,{Kq:()=>s.Provider,Oj:()=>s.Localized,Pl:()=>s.prefix,Z0:()=>n.Z0,eo:()=>n.eo,q:()=>n.q,s9:()=>s.useI18n});var s=a(1571),n=a(2454)},2454:(e,t,a)=>{"use strict";a.d(t,{Z0:()=>r,bx:()=>s,eo:()=>n,q:()=>i});let s={"zh-CN":()=>a.e(394).then(a.t.bind(a,2394,19)).then(e=>e.default),"en-US":()=>a.e(740).then(a.t.bind(a,6740,19)).then(e=>e.default)},n={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},r=e=>n[e],i="zh-CN";Object.keys(n)},109:(e,t,a)=>{"use strict";a.d(t,{a:()=>r,r:()=>n});var s=a(9766);function n(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function r(e){return s.c9.fromSQL(e,{zone:"Asia/Shanghai"})}},3593:()=>{},6109:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[780,511,909,72,116,405,994,786,861,688,812,142,767,358],()=>t(9870)),_N_E=e.O()}]);