(self.webpackChunkddadaal_me=self.webpackChunkddadaal_me||[]).push([[175],{7568:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(9712),l=r(5567),u=r(3694),o=r(5444),i=r(1553),c=r(8925),s=r(5301),m=r(4320),f=(0,a.p)("search.");t.default=function(){var e=(0,s.oR)(l.Z),t=(0,s.oR)(u.Z),r=(0,a.QT)(),d=e.query,p=d.query,g=d.page,h=void 0===g?1:g,E=h-1,C=Array.from(t.articleIdMap.values());p&&(C=C.filter((function(e){return!!e.some((function(e){return e.frontmatter.title.toUpperCase().includes(p.toUpperCase())}))||!!e.some((function(e){return null!==e.frontmatter.tags&&e.frontmatter.tags.some((function(e){return t.getAllVariationsOfTag(e).some((function(e){return e.toUpperCase().includes(p.toUpperCase())}))}))}))}))),C.sort((function(e,t){return new Date(t[0].frontmatter.date).getTime()-new Date(e[0].frontmatter.date).getTime()}));var v=C.length,y=Math.ceil(v/5);return C=C.slice(5*E,5*E+5),n.createElement(c.Z,null,n.createElement(m.d,{title:r.translate(f("title"),[p])}),n.createElement("h3",null,n.createElement(a.Vd,{id:f("title"),args:[n.createElement("strong",{key:"query"},p)]})),n.createElement("small",null,n.createElement(a.Vd,{id:f("info"),args:[v]})),n.createElement("hr",null),n.createElement(i.Z,{ids:C.map((function(e){return e[0].frontmatter.id})),pageCount:y,pageIndex:h-1,toPage:function(e){var t="/articles/search?"+("query="+encodeURIComponent(p||"")+"&page="+(e+1));return function(){return(0,o.navigate)(t)}}}))}}}]);
//# sourceMappingURL=component---src-pages-articles-search-tsx-e2236c9aedfa500615c1.js.map