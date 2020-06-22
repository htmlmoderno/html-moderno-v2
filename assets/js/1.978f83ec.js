(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(t,e,a){},166:function(t,e,a){},167:function(t,e,a){"use strict";function n(t){return t.filter(t=>"post"===t.id)}function s(t,e=!0){return e?t.sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date)):t.sort((t,e)=>new Date(t.frontmatter.date)-new Date(e.frontmatter.date))}function r(t){const e=t.match(/(posts\/)(.*?)(\/)/g);return Array.isArray(e)&&e.length?e[0].replace(/(posts\/|\/)/g,""):""}a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return r}))},168:function(t,e,a){"use strict";var n=a(165);a.n(n).a},169:function(t,e,a){"use strict";var n={name:"TheMain"},s=a(3),r=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"mt-12 sm:mt-32",attrs:{id:"main"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},170:function(t,e,a){"use strict";var n={name:"Presentation",props:{firstTitle:{type:String,required:!0},secondTitle:{type:String,required:!0},iconName:{type:String,default:""},moreInfo:{type:String,default:""}}},s=(a(168),a(3)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"presentation relative mt-16 sm:mt-32",attrs:{role:"complementary"}},[a("div",{staticClass:"relative z-20"},[a("h1",{staticClass:"font-bold w-full sm:w-3/4 lg:w-2/4"},[a("span",{staticClass:"uppercase block mb-2 text-accent dark:text-textDark"},[t._v("\n        "+t._s(t.firstTitle)+"\n      ")]),t._v(" "),a("span",{staticClass:"text-3xl sm:text-4xl"},[t._v("\n        "+t._s(t.secondTitle)),a("span",{staticClass:"text-accent"},[t._v(".")])])]),t._v(" "),a("span",{staticClass:"block text-xs"},[t._v(t._s(t.moreInfo))])]),t._v(" "),a("div",{staticClass:"presentation__pattern patterns absolute z-10 top-0 right-0 w-10/12"},[t.iconName?a("vp-icon",{staticClass:"presentation__icon absolute float-right hidden sm:block",attrs:{name:t.iconName}}):t._e()],1)])}),[],!1,null,null,null);e.a=r.exports},171:function(t,e,a){"use strict";var n=a(166);a.n(n).a},172:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(167);function s(t){return t.map(t=>{const e=Object(n.b)(t.path),a={id:t.key,title:t.title,excerpt:t.frontmatter.excerpt,author:t.frontmatter.author,category:"",image:{},date:new Intl.DateTimeFormat("default",{month:"short",day:"numeric"}).format(new Date(t.frontmatter.date)),to:t.path};return t.frontmatter.categories.length&&(a.category=t.frontmatter.categories[0]),t.frontmatter.cover&&(a.image={src:`${t.frontmatter.cover[0].path}${e},w_640.${t.frontmatter.cover[0].extension}`,alt:t.frontmatter.cover[0].alternativeText}),a})}},174:function(t,e,a){"use strict";var n={name:"Card",props:{post:{type:Object,required:!0}},computed:{getUrlBase:()=>"https://htmlmoderno.com.br"}},s=(a(171),a(3)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card n9m p-4"},[a("router-link",{staticClass:"w-full block rounded-lg overflow-hidden",attrs:{to:t.post.to,"aria-hidden":"true",tabindex:"-1"}},[t.post.image.src?a("img",{staticClass:"w-full",attrs:{src:t.post.image.src,alt:t.post.image.alt}}):t._e()]),t._v(" "),a("h2",{staticClass:"card-title text-lg font-bold leading-tight",class:{"mt-3":t.post.image.src}},[a("router-link",{staticClass:"hover:underline",attrs:{to:t.post.to}},[a("span",{staticClass:"sr-only"},[t._v("Acessar post: ")]),t._v("\n      "+t._s(t.post.title)+"\n    ")])],1),t._v(" "),a("div",{staticClass:"flex items-center text-xs mb-8 mt-2"},[a("span",{staticClass:"uppercase"},[t._v(" "+t._s(t.post.date)+" ")]),t._v(" "),a("span",{class:"mx-2 font-bold text-cat-"+t.post.category},[t._v("//")]),t._v(" "),a("router-link",{staticClass:"underline",attrs:{to:"/autores/"+encodeURI(t.post.author.toLowerCase())}},[t._v("\n      "+t._s(t.post.author)+"\n    ")]),t._v(" "),a("span",{class:"mx-2 font-bold text-cat-"+t.post.category},[t._v("//")]),t._v(" "),a("DisqusCount",{attrs:{url:""+t.getUrlBase+t.post.to,identifier:t.post.to},domProps:{textContent:t._s("0 comments")}})],1),t._v(" "),a("router-link",{staticClass:"card-bottom-link cursor-pointer flex items-center justify-between dark:dark-200",attrs:{to:t.post.to,"aria-hidden":"true",tabindex:"-1"}},[a("div",{class:"card-bottom-link__arrow relative border-cat-"+t.post.category+" bg-cat-"+t.post.category}),t._v(" "),a("span",{staticClass:"card-bottom-link__text text-xs text-right",attrs:{"aria-hidden":"true"}},[t._v("\n      ACESSAR POST\n    ")])])],1)}),[],!1,null,null,null);e.a=r.exports},175:function(t,e,a){},176:function(t,e,a){},205:function(t,e,a){"use strict";var n=a(175);a.n(n).a},206:function(t,e,a){"use strict";var n=a(176);a.n(n).a},229:function(t,e,a){"use strict";a.r(e);var n=a(4),s={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){a.e(5).then(a.t.bind(null,226,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(a(205),a(3)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.comp?a(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=a(174),c=a(169),l=a(170),u=a(172),p={name:"Posts",components:{Presentation:l.a,TheMain:c.a,Card:o.a,Pagination:i},setup(t,{root:e}){const a=Object(n.a)(()=>({post:{firstTitle:"HTML Moderno",secondTitle:"Todos os posts",page:e.$pagination?"Página "+(e.$pagination.paginationIndex+1):""},tag:{firstTitle:"POSTS DA TAG",secondTitle:e.$currentTag?""+e.$currentTag.key:"",page:e.$pagination?"Página "+(e.$pagination.paginationIndex+1):""}}[e.$route.meta.pid]));return{posts:Object(u.a)(e.$pagination.pages),presentation:a}}},d=(a(206),Object(r.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posts"},[a("presentation",{attrs:{"first-title":t.presentation.firstTitle,"second-title":t.presentation.secondTitle,"more-info":t.presentation.page}}),t._v(" "),a("the-main",[a("section",{staticClass:"w-full layout-section"},[a("masonry",{attrs:{cols:{default:3,1024:2,600:1},gutter:50}},t._l(t.posts,(function(t){return a("div",{key:t.key,staticClass:"mt-12"},[a("card",{attrs:{post:t}})],1)})),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$pagination.hasPrev||t.$pagination.hasNext,expression:"$pagination.hasPrev || $pagination.hasNext"}],staticClass:"flex w-full justify-center mt-24"},[a("pagination")],1)],1)])],1)}),[],!1,null,null,null));e.default=d.exports}}]);