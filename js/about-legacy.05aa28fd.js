(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"08cc":function(t,o,a){},"0a60":function(t,o,a){"use strict";var e=a("b6d1"),s=a.n(e);s.a},"27b8":function(t,o,a){"use strict";var e=a("08cc"),s=a.n(e);s.a},"714b":function(t,o,a){"use strict";var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.close,expression:"close"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},s=[],n=a("c7db"),i={name:"Modal",mixins:[n["mixin"]],methods:{close:function(){this.$emit("close")}}},c=i,l=(a("27b8"),a("2877")),r=Object(l["a"])(c,e,s,!1,null,"3c62d268",null);r.options.__file="Modal.vue";o["a"]=r.exports},9224:function(t){t.exports={a:"0.6.1-alpha"}},b6d1:function(t,o,a){},f820:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("modal",{on:{close:function(o){t.$router.push({name:"deck"})}}},[a("template",{slot:"header"},[a("h3",[t._v(t._s(t.$t("about.title")))]),a("router-link",{staticClass:"close",attrs:{to:{name:"deck"}}},[a("i",{staticClass:"UI-icon UI-close"})])],1),a("article",{attrs:{slot:"body"},slot:"body"},[t._l(t.$t("about.description"),function(o,e){return a("p",{key:"p-"+e},[t._v("\n      "+t._s(o)+"\n    ")])}),a("a",{attrs:{href:"#"},on:{click:function(o){o.preventDefault(),t.$router.push({name:"tour"})}}},[t._v("\n      "+t._s(t.$t("tour.goto"))+"\n    ")])],2),a("p",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n    "+t._s(t.$t("about.version"))+" "+t._s(t.version)+"\n  ")])],2)},s=[],n=a("714b"),i=a("9224"),c={name:"About",metaInfo:{title:"About"},components:{Modal:n["a"]},data:function(){return{version:i["a"]}}},l=c,r=(a("0a60"),a("2877")),u=Object(r["a"])(l,e,s,!1,null,"439073ba",null);u.options.__file="About.vue";o["default"]=u.exports}}]);
//# sourceMappingURL=about-legacy.05aa28fd.js.map