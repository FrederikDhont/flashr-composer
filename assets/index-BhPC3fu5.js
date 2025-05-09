(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function a(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=a(f);fetch(f.href,d)}})();function nm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var us={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function am(){if(og)return ri;og=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,f,d){var y=null;if(d!==void 0&&(y=""+d),f.key!==void 0&&(y=""+f.key),"key"in f){d={};for(var D in f)D!=="key"&&(d[D]=f[D])}else d=f;return f=d.ref,{$$typeof:s,type:o,key:y,ref:f!==void 0?f:null,props:d}}return ri.Fragment=r,ri.jsx=a,ri.jsxs=a,ri}var sg;function lm(){return sg||(sg=1,us.exports=am()),us.exports}var $=lm(),rs={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function im(){if(cg)return be;cg=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),y=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=z&&x[z]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,Y={};function J(x,U,K){this.props=x,this.context=U,this.refs=Y,this.updater=K||G}J.prototype.isReactComponent={},J.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},J.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Oe(){}Oe.prototype=J.prototype;function ce(x,U,K){this.props=x,this.context=U,this.refs=Y,this.updater=K||G}var I=ce.prototype=new Oe;I.constructor=ce,k(I,J.prototype),I.isPureReactComponent=!0;var Ee=Array.isArray,ge={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function ee(x,U,K,X,le,Se){return K=Se.ref,{$$typeof:s,type:x,key:U,ref:K!==void 0?K:null,props:Se}}function W(x,U){return ee(x.type,U,void 0,void 0,void 0,x.props)}function pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function Te(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(K){return U[K]})}var ye=/\/+/g;function ve(x,U){return typeof x=="object"&&x!==null&&x.key!=null?Te(""+x.key):U.toString(36)}function We(){}function Ze(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(We,We):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function V(x,U,K,X,le){var Se=typeof x;(Se==="undefined"||Se==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(Se){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case s:case r:fe=!0;break;case E:return fe=x._init,V(fe(x._payload),U,K,X,le)}}if(fe)return le=le(x),fe=X===""?"."+ve(x,0):X,Ee(le)?(K="",fe!=null&&(K=fe.replace(ye,"$&/")+"/"),V(le,U,K,"",function(wt){return wt})):le!=null&&(pe(le)&&(le=W(le,K+(le.key==null||x&&x.key===le.key?"":(""+le.key).replace(ye,"$&/")+"/")+fe)),U.push(le)),1;fe=0;var at=X===""?".":X+":";if(Ee(x))for(var Ae=0;Ae<x.length;Ae++)X=x[Ae],Se=at+ve(X,Ae),fe+=V(X,U,K,Se,le);else if(Ae=N(x),typeof Ae=="function")for(x=Ae.call(x),Ae=0;!(X=x.next()).done;)X=X.value,Se=at+ve(X,Ae++),fe+=V(X,U,K,Se,le);else if(Se==="object"){if(typeof x.then=="function")return V(Ze(x),U,K,X,le);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return fe}function M(x,U,K){if(x==null)return x;var X=[],le=0;return V(x,X,"","",function(Se){return U.call(K,Se,le++)}),X}function B(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(K){(x._status===0||x._status===-1)&&(x._status=1,x._result=K)},function(K){(x._status===0||x._status===-1)&&(x._status=2,x._result=K)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var ae=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function me(){}return be.Children={map:M,forEach:function(x,U,K){M(x,function(){U.apply(this,arguments)},K)},count:function(x){var U=0;return M(x,function(){U++}),U},toArray:function(x){return M(x,function(U){return U})||[]},only:function(x){if(!pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},be.Component=J,be.Fragment=a,be.Profiler=f,be.PureComponent=ce,be.StrictMode=o,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ge,be.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ge.H.useMemoCache(x)}},be.cache=function(x){return function(){return x.apply(null,arguments)}},be.cloneElement=function(x,U,K){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var X=k({},x.props),le=x.key,Se=void 0;if(U!=null)for(fe in U.ref!==void 0&&(Se=void 0),U.key!==void 0&&(le=""+U.key),U)!ne.call(U,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&U.ref===void 0||(X[fe]=U[fe]);var fe=arguments.length-2;if(fe===1)X.children=K;else if(1<fe){for(var at=Array(fe),Ae=0;Ae<fe;Ae++)at[Ae]=arguments[Ae+2];X.children=at}return ee(x.type,le,void 0,void 0,Se,X)},be.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},be.createElement=function(x,U,K){var X,le={},Se=null;if(U!=null)for(X in U.key!==void 0&&(Se=""+U.key),U)ne.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(le[X]=U[X]);var fe=arguments.length-2;if(fe===1)le.children=K;else if(1<fe){for(var at=Array(fe),Ae=0;Ae<fe;Ae++)at[Ae]=arguments[Ae+2];le.children=at}if(x&&x.defaultProps)for(X in fe=x.defaultProps,fe)le[X]===void 0&&(le[X]=fe[X]);return ee(x,Se,void 0,void 0,null,le)},be.createRef=function(){return{current:null}},be.forwardRef=function(x){return{$$typeof:D,render:x}},be.isValidElement=pe,be.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:B}},be.memo=function(x,U){return{$$typeof:m,type:x,compare:U===void 0?null:U}},be.startTransition=function(x){var U=ge.T,K={};ge.T=K;try{var X=x(),le=ge.S;le!==null&&le(K,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(me,ae)}catch(Se){ae(Se)}finally{ge.T=U}},be.unstable_useCacheRefresh=function(){return ge.H.useCacheRefresh()},be.use=function(x){return ge.H.use(x)},be.useActionState=function(x,U,K){return ge.H.useActionState(x,U,K)},be.useCallback=function(x,U){return ge.H.useCallback(x,U)},be.useContext=function(x){return ge.H.useContext(x)},be.useDebugValue=function(){},be.useDeferredValue=function(x,U){return ge.H.useDeferredValue(x,U)},be.useEffect=function(x,U,K){var X=ge.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(x,U)},be.useId=function(){return ge.H.useId()},be.useImperativeHandle=function(x,U,K){return ge.H.useImperativeHandle(x,U,K)},be.useInsertionEffect=function(x,U){return ge.H.useInsertionEffect(x,U)},be.useLayoutEffect=function(x,U){return ge.H.useLayoutEffect(x,U)},be.useMemo=function(x,U){return ge.H.useMemo(x,U)},be.useOptimistic=function(x,U){return ge.H.useOptimistic(x,U)},be.useReducer=function(x,U,K){return ge.H.useReducer(x,U,K)},be.useRef=function(x){return ge.H.useRef(x)},be.useState=function(x){return ge.H.useState(x)},be.useSyncExternalStore=function(x,U,K){return ge.H.useSyncExternalStore(x,U,K)},be.useTransition=function(){return ge.H.useTransition()},be.version="19.1.0",be}var fg;function ws(){return fg||(fg=1,rs.exports=im()),rs.exports}var qe=ws(),os={exports:{}},oi={},ss={exports:{}},cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function um(){return dg||(dg=1,function(s){function r(M,B){var ae=M.length;M.push(B);e:for(;0<ae;){var me=ae-1>>>1,x=M[me];if(0<f(x,B))M[me]=B,M[ae]=x,ae=me;else break e}}function a(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var B=M[0],ae=M.pop();if(ae!==B){M[0]=ae;e:for(var me=0,x=M.length,U=x>>>1;me<U;){var K=2*(me+1)-1,X=M[K],le=K+1,Se=M[le];if(0>f(X,ae))le<x&&0>f(Se,X)?(M[me]=Se,M[le]=ae,me=le):(M[me]=X,M[K]=ae,me=K);else if(le<x&&0>f(Se,ae))M[me]=Se,M[le]=ae,me=le;else break e}}return B}function f(M,B){var ae=M.sortIndex-B.sortIndex;return ae!==0?ae:M.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var y=Date,D=y.now();s.unstable_now=function(){return y.now()-D}}var v=[],m=[],E=1,z=null,N=3,G=!1,k=!1,Y=!1,J=!1,Oe=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Ee(M){for(var B=a(m);B!==null;){if(B.callback===null)o(m);else if(B.startTime<=M)o(m),B.sortIndex=B.expirationTime,r(v,B);else break;B=a(m)}}function ge(M){if(Y=!1,Ee(M),!k)if(a(v)!==null)k=!0,ne||(ne=!0,ve());else{var B=a(m);B!==null&&V(ge,B.startTime-M)}}var ne=!1,ee=-1,W=5,pe=-1;function Te(){return J?!0:!(s.unstable_now()-pe<W)}function ye(){if(J=!1,ne){var M=s.unstable_now();pe=M;var B=!0;try{e:{k=!1,Y&&(Y=!1,ce(ee),ee=-1),G=!0;var ae=N;try{t:{for(Ee(M),z=a(v);z!==null&&!(z.expirationTime>M&&Te());){var me=z.callback;if(typeof me=="function"){z.callback=null,N=z.priorityLevel;var x=me(z.expirationTime<=M);if(M=s.unstable_now(),typeof x=="function"){z.callback=x,Ee(M),B=!0;break t}z===a(v)&&o(v),Ee(M)}else o(v);z=a(v)}if(z!==null)B=!0;else{var U=a(m);U!==null&&V(ge,U.startTime-M),B=!1}}break e}finally{z=null,N=ae,G=!1}B=void 0}}finally{B?ve():ne=!1}}}var ve;if(typeof I=="function")ve=function(){I(ye)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ze=We.port2;We.port1.onmessage=ye,ve=function(){Ze.postMessage(null)}}else ve=function(){Oe(ye,0)};function V(M,B){ee=Oe(function(){M(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(M){switch(N){case 1:case 2:case 3:var B=3;break;default:B=N}var ae=N;N=B;try{return M()}finally{N=ae}},s.unstable_requestPaint=function(){J=!0},s.unstable_runWithPriority=function(M,B){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ae=N;N=M;try{return B()}finally{N=ae}},s.unstable_scheduleCallback=function(M,B,ae){var me=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?me+ae:me):ae=me,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ae+x,M={id:E++,callback:B,priorityLevel:M,startTime:ae,expirationTime:x,sortIndex:-1},ae>me?(M.sortIndex=ae,r(m,M),a(v)===null&&M===a(m)&&(Y?(ce(ee),ee=-1):Y=!0,V(ge,ae-me))):(M.sortIndex=x,r(v,M),k||G||(k=!0,ne||(ne=!0,ve()))),M},s.unstable_shouldYield=Te,s.unstable_wrapCallback=function(M){var B=N;return function(){var ae=N;N=B;try{return M.apply(this,arguments)}finally{N=ae}}}}(cs)),cs}var gg;function rm(){return gg||(gg=1,ss.exports=um()),ss.exports}var fs={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function om(){if(hg)return pt;hg=1;var s=ws();function r(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(v,m,E){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:z==null?null:""+z,children:v,containerInfo:m,implementation:E}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,pt.createPortal=function(v,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(v,m,null,E)},pt.flushSync=function(v){var m=y.T,E=o.p;try{if(y.T=null,o.p=2,v)return v()}finally{y.T=m,o.p=E,o.d.f()}},pt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(v,m))},pt.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},pt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var E=m.as,z=D(E,m.crossOrigin),N=typeof m.integrity=="string"?m.integrity:void 0,G=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?o.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:z,integrity:N,fetchPriority:G}):E==="script"&&o.d.X(v,{crossOrigin:z,integrity:N,fetchPriority:G,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},pt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=D(m.as,m.crossOrigin);o.d.M(v,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(v)},pt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,z=D(E,m.crossOrigin);o.d.L(v,E,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},pt.preloadModule=function(v,m){if(typeof v=="string")if(m){var E=D(m.as,m.crossOrigin);o.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(v)},pt.requestFormReset=function(v){o.d.r(v)},pt.unstable_batchedUpdates=function(v,m){return v(m)},pt.useFormState=function(v,m,E){return y.H.useFormState(v,m,E)},pt.useFormStatus=function(){return y.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var pg;function sm(){if(pg)return fs.exports;pg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),fs.exports=om(),fs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function cm(){if(mg)return oi;mg=1;var s=rm(),r=ws(),a=sm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(d(e)!==e)throw Error(o(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return D(i),e;if(u===l)return D(i),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=u;else{for(var c=!1,g=i.child;g;){if(g===n){c=!0,n=i,l=u;break}if(g===l){c=!0,l=i,n=u;break}g=g.sibling}if(!c){for(g=u.child;g;){if(g===n){c=!0,n=u,l=i;break}if(g===l){c=!0,l=u,n=i;break}g=g.sibling}if(!c)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,z=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),ce=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function ve(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var We=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===We?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case J:return"Profiler";case Y:return"StrictMode";case ge:return"Suspense";case ne:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ze(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Ze(e(t))}catch{}}return null}var V=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},me=[],x=-1;function U(e){return{current:e}}function K(e){0>x||(e.current=me[x],me[x]=null,x--)}function X(e,t){x++,me[x]=e.current,e.current=t}var le=U(null),Se=U(null),fe=U(null),at=U(null);function Ae(e,t){switch(X(fe,t),X(Se,e),X(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(le),X(le,e)}function wt(){K(le),K(Se),K(fe)}function dl(e){e.memoizedState!==null&&X(at,e);var t=le.current,n=jd(t,e.type);t!==n&&(X(Se,e),X(le,n))}function In(e){Se.current===e&&(K(le),K(Se)),at.current===e&&(K(at),ni._currentValue=ae)}var wn=Object.prototype.hasOwnProperty,gl=s.unstable_scheduleCallback,hl=s.unstable_cancelCallback,xi=s.unstable_shouldYield,Zu=s.unstable_requestPaint,Mt=s.unstable_now,Si=s.unstable_getCurrentPriorityLevel,Pn=s.unstable_ImmediatePriority,Di=s.unstable_UserBlockingPriority,Da=s.unstable_NormalPriority,Ei=s.unstable_LowPriority,Ea=s.unstable_IdlePriority,Ti=s.log,Ta=s.unstable_setDisableYieldValue,ea=null,ft=null;function It(e){if(typeof Ti=="function"&&Ta(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ea,e)}catch{}}var dt=Math.clz32?Math.clz32:wi,Ju=Math.log,Fu=Math.LN2;function wi(e){return e>>>=0,e===0?32:31-(Ju(e)/Fu|0)|0}var wa=256,Ma=4194304;function _e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,u=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~u,l!==0?i=_e(l):(c&=g,c!==0?i=_e(c):n||(n=g&~e,n!==0&&(i=_e(n))))):(g=l&~u,g!==0?i=_e(g):c!==0?i=_e(c):n||(n=l&~e,n!==0&&(i=_e(n)))),i===0?0:t!==0&&t!==i&&(t&u)===0&&(u=i&-i,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:i}function on(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $u(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ta(){var e=wa;return wa<<=1,(wa&4194048)===0&&(wa=256),e}function Oa(){var e=Ma;return Ma<<=1,(Ma&62914560)===0&&(Ma=4194304),e}function Ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wu(e,t,n,l,i,u){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,b=e.expirationTimes,C=e.hiddenUpdates;for(n=c&~n;0<n;){var H=31-dt(n),j=1<<H;g[H]=0,b[H]=-1;var A=C[H];if(A!==null)for(C[H]=null,H=0;H<A.length;H++){var _=A[H];_!==null&&(_.lane&=-536870913)}n&=~j}l!==0&&h(e,l,0),u!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=u&~(c&~t))}function h(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function p(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-dt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function T(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function R(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function q(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:ng(e.type))}function Z(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var oe=Math.random().toString(36).slice(2),Q="__reactFiber$"+oe,ie="__reactProps$"+oe,F="__reactContainer$"+oe,ue="__reactEvents$"+oe,He="__reactListeners$"+oe,jt="__reactHandles$"+oe,gt="__reactResources$"+oe,Jt="__reactMarker$"+oe;function Pt(e){delete e[Q],delete e[ie],delete e[ue],delete e[He],delete e[jt]}function On(e){var t=e[Q];if(t)return t;for(var n=e.parentNode;n;){if(t=n[F]||n[Q]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kd(e);e!==null;){if(n=e[Q])return n;e=kd(e)}return t}e=n,n=e.parentNode}return null}function en(e){if(e=e[Q]||e[F]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Cn(e){var t=e[gt];return t||(t=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Jt]=!0}var Mi=new Set,Oi={};function sn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(Oi[e]=t,e=0;e<t.length;e++)Mi.add(t[e])}var Iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},Os={};function Fg(e){return wn.call(Os,e)?!0:wn.call(Ms,e)?!1:Iu.test(e)?Os[e]=!0:(Ms[e]=!0,!1)}function Ci(e,t,n){if(Fg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ai(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Pu,Cs;function Ca(e){if(Pu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pu=t&&t[1]||"",Cs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pu+e+Cs}var er=!1;function tr(e,t){if(!e||er)return"";er=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(_){var A=_}Reflect.construct(e,[],j)}else{try{j.call()}catch(_){A=_}e.call(j.prototype)}}else{try{throw Error()}catch(_){A=_}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(_){if(_&&A&&typeof _.stack=="string")return[_.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),c=u[0],g=u[1];if(c&&g){var b=c.split(`
`),C=g.split(`
`);for(i=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(l===b.length||i===C.length)for(l=b.length-1,i=C.length-1;1<=l&&0<=i&&b[l]!==C[i];)i--;for(;1<=l&&0<=i;l--,i--)if(b[l]!==C[i]){if(l!==1||i!==1)do if(l--,i--,0>i||b[l]!==C[i]){var H=`
`+b[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=i);break}}}finally{er=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ca(n):""}function $g(e){switch(e.tag){case 26:case 27:case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return tr(e.type,!1);case 11:return tr(e.type.render,!1);case 1:return tr(e.type,!0);case 31:return Ca("Activity");default:return""}}function As(e){try{var t="";do t+=$g(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wg(e){var t=Ns(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=Wg(e))}function _s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ns(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ig=/[\n"\\]/g;function Bt(e){return e.replace(Ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function nr(e,t,n,l,i,u,c,g){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ar(e,c,Yt(t)):n!=null?ar(e,c,Yt(n)):l!=null&&e.removeAttribute("value"),i==null&&u!=null&&(e.defaultChecked=!!u),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Yt(g):e.removeAttribute("name")}function Rs(e,t,n,l,i,u,c,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function ar(e,t,n){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Aa(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zs(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function Hs(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(V(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ls(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Pg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Us(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&Ls(e,i,l)}else for(var u in t)t.hasOwnProperty(u)&&Ls(e,u,t[u])}function lr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ir=null;function ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Ra=null;function js(e){var t=en(e);if(t&&(e=t.stateNode)){var n=e[ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(nr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[ie]||null;if(!i)throw Error(o(90));nr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&_s(l)}break e;case"textarea":zs(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}}}var rr=!1;function Ys(e,t,n){if(rr)return e(t,n);rr=!0;try{var l=e(t);return l}finally{if(rr=!1,(_a!==null||Ra!==null)&&(yu(),_a&&(t=_a,e=Ra,Ra=_a=null,js(t),e)))for(t=0;t<e.length;t++)js(e[t])}}function pl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[ie]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(fn)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){or=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{or=!1}var Nn=null,sr=null,zi=null;function Bs(){if(zi)return zi;var e,t=sr,n=t.length,l,i="value"in Nn?Nn.value:Nn.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(l=1;l<=c&&t[n-l]===i[u-l];l++);return zi=i.slice(e,1<l?1-l:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function qs(){return!1}function xt(e){function t(n,l,i,u,c){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Li:qs,this.isPropagationStopped=qs,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=xt(la),yl=E({},la,{view:0,detail:0}),nh=xt(yl),cr,fr,vl,ji=E({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(cr=e.screenX-vl.screenX,fr=e.screenY-vl.screenY):fr=cr=0,vl=e),cr)},movementY:function(e){return"movementY"in e?e.movementY:fr}}),ks=xt(ji),ah=E({},ji,{dataTransfer:0}),lh=xt(ah),ih=E({},yl,{relatedTarget:0}),dr=xt(ih),uh=E({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=xt(uh),oh=E({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=xt(oh),ch=E({},la,{data:0}),Gs=xt(ch),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function gr(){return hh}var ph=E({},yl,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gr,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=xt(ph),yh=E({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=xt(yh),vh=E({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gr}),bh=xt(vh),xh=E({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=xt(xh),Dh=E({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=xt(Dh),Th=E({},la,{newState:0,oldState:0}),wh=xt(Th),Mh=[9,13,27,32],hr=fn&&"CompositionEvent"in window,bl=null;fn&&"documentMode"in document&&(bl=document.documentMode);var Oh=fn&&"TextEvent"in window&&!bl,Xs=fn&&(!hr||bl&&8<bl&&11>=bl),Qs=" ",Ks=!1;function Zs(e,t){switch(e){case"keyup":return Mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Ch(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(Ks=!0,Qs);case"textInput":return e=t.data,e===Qs&&Ks?null:e;default:return null}}function Ah(e,t){if(za)return e==="compositionend"||!hr&&Zs(e,t)?(e=Bs(),zi=sr=Nn=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function $s(e,t,n,l){_a?Ra?Ra.push(l):Ra=[l]:_a=l,t=Eu(t,"onChange"),0<t.length&&(n=new Ui("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var xl=null,Sl=null;function _h(e){_d(e,0)}function Yi(e){var t=aa(e);if(_s(t))return e}function Ws(e,t){if(e==="change")return t}var Is=!1;if(fn){var pr;if(fn){var mr="oninput"in document;if(!mr){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),mr=typeof Ps.oninput=="function"}pr=mr}else pr=!1;Is=pr&&(!document.documentMode||9<document.documentMode)}function ec(){xl&&(xl.detachEvent("onpropertychange",tc),Sl=xl=null)}function tc(e){if(e.propertyName==="value"&&Yi(Sl)){var t=[];$s(t,Sl,e,ur(e)),Ys(_h,t)}}function Rh(e,t,n){e==="focusin"?(ec(),xl=t,Sl=n,xl.attachEvent("onpropertychange",tc)):e==="focusout"&&ec()}function zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Sl)}function Hh(e,t){if(e==="click")return Yi(t)}function Lh(e,t){if(e==="input"||e==="change")return Yi(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Uh;function Dl(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!wn.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var n=nc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jh=fn&&"documentMode"in document&&11>=document.documentMode,Ha=null,vr=null,El=null,br=!1;function uc(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;br||Ha==null||Ha!==_i(l)||(l=Ha,"selectionStart"in l&&yr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),El&&Dl(El,l)||(El=l,l=Eu(vr,"onSelect"),0<l.length&&(t=new Ui("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ha)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var La={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},xr={},rc={};fn&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ua(e){if(xr[e])return xr[e];if(!La[e])return e;var t=La[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rc)return xr[e]=t[n];return e}var oc=ua("animationend"),sc=ua("animationiteration"),cc=ua("animationstart"),Yh=ua("transitionrun"),Bh=ua("transitionstart"),qh=ua("transitioncancel"),fc=ua("transitionend"),dc=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sr.push("scrollEnd");function Ft(e,t){dc.set(e,t),sn(t,[e])}var gc=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=gc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:As(t)},gc.set(e,t),t)}return{value:e,source:t,stack:As(t)}}var kt=[],Ua=0,Dr=0;function Bi(){for(var e=Ua,t=Dr=Ua=0;t<e;){var n=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var i=kt[t];kt[t++]=null;var u=kt[t];if(kt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}u!==0&&hc(n,i,u)}}function qi(e,t,n,l){kt[Ua++]=e,kt[Ua++]=t,kt[Ua++]=n,kt[Ua++]=l,Dr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Er(e,t,n,l){return qi(e,t,n,l),ki(e)}function ja(e,t){return qi(e,null,null,t),ki(e)}function hc(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(i=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,i&&t!==null&&(i=31-dt(n),e=u.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),u):null}function ki(e){if(50<Jl)throw Jl=0,No=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ya={};function kh(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,l){return new kh(e,t,n,l)}function Tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,n,l,i,u){var c=0;if(l=e,typeof e=="function")Tr(e)&&(c=1);else if(typeof e=="string")c=Vp(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=At(31,n,t,i),e.elementType=pe,e.lanes=u,e;case k:return ra(n.children,i,u,t);case Y:c=8,i|=24;break;case J:return e=At(12,n,t,i|2),e.elementType=J,e.lanes=u,e;case ge:return e=At(13,n,t,i),e.elementType=ge,e.lanes=u,e;case ne:return e=At(19,n,t,i),e.elementType=ne,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:case I:c=10;break e;case ce:c=9;break e;case Ee:c=11;break e;case ee:c=14;break e;case W:c=16,l=null;break e}c=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=At(c,n,t,i),t.elementType=e,t.type=l,t.lanes=u,t}function ra(e,t,n,l){return e=At(7,e,l,t),e.lanes=n,e}function wr(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Mr(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ba=[],qa=0,Vi=null,Xi=0,Gt=[],Vt=0,oa=null,gn=1,hn="";function sa(e,t){Ba[qa++]=Xi,Ba[qa++]=Vi,Vi=e,Xi=t}function mc(e,t,n){Gt[Vt++]=gn,Gt[Vt++]=hn,Gt[Vt++]=oa,oa=e;var l=gn;e=hn;var i=32-dt(l)-1;l&=~(1<<i),n+=1;var u=32-dt(t)+i;if(30<u){var c=i-i%5;u=(l&(1<<c)-1).toString(32),l>>=c,i-=c,gn=1<<32-dt(t)+i|n<<i|l,hn=u+e}else gn=1<<u|n<<i|l,hn=e}function Or(e){e.return!==null&&(sa(e,1),mc(e,1,0))}function Cr(e){for(;e===Vi;)Vi=Ba[--qa],Ba[qa]=null,Xi=Ba[--qa],Ba[qa]=null;for(;e===oa;)oa=Gt[--Vt],Gt[Vt]=null,hn=Gt[--Vt],Gt[Vt]=null,gn=Gt[--Vt],Gt[Vt]=null}var vt=null,Qe=null,Re=!1,ca=null,tn=!1,Ar=Error(o(519));function fa(e){var t=Error(o(418,""));throw Ml(qt(t,e)),Ar}function yc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Q]=e,t[ie]=l,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<$l.length;n++)Me($l[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Rs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ni(t);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Hs(t,l.value,l.defaultValue,l.children),Ni(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Ld(t.textContent,n)?(l.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),l.onScroll!=null&&Me("scroll",t),l.onScrollEnd!=null&&Me("scrollend",t),l.onClick!=null&&(t.onclick=Tu),t=!0):t=!1,t||fa(e)}function vc(e){for(vt=e.return;vt;)switch(vt.tag){case 5:case 13:tn=!1;return;case 27:case 3:tn=!0;return;default:vt=vt.return}}function Tl(e){if(e!==vt)return!1;if(!Re)return vc(e),Re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ko(e.type,e.memoizedProps)),n=!n),n&&Qe&&fa(e),vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Qe=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Qe=null}}else t===27?(t=Qe,Kn(e.type)?(e=$o,$o=null,Qe=e):Qe=t):Qe=vt?Wt(e.stateNode.nextSibling):null;return!0}function wl(){Qe=vt=null,Re=!1}function bc(){var e=ca;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),ca=null),e}function Ml(e){ca===null?ca=[e]:ca.push(e)}var Nr=U(null),da=null,pn=null;function _n(e,t,n){X(Nr,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=Nr.current,K(Nr)}function _r(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){var c=i.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=i;for(var b=0;b<t.length;b++)if(g.context===t[b]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),_r(u.return,n,e),l||(c=null);break e}u=g.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(o(341));c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),_r(c,n,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Ol(e,t,n,l){e=null;for(var i=t,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var g=i.type;Ct(i.pendingProps.value,c.value)||(e!==null?e.push(g):e=[g])}}else if(i===at.current){if(c=i.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ni):e=[ni])}i=i.return}e!==null&&Rr(t,e,n,l),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){da=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return xc(da,e)}function Ki(e,t){return da===null&&ga(e),xc(e,t)}function xc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(o(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var Gh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Vh=s.unstable_scheduleCallback,Xh=s.unstable_NormalPriority,tt={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Gh,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&Vh(Xh,function(){e.controller.abort()})}var Al=null,Hr=0,ka=0,Ga=null;function Qh(e,t){if(Al===null){var n=Al=[];Hr=0,ka=jo(),Ga={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Hr++,t.then(Sc,Sc),t}function Sc(){if(--Hr===0&&Al!==null){Ga!==null&&(Ga.status="fulfilled");var e=Al;Al=null,ka=0,Ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kh(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var Dc=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qh(e,t),Dc!==null&&Dc(e,t)};var ha=U(null);function Lr(){var e=ha.current;return e!==null?e:Ge.pooledCache}function Zi(e,t){t===null?X(ha,ha.current):X(ha,t.pool)}function Ec(){var e=Lr();return e===null?null:{parent:tt._currentValue,pool:e}}var Nl=Error(o(460)),Tc=Error(o(474)),Ji=Error(o(542)),Ur={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Mc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fi,Fi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cc(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cc(e),e}throw _l=t,Nl}}var _l=null;function Oc(){if(_l===null)throw Error(o(459));var e=_l;return _l=null,e}function Cc(e){if(e===Nl||e===Ji)throw Error(o(483))}var Rn=!1;function jr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=ki(e),hc(e,null,n),t}return qi(e,l,t,n),ki(e)}function Rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,p(e,n)}}function Br(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?i=u=c:u=u.next=c,n=n.next}while(n!==null);u===null?i=u=t:u=u.next=t}else i=u=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qr=!1;function zl(){if(qr){var e=Ga;if(e!==null)throw e}}function Hl(e,t,n,l){qr=!1;var i=e.updateQueue;Rn=!1;var u=i.firstBaseUpdate,c=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var b=g,C=b.next;b.next=null,c===null?u=C:c.next=C,c=b;var H=e.alternate;H!==null&&(H=H.updateQueue,g=H.lastBaseUpdate,g!==c&&(g===null?H.firstBaseUpdate=C:g.next=C,H.lastBaseUpdate=b))}if(u!==null){var j=i.baseState;c=0,H=C=b=null,g=u;do{var A=g.lane&-536870913,_=A!==g.lane;if(_?(Ce&A)===A:(l&A)===A){A!==0&&A===ka&&(qr=!0),H!==null&&(H=H.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var de=e,re=g;A=t;var Be=n;switch(re.tag){case 1:if(de=re.payload,typeof de=="function"){j=de.call(Be,j,A);break e}j=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=re.payload,A=typeof de=="function"?de.call(Be,j,A):de,A==null)break e;j=E({},j,A);break e;case 2:Rn=!0}}A=g.callback,A!==null&&(e.flags|=64,_&&(e.flags|=8192),_=i.callbacks,_===null?i.callbacks=[A]:_.push(A))}else _={lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},H===null?(C=H=_,b=j):H=H.next=_,c|=A;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;_=g,g=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);H===null&&(b=j),i.baseState=b,i.firstBaseUpdate=C,i.lastBaseUpdate=H,u===null&&(i.shared.lanes=0),Gn|=c,e.lanes=c,e.memoizedState=j}}function Ac(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Nc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ac(n[e],t)}var Va=U(null),$i=U(0);function _c(e,t){e=En,X($i,e),X(Va,t),En=e|t.baseLanes}function kr(){X($i,En),X(Va,Va.current)}function Gr(){En=$i.current,K(Va),K($i)}var Ln=0,xe=null,je=null,Pe=null,Wi=!1,Xa=!1,pa=!1,Ii=0,Ll=0,Qa=null,Zh=0;function Je(){throw Error(o(321))}function Vr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Xr(e,t,n,l,i,u){return Ln=u,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?pf:mf,pa=!1,u=n(l,i),pa=!1,Xa&&(u=zc(t,n,l,i)),Rc(e),u}function Rc(e){M.H=lu;var t=je!==null&&je.next!==null;if(Ln=0,Pe=je=xe=null,Wi=!1,Ll=0,Qa=null,t)throw Error(o(300));e===null||lt||(e=e.dependencies,e!==null&&Qi(e)&&(lt=!0))}function zc(e,t,n,l){xe=e;var i=0;do{if(Xa&&(Qa=null),Ll=0,Xa=!1,25<=i)throw Error(o(301));if(i+=1,Pe=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=ep,u=t(n,l)}while(Xa);return u}function Jh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Ul(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(xe.flags|=1024),t}function Qr(){var e=Ii!==0;return Ii=0,e}function Kr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zr(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}Ln=0,Pe=je=xe=null,Xa=!1,Ll=Ii=0,Qa=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?xe.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function et(){if(je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Pe===null?xe.memoizedState:Pe.next;if(t!==null)Pe=t,je=e;else{if(e===null)throw xe.alternate===null?Error(o(467)):Error(o(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Pe===null?xe.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Jr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var t=Ll;return Ll+=1,Qa===null&&(Qa=[]),e=Mc(Qa,e,t),t=xe,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?pf:mf),e}function Pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===I)return ht(e)}throw Error(o(438,String(e)))}function Fr(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Jr(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Te;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=et();return $r(t,je,e)}function $r(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,u=l.pending;if(u!==null){if(i!==null){var c=i.next;i.next=u.next,u.next=c}t.baseQueue=i=u,l.pending=null}if(u=e.baseState,i===null)e.memoizedState=u;else{t=i.next;var g=c=null,b=null,C=t,H=!1;do{var j=C.lane&-536870913;if(j!==C.lane?(Ce&j)===j:(Ln&j)===j){var A=C.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),j===ka&&(H=!0);else if((Ln&A)===A){C=C.next,A===ka&&(H=!0);continue}else j={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(g=b=j,c=u):b=b.next=j,xe.lanes|=A,Gn|=A;j=C.action,pa&&n(u,j),u=C.hasEagerState?C.eagerState:n(u,j)}else A={lane:j,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(g=b=A,c=u):b=b.next=A,xe.lanes|=j,Gn|=j;C=C.next}while(C!==null&&C!==t);if(b===null?c=u:b.next=g,!Ct(u,e.memoizedState)&&(lt=!0,H&&(n=Ga,n!==null)))throw n;e.memoizedState=u,e.baseState=c,e.baseQueue=b,l.lastRenderedState=u}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wr(e){var t=et(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do u=e(u,c.action),c=c.next;while(c!==i);Ct(u,t.memoizedState)||(lt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function Hc(e,t,n){var l=xe,i=et(),u=Re;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var c=!Ct((je||i).memoizedState,n);c&&(i.memoizedState=n,lt=!0),i=i.queue;var g=jc.bind(null,l,i,e);if(jl(2048,8,g,[e]),i.getSnapshot!==t||c||Pe!==null&&Pe.memoizedState.tag&1){if(l.flags|=2048,Ka(9,tu(),Uc.bind(null,l,i,n,t),null),Ge===null)throw Error(o(349));u||(Ln&124)!==0||Lc(l,t,n)}return n}function Lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Jr(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,l){t.value=n,t.getSnapshot=l,Yc(t)&&Bc(e)}function jc(e,t,n){return n(function(){Yc(t)&&Bc(e)})}function Yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Bc(e){var t=ja(e,2);t!==null&&Ht(t,e,2)}function Ir(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),pa){It(!0);try{n()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function qc(e,t,n,l){return e.baseState=n,$r(e,je,typeof l=="function"?l:yn)}function Fh(e,t,n,l,i){if(au(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};M.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,kc(t,u)):(u.next=n.next,t.pending=n.next=u)}}function kc(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var u=M.T,c={};M.T=c;try{var g=n(i,l),b=M.S;b!==null&&b(c,g),Gc(e,t,g)}catch(C){Pr(e,t,C)}finally{M.T=u}}else try{u=n(i,l),Gc(e,t,u)}catch(C){Pr(e,t,C)}}function Gc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Vc(e,t,l)},function(l){return Pr(e,t,l)}):Vc(e,t,n)}function Vc(e,t,n){t.status="fulfilled",t.value=n,Xc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,kc(e,n)))}function Pr(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Xc(t),t=t.next;while(t!==l)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qc(e,t){return t}function Kc(e,t){if(Re){var n=Ge.formState;if(n!==null){e:{var l=xe;if(Re){if(Qe){t:{for(var i=Qe,u=tn;i.nodeType!==8;){if(!u){i=null;break t}if(i=Wt(i.nextSibling),i===null){i=null;break t}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Qe=Wt(i.nextSibling),l=i.data==="F!";break e}}fa(l)}l=!1}l&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:t},n.queue=l,n=df.bind(null,xe,l),l.dispatch=n,l=Ir(!1),u=lo.bind(null,xe,!1,l.queue),l=St(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=Fh.bind(null,xe,i,u,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function Zc(e){var t=et();return Jc(t,je,e)}function Jc(e,t,n){if(t=$r(e,t,Qc)[0],e=eu(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ul(t)}catch(c){throw c===Nl?Ji:c}else l=t;t=et();var i=t.queue,u=i.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,Ka(9,tu(),$h.bind(null,i,n),null)),[l,u,e]}function $h(e,t){e.action=t}function Fc(e){var t=et(),n=je;if(n!==null)return Jc(t,n,e);et(),t=t.memoizedState,n=et();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ka(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Jr(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function tu(){return{destroy:void 0,resource:void 0}}function $c(){return et().memoizedState}function nu(e,t,n,l){var i=St();l=l===void 0?null:l,xe.flags|=e,i.memoizedState=Ka(1|t,tu(),n,l)}function jl(e,t,n,l){var i=et();l=l===void 0?null:l;var u=i.memoizedState.inst;je!==null&&l!==null&&Vr(l,je.memoizedState.deps)?i.memoizedState=Ka(t,u,n,l):(xe.flags|=e,i.memoizedState=Ka(1|t,u,n,l))}function Wc(e,t){nu(8390656,8,e,t)}function Ic(e,t){jl(2048,8,e,t)}function Pc(e,t){return jl(4,2,e,t)}function ef(e,t){return jl(4,4,e,t)}function tf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nf(e,t,n){n=n!=null?n.concat([e]):null,jl(4,4,tf.bind(null,t,e),n)}function eo(){}function af(e,t){var n=et();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Vr(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function lf(e,t){var n=et();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Vr(t,l[1]))return l[0];if(l=e(),pa){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l}function to(e,t,n){return n===void 0||(Ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=od(),xe.lanes|=e,Gn|=e,n)}function uf(e,t,n,l){return Ct(n,t)?n:Va.current!==null?(e=to(e,n,l),Ct(e,t)||(lt=!0),e):(Ln&42)===0?(lt=!0,e.memoizedState=n):(e=od(),xe.lanes|=e,Gn|=e,t)}function rf(e,t,n,l,i){var u=B.p;B.p=u!==0&&8>u?u:8;var c=M.T,g={};M.T=g,lo(e,!1,t,n);try{var b=i(),C=M.S;if(C!==null&&C(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var H=Kh(b,l);Yl(e,t,H,zt(e))}else Yl(e,t,l,zt(e))}catch(j){Yl(e,t,{then:function(){},status:"rejected",reason:j},zt())}finally{B.p=u,M.T=c}}function Wh(){}function no(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=of(e).queue;rf(e,i,t,ae,n===null?Wh:function(){return sf(e),n(l)})}function of(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sf(e){var t=of(e).next.queue;Yl(e,t,{},zt())}function ao(){return ht(ni)}function cf(){return et().memoizedState}function ff(){return et().memoizedState}function Ih(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=zn(n);var l=Hn(t,e,n);l!==null&&(Ht(l,t,n),Rl(l,t,n)),t={cache:zr()},e.payload=t;return}t=t.return}}function Ph(e,t,n){var l=zt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},au(e)?gf(t,n):(n=Er(e,t,n,l),n!==null&&(Ht(n,e,l),hf(n,t,l)))}function df(e,t,n){var l=zt();Yl(e,t,n,l)}function Yl(e,t,n,l){var i={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(au(e))gf(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,g=u(c,n);if(i.hasEagerState=!0,i.eagerState=g,Ct(g,c))return qi(e,t,i,0),Ge===null&&Bi(),!1}catch{}finally{}if(n=Er(e,t,i,l),n!==null)return Ht(n,e,l),hf(n,t,l),!0}return!1}function lo(e,t,n,l){if(l={lane:2,revertLane:jo(),action:l,hasEagerState:!1,eagerState:null,next:null},au(e)){if(t)throw Error(o(479))}else t=Er(e,n,l,2),t!==null&&Ht(t,e,2)}function au(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function gf(e,t){Xa=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,p(e,n)}}var lu={readContext:ht,use:Pi,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},pf={readContext:ht,use:Pi,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Wc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nu(4194308,4,tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nu(4194308,4,e,t)},useInsertionEffect:function(e,t){nu(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var l=e();if(pa){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=St();if(n!==void 0){var i=n(t);if(pa){It(!0);try{n(t)}finally{It(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Ph.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Ir(e);var t=e.queue,n=df.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:eo,useDeferredValue:function(e,t){var n=St();return to(n,e,t)},useTransition:function(){var e=Ir(!1);return e=rf.bind(null,xe,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=xe,i=St();if(Re){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ge===null)throw Error(o(349));(Ce&124)!==0||Lc(l,t,n)}i.memoizedState=n;var u={value:n,getSnapshot:t};return i.queue=u,Wc(jc.bind(null,l,u,e),[e]),l.flags|=2048,Ka(9,tu(),Uc.bind(null,l,u,n,t),null),n},useId:function(){var e=St(),t=Ge.identifierPrefix;if(Re){var n=hn,l=gn;n=(l&~(1<<32-dt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Zh++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:Kc,useActionState:Kc,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lo.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fr,useCacheRefresh:function(){return St().memoizedState=Ih.bind(null,xe)}},mf={readContext:ht,use:Pi,useCallback:af,useContext:ht,useEffect:Ic,useImperativeHandle:nf,useInsertionEffect:Pc,useLayoutEffect:ef,useMemo:lf,useReducer:eu,useRef:$c,useState:function(){return eu(yn)},useDebugValue:eo,useDeferredValue:function(e,t){var n=et();return uf(n,je.memoizedState,e,t)},useTransition:function(){var e=eu(yn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:Hc,useId:cf,useHostTransitionStatus:ao,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var n=et();return qc(n,je,e,t)},useMemoCache:Fr,useCacheRefresh:ff},ep={readContext:ht,use:Pi,useCallback:af,useContext:ht,useEffect:Ic,useImperativeHandle:nf,useInsertionEffect:Pc,useLayoutEffect:ef,useMemo:lf,useReducer:Wr,useRef:$c,useState:function(){return Wr(yn)},useDebugValue:eo,useDeferredValue:function(e,t){var n=et();return je===null?to(n,e,t):uf(n,je.memoizedState,e,t)},useTransition:function(){var e=Wr(yn)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:Hc,useId:cf,useHostTransitionStatus:ao,useFormState:Fc,useActionState:Fc,useOptimistic:function(e,t){var n=et();return je!==null?qc(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Fr,useCacheRefresh:ff},Za=null,Bl=0;function iu(e){var t=Bl;return Bl+=1,Za===null&&(Za=[]),Mc(Za,e,t)}function ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function uu(e,t){throw t.$$typeof===z?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function yf(e){var t=e._init;return t(e._payload)}function vf(e){function t(w,S){if(e){var O=w.deletions;O===null?(w.deletions=[S],w.flags|=16):O.push(S)}}function n(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=dn(w,S),w.index=0,w.sibling=null,w}function u(w,S,O){return w.index=O,e?(O=w.alternate,O!==null?(O=O.index,O<S?(w.flags|=67108866,S):O):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function c(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function g(w,S,O,L){return S===null||S.tag!==6?(S=wr(O,w.mode,L),S.return=w,S):(S=i(S,O),S.return=w,S)}function b(w,S,O,L){var P=O.type;return P===k?H(w,S,O.props.children,L,O.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===W&&yf(P)===S.type)?(S=i(S,O.props),ql(S,O),S.return=w,S):(S=Gi(O.type,O.key,O.props,null,w.mode,L),ql(S,O),S.return=w,S)}function C(w,S,O,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==O.containerInfo||S.stateNode.implementation!==O.implementation?(S=Mr(O,w.mode,L),S.return=w,S):(S=i(S,O.children||[]),S.return=w,S)}function H(w,S,O,L,P){return S===null||S.tag!==7?(S=ra(O,w.mode,L,P),S.return=w,S):(S=i(S,O),S.return=w,S)}function j(w,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=wr(""+S,w.mode,O),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case N:return O=Gi(S.type,S.key,S.props,null,w.mode,O),ql(O,S),O.return=w,O;case G:return S=Mr(S,w.mode,O),S.return=w,S;case W:var L=S._init;return S=L(S._payload),j(w,S,O)}if(V(S)||ve(S))return S=ra(S,w.mode,O,null),S.return=w,S;if(typeof S.then=="function")return j(w,iu(S),O);if(S.$$typeof===I)return j(w,Ki(w,S),O);uu(w,S)}return null}function A(w,S,O,L){var P=S!==null?S.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return P!==null?null:g(w,S,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return O.key===P?b(w,S,O,L):null;case G:return O.key===P?C(w,S,O,L):null;case W:return P=O._init,O=P(O._payload),A(w,S,O,L)}if(V(O)||ve(O))return P!==null?null:H(w,S,O,L,null);if(typeof O.then=="function")return A(w,S,iu(O),L);if(O.$$typeof===I)return A(w,S,Ki(w,O),L);uu(w,O)}return null}function _(w,S,O,L,P){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return w=w.get(O)||null,g(S,w,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case N:return w=w.get(L.key===null?O:L.key)||null,b(S,w,L,P);case G:return w=w.get(L.key===null?O:L.key)||null,C(S,w,L,P);case W:var De=L._init;return L=De(L._payload),_(w,S,O,L,P)}if(V(L)||ve(L))return w=w.get(O)||null,H(S,w,L,P,null);if(typeof L.then=="function")return _(w,S,O,iu(L),P);if(L.$$typeof===I)return _(w,S,O,Ki(S,L),P);uu(S,L)}return null}function de(w,S,O,L){for(var P=null,De=null,te=S,se=S=0,ut=null;te!==null&&se<O.length;se++){te.index>se?(ut=te,te=null):ut=te.sibling;var Ne=A(w,te,O[se],L);if(Ne===null){te===null&&(te=ut);break}e&&te&&Ne.alternate===null&&t(w,te),S=u(Ne,S,se),De===null?P=Ne:De.sibling=Ne,De=Ne,te=ut}if(se===O.length)return n(w,te),Re&&sa(w,se),P;if(te===null){for(;se<O.length;se++)te=j(w,O[se],L),te!==null&&(S=u(te,S,se),De===null?P=te:De.sibling=te,De=te);return Re&&sa(w,se),P}for(te=l(te);se<O.length;se++)ut=_(te,w,se,O[se],L),ut!==null&&(e&&ut.alternate!==null&&te.delete(ut.key===null?se:ut.key),S=u(ut,S,se),De===null?P=ut:De.sibling=ut,De=ut);return e&&te.forEach(function(Wn){return t(w,Wn)}),Re&&sa(w,se),P}function re(w,S,O,L){if(O==null)throw Error(o(151));for(var P=null,De=null,te=S,se=S=0,ut=null,Ne=O.next();te!==null&&!Ne.done;se++,Ne=O.next()){te.index>se?(ut=te,te=null):ut=te.sibling;var Wn=A(w,te,Ne.value,L);if(Wn===null){te===null&&(te=ut);break}e&&te&&Wn.alternate===null&&t(w,te),S=u(Wn,S,se),De===null?P=Wn:De.sibling=Wn,De=Wn,te=ut}if(Ne.done)return n(w,te),Re&&sa(w,se),P;if(te===null){for(;!Ne.done;se++,Ne=O.next())Ne=j(w,Ne.value,L),Ne!==null&&(S=u(Ne,S,se),De===null?P=Ne:De.sibling=Ne,De=Ne);return Re&&sa(w,se),P}for(te=l(te);!Ne.done;se++,Ne=O.next())Ne=_(te,w,se,Ne.value,L),Ne!==null&&(e&&Ne.alternate!==null&&te.delete(Ne.key===null?se:Ne.key),S=u(Ne,S,se),De===null?P=Ne:De.sibling=Ne,De=Ne);return e&&te.forEach(function(tm){return t(w,tm)}),Re&&sa(w,se),P}function Be(w,S,O,L){if(typeof O=="object"&&O!==null&&O.type===k&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case N:e:{for(var P=O.key;S!==null;){if(S.key===P){if(P=O.type,P===k){if(S.tag===7){n(w,S.sibling),L=i(S,O.props.children),L.return=w,w=L;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===W&&yf(P)===S.type){n(w,S.sibling),L=i(S,O.props),ql(L,O),L.return=w,w=L;break e}n(w,S);break}else t(w,S);S=S.sibling}O.type===k?(L=ra(O.props.children,w.mode,L,O.key),L.return=w,w=L):(L=Gi(O.type,O.key,O.props,null,w.mode,L),ql(L,O),L.return=w,w=L)}return c(w);case G:e:{for(P=O.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===O.containerInfo&&S.stateNode.implementation===O.implementation){n(w,S.sibling),L=i(S,O.children||[]),L.return=w,w=L;break e}else{n(w,S);break}else t(w,S);S=S.sibling}L=Mr(O,w.mode,L),L.return=w,w=L}return c(w);case W:return P=O._init,O=P(O._payload),Be(w,S,O,L)}if(V(O))return de(w,S,O,L);if(ve(O)){if(P=ve(O),typeof P!="function")throw Error(o(150));return O=P.call(O),re(w,S,O,L)}if(typeof O.then=="function")return Be(w,S,iu(O),L);if(O.$$typeof===I)return Be(w,S,Ki(w,O),L);uu(w,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,S!==null&&S.tag===6?(n(w,S.sibling),L=i(S,O),L.return=w,w=L):(n(w,S),L=wr(O,w.mode,L),L.return=w,w=L),c(w)):n(w,S)}return function(w,S,O,L){try{Bl=0;var P=Be(w,S,O,L);return Za=null,P}catch(te){if(te===Nl||te===Ji)throw te;var De=At(29,te,null,w.mode);return De.lanes=L,De.return=w,De}finally{}}}var Ja=vf(!0),bf=vf(!1),Xt=U(null),nn=null;function Un(e){var t=e.alternate;X(nt,nt.current&1),X(Xt,e),nn===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(nn=e)}function xf(e){if(e.tag===22){if(X(nt,nt.current),X(Xt,e),nn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(nn=e)}}else jn()}function jn(){X(nt,nt.current),X(Xt,Xt.current)}function vn(e){K(Xt),nn===e&&(nn=null),K(nt)}var nt=U(0);function ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Fo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function io(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=zt(),i=zn(l);i.payload=t,n!=null&&(i.callback=n),t=Hn(e,i,l),t!==null&&(Ht(t,e,l),Rl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=zt(),i=zn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Hn(e,i,l),t!==null&&(Ht(t,e,l),Rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),l=zn(n);l.tag=2,t!=null&&(l.callback=t),t=Hn(e,l,n),t!==null&&(Ht(t,e,n),Rl(t,e,n))}};function Sf(e,t,n,l,i,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,c):t.prototype&&t.prototype.isPureReactComponent?!Dl(n,l)||!Dl(i,u):!0}function Df(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function ma(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ou=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ef(e){ou(e)}function Tf(e){console.error(e)}function wf(e){ou(e)}function su(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Mf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ro(e,t,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){su(e,t)},n}function Of(e){return e=zn(e),e.tag=3,e}function Cf(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var u=l.value;e.payload=function(){return i(u)},e.callback=function(){Mf(t,n,l)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Mf(t,n,l),typeof i!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function tp(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,i,!0),n=Xt.current,n!==null){switch(n.tag){case 13:return nn===null?Ro():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===Ur?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Ho(e,l,i)),!1;case 22:return n.flags|=65536,l===Ur?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Ho(e,l,i)),!1}throw Error(o(435,n.tag))}return Ho(e,l,i),Ro(),!1}if(Re)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Ar&&(e=Error(o(422),{cause:l}),Ml(qt(e,n)))):(l!==Ar&&(t=Error(o(423),{cause:l}),Ml(qt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=qt(l,n),i=ro(e.stateNode,l,i),Br(e,i),Ke!==4&&(Ke=2)),!1;var u=Error(o(520),{cause:l});if(u=qt(u,n),Zl===null?Zl=[u]:Zl.push(u),Ke!==4&&(Ke=2),t===null)return!0;l=qt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ro(n.stateNode,l,e),Br(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vn===null||!Vn.has(u))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Of(i),Cf(i,e,n,l),Br(n,i),!1}n=n.return}while(n!==null);return!1}var Af=Error(o(461)),lt=!1;function rt(e,t,n,l){t.child=e===null?bf(t,null,n,l):Ja(t,e.child,n,l)}function Nf(e,t,n,l,i){n=n.render;var u=t.ref;if("ref"in l){var c={};for(var g in l)g!=="ref"&&(c[g]=l[g])}else c=l;return ga(t),l=Xr(e,t,n,c,u,i),g=Qr(),e!==null&&!lt?(Kr(e,t,i),bn(e,t,i)):(Re&&g&&Or(t),t.flags|=1,rt(e,t,l,i),t.child)}function _f(e,t,n,l,i){if(e===null){var u=n.type;return typeof u=="function"&&!Tr(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Rf(e,t,u,l,i)):(e=Gi(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!mo(e,i)){var c=u.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(c,l)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=dn(u,l),e.ref=t.ref,e.return=t,t.child=e}function Rf(e,t,n,l,i){if(e!==null){var u=e.memoizedProps;if(Dl(u,l)&&e.ref===t.ref)if(lt=!1,t.pendingProps=l=u,mo(e,i))(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,bn(e,t,i)}return oo(e,t,n,l,i)}function zf(e,t,n){var l=t.pendingProps,i=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;t.childLanes=u&~l}else t.childLanes=0,t.child=null;return Hf(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,u!==null?u.cachePool:null),u!==null?_c(t,u):kr(),xf(t);else return t.lanes=t.childLanes=536870912,Hf(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Zi(t,u.cachePool),_c(t,u),jn(),t.memoizedState=null):(e!==null&&Zi(t,null),kr(),jn());return rt(e,t,i,n),t.child}function Hf(e,t,n,l){var i=Lr();return i=i===null?null:{parent:tt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Zi(t,null),kr(),xf(t),e!==null&&Ol(e,t,l,!0),null}function cu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function oo(e,t,n,l,i){return ga(t),n=Xr(e,t,n,l,void 0,i),l=Qr(),e!==null&&!lt?(Kr(e,t,i),bn(e,t,i)):(Re&&l&&Or(t),t.flags|=1,rt(e,t,n,i),t.child)}function Lf(e,t,n,l,i,u){return ga(t),t.updateQueue=null,n=zc(t,l,n,i),Rc(e),l=Qr(),e!==null&&!lt?(Kr(e,t,u),bn(e,t,u)):(Re&&l&&Or(t),t.flags|=1,rt(e,t,n,u),t.child)}function Uf(e,t,n,l,i){if(ga(t),t.stateNode===null){var u=Ya,c=n.contextType;typeof c=="object"&&c!==null&&(u=ht(c)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=uo,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},jr(t),c=n.contextType,u.context=typeof c=="object"&&c!==null?ht(c):Ya,u.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(io(t,n,c,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&uo.enqueueReplaceState(u,u.state,null),Hl(t,l,u,i),zl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,b=ma(n,g);u.props=b;var C=u.context,H=n.contextType;c=Ya,typeof H=="object"&&H!==null&&(c=ht(H));var j=n.getDerivedStateFromProps;H=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||C!==c)&&Df(t,u,l,c),Rn=!1;var A=t.memoizedState;u.state=A,Hl(t,l,u,i),zl(),C=t.memoizedState,g||A!==C||Rn?(typeof j=="function"&&(io(t,n,j,l),C=t.memoizedState),(b=Rn||Sf(t,n,b,l,A,C,c))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),u.props=l,u.state=C,u.context=c,l=b):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Yr(e,t),c=t.memoizedProps,H=ma(n,c),u.props=H,j=t.pendingProps,A=u.context,C=n.contextType,b=Ya,typeof C=="object"&&C!==null&&(b=ht(C)),g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==j||A!==b)&&Df(t,u,l,b),Rn=!1,A=t.memoizedState,u.state=A,Hl(t,l,u,i),zl();var _=t.memoizedState;c!==j||A!==_||Rn||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof g=="function"&&(io(t,n,g,l),_=t.memoizedState),(H=Rn||Sf(t,n,H,l,A,_,b)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,_,b),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,_,b)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_),u.props=l,u.state=_,u.context=b,l=H):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,cu(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,i),t.child=Ja(t,null,n,i)):rt(e,t,n,i),t.memoizedState=u.state,e=t.child):e=bn(e,t,i),e}function jf(e,t,n,l){return wl(),t.flags|=256,rt(e,t,n,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:Ec()}}function fo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function Yf(e,t,n){var l=t.pendingProps,i=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(i?Un(t):jn(),Re){var g=Qe,b;if(b=g){e:{for(b=g,g=tn;b.nodeType!==8;){if(!g){g=null;break e}if(b=Wt(b.nextSibling),b===null){g=null;break e}}g=b}g!==null?(t.memoizedState={dehydrated:g,treeContext:oa!==null?{id:gn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},b=At(18,null,null,0),b.stateNode=g,b.return=t,t.child=b,vt=t,Qe=null,b=!0):b=!1}b||fa(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Fo(g)?t.lanes=32:t.lanes=536870912,null;vn(t)}return g=l.children,l=l.fallback,i?(jn(),i=t.mode,g=fu({mode:"hidden",children:g},i),l=ra(l,i,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,i=t.child,i.memoizedState=co(n),i.childLanes=fo(e,c,n),t.memoizedState=so,l):(Un(t),go(t,g))}if(b=e.memoizedState,b!==null&&(g=b.dehydrated,g!==null)){if(u)t.flags&256?(Un(t),t.flags&=-257,t=ho(e,t,n)):t.memoizedState!==null?(jn(),t.child=e.child,t.flags|=128,t=null):(jn(),i=l.fallback,g=t.mode,l=fu({mode:"visible",children:l.children},g),i=ra(i,g,n,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Ja(t,e.child,null,n),l=t.child,l.memoizedState=co(n),l.childLanes=fo(e,c,n),t.memoizedState=so,t=i);else if(Un(t),Fo(g)){if(c=g.nextSibling&&g.nextSibling.dataset,c)var C=c.dgst;c=C,l=Error(o(419)),l.stack="",l.digest=c,Ml({value:l,source:null,stack:null}),t=ho(e,t,n)}else if(lt||Ol(e,t,n,!1),c=(n&e.childLanes)!==0,lt||c){if(c=Ge,c!==null&&(l=n&-n,l=(l&42)!==0?1:T(l),l=(l&(c.suspendedLanes|n))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,ja(e,l),Ht(c,e,l),Af;g.data==="$?"||Ro(),t=ho(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Qe=Wt(g.nextSibling),vt=t,Re=!0,ca=null,tn=!1,e!==null&&(Gt[Vt++]=gn,Gt[Vt++]=hn,Gt[Vt++]=oa,gn=e.id,hn=e.overflow,oa=t),t=go(t,l.children),t.flags|=4096);return t}return i?(jn(),i=l.fallback,g=t.mode,b=e.child,C=b.sibling,l=dn(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,C!==null?i=dn(C,i):(i=ra(i,g,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,g=e.child.memoizedState,g===null?g=co(n):(b=g.cachePool,b!==null?(C=tt._currentValue,b=b.parent!==C?{parent:C,pool:C}:b):b=Ec(),g={baseLanes:g.baseLanes|n,cachePool:b}),i.memoizedState=g,i.childLanes=fo(e,c,n),t.memoizedState=so,l):(Un(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function go(e,t){return t=fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fu(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ho(e,t,n){return Ja(t,e.child,null,n),e=go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),_r(e.return,t,n)}function po(e,t,n,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=i)}function qf(e,t,n){var l=t.pendingProps,i=l.revealOrder,u=l.tail;if(rt(e,t,l.children,n),l=nt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(X(nt,l),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ru(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),po(t,!1,i,n,u);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ru(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}po(t,!0,n,null,u);break;case"together":po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function np(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),_n(t,tt,e.memoizedState.cache),wl();break;case 27:case 5:dl(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:_n(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Un(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Yf(e,t,n):(Un(t),e=bn(e,t,n),e!==null?e.sibling:null);Un(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ol(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return qf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(nt,nt.current),l)break;return null;case 22:case 23:return t.lanes=0,zf(e,t,n);case 24:_n(t,tt,e.memoizedState.cache)}return bn(e,t,n)}function kf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)lt=!0;else{if(!mo(e,n)&&(t.flags&128)===0)return lt=!1,np(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Re&&(t.flags&1048576)!==0&&mc(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")Tr(l)?(e=ma(l,e),t.tag=1,t=Uf(null,t,l,e,n)):(t.tag=0,t=oo(null,t,l,e,n));else{if(l!=null){if(i=l.$$typeof,i===Ee){t.tag=11,t=Nf(null,t,l,e,n);break e}else if(i===ee){t.tag=14,t=_f(null,t,l,e,n);break e}}throw t=Ze(l)||l,Error(o(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=ma(l,t.pendingProps),Uf(e,t,l,i,n);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;i=u.element,Yr(e,t),Hl(t,l,null,n);var c=t.memoizedState;if(l=c.cache,_n(t,tt,l),l!==u.cache&&Rr(t,[tt],n,!0),zl(),l=c.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=jf(e,t,l,n);break e}else if(l!==i){i=qt(Error(o(424)),t),Ml(i),t=jf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=Wt(e.firstChild),vt=t,Re=!0,ca=null,tn=!0,n=bf(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wl(),l===i){t=bn(e,t,n);break e}rt(e,t,l,n)}t=t.child}return t;case 26:return cu(e,t),e===null?(n=Qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Re||(n=t.type,e=t.pendingProps,l=wu(fe.current).createElement(n),l[Q]=t,l[ie]=e,st(l,n,e),Ie(l),t.stateNode=l):t.memoizedState=Qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return dl(t),e===null&&Re&&(l=t.stateNode=Gd(t.type,t.pendingProps,fe.current),vt=t,tn=!0,i=Qe,Kn(t.type)?($o=i,Qe=Wt(l.firstChild)):Qe=i),rt(e,t,t.pendingProps.children,n),cu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((i=l=Qe)&&(l=Np(l,t.type,t.pendingProps,tn),l!==null?(t.stateNode=l,vt=t,Qe=Wt(l.firstChild),tn=!1,i=!0):i=!1),i||fa(t)),dl(t),i=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,l=u.children,Ko(i,u)?l=null:c!==null&&Ko(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=Xr(e,t,Jh,null,null,n),ni._currentValue=i),cu(e,t),rt(e,t,l,n),t.child;case 6:return e===null&&Re&&((e=n=Qe)&&(n=_p(n,t.pendingProps,tn),n!==null?(t.stateNode=n,vt=t,Qe=null,e=!0):e=!1),e||fa(t)),null;case 13:return Yf(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,n):rt(e,t,l,n),t.child;case 11:return Nf(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,_n(t,t.type,l.value),rt(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,ga(t),i=ht(i),l=l(i),t.flags|=1,rt(e,t,l,n),t.child;case 14:return _f(e,t,t.type,t.pendingProps,n);case 15:return Rf(e,t,t.type,t.pendingProps,n);case 19:return qf(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=fu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=dn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return zf(e,t,n);case 24:return ga(t),l=ht(tt),e===null?(i=Lr(),i===null&&(i=Ge,u=zr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=n),i=u),t.memoizedState={parent:l,cache:i},jr(t),_n(t,tt,i)):((e.lanes&n)!==0&&(Yr(e,t),Hl(t,null,null,n),zl()),i=e.memoizedState,u=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),_n(t,tt,l)):(l=u.cache,_n(t,tt,l),l!==i.cache&&Rr(t,[tt],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function xn(e){e.flags|=4}function Gf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(t=Xt.current,t!==null&&((Ce&4194048)===Ce?nn!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||t!==nn))throw _l=Ur,Tc;e.flags|=8192}}function du(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Oa():536870912,e.lanes|=t,Ia|=t)}function kl(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function ap(e,t,n){var l=t.pendingProps;switch(Cr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(tt),wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Tl(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bc())),Xe(t),null;case 26:return n=t.memoizedState,e===null?(xn(t),n!==null?(Xe(t),Gf(t,n)):(Xe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(xn(t),Xe(t),Gf(t,n)):(Xe(t),t.flags&=-16777217):(e.memoizedProps!==l&&xn(t),Xe(t),t.flags&=-16777217),null;case 27:In(t),n=fe.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Xe(t),null}e=le.current,Tl(t)?yc(t):(e=Gd(i,l,n),t.stateNode=e,xn(t))}return Xe(t),null;case 5:if(In(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Xe(t),null}if(e=le.current,Tl(t))yc(t);else{switch(i=wu(fe.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}e[Q]=t,e[ie]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(st(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xn(t)}}return Xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=fe.current,Tl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=vt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Q]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Ld(e.nodeValue,n)),e||fa(t)}else e=wu(e).createTextNode(l),e[Q]=t,t.stateNode=e}return Xe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Q]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else i=bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(vn(t),t):(vn(t),null)}if(vn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==i&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),du(t,t.updateQueue),Xe(t),null;case 4:return wt(),e===null&&ko(t.stateNode.containerInfo),Xe(t),null;case 10:return mn(t.type),Xe(t),null;case 19:if(K(nt),i=t.memoizedState,i===null)return Xe(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)kl(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ru(e),u!==null){for(t.flags|=128,kl(i,!1),e=u.updateQueue,t.updateQueue=e,du(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pc(n,e),n=n.sibling;return X(nt,nt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Mt()>pu&&(t.flags|=128,l=!0,kl(i,!1),t.lanes=4194304)}else{if(!l)if(e=ru(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,du(t,e),kl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Re)return Xe(t),null}else 2*Mt()-i.renderingStartTime>pu&&n!==536870912&&(t.flags|=128,l=!0,kl(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Mt(),t.sibling=null,e=nt.current,X(nt,l?e&1|2:e&1),t):(Xe(t),null);case 22:case 23:return vn(t),Gr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),n=t.updateQueue,n!==null&&du(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&K(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(tt),Xe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function lp(e,t){switch(Cr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(tt),wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 13:if(vn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(nt),null;case 4:return wt(),null;case 10:return mn(t.type),null;case 22:case 23:return vn(t),Gr(),e!==null&&K(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(tt),null;case 25:return null;default:return null}}function Vf(e,t){switch(Cr(t),t.tag){case 3:mn(tt),wt();break;case 26:case 27:case 5:In(t);break;case 4:wt();break;case 13:vn(t);break;case 19:K(nt);break;case 10:mn(t.type);break;case 22:case 23:vn(t),Gr(),e!==null&&K(ha);break;case 24:mn(tt)}}function Gl(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var u=n.create,c=n.inst;l=u(),c.destroy=l}n=n.next}while(n!==i)}}catch(g){ke(t,t.return,g)}}function Yn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var u=i.next;l=u;do{if((l.tag&e)===e){var c=l.inst,g=c.destroy;if(g!==void 0){c.destroy=void 0,i=t;var b=n,C=g;try{C()}catch(H){ke(i,b,H)}}}l=l.next}while(l!==u)}}catch(H){ke(t,t.return,H)}}function Xf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nc(t,n)}catch(l){ke(e,e.return,l)}}}function Qf(e,t,n){n.props=ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ke(e,t,l)}}function Vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){ke(e,t,i)}}function an(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){ke(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ke(e,t,i)}else n.current=null}function Kf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){ke(e,e.return,i)}}function yo(e,t,n){try{var l=e.stateNode;wp(l,e.type,n,t),l[ie]=t}catch(i){ke(e,e.return,i)}}function Zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tu));else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}function gu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function Jf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);st(t,l,n),t[Q]=e,t[ie]=n}catch(u){ke(e,e.return,u)}}var Sn=!1,Fe=!1,xo=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,it=null;function ip(e,t){if(e=e.containerInfo,Xo=_u,e=ic(e),yr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var c=0,g=-1,b=-1,C=0,H=0,j=e,A=null;t:for(;;){for(var _;j!==n||i!==0&&j.nodeType!==3||(g=c+i),j!==u||l!==0&&j.nodeType!==3||(b=c+l),j.nodeType===3&&(c+=j.nodeValue.length),(_=j.firstChild)!==null;)A=j,j=_;for(;;){if(j===e)break t;if(A===n&&++C===i&&(g=c),A===u&&++H===l&&(b=c),(_=j.nextSibling)!==null)break;j=A,A=j.parentNode}j=_}n=g===-1||b===-1?null:{start:g,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},_u=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,i=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var de=ma(n.type,i,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(de,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){ke(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Jo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function $f(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n),l&4&&Gl(5,n);break;case 1:if(Bn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){ke(n,n.return,c)}else{var i=ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ke(n,n.return,c)}}l&64&&Xf(n),l&512&&Vl(n,n.return);break;case 3:if(Bn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nc(e,t)}catch(c){ke(n,n.return,c)}}break;case 27:t===null&&l&4&&Jf(n);case 26:case 5:Bn(e,n),t===null&&l&4&&Kf(n),l&512&&Vl(n,n.return);break;case 12:Bn(e,n);break;case 13:Bn(e,n),l&4&&Pf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hp.bind(null,n),Rp(e,n))));break;case 22:if(l=n.memoizedState!==null||Sn,!l){t=t!==null&&t.memoizedState!==null||Fe,i=Sn;var u=Fe;Sn=l,(Fe=t)&&!u?qn(e,n,(n.subtreeFlags&8772)!==0):Bn(e,n),Sn=i,Fe=u}break;case 30:break;default:Bn(e,n)}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Dt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)If(e,t,n),n=n.sibling}function If(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 26:Fe||an(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||an(n,t);var l=Ve,i=Dt;Kn(n.type)&&(Ve=n.stateNode,Dt=!1),Dn(e,t,n),Il(n.stateNode),Ve=l,Dt=i;break;case 5:Fe||an(n,t);case 6:if(l=Ve,i=Dt,Ve=null,Dn(e,t,n),Ve=l,Dt=i,Ve!==null)if(Dt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(u){ke(n,t,u)}else try{Ve.removeChild(n.stateNode)}catch(u){ke(n,t,u)}break;case 18:Ve!==null&&(Dt?(e=Ve,qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ui(e)):qd(Ve,n.stateNode));break;case 4:l=Ve,i=Dt,Ve=n.stateNode.containerInfo,Dt=!0,Dn(e,t,n),Ve=l,Dt=i;break;case 0:case 11:case 14:case 15:Fe||Yn(2,n,t),Fe||Yn(4,n,t),Dn(e,t,n);break;case 1:Fe||(an(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Qf(n,t,l)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:Fe=(l=Fe)||n.memoizedState!==null,Dn(e,t,n),Fe=l;break;default:Dn(e,t,n)}}function Pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ui(e)}catch(n){ke(t,t.return,n)}}function up(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ff),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ff),t;default:throw Error(o(435,e.tag))}}function So(e,t){var n=up(e);t.forEach(function(l){var i=pp.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}function Nt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],u=e,c=t,g=c;e:for(;g!==null;){switch(g.tag){case 27:if(Kn(g.type)){Ve=g.stateNode,Dt=!1;break e}break;case 5:Ve=g.stateNode,Dt=!1;break e;case 3:case 4:Ve=g.stateNode.containerInfo,Dt=!0;break e}g=g.return}if(Ve===null)throw Error(o(160));If(u,c,i),Ve=null,Dt=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}var $t=null;function ed(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),_t(e),l&4&&(Yn(3,e,e.return),Gl(3,e),Yn(5,e,e.return));break;case 1:Nt(t,e),_t(e),l&512&&(Fe||n===null||an(n,n.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=$t;if(Nt(t,e),_t(e),l&512&&(Fe||n===null||an(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Jt]||u[Q]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(l),i.head.insertBefore(u,i.querySelector("head > title"))),st(u,l,n),u[Q]=e,Ie(u),l=u;break e;case"link":var c=Jd("link","href",i).get(l+(n.href||""));if(c){for(var g=0;g<c.length;g++)if(u=c[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(g,1);break t}}u=i.createElement(l),st(u,l,n),i.head.appendChild(u);break;case"meta":if(c=Jd("meta","content",i).get(l+(n.content||""))){for(g=0;g<c.length;g++)if(u=c[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(g,1);break t}}u=i.createElement(l),st(u,l,n),i.head.appendChild(u);break;default:throw Error(o(468,l))}u[Q]=e,Ie(u),l=u}e.stateNode=l}else Fd(i,e.type,e.stateNode);else e.stateNode=Zd(i,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Fd(i,e.type,e.stateNode):Zd(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nt(t,e),_t(e),l&512&&(Fe||n===null||an(n,n.return)),n!==null&&l&4&&yo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nt(t,e),_t(e),l&512&&(Fe||n===null||an(n,n.return)),e.flags&32){i=e.stateNode;try{Na(i,"")}catch(_){ke(e,e.return,_)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,yo(e,i,n!==null?n.memoizedProps:i)),l&1024&&(xo=!0);break;case 6:if(Nt(t,e),_t(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(_){ke(e,e.return,_)}}break;case 3:if(Cu=null,i=$t,$t=Mu(t.containerInfo),Nt(t,e),$t=i,_t(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(_){ke(e,e.return,_)}xo&&(xo=!1,td(e));break;case 4:l=$t,$t=Mu(e.stateNode.containerInfo),Nt(t,e),_t(e),$t=l;break;case 12:Nt(t,e),_t(e);break;case 13:Nt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Oo=Mt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,C=Sn,H=Fe;if(Sn=C||i,Fe=H||b,Nt(t,e),Fe=H,Sn=C,_t(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||b||Sn||Fe||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(u=b.stateNode,i)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=b.stateNode;var j=b.memoizedProps.style,A=j!=null&&j.hasOwnProperty("display")?j.display:null;g.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(_){ke(b,b.return,_)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(_){ke(b,b.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,So(e,n))));break;case 19:Nt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 30:break;case 21:break;default:Nt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Zf(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,u=vo(e);gu(e,u,i);break;case 5:var c=n.stateNode;n.flags&32&&(Na(c,""),n.flags&=-33);var g=vo(e);gu(e,g,c);break;case 3:case 4:var b=n.stateNode.containerInfo,C=vo(e);bo(e,C,b);break;default:throw Error(o(161))}}catch(H){ke(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function td(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;td(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$f(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yn(4,t,t.return),ya(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qf(t,t.return,n),ya(t);break;case 27:Il(t.stateNode);case 26:case 5:an(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function qn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,u=t,c=u.flags;switch(u.tag){case 0:case 11:case 15:qn(i,u,n),Gl(4,u);break;case 1:if(qn(i,u,n),l=u,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){ke(l,l.return,C)}if(l=u,i=l.updateQueue,i!==null){var g=l.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Ac(b[i],g)}catch(C){ke(l,l.return,C)}}n&&c&64&&Xf(u),Vl(u,u.return);break;case 27:Jf(u);case 26:case 5:qn(i,u,n),n&&l===null&&c&4&&Kf(u),Vl(u,u.return);break;case 12:qn(i,u,n);break;case 13:qn(i,u,n),n&&c&4&&Pf(i,u);break;case 22:u.memoizedState===null&&qn(i,u,n),Vl(u,u.return);break;case 30:break;default:qn(i,u,n)}t=t.sibling}}function Do(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cl(n))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e))}function ln(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nd(e,t,n,l),t=t.sibling}function nd(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,l),i&2048&&Gl(9,t);break;case 1:ln(e,t,n,l);break;case 3:ln(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e)));break;case 12:if(i&2048){ln(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,c=u.id,g=u.onPostCommit;typeof g=="function"&&g(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ke(t,t.return,b)}}else ln(e,t,n,l);break;case 13:ln(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,c=t.alternate,t.memoizedState!==null?u._visibility&2?ln(e,t,n,l):Xl(e,t):u._visibility&2?ln(e,t,n,l):(u._visibility|=2,Fa(e,t,n,l,(t.subtreeFlags&10256)!==0)),i&2048&&Do(c,t);break;case 24:ln(e,t,n,l),i&2048&&Eo(t.alternate,t);break;default:ln(e,t,n,l)}}function Fa(e,t,n,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,c=t,g=n,b=l,C=c.flags;switch(c.tag){case 0:case 11:case 15:Fa(u,c,g,b,i),Gl(8,c);break;case 23:break;case 22:var H=c.stateNode;c.memoizedState!==null?H._visibility&2?Fa(u,c,g,b,i):Xl(u,c):(H._visibility|=2,Fa(u,c,g,b,i)),i&&C&2048&&Do(c.alternate,c);break;case 24:Fa(u,c,g,b,i),i&&C&2048&&Eo(c.alternate,c);break;default:Fa(u,c,g,b,i)}t=t.sibling}}function Xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:Xl(n,l),i&2048&&Do(l.alternate,l);break;case 24:Xl(n,l),i&2048&&Eo(l.alternate,l);break;default:Xl(n,l)}t=t.sibling}}var Ql=8192;function $a(e){if(e.subtreeFlags&Ql)for(e=e.child;e!==null;)ad(e),e=e.sibling}function ad(e){switch(e.tag){case 26:$a(e),e.flags&Ql&&e.memoizedState!==null&&Qp($t,e.memoizedState,e.memoizedProps);break;case 5:$a(e);break;case 3:case 4:var t=$t;$t=Mu(e.stateNode.containerInfo),$a(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ql,Ql=16777216,$a(e),Ql=t):$a(e));break;default:$a(e)}}function ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];it=l,ud(l,e)}ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&Yn(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hu(e)):Kl(e);break;default:Kl(e)}}function hu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];it=l,ud(l,e)}ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yn(8,t,t.return),hu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hu(t));break;default:hu(t)}e=e.sibling}}function ud(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:Yn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Cl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,it=l;else e:for(n=e;it!==null;){l=it;var i=l.sibling,u=l.return;if(Wf(l),l===n){it=null;break e}if(i!==null){i.return=u,it=i;break e}it=u}}}var rp={getCacheForType:function(e){var t=ht(tt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},op=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ge=null,we=null,Ce=0,Ue=0,Rt=null,kn=!1,Wa=!1,To=!1,En=0,Ke=0,Gn=0,va=0,wo=0,Qt=0,Ia=0,Zl=null,Et=null,Mo=!1,Oo=0,pu=1/0,mu=null,Vn=null,ot=0,Xn=null,Pa=null,el=0,Co=0,Ao=null,rd=null,Jl=0,No=null;function zt(){if((Le&2)!==0&&Ce!==0)return Ce&-Ce;if(M.T!==null){var e=ka;return e!==0?e:jo()}return q()}function od(){Qt===0&&(Qt=(Ce&536870912)===0||Re?ta():536870912);var e=Xt.current;return e!==null&&(e.flags|=32),Qt}function Ht(e,t,n){(e===Ge&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(tl(e,0),Qn(e,Ce,Qt,!1)),na(e,n),((Le&2)===0||e!==Ge)&&(e===Ge&&((Le&2)===0&&(va|=n),Ke===4&&Qn(e,Ce,Qt,!1)),un(e))}function sd(e,t,n){if((Le&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||on(e,t),i=l?fp(e,t):zo(e,t,!0),u=l;do{if(i===0){Wa&&!l&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!sp(n)){i=zo(e,t,!1),u=!1;continue}if(i===2){if(u=t,e.errorRecoveryDisabledLanes&u)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var g=e;i=Zl;var b=g.current.memoizedState.isDehydrated;if(b&&(tl(g,c).flags|=256),c=zo(g,c,!1),c!==2){if(To&&!b){g.errorRecoveryDisabledLanes|=u,va|=u,i=4;break e}u=Et,Et=i,u!==null&&(Et===null?Et=u:Et.push.apply(Et,u))}i=c}if(u=!1,i!==2)continue}}if(i===1){tl(e,0),Qn(e,t,0,!0);break}e:{switch(l=e,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Qn(l,t,Qt,!kn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Oo+300-Mt(),10<i)){if(Qn(l,t,Qt,!kn),Mn(l,0,!0)!==0)break e;l.timeoutHandle=Yd(cd.bind(null,l,n,Et,mu,Mo,t,Qt,va,Ia,kn,u,2,-0,0),i);break e}cd(l,n,Et,mu,Mo,t,Qt,va,Ia,kn,u,0,-0,0)}}break}while(!0);un(e)}function cd(e,t,n,l,i,u,c,g,b,C,H,j,A,_){if(e.timeoutHandle=-1,j=t.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(ti={stylesheets:null,count:0,unsuspend:Xp},ad(t),j=Kp(),j!==null)){e.cancelPendingCommit=j(yd.bind(null,e,t,u,n,l,i,c,g,b,H,1,A,_)),Qn(e,u,c,!C);return}yd(e,t,u,n,l,i,c,g,b)}function sp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],u=i.getSnapshot;i=i.value;try{if(!Ct(u(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,l){t&=~wo,t&=~va,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var u=31-dt(i),c=1<<u;l[u]=-1,i&=~c}n!==0&&h(e,n,t)}function yu(){return(Le&6)===0?(Fl(0),!1):!0}function _o(){if(we!==null){if(Ue===0)var e=we.return;else e=we,pn=da=null,Zr(e),Za=null,Bl=0,e=we;for(;e!==null;)Vf(e.alternate,e),e=e.return;we=null}}function tl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Op(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_o(),Ge=e,we=n=dn(e.current,null),Ce=t,Ue=0,Rt=null,kn=!1,Wa=on(e,t),To=!1,Ia=Qt=wo=va=Gn=Ke=0,Et=Zl=null,Mo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-dt(l),u=1<<i;t|=e[i],l&=~u}return En=t,Bi(),n}function fd(e,t){xe=null,M.H=lu,t===Nl||t===Ji?(t=Oc(),Ue=3):t===Tc?(t=Oc(),Ue=4):Ue=t===Af?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,we===null&&(Ke=1,su(e,qt(t,e.current)))}function dd(){var e=M.H;return M.H=lu,e===null?lu:e}function gd(){var e=M.A;return M.A=rp,e}function Ro(){Ke=4,kn||(Ce&4194048)!==Ce&&Xt.current!==null||(Wa=!0),(Gn&134217727)===0&&(va&134217727)===0||Ge===null||Qn(Ge,Ce,Qt,!1)}function zo(e,t,n){var l=Le;Le|=2;var i=dd(),u=gd();(Ge!==e||Ce!==t)&&(mu=null,tl(e,t)),t=!1;var c=Ke;e:do try{if(Ue!==0&&we!==null){var g=we,b=Rt;switch(Ue){case 8:_o(),c=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var C=Ue;if(Ue=0,Rt=null,nl(e,g,b,C),n&&Wa){c=0;break e}break;default:C=Ue,Ue=0,Rt=null,nl(e,g,b,C)}}cp(),c=Ke;break}catch(H){fd(e,H)}while(!0);return t&&e.shellSuspendCounter++,pn=da=null,Le=l,M.H=i,M.A=u,we===null&&(Ge=null,Ce=0,Bi()),c}function cp(){for(;we!==null;)hd(we)}function fp(e,t){var n=Le;Le|=2;var l=dd(),i=gd();Ge!==e||Ce!==t?(mu=null,pu=Mt()+500,tl(e,t)):Wa=on(e,t);e:do try{if(Ue!==0&&we!==null){t=we;var u=Rt;t:switch(Ue){case 1:Ue=0,Rt=null,nl(e,t,u,1);break;case 2:case 9:if(wc(u)){Ue=0,Rt=null,pd(t);break}t=function(){Ue!==2&&Ue!==9||Ge!==e||(Ue=7),un(e)},u.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:wc(u)?(Ue=0,Rt=null,pd(t)):(Ue=0,Rt=null,nl(e,t,u,7));break;case 5:var c=null;switch(we.tag){case 26:c=we.memoizedState;case 5:case 27:var g=we;if(!c||$d(c)){Ue=0,Rt=null;var b=g.sibling;if(b!==null)we=b;else{var C=g.return;C!==null?(we=C,vu(C)):we=null}break t}}Ue=0,Rt=null,nl(e,t,u,5);break;case 6:Ue=0,Rt=null,nl(e,t,u,6);break;case 8:_o(),Ke=6;break e;default:throw Error(o(462))}}dp();break}catch(H){fd(e,H)}while(!0);return pn=da=null,M.H=l,M.A=i,Le=n,we!==null?0:(Ge=null,Ce=0,Bi(),Ke)}function dp(){for(;we!==null&&!xi();)hd(we)}function hd(e){var t=kf(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?vu(e):we=t}function pd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lf(n,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Lf(n,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:Zr(t);default:Vf(n,t),t=we=pc(t,En),t=kf(n,t,En)}e.memoizedProps=e.pendingProps,t===null?vu(e):we=t}function nl(e,t,n,l){pn=da=null,Zr(t),Za=null,Bl=0;var i=t.return;try{if(tp(e,i,t,n,Ce)){Ke=1,su(e,qt(n,e.current)),we=null;return}}catch(u){if(i!==null)throw we=i,u;Ke=1,su(e,qt(n,e.current)),we=null;return}t.flags&32768?(Re||l===1?e=!0:Wa||(Ce&536870912)!==0?e=!1:(kn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),md(t,e)):vu(t)}function vu(e){var t=e;do{if((t.flags&32768)!==0){md(t,kn);return}e=t.return;var n=ap(t.alternate,t,En);if(n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ke===0&&(Ke=5)}function md(e,t){do{var n=lp(e.alternate,e);if(n!==null){n.flags&=32767,we=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=n}while(e!==null);Ke=6,we=null}function yd(e,t,n,l,i,u,c,g,b){e.cancelPendingCommit=null;do bu();while(ot!==0);if((Le&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Dr,Wu(e,n,u,c,g,b),e===Ge&&(we=Ge=null,Ce=0),Pa=t,Xn=e,el=n,Co=u,Ao=i,rd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mp(Da,function(){return Dd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,i=B.p,B.p=2,c=Le,Le|=4;try{ip(e,t,n)}finally{Le=c,B.p=i,M.T=l}}ot=1,vd(),bd(),xd()}}function vd(){if(ot===1){ot=0;var e=Xn,t=Pa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var l=B.p;B.p=2;var i=Le;Le|=4;try{ed(t,e);var u=Qo,c=ic(e.containerInfo),g=u.focusedElem,b=u.selectionRange;if(c!==g&&g&&g.ownerDocument&&lc(g.ownerDocument.documentElement,g)){if(b!==null&&yr(g)){var C=b.start,H=b.end;if(H===void 0&&(H=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(H,g.value.length);else{var j=g.ownerDocument||document,A=j&&j.defaultView||window;if(A.getSelection){var _=A.getSelection(),de=g.textContent.length,re=Math.min(b.start,de),Be=b.end===void 0?re:Math.min(b.end,de);!_.extend&&re>Be&&(c=Be,Be=re,re=c);var w=ac(g,re),S=ac(g,Be);if(w&&S&&(_.rangeCount!==1||_.anchorNode!==w.node||_.anchorOffset!==w.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var O=j.createRange();O.setStart(w.node,w.offset),_.removeAllRanges(),re>Be?(_.addRange(O),_.extend(S.node,S.offset)):(O.setEnd(S.node,S.offset),_.addRange(O))}}}}for(j=[],_=g;_=_.parentNode;)_.nodeType===1&&j.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<j.length;g++){var L=j[g];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}_u=!!Xo,Qo=Xo=null}finally{Le=i,B.p=l,M.T=n}}e.current=t,ot=2}}function bd(){if(ot===2){ot=0;var e=Xn,t=Pa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var l=B.p;B.p=2;var i=Le;Le|=4;try{$f(e,t.alternate,t)}finally{Le=i,B.p=l,M.T=n}}ot=3}}function xd(){if(ot===4||ot===3){ot=0,Zu();var e=Xn,t=Pa,n=el,l=rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,Pa=Xn=null,Sd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Vn=null),R(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,i=B.p,B.p=2,M.T=null;try{for(var u=e.onRecoverableError,c=0;c<l.length;c++){var g=l[c];u(g.value,{componentStack:g.stack})}}finally{M.T=t,B.p=i}}(el&3)!==0&&bu(),un(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===No?Jl++:(Jl=0,No=e):Jl=0,Fl(0)}}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cl(t)))}function bu(e){return vd(),bd(),xd(),Dd()}function Dd(){if(ot!==5)return!1;var e=Xn,t=Co;Co=0;var n=R(el),l=M.T,i=B.p;try{B.p=32>n?32:n,M.T=null,n=Ao,Ao=null;var u=Xn,c=el;if(ot=0,Pa=Xn=null,el=0,(Le&6)!==0)throw Error(o(331));var g=Le;if(Le|=4,id(u.current),nd(u,u.current,c,n),Le=g,Fl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ea,u)}catch{}return!0}finally{B.p=i,M.T=l,Sd(e,t)}}function Ed(e,t,n){t=qt(n,t),t=ro(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(na(e,2),un(e))}function ke(e,t,n){if(e.tag===3)Ed(e,e,n);else for(;t!==null;){if(t.tag===3){Ed(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vn===null||!Vn.has(l))){e=qt(n,e),n=Of(2),l=Hn(t,n,2),l!==null&&(Cf(n,l,t,e),na(l,2),un(l));break}}t=t.return}}function Ho(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new op;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(To=!0,i.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function gp(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Ce&n)===n&&(Ke===4||Ke===3&&(Ce&62914560)===Ce&&300>Mt()-Oo?(Le&2)===0&&tl(e,0):wo|=n,Ia===Ce&&(Ia=0)),un(e)}function Td(e,t){t===0&&(t=Oa()),e=ja(e,t),e!==null&&(na(e,t),un(e))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Td(e,n)}function mp(e,t){return gl(e,t)}var xu=null,al=null,Lo=!1,Su=!1,Uo=!1,ba=0;function un(e){e!==al&&e.next===null&&(al===null?xu=al=e:al=al.next=e),Su=!0,Lo||(Lo=!0,vp())}function Fl(e,t){if(!Uo&&Su){Uo=!0;do for(var n=!1,l=xu;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var u=0;else{var c=l.suspendedLanes,g=l.pingedLanes;u=(1<<31-dt(42|e)+1)-1,u&=i&~(c&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Cd(l,u))}else u=Ce,u=Mn(l,l===Ge?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||on(l,u)||(n=!0,Cd(l,u));l=l.next}while(n);Uo=!1}}function yp(){wd()}function wd(){Su=Lo=!1;var e=0;ba!==0&&(Mp()&&(e=ba),ba=0);for(var t=Mt(),n=null,l=xu;l!==null;){var i=l.next,u=Md(l,t);u===0?(l.next=null,n===null?xu=i:n.next=i,i===null&&(al=n)):(n=l,(e!==0||(u&3)!==0)&&(Su=!0)),l=i}Fl(e)}function Md(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var c=31-dt(u),g=1<<c,b=i[c];b===-1?((g&n)===0||(g&l)!==0)&&(i[c]=$u(g,t)):b<=t&&(e.expiredLanes|=g),u&=~g}if(t=Ge,n=Ce,n=Mn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hl(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||on(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&hl(l),R(n)){case 2:case 8:n=Di;break;case 32:n=Da;break;case 268435456:n=Ea;break;default:n=Da}return l=Od.bind(null,e),n=gl(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&hl(l),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(bu()&&e.callbackNode!==n)return null;var l=Ce;return l=Mn(e,e===Ge?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sd(e,l,t),Md(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?Od.bind(null,e):null)}function Cd(e,t){if(bu())return null;sd(e,t,!0)}function vp(){Cp(function(){(Le&6)!==0?gl(Pn,yp):wd()})}function jo(){return ba===0&&(ba=ta()),ba}function Ad(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Nd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bp(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var u=Ad((i[ie]||null).action),c=l.submitter;c&&(t=(t=c[ie]||null)?Ad(t.formAction):c.getAttribute("formAction"),t!==null&&(u=t,c=null));var g=new Ui("action","action",null,l,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ba!==0){var b=c?Nd(i,c):new FormData(i);no(n,{pending:!0,data:b,method:i.method,action:u},null,b)}}else typeof u=="function"&&(g.preventDefault(),b=c?Nd(i,c):new FormData(i),no(n,{pending:!0,data:b,method:i.method,action:u},u,b))},currentTarget:i}]})}}for(var Yo=0;Yo<Sr.length;Yo++){var Bo=Sr[Yo],xp=Bo.toLowerCase(),Sp=Bo[0].toUpperCase()+Bo.slice(1);Ft(xp,"on"+Sp)}Ft(oc,"onAnimationEnd"),Ft(sc,"onAnimationIteration"),Ft(cc,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Yh,"onTransitionRun"),Ft(Bh,"onTransitionStart"),Ft(qh,"onTransitionCancel"),Ft(fc,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var c=l.length-1;0<=c;c--){var g=l[c],b=g.instance,C=g.currentTarget;if(g=g.listener,b!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=C;try{u(i)}catch(H){ou(H)}i.currentTarget=null,u=b}else for(c=0;c<l.length;c++){if(g=l[c],b=g.instance,C=g.currentTarget,g=g.listener,b!==u&&i.isPropagationStopped())break e;u=g,i.currentTarget=C;try{u(i)}catch(H){ou(H)}i.currentTarget=null,u=b}}}}function Me(e,t){var n=t[ue];n===void 0&&(n=t[ue]=new Set);var l=e+"__bubble";n.has(l)||(Rd(t,e,2,!1),n.add(l))}function qo(e,t,n){var l=0;t&&(l|=4),Rd(n,e,l,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Du]){e[Du]=!0,Mi.forEach(function(n){n!=="selectionchange"&&(Dp.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Du]||(t[Du]=!0,qo("selectionchange",!1,t))}}function Rd(e,t,n,l){switch(ng(t)){case 2:var i=Fp;break;case 8:i=$p;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,l,i){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var g=l.stateNode.containerInfo;if(g===i)break;if(c===4)for(c=l.return;c!==null;){var b=c.tag;if((b===3||b===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;g!==null;){if(c=On(g),c===null)return;if(b=c.tag,b===5||b===6||b===26||b===27){l=u=c;continue e}g=g.parentNode}}l=l.return}Ys(function(){var C=u,H=ur(n),j=[];e:{var A=dc.get(e);if(A!==void 0){var _=Ui,de=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":_=mh;break;case"focusin":de="focus",_=dr;break;case"focusout":de="blur",_=dr;break;case"beforeblur":case"afterblur":_=dr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=bh;break;case oc:case sc:case cc:_=rh;break;case fc:_=Sh;break;case"scroll":case"scrollend":_=nh;break;case"wheel":_=Eh;break;case"copy":case"cut":case"paste":_=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Vs;break;case"toggle":case"beforetoggle":_=wh}var re=(t&4)!==0,Be=!re&&(e==="scroll"||e==="scrollend"),w=re?A!==null?A+"Capture":null:A;re=[];for(var S=C,O;S!==null;){var L=S;if(O=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||O===null||w===null||(L=pl(S,w),L!=null&&re.push(Wl(S,L,O))),Be)break;S=S.return}0<re.length&&(A=new _(A,de,null,n,H),j.push({event:A,listeners:re}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",A&&n!==ir&&(de=n.relatedTarget||n.fromElement)&&(On(de)||de[F]))break e;if((_||A)&&(A=H.window===H?H:(A=H.ownerDocument)?A.defaultView||A.parentWindow:window,_?(de=n.relatedTarget||n.toElement,_=C,de=de?On(de):null,de!==null&&(Be=d(de),re=de.tag,de!==Be||re!==5&&re!==27&&re!==6)&&(de=null)):(_=null,de=C),_!==de)){if(re=ks,L="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(re=Vs,L="onPointerLeave",w="onPointerEnter",S="pointer"),Be=_==null?A:aa(_),O=de==null?A:aa(de),A=new re(L,S+"leave",_,n,H),A.target=Be,A.relatedTarget=O,L=null,On(H)===C&&(re=new re(w,S+"enter",de,n,H),re.target=O,re.relatedTarget=Be,L=re),Be=L,_&&de)t:{for(re=_,w=de,S=0,O=re;O;O=ll(O))S++;for(O=0,L=w;L;L=ll(L))O++;for(;0<S-O;)re=ll(re),S--;for(;0<O-S;)w=ll(w),O--;for(;S--;){if(re===w||w!==null&&re===w.alternate)break t;re=ll(re),w=ll(w)}re=null}else re=null;_!==null&&zd(j,A,_,re,!1),de!==null&&Be!==null&&zd(j,Be,de,re,!0)}}e:{if(A=C?aa(C):window,_=A.nodeName&&A.nodeName.toLowerCase(),_==="select"||_==="input"&&A.type==="file")var P=Ws;else if(Fs(A))if(Is)P=Lh;else{P=zh;var De=Rh}else _=A.nodeName,!_||_.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&lr(C.elementType)&&(P=Ws):P=Hh;if(P&&(P=P(e,C))){$s(j,P,n,H);break e}De&&De(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&ar(A,"number",A.value)}switch(De=C?aa(C):window,e){case"focusin":(Fs(De)||De.contentEditable==="true")&&(Ha=De,vr=C,El=null);break;case"focusout":El=vr=Ha=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,uc(j,n,H);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":uc(j,n,H)}var te;if(hr)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else za?Zs(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(Xs&&n.locale!=="ko"&&(za||se!=="onCompositionStart"?se==="onCompositionEnd"&&za&&(te=Bs()):(Nn=H,sr="value"in Nn?Nn.value:Nn.textContent,za=!0)),De=Eu(C,se),0<De.length&&(se=new Gs(se,e,null,n,H),j.push({event:se,listeners:De}),te?se.data=te:(te=Js(n),te!==null&&(se.data=te)))),(te=Oh?Ch(e,n):Ah(e,n))&&(se=Eu(C,"onBeforeInput"),0<se.length&&(De=new Gs("onBeforeInput","beforeinput",null,n,H),j.push({event:De,listeners:se}),De.data=te)),bp(j,e,C,n,H)}_d(j,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eu(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=pl(e,n),i!=null&&l.unshift(Wl(e,i,u)),i=pl(e,t),i!=null&&l.push(Wl(e,i,u))),e.tag===3)return l;e=e.return}return[]}function ll(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,n,l,i){for(var u=t._reactName,c=[];n!==null&&n!==l;){var g=n,b=g.alternate,C=g.stateNode;if(g=g.tag,b!==null&&b===l)break;g!==5&&g!==26&&g!==27||C===null||(b=C,i?(C=pl(n,u),C!=null&&c.unshift(Wl(n,C,b))):i||(C=pl(n,u),C!=null&&c.push(Wl(n,C,b)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Ep=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Hd(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Tp,"")}function Ld(e,t){return t=Hd(t),Hd(e)===t}function Tu(){}function Ye(e,t,n,l,i,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Na(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Na(e,""+l);break;case"className":Ai(e,"class",l);break;case"tabIndex":Ai(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(e,n,l);break;case"style":Us(e,l,u);break;case"data":if(t!=="object"){Ai(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ri(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",i.name,i,null),Ye(e,t,"formEncType",i.formEncType,i,null),Ye(e,t,"formMethod",i.formMethod,i,null),Ye(e,t,"formTarget",i.formTarget,i,null)):(Ye(e,t,"encType",i.encType,i,null),Ye(e,t,"method",i.method,i,null),Ye(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ri(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Tu);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ci(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ci(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=eh.get(n)||n,Ci(e,n,l))}}function Vo(e,t,n,l,i,u){switch(n){case"style":Us(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Na(e,l):(typeof l=="number"||typeof l=="bigint")&&Na(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Tu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),u=e[ie]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,i),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ci(e,n,l)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,i=!1,u;for(u in n)if(n.hasOwnProperty(u)){var c=n[u];if(c!=null)switch(u){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,u,c,n,null)}}i&&Ye(e,t,"srcSet",n.srcSet,n,null),l&&Ye(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var g=u=c=i=null,b=null,C=null;for(l in n)if(n.hasOwnProperty(l)){var H=n[l];if(H!=null)switch(l){case"name":i=H;break;case"type":c=H;break;case"checked":b=H;break;case"defaultChecked":C=H;break;case"value":u=H;break;case"defaultValue":g=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:Ye(e,t,l,H,n,null)}}Rs(e,u,g,b,C,c,i,!1),Ni(e);return;case"select":Me("invalid",e),l=c=u=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":u=g;break;case"defaultValue":c=g;break;case"multiple":l=g;default:Ye(e,t,i,g,n,null)}t=u,n=c,e.multiple=!!l,t!=null?Aa(e,!!l,t,!1):n!=null&&Aa(e,!!l,n,!0);return;case"textarea":Me("invalid",e),u=i=l=null;for(c in n)if(n.hasOwnProperty(c)&&(g=n[c],g!=null))switch(c){case"value":l=g;break;case"defaultValue":i=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Ye(e,t,c,g,n,null)}Hs(e,l,i,u),Ni(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(l=n[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,t,b,l,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<$l.length;l++)Me($l[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,C,l,n,null)}return;default:if(lr(t)){for(H in n)n.hasOwnProperty(H)&&(l=n[H],l!==void 0&&Vo(e,t,H,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&Ye(e,t,g,l,n,null))}function wp(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,c=null,g=null,b=null,C=null,H=null;for(_ in n){var j=n[_];if(n.hasOwnProperty(_)&&j!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":b=j;default:l.hasOwnProperty(_)||Ye(e,t,_,null,l,j)}}for(var A in l){var _=l[A];if(j=n[A],l.hasOwnProperty(A)&&(_!=null||j!=null))switch(A){case"type":u=_;break;case"name":i=_;break;case"checked":C=_;break;case"defaultChecked":H=_;break;case"value":c=_;break;case"defaultValue":g=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:_!==j&&Ye(e,t,A,_,l,j)}}nr(e,c,g,b,C,H,u,i);return;case"select":_=c=g=A=null;for(u in n)if(b=n[u],n.hasOwnProperty(u)&&b!=null)switch(u){case"value":break;case"multiple":_=b;default:l.hasOwnProperty(u)||Ye(e,t,u,null,l,b)}for(i in l)if(u=l[i],b=n[i],l.hasOwnProperty(i)&&(u!=null||b!=null))switch(i){case"value":A=u;break;case"defaultValue":g=u;break;case"multiple":c=u;default:u!==b&&Ye(e,t,i,u,l,b)}t=g,n=c,l=_,A!=null?Aa(e,!!n,A,!1):!!l!=!!n&&(t!=null?Aa(e,!!n,t,!0):Aa(e,!!n,n?[]:"",!1));return;case"textarea":_=A=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ye(e,t,g,null,l,i)}for(c in l)if(i=l[c],u=n[c],l.hasOwnProperty(c)&&(i!=null||u!=null))switch(c){case"value":A=i;break;case"defaultValue":_=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&Ye(e,t,c,i,l,u)}zs(e,A,_);return;case"option":for(var de in n)if(A=n[de],n.hasOwnProperty(de)&&A!=null&&!l.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Ye(e,t,de,null,l,A)}for(b in l)if(A=l[b],_=n[b],l.hasOwnProperty(b)&&A!==_&&(A!=null||_!=null))switch(b){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ye(e,t,b,A,l,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)A=n[re],n.hasOwnProperty(re)&&A!=null&&!l.hasOwnProperty(re)&&Ye(e,t,re,null,l,A);for(C in l)if(A=l[C],_=n[C],l.hasOwnProperty(C)&&A!==_&&(A!=null||_!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:Ye(e,t,C,A,l,_)}return;default:if(lr(t)){for(var Be in n)A=n[Be],n.hasOwnProperty(Be)&&A!==void 0&&!l.hasOwnProperty(Be)&&Vo(e,t,Be,void 0,l,A);for(H in l)A=l[H],_=n[H],!l.hasOwnProperty(H)||A===_||A===void 0&&_===void 0||Vo(e,t,H,A,l,_);return}}for(var w in n)A=n[w],n.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&Ye(e,t,w,null,l,A);for(j in l)A=l[j],_=n[j],!l.hasOwnProperty(j)||A===_||A==null&&_==null||Ye(e,t,j,A,l,_)}var Xo=null,Qo=null;function wu(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=null;function Mp(){var e=window.event;return e&&e.type==="popstate"?e===Zo?!1:(Zo=e,!0):(Zo=null,!1)}var Yd=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(Ap)}:Yd;function Ap(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function qd(e,t){var n=t,l=0,i=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<l&&8>l){n=l;var c=e.ownerDocument;if(n&1&&Il(c.documentElement),n&2&&Il(c.body),n&4)for(n=c.head,Il(n),c=n.firstChild;c;){var g=c.nextSibling,b=c.nodeName;c[Jt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=g}}if(i===0){e.removeChild(u),ui(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:l=n.charCodeAt(0)-48;else l=0;n=u}while(n);ui(t)}function Jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jo(n),Pt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Np(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function _p(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function Fo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Rp(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var $o=null;function kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Gd(e,t,n){switch(t=wu(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Il(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pt(e)}var Kt=new Map,Vd=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=B.d;B.d={f:zp,r:Hp,D:Lp,C:Up,L:jp,m:Yp,X:qp,S:Bp,M:kp};function zp(){var e=Tn.f(),t=yu();return e||t}function Hp(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?sf(t):Tn.r(e)}var il=typeof document>"u"?null:document;function Xd(e,t,n){var l=il;if(l&&typeof t=="string"&&t){var i=Bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Vd.has(i)||(Vd.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),st(t,"link",e),Ie(t),l.head.appendChild(t)))}}function Lp(e){Tn.D(e),Xd("dns-prefetch",e,null)}function Up(e,t){Tn.C(e,t),Xd("preconnect",e,t)}function jp(e,t,n){Tn.L(e,t,n);var l=il;if(l&&e&&t){var i='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Bt(n.imageSizes)+'"]')):i+='[href="'+Bt(e)+'"]';var u=i;switch(t){case"style":u=ul(e);break;case"script":u=rl(e)}Kt.has(u)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Pl(u))||t==="script"&&l.querySelector(ei(u))||(t=l.createElement("link"),st(t,"link",e),Ie(t),l.head.appendChild(t)))}}function Yp(e,t){Tn.m(e,t);var n=il;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Bt(l)+'"][href="'+Bt(e)+'"]',u=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=rl(e)}if(!Kt.has(u)&&(e=E({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(u)))return}l=n.createElement("link"),st(l,"link",e),Ie(l),n.head.appendChild(l)}}}function Bp(e,t,n){Tn.S(e,t,n);var l=il;if(l&&e){var i=Cn(l).hoistableStyles,u=ul(e);t=t||"default";var c=i.get(u);if(!c){var g={loading:0,preload:null};if(c=l.querySelector(Pl(u)))g.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&Wo(e,n);var b=c=l.createElement("link");Ie(b),st(b,"link",e),b._p=new Promise(function(C,H){b.onload=C,b.onerror=H}),b.addEventListener("load",function(){g.loading|=1}),b.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ou(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:g},i.set(u,c)}}}function qp(e,t){Tn.X(e,t);var n=il;if(n&&e){var l=Cn(n).hoistableScripts,i=rl(e),u=l.get(i);u||(u=n.querySelector(ei(i)),u||(e=E({src:e,async:!0},t),(t=Kt.get(i))&&Io(e,t),u=n.createElement("script"),Ie(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function kp(e,t){Tn.M(e,t);var n=il;if(n&&e){var l=Cn(n).hoistableScripts,i=rl(e),u=l.get(i);u||(u=n.querySelector(ei(i)),u||(e=E({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&Io(e,t),u=n.createElement("script"),Ie(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function Qd(e,t,n,l){var i=(i=fe.current)?Mu(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ul(n.href),n=Cn(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ul(n.href);var u=Cn(i).hoistableStyles,c=u.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,c),(u=i.querySelector(Pl(e)))&&!u._p&&(c.instance=u,c.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||Gp(i,e,n,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rl(n),n=Cn(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ul(e){return'href="'+Bt(e)+'"'}function Pl(e){return'link[rel="stylesheet"]['+e+"]"}function Kd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Gp(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",n),Ie(t),e.head.appendChild(t))}function rl(e){return'[src="'+Bt(e)+'"]'}function ei(e){return"script[async]"+e}function Zd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(l)return t.instance=l,Ie(l),l;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ie(l),st(l,"style",i),Ou(l,n.precedence,e),t.instance=l;case"stylesheet":i=ul(n.href);var u=e.querySelector(Pl(i));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;l=Kd(n),(i=Kt.get(i))&&Wo(l,i),u=(e.ownerDocument||e).createElement("link"),Ie(u);var c=u;return c._p=new Promise(function(g,b){c.onload=g,c.onerror=b}),st(u,"link",l),t.state.loading|=4,Ou(u,n.precedence,e),t.instance=u;case"script":return u=rl(n.src),(i=e.querySelector(ei(u)))?(t.instance=i,Ie(i),i):(l=n,(i=Kt.get(u))&&(l=E({},n),Io(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ie(i),st(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ou(l,n.precedence,e));return t.instance}function Ou(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,u=i,c=0;c<l.length;c++){var g=l[c];if(g.dataset.precedence===t)u=g;else if(u!==i)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cu=null;function Jd(e,t,n){if(Cu===null){var l=new Map,i=Cu=new Map;i.set(n,l)}else i=Cu,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var u=n[i];if(!(u[Jt]||u[Q]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(t)||"";c=e+c;var g=l.get(c);g?g.push(u):l.set(c,[u])}}return l}function Fd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ti=null;function Xp(){}function Qp(e,t,n){if(ti===null)throw Error(o(475));var l=ti;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ul(n.href),u=e.querySelector(Pl(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Au.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=u,Ie(u);return}u=e.ownerDocument||e,n=Kd(n),(i=Kt.get(i))&&Wo(n,i),u=u.createElement("link"),Ie(u);var c=u;c._p=new Promise(function(g,b){c.onload=g,c.onerror=b}),st(u,"link",n),t.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Au.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Kp(){if(ti===null)throw Error(o(475));var e=ti;return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Au(){if(this.count--,this.count===0){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,t.forEach(Zp,e),Nu=null,Au.call(e))}function Zp(e,t){if(!(t.state.loading&4)){var n=Nu.get(e);if(n)var l=n.get(null);else{n=new Map,Nu.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var c=i[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),l=c)}l&&n.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),u=n.get(c)||l,u===l&&n.set(null,i),n.set(c,i),this.count++,l=Au.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),u?u.parentNode.insertBefore(i,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ni={$$typeof:I,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Jp(e,t,n,l,i,u,c,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Wd(e,t,n,l,i,u,c,g,b,C,H,j){return e=new Jp(e,t,n,c,g,b,C,j),t=1,u===!0&&(t|=24),u=At(3,null,null,t),e.current=u,u.stateNode=e,t=zr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},jr(u),e}function Id(e){return e?(e=Ya,e):Ya}function Pd(e,t,n,l,i,u){i=Id(i),l.context===null?l.context=i:l.pendingContext=i,l=zn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Hn(e,l,t),n!==null&&(Ht(n,e,t),Rl(n,e,t))}function eg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){eg(e,t),(e=e.alternate)&&eg(e,t)}function tg(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&Ht(t,e,67108864),es(e,67108864)}}var _u=!0;function Fp(e,t,n,l){var i=M.T;M.T=null;var u=B.p;try{B.p=2,ts(e,t,n,l)}finally{B.p=u,M.T=i}}function $p(e,t,n,l){var i=M.T;M.T=null;var u=B.p;try{B.p=8,ts(e,t,n,l)}finally{B.p=u,M.T=i}}function ts(e,t,n,l){if(_u){var i=ns(l);if(i===null)Go(e,t,l,Ru,n),ag(e,l);else if(Ip(i,e,t,n,l))l.stopPropagation();else if(ag(e,l),t&4&&-1<Wp.indexOf(e)){for(;i!==null;){var u=en(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=_e(u.pendingLanes);if(c!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;c;){var b=1<<31-dt(c);g.entanglements[1]|=b,c&=~b}un(u),(Le&6)===0&&(pu=Mt()+500,Fl(0))}}break;case 13:g=ja(u,2),g!==null&&Ht(g,u,2),yu(),es(u,2)}if(u=ns(l),u===null&&Go(e,t,l,Ru,n),u===i)break;i=u}i!==null&&l.stopPropagation()}else Go(e,t,l,null,n)}}function ns(e){return e=ur(e),as(e)}var Ru=null;function as(e){if(Ru=null,e=On(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ru=e,null}function ng(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Si()){case Pn:return 2;case Di:return 8;case Da:case Ei:return 32;case Ea:return 268435456;default:return 32}default:return 32}}var ls=!1,Zn=null,Jn=null,Fn=null,ai=new Map,li=new Map,$n=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function ii(e,t,n,l,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[i]},t!==null&&(t=en(t),t!==null&&tg(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ip(e,t,n,l,i){switch(t){case"focusin":return Zn=ii(Zn,e,t,n,l,i),!0;case"dragenter":return Jn=ii(Jn,e,t,n,l,i),!0;case"mouseover":return Fn=ii(Fn,e,t,n,l,i),!0;case"pointerover":var u=i.pointerId;return ai.set(u,ii(ai.get(u)||null,e,t,n,l,i)),!0;case"gotpointercapture":return u=i.pointerId,li.set(u,ii(li.get(u)||null,e,t,n,l,i)),!0}return!1}function lg(e){var t=On(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,Z(e.priority,function(){if(n.tag===13){var l=zt();l=T(l);var i=ja(n,l);i!==null&&Ht(i,n,l),es(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ns(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ir=l,n.target.dispatchEvent(l),ir=null}else return t=en(n),t!==null&&tg(t),e.blockedOn=n,!1;t.shift()}return!0}function ig(e,t,n){zu(e)&&n.delete(t)}function Pp(){ls=!1,Zn!==null&&zu(Zn)&&(Zn=null),Jn!==null&&zu(Jn)&&(Jn=null),Fn!==null&&zu(Fn)&&(Fn=null),ai.forEach(ig),li.forEach(ig)}function Hu(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Pp)))}var Lu=null;function ug(e){Lu!==e&&(Lu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(as(l||n)===null)continue;break}var u=en(n);u!==null&&(e.splice(t,3),t-=3,no(u,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function ui(e){function t(b){return Hu(b,e)}Zn!==null&&Hu(Zn,e),Jn!==null&&Hu(Jn,e),Fn!==null&&Hu(Fn,e),ai.forEach(t),li.forEach(t);for(var n=0;n<$n.length;n++){var l=$n[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&$n.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],u=n[l+1],c=i[ie]||null;if(typeof u=="function")c||ug(n);else if(c){var g=null;if(u&&u.hasAttribute("formAction")){if(i=u,c=u[ie]||null)g=c.formAction;else if(as(i)!==null)continue}else g=c.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),ug(n)}}}function is(e){this._internalRoot=e}Uu.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=zt();Pd(n,l,e,t,null,null)},Uu.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pd(e.current,2,null,e,null,null),yu(),t[F]=null}};function Uu(e){this._internalRoot=e}Uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=q();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$n.length&&t!==0&&t<$n[n].priority;n++);$n.splice(n,0,e),n===0&&lg(e)}};var rg=r.version;if(rg!=="19.1.0")throw Error(o(527,rg,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var em={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{ea=ju.inject(em),ft=ju}catch{}}return oi.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,l="",i=Ef,u=Tf,c=wf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Wd(e,1,!1,null,null,n,l,i,u,c,g,null),e[F]=t.current,ko(e),new is(t)},oi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var l=!1,i="",u=Ef,c=Tf,g=wf,b=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=Wd(e,1,!0,t,n??null,l,i,u,c,g,b,C),t.context=Id(null),n=t.current,l=zt(),l=T(l),i=zn(l),i.callback=null,Hn(n,i,l),n=l,t.current.lanes=n,na(t,n),un(t),e[F]=t.current,ko(e),new Uu(t)},oi.version="19.1.0",oi}var yg;function fm(){if(yg)return os.exports;yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),os.exports=cm(),os.exports}var dm=fm();const gm=(s,r,a,o)=>{var d,y,D,v;const f=[a,{code:r,...o||{}}];if((y=(d=s==null?void 0:s.services)==null?void 0:d.logger)!=null&&y.forward)return s.services.logger.forward(f,"warn","react-i18next::",!0);Sa(f[0])&&(f[0]=`react-i18next:: ${f[0]}`),(v=(D=s==null?void 0:s.services)==null?void 0:D.logger)!=null&&v.warn?s.services.logger.warn(...f):console!=null&&console.warn&&console.warn(...f)},vg={},bs=(s,r,a,o)=>{Sa(a)&&vg[a]||(Sa(a)&&(vg[a]=new Date),gm(s,r,a,o))},kg=(s,r)=>()=>{if(s.isInitialized)r();else{const a=()=>{setTimeout(()=>{s.off("initialized",a)},0),r()};s.on("initialized",a)}},xs=(s,r,a)=>{s.loadNamespaces(r,kg(s,a))},bg=(s,r,a,o)=>{if(Sa(a)&&(a=[a]),s.options.preload&&s.options.preload.indexOf(r)>-1)return xs(s,a,o);a.forEach(f=>{s.options.ns.indexOf(f)<0&&s.options.ns.push(f)}),s.loadLanguages(r,kg(s,o))},hm=(s,r,a={})=>!r.languages||!r.languages.length?(bs(r,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:r.languages}),!0):r.hasLoadedNamespace(s,{lng:a.lng,precheck:(o,f)=>{var d;if(((d=a.bindI18n)==null?void 0:d.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!f(o.isLanguageChangingTo,s))return!1}}),Sa=s=>typeof s=="string",pm=s=>typeof s=="object"&&s!==null,mm=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ym={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},vm=s=>ym[s],bm=s=>s.replace(mm,vm);let Ss={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:bm};const xm=(s={})=>{Ss={...Ss,...s}},Sm=()=>Ss;let Gg;const Dm=s=>{Gg=s},Em=()=>Gg,Tm={type:"3rdParty",init(s){xm(s.options.react),Dm(s)}},wm=qe.createContext();class Mm{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Om=(s,r)=>{const a=qe.useRef();return qe.useEffect(()=>{a.current=s},[s,r]),a.current},Vg=(s,r,a,o)=>s.getFixedT(r,a,o),Cm=(s,r,a,o)=>qe.useCallback(Vg(s,r,a,o),[s,r,a,o]),yi=(s,r={})=>{var Ee,ge,ne,ee;const{i18n:a}=r,{i18n:o,defaultNS:f}=qe.useContext(wm)||{},d=a||o||Em();if(d&&!d.reportNamespaces&&(d.reportNamespaces=new Mm),!d){bs(d,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const W=(Te,ye)=>Sa(ye)?ye:pm(ye)&&Sa(ye.defaultValue)?ye.defaultValue:Array.isArray(Te)?Te[Te.length-1]:Te,pe=[W,{},!1];return pe.t=W,pe.i18n={},pe.ready=!1,pe}(Ee=d.options.react)!=null&&Ee.wait&&bs(d,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const y={...Sm(),...d.options.react,...r},{useSuspense:D,keyPrefix:v}=y;let m=f||((ge=d.options)==null?void 0:ge.defaultNS);m=Sa(m)?[m]:m||["translation"],(ee=(ne=d.reportNamespaces).addUsedNamespaces)==null||ee.call(ne,m);const E=(d.isInitialized||d.initializedStoreOnce)&&m.every(W=>hm(W,d,y)),z=Cm(d,r.lng||null,y.nsMode==="fallback"?m:m[0],v),N=()=>z,G=()=>Vg(d,r.lng||null,y.nsMode==="fallback"?m:m[0],v),[k,Y]=qe.useState(N);let J=m.join();r.lng&&(J=`${r.lng}${J}`);const Oe=Om(J),ce=qe.useRef(!0);qe.useEffect(()=>{const{bindI18n:W,bindI18nStore:pe}=y;ce.current=!0,!E&&!D&&(r.lng?bg(d,r.lng,m,()=>{ce.current&&Y(G)}):xs(d,m,()=>{ce.current&&Y(G)})),E&&Oe&&Oe!==J&&ce.current&&Y(G);const Te=()=>{ce.current&&Y(G)};return W&&(d==null||d.on(W,Te)),pe&&(d==null||d.store.on(pe,Te)),()=>{ce.current=!1,d&&(W==null||W.split(" ").forEach(ye=>d.off(ye,Te))),pe&&d&&pe.split(" ").forEach(ye=>d.store.off(ye,Te))}},[d,J]),qe.useEffect(()=>{ce.current&&E&&Y(N)},[d,v,E]);const I=[k,d,E];if(I.t=k,I.i18n=d,I.ready=E,E||!E&&!D)return I;throw new Promise(W=>{r.lng?bg(d,r.lng,m,()=>W()):xs(d,m,()=>W())})};var ds=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],cl={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(s){return typeof console<"u"&&console.warn(s)},getWeek:function(s){var r=new Date(s.getTime());r.setHours(0,0,0,0),r.setDate(r.getDate()+3-(r.getDay()+6)%7);var a=new Date(r.getFullYear(),0,4);return 1+Math.round(((r.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},vi={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(s){var r=s%100;if(r>3&&r<21)return"th";switch(r%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},Tt=function(s,r){return r===void 0&&(r=2),("000"+s).slice(r*-1)},Zt=function(s){return s===!0?1:0};function xg(s,r){var a;return function(){var o=this,f=arguments;clearTimeout(a),a=setTimeout(function(){return s.apply(o,f)},r)}}var gs=function(s){return s instanceof Array?s:[s]};function bt(s,r,a){if(a===!0)return s.classList.add(r);s.classList.remove(r)}function ze(s,r,a){var o=window.document.createElement(s);return r=r||"",a=a||"",o.className=r,a!==void 0&&(o.textContent=a),o}function Yu(s){for(;s.firstChild;)s.removeChild(s.firstChild)}function Xg(s,r){if(r(s))return s;if(s.parentNode)return Xg(s.parentNode,r)}function Bu(s,r){var a=ze("div","numInputWrapper"),o=ze("input","numInput "+s),f=ze("span","arrowUp"),d=ze("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?o.type="number":(o.type="text",o.pattern="\\d*"),r!==void 0)for(var y in r)o.setAttribute(y,r[y]);return a.appendChild(o),a.appendChild(f),a.appendChild(d),a}function Lt(s){try{if(typeof s.composedPath=="function"){var r=s.composedPath();return r[0]}return s.target}catch{return s.target}}var hs=function(){},ku=function(s,r,a){return a.months[r?"shorthand":"longhand"][s]},Am={D:hs,F:function(s,r,a){s.setMonth(a.months.longhand.indexOf(r))},G:function(s,r){s.setHours((s.getHours()>=12?12:0)+parseFloat(r))},H:function(s,r){s.setHours(parseFloat(r))},J:function(s,r){s.setDate(parseFloat(r))},K:function(s,r,a){s.setHours(s.getHours()%12+12*Zt(new RegExp(a.amPM[1],"i").test(r)))},M:function(s,r,a){s.setMonth(a.months.shorthand.indexOf(r))},S:function(s,r){s.setSeconds(parseFloat(r))},U:function(s,r){return new Date(parseFloat(r)*1e3)},W:function(s,r,a){var o=parseInt(r),f=new Date(s.getFullYear(),0,2+(o-1)*7,0,0,0,0);return f.setDate(f.getDate()-f.getDay()+a.firstDayOfWeek),f},Y:function(s,r){s.setFullYear(parseFloat(r))},Z:function(s,r){return new Date(r)},d:function(s,r){s.setDate(parseFloat(r))},h:function(s,r){s.setHours((s.getHours()>=12?12:0)+parseFloat(r))},i:function(s,r){s.setMinutes(parseFloat(r))},j:function(s,r){s.setDate(parseFloat(r))},l:hs,m:function(s,r){s.setMonth(parseFloat(r)-1)},n:function(s,r){s.setMonth(parseFloat(r)-1)},s:function(s,r){s.setSeconds(parseFloat(r))},u:function(s,r){return new Date(parseFloat(r))},w:hs,y:function(s,r){s.setFullYear(2e3+parseFloat(r))}},xa={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},pi={Z:function(s){return s.toISOString()},D:function(s,r,a){return r.weekdays.shorthand[pi.w(s,r,a)]},F:function(s,r,a){return ku(pi.n(s,r,a)-1,!1,r)},G:function(s,r,a){return Tt(pi.h(s,r,a))},H:function(s){return Tt(s.getHours())},J:function(s,r){return r.ordinal!==void 0?s.getDate()+r.ordinal(s.getDate()):s.getDate()},K:function(s,r){return r.amPM[Zt(s.getHours()>11)]},M:function(s,r){return ku(s.getMonth(),!0,r)},S:function(s){return Tt(s.getSeconds())},U:function(s){return s.getTime()/1e3},W:function(s,r,a){return a.getWeek(s)},Y:function(s){return Tt(s.getFullYear(),4)},d:function(s){return Tt(s.getDate())},h:function(s){return s.getHours()%12?s.getHours()%12:12},i:function(s){return Tt(s.getMinutes())},j:function(s){return s.getDate()},l:function(s,r){return r.weekdays.longhand[s.getDay()]},m:function(s){return Tt(s.getMonth()+1)},n:function(s){return s.getMonth()+1},s:function(s){return s.getSeconds()},u:function(s){return s.getTime()},w:function(s){return s.getDay()},y:function(s){return String(s.getFullYear()).substring(2)}},Qg=function(s){var r=s.config,a=r===void 0?cl:r,o=s.l10n,f=o===void 0?vi:o,d=s.isMobile,y=d===void 0?!1:d;return function(D,v,m){var E=m||f;return a.formatDate!==void 0&&!y?a.formatDate(D,v,E):v.split("").map(function(z,N,G){return pi[z]&&G[N-1]!=="\\"?pi[z](D,E,a):z!=="\\"?z:""}).join("")}},Ds=function(s){var r=s.config,a=r===void 0?cl:r,o=s.l10n,f=o===void 0?vi:o;return function(d,y,D,v){if(!(d!==0&&!d)){var m=v||f,E,z=d;if(d instanceof Date)E=new Date(d.getTime());else if(typeof d!="string"&&d.toFixed!==void 0)E=new Date(d);else if(typeof d=="string"){var N=y||(a||cl).dateFormat,G=String(d).trim();if(G==="today")E=new Date,D=!0;else if(a&&a.parseDate)E=a.parseDate(d,N);else if(/Z$/.test(G)||/GMT$/.test(G))E=new Date(d);else{for(var k=void 0,Y=[],J=0,Oe=0,ce="";J<N.length;J++){var I=N[J],Ee=I==="\\",ge=N[J-1]==="\\"||Ee;if(xa[I]&&!ge){ce+=xa[I];var ne=new RegExp(ce).exec(d);ne&&(k=!0)&&Y[I!=="Y"?"push":"unshift"]({fn:Am[I],val:ne[++Oe]})}else Ee||(ce+=".")}E=!a||!a.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),Y.forEach(function(ee){var W=ee.fn,pe=ee.val;return E=W(E,pe,m)||E}),E=k?E:void 0}}if(!(E instanceof Date&&!isNaN(E.getTime()))){a.errorHandler(new Error("Invalid date provided: "+z));return}return D===!0&&E.setHours(0,0,0,0),E}}};function Ut(s,r,a){return a===void 0&&(a=!0),a!==!1?new Date(s.getTime()).setHours(0,0,0,0)-new Date(r.getTime()).setHours(0,0,0,0):s.getTime()-r.getTime()}var Nm=function(s,r,a){return s>Math.min(r,a)&&s<Math.max(r,a)},ps=function(s,r,a){return s*3600+r*60+a},_m=function(s){var r=Math.floor(s/3600),a=(s-r*3600)/60;return[r,a,s-r*3600-a*60]},Rm={DAY:864e5};function ms(s){var r=s.defaultHour,a=s.defaultMinute,o=s.defaultSeconds;if(s.minDate!==void 0){var f=s.minDate.getHours(),d=s.minDate.getMinutes(),y=s.minDate.getSeconds();r<f&&(r=f),r===f&&a<d&&(a=d),r===f&&a===d&&o<y&&(o=s.minDate.getSeconds())}if(s.maxDate!==void 0){var D=s.maxDate.getHours(),v=s.maxDate.getMinutes();r=Math.min(r,D),r===D&&(a=Math.min(v,a)),r===D&&a===v&&(o=s.maxDate.getSeconds())}return{hours:r,minutes:a,seconds:o}}typeof Object.assign!="function"&&(Object.assign=function(s){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(!s)throw TypeError("Cannot convert undefined or null to object");for(var o=function(D){D&&Object.keys(D).forEach(function(v){return s[v]=D[v]})},f=0,d=r;f<d.length;f++){var y=d[f];o(y)}return s});var mt=function(){return mt=Object.assign||function(s){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(s[f]=r[f])}return s},mt.apply(this,arguments)},Sg=function(){for(var s=0,r=0,a=arguments.length;r<a;r++)s+=arguments[r].length;for(var o=Array(s),f=0,r=0;r<a;r++)for(var d=arguments[r],y=0,D=d.length;y<D;y++,f++)o[f]=d[y];return o},zm=300;function Hm(s,r){var a={config:mt(mt({},cl),$e.defaultConfig),l10n:vi};a.parseDate=Ds({config:a.config,l10n:a.l10n}),a._handlers=[],a.pluginElements=[],a.loadedPlugins=[],a._bind=Y,a._setHoursFromDate=N,a._positionCalendar=Pn,a.changeMonth=U,a.changeYear=at,a.clear=K,a.close=X,a.onMouseOver=wn,a._createElement=ze,a.createDay=ne,a.destroy=le,a.isEnabled=Ae,a.jumpToDate=ce,a.updateValue=Ot,a.open=hl,a.redraw=Ei,a.set=ea,a.setDate=It,a.toggle=Ma;function o(){a.utils={getDaysInMonth:function(h,p){return h===void 0&&(h=a.currentMonth),p===void 0&&(p=a.currentYear),h===1&&(p%4===0&&p%100!==0||p%400===0)?29:a.l10n.daysInMonth[h]}}}function f(){a.element=a.input=s,a.isOpen=!1,Zu(),Si(),Fu(),Ju(),o(),a.isMobile||ge(),Oe(),(a.selectedDates.length||a.config.noCalendar)&&(a.config.enableTime&&N(a.config.noCalendar?a.latestSelectedDateObj:void 0),Ot(!1)),D();var h=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!a.isMobile&&h&&Pn(),_e("onReady")}function d(){var h;return((h=a.calendarContainer)===null||h===void 0?void 0:h.getRootNode()).activeElement||document.activeElement}function y(h){return h.bind(a)}function D(){var h=a.config;h.weekNumbers===!1&&h.showMonths===1||h.noCalendar!==!0&&window.requestAnimationFrame(function(){if(a.calendarContainer!==void 0&&(a.calendarContainer.style.visibility="hidden",a.calendarContainer.style.display="block"),a.daysContainer!==void 0){var p=(a.days.offsetWidth+1)*h.showMonths;a.daysContainer.style.width=p+"px",a.calendarContainer.style.width=p+(a.weekWrapper!==void 0?a.weekWrapper.offsetWidth:0)+"px",a.calendarContainer.style.removeProperty("visibility"),a.calendarContainer.style.removeProperty("display")}})}function v(h){if(a.selectedDates.length===0){var p=a.config.minDate===void 0||Ut(new Date,a.config.minDate)>=0?new Date:new Date(a.config.minDate.getTime()),T=ms(a.config);p.setHours(T.hours,T.minutes,T.seconds,p.getMilliseconds()),a.selectedDates=[p],a.latestSelectedDateObj=p}h!==void 0&&h.type!=="blur"&&Wu(h);var R=a._input.value;z(),Ot(),a._input.value!==R&&a._debouncedChange()}function m(h,p){return h%12+12*Zt(p===a.l10n.amPM[1])}function E(h){switch(h%24){case 0:case 12:return 12;default:return h%12}}function z(){if(!(a.hourElement===void 0||a.minuteElement===void 0)){var h=(parseInt(a.hourElement.value.slice(-2),10)||0)%24,p=(parseInt(a.minuteElement.value,10)||0)%60,T=a.secondElement!==void 0?(parseInt(a.secondElement.value,10)||0)%60:0;a.amPM!==void 0&&(h=m(h,a.amPM.textContent));var R=a.config.minTime!==void 0||a.config.minDate&&a.minDateHasTime&&a.latestSelectedDateObj&&Ut(a.latestSelectedDateObj,a.config.minDate,!0)===0,q=a.config.maxTime!==void 0||a.config.maxDate&&a.maxDateHasTime&&a.latestSelectedDateObj&&Ut(a.latestSelectedDateObj,a.config.maxDate,!0)===0;if(a.config.maxTime!==void 0&&a.config.minTime!==void 0&&a.config.minTime>a.config.maxTime){var Z=ps(a.config.minTime.getHours(),a.config.minTime.getMinutes(),a.config.minTime.getSeconds()),oe=ps(a.config.maxTime.getHours(),a.config.maxTime.getMinutes(),a.config.maxTime.getSeconds()),Q=ps(h,p,T);if(Q>oe&&Q<Z){var ie=_m(Z);h=ie[0],p=ie[1],T=ie[2]}}else{if(q){var F=a.config.maxTime!==void 0?a.config.maxTime:a.config.maxDate;h=Math.min(h,F.getHours()),h===F.getHours()&&(p=Math.min(p,F.getMinutes())),p===F.getMinutes()&&(T=Math.min(T,F.getSeconds()))}if(R){var ue=a.config.minTime!==void 0?a.config.minTime:a.config.minDate;h=Math.max(h,ue.getHours()),h===ue.getHours()&&p<ue.getMinutes()&&(p=ue.getMinutes()),p===ue.getMinutes()&&(T=Math.max(T,ue.getSeconds()))}}G(h,p,T)}}function N(h){var p=h||a.latestSelectedDateObj;p&&p instanceof Date&&G(p.getHours(),p.getMinutes(),p.getSeconds())}function G(h,p,T){a.latestSelectedDateObj!==void 0&&a.latestSelectedDateObj.setHours(h%24,p,T||0,0),!(!a.hourElement||!a.minuteElement||a.isMobile)&&(a.hourElement.value=Tt(a.config.time_24hr?h:(12+h)%12+12*Zt(h%12===0)),a.minuteElement.value=Tt(p),a.amPM!==void 0&&(a.amPM.textContent=a.l10n.amPM[Zt(h>=12)]),a.secondElement!==void 0&&(a.secondElement.value=Tt(T)))}function k(h){var p=Lt(h),T=parseInt(p.value)+(h.delta||0);(T/1e3>1||h.key==="Enter"&&!/[^\d]/.test(T.toString()))&&at(T)}function Y(h,p,T,R){if(p instanceof Array)return p.forEach(function(q){return Y(h,q,T,R)});if(h instanceof Array)return h.forEach(function(q){return Y(q,p,T,R)});h.addEventListener(p,T,R),a._handlers.push({remove:function(){return h.removeEventListener(p,T,R)}})}function J(){_e("onChange")}function Oe(){if(a.config.wrap&&["open","close","toggle","clear"].forEach(function(T){Array.prototype.forEach.call(a.element.querySelectorAll("[data-"+T+"]"),function(R){return Y(R,"click",a[T])})}),a.isMobile){wa();return}var h=xg(gl,50);if(a._debouncedChange=xg(J,zm),a.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&Y(a.daysContainer,"mouseover",function(T){a.config.mode==="range"&&wn(Lt(T))}),Y(a._input,"keydown",In),a.calendarContainer!==void 0&&Y(a.calendarContainer,"keydown",In),!a.config.inline&&!a.config.static&&Y(window,"resize",h),window.ontouchstart!==void 0?Y(window.document,"touchstart",fe):Y(window.document,"mousedown",fe),Y(window.document,"focus",fe,{capture:!0}),a.config.clickOpens===!0&&(Y(a._input,"focus",a.open),Y(a._input,"click",a.open)),a.daysContainer!==void 0&&(Y(a.monthNav,"click",na),Y(a.monthNav,["keyup","increment"],k),Y(a.daysContainer,"click",Ti)),a.timeContainer!==void 0&&a.minuteElement!==void 0&&a.hourElement!==void 0){var p=function(T){return Lt(T).select()};Y(a.timeContainer,["increment"],v),Y(a.timeContainer,"blur",v,{capture:!0}),Y(a.timeContainer,"click",I),Y([a.hourElement,a.minuteElement],["focus","click"],p),a.secondElement!==void 0&&Y(a.secondElement,"focus",function(){return a.secondElement&&a.secondElement.select()}),a.amPM!==void 0&&Y(a.amPM,"click",function(T){v(T)})}a.config.allowInput&&Y(a._input,"blur",dl)}function ce(h,p){var T=h!==void 0?a.parseDate(h):a.latestSelectedDateObj||(a.config.minDate&&a.config.minDate>a.now?a.config.minDate:a.config.maxDate&&a.config.maxDate<a.now?a.config.maxDate:a.now),R=a.currentYear,q=a.currentMonth;try{T!==void 0&&(a.currentYear=T.getFullYear(),a.currentMonth=T.getMonth())}catch(Z){Z.message="Invalid date supplied: "+T,a.config.errorHandler(Z)}p&&a.currentYear!==R&&(_e("onYearChange"),We()),p&&(a.currentYear!==R||a.currentMonth!==q)&&_e("onMonthChange"),a.redraw()}function I(h){var p=Lt(h);~p.className.indexOf("arrow")&&Ee(h,p.classList.contains("arrowUp")?1:-1)}function Ee(h,p,T){var R=h&&Lt(h),q=T||R&&R.parentNode&&R.parentNode.firstChild,Z=Mn("increment");Z.delta=p,q&&q.dispatchEvent(Z)}function ge(){var h=window.document.createDocumentFragment();if(a.calendarContainer=ze("div","flatpickr-calendar"),a.calendarContainer.tabIndex=-1,!a.config.noCalendar){if(h.appendChild(M()),a.innerContainer=ze("div","flatpickr-innerContainer"),a.config.weekNumbers){var p=x(),T=p.weekWrapper,R=p.weekNumbers;a.innerContainer.appendChild(T),a.weekNumbers=R,a.weekWrapper=T}a.rContainer=ze("div","flatpickr-rContainer"),a.rContainer.appendChild(ae()),a.daysContainer||(a.daysContainer=ze("div","flatpickr-days"),a.daysContainer.tabIndex=-1),ve(),a.rContainer.appendChild(a.daysContainer),a.innerContainer.appendChild(a.rContainer),h.appendChild(a.innerContainer)}a.config.enableTime&&h.appendChild(B()),bt(a.calendarContainer,"rangeMode",a.config.mode==="range"),bt(a.calendarContainer,"animate",a.config.animate===!0),bt(a.calendarContainer,"multiMonth",a.config.showMonths>1),a.calendarContainer.appendChild(h);var q=a.config.appendTo!==void 0&&a.config.appendTo.nodeType!==void 0;if((a.config.inline||a.config.static)&&(a.calendarContainer.classList.add(a.config.inline?"inline":"static"),a.config.inline&&(!q&&a.element.parentNode?a.element.parentNode.insertBefore(a.calendarContainer,a._input.nextSibling):a.config.appendTo!==void 0&&a.config.appendTo.appendChild(a.calendarContainer)),a.config.static)){var Z=ze("div","flatpickr-wrapper");a.element.parentNode&&a.element.parentNode.insertBefore(Z,a.element),Z.appendChild(a.element),a.altInput&&Z.appendChild(a.altInput),Z.appendChild(a.calendarContainer)}!a.config.static&&!a.config.inline&&(a.config.appendTo!==void 0?a.config.appendTo:window.document.body).appendChild(a.calendarContainer)}function ne(h,p,T,R){var q=Ae(p,!0),Z=ze("span",h,p.getDate().toString());return Z.dateObj=p,Z.$i=R,Z.setAttribute("aria-label",a.formatDate(p,a.config.ariaDateFormat)),h.indexOf("hidden")===-1&&Ut(p,a.now)===0&&(a.todayDateElem=Z,Z.classList.add("today"),Z.setAttribute("aria-current","date")),q?(Z.tabIndex=-1,on(p)&&(Z.classList.add("selected"),a.selectedDateElem=Z,a.config.mode==="range"&&(bt(Z,"startRange",a.selectedDates[0]&&Ut(p,a.selectedDates[0],!0)===0),bt(Z,"endRange",a.selectedDates[1]&&Ut(p,a.selectedDates[1],!0)===0),h==="nextMonthDay"&&Z.classList.add("inRange")))):Z.classList.add("flatpickr-disabled"),a.config.mode==="range"&&$u(p)&&!on(p)&&Z.classList.add("inRange"),a.weekNumbers&&a.config.showMonths===1&&h!=="prevMonthDay"&&R%7===6&&a.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+a.config.getWeek(p)+"</span>"),_e("onDayCreate",Z),Z}function ee(h){h.focus(),a.config.mode==="range"&&wn(h)}function W(h){for(var p=h>0?0:a.config.showMonths-1,T=h>0?a.config.showMonths:-1,R=p;R!=T;R+=h)for(var q=a.daysContainer.children[R],Z=h>0?0:q.children.length-1,oe=h>0?q.children.length:-1,Q=Z;Q!=oe;Q+=h){var ie=q.children[Q];if(ie.className.indexOf("hidden")===-1&&Ae(ie.dateObj))return ie}}function pe(h,p){for(var T=h.className.indexOf("Month")===-1?h.dateObj.getMonth():a.currentMonth,R=p>0?a.config.showMonths:-1,q=p>0?1:-1,Z=T-a.currentMonth;Z!=R;Z+=q)for(var oe=a.daysContainer.children[Z],Q=T-a.currentMonth===Z?h.$i+p:p<0?oe.children.length-1:0,ie=oe.children.length,F=Q;F>=0&&F<ie&&F!=(p>0?ie:-1);F+=q){var ue=oe.children[F];if(ue.className.indexOf("hidden")===-1&&Ae(ue.dateObj)&&Math.abs(h.$i-F)>=Math.abs(p))return ee(ue)}a.changeMonth(q),Te(W(q),0)}function Te(h,p){var T=d(),R=wt(T||document.body),q=h!==void 0?h:R?T:a.selectedDateElem!==void 0&&wt(a.selectedDateElem)?a.selectedDateElem:a.todayDateElem!==void 0&&wt(a.todayDateElem)?a.todayDateElem:W(p>0?1:-1);q===void 0?a._input.focus():R?pe(q,p):ee(q)}function ye(h,p){for(var T=(new Date(h,p,1).getDay()-a.l10n.firstDayOfWeek+7)%7,R=a.utils.getDaysInMonth((p-1+12)%12,h),q=a.utils.getDaysInMonth(p,h),Z=window.document.createDocumentFragment(),oe=a.config.showMonths>1,Q=oe?"prevMonthDay hidden":"prevMonthDay",ie=oe?"nextMonthDay hidden":"nextMonthDay",F=R+1-T,ue=0;F<=R;F++,ue++)Z.appendChild(ne("flatpickr-day "+Q,new Date(h,p-1,F),F,ue));for(F=1;F<=q;F++,ue++)Z.appendChild(ne("flatpickr-day",new Date(h,p,F),F,ue));for(var He=q+1;He<=42-T&&(a.config.showMonths===1||ue%7!==0);He++,ue++)Z.appendChild(ne("flatpickr-day "+ie,new Date(h,p+1,He%q),He,ue));var jt=ze("div","dayContainer");return jt.appendChild(Z),jt}function ve(){if(a.daysContainer!==void 0){Yu(a.daysContainer),a.weekNumbers&&Yu(a.weekNumbers);for(var h=document.createDocumentFragment(),p=0;p<a.config.showMonths;p++){var T=new Date(a.currentYear,a.currentMonth,1);T.setMonth(a.currentMonth+p),h.appendChild(ye(T.getFullYear(),T.getMonth()))}a.daysContainer.appendChild(h),a.days=a.daysContainer.firstChild,a.config.mode==="range"&&a.selectedDates.length===1&&wn()}}function We(){if(!(a.config.showMonths>1||a.config.monthSelectorType!=="dropdown")){var h=function(R){return a.config.minDate!==void 0&&a.currentYear===a.config.minDate.getFullYear()&&R<a.config.minDate.getMonth()?!1:!(a.config.maxDate!==void 0&&a.currentYear===a.config.maxDate.getFullYear()&&R>a.config.maxDate.getMonth())};a.monthsDropdownContainer.tabIndex=-1,a.monthsDropdownContainer.innerHTML="";for(var p=0;p<12;p++)if(h(p)){var T=ze("option","flatpickr-monthDropdown-month");T.value=new Date(a.currentYear,p).getMonth().toString(),T.textContent=ku(p,a.config.shorthandCurrentMonth,a.l10n),T.tabIndex=-1,a.currentMonth===p&&(T.selected=!0),a.monthsDropdownContainer.appendChild(T)}}}function Ze(){var h=ze("div","flatpickr-month"),p=window.document.createDocumentFragment(),T;a.config.showMonths>1||a.config.monthSelectorType==="static"?T=ze("span","cur-month"):(a.monthsDropdownContainer=ze("select","flatpickr-monthDropdown-months"),a.monthsDropdownContainer.setAttribute("aria-label",a.l10n.monthAriaLabel),Y(a.monthsDropdownContainer,"change",function(oe){var Q=Lt(oe),ie=parseInt(Q.value,10);a.changeMonth(ie-a.currentMonth),_e("onMonthChange")}),We(),T=a.monthsDropdownContainer);var R=Bu("cur-year",{tabindex:"-1"}),q=R.getElementsByTagName("input")[0];q.setAttribute("aria-label",a.l10n.yearAriaLabel),a.config.minDate&&q.setAttribute("min",a.config.minDate.getFullYear().toString()),a.config.maxDate&&(q.setAttribute("max",a.config.maxDate.getFullYear().toString()),q.disabled=!!a.config.minDate&&a.config.minDate.getFullYear()===a.config.maxDate.getFullYear());var Z=ze("div","flatpickr-current-month");return Z.appendChild(T),Z.appendChild(R),p.appendChild(Z),h.appendChild(p),{container:h,yearElement:q,monthElement:T}}function V(){Yu(a.monthNav),a.monthNav.appendChild(a.prevMonthNav),a.config.showMonths&&(a.yearElements=[],a.monthElements=[]);for(var h=a.config.showMonths;h--;){var p=Ze();a.yearElements.push(p.yearElement),a.monthElements.push(p.monthElement),a.monthNav.appendChild(p.container)}a.monthNav.appendChild(a.nextMonthNav)}function M(){return a.monthNav=ze("div","flatpickr-months"),a.yearElements=[],a.monthElements=[],a.prevMonthNav=ze("span","flatpickr-prev-month"),a.prevMonthNav.innerHTML=a.config.prevArrow,a.nextMonthNav=ze("span","flatpickr-next-month"),a.nextMonthNav.innerHTML=a.config.nextArrow,V(),Object.defineProperty(a,"_hidePrevMonthArrow",{get:function(){return a.__hidePrevMonthArrow},set:function(h){a.__hidePrevMonthArrow!==h&&(bt(a.prevMonthNav,"flatpickr-disabled",h),a.__hidePrevMonthArrow=h)}}),Object.defineProperty(a,"_hideNextMonthArrow",{get:function(){return a.__hideNextMonthArrow},set:function(h){a.__hideNextMonthArrow!==h&&(bt(a.nextMonthNav,"flatpickr-disabled",h),a.__hideNextMonthArrow=h)}}),a.currentYearElement=a.yearElements[0],ta(),a.monthNav}function B(){a.calendarContainer.classList.add("hasTime"),a.config.noCalendar&&a.calendarContainer.classList.add("noCalendar");var h=ms(a.config);a.timeContainer=ze("div","flatpickr-time"),a.timeContainer.tabIndex=-1;var p=ze("span","flatpickr-time-separator",":"),T=Bu("flatpickr-hour",{"aria-label":a.l10n.hourAriaLabel});a.hourElement=T.getElementsByTagName("input")[0];var R=Bu("flatpickr-minute",{"aria-label":a.l10n.minuteAriaLabel});if(a.minuteElement=R.getElementsByTagName("input")[0],a.hourElement.tabIndex=a.minuteElement.tabIndex=-1,a.hourElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getHours():a.config.time_24hr?h.hours:E(h.hours)),a.minuteElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getMinutes():h.minutes),a.hourElement.setAttribute("step",a.config.hourIncrement.toString()),a.minuteElement.setAttribute("step",a.config.minuteIncrement.toString()),a.hourElement.setAttribute("min",a.config.time_24hr?"0":"1"),a.hourElement.setAttribute("max",a.config.time_24hr?"23":"12"),a.hourElement.setAttribute("maxlength","2"),a.minuteElement.setAttribute("min","0"),a.minuteElement.setAttribute("max","59"),a.minuteElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(T),a.timeContainer.appendChild(p),a.timeContainer.appendChild(R),a.config.time_24hr&&a.timeContainer.classList.add("time24hr"),a.config.enableSeconds){a.timeContainer.classList.add("hasSeconds");var q=Bu("flatpickr-second");a.secondElement=q.getElementsByTagName("input")[0],a.secondElement.value=Tt(a.latestSelectedDateObj?a.latestSelectedDateObj.getSeconds():h.seconds),a.secondElement.setAttribute("step",a.minuteElement.getAttribute("step")),a.secondElement.setAttribute("min","0"),a.secondElement.setAttribute("max","59"),a.secondElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(ze("span","flatpickr-time-separator",":")),a.timeContainer.appendChild(q)}return a.config.time_24hr||(a.amPM=ze("span","flatpickr-am-pm",a.l10n.amPM[Zt((a.latestSelectedDateObj?a.hourElement.value:a.config.defaultHour)>11)]),a.amPM.title=a.l10n.toggleTitle,a.amPM.tabIndex=-1,a.timeContainer.appendChild(a.amPM)),a.timeContainer}function ae(){a.weekdayContainer?Yu(a.weekdayContainer):a.weekdayContainer=ze("div","flatpickr-weekdays");for(var h=a.config.showMonths;h--;){var p=ze("div","flatpickr-weekdaycontainer");a.weekdayContainer.appendChild(p)}return me(),a.weekdayContainer}function me(){if(a.weekdayContainer){var h=a.l10n.firstDayOfWeek,p=Sg(a.l10n.weekdays.shorthand);h>0&&h<p.length&&(p=Sg(p.splice(h,p.length),p.splice(0,h)));for(var T=a.config.showMonths;T--;)a.weekdayContainer.children[T].innerHTML=`
      <span class='flatpickr-weekday'>
        `+p.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function x(){a.calendarContainer.classList.add("hasWeeks");var h=ze("div","flatpickr-weekwrapper");h.appendChild(ze("span","flatpickr-weekday",a.l10n.weekAbbreviation));var p=ze("div","flatpickr-weeks");return h.appendChild(p),{weekWrapper:h,weekNumbers:p}}function U(h,p){p===void 0&&(p=!0);var T=p?h:h-a.currentMonth;T<0&&a._hidePrevMonthArrow===!0||T>0&&a._hideNextMonthArrow===!0||(a.currentMonth+=T,(a.currentMonth<0||a.currentMonth>11)&&(a.currentYear+=a.currentMonth>11?1:-1,a.currentMonth=(a.currentMonth+12)%12,_e("onYearChange"),We()),ve(),_e("onMonthChange"),ta())}function K(h,p){if(h===void 0&&(h=!0),p===void 0&&(p=!0),a.input.value="",a.altInput!==void 0&&(a.altInput.value=""),a.mobileInput!==void 0&&(a.mobileInput.value=""),a.selectedDates=[],a.latestSelectedDateObj=void 0,p===!0&&(a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth()),a.config.enableTime===!0){var T=ms(a.config),R=T.hours,q=T.minutes,Z=T.seconds;G(R,q,Z)}a.redraw(),h&&_e("onChange")}function X(){a.isOpen=!1,a.isMobile||(a.calendarContainer!==void 0&&a.calendarContainer.classList.remove("open"),a._input!==void 0&&a._input.classList.remove("active")),_e("onClose")}function le(){a.config!==void 0&&_e("onDestroy");for(var h=a._handlers.length;h--;)a._handlers[h].remove();if(a._handlers=[],a.mobileInput)a.mobileInput.parentNode&&a.mobileInput.parentNode.removeChild(a.mobileInput),a.mobileInput=void 0;else if(a.calendarContainer&&a.calendarContainer.parentNode)if(a.config.static&&a.calendarContainer.parentNode){var p=a.calendarContainer.parentNode;if(p.lastChild&&p.removeChild(p.lastChild),p.parentNode){for(;p.firstChild;)p.parentNode.insertBefore(p.firstChild,p);p.parentNode.removeChild(p)}}else a.calendarContainer.parentNode.removeChild(a.calendarContainer);a.altInput&&(a.input.type="text",a.altInput.parentNode&&a.altInput.parentNode.removeChild(a.altInput),delete a.altInput),a.input&&(a.input.type=a.input._type,a.input.classList.remove("flatpickr-input"),a.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(T){try{delete a[T]}catch{}})}function Se(h){return a.calendarContainer.contains(h)}function fe(h){if(a.isOpen&&!a.config.inline){var p=Lt(h),T=Se(p),R=p===a.input||p===a.altInput||a.element.contains(p)||h.path&&h.path.indexOf&&(~h.path.indexOf(a.input)||~h.path.indexOf(a.altInput)),q=!R&&!T&&!Se(h.relatedTarget),Z=!a.config.ignoredFocusElements.some(function(oe){return oe.contains(p)});q&&Z&&(a.config.allowInput&&a.setDate(a._input.value,!1,a.config.altInput?a.config.altFormat:a.config.dateFormat),a.timeContainer!==void 0&&a.minuteElement!==void 0&&a.hourElement!==void 0&&a.input.value!==""&&a.input.value!==void 0&&v(),a.close(),a.config&&a.config.mode==="range"&&a.selectedDates.length===1&&a.clear(!1))}}function at(h){if(!(!h||a.config.minDate&&h<a.config.minDate.getFullYear()||a.config.maxDate&&h>a.config.maxDate.getFullYear())){var p=h,T=a.currentYear!==p;a.currentYear=p||a.currentYear,a.config.maxDate&&a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth=Math.min(a.config.maxDate.getMonth(),a.currentMonth):a.config.minDate&&a.currentYear===a.config.minDate.getFullYear()&&(a.currentMonth=Math.max(a.config.minDate.getMonth(),a.currentMonth)),T&&(a.redraw(),_e("onYearChange"),We())}}function Ae(h,p){var T;p===void 0&&(p=!0);var R=a.parseDate(h,void 0,p);if(a.config.minDate&&R&&Ut(R,a.config.minDate,p!==void 0?p:!a.minDateHasTime)<0||a.config.maxDate&&R&&Ut(R,a.config.maxDate,p!==void 0?p:!a.maxDateHasTime)>0)return!1;if(!a.config.enable&&a.config.disable.length===0)return!0;if(R===void 0)return!1;for(var q=!!a.config.enable,Z=(T=a.config.enable)!==null&&T!==void 0?T:a.config.disable,oe=0,Q=void 0;oe<Z.length;oe++){if(Q=Z[oe],typeof Q=="function"&&Q(R))return q;if(Q instanceof Date&&R!==void 0&&Q.getTime()===R.getTime())return q;if(typeof Q=="string"){var ie=a.parseDate(Q,void 0,!0);return ie&&ie.getTime()===R.getTime()?q:!q}else if(typeof Q=="object"&&R!==void 0&&Q.from&&Q.to&&R.getTime()>=Q.from.getTime()&&R.getTime()<=Q.to.getTime())return q}return!q}function wt(h){return a.daysContainer!==void 0?h.className.indexOf("hidden")===-1&&h.className.indexOf("flatpickr-disabled")===-1&&a.daysContainer.contains(h):!1}function dl(h){var p=h.target===a._input,T=a._input.value.trimEnd()!==Oa();p&&T&&!(h.relatedTarget&&Se(h.relatedTarget))&&a.setDate(a._input.value,!0,h.target===a.altInput?a.config.altFormat:a.config.dateFormat)}function In(h){var p=Lt(h),T=a.config.wrap?s.contains(p):p===a._input,R=a.config.allowInput,q=a.isOpen&&(!R||!T),Z=a.config.inline&&T&&!R;if(h.keyCode===13&&T){if(R)return a.setDate(a._input.value,!0,p===a.altInput?a.config.altFormat:a.config.dateFormat),a.close(),p.blur();a.open()}else if(Se(p)||q||Z){var oe=!!a.timeContainer&&a.timeContainer.contains(p);switch(h.keyCode){case 13:oe?(h.preventDefault(),v(),Ea()):Ti(h);break;case 27:h.preventDefault(),Ea();break;case 8:case 46:T&&!a.config.allowInput&&(h.preventDefault(),a.clear());break;case 37:case 39:if(!oe&&!T){h.preventDefault();var Q=d();if(a.daysContainer!==void 0&&(R===!1||Q&&wt(Q))){var ie=h.keyCode===39?1:-1;h.ctrlKey?(h.stopPropagation(),U(ie),Te(W(1),0)):Te(void 0,ie)}}else a.hourElement&&a.hourElement.focus();break;case 38:case 40:h.preventDefault();var F=h.keyCode===40?1:-1;a.daysContainer&&p.$i!==void 0||p===a.input||p===a.altInput?h.ctrlKey?(h.stopPropagation(),at(a.currentYear-F),Te(W(1),0)):oe||Te(void 0,F*7):p===a.currentYearElement?at(a.currentYear-F):a.config.enableTime&&(!oe&&a.hourElement&&a.hourElement.focus(),v(h),a._debouncedChange());break;case 9:if(oe){var ue=[a.hourElement,a.minuteElement,a.secondElement,a.amPM].concat(a.pluginElements).filter(function(gt){return gt}),He=ue.indexOf(p);if(He!==-1){var jt=ue[He+(h.shiftKey?-1:1)];h.preventDefault(),(jt||a._input).focus()}}else!a.config.noCalendar&&a.daysContainer&&a.daysContainer.contains(p)&&h.shiftKey&&(h.preventDefault(),a._input.focus());break}}if(a.amPM!==void 0&&p===a.amPM)switch(h.key){case a.l10n.amPM[0].charAt(0):case a.l10n.amPM[0].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[0],z(),Ot();break;case a.l10n.amPM[1].charAt(0):case a.l10n.amPM[1].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[1],z(),Ot();break}(T||Se(p))&&_e("onKeyDown",h)}function wn(h,p){if(p===void 0&&(p="flatpickr-day"),!(a.selectedDates.length!==1||h&&(!h.classList.contains(p)||h.classList.contains("flatpickr-disabled")))){for(var T=h?h.dateObj.getTime():a.days.firstElementChild.dateObj.getTime(),R=a.parseDate(a.selectedDates[0],void 0,!0).getTime(),q=Math.min(T,a.selectedDates[0].getTime()),Z=Math.max(T,a.selectedDates[0].getTime()),oe=!1,Q=0,ie=0,F=q;F<Z;F+=Rm.DAY)Ae(new Date(F),!0)||(oe=oe||F>q&&F<Z,F<R&&(!Q||F>Q)?Q=F:F>R&&(!ie||F<ie)&&(ie=F));var ue=Array.from(a.rContainer.querySelectorAll("*:nth-child(-n+"+a.config.showMonths+") > ."+p));ue.forEach(function(He){var jt=He.dateObj,gt=jt.getTime(),Jt=Q>0&&gt<Q||ie>0&&gt>ie;if(Jt){He.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Pt){He.classList.remove(Pt)});return}else if(oe&&!Jt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Pt){He.classList.remove(Pt)}),h!==void 0&&(h.classList.add(T<=a.selectedDates[0].getTime()?"startRange":"endRange"),R<T&&gt===R?He.classList.add("startRange"):R>T&&gt===R&&He.classList.add("endRange"),gt>=Q&&(ie===0||gt<=ie)&&Nm(gt,R,T)&&He.classList.add("inRange"))})}}function gl(){a.isOpen&&!a.config.static&&!a.config.inline&&Pn()}function hl(h,p){if(p===void 0&&(p=a._positionElement),a.isMobile===!0){if(h){h.preventDefault();var T=Lt(h);T&&T.blur()}a.mobileInput!==void 0&&(a.mobileInput.focus(),a.mobileInput.click()),_e("onOpen");return}else if(a._input.disabled||a.config.inline)return;var R=a.isOpen;a.isOpen=!0,R||(a.calendarContainer.classList.add("open"),a._input.classList.add("active"),_e("onOpen"),Pn(p)),a.config.enableTime===!0&&a.config.noCalendar===!0&&a.config.allowInput===!1&&(h===void 0||!a.timeContainer.contains(h.relatedTarget))&&setTimeout(function(){return a.hourElement.select()},50)}function xi(h){return function(p){var T=a.config["_"+h+"Date"]=a.parseDate(p,a.config.dateFormat),R=a.config["_"+(h==="min"?"max":"min")+"Date"];T!==void 0&&(a[h==="min"?"minDateHasTime":"maxDateHasTime"]=T.getHours()>0||T.getMinutes()>0||T.getSeconds()>0),a.selectedDates&&(a.selectedDates=a.selectedDates.filter(function(q){return Ae(q)}),!a.selectedDates.length&&h==="min"&&N(T),Ot()),a.daysContainer&&(Ei(),T!==void 0?a.currentYearElement[h]=T.getFullYear().toString():a.currentYearElement.removeAttribute(h),a.currentYearElement.disabled=!!R&&T!==void 0&&R.getFullYear()===T.getFullYear())}}function Zu(){var h=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],p=mt(mt({},JSON.parse(JSON.stringify(s.dataset||{}))),r),T={};a.config.parseDate=p.parseDate,a.config.formatDate=p.formatDate,Object.defineProperty(a.config,"enable",{get:function(){return a.config._enable},set:function(ue){a.config._enable=dt(ue)}}),Object.defineProperty(a.config,"disable",{get:function(){return a.config._disable},set:function(ue){a.config._disable=dt(ue)}});var R=p.mode==="time";if(!p.dateFormat&&(p.enableTime||R)){var q=$e.defaultConfig.dateFormat||cl.dateFormat;T.dateFormat=p.noCalendar||R?"H:i"+(p.enableSeconds?":S":""):q+" H:i"+(p.enableSeconds?":S":"")}if(p.altInput&&(p.enableTime||R)&&!p.altFormat){var Z=$e.defaultConfig.altFormat||cl.altFormat;T.altFormat=p.noCalendar||R?"h:i"+(p.enableSeconds?":S K":" K"):Z+(" h:i"+(p.enableSeconds?":S":"")+" K")}Object.defineProperty(a.config,"minDate",{get:function(){return a.config._minDate},set:xi("min")}),Object.defineProperty(a.config,"maxDate",{get:function(){return a.config._maxDate},set:xi("max")});var oe=function(ue){return function(He){a.config[ue==="min"?"_minTime":"_maxTime"]=a.parseDate(He,"H:i:S")}};Object.defineProperty(a.config,"minTime",{get:function(){return a.config._minTime},set:oe("min")}),Object.defineProperty(a.config,"maxTime",{get:function(){return a.config._maxTime},set:oe("max")}),p.mode==="time"&&(a.config.noCalendar=!0,a.config.enableTime=!0),Object.assign(a.config,T,p);for(var Q=0;Q<h.length;Q++)a.config[h[Q]]=a.config[h[Q]]===!0||a.config[h[Q]]==="true";ds.filter(function(ue){return a.config[ue]!==void 0}).forEach(function(ue){a.config[ue]=gs(a.config[ue]||[]).map(y)}),a.isMobile=!a.config.disableMobile&&!a.config.inline&&a.config.mode==="single"&&!a.config.disable.length&&!a.config.enable&&!a.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var Q=0;Q<a.config.plugins.length;Q++){var ie=a.config.plugins[Q](a)||{};for(var F in ie)ds.indexOf(F)>-1?a.config[F]=gs(ie[F]).map(y).concat(a.config[F]):typeof p[F]>"u"&&(a.config[F]=ie[F])}p.altInputClass||(a.config.altInputClass=Mt().className+" "+a.config.altInputClass),_e("onParseConfig")}function Mt(){return a.config.wrap?s.querySelector("[data-input]"):s}function Si(){typeof a.config.locale!="object"&&typeof $e.l10ns[a.config.locale]>"u"&&a.config.errorHandler(new Error("flatpickr: invalid locale "+a.config.locale)),a.l10n=mt(mt({},$e.l10ns.default),typeof a.config.locale=="object"?a.config.locale:a.config.locale!=="default"?$e.l10ns[a.config.locale]:void 0),xa.D="("+a.l10n.weekdays.shorthand.join("|")+")",xa.l="("+a.l10n.weekdays.longhand.join("|")+")",xa.M="("+a.l10n.months.shorthand.join("|")+")",xa.F="("+a.l10n.months.longhand.join("|")+")",xa.K="("+a.l10n.amPM[0]+"|"+a.l10n.amPM[1]+"|"+a.l10n.amPM[0].toLowerCase()+"|"+a.l10n.amPM[1].toLowerCase()+")";var h=mt(mt({},r),JSON.parse(JSON.stringify(s.dataset||{})));h.time_24hr===void 0&&$e.defaultConfig.time_24hr===void 0&&(a.config.time_24hr=a.l10n.time_24hr),a.formatDate=Qg(a),a.parseDate=Ds({config:a.config,l10n:a.l10n})}function Pn(h){if(typeof a.config.position=="function")return void a.config.position(a,h);if(a.calendarContainer!==void 0){_e("onPreCalendarPosition");var p=h||a._positionElement,T=Array.prototype.reduce.call(a.calendarContainer.children,function(An,Iu){return An+Iu.offsetHeight},0),R=a.calendarContainer.offsetWidth,q=a.config.position.split(" "),Z=q[0],oe=q.length>1?q[1]:null,Q=p.getBoundingClientRect(),ie=window.innerHeight-Q.bottom,F=Z==="above"||Z!=="below"&&ie<T&&Q.top>T,ue=window.pageYOffset+Q.top+(F?-T-2:p.offsetHeight+2);if(bt(a.calendarContainer,"arrowTop",!F),bt(a.calendarContainer,"arrowBottom",F),!a.config.inline){var He=window.pageXOffset+Q.left,jt=!1,gt=!1;oe==="center"?(He-=(R-Q.width)/2,jt=!0):oe==="right"&&(He-=R-Q.width,gt=!0),bt(a.calendarContainer,"arrowLeft",!jt&&!gt),bt(a.calendarContainer,"arrowCenter",jt),bt(a.calendarContainer,"arrowRight",gt);var Jt=window.document.body.offsetWidth-(window.pageXOffset+Q.right),Pt=He+R>window.document.body.offsetWidth,On=Jt+R>window.document.body.offsetWidth;if(bt(a.calendarContainer,"rightMost",Pt),!a.config.static)if(a.calendarContainer.style.top=ue+"px",!Pt)a.calendarContainer.style.left=He+"px",a.calendarContainer.style.right="auto";else if(!On)a.calendarContainer.style.left="auto",a.calendarContainer.style.right=Jt+"px";else{var en=Di();if(en===void 0)return;var aa=window.document.body.offsetWidth,Cn=Math.max(0,aa/2-R/2),Ie=".flatpickr-calendar.centerMost:before",Mi=".flatpickr-calendar.centerMost:after",Oi=en.cssRules.length,sn="{left:"+Q.left+"px;right:auto;}";bt(a.calendarContainer,"rightMost",!1),bt(a.calendarContainer,"centerMost",!0),en.insertRule(Ie+","+Mi+sn,Oi),a.calendarContainer.style.left=Cn+"px",a.calendarContainer.style.right="auto"}}}}function Di(){for(var h=null,p=0;p<document.styleSheets.length;p++){var T=document.styleSheets[p];if(T.cssRules){try{T.cssRules}catch{continue}h=T;break}}return h??Da()}function Da(){var h=document.createElement("style");return document.head.appendChild(h),h.sheet}function Ei(){a.config.noCalendar||a.isMobile||(We(),ta(),ve())}function Ea(){a._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(a.close,0):a.close()}function Ti(h){h.preventDefault(),h.stopPropagation();var p=function(ue){return ue.classList&&ue.classList.contains("flatpickr-day")&&!ue.classList.contains("flatpickr-disabled")&&!ue.classList.contains("notAllowed")},T=Xg(Lt(h),p);if(T!==void 0){var R=T,q=a.latestSelectedDateObj=new Date(R.dateObj.getTime()),Z=(q.getMonth()<a.currentMonth||q.getMonth()>a.currentMonth+a.config.showMonths-1)&&a.config.mode!=="range";if(a.selectedDateElem=R,a.config.mode==="single")a.selectedDates=[q];else if(a.config.mode==="multiple"){var oe=on(q);oe?a.selectedDates.splice(parseInt(oe),1):a.selectedDates.push(q)}else a.config.mode==="range"&&(a.selectedDates.length===2&&a.clear(!1,!1),a.latestSelectedDateObj=q,a.selectedDates.push(q),Ut(q,a.selectedDates[0],!0)!==0&&a.selectedDates.sort(function(ue,He){return ue.getTime()-He.getTime()}));if(z(),Z){var Q=a.currentYear!==q.getFullYear();a.currentYear=q.getFullYear(),a.currentMonth=q.getMonth(),Q&&(_e("onYearChange"),We()),_e("onMonthChange")}if(ta(),ve(),Ot(),!Z&&a.config.mode!=="range"&&a.config.showMonths===1?ee(R):a.selectedDateElem!==void 0&&a.hourElement===void 0&&a.selectedDateElem&&a.selectedDateElem.focus(),a.hourElement!==void 0&&a.hourElement!==void 0&&a.hourElement.focus(),a.config.closeOnSelect){var ie=a.config.mode==="single"&&!a.config.enableTime,F=a.config.mode==="range"&&a.selectedDates.length===2&&!a.config.enableTime;(ie||F)&&Ea()}J()}}var Ta={locale:[Si,me],showMonths:[V,D,ae],minDate:[ce],maxDate:[ce],positionElement:[wi],clickOpens:[function(){a.config.clickOpens===!0?(Y(a._input,"focus",a.open),Y(a._input,"click",a.open)):(a._input.removeEventListener("focus",a.open),a._input.removeEventListener("click",a.open))}]};function ea(h,p){if(h!==null&&typeof h=="object"){Object.assign(a.config,h);for(var T in h)Ta[T]!==void 0&&Ta[T].forEach(function(R){return R()})}else a.config[h]=p,Ta[h]!==void 0?Ta[h].forEach(function(R){return R()}):ds.indexOf(h)>-1&&(a.config[h]=gs(p));a.redraw(),Ot(!0)}function ft(h,p){var T=[];if(h instanceof Array)T=h.map(function(R){return a.parseDate(R,p)});else if(h instanceof Date||typeof h=="number")T=[a.parseDate(h,p)];else if(typeof h=="string")switch(a.config.mode){case"single":case"time":T=[a.parseDate(h,p)];break;case"multiple":T=h.split(a.config.conjunction).map(function(R){return a.parseDate(R,p)});break;case"range":T=h.split(a.l10n.rangeSeparator).map(function(R){return a.parseDate(R,p)});break}else a.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(h)));a.selectedDates=a.config.allowInvalidPreload?T:T.filter(function(R){return R instanceof Date&&Ae(R,!1)}),a.config.mode==="range"&&a.selectedDates.sort(function(R,q){return R.getTime()-q.getTime()})}function It(h,p,T){if(p===void 0&&(p=!1),T===void 0&&(T=a.config.dateFormat),h!==0&&!h||h instanceof Array&&h.length===0)return a.clear(p);ft(h,T),a.latestSelectedDateObj=a.selectedDates[a.selectedDates.length-1],a.redraw(),ce(void 0,p),N(),a.selectedDates.length===0&&a.clear(!1),Ot(p),p&&_e("onChange")}function dt(h){return h.slice().map(function(p){return typeof p=="string"||typeof p=="number"||p instanceof Date?a.parseDate(p,void 0,!0):p&&typeof p=="object"&&p.from&&p.to?{from:a.parseDate(p.from,void 0),to:a.parseDate(p.to,void 0)}:p}).filter(function(p){return p})}function Ju(){a.selectedDates=[],a.now=a.parseDate(a.config.now)||new Date;var h=a.config.defaultDate||((a.input.nodeName==="INPUT"||a.input.nodeName==="TEXTAREA")&&a.input.placeholder&&a.input.value===a.input.placeholder?null:a.input.value);h&&ft(h,a.config.dateFormat),a._initialDate=a.selectedDates.length>0?a.selectedDates[0]:a.config.minDate&&a.config.minDate.getTime()>a.now.getTime()?a.config.minDate:a.config.maxDate&&a.config.maxDate.getTime()<a.now.getTime()?a.config.maxDate:a.now,a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth(),a.selectedDates.length>0&&(a.latestSelectedDateObj=a.selectedDates[0]),a.config.minTime!==void 0&&(a.config.minTime=a.parseDate(a.config.minTime,"H:i")),a.config.maxTime!==void 0&&(a.config.maxTime=a.parseDate(a.config.maxTime,"H:i")),a.minDateHasTime=!!a.config.minDate&&(a.config.minDate.getHours()>0||a.config.minDate.getMinutes()>0||a.config.minDate.getSeconds()>0),a.maxDateHasTime=!!a.config.maxDate&&(a.config.maxDate.getHours()>0||a.config.maxDate.getMinutes()>0||a.config.maxDate.getSeconds()>0)}function Fu(){if(a.input=Mt(),!a.input){a.config.errorHandler(new Error("Invalid input element specified"));return}a.input._type=a.input.type,a.input.type="text",a.input.classList.add("flatpickr-input"),a._input=a.input,a.config.altInput&&(a.altInput=ze(a.input.nodeName,a.config.altInputClass),a._input=a.altInput,a.altInput.placeholder=a.input.placeholder,a.altInput.disabled=a.input.disabled,a.altInput.required=a.input.required,a.altInput.tabIndex=a.input.tabIndex,a.altInput.type="text",a.input.setAttribute("type","hidden"),!a.config.static&&a.input.parentNode&&a.input.parentNode.insertBefore(a.altInput,a.input.nextSibling)),a.config.allowInput||a._input.setAttribute("readonly","readonly"),wi()}function wi(){a._positionElement=a.config.positionElement||a._input}function wa(){var h=a.config.enableTime?a.config.noCalendar?"time":"datetime-local":"date";a.mobileInput=ze("input",a.input.className+" flatpickr-mobile"),a.mobileInput.tabIndex=1,a.mobileInput.type=h,a.mobileInput.disabled=a.input.disabled,a.mobileInput.required=a.input.required,a.mobileInput.placeholder=a.input.placeholder,a.mobileFormatStr=h==="datetime-local"?"Y-m-d\\TH:i:S":h==="date"?"Y-m-d":"H:i:S",a.selectedDates.length>0&&(a.mobileInput.defaultValue=a.mobileInput.value=a.formatDate(a.selectedDates[0],a.mobileFormatStr)),a.config.minDate&&(a.mobileInput.min=a.formatDate(a.config.minDate,"Y-m-d")),a.config.maxDate&&(a.mobileInput.max=a.formatDate(a.config.maxDate,"Y-m-d")),a.input.getAttribute("step")&&(a.mobileInput.step=String(a.input.getAttribute("step"))),a.input.type="hidden",a.altInput!==void 0&&(a.altInput.type="hidden");try{a.input.parentNode&&a.input.parentNode.insertBefore(a.mobileInput,a.input.nextSibling)}catch{}Y(a.mobileInput,"change",function(p){a.setDate(Lt(p).value,!1,a.mobileFormatStr),_e("onChange"),_e("onClose")})}function Ma(h){if(a.isOpen===!0)return a.close();a.open(h)}function _e(h,p){if(a.config!==void 0){var T=a.config[h];if(T!==void 0&&T.length>0)for(var R=0;T[R]&&R<T.length;R++)T[R](a.selectedDates,a.input.value,a,p);h==="onChange"&&(a.input.dispatchEvent(Mn("change")),a.input.dispatchEvent(Mn("input")))}}function Mn(h){var p=document.createEvent("Event");return p.initEvent(h,!0,!0),p}function on(h){for(var p=0;p<a.selectedDates.length;p++){var T=a.selectedDates[p];if(T instanceof Date&&Ut(T,h)===0)return""+p}return!1}function $u(h){return a.config.mode!=="range"||a.selectedDates.length<2?!1:Ut(h,a.selectedDates[0])>=0&&Ut(h,a.selectedDates[1])<=0}function ta(){a.config.noCalendar||a.isMobile||!a.monthNav||(a.yearElements.forEach(function(h,p){var T=new Date(a.currentYear,a.currentMonth,1);T.setMonth(a.currentMonth+p),a.config.showMonths>1||a.config.monthSelectorType==="static"?a.monthElements[p].textContent=ku(T.getMonth(),a.config.shorthandCurrentMonth,a.l10n)+" ":a.monthsDropdownContainer.value=T.getMonth().toString(),h.value=T.getFullYear().toString()}),a._hidePrevMonthArrow=a.config.minDate!==void 0&&(a.currentYear===a.config.minDate.getFullYear()?a.currentMonth<=a.config.minDate.getMonth():a.currentYear<a.config.minDate.getFullYear()),a._hideNextMonthArrow=a.config.maxDate!==void 0&&(a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth+1>a.config.maxDate.getMonth():a.currentYear>a.config.maxDate.getFullYear()))}function Oa(h){var p=h||(a.config.altInput?a.config.altFormat:a.config.dateFormat);return a.selectedDates.map(function(T){return a.formatDate(T,p)}).filter(function(T,R,q){return a.config.mode!=="range"||a.config.enableTime||q.indexOf(T)===R}).join(a.config.mode!=="range"?a.config.conjunction:a.l10n.rangeSeparator)}function Ot(h){h===void 0&&(h=!0),a.mobileInput!==void 0&&a.mobileFormatStr&&(a.mobileInput.value=a.latestSelectedDateObj!==void 0?a.formatDate(a.latestSelectedDateObj,a.mobileFormatStr):""),a.input.value=Oa(a.config.dateFormat),a.altInput!==void 0&&(a.altInput.value=Oa(a.config.altFormat)),h!==!1&&_e("onValueUpdate")}function na(h){var p=Lt(h),T=a.prevMonthNav.contains(p),R=a.nextMonthNav.contains(p);T||R?U(T?-1:1):a.yearElements.indexOf(p)>=0?p.select():p.classList.contains("arrowUp")?a.changeYear(a.currentYear+1):p.classList.contains("arrowDown")&&a.changeYear(a.currentYear-1)}function Wu(h){h.preventDefault();var p=h.type==="keydown",T=Lt(h),R=T;a.amPM!==void 0&&T===a.amPM&&(a.amPM.textContent=a.l10n.amPM[Zt(a.amPM.textContent===a.l10n.amPM[0])]);var q=parseFloat(R.getAttribute("min")),Z=parseFloat(R.getAttribute("max")),oe=parseFloat(R.getAttribute("step")),Q=parseInt(R.value,10),ie=h.delta||(p?h.which===38?1:-1:0),F=Q+oe*ie;if(typeof R.value<"u"&&R.value.length===2){var ue=R===a.hourElement,He=R===a.minuteElement;F<q?(F=Z+F+Zt(!ue)+(Zt(ue)&&Zt(!a.amPM)),He&&Ee(void 0,-1,a.hourElement)):F>Z&&(F=R===a.hourElement?F-Z-Zt(!a.amPM):q,He&&Ee(void 0,1,a.hourElement)),a.amPM&&ue&&(oe===1?F+Q===23:Math.abs(F-Q)>oe)&&(a.amPM.textContent=a.l10n.amPM[Zt(a.amPM.textContent===a.l10n.amPM[0])]),R.value=Tt(F)}}return f(),a}function fl(s,r){for(var a=Array.prototype.slice.call(s).filter(function(y){return y instanceof HTMLElement}),o=[],f=0;f<a.length;f++){var d=a[f];try{if(d.getAttribute("data-fp-omit")!==null)continue;d._flatpickr!==void 0&&(d._flatpickr.destroy(),d._flatpickr=void 0),d._flatpickr=Hm(d,r||{}),o.push(d._flatpickr)}catch(y){console.error(y)}}return o.length===1?o[0]:o}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(s){return fl(this,s)},HTMLElement.prototype.flatpickr=function(s){return fl([this],s)});var $e=function(s,r){return typeof s=="string"?fl(window.document.querySelectorAll(s),r):s instanceof Node?fl([s],r):fl(s,r)};$e.defaultConfig={};$e.l10ns={en:mt({},vi),default:mt({},vi)};$e.localize=function(s){$e.l10ns.default=mt(mt({},$e.l10ns.default),s)};$e.setDefaults=function(s){$e.defaultConfig=mt(mt({},$e.defaultConfig),s)};$e.parseDate=Ds({});$e.formatDate=Qg({});$e.compareDates=Ut;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(s){return fl(this,s)});Date.prototype.fp_incr=function(s){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof s=="string"?parseInt(s,10):s))};typeof window<"u"&&(window.flatpickr=$e);const Lm=["onCreate","onDestroy"],Es=["onChange","onOpen","onClose","onMonthChange","onYearChange","onReady","onValueUpdate","onDayCreate"],Um=(s,r)=>(Es.forEach(a=>{const o=r[a],f=s[a];if(o){f&&!Array.isArray(f)?s[a]=[s[a]]:s[a]||(s[a]=[]);const d=Array.isArray(o)?o:[o];s[a].length===0?s[a]=d:s[a].push(...d)}}),Es.forEach(a=>{delete r[a]}),Lm.forEach(a=>{delete r[a]}),s),jm=s=>{const r=qe.useMemo(()=>({...s}),[s]),{defaultValue:a,options:o={},value:f,children:d,render:y}=r,D=qe.useMemo(()=>Um(o,r),[o,r]),v=qe.useRef(null),m=qe.useRef(void 0);qe.useImperativeHandle(s.ref,()=>({get flatpickr(){return m.current}}),[]),qe.useEffect(()=>{var N;const G=()=>{var Y;D.onClose=D.onClose||(()=>{var J;(J=v.current)!=null&&J.blur&&v.current.blur()}),m.current=(((Y=$e)==null?void 0:Y.default)||$e)(v.current,D),m.current&&f!==void 0&&m.current.setDate(f,!1),s.onCreate&&s.onCreate(m.current)},k=()=>{s.onDestroy&&s.onDestroy(m.current),m.current&&m.current.destroy(),m.current=void 0};if(G(),m.current){const Y=Object.getOwnPropertyNames(D);for(let J=Y.length-1;J>=0;J--){const Oe=Y[J];let ce=D[Oe];(ce==null?void 0:ce.toString())!==((N=m.current.config[Oe])==null?void 0:N.toString())&&(Es.includes(Oe)&&!Array.isArray(ce)&&(ce=[ce]),m.current.set(Oe,ce))}f!==void 0&&f!==m.current.input.value&&m.current.setDate(f,!1)}return()=>{k()}},[D,o,r,f,s]);const E=qe.useCallback(N=>{v.current=N},[]);if(y)return y({...r,defaultValue:a,value:f},E);const z=qe.useCallback(N=>{var G,k;s&&s.onChange&&(Array.isArray(s==null?void 0:s.onChange)?(G=s==null?void 0:s.onChange)==null||G.forEach(()=>[new Date(N.target.value)],(f==null?void 0:f.toString())||""):typeof s.onChange=="function"&&((k=s==null?void 0:s.onChange)==null||k.call(s,[new Date(N.target.value)],(f==null?void 0:f.toString())||"",m.current)))},[s,f]);return o.wrap?$.jsx("div",{className:"flatpickr",ref:E,children:d}):$.jsx("input",{onChange:z,...r,value:f==null?void 0:f.toString(),defaultValue:a,ref:E})};var fi={exports:{}},Ym=fi.exports,Dg;function Bm(){return Dg||(Dg=1,function(s,r){(function(a,o){o(r)})(Ym,function(a){var o={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(f){var d=f%100;if(d>3&&d<21)return"th";switch(d%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1};a.default=o,a.english=o,Object.defineProperty(a,"__esModule",{value:!0})})}(fi,fi.exports)),fi.exports}var qm=Bm();const Kg=nm(qm);var di={exports:{}},km=di.exports,Eg;function Gm(){return Eg||(Eg=1,function(s,r){(function(a,o){o(r)})(km,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},firstDayOfWeek:1,weekAbbreviation:"wk",rangeSeparator:" t/m ",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",time_24hr:!0,ordinal:function(y){return y===1||y===8||y>=20?"ste":"de"}};o.l10ns.nl=f;var d=o.l10ns;a.Dutch=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(di,di.exports)),di.exports}var Vm=Gm(),gi={exports:{}},Xm=gi.exports,Tg;function Qm(){return Tg||(Tg=1,function(s,r){(function(a,o){o(r)})(Xm,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={firstDayOfWeek:1,weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},ordinal:function(y){return y>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",time_24hr:!0};o.l10ns.fr=f;var d=o.l10ns;a.French=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(gi,gi.exports)),gi.exports}var Km=Qm(),hi={exports:{}},Zm=hi.exports,wg;function Jm(){return wg||(wg=1,function(s,r){(function(a,o){o(r)})(Zm,function(a){var o=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},f={weekdays:{shorthand:["So","Mo","Di","Mi","Do","Fr","Sa"],longhand:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},months:{shorthand:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],longhand:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},firstDayOfWeek:1,weekAbbreviation:"KW",rangeSeparator:" bis ",scrollTitle:"Zum Ändern scrollen",toggleTitle:"Zum Umschalten klicken",time_24hr:!0};o.l10ns.de=f;var d=o.l10ns;a.German=f,a.default=d,Object.defineProperty(a,"__esModule",{value:!0})})}(hi,hi.exports)),hi.exports}var Fm=Jm();const $m={nl:Vm.Dutch,fr:Km.French,de:Fm.German,en:Kg},Wm=({value:s,onChange:r,options:a})=>{const{i18n:o}=yi(),f=s instanceof Date&&!isNaN(s)?s:new Date;return $.jsx(jm,{value:f,onChange:d=>r(d[0]||new Date),options:{...a,dateFormat:"d-m-Y",locale:$m[o.language]||Kg,allowInput:!0},className:"input max-w-28"})};function Im({title:s,subtitle:r,selectedDate:a,onDateChange:o}){const{i18n:f}=yi(),d=[{code:"nl",label:"NL"},{code:"fr",label:"FR"},{code:"de",label:"DE"},{code:"en",label:"EN"}];return $.jsx($.Fragment,{children:$.jsxs("div",{id:"app-header",className:"repel | flex-wrap gap-4 mb-7",children:[$.jsxs("h1",{className:"text-3xl text-primary",children:[$.jsxs("span",{className:"font-bold",children:[s," "]}),$.jsxs("span",{className:"font-light",children:[r," "]})]}),$.jsxs("div",{className:"repel | gap-8",children:[$.jsxs("div",{className:"repel | place-items-center gap-2",children:[$.jsx("span",{className:"icon-[tabler--calendar-week] text-secondary size-7"}),$.jsx(Wm,{value:a,onChange:o})]}),$.jsx("div",{className:"join",children:d.map(y=>$.jsx("button",{onClick:()=>f.changeLanguage(y.code),className:`btn join-item ${f.language===y.code?"btn-primary":"btn-secondary"}`,children:y.label},y.code))})]})]})})}function Pm(s){const{t:r}=yi(),a={"Featured News":"sectionFeatured","Euro Tip":"sectionEuroTip","HR Tip":"sectionHrTip",Trainings:"sectionTrainings","Sector News":"sectionSectorNews","Other News":"sectionOtherNews"};return $.jsx("header",{className:"card-header flex justify-between items-center bg-primary-content py-5",children:$.jsx("h2",{className:"card-title",children:r(a[s.title])||s.title})})}function e0({label:s,id:r,name:a,type:o="text",required:f=!1,placeholder:d,rows:y,value:D,onChange:v}){const m=E=>{E.target.select()};return $.jsx($.Fragment,{children:$.jsxs("div",{className:"input-floating textarea-floating flex flex-col",children:[$.jsxs("label",{className:"input-floating-label textarea-floating-label z-10",htmlFor:r,children:[s,f&&$.jsx("span",{"aria-hidden":"true",style:{color:"red"},children:"*"})]}),o==="textarea"?$.jsx("textarea",{className:"textarea mb-2",id:r,name:a,placeholder:d,rows:y,required:f,"aria-required":f?"true":void 0,value:D,onChange:v,onFocus:m}):$.jsx("input",{className:"input mb-2",type:o,id:r,name:a,placeholder:d,required:f,"aria-required":f?"true":void 0,value:D,onChange:v,onFocus:m})]})})}function t0({id:s,index:r,onRemove:a,onClear:o}){return $.jsxs("header",{className:"card-header flex justify-between items-center bg-primary-content py-4.5",children:[$.jsxs("h3",{className:"card-title text-lg",children:["Item ",r+1]}),$.jsxs("div",{className:"card-actions flex gap-0.5 sm:gap-3 flex-nowrap",children:[$.jsxs("div",{className:"tooltip",children:[$.jsx("button",{type:"button",onClick:o,className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Clear",children:$.jsx("span",{className:"icon-[tabler--eraser] size-5"})}),$.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:$.jsx("span",{className:"tooltip-body",children:"Clear"})})]}),$.jsxs("div",{className:"tooltip",children:[$.jsx("button",{type:"button",onClick:()=>a(s),className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Remove Button",children:$.jsx("span",{className:"icon-[tabler--trash] size-5"})}),$.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:$.jsx("span",{className:"tooltip-body",children:"Remove"})})]})]})]})}const n0={complex:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Summary",id:"summary",name:"summary",type:"textarea",required:!0,placeholder:"Explain what the article is about in a few sentences",rows:3},{label:"CTA",id:"cta",name:"cta",required:!0,placeholder:"Suggest a call to action (e.g., Read more)"}],training:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Title of the training"},{label:"Date",id:"date",name:"date",required:!0,placeholder:"E.g., 1 Jan. 2025"},{label:"Time",id:"time",name:"time",required:!0,placeholder:"E.g., 9:00 - 12:00"},{label:"Format",id:"format",name:"format",required:!0,placeholder:"E.g., Online, Blended, On-Site in Brussels"},{label:"Price",id:"price",name:"price",type:"number",required:!0,placeholder:"E.g., 400"}],simple:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Header",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Subheader",id:"subtitle",name:"subtitle",required:!1,placeholder:"Optional: write a subtitle"}]};function a0({fieldsetType:s,id:r,index:a,onRemove:o,values:f,onFieldChange:d}){const y=n0[s]||[],D=()=>{const v={};y.forEach(m=>{v[m.name]=""}),d(r,v)};return $.jsx($.Fragment,{children:$.jsxs("fieldset",{className:"card bg-transparent overflow-hidden",children:[$.jsx(t0,{id:r,index:a,onRemove:o,onClear:D}),$.jsx("div",{className:"card-body flex flex-col p-6 pb-4 gap-4 bg-white/75",children:y.map(v=>$.jsx(e0,{...v,value:f&&f[v.name]||"",onChange:m=>d(r,v.name,m.target.value)},v.id))})]})})}function l0({id:s,title:r,fieldsetType:a,fieldsets:o,onAddFieldset:f,onRemove:d,onFieldChange:y}){return $.jsxs("section",{className:"card w-full bg-transparent overflow-hidden",children:[$.jsx(Pm,{title:r}),$.jsx("div",{className:"card-body flex flex-col py-0 gap-6 bg-white/50",children:o.map((D,v)=>$.jsx(a0,{fieldsetType:a,id:D.id,index:v,onRemove:d,onFieldChange:y,values:D},D.id))}),$.jsx("div",{className:"card-actions justify-center",children:$.jsxs("button",{type:"button",onClick:()=>f(s),className:"btn btn-block btn-secondary rounded-t-none",children:[$.jsx("span",{className:"icon-[tabler--plus] size-4.5 shrink-0"}),"Add item"]})})]})}function i0({sections:s,onAddFieldset:r,onRemove:a,onFieldChange:o}){return $.jsx("div",{className:"form-wrapper",children:$.jsx("form",{className:"flex flex-col gap-y-6",children:s.map(f=>$.jsx(l0,{id:f.id,title:f.title,fieldsetType:f.fieldsetType,onAddFieldset:r,onRemove:a,onFieldChange:o,fieldsets:f.fieldsets},f.id))})})}function u0({html:s,onCopy:r,isCopied:a}){const o=!navigator.clipboard||!s;return $.jsxs("div",{className:"card w-full overflow-hidden",children:[$.jsx("div",{className:"card-actions justify-center",children:$.jsxs("button",{type:"button",className:"btn btn-block btn-primary rounded-b-none h-12",onClick:r,disabled:o,children:[$.jsx("span",{className:"icon-[tabler--copy] size-4.5 shrink-0"}),a?"Copied!":"Copy HTML"]})}),$.jsx("iframe",{className:"h-svh",srcDoc:s,sandbox:"",loading:"lazy"})]})}const Mg=[{title:"Featured News",fieldsetType:"complex",fieldsets:[{url:"#",title:"Lorem ipsum dolor",summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"}]},{title:"Euro Tip",fieldsetType:"complex",fieldsets:[]},{title:"HR Tip",fieldsetType:"complex",fieldsets:[]},{title:"Trainings",fieldsetType:"training",fieldsets:[]},{title:"Sector News",fieldsetType:"simple",fieldsets:[{url:"#",title:"JC 123.456 | Sector name",subtitle:"Lorem ipsum dolor sit amet"}]},{title:"Other News",fieldsetType:"simple",fieldsets:[{url:"#",title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet"}]}],ct=[];for(let s=0;s<256;++s)ct.push((s+256).toString(16).slice(1));function r0(s,r=0){return(ct[s[r+0]]+ct[s[r+1]]+ct[s[r+2]]+ct[s[r+3]]+"-"+ct[s[r+4]]+ct[s[r+5]]+"-"+ct[s[r+6]]+ct[s[r+7]]+"-"+ct[s[r+8]]+ct[s[r+9]]+"-"+ct[s[r+10]]+ct[s[r+11]]+ct[s[r+12]]+ct[s[r+13]]+ct[s[r+14]]+ct[s[r+15]]).toLowerCase()}let ys;const o0=new Uint8Array(16);function s0(){if(!ys){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ys=crypto.getRandomValues.bind(crypto)}return ys(o0)}const c0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Og={randomUUID:c0};function si(s,r,a){var f;if(Og.randomUUID&&!s)return Og.randomUUID();s=s||{};const o=s.random??((f=s.rng)==null?void 0:f.call(s))??s0();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,r0(o)}const he=s=>typeof s=="string",ci=()=>{let s,r;const a=new Promise((o,f)=>{s=o,r=f});return a.resolve=s,a.reject=r,a},Cg=s=>s==null?"":""+s,f0=(s,r,a)=>{s.forEach(o=>{r[o]&&(a[o]=r[o])})},d0=/###/g,Ag=s=>s&&s.indexOf("###")>-1?s.replace(d0,"."):s,Ng=s=>!s||he(s),mi=(s,r,a)=>{const o=he(r)?r.split("."):r;let f=0;for(;f<o.length-1;){if(Ng(s))return{};const d=Ag(o[f]);!s[d]&&a&&(s[d]=new a),Object.prototype.hasOwnProperty.call(s,d)?s=s[d]:s={},++f}return Ng(s)?{}:{obj:s,k:Ag(o[f])}},_g=(s,r,a)=>{const{obj:o,k:f}=mi(s,r,Object);if(o!==void 0||r.length===1){o[f]=a;return}let d=r[r.length-1],y=r.slice(0,r.length-1),D=mi(s,y,Object);for(;D.obj===void 0&&y.length;)d=`${y[y.length-1]}.${d}`,y=y.slice(0,y.length-1),D=mi(s,y,Object),D!=null&&D.obj&&typeof D.obj[`${D.k}.${d}`]<"u"&&(D.obj=void 0);D.obj[`${D.k}.${d}`]=a},g0=(s,r,a,o)=>{const{obj:f,k:d}=mi(s,r,Object);f[d]=f[d]||[],f[d].push(a)},Gu=(s,r)=>{const{obj:a,k:o}=mi(s,r);if(a&&Object.prototype.hasOwnProperty.call(a,o))return a[o]},h0=(s,r,a)=>{const o=Gu(s,a);return o!==void 0?o:Gu(r,a)},Zg=(s,r,a)=>{for(const o in r)o!=="__proto__"&&o!=="constructor"&&(o in s?he(s[o])||s[o]instanceof String||he(r[o])||r[o]instanceof String?a&&(s[o]=r[o]):Zg(s[o],r[o],a):s[o]=r[o]);return s},ol=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var p0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const m0=s=>he(s)?s.replace(/[&<>"'\/]/g,r=>p0[r]):s;class y0{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const a=this.regExpMap.get(r);if(a!==void 0)return a;const o=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,o),this.regExpQueue.push(r),o}}const v0=[" ",",","?","!",";"],b0=new y0(20),x0=(s,r,a)=>{r=r||"",a=a||"";const o=v0.filter(y=>r.indexOf(y)<0&&a.indexOf(y)<0);if(o.length===0)return!0;const f=b0.getRegExp(`(${o.map(y=>y==="?"?"\\?":y).join("|")})`);let d=!f.test(s);if(!d){const y=s.indexOf(a);y>0&&!f.test(s.substring(0,y))&&(d=!0)}return d},Ts=function(s,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[r])return Object.prototype.hasOwnProperty.call(s,r)?s[r]:void 0;const o=r.split(a);let f=s;for(let d=0;d<o.length;){if(!f||typeof f!="object")return;let y,D="";for(let v=d;v<o.length;++v)if(v!==d&&(D+=a),D+=o[v],y=f[D],y!==void 0){if(["string","number","boolean"].indexOf(typeof y)>-1&&v<o.length-1)continue;d+=v-d+1;break}f=y}return f},Vu=s=>s==null?void 0:s.replace("_","-"),S0={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,r){var a,o;(o=(a=console==null?void 0:console[s])==null?void 0:a.apply)==null||o.call(a,console,r)}};class Xu{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(r,a)}init(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=r||S0,this.options=a,this.debug=a.debug}log(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"log","",!0)}warn(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"warn","",!0)}error(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"error","")}deprecate(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(r,a,o,f){return f&&!this.debug?null:(he(r[0])&&(r[0]=`${o}${this.prefix} ${r[0]}`),this.logger[a](r))}create(r){return new Xu(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new Xu(this.logger,r)}}var rn=new Xu;class Ku{constructor(){this.observers={}}on(r,a){return r.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const f=this.observers[o].get(a)||0;this.observers[o].set(a,f+1)}),this}off(r,a){if(this.observers[r]){if(!a){delete this.observers[r];return}this.observers[r].delete(a)}}emit(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),f=1;f<a;f++)o[f-1]=arguments[f];this.observers[r]&&Array.from(this.observers[r].entries()).forEach(y=>{let[D,v]=y;for(let m=0;m<v;m++)D(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(y=>{let[D,v]=y;for(let m=0;m<v;m++)D.apply(D,[r,...o])})}}class Rg extends Ku{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=r||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const a=this.options.ns.indexOf(r);a>-1&&this.options.ns.splice(a,1)}getResource(r,a,o){var m,E;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const d=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator,y=f.ignoreJSONStructure!==void 0?f.ignoreJSONStructure:this.options.ignoreJSONStructure;let D;r.indexOf(".")>-1?D=r.split("."):(D=[r,a],o&&(Array.isArray(o)?D.push(...o):he(o)&&d?D.push(...o.split(d)):D.push(o)));const v=Gu(this.data,D);return!v&&!a&&!o&&r.indexOf(".")>-1&&(r=D[0],a=D[1],o=D.slice(2).join(".")),v||!y||!he(o)?v:Ts((E=(m=this.data)==null?void 0:m[r])==null?void 0:E[a],o,d)}addResource(r,a,o,f){let d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const y=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator;let D=[r,a];o&&(D=D.concat(y?o.split(y):o)),r.indexOf(".")>-1&&(D=r.split("."),f=a,a=D[1]),this.addNamespaces(a),_g(this.data,D,f),d.silent||this.emit("added",r,a,o,f)}addResources(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const d in o)(he(o[d])||Array.isArray(o[d]))&&this.addResource(r,a,d,o[d],{silent:!0});f.silent||this.emit("added",r,a,o)}addResourceBundle(r,a,o,f,d){let y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},D=[r,a];r.indexOf(".")>-1&&(D=r.split("."),f=o,o=a,a=D[1]),this.addNamespaces(a);let v=Gu(this.data,D)||{};y.skipCopy||(o=JSON.parse(JSON.stringify(o))),f?Zg(v,o,d):v={...v,...o},_g(this.data,D,v),y.silent||this.emit("added",r,a,o)}removeResourceBundle(r,a){this.hasResourceBundle(r,a)&&delete this.data[r][a],this.removeNamespaces(a),this.emit("removed",r,a)}hasResourceBundle(r,a){return this.getResource(r,a)!==void 0}getResourceBundle(r,a){return a||(a=this.options.defaultNS),this.getResource(r,a)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const a=this.getDataByLanguage(r);return!!(a&&Object.keys(a)||[]).find(f=>a[f]&&Object.keys(a[f]).length>0)}toJSON(){return this.data}}var Jg={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,r,a,o,f){return s.forEach(d=>{var y;r=((y=this.processors[d])==null?void 0:y.process(r,a,o,f))??r}),r}};const zg={},Hg=s=>!he(s)&&typeof s!="boolean"&&typeof s!="number";class Qu extends Ku{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),f0(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=rn.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(r==null)return!1;const o=this.resolve(r,a);return(o==null?void 0:o.res)!==void 0}extractFromKey(r,a){let o=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let d=a.ns||this.options.defaultNS||[];const y=o&&r.indexOf(o)>-1,D=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!x0(r,o,f);if(y&&!D){const v=r.match(this.interpolator.nestingRegexp);if(v&&v.length>0)return{key:r,namespaces:he(d)?[d]:d};const m=r.split(o);(o!==f||o===f&&this.options.ns.indexOf(m[0])>-1)&&(d=m.shift()),r=m.join(f)}return{key:r,namespaces:he(d)?[d]:d}}translate(r,a,o){if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(a={...a}),a||(a={}),r==null)return"";Array.isArray(r)||(r=[String(r)]);const f=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,d=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:y,namespaces:D}=this.extractFromKey(r[r.length-1],a),v=D[D.length-1],m=a.lng||this.language,E=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(E){const ye=a.nsSeparator||this.options.nsSeparator;return f?{res:`${v}${ye}${y}`,usedKey:y,exactUsedKey:y,usedLng:m,usedNS:v,usedParams:this.getUsedParamsDetails(a)}:`${v}${ye}${y}`}return f?{res:y,usedKey:y,exactUsedKey:y,usedLng:m,usedNS:v,usedParams:this.getUsedParamsDetails(a)}:y}const z=this.resolve(r,a);let N=z==null?void 0:z.res;const G=(z==null?void 0:z.usedKey)||y,k=(z==null?void 0:z.exactUsedKey)||y,Y=["[object Number]","[object Function]","[object RegExp]"],J=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,Oe=!this.i18nFormat||this.i18nFormat.handleAsObject,ce=a.count!==void 0&&!he(a.count),I=Qu.hasDefaultValue(a),Ee=ce?this.pluralResolver.getSuffix(m,a.count,a):"",ge=a.ordinal&&ce?this.pluralResolver.getSuffix(m,a.count,{ordinal:!1}):"",ne=ce&&!a.ordinal&&a.count===0,ee=ne&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${Ee}`]||a[`defaultValue${ge}`]||a.defaultValue;let W=N;Oe&&!N&&I&&(W=ee);const pe=Hg(W),Te=Object.prototype.toString.apply(W);if(Oe&&W&&pe&&Y.indexOf(Te)<0&&!(he(J)&&Array.isArray(W))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ye=this.options.returnedObjectHandler?this.options.returnedObjectHandler(G,W,{...a,ns:D}):`key '${y} (${this.language})' returned an object instead of string.`;return f?(z.res=ye,z.usedParams=this.getUsedParamsDetails(a),z):ye}if(d){const ye=Array.isArray(W),ve=ye?[]:{},We=ye?k:G;for(const Ze in W)if(Object.prototype.hasOwnProperty.call(W,Ze)){const V=`${We}${d}${Ze}`;I&&!N?ve[Ze]=this.translate(V,{...a,defaultValue:Hg(ee)?ee[Ze]:void 0,joinArrays:!1,ns:D}):ve[Ze]=this.translate(V,{...a,joinArrays:!1,ns:D}),ve[Ze]===V&&(ve[Ze]=W[Ze])}N=ve}}else if(Oe&&he(J)&&Array.isArray(N))N=N.join(J),N&&(N=this.extendTranslation(N,r,a,o));else{let ye=!1,ve=!1;!this.isValidLookup(N)&&I&&(ye=!0,N=ee),this.isValidLookup(N)||(ve=!0,N=y);const Ze=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ve?void 0:N,V=I&&ee!==N&&this.options.updateMissing;if(ve||ye||V){if(this.logger.log(V?"updateKey":"missingKey",m,v,y,V?ee:N),d){const me=this.resolve(y,{...a,keySeparator:!1});me&&me.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const B=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&B&&B[0])for(let me=0;me<B.length;me++)M.push(B[me]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(a.lng||this.language):M.push(a.lng||this.language);const ae=(me,x,U)=>{var X;const K=I&&U!==N?U:Ze;this.options.missingKeyHandler?this.options.missingKeyHandler(me,v,x,K,V,a):(X=this.backendConnector)!=null&&X.saveMissing&&this.backendConnector.saveMissing(me,v,x,K,V,a),this.emit("missingKey",me,v,x,N)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ce?M.forEach(me=>{const x=this.pluralResolver.getSuffixes(me,a);ne&&a[`defaultValue${this.options.pluralSeparator}zero`]&&x.indexOf(`${this.options.pluralSeparator}zero`)<0&&x.push(`${this.options.pluralSeparator}zero`),x.forEach(U=>{ae([me],y+U,a[`defaultValue${U}`]||ee)})}):ae(M,y,ee))}N=this.extendTranslation(N,r,a,z,o),ve&&N===y&&this.options.appendNamespaceToMissingKey&&(N=`${v}:${y}`),(ve||ye)&&this.options.parseMissingKeyHandler&&(N=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${v}:${y}`:y,ye?N:void 0))}return f?(z.res=N,z.usedParams=this.getUsedParamsDetails(a),z):N}extendTranslation(r,a,o,f,d){var m,E;var y=this;if((m=this.i18nFormat)!=null&&m.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||f.usedLng,f.usedNS,f.usedKey,{resolved:f});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const z=he(r)&&(((E=o==null?void 0:o.interpolation)==null?void 0:E.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let N;if(z){const k=r.match(this.interpolator.nestingRegexp);N=k&&k.length}let G=o.replace&&!he(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(G={...this.options.interpolation.defaultVariables,...G}),r=this.interpolator.interpolate(r,G,o.lng||this.language||f.usedLng,o),z){const k=r.match(this.interpolator.nestingRegexp),Y=k&&k.length;N<Y&&(o.nest=!1)}!o.lng&&f&&f.res&&(o.lng=this.language||f.usedLng),o.nest!==!1&&(r=this.interpolator.nest(r,function(){for(var k=arguments.length,Y=new Array(k),J=0;J<k;J++)Y[J]=arguments[J];return(d==null?void 0:d[0])===Y[0]&&!o.context?(y.logger.warn(`It seems you are nesting recursively key: ${Y[0]} in key: ${a[0]}`),null):y.translate(...Y,a)},o)),o.interpolation&&this.interpolator.reset()}const D=o.postProcess||this.options.postProcess,v=he(D)?[D]:D;return r!=null&&(v!=null&&v.length)&&o.applyPostProcessor!==!1&&(r=Jg.handle(v,r,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...f,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),r}resolve(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o,f,d,y,D;return he(r)&&(r=[r]),r.forEach(v=>{if(this.isValidLookup(o))return;const m=this.extractFromKey(v,a),E=m.key;f=E;let z=m.namespaces;this.options.fallbackNS&&(z=z.concat(this.options.fallbackNS));const N=a.count!==void 0&&!he(a.count),G=N&&!a.ordinal&&a.count===0,k=a.context!==void 0&&(he(a.context)||typeof a.context=="number")&&a.context!=="",Y=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);z.forEach(J=>{var Oe,ce;this.isValidLookup(o)||(D=J,!zg[`${Y[0]}-${J}`]&&((Oe=this.utils)!=null&&Oe.hasLoadedNamespace)&&!((ce=this.utils)!=null&&ce.hasLoadedNamespace(D))&&(zg[`${Y[0]}-${J}`]=!0,this.logger.warn(`key "${f}" for languages "${Y.join(", ")}" won't get resolved as namespace "${D}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),Y.forEach(I=>{var ne;if(this.isValidLookup(o))return;y=I;const Ee=[E];if((ne=this.i18nFormat)!=null&&ne.addLookupKeys)this.i18nFormat.addLookupKeys(Ee,E,I,J,a);else{let ee;N&&(ee=this.pluralResolver.getSuffix(I,a.count,a));const W=`${this.options.pluralSeparator}zero`,pe=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(N&&(Ee.push(E+ee),a.ordinal&&ee.indexOf(pe)===0&&Ee.push(E+ee.replace(pe,this.options.pluralSeparator)),G&&Ee.push(E+W)),k){const Te=`${E}${this.options.contextSeparator}${a.context}`;Ee.push(Te),N&&(Ee.push(Te+ee),a.ordinal&&ee.indexOf(pe)===0&&Ee.push(Te+ee.replace(pe,this.options.pluralSeparator)),G&&Ee.push(Te+W))}}let ge;for(;ge=Ee.pop();)this.isValidLookup(o)||(d=ge,o=this.getResource(I,J,ge,a))}))})}),{res:o,usedKey:f,exactUsedKey:d,usedLng:y,usedNS:D}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,a,o){var d;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(d=this.i18nFormat)!=null&&d.getResource?this.i18nFormat.getResource(r,a,o,f):this.resourceStore.getResource(r,a,o,f)}getUsedParamsDetails(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=r.replace&&!he(r.replace);let f=o?r.replace:r;if(o&&typeof r.count<"u"&&(f.count=r.count),this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),!o){f={...f};for(const d of a)delete f[d]}return f}static hasDefaultValue(r){const a="defaultValue";for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&a===o.substring(0,a.length)&&r[o]!==void 0)return!0;return!1}}class Lg{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=rn.create("languageUtils")}getScriptPartFromCode(r){if(r=Vu(r),!r||r.indexOf("-")<0)return null;const a=r.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(r){if(r=Vu(r),!r||r.indexOf("-")<0)return r;const a=r.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(r){if(he(r)&&r.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(r)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?r.toLowerCase():r)}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let a;return r.forEach(o=>{if(a)return;const f=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(f))&&(a=f)}),!a&&this.options.supportedLngs&&r.forEach(o=>{if(a)return;const f=this.getScriptPartFromCode(o);if(this.isSupportedCode(f))return a=f;const d=this.getLanguagePartFromCode(o);if(this.isSupportedCode(d))return a=d;a=this.options.supportedLngs.find(y=>{if(y===d)return y;if(!(y.indexOf("-")<0&&d.indexOf("-")<0)&&(y.indexOf("-")>0&&d.indexOf("-")<0&&y.substring(0,y.indexOf("-"))===d||y.indexOf(d)===0&&d.length>1))return y})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(r,a){if(!r)return[];if(typeof r=="function"&&(r=r(a)),he(r)&&(r=[r]),Array.isArray(r))return r;if(!a)return r.default||[];let o=r[a];return o||(o=r[this.getScriptPartFromCode(a)]),o||(o=r[this.formatLanguageCode(a)]),o||(o=r[this.getLanguagePartFromCode(a)]),o||(o=r.default),o||[]}toResolveHierarchy(r,a){const o=this.getFallbackCodes(a||this.options.fallbackLng||[],r),f=[],d=y=>{y&&(this.isSupportedCode(y)?f.push(y):this.logger.warn(`rejecting language code not found in supportedLngs: ${y}`))};return he(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&d(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&d(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&d(this.getLanguagePartFromCode(r))):he(r)&&d(this.formatLanguageCode(r)),o.forEach(y=>{f.indexOf(y)<0&&d(this.formatLanguageCode(y))}),f}}const Ug={zero:0,one:1,two:2,few:3,many:4,other:5},jg={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class D0{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=r,this.options=a,this.logger=rn.create("pluralResolver"),this.pluralRulesCache={}}addRule(r,a){this.rules[r]=a}clearCache(){this.pluralRulesCache={}}getRule(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=Vu(r==="dev"?"en":r),f=a.ordinal?"ordinal":"cardinal",d=JSON.stringify({cleanedCode:o,type:f});if(d in this.pluralRulesCache)return this.pluralRulesCache[d];let y;try{y=new Intl.PluralRules(o,{type:f})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),jg;if(!r.match(/-|_/))return jg;const v=this.languageUtils.getLanguagePartFromCode(r);y=this.getRule(v,a)}return this.pluralRulesCache[d]=y,y}needsPlural(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),(o==null?void 0:o.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(r,o).map(f=>`${a}${f}`)}getSuffixes(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?o.resolvedOptions().pluralCategories.sort((f,d)=>Ug[f]-Ug[d]).map(f=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${f}`):[]}getSuffix(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const f=this.getRule(r,o);return f?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${f.select(a)}`:(this.logger.warn(`no plural rule found for: ${r}`),this.getSuffix("dev",a,o))}}const Yg=function(s,r,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,d=h0(s,r,a);return!d&&f&&he(a)&&(d=Ts(s,a,o),d===void 0&&(d=Ts(r,a,o))),d},vs=s=>s.replace(/\$/g,"$$$$");class E0{constructor(){var a;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rn.create("interpolator"),this.options=r,this.format=((a=r==null?void 0:r.interpolation)==null?void 0:a.format)||(o=>o),this.init(r)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r.interpolation||(r.interpolation={escapeValue:!0});const{escape:a,escapeValue:o,useRawValueToEscape:f,prefix:d,prefixEscaped:y,suffix:D,suffixEscaped:v,formatSeparator:m,unescapeSuffix:E,unescapePrefix:z,nestingPrefix:N,nestingPrefixEscaped:G,nestingSuffix:k,nestingSuffixEscaped:Y,nestingOptionsSeparator:J,maxReplaces:Oe,alwaysFormat:ce}=r.interpolation;this.escape=a!==void 0?a:m0,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=f!==void 0?f:!1,this.prefix=d?ol(d):y||"{{",this.suffix=D?ol(D):v||"}}",this.formatSeparator=m||",",this.unescapePrefix=E?"":z||"-",this.unescapeSuffix=this.unescapePrefix?"":E||"",this.nestingPrefix=N?ol(N):G||ol("$t("),this.nestingSuffix=k?ol(k):Y||ol(")"),this.nestingOptionsSeparator=J||",",this.maxReplaces=Oe||1e3,this.alwaysFormat=ce!==void 0?ce:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(a,o)=>(a==null?void 0:a.source)===o?(a.lastIndex=0,a):new RegExp(o,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(r,a,o,f){var G;let d,y,D;const v=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=k=>{if(k.indexOf(this.formatSeparator)<0){const ce=Yg(a,v,k,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(ce,void 0,o,{...f,...a,interpolationkey:k}):ce}const Y=k.split(this.formatSeparator),J=Y.shift().trim(),Oe=Y.join(this.formatSeparator).trim();return this.format(Yg(a,v,J,this.options.keySeparator,this.options.ignoreJSONStructure),Oe,o,{...f,...a,interpolationkey:J})};this.resetRegExp();const E=(f==null?void 0:f.missingInterpolationHandler)||this.options.missingInterpolationHandler,z=((G=f==null?void 0:f.interpolation)==null?void 0:G.skipOnVariables)!==void 0?f.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:k=>vs(k)},{regex:this.regexp,safeValue:k=>this.escapeValue?vs(this.escape(k)):vs(k)}].forEach(k=>{for(D=0;d=k.regex.exec(r);){const Y=d[1].trim();if(y=m(Y),y===void 0)if(typeof E=="function"){const Oe=E(r,d,f);y=he(Oe)?Oe:""}else if(f&&Object.prototype.hasOwnProperty.call(f,Y))y="";else if(z){y=d[0];continue}else this.logger.warn(`missed to pass in variable ${Y} for interpolating ${r}`),y="";else!he(y)&&!this.useRawValueToEscape&&(y=Cg(y));const J=k.safeValue(y);if(r=r.replace(d[0],J),z?(k.regex.lastIndex+=y.length,k.regex.lastIndex-=d[0].length):k.regex.lastIndex=0,D++,D>=this.maxReplaces)break}}),r}nest(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f,d,y;const D=(v,m)=>{const E=this.nestingOptionsSeparator;if(v.indexOf(E)<0)return v;const z=v.split(new RegExp(`${E}[ ]*{`));let N=`{${z[1]}`;v=z[0],N=this.interpolate(N,y);const G=N.match(/'/g),k=N.match(/"/g);(((G==null?void 0:G.length)??0)%2===0&&!k||k.length%2!==0)&&(N=N.replace(/'/g,'"'));try{y=JSON.parse(N),m&&(y={...m,...y})}catch(Y){return this.logger.warn(`failed parsing options string in nesting for key ${v}`,Y),`${v}${E}${N}`}return y.defaultValue&&y.defaultValue.indexOf(this.prefix)>-1&&delete y.defaultValue,v};for(;f=this.nestingRegexp.exec(r);){let v=[];y={...o},y=y.replace&&!he(y.replace)?y.replace:y,y.applyPostProcessor=!1,delete y.defaultValue;let m=!1;if(f[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(f[1])){const E=f[1].split(this.formatSeparator).map(z=>z.trim());f[1]=E.shift(),v=E,m=!0}if(d=a(D.call(this,f[1].trim(),y),y),d&&f[0]===r&&!he(d))return d;he(d)||(d=Cg(d)),d||(this.logger.warn(`missed to resolve ${f[1]} for nesting ${r}`),d=""),m&&(d=v.reduce((E,z)=>this.format(E,z,o.lng,{...o,interpolationkey:f[1].trim()}),d.trim())),r=r.replace(f[0],d),this.regexp.lastIndex=0}return r}}const T0=s=>{let r=s.toLowerCase().trim();const a={};if(s.indexOf("(")>-1){const o=s.split("(");r=o[0].toLowerCase().trim();const f=o[1].substring(0,o[1].length-1);r==="currency"&&f.indexOf(":")<0?a.currency||(a.currency=f.trim()):r==="relativetime"&&f.indexOf(":")<0?a.range||(a.range=f.trim()):f.split(";").forEach(y=>{if(y){const[D,...v]=y.split(":"),m=v.join(":").trim().replace(/^'+|'+$/g,""),E=D.trim();a[E]||(a[E]=m),m==="false"&&(a[E]=!1),m==="true"&&(a[E]=!0),isNaN(m)||(a[E]=parseInt(m,10))}})}return{formatName:r,formatOptions:a}},sl=s=>{const r={};return(a,o,f)=>{let d=f;f&&f.interpolationkey&&f.formatParams&&f.formatParams[f.interpolationkey]&&f[f.interpolationkey]&&(d={...d,[f.interpolationkey]:void 0});const y=o+JSON.stringify(d);let D=r[y];return D||(D=s(Vu(o),f),r[y]=D),D(a)}};class w0{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rn.create("formatter"),this.options=r,this.formats={number:sl((a,o)=>{const f=new Intl.NumberFormat(a,{...o});return d=>f.format(d)}),currency:sl((a,o)=>{const f=new Intl.NumberFormat(a,{...o,style:"currency"});return d=>f.format(d)}),datetime:sl((a,o)=>{const f=new Intl.DateTimeFormat(a,{...o});return d=>f.format(d)}),relativetime:sl((a,o)=>{const f=new Intl.RelativeTimeFormat(a,{...o});return d=>f.format(d,o.range||"day")}),list:sl((a,o)=>{const f=new Intl.ListFormat(a,{...o});return d=>f.format(d)})},this.init(r)}init(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=a.interpolation.formatSeparator||","}add(r,a){this.formats[r.toLowerCase().trim()]=a}addCached(r,a){this.formats[r.toLowerCase().trim()]=sl(a)}format(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const d=a.split(this.formatSeparator);if(d.length>1&&d[0].indexOf("(")>1&&d[0].indexOf(")")<0&&d.find(D=>D.indexOf(")")>-1)){const D=d.findIndex(v=>v.indexOf(")")>-1);d[0]=[d[0],...d.splice(1,D)].join(this.formatSeparator)}return d.reduce((D,v)=>{var z;const{formatName:m,formatOptions:E}=T0(v);if(this.formats[m]){let N=D;try{const G=((z=f==null?void 0:f.formatParams)==null?void 0:z[f.interpolationkey])||{},k=G.locale||G.lng||f.locale||f.lng||o;N=this.formats[m](D,k,{...E,...f,...G})}catch(G){this.logger.warn(G)}return N}else this.logger.warn(`there was no format function for ${m}`);return D},r)}}const M0=(s,r)=>{s.pending[r]!==void 0&&(delete s.pending[r],s.pendingCount--)};class O0 extends Ku{constructor(r,a,o){var d,y;let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=r,this.store=a,this.services=o,this.languageUtils=o.languageUtils,this.options=f,this.logger=rn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=f.maxParallelReads||10,this.readingCalls=0,this.maxRetries=f.maxRetries>=0?f.maxRetries:5,this.retryTimeout=f.retryTimeout>=1?f.retryTimeout:350,this.state={},this.queue=[],(y=(d=this.backend)==null?void 0:d.init)==null||y.call(d,o,f.backend,f)}queueLoad(r,a,o,f){const d={},y={},D={},v={};return r.forEach(m=>{let E=!0;a.forEach(z=>{const N=`${m}|${z}`;!o.reload&&this.store.hasResourceBundle(m,z)?this.state[N]=2:this.state[N]<0||(this.state[N]===1?y[N]===void 0&&(y[N]=!0):(this.state[N]=1,E=!1,y[N]===void 0&&(y[N]=!0),d[N]===void 0&&(d[N]=!0),v[z]===void 0&&(v[z]=!0)))}),E||(D[m]=!0)}),(Object.keys(d).length||Object.keys(y).length)&&this.queue.push({pending:y,pendingCount:Object.keys(y).length,loaded:{},errors:[],callback:f}),{toLoad:Object.keys(d),pending:Object.keys(y),toLoadLanguages:Object.keys(D),toLoadNamespaces:Object.keys(v)}}loaded(r,a,o){const f=r.split("|"),d=f[0],y=f[1];a&&this.emit("failedLoading",d,y,a),!a&&o&&this.store.addResourceBundle(d,y,o,void 0,void 0,{skipCopy:!0}),this.state[r]=a?-1:2,a&&o&&(this.state[r]=0);const D={};this.queue.forEach(v=>{g0(v.loaded,[d],y),M0(v,r),a&&v.errors.push(a),v.pendingCount===0&&!v.done&&(Object.keys(v.loaded).forEach(m=>{D[m]||(D[m]={});const E=v.loaded[m];E.length&&E.forEach(z=>{D[m][z]===void 0&&(D[m][z]=!0)})}),v.done=!0,v.errors.length?v.callback(v.errors):v.callback())}),this.emit("loaded",D),this.queue=this.queue.filter(v=>!v.done)}read(r,a,o){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,y=arguments.length>5?arguments[5]:void 0;if(!r.length)return y(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:a,fcName:o,tried:f,wait:d,callback:y});return}this.readingCalls++;const D=(m,E)=>{if(this.readingCalls--,this.waitingReads.length>0){const z=this.waitingReads.shift();this.read(z.lng,z.ns,z.fcName,z.tried,z.wait,z.callback)}if(m&&E&&f<this.maxRetries){setTimeout(()=>{this.read.call(this,r,a,o,f+1,d*2,y)},d);return}y(m,E)},v=this.backend[o].bind(this.backend);if(v.length===2){try{const m=v(r,a);m&&typeof m.then=="function"?m.then(E=>D(null,E)).catch(D):D(null,m)}catch(m){D(m)}return}return v(r,a,D)}prepareLoading(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),f&&f();he(r)&&(r=this.languageUtils.toResolveHierarchy(r)),he(a)&&(a=[a]);const d=this.queueLoad(r,a,o,f);if(!d.toLoad.length)return d.pending.length||f(),null;d.toLoad.forEach(y=>{this.loadOne(y)})}load(r,a,o){this.prepareLoading(r,a,{},o)}reload(r,a,o){this.prepareLoading(r,a,{reload:!0},o)}loadOne(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const o=r.split("|"),f=o[0],d=o[1];this.read(f,d,"read",void 0,void 0,(y,D)=>{y&&this.logger.warn(`${a}loading namespace ${d} for language ${f} failed`,y),!y&&D&&this.logger.log(`${a}loaded namespace ${d} for language ${f}`,D),this.loaded(r,y,D)})}saveMissing(r,a,o,f,d){var v,m,E,z,N;let y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},D=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(v=this.services)==null?void 0:v.utils)!=null&&m.hasLoadedNamespace&&!((z=(E=this.services)==null?void 0:E.utils)!=null&&z.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${o}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if((N=this.backend)!=null&&N.create){const G={...y,isUpdate:d},k=this.backend.create.bind(this.backend);if(k.length<6)try{let Y;k.length===5?Y=k(r,a,o,f,G):Y=k(r,a,o,f),Y&&typeof Y.then=="function"?Y.then(J=>D(null,J)).catch(D):D(null,Y)}catch(Y){D(Y)}else k(r,a,o,f,D,G)}!r||!r[0]||this.store.addResource(r[0],a,o,f)}}}const Bg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let r={};if(typeof s[1]=="object"&&(r=s[1]),he(s[1])&&(r.defaultValue=s[1]),he(s[2])&&(r.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const a=s[3]||s[2];Object.keys(a).forEach(o=>{r[o]=a[o]})}return r},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),qg=s=>{var r,a;return he(s.ns)&&(s.ns=[s.ns]),he(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),he(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((a=(r=s.supportedLngs)==null?void 0:r.indexOf)==null?void 0:a.call(r,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},qu=()=>{},C0=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(a=>{typeof s[a]=="function"&&(s[a]=s[a].bind(s))})};class bi extends Ku{constructor(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(super(),this.options=qg(r),this.services={},this.logger=rn,this.modules={external:[]},C0(this),a&&!this.isInitialized&&!r.isClone){if(!this.options.initAsync)return this.init(r,a),this;setTimeout(()=>{this.init(r,a)},0)}}init(){var r=this;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof a=="function"&&(o=a,a={}),a.defaultNS==null&&a.ns&&(he(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const f=Bg();this.options={...f,...this.options,...qg(a)},this.options.interpolation={...f.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);const d=E=>E?typeof E=="function"?new E:E:null;if(!this.options.isClone){this.modules.logger?rn.init(d(this.modules.logger),this.options):rn.init(null,this.options);let E;this.modules.formatter?E=this.modules.formatter:E=w0;const z=new Lg(this.options);this.store=new Rg(this.options.resources,this.options);const N=this.services;N.logger=rn,N.resourceStore=this.store,N.languageUtils=z,N.pluralResolver=new D0(z,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),E&&(!this.options.interpolation.format||this.options.interpolation.format===f.interpolation.format)&&(N.formatter=d(E),N.formatter.init(N,this.options),this.options.interpolation.format=N.formatter.format.bind(N.formatter)),N.interpolator=new E0(this.options),N.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},N.backendConnector=new O0(d(this.modules.backend),N.resourceStore,N,this.options),N.backendConnector.on("*",function(G){for(var k=arguments.length,Y=new Array(k>1?k-1:0),J=1;J<k;J++)Y[J-1]=arguments[J];r.emit(G,...Y)}),this.modules.languageDetector&&(N.languageDetector=d(this.modules.languageDetector),N.languageDetector.init&&N.languageDetector.init(N,this.options.detection,this.options)),this.modules.i18nFormat&&(N.i18nFormat=d(this.modules.i18nFormat),N.i18nFormat.init&&N.i18nFormat.init(this)),this.translator=new Qu(this.services,this.options),this.translator.on("*",function(G){for(var k=arguments.length,Y=new Array(k>1?k-1:0),J=1;J<k;J++)Y[J-1]=arguments[J];r.emit(G,...Y)}),this.modules.external.forEach(G=>{G.init&&G.init(this)})}if(this.format=this.options.interpolation.format,o||(o=qu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const E=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);E.length>0&&E[0]!=="dev"&&(this.options.lng=E[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(E=>{this[E]=function(){return r.store[E](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(E=>{this[E]=function(){return r.store[E](...arguments),r}});const v=ci(),m=()=>{const E=(z,N)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),v.resolve(N),o(z,N)};if(this.languages&&!this.isInitialized)return E(null,this.t.bind(this));this.changeLanguage(this.options.lng,E)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),v}loadResources(r){var d,y;let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qu;const f=he(r)?r:this.language;if(typeof r=="function"&&(o=r),!this.options.resources||this.options.partialBundledLanguages){if((f==null?void 0:f.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const D=[],v=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(z=>{z!=="cimode"&&D.indexOf(z)<0&&D.push(z)})};f?v(f):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(E=>v(E)),(y=(d=this.options.preload)==null?void 0:d.forEach)==null||y.call(d,m=>v(m)),this.services.backendConnector.load(D,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(m)})}else o(null)}reloadResources(r,a,o){const f=ci();return typeof r=="function"&&(o=r,r=void 0),typeof a=="function"&&(o=a,a=void 0),r||(r=this.languages),a||(a=this.options.ns),o||(o=qu),this.services.backendConnector.reload(r,a,d=>{f.resolve(),o(d)}),f}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&Jg.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1)){for(let a=0;a<this.languages.length;a++){const o=this.languages[a];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(r)<0&&this.store.hasLanguageSomeTranslations(r)&&(this.resolvedLanguage=r,this.languages.unshift(r))}}changeLanguage(r,a){var o=this;this.isLanguageChangingTo=r;const f=ci();this.emit("languageChanging",r);const d=v=>{this.language=v,this.languages=this.services.languageUtils.toResolveHierarchy(v),this.resolvedLanguage=void 0,this.setResolvedLanguage(v)},y=(v,m)=>{m?this.isLanguageChangingTo===r&&(d(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,f.resolve(function(){return o.t(...arguments)}),a&&a(v,function(){return o.t(...arguments)})},D=v=>{var z,N;!r&&!v&&this.services.languageDetector&&(v=[]);const m=he(v)?v:v&&v[0],E=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(he(v)?[v]:v);E&&(this.language||d(E),this.translator.language||this.translator.changeLanguage(E),(N=(z=this.services.languageDetector)==null?void 0:z.cacheUserLanguage)==null||N.call(z,E)),this.loadResources(E,G=>{y(G,E)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?D(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(D):this.services.languageDetector.detect(D):D(r),f}getFixedT(r,a,o){var f=this;const d=function(y,D){let v;if(typeof D!="object"){for(var m=arguments.length,E=new Array(m>2?m-2:0),z=2;z<m;z++)E[z-2]=arguments[z];v=f.options.overloadTranslationOptionHandler([y,D].concat(E))}else v={...D};v.lng=v.lng||d.lng,v.lngs=v.lngs||d.lngs,v.ns=v.ns||d.ns,v.keyPrefix!==""&&(v.keyPrefix=v.keyPrefix||o||d.keyPrefix);const N=f.options.keySeparator||".";let G;return v.keyPrefix&&Array.isArray(y)?G=y.map(k=>`${v.keyPrefix}${N}${k}`):G=v.keyPrefix?`${v.keyPrefix}${N}${y}`:y,f.t(G,v)};return he(r)?d.lng=r:d.lngs=r,d.ns=a,d.keyPrefix=o,d}t(){var f;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(f=this.translator)==null?void 0:f.translate(...a)}exists(){var f;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(f=this.translator)==null?void 0:f.exists(...a)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=a.lng||this.resolvedLanguage||this.languages[0],f=this.options?this.options.fallbackLng:!1,d=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const y=(D,v)=>{const m=this.services.backendConnector.state[`${D}|${v}`];return m===-1||m===0||m===2};if(a.precheck){const D=a.precheck(this,y);if(D!==void 0)return D}return!!(this.hasResourceBundle(o,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||y(o,r)&&(!f||y(d,r)))}loadNamespaces(r,a){const o=ci();return this.options.ns?(he(r)&&(r=[r]),r.forEach(f=>{this.options.ns.indexOf(f)<0&&this.options.ns.push(f)}),this.loadResources(f=>{o.resolve(),a&&a(f)}),o):(a&&a(),Promise.resolve())}loadLanguages(r,a){const o=ci();he(r)&&(r=[r]);const f=this.options.preload||[],d=r.filter(y=>f.indexOf(y)<0&&this.services.languageUtils.isSupportedCode(y));return d.length?(this.options.preload=f.concat(d),this.loadResources(y=>{o.resolve(),a&&a(y)}),o):(a&&a(),Promise.resolve())}dir(r){var f,d;if(r||(r=this.resolvedLanguage||(((f=this.languages)==null?void 0:f.length)>0?this.languages[0]:this.language)),!r)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=((d=this.services)==null?void 0:d.languageUtils)||new Lg(Bg());return a.indexOf(o.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return new bi(r,a)}cloneInstance(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qu;const o=r.forkResourceStore;o&&delete r.forkResourceStore;const f={...this.options,...r,isClone:!0},d=new bi(f);if((r.debug!==void 0||r.prefix!==void 0)&&(d.logger=d.logger.clone(r)),["store","services","language"].forEach(D=>{d[D]=this[D]}),d.services={...this.services},d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},o){const D=Object.keys(this.store.data).reduce((v,m)=>(v[m]={...this.store.data[m]},v[m]=Object.keys(v[m]).reduce((E,z)=>(E[z]={...v[m][z]},E),v[m]),v),{});d.store=new Rg(D,f),d.services.resourceStore=d.store}return d.translator=new Qu(d.services,f),d.translator.on("*",function(D){for(var v=arguments.length,m=new Array(v>1?v-1:0),E=1;E<v;E++)m[E-1]=arguments[E];d.emit(D,...m)}),d.init(f,a),d.translator.options=f,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const yt=bi.createInstance();yt.createInstance=bi.createInstance;yt.createInstance;yt.dir;yt.init;yt.loadResources;yt.reloadResources;yt.use;yt.changeLanguage;yt.getFixedT;yt.t;yt.exists;yt.setDefaultNamespace;yt.hasLoadedNamespace;yt.loadNamespaces;yt.loadLanguages;const A0={en:{translation:{sectionFeatured:"Featured news",sectionEuroTip:"Euro Tip",sectionHrTip:"HR Tip",sectionTrainings:"Trainings",sectionSectorNews:"Sector News",sectionOtherNews:"Other News",pre_header_copy:"Discover the latest key legal HR news",view_online_copy:"View online",tagline:"Stay ahead with the latest in HR law",img_link:"https://www.securex.be/en/lex4you/employer",contact_link:"https://www.securex.be/en/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/en/website-disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Unsubscribe or change preferences",alt:"Click image to read article",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"HR & Legal trainings",th_training:"Training",th_day_time:"Day - Time",th_format:"Format",th_price_ex_vat:"Price ex&nbsp;VAT from",section_cta_url:"https://www.securex.be/en/training-courses",section_cta_copy:"Discover all our trainings",sectorNewsHeader:"News from the sectors",otherNewsHeader:"Other news"}},nl:{translation:{sectionFeatured:"Uitgelicht nieuws",sectionEuroTip:"€ Tip",sectionHrTip:"HR Tip",sectionTrainings:"Opleidingen",sectionSectorNews:"Sectornieuws",sectionOtherNews:"Overig nieuws",pre_header_copy:"Ontdek de belangrijkste legal HR-actualiteit",view_online_copy:"Bekijk online",tagline:"Meteen mee met het juridisch HR-nieuws",img_link:"https://www.securex.be/nl/lex4you/werkgever",contact_link:"https://www.securex.be/nl/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/nl/lex4you/disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Uitschrijven of voorkeuren wijzigen",alt:"Klik op de afbeelding om het artikel te lezen",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"Opleidingen HR & Legal",th_training:"Opleiding",th_day_time:"Dag - Tijdstip",th_format:"Format",th_price_ex_vat:"Prijs ex.&nbsp;btw vanaf",section_cta_url:"https://www.securex.be/nl/opleidingen",section_cta_copy:"Ontdek al onze opleidingen",sectorNewsHeader:"Nieuws uit de sectoren",otherNewsHeader:"Meer nieuws"}},fr:{translation:{sectionFeatured:"Principales actualités",sectionEuroTip:"Conseil €",sectionHrTip:"Conseil RH",sectionTrainings:"Formations",sectionSectorNews:"Actualités des secteurs",sectionOtherNews:"Autres actualités",pre_header_copy:"Découvrez les principales nouveautés juridiques RH",view_online_copy:"Voir en ligne",tagline:"Pour être au courant des actualités juridiques RH",img_link:"https://www.securex.be/fr/lex4you/employeur",contact_link:"https://www.securex.be/fr/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/fr/lex4you/disclaimer",disclaimer_copy:"Mentions légales",preferences_link:"{EmailPreferenceCenter_1063}",preferences_copy:"Se désinscrire ou modifier vos préférences",alt:"Cliquez sur l'image pour lire l'article",euroTipPreHeader:"Conseil €",HRTipPreHeader:"Conseil RH",section_header:"Formations RH & Juridiques",th_training:"Formation",th_day_time:"Jour - Heure",th_format:"Format",th_price_ex_vat:"Prix HTVA à&nbsp;partir de",section_cta_url:"https://www.securex.be/fr/formations",section_cta_copy:"Découvrez toutes nos formations",sectorNewsHeader:"Actualités des secteurs",otherNewsHeader:"Autres actualités"}},de:{translation:{sectionFeatured:"Ausgewählte Nachrichten",sectionEuroTip:"€ Tipp",sectionHrTip:"HR Tipp",sectionTrainings:"Schulungen",sectionSectorNews:"Branchen-News",sectionOtherNews:"Sonstige Nachrichten",pre_header_copy:"Entdecken Sie die wichtigsten HR-Rechtsnachrichten",view_online_copy:"Online ansehen",tagline:"Ihre neuesten juristischen HR-Updates",img_link:"https://www.securex.be/de/lex4you/arbeitgeber",contact_link:"https://www.securex.be/de/kontakt",contact_copy:"Kontakt",disclaimer_link:"https://www.securex.be/de/lex4you/disclaimer-sss",disclaimer_copy:"Haftungsausschluss",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Abmelden oder Präferenzen ändern",alt:"Klicken Sie auf das Bild, um den Artikel zu lesen",euroTipPreHeader:"€ Tipp",HRTipPreHeader:"HR Tipp",section_header:"Schulungen",th_training:"Schulung",th_day_time:"Tag - Zeit",th_format:"Format",th_price_ex_vat:"Preis o. MwSt. ab",section_cta_url:"https://www.securex.be/de/schulungen",section_cta_copy:"Entdecken Sie alle unsere Schulungen",sectorNewsHeader:"Nachrichten aus den Branchen",otherNewsHeader:"Mehr Nachrichten"}}};yt.use(Tm).init({resources:A0,lng:"nl",interpolation:{escapeValue:!1}});function N0(s,r="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png",a="Discover the latest key legal HR news",o="View online",f="https://www.securex.be/en/lex4you/employer",d="DD month YYYY",y="Stay ahead with the latest in HR law",D="https://www.securex.be/en/contact",v="Contact",m="https://www.securex.be/en/website-disclaimer",E="Disclaimer",z="{EmailPreferenceCenter_967}",N="Unsubscribe or change preferences"){return`
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
                                ${y}
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
                                    >${v}</a
                                  >
                                  -
                                </span>
                                <span
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${m}"
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
                                    >${N}</span
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
`}function _0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o="CTA",f="Click image to read article",d="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
  `}function z0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",o="CTA",f="€ Tip"){return`
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
`}function H0(s="https://www.securex.be/en/lex4you/employer",r="Lorem ipsum dolor",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",o="CTA",f="HR Tip"){return`
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
`}function L0(s,r="HR &amp; Legal trainings (in Dutch &amp; French)",a="Training",o="Day - Time",f="Format",d="Price ex VAT",y="https://www.securex.be/en/training-courses",D="Discover all our trainings"){return`
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
                        href="${y}"
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
`}function j0(s){return`
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

  `}function Y0(s,r="News from the sectors"){return`
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
`}function B0(s="https://www.securex.be/en/lex4you/employer",r="JC 123.456 | Sector name",a="Article title: lorem ipsum dolor sit amet"){return`
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
`}function q0(s,r="Other news"){return`
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
`}function k0(s="https://www.securex.be/en/lex4you/employer",r="Article title: lorem ipsum dolor sit amet",a="Article subtitle: lorem ipsum dolor sit amet"){return`
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
`}function G0(){const[s,r]=qe.useState(new Date),[a,o]=qe.useState(()=>Mg.map(ne=>({id:si(),...ne,fieldsets:ne.fieldsets.map(ee=>({id:si(),...ee}))}))),[f,d]=qe.useState(""),[y,D]=qe.useState(""),[v,m]=qe.useState(!1),{i18n:E}=yi(),[z,N]=qe.useState({}),G=(ne,ee)=>{N(W=>({...W,[ne]:ee}))},k=ne=>z[ne]||Mg.map(ee=>({id:si(),...ee,fieldsets:ee.fieldsets.map(W=>({id:si(),...W}))}));qe.useEffect(()=>{const ne=E.language,ee=k(ne);o(ee)},[E.language]),qe.useEffect(()=>{const ne=E.language;return()=>{G(ne,a)}},[a]);const Y=ne=>({id:si(),url:"#",title:"Lorem ipsum dolor",...ne==="complex"&&{summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"},...ne==="training"&&{date:"1 jan. 2025",time:"9:00 - 12:00",format:"On-Site in Brussels",price:"400"},...ne==="simple"&&{subtitle:"Lorem ipsum dolor sit amet"}}),J=ne=>{o(ee=>ee.map(W=>{if(W.id===ne){const pe=Y(W.fieldsetType);return{...W,fieldsets:[...W.fieldsets,pe]}}return W}))},Oe=ne=>{o(ee=>ee.map(W=>{const pe=W.fieldsets.filter(Te=>Te.id!==ne);return{...W,fieldsets:pe}}))},ce=(ne,ee,W)=>{o(pe=>pe.map(Te=>{const ye=Te.fieldsets.map(ve=>ve.id===ne?typeof ee=="string"?{...ve,[ee]:W}:{...ve,...ee}:ve);return{...Te,fieldsets:ye}}))},{t:I}=yi(),Ee=qe.useMemo(()=>{const ne=(ee,W=!1)=>{let pe="";for(const V of ee)if(V.title==="Featured News")for(let M=0;M<V.fieldsets.length;M++)(M+1)%2!=0?pe+=_0(V.fieldsets[M].url,V.fieldsets[M].title,V.fieldsets[M].summary,V.fieldsets[M].cta,I("alt"),W?"./Securex_New_Lex4You.jpg":void 0):pe+=R0(V.fieldsets[M].url,V.fieldsets[M].title,V.fieldsets[M].summary,V.fieldsets[M].cta,I("alt"),W?"./Securex_New_Lex4You.jpg":void 0);for(const V of ee)if(V.title==="Euro Tip")for(let M=0;M<V.fieldsets.length;M++)pe+=z0(V.fieldsets[M].url,V.fieldsets[M].title,V.fieldsets[M].summary,V.fieldsets[M].cta,I("euroTipPreHeader"));for(const V of ee)if(V.title==="HR Tip")for(let M=0;M<V.fieldsets.length;M++)pe+=H0(V.fieldsets[M].url,V.fieldsets[M].title,V.fieldsets[M].summary,V.fieldsets[M].cta,I("HRTipPreHeader"));let Te="";for(const V of ee)if(V.title==="Trainings"&&V.fieldsets.length>0){for(let M=0;M<V.fieldsets.length;M++)Te+=U0(V.fieldsets[M].url,V.fieldsets[M].title,V.fieldsets[M].date,V.fieldsets[M].time,V.fieldsets[M].format,V.fieldsets[M].price);pe+=L0(Te,I("section_header"),I("th_training"),I("th_day_time"),I("th_format"),I("th_price_ex_vat"),I("section_cta_url"),I("section_cta_copy"))}let ye="",ve="",We="";for(const V of ee){if(V.title==="Sector News"&&V.fieldsets.length>0){let M="";for(let B=0;B<V.fieldsets.length;B++)M+=B0(V.fieldsets[B].url,V.fieldsets[B].title,V.fieldsets[B].subtitle);ve+=Y0(M,I("sectorNewsHeader"))}if(V.title==="Other News"&&V.fieldsets.length>0){let M="";for(let B=0;B<V.fieldsets.length;B++)M+=k0(V.fieldsets[B].url,V.fieldsets[B].title,V.fieldsets[B].subtitle);We+=q0(M,I("otherNewsHeader"))}}return ye=ve+We,ye.length>0&&(pe+=`${j0(ye)}`),`${N0(pe,W?"./Securex_Lex4You_logo.png":void 0,I("pre_header_copy"),I("view_online_copy"),I("img_link"),s.toLocaleDateString(E.language,{day:"numeric",month:"long",year:"numeric"}),I("tagline"),I("contact_link"),I("contact_copy"),I("disclaimer_link"),I("disclaimer_copy"),I("preferences_link"),I("preferences_copy"))}`};return{forPreview:ne(a,!0),forCopy:ne(a,!1)}},[a,s,E.language,I]),ge=()=>{y?navigator.clipboard.writeText(y).then(()=>{m(!0),setTimeout(()=>m(!1),2e3),console.log("HTML copied to clipboard!")}).catch(ne=>{console.error("Failed to copy HTML: ",ne)}):console.warn("No HTML content to copy.")};return qe.useEffect(()=>{d(Ee.forPreview),D(Ee.forCopy)},[Ee]),$.jsxs($.Fragment,{children:[$.jsx(Im,{title:"FlasHR",subtitle:"composer",selectedDate:s,onDateChange:r}),$.jsxs("div",{className:"grid",children:[$.jsx(i0,{sections:a,onAddFieldset:J,onRemove:Oe,onFieldChange:ce}),$.jsx(u0,{html:f,onCopy:ge,isCopied:v})]})]})}dm.createRoot(document.getElementById("root")).render($.jsxs(qe.StrictMode,{children:[$.jsx("main",{className:"max-w-6xl mx-auto px-6 py-6",children:$.jsx(G0,{})}),$.jsx("script",{type:"module",src:"./node_modules/flyonui/flyonui.js"})]}));
