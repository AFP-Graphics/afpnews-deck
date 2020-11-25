(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"028c":function(e,a,t){},"71e5":function(e,a,t){"use strict";t("7872")},7872:function(e,a,t){},a55b:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("modal",{staticClass:"on-left header-out",scopedSlots:e._u([{key:"header",fn:function(){return[n("img",{attrs:{src:t("5365")}})]},proxy:!0},{key:"body",fn:function(){return[n("form",{class:{danger:e.authError},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.login(a)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],staticClass:"inpt inpt-large inpt-bg",attrs:{id:"username",placeholder:e.$t("auth.username"),"aria-label":e.$t("auth.username"),type:"text",name:"username",autocomplete:"username",required:""},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],staticClass:"inpt inpt-large inpt-bg",attrs:{id:"password",placeholder:e.$t("auth.password"),"aria-label":e.$t("auth.password"),type:"password",name:"password",autocomplete:"password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"inpt inpt-large inpt-bg select",attrs:{required:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.lang=a.target.multiple?t:t[0]}}},[n("option",{attrs:{value:"none",selected:"",disabled:""}},[e._v("Langue des articles")]),e._l(e.languages,(function(a){var t=a.label,r=a.value,s=a.disabled;return n("option",{key:r.join("|"),attrs:{disabled:s},domProps:{value:r}},[e._v(" "+e._s(t)+" ")])}))],2),n("button",{staticClass:"btn btn-large",attrs:{"aria-label":"Submit",type:"submit"}},[e._v(" "+e._s(e.$t("submit"))+" ")])])]},proxy:!0}])})},r=[],s=(t("caad"),t("d3b7"),t("25f0"),t("2532"),t("b85c")),o=(t("96cf"),t("1da1")),i=t("5530"),l=t("2b0e"),u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("transition",{attrs:{name:"modal"}},[t("div",{staticClass:"modal-mask"},[t("div",{staticClass:"modal-wrapper"},[t("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.close,expression:"close"}],staticClass:"modal-container"},[t("div",{staticClass:"actions"},[e._t("actions")],2),t("div",{staticClass:"modal-header"},[e._t("header")],2),t("div",{staticClass:"modal-body"},[e._t("body")],2),t("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])])])},c=[],d=t("c7db"),m=l["default"].extend({name:"Modal",mixins:[d["mixin"]],methods:{close:function(){this.$emit("close")}}}),p=m,b=(t("71e5"),t("2877")),g=Object(b["a"])(p,u,c,!1,null,"5ba14b56",null),f=g.exports,v=t("2f62"),h=t("049b"),w=t("ec26"),$=t("5593"),y=l["default"].extend({name:"Login",metaInfo:{title:"Login"},components:{Modal:f},data:function(){return{username:"",password:"",lang:"none",authError:!1}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(v["f"])(["credentials"])),Object(v["d"])(["isAuthenticated"])),{},{languages:function(){return[{label:this.$t("languages.en"),value:["en"],disabled:!1},{label:this.$t("languages.fr"),value:["fr"],disabled:!1},{label:this.$t("languages.de"),value:["de"],disabled:!1},{label:this.$t("languages.es"),value:["es"],disabled:!1},{label:this.$t("languages.pt"),value:["pt"],disabled:!1},{label:this.$t("languages.ar"),value:["ar"],disabled:!1},{label:this.$t("languages.zh-tw"),value:["zh-tw"],disabled:!1},{label:this.$t("languages.zh-cn"),value:["zh-cn"],disabled:!1}]}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(v["c"])(["authenticate"])),Object(v["e"])(["resetAllColumns","addColumn"])),{},{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,n,r,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.username.includes("@afp.com")){a.next=4;break}return e.$toasted.show(e.$t("auth.warning-email").toString(),{position:"bottom-center",duration:1500,type:"error"}),e.authError=!0,a.abrupt("return",!1);case 4:return a.prev=4,a.next=7,e.authenticate({username:e.username,password:e.password});case 7:if(e.$toasted.show(e.$t("auth.success.title").toString(),{position:"bottom-center",duration:1500,type:"success"}),e.authError=!1,e.$ga.enable(),"none"!==e.lang){t=$[e.lang],n=Object(s["a"])(t);try{for(n.s();!(r=n.n()).done;)o=r.value,o.default&&(i={id:Object(w["a"])(),params:Object.assign({},h["a"].defaultSearchParams,{products:["multimedia"],topics:o.value,langs:e.lang,size:4,sources:["afp","AFPTV","AFP Vidéographie","AFP Videographics","AFP Vidéographic","AFPTV / AFP Videografik"]}),documentsIds:[]},e.addColumn(i))}catch(l){n.e(l)}finally{n.f()}}e.$router.push({name:"deck"}),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](4),e.authError=!0;case 17:case"end":return a.stop()}}),a,null,[[4,14]])})))()}}),mounted:function(){var e=Math.floor(5*Math.random())+1,a="background-"+e,t=document.querySelector(".modal-mask");t.style.backgroundImage="url('img/background/"+a+".jpg')"}}),j=y,k=(t("fe11"),Object(b["a"])(j,n,r,!1,null,"4bb8b041",null));a["default"]=k.exports},fe11:function(e,a,t){"use strict";t("028c")}}]);
//# sourceMappingURL=login-legacy.65aff72e.js.map