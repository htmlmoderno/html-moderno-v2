(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{186:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}));var s=n(3);function a(t,e,n,s){return new(n||(n=Promise))((function(a,r){function i(t){try{l(s.next(t))}catch(t){r(t)}}function o(t){try{l(s.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,o)}l((s=s.apply(t,e||[])).next())}))}function r(t,e){var n,s,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(a=2&r[0]?s.return:r[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,r[1])).done)return a;switch(s=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],s=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}function i(){var t=Object(s.ref)("");function e(){return a(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return e=t,[4,navigator.clipboard.readText()];case 1:return e.value=n.sent(),[2]}}))}))}return Object(s.onMounted)((function(){window.addEventListener("copy",e)})),Object(s.onUnmounted)((function(){window.removeEventListener("copy",e)})),{text:t,write:function(e){return t.value=e,navigator.clipboard.writeText(e)}}}function o(t,e){return 0===t?e:function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var r=function(){n=void 0,e.apply(void 0,s)};clearTimeout(n),n=setTimeout(r,t)};var n}function l(t){void 0===t&&(t={throttleMs:100});var e=Object(s.ref)(0),n=Object(s.ref)(0);function a(){e.value=window.innerWidth,n.value=window.innerHeight}var r=o(t.throttleMs,a);return Object(s.onBeforeMount)((function(){a()})),Object(s.onMounted)((function(){window.addEventListener("resize",r,{passive:!0})})),Object(s.onUnmounted)((function(){window.removeEventListener("resize",r)})),{height:n,width:e}}},199:function(t,e,n){},220:function(t,e,n){"use strict";var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("unable to locate global object")}();t.exports=e=s.fetch,e.default=s.fetch.bind(s),e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response},221:function(t,e,n){"use strict";var s=n(199);n.n(s).a},253:function(t,e,n){"use strict";n.r(e);var s=n(3),a=n(186),r=n(220),i=n.n(r),o={name:"WebMentions",setup(t,{root:e}){const n=Object(s.ref)([]),r=Object(s.ref)(16),o=e.$themeConfig.webmentions.endpoint.replace("#URLPOST#","https://htmlmoderno.com.br"+e.$route.fullPath),l=Object(s.computed)(()=>n.value.length?n.value.filter(t=>["mention-of","in-reply-to"].includes(t["wm-property"])):[]),c=Object(s.computed)(()=>n.value.length?n.value.filter(t=>"like-of"===t["wm-property"]):[]),u=Object(s.computed)(()=>n.value.length?n.value.filter(t=>"repost-of"===t["wm-property"]):[]),{width:m}=Object(a.b)({throttleMs:100});return Object(s.watch)(m,t=>function(t){const e={480:7,1024:10,1400:14};for(const n in e){if(t<Number(n)){r.value=e[n];break}r.value=16}}(t)),i()(o).then(t=>t.json()).then(t=>{n.value=t.children}),{likes:c,reposts:u,mentions:l,webmentions:n,avatarLimits:r}}},l=(n(221),n(4)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"show",rawName:"v-show",value:t.webmentions.length,expression:"webmentions.length"}],staticClass:"webmentions"},[n("h2",{staticClass:"text-2xl font-bold"},[t._v("\n    ("+t._s(t.webmentions.length)+") Webmentions"),n("span",{staticClass:"text-accent"},[t._v(".")])]),t._v(" "),n("div",{staticClass:"webmentions-interact my-12"},[t.likes.length?n("div",{staticClass:"flex flex-wrap items-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.likes.length<t.avatarLimits,expression:"likes.length < avatarLimits"}],staticClass:"w-full font-bold mb-4 flex items-center"},[n("vp-icon",{staticClass:"mr-1 text-accent",attrs:{name:"like"}}),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("LIKES")])],1),t._v(" "),n("ul",{staticClass:"flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list"},t._l(t.likes.slice(0,t.avatarLimits),(function(e,s){return n("li",{key:"like"+s,style:"left: "+35*s+"px"},[n("a",{attrs:{href:e.author.url,title:e.author.name,"aria-label":"Ir para o site do "+e.author.name,rel:"nofollow"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.author.name))]),t._v(" "),n("img",{staticClass:"rounded-full",attrs:{src:e.author.photo,alt:"Avatar de "+e.author.name}})])])})),0),t._v(" "),n("div",{staticClass:"w-full sm:w-2/6 lg:w-3/12 mt-3 sm:mt-0 sm:text-right"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.likes.length>t.avatarLimits,expression:"likes.length > avatarLimits"}],staticClass:"text-sm"},[t._v("\n          +"+t._s(t.likes.length-t.avatarLimits)+" Gostaram disso\n        ")])])]):t._e(),t._v(" "),t.reposts.length?n("div",{staticClass:"flex flex-wrap items-center mt-10"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.reposts.length<t.avatarLimits,expression:"reposts.length < avatarLimits"}],staticClass:"w-full font-bold mb-4 flex items-center"},[n("vp-icon",{staticClass:"mr-1 text-accent",attrs:{name:"share"}}),t._v(" "),n("span",{staticClass:"text-xs"},[t._v("COMPARTILHAMENTOS")])],1),t._v(" "),n("ul",{staticClass:"flex w-full sm:w-4/6 lg:w-9/12 webmentions-interact__list"},t._l(t.reposts,(function(e,s){return n("li",{key:"repost"+s,style:"left: "+35*s+"px"},[n("a",{attrs:{href:e.author.url,title:e.author.name,"aria-label":"Ir para o site do "+e.author.name,rel:"nofollow"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.author.name))]),t._v(" "),n("img",{staticClass:"rounded-full",attrs:{src:e.author.photo,alt:"Avatar de "+e.author.name}})])])})),0),t._v(" "),n("div",{staticClass:"w-full sm:w-2/6 lg:w-3/12 mt-3 sm:mt-0 sm:text-right"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.reposts.length>t.avatarLimits,expression:"reposts.length > avatarLimits"}],staticClass:"text-sm"},[t._v("\n          +"+t._s(t.reposts.length-t.avatarLimits)+" Compartilharam\n        ")])])]):t._e()]),t._v(" "),n("div",{staticClass:"webmentions-comments mt-24"},[t._m(0),t._v(" "),t.mentions.length?n("ul",{staticClass:"webmentions-comments__list"},t._l(t.mentions,(function(e,s){return n("li",{key:"mention"+s,staticClass:"mb-16"},[n("article",{staticClass:"flex flex-wrap",attrs:{itemprop:"comment",itemscope:"itemscope",itemtype:"https://schema.org/Comment",itemref:"author-comment-image"}},[n("div",{staticClass:"w-full flex items-center",attrs:{itemprop:"author",itemscope:"itemscope",itemtype:"https://schema.org/Person"}},[n("a",{attrs:{href:e.author.url,title:e.author.name,"aria-label":"Ir para o site do "+e.author.name,rel:"nofollow",itemprop:"url"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(e.author.name))]),t._v(" "),n("img",{staticClass:"rounded-full",attrs:{id:"author-comment-image",itemprop:"image",src:e.author.photo,alt:"Avatar de "+e.author.name}})]),t._v(" "),n("p",{staticClass:"font-bold ml-4",attrs:{itemprop:"name"}},[t._v("\n              "+t._s(e.author.name)+"\n            ")])]),t._v(" "),n("div",{staticClass:"w-full mt-2"},[e.content?n("p",{staticClass:"text-sm",attrs:{itemprop:"text"},domProps:{innerHTML:t._s(e.content.html||e.content.text)}}):t._e(),t._v(" "),n("time",{staticClass:"text-gray-600 text-xs",attrs:{itemprop:"datePublished",datetime:e.published}},[t._v("\n              "+t._s(new Intl.DateTimeFormat("default",{day:"numeric",month:"short",year:"numeric"}).format(new Date(e.published)))+"\n            ")])])])])})),0):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"text-xl mb-12"},[this._v("\n      Comentários na web"),e("span",{staticClass:"text-accent"},[this._v(".")])])}],!1,null,null,null);e.default=c.exports}}]);