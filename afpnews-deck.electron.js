!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Object)var t={__proto__:e.__proto__};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}),t}(r)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("electron")},function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?r:o).supported=r,t.unsupported=o},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},function(e,t,n){var r=Array.prototype.slice,o=n(5),i=n(4),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var a,l;if(s(e)||s(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=r.call(e),t=r.call(t),c(e,t,n));if(u(e)){if(!u(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=o(e),p=o(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(l=f[a],!c(e[l],t[l],n))return!1;return typeof e==typeof t}(e,t,n))};function s(e){return null===e||void 0===e}function u(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},function(e,t,n){var r=n(2),o=n(0),i=parseInt("0777",8);function c(e,t,n,s){"function"==typeof t?(n=t,t={}):t&&"object"==typeof t||(t={mode:t});var u=t.mode,a=t.fs||o;void 0===u&&(u=i&~process.umask()),s||(s=null);var l=n||function(){};e=r.resolve(e),a.mkdir(e,u,function(n){if(!n)return l(null,s=s||e);switch(n.code){case"ENOENT":c(r.dirname(e),t,function(n,r){n?l(n,r):c(e,t,l,r)});break;default:a.stat(e,function(e,t){e||!t.isDirectory()?l(n,s):l(null,s)})}})}e.exports=c.mkdirp=c.mkdirP=c,c.sync=function e(t,n,c){n&&"object"==typeof n||(n={mode:n});var s=n.mode,u=n.fs||o;void 0===s&&(s=i&~process.umask()),c||(c=null),t=r.resolve(t);try{u.mkdirSync(t,s),c=c||t}catch(o){switch(o.code){case"ENOENT":e(t,n,c=e(r.dirname(t),n,c));break;default:var a;try{a=u.statSync(t)}catch(e){throw o}if(!a.isDirectory())throw o}}return c}},function(e,t){e.exports=require("assert")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("stream")},function(e,t,n){var r=n(10).Stream;e.exports=function(e){return{ReadStream:function t(n,o){if(!(this instanceof t))return new t(n,o);r.call(this);var i=this;this.path=n;this.fd=null;this.readable=!0;this.paused=!1;this.flags="r";this.mode=438;this.bufferSize=65536;o=o||{};var c=Object.keys(o);for(var s=0,u=c.length;s<u;s++){var a=c[s];this[a]=o[a]}this.encoding&&this.setEncoding(this.encoding);if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(null!==this.fd)return void process.nextTick(function(){i._read()});e.open(this.path,this.flags,this.mode,function(e,t){if(e)return i.emit("error",e),void(i.readable=!1);i.fd=t,i.emit("open",t),i._read()})},WriteStream:function t(n,o){if(!(this instanceof t))return new t(n,o);r.call(this);this.path=n;this.fd=null;this.writable=!0;this.flags="w";this.encoding="binary";this.mode=438;this.bytesWritten=0;o=o||{};var i=Object.keys(o);for(var c=0,s=i.length;c<s;c++){var u=i[c];this[u]=o[u]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1;this._queue=[];null===this.fd&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}}},function(e,t){e.exports=require("constants")},function(e,t,n){var r=n(1),o=n(12),i=process.cwd,c=null,s=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return c||(c=i.call(process)),c};try{process.cwd()}catch(e){}var u=process.chdir;function a(e){return e?function(t,n,o){return e.call(r,t,n,function(e){y(e)&&(e=null),o&&o.apply(this,arguments)})}:e}function l(e){return e?function(t,n){try{return e.call(r,t,n)}catch(e){if(!y(e))throw e}}:e}function f(e){return e?function(t,n,o,i){return e.call(r,t,n,o,function(e){y(e)&&(e=null),i&&i.apply(this,arguments)})}:e}function p(e){return e?function(t,n,o){try{return e.call(r,t,n,o)}catch(e){if(!y(e))throw e}}:e}function h(e){return e?function(t,n){return e.call(r,t,function(e,t){if(!t)return n.apply(this,arguments);t.uid<0&&(t.uid+=4294967296),t.gid<0&&(t.gid+=4294967296),n&&n.apply(this,arguments)})}:e}function d(e){return e?function(t){var n=e.call(r,t);return n.uid<0&&(n.uid+=4294967296),n.gid<0&&(n.gid+=4294967296),n}:e}function y(e){return!e||("ENOSYS"===e.code||!(process.getuid&&0===process.getuid()||"EINVAL"!==e.code&&"EPERM"!==e.code))}process.chdir=function(e){c=null,u.call(process,e)},e.exports=function(e){o.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&function(e){e.lchmod=function(t,n,r){e.open(t,o.O_WRONLY|o.O_SYMLINK,n,function(t,o){t?r&&r(t):e.fchmod(o,n,function(t){e.close(o,function(e){r&&r(t||e)})})})},e.lchmodSync=function(t,n){var r,i=e.openSync(t,o.O_WRONLY|o.O_SYMLINK,n),c=!0;try{r=e.fchmodSync(i,n),c=!1}finally{if(c)try{e.closeSync(i)}catch(e){}else e.closeSync(i)}return r}}(e);e.lutimes||function(e){o.hasOwnProperty("O_SYMLINK")?(e.lutimes=function(t,n,r,i){e.open(t,o.O_SYMLINK,function(t,o){t?i&&i(t):e.futimes(o,n,r,function(t){e.close(o,function(e){i&&i(t||e)})})})},e.lutimesSync=function(t,n,r){var i,c=e.openSync(t,o.O_SYMLINK),s=!0;try{i=e.futimesSync(c,n,r),s=!1}finally{if(s)try{e.closeSync(c)}catch(e){}else e.closeSync(c)}return i}):(e.lutimes=function(e,t,n,r){r&&process.nextTick(r)},e.lutimesSync=function(){})}(e);e.chown=f(e.chown),e.fchown=f(e.fchown),e.lchown=f(e.lchown),e.chmod=a(e.chmod),e.fchmod=a(e.fchmod),e.lchmod=a(e.lchmod),e.chownSync=p(e.chownSync),e.fchownSync=p(e.fchownSync),e.lchownSync=p(e.lchownSync),e.chmodSync=l(e.chmodSync),e.fchmodSync=l(e.fchmodSync),e.lchmodSync=l(e.lchmodSync),e.stat=h(e.stat),e.fstat=h(e.fstat),e.lstat=h(e.lstat),e.statSync=d(e.statSync),e.fstatSync=d(e.fstatSync),e.lstatSync=d(e.lstatSync),e.lchmod||(e.lchmod=function(e,t,n){n&&process.nextTick(n)},e.lchmodSync=function(){});e.lchown||(e.lchown=function(e,t,n,r){r&&process.nextTick(r)},e.lchownSync=function(){});"win32"===s&&(e.rename=(t=e.rename,function(n,r,o){var i=Date.now(),c=0;t(n,r,function s(u){if(u&&("EACCES"===u.code||"EPERM"===u.code)&&Date.now()-i<6e4)return setTimeout(function(){e.stat(r,function(e,i){e&&"ENOENT"===e.code?t(n,r,s):o(u)})},c),void(c<100&&(c+=10));o&&o(u)})}));var t;e.read=(r=e.read,function(t,n,o,i,c,s){var u;if(s&&"function"==typeof s){var a=0;u=function(l,f,p){if(l&&"EAGAIN"===l.code&&a<10)return a++,r.call(e,t,n,o,i,c,u);s.apply(this,arguments)}}return r.call(e,t,n,o,i,c,u)}),e.readSync=(n=e.readSync,function(t,r,o,i,c){for(var s=0;;)try{return n.call(e,t,r,o,i,c)}catch(e){if("EAGAIN"===e.code&&s<10){s++;continue}throw e}});var n;var r}},function(e,t,n){var r=n(0),o=n(13),i=n(11),c=[],s=n(9);var u,a,l=function(){};function f(e){o(e),e.gracefulify=f,e.FileReadStream=d,e.FileWriteStream=y,e.createReadStream=function(e,t){return new d(e,t)},e.createWriteStream=function(e,t){return new y(e,t)};var t=e.readFile;e.readFile=function(e,n,r){"function"==typeof n&&(r=n,n=null);return function e(n,r,o){return t(n,r,function(t){!t||"EMFILE"!==t.code&&"ENFILE"!==t.code?("function"==typeof o&&o.apply(this,arguments),h()):p([e,[n,r,o]])})}(e,n,r)};var n=e.writeFile;e.writeFile=function(e,t,r,o){"function"==typeof r&&(o=r,r=null);return function e(t,r,o,i){return n(t,r,o,function(n){!n||"EMFILE"!==n.code&&"ENFILE"!==n.code?("function"==typeof i&&i.apply(this,arguments),h()):p([e,[t,r,o,i]])})}(e,t,r,o)};var r=e.appendFile;r&&(e.appendFile=function(e,t,n,o){"function"==typeof n&&(o=n,n=null);return function e(t,n,o,i){return r(t,n,o,function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?("function"==typeof i&&i.apply(this,arguments),h()):p([e,[t,n,o,i]])})}(e,t,n,o)});var c=e.readdir;function s(t){return c.apply(e,t)}if(e.readdir=function(e,t,n){var r=[e];"function"!=typeof t?r.push(t):n=t;return r.push(function(e,t){t&&t.sort&&t.sort(),!e||"EMFILE"!==e.code&&"ENFILE"!==e.code?("function"==typeof n&&n.apply(this,arguments),h()):p([s,[r]])}),s(r)},"v0.8"===process.version.substr(0,4)){var u=i(e);d=u.ReadStream,y=u.WriteStream}var a=e.ReadStream;d.prototype=Object.create(a.prototype),d.prototype.open=function(){var e=this;g(e.path,e.flags,e.mode,function(t,n){t?(e.autoClose&&e.destroy(),e.emit("error",t)):(e.fd=n,e.emit("open",n),e.read())})};var l=e.WriteStream;function d(e,t){return this instanceof d?(a.apply(this,arguments),this):d.apply(Object.create(d.prototype),arguments)}function y(e,t){return this instanceof y?(l.apply(this,arguments),this):y.apply(Object.create(y.prototype),arguments)}y.prototype=Object.create(l.prototype),y.prototype.open=function(){var e=this;g(e.path,e.flags,e.mode,function(t,n){t?(e.destroy(),e.emit("error",t)):(e.fd=n,e.emit("open",n))})},e.ReadStream=d,e.WriteStream=y;var m=e.open;function g(e,t,n,r){return"function"==typeof n&&(r=n,n=null),function e(t,n,r,o){return m(t,n,r,function(i,c){!i||"EMFILE"!==i.code&&"ENFILE"!==i.code?("function"==typeof o&&o.apply(this,arguments),h()):p([e,[t,n,r,o]])})}(e,t,n,r)}return e.open=g,e}function p(e){l("ENQUEUE",e[0].name,e[1]),c.push(e)}function h(){var e=c.shift();e&&(l("RETRY",e[0].name,e[1]),e[0].apply(null,e[1]))}s.debuglog?l=s.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(l=function(){var e=s.format.apply(s,arguments);e="GFS4: "+e.split(/\n/).join("\nGFS4: "),console.error(e)}),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){l(c),n(8).equal(c.length,0)}),e.exports=f(n(1)),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&(e.exports=f(r)),e.exports.close=r.close=(u=r.close,function(e,t){return u.call(r,e,function(e){e||h(),"function"==typeof t&&t.apply(this,arguments)})}),e.exports.closeSync=r.closeSync=(a=r.closeSync,function(e){var t=a.apply(r,arguments);return h(),t})},function(e,t,n){var r;try{r=n(14)}catch(e){r=n(0)}function o(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e=e.replace(/^\uFEFF/,"")}var i={spaces:null,readFile:function(e,t,n){null==n&&(n=t,t={}),"string"==typeof t&&(t={encoding:t});var i=(t=t||{}).fs||r,c=!0;"passParsingErrors"in t?c=t.passParsingErrors:"throws"in t&&(c=t.throws),i.readFile(e,t,function(r,i){if(r)return n(r);var s;i=o(i);try{s=JSON.parse(i,t?t.reviver:null)}catch(t){return c?(t.message=e+": "+t.message,n(t)):n(null,null)}n(null,s)})},readFileSync:function(e,t){"string"==typeof(t=t||{})&&(t={encoding:t});var n=t.fs||r,i=!0;"passParsingErrors"in t?i=t.passParsingErrors:"throws"in t&&(i=t.throws);var c=n.readFileSync(e,t);c=o(c);try{return JSON.parse(c,t.reviver)}catch(t){if(i)throw t.message=e+": "+t.message,t;return null}},writeFile:function(e,t,n,o){null==o&&(o=n,n={});var i=(n=n||{}).fs||r,c="object"==typeof n&&null!==n&&"spaces"in n?n.spaces:this.spaces,s="";try{s=JSON.stringify(t,n?n.replacer:null,c)+"\n"}catch(e){if(o)return o(e,null)}i.writeFile(e,s,n,o)},writeFileSync:function(e,t,n){var o=(n=n||{}).fs||r,i="object"==typeof n&&null!==n&&"spaces"in n?n.spaces:this.spaces,c=JSON.stringify(t,n.replacer,i)+"\n";return o.writeFileSync(e,c,n)}};e.exports=i},function(e,t,n){"use strict";var r=n(2),o=n(3),i=n(15),c=n(7),s=n(6);e.exports=function(e){var t,n,u,a=o.app||o.remote.app,l=o.screen||o.remote.screen,f=100,p=Object.assign({file:"window-state.json",path:a.getPath("userData"),maximize:!0,fullScreen:!0},e),h=r.join(p.path,p.file);function d(){return t&&Number.isInteger(t.x)&&Number.isInteger(t.y)&&Number.isInteger(t.width)&&t.width>0&&Number.isInteger(t.height)&&t.height>0}function y(e){if(e=e||n)try{var r=e.getBounds();(function(e){return!e.isMaximized()&&!e.isMinimized()&&!e.isFullScreen()})(e)&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),t.isMaximized=e.isMaximized(),t.isFullScreen=e.isFullScreen(),t.displayBounds=l.getDisplayMatching(r).bounds}catch(e){}}function m(e){e&&y(e);try{c.sync(r.dirname(h)),i.writeFileSync(h,t)}catch(e){}}function g(){clearTimeout(u),u=setTimeout(y,f)}function v(){y()}function w(){S(),m()}function S(){n&&(n.removeListener("resize",g),n.removeListener("move",g),clearTimeout(u),n.removeListener("close",v),n.removeListener("closed",w),n=null)}try{t=i.readFileSync(h)}catch(e){}return function(){if(t&&(d()||t.isMaximized||t.isFullScreen)){if(d()&&t.displayBounds){var e=l.getDisplayMatching(t).bounds;s(t.displayBounds,e,{strict:!0})||(e.width<t.displayBounds.width&&(t.x>e.width&&(t.x=0),t.width>e.width&&(t.width=e.width)),e.height<t.displayBounds.height&&(t.y>e.height&&(t.y=0),t.height>e.height&&(t.height=e.height)))}}else t=null}(),t=Object.assign({width:p.defaultWidth||800,height:p.defaultHeight||600},t),{get x(){return t.x},get y(){return t.y},get width(){return t.width},get height(){return t.height},get isMaximized(){return t.isMaximized},get isFullScreen(){return t.isFullScreen},saveState:m,unmanage:S,manage:function(e){p.maximize&&t.isMaximized&&e.maximize(),p.fullScreen&&t.isFullScreen&&e.setFullScreen(!0),e.on("resize",g),e.on("move",g),e.on("close",v),e.on("closed",w),n=e}}}},function(e,t,n){"use strict";var r=n(3),o=r.app,i=r.BrowserWindow,c=r.Menu,s=n(16);o.setName("AFP News Deck");var u=void 0;function a(){var e=s({defaultWidth:1680,defaultHeight:1050});u=new i({x:e.x,y:e.y,width:e.width,height:e.height,titleBarStyle:"hidden",show:!1,backgroundColor:"#E1E8ED",icon:__dirname+"/mstile-144x144.png"}),e.manage(u),u.loadURL("file:///"+__dirname+"/index.html"),u.once("ready-to-show",function(){u.show(),u.focus()}),u.webContents.on("did-finish-load",function(){u.webContents.insertCSS("#afpdeck {\n        -webkit-app-region: drag;\n      }\n      #columns {\n        -webkit-app-region: no-drag;\n      }\n      #sidebar {\n        padding-top: 25px !important;\n        min-width: 68px !important;\n      }\n      .modal-mask.document,.modal-mask.login,.modal-mask.credits {\n        left: 69px !important;\n      }")}),u.on("closed",function(){u=null});var t=[{label:"Edit",submenu:[{role:"undo"},{role:"redo"},{type:"separator"},{role:"cut"},{role:"copy"},{role:"paste"},{role:"pasteandmatchstyle"},{role:"delete"},{role:"selectall"}]},{label:"View",submenu:[{role:"reload"},{role:"forcereload"},{role:"toggledevtools"},{type:"separator"},{role:"resetzoom"},{role:"zoomin"},{role:"zoomout"},{type:"separator"},{role:"togglefullscreen"}]},{role:"window",submenu:[{role:"minimize"},{role:"close"}]}];"darwin"===process.platform&&(t.unshift({label:o.getName(),submenu:[{role:"about"},{type:"separator"},{role:"services",submenu:[]},{type:"separator"},{role:"hide"},{role:"hideothers"},{role:"unhide"},{type:"separator"},{role:"quit"}]}),t[1].submenu.push({type:"separator"},{label:"Speech",submenu:[{role:"startspeaking"},{role:"stopspeaking"}]}),t[3].submenu=[{role:"close"},{role:"minimize"},{role:"zoom"},{type:"separator"},{role:"front"}]),c.setApplicationMenu(c.buildFromTemplate(t))}o.on("ready",a),o.on("window-all-closed",function(){"darwin"!==process.platform&&o.quit()}),o.on("activate",function(){null===u&&a()})}]);