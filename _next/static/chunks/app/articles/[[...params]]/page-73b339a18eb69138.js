(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{6029:function(e,t,n){Promise.resolve().then(n.t.bind(n,5464,23)),Promise.resolve().then(n.bind(n,7541)),Promise.resolve().then(n.bind(n,218)),Promise.resolve().then(n.bind(n,2853)),Promise.resolve().then(n.bind(n,9454)),Promise.resolve().then(n.bind(n,7141)),Promise.resolve().then(n.bind(n,9875)),Promise.resolve().then(n.bind(n,4631)),Promise.resolve().then(n.bind(n,5917)),Promise.resolve().then(n.t.bind(n,6847,23))},7541:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleList:function(){return o}});var r=n(8038),s=n(5374),a=n.n(s),i=n(2846),l=n.n(i),c=n(218),d=n(5204);let o=e=>{let{articles:t,pageNum:n,totalPages:s,tagCounts:i,articleCount:o}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"lg:hidden max-w-full my-4",children:(0,r.jsx)(c.SearchBar,{showTags:!0,tagCounts:i,articleCount:o})}),(0,r.jsx)("div",{className:"space-y-8",children:t.map(e=>(0,r.jsx)(d.i,{article:e},e.id))}),(0,r.jsx)("div",{className:"flex justify-center w-full my-4",children:(0,r.jsx)("div",{className:"join flex-wrap",children:Array.from({length:s},(e,t)=>t+1).map(e=>(0,r.jsx)(l(),{href:"/articles/".concat(e),children:(0,r.jsx)("button",{className:a()("join-item","btn",{"btn-active":e===n}),children:e})},e))})})]})}},218:function(e,t,n){"use strict";n.r(t),n.d(t,{SearchBar:function(){return N},SearchCard:function(){return y},TagsCard:function(){return v},WebsiteCard:function(){return g}});var r=n(8038),s=n(5374),a=n.n(s),i=n(2846),l=n.n(i),c=n(5332),d=n(719),o=n(6808),u=n(5842),h=n(1539),x=n(358),m=n.n(x);let f=e=>{let{href:t,children:n,target:s}=e;return(0,r.jsx)(l(),{className:"link link-hover flex items-center my-1 space-x-1",href:t,target:s,children:n})},g=()=>(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.ssk,{})," ddadaal.me | ",(0,r.jsx)(h.Vd,{id:"blogIntro.subtitle"})]}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.description2"})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(f,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,r.jsx)(o.tvD,{}),(0,r.jsx)("span",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.sourceCode"})})]}),(0,r.jsxs)(f,{href:"/rss.xml",target:"_blank",children:[(0,r.jsx)(o.FZ6,{})," ",(0,r.jsx)("span",{children:"RSS"})]}),(0,r.jsxs)(f,{href:"/feedback",children:[(0,r.jsx)(o.ajU,{}),(0,r.jsx)("span",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.feedback"})})]})]})]})}),j=e=>{let{tagCounts:t}=e,n=(0,h.QT)();return(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{let{tag:t,count:s}=e;return(0,r.jsxs)(l(),{href:{pathname:"/articles/search",query:{query:t}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,u.M)(n.currentLanguage.id,t),(0,r.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:s})]},t)})})},v=e=>{let{tagCounts:t}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.YxP,{}),(0,r.jsx)(h.Vd,{id:"tagsCard.title"})]}),(0,r.jsx)(j,{tagCounts:t})]})})},b=e=>(0,r.jsx)("input",{type:"text",className:"input input-bordered w-full",name:"query",autoComplete:"off",...e}),p=e=>{var t;let{placeholder:n}=e,s=null!==(t=(0,c.useSearchParams)().get("query"))&&void 0!==t?t:void 0,[a,i]=(0,d.useState)(s);return(0,d.useEffect)(()=>{i(s)},[s]),(0,r.jsx)(b,{placeholder:n,value:a,onChange:e=>{i(e.target.value)}})},N=e=>{let{articleCount:t,showTags:n,tagCounts:s}=e,i=(0,h.QT)(),l=(0,c.useRouter)(),u=i.translateToString("search.inputPlaceholder",[t]);return(0,r.jsxs)("div",{className:a()("form-control my-2",{[m().search_bar]:n}),children:[(0,r.jsxs)("form",{className:"form-control flex-row",action:"/articles/search",method:"GET",onSubmit:e=>{e.preventDefault(),l.push("/articles/search?query="+encodeURIComponent(e.currentTarget.query.value))},children:[(0,r.jsx)(d.Suspense,{fallback:(0,r.jsx)(b,{placeholder:u}),children:(0,r.jsx)(p,{placeholder:u})}),(0,r.jsx)("button",{type:"submit",className:"btn btn-square ",children:(0,r.jsx)(o.U41,{})})]}),n?(0,r.jsx)("div",{className:a()("hidden p-4 border border-neutral",m().search_bar_tags),children:(0,r.jsx)(j,{tagCounts:s})}):void 0]})},y=e=>{let{articleCount:t,tagCounts:n,showTags:s}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.U41,{}),(0,r.jsx)(h.Vd,{id:"search.cardTitle"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(N,{articleCount:t,showTags:s,tagCounts:n})})]})})}},2853:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleFrontmatter:function(){return m}});var r=n(8038),s=n(5374),a=n.n(s),i=n(2846),l=n.n(i),c=n(6100),d=n(6808),o=n(1671),u=n(5842),h=n(1539),x=n(6981);let m=e=>{let{articleId:t,info:n,className:s,langVersions:i}=e,m=(0,h.QT)();return(0,r.jsxs)("div",{className:a()("flex flex-wrap gap-3 my-2 text-sm",s),children:[n.tags?(0,r.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,r.jsx)(d.fxx,{}),n.tags.map(e=>(0,r.jsx)(l(),{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,u.M)(m.currentLanguage.id,e)},e))]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",title:m.translateToString("articleFrontmatter.date"),children:[(0,r.jsx)(d.XdU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(n.date))})]}),n.last_updated?(0,r.jsxs)("div",{className:"flex items-center",title:m.translateToString("articleFrontmatter.lastUpdated"),children:[(0,r.jsx)(d.OS,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(n.last_updated))})]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.baU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(h.Vd,{id:"articleFrontmatter.wordCount",args:[n.wordCount]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.qyc,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(h.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(n.readingTime)]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.ssk,{}),(0,r.jsx)("span",{className:"mx-0.5 space-x-1",children:i.map(e=>{var s,a;return(0,r.jsx)(l(),{className:"link link-hover",href:(0,c.join)((0,o.k)({id:t,absolute_path:n.absolute_path}),e),children:null!==(a=null===(s=Object.values(h.Mj).find(t=>t.simplified===e))||void 0===s?void 0:s.name)&&void 0!==a?a:e},e)})})]})]})}},9454:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleImage:function(){return c}});var r=n(8038),s=n(2103),a=n.n(s),i=n(8055);let l=e=>{let{src:t,width:n}=e;return"".concat(t,"?width=").concat(n)},c=e=>{var t;let{src:n,imageSize:s,imageProps:c}=e;return(0,r.jsx)(i.ck,{alt:null!==(t=c.alt)&&void 0!==t?t:"",original:n,width:s.width,height:s.height,children:e=>{var t;let{ref:i,open:d}=e;return(0,r.jsx)(a(),{ref:i,loader:l,onClick:d,alt:null!==(t=c.alt)&&void 0!==t?t:"",src:n,width:s.width,height:s.height,className:"cursor-zoom-in mx-auto"})}})}},5204:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(8038),s=n(2846),a=n.n(s),i=n(2853),l=n(1539);let c=e=>{var t;let{article:n}=e,s=(0,l.QT)(),c=null!==(t=n.langVersions.find(e=>e.lang===s.currentLanguage.id))&&void 0!==t?t:n.langVersions[0];return(0,r.jsxs)("div",{children:[(0,r.jsx)(a(),{className:"text-3xl my-2 link link-hover block break-words",href:"/articles/".concat(n.id),children:c.title}),(0,r.jsx)(i.ArticleFrontmatter,{articleId:n.id,info:c,langVersions:n.langVersions.map(e=>e.lang)}),(0,r.jsx)("div",{className:"break-words",children:c.excerpt})]})}},7141:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleToc:function(){return c}});var r=n(8038),s=n(719),a=n(4793),i=n(1539);let l=e=>{let{entry:{depth:t,value:n,children:s,id:a}}=e;return(0,r.jsxs)("li",{className:"w-full text-sm",children:[(0,r.jsx)("a",{className:"transition hover:bg-base-300 rounded w-full flex p-1","data-tocid":a,href:"#"+a,children:n}),t<=3&&s&&s.length>0?(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:s.map(e=>(0,r.jsx)(l,{entry:e},e.id))}):void 0]})},c=e=>{let{toc:t}=e;return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("[data-tocid]"));if(0===e.length)return;let t=0,n=n=>{t!==n&&(e[t].classList.remove("active"),t=n,e[n].classList.add("active"))},r=()=>{for(let r=0;r<e.length-1;r++){var t;if((t=document.getElementById(e[r+1].getAttribute("data-tocid")))&&t.getBoundingClientRect().top>=2){n(r);return}}n(e.length-1)};return e[0].classList.add("active"),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),(0,r.jsxs)("div",{className:"px-1 sticky top-24 max-h-[60vh] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex space-x-1 items-center py-2",children:[(0,r.jsx)(a.nEk,{}),(0,r.jsx)("span",{children:(0,r.jsx)(i.Vd,{id:"articlePage.toc"})})]}),(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:t.map(e=>(0,r.jsx)(l,{entry:e},e.id))})]})}},9875:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentPanelWithCurrentLanguage:function(){return o}});var r=n(8038);n(1786);var s=n(4861),a=n.n(s),i=n(719),l=n(6808),c=n(1539);let d=e=>{let[t,n]=i.useState(!0),s=i.useRef(!0);return(0,i.useEffect)(()=>{if(s.current){s.current=!1;return}n(!1)},[e.language]),(0,i.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(l.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(a(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},o=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(d,{...e,language:n.gitalkLangId})}},4631:function(e,t,n){"use strict";n.r(t),n.d(t,{Gallery:function(){return r.ri}});var r=n(8055)},9586:function(e,t,n){"use strict";n.r(t),n.d(t,{LocalizedArticleLink:function(){return l}});var r=n(8038),s=n(2846),a=n.n(s),i=n(1539);let l=e=>{let{basePath:t,className:n,children:s}=e,l=(0,i.QT)(),c=(0,i.G3)(l.currentLanguage.id);return(0,r.jsx)(a(),{href:t+"/"+c.simplified,className:n,children:s})}},5917:function(e,t,n){"use strict";n.r(t),n.d(t,{RelatedArticles:function(){return c}});var r=n(8038),s=n(6808),a=n(9586),i=n(1671),l=n(1539);let c=e=>{let{relatedArticles:t}=e,n=(0,l.QT)();if(0!==t.length)return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(s.Z1Y,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(l.Vd,{id:"articlePage.relatedArticles.text"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let s=null!==(t=e.langVersions.find(e=>e.lang===(0,l.G3)(n.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,r.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"text-sm",children:s.time}),(0,r.jsx)(a.LocalizedArticleLink,{basePath:(0,i.k)(e),children:(0,r.jsx)("h2",{className:"card-title",children:s.title})}),(0,r.jsx)("p",{children:s.excerpt})]})},e.id)})})]})}},1671:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});let r=e=>{var t;return null!==(t=e.absolute_path)&&void 0!==t?t:"/articles/".concat(e.id)}},5842:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(1539),s=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function a(e,t){var n;let a=s.find(e=>e.tag===t);return null!==(n=null==a?void 0:a[(0,r.G3)(e).simplified])&&void 0!==n?n:t}},4307:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return i},Provider:function(){return l},prefix:function(){return d},useI18n:function(){return c}});var r=n(202),s=n(9154);let a=(0,r.o)(s.yX),i=a.Localized,l=a.Provider,c=a.useI18n,d=a.prefix},1539:function(e,t,n){"use strict";n.d(t,{G3:function(){return s.G3},Mj:function(){return s.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return s.al},zt:function(){return r.Provider}});var r=n(4307),s=n(9154)},9154:function(e,t,n){"use strict";n.d(t,{G3:function(){return a},Mj:function(){return s},al:function(){return i},yX:function(){return r}});let r={"zh-CN":()=>n.e(818).then(n.t.bind(n,4818,19)).then(e=>e.default),"en-US":()=>n.e(985).then(n.t.bind(n,8985,19)).then(e=>e.default)},s={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>s[e],i="zh-CN";Object.keys(s)},6981:function(e,t,n){"use strict";n.d(t,{E:function(){return a},o:function(){return s}});var r=n(1087);function s(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function a(e){return r.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},6847:function(){},358:function(e){e.exports={search_bar:"search_search_bar__maOH2",search_bar_tags:"search_search_bar_tags__SGuJt"}},5332:function(e,t,n){e.exports=n(1906)}},function(e){e.O(0,[492,318,691,93,234,729,537,912,120,543,744],function(){return e(e.s=6029)}),_N_E=e.O()}]);