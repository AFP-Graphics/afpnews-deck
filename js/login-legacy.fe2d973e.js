(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0e51":function(e,t,a){"use strict";a("ce79")},"6b0d":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{staticClass:"on-left header-out",scopedSlots:e._u([{key:"header",fn:function(){return[n("img",{attrs:{src:a("5365")}})]},proxy:!0},{key:"body",fn:function(){return[n("form",{class:{danger:e.authError},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.login(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],staticClass:"inpt inpt-large inpt-bg",attrs:{id:"username",placeholder:e.$t("auth.username"),"aria-label":e.$t("auth.username"),type:"text",name:"username",autocomplete:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],staticClass:"inpt inpt-large inpt-bg",attrs:{id:"password",placeholder:e.$t("auth.password"),"aria-label":e.$t("auth.password"),type:"password",name:"password",autocomplete:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"inpt inpt-large inpt-bg select",attrs:{required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.lang=t.target.multiple?a:a[0]}}},[n("option",{attrs:{value:"none",selected:"",disabled:""}},[e._v("Langue des articles")]),e._l(e.languages,(function(t){var a=t.label,s=t.value,r=t.disabled;return n("option",{key:s.join("|"),attrs:{disabled:r},domProps:{value:s}},[e._v(" "+e._s(a)+" ")])}))],2),n("button",{staticClass:"btn btn-large",attrs:{"aria-label":"Submit",type:"submit"}},[e._v(" "+e._s(e.$t("submit"))+" ")])])]},proxy:!0}])})},s=[],r=(a("caad"),a("d3b7"),a("25f0"),a("2532"),a("b85c")),i=(a("96cf"),a("1da1")),o=a("5530"),l=a("2b0e"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.close,expression:"close"}],staticClass:"modal-container"},[a("div",{staticClass:"actions"},[e._t("actions")],2),a("div",{staticClass:"modal-header"},[e._t("header")],2),a("div",{staticClass:"modal-body"},[e._t("body")],2),a("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])])])},c=[],d=a("c7db"),m=l["default"].extend({name:"Modal",mixins:[d["mixin"]],methods:{close:function(){this.$emit("close")}}}),p=m,b=(a("0e51"),a("2877")),g=Object(b["a"])(p,u,c,!1,null,"00598445",null),f=g.exports,v=a("2f62"),h=a("049b"),w=a("ec26"),$=a("5593"),y=l["default"].extend({name:"Login",metaInfo:{title:"Login"},components:{Modal:f},data:function(){return{username:"",password:"",lang:"none",authError:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(v["f"])(["credentials"])),Object(v["d"])(["isAuthenticated"])),{},{languages:function(){return[{label:this.$t("languages.en"),value:["en"],disabled:!1},{label:this.$t("languages.fr"),value:["fr"],disabled:!1},{label:this.$t("languages.de"),value:["de"],disabled:!1},{label:this.$t("languages.es"),value:["es"],disabled:!1},{label:this.$t("languages.pt"),value:["pt"],disabled:!1},{label:this.$t("languages.ar"),value:["ar"],disabled:!1},{label:this.$t("languages.zh-tw"),value:["zh-tw"],disabled:!1},{label:this.$t("languages.zh-cn"),value:["zh-cn"],disabled:!1}]}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(v["c"])(["authenticate"])),Object(v["e"])(["resetAllColumns","addColumn"])),{},{login:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.username.includes("@afp.com")){t.next=4;break}return e.$toasted.show(e.$t("auth.warning-email").toString(),{position:"bottom-center",duration:1500,type:"error"}),e.authError=!0,t.abrupt("return",!1);case 4:return t.prev=4,t.next=7,e.authenticate({username:e.username,password:e.password});case 7:if(e.$toasted.show(e.$t("auth.success.title").toString(),{position:"bottom-center",duration:1500,type:"success"}),e.authError=!1,e.$ga.enable(),"none"!==e.lang){a=$[e.lang],n=Object(r["a"])(a);try{for(n.s();!(s=n.n()).done;)i=s.value,o={id:Object(w["a"])(),params:Object.assign({},h["a"].defaultSearchParams,{products:["multimedia"],topics:i.value,langs:e.lang,size:10,sources:["afp","AFPTV","AFP Vidéographie","AFP Videographics","AFP Vidéographic","AFPTV / AFP Videografik"]}),documentsIds:[]},e.addColumn(o)}catch(l){n.e(l)}finally{n.f()}}e.$router.push({name:"deck"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),e.authError=!0;case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))()}})}),j=y,x=(a("f147"),Object(b["a"])(j,n,s,!1,null,"1fd7f11c",null));t["default"]=x.exports},ce79:function(e,t,a){},f147:function(e,t,a){"use strict";a("6b0d")}}]);
//# sourceMappingURL=login-legacy.fe2d973e.js.map