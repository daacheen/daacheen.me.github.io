(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{1378:function(e,t,n){Promise.resolve().then(n.t.bind(n,137,23)),Promise.resolve().then(n.t.bind(n,6375,23)),Promise.resolve().then(n.t.bind(n,6637,23)),Promise.resolve().then(n.bind(n,990)),Promise.resolve().then(n.bind(n,1519)),Promise.resolve().then(n.bind(n,4973)),Promise.resolve().then(n.bind(n,573)),Promise.resolve().then(n.bind(n,6944)),Promise.resolve().then(n.bind(n,6221)),Promise.resolve().then(n.t.bind(n,457,23))},990:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleFrontmatter:function(){return ArticleFrontmatter}});var r=n(2987),i=n(5374),a=n.n(i),s=n(5049),l=n.n(s),c=n(2256),o=n(3240),d=n(4284),u=n(7266),m=n(2560),f=n(3241);let ArticleFrontmatter=e=>{let{articleId:t,info:n,className:i,langVersions:s}=e,h=(0,m.QT)();return(0,r.jsxs)("div",{className:a()("flex flex-wrap gap-3 my-2 text-sm",i),children:[n.tags?(0,r.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,r.jsx)(o.fxx,{}),n.tags.map(e=>(0,r.jsx)(l(),{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,u.M)(h.currentLanguage.id,e)},e))]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",title:h.translateToString("articleFrontmatter.date"),children:[(0,r.jsx)(o.XdU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,f.o)((0,f.E)(n.date))})]}),n.last_updated?(0,r.jsxs)("div",{className:"flex items-center",title:h.translateToString("articleFrontmatter.lastUpdated"),children:[(0,r.jsx)(o.OS,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,f.o)((0,f.E)(n.last_updated))})]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(o.baU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(m.Vd,{id:"articleFrontmatter.wordCount",args:[n.wordCount]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(o.qyc,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(m.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(n.readingTime)]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(o.ssk,{}),(0,r.jsx)("span",{className:"mx-0.5 space-x-1",children:s.map(e=>{var i,a;return(0,r.jsx)(l(),{className:"link link-hover",href:(0,c.join)((0,d.k)({id:t,absolute_path:n.absolute_path}),e),children:null!==(a=null===(i=Object.values(m.Mj).find(t=>t.simplified===e))||void 0===i?void 0:i.name)&&void 0!==a?a:e},e)})})]})]})}},1519:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleImage:function(){return ArticleImage}});var r=n(2987),i=n(1361),a=n.n(i),s=n(2489);let loader=e=>{let{src:t,width:n}=e;return"".concat(t,"?width=").concat(n)},ArticleImage=e=>{var t;let{src:n,imageSize:i,imageProps:l}=e;return(0,r.jsx)(s.ck,{alt:null!==(t=l.alt)&&void 0!==t?t:"",original:n,width:i.width,height:i.height,children:e=>{var t;let{ref:s,open:c}=e;return(0,r.jsx)(a(),{ref:s,loader:loader,onClick:c,alt:null!==(t=l.alt)&&void 0!==t?t:"",src:n,width:i.width,height:i.height,className:"cursor-zoom-in mx-auto"})}})}},4973:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleToc:function(){return ArticleToc}});var r=n(2987),i=n(7317),a=n(294),s=n(2560);let TocMenuEntry=e=>{let{entry:{depth:t,value:n,children:i,id:a}}=e;return(0,r.jsxs)("li",{className:"w-full text-sm",children:[(0,r.jsx)("a",{className:"transition hover:bg-base-300 rounded w-full flex p-1","data-tocid":a,href:"#"+a,children:n}),t<=3&&i&&i.length>0?(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:i.map(e=>(0,r.jsx)(TocMenuEntry,{entry:e},e.id))}):void 0]})},ArticleToc=e=>{let{toc:t}=e;return(0,i.useEffect)(()=>{let e=Array.from(document.querySelectorAll("[data-tocid]"));if(0===e.length)return;let t=0,setActive=n=>{t!==n&&(e[t].classList.remove("active"),t=n,e[n].classList.add("active"))},onScroll=()=>{for(let n=0;n<e.length-1;n++){var t;if((t=document.getElementById(e[n+1].getAttribute("data-tocid")))&&t.getBoundingClientRect().top>=2){setActive(n);return}}setActive(e.length-1)};return e[0].classList.add("active"),window.addEventListener("scroll",onScroll),()=>{window.removeEventListener("scroll",onScroll)}},[]),(0,r.jsxs)("div",{className:"px-1 sticky top-24 max-h-[60vh] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex space-x-1 items-center py-2",children:[(0,r.jsx)(a.nEk,{}),(0,r.jsx)("span",{children:(0,r.jsx)(s.Vd,{id:"articlePage.toc"})})]}),(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:t.map(e=>(0,r.jsx)(TocMenuEntry,{entry:e},e.id))})]})}},573:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentPanelWithCurrentLanguage:function(){return CommentPanelWithCurrentLanguage}});var r=n(2987);n(9305);var i=n(4861),a=n.n(i),s=n(7317),l=n(3240),c=n(2560);let CommentPanel=e=>{let[t,n]=s.useState(!0),i=s.useRef(!0);return(0,s.useEffect)(()=>{if(i.current){i.current=!1;return}n(!1)},[e.language]),(0,s.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(l.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(a(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},CommentPanelWithCurrentLanguage=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(CommentPanel,{...e,language:n.gitalkLangId})}},6944:function(e,t,n){"use strict";n.r(t),n.d(t,{Gallery:function(){return r.ri}});var r=n(2489)},1670:function(e,t,n){"use strict";n.r(t),n.d(t,{LocalizedArticleLink:function(){return LocalizedArticleLink}});var r=n(2987),i=n(5049),a=n.n(i),s=n(2560);let LocalizedArticleLink=e=>{let{basePath:t,className:n,children:i}=e,l=(0,s.QT)(),c=(0,s.G3)(l.currentLanguage.id);return(0,r.jsx)(a(),{href:t+"/"+c.simplified,className:n,children:i})}},6221:function(e,t,n){"use strict";n.r(t),n.d(t,{RelatedArticles:function(){return RelatedArticles}});var r=n(2987),i=n(3240),a=n(1670),s=n(4284),l=n(2560);let RelatedArticles=e=>{let{relatedArticles:t}=e,n=(0,l.QT)();if(0!==t.length)return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(i.Z1Y,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(l.Vd,{id:"articlePage.relatedArticles.text"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let i=null!==(t=e.langVersions.find(e=>e.lang===(0,l.G3)(n.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,r.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"text-sm",children:i.time}),(0,r.jsx)(a.LocalizedArticleLink,{basePath:(0,s.k)(e),children:(0,r.jsx)("h2",{className:"card-title",children:i.title})}),(0,r.jsx)("p",{children:i.excerpt})]})},e.id)})})]})}},4284:function(e,t,n){"use strict";n.d(t,{k:function(){return getArticleBasePath}});let getArticleBasePath=e=>{var t;return null!==(t=e.absolute_path)&&void 0!==t?t:"/articles/".concat(e.id)}},7266:function(e,t,n){"use strict";n.d(t,{M:function(){return getLocaleTag}});var r=n(2560),i=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function getLocaleTag(e,t){var n;let a=i.find(e=>e.tag===t);return null!==(n=null==a?void 0:a[(0,r.G3)(e).simplified])&&void 0!==n?n:t}},1591:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return s},Provider:function(){return l},prefix:function(){return o},useI18n:function(){return c}});var r=n(202),i=n(9405);let a=(0,r.o)(i.yX),s=a.Localized,l=a.Provider,c=a.useI18n,o=a.prefix},2560:function(e,t,n){"use strict";n.d(t,{G3:function(){return i.G3},Mj:function(){return i.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return i.al},zt:function(){return r.Provider}});var r=n(1591),i=n(9405)},9405:function(e,t,n){"use strict";n.d(t,{G3:function(){return getLanguage},Mj:function(){return i},al:function(){return a},yX:function(){return r}});let r={"zh-CN":()=>n.e(818).then(n.t.bind(n,4818,19)).then(e=>e.default),"en-US":()=>n.e(985).then(n.t.bind(n,8985,19)).then(e=>e.default)},i={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},getLanguage=e=>i[e],a="zh-CN";Object.keys(i)},3241:function(e,t,n){"use strict";n.d(t,{E:function(){return fromArticleTime},o:function(){return formatDateTime}});var r=n(876);function formatDateTime(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function fromArticleTime(e){return r.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},6375:function(){},457:function(){}},function(e){e.O(0,[710,318,531,440,671,359,582,135,195,338,744],function(){return e(e.s=1378)}),_N_E=e.O()}]);