(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177,394],{8950:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6688,23)),Promise.resolve().then(s.t.bind(s,5862,23)),Promise.resolve().then(s.t.bind(s,9525,23)),Promise.resolve().then(s.bind(s,9610)),Promise.resolve().then(s.bind(s,2201)),Promise.resolve().then(s.bind(s,3305)),Promise.resolve().then(s.bind(s,1571)),Promise.resolve().then(s.bind(s,1343)),Promise.resolve().then(s.bind(s,453)),Promise.resolve().then(s.bind(s,5065))},9610:(e,t,s)=>{"use strict";s.d(t,{RootLayout:()=>u});var a=s(4001),r=s(7749),n=s(75),l=s(3269),i=s(2394),d=s(3034),o=s(3387);let c=e=>{let{children:t}=e,s=(0,l.s9)(),r=(0,n.Pj)(o.ZP);return(0,a.jsx)("html",{lang:(0,l.Z0)(s.currentLanguage.id).htmlLang,"data-theme":"auto"===r.theme?void 0:r.theme,className:"scroll-smooth",children:(0,a.jsx)("body",{className:"w-full",children:t})})},u=e=>{let{children:t}=e,[s]=(0,r.useState)(()=>(0,n.y$)(o.ZP)),[u]=(0,r.useState)(()=>(0,n.y$)(d.A));return(0,a.jsx)(l.Kq,{initialLanguage:{id:l.q,definitions:i},children:(0,a.jsx)(n.tv,{stores:[s,u],children:(0,a.jsx)(c,{children:t})})})}},3305:(e,t,s)=>{"use strict";s.d(t,{ToTop:()=>l});var a=s(4001),r=s(7749),n=s(9521);let l=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=()=>{e.current&&(window.scrollY>10?e.current.classList.remove("hidden"):e.current.classList.add("hidden"))};if(e.current)return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[e.current]),(0,a.jsx)("button",{ref:e,className:"fixed animate-slide-up bottom-8 right-8 z-50 p-3 rounded-full bg-base-300 text-base-content shadow",title:"To top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,a.jsx)(n.uCC,{className:"w-6 h-6"})})}},2201:(e,t,s)=>{"use strict";s.d(t,{LocalizedArticleLink:()=>i});var a=s(4001),r=s(5751),n=s.n(r),l=s(3269);let i=e=>{let{basePath:t,className:s,children:r}=e,i=(0,l.s9)(),d=(0,l.Z0)(i.currentLanguage.id);return(0,a.jsx)(n(),{href:t+"/"+d.simplified,className:s,children:r})}},1571:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Localized:()=>l,Provider:()=>i,prefix:()=>o,useI18n:()=>d});var a=s(8088),r=s(2454);let n=(0,a.hU)(r.bx),l=n.Localized,i=n.Provider,d=n.useI18n,o=n.prefix},3269:(e,t,s)=>{"use strict";s.d(t,{Kq:()=>a.Provider,Oj:()=>a.Localized,Pl:()=>a.prefix,Z0:()=>r.Z0,eo:()=>r.eo,q:()=>r.q,s9:()=>a.useI18n});var a=s(1571),r=s(2454)},2454:(e,t,s)=>{"use strict";s.d(t,{Z0:()=>n,bx:()=>a,eo:()=>r,q:()=>l});let a={"zh-CN":()=>s.e(394).then(s.t.bind(s,2394,19)).then(e=>e.default),"en-US":()=>s.e(740).then(s.t.bind(s,6740,19)).then(e=>e.default)},r={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},n=e=>r[e],l="zh-CN";Object.keys(r)},3034:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(7749),r=s(1571),n=s(2454);let l="ddadaal.me-language",i=()=>{let e=(0,r.useI18n)();return(0,a.useEffect)(()=>{let t=localStorage.getItem(l);if(t){if(!Object.keys(n.eo).includes(t)){localStorage.removeItem(l);return}e.setLanguageById(t)}},[]),{i18n:e,setLanguageById:t=>{localStorage.setItem(l,t),e.setLanguageById(t)}}}},1343:(e,t,s)=>{"use strict";s.d(t,{Header:()=>N});var a=s(4001),r=s(4855),n=s.n(r),l=s(9235),i=s(5751),d=s.n(i),o=s(9e3),c=s(7749),u=s(9521),h=s(3269);let m={src:"/_next/static/media/logo.8f2bd5ec.svg",height:512,width:512,blurWidth:0,blurHeight:0};var b=s(75),x=s(3034);let j=e=>{let{btnClassName:t}=e,s=(0,b.Pj)(x.A),r=(0,h.Z0)(s.i18n.currentLanguage.id);return(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsxs)("label",{tabIndex:0,className:n()("btn",t),children:[(0,a.jsx)(r.icon,{}),(0,a.jsx)("span",{className:"hidden sm:block",children:r.name})]}),(0,a.jsx)("ul",{tabIndex:0,className:"dropdown-content menu p-2 shadow bg-base-200 rounded-box min-w-max text-base-content",children:Object.entries(h.eo).map(e=>{let[t,r]=e;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"justify-between",onClick:()=>{s.setLanguageById(t)},children:[(0,a.jsx)(r.icon,{}),r.name]})},t)})})]})},p=e=>(0,c.createElement)(e.href?d():"a",e,e.children),f=(e,t)=>"/"===e?"/"===t:t.startsWith(e),g=e=>{let{link:t}=e,s=(0,o.usePathname)();return(0,a.jsx)("li",{children:(0,a.jsxs)(p,{href:t.href,className:n()({active:!!t.href&&f(t.href,s)}),children:[t.icon,"label"in t?t.label:(0,a.jsx)(h.Oj,{id:t.labelId})]})})},v=e=>{let{link:t}=e,s=(0,o.usePathname)();return t.children?(0,a.jsx)("li",{children:(0,a.jsxs)("details",{children:[(0,a.jsxs)("summary",{className:n()({active:!!t.href&&f(t.href,s)}),children:[t.icon,"label"in t?t.label:(0,a.jsx)(h.Oj,{id:t.labelId})]}),(0,a.jsx)("ul",{className:"shadow bg-base-200 text-base-content min-w-max",children:t.children.map((e,t)=>(0,a.jsx)(g,{link:e},t))})]})}):(0,a.jsx)(g,{link:t})};var y=s(3387);let k=(0,h.Pl)("themes."),w=e=>{let{btnClassName:t}=e,s=(0,b.Pj)(y.ZP);return(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsxs)("label",{tabIndex:0,className:n()("btn",t),children:[(0,a.jsx)(u.vWp,{}),(0,a.jsx)("span",{className:"hidden sm:block",children:(0,a.jsx)(h.Oj,{id:k(s.theme)})})]}),(0,a.jsx)("ul",{tabIndex:0,className:"dropdown-content menu p-2 bg-base-200 text-base-content shadow rounded-box min-w-max",children:y.Zj.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"justify-between",onClick:()=>{s.setTheme(e)},children:(0,a.jsx)(h.Oj,{id:k(e)})})},e))})]})},N=e=>{let{resumeLangs:t}=e,s=(0,o.usePathname)(),r=[{icon:(0,a.jsx)(u.rQ8,{}),labelId:"headers.home",href:"/"},{icon:(0,a.jsx)(u.hko,{}),labelId:"headers.articles",href:"/articles"},{icon:(0,a.jsx)(u.Gp9,{}),labelId:"headers.resume",href:"/resume",children:t.map(e=>{let t=Object.values(h.eo).find(t=>t.simplified===e);if(!t)throw Error("Language ".concat(e," not found"));return{icon:(0,a.jsx)(t.icon,{}),label:t.name,href:"/resume/".concat(e)}})},{icon:(0,a.jsx)(u.Udh,{}),labelId:"headers.slides",href:"/slides"},{icon:(0,a.jsx)(u.ELu,{}),labelId:"headers.about.title",href:"/about",children:[{icon:(0,a.jsx)(u.hko,{}),labelId:"headers.about.odyssey",href:"/about/odyssey"},{icon:(0,a.jsx)(u.f35,{}),labelId:"headers.about.project",href:"/about/project"},{icon:(0,a.jsx)(u.NCM,{}),labelId:"headers.about.me",href:"/about/me"}]}],i="/"!==s,[b,x]=(0,c.useState)(!0),p=b&&!i?"bg-primary text-primary-content":"bg-base-200 text-base-content",f=b&&!i?"btn-primary":void 0,y=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(y.current&&!i){x(0===y.current.getBoundingClientRect().top);let e=new IntersectionObserver(e=>{let[t]=e;x(!(t.intersectionRatio<1))},{threshold:[1]});return e.observe(y.current),()=>{y.current&&e.unobserve(y.current)}}},[y.current,i]),(0,a.jsx)("div",{ref:y,className:n()("items-center sticky z-50 w-full","h-13","transition","-top-[1px]",p),children:(0,a.jsxs)("div",{className:"flex justify-between items-center max-w-7xl mx-auto px-4",children:[(0,a.jsxs)(d(),{className:"flex items-center justify-center space-x-1",href:"/",children:[(0,a.jsx)(l.default,{src:m,alt:"logo",width:42,height:42}),(0,a.jsx)("h1",{className:"text-sm font-bold",children:"ddadaal.me"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("div",{className:"hidden lg:flex",children:(0,a.jsx)("ul",{className:"menu menu-horizontal",children:r.map((e,t)=>(0,a.jsx)(v,{link:e},t))})}),(0,a.jsx)(w,{btnClassName:f}),(0,a.jsx)(j,{btnClassName:f}),(0,a.jsxs)("div",{className:"dropdown dropdown-end lg:hidden",children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-ghost",children:(0,a.jsx)(u.HFM,{})}),(0,a.jsx)("ul",{tabIndex:0,className:n()("menu menu-compact dropdown-content","min-w-max mt-3 p-2 shadow rounded-box bg-base-200 text-base-content"),children:r.map((e,t)=>e.children?(0,a.jsxs)("li",{children:[(0,a.jsxs)("a",{children:[e.icon,"label"in e?e.label:(0,a.jsx)(h.Oj,{id:e.labelId})]}),(0,a.jsx)("ul",{children:e.children.map((e,t)=>(0,a.jsx)(g,{link:e},t))})]},t):(0,a.jsx)(g,{link:e},t))})]})]})]})})}},453:(e,t,s)=>{"use strict";s.d(t,{LastUpdateTime:()=>i});var a=s(4001),r=s(9766),n=s(3269),l=s(109);let i=e=>{let{time:t}=e;return(0,a.jsxs)("p",{children:["⏲️"," ",(0,a.jsx)(n.Oj,{id:"statistics.lastUpdated"}),": \xa0",(0,l.r)(r.c9.fromISO(t))]})}},5065:(e,t,s)=>{"use strict";s.d(t,{RunningTime:()=>c});var a=s(4001),r=s(9766),n=s(7749),l=s(3269),i=s(109);let d=r.c9.utc(2018,11,17,6,51).toLocal();function o(e){return d.diff(e).negate().shiftTo("years","months","days","hours","minutes","seconds").normalize()}let c=e=>{let{serverStartTime:t}=e,[s,c]=(0,n.useState)(()=>o(r.c9.fromISO(t)));(0,n.useEffect)(()=>{let e=setInterval(()=>{c(o(r.c9.now()))},1e3);return()=>{clearInterval(e)}},[]);let u=[s.years,s.months,s.days,s.hours,s.minutes,Math.floor(s.seconds)].map((e,t)=>(0,a.jsx)("span",{className:"countdown",children:(0,a.jsx)("span",{style:{"--value":e}})},t));return(0,a.jsx)("div",{className:"tooltip","data-tip":(0,i.r)(d),children:(0,a.jsxs)("p",{children:["\uD83D\uDCC5"," ",(0,a.jsx)(l.Oj,{id:"footer.runningTime",args:u})]})})}},109:(e,t,s)=>{"use strict";s.d(t,{a:()=>n,r:()=>r});var a=s(9766);function r(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function n(e){return a.c9.fromSQL(e,{zone:"Asia/Shanghai"})}},3387:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i,Zj:()=>l});var a=s(7749);let r=JSON.parse('{"auto":{},"light":{},"dark":{},"cupcake":{},"bumblebee":{},"corporate":{},"business":{},"luxury":{},"lemonade":{},"emerald":{},"retro":{},"valentine":{},"cyberpunk":{}}'),n="ddadaal.me-theme",l=Object.keys(r),i=()=>{let[e,t]=(0,a.useState)("auto");return(0,a.useEffect)(()=>{let e=localStorage.getItem(n);l.includes(e)?t(e):t("dark")},[]),{theme:e,setTheme:(0,a.useCallback)(e=>{localStorage.setItem(n,e),t(e)},[])}}},9525:()=>{},2394:e=>{"use strict";e.exports=JSON.parse('{"pageMedatadata":{"homepage":"主页","articleList":"文章","description":"一个个人网站"},"newContentPop":{"refresh":"刷新","other":"以查看最新内容 :D"},"headers":{"home":"主页","articles":"文章","resume":"简历","slides":"幻灯片","articlePlans":"文章计划","about":{"title":"关于","odyssey":"一个个人博客的史诗","project":"关于网站","me":"关于我"}},"feedback":{"title":"给我反馈！","paragraph1":"我很想听到大家对我网站的看法！","paragraph2":"如果你有什么想说的，请在下面的评论框留言！我将非常感谢！","paragraph3":"或者通过以下方式联系我！"},"resources":{"title":"资源","index":{"documentTitle":"资源","title":"资源"},"slides":{"title":"幻灯片","description":"我做的演讲的幻灯片","autoGenerated":"以下内容根据 {} 中的内容自动生成。点击一项以进入对应GitHub目录。"},"resume":{"documentTitle":"简历","title":"简历"}},"articlePlans":{"title":"文章计划","description":"以下为目前计划编写和发布的文章。","articleTitle":"标题","tags":"标签","startTime":"列入计划时间","deadline":"预期发布时间"},"search":{"cardTitle":"搜索文章","inputPlaceholder":"在{}篇文章中搜索","notFound":"未找到","title":"{} 搜索结果","info":"结果数：{}","order":{"time":"创作时间正序","timeDesc":"创作时间逆序","similarity":"匹配程度"}},"footer":{"codeBy":"本网站由{}自豪地编写","themedWith":"描绘主题","poweredBy":"强力驱动","license":"本站文章在{}协议下授权","contacts":"联系我","madeWithLove":"用 ❤ 制作","friendLinkhire":"如果您希望您的链接加入本站友情链接，请联系我！","runningTime":"博客已经运行 {} 年 {} 月 {} 天 {} 时 {} 分 {} 秒"},"languageSelector":{"select":"选择语言","switchingTo":"正在切换至: {}"},"articleFrontmatter":{"date":"发表时间","lastUpdated":"最后更新时间","wordCount":"{} 字","timeToRead":"{} 分钟阅读","tagLinkTitle":"搜索带有{}标签的文章"},"comments":{"title":" 评论"},"articlePage":{"title":"文章","backToHome":"回到主页","selectLang":"选择一个文章语言","toc":{"title":"目录","summary":"✨AI全文摘要"},"share":{"title":"分享"},"relatedArticles":{"text":"相关文章"},"summary":{"title":"✨AI全文摘要","poweredBy":"由{}驱动"},"actions":{"like":{"like":"赞！","clicked":"谢谢！","liked":"已赞"},"copyLink":{"copyLink":"复制链接","copied":"已复制链接！"}}},"articleItem":{"availableLanguages":"可用语言："},"selfIntro":{"author":"作者","university":"南京大学软件工程2016级本科生","resume":"简历","mailToMe":"ddadaal@outlook.com","more":"更多我的信息","moreLink":"更多"},"blogIntro":{"subtitle":"一个个人网站","description2":"技术，代码，感悟和日常生活","sourceCode":"在GitHub上的博客源码","feedback":"反馈","lastUpdated":"上次更新于{}","more":"更多博客信息","moreLink":"更多"},"statistics":{"title":"统计信息","key":"统计项","value":"统计值","articleCount":"文章数：{}，总字数：{}","lastUpdated":"最后更新"},"tagsCard":{"title":"标签"},"friends":{"title":"朋友们"},"homepage":{"hello":"你好","from":"来自一个程序员 | 有梦想的咸鱼","links":{"articles":"文章 ({})","rss":"RSS","resume":"简历","slides":"幻灯片","aboutMe":"关于我","aboutProject":"关于网站","feedback":"反馈"}},"redirects":{"title":"重定向中","description":"请稍等，正在重定向到外部网址："},"themes":{"text":"主题","auto":"自动","light":"明亮","dark":"暗色","cupcake":"杯子蛋糕","bumblebee":"大黄蜂","business":"黑色商务","luxury":"金色奢华","lemonade":"夏日柠檬","corporate":"白色商务","emerald":"绿野仙踪","retro":"复古","cyberpunk":"赛博朋克","valentine":"粉色浪漫"}}')}},e=>{var t=t=>e(e.s=t);e.O(0,[360,116,861,688,989,142,767,358],()=>t(8950)),_N_E=e.O()}]);