(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{185:function(t,e,n){},186:function(t,e,n){},210:function(t,e,n){"use strict";var a=n(185);n.n(a).a},211:function(t,e,n){"use strict";var a=n(186);n.n(a).a},230:function(t,e,n){"use strict";n.r(e);var a=n(7),o=n(1);const s={message:"New content is available.",buttonText:"Refresh"};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:!1,updateEvent:null}),computed:{popupConfig(){return Object(o.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||s.message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||s.buttonText}},created(){a.a.$on("sw-updated",this.onSWUpdated)},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(210),n(4)),i={components:{SWUpdatePopup:Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null).exports}},r=(n(211),Object(p.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,o=e.reload,s=e.message,u=e.buttonText;return[a?n("div",{staticClass:"my-sw-update-popup"},[t._v("\n      "+t._s(s)),n("br"),t._v(" "),n("button",{attrs:{type:"button"},on:{click:o}},[t._v("\n        "+t._s(u)+"\n      ")])]):t._e()]}}])})}),[],!1,null,null,null));e.default=r.exports}}]);