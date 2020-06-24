(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{166:function(t,e,a){},167:function(t,e,a){},168:function(t,e,a){"use strict";function s(t){return t.filter(t=>"post"===t.id)}function r(t,e=!0){return e?t.sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date)):t.sort((t,e)=>new Date(t.frontmatter.date)-new Date(e.frontmatter.date))}function n(t){const e=t.match(/(posts\/)(.*?)(\/)/g);return Array.isArray(e)&&e.length?e[0].replace(/(posts\/|\/)/g,""):""}a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n}))},169:function(t,e,a){"use strict";var s=a(166);a.n(s).a},170:function(t,e,a){"use strict";var s={name:"TheMain"},r=a(4),n=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"mt-12 sm:mt-32",attrs:{id:"main"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},171:function(t,e,a){"use strict";var s={name:"Presentation",props:{firstTitle:{type:String,required:!0},secondTitle:{type:String,required:!0},iconName:{type:String,default:""},moreInfo:{type:String,default:""}}},r=(a(169),a(4)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"presentation relative mt-16 sm:mt-32",attrs:{role:"complementary"}},[a("div",{staticClass:"relative z-20"},[a("h1",{staticClass:"font-bold w-full sm:w-3/4 lg:w-2/4"},[a("span",{staticClass:"uppercase block mb-2 text-accent dark:text-textDark"},[t._v("\n        "+t._s(t.firstTitle)+"\n      ")]),t._v(" "),a("span",{staticClass:"text-3xl sm:text-4xl"},[t._v("\n        "+t._s(t.secondTitle)),a("span",{staticClass:"text-accent"},[t._v(".")])])]),t._v(" "),a("span",{staticClass:"block text-xs"},[t._v(t._s(t.moreInfo))])]),t._v(" "),a("div",{staticClass:"presentation__pattern patterns absolute z-10 top-0 right-0 w-10/12"},[t.iconName?a("vp-icon",{staticClass:"presentation__icon absolute float-right hidden sm:block",attrs:{name:t.iconName}}):t._e()],1)])}),[],!1,null,null,null);e.a=n.exports},172:function(t,e,a){"use strict";var s=a(167);a.n(s).a},173:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a(168);function r(t){return t.map(t=>{const e=Object(s.b)(t.path),a={id:t.key,title:t.title,excerpt:t.frontmatter.excerpt,author:t.frontmatter.author,category:"",image:{},date:new Intl.DateTimeFormat("default",{month:"short",day:"numeric"}).format(new Date(t.frontmatter.date)),to:t.path};return t.frontmatter.categories.length&&(a.category=t.frontmatter.categories[0]),t.frontmatter.cover&&(a.image={src:`${t.frontmatter.cover[0].path}${e},w_640.${t.frontmatter.cover[0].extension}`,alt:t.frontmatter.cover[0].alternativeText}),a})}},175:function(t,e,a){"use strict";var s={name:"Card",props:{post:{type:Object,required:!0}},computed:{getUrlBase:()=>"https://htmlmoderno.com.br"}},r=(a(172),a(4)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card n9m p-4"},[a("router-link",{staticClass:"w-full block rounded-lg overflow-hidden",attrs:{to:t.post.to,"aria-hidden":"true",tabindex:"-1"}},[t.post.image.src?a("img",{staticClass:"w-full",attrs:{src:t.post.image.src,alt:t.post.image.alt}}):t._e()]),t._v(" "),a("h2",{staticClass:"card-title text-lg font-bold leading-tight",class:{"mt-3":t.post.image.src}},[a("router-link",{staticClass:"hover:underline",attrs:{to:t.post.to}},[a("span",{staticClass:"sr-only"},[t._v("Acessar post: ")]),t._v("\n      "+t._s(t.post.title)+"\n    ")])],1),t._v(" "),a("div",{staticClass:"flex items-center text-xs mb-8 mt-2"},[a("span",{staticClass:"uppercase"},[t._v(" "+t._s(t.post.date)+" ")]),t._v(" "),a("span",{class:"mx-2 font-bold text-cat-"+t.post.category},[t._v("//")]),t._v(" "),a("router-link",{staticClass:"underline",attrs:{to:"/autores/"+encodeURI(t.post.author.toLowerCase())}},[t._v("\n      "+t._s(t.post.author)+"\n    ")]),t._v(" "),a("span",{class:"mx-2 font-bold text-cat-"+t.post.category},[t._v("//")]),t._v(" "),a("DisqusCount",{attrs:{url:""+t.getUrlBase+t.post.to,identifier:t.post.to},domProps:{textContent:t._s("0 comments")}})],1),t._v(" "),a("router-link",{staticClass:"card-bottom-link cursor-pointer flex items-center justify-between dark:dark-200",attrs:{to:t.post.to,"aria-hidden":"true",tabindex:"-1"}},[a("div",{class:"card-bottom-link__arrow relative border-cat-"+t.post.category+" bg-cat-"+t.post.category}),t._v(" "),a("span",{staticClass:"card-bottom-link__text text-xs text-right",attrs:{"aria-hidden":"true"}},[t._v("\n      ACESSAR POST\n    ")])])],1)}),[],!1,null,null,null);e.a=n.exports},244:function(t,e,a){"use strict";a.r(e);var s=a(3),r=a(175),n=a(170),o=a(171),i=a(168),c=a(173),l={name:"Category",components:{Card:r.a,TheMain:n.a,Presentation:o.a},setup(t,{root:e}){const a=Object(s.ref)([]),r=Object(i.a)(e.$site.pages);return Object(s.watch)(()=>e.$route.path,()=>{const t=r.filter(t=>t.frontmatter.categories.includes(e.$frontmatter.slug));a.value=Object(c.a)(Object(i.c)(t,!0))}),{posts:a}}},u=a(4),p=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("presentation",{staticClass:"py-4",attrs:{"first-title":"TODOS OS POSTS","second-title":"Categoria: "+t.$frontmatter.title,"icon-name":"cat-"+t.$frontmatter.slug}}),t._v(" "),a("the-main",[a("section",{staticClass:"w-full layout-section"},[a("masonry",{directives:[{name:"show",rawName:"v-show",value:t.posts.length,expression:"posts.length"}],attrs:{cols:{default:3,1024:2,600:1},gutter:50}},t._l(t.posts,(function(t){return a("div",{key:t.key,staticClass:"mt-12"},[a("card",{attrs:{post:t}})],1)})),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.posts.length,expression:"!posts.length"}]},[a("span",{staticClass:"font-bold text-xl"},[a("span",{attrs:{role:"img","aria-label":"emoji carinha triste"}},[t._v("😔")]),t._v("\n          Em breve teremos artigos para essa categoria.\n        ")])])],1)])],1)}),[],!1,null,null,null);e.default=p.exports}}]);