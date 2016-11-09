/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.2 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */

var requirejs,require,define;!function(global,setTimeout){function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,s){!n&&hasProp(e,s)||(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[s]=t:(e[s]||(e[s]={}),mixin(e[s],t,n,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function t(e){var t,n;for(t=0;t<e.length;t++)if(n=e[t],"."===n)e.splice(t,1),t-=1;else if(".."===n){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function n(e,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m=n&&n.split("/"),g=x.map,y=g&&g["*"];if(e&&(e=e.split("/"),l=e.length-1,x.nodeIdCompat&&jsSuffixRegExp.test(e[l])&&(e[l]=e[l].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&m&&(v=m.slice(0,m.length-1),e=v.concat(e)),t(e),e=e.join("/")),r&&g&&(m||y)){o=e.split("/");e:for(u=o.length;u>0;u-=1){if(f=o.slice(0,u).join("/"),m)for(a=m.length;a>0;a-=1)if(s=getOwn(g,m.slice(0,a).join("/")),s&&(s=getOwn(s,f))){c=s,h=u;break e}!p&&y&&getOwn(y,f)&&(p=getOwn(y,f),d=u)}!c&&p&&(c=p,h=d),c&&(o.splice(0,h,c),e=o.join("/"))}return i=getOwn(x.pkgs,e),i?i:e}function r(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===w.contextName)return t.parentNode.removeChild(t),!0})}function i(e){var t=getOwn(x.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),w.require.undef(e),w.makeRequire(null,{skipMap:!0})([e]),!0}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function o(e,t,r,i){var o,u,a,f,l=null,c=t?t.name:null,h=e,p=!0,d="";return e||(p=!1,e="_@r"+(M+=1)),f=s(e),l=f[0],e=f[1],l&&(l=n(l,c,i),u=getOwn(L,l)),e&&(l?d=u&&u.normalize?u.normalize(e,function(e){return n(e,c,i)}):e.indexOf("!")===-1?n(e,c,i):e:(d=n(e,c,i),f=s(d),l=f[0],d=f[1],r=!0,o=w.nameToUrl(d))),a=!l||u||r?"":"_unnormalized"+(_+=1),{prefix:l,name:d,parentMap:t,unnormalized:!!a,url:o,originalName:h,isDefine:p,id:(l?l+"!"+d:d)+a}}function u(e){var t=e.id,n=getOwn(T,t);return n||(n=T[t]=new w.Module(e)),n}function a(e,t,n){var r=e.id,i=getOwn(T,r);!hasProp(L,r)||i&&!i.defineEmitComplete?(i=u(e),i.error&&"error"===t?n(i.error):i.on(t,n)):"defined"===t&&n(L[r])}function f(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=getOwn(T,t);n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function l(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(w.defQueueMap[t]=!0),k.push(e)}),globalDefQueue=[])}function c(e){delete T[e],delete N[e]}function h(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var s=r.id,o=getOwn(T,s);!o||e.depMatched[i]||n[s]||(getOwn(t,s)?(e.defineDep(i,L[s]),e.check()):h(o,t,n))}),n[r]=!0)}function p(){var e,t,n=1e3*x.waitSeconds,s=n&&w.startTime+n<(new Date).getTime(),o=[],u=[],a=!1,l=!0;if(!y){if(y=!0,eachProp(N,function(e){var n=e.map,f=n.id;if(e.enabled&&(n.isDefine||u.push(e),!e.error))if(!e.inited&&s)i(f)?(t=!0,a=!0):(o.push(f),r(f));else if(!e.inited&&e.fetched&&n.isDefine&&(a=!0,!n.prefix))return l=!1}),s&&o.length)return e=makeError("timeout","Load timeout for modules: "+o,null,o),e.contextName=w.contextName,f(e);l&&each(u,function(e){h(e,{},{})}),s&&!t||!a||!isBrowser&&!isWebWorker||S||(S=setTimeout(function(){S=0,p()},50)),y=!1}}function d(e){hasProp(L,e[0])||u(o(e[0],null,!0)).init(e[1],e[2])}function v(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function m(e){var t=e.currentTarget||e.srcElement;return v(t,w.onScriptLoad,"load","onreadystatechange"),v(t,w.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function g(){var e;for(l();k.length;){if(e=k.shift(),null===e[0])return f(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));d(e)}w.defQueueMap={}}var y,b,w,E,S,x={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},T={},N={},C={},k=[],L={},A={},O={},M=1,_=1;return E={require:function(e){return e.require?e.require:e.require=w.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?L[e.map.id]=e.exports:e.exports=L[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(x.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},b=function(e){this.events=getOwn(C,e.id)||{},this.map=e,this.shim=getOwn(x.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,n,r){r=r||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var e=this.map;return this.shim?void w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;A[e]||(A[e]=!0,w.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,r=this.depExports,i=this.exports,s=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(s)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{i=w.execCb(n,s,r,i)}catch(t){e=t}else i=w.execCb(n,s,r,i);if(this.map.isDefine&&void 0===i&&(t=this.module,t?i=t.exports:this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",f(this.error=e)}else i=s;if(this.exports=i,this.map.isDefine&&!this.ignore&&(L[n]=i,req.onResourceLoad)){var o=[];each(this.depMaps,function(e){o.push(e.normalizedMap||e)}),req.onResourceLoad(w,this.map,o)}c(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(w.defQueueMap,n)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=o(e.prefix);this.depMaps.push(r),a(r,"defined",bind(this,function(r){var i,s,l,h=getOwn(O,this.map.id),p=this.map.name,d=this.map.parentMap?this.map.parentMap.name:null,v=w.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(p=r.normalize(p,function(e){return n(e,d,!0)})||""),s=o(e.prefix+"!"+p,this.map.parentMap),a(s,"defined",bind(this,function(e){this.map.normalizedMap=s,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),l=getOwn(T,s.id),void (l&&(this.depMaps.push(s),this.events.error&&l.on("error",bind(this,function(e){this.emit("error",e)})),l.enable()))):h?(this.map.url=w.nameToUrl(h),void this.load()):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(T,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&c(e.map.id)}),f(e)}),i.fromText=bind(this,function(e,n){var r=l.name,s=o(r),a=useInteractive;n&&(e=n),a&&(useInteractive=!1),u(s),hasProp(x.config,t)&&(x.config[r]=x.config[t]);try{req.exec(e)}catch(l){return f(makeError("fromtexteval","fromText eval for "+t+" failed: "+l,l,[t]))}a&&(useInteractive=!0),this.depMaps.push(s),w.completeLoad(r),v([r],i)}),void r.load(e.name,v,i,x))})),w.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){N[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,r,i;if("string"==typeof e){if(e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,i=getOwn(E,e.id))return void (this.depExports[t]=i(this));this.depCount+=1,a(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?a(e,"error",bind(this,this.errback)):this.events.error&&a(e,"error",bind(this,function(e){this.emit("error",e)}))}n=e.id,r=T[n],hasProp(E,n)||!r||r.enabled||w.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(T,e.id);t&&!t.enabled&&w.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},w={config:x,contextName:e,registry:T,defined:L,urlFetched:A,defQueue:k,defQueueMap:{},Module:b,makeModuleMap:o,nextTick:req.nextTick,onError:f,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,n){return(n.indexOf("?")===-1?"?":"&")+t}}var n=x.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){r[t]?(x[t]||(x[t]={}),mixin(x[t],e,!0,!0)):x[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(O[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=w.makeShimExports(e)),n[t]=e}),x.shim=n),e.packages&&each(e.packages,function(e){var t,n;e="string"==typeof e?{name:e}:e,n=e.name,t=e.location,t&&(x.paths[n]=e.location),x.pkgs[n]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(T,function(e,t){e.inited||e.map.unnormalized||(e.map=o(t,null,!0))}),(e.deps||e.callback)&&w.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,i){function s(n,r,a){var l,c,h;return i.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof n?isFunction(r)?f(makeError("requireargs","Invalid require call"),a):t&&hasProp(E,n)?E[n](T[t.id]):req.get?req.get(w,n,t,s):(c=o(n,t,!1,!0),l=c.id,hasProp(L,l)?L[l]:f(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(g(),w.nextTick(function(){g(),h=u(o(null,t)),h.skipMap=i.skipMap,h.init(n,r,a,{enabled:!0}),p()}),s)}return i=i||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var r,i=e.lastIndexOf("."),s=e.split("/")[0],o="."===s||".."===s;return i!==-1&&(!o||i>1)&&(r=e.substring(i,e.length),e=e.substring(0,i)),w.nameToUrl(n(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(L,o(e,t,!1,!0).id)},specified:function(e){return e=o(e,t,!1,!0).id,hasProp(L,e)||hasProp(T,e)}}),t||(s.undef=function(e){l();var n=o(e,t,!0),i=getOwn(T,e);i.undefed=!0,r(e),delete L[e],delete A[n.url],delete C[e],eachReverse(k,function(t,n){t[0]===e&&k.splice(n,1)}),delete w.defQueueMap[e],i&&(i.events.defined&&(C[e]=i.events),c(e))}),s},enable:function(e){var t=getOwn(T,e.id);t&&u(e).enable()},completeLoad:function(e){var t,n,r,s=getOwn(x.shim,e)||{},o=s.exports;for(l();k.length;){if(n=k.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);d(n)}if(w.defQueueMap={},r=getOwn(T,e),!t&&!hasProp(L,e)&&r&&!r.inited){if(!(!x.enforceDefine||o&&getGlobal(o)))return i(e)?void 0:f(makeError("nodefine","No define call for "+e,null,[e]));d([e,s.deps||[],s.exportsFn])}p()},nameToUrl:function(e,t,n){var r,i,s,o,u,a,f,l=getOwn(x.pkgs,e);if(l&&(e=l),f=getOwn(O,e))return w.nameToUrl(f,t,n);if(req.jsExtRegExp.test(e))u=e+(t||"");else{for(r=x.paths,i=e.split("/"),s=i.length;s>0;s-=1)if(o=i.slice(0,s).join("/"),a=getOwn(r,o)){isArray(a)&&(a=a[0]),i.splice(0,s,a);break}u=i.join("/"),u+=t||(/^data\:|^blob\:|\?/.test(u)||n?"":".js"),u=("/"===u.charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":x.baseUrl)+u}return x.urlArgs&&!/^blob\:/.test(u)?u+x.urlArgs(e,u):u},load:function(e,t){req.load(w,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=m(e);w.completeLoad(t.id)}},onScriptError:function(e){var t=m(e);if(!i(t.id)){var n=[];return eachProp(T,function(e,r){0!==r.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===t.id)return n.push(r),!0})}),f(makeError("scripterror",'Script error for "'+t.id+(n.length?'", needed by: '+n.join(", "):'"'),e,[t.id]))}}},w.require=w.makeRequire(),w}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.2",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser="undefined"!=typeof window&&"undefined"!=typeof navigator&&!!window.document,isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,n,r){var i,s,o=defContextName;return isArray(e)||"string"==typeof e||(s=e,isArray(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),i=getOwn(contexts,o),i||(i=contexts[o]=req.s.newContext(o)),s&&i.configure(s),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,n){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,n){var r,i=e&&e.config||{};if(isBrowser)return r=req.createNode(i,t,n),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=n,i.onNodeCreated&&i.onNodeCreated(r,i,t,n),currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{setTimeout(function(){},0),importScripts(n),e.completeLoad(t)}catch(r){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,r,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||mainScript.indexOf("!")!==-1||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,n){var r,i;"string"!=typeof e&&(n=t,t=e,e=null),isArray(t)||(n=t,t=null),!t&&isFunction(n)&&(t=[],n.length&&(n.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),i?(i.defQueue.push([e,t,n]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);