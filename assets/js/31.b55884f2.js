(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{260:function(e,s,t){"use strict";t.r(s);var n=t(3),l=t(34),o={name:"VisionPreferencies",components:{CheckField:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,265))},setup(){const{toggleClassByObject:e}=Object(l.a)(),s=Object(n.ref)({"pref-high-contrast":!1,"pref-no-shadows":!1});return Object(n.watch)(s,(function(s){const t=JSON.parse(localStorage.getItem("preferences"));e(s),localStorage.setItem("preferences",JSON.stringify({...t,vision:s}))}),{deep:!0}),Object(n.onMounted)(()=>{const e=JSON.parse(localStorage.getItem("preferences"));e&&e.vision&&(s.value=e.vision)}),{vision:s}}},a=t(4),i=Object(a.a)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),t("div",{staticClass:"w-full lg:w-9/12 lg:pl-8"},[t("ul",{staticClass:"flex flex-wrap"},[t("li",{staticClass:"w-full md:w-auto"},[t("label",{staticClass:"n9m n9m--active px-6 py-4 block cursor-pointer",attrs:{for:"vision-noShadows"}},[t("div",[t("check-field",{attrs:{id:"vision-noShadows",name:"vision-noShadows",checked:e.vision["pref-no-shadows"]},model:{value:e.vision["pref-no-shadows"],callback:function(s){e.$set(e.vision,"pref-no-shadows",s)},expression:"vision['pref-no-shadows']"}},[t("span",{staticClass:"ml-2"},[e._v("Desabilitar sombras")])])],1)])])])])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"w-full lg:w-3/12 lg:p-4 lg:bg-light-200 lg:dark:bg-dark-800"},[s("h2",{staticClass:"text-2xl mb-8 lg:mb-0 font-bold"},[this._v("\n      Visão:\n    ")])])}],!1,null,null,null);s.default=i.exports}}]);