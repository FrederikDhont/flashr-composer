(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=a(f);fetch(f.href,d)}})();function am(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var us={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function lm(){if(sg)return ri;sg=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,f,d){var m=null;if(d!==void 0&&(m=""+d),f.key!==void 0&&(m=""+f.key),"key"in f){d={};for(var D in f)D!=="key"&&(d[D]=f[D])}else d=f;return f=d.ref,{$$typeof:s,type:o,key:m,ref:f!==void 0?f:null,props:d}}return ri.Fragment=r,ri.jsx=a,ri.jsxs=a,ri}var cg;function im(){return cg||(cg=1,us.exports=lm()),us.exports}var K=im(),rs={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function um(){if(fg)return ye;fg=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.iterator;function O(v){return v===null||typeof v!="object"?null:(v=z&&v[z]||v["@@iterator"],typeof v=="function"?v:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function F(v,H,Z){this.props=v,this.context=H,this.refs=Y,this.updater=Z||k}F.prototype.isReactComponent={},F.prototype.setState=function(v,H){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,H,"setState")},F.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Ee(){}Ee.prototype=F.prototype;function fe(v,H,Z){this.props=v,this.context=H,this.refs=Y,this.updater=Z||k}var me=fe.prototype=new Ee;me.constructor=fe,G(me,F.prototype),me.isPureReactComponent=!0;var Te=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function W(v,H,Z,X,ae,be){return Z=be.ref,{$$typeof:s,type:v,key:H,ref:Z!==void 0?Z:null,props:be}}function ie(v,H){return W(v.type,H,void 0,void 0,void 0,v.props)}function Oe(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function ne(v){var H={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return H[Z]})}var P=/\/+/g;function ue(v,H){return typeof v=="object"&&v!==null&&v.key!=null?ne(""+v.key):H.toString(36)}function _e(){}function Be(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(_e,_e):(v.status="pending",v.then(function(H){v.status==="pending"&&(v.status="fulfilled",v.value=H)},function(H){v.status==="pending"&&(v.status="rejected",v.reason=H)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function we(v,H,Z,X,ae){var be=typeof v;(be==="undefined"||be==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(be){case"bigint":case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case s:case r:de=!0;break;case E:return de=v._init,we(de(v._payload),H,Z,X,ae)}}if(de)return ae=ae(v),de=X===""?"."+ue(v,0):X,Te(ae)?(Z="",de!=null&&(Z=de.replace(P,"$&/")+"/"),we(ae,H,Z,"",function(wt){return wt})):ae!=null&&(Oe(ae)&&(ae=ie(ae,Z+(ae.key==null||v&&v.key===ae.key?"":(""+ae.key).replace(P,"$&/")+"/")+de)),H.push(ae)),1;de=0;var at=X===""?".":X+":";if(Te(v))for(var Ae=0;Ae<v.length;Ae++)X=v[Ae],be=at+ue(X,Ae),de+=we(X,H,Z,be,ae);else if(Ae=O(v),typeof Ae=="function")for(v=Ae.call(v),Ae=0;!(X=v.next()).done;)X=X.value,be=at+ue(X,Ae++),de+=we(X,H,Z,be,ae);else if(be==="object"){if(typeof v.then=="function")return we(Be(v),H,Z,X,ae);throw H=String(v),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return de}function _(v,H,Z){if(v==null)return v;var X=[],ae=0;return we(v,X,"","",function(be){return H.call(Z,be,ae++)}),X}function V(v){if(v._status===-1){var H=v._result;H=H(),H.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=H)}if(v._status===1)return v._result.default;throw v._result}var te=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function B(){}return ye.Children={map:_,forEach:function(v,H,Z){_(v,function(){H.apply(this,arguments)},Z)},count:function(v){var H=0;return _(v,function(){H++}),H},toArray:function(v){return _(v,function(H){return H})||[]},only:function(v){if(!Oe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ye.Component=F,ye.Fragment=a,ye.Profiler=f,ye.PureComponent=fe,ye.StrictMode=o,ye.Suspense=b,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,ye.__COMPILER_RUNTIME={__proto__:null,c:function(v){return he.H.useMemoCache(v)}},ye.cache=function(v){return function(){return v.apply(null,arguments)}},ye.cloneElement=function(v,H,Z){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var X=G({},v.props),ae=v.key,be=void 0;if(H!=null)for(de in H.ref!==void 0&&(be=void 0),H.key!==void 0&&(ae=""+H.key),H)!Ce.call(H,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&H.ref===void 0||(X[de]=H[de]);var de=arguments.length-2;if(de===1)X.children=Z;else if(1<de){for(var at=Array(de),Ae=0;Ae<de;Ae++)at[Ae]=arguments[Ae+2];X.children=at}return W(v.type,ae,void 0,void 0,be,X)},ye.createContext=function(v){return v={$$typeof:m,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:d,_context:v},v},ye.createElement=function(v,H,Z){var X,ae={},be=null;if(H!=null)for(X in H.key!==void 0&&(be=""+H.key),H)Ce.call(H,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ae[X]=H[X]);var de=arguments.length-2;if(de===1)ae.children=Z;else if(1<de){for(var at=Array(de),Ae=0;Ae<de;Ae++)at[Ae]=arguments[Ae+2];ae.children=at}if(v&&v.defaultProps)for(X in de=v.defaultProps,de)ae[X]===void 0&&(ae[X]=de[X]);return W(v,be,void 0,void 0,null,ae)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(v){return{$$typeof:D,render:v}},ye.isValidElement=Oe,ye.lazy=function(v){return{$$typeof:E,_payload:{_status:-1,_result:v},_init:V}},ye.memo=function(v,H){return{$$typeof:y,type:v,compare:H===void 0?null:H}},ye.startTransition=function(v){var H=he.T,Z={};he.T=Z;try{var X=v(),ae=he.S;ae!==null&&ae(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(B,te)}catch(be){te(be)}finally{he.T=H}},ye.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},ye.use=function(v){return he.H.use(v)},ye.useActionState=function(v,H,Z){return he.H.useActionState(v,H,Z)},ye.useCallback=function(v,H){return he.H.useCallback(v,H)},ye.useContext=function(v){return he.H.useContext(v)},ye.useDebugValue=function(){},ye.useDeferredValue=function(v,H){return he.H.useDeferredValue(v,H)},ye.useEffect=function(v,H,Z){var X=he.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(v,H)},ye.useId=function(){return he.H.useId()},ye.useImperativeHandle=function(v,H,Z){return he.H.useImperativeHandle(v,H,Z)},ye.useInsertionEffect=function(v,H){return he.H.useInsertionEffect(v,H)},ye.useLayoutEffect=function(v,H){return he.H.useLayoutEffect(v,H)},ye.useMemo=function(v,H){return he.H.useMemo(v,H)},ye.useOptimistic=function(v,H){return he.H.useOptimistic(v,H)},ye.useReducer=function(v,H,Z){return he.H.useReducer(v,H,Z)},ye.useRef=function(v){return he.H.useRef(v)},ye.useState=function(v){return he.H.useState(v)},ye.useSyncExternalStore=function(v,H,Z){return he.H.useSyncExternalStore(v,H,Z)},ye.useTransition=function(){return he.H.useTransition()},ye.version="19.1.0",ye}var dg;function Ms(){return dg||(dg=1,rs.exports=um()),rs.exports}var Le=Ms(),os={exports:{}},oi={},ss={exports:{}},cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function rm(){return gg||(gg=1,function(s){function r(_,V){var te=_.length;_.push(V);e:for(;0<te;){var B=te-1>>>1,v=_[B];if(0<f(v,V))_[B]=V,_[te]=v,te=B;else break e}}function a(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var V=_[0],te=_.pop();if(te!==V){_[0]=te;e:for(var B=0,v=_.length,H=v>>>1;B<H;){var Z=2*(B+1)-1,X=_[Z],ae=Z+1,be=_[ae];if(0>f(X,te))ae<v&&0>f(be,X)?(_[B]=be,_[ae]=te,B=ae):(_[B]=X,_[Z]=te,B=Z);else if(ae<v&&0>f(be,te))_[B]=be,_[ae]=te,B=ae;else break e}}return V}function f(_,V){var te=_.sortIndex-V.sortIndex;return te!==0?te:_.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var m=Date,D=m.now();s.unstable_now=function(){return m.now()-D}}var b=[],y=[],E=1,z=null,O=3,k=!1,G=!1,Y=!1,F=!1,Ee=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function Te(_){for(var V=a(y);V!==null;){if(V.callback===null)o(y);else if(V.startTime<=_)o(y),V.sortIndex=V.expirationTime,r(b,V);else break;V=a(y)}}function he(_){if(Y=!1,Te(_),!G)if(a(b)!==null)G=!0,Ce||(Ce=!0,ue());else{var V=a(y);V!==null&&we(he,V.startTime-_)}}var Ce=!1,W=-1,ie=5,Oe=-1;function ne(){return F?!0:!(s.unstable_now()-Oe<ie)}function P(){if(F=!1,Ce){var _=s.unstable_now();Oe=_;var V=!0;try{e:{G=!1,Y&&(Y=!1,fe(W),W=-1),k=!0;var te=O;try{t:{for(Te(_),z=a(b);z!==null&&!(z.expirationTime>_&&ne());){var B=z.callback;if(typeof B=="function"){z.callback=null,O=z.priorityLevel;var v=B(z.expirationTime<=_);if(_=s.unstable_now(),typeof v=="function"){z.callback=v,Te(_),V=!0;break t}z===a(b)&&o(b),Te(_)}else o(b);z=a(b)}if(z!==null)V=!0;else{var H=a(y);H!==null&&we(he,H.startTime-_),V=!1}}break e}finally{z=null,O=te,k=!1}V=void 0}}finally{V?ue():Ce=!1}}}var ue;if(typeof me=="function")ue=function(){me(P)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Be=_e.port2;_e.port1.onmessage=P,ue=function(){Be.postMessage(null)}}else ue=function(){Ee(P,0)};function we(_,V){W=Ee(function(){_(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(_){_.callback=null},s.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<_?Math.floor(1e3/_):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(_){switch(O){case 1:case 2:case 3:var V=3;break;default:V=O}var te=O;O=V;try{return _()}finally{O=te}},s.unstable_requestPaint=function(){F=!0},s.unstable_runWithPriority=function(_,V){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var te=O;O=_;try{return V()}finally{O=te}},s.unstable_scheduleCallback=function(_,V,te){var B=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?B+te:B):te=B,_){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=te+v,_={id:E++,callback:V,priorityLevel:_,startTime:te,expirationTime:v,sortIndex:-1},te>B?(_.sortIndex=te,r(y,_),a(b)===null&&_===a(y)&&(Y?(fe(W),W=-1):Y=!0,we(he,te-B))):(_.sortIndex=v,r(b,_),G||k||(G=!0,Ce||(Ce=!0,ue()))),_},s.unstable_shouldYield=ne,s.unstable_wrapCallback=function(_){var V=O;return function(){var te=O;O=V;try{return _.apply(this,arguments)}finally{O=te}}}}(cs)),cs}var hg;function om(){return hg||(hg=1,ss.exports=rm()),ss.exports}var fs={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function sm(){if(pg)return pt;pg=1;var s=Ms();function r(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,y,E){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:z==null?null:""+z,children:b,containerInfo:y,implementation:E}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,pt.createPortal=function(b,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return d(b,y,null,E)},pt.flushSync=function(b){var y=m.T,E=o.p;try{if(m.T=null,o.p=2,b)return b()}finally{m.T=y,o.p=E,o.d.f()}},pt.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(b,y))},pt.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},pt.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var E=y.as,z=D(E,y.crossOrigin),O=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?o.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:z,integrity:O,fetchPriority:k}):E==="script"&&o.d.X(b,{crossOrigin:z,integrity:O,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},pt.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=D(y.as,y.crossOrigin);o.d.M(b,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(b)},pt.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,z=D(E,y.crossOrigin);o.d.L(b,E,{crossOrigin:z,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},pt.preloadModule=function(b,y){if(typeof b=="string")if(y){var E=D(y.as,y.crossOrigin);o.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(b)},pt.requestFormReset=function(b){o.d.r(b)},pt.unstable_batchedUpdates=function(b,y){return b(y)},pt.useFormState=function(b,y,E){return m.H.useFormState(b,y,E)},pt.useFormStatus=function(){return m.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var mg;function cm(){if(mg)return fs.exports;mg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),fs.exports=sm(),fs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function fm(){if(yg)return oi;yg=1;var s=om(),r=Ms(),a=cm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(d(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return D(i),e;if(u===l)return D(i),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=u;else{for(var c=!1,g=i.child;g;){if(g===n){c=!0,n=i,l=u;break}if(g===l){c=!0,l=i,n=u;break}g=g.sibling}if(!c){for(g=u.child;g;){if(g===n){c=!0,n=u,l=i;break}if(g===l){c=!0,l=u,n=i;break}g=g.sibling}if(!c)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,z=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),fe=Symbol.for("react.consumer"),me=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),Oe=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function Be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case F:return"Profiler";case Y:return"StrictMode";case he:return"Suspense";case Ce:return"SuspenseList";case Oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case me:return(e.displayName||"Context")+".Provider";case fe:return(e._context.displayName||"Context")+".Consumer";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Be(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return Be(e(t))}catch{}}return null}var we=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},B=[],v=-1;function H(e){return{current:e}}function Z(e){0>v||(e.current=B[v],B[v]=null,v--)}function X(e,t){v++,B[v]=e.current,e.current=t}var ae=H(null),be=H(null),de=H(null),at=H(null);function Ae(e,t){switch(X(de,t),X(be,e),X(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ae),X(ae,e)}function wt(){Z(ae),Z(be),Z(de)}function dl(e){e.memoizedState!==null&&X(at,e);var t=ae.current,n=Yd(t,e.type);t!==n&&(X(be,e),X(ae,n))}function In(e){be.current===e&&(Z(ae),Z(be)),at.current===e&&(Z(at),ni._currentValue=te)}var wn=Object.prototype.hasOwnProperty,gl=s.unstable_scheduleCallback,hl=s.unstable_cancelCallback,xi=s.unstable_shouldYield,Zu=s.unstable_requestPaint,Mt=s.unstable_now,Si=s.unstable_getCurrentPriorityLevel,Pn=s.unstable_ImmediatePriority,Di=s.unstable_UserBlockingPriority,Da=s.unstable_NormalPriority,Ei=s.unstable_LowPriority,Ea=s.unstable_IdlePriority,Ti=s.log,Ta=s.unstable_setDisableYieldValue,ea=null,ft=null;function It(e){if(typeof Ti=="function"&&Ta(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ea,e)}catch{}}var dt=Math.clz32?Math.clz32:wi,Ju=Math.log,Fu=Math.LN2;function wi(e){return e>>>=0,e===0?32:31-(Ju(e)/Fu|0)|0}var wa=256,Ma=4194304;function Re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,u=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~u,l!==0?i=Re(l):(c&=g,c!==0?i=Re(c):n||(n=g&~e,n!==0&&(i=Re(n))))):(g=l&~u,g!==0?i=Re(g):c!==0?i=Re(c):n||(n=l&~e,n!==0&&(i=Re(n)))),i===0?0:t!==0&&t!==i&&(t&u)===0&&(u=i&-i,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:i}function on(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $u(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ta(){var e=wa;return wa<<=1,(wa&4194048)===0&&(wa=256),e}function Oa(){var e=Ma;return Ma<<=1,(Ma&62914560)===0&&(Ma=4194304),e}function Ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wu(e,t,n,l,i,u){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(n=c&~n;0<n;){var L=31-dt(n),U=1<<L;g[L]=0,x[L]=-1;var A=C[L];if(A!==null)for(C[L]=null,L=0;L<A.length;L++){var N=A[L];N!==null&&(N.lane&=-536870913)}n&=~U}l!==0&&h(e,l,0),u!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=u&~(c&~t))}function h(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function p(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-dt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function T(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function R(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function q(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:ag(e.type))}function J(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var se=Math.random().toString(36).slice(2),Q="__reactFiber$"+se,le="__reactProps$"+se,$="__reactContainer$"+se,re="__reactEvents$"+se,je="__reactListeners$"+se,Ut="__reactHandles$"+se,gt="__reactResources$"+se,Jt="__reactMarker$"+se;function Pt(e){delete e[Q],delete e[le],delete e[re],delete e[je],delete e[Ut]}function On(e){var t=e[Q];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$]||n[Q]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[Q])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function en(e){if(e=e[Q]||e[$]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Cn(e){var t=e[gt];return t||(t=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Jt]=!0}var Mi=new Set,Oi={};function sn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(Oi[e]=t,e=0;e<t.length;e++)Mi.add(t[e])}var Iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},Cs={};function $g(e){return wn.call(Cs,e)?!0:wn.call(Os,e)?!1:Iu.test(e)?Cs[e]=!0:(Os[e]=!0,!1)}function Ci(e,t,n){if($g(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ai(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Pu,As;function Ca(e){if(Pu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pu=t&&t[1]||"",As=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pu+e+As}var er=!1;function tr(e,t){if(!e||er)return"";er=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(N){var A=N}Reflect.construct(e,[],U)}else{try{U.call()}catch(N){A=N}e.call(U.prototype)}}else{try{throw Error()}catch(N){A=N}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(N){if(N&&A&&typeof N.stack=="string")return[N.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),c=u[0],g=u[1];if(c&&g){var x=c.split(`
`),C=g.split(`
`);for(i=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(l===x.length||i===C.length)for(l=x.length-1,i=C.length-1;1<=l&&0<=i&&x[l]!==C[i];)i--;for(;1<=l&&0<=i;l--,i--)if(x[l]!==C[i]){if(l!==1||i!==1)do if(l--,i--,0>i||x[l]!==C[i]){var L=`
`+x[l].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=l&&0<=i);break}}}finally{er=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ca(n):""}function Wg(e){switch(e.tag){case 26:case 27:case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return tr(e.type,!1);case 11:return tr(e.type.render,!1);case 1:return tr(e.type,!0);case 31:return Ca("Activity");default:return""}}function Ns(e){try{var t="";do t+=Wg(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ig(e){var t=_s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=Ig(e))}function Rs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=_s(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pg=/[\n"\\]/g;function Bt(e){return e.replace(Pg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function nr(e,t,n,l,i,u,c,g){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ar(e,c,Yt(t)):n!=null?ar(e,c,Yt(n)):l!=null&&e.removeAttribute("value"),i==null&&u!=null&&(e.defaultChecked=!!u),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Yt(g):e.removeAttribute("name")}function zs(e,t,n,l,i,u,c,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function ar(e,t,n){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Aa(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hs(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function Ls(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(we(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function js(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||eh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Us(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&js(e,i,l)}else for(var u in t)t.hasOwnProperty(u)&&js(e,u,t[u])}function lr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ir=null;function ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Ra=null;function Ys(e){var t=en(e);if(t&&(e=t.stateNode)){var n=e[le]||null;e:switch(e=t.stateNode,t.type){case"input":if(nr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[le]||null;if(!i)throw Error(o(90));nr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Rs(l)}break e;case"textarea":Hs(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}}}var rr=!1;function Bs(e,t,n){if(rr)return e(t,n);rr=!0;try{var l=e(t);return l}finally{if(rr=!1,(_a!==null||Ra!==null)&&(yu(),_a&&(t=_a,e=Ra,Ra=_a=null,Ys(t),e)))for(t=0;t<e.length;t++)Ys(e[t])}}function pl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[le]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(fn)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){or=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{or=!1}var Nn=null,sr=null,zi=null;function qs(){if(zi)return zi;var e,t=sr,n=t.length,l,i="value"in Nn?Nn.value:Nn.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(l=1;l<=c&&t[n-l]===i[u-l];l++);return zi=i.slice(e,1<l?1-l:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function ks(){return!1}function xt(e){function t(n,l,i,u,c){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Li:ks,this.isPropagationStopped=ks,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=xt(la),yl=E({},la,{view:0,detail:0}),ah=xt(yl),cr,fr,vl,Ui=E({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(cr=e.screenX-vl.screenX,fr=e.screenY-vl.screenY):fr=cr=0,vl=e),cr)},movementY:function(e){return"movementY"in e?e.movementY:fr}}),Gs=xt(Ui),lh=E({},Ui,{dataTransfer:0}),ih=xt(lh),uh=E({},yl,{relatedTarget:0}),dr=xt(uh),rh=E({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=xt(rh),sh=E({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ch=xt(sh),fh=E({},la,{data:0}),Vs=xt(fh),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function gr(){return ph}var mh=E({},yl,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gr,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=xt(mh),vh=E({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=xt(vh),bh=E({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gr}),xh=xt(bh),Sh=E({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=xt(Sh),Eh=E({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=xt(Eh),wh=E({},la,{newState:0,oldState:0}),Mh=xt(wh),Oh=[9,13,27,32],hr=fn&&"CompositionEvent"in window,bl=null;fn&&"documentMode"in document&&(bl=document.documentMode);var Ch=fn&&"TextEvent"in window&&!bl,Qs=fn&&(!hr||bl&&8<bl&&11>=bl),Ks=" ",Zs=!1;function Js(e,t){switch(e){case"keyup":return Oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Ah(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(Zs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Zs?null:e;default:return null}}function Nh(e,t){if(za)return e==="compositionend"||!hr&&Js(e,t)?(e=qs(),zi=sr=Nn=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function Ws(e,t,n,l){_a?Ra?Ra.push(l):Ra=[l]:_a=l,t=Eu(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var xl=null,Sl=null;function Rh(e){Rd(e,0)}function Yi(e){var t=aa(e);if(Rs(t))return e}function Is(e,t){if(e==="change")return t}var Ps=!1;if(fn){var pr;if(fn){var mr="oninput"in document;if(!mr){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),mr=typeof ec.oninput=="function"}pr=mr}else pr=!1;Ps=pr&&(!document.documentMode||9<document.documentMode)}function tc(){xl&&(xl.detachEvent("onpropertychange",nc),Sl=xl=null)}function nc(e){if(e.propertyName==="value"&&Yi(Sl)){var t=[];Ws(t,Sl,e,ur(e)),Bs(Rh,t)}}function zh(e,t,n){e==="focusin"?(tc(),xl=t,Sl=n,xl.attachEvent("onpropertychange",nc)):e==="focusout"&&tc()}function Hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Sl)}function Lh(e,t){if(e==="click")return Yi(t)}function jh(e,t){if(e==="input"||e==="change")return Yi(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Uh;function Dl(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!wn.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=ac(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yh=fn&&"documentMode"in document&&11>=document.documentMode,Ha=null,vr=null,El=null,br=!1;function rc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;br||Ha==null||Ha!==_i(l)||(l=Ha,"selectionStart"in l&&yr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),El&&Dl(El,l)||(El=l,l=Eu(vr,"onSelect"),0<l.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ha)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var La={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},xr={},oc={};fn&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ua(e){if(xr[e])return xr[e];if(!La[e])return e;var t=La[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oc)return xr[e]=t[n];return e}var sc=ua("animationend"),cc=ua("animationiteration"),fc=ua("animationstart"),Bh=ua("transitionrun"),qh=ua("transitionstart"),kh=ua("transitioncancel"),dc=ua("transitionend"),gc=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sr.push("scrollEnd");function Ft(e,t){gc.set(e,t),sn(t,[e])}var hc=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=hc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ns(t)},hc.set(e,t),t)}return{value:e,source:t,stack:Ns(t)}}var kt=[],ja=0,Dr=0;function Bi(){for(var e=ja,t=Dr=ja=0;t<e;){var n=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var i=kt[t];kt[t++]=null;var u=kt[t];if(kt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}u!==0&&pc(n,i,u)}}function qi(e,t,n,l){kt[ja++]=e,kt[ja++]=t,kt[ja++]=n,kt[ja++]=l,Dr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Er(e,t,n,l){return qi(e,t,n,l),ki(e)}function Ua(e,t){return qi(e,null,null,t),ki(e)}function pc(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(i=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,i&&t!==null&&(i=31-dt(n),e=u.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),u):null}function ki(e){if(50<Jl)throw Jl=0,No=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ya={};function Gh(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,l){return new Gh(e,t,n,l)}function Tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,n,l,i,u){var c=0;if(l=e,typeof e=="function")Tr(e)&&(c=1);else if(typeof e=="string")c=Xp(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Oe:return e=At(31,n,t,i),e.elementType=Oe,e.lanes=u,e;case G:return ra(n.children,i,u,t);case Y:c=8,i|=24;break;case F:return e=At(12,n,t,i|2),e.elementType=F,e.lanes=u,e;case he:return e=At(13,n,t,i),e.elementType=he,e.lanes=u,e;case Ce:return e=At(19,n,t,i),e.elementType=Ce,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:case me:c=10;break e;case fe:c=9;break e;case Te:c=11;break e;case W:c=14;break e;case ie:c=16,l=null;break e}c=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=At(c,n,t,i),t.elementType=e,t.type=l,t.lanes=u,t}function ra(e,t,n,l){return e=At(7,e,l,t),e.lanes=n,e}function wr(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Mr(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ba=[],qa=0,Vi=null,Xi=0,Gt=[],Vt=0,oa=null,gn=1,hn="";function sa(e,t){Ba[qa++]=Xi,Ba[qa++]=Vi,Vi=e,Xi=t}function yc(e,t,n){Gt[Vt++]=gn,Gt[Vt++]=hn,Gt[Vt++]=oa,oa=e;var l=gn;e=hn;var i=32-dt(l)-1;l&=~(1<<i),n+=1;var u=32-dt(t)+i;if(30<u){var c=i-i%5;u=(l&(1<<c)-1).toString(32),l>>=c,i-=c,gn=1<<32-dt(t)+i|n<<i|l,hn=u+e}else gn=1<<u|n<<i|l,hn=e}function Or(e){e.return!==null&&(sa(e,1),yc(e,1,0))}function Cr(e){for(;e===Vi;)Vi=Ba[--qa],Ba[qa]=null,Xi=Ba[--qa],Ba[qa]=null;for(;e===oa;)oa=Gt[--Vt],Gt[Vt]=null,hn=Gt[--Vt],Gt[Vt]=null,gn=Gt[--Vt],Gt[Vt]=null}var vt=null,Ze=null,ze=!1,ca=null,tn=!1,Ar=Error(o(519));function fa(e){var t=Error(o(418,""));throw Ml(qt(t,e)),Ar}function vc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Q]=e,t[le]=l,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<$l.length;n++)De($l[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),zs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ni(t);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),Ls(t,l.value,l.defaultValue,l.children),Ni(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||jd(t.textContent,n)?(l.popover!=null&&(De("beforetoggle",t),De("toggle",t)),l.onScroll!=null&&De("scroll",t),l.onScrollEnd!=null&&De("scrollend",t),l.onClick!=null&&(t.onclick=Tu),t=!0):t=!1,t||fa(e)}function bc(e){for(vt=e.return;vt;)switch(vt.tag){case 5:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:vt=vt.return}}function Tl(e){if(e!==vt)return!1;if(!ze)return bc(e),ze=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ko(e.type,e.memoizedProps)),n=!n),n&&Ze&&fa(e),bc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ze=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ze=null}}else t===27?(t=Ze,Kn(e.type)?(e=$o,$o=null,Ze=e):Ze=t):Ze=vt?Wt(e.stateNode.nextSibling):null;return!0}function wl(){Ze=vt=null,ze=!1}function xc(){var e=ca;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),ca=null),e}function Ml(e){ca===null?ca=[e]:ca.push(e)}var Nr=H(null),da=null,pn=null;function _n(e,t,n){X(Nr,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=Nr.current,Z(Nr)}function _r(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){var c=i.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=i;for(var x=0;x<t.length;x++)if(g.context===t[x]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),_r(u.return,n,e),l||(c=null);break e}u=g.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(o(341));c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),_r(c,n,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Ol(e,t,n,l){e=null;for(var i=t,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var g=i.type;Ct(i.pendingProps.value,c.value)||(e!==null?e.push(g):e=[g])}}else if(i===at.current){if(c=i.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ni):e=[ni])}i=i.return}e!==null&&Rr(t,e,n,l),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){da=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Sc(da,e)}function Ki(e,t){return da===null&&ga(e),Sc(e,t)}function Sc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(o(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var Vh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Xh=s.unstable_scheduleCallback,Qh=s.unstable_NormalPriority,tt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Vh,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&Xh(Qh,function(){e.controller.abort()})}var Al=null,Hr=0,ka=0,Ga=null;function Kh(e,t){if(Al===null){var n=Al=[];Hr=0,ka=Uo(),Ga={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Hr++,t.then(Dc,Dc),t}function Dc(){if(--Hr===0&&Al!==null){Ga!==null&&(Ga.status="fulfilled");var e=Al;Al=null,ka=0,Ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zh(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var Ec=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kh(e,t),Ec!==null&&Ec(e,t)};var ha=H(null);function Lr(){var e=ha.current;return e!==null?e:Xe.pooledCache}function Zi(e,t){t===null?X(ha,ha.current):X(ha,t.pool)}function Tc(){var e=Lr();return e===null?null:{parent:tt._currentValue,pool:e}}var Nl=Error(o(460)),wc=Error(o(474)),Ji=Error(o(542)),jr={then:function(){}};function Mc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Oc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fi,Fi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ac(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ac(e),e}throw _l=t,Nl}}var _l=null;function Cc(){if(_l===null)throw Error(o(459));var e=_l;return _l=null,e}function Ac(e){if(e===Nl||e===Ji)throw Error(o(483))}var Rn=!1;function Ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=ki(e),pc(e,null,n),t}return qi(e,l,t,n),ki(e)}function Rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,p(e,n)}}function Br(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?i=u=c:u=u.next=c,n=n.next}while(n!==null);u===null?i=u=t:u=u.next=t}else i=u=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qr=!1;function zl(){if(qr){var e=Ga;if(e!==null)throw e}}function Hl(e,t,n,l){qr=!1;var i=e.updateQueue;Rn=!1;var u=i.firstBaseUpdate,c=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var x=g,C=x.next;x.next=null,c===null?u=C:c.next=C,c=x;var L=e.alternate;L!==null&&(L=L.updateQueue,g=L.lastBaseUpdate,g!==c&&(g===null?L.firstBaseUpdate=C:g.next=C,L.lastBaseUpdate=x))}if(u!==null){var U=i.baseState;c=0,L=C=x=null,g=u;do{var A=g.lane&-536870913,N=A!==g.lane;if(N?(Me&A)===A:(l&A)===A){A!==0&&A===ka&&(qr=!0),L!==null&&(L=L.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ge=e,oe=g;A=t;var Ge=n;switch(oe.tag){case 1:if(ge=oe.payload,typeof ge=="function"){U=ge.call(Ge,U,A);break e}U=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=oe.payload,A=typeof ge=="function"?ge.call(Ge,U,A):ge,A==null)break e;U=E({},U,A);break e;case 2:Rn=!0}}A=g.callback,A!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[A]:N.push(A))}else N={lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},L===null?(C=L=N,x=U):L=L.next=N,c|=A;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;N=g,g=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);L===null&&(x=U),i.baseState=x,i.firstBaseUpdate=C,i.lastBaseUpdate=L,u===null&&(i.shared.lanes=0),Gn|=c,e.lanes=c,e.memoizedState=U}}function Nc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function _c(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Nc(n[e],t)}var Va=H(null),$i=H(0);function Rc(e,t){e=En,X($i,e),X(Va,t),En=e|t.baseLanes}function kr(){X($i,En),X(Va,Va.current)}function Gr(){En=$i.current,Z(Va),Z($i)}var Ln=0,ve=null,qe=null,Pe=null,Wi=!1,Xa=!1,pa=!1,Ii=0,Ll=0,Qa=null,Jh=0;function Fe(){throw Error(o(321))}function Vr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Xr(e,t,n,l,i,u){return Ln=u,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?mf:yf,pa=!1,u=n(l,i),pa=!1,Xa&&(u=Hc(t,n,l,i)),zc(e),u}function zc(e){_.H=lu;var t=qe!==null&&qe.next!==null;if(Ln=0,Pe=qe=ve=null,Wi=!1,Ll=0,Qa=null,t)throw Error(o(300));e===null||lt||(e=e.dependencies,e!==null&&Qi(e)&&(lt=!0))}function Hc(e,t,n,l){ve=e;var i=0;do{if(Xa&&(Qa=null),Ll=0,Xa=!1,25<=i)throw Error(o(301));if(i+=1,Pe=qe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_.H=tp,u=t(n,l)}while(Xa);return u}function Fh(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(ve.flags|=1024),t}function Qr(){var e=Ii!==0;return Ii=0,e}function Kr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zr(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}Ln=0,Pe=qe=ve=null,Xa=!1,Ll=Ii=0,Qa=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ve.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function et(){if(qe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Pe===null?ve.memoizedState:Pe.next;if(t!==null)Pe=t,qe=e;else{if(e===null)throw ve.alternate===null?Error(o(467)):Error(o(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Pe===null?ve.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Jr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var t=Ll;return Ll+=1,Qa===null&&(Qa=[]),e=Oc(Qa,e,t),t=ve,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?mf:yf),e}function Pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===me)return ht(e)}throw Error(o(438,String(e)))}function Fr(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Jr(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ne;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=et();return $r(t,qe,e)}function $r(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,u=l.pending;if(u!==null){if(i!==null){var c=i.next;i.next=u.next,u.next=c}t.baseQueue=i=u,l.pending=null}if(u=e.baseState,i===null)e.memoizedState=u;else{t=i.next;var g=c=null,x=null,C=t,L=!1;do{var U=C.lane&-536870913;if(U!==C.lane?(Me&U)===U:(Ln&U)===U){var A=C.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),U===ka&&(L=!0);else if((Ln&A)===A){C=C.next,A===ka&&(L=!0);continue}else U={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(g=x=U,c=u):x=x.next=U,ve.lanes|=A,Gn|=A;U=C.action,pa&&n(u,U),u=C.hasEagerState?C.eagerState:n(u,U)}else A={lane:U,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(g=x=A,c=u):x=x.next=A,ve.lanes|=U,Gn|=U;C=C.next}while(C!==null&&C!==t);if(x===null?c=u:x.next=g,!Ct(u,e.memoizedState)&&(lt=!0,L&&(n=Ga,n!==null)))throw n;e.memoizedState=u,e.baseState=c,e.baseQueue=x,l.lastRenderedState=u}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wr(e){var t=et(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do u=e(u,c.action),c=c.next;while(c!==i);Ct(u,t.memoizedState)||(lt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function Lc(e,t,n){var l=ve,i=et(),u=ze;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var c=!Ct((qe||i).memoizedState,n);c&&(i.memoizedState=n,lt=!0),i=i.queue;var g=Yc.bind(null,l,i,e);if(Ul(2048,8,g,[e]),i.getSnapshot!==t||c||Pe!==null&&Pe.memoizedState.tag&1){if(l.flags|=2048,Ka(9,tu(),Uc.bind(null,l,i,n,t),null),Xe===null)throw Error(o(349));u||(Ln&124)!==0||jc(l,t,n)}return n}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=Jr(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,l){t.value=n,t.getSnapshot=l,Bc(t)&&qc(e)}function Yc(e,t,n){return n(function(){Bc(t)&&qc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function qc(e){var t=Ua(e,2);t!==null&&Ht(t,e,2)}function Ir(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),pa){It(!0);try{n()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function kc(e,t,n,l){return e.baseState=n,$r(e,qe,typeof l=="function"?l:yn)}function $h(e,t,n,l,i){if(au(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};_.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,Gc(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Gc(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var u=_.T,c={};_.T=c;try{var g=n(i,l),x=_.S;x!==null&&x(c,g),Vc(e,t,g)}catch(C){Pr(e,t,C)}finally{_.T=u}}else try{u=n(i,l),Vc(e,t,u)}catch(C){Pr(e,t,C)}}function Vc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Xc(e,t,l)},function(l){return Pr(e,t,l)}):Xc(e,t,n)}function Xc(e,t,n){t.status="fulfilled",t.value=n,Qc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Gc(e,n)))}function Pr(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Qc(t),t=t.next;while(t!==l)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kc(e,t){return t}function Zc(e,t){if(ze){var n=Xe.formState;if(n!==null){e:{var l=ve;if(ze){if(Ze){t:{for(var i=Ze,u=tn;i.nodeType!==8;){if(!u){i=null;break t}if(i=Wt(i.nextSibling),i===null){i=null;break t}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Ze=Wt(i.nextSibling),l=i.data==="F!";break e}}fa(l)}l=!1}l&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kc,lastRenderedState:t},n.queue=l,n=gf.bind(null,ve,l),l.dispatch=n,l=Ir(!1),u=lo.bind(null,ve,!1,l.queue),l=St(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=$h.bind(null,ve,i,u,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function Jc(e){var t=et();return Fc(t,qe,e)}function Fc(e,t,n){if(t=$r(e,t,Kc)[0],e=eu(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=jl(t)}catch(c){throw c===Nl?Ji:c}else l=t;t=et();var i=t.queue,u=i.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,Ka(9,tu(),Wh.bind(null,i,n),null)),[l,u,e]}function Wh(e,t){e.action=t}function $c(e){var t=et(),n=qe;if(n!==null)return Fc(t,n,e);et(),t=t.memoizedState,n=et();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ka(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ve.updateQueue,t===null&&(t=Jr(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function tu(){return{destroy:void 0,resource:void 0}}function Wc(){return et().memoizedState}function nu(e,t,n,l){var i=St();l=l===void 0?null:l,ve.flags|=e,i.memoizedState=Ka(1|t,tu(),n,l)}function Ul(e,t,n,l){var i=et();l=l===void 0?null:l;var u=i.memoizedState.inst;qe!==null&&l!==null&&Vr(l,qe.memoizedState.deps)?i.memoizedState=Ka(t,u,n,l):(ve.flags|=e,i.memoizedState=Ka(1|t,u,n,l))}function Ic(e,t){nu(8390656,8,e,t)}function Pc(e,t){Ul(2048,8,e,t)}function ef(e,t){return Ul(4,2,e,t)}function tf(e,t){return Ul(4,4,e,t)}function nf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,Ul(4,4,nf.bind(null,t,e),n)}function eo(){}function lf(e,t){var n=et();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Vr(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=et();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Vr(t,l[1]))return l[0];if(l=e(),pa){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l}function to(e,t,n){return n===void 0||(Ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=sd(),ve.lanes|=e,Gn|=e,n)}function rf(e,t,n,l){return Ct(n,t)?n:Va.current!==null?(e=to(e,n,l),Ct(e,t)||(lt=!0),e):(Ln&42)===0?(lt=!0,e.memoizedState=n):(e=sd(),ve.lanes|=e,Gn|=e,t)}function of(e,t,n,l,i){var u=V.p;V.p=u!==0&&8>u?u:8;var c=_.T,g={};_.T=g,lo(e,!1,t,n);try{var x=i(),C=_.S;if(C!==null&&C(g,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var L=Zh(x,l);Yl(e,t,L,zt(e))}else Yl(e,t,l,zt(e))}catch(U){Yl(e,t,{then:function(){},status:"rejected",reason:U},zt())}finally{V.p=u,_.T=c}}function Ih(){}function no(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=sf(e).queue;of(e,i,t,te,n===null?Ih:function(){return cf(e),n(l)})}function sf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cf(e){var t=sf(e).next.queue;Yl(e,t,{},zt())}function ao(){return ht(ni)}function ff(){return et().memoizedState}function df(){return et().memoizedState}function Ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=zn(n);var l=Hn(t,e,n);l!==null&&(Ht(l,t,n),Rl(l,t,n)),t={cache:zr()},e.payload=t;return}t=t.return}}function ep(e,t,n){var l=zt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},au(e)?hf(t,n):(n=Er(e,t,n,l),n!==null&&(Ht(n,e,l),pf(n,t,l)))}function gf(e,t,n){var l=zt();Yl(e,t,n,l)}function Yl(e,t,n,l){var i={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(au(e))hf(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,g=u(c,n);if(i.hasEagerState=!0,i.eagerState=g,Ct(g,c))return qi(e,t,i,0),Xe===null&&Bi(),!1}catch{}finally{}if(n=Er(e,t,i,l),n!==null)return Ht(n,e,l),pf(n,t,l),!0}return!1}function lo(e,t,n,l){if(l={lane:2,revertLane:Uo(),action:l,hasEagerState:!1,eagerState:null,next:null},au(e)){if(t)throw Error(o(479))}else t=Er(e,n,l,2),t!==null&&Ht(t,e,2)}function au(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function hf(e,t){Xa=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,p(e,n)}}var lu={readContext:ht,use:Pi,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe},mf={readContext:ht,use:Pi,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Ic,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nu(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nu(4194308,4,e,t)},useInsertionEffect:function(e,t){nu(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var l=e();if(pa){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=St();if(n!==void 0){var i=n(t);if(pa){It(!0);try{n(t)}finally{It(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=ep.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Ir(e);var t=e.queue,n=gf.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:eo,useDeferredValue:function(e,t){var n=St();return to(n,e,t)},useTransition:function(){var e=Ir(!1);return e=of.bind(null,ve,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ve,i=St();if(ze){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Xe===null)throw Error(o(349));(Me&124)!==0||jc(l,t,n)}i.memoizedState=n;var u={value:n,getSnapshot:t};return i.queue=u,Ic(Yc.bind(null,l,u,e),[e]),l.flags|=2048,Ka(9,tu(),Uc.bind(null,l,u,n,t),null),n},useId:function(){var e=St(),t=Xe.identifierPrefix;if(ze){var n=hn,l=gn;n=(l&~(1<<32-dt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Jh++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lo.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fr,useCacheRefresh:function(){return St().memoizedState=Ph.bind(null,ve)}},yf={readContext:ht,use:Pi,useCallback:lf,useContext:ht,useEffect:Pc,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:uf,useReducer:eu,useRef:Wc,useState:function(){return eu(yn)},useDebugValue:eo,useDeferredValue:function(e,t){var n=et();return rf(n,qe.memoizedState,e,t)},useTransition:function(){var e=eu(yn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Lc,useId:ff,useHostTransitionStatus:ao,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var n=et();return kc(n,qe,e,t)},useMemoCache:Fr,useCacheRefresh:df},tp={readContext:ht,use:Pi,useCallback:lf,useContext:ht,useEffect:Pc,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:uf,useReducer:Wr,useRef:Wc,useState:function(){return Wr(yn)},useDebugValue:eo,useDeferredValue:function(e,t){var n=et();return qe===null?to(n,e,t):rf(n,qe.memoizedState,e,t)},useTransition:function(){var e=Wr(yn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Lc,useId:ff,useHostTransitionStatus:ao,useFormState:$c,useActionState:$c,useOptimistic:function(e,t){var n=et();return qe!==null?kc(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Fr,useCacheRefresh:df},Za=null,Bl=0;function iu(e){var t=Bl;return Bl+=1,Za===null&&(Za=[]),Oc(Za,e,t)}function ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function uu(e,t){throw t.$$typeof===z?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function vf(e){var t=e._init;return t(e._payload)}function bf(e){function t(w,S){if(e){var M=w.deletions;M===null?(w.deletions=[S],w.flags|=16):M.push(S)}}function n(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=dn(w,S),w.index=0,w.sibling=null,w}function u(w,S,M){return w.index=M,e?(M=w.alternate,M!==null?(M=M.index,M<S?(w.flags|=67108866,S):M):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function c(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function g(w,S,M,j){return S===null||S.tag!==6?(S=wr(M,w.mode,j),S.return=w,S):(S=i(S,M),S.return=w,S)}function x(w,S,M,j){var I=M.type;return I===G?L(w,S,M.props.children,j,M.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&vf(I)===S.type)?(S=i(S,M.props),ql(S,M),S.return=w,S):(S=Gi(M.type,M.key,M.props,null,w.mode,j),ql(S,M),S.return=w,S)}function C(w,S,M,j){return S===null||S.tag!==4||S.stateNode.containerInfo!==M.containerInfo||S.stateNode.implementation!==M.implementation?(S=Mr(M,w.mode,j),S.return=w,S):(S=i(S,M.children||[]),S.return=w,S)}function L(w,S,M,j,I){return S===null||S.tag!==7?(S=ra(M,w.mode,j,I),S.return=w,S):(S=i(S,M),S.return=w,S)}function U(w,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=wr(""+S,w.mode,M),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return M=Gi(S.type,S.key,S.props,null,w.mode,M),ql(M,S),M.return=w,M;case k:return S=Mr(S,w.mode,M),S.return=w,S;case ie:var j=S._init;return S=j(S._payload),U(w,S,M)}if(we(S)||ue(S))return S=ra(S,w.mode,M,null),S.return=w,S;if(typeof S.then=="function")return U(w,iu(S),M);if(S.$$typeof===me)return U(w,Ki(w,S),M);uu(w,S)}return null}function A(w,S,M,j){var I=S!==null?S.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return I!==null?null:g(w,S,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case O:return M.key===I?x(w,S,M,j):null;case k:return M.key===I?C(w,S,M,j):null;case ie:return I=M._init,M=I(M._payload),A(w,S,M,j)}if(we(M)||ue(M))return I!==null?null:L(w,S,M,j,null);if(typeof M.then=="function")return A(w,S,iu(M),j);if(M.$$typeof===me)return A(w,S,Ki(w,M),j);uu(w,M)}return null}function N(w,S,M,j,I){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return w=w.get(M)||null,g(S,w,""+j,I);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case O:return w=w.get(j.key===null?M:j.key)||null,x(S,w,j,I);case k:return w=w.get(j.key===null?M:j.key)||null,C(S,w,j,I);case ie:var xe=j._init;return j=xe(j._payload),N(w,S,M,j,I)}if(we(j)||ue(j))return w=w.get(M)||null,L(S,w,j,I,null);if(typeof j.then=="function")return N(w,S,M,iu(j),I);if(j.$$typeof===me)return N(w,S,M,Ki(S,j),I);uu(S,j)}return null}function ge(w,S,M,j){for(var I=null,xe=null,ee=S,ce=S=0,ut=null;ee!==null&&ce<M.length;ce++){ee.index>ce?(ut=ee,ee=null):ut=ee.sibling;var Ne=A(w,ee,M[ce],j);if(Ne===null){ee===null&&(ee=ut);break}e&&ee&&Ne.alternate===null&&t(w,ee),S=u(Ne,S,ce),xe===null?I=Ne:xe.sibling=Ne,xe=Ne,ee=ut}if(ce===M.length)return n(w,ee),ze&&sa(w,ce),I;if(ee===null){for(;ce<M.length;ce++)ee=U(w,M[ce],j),ee!==null&&(S=u(ee,S,ce),xe===null?I=ee:xe.sibling=ee,xe=ee);return ze&&sa(w,ce),I}for(ee=l(ee);ce<M.length;ce++)ut=N(ee,w,ce,M[ce],j),ut!==null&&(e&&ut.alternate!==null&&ee.delete(ut.key===null?ce:ut.key),S=u(ut,S,ce),xe===null?I=ut:xe.sibling=ut,xe=ut);return e&&ee.forEach(function(Wn){return t(w,Wn)}),ze&&sa(w,ce),I}function oe(w,S,M,j){if(M==null)throw Error(o(151));for(var I=null,xe=null,ee=S,ce=S=0,ut=null,Ne=M.next();ee!==null&&!Ne.done;ce++,Ne=M.next()){ee.index>ce?(ut=ee,ee=null):ut=ee.sibling;var Wn=A(w,ee,Ne.value,j);if(Wn===null){ee===null&&(ee=ut);break}e&&ee&&Wn.alternate===null&&t(w,ee),S=u(Wn,S,ce),xe===null?I=Wn:xe.sibling=Wn,xe=Wn,ee=ut}if(Ne.done)return n(w,ee),ze&&sa(w,ce),I;if(ee===null){for(;!Ne.done;ce++,Ne=M.next())Ne=U(w,Ne.value,j),Ne!==null&&(S=u(Ne,S,ce),xe===null?I=Ne:xe.sibling=Ne,xe=Ne);return ze&&sa(w,ce),I}for(ee=l(ee);!Ne.done;ce++,Ne=M.next())Ne=N(ee,w,ce,Ne.value,j),Ne!==null&&(e&&Ne.alternate!==null&&ee.delete(Ne.key===null?ce:Ne.key),S=u(Ne,S,ce),xe===null?I=Ne:xe.sibling=Ne,xe=Ne);return e&&ee.forEach(function(nm){return t(w,nm)}),ze&&sa(w,ce),I}function Ge(w,S,M,j){if(typeof M=="object"&&M!==null&&M.type===G&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case O:e:{for(var I=M.key;S!==null;){if(S.key===I){if(I=M.type,I===G){if(S.tag===7){n(w,S.sibling),j=i(S,M.props.children),j.return=w,w=j;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&vf(I)===S.type){n(w,S.sibling),j=i(S,M.props),ql(j,M),j.return=w,w=j;break e}n(w,S);break}else t(w,S);S=S.sibling}M.type===G?(j=ra(M.props.children,w.mode,j,M.key),j.return=w,w=j):(j=Gi(M.type,M.key,M.props,null,w.mode,j),ql(j,M),j.return=w,w=j)}return c(w);case k:e:{for(I=M.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===M.containerInfo&&S.stateNode.implementation===M.implementation){n(w,S.sibling),j=i(S,M.children||[]),j.return=w,w=j;break e}else{n(w,S);break}else t(w,S);S=S.sibling}j=Mr(M,w.mode,j),j.return=w,w=j}return c(w);case ie:return I=M._init,M=I(M._payload),Ge(w,S,M,j)}if(we(M))return ge(w,S,M,j);if(ue(M)){if(I=ue(M),typeof I!="function")throw Error(o(150));return M=I.call(M),oe(w,S,M,j)}if(typeof M.then=="function")return Ge(w,S,iu(M),j);if(M.$$typeof===me)return Ge(w,S,Ki(w,M),j);uu(w,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,S!==null&&S.tag===6?(n(w,S.sibling),j=i(S,M),j.return=w,w=j):(n(w,S),j=wr(M,w.mode,j),j.return=w,w=j),c(w)):n(w,S)}return function(w,S,M,j){try{Bl=0;var I=Ge(w,S,M,j);return Za=null,I}catch(ee){if(ee===Nl||ee===Ji)throw ee;var xe=At(29,ee,null,w.mode);return xe.lanes=j,xe.return=w,xe}finally{}}}var Ja=bf(!0),xf=bf(!1),Xt=H(null),nn=null;function jn(e){var t=e.alternate;X(nt,nt.current&1),X(Xt,e),nn===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(nn=e)}function Sf(e){if(e.tag===22){if(X(nt,nt.current),X(Xt,e),nn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(nn=e)}}else Un()}function Un(){X(nt,nt.current),X(Xt,Xt.current)}function vn(e){Z(Xt),nn===e&&(nn=null),Z(nt)}var nt=H(0);function ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Fo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function io(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=zt(),i=zn(l);i.payload=t,n!=null&&(i.callback=n),t=Hn(e,i,l),t!==null&&(Ht(t,e,l),Rl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=zt(),i=zn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Hn(e,i,l),t!==null&&(Ht(t,e,l),Rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),l=zn(n);l.tag=2,t!=null&&(l.callback=t),t=Hn(e,l,n),t!==null&&(Ht(t,e,n),Rl(t,e,n))}};function Df(e,t,n,l,i,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,c):t.prototype&&t.prototype.isPureReactComponent?!Dl(n,l)||!Dl(i,u):!0}function Ef(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function ma(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ou=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tf(e){ou(e)}function wf(e){console.error(e)}function Mf(e){ou(e)}function su(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Of(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ro(e,t,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){su(e,t)},n}function Cf(e){return e=zn(e),e.tag=3,e}function Af(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var u=l.value;e.payload=function(){return i(u)},e.callback=function(){Of(t,n,l)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Of(t,n,l),typeof i!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function np(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,i,!0),n=Xt.current,n!==null){switch(n.tag){case 13:return nn===null?Ro():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Ho(e,l,i)),!1;case 22:return n.flags|=65536,l===jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Ho(e,l,i)),!1}throw Error(o(435,n.tag))}return Ho(e,l,i),Ro(),!1}if(ze)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Ar&&(e=Error(o(422),{cause:l}),Ml(qt(e,n)))):(l!==Ar&&(t=Error(o(423),{cause:l}),Ml(qt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=qt(l,n),i=ro(e.stateNode,l,i),Br(e,i),Je!==4&&(Je=2)),!1;var u=Error(o(520),{cause:l});if(u=qt(u,n),Zl===null?Zl=[u]:Zl.push(u),Je!==4&&(Je=2),t===null)return!0;l=qt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ro(n.stateNode,l,e),Br(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vn===null||!Vn.has(u))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Cf(i),Af(i,e,n,l),Br(n,i),!1}n=n.return}while(n!==null);return!1}var Nf=Error(o(461)),lt=!1;function rt(e,t,n,l){t.child=e===null?xf(t,null,n,l):Ja(t,e.child,n,l)}function _f(e,t,n,l,i){n=n.render;var u=t.ref;if("ref"in l){var c={};for(var g in l)g!=="ref"&&(c[g]=l[g])}else c=l;return ga(t),l=Xr(e,t,n,c,u,i),g=Qr(),e!==null&&!lt?(Kr(e,t,i),bn(e,t,i)):(ze&&g&&Or(t),t.flags|=1,rt(e,t,l,i),t.child)}function Rf(e,t,n,l,i){if(e===null){var u=n.type;return typeof u=="function"&&!Tr(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,zf(e,t,u,l,i)):(e=Gi(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!mo(e,i)){var c=u.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(c,l)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=dn(u,l),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,n,l,i){if(e!==null){var u=e.memoizedProps;if(Dl(u,l)&&e.ref===t.ref)if(lt=!1,t.pendingProps=l=u,mo(e,i))(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,bn(e,t,i)}return oo(e,t,n,l,i)}function Hf(e,t,n){var l=t.pendingProps,i=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return Lf(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,u!==null?u.cachePool:null),u!==null?Rc(t,u):kr(),Sf(t);else return t.lanes=t.childLanes=536870912,Lf(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Zi(t,u.cachePool),Rc(t,u),Un(),t.memoizedState=null):(e!==null&&Zi(t,null),kr(),Un());return rt(e,t,i,n),t.child}function Lf(e,t,n,l){var i=Lr();return i=i===null?null:{parent:tt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Zi(t,null),kr(),Sf(t),e!==null&&Ol(e,t,l,!0),null}function cu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function oo(e,t,n,l,i){return ga(t),n=Xr(e,t,n,l,void 0,i),l=Qr(),e!==null&&!lt?(Kr(e,t,i),bn(e,t,i)):(ze&&l&&Or(t),t.flags|=1,rt(e,t,n,i),t.child)}function jf(e,t,n,l,i,u){return ga(t),t.updateQueue=null,n=Hc(t,l,n,i),zc(e),l=Qr(),e!==null&&!lt?(Kr(e,t,u),bn(e,t,u)):(ze&&l&&Or(t),t.flags|=1,rt(e,t,n,u),t.child)}function Uf(e,t,n,l,i){if(ga(t),t.stateNode===null){var u=Ya,c=n.contextType;typeof c=="object"&&c!==null&&(u=ht(c)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=uo,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Ur(t),c=n.contextType,u.context=typeof c=="object"&&c!==null?ht(c):Ya,u.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(io(t,n,c,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&uo.enqueueReplaceState(u,u.state,null),Hl(t,l,u,i),zl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,x=ma(n,g);u.props=x;var C=u.context,L=n.contextType;c=Ya,typeof L=="object"&&L!==null&&(c=ht(L));var U=n.getDerivedStateFromProps;L=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||C!==c)&&Ef(t,u,l,c),Rn=!1;var A=t.memoizedState;u.state=A,Hl(t,l,u,i),zl(),C=t.memoizedState,g||A!==C||Rn?(typeof U=="function"&&(io(t,n,U,l),C=t.memoizedState),(x=Rn||Df(t,n,x,l,A,C,c))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),u.props=l,u.state=C,u.context=c,l=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Yr(e,t),c=t.memoizedProps,L=ma(n,c),u.props=L,U=t.pendingProps,A=u.context,C=n.contextType,x=Ya,typeof C=="object"&&C!==null&&(x=ht(C)),g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==U||A!==x)&&Ef(t,u,l,x),Rn=!1,A=t.memoizedState,u.state=A,Hl(t,l,u,i),zl();var N=t.memoizedState;c!==U||A!==N||Rn||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof g=="function"&&(io(t,n,g,l),N=t.memoizedState),(L=Rn||Df(t,n,L,l,A,N,x)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,N,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,N,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),u.props=l,u.state=N,u.context=x,l=L):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,cu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,i),t.child=Ja(t,null,n,i)):rt(e,t,n,i),t.memoizedState=u.state,e=t.child):e=bn(e,t,i),e}function Yf(e,t,n,l){return wl(),t.flags|=256,rt(e,t,n,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:Tc()}}function fo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function Bf(e,t,n){var l=t.pendingProps,i=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(i?jn(t):Un(),ze){var g=Ze,x;if(x=g){e:{for(x=g,g=tn;x.nodeType!==8;){if(!g){g=null;break e}if(x=Wt(x.nextSibling),x===null){g=null;break e}}g=x}g!==null?(t.memoizedState={dehydrated:g,treeContext:oa!==null?{id:gn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},x=At(18,null,null,0),x.stateNode=g,x.return=t,t.child=x,vt=t,Ze=null,x=!0):x=!1}x||fa(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Fo(g)?t.lanes=32:t.lanes=536870912,null;vn(t)}return g=l.children,l=l.fallback,i?(Un(),i=t.mode,g=fu({mode:"hidden",children:g},i),l=ra(l,i,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,i=t.child,i.memoizedState=co(n),i.childLanes=fo(e,c,n),t.memoizedState=so,l):(jn(t),go(t,g))}if(x=e.memoizedState,x!==null&&(g=x.dehydrated,g!==null)){if(u)t.flags&256?(jn(t),t.flags&=-257,t=ho(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),i=l.fallback,g=t.mode,l=fu({mode:"visible",children:l.children},g),i=ra(i,g,n,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Ja(t,e.child,null,n),l=t.child,l.memoizedState=co(n),l.childLanes=fo(e,c,n),t.memoizedState=so,t=i);else if(jn(t),Fo(g)){if(c=g.nextSibling&&g.nextSibling.dataset,c)var C=c.dgst;c=C,l=Error(o(419)),l.stack="",l.digest=c,Ml({value:l,source:null,stack:null}),t=ho(e,t,n)}else if(lt||Ol(e,t,n,!1),c=(n&e.childLanes)!==0,lt||c){if(c=Xe,c!==null&&(l=n&-n,l=(l&42)!==0?1:T(l),l=(l&(c.suspendedLanes|n))!==0?0:l,l!==0&&l!==x.retryLane))throw x.retryLane=l,Ua(e,l),Ht(c,e,l),Nf;g.data==="$?"||Ro(),t=ho(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ze=Wt(g.nextSibling),vt=t,ze=!0,ca=null,tn=!1,e!==null&&(Gt[Vt++]=gn,Gt[Vt++]=hn,Gt[Vt++]=oa,gn=e.id,hn=e.overflow,oa=t),t=go(t,l.children),t.flags|=4096);return t}return i?(Un(),i=l.fallback,g=t.mode,x=e.child,C=x.sibling,l=dn(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,C!==null?i=dn(C,i):(i=ra(i,g,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,g=e.child.memoizedState,g===null?g=co(n):(x=g.cachePool,x!==null?(C=tt._currentValue,x=x.parent!==C?{parent:C,pool:C}:x):x=Tc(),g={baseLanes:g.baseLanes|n,cachePool:x}),i.memoizedState=g,i.childLanes=fo(e,c,n),t.memoizedState=so,l):(jn(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function go(e,t){return t=fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fu(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ho(e,t,n){return Ja(t,e.child,null,n),e=go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_r(e.return,t,n)}function po(e,t,n,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=i)}function kf(e,t,n){var l=t.pendingProps,i=l.revealOrder,u=l.tail;if(rt(e,t,l.children,n),l=nt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(X(nt,l),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ru(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),po(t,!1,i,n,u);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ru(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}po(t,!0,n,null,u);break;case"together":po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function ap(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),_n(t,tt,e.memoizedState.cache),wl();break;case 27:case 5:dl(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:_n(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bf(e,t,n):(jn(t),e=bn(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ol(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(nt,nt.current),l)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,n);case 24:_n(t,tt,e.memoizedState.cache)}return bn(e,t,n)}function Gf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)lt=!0;else{if(!mo(e,n)&&(t.flags&128)===0)return lt=!1,ap(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,ze&&(t.flags&1048576)!==0&&yc(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")Tr(l)?(e=ma(l,e),t.tag=1,t=Uf(null,t,l,e,n)):(t.tag=0,t=oo(null,t,l,e,n));else{if(l!=null){if(i=l.$$typeof,i===Te){t.tag=11,t=_f(null,t,l,e,n);break e}else if(i===W){t.tag=14,t=Rf(null,t,l,e,n);break e}}throw t=Be(l)||l,Error(o(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=ma(l,t.pendingProps),Uf(e,t,l,i,n);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;i=u.element,Yr(e,t),Hl(t,l,null,n);var c=t.memoizedState;if(l=c.cache,_n(t,tt,l),l!==u.cache&&Rr(t,[tt],n,!0),zl(),l=c.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Yf(e,t,l,n);break e}else if(l!==i){i=qt(Error(o(424)),t),Ml(i),t=Yf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Wt(e.firstChild),vt=t,ze=!0,ca=null,tn=!0,n=xf(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wl(),l===i){t=bn(e,t,n);break e}rt(e,t,l,n)}t=t.child}return t;case 26:return cu(e,t),e===null?(n=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ze||(n=t.type,e=t.pendingProps,l=wu(de.current).createElement(n),l[Q]=t,l[le]=e,st(l,n,e),Ie(l),t.stateNode=l):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return dl(t),e===null&&ze&&(l=t.stateNode=Vd(t.type,t.pendingProps,de.current),vt=t,tn=!0,i=Ze,Kn(t.type)?($o=i,Ze=Wt(l.firstChild)):Ze=i),rt(e,t,t.pendingProps.children,n),cu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((i=l=Ze)&&(l=_p(l,t.type,t.pendingProps,tn),l!==null?(t.stateNode=l,vt=t,Ze=Wt(l.firstChild),tn=!1,i=!0):i=!1),i||fa(t)),dl(t),i=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,l=u.children,Ko(i,u)?l=null:c!==null&&Ko(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=Xr(e,t,Fh,null,null,n),ni._currentValue=i),cu(e,t),rt(e,t,l,n),t.child;case 6:return e===null&&ze&&((e=n=Ze)&&(n=Rp(n,t.pendingProps,tn),n!==null?(t.stateNode=n,vt=t,Ze=null,e=!0):e=!1),e||fa(t)),null;case 13:return Bf(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,n):rt(e,t,l,n),t.child;case 11:return _f(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,_n(t,t.type,l.value),rt(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,ga(t),i=ht(i),l=l(i),t.flags|=1,rt(e,t,l,n),t.child;case 14:return Rf(e,t,t.type,t.pendingProps,n);case 15:return zf(e,t,t.type,t.pendingProps,n);case 19:return kf(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=fu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=dn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Hf(e,t,n);case 24:return ga(t),l=ht(tt),e===null?(i=Lr(),i===null&&(i=Xe,u=zr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=n),i=u),t.memoizedState={parent:l,cache:i},Ur(t),_n(t,tt,i)):((e.lanes&n)!==0&&(Yr(e,t),Hl(t,null,null,n),zl()),i=e.memoizedState,u=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),_n(t,tt,l)):(l=u.cache,_n(t,tt,l),l!==i.cache&&Rr(t,[tt],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function xn(e){e.flags|=4}function Vf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wd(t)){if(t=Xt.current,t!==null&&((Me&4194048)===Me?nn!==null:(Me&62914560)!==Me&&(Me&536870912)===0||t!==nn))throw _l=jr,wc;e.flags|=8192}}function du(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Oa():536870912,e.lanes|=t,Ia|=t)}function kl(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function lp(e,t,n){var l=t.pendingProps;switch(Cr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(tt),wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Tl(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xc())),Ke(t),null;case 26:return n=t.memoizedState,e===null?(xn(t),n!==null?(Ke(t),Vf(t,n)):(Ke(t),t.flags&=-16777217)):n?n!==e.memoizedState?(xn(t),Ke(t),Vf(t,n)):(Ke(t),t.flags&=-16777217):(e.memoizedProps!==l&&xn(t),Ke(t),t.flags&=-16777217),null;case 27:In(t),n=de.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}e=ae.current,Tl(t)?vc(t):(e=Vd(i,l,n),t.stateNode=e,xn(t))}return Ke(t),null;case 5:if(In(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(e=ae.current,Tl(t))vc(t);else{switch(i=wu(de.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}e[Q]=t,e[le]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(st(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xn(t)}}return Ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=de.current,Tl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=vt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Q]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||jd(e.nodeValue,n)),e||fa(t)}else e=wu(e).createTextNode(l),e[Q]=t,t.stateNode=e}return Ke(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Q]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else i=xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(vn(t),t):(vn(t),null)}if(vn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==i&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),du(t,t.updateQueue),Ke(t),null;case 4:return wt(),e===null&&ko(t.stateNode.containerInfo),Ke(t),null;case 10:return mn(t.type),Ke(t),null;case 19:if(Z(nt),i=t.memoizedState,i===null)return Ke(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)kl(i,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ru(e),u!==null){for(t.flags|=128,kl(i,!1),e=u.updateQueue,t.updateQueue=e,du(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mc(n,e),n=n.sibling;return X(nt,nt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Mt()>pu&&(t.flags|=128,l=!0,kl(i,!1),t.lanes=4194304)}else{if(!l)if(e=ru(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,du(t,e),kl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!ze)return Ke(t),null}else 2*Mt()-i.renderingStartTime>pu&&n!==536870912&&(t.flags|=128,l=!0,kl(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Mt(),t.sibling=null,e=nt.current,X(nt,l?e&1|2:e&1),t):(Ke(t),null);case 22:case 23:return vn(t),Gr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&du(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Z(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(tt),Ke(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ip(e,t){switch(Cr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(tt),wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 13:if(vn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(nt),null;case 4:return wt(),null;case 10:return mn(t.type),null;case 22:case 23:return vn(t),Gr(),e!==null&&Z(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(tt),null;case 25:return null;default:return null}}function Xf(e,t){switch(Cr(t),t.tag){case 3:mn(tt),wt();break;case 26:case 27:case 5:In(t);break;case 4:wt();break;case 13:vn(t);break;case 19:Z(nt);break;case 10:mn(t.type);break;case 22:case 23:vn(t),Gr(),e!==null&&Z(ha);break;case 24:mn(tt)}}function Gl(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var u=n.create,c=n.inst;l=u(),c.destroy=l}n=n.next}while(n!==i)}}catch(g){Ve(t,t.return,g)}}function Yn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var u=i.next;l=u;do{if((l.tag&e)===e){var c=l.inst,g=c.destroy;if(g!==void 0){c.destroy=void 0,i=t;var x=n,C=g;try{C()}catch(L){Ve(i,x,L)}}}l=l.next}while(l!==u)}}catch(L){Ve(t,t.return,L)}}function Qf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_c(t,n)}catch(l){Ve(e,e.return,l)}}}function Kf(e,t,n){n.props=ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ve(e,t,l)}}function Vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Ve(e,t,i)}}function an(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Ve(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ve(e,t,i)}else n.current=null}function Zf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Ve(e,e.return,i)}}function yo(e,t,n){try{var l=e.stateNode;Mp(l,e.type,n,t),l[le]=t}catch(i){Ve(e,e.return,i)}}function Jf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tu));else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}function gu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function Ff(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);st(t,l,n),t[Q]=e,t[le]=n}catch(u){Ve(e,e.return,u)}}var Sn=!1,$e=!1,xo=!1,$f=typeof WeakSet=="function"?WeakSet:Set,it=null;function up(e,t){if(e=e.containerInfo,Xo=_u,e=uc(e),yr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var c=0,g=-1,x=-1,C=0,L=0,U=e,A=null;t:for(;;){for(var N;U!==n||i!==0&&U.nodeType!==3||(g=c+i),U!==u||l!==0&&U.nodeType!==3||(x=c+l),U.nodeType===3&&(c+=U.nodeValue.length),(N=U.firstChild)!==null;)A=U,U=N;for(;;){if(U===e)break t;if(A===n&&++C===i&&(g=c),A===u&&++L===l&&(x=c),(N=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=N}n=g===-1||x===-1?null:{start:g,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},_u=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,i=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var ge=ma(n.type,i,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ge,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ve(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Jo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function Wf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n),l&4&&Gl(5,n);break;case 1:if(Bn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){Ve(n,n.return,c)}else{var i=ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ve(n,n.return,c)}}l&64&&Qf(n),l&512&&Vl(n,n.return);break;case 3:if(Bn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_c(e,t)}catch(c){Ve(n,n.return,c)}}break;case 27:t===null&&l&4&&Ff(n);case 26:case 5:Bn(e,n),t===null&&l&4&&Zf(n),l&512&&Vl(n,n.return);break;case 12:Bn(e,n);break;case 13:Bn(e,n),l&4&&ed(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=pp.bind(null,n),zp(e,n))));break;case 22:if(l=n.memoizedState!==null||Sn,!l){t=t!==null&&t.memoizedState!==null||$e,i=Sn;var u=$e;Sn=l,($e=t)&&!u?qn(e,n,(n.subtreeFlags&8772)!==0):Bn(e,n),Sn=i,$e=u}break;case 30:break;default:Bn(e,n)}}function If(e){var t=e.alternate;t!==null&&(e.alternate=null,If(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Dt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)Pf(e,t,n),n=n.sibling}function Pf(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 26:$e||an(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||an(n,t);var l=Qe,i=Dt;Kn(n.type)&&(Qe=n.stateNode,Dt=!1),Dn(e,t,n),Il(n.stateNode),Qe=l,Dt=i;break;case 5:$e||an(n,t);case 6:if(l=Qe,i=Dt,Qe=null,Dn(e,t,n),Qe=l,Dt=i,Qe!==null)if(Dt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(u){Ve(n,t,u)}else try{Qe.removeChild(n.stateNode)}catch(u){Ve(n,t,u)}break;case 18:Qe!==null&&(Dt?(e=Qe,kd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ui(e)):kd(Qe,n.stateNode));break;case 4:l=Qe,i=Dt,Qe=n.stateNode.containerInfo,Dt=!0,Dn(e,t,n),Qe=l,Dt=i;break;case 0:case 11:case 14:case 15:$e||Yn(2,n,t),$e||Yn(4,n,t),Dn(e,t,n);break;case 1:$e||(an(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Kf(n,t,l)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:$e=(l=$e)||n.memoizedState!==null,Dn(e,t,n),$e=l;break;default:Dn(e,t,n)}}function ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ui(e)}catch(n){Ve(t,t.return,n)}}function rp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $f),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $f),t;default:throw Error(o(435,e.tag))}}function So(e,t){var n=rp(e);t.forEach(function(l){var i=mp.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}function Nt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],u=e,c=t,g=c;e:for(;g!==null;){switch(g.tag){case 27:if(Kn(g.type)){Qe=g.stateNode,Dt=!1;break e}break;case 5:Qe=g.stateNode,Dt=!1;break e;case 3:case 4:Qe=g.stateNode.containerInfo,Dt=!0;break e}g=g.return}if(Qe===null)throw Error(o(160));Pf(u,c,i),Qe=null,Dt=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)td(t,e),t=t.sibling}var $t=null;function td(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),_t(e),l&4&&(Yn(3,e,e.return),Gl(3,e),Yn(5,e,e.return));break;case 1:Nt(t,e),_t(e),l&512&&($e||n===null||an(n,n.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=$t;if(Nt(t,e),_t(e),l&512&&($e||n===null||an(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Jt]||u[Q]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(l),i.head.insertBefore(u,i.querySelector("head > title"))),st(u,l,n),u[Q]=e,Ie(u),l=u;break e;case"link":var c=Fd("link","href",i).get(l+(n.href||""));if(c){for(var g=0;g<c.length;g++)if(u=c[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(g,1);break t}}u=i.createElement(l),st(u,l,n),i.head.appendChild(u);break;case"meta":if(c=Fd("meta","content",i).get(l+(n.content||""))){for(g=0;g<c.length;g++)if(u=c[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(g,1);break t}}u=i.createElement(l),st(u,l,n),i.head.appendChild(u);break;default:throw Error(o(468,l))}u[Q]=e,Ie(u),l=u}e.stateNode=l}else $d(i,e.type,e.stateNode);else e.stateNode=Jd(i,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?$d(i,e.type,e.stateNode):Jd(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nt(t,e),_t(e),l&512&&($e||n===null||an(n,n.return)),n!==null&&l&4&&yo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nt(t,e),_t(e),l&512&&($e||n===null||an(n,n.return)),e.flags&32){i=e.stateNode;try{Na(i,"")}catch(N){Ve(e,e.return,N)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,yo(e,i,n!==null?n.memoizedProps:i)),l&1024&&(xo=!0);break;case 6:if(Nt(t,e),_t(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(N){Ve(e,e.return,N)}}break;case 3:if(Cu=null,i=$t,$t=Mu(t.containerInfo),Nt(t,e),$t=i,_t(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(N){Ve(e,e.return,N)}xo&&(xo=!1,nd(e));break;case 4:l=$t,$t=Mu(e.stateNode.containerInfo),Nt(t,e),_t(e),$t=l;break;case 12:Nt(t,e),_t(e);break;case 13:Nt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Oo=Mt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 22:i=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,C=Sn,L=$e;if(Sn=C||i,$e=L||x,Nt(t,e),$e=L,Sn=C,_t(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||x||Sn||$e||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(u=x.stateNode,i)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=x.stateNode;var U=x.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;g.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(N){Ve(x,x.return,N)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(N){Ve(x,x.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,So(e,n))));break;case 19:Nt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 30:break;case 21:break;default:Nt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Jf(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,u=vo(e);gu(e,u,i);break;case 5:var c=n.stateNode;n.flags&32&&(Na(c,""),n.flags&=-33);var g=vo(e);gu(e,g,c);break;case 3:case 4:var x=n.stateNode.containerInfo,C=vo(e);bo(e,C,x);break;default:throw Error(o(161))}}catch(L){Ve(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wf(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yn(4,t,t.return),ya(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kf(t,t.return,n),ya(t);break;case 27:Il(t.stateNode);case 26:case 5:an(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function qn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,u=t,c=u.flags;switch(u.tag){case 0:case 11:case 15:qn(i,u,n),Gl(4,u);break;case 1:if(qn(i,u,n),l=u,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Ve(l,l.return,C)}if(l=u,i=l.updateQueue,i!==null){var g=l.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)Nc(x[i],g)}catch(C){Ve(l,l.return,C)}}n&&c&64&&Qf(u),Vl(u,u.return);break;case 27:Ff(u);case 26:case 5:qn(i,u,n),n&&l===null&&c&4&&Zf(u),Vl(u,u.return);break;case 12:qn(i,u,n);break;case 13:qn(i,u,n),n&&c&4&&ed(i,u);break;case 22:u.memoizedState===null&&qn(i,u,n),Vl(u,u.return);break;case 30:break;default:qn(i,u,n)}t=t.sibling}}function Do(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cl(n))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e))}function ln(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ad(e,t,n,l),t=t.sibling}function ad(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,l),i&2048&&Gl(9,t);break;case 1:ln(e,t,n,l);break;case 3:ln(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e)));break;case 12:if(i&2048){ln(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,c=u.id,g=u.onPostCommit;typeof g=="function"&&g(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ve(t,t.return,x)}}else ln(e,t,n,l);break;case 13:ln(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,c=t.alternate,t.memoizedState!==null?u._visibility&2?ln(e,t,n,l):Xl(e,t):u._visibility&2?ln(e,t,n,l):(u._visibility|=2,Fa(e,t,n,l,(t.subtreeFlags&10256)!==0)),i&2048&&Do(c,t);break;case 24:ln(e,t,n,l),i&2048&&Eo(t.alternate,t);break;default:ln(e,t,n,l)}}function Fa(e,t,n,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,c=t,g=n,x=l,C=c.flags;switch(c.tag){case 0:case 11:case 15:Fa(u,c,g,x,i),Gl(8,c);break;case 23:break;case 22:var L=c.stateNode;c.memoizedState!==null?L._visibility&2?Fa(u,c,g,x,i):Xl(u,c):(L._visibility|=2,Fa(u,c,g,x,i)),i&&C&2048&&Do(c.alternate,c);break;case 24:Fa(u,c,g,x,i),i&&C&2048&&Eo(c.alternate,c);break;default:Fa(u,c,g,x,i)}t=t.sibling}}function Xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:Xl(n,l),i&2048&&Do(l.alternate,l);break;case 24:Xl(n,l),i&2048&&Eo(l.alternate,l);break;default:Xl(n,l)}t=t.sibling}}var Ql=8192;function $a(e){if(e.subtreeFlags&Ql)for(e=e.child;e!==null;)ld(e),e=e.sibling}function ld(e){switch(e.tag){case 26:$a(e),e.flags&Ql&&e.memoizedState!==null&&Kp($t,e.memoizedState,e.memoizedProps);break;case 5:$a(e);break;case 3:case 4:var t=$t;$t=Mu(e.stateNode.containerInfo),$a(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ql,Ql=16777216,$a(e),Ql=t):$a(e));break;default:$a(e)}}function id(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];it=l,rd(l,e)}id(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ud(e),e=e.sibling}function ud(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&Yn(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hu(e)):Kl(e);break;default:Kl(e)}}function hu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];it=l,rd(l,e)}id(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yn(8,t,t.return),hu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hu(t));break;default:hu(t)}e=e.sibling}}function rd(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:Yn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Cl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,it=l;else e:for(n=e;it!==null;){l=it;var i=l.sibling,u=l.return;if(If(l),l===n){it=null;break e}if(i!==null){i.return=u,it=i;break e}it=u}}}var op={getCacheForType:function(e){var t=ht(tt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},sp=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,Se=null,Me=0,Ye=0,Rt=null,kn=!1,Wa=!1,To=!1,En=0,Je=0,Gn=0,va=0,wo=0,Qt=0,Ia=0,Zl=null,Et=null,Mo=!1,Oo=0,pu=1/0,mu=null,Vn=null,ot=0,Xn=null,Pa=null,el=0,Co=0,Ao=null,od=null,Jl=0,No=null;function zt(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(_.T!==null){var e=ka;return e!==0?e:Uo()}return q()}function sd(){Qt===0&&(Qt=(Me&536870912)===0||ze?ta():536870912);var e=Xt.current;return e!==null&&(e.flags|=32),Qt}function Ht(e,t,n){(e===Xe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(tl(e,0),Qn(e,Me,Qt,!1)),na(e,n),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(va|=n),Je===4&&Qn(e,Me,Qt,!1)),un(e))}function cd(e,t,n){if((Ue&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||on(e,t),i=l?dp(e,t):zo(e,t,!0),u=l;do{if(i===0){Wa&&!l&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!cp(n)){i=zo(e,t,!1),u=!1;continue}if(i===2){if(u=t,e.errorRecoveryDisabledLanes&u)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var g=e;i=Zl;var x=g.current.memoizedState.isDehydrated;if(x&&(tl(g,c).flags|=256),c=zo(g,c,!1),c!==2){if(To&&!x){g.errorRecoveryDisabledLanes|=u,va|=u,i=4;break e}u=Et,Et=i,u!==null&&(Et===null?Et=u:Et.push.apply(Et,u))}i=c}if(u=!1,i!==2)continue}}if(i===1){tl(e,0),Qn(e,t,0,!0);break}e:{switch(l=e,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Qn(l,t,Qt,!kn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Oo+300-Mt(),10<i)){if(Qn(l,t,Qt,!kn),Mn(l,0,!0)!==0)break e;l.timeoutHandle=Bd(fd.bind(null,l,n,Et,mu,Mo,t,Qt,va,Ia,kn,u,2,-0,0),i);break e}fd(l,n,Et,mu,Mo,t,Qt,va,Ia,kn,u,0,-0,0)}}break}while(!0);un(e)}function fd(e,t,n,l,i,u,c,g,x,C,L,U,A,N){if(e.timeoutHandle=-1,U=t.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(ti={stylesheets:null,count:0,unsuspend:Qp},ld(t),U=Zp(),U!==null)){e.cancelPendingCommit=U(vd.bind(null,e,t,u,n,l,i,c,g,x,L,1,A,N)),Qn(e,u,c,!C);return}vd(e,t,u,n,l,i,c,g,x)}function cp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],u=i.getSnapshot;i=i.value;try{if(!Ct(u(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,l){t&=~wo,t&=~va,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var u=31-dt(i),c=1<<u;l[u]=-1,i&=~c}n!==0&&h(e,n,t)}function yu(){return(Ue&6)===0?(Fl(0),!1):!0}function _o(){if(Se!==null){if(Ye===0)var e=Se.return;else e=Se,pn=da=null,Zr(e),Za=null,Bl=0,e=Se;for(;e!==null;)Xf(e.alternate,e),e=e.return;Se=null}}function tl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Cp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_o(),Xe=e,Se=n=dn(e.current,null),Me=t,Ye=0,Rt=null,kn=!1,Wa=on(e,t),To=!1,Ia=Qt=wo=va=Gn=Je=0,Et=Zl=null,Mo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-dt(l),u=1<<i;t|=e[i],l&=~u}return En=t,Bi(),n}function dd(e,t){ve=null,_.H=lu,t===Nl||t===Ji?(t=Cc(),Ye=3):t===wc?(t=Cc(),Ye=4):Ye=t===Nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,Se===null&&(Je=1,su(e,qt(t,e.current)))}function gd(){var e=_.H;return _.H=lu,e===null?lu:e}function hd(){var e=_.A;return _.A=op,e}function Ro(){Je=4,kn||(Me&4194048)!==Me&&Xt.current!==null||(Wa=!0),(Gn&134217727)===0&&(va&134217727)===0||Xe===null||Qn(Xe,Me,Qt,!1)}function zo(e,t,n){var l=Ue;Ue|=2;var i=gd(),u=hd();(Xe!==e||Me!==t)&&(mu=null,tl(e,t)),t=!1;var c=Je;e:do try{if(Ye!==0&&Se!==null){var g=Se,x=Rt;switch(Ye){case 8:_o(),c=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var C=Ye;if(Ye=0,Rt=null,nl(e,g,x,C),n&&Wa){c=0;break e}break;default:C=Ye,Ye=0,Rt=null,nl(e,g,x,C)}}fp(),c=Je;break}catch(L){dd(e,L)}while(!0);return t&&e.shellSuspendCounter++,pn=da=null,Ue=l,_.H=i,_.A=u,Se===null&&(Xe=null,Me=0,Bi()),c}function fp(){for(;Se!==null;)pd(Se)}function dp(e,t){var n=Ue;Ue|=2;var l=gd(),i=hd();Xe!==e||Me!==t?(mu=null,pu=Mt()+500,tl(e,t)):Wa=on(e,t);e:do try{if(Ye!==0&&Se!==null){t=Se;var u=Rt;t:switch(Ye){case 1:Ye=0,Rt=null,nl(e,t,u,1);break;case 2:case 9:if(Mc(u)){Ye=0,Rt=null,md(t);break}t=function(){Ye!==2&&Ye!==9||Xe!==e||(Ye=7),un(e)},u.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Mc(u)?(Ye=0,Rt=null,md(t)):(Ye=0,Rt=null,nl(e,t,u,7));break;case 5:var c=null;switch(Se.tag){case 26:c=Se.memoizedState;case 5:case 27:var g=Se;if(!c||Wd(c)){Ye=0,Rt=null;var x=g.sibling;if(x!==null)Se=x;else{var C=g.return;C!==null?(Se=C,vu(C)):Se=null}break t}}Ye=0,Rt=null,nl(e,t,u,5);break;case 6:Ye=0,Rt=null,nl(e,t,u,6);break;case 8:_o(),Je=6;break e;default:throw Error(o(462))}}gp();break}catch(L){dd(e,L)}while(!0);return pn=da=null,_.H=l,_.A=i,Ue=n,Se!==null?0:(Xe=null,Me=0,Bi(),Je)}function gp(){for(;Se!==null&&!xi();)pd(Se)}function pd(e){var t=Gf(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?vu(e):Se=t}function md(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=jf(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=jf(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Zr(t);default:Xf(n,t),t=Se=mc(t,En),t=Gf(n,t,En)}e.memoizedProps=e.pendingProps,t===null?vu(e):Se=t}function nl(e,t,n,l){pn=da=null,Zr(t),Za=null,Bl=0;var i=t.return;try{if(np(e,i,t,n,Me)){Je=1,su(e,qt(n,e.current)),Se=null;return}}catch(u){if(i!==null)throw Se=i,u;Je=1,su(e,qt(n,e.current)),Se=null;return}t.flags&32768?(ze||l===1?e=!0:Wa||(Me&536870912)!==0?e=!1:(kn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),yd(t,e)):vu(t)}function vu(e){var t=e;do{if((t.flags&32768)!==0){yd(t,kn);return}e=t.return;var n=lp(t.alternate,t,En);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Je===0&&(Je=5)}function yd(e,t){do{var n=ip(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Je=6,Se=null}function vd(e,t,n,l,i,u,c,g,x){e.cancelPendingCommit=null;do bu();while(ot!==0);if((Ue&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Dr,Wu(e,n,u,c,g,x),e===Xe&&(Se=Xe=null,Me=0),Pa=t,Xn=e,el=n,Co=u,Ao=i,od=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(Da,function(){return Ed(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,i=V.p,V.p=2,c=Ue,Ue|=4;try{up(e,t,n)}finally{Ue=c,V.p=i,_.T=l}}ot=1,bd(),xd(),Sd()}}function bd(){if(ot===1){ot=0;var e=Xn,t=Pa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var l=V.p;V.p=2;var i=Ue;Ue|=4;try{td(t,e);var u=Qo,c=uc(e.containerInfo),g=u.focusedElem,x=u.selectionRange;if(c!==g&&g&&g.ownerDocument&&ic(g.ownerDocument.documentElement,g)){if(x!==null&&yr(g)){var C=x.start,L=x.end;if(L===void 0&&(L=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(L,g.value.length);else{var U=g.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var N=A.getSelection(),ge=g.textContent.length,oe=Math.min(x.start,ge),Ge=x.end===void 0?oe:Math.min(x.end,ge);!N.extend&&oe>Ge&&(c=Ge,Ge=oe,oe=c);var w=lc(g,oe),S=lc(g,Ge);if(w&&S&&(N.rangeCount!==1||N.anchorNode!==w.node||N.anchorOffset!==w.offset||N.focusNode!==S.node||N.focusOffset!==S.offset)){var M=U.createRange();M.setStart(w.node,w.offset),N.removeAllRanges(),oe>Ge?(N.addRange(M),N.extend(S.node,S.offset)):(M.setEnd(S.node,S.offset),N.addRange(M))}}}}for(U=[],N=g;N=N.parentNode;)N.nodeType===1&&U.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<U.length;g++){var j=U[g];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}_u=!!Xo,Qo=Xo=null}finally{Ue=i,V.p=l,_.T=n}}e.current=t,ot=2}}function xd(){if(ot===2){ot=0;var e=Xn,t=Pa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var l=V.p;V.p=2;var i=Ue;Ue|=4;try{Wf(e,t.alternate,t)}finally{Ue=i,V.p=l,_.T=n}}ot=3}}function Sd(){if(ot===4||ot===3){ot=0,Zu();var e=Xn,t=Pa,n=el,l=od;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,Pa=Xn=null,Dd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Vn=null),R(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,i=V.p,V.p=2,_.T=null;try{for(var u=e.onRecoverableError,c=0;c<l.length;c++){var g=l[c];u(g.value,{componentStack:g.stack})}}finally{_.T=t,V.p=i}}(el&3)!==0&&bu(),un(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===No?Jl++:(Jl=0,No=e):Jl=0,Fl(0)}}function Dd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cl(t)))}function bu(e){return bd(),xd(),Sd(),Ed()}function Ed(){if(ot!==5)return!1;var e=Xn,t=Co;Co=0;var n=R(el),l=_.T,i=V.p;try{V.p=32>n?32:n,_.T=null,n=Ao,Ao=null;var u=Xn,c=el;if(ot=0,Pa=Xn=null,el=0,(Ue&6)!==0)throw Error(o(331));var g=Ue;if(Ue|=4,ud(u.current),ad(u,u.current,c,n),Ue=g,Fl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ea,u)}catch{}return!0}finally{V.p=i,_.T=l,Dd(e,t)}}function Td(e,t,n){t=qt(n,t),t=ro(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(na(e,2),un(e))}function Ve(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vn===null||!Vn.has(l))){e=qt(n,e),n=Cf(2),l=Hn(t,n,2),l!==null&&(Af(n,l,t,e),na(l,2),un(l));break}}t=t.return}}function Ho(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new sp;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(To=!0,i.add(n),e=hp.bind(null,e,t,n),t.then(e,e))}function hp(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Me&n)===n&&(Je===4||Je===3&&(Me&62914560)===Me&&300>Mt()-Oo?(Ue&2)===0&&tl(e,0):wo|=n,Ia===Me&&(Ia=0)),un(e)}function wd(e,t){t===0&&(t=Oa()),e=Ua(e,t),e!==null&&(na(e,t),un(e))}function pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function mp(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),wd(e,n)}function yp(e,t){return gl(e,t)}var xu=null,al=null,Lo=!1,Su=!1,jo=!1,ba=0;function un(e){e!==al&&e.next===null&&(al===null?xu=al=e:al=al.next=e),Su=!0,Lo||(Lo=!0,bp())}function Fl(e,t){if(!jo&&Su){jo=!0;do for(var n=!1,l=xu;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var u=0;else{var c=l.suspendedLanes,g=l.pingedLanes;u=(1<<31-dt(42|e)+1)-1,u&=i&~(c&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Ad(l,u))}else u=Me,u=Mn(l,l===Xe?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||on(l,u)||(n=!0,Ad(l,u));l=l.next}while(n);jo=!1}}function vp(){Md()}function Md(){Su=Lo=!1;var e=0;ba!==0&&(Op()&&(e=ba),ba=0);for(var t=Mt(),n=null,l=xu;l!==null;){var i=l.next,u=Od(l,t);u===0?(l.next=null,n===null?xu=i:n.next=i,i===null&&(al=n)):(n=l,(e!==0||(u&3)!==0)&&(Su=!0)),l=i}Fl(e)}function Od(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var c=31-dt(u),g=1<<c,x=i[c];x===-1?((g&n)===0||(g&l)!==0)&&(i[c]=$u(g,t)):x<=t&&(e.expiredLanes|=g),u&=~g}if(t=Xe,n=Me,n=Mn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hl(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||on(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&hl(l),R(n)){case 2:case 8:n=Di;break;case 32:n=Da;break;case 268435456:n=Ea;break;default:n=Da}return l=Cd.bind(null,e),n=gl(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&hl(l),e.callbackPriority=2,e.callbackNode=null,2}function Cd(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(bu()&&e.callbackNode!==n)return null;var l=Me;return l=Mn(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cd(e,l,t),Od(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?Cd.bind(null,e):null)}function Ad(e,t){if(bu())return null;cd(e,t,!0)}function bp(){Ap(function(){(Ue&6)!==0?gl(Pn,vp):Md()})}function Uo(){return ba===0&&(ba=ta()),ba}function Nd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function _d(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xp(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var u=Nd((i[le]||null).action),c=l.submitter;c&&(t=(t=c[le]||null)?Nd(t.formAction):c.getAttribute("formAction"),t!==null&&(u=t,c=null));var g=new ji("action","action",null,l,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ba!==0){var x=c?_d(i,c):new FormData(i);no(n,{pending:!0,data:x,method:i.method,action:u},null,x)}}else typeof u=="function"&&(g.preventDefault(),x=c?_d(i,c):new FormData(i),no(n,{pending:!0,data:x,method:i.method,action:u},u,x))},currentTarget:i}]})}}for(var Yo=0;Yo<Sr.length;Yo++){var Bo=Sr[Yo],Sp=Bo.toLowerCase(),Dp=Bo[0].toUpperCase()+Bo.slice(1);Ft(Sp,"on"+Dp)}Ft(sc,"onAnimationEnd"),Ft(cc,"onAnimationIteration"),Ft(fc,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Bh,"onTransitionRun"),Ft(qh,"onTransitionStart"),Ft(kh,"onTransitionCancel"),Ft(dc,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var c=l.length-1;0<=c;c--){var g=l[c],x=g.instance,C=g.currentTarget;if(g=g.listener,x!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=C;try{u(i)}catch(L){ou(L)}i.currentTarget=null,u=x}else for(c=0;c<l.length;c++){if(g=l[c],x=g.instance,C=g.currentTarget,g=g.listener,x!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=C;try{u(i)}catch(L){ou(L)}i.currentTarget=null,u=x}}}}function De(e,t){var n=t[re];n===void 0&&(n=t[re]=new Set);var l=e+"__bubble";n.has(l)||(zd(t,e,2,!1),n.add(l))}function qo(e,t,n){var l=0;t&&(l|=4),zd(n,e,l,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Du]){e[Du]=!0,Mi.forEach(function(n){n!=="selectionchange"&&(Ep.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Du]||(t[Du]=!0,qo("selectionchange",!1,t))}}function zd(e,t,n,l){switch(ag(t)){case 2:var i=$p;break;case 8:i=Wp;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,l,i){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var g=l.stateNode.containerInfo;if(g===i)break;if(c===4)for(c=l.return;c!==null;){var x=c.tag;if((x===3||x===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;g!==null;){if(c=On(g),c===null)return;if(x=c.tag,x===5||x===6||x===26||x===27){l=u=c;continue e}g=g.parentNode}}l=l.return}Bs(function(){var C=u,L=ur(n),U=[];e:{var A=gc.get(e);if(A!==void 0){var N=ji,ge=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":N=yh;break;case"focusin":ge="focus",N=dr;break;case"focusout":ge="blur",N=dr;break;case"beforeblur":case"afterblur":N=dr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=xh;break;case sc:case cc:case fc:N=oh;break;case dc:N=Dh;break;case"scroll":case"scrollend":N=ah;break;case"wheel":N=Th;break;case"copy":case"cut":case"paste":N=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Xs;break;case"toggle":case"beforetoggle":N=Mh}var oe=(t&4)!==0,Ge=!oe&&(e==="scroll"||e==="scrollend"),w=oe?A!==null?A+"Capture":null:A;oe=[];for(var S=C,M;S!==null;){var j=S;if(M=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||M===null||w===null||(j=pl(S,w),j!=null&&oe.push(Wl(S,j,M))),Ge)break;S=S.return}0<oe.length&&(A=new N(A,ge,null,n,L),U.push({event:A,listeners:oe}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",A&&n!==ir&&(ge=n.relatedTarget||n.fromElement)&&(On(ge)||ge[$]))break e;if((N||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,N?(ge=n.relatedTarget||n.toElement,N=C,ge=ge?On(ge):null,ge!==null&&(Ge=d(ge),oe=ge.tag,ge!==Ge||oe!==5&&oe!==27&&oe!==6)&&(ge=null)):(N=null,ge=C),N!==ge)){if(oe=Gs,j="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Xs,j="onPointerLeave",w="onPointerEnter",S="pointer"),Ge=N==null?A:aa(N),M=ge==null?A:aa(ge),A=new oe(j,S+"leave",N,n,L),A.target=Ge,A.relatedTarget=M,j=null,On(L)===C&&(oe=new oe(w,S+"enter",ge,n,L),oe.target=M,oe.relatedTarget=Ge,j=oe),Ge=j,N&&ge)t:{for(oe=N,w=ge,S=0,M=oe;M;M=ll(M))S++;for(M=0,j=w;j;j=ll(j))M++;for(;0<S-M;)oe=ll(oe),S--;for(;0<M-S;)w=ll(w),M--;for(;S--;){if(oe===w||w!==null&&oe===w.alternate)break t;oe=ll(oe),w=ll(w)}oe=null}else oe=null;N!==null&&Hd(U,A,N,oe,!1),ge!==null&&Ge!==null&&Hd(U,Ge,ge,oe,!0)}}e:{if(A=C?aa(C):window,N=A.nodeName&&A.nodeName.toLowerCase(),N==="select"||N==="input"&&A.type==="file")var I=Is;else if($s(A))if(Ps)I=jh;else{I=Hh;var xe=zh}else N=A.nodeName,!N||N.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&lr(C.elementType)&&(I=Is):I=Lh;if(I&&(I=I(e,C))){Ws(U,I,n,L);break e}xe&&xe(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&ar(A,"number",A.value)}switch(xe=C?aa(C):window,e){case"focusin":($s(xe)||xe.contentEditable==="true")&&(Ha=xe,vr=C,El=null);break;case"focusout":El=vr=Ha=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,rc(U,n,L);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":rc(U,n,L)}var ee;if(hr)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else za?Js(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(Qs&&n.locale!=="ko"&&(za||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&za&&(ee=qs()):(Nn=L,sr="value"in Nn?Nn.value:Nn.textContent,za=!0)),xe=Eu(C,ce),0<xe.length&&(ce=new Vs(ce,e,null,n,L),U.push({event:ce,listeners:xe}),ee?ce.data=ee:(ee=Fs(n),ee!==null&&(ce.data=ee)))),(ee=Ch?Ah(e,n):Nh(e,n))&&(ce=Eu(C,"onBeforeInput"),0<ce.length&&(xe=new Vs("onBeforeInput","beforeinput",null,n,L),U.push({event:xe,listeners:ce}),xe.data=ee)),xp(U,e,C,n,L)}Rd(U,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eu(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=pl(e,n),i!=null&&l.unshift(Wl(e,i,u)),i=pl(e,t),i!=null&&l.push(Wl(e,i,u))),e.tag===3)return l;e=e.return}return[]}function ll(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,n,l,i){for(var u=t._reactName,c=[];n!==null&&n!==l;){var g=n,x=g.alternate,C=g.stateNode;if(g=g.tag,x!==null&&x===l)break;g!==5&&g!==26&&g!==27||C===null||(x=C,i?(C=pl(n,u),C!=null&&c.unshift(Wl(n,C,x))):i||(C=pl(n,u),C!=null&&c.push(Wl(n,C,x)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Tp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(wp,"")}function jd(e,t){return t=Ld(t),Ld(e)===t}function Tu(){}function ke(e,t,n,l,i,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Na(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Na(e,""+l);break;case"className":Ai(e,"class",l);break;case"tabIndex":Ai(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(e,n,l);break;case"style":Us(e,l,u);break;case"data":if(t!=="object"){Ai(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ri(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",i.name,i,null),ke(e,t,"formEncType",i.formEncType,i,null),ke(e,t,"formMethod",i.formMethod,i,null),ke(e,t,"formTarget",i.formTarget,i,null)):(ke(e,t,"encType",i.encType,i,null),ke(e,t,"method",i.method,i,null),ke(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ri(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Tu);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":De("beforetoggle",e),De("toggle",e),Ci(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ci(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=th.get(n)||n,Ci(e,n,l))}}function Vo(e,t,n,l,i,u){switch(n){case"style":Us(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Na(e,l):(typeof l=="number"||typeof l=="bigint")&&Na(e,""+l);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Tu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),u=e[le]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,i),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ci(e,n,l)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var l=!1,i=!1,u;for(u in n)if(n.hasOwnProperty(u)){var c=n[u];if(c!=null)switch(u){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,u,c,n,null)}}i&&ke(e,t,"srcSet",n.srcSet,n,null),l&&ke(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var g=u=c=i=null,x=null,C=null;for(l in n)if(n.hasOwnProperty(l)){var L=n[l];if(L!=null)switch(l){case"name":i=L;break;case"type":c=L;break;case"checked":x=L;break;case"defaultChecked":C=L;break;case"value":u=L;break;case"defaultValue":g=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:ke(e,t,l,L,n,null)}}zs(e,u,g,x,C,c,i,!1),Ni(e);return;case"select":De("invalid",e),l=c=u=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":u=g;break;case"defaultValue":c=g;break;case"multiple":l=g;default:ke(e,t,i,g,n,null)}t=u,n=c,e.multiple=!!l,t!=null?Aa(e,!!l,t,!1):n!=null&&Aa(e,!!l,n,!0);return;case"textarea":De("invalid",e),u=i=l=null;for(c in n)if(n.hasOwnProperty(c)&&(g=n[c],g!=null))switch(c){case"value":l=g;break;case"defaultValue":i=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:ke(e,t,c,g,n,null)}Ls(e,l,i,u),Ni(e);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(l=n[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,t,x,l,n,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(l=0;l<$l.length;l++)De($l[l],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ke(e,t,C,l,n,null)}return;default:if(lr(t)){for(L in n)n.hasOwnProperty(L)&&(l=n[L],l!==void 0&&Vo(e,t,L,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&ke(e,t,g,l,n,null))}function Mp(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,c=null,g=null,x=null,C=null,L=null;for(N in n){var U=n[N];if(n.hasOwnProperty(N)&&U!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=U;default:l.hasOwnProperty(N)||ke(e,t,N,null,l,U)}}for(var A in l){var N=l[A];if(U=n[A],l.hasOwnProperty(A)&&(N!=null||U!=null))switch(A){case"type":u=N;break;case"name":i=N;break;case"checked":C=N;break;case"defaultChecked":L=N;break;case"value":c=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==U&&ke(e,t,A,N,l,U)}}nr(e,c,g,x,C,L,u,i);return;case"select":N=c=g=A=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":N=x;default:l.hasOwnProperty(u)||ke(e,t,u,null,l,x)}for(i in l)if(u=l[i],x=n[i],l.hasOwnProperty(i)&&(u!=null||x!=null))switch(i){case"value":A=u;break;case"defaultValue":g=u;break;case"multiple":c=u;default:u!==x&&ke(e,t,i,u,l,x)}t=g,n=c,l=N,A!=null?Aa(e,!!n,A,!1):!!l!=!!n&&(t!=null?Aa(e,!!n,t,!0):Aa(e,!!n,n?[]:"",!1));return;case"textarea":N=A=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ke(e,t,g,null,l,i)}for(c in l)if(i=l[c],u=n[c],l.hasOwnProperty(c)&&(i!=null||u!=null))switch(c){case"value":A=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&ke(e,t,c,i,l,u)}Hs(e,A,N);return;case"option":for(var ge in n)if(A=n[ge],n.hasOwnProperty(ge)&&A!=null&&!l.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:ke(e,t,ge,null,l,A)}for(x in l)if(A=l[x],N=n[x],l.hasOwnProperty(x)&&A!==N&&(A!=null||N!=null))switch(x){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:ke(e,t,x,A,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)A=n[oe],n.hasOwnProperty(oe)&&A!=null&&!l.hasOwnProperty(oe)&&ke(e,t,oe,null,l,A);for(C in l)if(A=l[C],N=n[C],l.hasOwnProperty(C)&&A!==N&&(A!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:ke(e,t,C,A,l,N)}return;default:if(lr(t)){for(var Ge in n)A=n[Ge],n.hasOwnProperty(Ge)&&A!==void 0&&!l.hasOwnProperty(Ge)&&Vo(e,t,Ge,void 0,l,A);for(L in l)A=l[L],N=n[L],!l.hasOwnProperty(L)||A===N||A===void 0&&N===void 0||Vo(e,t,L,A,l,N);return}}for(var w in n)A=n[w],n.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&ke(e,t,w,null,l,A);for(U in l)A=l[U],N=n[U],!l.hasOwnProperty(U)||A===N||A==null&&N==null||ke(e,t,U,A,l,N)}var Xo=null,Qo=null;function wu(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=null;function Op(){var e=window.event;return e&&e.type==="popstate"?e===Zo?!1:(Zo=e,!0):(Zo=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(Np)}:Bd;function Np(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function kd(e,t){var n=t,l=0,i=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<l&&8>l){n=l;var c=e.ownerDocument;if(n&1&&Il(c.documentElement),n&2&&Il(c.body),n&4)for(n=c.head,Il(n),c=n.firstChild;c;){var g=c.nextSibling,x=c.nodeName;c[Jt]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=g}}if(i===0){e.removeChild(u),ui(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:l=n.charCodeAt(0)-48;else l=0;n=u}while(n);ui(t)}function Jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jo(n),Pt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function _p(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Rp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function Fo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zp(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var $o=null;function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Vd(e,t,n){switch(t=wu(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Il(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pt(e)}var Kt=new Map,Xd=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=V.d;V.d={f:Hp,r:Lp,D:jp,C:Up,L:Yp,m:Bp,X:kp,S:qp,M:Gp};function Hp(){var e=Tn.f(),t=yu();return e||t}function Lp(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?cf(t):Tn.r(e)}var il=typeof document>"u"?null:document;function Qd(e,t,n){var l=il;if(l&&typeof t=="string"&&t){var i=Bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Xd.has(i)||(Xd.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),st(t,"link",e),Ie(t),l.head.appendChild(t)))}}function jp(e){Tn.D(e),Qd("dns-prefetch",e,null)}function Up(e,t){Tn.C(e,t),Qd("preconnect",e,t)}function Yp(e,t,n){Tn.L(e,t,n);var l=il;if(l&&e&&t){var i='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Bt(n.imageSizes)+'"]')):i+='[href="'+Bt(e)+'"]';var u=i;switch(t){case"style":u=ul(e);break;case"script":u=rl(e)}Kt.has(u)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Pl(u))||t==="script"&&l.querySelector(ei(u))||(t=l.createElement("link"),st(t,"link",e),Ie(t),l.head.appendChild(t)))}}function Bp(e,t){Tn.m(e,t);var n=il;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Bt(l)+'"][href="'+Bt(e)+'"]',u=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=rl(e)}if(!Kt.has(u)&&(e=E({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(u)))return}l=n.createElement("link"),st(l,"link",e),Ie(l),n.head.appendChild(l)}}}function qp(e,t,n){Tn.S(e,t,n);var l=il;if(l&&e){var i=Cn(l).hoistableStyles,u=ul(e);t=t||"default";var c=i.get(u);if(!c){var g={loading:0,preload:null};if(c=l.querySelector(Pl(u)))g.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&Wo(e,n);var x=c=l.createElement("link");Ie(x),st(x,"link",e),x._p=new Promise(function(C,L){x.onload=C,x.onerror=L}),x.addEventListener("load",function(){g.loading|=1}),x.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ou(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:g},i.set(u,c)}}}function kp(e,t){Tn.X(e,t);var n=il;if(n&&e){var l=Cn(n).hoistableScripts,i=rl(e),u=l.get(i);u||(u=n.querySelector(ei(i)),u||(e=E({src:e,async:!0},t),(t=Kt.get(i))&&Io(e,t),u=n.createElement("script"),Ie(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function Gp(e,t){Tn.M(e,t);var n=il;if(n&&e){var l=Cn(n).hoistableScripts,i=rl(e),u=l.get(i);u||(u=n.querySelector(ei(i)),u||(e=E({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&Io(e,t),u=n.createElement("script"),Ie(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function Kd(e,t,n,l){var i=(i=de.current)?Mu(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ul(n.href),n=Cn(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ul(n.href);var u=Cn(i).hoistableStyles,c=u.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,c),(u=i.querySelector(Pl(e)))&&!u._p&&(c.instance=u,c.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||Vp(i,e,n,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rl(n),n=Cn(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ul(e){return'href="'+Bt(e)+'"'}function Pl(e){return'link[rel="stylesheet"]['+e+"]"}function Zd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Vp(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",n),Ie(t),e.head.appendChild(t))}function rl(e){return'[src="'+Bt(e)+'"]'}function ei(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(l)return t.instance=l,Ie(l),l;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ie(l),st(l,"style",i),Ou(l,n.precedence,e),t.instance=l;case"stylesheet":i=ul(n.href);var u=e.querySelector(Pl(i));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;l=Zd(n),(i=Kt.get(i))&&Wo(l,i),u=(e.ownerDocument||e).createElement("link"),Ie(u);var c=u;return c._p=new Promise(function(g,x){c.onload=g,c.onerror=x}),st(u,"link",l),t.state.loading|=4,Ou(u,n.precedence,e),t.instance=u;case"script":return u=rl(n.src),(i=e.querySelector(ei(u)))?(t.instance=i,Ie(i),i):(l=n,(i=Kt.get(u))&&(l=E({},n),Io(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ie(i),st(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ou(l,n.precedence,e));return t.instance}function Ou(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,u=i,c=0;c<l.length;c++){var g=l[c];if(g.dataset.precedence===t)u=g;else if(u!==i)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cu=null;function Fd(e,t,n){if(Cu===null){var l=new Map,i=Cu=new Map;i.set(n,l)}else i=Cu,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var u=n[i];if(!(u[Jt]||u[Q]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(t)||"";c=e+c;var g=l.get(c);g?g.push(u):l.set(c,[u])}}return l}function $d(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ti=null;function Qp(){}function Kp(e,t,n){if(ti===null)throw Error(o(475));var l=ti;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ul(n.href),u=e.querySelector(Pl(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Au.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,Ie(u);return}u=e.ownerDocument||e,n=Zd(n),(i=Kt.get(i))&&Wo(n,i),u=u.createElement("link"),Ie(u);var c=u;c._p=new Promise(function(g,x){c.onload=g,c.onerror=x}),st(u,"link",n),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Au.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Zp(){if(ti===null)throw Error(o(475));var e=ti;return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Au(){if(this.count--,this.count===0){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,t.forEach(Jp,e),Nu=null,Au.call(e))}function Jp(e,t){if(!(t.state.loading&4)){var n=Nu.get(e);if(n)var l=n.get(null);else{n=new Map,Nu.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var c=i[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),l=c)}l&&n.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),u=n.get(c)||l,u===l&&n.set(null,i),n.set(c,i),this.count++,l=Au.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),u?u.parentNode.insertBefore(i,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ni={$$typeof:me,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Fp(e,t,n,l,i,u,c,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Id(e,t,n,l,i,u,c,g,x,C,L,U){return e=new Fp(e,t,n,c,g,x,C,U),t=1,u===!0&&(t|=24),u=At(3,null,null,t),e.current=u,u.stateNode=e,t=zr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},Ur(u),e}function Pd(e){return e?(e=Ya,e):Ya}function eg(e,t,n,l,i,u){i=Pd(i),l.context===null?l.context=i:l.pendingContext=i,l=zn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Hn(e,l,t),n!==null&&(Ht(n,e,t),Rl(n,e,t))}function tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){tg(e,t),(e=e.alternate)&&tg(e,t)}function ng(e){if(e.tag===13){var t=Ua(e,67108864);t!==null&&Ht(t,e,67108864),es(e,67108864)}}var _u=!0;function $p(e,t,n,l){var i=_.T;_.T=null;var u=V.p;try{V.p=2,ts(e,t,n,l)}finally{V.p=u,_.T=i}}function Wp(e,t,n,l){var i=_.T;_.T=null;var u=V.p;try{V.p=8,ts(e,t,n,l)}finally{V.p=u,_.T=i}}function ts(e,t,n,l){if(_u){var i=ns(l);if(i===null)Go(e,t,l,Ru,n),lg(e,l);else if(Pp(i,e,t,n,l))l.stopPropagation();else if(lg(e,l),t&4&&-1<Ip.indexOf(e)){for(;i!==null;){var u=en(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=Re(u.pendingLanes);if(c!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;c;){var x=1<<31-dt(c);g.entanglements[1]|=x,c&=~x}un(u),(Ue&6)===0&&(pu=Mt()+500,Fl(0))}}break;case 13:g=Ua(u,2),g!==null&&Ht(g,u,2),yu(),es(u,2)}if(u=ns(l),u===null&&Go(e,t,l,Ru,n),u===i)break;i=u}i!==null&&l.stopPropagation()}else Go(e,t,l,null,n)}}function ns(e){return e=ur(e),as(e)}var Ru=null;function as(e){if(Ru=null,e=On(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ru=e,null}function ag(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Si()){case Pn:return 2;case Di:return 8;case Da:case Ei:return 32;case Ea:return 268435456;default:return 32}default:return 32}}var ls=!1,Zn=null,Jn=null,Fn=null,ai=new Map,li=new Map,$n=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lg(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function ii(e,t,n,l,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[i]},t!==null&&(t=en(t),t!==null&&ng(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pp(e,t,n,l,i){switch(t){case"focusin":return Zn=ii(Zn,e,t,n,l,i),!0;case"dragenter":return Jn=ii(Jn,e,t,n,l,i),!0;case"mouseover":return Fn=ii(Fn,e,t,n,l,i),!0;case"pointerover":var u=i.pointerId;return ai.set(u,ii(ai.get(u)||null,e,t,n,l,i)),!0;case"gotpointercapture":return u=i.pointerId,li.set(u,ii(li.get(u)||null,e,t,n,l,i)),!0}return!1}function ig(e){var t=On(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,J(e.priority,function(){if(n.tag===13){var l=zt();l=T(l);var i=Ua(n,l);i!==null&&Ht(i,n,l),es(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ns(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ir=l,n.target.dispatchEvent(l),ir=null}else return t=en(n),t!==null&&ng(t),e.blockedOn=n,!1;t.shift()}return!0}function ug(e,t,n){zu(e)&&n.delete(t)}function em(){ls=!1,Zn!==null&&zu(Zn)&&(Zn=null),Jn!==null&&zu(Jn)&&(Jn=null),Fn!==null&&zu(Fn)&&(Fn=null),ai.forEach(ug),li.forEach(ug)}function Hu(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,em)))}var Lu=null;function rg(e){Lu!==e&&(Lu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(as(l||n)===null)continue;break}var u=en(n);u!==null&&(e.splice(t,3),t-=3,no(u,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function ui(e){function t(x){return Hu(x,e)}Zn!==null&&Hu(Zn,e),Jn!==null&&Hu(Jn,e),Fn!==null&&Hu(Fn,e),ai.forEach(t),li.forEach(t);for(var n=0;n<$n.length;n++){var l=$n[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&$n.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],u=n[l+1],c=i[le]||null;if(typeof u=="function")c||rg(n);else if(c){var g=null;if(u&&u.hasAttribute("formAction")){if(i=u,c=u[le]||null)g=c.formAction;else if(as(i)!==null)continue}else g=c.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),rg(n)}}}function is(e){this._internalRoot=e}ju.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=zt();eg(n,l,e,t,null,null)},ju.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eg(e.current,2,null,e,null,null),yu(),t[$]=null}};function ju(e){this._internalRoot=e}ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=q();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&ig(e)}};var og=r.version;if(og!=="19.1.0")throw Error(o(527,og,"19.1.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var tm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{ea=Uu.inject(tm),ft=Uu}catch{}}return oi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",i=Tf,u=wf,c=Mf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Id(e,1,!1,null,null,n,l,i,u,c,g,null),e[$]=t.current,ko(e),new is(t)},oi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,i="",u=Tf,c=wf,g=Mf,x=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=Id(e,1,!0,t,n??null,l,i,u,c,g,x,C),t.context=Pd(null),n=t.current,l=zt(),l=T(l),i=zn(l),i.callback=null,Hn(n,i,l),n=l,t.current.lanes=n,na(t,n),un(t),e[$]=t.current,ko(e),new ju(t)},oi.version="19.1.0",oi}var vg;function dm(){if(vg)return os.exports;vg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),os.exports=fm(),os.exports}var gm=dm();const hm=(s,r,a,o)=>{var d,m,D,b;const f=[a,{code:r,...o||{}}];if((m=(d=s==null?void 0:s.services)==null?void 0:d.logger)!=null&&m.forward)return s.services.logger.forward(f,"warn","react-i18next::",!0);Sa(f[0])&&(f[0]=`react-i18next:: ${f[0]}`),(b=(D=s==null?void 0:s.services)==null?void 0:D.logger)!=null&&b.warn?s.services.logger.warn(...f):console!=null&&console.warn&&console.warn(...f)},bg={},bs=(s,r,a,o)=>{Sa(a)&&bg[a]||(Sa(a)&&(bg[a]=new Date),hm(s,r,a,o))},Gg=(s,r)=>()=>{if(s.isInitialized)r();else{const a=()=>{setTimeout(()=>{s.off("initialized",a)},0),r()};s.on("initialized",a)}},xs=(s,r,a)=>{s.loadNamespaces(r,Gg(s,a))},xg=(s,r,a,o)=>{if(Sa(a)&&(a=[a]),s.options.preload&&s.options.preload.indexOf(r)>-1)return xs(s,a,o);a.forEach(f=>{s.options.ns.indexOf(f)<0&&s.options.ns.push(f)}),s.loadLanguages(r,Gg(s,o))},pm=(s,r,a={})=>!r.languages||!r.languages.length?(bs(r,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:r.languages}),!0):r.hasLoadedNamespace(s,{lng:a.lng,precheck:(o,f)=>{var d;if(((d=a.bindI18n)==null?void 0:d.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!f(o.isLanguageChangingTo,s))return!1}}),Sa=s=>typeof s=="string",mm=s=>typeof s=="object"&&s!==null,ym=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,vm={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},bm=s=>vm[s],xm=s=>s.replace(ym,bm);let Ss={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:xm};const Sm=(s={})=>{Ss={...Ss,...s}},Dm=()=>Ss;let Vg;const Em=s=>{Vg=s},Tm=()=>Vg,wm={type:"3rdParty",init(s){Sm(s.options.react),Em(s)}},Mm=Le.createContext();class Om{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Cm=(s,r)=>{const a=Le.useRef();return Le.useEffect(()=>{a.current=s},[s,r]),a.current},Xg=(s,r,a,o)=>s.getFixedT(r,a,o),Am=(s,r,a,o)=>Le.useCallback(Xg(s,r,a,o),[s,r,a,o]),yi=(s,r={})=>{var Te,he,Ce,W;const{i18n:a}=r,{i18n:o,defaultNS:f}=Le.useContext(Mm)||{},d=a||o||Tm();if(d&&!d.reportNamespaces&&(d.reportNamespaces=new Om),!d){bs(d,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const ie=(ne,P)=>Sa(P)?P:mm(P)&&Sa(P.defaultValue)?P.defaultValue:Array.isArray(ne)?ne[ne.length-1]:ne,Oe=[ie,{},!1];return Oe.t=ie,Oe.i18n={},Oe.ready=!1,Oe}(Te=d.options.react)!=null&&Te.wait&&bs(d,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const m={...Dm(),...d.options.react,...r},{useSuspense:D,keyPrefix:b}=m;let y=f||((he=d.options)==null?void 0:he.defaultNS);y=Sa(y)?[y]:y||["translation"],(W=(Ce=d.reportNamespaces).addUsedNamespaces)==null||W.call(Ce,y);const E=(d.isInitialized||d.initializedStoreOnce)&&y.every(ie=>pm(ie,d,m)),z=Am(d,r.lng||null,m.nsMode==="fallback"?y:y[0],b),O=()=>z,k=()=>Xg(d,r.lng||null,m.nsMode==="fallback"?y:y[0],b),[G,Y]=Le.useState(O);let F=y.join();r.lng&&(F=`${r.lng}${F}`);const Ee=Cm(F),fe=Le.useRef(!0);Le.useEffect(()=>{const{bindI18n:ie,bindI18nStore:Oe}=m;fe.current=!0,!E&&!D&&(r.lng?xg(d,r.lng,y,()=>{fe.current&&Y(k)}):xs(d,y,()=>{fe.current&&Y(k)})),E&&Ee&&Ee!==F&&fe.current&&Y(k);const ne=()=>{fe.current&&Y(k)};return ie&&(d==null||d.on(ie,ne)),Oe&&(d==null||d.store.on(Oe,ne)),()=>{fe.current=!1,d&&(ie==null||ie.split(" ").forEach(P=>d.off(P,ne))),Oe&&d&&Oe.split(" ").forEach(P=>d.store.off(P,ne))}},[d,F]),Le.useEffect(()=>{fe.current&&E&&Y(O)},[d,b,E]);const me=[G,d,E];if(me.t=G,me.i18n=d,me.ready=E,E||!E&&!D)return me;throw new Promise(ie=>{r.lng?xg(d,r.lng,y,()=>ie()):xs(d,y,()=>ie())})};function Ds(s,r){const[a,o]=Le.useState(()=>{const f=window.localStorage.getItem(r);if(f!==null)try{return JSON.parse(f)}catch(d){return console.error("Error parsing from localStorage:",d),s}else return s});return Le.useEffect(()=>{window.localStorage.setItem(r,JSON.stringify(a))},[r,a]),[a,o]}var ds=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],cl={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(s){return typeof console<"u"&&console.warn(s)},getWeek:function(s){var r=new Date(s.getTime());r.setHours(0,0,0,0),r.setDate(r.getDate()+3-(r.getDay()+6)%7);var a=new Date(r.getFullYear(),0,4);return 1+Math.round(((r.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},vi={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(s){var r=s%100;if(r>3&&r<21)return"th";switch(r%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},Tt=function(s,r){return r===void 0&&(r=2),("000"+s).slice(r*-1)},Zt=function(s){return s===!0?1:0};function Sg(s,r){var a;return function(){var o=this,f=arguments;clearTimeout(a),a=setTimeout(function(){return s.apply(o,f)},r)}}var gs=function(s){return s instanceof Array?s:[s]};function bt(s,r,a){if(a===!0)return s.classList.add(r);s.classList.remove(r)}function He(s,r,a){var o=window.document.createElement(s);return r=r||"",a=a||"",o.className=r,a!==void 0&&(o.textContent=a),o}function Yu(s){for(;s.firstChild;)s.removeChild(s.firstChild)}function Qg(s,r){if(r(s))return s;if(s.parentNode)return Qg(s.parentNode,r)}function Bu(s,r){var a=He("div","numInputWrapper"),o=He("input","numInput "+s),f=He("span","arrowUp"),d=He("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),r!==void 0)for(var m in r)o.setAttribute(m,r[m]);return a.appendChild(o),a.appendChild(f),a.appendChild(d),a}function Lt(s){try{if(typeof s.composedPath=="function"){var r=s.composedPath();return r[0]}return s.target}catch{return s.target}}var hs=function(){},ku=function(s,r,a){return a.months[r?"shorthand":"longhand"][s]},Nm={D:hs,F:function(s,r,a){s.setMonth(a.months.longhand.indexOf(r))},G:function(s,r){s.setHours((s.getHours()>=12?12:0)+parseFloat(r))},H:function(s,r){s.setHours(parseFloat(r))},J:function(s,r){s.setDate(parseFloat(r))},K:function(s,r,a){s.setHours(s.getHours()%12+12*Zt(new RegExp(a.amPM[1],"i").test(r)))},M:function(s,r,a){s.setMonth(a.months.shorthand.indexOf(r))},S:function(s,r){s.setSeconds(parseFloat(r))},U:function(s,r){return new Date(parseFloat(r)*1e3)},W:function(s,r,a){var o=parseInt(r),f=new Date(s.getFullYear(),0,2+(o-1)*7,0,0,0,0);return f.setDate(f.getDate()-f.getDay()+a.firstDayOfWeek),f},Y:function(s,r){s.setFullYear(parseFloat(r))},Z:function(s,r){return new Date(r)},d:function(s,r){s.setDate(parseFloat(r))},h:function(s,r){s.setHours((s.getHours()>=12?12:0)+parseFloat(r))},i:function(s,r){s.setMinutes(parseFloat(r))},j:function(s,r){s.setDate(parseFloat(r))},l:hs,m:function(s,r){s.setMonth(parseFloat(r)-1)},n:function(s,r){s.setMonth(parseFloat(r)-1)},s:function(s,r){s.setSeconds(parseFloat(r))},u:function(s,r){return new Date(parseFloat(r))},w:hs,y:function(s,r){s.setFullYear(2e3+parseFloat(r))}},xa={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},pi={Z:function(s){return s.toISOString()},D:function(s,r,a){return r.weekdays.shorthand[pi.w(s,r,a)]},F:function(s,r,a){return ku(pi.n(s,r,a)-1,!1,r)},G:function(s,r,a){return Tt(pi.h(s,r,a))},H:function(s){return Tt(s.getHours())},J:function(s,r){return r.ordinal!==void 0?s.getDate()+r.ordinal(s.getDate()):s.getDate()},K:function(s,r){return r.amPM[Zt(s.getHours()>11)]},M:function(s,r){return ku(s.getMonth(),!0,r)},S:function(s){return Tt(s.getSeconds())},U:function(s){return s.getTime()/1e3},W:function(s,r,a){return a.getWeek(s)},Y:function(s){return Tt(s.getFullYear(),4)},d:function(s){return Tt(s.getDate())},h:function(s){return s.getHours()%12?s.getHours()%12:12},i:function(s){return Tt(s.getMinutes())},j:function(s){return s.getDate()},l:function(s,r){return r.weekdays.longhand[s.getDay()]},m:function(s){return Tt(s.getMonth()+1)},n:function(s){return s.getMonth()+1},s:function(s){return s.getSeconds()},u:function(s){return s.getTime()},w:function(s){return s.getDay()},y:function(s){return String(s.getFullYear()).substring(2)}},Kg=function(s){var r=s.config,a=r===void 0?cl:r,o=s.l10n,f=o===void 0?vi:o,d=s.isMobile,m=d===void 0?!1:d;return function(D,b,y){var E=y||f;return a.formatDate!==void 0&&!m?a.formatDate(D,b,E):b.split("").map(function(z,O,k){return pi[z]&&k[O-1]!=="\\"?pi[z](D,E,a):z!=="\\"?z:""}).join("")}},Es=function(s){var r=s.config,a=r===void 0?cl:r,o=s.l10n,f=o===void 0?vi:o;return function(d,m,D,b){if(!(d!==0&&!d)){var y=b||f,E,z=d;if(d instanceof Date)E=new Date(d.getTime());else if(typeof d!="string"&&d.toFixed!==void 0)E=new Date(d);else if(typeof d=="string"){var O=m||(a||cl).dateFormat,k=String(d).trim();if(k==="today")E=new Date,D=!0;else if(a&&a.parseDate)E=a.parseDate(d,O);else if(/Z$/.test(k)||/GMT$/.test(k))E=new Date(d);else{for(var G=void 0,Y=[],F=0,Ee=0,fe="";F<O.length;F++){var me=O[F],Te=me==="\\",he=O[F-1]==="\\"||Te;if(xa[me]&&!he){fe+=xa[me];var Ce=new RegExp(fe).exec(d);Ce&&(G=!0)&&Y[me!=="Y"?"push":"unshift"]({fn:Nm[me],val:Ce[++Ee]})}else Te||(fe+=".")}E=!a||!a.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),Y.forEach(function(W){var ie=W.fn,Oe=W.val;return E=ie(E,Oe,y)||E}),E=G?E:void 0}}if(!(E instanceof Date&&!isNaN(E.getTime()))){a.errorHandler(new Error("Invalid date provided: "+z));return}return D===!0&&E.setHours(0,0,0,0),E}}};function jt(s,r,a){return a===void 0&&(a=!0),a!==!1?new Date(s.getTime()).setHours(0,0,0,0)-new Date(r.getTime()).setHours(0,0,0,0):s.getTime()-r.getTime()}var _m=function(s,r,a){return s>Math.min(r,a)&&s<Math.max(r,a)},ps=function(s,r,a){return s*3600+r*60+a},Rm=function(s){var r=Math.floor(s/3600),a=(s-r*3600)/60;return[r,a,s-r*3600-a*60]},zm={DAY:864e5};function ms(s){var r=s.defaultHour,a=s.defaultMinute,o=s.defaultSeconds;if(s.minDate!==void 0){var f=s.minDate.getHours(),d=s.minDate.getMinutes(),m=s.minDate.getSeconds();r<f&&(r=f),r===f&&a<d&&(a=d),r===f&&a===d&&o<m&&(o=s.minDate.getSeconds())}if(s.maxDate!==void 0){var D=s.maxDate.getHours(),b=s.maxDate.getMinutes();r=Math.min(r,D),r===D&&(a=Math.min(b,a)),r===D&&a===b&&(o=s.maxDate.getSeconds())}return{hours:r,minutes:a,seconds:o}}typeof Object.assign!="function"&&(Object.assign=function(s){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(!s)throw TypeError("Cannot convert undefined or null to object");for(var o=function(D){D&&Object.keys(D).forEach(function(b){return s[b]=D[b]})},f=0,d=r;f<d.length;f++){var m=d[f];o(m)}return s});var mt=function(){return mt=Object.assign||function(s){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(s[f]=r[f])}return s},mt.apply(this,arguments)},Dg=function(){for(var s=0,r=0,a=arguments.length;r<a;r++)s+=arguments[r].length;for(var o=Array(s),f=0,r=0;r<a;r++)for(var d=arguments[r],m=0,D=d.length;m<D;m++,f++)o[f]=d[m];return o},Hm=300;function Lm(s,r){var a={config:mt(mt({},cl),We.defaultConfig),l10n:vi};a.parseDate=Es({config:a.config,l10n:a.l10n}),a._handlers=[],a.pluginElements=[],a.loadedPlugins=[],a._bind=Y,a._setHoursFromDate=O,a._positionCalendar=Pn,a.changeMonth=H,a.changeYear=at,a.clear=Z,a.close=X,a.onMouseOver=wn,a._createElement=He,a.createDay=Ce,a.destroy=ae,a.isEnabled=Ae,a.jumpToDate=fe,a.updateValue=Ot,a.open=hl,a.redraw=Ei,a.set=ea,a.setDate=It,a.toggle=Ma;function o(){a.utils={getDaysInMonth:function(h,p){return h===void 0&&(h=a.currentMonth),p===void 0&&(p=a.currentYear),h===1&&(p%4===0&&p%100!==0||p%400===0)?29:a.l10n.daysInMonth[h]}}}function f(){a.element=a.input=s,a.isOpen=!1,Zu(),Si(),Fu(),Ju(),o(),a.isMobile||he(),Ee(),(a.selectedDates.length||a.config.noCalendar)&&(a.config.enableTime&&O(a.config.noCalendar?a.latestSelectedDateObj:void 0),Ot(!1)),D();var h=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!a.isMobile&&h&&Pn(),Re("onReady")}function d(){var h;return((h=a.calendarContainer)===null||h===void 0?void 0:h.getRootNode()).activeElement||document.activeElement}function m(h){return h.bind(a)}function D(){var h=a.config;h.weekNumbers===!1&&h.showMonths===1||h.noCalendar!==!0&&window.requestAnimationFrame(function(){if(a.calendarContainer!==void 0&&(a.calendarContainer.style.visibility="hidden",a.calendarContainer.style.display="block"),a.daysContainer!==void 0){var p=(a.days.offsetWidth+1)*h.showMonths;a.daysContainer.style.width=p+"px",a.calendarContainer.style.width=p+(a.weekWrapper!==void 0?a.weekWrapper.offsetWidth:0)+"px",a.calendarContainer.style.removeProperty("visibility"),a.calendarContainer.style.removeProperty("display")}})}function b(h){if(a.selectedDates.length===0){var p=a.config.minDate===void 0||jt(new Date,a.config.minDate)>=0?new Date:new Date(a.config.minDate.getTime()),T=ms(a.config);p.setHours(T.hours,T.minutes,T.seconds,p.getMilliseconds()),a.selectedDates=[p],a.latestSelectedDateObj=p}h!==void 0&&h.type!=="blur"&&Wu(h);var R=a._input.value;z(),Ot(),a._input.value!==R&&a._debouncedChange()}function y(h,p){return h%12+12*Zt(p===a.l10n.amPM[1])}function E(h){switch(h%24){case 0:case 12:return 12;default:return h%12}}function z(){if(!(a.hourElement===void 0||a.minuteElement===void 0)){var h=(parseInt(a.hourElement.value.slice(-2),10)||0)%24,p=(parseInt(a.minuteElement.value,10)||0)%60,T=a.secondElement!==void 0?(parseInt(a.secondElement.value,10)||0)%60:0;a.amPM!==void 0&&(h=y(h,a.amPM.textContent));var R=a.config.minTime!==void 0||a.config.minDate&&a.minDateHasTime&&a.latestSelectedDateObj&&jt(a.latestSelectedDateObj,a.config.minDate,!0)===0,q=a.config.maxTime!==void 0||a.config.maxDate&&a.maxDateHasTime&&a.latestSelectedDateObj&&jt(a.latestSelectedDateObj,a.config.maxDate,!0)===0;if(a.config.maxTime!==void 0&&a.config.minTime!==void 0&&a.config.minTime>a.config.maxTime){var J=ps(a.config.minTime.getHours(),a.config.minTime.getMinutes(),a.config.minTime.getSeconds()),se=ps(a.config.maxTime.getHours(),a.config.maxTime.getMinutes(),a.config.maxTime.getSeconds()),Q=ps(h,p,T);if(Q>se&&Q<J){var le=Rm(J);h=le[0],p=le[1],T=le[2]}}else{if(q){var $=a.config.maxTime!==void 0?a.config.maxTime:a.config.maxDate;h=Math.min(h,$.getHours()),h===$.getHours()&&(p=Math.min(p,$.getMinutes())),p===$.getMinutes()&&(T=Math.min(T,$.getSeconds()))}if(R){var re=a.config.minTime!==void 0?a.config.minTime:a.config.minDate;h=Math.max(h,re.getHours()),h===re.getHours()&&p<re.getMinutes()&&(p=re.getMinutes()),p===re.getMinutes()&&(T=Math.max(T,re.getSeconds()))}}k(h,p,T)}}function O(h){var p=h||a.latestSelectedDateObj;p&&p instanceof Date&&k(p.getHours(),p.getMinutes(),p.getSeconds())}function k(h,p,T){a.latestSelectedDateObj!==void 0&&a.latestSelectedDateObj.setHours(h%24,p,T||0,0),!(!a.hourElement||!a.minuteElement||a.isMobile)&&(a.hourElement.value=Tt(a.config.time_24hr?h:(12+h)%12+12*Zt(h%12===0)),a.minuteElement.value=Tt(p),a.amPM!==void 0&&(a.amPM.textContent=a.l10n.amPM[Zt(h>=12)]),a.secondElement!==void 0&&(a.secondElement.value=Tt(T)))}function G(h){var p=Lt(h),T=parseInt(p.value)+(h.delta||0);(T/1e3>1||h.key==="Enter"&&!/[^\d]/.test(T.toString()))&&at(T)}function Y(h,p,T,R){if(p instanceof Array)return p.forEach(function(q){return Y(h,q,T,R)});if(h instanceof Array)return h.forEach(function(q){return Y(q,p,T,R)});h.addEventListener(p,T,R),a._handlers.push({remove:function(){return h.removeEventListener(p,T,R)}})}function F(){Re("onChange")}function Ee(){if(a.config.wrap&&["open","close","toggle","clear"].forEach(function(T){Array.prototype.forEach.call(a.element.querySelectorAll("[data-"+T+"]"),function(R){return Y(R,"click",a[T])})}),a.isMobile){wa();return}var h=Sg(gl,50);if(a._debouncedChange=Sg(F,Hm),a.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&Y(a.daysContainer,"mouseover",function(T){a.config.mode==="range"&&wn(Lt(T))}),Y(a._input,"keydown",In),a.calendarContainer!==void 0&&Y(a.calendarContainer,"keydown",In),!a.config.inline&&!a.config.static&&Y(window,"resize",h),window.ontouchstart!==void 0?Y(window.document,"touchstart",de):Y(window.document,"mousedown",de),Y(window.document,"focus",de,{capture:!0}),a.config.clickOpens===!0&&(Y(a._input,"focus",a.open),Y(a._input,"click",a.open)),a.daysContainer!==void 0&&(Y(a.monthNav,"click",na),Y(a.monthNav,["keyup","increment"],G),Y(a.daysContainer,"click",Ti)),a.timeContainer!==void 0&&a.minuteElement!==void 0&&a.hourElement!==void 0){var p=function(T){return Lt(T).select()};Y(a.timeContainer,["increment"],b),Y(a.timeContainer,"blur",b,{capture:!0}),Y(a.timeContainer,"click",me),Y([a.hourElement,a.minuteElement],["focus","click"],p),a.secondElement!==void 0&&Y(a.secondElement,"focus",function(){return a.secondElement&&a.secondElement.select()}),a.amPM!==void 0&&Y(a.amPM,"click",function(T){b(T)})}a.config.allowInput&&Y(a._input,"blur",dl)}function fe(h,p){var T=h!==void 0?a.parseDate(h):a.latestSelectedDateObj||(a.config.minDate&&a.config.minDate>a.now?a.config.minDate:a.config.maxDate&&a.config.maxDate<a.now?a.config.maxDate:a.now),R=a.currentYear,q=a.currentMonth;try{T!==void 0&&(a.currentYear=T.getFullYear(),a.currentMonth=T.getMonth())}catch(J){J.message="Invalid date supplied: "+T,a.config.errorHandler(J)}p&&a.currentYear!==R&&(Re("onYearChange"),_e()),p&&(a.currentYear!==R||a.currentMonth!==q)&&Re("onMonthChange"),a.redraw()}function me(h){var p=Lt(h);~p.className.indexOf("arrow")&&Te(h,p.classList.contains("arrowUp")?1:-1)}function Te(h,p,T){var R=h&&Lt(h),q=T||R&&R.parentNode&&R.parentNode.firstChild,J=Mn("increment");J.delta=p,q&&q.dispatchEvent(J)}function he(){var h=window.document.createDocumentFragment();if(a.calendarContainer=He("div","flatpickr-calendar"),a.calendarContainer.tabIndex=-1,!a.config.noCalendar){if(h.appendChild(_()),a.innerContainer=He("div","flatpickr-innerContainer"),a.config.weekNumbers){var p=v(),T=p.weekWrapper,R=p.weekNumbers;a.innerContainer.appendChild(T),a.weekNumbers=R,a.weekWrapper=T}a.rContainer=He("div","flatpickr-rContainer"),a.rContainer.appendChild(te()),a.daysContainer||(a.daysContainer=He("div","flatpickr-days"),a.daysContainer.tabIndex=-1),ue(),a.rContainer.appendChild(a.daysContainer),a.innerContainer.appendChild(a.rContainer),h.appendChild(a.innerContainer)}a.config.enableTime&&h.appendChild(V()),bt(a.calendarContainer,"rangeMode",a.config.mode==="range"),bt(a.calendarContainer,"animate",a.config.animate===!0),bt(a.calendarContainer,"multiMonth",a.config.showMonths>1),a.calendarContainer.appendChild(h);var q=a.config.appendTo!==void 0&&a.config.appendTo.nodeType!==void 0;if((a.config.inline||a.config.static)&&(a.calendarContainer.classList.add(a.config.inline?"inline":"static"),a.config.inline&&(!q&&a.element.parentNode?a.element.parentNode.insertBefore(a.calendarContainer,a._input.nextSibling):a.config.appendTo!==void 0&&a.config.appendTo.appendChild(a.calendarContainer)),a.config.static)){var J=He("div","flatpickr-wrapper");a.element.parentNode&&a.element.parentNode.insertBefore(J,a.element),J.appendChild(a.element),a.altInput&&J.appendChild(a.altInput),J.appendChild(a.calendarContainer)}!a.config.static&&!a.config.inline&&(a.config.appendTo!==void 0?a.config.appendTo:window.document.body).appendChild(a.calendarContainer)}function Ce(h,p,T,R){var q=Ae(p,!0),J=He("span",h,p.getDate().toString());return J.dateObj=p,J.$i=R,J.setAttribute("aria-label",a.formatDate(p,a.config.ariaDateFormat)),h.indexOf("hidden")===-1&&jt(p,a.now)===0&&(a.todayDateElem=J,J.classList.add("today"),J.setAttribute("aria-current","date")),q?(J.tabIndex=-1,on(p)&&(J.classList.add("selected"),a.selectedDateElem=J,a.config.mode==="range"&&(bt(J,"startRange",a.selectedDates[0]&&jt(p,a.selectedDates[0],!0)===0),bt(J,"endRange",a.selectedDates[1]&&jt(p,a.selectedDates[1],!0)===0),h==="nextMonthDay"&&J.classList.add("inRange")))):J.classList.add("flatpickr-disabled"),a.config.mode==="range"&&$u(p)&&!on(p)&&J.classList.add("inRange"),a.weekNumbers&&a.config.showMonths===1&&h!=="prevMonthDay"&&R%7===6&&a.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+a.config.getWeek(p)+"</span>"),Re("onDayCreate",J),J}function W(h){h.focus(),a.config.mode==="range"&&wn(h)}function ie(h){for(var p=h>0?0:a.config.showMonths-1,T=h>0?a.config.showMonths:-1,R=p;R!=T;R+=h)for(var q=a.daysContainer.children[R],J=h>0?0:q.children.length-1,se=h>0?q.children.length:-1,Q=J;Q!=se;Q+=h){var le=q.children[Q];if(le.className.indexOf("hidden")===-1&&Ae(le.dateObj))return le}}function Oe(h,p){for(var T=h.className.indexOf("Month")===-1?h.dateObj.getMonth():a.currentMonth,R=p>0?a.config.showMonths:-1,q=p>0?1:-1,J=T-a.currentMonth;J!=R;J+=q)for(var se=a.daysContainer.children[J],Q=T-a.currentMonth===J?h.$i+p:p<0?se.children.length-1:0,le=se.children.length,$=Q;$>=0&&$<le&&$!=(p>0?le:-1);$+=q){var re=se.children[$];if(re.className.indexOf("hidden")===-1&&Ae(re.dateObj)&&Math.abs(h.$i-$)>=Math.abs(p))return W(re)}a.changeMonth(q),ne(ie(q),0)}function ne(h,p){var T=d(),R=wt(T||document.body),q=h!==void 0?h:R?T:a.selectedDateElem!==void 0&&wt(a.selectedDateElem)?a.selectedDateElem:a.todayDateElem!==void 0&&wt(a.todayDateElem)?a.todayDateElem:ie(p>0?1:-1);q===void 0?a._input.focus():R?Oe(q,p):W(q)}function P(h,p){for(var T=(new Date(h,p,1).getDay()-a.l10n.firstDayOfWeek+7)%7,R=a.utils.getDaysInMonth((p-1+12)%12,h),q=a.utils.getDaysInMonth(p,h),J=window.document.createDocumentFragment(),se=a.config.showMonths>1,Q=se?"prevMonthDay hidden":"prevMonthDay",le=se?"nextMonthDay hidden":"nextMonthDay",$=R+1-T,re=0;$<=R;$++,re++)J.appendChild(Ce("flatpickr-day "+Q,new Date(h,p-1,$),$,re));for($=1;$<=q;$++,re++)J.appendChild(Ce("flatpickr-day",new Date(h,p,$),$,re));for(var je=q+1;je<=42-T&&(a.config.showMonths===1||re%7!==0);je++,re++)J.appendChild(Ce("flatpickr-day "+le,new Date(h,p+1,je%q),je,re));var Ut=He("div","dayContainer");return Ut.appendChild(J),Ut}function ue(){if(a.daysContainer!==void 0){Yu(a.daysContainer),a.weekNumbers&&Yu(a.weekNumbers);for(var h=document.createDocumentFragment(),p=0;p<a.config.showMonths;p++){var T=new Date(a.currentYear,a.currentMonth,1);T.setMonth(a.currentMonth+p),h.appendChild(P(T.getFullYear(),T.getMonth()))}a.daysContainer.appendChild(h),a.days=a.daysContainer.firstChild,a.config.mode==="range"&&a.selectedDates.length===1&&wn()}}function _e(){if(!(a.config.showMonths>1||a.config.monthSelectorType!=="dropdown")){var h=function(R){return a.config.minDate!==void 0&&a.currentYear===a.config.minDate.getFullYear()&&R<a.config.minDate.getMonth()?!1:!(a.config.maxDate!==void 0&&a.currentYear===a.config.maxDate.getFullYear()&&R>a.config.maxDate.getMonth())};a.monthsDropdownContainer.tabIndex=-1,a.monthsDropdownContainer.innerHTML="";for(var p=0;p<12;p++)if(h(p)){var T=He("option","flatpickr-monthDropdown-month");T.value=new Date(a.currentYear,p).getMonth().toString(),T.textContent=ku(p,a.config.shorthandCurrentMonth,a.l10n),T.tabIndex=-1,a.currentMonth===p&&(T.selected=!0),a.monthsDropdownContainer.appendChild(T)}}}function Be(){var h=He("div","flatpickr-month"),p=window.document.createDocumentFragment(),T;a.config.showMonths>1||a.config.monthSelectorType==="static"?T=He("span","cur-month"):(a.monthsDropdownContainer=He("select","flatpickr-monthDropdown-months"),a.monthsDropdownContainer.setAttribute("aria-label",a.l10n.monthAriaLabel),Y(a.monthsDropdownContainer,"change",function(se){var Q=Lt(se),le=parseInt(Q.value,10);a.changeMonth(le-a.currentMonth),Re("onMonthChange")}),_e(),T=a.monthsDropdownContainer);var R=Bu("cur-year",{tabindex:"-1"}),q=R.getElementsByTagName("input")[0];q.setAttribute("aria-label",a.l10n.yearAriaLabel),a.config.minDate&&q.setAttribute("min",a.config.minDate.getFullYear().toString()),a.config.maxDate&&(q.setAttribute("max",a.config.maxDate.getFullYear().toString()),q.disabled=!!a.config.minDate&&a.config.minDate.getFullYear()===a.config.maxDate.getFullYear());var J=He("div","flatpickr-current-month");return J.appendChild(T),J.appendChild(R),p.appendChild(J),h.appendChild(p),{container:h,yearElement:q,monthElement:T}}function we(){Yu(a.monthNav),a.monthNav.appendChild(a.prevMonthNav),a.config.showMonths&&(a.yearElements=[],a.monthElements=[]);for(var h=a.config.showMonths;h--;){var p=Be();a.yearElements.push(p.yearElement),a.monthElements.push(p.monthElement),a.monthNav.appendChild(p.container)}a.monthNav.appendChild(a.nextMonthNav)}function _(){return a.monthNav=He("div","flatpickr-months"),a.yearElements=[],a.monthElements=[],a.prevMonthNav=He("span","flatpickr-prev-month"),a.prevMonthNav.innerHTML=a.config.prevArrow,a.nextMonthNav=He("span","flatpickr-next-month"),a.nextMonthNav.innerHTML=a.config.nextArrow,we(),Object.defineProperty(a,"_hidePrevMonthArrow",{get:function(){return a.__hidePrevMonthArrow},set:function(h){a.__hidePrevMonthArrow!==h&&(bt(a.prevMonthNav,"flatpickr-disabled",h),a.__hidePrevMonthArrow=h)}}),Object.defineProperty(a,"_hideNextMonthArrow",{get:function(){return a.__hideNextMonthArrow},set:function(h){a.__hideNextMonthArrow!==h&&(bt(a.nextMonthNav,"flatpickr-disabled",h),a.__hideNextMonthArrow=h)}}),a.currentYearElement=a.yearElements[0],ta(),a.monthNav}function V(){a.calendarContainer.classList.add("hasTime"),a.config.noCalendar&&a.calendarContainer.classList.add("noCalendar");var h=ms(a.config);a.timeContainer=He("div","flatpickr-time"),a.timeContainer.tabIndex=-1;var p=He("span","flatpickr-time-separator",":"),T=Bu("flatpickr-hour",{"aria-label":a.l10n.hourAriaLabel});a.hourElement=T.getElementsByTagName("input")[0];var R=Bu("flatpickr-minute",{"aria-label":a.l10n.minuteAriaLabel});if(a.minuteElement=R.getElementsByTagName("input")[0],a.hourElement.tabIndex=a.minuteElement.tabIndex=-1,a.hourElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getHours():a.config.time_24hr?h.hours:E(h.hours)),a.minuteElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getMinutes():h.minutes),a.hourElement.setAttribute("step",a.config.hourIncrement.toString()),a.minuteElement.setAttribute("step",a.config.minuteIncrement.toString()),a.hourElement.setAttribute("min",a.config.time_24hr?"0":"1"),a.hourElement.setAttribute("max",a.config.time_24hr?"23":"12"),a.hourElement.setAttribute("maxlength","2"),a.minuteElement.setAttribute("min","0"),a.minuteElement.setAttribute("max","59"),a.minuteElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(T),a.timeContainer.appendChild(p),a.timeContainer.appendChild(R),a.config.time_24hr&&a.timeContainer.classList.add("time24hr"),a.config.enableSeconds){a.timeContainer.classList.add("hasSeconds");var q=Bu("flatpickr-second");a.secondElement=q.getElementsByTagName("input")[0],a.secondElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getSeconds():h.seconds),a.secondElement.setAttribute("step",a.minuteElement.getAttribute("step")),a.secondElement.setAttribute("min","0"),a.secondElement.setAttribute("max","59"),a.secondElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(He("span","flatpickr-time-separator",":")),a.timeContainer.appendChild(q)}return a.config.time_24hr||(a.amPM=He("span","flatpickr-am-pm",a.l10n.amPM[Zt((a.latestSelectedDateObj?a.hourElement.value:a.config.defaultHour)>11)]),a.amPM.title=a.l10n.toggleTitle,a.amPM.tabIndex=-1,a.timeContainer.appendChild(a.amPM)),a.timeContainer}function te(){a.weekdayContainer?Yu(a.weekdayContainer):a.weekdayContainer=He("div","flatpickr-weekdays");for(var h=a.config.showMonths;h--;){var p=He("div","flatpickr-weekdaycontainer");a.weekdayContainer.appendChild(p)}return B(),a.weekdayContainer}function B(){if(a.weekdayContainer){var h=a.l10n.firstDayOfWeek,p=Dg(a.l10n.weekdays.shorthand);h>0&&h<p.length&&(p=Dg(p.splice(h,p.length),p.splice(0,h)));for(var T=a.config.showMonths;T--;)a.weekdayContainer.children[T].innerHTML=`
      <span class='flatpickr-weekday'>
        `+p.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function v(){a.calendarContainer.classList.add("hasWeeks");var h=He("div","flatpickr-weekwrapper");h.appendChild(He("span","flatpickr-weekday",a.l10n.weekAbbreviation));var p=He("div","flatpickr-weeks");return h.appendChild(p),{weekWrapper:h,weekNumbers:p}}function H(h,p){p===void 0&&(p=!0);var T=p?h:h-a.currentMonth;T<0&&a._hidePrevMonthArrow===!0||T>0&&a._hideNextMonthArrow===!0||(a.currentMonth+=T,(a.currentMonth<0||a.currentMonth>11)&&(a.currentYear+=a.currentMonth>11?1:-1,a.currentMonth=(a.currentMonth+12)%12,Re("onYearChange"),_e()),ue(),Re("onMonthChange"),ta())}function Z(h,p){if(h===void 0&&(h=!0),p===void 0&&(p=!0),a.input.value="",a.altInput!==void 0&&(a.altInput.value=""),a.mobileInput!==void 0&&(a.mobileInput.value=""),a.selectedDates=[],a.latestSelectedDateObj=void 0,p===!0&&(a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth()),a.config.enableTime===!0){var T=ms(a.config),R=T.hours,q=T.minutes,J=T.seconds;k(R,q,J)}a.redraw(),h&&Re("onChange")}function X(){a.isOpen=!1,a.isMobile||(a.calendarContainer!==void 0&&a.calendarContainer.classList.remove("open"),a._input!==void 0&&a._input.classList.remove("active")),Re("onClose")}function ae(){a.config!==void 0&&Re("onDestroy");for(var h=a._handlers.length;h--;)a._handlers[h].remove();if(a._handlers=[],a.mobileInput)a.mobileInput.parentNode&&a.mobileInput.parentNode.removeChild(a.mobileInput),a.mobileInput=void 0;else if(a.calendarContainer&&a.calendarContainer.parentNode)if(a.config.static&&a.calendarContainer.parentNode){var p=a.calendarContainer.parentNode;if(p.lastChild&&p.removeChild(p.lastChild),p.parentNode){for(;p.firstChild;)p.parentNode.insertBefore(p.firstChild,p);p.parentNode.removeChild(p)}}else a.calendarContainer.parentNode.removeChild(a.calendarContainer);a.altInput&&(a.input.type="text",a.altInput.parentNode&&a.altInput.parentNode.removeChild(a.altInput),delete a.altInput),a.input&&(a.input.type=a.input._type,a.input.classList.remove("flatpickr-input"),a.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(T){try{delete a[T]}catch{}})}function be(h){return a.calendarContainer.contains(h)}function de(h){if(a.isOpen&&!a.config.inline){var p=Lt(h),T=be(p),R=p===a.input||p===a.altInput||a.element.contains(p)||h.path&&h.path.indexOf&&(~h.path.indexOf(a.input)||~h.path.indexOf(a.altInput)),q=!R&&!T&&!be(h.relatedTarget),J=!a.config.ignoredFocusElements.some(function(se){return se.contains(p)});q&&J&&(a.config.allowInput&&a.setDate(a._input.value,!1,a.config.altInput?a.config.altFormat:a.config.dateFormat),a.timeContainer!==void 0&&a.minuteElement!==void 0&&a.hourElement!==void 0&&a.input.value!==""&&a.input.value!==void 0&&b(),a.close(),a.config&&a.config.mode==="range"&&a.selectedDates.length===1&&a.clear(!1))}}function at(h){if(!(!h||a.config.minDate&&h<a.config.minDate.getFullYear()||a.config.maxDate&&h>a.config.maxDate.getFullYear())){var p=h,T=a.currentYear!==p;a.currentYear=p||a.currentYear,a.config.maxDate&&a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth=Math.min(a.config.maxDate.getMonth(),a.currentMonth):a.config.minDate&&a.currentYear===a.config.minDate.getFullYear()&&(a.currentMonth=Math.max(a.config.minDate.getMonth(),a.currentMonth)),T&&(a.redraw(),Re("onYearChange"),_e())}}function Ae(h,p){var T;p===void 0&&(p=!0);var R=a.parseDate(h,void 0,p);if(a.config.minDate&&R&&jt(R,a.config.minDate,p!==void 0?p:!a.minDateHasTime)<0||a.config.maxDate&&R&&jt(R,a.config.maxDate,p!==void 0?p:!a.maxDateHasTime)>0)return!1;if(!a.config.enable&&a.config.disable.length===0)return!0;if(R===void 0)return!1;for(var q=!!a.config.enable,J=(T=a.config.enable)!==null&&T!==void 0?T:a.config.disable,se=0,Q=void 0;se<J.length;se++){if(Q=J[se],typeof Q=="function"&&Q(R))return q;if(Q instanceof Date&&R!==void 0&&Q.getTime()===R.getTime())return q;if(typeof Q=="string"){var le=a.parseDate(Q,void 0,!0);return le&&le.getTime()===R.getTime()?q:!q}else if(typeof Q=="object"&&R!==void 0&&Q.from&&Q.to&&R.getTime()>=Q.from.getTime()&&R.getTime()<=Q.to.getTime())return q}return!q}function wt(h){return a.daysContainer!==void 0?h.className.indexOf("hidden")===-1&&h.className.indexOf("flatpickr-disabled")===-1&&a.daysContainer.contains(h):!1}function dl(h){var p=h.target===a._input,T=a._input.value.trimEnd()!==Oa();p&&T&&!(h.relatedTarget&&be(h.relatedTarget))&&a.setDate(a._input.value,!0,h.target===a.altInput?a.config.altFormat:a.config.dateFormat)}function In(h){var p=Lt(h),T=a.config.wrap?s.contains(p):p===a._input,R=a.config.allowInput,q=a.isOpen&&(!R||!T),J=a.config.inline&&T&&!R;if(h.keyCode===13&&T){if(R)return a.setDate(a._input.value,!0,p===a.altInput?a.config.altFormat:a.config.dateFormat),a.close(),p.blur();a.open()}else if(be(p)||q||J){var se=!!a.timeContainer&&a.timeContainer.contains(p);switch(h.keyCode){case 13:se?(h.preventDefault(),b(),Ea()):Ti(h);break;case 27:h.preventDefault(),Ea();break;case 8:case 46:T&&!a.config.allowInput&&(h.preventDefault(),a.clear());break;case 37:case 39:if(!se&&!T){h.preventDefault();var Q=d();if(a.daysContainer!==void 0&&(R===!1||Q&&wt(Q))){var le=h.keyCode===39?1:-1;h.ctrlKey?(h.stopPropagation(),H(le),ne(ie(1),0)):ne(void 0,le)}}else a.hourElement&&a.hourElement.focus();break;case 38:case 40:h.preventDefault();var $=h.keyCode===40?1:-1;a.daysContainer&&p.$i!==void 0||p===a.input||p===a.altInput?h.ctrlKey?(h.stopPropagation(),at(a.currentYear-$),ne(ie(1),0)):se||ne(void 0,$*7):p===a.currentYearElement?at(a.currentYear-$):a.config.enableTime&&(!se&&a.hourElement&&a.hourElement.focus(),b(h),a._debouncedChange());break;case 9:if(se){var re=[a.hourElement,a.minuteElement,a.secondElement,a.amPM].concat(a.pluginElements).filter(function(gt){return gt}),je=re.indexOf(p);if(je!==-1){var Ut=re[je+(h.shiftKey?-1:1)];h.preventDefault(),(Ut||a._input).focus()}}else!a.config.noCalendar&&a.daysContainer&&a.daysContainer.contains(p)&&h.shiftKey&&(h.preventDefault(),a._input.focus());break}}if(a.amPM!==void 0&&p===a.amPM)switch(h.key){case a.l10n.amPM[0].charAt(0):case a.l10n.amPM[0].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[0],z(),Ot();break;case a.l10n.amPM[1].charAt(0):case a.l10n.amPM[1].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[1],z(),Ot();break}(T||be(p))&&Re("onKeyDown",h)}function wn(h,p){if(p===void 0&&(p="flatpickr-day"),!(a.selectedDates.length!==1||h&&(!h.classList.contains(p)||h.classList.contains("flatpickr-disabled")))){for(var T=h?h.dateObj.getTime():a.days.firstElementChild.dateObj.getTime(),R=a.parseDate(a.selectedDates[0],void 0,!0).getTime(),q=Math.min(T,a.selectedDates[0].getTime()),J=Math.max(T,a.selectedDates[0].getTime()),se=!1,Q=0,le=0,$=q;$<J;$+=zm.DAY)Ae(new Date($),!0)||(se=se||$>q&&$<J,$<R&&(!Q||$>Q)?Q=$:$>R&&(!le||$<le)&&(le=$));var re=Array.from(a.rContainer.querySelectorAll("*:nth-child(-n+"+a.config.showMonths+") > ."+p));re.forEach(function(je){var Ut=je.dateObj,gt=Ut.getTime(),Jt=Q>0&&gt<Q||le>0&&gt>le;if(Jt){je.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Pt){je.classList.remove(Pt)});return}else if(se&&!Jt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Pt){je.classList.remove(Pt)}),h!==void 0&&(h.classList.add(T<=a.selectedDates[0].getTime()?"startRange":"endRange"),R<T&&gt===R?je.classList.add("startRange"):R>T&&gt===R&&je.classList.add("endRange"),gt>=Q&&(le===0||gt<=le)&&_m(gt,R,T)&&je.classList.add("inRange"))})}}function gl(){a.isOpen&&!a.config.static&&!a.config.inline&&Pn()}function hl(h,p){if(p===void 0&&(p=a._positionElement),a.isMobile===!0){if(h){h.preventDefault();var T=Lt(h);T&&T.blur()}a.mobileInput!==void 0&&(a.mobileInput.focus(),a.mobileInput.click()),Re("onOpen");return}else if(a._input.disabled||a.config.inline)return;var R=a.isOpen;a.isOpen=!0,R||(a.calendarContainer.classList.add("open"),a._input.classList.add("active"),Re("onOpen"),Pn(p)),a.config.enableTime===!0&&a.config.noCalendar===!0&&a.config.allowInput===!1&&(h===void 0||!a.timeContainer.contains(h.relatedTarget))&&setTimeout(function(){return a.hourElement.select()},50)}function xi(h){return function(p){var T=a.config["_"+h+"Date"]=a.parseDate(p,a.config.dateFormat),R=a.config["_"+(h==="min"?"max":"min")+"Date"];T!==void 0&&(a[h==="min"?"minDateHasTime":"maxDateHasTime"]=T.getHours()>0||T.getMinutes()>0||T.getSeconds()>0),a.selectedDates&&(a.selectedDates=a.selectedDates.filter(function(q){return Ae(q)}),!a.selectedDates.length&&h==="min"&&O(T),Ot()),a.daysContainer&&(Ei(),T!==void 0?a.currentYearElement[h]=T.getFullYear().toString():a.currentYearElement.removeAttribute(h),a.currentYearElement.disabled=!!R&&T!==void 0&&R.getFullYear()===T.getFullYear())}}function Zu(){var h=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],p=mt(mt({},JSON.parse(JSON.stringify(s.dataset||{}))),r),T={};a.config.parseDate=p.parseDate,a.config.formatDate=p.formatDate,Object.defineProperty(a.config,"enable",{get:function(){return a.config._enable},set:function(re){a.config._enable=dt(re)}}),Object.defineProperty(a.config,"disable",{get:function(){return a.config._disable},set:function(re){a.config._disable=dt(re)}});var R=p.mode==="time";if(!p.dateFormat&&(p.enableTime||R)){var q=We.defaultConfig.dateFormat||cl.dateFormat;T.dateFormat=p.noCalendar||R?"H:i"+(p.enableSeconds?":S":""):q+" H:i"+(p.enableSeconds?":S":"")}if(p.altInput&&(p.enableTime||R)&&!p.altFormat){var J=We.defaultConfig.altFormat||cl.altFormat;T.altFormat=p.noCalendar||R?"h:i"+(p.enableSeconds?":S K":" K"):J+(" h:i"+(p.enableSeconds?":S":"")+" K")}Object.defineProperty(a.config,"minDate",{get:function(){return a.config._minDate},set:xi("min")}),Object.defineProperty(a.config,"maxDate",{get:function(){return a.config._maxDate},set:xi("max")});var se=function(re){return function(je){a.config[re==="min"?"_minTime":"_maxTime"]=a.parseDate(je,"H:i:S")}};Object.defineProperty(a.config,"minTime",{get:function(){return a.config._minTime},set:se("min")}),Object.defineProperty(a.config,"maxTime",{get:function(){return a.config._maxTime},set:se("max")}),p.mode==="time"&&(a.config.noCalendar=!0,a.config.enableTime=!0),Object.assign(a.config,T,p);for(var Q=0;Q<h.length;Q++)a.config[h[Q]]=a.config[h[Q]]===!0||a.config[h[Q]]==="true";ds.filter(function(re){return a.config[re]!==void 0}).forEach(function(re){a.config[re]=gs(a.config[re]||[]).map(m)}),a.isMobile=!a.config.disableMobile&&!a.config.inline&&a.config.mode==="single"&&!a.config.disable.length&&!a.config.enable&&!a.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var Q=0;Q<a.config.plugins.length;Q++){var le=a.config.plugins[Q](a)||{};for(var $ in le)ds.indexOf($)>-1?a.config[$]=gs(le[$]).map(m).concat(a.config[$]):typeof p[$]>"u"&&(a.config[$]=le[$])}p.altInputClass||(a.config.altInputClass=Mt().className+" "+a.config.altInputClass),Re("onParseConfig")}function Mt(){return a.config.wrap?s.querySelector("[data-input]"):s}function Si(){typeof a.config.locale!="object"&&typeof We.l10ns[a.config.locale]>"u"&&a.config.errorHandler(new Error("flatpickr: invalid locale "+a.config.locale)),a.l10n=mt(mt({},We.l10ns.default),typeof a.config.locale=="object"?a.config.locale:a.config.locale!=="default"?We.l10ns[a.config.locale]:void 0),xa.D="("+a.l10n.weekdays.shorthand.join("|")+")",xa.l="("+a.l10n.weekdays.longhand.join("|")+")",xa.M="("+a.l10n.months.shorthand.join("|")+")",xa.F="("+a.l10n.months.longhand.join("|")+")",xa.K="("+a.l10n.amPM[0]+"|"+a.l10n.amPM[1]+"|"+a.l10n.amPM[0].toLowerCase()+"|"+a.l10n.amPM[1].toLowerCase()+")";var h=mt(mt({},r),JSON.parse(JSON.stringify(s.dataset||{})));h.time_24hr===void 0&&We.defaultConfig.time_24hr===void 0&&(a.config.time_24hr=a.l10n.time_24hr),a.formatDate=Kg(a),a.parseDate=Es({config:a.config,l10n:a.l10n})}function Pn(h){if(typeof a.config.position=="function")return void a.config.position(a,h);if(a.calendarContainer!==void 0){Re("onPreCalendarPosition");var p=h||a._positionElement,T=Array.prototype.reduce.call(a.calendarContainer.children,function(An,Iu){return An+Iu.offsetHeight},0),R=a.calendarContainer.offsetWidth,q=a.config.position.split(" "),J=q[0],se=q.length>1?q[1]:null,Q=p.getBoundingClientRect(),le=window.innerHeight-Q.bottom,$=J==="above"||J!=="below"&&le<T&&Q.top>T,re=window.pageYOffset+Q.top+($?-T-2:p.offsetHeight+2);if(bt(a.calendarContainer,"arrowTop",!$),bt(a.calendarContainer,"arrowBottom",$),!a.config.inline){var je=window.pageXOffset+Q.left,Ut=!1,gt=!1;se==="center"?(je-=(R-Q.width)/2,Ut=!0):se==="right"&&(je-=R-Q.width,gt=!0),bt(a.calendarContainer,"arrowLeft",!Ut&&!gt),bt(a.calendarContainer,"arrowCenter",Ut),bt(a.calendarContainer,"arrowRight",gt);var Jt=window.document.body.offsetWidth-(window.pageXOffset+Q.right),Pt=je+R>window.document.body.offsetWidth,On=Jt+R>window.document.body.offsetWidth;if(bt(a.calendarContainer,"rightMost",Pt),!a.config.static)if(a.calendarContainer.style.top=re+"px",!Pt)a.calendarContainer.style.left=je+"px",a.calendarContainer.style.right="auto";else if(!On)a.calendarContainer.style.left="auto",a.calendarContainer.style.right=Jt+"px";else{var en=Di();if(en===void 0)return;var aa=window.document.body.offsetWidth,Cn=Math.max(0,aa/2-R/2),Ie=".flatpickr-calendar.centerMost:before",Mi=".flatpickr-calendar.centerMost:after",Oi=en.cssRules.length,sn="{left:"+Q.left+"px;right:auto;}";bt(a.calendarContainer,"rightMost",!1),bt(a.calendarContainer,"centerMost",!0),en.insertRule(Ie+","+Mi+sn,Oi),a.calendarContainer.style.left=Cn+"px",a.calendarContainer.style.right="auto"}}}}function Di(){for(var h=null,p=0;p<document.styleSheets.length;p++){var T=document.styleSheets[p];if(T.cssRules){try{T.cssRules}catch{continue}h=T;break}}return h??Da()}function Da(){var h=document.createElement("style");return document.head.appendChild(h),h.sheet}function Ei(){a.config.noCalendar||a.isMobile||(_e(),ta(),ue())}function Ea(){a._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(a.close,0):a.close()}function Ti(h){h.preventDefault(),h.stopPropagation();var p=function(re){return re.classList&&re.classList.contains("flatpickr-day")&&!re.classList.contains("flatpickr-disabled")&&!re.classList.contains("notAllowed")},T=Qg(Lt(h),p);if(T!==void 0){var R=T,q=a.latestSelectedDateObj=new Date(R.dateObj.getTime()),J=(q.getMonth()<a.currentMonth||q.getMonth()>a.currentMonth+a.config.showMonths-1)&&a.config.mode!=="range";if(a.selectedDateElem=R,a.config.mode==="single")a.selectedDates=[q];else if(a.config.mode==="multiple"){var se=on(q);se?a.selectedDates.splice(parseInt(se),1):a.selectedDates.push(q)}else a.config.mode==="range"&&(a.selectedDates.length===2&&a.clear(!1,!1),a.latestSelectedDateObj=q,a.selectedDates.push(q),jt(q,a.selectedDates[0],!0)!==0&&a.selectedDates.sort(function(re,je){return re.getTime()-je.getTime()}));if(z(),J){var Q=a.currentYear!==q.getFullYear();a.currentYear=q.getFullYear(),a.currentMonth=q.getMonth(),Q&&(Re("onYearChange"),_e()),Re("onMonthChange")}if(ta(),ue(),Ot(),!J&&a.config.mode!=="range"&&a.config.showMonths===1?W(R):a.selectedDateElem!==void 0&&a.hourElement===void 0&&a.selectedDateElem&&a.selectedDateElem.focus(),a.hourElement!==void 0&&a.hourElement!==void 0&&a.hourElement.focus(),a.config.closeOnSelect){var le=a.config.mode==="single"&&!a.config.enableTime,$=a.config.mode==="range"&&a.selectedDates.length===2&&!a.config.enableTime;(le||$)&&Ea()}F()}}var Ta={locale:[Si,B],showMonths:[we,D,te],minDate:[fe],maxDate:[fe],positionElement:[wi],clickOpens:[function(){a.config.clickOpens===!0?(Y(a._input,"focus",a.open),Y(a._input,"click",a.open)):(a._input.removeEventListener("focus",a.open),a._input.removeEventListener("click",a.open))}]};function ea(h,p){if(h!==null&&typeof h=="object"){Object.assign(a.config,h);for(var T in h)Ta[T]!==void 0&&Ta[T].forEach(function(R){return R()})}else a.config[h]=p,Ta[h]!==void 0?Ta[h].forEach(function(R){return R()}):ds.indexOf(h)>-1&&(a.config[h]=gs(p));a.redraw(),Ot(!0)}function ft(h,p){var T=[];if(h instanceof Array)T=h.map(function(R){return a.parseDate(R,p)});else if(h instanceof Date||typeof h=="number")T=[a.parseDate(h,p)];else if(typeof h=="string")switch(a.config.mode){case"single":case"time":T=[a.parseDate(h,p)];break;case"multiple":T=h.split(a.config.conjunction).map(function(R){return a.parseDate(R,p)});break;case"range":T=h.split(a.l10n.rangeSeparator).map(function(R){return a.parseDate(R,p)});break}else a.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(h)));a.selectedDates=a.config.allowInvalidPreload?T:T.filter(function(R){return R instanceof Date&&Ae(R,!1)}),a.config.mode==="range"&&a.selectedDates.sort(function(R,q){return R.getTime()-q.getTime()})}function It(h,p,T){if(p===void 0&&(p=!1),T===void 0&&(T=a.config.dateFormat),h!==0&&!h||h instanceof Array&&h.length===0)return a.clear(p);ft(h,T),a.latestSelectedDateObj=a.selectedDates[a.selectedDates.length-1],a.redraw(),fe(void 0,p),O(),a.selectedDates.length===0&&a.clear(!1),Ot(p),p&&Re("onChange")}function dt(h){return h.slice().map(function(p){return typeof p=="string"||typeof p=="number"||p instanceof Date?a.parseDate(p,void 0,!0):p&&typeof p=="object"&&p.from&&p.to?{from:a.parseDate(p.from,void 0),to:a.parseDate(p.to,void 0)}:p}).filter(function(p){return p})}function Ju(){a.selectedDates=[],a.now=a.parseDate(a.config.now)||new Date;var h=a.config.defaultDate||((a.input.nodeName==="INPUT"||a.input.nodeName==="TEXTAREA")&&a.input.placeholder&&a.input.value===a.input.placeholder?null:a.input.value);h&&ft(h,a.config.dateFormat),a._initialDate=a.selectedDates.length>0?a.selectedDates[0]:a.config.minDate&&a.config.minDate.getTime()>a.now.getTime()?a.config.minDate:a.config.maxDate&&a.config.maxDate.getTime()<a.now.getTime()?a.config.maxDate:a.now,a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth(),a.selectedDates.length>0&&(a.latestSelectedDateObj=a.selectedDates[0]),a.config.minTime!==void 0&&(a.config.minTime=a.parseDate(a.config.minTime,"H:i")),a.config.maxTime!==void 0&&(a.config.maxTime=a.parseDate(a.config.maxTime,"H:i")),a.minDateHasTime=!!a.config.minDate&&(a.config.minDate.getHours()>0||a.config.minDate.getMinutes()>0||a.config.minDate.getSeconds()>0),a.maxDateHasTime=!!a.config.maxDate&&(a.config.maxDate.getHours()>0||a.config.maxDate.getMinutes()>0||a.config.maxDate.getSeconds()>0)}function Fu(){if(a.input=Mt(),!a.input){a.config.errorHandler(new Error("Invalid input element specified"));return}a.input._type=a.input.type,a.input.type="text",a.input.classList.add("flatpickr-input"),a._input=a.input,a.config.altInput&&(a.altInput=He(a.input.nodeName,a.config.altInputClass),a._input=a.altInput,a.altInput.placeholder=a.input.placeholder,a.altInput.disabled=a.input.disabled,a.altInput.required=a.input.required,a.altInput.tabIndex=a.input.tabIndex,a.altInput.type="text",a.input.setAttribute("type","hidden"),!a.config.static&&a.input.parentNode&&a.input.parentNode.insertBefore(a.altInput,a.input.nextSibling)),a.config.allowInput||a._input.setAttribute("readonly","readonly"),wi()}function wi(){a._positionElement=a.config.positionElement||a._input}function wa(){var h=a.config.enableTime?a.config.noCalendar?"time":"datetime-local":"date";a.mobileInput=He("input",a.input.className+" flatpickr-mobile"),a.mobileInput.tabIndex=1,a.mobileInput.type=h,a.mobileInput.disabled=a.input.disabled,a.mobileInput.required=a.input.required,a.mobileInput.placeholder=a.input.placeholder,a.mobileFormatStr=h==="datetime-local"?"Y-m-d\\TH:i:S":h==="date"?"Y-m-d":"H:i:S",a.selectedDates.length>0&&(a.mobileInput.defaultValue=a.mobileInput.value=a.formatDate(a.selectedDates[0],a.mobileFormatStr)),a.config.minDate&&(a.mobileInput.min=a.formatDate(a.config.minDate,"Y-m-d")),a.config.maxDate&&(a.mobileInput.max=a.formatDate(a.config.maxDate,"Y-m-d")),a.input.getAttribute("step")&&(a.mobileInput.step=String(a.input.getAttribute("step"))),a.input.type="hidden",a.altInput!==void 0&&(a.altInput.type="hidden");try{a.input.parentNode&&a.input.parentNode.insertBefore(a.mobileInput,a.input.nextSibling)}catch{}Y(a.mobileInput,"change",function(p){a.setDate(Lt(p).value,!1,a.mobileFormatStr),Re("onChange"),Re("onClose")})}function Ma(h){if(a.isOpen===!0)return a.close();a.open(h)}function Re(h,p){if(a.config!==void 0){var T=a.config[h];if(T!==void 0&&T.length>0)for(var R=0;T[R]&&R<T.length;R++)T[R](a.selectedDates,a.input.value,a,p);h==="onChange"&&(a.input.dispatchEvent(Mn("change")),a.input.dispatchEvent(Mn("input")))}}function Mn(h){var p=document.createEvent("Event");return p.initEvent(h,!0,!0),p}function on(h){for(var p=0;p<a.selectedDates.length;p++){var T=a.selectedDates[p];if(T instanceof Date&&jt(T,h)===0)return""+p}return!1}function $u(h){return a.config.mode!=="range"||a.selectedDates.length<2?!1:jt(h,a.selectedDates[0])>=0&&jt(h,a.selectedDates[1])<=0}function ta(){a.config.noCalendar||a.isMobile||!a.monthNav||(a.yearElements.forEach(function(h,p){var T=new Date(a.currentYear,a.currentMonth,1);T.setMonth(a.currentMonth+p),a.config.showMonths>1||a.config.monthSelectorType==="static"?a.monthElements[p].textContent=ku(T.getMonth(),a.config.shorthandCurrentMonth,a.l10n)+" ":a.monthsDropdownContainer.value=T.getMonth().toString(),h.value=T.getFullYear().toString()}),a._hidePrevMonthArrow=a.config.minDate!==void 0&&(a.currentYear===a.config.minDate.getFullYear()?a.currentMonth<=a.config.minDate.getMonth():a.currentYear<a.config.minDate.getFullYear()),a._hideNextMonthArrow=a.config.maxDate!==void 0&&(a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth+1>a.config.maxDate.getMonth():a.currentYear>a.config.maxDate.getFullYear()))}function Oa(h){var p=h||(a.config.altInput?a.config.altFormat:a.config.dateFormat);return a.selectedDates.map(function(T){return a.formatDate(T,p)}).filter(function(T,R,q){return a.config.mode!=="range"||a.config.enableTime||q.indexOf(T)===R}).join(a.config.mode!=="range"?a.config.conjunction:a.l10n.rangeSeparator)}function Ot(h){h===void 0&&(h=!0),a.mobileInput!==void 0&&a.mobileFormatStr&&(a.mobileInput.value=a.latestSelectedDateObj!==void 0?a.formatDate(a.latestSelectedDateObj,a.mobileFormatStr):""),a.input.value=Oa(a.config.dateFormat),a.altInput!==void 0&&(a.altInput.value=Oa(a.config.altFormat)),h!==!1&&Re("onValueUpdate")}function na(h){var p=Lt(h),T=a.prevMonthNav.contains(p),R=a.nextMonthNav.contains(p);T||R?H(T?-1:1):a.yearElements.indexOf(p)>=0?p.select():p.classList.contains("arrowUp")?a.changeYear(a.currentYear+1):p.classList.contains("arrowDown")&&a.changeYear(a.currentYear-1)}function Wu(h){h.preventDefault();var p=h.type==="keydown",T=Lt(h),R=T;a.amPM!==void 0&&T===a.amPM&&(a.amPM.textContent=a.l10n.amPM[Zt(a.amPM.textContent===a.l10n.amPM[0])]);var q=parseFloat(R.getAttribute("min")),J=parseFloat(R.getAttribute("max")),se=parseFloat(R.getAttribute("step")),Q=parseInt(R.value,10),le=h.delta||(p?h.which===38?1:-1:0),$=Q+se*le;if(typeof R.value<"u"&&R.value.length===2){var re=R===a.hourElement,je=R===a.minuteElement;$<q?($=J+$+Zt(!re)+(Zt(re)&&Zt(!a.amPM)),je&&Te(void 0,-1,a.hourElement)):$>J&&($=R===a.hourElement?$-J-Zt(!a.amPM):q,je&&Te(void 0,1,a.hourElement)),a.amPM&&re&&(se===1?$+Q===23:Math.abs($-Q)>se)&&(a.amPM.textContent=a.l10n.amPM[Zt(a.amPM.textContent===a.l10n.amPM[0])]),R.value=Tt($)}}return f(),a}function fl(s,r){for(var a=Array.prototype.slice.call(s).filter(function(m){return m instanceof HTMLElement}),o=[],f=0;f<a.length;f++){var d=a[f];try{if(d.getAttribute("data-fp-omit")!==null)continue;d._flatpickr!==void 0&&(d._flatpickr.destroy(),d._flatpickr=void 0),d._flatpickr=Lm(d,r||{}),o.push(d._flatpickr)}catch(m){console.error(m)}}return o.length===1?o[0]:o}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(s){return fl(this,s)},HTMLElement.prototype.flatpickr=function(s){return fl([this],s)});var We=function(s,r){return typeof s=="string"?fl(window.document.querySelectorAll(s),r):s instanceof Node?fl([s],r):fl(s,r)};We.defaultConfig={};We.l10ns={en:mt({},vi),default:mt({},vi)};We.localize=function(s){We.l10ns.default=mt(mt({},We.l10ns.default),s)};We.setDefaults=function(s){We.defaultConfig=mt(mt({},We.defaultConfig),s)};We.parseDate=Es({});We.formatDate=Kg({});We.compareDates=jt;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(s){return fl(this,s)});Date.prototype.fp_incr=function(s){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof s=="string"?parseInt(s,10):s))};typeof window<"u"&&(window.flatpickr=We);const jm=["onCreate","onDestroy"],Ts=["onChange","onOpen","onClose","onMonthChange","onYearChange","onReady","onValueUpdate","onDayCreate"],Um=(s,r)=>(Ts.forEach(a=>{const o=r[a],f=s[a];if(o){f&&!Array.isArray(f)?s[a]=[s[a]]:s[a]||(s[a]=[]);const d=Array.isArray(o)?o:[o];s[a].length===0?s[a]=d:s[a].push(...d)}}),Ts.forEach(a=>{delete r[a]}),jm.forEach(a=>{delete r[a]}),s),Ym=s=>{const r=Le.useMemo(()=>({...s}),[s]),{defaultValue:a,options:o={},value:f,children:d,render:m}=r,D=Le.useMemo(()=>Um(o,r),[o,r]),b=Le.useRef(null),y=Le.useRef(void 0);Le.useImperativeHandle(s.ref,()=>({get flatpickr(){return y.current}}),[]),Le.useEffect(()=>{var O;const k=()=>{var Y;D.onClose=D.onClose||(()=>{var F;(F=b.current)!=null&&F.blur&&b.current.blur()}),y.current=(((Y=We)==null?void 0:Y.default)||We)(b.current,D),y.current&&f!==void 0&&y.current.setDate(f,!1),s.onCreate&&s.onCreate(y.current)},G=()=>{s.onDestroy&&s.onDestroy(y.current),y.current&&y.current.destroy(),y.current=void 0};if(k(),y.current){const Y=Object.getOwnPropertyNames(D);for(let F=Y.length-1;F>=0;F--){const Ee=Y[F];let fe=D[Ee];(fe==null?void 0:fe.toString())!==((O=y.current.config[Ee])==null?void 0:O.toString())&&(Ts.includes(Ee)&&!Array.isArray(fe)&&(fe=[fe]),y.current.set(Ee,fe))}f!==void 0&&f!==y.current.input.value&&y.current.setDate(f,!1)}return()=>{G()}},[D,o,r,f,s]);const E=Le.useCallback(O=>{b.current=O},[]);if(m)return m({...r,defaultValue:a,value:f},E);const z=Le.useCallback(O=>{var k,G;s&&s.onChange&&(Array.isArray(s==null?void 0:s.onChange)?(k=s==null?void 0:s.onChange)==null||k.forEach(()=>[new Date(O.target.value)],(f==null?void 0:f.toString())||""):typeof s.onChange=="function"&&((G=s==null?void 0:s.onChange)==null||G.call(s,[new Date(O.target.value)],(f==null?void 0:f.toString())||"",y.current)))},[s,f]);return o.wrap?K.jsx("div",{className:"flatpickr",ref:E,children:d}):K.jsx("input",{onChange:z,...r,value:f==null?void 0:f.toString(),defaultValue:a,ref:E})};var fi={exports:{}},Bm=fi.exports,Eg;function qm(){return Eg||(Eg=1,function(s,r){(function(a,o){o(r)})(Bm,function(a){var o={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(f){var d=f%100;if(d>3&&d<21)return"th";switch(d%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1};a.default=o,a.english=o,Object.defineProperty(a,"__esModule",{value:!0})})}(fi,fi.exports)),fi.exports}var km=qm();const Zg=am(km);var di={exports:{}},Gm=di.exports,Tg;function Vm(){return Tg||(Tg=1,function(s,r){(function(a,o){o(r)})(Gm,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},firstDayOfWeek:1,weekAbbreviation:"wk",rangeSeparator:" t/m ",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",time_24hr:!0,ordinal:function(m){return m===1||m===8||m>=20?"ste":"de"}};o.l10ns.nl=f;var d=o.l10ns;a.Dutch=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(di,di.exports)),di.exports}var Xm=Vm(),gi={exports:{}},Qm=gi.exports,wg;function Km(){return wg||(wg=1,function(s,r){(function(a,o){o(r)})(Qm,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={firstDayOfWeek:1,weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},ordinal:function(m){return m>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",time_24hr:!0};o.l10ns.fr=f;var d=o.l10ns;a.French=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(gi,gi.exports)),gi.exports}var Zm=Km(),hi={exports:{}},Jm=hi.exports,Mg;function Fm(){return Mg||(Mg=1,function(s,r){(function(a,o){o(r)})(Jm,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={weekdays:{shorthand:["So","Mo","Di","Mi","Do","Fr","Sa"],longhand:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},months:{shorthand:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],longhand:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},firstDayOfWeek:1,weekAbbreviation:"KW",rangeSeparator:" bis ",scrollTitle:"Zum Ändern scrollen",toggleTitle:"Zum Umschalten klicken",time_24hr:!0};o.l10ns.de=f;var d=o.l10ns;a.German=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(hi,hi.exports)),hi.exports}var $m=Fm();const Wm={nl:Xm.Dutch,fr:Zm.French,de:$m.German,en:Zg},Im=({value:s,onChange:r,options:a})=>{const{i18n:o}=yi(),f=s instanceof Date&&!isNaN(s)?s:new Date;return K.jsx(Ym,{value:f,onChange:d=>r(d[0]||new Date),options:{...a,dateFormat:"d-m-Y",locale:Wm[o.language]||Zg,allowInput:!0},className:"input max-w-30 join-item shadow"})};function Pm({title:s,subtitle:r,selectedDate:a,onDateChange:o,onClearAll:f}){const{i18n:d}=yi(),[m,D]=Ds(d.language,"currentLanguage");Le.useEffect(()=>{d.language!==m&&d.changeLanguage(m)},[m,d]);const b=O=>{D(O),d.changeLanguage(O)},y=()=>{o(new Date)},E=()=>f(),z=[{code:"nl",label:"NL"},{code:"fr",label:"FR"},{code:"de",label:"DE"},{code:"en",label:"EN"}];return K.jsx(K.Fragment,{children:K.jsxs("div",{id:"app-header",className:"repel | flex-wrap gap-4 mt-1 mb-8",children:[K.jsxs("h1",{className:"text-3xl text-primary",children:[K.jsxs("span",{className:"font-bold",children:[s," "]}),K.jsxs("span",{className:"font-light",children:[r," "]})]}),K.jsxs("div",{className:"repel | flex-wrap place-items-center gap-x-8 gap-y-4",children:[K.jsx("div",{className:"repel | place-items-center gap-x-2",children:K.jsxs("div",{className:"join",children:[K.jsxs("div",{className:"tooltip group relative",children:[K.jsx("button",{className:"btn btn-secondary join-item","aria-label":"Reset date to today",onClick:y,children:K.jsx("span",{className:"icon-[tabler--calendar-week] size-4.5 shrink-0"})}),K.jsx("span",{className:"tooltip-content absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity",role:"tooltip",children:K.jsx("span",{className:"tooltip-body tooltip-secondary rounded whitespace-nowrap",children:"Today"})})]}),K.jsx(Im,{value:a,onChange:o})]})}),K.jsxs("button",{class:"btn btn-secondary",onClick:E,children:[K.jsx("span",{className:"icon-[tabler--refresh] size-4.5 shrink-0"}),"Reset All"]}),K.jsx("div",{className:"join",children:z.map(O=>K.jsx("button",{onClick:()=>b(O.code),className:`btn join-item ${m===O.code?"btn-primary":"btn-secondary"}`,children:O.label},O.code))})]})]})})}function e0(s){const{t:r}=yi(),a={"Featured News":"sectionFeatured","Euro Tip":"sectionEuroTip","HR Tip":"sectionHrTip",Trainings:"sectionTrainings","Sector News":"sectionSectorNews","Other News":"sectionOtherNews"};return K.jsx("header",{className:"card-header flex justify-between items-center bg-primary-content py-5",children:K.jsx("h2",{className:"card-title",children:r(a[s.title])||s.title})})}function t0({label:s,id:r,name:a,type:o="text",required:f=!1,placeholder:d,rows:m,value:D,onChange:b}){const y=E=>{E.target.select()};return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"input-floating textarea-floating flex flex-col",children:[K.jsxs("label",{className:"input-floating-label textarea-floating-label z-10",htmlFor:r,children:[s,f&&K.jsx("span",{"aria-hidden":"true",style:{color:"red"},children:"*"})]}),o==="textarea"?K.jsx("textarea",{className:"textarea mb-2",id:r,name:a,placeholder:d,rows:m,required:f,"aria-required":f?"true":void 0,value:D,onChange:b,onFocus:y}):K.jsx("input",{className:"input mb-2",type:o,id:r,name:a,placeholder:d,required:f,"aria-required":f?"true":void 0,value:D,onChange:b,onFocus:y})]})})}function n0({id:s,index:r,onRemove:a,onClear:o}){return K.jsxs("header",{className:"card-header flex justify-between items-center bg-primary-content py-4.5",children:[K.jsxs("h3",{className:"card-title text-lg",children:["Item ",r+1]}),K.jsxs("div",{className:"card-actions flex gap-0.5 sm:gap-3 flex-nowrap",children:[K.jsxs("div",{className:"tooltip",children:[K.jsx("button",{type:"button",onClick:o,className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Clear",children:K.jsx("span",{className:"icon-[tabler--eraser] size-5"})}),K.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:K.jsx("span",{className:"tooltip-body",children:"Clear"})})]}),K.jsxs("div",{className:"tooltip",children:[K.jsx("button",{type:"button",onClick:()=>a(s),className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Remove Button",children:K.jsx("span",{className:"icon-[tabler--trash] size-5"})}),K.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:K.jsx("span",{className:"tooltip-body",children:"Remove"})})]})]})]})}const a0={complex:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Summary",id:"summary",name:"summary",type:"textarea",required:!0,placeholder:"Explain what the article is about in a few sentences",rows:3},{label:"CTA",id:"cta",name:"cta",required:!0,placeholder:"Suggest a call to action (e.g., Read more)"}],training:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Title of the training"},{label:"Date",id:"date",name:"date",required:!0,placeholder:"E.g., 1 Jan. 2025"},{label:"Time",id:"time",name:"time",required:!0,placeholder:"E.g., 9:00 - 12:00"},{label:"Format",id:"format",name:"format",required:!0,placeholder:"E.g., Online, Blended, On-Site in Brussels"},{label:"Price",id:"price",name:"price",type:"number",required:!0,placeholder:"E.g., 400"}],simple:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Header",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Subheader",id:"subtitle",name:"subtitle",required:!1,placeholder:"Optional: write a subtitle"}]};function l0({fieldsetType:s,id:r,index:a,onRemove:o,values:f,onFieldChange:d}){const m=a0[s]||[],D=()=>{const b={};m.forEach(y=>{b[y.name]=""}),d(r,b)};return K.jsx(K.Fragment,{children:K.jsxs("fieldset",{className:"card bg-transparent overflow-hidden",children:[K.jsx(n0,{id:r,index:a,onRemove:o,onClear:D}),K.jsx("div",{className:"card-body flex flex-col p-6 pb-4 gap-4 bg-white/75",children:m.map(b=>K.jsx(t0,{...b,value:f&&f[b.name]||"",onChange:y=>d(r,b.name,y.target.value)},b.id))})]})})}function i0({id:s,title:r,fieldsetType:a,fieldsets:o,onAddFieldset:f,onRemove:d,onFieldChange:m}){return K.jsxs("section",{className:"card w-full bg-transparent overflow-hidden",children:[K.jsx(e0,{title:r}),K.jsx("div",{className:"card-body flex flex-col py-0 gap-6 bg-white/50",children:o.map((D,b)=>K.jsx(l0,{fieldsetType:a,id:D.id,index:b,onRemove:d,onFieldChange:m,values:D},D.id))}),K.jsx("div",{className:"card-actions justify-center",children:K.jsxs("button",{type:"button",onClick:()=>f(s),className:"btn btn-block btn-secondary rounded-t-none",children:[K.jsx("span",{className:"icon-[tabler--plus] size-4.5 shrink-0"}),"Add item"]})})]})}function u0({sections:s,onAddFieldset:r,onRemove:a,onFieldChange:o}){return K.jsx("div",{className:"form-wrapper",children:K.jsx("form",{className:"flex flex-col gap-y-6",children:s.map(f=>K.jsx(i0,{id:f.id,title:f.title,fieldsetType:f.fieldsetType,onAddFieldset:r,onRemove:a,onFieldChange:o,fieldsets:f.fieldsets},f.id))})})}function r0({html:s,onCopy:r,isCopied:a}){const o=!navigator.clipboard||!s;return K.jsxs("div",{className:"card w-full overflow-hidden",children:[K.jsx("div",{className:"card-actions justify-center",children:K.jsxs("button",{type:"button",className:"btn btn-block btn-primary rounded-b-none h-12",onClick:r,disabled:o,children:[K.jsx("span",{className:"icon-[tabler--copy] size-4.5 shrink-0"}),a?"Copied!":"Copy HTML"]})}),K.jsx("iframe",{className:"h-svh",srcDoc:s,sandbox:"",loading:"lazy"})]})}const Og=[{title:"Featured News",fieldsetType:"complex",fieldsets:[{url:"#",title:"Lorem ipsum dolor",summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"}]},{title:"Euro Tip",fieldsetType:"complex",fieldsets:[]},{title:"HR Tip",fieldsetType:"complex",fieldsets:[]},{title:"Trainings",fieldsetType:"training",fieldsets:[]},{title:"Sector News",fieldsetType:"simple",fieldsets:[{url:"#",title:"JC 123.456 | Sector name",subtitle:"Lorem ipsum dolor sit amet"}]},{title:"Other News",fieldsetType:"simple",fieldsets:[{url:"#",title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet"}]}],ct=[];for(let s=0;s<256;++s)ct.push((s+256).toString(16).slice(1));function o0(s,r=0){return(ct[s[r+0]]+ct[s[r+1]]+ct[s[r+2]]+ct[s[r+3]]+"-"+ct[s[r+4]]+ct[s[r+5]]+"-"+ct[s[r+6]]+ct[s[r+7]]+"-"+ct[s[r+8]]+ct[s[r+9]]+"-"+ct[s[r+10]]+ct[s[r+11]]+ct[s[r+12]]+ct[s[r+13]]+ct[s[r+14]]+ct[s[r+15]]).toLowerCase()}let ys;const s0=new Uint8Array(16);function c0(){if(!ys){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ys=crypto.getRandomValues.bind(crypto)}return ys(s0)}const f0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Cg={randomUUID:f0};function si(s,r,a){var f;if(Cg.randomUUID&&!s)return Cg.randomUUID();s=s||{};const o=s.random??((f=s.rng)==null?void 0:f.call(s))??c0();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,o0(o)}const pe=s=>typeof s=="string",ci=()=>{let s,r;const a=new Promise((o,f)=>{s=o,r=f});return a.resolve=s,a.reject=r,a},Ag=s=>s==null?"":""+s,d0=(s,r,a)=>{s.forEach(o=>{r[o]&&(a[o]=r[o])})},g0=/###/g,Ng=s=>s&&s.indexOf("###")>-1?s.replace(g0,"."):s,_g=s=>!s||pe(s),mi=(s,r,a)=>{const o=pe(r)?r.split("."):r;let f=0;for(;f<o.length-1;){if(_g(s))return{};const d=Ng(o[f]);!s[d]&&a&&(s[d]=new a),Object.prototype.hasOwnProperty.call(s,d)?s=s[d]:s={},++f}return _g(s)?{}:{obj:s,k:Ng(o[f])}},Rg=(s,r,a)=>{const{obj:o,k:f}=mi(s,r,Object);if(o!==void 0||r.length===1){o[f]=a;return}let d=r[r.length-1],m=r.slice(0,r.length-1),D=mi(s,m,Object);for(;D.obj===void 0&&m.length;)d=`${m[m.length-1]}.${d}`,m=m.slice(0,m.length-1),D=mi(s,m,Object),D!=null&&D.obj&&typeof D.obj[`${D.k}.${d}`]<"u"&&(D.obj=void 0);D.obj[`${D.k}.${d}`]=a},h0=(s,r,a,o)=>{const{obj:f,k:d}=mi(s,r,Object);f[d]=f[d]||[],f[d].push(a)},Gu=(s,r)=>{const{obj:a,k:o}=mi(s,r);if(a&&Object.prototype.hasOwnProperty.call(a,o))return a[o]},p0=(s,r,a)=>{const o=Gu(s,a);return o!==void 0?o:Gu(r,a)},Jg=(s,r,a)=>{for(const o in r)o!=="__proto__"&&o!=="constructor"&&(o in s?pe(s[o])||s[o]instanceof String||pe(r[o])||r[o]instanceof String?a&&(s[o]=r[o]):Jg(s[o],r[o],a):s[o]=r[o]);return s},ol=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var m0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const y0=s=>pe(s)?s.replace(/[&<>"'\/]/g,r=>m0[r]):s;class v0{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const a=this.regExpMap.get(r);if(a!==void 0)return a;const o=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,o),this.regExpQueue.push(r),o}}const b0=[" ",",","?","!",";"],x0=new v0(20),S0=(s,r,a)=>{r=r||"",a=a||"";const o=b0.filter(m=>r.indexOf(m)<0&&a.indexOf(m)<0);if(o.length===0)return!0;const f=x0.getRegExp(`(${o.map(m=>m==="?"?"\\?":m).join("|")})`);let d=!f.test(s);if(!d){const m=s.indexOf(a);m>0&&!f.test(s.substring(0,m))&&(d=!0)}return d},ws=function(s,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[r])return Object.prototype.hasOwnProperty.call(s,r)?s[r]:void 0;const o=r.split(a);let f=s;for(let d=0;d<o.length;){if(!f||typeof f!="object")return;let m,D="";for(let b=d;b<o.length;++b)if(b!==d&&(D+=a),D+=o[b],m=f[D],m!==void 0){if(["string","number","boolean"].indexOf(typeof m)>-1&&b<o.length-1)continue;d+=b-d+1;break}f=m}return f},Vu=s=>s==null?void 0:s.replace("_","-"),D0={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,r){var a,o;(o=(a=console==null?void 0:console[s])==null?void 0:a.apply)==null||o.call(a,console,r)}};class Xu{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(r,a)}init(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=r||D0,this.options=a,this.debug=a.debug}log(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"log","",!0)}warn(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"warn","",!0)}error(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"error","")}deprecate(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(r,a,o,f){return f&&!this.debug?null:(pe(r[0])&&(r[0]=`${o}${this.prefix} ${r[0]}`),this.logger[a](r))}create(r){return new Xu(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new Xu(this.logger,r)}}var rn=new Xu;class Ku{constructor(){this.observers={}}on(r,a){return r.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const f=this.observers[o].get(a)||0;this.observers[o].set(a,f+1)}),this}off(r,a){if(this.observers[r]){if(!a){delete this.observers[r];return}this.observers[r].delete(a)}}emit(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),f=1;f<a;f++)o[f-1]=arguments[f];this.observers[r]&&Array.from(this.observers[r].entries()).forEach(m=>{let[D,b]=m;for(let y=0;y<b;y++)D(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(m=>{let[D,b]=m;for(let y=0;y<b;y++)D.apply(D,[r,...o])})}}class zg extends Ku{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=r||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const a=this.options.ns.indexOf(r);a>-1&&this.options.ns.splice(a,1)}getResource(r,a,o){var y,E;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const d=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator,m=f.ignoreJSONStructure!==void 0?f.ignoreJSONStructure:this.options.ignoreJSONStructure;let D;r.indexOf(".")>-1?D=r.split("."):(D=[r,a],o&&(Array.isArray(o)?D.push(...o):pe(o)&&d?D.push(...o.split(d)):D.push(o)));const b=Gu(this.data,D);return!b&&!a&&!o&&r.indexOf(".")>-1&&(r=D[0],a=D[1],o=D.slice(2).join(".")),b||!m||!pe(o)?b:ws((E=(y=this.data)==null?void 0:y[r])==null?void 0:E[a],o,d)}addResource(r,a,o,f){let d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const m=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator;let D=[r,a];o&&(D=D.concat(m?o.split(m):o)),r.indexOf(".")>-1&&(D=r.split("."),f=a,a=D[1]),this.addNamespaces(a),Rg(this.data,D,f),d.silent||this.emit("added",r,a,o,f)}addResources(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const d in o)(pe(o[d])||Array.isArray(o[d]))&&this.addResource(r,a,d,o[d],{silent:!0});f.silent||this.emit("added",r,a,o)}addResourceBundle(r,a,o,f,d){let m=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},D=[r,a];r.indexOf(".")>-1&&(D=r.split("."),f=o,o=a,a=D[1]),this.addNamespaces(a);let b=Gu(this.data,D)||{};m.skipCopy||(o=JSON.parse(JSON.stringify(o))),f?Jg(b,o,d):b={...b,...o},Rg(this.data,D,b),m.silent||this.emit("added",r,a,o)}removeResourceBundle(r,a){this.hasResourceBundle(r,a)&&delete this.data[r][a],this.removeNamespaces(a),this.emit("removed",r,a)}hasResourceBundle(r,a){return this.getResource(r,a)!==void 0}getResourceBundle(r,a){return a||(a=this.options.defaultNS),this.getResource(r,a)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const a=this.getDataByLanguage(r);return!!(a&&Object.keys(a)||[]).find(f=>a[f]&&Object.keys(a[f]).length>0)}toJSON(){return this.data}}var Fg={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,r,a,o,f){return s.forEach(d=>{var m;r=((m=this.processors[d])==null?void 0:m.process(r,a,o,f))??r}),r}};const Hg={},Lg=s=>!pe(s)&&typeof s!="boolean"&&typeof s!="number";class Qu extends Ku{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),d0(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=rn.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(r==null)return!1;const o=this.resolve(r,a);return(o==null?void 0:o.res)!==void 0}extractFromKey(r,a){let o=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let d=a.ns||this.options.defaultNS||[];const m=o&&r.indexOf(o)>-1,D=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!S0(r,o,f);if(m&&!D){const b=r.match(this.interpolator.nestingRegexp);if(b&&b.length>0)return{key:r,namespaces:pe(d)?[d]:d};const y=r.split(o);(o!==f||o===f&&this.options.ns.indexOf(y[0])>-1)&&(d=y.shift()),r=y.join(f)}return{key:r,namespaces:pe(d)?[d]:d}}translate(r,a,o){if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(a={...a}),a||(a={}),r==null)return"";Array.isArray(r)||(r=[String(r)]);const f=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,d=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:m,namespaces:D}=this.extractFromKey(r[r.length-1],a),b=D[D.length-1],y=a.lng||this.language,E=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((y==null?void 0:y.toLowerCase())==="cimode"){if(E){const P=a.nsSeparator||this.options.nsSeparator;return f?{res:`${b}${P}${m}`,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:b,usedParams:this.getUsedParamsDetails(a)}:`${b}${P}${m}`}return f?{res:m,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:b,usedParams:this.getUsedParamsDetails(a)}:m}const z=this.resolve(r,a);let O=z==null?void 0:z.res;const k=(z==null?void 0:z.usedKey)||m,G=(z==null?void 0:z.exactUsedKey)||m,Y=["[object Number]","[object Function]","[object RegExp]"],F=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,Ee=!this.i18nFormat||this.i18nFormat.handleAsObject,fe=a.count!==void 0&&!pe(a.count),me=Qu.hasDefaultValue(a),Te=fe?this.pluralResolver.getSuffix(y,a.count,a):"",he=a.ordinal&&fe?this.pluralResolver.getSuffix(y,a.count,{ordinal:!1}):"",Ce=fe&&!a.ordinal&&a.count===0,W=Ce&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${Te}`]||a[`defaultValue${he}`]||a.defaultValue;let ie=O;Ee&&!O&&me&&(ie=W);const Oe=Lg(ie),ne=Object.prototype.toString.apply(ie);if(Ee&&ie&&Oe&&Y.indexOf(ne)<0&&!(pe(F)&&Array.isArray(ie))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const P=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,ie,{...a,ns:D}):`key '${m} (${this.language})' returned an object instead of string.`;return f?(z.res=P,z.usedParams=this.getUsedParamsDetails(a),z):P}if(d){const P=Array.isArray(ie),ue=P?[]:{},_e=P?G:k;for(const Be in ie)if(Object.prototype.hasOwnProperty.call(ie,Be)){const we=`${_e}${d}${Be}`;me&&!O?ue[Be]=this.translate(we,{...a,defaultValue:Lg(W)?W[Be]:void 0,joinArrays:!1,ns:D}):ue[Be]=this.translate(we,{...a,joinArrays:!1,ns:D}),ue[Be]===we&&(ue[Be]=ie[Be])}O=ue}}else if(Ee&&pe(F)&&Array.isArray(O))O=O.join(F),O&&(O=this.extendTranslation(O,r,a,o));else{let P=!1,ue=!1;!this.isValidLookup(O)&&me&&(P=!0,O=W),this.isValidLookup(O)||(ue=!0,O=m);const Be=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ue?void 0:O,we=me&&W!==O&&this.options.updateMissing;if(ue||P||we){if(this.logger.log(we?"updateKey":"missingKey",y,b,m,we?W:O),d){const B=this.resolve(m,{...a,keySeparator:!1});B&&B.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let _=[];const V=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&V&&V[0])for(let B=0;B<V.length;B++)_.push(V[B]);else this.options.saveMissingTo==="all"?_=this.languageUtils.toResolveHierarchy(a.lng||this.language):_.push(a.lng||this.language);const te=(B,v,H)=>{var X;const Z=me&&H!==O?H:Be;this.options.missingKeyHandler?this.options.missingKeyHandler(B,b,v,Z,we,a):(X=this.backendConnector)!=null&&X.saveMissing&&this.backendConnector.saveMissing(B,b,v,Z,we,a),this.emit("missingKey",B,b,v,O)};this.options.saveMissing&&(this.options.saveMissingPlurals&&fe?_.forEach(B=>{const v=this.pluralResolver.getSuffixes(B,a);Ce&&a[`defaultValue${this.options.pluralSeparator}zero`]&&v.indexOf(`${this.options.pluralSeparator}zero`)<0&&v.push(`${this.options.pluralSeparator}zero`),v.forEach(H=>{te([B],m+H,a[`defaultValue${H}`]||W)})}):te(_,m,W))}O=this.extendTranslation(O,r,a,z,o),ue&&O===m&&this.options.appendNamespaceToMissingKey&&(O=`${b}:${m}`),(ue||P)&&this.options.parseMissingKeyHandler&&(O=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${b}:${m}`:m,P?O:void 0))}return f?(z.res=O,z.usedParams=this.getUsedParamsDetails(a),z):O}extendTranslation(r,a,o,f,d){var y,E;var m=this;if((y=this.i18nFormat)!=null&&y.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||f.usedLng,f.usedNS,f.usedKey,{resolved:f});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const z=pe(r)&&(((E=o==null?void 0:o.interpolation)==null?void 0:E.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let O;if(z){const G=r.match(this.interpolator.nestingRegexp);O=G&&G.length}let k=o.replace&&!pe(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(k={...this.options.interpolation.defaultVariables,...k}),r=this.interpolator.interpolate(r,k,o.lng||this.language||f.usedLng,o),z){const G=r.match(this.interpolator.nestingRegexp),Y=G&&G.length;O<Y&&(o.nest=!1)}!o.lng&&f&&f.res&&(o.lng=this.language||f.usedLng),o.nest!==!1&&(r=this.interpolator.nest(r,function(){for(var G=arguments.length,Y=new Array(G),F=0;F<G;F++)Y[F]=arguments[F];return(d==null?void 0:d[0])===Y[0]&&!o.context?(m.logger.warn(`It seems you are nesting recursively key: ${Y[0]} in key: ${a[0]}`),null):m.translate(...Y,a)},o)),o.interpolation&&this.interpolator.reset()}const D=o.postProcess||this.options.postProcess,b=pe(D)?[D]:D;return r!=null&&(b!=null&&b.length)&&o.applyPostProcessor!==!1&&(r=Fg.handle(b,r,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...f,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),r}resolve(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o,f,d,m,D;return pe(r)&&(r=[r]),r.forEach(b=>{if(this.isValidLookup(o))return;const y=this.extractFromKey(b,a),E=y.key;f=E;let z=y.namespaces;this.options.fallbackNS&&(z=z.concat(this.options.fallbackNS));const O=a.count!==void 0&&!pe(a.count),k=O&&!a.ordinal&&a.count===0,G=a.context!==void 0&&(pe(a.context)||typeof a.context=="number")&&a.context!=="",Y=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);z.forEach(F=>{var Ee,fe;this.isValidLookup(o)||(D=F,!Hg[`${Y[0]}-${F}`]&&((Ee=this.utils)!=null&&Ee.hasLoadedNamespace)&&!((fe=this.utils)!=null&&fe.hasLoadedNamespace(D))&&(Hg[`${Y[0]}-${F}`]=!0,this.logger.warn(`key "${f}" for languages "${Y.join(", ")}" won't get resolved as namespace "${D}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),Y.forEach(me=>{var Ce;if(this.isValidLookup(o))return;m=me;const Te=[E];if((Ce=this.i18nFormat)!=null&&Ce.addLookupKeys)this.i18nFormat.addLookupKeys(Te,E,me,F,a);else{let W;O&&(W=this.pluralResolver.getSuffix(me,a.count,a));const ie=`${this.options.pluralSeparator}zero`,Oe=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(O&&(Te.push(E+W),a.ordinal&&W.indexOf(Oe)===0&&Te.push(E+W.replace(Oe,this.options.pluralSeparator)),k&&Te.push(E+ie)),G){const ne=`${E}${this.options.contextSeparator}${a.context}`;Te.push(ne),O&&(Te.push(ne+W),a.ordinal&&W.indexOf(Oe)===0&&Te.push(ne+W.replace(Oe,this.options.pluralSeparator)),k&&Te.push(ne+ie))}}let he;for(;he=Te.pop();)this.isValidLookup(o)||(d=he,o=this.getResource(me,F,he,a))}))})}),{res:o,usedKey:f,exactUsedKey:d,usedLng:m,usedNS:D}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,a,o){var d;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(d=this.i18nFormat)!=null&&d.getResource?this.i18nFormat.getResource(r,a,o,f):this.resourceStore.getResource(r,a,o,f)}getUsedParamsDetails(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=r.replace&&!pe(r.replace);let f=o?r.replace:r;if(o&&typeof r.count<"u"&&(f.count=r.count),this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),!o){f={...f};for(const d of a)delete f[d]}return f}static hasDefaultValue(r){const a="defaultValue";for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&a===o.substring(0,a.length)&&r[o]!==void 0)return!0;return!1}}class jg{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=rn.create("languageUtils")}getScriptPartFromCode(r){if(r=Vu(r),!r||r.indexOf("-")<0)return null;const a=r.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(r){if(r=Vu(r),!r||r.indexOf("-")<0)return r;const a=r.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(r){if(pe(r)&&r.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(r)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?r.toLowerCase():r)}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let a;return r.forEach(o=>{if(a)return;const f=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(f))&&(a=f)}),!a&&this.options.supportedLngs&&r.forEach(o=>{if(a)return;const f=this.getScriptPartFromCode(o);if(this.isSupportedCode(f))return a=f;const d=this.getLanguagePartFromCode(o);if(this.isSupportedCode(d))return a=d;a=this.options.supportedLngs.find(m=>{if(m===d)return m;if(!(m.indexOf("-")<0&&d.indexOf("-")<0)&&(m.indexOf("-")>0&&d.indexOf("-")<0&&m.substring(0,m.indexOf("-"))===d||m.indexOf(d)===0&&d.length>1))return m})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(r,a){if(!r)return[];if(typeof r=="function"&&(r=r(a)),pe(r)&&(r=[r]),Array.isArray(r))return r;if(!a)return r.default||[];let o=r[a];return o||(o=r[this.getScriptPartFromCode(a)]),o||(o=r[this.formatLanguageCode(a)]),o||(o=r[this.getLanguagePartFromCode(a)]),o||(o=r.default),o||[]}toResolveHierarchy(r,a){const o=this.getFallbackCodes(a||this.options.fallbackLng||[],r),f=[],d=m=>{m&&(this.isSupportedCode(m)?f.push(m):this.logger.warn(`rejecting language code not found in supportedLngs: ${m}`))};return pe(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&d(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&d(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&d(this.getLanguagePartFromCode(r))):pe(r)&&d(this.formatLanguageCode(r)),o.forEach(m=>{f.indexOf(m)<0&&d(this.formatLanguageCode(m))}),f}}const Ug={zero:0,one:1,two:2,few:3,many:4,other:5},Yg={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class E0{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=r,this.options=a,this.logger=rn.create("pluralResolver"),this.pluralRulesCache={}}addRule(r,a){this.rules[r]=a}clearCache(){this.pluralRulesCache={}}getRule(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=Vu(r==="dev"?"en":r),f=a.ordinal?"ordinal":"cardinal",d=JSON.stringify({cleanedCode:o,type:f});if(d in this.pluralRulesCache)return this.pluralRulesCache[d];let m;try{m=new Intl.PluralRules(o,{type:f})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Yg;if(!r.match(/-|_/))return Yg;const b=this.languageUtils.getLanguagePartFromCode(r);m=this.getRule(b,a)}return this.pluralRulesCache[d]=m,m}needsPlural(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),(o==null?void 0:o.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(r,o).map(f=>`${a}${f}`)}getSuffixes(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?o.resolvedOptions().pluralCategories.sort((f,d)=>Ug[f]-Ug[d]).map(f=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${f}`):[]}getSuffix(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const f=this.getRule(r,o);return f?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${f.select(a)}`:(this.logger.warn(`no plural rule found for: ${r}`),this.getSuffix("dev",a,o))}}const Bg=function(s,r,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,d=p0(s,r,a);return!d&&f&&pe(a)&&(d=ws(s,a,o),d===void 0&&(d=ws(r,a,o))),d},vs=s=>s.replace(/\$/g,"$$$$");class T0{constructor(){var a;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rn.create("interpolator"),this.options=r,this.format=((a=r==null?void 0:r.interpolation)==null?void 0:a.format)||(o=>o),this.init(r)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r.interpolation||(r.interpolation={escapeValue:!0});const{escape:a,escapeValue:o,useRawValueToEscape:f,prefix:d,prefixEscaped:m,suffix:D,suffixEscaped:b,formatSeparator:y,unescapeSuffix:E,unescapePrefix:z,nestingPrefix:O,nestingPrefixEscaped:k,nestingSuffix:G,nestingSuffixEscaped:Y,nestingOptionsSeparator:F,maxReplaces:Ee,alwaysFormat:fe}=r.interpolation;this.escape=a!==void 0?a:y0,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=f!==void 0?f:!1,this.prefix=d?ol(d):m||"{{",this.suffix=D?ol(D):b||"}}",this.formatSeparator=y||",",this.unescapePrefix=E?"":z||"-",this.unescapeSuffix=this.unescapePrefix?"":E||"",this.nestingPrefix=O?ol(O):k||ol("$t("),this.nestingSuffix=G?ol(G):Y||ol(")"),this.nestingOptionsSeparator=F||",",this.maxReplaces=Ee||1e3,this.alwaysFormat=fe!==void 0?fe:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(a,o)=>(a==null?void 0:a.source)===o?(a.lastIndex=0,a):new RegExp(o,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(r,a,o,f){var k;let d,m,D;const b=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},y=G=>{if(G.indexOf(this.formatSeparator)<0){const fe=Bg(a,b,G,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(fe,void 0,o,{...f,...a,interpolationkey:G}):fe}const Y=G.split(this.formatSeparator),F=Y.shift().trim(),Ee=Y.join(this.formatSeparator).trim();return this.format(Bg(a,b,F,this.options.keySeparator,this.options.ignoreJSONStructure),Ee,o,{...f,...a,interpolationkey:F})};this.resetRegExp();const E=(f==null?void 0:f.missingInterpolationHandler)||this.options.missingInterpolationHandler,z=((k=f==null?void 0:f.interpolation)==null?void 0:k.skipOnVariables)!==void 0?f.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:G=>vs(G)},{regex:this.regexp,safeValue:G=>this.escapeValue?vs(this.escape(G)):vs(G)}].forEach(G=>{for(D=0;d=G.regex.exec(r);){const Y=d[1].trim();if(m=y(Y),m===void 0)if(typeof E=="function"){const Ee=E(r,d,f);m=pe(Ee)?Ee:""}else if(f&&Object.prototype.hasOwnProperty.call(f,Y))m="";else if(z){m=d[0];continue}else this.logger.warn(`missed to pass in variable ${Y} for interpolating ${r}`),m="";else!pe(m)&&!this.useRawValueToEscape&&(m=Ag(m));const F=G.safeValue(m);if(r=r.replace(d[0],F),z?(G.regex.lastIndex+=m.length,G.regex.lastIndex-=d[0].length):G.regex.lastIndex=0,D++,D>=this.maxReplaces)break}}),r}nest(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f,d,m;const D=(b,y)=>{const E=this.nestingOptionsSeparator;if(b.indexOf(E)<0)return b;const z=b.split(new RegExp(`${E}[ ]*{`));let O=`{${z[1]}`;b=z[0],O=this.interpolate(O,m);const k=O.match(/'/g),G=O.match(/"/g);(((k==null?void 0:k.length)??0)%2===0&&!G||G.length%2!==0)&&(O=O.replace(/'/g,'"'));try{m=JSON.parse(O),y&&(m={...y,...m})}catch(Y){return this.logger.warn(`failed parsing options string in nesting for key ${b}`,Y),`${b}${E}${O}`}return m.defaultValue&&m.defaultValue.indexOf(this.prefix)>-1&&delete m.defaultValue,b};for(;f=this.nestingRegexp.exec(r);){let b=[];m={...o},m=m.replace&&!pe(m.replace)?m.replace:m,m.applyPostProcessor=!1,delete m.defaultValue;let y=!1;if(f[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(f[1])){const E=f[1].split(this.formatSeparator).map(z=>z.trim());f[1]=E.shift(),b=E,y=!0}if(d=a(D.call(this,f[1].trim(),m),m),d&&f[0]===r&&!pe(d))return d;pe(d)||(d=Ag(d)),d||(this.logger.warn(`missed to resolve ${f[1]} for nesting ${r}`),d=""),y&&(d=b.reduce((E,z)=>this.format(E,z,o.lng,{...o,interpolationkey:f[1].trim()}),d.trim())),r=r.replace(f[0],d),this.regexp.lastIndex=0}return r}}const w0=s=>{let r=s.toLowerCase().trim();const a={};if(s.indexOf("(")>-1){const o=s.split("(");r=o[0].toLowerCase().trim();const f=o[1].substring(0,o[1].length-1);r==="currency"&&f.indexOf(":")<0?a.currency||(a.currency=f.trim()):r==="relativetime"&&f.indexOf(":")<0?a.range||(a.range=f.trim()):f.split(";").forEach(m=>{if(m){const[D,...b]=m.split(":"),y=b.join(":").trim().replace(/^'+|'+$/g,""),E=D.trim();a[E]||(a[E]=y),y==="false"&&(a[E]=!1),y==="true"&&(a[E]=!0),isNaN(y)||(a[E]=parseInt(y,10))}})}return{formatName:r,formatOptions:a}},sl=s=>{const r={};return(a,o,f)=>{let d=f;f&&f.interpolationkey&&f.formatParams&&f.formatParams[f.interpolationkey]&&f[f.interpolationkey]&&(d={...d,[f.interpolationkey]:void 0});const m=o+JSON.stringify(d);let D=r[m];return D||(D=s(Vu(o),f),r[m]=D),D(a)}};class M0{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rn.create("formatter"),this.options=r,this.formats={number:sl((a,o)=>{const f=new Intl.NumberFormat(a,{...o});return d=>f.format(d)}),currency:sl((a,o)=>{const f=new Intl.NumberFormat(a,{...o,style:"currency"});return d=>f.format(d)}),datetime:sl((a,o)=>{const f=new Intl.DateTimeFormat(a,{...o});return d=>f.format(d)}),relativetime:sl((a,o)=>{const f=new Intl.RelativeTimeFormat(a,{...o});return d=>f.format(d,o.range||"day")}),list:sl((a,o)=>{const f=new Intl.ListFormat(a,{...o});return d=>f.format(d)})},this.init(r)}init(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=a.interpolation.formatSeparator||","}add(r,a){this.formats[r.toLowerCase().trim()]=a}addCached(r,a){this.formats[r.toLowerCase().trim()]=sl(a)}format(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const d=a.split(this.formatSeparator);if(d.length>1&&d[0].indexOf("(")>1&&d[0].indexOf(")")<0&&d.find(D=>D.indexOf(")")>-1)){const D=d.findIndex(b=>b.indexOf(")")>-1);d[0]=[d[0],...d.splice(1,D)].join(this.formatSeparator)}return d.reduce((D,b)=>{var z;const{formatName:y,formatOptions:E}=w0(b);if(this.formats[y]){let O=D;try{const k=((z=f==null?void 0:f.formatParams)==null?void 0:z[f.interpolationkey])||{},G=k.locale||k.lng||f.locale||f.lng||o;O=this.formats[y](D,G,{...E,...f,...k})}catch(k){this.logger.warn(k)}return O}else this.logger.warn(`there was no format function for ${y}`);return D},r)}}const O0=(s,r)=>{s.pending[r]!==void 0&&(delete s.pending[r],s.pendingCount--)};class C0 extends Ku{constructor(r,a,o){var d,m;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=r,this.store=a,this.services=o,this.languageUtils=o.languageUtils,this.options=f,this.logger=rn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=f.maxParallelReads||10,this.readingCalls=0,this.maxRetries=f.maxRetries>=0?f.maxRetries:5,this.retryTimeout=f.retryTimeout>=1?f.retryTimeout:350,this.state={},this.queue=[],(m=(d=this.backend)==null?void 0:d.init)==null||m.call(d,o,f.backend,f)}queueLoad(r,a,o,f){const d={},m={},D={},b={};return r.forEach(y=>{let E=!0;a.forEach(z=>{const O=`${y}|${z}`;!o.reload&&this.store.hasResourceBundle(y,z)?this.state[O]=2:this.state[O]<0||(this.state[O]===1?m[O]===void 0&&(m[O]=!0):(this.state[O]=1,E=!1,m[O]===void 0&&(m[O]=!0),d[O]===void 0&&(d[O]=!0),b[z]===void 0&&(b[z]=!0)))}),E||(D[y]=!0)}),(Object.keys(d).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:f}),{toLoad:Object.keys(d),pending:Object.keys(m),toLoadLanguages:Object.keys(D),toLoadNamespaces:Object.keys(b)}}loaded(r,a,o){const f=r.split("|"),d=f[0],m=f[1];a&&this.emit("failedLoading",d,m,a),!a&&o&&this.store.addResourceBundle(d,m,o,void 0,void 0,{skipCopy:!0}),this.state[r]=a?-1:2,a&&o&&(this.state[r]=0);const D={};this.queue.forEach(b=>{h0(b.loaded,[d],m),O0(b,r),a&&b.errors.push(a),b.pendingCount===0&&!b.done&&(Object.keys(b.loaded).forEach(y=>{D[y]||(D[y]={});const E=b.loaded[y];E.length&&E.forEach(z=>{D[y][z]===void 0&&(D[y][z]=!0)})}),b.done=!0,b.errors.length?b.callback(b.errors):b.callback())}),this.emit("loaded",D),this.queue=this.queue.filter(b=>!b.done)}read(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!r.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:a,fcName:o,tried:f,wait:d,callback:m});return}this.readingCalls++;const D=(y,E)=>{if(this.readingCalls--,this.waitingReads.length>0){const z=this.waitingReads.shift();this.read(z.lng,z.ns,z.fcName,z.tried,z.wait,z.callback)}if(y&&E&&f<this.maxRetries){setTimeout(()=>{this.read.call(this,r,a,o,f+1,d*2,m)},d);return}m(y,E)},b=this.backend[o].bind(this.backend);if(b.length===2){try{const y=b(r,a);y&&typeof y.then=="function"?y.then(E=>D(null,E)).catch(D):D(null,y)}catch(y){D(y)}return}return b(r,a,D)}prepareLoading(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),f&&f();pe(r)&&(r=this.languageUtils.toResolveHierarchy(r)),pe(a)&&(a=[a]);const d=this.queueLoad(r,a,o,f);if(!d.toLoad.length)return d.pending.length||f(),null;d.toLoad.forEach(m=>{this.loadOne(m)})}load(r,a,o){this.prepareLoading(r,a,{},o)}reload(r,a,o){this.prepareLoading(r,a,{reload:!0},o)}loadOne(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const o=r.split("|"),f=o[0],d=o[1];this.read(f,d,"read",void 0,void 0,(m,D)=>{m&&this.logger.warn(`${a}loading namespace ${d} for language ${f} failed`,m),!m&&D&&this.logger.log(`${a}loaded namespace ${d} for language ${f}`,D),this.loaded(r,m,D)})}saveMissing(r,a,o,f,d){var b,y,E,z,O;let m=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},D=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((y=(b=this.services)==null?void 0:b.utils)!=null&&y.hasLoadedNamespace&&!((z=(E=this.services)==null?void 0:E.utils)!=null&&z.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${o}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if((O=this.backend)!=null&&O.create){const k={...m,isUpdate:d},G=this.backend.create.bind(this.backend);if(G.length<6)try{let Y;G.length===5?Y=G(r,a,o,f,k):Y=G(r,a,o,f),Y&&typeof Y.then=="function"?Y.then(F=>D(null,F)).catch(D):D(null,Y)}catch(Y){D(Y)}else G(r,a,o,f,D,k)}!r||!r[0]||this.store.addResource(r[0],a,o,f)}}}const qg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let r={};if(typeof s[1]=="object"&&(r=s[1]),pe(s[1])&&(r.defaultValue=s[1]),pe(s[2])&&(r.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const a=s[3]||s[2];Object.keys(a).forEach(o=>{r[o]=a[o]})}return r},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),kg=s=>{var r,a;return pe(s.ns)&&(s.ns=[s.ns]),pe(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),pe(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((a=(r=s.supportedLngs)==null?void 0:r.indexOf)==null?void 0:a.call(r,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},qu=()=>{},A0=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(a=>{typeof s[a]=="function"&&(s[a]=s[a].bind(s))})};class bi extends Ku{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(super(),this.options=kg(r),this.services={},this.logger=rn,this.modules={external:[]},A0(this),a&&!this.isInitialized&&!r.isClone){if(!this.options.initAsync)return this.init(r,a),this;setTimeout(()=>{this.init(r,a)},0)}}init(){var r=this;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof a=="function"&&(o=a,a={}),a.defaultNS==null&&a.ns&&(pe(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const f=qg();this.options={...f,...this.options,...kg(a)},this.options.interpolation={...f.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);const d=E=>E?typeof E=="function"?new E:E:null;if(!this.options.isClone){this.modules.logger?rn.init(d(this.modules.logger),this.options):rn.init(null,this.options);let E;this.modules.formatter?E=this.modules.formatter:E=M0;const z=new jg(this.options);this.store=new zg(this.options.resources,this.options);const O=this.services;O.logger=rn,O.resourceStore=this.store,O.languageUtils=z,O.pluralResolver=new E0(z,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),E&&(!this.options.interpolation.format||this.options.interpolation.format===f.interpolation.format)&&(O.formatter=d(E),O.formatter.init(O,this.options),this.options.interpolation.format=O.formatter.format.bind(O.formatter)),O.interpolator=new T0(this.options),O.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},O.backendConnector=new C0(d(this.modules.backend),O.resourceStore,O,this.options),O.backendConnector.on("*",function(k){for(var G=arguments.length,Y=new Array(G>1?G-1:0),F=1;F<G;F++)Y[F-1]=arguments[F];r.emit(k,...Y)}),this.modules.languageDetector&&(O.languageDetector=d(this.modules.languageDetector),O.languageDetector.init&&O.languageDetector.init(O,this.options.detection,this.options)),this.modules.i18nFormat&&(O.i18nFormat=d(this.modules.i18nFormat),O.i18nFormat.init&&O.i18nFormat.init(this)),this.translator=new Qu(this.services,this.options),this.translator.on("*",function(k){for(var G=arguments.length,Y=new Array(G>1?G-1:0),F=1;F<G;F++)Y[F-1]=arguments[F];r.emit(k,...Y)}),this.modules.external.forEach(k=>{k.init&&k.init(this)})}if(this.format=this.options.interpolation.format,o||(o=qu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const E=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);E.length>0&&E[0]!=="dev"&&(this.options.lng=E[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(E=>{this[E]=function(){return r.store[E](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(E=>{this[E]=function(){return r.store[E](...arguments),r}});const b=ci(),y=()=>{const E=(z,O)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),b.resolve(O),o(z,O)};if(this.languages&&!this.isInitialized)return E(null,this.t.bind(this));this.changeLanguage(this.options.lng,E)};return this.options.resources||!this.options.initAsync?y():setTimeout(y,0),b}loadResources(r){var d,m;let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qu;const f=pe(r)?r:this.language;if(typeof r=="function"&&(o=r),!this.options.resources||this.options.partialBundledLanguages){if((f==null?void 0:f.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const D=[],b=y=>{if(!y||y==="cimode")return;this.services.languageUtils.toResolveHierarchy(y).forEach(z=>{z!=="cimode"&&D.indexOf(z)<0&&D.push(z)})};f?b(f):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(E=>b(E)),(m=(d=this.options.preload)==null?void 0:d.forEach)==null||m.call(d,y=>b(y)),this.services.backendConnector.load(D,this.options.ns,y=>{!y&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(y)})}else o(null)}reloadResources(r,a,o){const f=ci();return typeof r=="function"&&(o=r,r=void 0),typeof a=="function"&&(o=a,a=void 0),r||(r=this.languages),a||(a=this.options.ns),o||(o=qu),this.services.backendConnector.reload(r,a,d=>{f.resolve(),o(d)}),f}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&Fg.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1)){for(let a=0;a<this.languages.length;a++){const o=this.languages[a];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(r)<0&&this.store.hasLanguageSomeTranslations(r)&&(this.resolvedLanguage=r,this.languages.unshift(r))}}changeLanguage(r,a){var o=this;this.isLanguageChangingTo=r;const f=ci();this.emit("languageChanging",r);const d=b=>{this.language=b,this.languages=this.services.languageUtils.toResolveHierarchy(b),this.resolvedLanguage=void 0,this.setResolvedLanguage(b)},m=(b,y)=>{y?this.isLanguageChangingTo===r&&(d(y),this.translator.changeLanguage(y),this.isLanguageChangingTo=void 0,this.emit("languageChanged",y),this.logger.log("languageChanged",y)):this.isLanguageChangingTo=void 0,f.resolve(function(){return o.t(...arguments)}),a&&a(b,function(){return o.t(...arguments)})},D=b=>{var z,O;!r&&!b&&this.services.languageDetector&&(b=[]);const y=pe(b)?b:b&&b[0],E=this.store.hasLanguageSomeTranslations(y)?y:this.services.languageUtils.getBestMatchFromCodes(pe(b)?[b]:b);E&&(this.language||d(E),this.translator.language||this.translator.changeLanguage(E),(O=(z=this.services.languageDetector)==null?void 0:z.cacheUserLanguage)==null||O.call(z,E)),this.loadResources(E,k=>{m(k,E)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?D(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(D):this.services.languageDetector.detect(D):D(r),f}getFixedT(r,a,o){var f=this;const d=function(m,D){let b;if(typeof D!="object"){for(var y=arguments.length,E=new Array(y>2?y-2:0),z=2;z<y;z++)E[z-2]=arguments[z];b=f.options.overloadTranslationOptionHandler([m,D].concat(E))}else b={...D};b.lng=b.lng||d.lng,b.lngs=b.lngs||d.lngs,b.ns=b.ns||d.ns,b.keyPrefix!==""&&(b.keyPrefix=b.keyPrefix||o||d.keyPrefix);const O=f.options.keySeparator||".";let k;return b.keyPrefix&&Array.isArray(m)?k=m.map(G=>`${b.keyPrefix}${O}${G}`):k=b.keyPrefix?`${b.keyPrefix}${O}${m}`:m,f.t(k,b)};return pe(r)?d.lng=r:d.lngs=r,d.ns=a,d.keyPrefix=o,d}t(){var f;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(f=this.translator)==null?void 0:f.translate(...a)}exists(){var f;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(f=this.translator)==null?void 0:f.exists(...a)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=a.lng||this.resolvedLanguage||this.languages[0],f=this.options?this.options.fallbackLng:!1,d=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const m=(D,b)=>{const y=this.services.backendConnector.state[`${D}|${b}`];return y===-1||y===0||y===2};if(a.precheck){const D=a.precheck(this,m);if(D!==void 0)return D}return!!(this.hasResourceBundle(o,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(o,r)&&(!f||m(d,r)))}loadNamespaces(r,a){const o=ci();return this.options.ns?(pe(r)&&(r=[r]),r.forEach(f=>{this.options.ns.indexOf(f)<0&&this.options.ns.push(f)}),this.loadResources(f=>{o.resolve(),a&&a(f)}),o):(a&&a(),Promise.resolve())}loadLanguages(r,a){const o=ci();pe(r)&&(r=[r]);const f=this.options.preload||[],d=r.filter(m=>f.indexOf(m)<0&&this.services.languageUtils.isSupportedCode(m));return d.length?(this.options.preload=f.concat(d),this.loadResources(m=>{o.resolve(),a&&a(m)}),o):(a&&a(),Promise.resolve())}dir(r){var f,d;if(r||(r=this.resolvedLanguage||(((f=this.languages)==null?void 0:f.length)>0?this.languages[0]:this.language)),!r)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=((d=this.services)==null?void 0:d.languageUtils)||new jg(qg());return a.indexOf(o.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return new bi(r,a)}cloneInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qu;const o=r.forkResourceStore;o&&delete r.forkResourceStore;const f={...this.options,...r,isClone:!0},d=new bi(f);if((r.debug!==void 0||r.prefix!==void 0)&&(d.logger=d.logger.clone(r)),["store","services","language"].forEach(D=>{d[D]=this[D]}),d.services={...this.services},d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},o){const D=Object.keys(this.store.data).reduce((b,y)=>(b[y]={...this.store.data[y]},b[y]=Object.keys(b[y]).reduce((E,z)=>(E[z]={...b[y][z]},E),b[y]),b),{});d.store=new zg(D,f),d.services.resourceStore=d.store}return d.translator=new Qu(d.services,f),d.translator.on("*",function(D){for(var b=arguments.length,y=new Array(b>1?b-1:0),E=1;E<b;E++)y[E-1]=arguments[E];d.emit(D,...y)}),d.init(f,a),d.translator.options=f,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const yt=bi.createInstance();yt.createInstance=bi.createInstance;yt.createInstance;yt.dir;yt.init;yt.loadResources;yt.reloadResources;yt.use;yt.changeLanguage;yt.getFixedT;yt.t;yt.exists;yt.setDefaultNamespace;yt.hasLoadedNamespace;yt.loadNamespaces;yt.loadLanguages;const N0={en:{translation:{sectionFeatured:"Featured news",sectionEuroTip:"Euro Tip",sectionHrTip:"HR Tip",sectionTrainings:"Trainings",sectionSectorNews:"Sector News",sectionOtherNews:"Other News",pre_header_copy:"Discover the latest key legal HR news",view_online_copy:"View online",tagline:"Stay ahead with the latest in HR law",img_link:"https://www.securex.be/en/lex4you/employer",contact_link:"https://www.securex.be/en/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/en/website-disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Unsubscribe or change preferences",alt:"Click image to read article",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"HR & Legal trainings",th_training:"Training",th_day_time:"Day - Time",th_format:"Format",th_price_ex_vat:"Price ex&nbsp;VAT from",section_cta_url:"https://www.securex.be/en/training-courses",section_cta_copy:"Discover all our trainings",sectorNewsHeader:"News from the sectors",otherNewsHeader:"Other news"}},nl:{translation:{sectionFeatured:"Uitgelicht nieuws",sectionEuroTip:"€ Tip",sectionHrTip:"HR Tip",sectionTrainings:"Opleidingen",sectionSectorNews:"Sectornieuws",sectionOtherNews:"Overig nieuws",pre_header_copy:"Ontdek de belangrijkste legal HR-actualiteit",view_online_copy:"Bekijk online",tagline:"Meteen mee met het juridisch HR-nieuws",img_link:"https://www.securex.be/nl/lex4you/werkgever",contact_link:"https://www.securex.be/nl/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/nl/lex4you/disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Uitschrijven of voorkeuren wijzigen",alt:"Klik op de afbeelding om het artikel te lezen",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"Opleidingen HR & Legal",th_training:"Opleiding",th_day_time:"Dag - Tijdstip",th_format:"Format",th_price_ex_vat:"Prijs ex.&nbsp;btw vanaf",section_cta_url:"https://www.securex.be/nl/opleidingen",section_cta_copy:"Ontdek al onze opleidingen",sectorNewsHeader:"Nieuws uit de sectoren",otherNewsHeader:"Meer nieuws"}},fr:{translation:{sectionFeatured:"Principales actualités",sectionEuroTip:"Conseil €",sectionHrTip:"Conseil RH",sectionTrainings:"Formations",sectionSectorNews:"Actualités des secteurs",sectionOtherNews:"Autres actualités",pre_header_copy:"Découvrez les principales nouveautés juridiques RH",view_online_copy:"Voir en ligne",tagline:"Pour être au courant des actualités juridiques RH",img_link:"https://www.securex.be/fr/lex4you/employeur",contact_link:"https://www.securex.be/fr/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/fr/lex4you/disclaimer",disclaimer_copy:"Mentions légales",preferences_link:"{EmailPreferenceCenter_1063}",preferences_copy:"Se désinscrire ou modifier vos préférences",alt:"Cliquez sur l'image pour lire l'article",euroTipPreHeader:"Conseil €",HRTipPreHeader:"Conseil RH",section_header:"Formations RH & Juridiques",th_training:"Formation",th_day_time:"Jour - Heure",th_format:"Format",th_price_ex_vat:"Prix HTVA à&nbsp;partir de",section_cta_url:"https://www.securex.be/fr/formations",section_cta_copy:"Découvrez toutes nos formations",sectorNewsHeader:"Actualités des secteurs",otherNewsHeader:"Autres actualités"}},de:{translation:{sectionFeatured:"Ausgewählte Nachrichten",sectionEuroTip:"€ Tipp",sectionHrTip:"HR Tipp",sectionTrainings:"Schulungen",sectionSectorNews:"Branchen-News",sectionOtherNews:"Sonstige Nachrichten",pre_header_copy:"Entdecken Sie die wichtigsten HR-Rechtsnachrichten",view_online_copy:"Online ansehen",tagline:"Ihre neuesten juristischen HR-Updates",img_link:"https://www.securex.be/de/lex4you/arbeitgeber",contact_link:"https://www.securex.be/de/kontakt",contact_copy:"Kontakt",disclaimer_link:"https://www.securex.be/de/lex4you/disclaimer-sss",disclaimer_copy:"Haftungsausschluss",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Abmelden oder Präferenzen ändern",alt:"Klicken Sie auf das Bild, um den Artikel zu lesen",euroTipPreHeader:"€ Tipp",HRTipPreHeader:"HR Tipp",section_header:"Schulungen",th_training:"Schulung",th_day_time:"Tag - Zeit",th_format:"Format",th_price_ex_vat:"Preis o. MwSt. ab",section_cta_url:"https://www.securex.be/de/schulungen",section_cta_copy:"Entdecken Sie alle unsere Schulungen",sectorNewsHeader:"Nachrichten aus den Branchen",otherNewsHeader:"Mehr Nachrichten"}}};yt.use(wm).init({resources:N0,lng:"nl",interpolation:{escapeValue:!1}});function _0(s,r="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png",a="Discover the latest key legal HR news",o="View online",f="https://www.securex.be/en/lex4you/employer",d="DD month YYYY",m="Stay ahead with the latest in HR law",D="https://www.securex.be/en/contact",b="Contact",y="https://www.securex.be/en/website-disclaimer",E="Disclaimer",z="{EmailPreferenceCenter_967}",O="Unsubscribe or change preferences"){return`
<!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" />
    <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" />
    <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta
      name="format-detection"
      content="telephone=no,address=no,email=no,date=no,url=no"
    />
    <!-- Tell iOS not to automatically link certain text strings. -->
    <title>Email</title>
    <style>
      html,
      body {
        margin: 0 !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        background-color: #fff;
      }
      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }
      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }
      /* What it does: Fixes webkit padding issue. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
      }
      a {
        text-decoration: none;
      }
      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
        outline: none;
      }
      /* What it does: A work-around for email clients meddling in triggered links. */

      a[x-apple-data-detectors],  /* iOS */ .unstyle-auto-detected-links a, .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
        color: inherit !important;
      }
      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
    </style>
    <style type="text/css">
      @font-face {
        font-family: "Trebuchet MS", sans-serif;
        src: url("TrebuchetMS.woff2") format("woff2"),
          url("TrebuchetMS.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      body {
        margin: 0;
        background-color: #fff;
      }
      /* CLIENT-SPECIFIC STYLES */
      #customers {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        text-align: center;
      }
      #customers td,
      #customers th {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
        font-size: 16px;
      }
      #customers tr {
        background-color: #fff;
      }
      #customers tr:hover {
        background-color: #ddd;
      }
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #4d1656;
        color: white;
      }
      #outlook a {
        padding: 0;
      }
      /* Force Outlook to provide a "view in browser" message */

      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      /* Force Hotmail to display emails at full width */

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      /* Force Hotmail to display normal line spacing */

      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      /* Prevent WebKit and Windows mobile changing default text sizes */

      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      /* Remove spacing between tables in Outlook 2007 and up */

      img {
        -ms-interpolation-mode: bicubic;
      }
      /* Allow smoother rendering of resized image in Internet Explorer */
      /* RESET STYLES */

      body {
        margin: 0;
        padding: 0;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0;
        padding: 0;
        width: 100% !important;
      }
      /* iOS BLUE LINKS */

      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }
      /* MOBILE STYLES */

      @media screen and (max-width: 525px) {
        /* ALLOWS FOR FLUID TABLES */
        table[class="wrapper"] {
          width: 100% !important;
        }
        /* ADJUSTS LAYOUT OF LOGO IMAGE */
        td[class="logo"] {
          text-align: left;
          padding: 20px 0 20px 0 !important;
        }
        td[class="logo"] img {
          margin: 0 auto !important;
        }
        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
        img[class="img-max"] {
          max-width: 100% !important;
          height: auto !important;
        }
        /* FULL-WIDTH TABLES */

        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
        td[class="padding"] {
          padding: 10px 5% 15px 5% !important;
        }
        td[class="padding-meta"] {
          padding: 30px 5% 0px 5% !important;
          text-align: center;
        }
        td[class="no-pad"] {
          padding: 0 0 20px 0 !important;
        }
        td[class="no-padding"] {
          padding: 0 !important;
        }
        td[class="section-padding"] {
          padding: 10px 0px 10px 0px !important;
        }
        td[class="section-padding-bottom-image"] {
          padding: 50px 15px 0 15px !important;
        }
        /* ADJUST BUTTONS ON MOBILE */
        table[class="mobile-button-container"] {
          margin: 0 auto;
          width: 100% !important;
        }
        a[class="mobile-button"] {
          font-size: 16px !important;
        }
      }
    </style>
    <style>
      @media screen and (max-device-width: 414px) and (max-device-height: 776px) {
        /* And center justify these ones. */
        .stack-column-center {
          text-align: center !important;
        }
        /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
        .center-on-narrow {
          text-align: left !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
          float: none !important;
        }
        table.center-on-narrow {
          display: inline-block !important;
        }
        /* What it does: Adjust typography on small screens to improve readability */
      }

      /* Media Queries */
      @media screen and (max-width: 600px) {
        /* And center justify these ones. */
        .stack-column-center {
          text-align: center !important;
        }
        /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
        .center-on-narrow {
          text-align: left !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
          float: none !important;
        }
        table.center-on-narrow {
          display: inline-block !important;
        }
        /* What it does: Adjust typography on small screens to improve readability */
      }
    </style>
    <!-- Progressive Enhancements : END -->
  </head>

  <body
    width="100%"
    style="
      margin: 0;
      padding: 0 !important;
      mso-line-height-rule: exactly;
      background-color: #fff;
    "
  >
    <!-- Email Header : BEGIN --><!-- Thumbnail Right, Text Left : BEGIN -->
    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto; margin-top: 20px"
        width="600"
      >
        <tbody>
          <tr>
            <td
              dir="ltr"
              pardot-data=""
              pardot-region=""
              style="padding: 10px; background: rgb(255, 255, 255)"
              width="100%"
              class=""
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr style="">
                    <!-- Column : BEGIN -->
                    <td class="stack-column-center" width="60%">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td
                              class="center-on-narrow"
                              dir="ltr"
                              pardot-region="pardot"
                              style="
                                font-family: 'Trebuchet MS', sans-serif;
                                font-size: 14px;
                                line-height: 20px;
                                color: #555555;
                                padding: 8px 0;
                                text-align: left;
                              "
                              valign="top"
                            >
                              ${a}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <!-- Column:END --><!-- Column : BEGIN -->
                    <td
                      class="stack-column-center"
                      pardot-region=""
                      width="40%"
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td pardot-region="pardot">
                              <p
                                style="
                                  margin: 0 0 0px 0;
                                  text-align: right;
                                  font-size: 14px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                "
                              >
                                <a
                                  href="http://{{View_Online}}"
                                  style="text-decoration: none; color: #555555"
                                  >${o}</a
                                >
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <!-- Column : END -->
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Thumbnail Right, Text Left : END --><!-- Thumbnail Right, Text Left : END --><!-- Thumbnail Right, Text Left : BEGIN --><!-- Thumbnail Right, Text Left : END --><!-- Thumbnail Right, Text Left : BEGIN -->

    <div pardot-repeatable="" class="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="margin-bottom: 20px; display: block">
            <td
              dir="rtl"
              pardot-data=""
              pardot-region=""
              style="
                padding: 0px;
                background: rgb(55, 184, 194);
                height: 85px;
                color: rgb(255, 255, 255);
              "
              width="100%"
              class=""
            >
              <table
                0=""
                30px=""
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <!-- Column : BEGIN -->
                    <td class="stack-column-center" width="67%">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td
                              dir="ltr"
                              pardot-region=""
                              style="
                                padding: 0 10px;
                                text-align: right;
                                font-family: Arial, sans-serif;
                                font-size: 12px;
                              "
                              valign="top"
                            >
                              <h2
                                style="
                                  margin: 0 0 10px 0;
                                  font-family: 'Trebuchet MS', sans-serif;
                                  font-size: 18px;
                                  color: #fff;
                                  font-weight: bold;
                                "
                              >
                                FlasHR | ${d}
                              </h2>

                              <p
                                style="
                                  margin: 0 0 0px 0;
                                  color: #fff;
                                  font-size: 16px;
                                "
                              >
                                ${m}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <!-- Column : END --><!-- Column : BEGIN -->
                    <td width="33%">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td
                              dir="ltr"
                              pardot-region=""
                              style="padding: 10px"
                              valign="top"
                            >
                              <a
                                href="${f}"
                                style="text-decoration: none"
                                ><img
                                  alt="Securex Lex4You logo"
                                  class="logobrand"
                                  height="54"
                                  src="${r}"
                                  style="
                                    vertical-align: middle;
                                    width: 163px;
                                    height: 54px;
                                  "
                                  width="163"
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <!-- Column : END -->
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Thumbnail Right, Text Left : END --><!-- Email Header : END --><!-- Hero Image, Flush : BEGIN --><!-- Hero Image, Flush : END --><!-- 1 Column horizontal Button : BEGIN  horizontal horizontal horizontal Buttons-->

    <!--Horizontal Button issues End--><!-- Image with Text and Button : Begins --><!-- 2 Even Columns : BEGIN --><!-- 2 Even Columns : END -->

    <!--Button with Image and Text End--><!-- 2 Even Columns : END --><!-- 2 Even Columns : BEGIN --><!-- 2 Even Columns : END --><!-- 2 Even Columns : BEGIN -->

    ${s}

    <!-- Left Button End --><!-- Center Button Begins --><!--Right Button End--><!--Left Button Begins--><!-- Left Button End --><!-- Center Button Begins --><!-- Center Button End --><!-- Right Button Begins --><!-- Right Button End --><!-- Left Button Begins --><!-- Left Button End --><!-- Center Button Begins --><!-- Right Button End --><!-- Left Button Begins --><!-- Centers Button Begins --><!-- Right Button Begins --><!-- Centers Button Begins --><!-- Thumbnail Left, Text Right : END --><!--- footer---->

    <!-- FOOTER -->

    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="margin-top: 20px; display: block">
            <td
              bgcolor="#37b8c2"
              pardot-data=""
              pardot-region=""
              style="background: rgb(55, 184, 194)"
              class=""
            >
              <div align="center" style="padding: 0px 15px 0px 15px">
                <!-- <div pardot-repeatable="" class=""> -->
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="wrapper"
                  width="100%"
                >
                  <!-- LOGO/PREHEADER TEXT -->
                  <tbody>
                    <tr>
                      <td class="logo" style="padding: 20px 20px 20px 20px">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style="text-align: left" width="200">
                                <table border="0" padding="0" width="100%">
                                  <tbody>
                                    <tr style="">
                                      <td
                                        pardot-region=""
                                        style="
                                          border-collapse: collapse;
                                          border: 0;
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          color: #555559;
                                          font-family: 'Trebuchet MS',
                                            sans-serif;
                                          font-size: 16px;
                                          line-height: 0px;
                                        "
                                        valign="middle"
                                      >
                                        <a
                                          href="https://www.facebook.com/securex.be/"
                                          style="text-decoration: none"
                                          ><img
                                            alt="facebook"
                                            height="19"
                                            padding="10"
                                            src="https://emailing.securex.eu/l/64002/2019-04-18/fsvkvf/64002/188592/facebook.png"
                                            style="width: 20px; height: 19px"
                                            width="20"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        pardot-region=""
                                        style="
                                          border-collapse: collapse;
                                          border: 0;
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          color: #555559;
                                          font-family: 'Trebuchet MS',
                                            sans-serif;
                                          font-size: 16px;
                                          line-height: 0px;
                                        "
                                        valign="middle"
                                      >
                                        <a
                                          href="https://www.instagram.com/securex_be/"
                                          style="text-decoration: none"
                                          ><img
                                            alt="instagram"
                                            height="19"
                                            src="https://emailing.securex.eu/l/64002/2019-04-18/fsvkvk/64002/188596/Instagram.png"
                                            style="width: 20px; height: 19px"
                                            width="20"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        pardot-region=""
                                        style="
                                          border-collapse: collapse;
                                          border: 0;
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          color: #555559;
                                          font-family: 'Trebuchet MS',
                                            sans-serif;
                                          font-size: 16px;
                                          line-height: 0px;
                                        "
                                        valign="middle"
                                      >
                                        <a
                                          href="https://www.linkedin.com/company/securex/"
                                          style="text-decoration: none"
                                          ><img
                                            alt="Linkedin"
                                            height="19"
                                            src="https://emailing.securex.eu/l/64002/2019-04-18/fsvkvm/64002/188598/Linkedin.png"
                                            style="width: 20px; height: 19px"
                                            width="20"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        pardot-region=""
                                        style="
                                          border-collapse: collapse;
                                          border: 0;
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          color: #555559;
                                          font-family: 'Trebuchet MS',
                                            sans-serif;
                                          font-size: 16px;
                                          line-height: 0px;
                                        "
                                        valign="middle"
                                      >
                                        <a
                                          href="https://www.youtube.com/channel/UCVbxegs6CI4ykvO19cICmdw"
                                          style="text-decoration: none"
                                          ><img
                                            alt="youtube"
                                            height="19"
                                            src="https://emailing.securex.eu/l/64002/2019-04-18/fsvkvw/64002/188606/youtube.png"
                                            style="width: 20px; height: 19px"
                                            width="20"
                                          />
                                        </a>
                                      </td>
                                      <!-- <td pardot-region="" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: 'Trebuchet MS' , sans-serif;font-size: 16px;line-height: 0px;" valign="middle"><a href="javascript:void(0)">&nbsp;</a>
                        </td> -->
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td align="right" pardot-region="" width="300">
                                <a
                                  href="${f}"
                                  style="text-decoration: none"
                                  ><img
                                    alt="logo"
                                    class="logobrand"
                                    height="54"
                                    src="${r}"
                                    style="
                                      vertical-align: middle;
                                      width: 163px;
                                      height: 54px;
                                    "
                                    width="163"
                                /></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- </div> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div pardot-repeatable="" class=""> -->

    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr>
            <td align="center" bgcolor="#ffffff">
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 20px 0px 20px 0px">
                      <!--UNSUBSCRIBE COPY -->
                      <div pardot-repeatable="">
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="responsive-table"
                          width="500"
                        >
                          <tbody>
                            <tr style="">
                              <td
                                align="center"
                                pardot-region=""
                                style="
                                  font-size: 12px;
                                  line-height: 18px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                  color: #666666;
                                "
                                valign="middle"
                              >
                                <span
                                  class="original-only"
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${D}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${b}</a
                                  >
                                  -
                                </span>
                                <span
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${y}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${E}</a
                                  >
                                  -
                                </span>
                                <a
                                  href="{{${z}}}"
                                  rel="nofollow,noreferrer"
                                  style="text-decoration: none; color: #555555"
                                  ><span
                                    style="
                                      color: #666666;
                                      text-decoration: none;
                                    "
                                    >${O}</span
                                  ></a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`}function R0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o="CTA",f="Click image to read article",d="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
    <div pardot-repeatable="" class="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <!-- 2 Even Columns : BEGIN -->
        <tbody>
          <tr>
            <td style="padding: 0px; background-color: #ffffff">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <!-- Column : BEGIN -->
                    <td
                      class="stack-column-center"
                      pardot-region=""
                      valign="top"
                      width="49%"
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td pardot-region="" style="padding: 0px">
                              <a href="${s}" style="display: block">
                                <img
                                  alt="${f}"
                                  border="0"
                                  src="${d}"
                                  style="
                                    display: block;
                                    width: 290px;
                                    height: auto;
                                    border-width: 0px;
                                    border-style: solid;
                                    border-radius: 18px;
                                    float: left;
                                  "
                                  width="290"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td class="stack-column-center" valign="top" width="49%">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td
                              class="center-on-narrow"
                              pardot-region=""
                              style="
                                font-family: 'Trebuchet MS', sans-serif;
                                font-size: 15px;
                                line-height: 20px;
                                color: #555555;
                                padding: 0px 20px;
                                text-align: left;
                              "
                            >
                              <p
                                style="
                                  margin: 0px 0px 13px;
                                  font-size: 20px;
                                  line-height: 30px;
                                  color: rgb(51, 51, 51);
                                  font-weight: normal;
                                "
                              >
                                <strong>${r}</strong>
                              </p>
                            </td>
                          </tr>
                          <tr style="">
                            <td
                              class="center-on-narrow"
                              pardot-region=""
                              style="
                                font-family: 'Trebuchet MS', sans-serif;
                                font-size: 15px;
                                line-height: 20px;
                                color: #555555;
                                padding: 0px 20px;
                                text-align: left;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  color: #706f6f;
                                  font-size: 16px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                "
                              >
                                ${a}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div pardot-repeatable="" class="">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr style="background-color: #fff">
                              <td
                                align="center"
                                class="padding-copy"
                                style="padding: 20px"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="responsive-table"
                                >
                                  <tbody>
                                    <tr style="">
                                      <td
                                        class="button-td button-td-primary"
                                        pardot-data=""
                                        pardot-region=""
                                        style="
                                          border-radius: 4px;
                                          background: #37b8c2;
                                          background-color: #37b8c2;
                                          border: 1px solid #37b8c2;
                                          font-family: sans-serif;
                                          font-size: 15px;
                                          line-height: 15px;
                                          text-decoration: none;
                                          padding: 13px 30px;
                                          color: #ffffff;
                                          display: block;
                                          border-radius: 4px;
                                          text-align: center;
                                        "
                                      >
                                        <a
                                          href="${s}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${o}</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `}function z0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o="CTA",f="Click image to read article",d="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
    <div pardot-repeatable="" class="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <!-- 2 Even Columns : BEGIN -->
        <tbody>
          <tr>
            <td style="padding: 0px; background-color: #ffffff">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td class="stack-column-center" valign="top" width="49%">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td
                              class="center-on-narrow"
                              pardot-region=""
                              style="
                                font-family: 'Trebuchet MS', sans-serif;
                                font-size: 15px;
                                line-height: 20px;
                                color: #555555;
                                padding: 0px 20px;
                                text-align: left;
                              "
                            >
                              <p
                                style="
                                  margin: 0px 0px 13px;
                                  font-size: 20px;
                                  line-height: 30px;
                                  color: rgb(51, 51, 51);
                                  font-weight: normal;
                                "
                              >
                                <strong>${r}</strong>
                              </p>
                            </td>
                          </tr>
                          <tr style="">
                            <td
                              class="center-on-narrow"
                              pardot-region=""
                              style="
                                font-family: 'Trebuchet MS', sans-serif;
                                font-size: 15px;
                                line-height: 20px;
                                color: #555555;
                                padding: 0px 20px;
                                text-align: left;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  color: #706f6f;
                                  font-size: 16px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                "
                              >
                                ${a}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div pardot-repeatable="" class="">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr style="background-color: #fff">
                              <td
                                align="center"
                                class="padding-copy"
                                style="padding: 20px"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="responsive-table"
                                >
                                  <tbody>
                                    <tr style="">
                                      <td
                                        class="button-td button-td-primary"
                                        pardot-data=""
                                        pardot-region=""
                                        style="
                                          border-radius: 4px;
                                          background: #37b8c2;
                                          background-color: #37b8c2;
                                          border: 1px solid #37b8c2;
                                          font-family: sans-serif;
                                          font-size: 15px;
                                          line-height: 15px;
                                          text-decoration: none;
                                          padding: 13px 30px;
                                          color: #ffffff;
                                          display: block;
                                          border-radius: 4px;
                                          text-align: center;
                                        "
                                      >
                                        <a
                                          href="${s}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${o}</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                    <!-- Column : BEGIN -->
                    <td
                      class="stack-column-center"
                      pardot-region=""
                      valign="top"
                      width="49%"
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td pardot-region="" style="padding: 0px; text-align: right;">
                              <a href="${s}" style="display: block; text-align: right;">
                                <img
                                  alt="${f}"
                                  border="0"
                                  src="${d}"
                                  style="
                                    display: block;
                                    width: 290px;
                                    height: auto;
                                    border-width: 0px;
                                    border-style: solid;
                                    border-radius: 18px;
                                    float: right;
                                  "
                                  width="290"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `}function H0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",o="CTA",f="€ Tip"){return`
    <div pardot-repeatable="" class="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="background: rgb(255, 255, 255)">
            <td
              pardot-data=""
              pardot-region=""
              style="
                padding: 0px 20px 10px;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 15px;
                line-height: 20px;
                color: rgb(77, 22, 86);
              "
              class=""
            >
              <h1
                style="
                  width: 100%;
                  font-size: 25px;
                  margin: 0;
                  margin: 20px 0 0px;
                  font-size: 25px;
                  line-height: 30px;
                "
              >
                ${f} |&nbsp;${r}
              </h1>
              <span
                style="
                  vertical-align: top;
                  line-height: 11px;
                  display: inline-block;
                "
                ><img
                  src="https://emailing.securex.eu/l/64002/2019-07-05/fxg4sx/64002/200995/borderunder1.png"
                  width="55"
              /></span>
            </td>
          </tr>
          <tr style="">
            <td
              class="center-on-narrow"
              pardot-data=""
              pardot-region=""
              style="
                background: rgb(255, 255, 255);
                padding: 0px 20px 0px;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 15px;
                line-height: 20px;
                color: rgb(85, 85, 85);
              "
            >
              <p style="margin: 0; color: #706f6f; font-size: 16px">
                ${a}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <!-- 2 Even Columns : BEGIN -->
        <tbody>
          <tr>
            <td style="padding: 0px; background-color: #ffffff">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <!-- Column : BEGIN -->
                    <td class="stack-column-center" valign="top" width="100%">
                      <div pardot-repeatable="">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr style="background-color: #fff">
                              <td
                                align="center"
                                class="padding-copy"
                                style="padding: 20px"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="responsive-table"
                                >
                                  <tbody>
                                    <tr style="">
                                      <td
                                        class="button-td button-td-primary"
                                        pardot-data=""
                                        pardot-region=""
                                        style="
                                          background: rgb(77, 22, 86);
                                          border: 1px solid #4d1656;
                                          font-family: sans-serif;
                                          font-size: 15px;
                                          line-height: 15px;
                                          text-decoration: none;
                                          padding: 13px 30px;
                                          color: rgb(255, 255, 255);
                                          display: block;
                                          border-radius: 4px;
                                          text-align: center;
                                        "
                                      >
                                        <a
                                          href="${s}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${o}</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                    <!-- Column : END -->
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
`}function L0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",o="CTA",f="HR Tip"){return`
    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="background: rgb(255, 255, 255)">
            <td
              pardot-data=""
              pardot-region=""
              style="
                padding: 0px 20px 10px;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 15px;
                line-height: 20px;
                color: rgb(55, 185, 194);
              "
              class=""
            >
              <h1
                style="
                  width: 100%;
                  font-size: 25px;
                  margin: 0;
                  margin: 20px 0 0px;
                  font-size: 25px;
                  line-height: 30px;
                "
              >
                ${f} |&nbsp;${r}
              </h1>
              <span
                style="
                  vertical-align: top;
                  line-height: 11px;
                  display: inline-block;
                "
                ><img
                  src="https://emailing.securex.eu/l/64002/2019-07-05/fxg4vq/64002/200997/border2.png"
                  width="55"
              /></span>
            </td>
          </tr>
          <tr style="">
            <td
              class="center-on-narrow"
              pardot-data=""
              pardot-region=""
              style="
                background: rgb(255, 255, 255);
                padding: 0px 20px 0px;
                font-family: 'Trebuchet MS', sans-serif;
                font-size: 15px;
                line-height: 20px;
                color: rgb(85, 85, 85);
              "
            >
              <p style="margin: 0; color: #706f6f; font-size: 16px">
                ${a}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <!-- 2 Even Columns : BEGIN -->
        <tbody>
          <tr>
            <td style="padding: 0px; background-color: #ffffff">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <!-- Column : BEGIN -->
                    <td class="stack-column-center" valign="top" width="100%">
                      <div pardot-repeatable="" class="">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr style="background-color: #fff">
                              <td
                                align="center"
                                class="padding-copy"
                                style="padding: 20px"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="responsive-table"
                                >
                                  <tbody>
                                    <tr style="">
                                      <td
                                        class="button-td button-td-primary"
                                        pardot-data=""
                                        pardot-region=""
                                        style="
                                          border-radius: 4px;
                                          background: #37b8c2;
                                          background-color: #37b8c2;
                                          border: 1px solid #37b8c2;
                                          font-family: sans-serif;
                                          font-size: 15px;
                                          line-height: 15px;
                                          text-decoration: none;
                                          padding: 13px 30px;
                                          color: #ffffff;
                                          display: block;
                                          border-radius: 4px;
                                          text-align: center;
                                        "
                                      >
                                        <a
                                          href="${s}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${o}</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                    <!-- Column : END -->
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
`}function j0(s,r="HR &amp; Legal trainings (in Dutch &amp; French)",a="Training",o="Day - Time",f="Format",d="Price ex VAT",m="https://www.securex.be/en/training-courses",D="Discover all our trainings"){return`
    <div pardot-repeatable="" class="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr>
            <td align="center" bgcolor="#ffffff" class="section-padding">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="responsive-table"
                width="600"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <!-- COPY -->
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr style="">
                                    <td
                                      align="left"
                                      class="padding-copy"
                                      pardot-data=""
                                      pardot-region=""
                                      style="
                                        font-size: 25px;
                                        font-family: 'Trebuchet MS', sans-serif;
                                        color: rgb(77, 22, 86);
                                        padding: 20px;
                                      "
                                    >
                                      <h1
                                        style="
                                          width: 100%;
                                          font-size: 25px;
                                          margin: 0;
                                        "
                                      >
                                        ${r}
                                      </h1>
                                      <span
                                        style="
                                          vertical-align: top;
                                          line-height: 11px;
                                          display: inline-block;
                                        "
                                        ><img
                                          src="https://emailing.securex.eu/l/64002/2019-07-05/fxg4sx/64002/200995/borderunder1.png"
                                          width="55"
                                      /></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 2 Even Columns : END --><!--Add One More Content block--><!-- 2 Even Columns : BEGIN --><!-- 2 Even Columns : END --><!-- 3 Even Columns : BEGIN --><!--Begin Table Tabular Styles-->

    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        id="customers"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr pardot-repeatable="" style="" class="">
            <th
              colspan="2"
              pardot-data=""
              pardot-region=""
              style="background: rgb(77, 22, 86)"
            >
              ${a}
            </th>
            <th
              pardot-data=""
              pardot-region=""
              style="background: rgb(77, 22, 86)"
            >
              ${o}
            </th>
            <th pardot-region="">${f}</th>
            <th pardot-region="">${d}</th>
          </tr>
          ${s}
        </tbody>
      </table>
    </div>

    <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="background-color: #fff">
            <td align="center" class="padding-copy" style="padding: 20px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="responsive-table"
              >
                <tbody>
                  <tr style="">
                    <td
                      class="button-td button-td-primary"
                      pardot-data=""
                      pardot-region=""
                      style="
                        background: rgb(77, 22, 86);
                        border: 1px solid #4d1656;
                        font-family: sans-serif;
                        font-size: 15px;
                        line-height: 15px;
                        text-decoration: none;
                        padding: 13px 30px;
                        color: rgb(255, 255, 255);
                        display: block;
                        border-radius: 4px;
                        text-align: center;
                      "
                    >
                      <a
                        href="${m}"
                        style="text-decoration: none; color: #ffffff"
                        >${D}</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
`}function U0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="1 jan. 2025",o="9:00 - 12:00",f="Online",d="400"){return`
          <tr pardot-repeatable="" style="">
            <td colspan="2" pardot-region="">
              <a
                href="${s}"
                style="text-decoration: underline; color: #4d1656"
                >${r}</a
              >
            </td>
            <td pardot-region="">
              ${a}<br />
              ${o}
            </td>
            <td pardot-region="">${f}</td>
            <td pardot-region="">€${d}</td>
          </tr>
`}function Y0(s){return`
      <div pardot-repeatable="">
      <table
        align="center"
        bgcolor="#ffffff"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="email-container"
        role="presentation"
        style="margin: auto"
        width="600"
      >
        <tbody>
          <tr style="">
            <td
              align="center"
              bgcolor="#F7F7F7"
              class="section-padding"
              pardot-data=""
              pardot-region=""
              style="padding: 20px 15px; background: rgb(247, 247, 247)"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="responsive-table"
                style="padding: 0 0 20px 0"
                width="100%"
              >
                <!--TITLE-->
                <tbody>
                  <tr>
                    <td class="no-padding" width="70%">
                    ${s}
                    </td>
                    <td
                      class="mobile-hide"
                      pardot-region=""
                      valign="top"
                      width="30%"
                    >
                      <img
                        align="right"
                        alt="Securex Lex4You logo"
                        border="0"
                        height="54"
                        src="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png"
                        style="
                          display: block;
                          font-family: Arial;
                          color: rgb(102, 102, 102);
                          float: right;
                          max-width: 163px;
                          border-width: 0px;
                          border-style: solid;
                          width: 163px;
                          height: 54px;
                        "
                        width="163"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  `}function B0(s,r="News from the sectors"){return`
                      <!--ARTICLE-->
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td align="left" pardot-region="">
                              <h1
                                style="
                                  width: 100%;
                                  font-size: 25px;
                                  padding: 0 8px;
                                  color: #4d1656;
                                  font-family: 'Trebuchet MS', sans-serif;
                                "
                              >
                                ${r}
                              </h1>
                              <span
                                style="
                                  vertical-align: top;
                                  padding: 0 8px;
                                  line-height: 11px;
                                  display: inline-block;
                                "
                                ><img
                                  src="https://emailing.securex.eu/l/64002/2019-07-05/fxg4sx/64002/200995/borderunder1.png"
                                  width="55"
                              /></span>

                              <ul
                                style="
                                  padding: 20 26px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                  font-size: 16px;
                                "
                              >
                              ${s}
                              </ul>

                              <div
                                style="
                                  margin: 12px 0px 0px 8px;
                                  color: #4d1656;
                                  line-height: 24px;
                                "
                              >
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
`}function q0(s="https://www.securex.be/en/lex4you/employer",r="JC 123.456 | Sector name",a="Article title: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${s}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${r}</b><br />
                                    ${a}</a
                                  >
                                </li>
`}function k0(s,r="Other news"){return`
                      <!--ARTICLE-->
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                      >
                        <tbody>
                          <tr style="">
                            <td align="left" pardot-region="">
                              <h1
                                style="
                                  width: 100%;
                                  font-size: 25px;
                                  padding: 0 8px;
                                  color: #4d1656;
                                  font-family: 'Trebuchet MS', sans-serif;
                                "
                              >
                                ${r}
                              </h1>
                              <span
                                style="
                                  vertical-align: top;
                                  padding: 0 8px;
                                  line-height: 11px;
                                  display: inline-block;
                                "
                                ><img
                                  src="https://emailing.securex.eu/l/64002/2019-07-05/fxg4sx/64002/200995/borderunder1.png"
                                  width="55"
                              /></span>

                              <ul
                                style="
                                  padding: 20 26px;
                                  font-family: 'Trebuchet MS', sans-serif;
                                  font-size: 16px;
                                "
                              >
                              ${s}
                              </ul>

                              <div
                                style="
                                  margin: 12px 0px 0px 8px;
                                  color: #4d1656;
                                  line-height: 24px;
                                "
                              >
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
`}function G0(s="https://www.securex.be/en/lex4you/employer",r="Article title: lorem ipsum dolor sit amet",a="Article subtitle: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${s}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${r}</b><br />
                                    ${a}</a
                                  >
                                </li>
`}function V0(){const[s,r]=Ds(new Date().toISOString(),"selectedDate"),a=Le.useMemo(()=>new Date(s),[s]),o=ne=>r(ne.toISOString()),f=()=>Og.map(ne=>({id:si(),...ne,fieldsets:ne.fieldsets.map(P=>({id:si(),...P}))})),[d,m]=Le.useState(f()),[D,b]=Le.useState(""),[y,E]=Le.useState(""),[z,O]=Le.useState(!1),{i18n:k}=yi(),[G,Y]=Ds({},"languageSections"),F=(ne,P)=>{Y(ue=>({...ue,[ne]:P}))},Ee=ne=>G[ne]||Og.map(P=>({id:si(),...P,fieldsets:P.fieldsets.map(ue=>({id:si(),...ue}))}));Le.useEffect(()=>{const ne=k.language,P=Ee(ne);m(P)},[k.language]),Le.useEffect(()=>{F(k.language,d)},[d,k.language]);const fe=()=>{window.confirm("Are you sure you want to reset all newsletters? This cannot be undone.")&&m(f())},me=ne=>({id:si(),url:"#",title:"Lorem ipsum dolor",...ne==="complex"&&{summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"},...ne==="training"&&{date:"1 jan. 2025",time:"9:00 - 12:00",format:"On-Site in Brussels",price:"400"},...ne==="simple"&&{subtitle:"Lorem ipsum dolor sit amet"}}),Te=ne=>{m(P=>P.map(ue=>{if(ue.id===ne){const _e=me(ue.fieldsetType);return{...ue,fieldsets:[...ue.fieldsets,_e]}}return ue}))},he=ne=>{m(P=>P.map(ue=>{const _e=ue.fieldsets.filter(Be=>Be.id!==ne);return{...ue,fieldsets:_e}}))},Ce=(ne,P,ue)=>{m(_e=>_e.map(Be=>{const we=Be.fieldsets.map(_=>_.id===ne?typeof P=="string"?{..._,[P]:ue}:{..._,...P}:_);return{...Be,fieldsets:we}}))},{t:W}=yi(),ie=Le.useMemo(()=>{const ne=(P,ue=!1)=>{let _e="";for(const B of P)if(B.title==="Featured News")for(let v=0;v<B.fieldsets.length;v++)(v+1)%2!=0?_e+=R0(B.fieldsets[v].url,B.fieldsets[v].title,B.fieldsets[v].summary,B.fieldsets[v].cta,W("alt"),ue?"./Securex_New_Lex4You.jpg":void 0):_e+=z0(B.fieldsets[v].url,B.fieldsets[v].title,B.fieldsets[v].summary,B.fieldsets[v].cta,W("alt"),ue?"./Securex_New_Lex4You.jpg":void 0);for(const B of P)if(B.title==="Euro Tip")for(let v=0;v<B.fieldsets.length;v++)_e+=H0(B.fieldsets[v].url,B.fieldsets[v].title,B.fieldsets[v].summary,B.fieldsets[v].cta,W("euroTipPreHeader"));for(const B of P)if(B.title==="HR Tip")for(let v=0;v<B.fieldsets.length;v++)_e+=L0(B.fieldsets[v].url,B.fieldsets[v].title,B.fieldsets[v].summary,B.fieldsets[v].cta,W("HRTipPreHeader"));let Be="";for(const B of P)if(B.title==="Trainings"&&B.fieldsets.length>0){for(let v=0;v<B.fieldsets.length;v++)Be+=U0(B.fieldsets[v].url,B.fieldsets[v].title,B.fieldsets[v].date,B.fieldsets[v].time,B.fieldsets[v].format,B.fieldsets[v].price);_e+=j0(Be,W("section_header"),W("th_training"),W("th_day_time"),W("th_format"),W("th_price_ex_vat"),W("section_cta_url"),W("section_cta_copy"))}let we="",_="",V="";for(const B of P){if(B.title==="Sector News"&&B.fieldsets.length>0){let v="";for(let H=0;H<B.fieldsets.length;H++)v+=q0(B.fieldsets[H].url,B.fieldsets[H].title,B.fieldsets[H].subtitle);_+=B0(v,W("sectorNewsHeader"))}if(B.title==="Other News"&&B.fieldsets.length>0){let v="";for(let H=0;H<B.fieldsets.length;H++)v+=G0(B.fieldsets[H].url,B.fieldsets[H].title,B.fieldsets[H].subtitle);V+=k0(v,W("otherNewsHeader"))}}return we=_+V,we.length>0&&(_e+=`${Y0(we)}`),`${_0(_e,ue?"./Securex_Lex4You_logo.png":void 0,W("pre_header_copy"),W("view_online_copy"),W("img_link"),a.toLocaleDateString(k.language,{day:"numeric",month:"long",year:"numeric"}),W("tagline"),W("contact_link"),W("contact_copy"),W("disclaimer_link"),W("disclaimer_copy"),W("preferences_link"),W("preferences_copy"))}`};return{forPreview:ne(d,!0),forCopy:ne(d,!1)}},[d,a,k.language,W]),Oe=()=>{y?navigator.clipboard.writeText(y).then(()=>{O(!0),setTimeout(()=>O(!1),2e3),console.log("HTML copied to clipboard!")}).catch(ne=>{console.error("Failed to copy HTML: ",ne)}):console.warn("No HTML content to copy.")};return Le.useEffect(()=>{b(ie.forPreview),E(ie.forCopy)},[ie]),K.jsxs(K.Fragment,{children:[K.jsx(Pm,{title:"FlasHR",subtitle:"composer",selectedDate:a,onDateChange:o,onClearAll:fe}),K.jsxs("div",{className:"grid",children:[K.jsx(u0,{sections:d,onAddFieldset:Te,onRemove:he,onFieldChange:Ce}),K.jsx(r0,{html:D,onCopy:Oe,isCopied:z})]})]})}gm.createRoot(document.getElementById("root")).render(K.jsxs(Le.StrictMode,{children:[K.jsx("main",{className:"max-w-6xl mx-auto px-6 py-6",children:K.jsx(V0,{})}),K.jsx("script",{type:"module",src:"./node_modules/flyonui/flyonui.js"})]}));
