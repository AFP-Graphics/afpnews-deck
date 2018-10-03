(function(e){function t(t){for(var s,o,c=t[0],u=t[1],d=t[2],h=t[3]||[],p=0,f=[];p<c.length;p++)o=c[p],a[o]&&f.push(a[o][0]),a[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);m&&m(t);var g=document.getElementsByTagName("head")[0];h.forEach(function(e){if(void 0===a[e]){a[e]=null;var t=document.createElement("link");l.nc&&t.setAttribute("nonce",l.nc),t.rel="prefetch",t.as="script",t.href=r(e),g.appendChild(t)}});while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var s={},o={app:0},a={app:0},i=[];function r(e){return l.p+"js/"+({about:"about",login:"login",tour:"tour",viewer:"viewer"}[e]||e)+"."+{about:"4fcd2883",login:"10fd9083",tour:"d928b6d9",viewer:"2b13e4a0"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1,login:1,tour:1,viewer:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var s="css/"+({about:"about",login:"login",tour:"tour",viewer:"viewer"}[e]||e)+"."+{about:"439d7ecc",login:"8b7b03e0",tour:"c01c69b6",viewer:"3d0f03ad"}[e]+".css",o=l.p+s,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var r=a[i],c=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(c===s||c===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){r=u[i],c=r.getAttribute("data-href");if(c===s||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");a.request=s,n(a)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[e]=0}));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise(function(t,n){s=a[e]=[t,n]});t.push(s[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e),c=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+s+": "+o+")");i.type=s,i.request=o,n[1](i)}a[e]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(n,s,function(t){return e[t]}.bind(null,s));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;t([[],{},0,["viewer","about","login"]]),i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3995:function(e,t,n){"use strict";var s=n("eacc"),o=n.n(s);o.a},"39c3":function(e,t,n){var s={"./en.json":["edd4"],"./fr.json":["f693"]};function o(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(s)},o.id="39c3",e.exports=o},"52c4":function(e,t,n){"use strict";var s=n("e636"),o=n.n(s);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),o=n("2f62"),a={columns:[],credentials:{client:null,clientId:null,clientSecret:null},clients:[],documents:{},authType:"unknown",connectivity:{isConnected:!0},wantTour:!0,autoRefresh:!1,locale:"fr"},i={getDocumentById:e=>t=>{return e.documents[t]},getColumnByIndex:e=>t=>{return e.columns[t]},getDocumentsByColumnId:(e,t)=>e=>{return t.getColumnByIndex(e).documentsIds.map(e=>t.getDocumentById(e))},isAnonymous(e){return"anonymous"===e.authType},isAuthenticated(e){return"credentials"===e.authType},getPreviousDocumentIdInColById:(e,t)=>(e,n)=>{if(null===e||void 0===n)return!1;const s=t.getDocumentsByColumnId(e),o=s.findIndex(e=>e.uno===n),a=s[o+1];return a&&a.uno||!1},getNextDocumentIdInColById:(e,t)=>(e,n)=>{if(null===e||void 0===n)return!1;const s=t.getDocumentsByColumnId(e),o=s.findIndex(e=>e.uno===n),a=s[o-1];return a&&a.uno||!1}},r=n("f426");class l extends r["a"]{constructor(...e){super(...e),this.clients=["afpdeck","other"]}get client(){return this._client}set client(e){this._client=e}get authUrl(){return this.client?`https://3o3qoiah2e.execute-api.eu-central-1.amazonaws.com/${this.client}`:super.authUrl}get apiKey(){return this._apiKey}set apiKey({client:e,clientId:t,clientSecret:n}){e&&"other"!==e?(this._apiKey="unset",this.client=e):t&&n?(super.apiKey={clientId:t,clientSecret:n},delete this._client):(delete this._client,delete this._apiKey)}get authorizationBasicHeaders(){return this.client?{}:super.authorizationBasicHeaders}}var c=new l,u=n("c64e"),d=n.n(u),m={addColumn(e,t){const n={id:d()(),params:Object.assign({},c.defaultSearchParams,{size:20}),documentsIds:[],processing:!1,error:!1,lastTimeLoading:0},s=Object.assign({},n,t);e.columns.find(e=>e.id===s.id)||e.columns.push(s)},moveColumn(e,{indexCol:t,dir:n}){const s="left"===n?t-1:t+1,o=e.columns[t];e.columns.splice(t,1),e.columns.splice(s,0,o)},closeColumn(e,{indexCol:t}){e.columns.splice(t,1)},resetColumn(e,{indexCol:t}){e.columns[t].documentsIds=[]},updateColumnParams(e,{indexCol:t,params:n}){e.columns[t].params=n},updateClient(e,t){e.credentials.client=t,c.apiKey=e.credentials},updateClientId(e,t){e.credentials.clientId=t,c.apiKey=e.credentials},updateClientSecret(e,t){e.credentials.clientSecret=t,c.apiKey=e.credentials},setClientCredentials(e,{client:t,clientId:n,clientSecret:s}){e.credentials.client=t,e.credentials.clientId=n,e.credentials.clientSecret=s,c.apiKey=e.credentials},resetClientCredentials(e){e.credentials.client=null,e.credentials.clientId=null,e.credentials.clientSecret=null,c.apiKey=e.credentials},initClients(e){e.clients=c.clients},setAuthType(e,t){e.authType=t},setProcessing(e,{indexCol:t,value:n}){if(!e.columns[t])return!1;e.columns[t].processing=n,!1===n&&(e.columns[t].lastTimeLoading=Date.now())},setError(e,{indexCol:t,value:n}){if(!e.columns[t])return!1;e.columns[t].error=n},addDocuments(e,t){const n=t.reduce((e,t)=>{return e[t.uno]=t,e},{});e.documents=Object.assign({},n,e.documents)},cleanDocuments(e){const t=[...new Set([].concat.apply([],e.columns.map(e=>e.documentsIds)))];for(const n in e.documents)-1===t.indexOf(n)&&delete e.documents[n]},clearDocuments(e){e.documents={}},clearColumnDocumentsIds(e,{indexCol:t}){e.columns[t].documentsIds=[]},prependDocumentsToCol(e,{indexCol:t,documents:n}){if(!e.columns[t])return!1;const s=e.columns[t].documentsIds;e.columns[t].documentsIds=[...new Set(n.map(e=>e.uno).concat(s))]},appendDocumentsToCol(e,{indexCol:t,documents:n}){if(!e.columns[t])return!1;const s=e.columns[t].documentsIds;e.columns[t].documentsIds=[...new Set(s.concat(n.map(e=>e.uno)))]},setDocumentViewed(e,t){e.documents[t].viewed=!0},setConnectivityStatus(e,{isConnected:t}){e.connectivity.isConnected=t},setWantTour(e,t){e.wantTour=t},setAutoRefresh(e,t){e.autoRefresh=t},setLocale(e,t){e.locale=t}},h=n("a002"),p=n.n(h);const f={columns:"afpnews-deck-columns",token:"afpnews-deck-token",client:"afpnews-deck-client",clientId:"afpnews-deck-client-id",clientSecret:"afpnews-deck-client-secret",autoRefresh:"afpnews-deck-auto-refresh",wantTour:"afpnews-deck-want-tour",locale:"afpnews-deck-locale"},g=p.a.createInstance({name:"userStore"}),v=p.a.createInstance({name:"documentsStore"});var y=e=>{return{uno:e.uno,headline:Array.isArray(e.title)?e.title.join(" - "):e.title,published:e.published,lang:e.lang,product:e.product,urgency:e.urgency,news:e.news,slugs:e.slug,medias:e.bagItem?e.bagItem.map(e=>{return{sizes:e.medias.sort((e,t)=>e.width-t.width),creator:e.creator,provider:e.provider,caption:e.caption,source:e.source,uno:e.uno}}):[],viewed:!1}},b=n("a925");function w(e){return x.locale=e,document.querySelector("html").setAttribute("lang",e),e}s["default"].use(b["a"]);const C="fr",I="en",k={[I]:n("fca5")(`./${I}`)},_={[I]:k[I].dateTimeFormats},x=new b["a"]({locale:C,fallbackLocale:I,messages:k,dateTimeFormats:_});async function A(e){if(x.locale!==e||!x.messages[e]){const t=await n("39c3")(`./${e}.json`),{dateTimeFormats:s,...o}=t.default;return x.setLocaleMessage(e,o),x.setDateTimeFormat(e,s),w(e)}return Promise.resolve(w(e))}var T=x,P=n("5a0c"),$=n.n(P),D=n("4208"),S=n.n(D);n("e5b7");$.a.extend(S.a);const j={install(e,t){e.filter("fromNow",e=>{return $()(e).from($()())})}};function O(e){$.a.locale(e)}s["default"].use(j);var z={async changeLocale({commit:e,state:t},n){console.log(n),await A(n),O(n),e("setLocale",n),await g.setItem(f.locale,t.locale)},async addColumn({commit:e,dispatch:t},n){e("addColumn",n),await t("saveColumns")},async closeColumn({commit:e,dispatch:t},{indexCol:n}){e("closeColumn",{indexCol:n}),await t("saveColumns")},async moveColumn({commit:e,dispatch:t},{indexCol:n,dir:s}){e("moveColumn",{indexCol:n,dir:s}),await t("saveColumns")},async resurrectColumns({commit:e}){const t=await g.getItem(f.columns);Array.isArray(t)&&t.length>0?t.forEach(t=>e("addColumn",t)):e("addColumn")},async resurrectDocuments({commit:e}){const t=[];await v.iterate((e,n,s)=>{t.push(e)}),e("addDocuments",t)},async saveColumns({state:e}){await g.setItem(f.columns,e.columns)},async saveDocuments({state:e,commit:t}){t("cleanDocuments"),await v.iterate((t,n,s)=>{void 0===e.documents[t.uno]&&v.removeItem(n)});for(const n in e.documents)v.setItem(e.documents[n].uno,e.documents[n])},async initPreferences({commit:e,dispatch:t}){const n=await g.getItem(f.wantTour);null!==n&&e("setWantTour",n);const s=await g.getItem(f.autoRefresh);null!==s&&e("setAutoRefresh",s);const o=await g.getItem(f.locale);null!==o&&t("changeLocale",o)},async setAutoRefresh({state:e,commit:t},n){t("setAutoRefresh",n),await g.setItem(f.autoRefresh,e.autoRefresh)},async setWantTour({state:e,commit:t},n){t("setWantTour",n),await g.setItem(f.wantTour,e.wantTour)},async initCredentials({commit:e}){e("initClients");const t=await g.getItem(f.client),n=await g.getItem(f.clientId),s=await g.getItem(f.clientSecret);e("setClientCredentials",{client:t,clientId:n,clientSecret:s})},async saveCredentials({state:e}){await g.setItem(f.client,e.credentials.client),await g.setItem(f.clientId,e.credentials.clientId),await g.setItem(f.clientSecret,e.credentials.clientSecret)},async initToken({commit:e}){const t=await g.getItem(f.token);t&&(c.token=t,e("setAuthType",c.token.authType))},async saveToken({commit:e},t){await g.setItem(f.token,t),e("setAuthType",t.authType)},async deleteToken({commit:e}){c.token={},e("setAuthType","unknown"),e("resetClientCredentials")},async logout({dispatch:e}){await g.clear(),await v.clear(),e("deleteToken")},async authenticate({state:e,commit:t,dispatch:n},{username:s,password:o}={}){try{const e=await c.authenticate({username:s,password:o});await n("saveToken",e),await n("saveCredentials")}catch(e){return console.error(e&&e.message),Promise.reject(e)}},async refreshColumn({state:e,commit:t,dispatch:n,getters:s},{indexCol:o,more:a}){try{if(e.columns[o]&&Date.now()-e.columns[o].lastTimeLoading<10)throw new Error("Refreshs are too frequent. Are you sure you're not in a infinite loop ?");t("setProcessing",{indexCol:o,value:!0});let i={...s.getColumnByIndex(o).params};try{if(s.getColumnByIndex(o).documentsIds.length>0)if("before"===a){const e=s.getColumnByIndex(o).documentsIds.slice(-1).pop(),t=s.getDocumentById(e);let n=new Date(t.published);n.setSeconds(n.getSeconds()-1),i=Object.assign(i,{dateTo:n.toISOString()})}else if("after"===a){const e=s.getColumnByIndex(o).documentsIds[0],t=s.getDocumentById(e);let n=new Date(t.published);n.setSeconds(n.getSeconds()+1),i=Object.assign(i,{dateFrom:n.toISOString()})}}catch(e){return console.error(e.message),t("clearColumnDocumentsIds",{indexCol:o}),n("refreshColumn",{indexCol:o,more:a})}const{documents:r}=await c.search(i);if(n("saveToken",c.token),0===r.length)throw new Error("No more documents");return t("addDocuments",r.map(e=>y(e))),t("before"===a?"appendDocumentsToCol":"prependDocumentsToCol",{indexCol:o,documents:r}),n("saveColumns"),n("saveDocuments"),t("setError",{indexCol:o,value:!1}),!0}catch(e){return e.response?(401===e.response.status&&(await n("logout"),console.error("Authentication error. Please type your credentials.")),console.error(e.response)):e.request&&console.error(e.request),!1}finally{t("setProcessing",{indexCol:o,value:!1})}},refreshAllColumns({state:e,dispatch:t}){return Promise.all(e.columns.map((e,n)=>t("refreshColumn",{indexCol:n,more:"after"})))}};s["default"].use(o["a"]);var R=new o["a"].Store({state:a,getters:i,mutations:m,actions:z,modules:{},strict:!1}),E=n("8c4f"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("transition-group",{attrs:{id:"columns",name:"list",tag:"div"}},e._l(e.columns,function(e,t){return n("column",{key:"column-"+e.id,attrs:{"column-id":t}})})),n("router-view")],1)},L=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"column"},[n("header",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.clickAway,expression:"clickAway"}]},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.query,expression:"query",modifiers:{lazy:!0}}],staticClass:"search",attrs:{placeholder:e.$t("column.search"),"data-v-step":"search",type:"text",name:"query","aria-label":"query",autocomplete:"off"},domProps:{value:e.query},on:{focus:function(t){e.paramsOpen=!0},change:function(t){e.query=t.target.value}}}),e.paramsOpen||"tour"===e.$route.name?n("form",{attrs:{tabindex:"-1"},on:{submit:function(e){e.stopPropagation(),e.preventDefault()},keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?(t.stopPropagation(),t.preventDefault(),e.reset(t)):null}}},[n("div",{staticClass:"actions"},[n("button",{attrs:{name:"move-left"},on:{click:function(t){e.move("left")}}},[n("i",{staticClass:"UI-icon UI-slide-left"})]),n("button",{staticClass:"margin-right-auto",attrs:{name:"move-right"},on:{click:function(t){e.move("right")}}},[n("i",{staticClass:"UI-icon UI-slide-right"})]),n("button",{staticClass:"margin-left-auto",class:{processing:e.column.processing,danger:e.column.error},attrs:{name:"refresh"},on:{click:e.reset}},[n("i",{staticClass:"UI-icon UI-refresh"})]),n("button",{staticClass:"danger",attrs:{name:"close"},on:{click:e.close}},[n("i",{staticClass:"UI-icon UI-close-alt"})])]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.product,expression:"product"}],attrs:{name:"product","data-v-step":"products"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.product=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:""}},[e._v(e._s(e.$t("column.product")))]),e._l(e.products,function(t){return n("option",{key:t.value.join("|"),domProps:{value:t.value}},[e._v("\n          "+e._s(t.label)+"\n        ")])})],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],attrs:{name:"lang","data-v-step":"languages"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lang=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:""}},[e._v(e._s(e.$t("column.lang")))]),e._l(e.languages,function(t){return n("option",{key:t.value.join("|"),domProps:{value:t.value}},[e._v("\n          "+e._s(t.label)+"\n        ")])})],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.urgency,expression:"urgency"}],attrs:{name:"urgency","data-v-step":"urgencies"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.urgency=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:""}},[e._v(e._s(e.$t("column.urgency")))]),e._l(e.urgencies,function(t){return n("option",{key:t.value.join("|"),domProps:{value:t.value}},[e._v("\n          "+e._s(t.label)+"\n        ")])})],2),n("datepicker",{attrs:{"monday-first":!0,"clear-button":!0,typeable:!0,"use-utc":!0,"disabled-dates":{from:new Date,to:new Date(2013,6,16)},placeholder:e.$t("column.until"),language:e.datePickerTranslate,"data-v-step":"date-picker"},model:{value:e.dateTo,callback:function(t){e.dateTo=t},expression:"dateTo"}})],1):e._e()]),n("transition",{attrs:{name:"curtain-transform",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.column.processing,expression:"column.processing"}],staticClass:"loading-indicator"},[e._v("\n      "+e._s(e.$t("loading"))+"\n    ")])]),n("recyclist",{ref:"recyclist",staticClass:"documents",attrs:{list:e.documents,offset:200,"fetch-bottom":e.loadBefore,"fetch-top":e.loadAfter,"is-loading":e.column.processing},scopedSlots:e._u([{key:"tombstone",fn:function(t){return[n("article",{staticClass:"tombstone"},[n("p",{staticClass:"published"},[n("span",[e._v("Lorem ipsum")])]),n("h1",[n("span",[e._v("Lorem Ipsum")])]),n("p",{staticClass:"lead"},[n("span",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in massa vel orci eleifend eleifend.")])])])]}},{key:"item",fn:function(t){return["string"===typeof t.data?n("card",{attrs:{"doc-id":t.data,"index-col":e.columnId}}):e._e()]}}])},[n("div",{attrs:{slot:"nomore"},slot:"nomore"},[e._v(e._s(e.$t("column.no-result")))])])],1)},N=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-recyclist vue-recyclist-scrollable"},[n("div",{ref:"list",staticClass:"vue-recyclist-items",style:{height:e.height+"px"}},[e._l(e.visibleItems,function(t,s){return n("div",{key:s,staticClass:"vue-recyclist-item",style:{transform:"translate3d(0,"+t.top+"px,0)"}},[n("div",{staticClass:"vue-recyclist-transition",style:{opacity:+!t.loaded}},[e._t("tombstone")],2),n("div",{staticClass:"vue-recyclist-transition",style:{opacity:+t.loaded}},[e._t("item",null,{data:t.data,index:s})],2)])}),n("div",{staticClass:"vue-recyclist-pool"},[e._l(e.items,function(t,s){return t.tomb||t.gotHeight?e._e():n("div",{key:s,ref:"item"+s,refInFor:!0,staticClass:"vue-recyclist-item vue-recyclist-invisible"},[e._t("item",null,{data:t.data})],2)}),n("div",{ref:"tomb",staticClass:"vue-recyclist-item vue-recyclist-invisible"},[e._t("tombstone")],2)],2)],2),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.noMore,expression:"!isLoading && noMore"}],staticClass:"vue-recyclist-nomore"},[e._t("nomore",[n("div",[e._v("End of list")])])],2)])},U=[],M={props:{list:{type:Array,required:!0},size:{type:Number,default:20},offset:{type:Number,default:200},fetchBottom:{type:Function,required:!0},fetchTop:{type:Function,required:!0},isLoading:{type:Boolean,default:!1}},data(){return{name:"Recyclist",items:[],height:0,start:0,loadings:0,noMore:!1}},computed:{visibleItems(){return this.items.slice(Math.max(0,this.start-this.size),Math.min(this.items.length,this.start+this.size))},containerHeight(){return this.$el&&this.$el.offsetHeight||0},tombHeight(){return this.$refs.tomb&&this.$refs.tomb.offsetHeight}},watch:{start(e,t){0===e&&t>e&&this.loadTop()},async list(e,t){if(e[0]!==t[0]){this.items=this.list.map((e,t)=>{return this.renderItem(t,e,null)}),await this.$nextTick();for(let e=0;e<this.items.length;e++)this.updateItemHeight(e);this.updateItemTop(),this.updateIndex()}}},mounted(){this.$el.addEventListener("scroll",this.onScroll,{capture:!0,passive:!0}),this.init()},destroyed(){this.$el.removeEventListener("scroll",this.onScroll)},methods:{init(){this.reset(),this.loadMoreItems()},reset(){this.noMore=!1,this.items=[],this.height=this.start=this.$el.scrollTop=0},async loadMoreItems(){if(!0===this.noMore)return!1;const e=this.loadings++;let t=[],n=this.items.length+this.size;for(let s=this.items.length;s<n;s++)this.setItem(s,null,e),t.push(s);await this.$nextTick(),this.updateItemTop(),this.loadBottom(e)},setItem(e,t,n){this.$set(this.items,e,this.renderItem(e,t,n))},renderItem(e,t,n){return{index:e,data:t||{},height:this.tombHeight,top:-1e3,tomb:!t,loaded:!!t,loadingIndex:n,gotHeight:!1}},updateItemTop(){let e=0;for(let t=0;t<this.items.length;t++){let n=this.items[t-1];this.items[t].top=n?n.top+n.height:0,e+=this.items[t].height}this.height=e,this.updateIndex()},updateIndex(){let e=this.$el.scrollTop;for(let t=0;t<this.items.length;t++)if(this.items[t].top>e){this.start=Math.max(0,t-1);break}},async loadBottom(e){const t=await this.fetchBottom();!1===t&&(this.noMore=!0);const n=this.items.filter(t=>t.loadingIndex===e);n.forEach(t=>{this.setItem(t.index,this.list[t.index],e)}),await this.$nextTick(),n.forEach(e=>{this.updateItemHeight(e.index)}),this.items=this.items.filter(e=>!0===e.loaded),this.updateItemTop()},updateItemHeight(e){let t=this.items[e],n=this.$refs[`item${e}`];n&&n[0]&&(t.height=n[0].offsetHeight,t.gotHeight=!0)},loadTop(){this.fetchTop()},onScroll(){this.$el.scrollTop+this.$el.offsetHeight>this.height-this.offset&&this.loadMoreItems(),this.updateIndex()}}},H=M,V=(n("d0f1"),n("2877")),K=Object(V["a"])(H,B,U,!1,null,"1ce75f60",null);K.options.__file="Recyclist.vue";var W=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.doc?n("router-link",{class:{flash:1===e.doc.urgency,alerte:2===e.doc.urgency,urgent:3===e.doc.urgency,viewed:e.doc.viewed},attrs:{lang:e.doc.lang,dir:"ar"===e.doc.lang?"rtl":"ltr",to:{name:"document",params:{indexCol:e.indexCol,docId:e.docId}},tag:"article"}},[n("p",{staticClass:"published"},[e._v(e._s(e._f("fromNow")(e.doc.published)))]),"photo"!==e.doc.product?n("h1",[e._v("\n    "+e._s(e.doc.headline)+"\n  ")]):e._e(),e.doc.medias.length>0&&e.doc.medias[0].sizes.some(function(e){return"Preview"===e.role})?n("div",{staticClass:"img-container",style:{"background-image":"url("+e.doc.medias[0].sizes.find(function(e){return"Preview"===e.role}).href+")"}}):e._e(),e.doc.urgency>2&&e.doc.news&&e.doc.news[0]?n("p",{staticClass:"lead"},[e._v("\n    "+e._s(e.doc.news[0].substr(0,100)+"...")+"\n  ")]):e._e()]):e._e()},G=[],J={name:"Card",props:{docId:{type:String,required:!0},indexCol:{type:Number,required:!0}},computed:{...Object(o["c"])(["getDocumentById"]),doc(){return this.getDocumentById(this.docId)}}},Q=J,X=(n("f9a4"),Object(V["a"])(Q,Y,G,!1,null,"1ba80e6c",null));X.options.__file="Card.vue";var Z=X.exports,ee=n("c7db"),te=n("fa33"),ne=n("2430");const se={en:ne["a"],fr:ne["b"]};var oe={name:"Column",components:{Card:Z,Recyclist:W,Datepicker:te["a"]},mixins:[ee["mixin"]],props:{columnId:{type:Number,required:!0}},data(){return{paramsOpen:!1,products:[{label:this.$t("products.all"),value:["news","multimedia","photo","infographie","sid","videographie","livereport","sidtv","parismode"]},{label:this.$t("products.news"),value:["news"]},{label:this.$t("products.multimedia"),value:["multimedia"]},{label:this.$t("products.photo"),value:["photo"]},{label:this.$t("products.infographie"),value:["infographie"]},{label:this.$t("products.videographie"),value:["videographie"]},{label:this.$t("products.livereport"),value:["livereport"]},{label:this.$t("products.parismode"),value:["parismode"]}]}},computed:{...Object(o["e"])({column(e){return e.columns[this.columnId]}}),datePickerTranslate(){return se[this.$i18n.locale]||se[this.$i18n.fallbackLocale]},documents(){return this.column.documentsIds},params(){return this.column.params},product:{get(){return this.params.products},set(e){if(!e[1]){if("photo"===e[0])return this.updateParams({products:e,langs:["en"],urgencies:[1,2,3,4,5]}),!0;if("news"===e[0])return this.updateParams({products:e,urgencies:[1,2,3,4]}),!0}this.updateParams({products:e,urgencies:[1,2,3,4,5]})}},lang:{get(){return this.params.langs},set(e){this.updateParams({langs:e})}},languages(){return 0===this.product.length&&"photo"===this.product[0]?[{label:this.$t("languages.en"),value:["en"]}]:[{label:this.$t("languages.all"),value:["fr","en","es","de","pt","ar","zh-tw","zh-cn"]},{label:this.$t("languages.en"),value:["en"]},{label:this.$t("languages.fr"),value:["fr"]},{label:this.$t("languages.de"),value:["de"]},{label:this.$t("languages.es"),value:["es"]},{label:this.$t("languages.pt"),value:["pt"]},{label:this.$t("languages.ar"),value:["ar"]},{label:this.$t("languages.zh-tw"),value:["zh-tw"]},{label:this.$t("languages.zh-cn"),value:["zh-cn"]}]},urgencies(){return this.product.length>1?[{label:this.$tc("urgencies.flash",2),value:[1]},{label:this.$tc("urgencies.alertes",2),value:[1,2]},{label:this.$tc("urgencies.urgents",2),value:[1,2,3]},{label:this.$tc("urgencies.depeches",2),value:[1,2,3,4]},{label:this.$t("urgencies.all"),value:[1,2,3,4,5]}]:"photo"===this.product[0]?[{label:this.$tc("urgencies.topshots",2),value:[1]},{label:this.$t("urgencies.all"),value:[1,2,3,4,5]}]:"news"===this.product[0]?[{label:this.$tc("urgencies.flash",2),value:[1]},{label:this.$tc("urgencies.alertes",2),value:[1,2]},{label:this.$tc("urgencies.urgents",2),value:[1,2,3]},{label:this.$tc("urgencies.depeches",2),value:[1,2,3,4]}]:[{label:this.$t("urgencies.all"),value:[1,2,3,4,5]}]},urgency:{get(){return this.params.urgencies},set(e){this.updateParams({urgencies:e})}},query:{get(){return this.params.query},set(e){this.updateParams({query:e})}},dateTo:{get(){return this.params.dateTo},set(e){this.updateParams({dateTo:e})}}},methods:{...Object(o["d"])(["updateColumnParams","resetColumn"]),...Object(o["b"])(["moveColumn","closeColumn","refreshColumn"]),clickAway(){this.paramsOpen=!1},updateParams(e){const t=Object.assign({},this.params,e);this.updateColumnParams({indexCol:this.columnId,params:t}),this.reset()},reset(){this.resetColumn({indexCol:this.columnId}),this.$refs.recyclist.init()},loadBefore(){return this.refreshColumn({indexCol:this.columnId,more:"before"})},loadAfter(){return this.refreshColumn({indexCol:this.columnId,more:"after"})},move(e){this.moveColumn({indexCol:this.columnId,dir:e})},close(){this.closeColumn({indexCol:this.columnId})}}},ae=oe,ie=(n("5bf0"),n("6d95"),Object(V["a"])(ae,q,N,!1,null,"99f3fc46",null));ie.options.__file="Column.vue";var re=ie.exports,le={name:"Deck",beforeRouteUpdate(e,t,n){if("tour"!==e.name&&t&&"login"===t.name&&!0===this.$store.state.wantTour)return n({name:"tour"});n()},components:{Column:re},computed:{...Object(o["e"])(["columns"])}},ce=le,ue=(n("52c4"),Object(V["a"])(ce,F,L,!1,null,"d9801108",null));ue.options.__file="Deck.vue";var de=ue.exports;s["default"].use(E["a"]);const me=[{name:"deck",path:"/",component:de,children:[{path:"doc",redirect:"/"},{name:"document",path:"doc/:docId",component:()=>n.e("viewer").then(n.bind(null,"f9ca")),props:!0},{name:"login",path:"login",component:()=>n.e("login").then(n.bind(null,"a55b"))},{name:"about",path:"about",component:()=>n.e("about").then(n.bind(null,"f820"))},{name:"tour",path:"tour",component:()=>n.e("tour").then(n.bind(null,"37f6"))}]}];var he=new E["a"]({routes:me}),pe=n("6591"),fe=n("c8b5"),ge=n.n(fe);delete ge.a.defaults.cssProps.userSelect,ge.a.defaults.touchAction="pan-y",s["default"].use(pe["VueHammer"]);var ve=n("9483");Object(ve["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("side-bar"),n("router-view"),n("connectivity")],1)},be=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{id:"sidebar"}},[n("button",{attrs:{name:"search","aria-label":"search","data-v-step":"new"},on:{click:e.search}},[n("i",{staticClass:"UI-icon UI-search"})]),n("button",{class:{success:e.autoRefresh,processing:e.processing},attrs:{name:"auto-refresh","aria-label":"auto refresh","data-v-step":"auto-refresh"},on:{click:e.toggleAutoRefresh}},[n("i",{staticClass:"UI-icon UI-refreshing"})]),n("router-link",{class:{success:e.isAuthenticated,error:!e.isAuthenticated},attrs:{to:{name:"login"},name:"authenticate","aria-label":"authenticate",tag:"button","data-v-step":"authenticate"}},[n("i",{staticClass:"UI-icon UI-user-male"})]),n("router-link",{attrs:{to:{name:"about"},name:"about","aria-label":"about",tag:"button"}},[n("i",{staticClass:"UI-icon UI-heart"})]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.locale,expression:"locale"}],attrs:{name:"locale","aria-label":"change language"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.locale=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"fr"}},[e._v("fr")]),n("option",{attrs:{value:"en"}},[e._v("en")])])],1)},Ce=[],Ie={name:"SideBar",data(){return{autoRefreshTimer:null,autoRefreshDelay:1e4,processing:!1}},computed:{...Object(o["c"])(["isAuthenticated"]),...Object(o["e"])(["autoRefresh"]),locale:{get(){return this.$store.state.locale},set(e){this.changeLocale(e)}}},watch:{autoRefresh(e){!0===e?this.startAutoRefresh():this.stopAutoRefresh()}},mounted(){document.addEventListener("visibilitychange",this.visibilityChanged,!1)},beforeDestroy(){this.stopAutoRefresh(),document.removeEventListener("visibilitychange",this.visibilityChanged,!1)},methods:{...Object(o["b"])(["addColumn","refreshAllColumns","savePreferences","setAutoRefresh","changeLocale"]),async search(){"deck"!==this.$route.name&&this.$router.push({name:"deck"}),this.addColumn(),await this.$nextTick(),document.querySelector(".column:last-child").scrollIntoView({behavior:"smooth",block:"center"})},startAutoRefresh(){this.refreshAllColumns(),this.autoRefreshTimer=setInterval(async()=>{document.hidden||(this.processing=!0,this.refreshAllColumns(),this.processing=!1)},this.autoRefreshDelay)},stopAutoRefresh(){this.autoRefreshTimer&&clearInterval(this.autoRefreshTimer)},visibilityChanged(){!1!==this.autoRefresh&&(!0===document.hidden?this.stopAutoRefresh():this.startAutoRefresh())},toggleAutoRefresh(){this.setAutoRefresh(!this.autoRefresh)}}},ke=Ie,_e=(n("c579"),Object(V["a"])(ke,we,Ce,!1,null,"98ef733c",null));_e.options.__file="SideBar.vue";var xe=_e.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"curtain",appear:""}},[e.connectivity.isConnected?e._e():n("div",{attrs:{id:"connectivity"}},[e._v("\n    "+e._s(e.$t("connectivity.message"))+"\n  ")])])},Te=[];const Pe=navigator.connection||navigator.mozConnection||navigator.webkitConnection;var $e={name:"Connectivity",computed:{...Object(o["e"])(["connectivity"])},mounted(){if(!Pe)return!1;this.checkConnection(),Pe.addEventListener("change",this.checkConnection)},methods:{...Object(o["d"])(["setConnectivityStatus"]),checkConnection(){const e=!0===navigator.onLine;this.setConnectivityStatus({isConnected:e})}}},De=$e,Se=(n("3995"),Object(V["a"])(De,Ae,Te,!1,null,"5db2fbcc",null));Se.options.__file="Connectivity.vue";var je=Se.exports,Oe={name:"App",components:{SideBar:xe,Connectivity:je},computed:{...Object(o["c"])(["isAuthenticated"])},async created(){await this.initCredentials(),await this.initToken(),await this.resurrectDocuments(),await this.resurrectColumns(),await this.initPreferences(),this.isAuthenticated||"deck"!==this.$route.name||this.$router.push({name:"login"})},methods:{...Object(o["b"])(["initCredentials","initToken","resurrectColumns","resurrectDocuments","initPreferences"])}},ze=Oe,Re=(n("c072"),Object(V["a"])(ze,ye,be,!1,null,null,null));Re.options.__file="index.vue";var Ee=Re.exports;s["default"].config.productionTip=!1,new s["default"]({router:he,store:R,i18n:T,render:e=>e(Ee)}).$mount("#app")},"5bf0":function(e,t,n){"use strict";var s=n("d8d9"),o=n.n(s);o.a},"6d95":function(e,t,n){"use strict";var s=n("ef23"),o=n.n(s);o.a},c072:function(e,t,n){"use strict";var s=n("f8dc"),o=n.n(s);o.a},c579:function(e,t,n){"use strict";var s=n("e1c0"),o=n.n(s);o.a},d0f1:function(e,t,n){"use strict";var s=n("f32c"),o=n.n(s);o.a},d8d9:function(e,t,n){},e1c0:function(e,t,n){},e636:function(e,t,n){},eacc:function(e,t,n){},edd4:function(e){e.exports={"back-to-home":"Back to home",submit:"Submit",loading:"Loading...",column:{search:"Search...",product:"Choose a product",lang:"Choose a lang",urgency:"Choose an urgency",until:"Until","no-result":"No result"},about:{title:"About AFP Deck",description:["AFP News Deck is a reader for AFP feeds. It allows you to fetch and read stories, multimedia articles and photos directly in your browser.","Made with love by AFP Dataviz team, on a original idea by the Medialab. Data is provided by API AFP."],version:"Version"},auth:{success:{title:"You're correctly logged in.",description:"Enjoy AFP Deck !"},logout:"Logout",clientId:"Client ID",clientSecret:"Client Secret",username:"Username",password:"Password","not-authenticated":{title:"Log in to enjoy fresh news",external:"If you don't work at AFP and you want to connect using a specific client id, {0}.",afp:"If you want to log in using the AFP account, {0}.",click:"click here"}},products:{all:"All products",news:"News",multimedia:"Multimedia",photo:"Photo",infographie:"Graphics",videographie:"Videographics",livereport:"Live Report",parismode:"Paris mode"},languages:{all:"All languages",en:"English",fr:"French",de:"German",es:"Spanish",pt:"Portuguese",ar:"Arab","zh-tw":"Traditionnal chinese","zh-cn":"Simplified chinese"},urgencies:{all:"All urgencies",flash:"Flash | Flashs",alertes:"Alert | Alerts",urgents:"Urgent | Urgents",depeches:"News | News",topshots:"Topshot | Topshots"},connectivity:{message:"Your device lost its internet connection."},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},tour:{goto:"Getting started",search:"Type your search terms here, then enter. <p><small>You can use conditional operatos like AND and OR, or search in specific fields using title:Worldcup by example</small></p>",products:"News, photos, graphics : decide what product you want. <p><small>When you're not logged in, you only view multimedia news wire from the previous day.</small></p>",languages:"6 languages are available. Select yours <p><small>Photos are only available in English</small></p>",urgencies:"You can decide to only display important article like alerts, flashs, or topshots for photos.","date-picker":"Articles are sorted from the youngest to the oldest. <p><small>Use this selector if you search for a specific date.</small></p>",new:"Click here to add a column and start a new search.","auto-refresh":"Control the auto-refresh functionnality, to automatically fetch new articles.",authenticate:"Log in with your AFP credentials to start reading fresh articles."}}},ef23:function(e,t,n){},f32c:function(e,t,n){},f693:function(e){e.exports={"back-to-home":"Retour à l'accueil",submit:"Valider",loading:"Chargement...",column:{search:"Rechercher...",product:"Sélectionnez un produit",lang:"Sélectionnez une langue",urgency:"Sélectionnez une urgence",until:"Jusqu'à","no-result":"Pas de résultats"},about:{title:"À propos d'AFP Deck",description:["AFP News Deck permet de lire les dépêches, photos et vidéos diffusées par l'AFP, directement dans votre navigateur.","Conçu par l'équipe Dataviz de l'AFP, sur une idée originale du Médialab. Les données proviennent de l'API AFP."],version:"Version"},auth:{success:{title:"Vous êtes connecté",description:"Profitez d'AFP Deck !"},logout:"Se déconnecter",clientId:"ID Client",clientSecret:"Secret Client",username:"Nom d'utilisateur",password:"Mot de passe","not-authenticated":{title:"Connectez-vous pour bénéficier des dernières nouvelles",external:"Si vous ne travaillez pas à l'AFP et désirez vous connecter avec un compte client spécifique, {0}.",afp:"Si vous souhaitez vous connecter avec le compte AFP, {0}.",click:"cliquez ici"}},products:{all:"Tous produits",news:"Dépêches",multimedia:"Multimédia",photo:"Photo",infographie:"Infographie",videographie:"Vidéographie",livereport:"Lives",parismode:"Paris mode"},languages:{all:"Tous langages",en:"Anglais",fr:"Français",de:"Allemand",es:"Espagnol",pt:"Portugais",ar:"Arabe","zh-tw":"Chinois traditionnel","zh-cn":"Chinois simplifié"},urgencies:{all:"Toutes urgences",flash:"Flash | Flashs",alertes:"Alerte | Alertes",urgents:"Urgent | Urgents",depeches:"Dépêche | Dépêches",topshots:"Topshot | Topshots"},connectivity:{message:"Votre appareil a perdu la connexion."},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},tour:{goto:"Faire la visite guidée",search:"Tapez votre recherche ici, puis faites entrer pour valider. <p><small>Vous pouvez utiliser les opérateurs AND et OR, ou des recherches spécifiques dans le titre comme title:Mondial</small></p>",products:"Dépêches, photos, infographies : sélectionnez le contenu que vous recherchez. <p><small>Lorsque vous n'êtes pas connectés, vous n'avez accès qu'au fil multimédia, avec 24h de délai.</small></p>",languages:"6 langues sont généralement disponibles. <p><small>Les photos ne sont en revanche disponibles que sur le fil anglais.</small></p>",urgencies:"Vous pouvez décider de n'afficher que les informations les plus importantes, commes les alertes et les flashs, ou les topshots pour les photos.","date-picker":"Les articles sont classés du plus récent au plus ancien, et défilent à l'infini. <p><small>Sélectionnez une date ici si vous souhaitez recherche jusqu'à une date particulière.</small></p>",new:"Cliquez ici pour ajouter une nouvelle colonne de contenus, et faire de nouvelles recherches.","auto-refresh":"Contrôlez ici la mise à jour automatique des articles.",authenticate:"Authentifiez-vous avec vos identifiants AFP pour accéder à tous les contenus, y compris les plus récents."}}},f8dc:function(e,t,n){},f9a4:function(e,t,n){"use strict";var s=n("fe70"),o=n.n(s);o.a},fca5:function(e,t,n){var s={"./en":"edd4","./en.json":"edd4","./fr":"f693","./fr.json":"f693"};function o(e){var t=a(e);return n(t)}function a(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id="fca5"},fe70:function(e,t,n){}});
//# sourceMappingURL=app.2f96ca77.js.map