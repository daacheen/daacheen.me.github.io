(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{8853:function(e,t,n){Promise.resolve().then(n.t.bind(n,45,23)),Promise.resolve().then(n.t.bind(n,6996,23)),Promise.resolve().then(n.bind(n,934)),Promise.resolve().then(n.bind(n,1327)),Promise.resolve().then(n.bind(n,188)),Promise.resolve().then(n.bind(n,3536)),Promise.resolve().then(n.bind(n,1547)),Promise.resolve().then(n.bind(n,4111)),Promise.resolve().then(n.bind(n,1273)),Promise.resolve().then(n.bind(n,7466)),Promise.resolve().then(n.t.bind(n,2705,23)),Promise.resolve().then(n.bind(n,6052))},6513:function(e,t,n){"use strict";var r=n(5318);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},934:function(e,t,n){"use strict";n.d(t,{ArticleList:function(){return d}});var r=n(2984),a=n(9148),s=n.n(a),i=n(8125),l=n(1327),c=n(9147);let d=e=>{let{articles:t,pageNum:n,totalPages:a,tagCounts:d,articleCount:o}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"lg:hidden max-w-full my-4",children:(0,r.jsx)(l.E,{showTags:!0,tagCounts:d,articleCount:o})}),(0,r.jsx)("div",{className:"space-y-8",children:t.map(e=>(0,r.jsx)(c.i,{article:e},e.id))}),(0,r.jsx)("div",{className:"flex justify-center w-full my-4",children:(0,r.jsx)("div",{className:"join flex-wrap",children:Array.from({length:a},(e,t)=>t+1).map(e=>(0,r.jsx)(i.default,{href:"/articles/".concat(e),children:(0,r.jsx)("button",{className:s()("join-item","btn",{"btn-active":e===n}),children:e})},e))})})]})}},1327:function(e,t,n){"use strict";n.d(t,{E:function(){return p},SearchCard:function(){return N},TagsCard:function(){return j},WebsiteCard:function(){return f}});var r=n(2984),a=n(9148),s=n.n(a),i=n(8125),l=n(6513),c=n(4986),d=n(6268),o=n(6405),u=n(5709),h=n(6132),m=n.n(h);let x=e=>{let{href:t,children:n,target:a}=e;return(0,r.jsx)(i.default,{className:"link link-hover flex items-center my-1 space-x-1",href:t,target:a,children:n})},f=()=>(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(d.ssk,{})," ddadaal.me | ",(0,r.jsx)(u.Vd,{id:"blogIntro.subtitle"})]}),(0,r.jsx)("p",{children:(0,r.jsx)(u.Vd,{id:"blogIntro.description2"})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(x,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,r.jsx)(d.tvD,{}),(0,r.jsx)("span",{children:(0,r.jsx)(u.Vd,{id:"blogIntro.sourceCode"})})]}),(0,r.jsxs)(x,{href:"/rss.xml",target:"_blank",children:[(0,r.jsx)(d.FZ6,{})," ",(0,r.jsx)("span",{children:"RSS"})]}),(0,r.jsxs)(x,{href:"/feedback",children:[(0,r.jsx)(d.ajU,{}),(0,r.jsx)("span",{children:(0,r.jsx)(u.Vd,{id:"blogIntro.feedback"})})]})]})]})}),g=e=>{let{tagCounts:t}=e,n=(0,u.QT)();return(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{let{tag:t,count:a}=e;return(0,r.jsxs)(i.default,{href:{pathname:"/articles/search",query:{query:t}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,o.M)(n.currentLanguage.id,t),(0,r.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:a})]},t)})})},j=e=>{let{tagCounts:t}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(d.YxP,{}),(0,r.jsx)(u.Vd,{id:"tagsCard.title"})]}),(0,r.jsx)(g,{tagCounts:t})]})})},v=e=>(0,r.jsx)("input",{type:"text",className:"input input-bordered w-full",autoComplete:"off",...e}),b=e=>{var t;let{placeholder:n,name:a}=e,s=null!==(t=(0,l.useSearchParams)().get("query"))&&void 0!==t?t:void 0,[i,d]=(0,c.useState)(s);return(0,c.useEffect)(()=>{d(s)},[s]),(0,r.jsx)(v,{placeholder:n,value:i,name:a,onChange:e=>{d(e.target.value)}})},p=e=>{let{articleCount:t,showTags:n,tagCounts:a}=e,i=(0,u.QT)(),o=(0,l.useRouter)(),h=i.translateToString("search.inputPlaceholder",[t]);return(0,r.jsxs)("div",{className:s()("form-control my-2",{[m().search_bar]:n}),children:[(0,r.jsxs)("form",{className:"form-control flex-row",action:"/articles/search",method:"GET",onSubmit:e=>{e.preventDefault();let t=e.currentTarget;o.push("/articles/search?query="+encodeURIComponent(t.query.value))},children:[(0,r.jsx)(c.Suspense,{fallback:(0,r.jsx)(v,{placeholder:h}),children:(0,r.jsx)(b,{placeholder:h,name:"query"})}),(0,r.jsx)("button",{type:"submit",className:"btn btn-square ",children:(0,r.jsx)(d.U41,{})})]}),n?(0,r.jsx)("div",{className:s()("hidden p-4 border border-neutral",m().search_bar_tags),children:(0,r.jsx)(g,{tagCounts:a})}):void 0]})},N=e=>{let{articleCount:t,tagCounts:n,showTags:a}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(d.U41,{}),(0,r.jsx)(u.Vd,{id:"search.cardTitle"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(p,{articleCount:t,showTags:a,tagCounts:n})})]})})}},188:function(e,t,n){"use strict";n.d(t,{ArticleFrontmatter:function(){return m}});var r=n(2984),a=n(9148),s=n.n(a),i=n(8125),l=n(9507),c=n(6268),d=n(5301),o=n(6405),u=n(5709),h=n(7826);let m=e=>{let{articleId:t,info:n,className:a,langVersions:m}=e,x=(0,u.QT)();return(0,r.jsxs)("div",{className:s()("flex flex-wrap gap-3 my-2 text-sm",a),children:[n.tags?(0,r.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,r.jsx)(c.fxx,{}),n.tags.map(e=>(0,r.jsx)(i.default,{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,o.M)(x.currentLanguage.id,e)},e))]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",title:x.translateToString("articleFrontmatter.date"),children:[(0,r.jsx)(c.XdU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,h.o)((0,h.E)(n.date))})]}),n.last_updated?(0,r.jsxs)("div",{className:"flex items-center",title:x.translateToString("articleFrontmatter.lastUpdated"),children:[(0,r.jsx)(c.OS,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,h.o)((0,h.E)(n.last_updated))})]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(c.baU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(u.Vd,{id:"articleFrontmatter.wordCount",args:[n.wordCount]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(c.qyc,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(u.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(n.readingTime)]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(c.ssk,{}),(0,r.jsx)("span",{className:"mx-0.5 space-x-1",children:m.map(e=>{var a,s;return(0,r.jsx)(i.default,{className:"link link-hover",href:(0,l.join)((0,d.k)({id:t,absolute_path:n.absolute_path}),e),children:null!==(s=null===(a=Object.values(u.Mj).find(t=>t.simplified===e))||void 0===a?void 0:a.name)&&void 0!==s?s:e},e)})})]})]})}},3536:function(e,t,n){"use strict";n.d(t,{ArticleImage:function(){return l}});var r=n(2984),a=n(8512),s=n(3584);let i=e=>{let{src:t,width:n}=e;return"".concat(t,"?width=").concat(n)},l=e=>{var t;let{src:n,imageSize:l,imageProps:c}=e;return(0,r.jsx)(s.ck,{alt:null!==(t=c.alt)&&void 0!==t?t:"",original:n,width:l.width,height:l.height,children:e=>{var t;let{ref:s,open:d}=e;return(0,r.jsx)(a.default,{ref:s,loader:i,onClick:d,alt:null!==(t=c.alt)&&void 0!==t?t:"",src:n,width:l.width,height:l.height,className:"cursor-zoom-in mx-auto"})}})}},9147:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var r=n(2984),a=n(8125),s=n(188),i=n(5709);let l=e=>{var t;let{article:n}=e,l=(0,i.QT)(),c=null!==(t=n.langVersions.find(e=>e.lang===l.currentLanguage.id))&&void 0!==t?t:n.langVersions[0];return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{className:"text-3xl my-2 link link-hover block break-words",href:"/articles/".concat(n.id),children:c.title}),(0,r.jsx)(s.ArticleFrontmatter,{articleId:n.id,info:c,langVersions:n.langVersions.map(e=>e.lang)}),(0,r.jsx)("div",{className:"break-words",children:c.excerpt})]})}},1547:function(e,t,n){"use strict";n.d(t,{ArticleToc:function(){return c}});var r=n(2984),a=n(4986),s=n(2820),i=n(5709);let l=e=>{let{entry:{depth:t,value:n,children:a,id:s}}=e;return(0,r.jsxs)("li",{className:"w-full text-sm",children:[(0,r.jsx)("a",{className:"transition hover:bg-base-300 rounded w-full flex p-1","data-tocid":s,href:"#"+s,children:n}),t<=3&&a&&a.length>0?(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:a.map(e=>(0,r.jsx)(l,{entry:e},e.id))}):void 0]})},c=e=>{let{toc:t,hasSummary:n}=e;return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("[data-tocid]"));if(0===e.length)return;let t=0,n=n=>{t!==n&&(e[t].classList.remove("active"),t=n,e[n].classList.add("active"))},r=()=>{for(let r=0;r<e.length-1;r++){var t;if((t=document.getElementById(e[r+1].getAttribute("data-tocid")))&&t.getBoundingClientRect().top>=2){n(r);return}}n(e.length-1)};return e[0].classList.add("active"),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),n&&(t=[{depth:0,value:(0,r.jsx)("span",{className:"font-bold",children:(0,r.jsx)(i.Vd,{id:"articlePage.toc.summary"})}),id:"summary"},...t]),(0,r.jsxs)("div",{className:"px-1 sticky top-24 max-h-[60vh] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex space-x-1 items-center py-2",children:[(0,r.jsx)(s.nEk,{}),(0,r.jsx)("span",{children:(0,r.jsx)(i.Vd,{id:"articlePage.toc.title"})})]}),(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:t.map(e=>(0,r.jsx)(l,{entry:e},e.id))})]})}},4111:function(e,t,n){"use strict";n.d(t,{CommentPanelWithCurrentLanguage:function(){return o}});var r=n(2984);n(9259);var a=n(4374),s=n.n(a),i=n(4986),l=n(6268),c=n(5709);let d=e=>{let[t,n]=i.useState(!0),a=i.useRef(!0);return(0,i.useEffect)(()=>{if(a.current){a.current=!1;return}n(!1)},[e.language]),(0,i.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(l.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(s(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},o=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(d,{...e,language:n.gitalkLangId})}},1273:function(e,t,n){"use strict";n.d(t,{Gallery:function(){return r.ri}});var r=n(3584)},7013:function(e,t,n){"use strict";n.d(t,{LocalizedArticleLink:function(){return i}});var r=n(2984),a=n(8125),s=n(5709);let i=e=>{let{basePath:t,className:n,children:i}=e,l=(0,s.QT)(),c=(0,s.G3)(l.currentLanguage.id);return(0,r.jsx)(a.default,{href:t+"/"+c.simplified,className:n,children:i})}},7466:function(e,t,n){"use strict";n.d(t,{RelatedArticles:function(){return c}});var r=n(2984),a=n(6268),s=n(7013),i=n(5301),l=n(5709);let c=e=>{let{relatedArticles:t}=e,n=(0,l.QT)();if(0!==t.length)return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(a.Z1Y,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(l.Vd,{id:"articlePage.relatedArticles.text"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let a=null!==(t=e.langVersions.find(e=>e.lang===(0,l.G3)(n.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,r.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"text-sm",children:a.time}),(0,r.jsx)(s.LocalizedArticleLink,{basePath:(0,i.k)(e),children:(0,r.jsx)("h2",{className:"card-title",children:a.title})}),(0,r.jsx)("p",{children:a.excerpt})]})},e.id)})})]})}},5301:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});let r=e=>{var t;return null!==(t=e.absolute_path)&&void 0!==t?t:"/articles/".concat(e.id)}},6405:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r=n(5709),a=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function s(e,t){var n;let s=a.find(e=>e.tag===t);return null!==(n=null==s?void 0:s[(0,r.G3)(e).simplified])&&void 0!==n?n:t}},6052:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return i},Provider:function(){return l},prefix:function(){return d},useI18n:function(){return c}});var r=n(4415),a=n(9266);let s=(0,r.o)(a.yX),i=s.Localized,l=s.Provider,c=s.useI18n,d=s.prefix},5709:function(e,t,n){"use strict";n.d(t,{G3:function(){return a.G3},Mj:function(){return a.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return a.al},zt:function(){return r.Provider}});var r=n(6052),a=n(9266)},9266:function(e,t,n){"use strict";n.d(t,{G3:function(){return s},Mj:function(){return a},al:function(){return i},yX:function(){return r}});let r={"zh-CN":()=>n.e(818).then(n.t.bind(n,4818,19)).then(e=>e.default),"en-US":()=>n.e(985).then(n.t.bind(n,8985,19)).then(e=>e.default)},a={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},s=e=>a[e],i="zh-CN";Object.keys(a)},7826:function(e,t,n){"use strict";n.d(t,{E:function(){return s},o:function(){return a}});var r=n(4514);function a(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function s(e){return r.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},2705:function(){},6132:function(e){e.exports={search_bar:"search_search_bar__maOH2",search_bar_tags:"search_search_bar_tags__SGuJt"}}},function(e){e.O(0,[133,156,587,431,73,392,843,775,645,563,744],function(){return e(e.s=8853)}),_N_E=e.O()}]);