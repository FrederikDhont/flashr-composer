(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();var dc={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function Sp(){if(Sd)return On;Sd=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,d,h){var m=null;if(h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),"key"in d){h={};for(var x in d)x!=="key"&&(h[x]=d[x])}else h=d;return d=h.ref,{$$typeof:o,type:s,key:m,ref:d!==void 0?d:null,props:h}}return On.Fragment=u,On.jsx=c,On.jsxs=c,On}var xd;function xp(){return xd||(xd=1,dc.exports=Sp()),dc.exports}var J=xp(),hc={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Tp(){if(Td)return it;Td=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function z(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,X={};function K(b,C,j){this.props=b,this.context=C,this.refs=X,this.updater=j||G}K.prototype.isReactComponent={},K.prototype.setState=function(b,C){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,C,"setState")},K.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function vt(){}vt.prototype=K.prototype;function ht(b,C,j){this.props=b,this.context=C,this.refs=X,this.updater=j||G}var Q=ht.prototype=new vt;Q.constructor=ht,B(Q,K.prototype),Q.isPureReactComponent=!0;var P=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function at(b,C,j,L,k,gt){return j=gt.ref,{$$typeof:o,type:b,key:C,ref:j!==void 0?j:null,props:gt}}function tt(b,C){return at(b.type,C,void 0,void 0,void 0,b.props)}function ot(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function Nt(b){var C={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(j){return C[j]})}var _=/\/+/g;function q(b,C){return typeof b=="object"&&b!==null&&b.key!=null?Nt(""+b.key):C.toString(36)}function Mt(){}function Yt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Mt,Mt):(b.status="pending",b.then(function(C){b.status==="pending"&&(b.status="fulfilled",b.value=C)},function(C){b.status==="pending"&&(b.status="rejected",b.reason=C)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ot(b,C,j,L,k){var gt=typeof b;(gt==="undefined"||gt==="boolean")&&(b=null);var lt=!1;if(b===null)lt=!0;else switch(gt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(b.$$typeof){case o:case u:lt=!0;break;case E:return lt=b._init,Ot(lt(b._payload),C,j,L,k)}}if(lt)return k=k(b),lt=L===""?"."+q(b,0):L,P(k)?(j="",lt!=null&&(j=lt.replace(_,"$&/")+"/"),Ot(k,C,j,"",function(ke){return ke})):k!=null&&(ot(k)&&(k=tt(k,j+(k.key==null||b&&b.key===k.key?"":(""+k.key).replace(_,"$&/")+"/")+lt)),C.push(k)),1;lt=0;var ie=L===""?".":L+":";if(P(b))for(var zt=0;zt<b.length;zt++)L=b[zt],gt=ie+q(L,zt),lt+=Ot(L,C,j,gt,k);else if(zt=z(b),typeof zt=="function")for(b=zt.call(b),zt=0;!(L=b.next()).done;)L=L.value,gt=ie+q(L,zt++),lt+=Ot(L,C,j,gt,k);else if(gt==="object"){if(typeof b.then=="function")return Ot(Yt(b),C,j,L,k);throw C=String(b),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return lt}function R(b,C,j){if(b==null)return b;var L=[],k=0;return Ot(b,L,"","",function(gt){return C.call(j,gt,k++)}),L}function H(b){if(b._status===-1){var C=b._result;C=C(),C.then(function(j){(b._status===0||b._status===-1)&&(b._status=1,b._result=j)},function(j){(b._status===0||b._status===-1)&&(b._status=2,b._result=j)}),b._status===-1&&(b._status=0,b._result=C)}if(b._status===1)return b._result.default;throw b._result}var $=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function nt(){}return it.Children={map:R,forEach:function(b,C,j){R(b,function(){C.apply(this,arguments)},j)},count:function(b){var C=0;return R(b,function(){C++}),C},toArray:function(b){return R(b,function(C){return C})||[]},only:function(b){if(!ot(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},it.Component=K,it.Fragment=c,it.Profiler=d,it.PureComponent=ht,it.StrictMode=s,it.Suspense=y,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,it.__COMPILER_RUNTIME={__proto__:null,c:function(b){return V.H.useMemoCache(b)}},it.cache=function(b){return function(){return b.apply(null,arguments)}},it.cloneElement=function(b,C,j){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var L=B({},b.props),k=b.key,gt=void 0;if(C!=null)for(lt in C.ref!==void 0&&(gt=void 0),C.key!==void 0&&(k=""+C.key),C)!ft.call(C,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&C.ref===void 0||(L[lt]=C[lt]);var lt=arguments.length-2;if(lt===1)L.children=j;else if(1<lt){for(var ie=Array(lt),zt=0;zt<lt;zt++)ie[zt]=arguments[zt+2];L.children=ie}return at(b.type,k,void 0,void 0,gt,L)},it.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},it.createElement=function(b,C,j){var L,k={},gt=null;if(C!=null)for(L in C.key!==void 0&&(gt=""+C.key),C)ft.call(C,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(k[L]=C[L]);var lt=arguments.length-2;if(lt===1)k.children=j;else if(1<lt){for(var ie=Array(lt),zt=0;zt<lt;zt++)ie[zt]=arguments[zt+2];k.children=ie}if(b&&b.defaultProps)for(L in lt=b.defaultProps,lt)k[L]===void 0&&(k[L]=lt[L]);return at(b,gt,void 0,void 0,null,k)},it.createRef=function(){return{current:null}},it.forwardRef=function(b){return{$$typeof:x,render:b}},it.isValidElement=ot,it.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:H}},it.memo=function(b,C){return{$$typeof:p,type:b,compare:C===void 0?null:C}},it.startTransition=function(b){var C=V.T,j={};V.T=j;try{var L=b(),k=V.S;k!==null&&k(j,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(nt,$)}catch(gt){$(gt)}finally{V.T=C}},it.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},it.use=function(b){return V.H.use(b)},it.useActionState=function(b,C,j){return V.H.useActionState(b,C,j)},it.useCallback=function(b,C){return V.H.useCallback(b,C)},it.useContext=function(b){return V.H.useContext(b)},it.useDebugValue=function(){},it.useDeferredValue=function(b,C){return V.H.useDeferredValue(b,C)},it.useEffect=function(b,C,j){var L=V.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(b,C)},it.useId=function(){return V.H.useId()},it.useImperativeHandle=function(b,C,j){return V.H.useImperativeHandle(b,C,j)},it.useInsertionEffect=function(b,C){return V.H.useInsertionEffect(b,C)},it.useLayoutEffect=function(b,C){return V.H.useLayoutEffect(b,C)},it.useMemo=function(b,C){return V.H.useMemo(b,C)},it.useOptimistic=function(b,C){return V.H.useOptimistic(b,C)},it.useReducer=function(b,C,j){return V.H.useReducer(b,C,j)},it.useRef=function(b){return V.H.useRef(b)},it.useState=function(b){return V.H.useState(b)},it.useSyncExternalStore=function(b,C,j){return V.H.useSyncExternalStore(b,C,j)},it.useTransition=function(){return V.H.useTransition()},it.version="19.1.0",it}var Ed;function Oc(){return Ed||(Ed=1,hc.exports=Tp()),hc.exports}var qt=Oc(),gc={exports:{}},An={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Ep(){return Od||(Od=1,function(o){function u(R,H){var $=R.length;R.push(H);t:for(;0<$;){var nt=$-1>>>1,b=R[nt];if(0<d(b,H))R[nt]=H,R[$]=b,$=nt;else break t}}function c(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var H=R[0],$=R.pop();if($!==H){R[0]=$;t:for(var nt=0,b=R.length,C=b>>>1;nt<C;){var j=2*(nt+1)-1,L=R[j],k=j+1,gt=R[k];if(0>d(L,$))k<b&&0>d(gt,L)?(R[nt]=gt,R[k]=$,nt=k):(R[nt]=L,R[j]=$,nt=j);else if(k<b&&0>d(gt,$))R[nt]=gt,R[k]=$,nt=k;else break t}}return H}function d(R,H){var $=R.sortIndex-H.sortIndex;return $!==0?$:R.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var m=Date,x=m.now();o.unstable_now=function(){return m.now()-x}}var y=[],p=[],E=1,w=null,z=3,G=!1,B=!1,X=!1,K=!1,vt=typeof setTimeout=="function"?setTimeout:null,ht=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function P(R){for(var H=c(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=R)s(p),H.sortIndex=H.expirationTime,u(y,H);else break;H=c(p)}}function V(R){if(X=!1,P(R),!B)if(c(y)!==null)B=!0,ft||(ft=!0,q());else{var H=c(p);H!==null&&Ot(V,H.startTime-R)}}var ft=!1,at=-1,tt=5,ot=-1;function Nt(){return K?!0:!(o.unstable_now()-ot<tt)}function _(){if(K=!1,ft){var R=o.unstable_now();ot=R;var H=!0;try{t:{B=!1,X&&(X=!1,ht(at),at=-1),G=!0;var $=z;try{e:{for(P(R),w=c(y);w!==null&&!(w.expirationTime>R&&Nt());){var nt=w.callback;if(typeof nt=="function"){w.callback=null,z=w.priorityLevel;var b=nt(w.expirationTime<=R);if(R=o.unstable_now(),typeof b=="function"){w.callback=b,P(R),H=!0;break e}w===c(y)&&s(y),P(R)}else s(y);w=c(y)}if(w!==null)H=!0;else{var C=c(p);C!==null&&Ot(V,C.startTime-R),H=!1}}break t}finally{w=null,z=$,G=!1}H=void 0}}finally{H?q():ft=!1}}}var q;if(typeof Q=="function")q=function(){Q(_)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Yt=Mt.port2;Mt.port1.onmessage=_,q=function(){Yt.postMessage(null)}}else q=function(){vt(_,0)};function Ot(R,H){at=vt(function(){R(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(R){switch(z){case 1:case 2:case 3:var H=3;break;default:H=z}var $=z;z=H;try{return R()}finally{z=$}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=z;z=R;try{return H()}finally{z=$}},o.unstable_scheduleCallback=function(R,H,$){var nt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?nt+$:nt):$=nt,R){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=$+b,R={id:E++,callback:H,priorityLevel:R,startTime:$,expirationTime:b,sortIndex:-1},$>nt?(R.sortIndex=$,u(p,R),c(y)===null&&R===c(p)&&(X?(ht(at),at=-1):X=!0,Ot(V,$-nt))):(R.sortIndex=b,u(y,R),B||G||(B=!0,ft||(ft=!0,q()))),R},o.unstable_shouldYield=Nt,o.unstable_wrapCallback=function(R){var H=z;return function(){var $=z;z=H;try{return R.apply(this,arguments)}finally{z=$}}}}(mc)),mc}var Ad;function Op(){return Ad||(Ad=1,pc.exports=Ep()),pc.exports}var yc={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Ap(){if(Nd)return Wt;Nd=1;var o=Oc();function u(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,p,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:y,containerInfo:p,implementation:E}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return h(y,p,null,E)},Wt.flushSync=function(y){var p=m.T,E=s.p;try{if(m.T=null,s.p=2,y)return y()}finally{m.T=p,s.p=E,s.d.f()}},Wt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Wt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Wt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,w=x(E,p.crossOrigin),z=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:G}):E==="script"&&s.d.X(y,{crossOrigin:w,integrity:z,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=x(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Wt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,w=x(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wt.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=x(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Wt.requestFormReset=function(y){s.d.r(y)},Wt.unstable_batchedUpdates=function(y,p){return y(p)},Wt.useFormState=function(y,p,E){return m.H.useFormState(y,p,E)},Wt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var zd;function Np(){if(zd)return yc.exports;zd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),yc.exports=Ap(),yc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function zp(){if(Rd)return An;Rd=1;var o=Op(),u=Oc(),c=Np();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(h(t)!==t)throw Error(s(188))}function y(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return x(n),t;if(i===a)return x(n),e;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,f=n.child;f;){if(f===l){r=!0,l=n,a=i;break}if(f===a){r=!0,a=n,l=i;break}f=f.sibling}if(!r){for(f=i.child;f;){if(f===l){r=!0,l=i,a=n;break}if(f===a){r=!0,a=i,l=n;break}f=f.sibling}if(!r)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),ht=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),ot=Symbol.for("react.activity"),Nt=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=_&&t[_]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case K:return"Profiler";case X:return"StrictMode";case V:return"Suspense";case ft:return"SuspenseList";case ot:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case Q:return(t.displayName||"Context")+".Provider";case ht:return(t._context.displayName||"Context")+".Consumer";case P:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return e=t.displayName||null,e!==null?e:Yt(t.type)||"Memo";case tt:e=t._payload,t=t._init;try{return Yt(t(e))}catch{}}return null}var Ot=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},nt=[],b=-1;function C(t){return{current:t}}function j(t){0>b||(t.current=nt[b],nt[b]=null,b--)}function L(t,e){b++,nt[b]=t.current,t.current=e}var k=C(null),gt=C(null),lt=C(null),ie=C(null);function zt(t,e){switch(L(lt,e),L(gt,t),L(k,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$o(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$o(e),t=ko(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(k),L(k,t)}function ke(){j(k),j(gt),j(lt)}function Wi(t){t.memoizedState!==null&&L(ie,t);var e=k.current,l=ko(e,t.type);e!==l&&(L(gt,t),L(k,l))}function Mn(t){gt.current===t&&(j(k),j(gt)),ie.current===t&&(j(ie),vn._currentValue=$)}var Ii=Object.prototype.hasOwnProperty,Pi=o.unstable_scheduleCallback,tu=o.unstable_cancelCallback,Id=o.unstable_shouldYield,Pd=o.unstable_requestPaint,ze=o.unstable_now,th=o.unstable_getCurrentPriorityLevel,Nc=o.unstable_ImmediatePriority,zc=o.unstable_UserBlockingPriority,Un=o.unstable_NormalPriority,eh=o.unstable_LowPriority,Rc=o.unstable_IdlePriority,lh=o.log,ah=o.unstable_setDisableYieldValue,Na=null,ue=null;function Fe(t){if(typeof lh=="function"&&ah(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Na,t)}catch{}}var se=Math.clz32?Math.clz32:uh,nh=Math.log,ih=Math.LN2;function uh(t){return t>>>=0,t===0?32:31-(nh(t)/ih|0)|0}var wn=256,Cn=4194304;function Sl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _n(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Sl(a):(r&=f,r!==0?n=Sl(r):l||(l=f&~t,l!==0&&(n=Sl(l))))):(f=a&~i,f!==0?n=Sl(f):r!==0?n=Sl(r):l||(l=a&~t,l!==0&&(n=Sl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function za(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function sh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dc(){var t=wn;return wn<<=1,(wn&4194048)===0&&(wn=256),t}function Mc(){var t=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),t}function eu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ra(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ch(t,e,l,a,n,i){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,g=t.expirationTimes,O=t.hiddenUpdates;for(l=r&~l;0<l;){var D=31-se(l),U=1<<D;f[D]=0,g[D]=-1;var A=O[D];if(A!==null)for(O[D]=null,D=0;D<A.length;D++){var N=A[D];N!==null&&(N.lane&=-536870913)}l&=~U}a!==0&&Uc(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function Uc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-se(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function wc(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-se(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function lu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function au(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cc(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:gd(t.type))}function rh(t,e){var l=H.p;try{return H.p=t,e()}finally{H.p=l}}var We=Math.random().toString(36).slice(2),kt="__reactFiber$"+We,te="__reactProps$"+We,ql="__reactContainer$"+We,nu="__reactEvents$"+We,fh="__reactListeners$"+We,oh="__reactHandles$"+We,_c="__reactResources$"+We,Da="__reactMarker$"+We;function iu(t){delete t[kt],delete t[te],delete t[nu],delete t[fh],delete t[oh]}function Yl(t){var e=t[kt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ql]||l[kt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Po(t);t!==null;){if(l=t[kt])return l;t=Po(t)}return e}t=l,l=t.parentNode}return null}function Gl(t){if(t=t[kt]||t[ql]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ma(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Vl(t){var e=t[_c];return e||(e=t[_c]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[Da]=!0}var Hc=new Set,Lc={};function xl(t,e){Xl(t,e),Xl(t+"Capture",e)}function Xl(t,e){for(Lc[t]=e,t=0;t<e.length;t++)Hc.add(e[t])}var dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},jc={};function hh(t){return Ii.call(jc,t)?!0:Ii.call(Bc,t)?!1:dh.test(t)?jc[t]=!0:(Bc[t]=!0,!1)}function Hn(t,e,l){if(hh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ln(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function _e(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var uu,qc;function Ql(t){if(uu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||"",qc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+t+qc}var su=!1;function cu(t,e){if(!t||su)return"";su=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(N){var A=N}Reflect.construct(t,[],U)}else{try{U.call()}catch(N){A=N}t.call(U.prototype)}}else{try{throw Error()}catch(N){A=N}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(N){if(N&&A&&typeof N.stack=="string")return[N.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],f=i[1];if(r&&f){var g=r.split(`
`),O=f.split(`
`);for(n=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;n<O.length&&!O[n].includes("DetermineComponentFrameRoot");)n++;if(a===g.length||n===O.length)for(a=g.length-1,n=O.length-1;1<=a&&0<=n&&g[a]!==O[n];)n--;for(;1<=a&&0<=n;a--,n--)if(g[a]!==O[n]){if(a!==1||n!==1)do if(a--,n--,0>n||g[a]!==O[n]){var D=`
`+g[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=n);break}}}finally{su=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ql(l):""}function gh(t){switch(t.tag){case 26:case 27:case 5:return Ql(t.type);case 16:return Ql("Lazy");case 13:return Ql("Suspense");case 19:return Ql("SuspenseList");case 0:case 15:return cu(t.type,!1);case 11:return cu(t.type.render,!1);case 1:return cu(t.type,!0);case 31:return Ql("Activity");default:return""}}function Yc(t){try{var e="";do e+=gh(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ph(t){var e=Gc(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bn(t){t._valueTracker||(t._valueTracker=ph(t))}function Vc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Gc(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mh=/[\n"\\]/g;function me(t){return t.replace(mh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ru(t,e,l,a,n,i,r,f){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?fu(t,r,pe(e)):l!=null?fu(t,r,pe(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+pe(f):t.removeAttribute("name")}function Xc(t,e,l,a,n,i,r,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+pe(l):"",e=e!=null?""+pe(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function fu(t,e,l){e==="number"&&jn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Zl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+pe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Qc(t,e,l){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+pe(l):""}function Zc(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(Ot(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=pe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Kl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var yh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||yh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Jc(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Kc(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Kc(t,i,e[i])}function ou(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(t){return vh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var du=null;function hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jl=null,$l=null;function $c(t){var e=Gl(t);if(e&&(t=e.stateNode)){var l=t[te]||null;t:switch(t=e.stateNode,e.type){case"input":if(ru(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[te]||null;if(!n)throw Error(s(90));ru(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Vc(a)}break t;case"textarea":Qc(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Zl(t,!!l.multiple,e,!1)}}}var gu=!1;function kc(t,e,l){if(gu)return t(e,l);gu=!0;try{var a=t(e);return a}finally{if(gu=!1,(Jl!==null||$l!==null)&&(Oi(),Jl&&(e=Jl,t=$l,$l=Jl=null,$c(e),t)))for(e=0;e<t.length;e++)$c(t[e])}}function Ua(t,e){var l=t.stateNode;if(l===null)return null;var a=l[te]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(He)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){pu=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{pu=!1}var Ie=null,mu=null,Yn=null;function Fc(){if(Yn)return Yn;var t,e=mu,l=e.length,a,n="value"in Ie?Ie.value:Ie.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===n[i-a];a++);return Yn=n.slice(t,1<a?1-a:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vn(){return!0}function Wc(){return!1}function ee(t){function e(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vn:Wc,this.isPropagationStopped=Wc,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),e}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=ee(Tl),Ca=E({},Tl,{view:0,detail:0}),Sh=ee(Ca),yu,bu,_a,Qn=E({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(yu=t.screenX-_a.screenX,bu=t.screenY-_a.screenY):bu=yu=0,_a=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Ic=ee(Qn),xh=E({},Qn,{dataTransfer:0}),Th=ee(xh),Eh=E({},Ca,{relatedTarget:0}),vu=ee(Eh),Oh=E({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ah=ee(Oh),Nh=E({},Tl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zh=ee(Nh),Rh=E({},Tl,{data:0}),Pc=ee(Rh),Dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uh[t])?!!e[t]:!1}function Su(){return wh}var Ch=E({},Ca,{key:function(t){if(t.key){var e=Dh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_h=ee(Ch),Hh=E({},Qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tr=ee(Hh),Lh=E({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Bh=ee(Lh),jh=E({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=ee(jh),Yh=E({},Qn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=ee(Yh),Vh=E({},Tl,{newState:0,oldState:0}),Xh=ee(Vh),Qh=[9,13,27,32],xu=He&&"CompositionEvent"in window,Ha=null;He&&"documentMode"in document&&(Ha=document.documentMode);var Zh=He&&"TextEvent"in window&&!Ha,er=He&&(!xu||Ha&&8<Ha&&11>=Ha),lr=" ",ar=!1;function nr(t,e){switch(t){case"keyup":return Qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ir(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kl=!1;function Kh(t,e){switch(t){case"compositionend":return ir(e);case"keypress":return e.which!==32?null:(ar=!0,lr);case"textInput":return t=e.data,t===lr&&ar?null:t;default:return null}}function Jh(t,e){if(kl)return t==="compositionend"||!xu&&nr(t,e)?(t=Fc(),Yn=mu=Ie=null,kl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return er&&e.locale!=="ko"?null:e.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$h[t.type]:e==="textarea"}function sr(t,e,l,a){Jl?$l?$l.push(a):$l=[a]:Jl=a,e=Mi(e,"onChange"),0<e.length&&(l=new Xn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var La=null,Ba=null;function kh(t){Xo(t,0)}function Zn(t){var e=Ma(t);if(Vc(e))return t}function cr(t,e){if(t==="change")return e}var rr=!1;if(He){var Tu;if(He){var Eu="oninput"in document;if(!Eu){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),Eu=typeof fr.oninput=="function"}Tu=Eu}else Tu=!1;rr=Tu&&(!document.documentMode||9<document.documentMode)}function or(){La&&(La.detachEvent("onpropertychange",dr),Ba=La=null)}function dr(t){if(t.propertyName==="value"&&Zn(Ba)){var e=[];sr(e,Ba,t,hu(t)),kc(kh,e)}}function Fh(t,e,l){t==="focusin"?(or(),La=e,Ba=l,La.attachEvent("onpropertychange",dr)):t==="focusout"&&or()}function Wh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zn(Ba)}function Ih(t,e){if(t==="click")return Zn(e)}function Ph(t,e){if(t==="input"||t==="change")return Zn(e)}function tg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ce=typeof Object.is=="function"?Object.is:tg;function ja(t,e){if(ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ii.call(e,n)||!ce(t[n],e[n]))return!1}return!0}function hr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gr(t,e){var l=hr(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=hr(l)}}function pr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=jn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=jn(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var eg=He&&"documentMode"in document&&11>=document.documentMode,Fl=null,Au=null,qa=null,Nu=!1;function yr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||Fl==null||Fl!==jn(a)||(a=Fl,"selectionStart"in a&&Ou(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&ja(qa,a)||(qa=a,a=Mi(Au,"onSelect"),0<a.length&&(e=new Xn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Fl)))}function El(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Wl={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionrun:El("Transition","TransitionRun"),transitionstart:El("Transition","TransitionStart"),transitioncancel:El("Transition","TransitionCancel"),transitionend:El("Transition","TransitionEnd")},zu={},br={};He&&(br=document.createElement("div").style,"AnimationEvent"in window||(delete Wl.animationend.animation,delete Wl.animationiteration.animation,delete Wl.animationstart.animation),"TransitionEvent"in window||delete Wl.transitionend.transition);function Ol(t){if(zu[t])return zu[t];if(!Wl[t])return t;var e=Wl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in br)return zu[t]=e[l];return t}var vr=Ol("animationend"),Sr=Ol("animationiteration"),xr=Ol("animationstart"),lg=Ol("transitionrun"),ag=Ol("transitionstart"),ng=Ol("transitioncancel"),Tr=Ol("transitionend"),Er=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Oe(t,e){Er.set(t,e),xl(e,[t])}var Or=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var l=Or.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Yc(e)},Or.set(t,e),e)}return{value:t,source:e,stack:Yc(e)}}var be=[],Il=0,Du=0;function Kn(){for(var t=Il,e=Du=Il=0;e<t;){var l=be[e];be[e++]=null;var a=be[e];be[e++]=null;var n=be[e];be[e++]=null;var i=be[e];if(be[e++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&Ar(l,n,i)}}function Jn(t,e,l,a){be[Il++]=t,be[Il++]=e,be[Il++]=l,be[Il++]=a,Du|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Mu(t,e,l,a){return Jn(t,e,l,a),$n(t)}function Pl(t,e){return Jn(t,null,null,e),$n(t)}function Ar(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-se(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function $n(t){if(50<on)throw on=0,Ls=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ta={};function ig(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function re(t,e,l,a){return new ig(t,e,l,a)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Le(t,e){var l=t.alternate;return l===null?(l=re(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Nr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function kn(t,e,l,a,n,i){var r=0;if(a=t,typeof t=="function")Uu(t)&&(r=1);else if(typeof t=="string")r=sp(t,l,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ot:return t=re(31,l,e,n),t.elementType=ot,t.lanes=i,t;case B:return Al(l.children,n,i,e);case X:r=8,n|=24;break;case K:return t=re(12,l,e,n|2),t.elementType=K,t.lanes=i,t;case V:return t=re(13,l,e,n),t.elementType=V,t.lanes=i,t;case ft:return t=re(19,l,e,n),t.elementType=ft,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vt:case Q:r=10;break t;case ht:r=9;break t;case P:r=11;break t;case at:r=14;break t;case tt:r=16,a=null;break t}r=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=re(r,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Al(t,e,l,a){return t=re(7,t,a,e),t.lanes=l,t}function wu(t,e,l){return t=re(6,t,null,e),t.lanes=l,t}function Cu(t,e,l){return e=re(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ea=[],la=0,Fn=null,Wn=0,ve=[],Se=0,Nl=null,Be=1,je="";function zl(t,e){ea[la++]=Wn,ea[la++]=Fn,Fn=t,Wn=e}function zr(t,e,l){ve[Se++]=Be,ve[Se++]=je,ve[Se++]=Nl,Nl=t;var a=Be;t=je;var n=32-se(a)-1;a&=~(1<<n),l+=1;var i=32-se(e)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,Be=1<<32-se(e)+n|l<<n|a,je=i+t}else Be=1<<i|l<<n|a,je=t}function _u(t){t.return!==null&&(zl(t,1),zr(t,1,0))}function Hu(t){for(;t===Fn;)Fn=ea[--la],ea[la]=null,Wn=ea[--la],ea[la]=null;for(;t===Nl;)Nl=ve[--Se],ve[Se]=null,je=ve[--Se],ve[Se]=null,Be=ve[--Se],ve[Se]=null}var Pt=null,Ut=null,mt=!1,Rl=null,Re=!1,Lu=Error(s(519));function Dl(t){var e=Error(s(418,""));throw Va(ye(e,t)),Lu}function Rr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[kt]=t,e[te]=a,l){case"dialog":rt("cancel",e),rt("close",e);break;case"iframe":case"object":case"embed":rt("load",e);break;case"video":case"audio":for(l=0;l<hn.length;l++)rt(hn[l],e);break;case"source":rt("error",e);break;case"img":case"image":case"link":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"input":rt("invalid",e),Xc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bn(e);break;case"select":rt("invalid",e);break;case"textarea":rt("invalid",e),Zc(e,a.value,a.defaultValue,a.children),Bn(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Jo(e.textContent,l)?(a.popover!=null&&(rt("beforetoggle",e),rt("toggle",e)),a.onScroll!=null&&rt("scroll",e),a.onScrollEnd!=null&&rt("scrollend",e),a.onClick!=null&&(e.onclick=Ui),e=!0):e=!1,e||Dl(t)}function Dr(t){for(Pt=t.return;Pt;)switch(Pt.tag){case 5:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:Pt=Pt.return}}function Ya(t){if(t!==Pt)return!1;if(!mt)return Dr(t),mt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Is(t.type,t.memoizedProps)),l=!l),l&&Ut&&Dl(t),Dr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Ut=Ne(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Ut=null}}else e===27?(e=Ut,gl(t.type)?(t=lc,lc=null,Ut=t):Ut=e):Ut=Pt?Ne(t.stateNode.nextSibling):null;return!0}function Ga(){Ut=Pt=null,mt=!1}function Mr(){var t=Rl;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),Rl=null),t}function Va(t){Rl===null?Rl=[t]:Rl.push(t)}var Bu=C(null),Ml=null,qe=null;function Pe(t,e,l){L(Bu,e._currentValue),e._currentValue=l}function Ye(t){t._currentValue=Bu.current,j(Bu)}function ju(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function qu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=n;for(var g=0;g<e.length;g++)if(f.context===e[g]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),ju(i.return,l,t),a||(r=null);break t}i=f.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(s(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),ju(r,l,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Xa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var f=n.type;ce(n.pendingProps.value,r.value)||(t!==null?t.push(f):t=[f])}}else if(n===ie.current){if(r=n.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&qu(e,t,l,a),e.flags|=262144}function In(t){for(t=t.firstContext;t!==null;){if(!ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ul(t){Ml=t,qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Ur(Ml,t)}function Pn(t,e){return Ml===null&&Ul(t),Ur(t,e)}function Ur(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},qe===null){if(t===null)throw Error(s(308));qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else qe=qe.next=e;return l}var ug=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},sg=o.unstable_scheduleCallback,cg=o.unstable_NormalPriority,Bt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new ug,data:new Map,refCount:0}}function Qa(t){t.refCount--,t.refCount===0&&sg(cg,function(){t.controller.abort()})}var Za=null,Gu=0,aa=0,na=null;function rg(t,e){if(Za===null){var l=Za=[];Gu=0,aa=Xs(),na={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Gu++,e.then(wr,wr),e}function wr(){if(--Gu===0&&Za!==null){na!==null&&(na.status="fulfilled");var t=Za;Za=null,aa=0,na=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fg(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Cr=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&rg(t,e),Cr!==null&&Cr(t,e)};var wl=C(null);function Vu(){var t=wl.current;return t!==null?t:At.pooledCache}function ti(t,e){e===null?L(wl,wl.current):L(wl,e.pool)}function _r(){var t=Vu();return t===null?null:{parent:Bt._currentValue,pool:t}}var Ka=Error(s(460)),Hr=Error(s(474)),ei=Error(s(542)),Xu={then:function(){}};function Lr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function li(){}function Br(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(li,li),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t;default:if(typeof e.status=="string")e.then(li,li);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t}throw Ja=e,Ka}}var Ja=null;function jr(){if(Ja===null)throw Error(s(459));var t=Ja;return Ja=null,t}function qr(t){if(t===Ka||t===ei)throw Error(s(483))}var tl=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function el(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ll(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(yt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=$n(t),Ar(t,null,l),e}return Jn(t,a,e,l),$n(t)}function $a(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,wc(t,l)}}function Ku(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Ju=!1;function ka(){if(Ju){var t=na;if(t!==null)throw t}}function Fa(t,e,l,a){Ju=!1;var n=t.updateQueue;tl=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var g=f,O=g.next;g.next=null,r===null?i=O:r.next=O,r=g;var D=t.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==r&&(f===null?D.firstBaseUpdate=O:f.next=O,D.lastBaseUpdate=g))}if(i!==null){var U=n.baseState;r=0,D=O=g=null,f=i;do{var A=f.lane&-536870913,N=A!==f.lane;if(N?(dt&A)===A:(a&A)===A){A!==0&&A===aa&&(Ju=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var I=t,F=f;A=e;var Tt=l;switch(F.tag){case 1:if(I=F.payload,typeof I=="function"){U=I.call(Tt,U,A);break t}U=I;break t;case 3:I.flags=I.flags&-65537|128;case 0:if(I=F.payload,A=typeof I=="function"?I.call(Tt,U,A):I,A==null)break t;U=E({},U,A);break t;case 2:tl=!0}}A=f.callback,A!==null&&(t.flags|=64,N&&(t.flags|=8192),N=n.callbacks,N===null?n.callbacks=[A]:N.push(A))}else N={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(O=D=N,g=U):D=D.next=N,r|=A;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;N=f,f=N.next,N.next=null,n.lastBaseUpdate=N,n.shared.pending=null}}while(!0);D===null&&(g=U),n.baseState=g,n.firstBaseUpdate=O,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),fl|=r,t.lanes=r,t.memoizedState=U}}function Yr(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Gr(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Yr(l[t],e)}var ia=C(null),ai=C(0);function Vr(t,e){t=Je,L(ai,t),L(ia,e),Je=t|e.baseLanes}function $u(){L(ai,Je),L(ia,ia.current)}function ku(){Je=ai.current,j(ia),j(ai)}var al=0,ut=null,St=null,Ht=null,ni=!1,ua=!1,Cl=!1,ii=0,Wa=0,sa=null,og=0;function Ct(){throw Error(s(321))}function Fu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ce(t[l],e[l]))return!1;return!0}function Wu(t,e,l,a,n,i){return al=i,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?Nf:zf,Cl=!1,i=l(a,n),Cl=!1,ua&&(i=Qr(e,l,a,n)),Xr(t),i}function Xr(t){R.H=oi;var e=St!==null&&St.next!==null;if(al=0,Ht=St=ut=null,ni=!1,Wa=0,sa=null,e)throw Error(s(300));t===null||Vt||(t=t.dependencies,t!==null&&In(t)&&(Vt=!0))}function Qr(t,e,l,a){ut=t;var n=0;do{if(ua&&(sa=null),Wa=0,ua=!1,25<=n)throw Error(s(301));if(n+=1,Ht=St=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=bg,i=e(l,a)}while(ua);return i}function dg(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?Ia(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(ut.flags|=1024),e}function Iu(){var t=ii!==0;return ii=0,t}function Pu(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ts(t){if(ni){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ni=!1}al=0,Ht=St=ut=null,ua=!1,Wa=ii=0,sa=null}function le(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Lt(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ht===null?ut.memoizedState:Ht.next;if(e!==null)Ht=e,St=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function es(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ia(t){var e=Wa;return Wa+=1,sa===null&&(sa=[]),t=Br(sa,t,e),e=ut,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?Nf:zf),t}function ui(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ia(t);if(t.$$typeof===Q)return Ft(t)}throw Error(s(438,String(t)))}function ls(t){var e=null,l=ut.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=ut.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=es(),ut.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Nt;return e.index++,l}function Ge(t,e){return typeof e=="function"?e(t):e}function si(t){var e=Lt();return as(e,St,t)}function as(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var f=r=null,g=null,O=e,D=!1;do{var U=O.lane&-536870913;if(U!==O.lane?(dt&U)===U:(al&U)===U){var A=O.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),U===aa&&(D=!0);else if((al&A)===A){O=O.next,A===aa&&(D=!0);continue}else U={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},g===null?(f=g=U,r=i):g=g.next=U,ut.lanes|=A,fl|=A;U=O.action,Cl&&l(i,U),i=O.hasEagerState?O.eagerState:l(i,U)}else A={lane:U,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},g===null?(f=g=A,r=i):g=g.next=A,ut.lanes|=U,fl|=U;O=O.next}while(O!==null&&O!==e);if(g===null?r=i:g.next=f,!ce(i,t.memoizedState)&&(Vt=!0,D&&(l=na,l!==null)))throw l;t.memoizedState=i,t.baseState=r,t.baseQueue=g,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ns(t){var e=Lt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);ce(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Zr(t,e,l){var a=ut,n=Lt(),i=mt;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=e();var r=!ce((St||n).memoizedState,l);r&&(n.memoizedState=l,Vt=!0),n=n.queue;var f=$r.bind(null,a,n,t);if(Pa(2048,8,f,[t]),n.getSnapshot!==e||r||Ht!==null&&Ht.memoizedState.tag&1){if(a.flags|=2048,ca(9,ci(),Jr.bind(null,a,n,l,e),null),At===null)throw Error(s(349));i||(al&124)!==0||Kr(a,e,l)}return l}function Kr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ut.updateQueue,e===null?(e=es(),ut.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Jr(t,e,l,a){e.value=l,e.getSnapshot=a,kr(e)&&Fr(t)}function $r(t,e,l){return l(function(){kr(e)&&Fr(t)})}function kr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ce(t,l)}catch{return!0}}function Fr(t){var e=Pl(t,2);e!==null&&ge(e,t,2)}function is(t){var e=le();if(typeof t=="function"){var l=t;if(t=l(),Cl){Fe(!0);try{l()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:t},e}function Wr(t,e,l,a){return t.baseState=l,as(t,St,typeof a=="function"?a:Ge)}function hg(t,e,l,a,n){if(fi(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};R.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Ir(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Ir(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=R.T,r={};R.T=r;try{var f=l(n,a),g=R.S;g!==null&&g(r,f),Pr(t,e,f)}catch(O){us(t,e,O)}finally{R.T=i}}else try{i=l(n,a),Pr(t,e,i)}catch(O){us(t,e,O)}}function Pr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){tf(t,e,a)},function(a){return us(t,e,a)}):tf(t,e,l)}function tf(t,e,l){e.status="fulfilled",e.value=l,ef(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ir(t,l)))}function us(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ef(e),e=e.next;while(e!==a)}t.action=null}function ef(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lf(t,e){return e}function af(t,e){if(mt){var l=At.formState;if(l!==null){t:{var a=ut;if(mt){if(Ut){e:{for(var n=Ut,i=Re;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ne(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ut=Ne(n.nextSibling),a=n.data==="F!";break t}}Dl(a)}a=!1}a&&(e=l[0])}}return l=le(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:e},l.queue=a,l=Ef.bind(null,ut,a),a.dispatch=l,a=is(!1),i=os.bind(null,ut,!1,a.queue),a=le(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=hg.bind(null,ut,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function nf(t){var e=Lt();return uf(e,St,t)}function uf(t,e,l){if(e=as(t,e,lf)[0],t=si(Ge)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ia(e)}catch(r){throw r===Ka?ei:r}else a=e;e=Lt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(ut.flags|=2048,ca(9,ci(),gg.bind(null,n,l),null)),[a,i,t]}function gg(t,e){t.action=e}function sf(t){var e=Lt(),l=St;if(l!==null)return uf(e,l,t);Lt(),e=e.memoizedState,l=Lt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ca(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=ut.updateQueue,e===null&&(e=es(),ut.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ci(){return{destroy:void 0,resource:void 0}}function cf(){return Lt().memoizedState}function ri(t,e,l,a){var n=le();a=a===void 0?null:a,ut.flags|=t,n.memoizedState=ca(1|e,ci(),l,a)}function Pa(t,e,l,a){var n=Lt();a=a===void 0?null:a;var i=n.memoizedState.inst;St!==null&&a!==null&&Fu(a,St.memoizedState.deps)?n.memoizedState=ca(e,i,l,a):(ut.flags|=t,n.memoizedState=ca(1|e,i,l,a))}function rf(t,e){ri(8390656,8,t,e)}function ff(t,e){Pa(2048,8,t,e)}function of(t,e){return Pa(4,2,t,e)}function df(t,e){return Pa(4,4,t,e)}function hf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gf(t,e,l){l=l!=null?l.concat([t]):null,Pa(4,4,hf.bind(null,e,t),l)}function ss(){}function pf(t,e){var l=Lt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Fu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function mf(t,e){var l=Lt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Fu(e,a[1]))return a[0];if(a=t(),Cl){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a}function cs(t,e,l){return l===void 0||(al&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=So(),ut.lanes|=t,fl|=t,l)}function yf(t,e,l,a){return ce(l,e)?l:ia.current!==null?(t=cs(t,l,a),ce(t,e)||(Vt=!0),t):(al&42)===0?(Vt=!0,t.memoizedState=l):(t=So(),ut.lanes|=t,fl|=t,e)}function bf(t,e,l,a,n){var i=H.p;H.p=i!==0&&8>i?i:8;var r=R.T,f={};R.T=f,os(t,!1,e,l);try{var g=n(),O=R.S;if(O!==null&&O(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=fg(g,a);tn(t,e,D,he(t))}else tn(t,e,a,he(t))}catch(U){tn(t,e,{then:function(){},status:"rejected",reason:U},he())}finally{H.p=i,R.T=r}}function pg(){}function rs(t,e,l,a){if(t.tag!==5)throw Error(s(476));var n=vf(t).queue;bf(t,n,e,$,l===null?pg:function(){return Sf(t),l(a)})}function vf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:$},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sf(t){var e=vf(t).next.queue;tn(t,e,{},he())}function fs(){return Ft(vn)}function xf(){return Lt().memoizedState}function Tf(){return Lt().memoizedState}function mg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=he();t=el(l);var a=ll(e,t,l);a!==null&&(ge(a,e,l),$a(a,e,l)),e={cache:Yu()},t.payload=e;return}e=e.return}}function yg(t,e,l){var a=he();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)?Of(e,l):(l=Mu(t,e,l,a),l!==null&&(ge(l,t,a),Af(l,e,a)))}function Ef(t,e,l){var a=he();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(t))Of(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,f=i(r,l);if(n.hasEagerState=!0,n.eagerState=f,ce(f,r))return Jn(t,e,n,0),At===null&&Kn(),!1}catch{}finally{}if(l=Mu(t,e,n,a),l!==null)return ge(l,t,a),Af(l,e,a),!0}return!1}function os(t,e,l,a){if(a={lane:2,revertLane:Xs(),action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(s(479))}else e=Mu(t,l,a,2),e!==null&&ge(e,t,2)}function fi(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Of(t,e){ua=ni=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Af(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,wc(t,l)}}var oi={readContext:Ft,use:ui,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},Nf={readContext:Ft,use:ui,useCallback:function(t,e){return le().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:rf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ri(4194308,4,hf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var l=le();e=e===void 0?null:e;var a=t();if(Cl){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=le();if(l!==void 0){var n=l(e);if(Cl){Fe(!0);try{l(e)}finally{Fe(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=yg.bind(null,ut,t),[a.memoizedState,t]},useRef:function(t){var e=le();return t={current:t},e.memoizedState=t},useState:function(t){t=is(t);var e=t.queue,l=Ef.bind(null,ut,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ss,useDeferredValue:function(t,e){var l=le();return cs(l,t,e)},useTransition:function(){var t=is(!1);return t=bf.bind(null,ut,t.queue,!0,!1),le().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=ut,n=le();if(mt){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),At===null)throw Error(s(349));(dt&124)!==0||Kr(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,rf($r.bind(null,a,i,t),[t]),a.flags|=2048,ca(9,ci(),Jr.bind(null,a,i,l,e),null),l},useId:function(){var t=le(),e=At.identifierPrefix;if(mt){var l=je,a=Be;l=(a&~(1<<32-se(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ii++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=og++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:fs,useFormState:af,useActionState:af,useOptimistic:function(t){var e=le();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=os.bind(null,ut,!0,l),l.dispatch=e,[t,e]},useMemoCache:ls,useCacheRefresh:function(){return le().memoizedState=mg.bind(null,ut)}},zf={readContext:Ft,use:ui,useCallback:pf,useContext:Ft,useEffect:ff,useImperativeHandle:gf,useInsertionEffect:of,useLayoutEffect:df,useMemo:mf,useReducer:si,useRef:cf,useState:function(){return si(Ge)},useDebugValue:ss,useDeferredValue:function(t,e){var l=Lt();return yf(l,St.memoizedState,t,e)},useTransition:function(){var t=si(Ge)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ia(t),e]},useSyncExternalStore:Zr,useId:xf,useHostTransitionStatus:fs,useFormState:nf,useActionState:nf,useOptimistic:function(t,e){var l=Lt();return Wr(l,St,t,e)},useMemoCache:ls,useCacheRefresh:Tf},bg={readContext:Ft,use:ui,useCallback:pf,useContext:Ft,useEffect:ff,useImperativeHandle:gf,useInsertionEffect:of,useLayoutEffect:df,useMemo:mf,useReducer:ns,useRef:cf,useState:function(){return ns(Ge)},useDebugValue:ss,useDeferredValue:function(t,e){var l=Lt();return St===null?cs(l,t,e):yf(l,St.memoizedState,t,e)},useTransition:function(){var t=ns(Ge)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Ia(t),e]},useSyncExternalStore:Zr,useId:xf,useHostTransitionStatus:fs,useFormState:sf,useActionState:sf,useOptimistic:function(t,e){var l=Lt();return St!==null?Wr(l,St,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:ls,useCacheRefresh:Tf},ra=null,en=0;function di(t){var e=en;return en+=1,ra===null&&(ra=[]),Br(ra,t,e)}function ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hi(t,e){throw e.$$typeof===w?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Rf(t){var e=t._init;return e(t._payload)}function Df(t){function e(S,v){if(t){var T=S.deletions;T===null?(S.deletions=[v],S.flags|=16):T.push(v)}}function l(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function n(S,v){return S=Le(S,v),S.index=0,S.sibling=null,S}function i(S,v,T){return S.index=T,t?(T=S.alternate,T!==null?(T=T.index,T<v?(S.flags|=67108866,v):T):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function r(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function f(S,v,T,M){return v===null||v.tag!==6?(v=wu(T,S.mode,M),v.return=S,v):(v=n(v,T),v.return=S,v)}function g(S,v,T,M){var Y=T.type;return Y===B?D(S,v,T.props.children,M,T.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===tt&&Rf(Y)===v.type)?(v=n(v,T.props),ln(v,T),v.return=S,v):(v=kn(T.type,T.key,T.props,null,S.mode,M),ln(v,T),v.return=S,v)}function O(S,v,T,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Cu(T,S.mode,M),v.return=S,v):(v=n(v,T.children||[]),v.return=S,v)}function D(S,v,T,M,Y){return v===null||v.tag!==7?(v=Al(T,S.mode,M,Y),v.return=S,v):(v=n(v,T),v.return=S,v)}function U(S,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=wu(""+v,S.mode,T),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case z:return T=kn(v.type,v.key,v.props,null,S.mode,T),ln(T,v),T.return=S,T;case G:return v=Cu(v,S.mode,T),v.return=S,v;case tt:var M=v._init;return v=M(v._payload),U(S,v,T)}if(Ot(v)||q(v))return v=Al(v,S.mode,T,null),v.return=S,v;if(typeof v.then=="function")return U(S,di(v),T);if(v.$$typeof===Q)return U(S,Pn(S,v),T);hi(S,v)}return null}function A(S,v,T,M){var Y=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Y!==null?null:f(S,v,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case z:return T.key===Y?g(S,v,T,M):null;case G:return T.key===Y?O(S,v,T,M):null;case tt:return Y=T._init,T=Y(T._payload),A(S,v,T,M)}if(Ot(T)||q(T))return Y!==null?null:D(S,v,T,M,null);if(typeof T.then=="function")return A(S,v,di(T),M);if(T.$$typeof===Q)return A(S,v,Pn(S,T),M);hi(S,T)}return null}function N(S,v,T,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(T)||null,f(v,S,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return S=S.get(M.key===null?T:M.key)||null,g(v,S,M,Y);case G:return S=S.get(M.key===null?T:M.key)||null,O(v,S,M,Y);case tt:var st=M._init;return M=st(M._payload),N(S,v,T,M,Y)}if(Ot(M)||q(M))return S=S.get(T)||null,D(v,S,M,Y,null);if(typeof M.then=="function")return N(S,v,T,di(M),Y);if(M.$$typeof===Q)return N(S,v,T,Pn(v,M),Y);hi(v,M)}return null}function I(S,v,T,M){for(var Y=null,st=null,Z=v,W=v=0,Qt=null;Z!==null&&W<T.length;W++){Z.index>W?(Qt=Z,Z=null):Qt=Z.sibling;var pt=A(S,Z,T[W],M);if(pt===null){Z===null&&(Z=Qt);break}t&&Z&&pt.alternate===null&&e(S,Z),v=i(pt,v,W),st===null?Y=pt:st.sibling=pt,st=pt,Z=Qt}if(W===T.length)return l(S,Z),mt&&zl(S,W),Y;if(Z===null){for(;W<T.length;W++)Z=U(S,T[W],M),Z!==null&&(v=i(Z,v,W),st===null?Y=Z:st.sibling=Z,st=Z);return mt&&zl(S,W),Y}for(Z=a(Z);W<T.length;W++)Qt=N(Z,S,W,T[W],M),Qt!==null&&(t&&Qt.alternate!==null&&Z.delete(Qt.key===null?W:Qt.key),v=i(Qt,v,W),st===null?Y=Qt:st.sibling=Qt,st=Qt);return t&&Z.forEach(function(vl){return e(S,vl)}),mt&&zl(S,W),Y}function F(S,v,T,M){if(T==null)throw Error(s(151));for(var Y=null,st=null,Z=v,W=v=0,Qt=null,pt=T.next();Z!==null&&!pt.done;W++,pt=T.next()){Z.index>W?(Qt=Z,Z=null):Qt=Z.sibling;var vl=A(S,Z,pt.value,M);if(vl===null){Z===null&&(Z=Qt);break}t&&Z&&vl.alternate===null&&e(S,Z),v=i(vl,v,W),st===null?Y=vl:st.sibling=vl,st=vl,Z=Qt}if(pt.done)return l(S,Z),mt&&zl(S,W),Y;if(Z===null){for(;!pt.done;W++,pt=T.next())pt=U(S,pt.value,M),pt!==null&&(v=i(pt,v,W),st===null?Y=pt:st.sibling=pt,st=pt);return mt&&zl(S,W),Y}for(Z=a(Z);!pt.done;W++,pt=T.next())pt=N(Z,S,W,pt.value,M),pt!==null&&(t&&pt.alternate!==null&&Z.delete(pt.key===null?W:pt.key),v=i(pt,v,W),st===null?Y=pt:st.sibling=pt,st=pt);return t&&Z.forEach(function(vp){return e(S,vp)}),mt&&zl(S,W),Y}function Tt(S,v,T,M){if(typeof T=="object"&&T!==null&&T.type===B&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case z:t:{for(var Y=T.key;v!==null;){if(v.key===Y){if(Y=T.type,Y===B){if(v.tag===7){l(S,v.sibling),M=n(v,T.props.children),M.return=S,S=M;break t}}else if(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===tt&&Rf(Y)===v.type){l(S,v.sibling),M=n(v,T.props),ln(M,T),M.return=S,S=M;break t}l(S,v);break}else e(S,v);v=v.sibling}T.type===B?(M=Al(T.props.children,S.mode,M,T.key),M.return=S,S=M):(M=kn(T.type,T.key,T.props,null,S.mode,M),ln(M,T),M.return=S,S=M)}return r(S);case G:t:{for(Y=T.key;v!==null;){if(v.key===Y)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){l(S,v.sibling),M=n(v,T.children||[]),M.return=S,S=M;break t}else{l(S,v);break}else e(S,v);v=v.sibling}M=Cu(T,S.mode,M),M.return=S,S=M}return r(S);case tt:return Y=T._init,T=Y(T._payload),Tt(S,v,T,M)}if(Ot(T))return I(S,v,T,M);if(q(T)){if(Y=q(T),typeof Y!="function")throw Error(s(150));return T=Y.call(T),F(S,v,T,M)}if(typeof T.then=="function")return Tt(S,v,di(T),M);if(T.$$typeof===Q)return Tt(S,v,Pn(S,T),M);hi(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,v!==null&&v.tag===6?(l(S,v.sibling),M=n(v,T),M.return=S,S=M):(l(S,v),M=wu(T,S.mode,M),M.return=S,S=M),r(S)):l(S,v)}return function(S,v,T,M){try{en=0;var Y=Tt(S,v,T,M);return ra=null,Y}catch(Z){if(Z===Ka||Z===ei)throw Z;var st=re(29,Z,null,S.mode);return st.lanes=M,st.return=S,st}finally{}}}var fa=Df(!0),Mf=Df(!1),xe=C(null),De=null;function nl(t){var e=t.alternate;L(jt,jt.current&1),L(xe,t),De===null&&(e===null||ia.current!==null||e.memoizedState!==null)&&(De=t)}function Uf(t){if(t.tag===22){if(L(jt,jt.current),L(xe,t),De===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(De=t)}}else il()}function il(){L(jt,jt.current),L(xe,xe.current)}function Ve(t){j(xe),De===t&&(De=null),j(jt)}var jt=C(0);function gi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ec(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ds(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:E({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var hs={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=he(),n=el(a);n.payload=e,l!=null&&(n.callback=l),e=ll(t,n,a),e!==null&&(ge(e,t,a),$a(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=he(),n=el(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=ll(t,n,a),e!==null&&(ge(e,t,a),$a(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=he(),a=el(l);a.tag=2,e!=null&&(a.callback=e),e=ll(t,a,l),e!==null&&(ge(e,t,l),$a(e,t,l))}};function wf(t,e,l,a,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,r):e.prototype&&e.prototype.isPureReactComponent?!ja(l,a)||!ja(n,i):!0}function Cf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&hs.enqueueReplaceState(e,e.state,null)}function _l(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=E({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var pi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _f(t){pi(t)}function Hf(t){console.error(t)}function Lf(t){pi(t)}function mi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Bf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function gs(t,e,l){return l=el(l),l.tag=3,l.payload={element:null},l.callback=function(){mi(t,e)},l}function jf(t){return t=el(t),t.tag=3,t}function qf(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Bf(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Bf(e,l,a),typeof n!="function"&&(ol===null?ol=new Set([this]):ol.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function vg(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Xa(e,l,n,!0),l=xe.current,l!==null){switch(l.tag){case 13:return De===null?js():l.alternate===null&&wt===0&&(wt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Xu?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Ys(t,a,n)),!1;case 22:return l.flags|=65536,a===Xu?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Ys(t,a,n)),!1}throw Error(s(435,l.tag))}return Ys(t,a,n),js(),!1}if(mt)return e=xe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Lu&&(t=Error(s(422),{cause:a}),Va(ye(t,l)))):(a!==Lu&&(e=Error(s(423),{cause:a}),Va(ye(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ye(a,l),n=gs(t.stateNode,a,n),Ku(t,n),wt!==4&&(wt=2)),!1;var i=Error(s(520),{cause:a});if(i=ye(i,l),fn===null?fn=[i]:fn.push(i),wt!==4&&(wt=2),e===null)return!0;a=ye(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=gs(l.stateNode,a,t),Ku(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ol===null||!ol.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=jf(n),qf(n,t,l,a),Ku(l,n),!1}l=l.return}while(l!==null);return!1}var Yf=Error(s(461)),Vt=!1;function Zt(t,e,l,a){e.child=t===null?Mf(e,null,l,a):fa(e,t.child,l,a)}function Gf(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var r={};for(var f in a)f!=="ref"&&(r[f]=a[f])}else r=a;return Ul(e),a=Wu(t,e,l,r,i,n),f=Iu(),t!==null&&!Vt?(Pu(t,e,n),Xe(t,e,n)):(mt&&f&&_u(e),e.flags|=1,Zt(t,e,a,n),e.child)}function Vf(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Uu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Xf(t,e,i,a,n)):(t=kn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Ts(t,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:ja,l(r,a)&&t.ref===e.ref)return Xe(t,e,n)}return e.flags|=1,t=Le(i,a),t.ref=e.ref,t.return=e,e.child=t}function Xf(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(ja(i,a)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=a=i,Ts(t,n))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,Xe(t,e,n)}return ps(t,e,l,a,n)}function Qf(t,e,l){var a=e.pendingProps,n=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Zf(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ti(e,i!==null?i.cachePool:null),i!==null?Vr(e,i):$u(),Uf(e);else return e.lanes=e.childLanes=536870912,Zf(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ti(e,i.cachePool),Vr(e,i),il(),e.memoizedState=null):(t!==null&&ti(e,null),$u(),il());return Zt(t,e,n,l),e.child}function Zf(t,e,l,a){var n=Vu();return n=n===null?null:{parent:Bt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&ti(e,null),$u(),Uf(e),t!==null&&Xa(t,e,a,!0),null}function yi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function ps(t,e,l,a,n){return Ul(e),l=Wu(t,e,l,a,void 0,n),a=Iu(),t!==null&&!Vt?(Pu(t,e,n),Xe(t,e,n)):(mt&&a&&_u(e),e.flags|=1,Zt(t,e,l,n),e.child)}function Kf(t,e,l,a,n,i){return Ul(e),e.updateQueue=null,l=Qr(e,a,l,n),Xr(t),a=Iu(),t!==null&&!Vt?(Pu(t,e,i),Xe(t,e,i)):(mt&&a&&_u(e),e.flags|=1,Zt(t,e,l,i),e.child)}function Jf(t,e,l,a,n){if(Ul(e),e.stateNode===null){var i=ta,r=l.contextType;typeof r=="object"&&r!==null&&(i=Ft(r)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hs,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Qu(e),r=l.contextType,i.context=typeof r=="object"&&r!==null?Ft(r):ta,i.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(ds(e,l,r,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&hs.enqueueReplaceState(i,i.state,null),Fa(e,a,i,n),ka(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,g=_l(l,f);i.props=g;var O=i.context,D=l.contextType;r=ta,typeof D=="object"&&D!==null&&(r=Ft(D));var U=l.getDerivedStateFromProps;D=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||O!==r)&&Cf(e,i,a,r),tl=!1;var A=e.memoizedState;i.state=A,Fa(e,a,i,n),ka(),O=e.memoizedState,f||A!==O||tl?(typeof U=="function"&&(ds(e,l,U,a),O=e.memoizedState),(g=tl||wf(e,l,g,a,A,O,r))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=O),i.props=a,i.state=O,i.context=r,a=g):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Zu(t,e),r=e.memoizedProps,D=_l(l,r),i.props=D,U=e.pendingProps,A=i.context,O=l.contextType,g=ta,typeof O=="object"&&O!==null&&(g=Ft(O)),f=l.getDerivedStateFromProps,(O=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==U||A!==g)&&Cf(e,i,a,g),tl=!1,A=e.memoizedState,i.state=A,Fa(e,a,i,n),ka();var N=e.memoizedState;r!==U||A!==N||tl||t!==null&&t.dependencies!==null&&In(t.dependencies)?(typeof f=="function"&&(ds(e,l,f,a),N=e.memoizedState),(D=tl||wf(e,l,D,a,A,N,g)||t!==null&&t.dependencies!==null&&In(t.dependencies))?(O||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,N,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,N,g)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),i.props=a,i.state=N,i.context=g,a=D):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,yi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=fa(e,t.child,null,n),e.child=fa(e,null,l,n)):Zt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Xe(t,e,n),t}function $f(t,e,l,a){return Ga(),e.flags|=256,Zt(t,e,l,a),e.child}var ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ys(t){return{baseLanes:t,cachePool:_r()}}function bs(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Te),t}function kf(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(jt.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(n?nl(e):il(),mt){var f=Ut,g;if(g=f){t:{for(g=f,f=Re;g.nodeType!==8;){if(!f){f=null;break t}if(g=Ne(g.nextSibling),g===null){f=null;break t}}f=g}f!==null?(e.memoizedState={dehydrated:f,treeContext:Nl!==null?{id:Be,overflow:je}:null,retryLane:536870912,hydrationErrors:null},g=re(18,null,null,0),g.stateNode=f,g.return=e,e.child=g,Pt=e,Ut=null,g=!0):g=!1}g||Dl(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return ec(f)?e.lanes=32:e.lanes=536870912,null;Ve(e)}return f=a.children,a=a.fallback,n?(il(),n=e.mode,f=bi({mode:"hidden",children:f},n),a=Al(a,n,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,n=e.child,n.memoizedState=ys(l),n.childLanes=bs(t,r,l),e.memoizedState=ms,a):(nl(e),vs(e,f))}if(g=t.memoizedState,g!==null&&(f=g.dehydrated,f!==null)){if(i)e.flags&256?(nl(e),e.flags&=-257,e=Ss(t,e,l)):e.memoizedState!==null?(il(),e.child=t.child,e.flags|=128,e=null):(il(),n=a.fallback,f=e.mode,a=bi({mode:"visible",children:a.children},f),n=Al(n,f,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,fa(e,t.child,null,l),a=e.child,a.memoizedState=ys(l),a.childLanes=bs(t,r,l),e.memoizedState=ms,e=n);else if(nl(e),ec(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var O=r.dgst;r=O,a=Error(s(419)),a.stack="",a.digest=r,Va({value:a,source:null,stack:null}),e=Ss(t,e,l)}else if(Vt||Xa(t,e,l,!1),r=(l&t.childLanes)!==0,Vt||r){if(r=At,r!==null&&(a=l&-l,a=(a&42)!==0?1:lu(a),a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Pl(t,a),ge(r,t,a),Yf;f.data==="$?"||js(),e=Ss(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Ut=Ne(f.nextSibling),Pt=e,mt=!0,Rl=null,Re=!1,t!==null&&(ve[Se++]=Be,ve[Se++]=je,ve[Se++]=Nl,Be=t.id,je=t.overflow,Nl=e),e=vs(e,a.children),e.flags|=4096);return e}return n?(il(),n=a.fallback,f=e.mode,g=t.child,O=g.sibling,a=Le(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,O!==null?n=Le(O,n):(n=Al(n,f,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,f=t.child.memoizedState,f===null?f=ys(l):(g=f.cachePool,g!==null?(O=Bt._currentValue,g=g.parent!==O?{parent:O,pool:O}:g):g=_r(),f={baseLanes:f.baseLanes|l,cachePool:g}),n.memoizedState=f,n.childLanes=bs(t,r,l),e.memoizedState=ms,a):(nl(e),l=t.child,t=l.sibling,l=Le(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function vs(t,e){return e=bi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function bi(t,e){return t=re(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ss(t,e,l){return fa(e,t.child,null,l),t=vs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ff(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ju(t.return,e,l)}function xs(t,e,l,a,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function Wf(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;if(Zt(t,e,a.children,l),a=jt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ff(t,l,e);else if(t.tag===19)Ff(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(L(jt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&gi(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),xs(e,!1,n,l,i);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&gi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}xs(e,!0,l,null,i);break;case"together":xs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),fl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Xa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=Le(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Le(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Ts(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&In(t)))}function Sg(t,e,l){switch(e.tag){case 3:zt(e,e.stateNode.containerInfo),Pe(e,Bt,t.memoizedState.cache),Ga();break;case 27:case 5:Wi(e);break;case 4:zt(e,e.stateNode.containerInfo);break;case 10:Pe(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(nl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?kf(t,e,l):(nl(e),t=Xe(t,e,l),t!==null?t.sibling:null);nl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Xa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Wf(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(jt,jt.current),a)break;return null;case 22:case 23:return e.lanes=0,Qf(t,e,l);case 24:Pe(e,Bt,t.memoizedState.cache)}return Xe(t,e,l)}function If(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!Ts(t,l)&&(e.flags&128)===0)return Vt=!1,Sg(t,e,l);Vt=(t.flags&131072)!==0}else Vt=!1,mt&&(e.flags&1048576)!==0&&zr(e,Wn,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")Uu(a)?(t=_l(a,t),e.tag=1,e=Jf(null,e,a,t,l)):(e.tag=0,e=ps(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===P){e.tag=11,e=Gf(null,e,a,t,l);break t}else if(n===at){e.tag=14,e=Vf(null,e,a,t,l);break t}}throw e=Yt(a)||a,Error(s(306,e,""))}}return e;case 0:return ps(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=_l(a,e.pendingProps),Jf(t,e,a,n,l);case 3:t:{if(zt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Zu(t,e),Fa(e,a,null,l);var r=e.memoizedState;if(a=r.cache,Pe(e,Bt,a),a!==i.cache&&qu(e,[Bt],l,!0),ka(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=$f(t,e,a,l);break t}else if(a!==n){n=ye(Error(s(424)),e),Va(n),e=$f(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ut=Ne(t.firstChild),Pt=e,mt=!0,Rl=null,Re=!0,l=Mf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ga(),a===n){e=Xe(t,e,l);break t}Zt(t,e,a,l)}e=e.child}return e;case 26:return yi(t,e),t===null?(l=ad(e.type,null,e.pendingProps,null))?e.memoizedState=l:mt||(l=e.type,t=e.pendingProps,a=wi(lt.current).createElement(l),a[kt]=e,a[te]=t,Jt(a,l,t),Gt(a),e.stateNode=a):e.memoizedState=ad(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Wi(e),t===null&&mt&&(a=e.stateNode=td(e.type,e.pendingProps,lt.current),Pt=e,Re=!0,n=Ut,gl(e.type)?(lc=n,Ut=Ne(a.firstChild)):Ut=n),Zt(t,e,e.pendingProps.children,l),yi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((n=a=Ut)&&(a=$g(a,e.type,e.pendingProps,Re),a!==null?(e.stateNode=a,Pt=e,Ut=Ne(a.firstChild),Re=!1,n=!0):n=!1),n||Dl(e)),Wi(e),n=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,a=i.children,Is(n,i)?a=null:r!==null&&Is(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=Wu(t,e,dg,null,null,l),vn._currentValue=n),yi(t,e),Zt(t,e,a,l),e.child;case 6:return t===null&&mt&&((t=l=Ut)&&(l=kg(l,e.pendingProps,Re),l!==null?(e.stateNode=l,Pt=e,Ut=null,t=!0):t=!1),t||Dl(e)),null;case 13:return kf(t,e,l);case 4:return zt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=fa(e,null,a,l):Zt(t,e,a,l),e.child;case 11:return Gf(t,e,e.type,e.pendingProps,l);case 7:return Zt(t,e,e.pendingProps,l),e.child;case 8:return Zt(t,e,e.pendingProps.children,l),e.child;case 12:return Zt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Pe(e,e.type,a.value),Zt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Ul(e),n=Ft(n),a=a(n),e.flags|=1,Zt(t,e,a,l),e.child;case 14:return Vf(t,e,e.type,e.pendingProps,l);case 15:return Xf(t,e,e.type,e.pendingProps,l);case 19:return Wf(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=bi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=Le(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return Qf(t,e,l);case 24:return Ul(e),a=Ft(Bt),t===null?(n=Vu(),n===null&&(n=At,i=Yu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Qu(e),Pe(e,Bt,n)):((t.lanes&l)!==0&&(Zu(t,e),Fa(e,null,null,l),ka()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Pe(e,Bt,a)):(a=i.cache,Pe(e,Bt,a),a!==n.cache&&qu(e,[Bt],l,!0))),Zt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Qe(t){t.flags|=4}function Pf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cd(e)){if(e=xe.current,e!==null&&((dt&4194048)===dt?De!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==De))throw Ja=Xu,Hr;t.flags|=8192}}function vi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Mc():536870912,t.lanes|=e,ga|=e)}function an(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function xg(t,e,l){var a=e.pendingProps;switch(Hu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ye(Bt),ke(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mr())),Dt(e),null;case 26:return l=e.memoizedState,t===null?(Qe(e),l!==null?(Dt(e),Pf(e,l)):(Dt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Qe(e),Dt(e),Pf(e,l)):(Dt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Qe(e),Dt(e),e.flags&=-16777217),null;case 27:Mn(e),l=lt.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Dt(e),null}t=k.current,Ya(e)?Rr(e):(t=td(n,a,l),e.stateNode=t,Qe(e))}return Dt(e),null;case 5:if(Mn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Dt(e),null}if(t=k.current,Ya(e))Rr(e);else{switch(n=wi(lt.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[kt]=e,t[te]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Jt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Qe(e)}}return Dt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=lt.current,Ya(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Pt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[kt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Jo(t.nodeValue,l)),t||Dl(e)}else t=wi(t).createTextNode(a),t[kt]=e,e.stateNode=t}return Dt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ya(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[kt]=e}else Ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),n=!1}else n=Mr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ve(e),e):(Ve(e),null)}if(Ve(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),vi(e,e.updateQueue),Dt(e),null;case 4:return ke(),t===null&&Js(e.stateNode.containerInfo),Dt(e),null;case 10:return Ye(e.type),Dt(e),null;case 19:if(j(jt),n=e.memoizedState,n===null)return Dt(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)an(n,!1);else{if(wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=gi(t),i!==null){for(e.flags|=128,an(n,!1),t=i.updateQueue,e.updateQueue=t,vi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Nr(l,t),l=l.sibling;return L(jt,jt.current&1|2),e.child}t=t.sibling}n.tail!==null&&ze()>Ti&&(e.flags|=128,a=!0,an(n,!1),e.lanes=4194304)}else{if(!a)if(t=gi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,vi(e,t),an(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!mt)return Dt(e),null}else 2*ze()-n.renderingStartTime>Ti&&l!==536870912&&(e.flags|=128,a=!0,an(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ze(),e.sibling=null,t=jt.current,L(jt,a?t&1|2:t&1),e):(Dt(e),null);case 22:case 23:return Ve(e),ku(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),l=e.updateQueue,l!==null&&vi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&j(wl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(Bt),Dt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Tg(t,e){switch(Hu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ye(Bt),ke(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Mn(e),null;case 13:if(Ve(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(jt),null;case 4:return ke(),null;case 10:return Ye(e.type),null;case 22:case 23:return Ve(e),ku(),t!==null&&j(wl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ye(Bt),null;case 25:return null;default:return null}}function to(t,e){switch(Hu(e),e.tag){case 3:Ye(Bt),ke();break;case 26:case 27:case 5:Mn(e);break;case 4:ke();break;case 13:Ve(e);break;case 19:j(jt);break;case 10:Ye(e.type);break;case 22:case 23:Ve(e),ku(),t!==null&&j(wl);break;case 24:Ye(Bt)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(f){Et(e,e.return,f)}}function ul(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var r=a.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,n=e;var g=l,O=f;try{O()}catch(D){Et(n,g,D)}}}a=a.next}while(a!==i)}}catch(D){Et(e,e.return,D)}}function eo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Gr(e,l)}catch(a){Et(t,t.return,a)}}}function lo(t,e,l){l.props=_l(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Et(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Et(t,e,n)}}function Me(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Et(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Et(t,e,n)}else l.current=null}function ao(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Et(t,t.return,n)}}function Es(t,e,l){try{var a=t.stateNode;Xg(a,t.type,l,e),a[te]=e}catch(n){Et(t,t.return,n)}}function no(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gl(t.type)||t.tag===4}function Os(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||no(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function As(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ui));else if(a!==4&&(a===27&&gl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(As(t,e,l),t=t.sibling;t!==null;)As(t,e,l),t=t.sibling}function Si(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&gl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Si(t,e,l),t=t.sibling;t!==null;)Si(t,e,l),t=t.sibling}function io(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jt(e,a,l),e[kt]=t,e[te]=l}catch(i){Et(t,t.return,i)}}var Ze=!1,_t=!1,Ns=!1,uo=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function Eg(t,e){if(t=t.containerInfo,Fs=ji,t=mr(t),Ou(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var r=0,f=-1,g=-1,O=0,D=0,U=t,A=null;e:for(;;){for(var N;U!==l||n!==0&&U.nodeType!==3||(f=r+n),U!==i||a!==0&&U.nodeType!==3||(g=r+a),U.nodeType===3&&(r+=U.nodeValue.length),(N=U.firstChild)!==null;)A=U,U=N;for(;;){if(U===t)break e;if(A===l&&++O===n&&(f=r),A===i&&++D===a&&(g=r),(N=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=N}l=f===-1||g===-1?null:{start:f,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ws={focusedElem:t,selectionRange:l},ji=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var I=_l(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(I,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(F){Et(l,l.return,F)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)tc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function so(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:sl(t,l),a&4&&nn(5,l);break;case 1:if(sl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){Et(l,l.return,r)}else{var n=_l(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Et(l,l.return,r)}}a&64&&eo(l),a&512&&un(l,l.return);break;case 3:if(sl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Gr(t,e)}catch(r){Et(l,l.return,r)}}break;case 27:e===null&&a&4&&io(l);case 26:case 5:sl(t,l),e===null&&a&4&&ao(l),a&512&&un(l,l.return);break;case 12:sl(t,l);break;case 13:sl(t,l),a&4&&fo(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=wg.bind(null,l),Fg(t,l))));break;case 22:if(a=l.memoizedState!==null||Ze,!a){e=e!==null&&e.memoizedState!==null||_t,n=Ze;var i=_t;Ze=a,(_t=e)&&!i?cl(t,l,(l.subtreeFlags&8772)!==0):sl(t,l),Ze=n,_t=i}break;case 30:break;default:sl(t,l)}}function co(t){var e=t.alternate;e!==null&&(t.alternate=null,co(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&iu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,ae=!1;function Ke(t,e,l){for(l=l.child;l!==null;)ro(t,e,l),l=l.sibling}function ro(t,e,l){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Na,l)}catch{}switch(l.tag){case 26:_t||Me(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:_t||Me(l,e);var a=Rt,n=ae;gl(l.type)&&(Rt=l.stateNode,ae=!1),Ke(t,e,l),pn(l.stateNode),Rt=a,ae=n;break;case 5:_t||Me(l,e);case 6:if(a=Rt,n=ae,Rt=null,Ke(t,e,l),Rt=a,ae=n,Rt!==null)if(ae)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(l.stateNode)}catch(i){Et(l,e,i)}else try{Rt.removeChild(l.stateNode)}catch(i){Et(l,e,i)}break;case 18:Rt!==null&&(ae?(t=Rt,Io(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),En(t)):Io(Rt,l.stateNode));break;case 4:a=Rt,n=ae,Rt=l.stateNode.containerInfo,ae=!0,Ke(t,e,l),Rt=a,ae=n;break;case 0:case 11:case 14:case 15:_t||ul(2,l,e),_t||ul(4,l,e),Ke(t,e,l);break;case 1:_t||(Me(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&lo(l,e,a)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:_t=(a=_t)||l.memoizedState!==null,Ke(t,e,l),_t=a;break;default:Ke(t,e,l)}}function fo(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{En(t)}catch(l){Et(e,e.return,l)}}function Og(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new uo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new uo),e;default:throw Error(s(435,t.tag))}}function zs(t,e){var l=Og(t);e.forEach(function(a){var n=Cg.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function fe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,r=e,f=r;t:for(;f!==null;){switch(f.tag){case 27:if(gl(f.type)){Rt=f.stateNode,ae=!1;break t}break;case 5:Rt=f.stateNode,ae=!1;break t;case 3:case 4:Rt=f.stateNode.containerInfo,ae=!0;break t}f=f.return}if(Rt===null)throw Error(s(160));ro(i,r,n),Rt=null,ae=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)oo(e,t),e=e.sibling}var Ae=null;function oo(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fe(e,t),oe(t),a&4&&(ul(3,t,t.return),nn(3,t),ul(5,t,t.return));break;case 1:fe(e,t),oe(t),a&512&&(_t||l===null||Me(l,l.return)),a&64&&Ze&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ae;if(fe(e,t),oe(t),a&512&&(_t||l===null||Me(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Da]||i[kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Jt(i,a,l),i[kt]=t,Gt(i),a=i;break t;case"link":var r=ud("link","href",n).get(a+(l.href||""));if(r){for(var f=0;f<r.length;f++)if(i=r[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(f,1);break e}}i=n.createElement(a),Jt(i,a,l),n.head.appendChild(i);break;case"meta":if(r=ud("meta","content",n).get(a+(l.content||""))){for(f=0;f<r.length;f++)if(i=r[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(f,1);break e}}i=n.createElement(a),Jt(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[kt]=t,Gt(i),a=i}t.stateNode=a}else sd(n,t.type,t.stateNode);else t.stateNode=id(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?sd(n,t.type,t.stateNode):id(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Es(t,t.memoizedProps,l.memoizedProps)}break;case 27:fe(e,t),oe(t),a&512&&(_t||l===null||Me(l,l.return)),l!==null&&a&4&&Es(t,t.memoizedProps,l.memoizedProps);break;case 5:if(fe(e,t),oe(t),a&512&&(_t||l===null||Me(l,l.return)),t.flags&32){n=t.stateNode;try{Kl(n,"")}catch(N){Et(t,t.return,N)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Es(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Ns=!0);break;case 6:if(fe(e,t),oe(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(N){Et(t,t.return,N)}}break;case 3:if(Hi=null,n=Ae,Ae=Ci(e.containerInfo),fe(e,t),Ae=n,oe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{En(e.containerInfo)}catch(N){Et(t,t.return,N)}Ns&&(Ns=!1,ho(t));break;case 4:a=Ae,Ae=Ci(t.stateNode.containerInfo),fe(e,t),oe(t),Ae=a;break;case 12:fe(e,t),oe(t);break;case 13:fe(e,t),oe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Cs=ze()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,zs(t,a)));break;case 22:n=t.memoizedState!==null;var g=l!==null&&l.memoizedState!==null,O=Ze,D=_t;if(Ze=O||n,_t=D||g,fe(e,t),_t=D,Ze=O,oe(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||g||Ze||_t||Hl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){g=l=e;try{if(i=g.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=g.stateNode;var U=g.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(N){Et(g,g.return,N)}}}else if(e.tag===6){if(l===null){g=e;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(N){Et(g,g.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,zs(t,l))));break;case 19:fe(e,t),oe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,zs(t,a)));break;case 30:break;case 21:break;default:fe(e,t),oe(t)}}function oe(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(no(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Os(t);Si(t,i,n);break;case 5:var r=l.stateNode;l.flags&32&&(Kl(r,""),l.flags&=-33);var f=Os(t);Si(t,f,r);break;case 3:case 4:var g=l.stateNode.containerInfo,O=Os(t);As(t,O,g);break;default:throw Error(s(161))}}catch(D){Et(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ho(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ho(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function sl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)so(t,e.alternate,e),e=e.sibling}function Hl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ul(4,e,e.return),Hl(e);break;case 1:Me(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&lo(e,e.return,l),Hl(e);break;case 27:pn(e.stateNode);case 26:case 5:Me(e,e.return),Hl(e);break;case 22:e.memoizedState===null&&Hl(e);break;case 30:Hl(e);break;default:Hl(e)}t=t.sibling}}function cl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:cl(n,i,l),nn(4,i);break;case 1:if(cl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(O){Et(a,a.return,O)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Yr(g[n],f)}catch(O){Et(a,a.return,O)}}l&&r&64&&eo(i),un(i,i.return);break;case 27:io(i);case 26:case 5:cl(n,i,l),l&&a===null&&r&4&&ao(i),un(i,i.return);break;case 12:cl(n,i,l);break;case 13:cl(n,i,l),l&&r&4&&fo(n,i);break;case 22:i.memoizedState===null&&cl(n,i,l),un(i,i.return);break;case 30:break;default:cl(n,i,l)}e=e.sibling}}function Rs(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Qa(l))}function Ds(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qa(t))}function Ue(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)go(t,e,l,a),e=e.sibling}function go(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ue(t,e,l,a),n&2048&&nn(9,e);break;case 1:Ue(t,e,l,a);break;case 3:Ue(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qa(t)));break;case 12:if(n&2048){Ue(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,f=i.onPostCommit;typeof f=="function"&&f(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){Et(e,e.return,g)}}else Ue(t,e,l,a);break;case 13:Ue(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?Ue(t,e,l,a):sn(t,e):i._visibility&2?Ue(t,e,l,a):(i._visibility|=2,oa(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&Rs(r,e);break;case 24:Ue(t,e,l,a),n&2048&&Ds(e.alternate,e);break;default:Ue(t,e,l,a)}}function oa(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,r=e,f=l,g=a,O=r.flags;switch(r.tag){case 0:case 11:case 15:oa(i,r,f,g,n),nn(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?oa(i,r,f,g,n):sn(i,r):(D._visibility|=2,oa(i,r,f,g,n)),n&&O&2048&&Rs(r.alternate,r);break;case 24:oa(i,r,f,g,n),n&&O&2048&&Ds(r.alternate,r);break;default:oa(i,r,f,g,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:sn(l,a),n&2048&&Rs(a.alternate,a);break;case 24:sn(l,a),n&2048&&Ds(a.alternate,a);break;default:sn(l,a)}e=e.sibling}}var cn=8192;function da(t){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)po(t),t=t.sibling}function po(t){switch(t.tag){case 26:da(t),t.flags&cn&&t.memoizedState!==null&&rp(Ae,t.memoizedState,t.memoizedProps);break;case 5:da(t);break;case 3:case 4:var e=Ae;Ae=Ci(t.stateNode.containerInfo),da(t),Ae=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,da(t),cn=e):da(t));break;default:da(t)}}function mo(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Xt=a,bo(a,t)}mo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yo(t),t=t.sibling}function yo(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&ul(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xi(t)):rn(t);break;default:rn(t)}}function xi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Xt=a,bo(a,t)}mo(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ul(8,e,e.return),xi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,xi(e));break;default:xi(e)}t=t.sibling}}function bo(t,e){for(;Xt!==null;){var l=Xt;switch(l.tag){case 0:case 11:case 15:ul(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Xt=a;else t:for(l=t;Xt!==null;){a=Xt;var n=a.sibling,i=a.return;if(co(a),a===l){Xt=null;break t}if(n!==null){n.return=i,Xt=n;break t}Xt=i}}}var Ag={getCacheForType:function(t){var e=Ft(Bt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Ng=typeof WeakMap=="function"?WeakMap:Map,yt=0,At=null,ct=null,dt=0,bt=0,de=null,rl=!1,ha=!1,Ms=!1,Je=0,wt=0,fl=0,Ll=0,Us=0,Te=0,ga=0,fn=null,ne=null,ws=!1,Cs=0,Ti=1/0,Ei=null,ol=null,Kt=0,dl=null,pa=null,ma=0,_s=0,Hs=null,vo=null,on=0,Ls=null;function he(){if((yt&2)!==0&&dt!==0)return dt&-dt;if(R.T!==null){var t=aa;return t!==0?t:Xs()}return Cc()}function So(){Te===0&&(Te=(dt&536870912)===0||mt?Dc():536870912);var t=xe.current;return t!==null&&(t.flags|=32),Te}function ge(t,e,l){(t===At&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(ya(t,0),hl(t,dt,Te,!1)),Ra(t,l),((yt&2)===0||t!==At)&&(t===At&&((yt&2)===0&&(Ll|=l),wt===4&&hl(t,dt,Te,!1)),we(t))}function xo(t,e,l){if((yt&6)!==0)throw Error(s(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||za(t,e),n=a?Dg(t,e):qs(t,e,!0),i=a;do{if(n===0){ha&&!a&&hl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!zg(l)){n=qs(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var f=t;n=fn;var g=f.current.memoizedState.isDehydrated;if(g&&(ya(f,r).flags|=256),r=qs(f,r,!1),r!==2){if(Ms&&!g){f.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break t}i=ne,ne=n,i!==null&&(ne===null?ne=i:ne.push.apply(ne,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){ya(t,0),hl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:hl(a,e,Te,!rl);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(n=Cs+300-ze(),10<n)){if(hl(a,e,Te,!rl),_n(a,0,!0)!==0)break t;a.timeoutHandle=Fo(To.bind(null,a,l,ne,Ei,ws,e,Te,Ll,ga,rl,i,2,-0,0),n);break t}To(a,l,ne,Ei,ws,e,Te,Ll,ga,rl,i,0,-0,0)}}break}while(!0);we(t)}function To(t,e,l,a,n,i,r,f,g,O,D,U,A,N){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(bn={stylesheets:null,count:0,unsuspend:cp},po(e),U=fp(),U!==null)){t.cancelPendingCommit=U(Do.bind(null,t,e,i,l,a,n,r,f,g,D,1,A,N)),hl(t,i,r,!O);return}Do(t,e,i,l,a,n,r,f,g)}function zg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ce(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hl(t,e,l,a){e&=~Us,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-se(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&Uc(t,l,e)}function Oi(){return(yt&6)===0?(dn(0),!1):!0}function Bs(){if(ct!==null){if(bt===0)var t=ct.return;else t=ct,qe=Ml=null,ts(t),ra=null,en=0,t=ct;for(;t!==null;)to(t.alternate,t),t=t.return;ct=null}}function ya(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Zg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Bs(),At=t,ct=l=Le(t.current,null),dt=e,bt=0,de=null,rl=!1,ha=za(t,e),Ms=!1,ga=Te=Us=Ll=fl=wt=0,ne=fn=null,ws=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-se(a),i=1<<n;e|=t[n],a&=~i}return Je=e,Kn(),l}function Eo(t,e){ut=null,R.H=oi,e===Ka||e===ei?(e=jr(),bt=3):e===Hr?(e=jr(),bt=4):bt=e===Yf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,ct===null&&(wt=1,mi(t,ye(e,t.current)))}function Oo(){var t=R.H;return R.H=oi,t===null?oi:t}function Ao(){var t=R.A;return R.A=Ag,t}function js(){wt=4,rl||(dt&4194048)!==dt&&xe.current!==null||(ha=!0),(fl&134217727)===0&&(Ll&134217727)===0||At===null||hl(At,dt,Te,!1)}function qs(t,e,l){var a=yt;yt|=2;var n=Oo(),i=Ao();(At!==t||dt!==e)&&(Ei=null,ya(t,e)),e=!1;var r=wt;t:do try{if(bt!==0&&ct!==null){var f=ct,g=de;switch(bt){case 8:Bs(),r=6;break t;case 3:case 2:case 9:case 6:xe.current===null&&(e=!0);var O=bt;if(bt=0,de=null,ba(t,f,g,O),l&&ha){r=0;break t}break;default:O=bt,bt=0,de=null,ba(t,f,g,O)}}Rg(),r=wt;break}catch(D){Eo(t,D)}while(!0);return e&&t.shellSuspendCounter++,qe=Ml=null,yt=a,R.H=n,R.A=i,ct===null&&(At=null,dt=0,Kn()),r}function Rg(){for(;ct!==null;)No(ct)}function Dg(t,e){var l=yt;yt|=2;var a=Oo(),n=Ao();At!==t||dt!==e?(Ei=null,Ti=ze()+500,ya(t,e)):ha=za(t,e);t:do try{if(bt!==0&&ct!==null){e=ct;var i=de;e:switch(bt){case 1:bt=0,de=null,ba(t,e,i,1);break;case 2:case 9:if(Lr(i)){bt=0,de=null,zo(e);break}e=function(){bt!==2&&bt!==9||At!==t||(bt=7),we(t)},i.then(e,e);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:Lr(i)?(bt=0,de=null,zo(e)):(bt=0,de=null,ba(t,e,i,7));break;case 5:var r=null;switch(ct.tag){case 26:r=ct.memoizedState;case 5:case 27:var f=ct;if(!r||cd(r)){bt=0,de=null;var g=f.sibling;if(g!==null)ct=g;else{var O=f.return;O!==null?(ct=O,Ai(O)):ct=null}break e}}bt=0,de=null,ba(t,e,i,5);break;case 6:bt=0,de=null,ba(t,e,i,6);break;case 8:Bs(),wt=6;break t;default:throw Error(s(462))}}Mg();break}catch(D){Eo(t,D)}while(!0);return qe=Ml=null,R.H=a,R.A=n,yt=l,ct!==null?0:(At=null,dt=0,Kn(),wt)}function Mg(){for(;ct!==null&&!Id();)No(ct)}function No(t){var e=If(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Ai(t):ct=e}function zo(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Kf(l,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=Kf(l,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:ts(e);default:to(l,e),e=ct=Nr(e,Je),e=If(l,e,Je)}t.memoizedProps=t.pendingProps,e===null?Ai(t):ct=e}function ba(t,e,l,a){qe=Ml=null,ts(e),ra=null,en=0;var n=e.return;try{if(vg(t,n,e,l,dt)){wt=1,mi(t,ye(l,t.current)),ct=null;return}}catch(i){if(n!==null)throw ct=n,i;wt=1,mi(t,ye(l,t.current)),ct=null;return}e.flags&32768?(mt||a===1?t=!0:ha||(dt&536870912)!==0?t=!1:(rl=t=!0,(a===2||a===9||a===3||a===6)&&(a=xe.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ro(e,t)):Ai(e)}function Ai(t){var e=t;do{if((e.flags&32768)!==0){Ro(e,rl);return}t=e.return;var l=xg(e.alternate,e,Je);if(l!==null){ct=l;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);wt===0&&(wt=5)}function Ro(t,e){do{var l=Tg(t.alternate,t);if(l!==null){l.flags&=32767,ct=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=l}while(t!==null);wt=6,ct=null}function Do(t,e,l,a,n,i,r,f,g){t.cancelPendingCommit=null;do Ni();while(Kt!==0);if((yt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(i=e.lanes|e.childLanes,i|=Du,ch(t,l,i,r,f,g),t===At&&(ct=At=null,dt=0),pa=e,dl=t,ma=l,_s=i,Hs=n,vo=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_g(Un,function(){return _o(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,n=H.p,H.p=2,r=yt,yt|=4;try{Eg(t,e,l)}finally{yt=r,H.p=n,R.T=a}}Kt=1,Mo(),Uo(),wo()}}function Mo(){if(Kt===1){Kt=0;var t=dl,e=pa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null;var a=H.p;H.p=2;var n=yt;yt|=4;try{oo(e,t);var i=Ws,r=mr(t.containerInfo),f=i.focusedElem,g=i.selectionRange;if(r!==f&&f&&f.ownerDocument&&pr(f.ownerDocument.documentElement,f)){if(g!==null&&Ou(f)){var O=g.start,D=g.end;if(D===void 0&&(D=O),"selectionStart"in f)f.selectionStart=O,f.selectionEnd=Math.min(D,f.value.length);else{var U=f.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var N=A.getSelection(),I=f.textContent.length,F=Math.min(g.start,I),Tt=g.end===void 0?F:Math.min(g.end,I);!N.extend&&F>Tt&&(r=Tt,Tt=F,F=r);var S=gr(f,F),v=gr(f,Tt);if(S&&v&&(N.rangeCount!==1||N.anchorNode!==S.node||N.anchorOffset!==S.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var T=U.createRange();T.setStart(S.node,S.offset),N.removeAllRanges(),F>Tt?(N.addRange(T),N.extend(v.node,v.offset)):(T.setEnd(v.node,v.offset),N.addRange(T))}}}}for(U=[],N=f;N=N.parentNode;)N.nodeType===1&&U.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var M=U[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ji=!!Fs,Ws=Fs=null}finally{yt=n,H.p=a,R.T=l}}t.current=e,Kt=2}}function Uo(){if(Kt===2){Kt=0;var t=dl,e=pa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=R.T,R.T=null;var a=H.p;H.p=2;var n=yt;yt|=4;try{so(t,e.alternate,e)}finally{yt=n,H.p=a,R.T=l}}Kt=3}}function wo(){if(Kt===4||Kt===3){Kt=0,Pd();var t=dl,e=pa,l=ma,a=vo;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kt=5:(Kt=0,pa=dl=null,Co(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ol=null),au(l),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=t.onRecoverableError,r=0;r<a.length;r++){var f=a[r];i(f.value,{componentStack:f.stack})}}finally{R.T=e,H.p=n}}(ma&3)!==0&&Ni(),we(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===Ls?on++:(on=0,Ls=t):on=0,dn(0)}}function Co(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Qa(e)))}function Ni(t){return Mo(),Uo(),wo(),_o()}function _o(){if(Kt!==5)return!1;var t=dl,e=_s;_s=0;var l=au(ma),a=R.T,n=H.p;try{H.p=32>l?32:l,R.T=null,l=Hs,Hs=null;var i=dl,r=ma;if(Kt=0,pa=dl=null,ma=0,(yt&6)!==0)throw Error(s(331));var f=yt;if(yt|=4,yo(i.current),go(i,i.current,r,l),yt=f,dn(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Na,i)}catch{}return!0}finally{H.p=n,R.T=a,Co(t,e)}}function Ho(t,e,l){e=ye(l,e),e=gs(t.stateNode,e,2),t=ll(t,e,2),t!==null&&(Ra(t,2),we(t))}function Et(t,e,l){if(t.tag===3)Ho(t,t,l);else for(;e!==null;){if(e.tag===3){Ho(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ol===null||!ol.has(a))){t=ye(l,t),l=jf(2),a=ll(e,l,2),a!==null&&(qf(l,a,e,t),Ra(a,2),we(a));break}}e=e.return}}function Ys(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ng;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Ms=!0,n.add(l),t=Ug.bind(null,t,e,l),e.then(t,t))}function Ug(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,At===t&&(dt&l)===l&&(wt===4||wt===3&&(dt&62914560)===dt&&300>ze()-Cs?(yt&2)===0&&ya(t,0):Us|=l,ga===dt&&(ga=0)),we(t)}function Lo(t,e){e===0&&(e=Mc()),t=Pl(t,e),t!==null&&(Ra(t,e),we(t))}function wg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Lo(t,l)}function Cg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Lo(t,l)}function _g(t,e){return Pi(t,e)}var zi=null,va=null,Gs=!1,Ri=!1,Vs=!1,Bl=0;function we(t){t!==va&&t.next===null&&(va===null?zi=va=t:va=va.next=t),Ri=!0,Gs||(Gs=!0,Lg())}function dn(t,e){if(!Vs&&Ri){Vs=!0;do for(var l=!1,a=zi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-se(42|t)+1)-1,i&=n&~(r&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Yo(a,i))}else i=dt,i=_n(a,a===At?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||za(a,i)||(l=!0,Yo(a,i));a=a.next}while(l);Vs=!1}}function Hg(){Bo()}function Bo(){Ri=Gs=!1;var t=0;Bl!==0&&(Qg()&&(t=Bl),Bl=0);for(var e=ze(),l=null,a=zi;a!==null;){var n=a.next,i=jo(a,e);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(va=l)):(l=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=n}dn(t)}function jo(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-se(i),f=1<<r,g=n[r];g===-1?((f&l)===0||(f&a)!==0)&&(n[r]=sh(f,e)):g<=e&&(t.expiredLanes|=f),i&=~f}if(e=At,l=dt,l=_n(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&tu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||za(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&tu(a),au(l)){case 2:case 8:l=zc;break;case 32:l=Un;break;case 268435456:l=Rc;break;default:l=Un}return a=qo.bind(null,t),l=Pi(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&tu(a),t.callbackPriority=2,t.callbackNode=null,2}function qo(t,e){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ni()&&t.callbackNode!==l)return null;var a=dt;return a=_n(t,t===At?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(xo(t,a,e),jo(t,ze()),t.callbackNode!=null&&t.callbackNode===l?qo.bind(null,t):null)}function Yo(t,e){if(Ni())return null;xo(t,e,!0)}function Lg(){Kg(function(){(yt&6)!==0?Pi(Nc,Hg):Bo()})}function Xs(){return Bl===0&&(Bl=Dc()),Bl}function Go(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qn(""+t)}function Vo(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Bg(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Go((n[te]||null).action),r=a.submitter;r&&(e=(e=r[te]||null)?Go(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var f=new Xn("action","action",null,a,n);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bl!==0){var g=r?Vo(n,r):new FormData(n);rs(l,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(f.preventDefault(),g=r?Vo(n,r):new FormData(n),rs(l,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var Qs=0;Qs<Ru.length;Qs++){var Zs=Ru[Qs],jg=Zs.toLowerCase(),qg=Zs[0].toUpperCase()+Zs.slice(1);Oe(jg,"on"+qg)}Oe(vr,"onAnimationEnd"),Oe(Sr,"onAnimationIteration"),Oe(xr,"onAnimationStart"),Oe("dblclick","onDoubleClick"),Oe("focusin","onFocus"),Oe("focusout","onBlur"),Oe(lg,"onTransitionRun"),Oe(ag,"onTransitionStart"),Oe(ng,"onTransitionCancel"),Oe(Tr,"onTransitionEnd"),Xl("onMouseEnter",["mouseout","mouseover"]),Xl("onMouseLeave",["mouseout","mouseover"]),Xl("onPointerEnter",["pointerout","pointerover"]),Xl("onPointerLeave",["pointerout","pointerover"]),xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function Xo(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var r=a.length-1;0<=r;r--){var f=a[r],g=f.instance,O=f.currentTarget;if(f=f.listener,g!==i&&n.isPropagationStopped())break t;i=f,n.currentTarget=O;try{i(n)}catch(D){pi(D)}n.currentTarget=null,i=g}else for(r=0;r<a.length;r++){if(f=a[r],g=f.instance,O=f.currentTarget,f=f.listener,g!==i&&n.isPropagationStopped())break t;i=f,n.currentTarget=O;try{i(n)}catch(D){pi(D)}n.currentTarget=null,i=g}}}}function rt(t,e){var l=e[nu];l===void 0&&(l=e[nu]=new Set);var a=t+"__bubble";l.has(a)||(Qo(e,t,2,!1),l.add(a))}function Ks(t,e,l){var a=0;e&&(a|=4),Qo(l,t,a,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[Di]){t[Di]=!0,Hc.forEach(function(l){l!=="selectionchange"&&(Yg.has(l)||Ks(l,!1,t),Ks(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,Ks("selectionchange",!1,e))}}function Qo(t,e,l,a){switch(gd(e)){case 2:var n=hp;break;case 8:n=gp;break;default:n=sc}l=n.bind(null,e,l,t),n=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function $s(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var f=a.stateNode.containerInfo;if(f===n)break;if(r===4)for(r=a.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;f!==null;){if(r=Yl(f),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){a=i=r;continue t}f=f.parentNode}}a=a.return}kc(function(){var O=i,D=hu(l),U=[];t:{var A=Er.get(t);if(A!==void 0){var N=Xn,I=t;switch(t){case"keypress":if(Gn(l)===0)break t;case"keydown":case"keyup":N=_h;break;case"focusin":I="focus",N=vu;break;case"focusout":I="blur",N=vu;break;case"beforeblur":case"afterblur":N=vu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Bh;break;case vr:case Sr:case xr:N=Ah;break;case Tr:N=qh;break;case"scroll":case"scrollend":N=Sh;break;case"wheel":N=Gh;break;case"copy":case"cut":case"paste":N=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=tr;break;case"toggle":case"beforetoggle":N=Xh}var F=(e&4)!==0,Tt=!F&&(t==="scroll"||t==="scrollend"),S=F?A!==null?A+"Capture":null:A;F=[];for(var v=O,T;v!==null;){var M=v;if(T=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||T===null||S===null||(M=Ua(v,S),M!=null&&F.push(gn(v,M,T))),Tt)break;v=v.return}0<F.length&&(A=new N(A,I,null,l,D),U.push({event:A,listeners:F}))}}if((e&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",A&&l!==du&&(I=l.relatedTarget||l.fromElement)&&(Yl(I)||I[ql]))break t;if((N||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,N?(I=l.relatedTarget||l.toElement,N=O,I=I?Yl(I):null,I!==null&&(Tt=h(I),F=I.tag,I!==Tt||F!==5&&F!==27&&F!==6)&&(I=null)):(N=null,I=O),N!==I)){if(F=Ic,M="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(F=tr,M="onPointerLeave",S="onPointerEnter",v="pointer"),Tt=N==null?A:Ma(N),T=I==null?A:Ma(I),A=new F(M,v+"leave",N,l,D),A.target=Tt,A.relatedTarget=T,M=null,Yl(D)===O&&(F=new F(S,v+"enter",I,l,D),F.target=T,F.relatedTarget=Tt,M=F),Tt=M,N&&I)e:{for(F=N,S=I,v=0,T=F;T;T=Sa(T))v++;for(T=0,M=S;M;M=Sa(M))T++;for(;0<v-T;)F=Sa(F),v--;for(;0<T-v;)S=Sa(S),T--;for(;v--;){if(F===S||S!==null&&F===S.alternate)break e;F=Sa(F),S=Sa(S)}F=null}else F=null;N!==null&&Zo(U,A,N,F,!1),I!==null&&Tt!==null&&Zo(U,Tt,I,F,!0)}}t:{if(A=O?Ma(O):window,N=A.nodeName&&A.nodeName.toLowerCase(),N==="select"||N==="input"&&A.type==="file")var Y=cr;else if(ur(A))if(rr)Y=Ph;else{Y=Wh;var st=Fh}else N=A.nodeName,!N||N.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?O&&ou(O.elementType)&&(Y=cr):Y=Ih;if(Y&&(Y=Y(t,O))){sr(U,Y,l,D);break t}st&&st(t,A,O),t==="focusout"&&O&&A.type==="number"&&O.memoizedProps.value!=null&&fu(A,"number",A.value)}switch(st=O?Ma(O):window,t){case"focusin":(ur(st)||st.contentEditable==="true")&&(Fl=st,Au=O,qa=null);break;case"focusout":qa=Au=Fl=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,yr(U,l,D);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":yr(U,l,D)}var Z;if(xu)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else kl?nr(t,l)&&(W="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(W="onCompositionStart");W&&(er&&l.locale!=="ko"&&(kl||W!=="onCompositionStart"?W==="onCompositionEnd"&&kl&&(Z=Fc()):(Ie=D,mu="value"in Ie?Ie.value:Ie.textContent,kl=!0)),st=Mi(O,W),0<st.length&&(W=new Pc(W,t,null,l,D),U.push({event:W,listeners:st}),Z?W.data=Z:(Z=ir(l),Z!==null&&(W.data=Z)))),(Z=Zh?Kh(t,l):Jh(t,l))&&(W=Mi(O,"onBeforeInput"),0<W.length&&(st=new Pc("onBeforeInput","beforeinput",null,l,D),U.push({event:st,listeners:W}),st.data=Z)),Bg(U,t,O,l,D)}Xo(U,e)})}function gn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Mi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ua(t,l),n!=null&&a.unshift(gn(t,n,i)),n=Ua(t,e),n!=null&&a.push(gn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Sa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zo(t,e,l,a,n){for(var i=e._reactName,r=[];l!==null&&l!==a;){var f=l,g=f.alternate,O=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||O===null||(g=O,n?(O=Ua(l,i),O!=null&&r.unshift(gn(l,O,g))):n||(O=Ua(l,i),O!=null&&r.push(gn(l,O,g)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var Gg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Ko(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(Vg,"")}function Jo(t,e){return e=Ko(e),Ko(t)===e}function Ui(){}function xt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Kl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Kl(t,""+a);break;case"className":Ln(t,"class",a);break;case"tabIndex":Ln(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(t,l,a);break;case"style":Jc(t,a,i);break;case"data":if(e!=="object"){Ln(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&xt(t,e,"name",n.name,n,null),xt(t,e,"formEncType",n.formEncType,n,null),xt(t,e,"formMethod",n.formMethod,n,null),xt(t,e,"formTarget",n.formTarget,n,null)):(xt(t,e,"encType",n.encType,n,null),xt(t,e,"method",n.method,n,null),xt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ui);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=qn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":rt("beforetoggle",t),rt("toggle",t),Hn(t,"popover",a);break;case"xlinkActuate":_e(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":_e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":_e(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":_e(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":_e(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":_e(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":_e(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":_e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":_e(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Hn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=bh.get(l)||l,Hn(t,l,a))}}function ks(t,e,l,a,n,i){switch(l){case"style":Jc(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Kl(t,a):(typeof a=="number"||typeof a=="bigint")&&Kl(t,""+a);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[te]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Hn(t,l,a)}}}function Jt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",t),rt("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:xt(t,e,i,r,l,null)}}n&&xt(t,e,"srcSet",l.srcSet,l,null),a&&xt(t,e,"src",l.src,l,null);return;case"input":rt("invalid",t);var f=i=r=n=null,g=null,O=null;for(a in l)if(l.hasOwnProperty(a)){var D=l[a];if(D!=null)switch(a){case"name":n=D;break;case"type":r=D;break;case"checked":g=D;break;case"defaultChecked":O=D;break;case"value":i=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,e));break;default:xt(t,e,a,D,l,null)}}Xc(t,i,f,g,O,r,n,!1),Bn(t);return;case"select":rt("invalid",t),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":r=f;break;case"multiple":a=f;default:xt(t,e,n,f,l,null)}e=i,l=r,t.multiple=!!a,e!=null?Zl(t,!!a,e,!1):l!=null&&Zl(t,!!a,l,!0);return;case"textarea":rt("invalid",t),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(f=l[r],f!=null))switch(r){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:xt(t,e,r,f,l,null)}Zc(t,a,n,i),Bn(t);return;case"option":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xt(t,e,g,a,l,null)}return;case"dialog":rt("beforetoggle",t),rt("toggle",t),rt("cancel",t),rt("close",t);break;case"iframe":case"object":rt("load",t);break;case"video":case"audio":for(a=0;a<hn.length;a++)rt(hn[a],t);break;case"image":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"embed":case"source":case"link":rt("error",t),rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in l)if(l.hasOwnProperty(O)&&(a=l[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:xt(t,e,O,a,l,null)}return;default:if(ou(e)){for(D in l)l.hasOwnProperty(D)&&(a=l[D],a!==void 0&&ks(t,e,D,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&xt(t,e,f,a,l,null))}function Xg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,f=null,g=null,O=null,D=null;for(N in l){var U=l[N];if(l.hasOwnProperty(N)&&U!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":g=U;default:a.hasOwnProperty(N)||xt(t,e,N,null,a,U)}}for(var A in a){var N=a[A];if(U=l[A],a.hasOwnProperty(A)&&(N!=null||U!=null))switch(A){case"type":i=N;break;case"name":n=N;break;case"checked":O=N;break;case"defaultChecked":D=N;break;case"value":r=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==U&&xt(t,e,A,N,a,U)}}ru(t,r,f,g,O,D,i,n);return;case"select":N=r=f=A=null;for(i in l)if(g=l[i],l.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":N=g;default:a.hasOwnProperty(i)||xt(t,e,i,null,a,g)}for(n in a)if(i=a[n],g=l[n],a.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":A=i;break;case"defaultValue":f=i;break;case"multiple":r=i;default:i!==g&&xt(t,e,n,i,a,g)}e=f,l=r,a=N,A!=null?Zl(t,!!l,A,!1):!!a!=!!l&&(e!=null?Zl(t,!!l,e,!0):Zl(t,!!l,l?[]:"",!1));return;case"textarea":N=A=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:xt(t,e,f,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":A=n;break;case"defaultValue":N=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&xt(t,e,r,n,a,i)}Qc(t,A,N);return;case"option":for(var I in l)if(A=l[I],l.hasOwnProperty(I)&&A!=null&&!a.hasOwnProperty(I))switch(I){case"selected":t.selected=!1;break;default:xt(t,e,I,null,a,A)}for(g in a)if(A=a[g],N=l[g],a.hasOwnProperty(g)&&A!==N&&(A!=null||N!=null))switch(g){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:xt(t,e,g,A,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in l)A=l[F],l.hasOwnProperty(F)&&A!=null&&!a.hasOwnProperty(F)&&xt(t,e,F,null,a,A);for(O in a)if(A=a[O],N=l[O],a.hasOwnProperty(O)&&A!==N&&(A!=null||N!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:xt(t,e,O,A,a,N)}return;default:if(ou(e)){for(var Tt in l)A=l[Tt],l.hasOwnProperty(Tt)&&A!==void 0&&!a.hasOwnProperty(Tt)&&ks(t,e,Tt,void 0,a,A);for(D in a)A=a[D],N=l[D],!a.hasOwnProperty(D)||A===N||A===void 0&&N===void 0||ks(t,e,D,A,a,N);return}}for(var S in l)A=l[S],l.hasOwnProperty(S)&&A!=null&&!a.hasOwnProperty(S)&&xt(t,e,S,null,a,A);for(U in a)A=a[U],N=l[U],!a.hasOwnProperty(U)||A===N||A==null&&N==null||xt(t,e,U,A,a,N)}var Fs=null,Ws=null;function wi(t){return t.nodeType===9?t:t.ownerDocument}function $o(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ko(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Is(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ps=null;function Qg(){var t=window.event;return t&&t.type==="popstate"?t===Ps?!1:(Ps=t,!0):(Ps=null,!1)}var Fo=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(t){return Wo.resolve(null).then(t).catch(Jg)}:Fo;function Jg(t){setTimeout(function(){throw t})}function gl(t){return t==="head"}function Io(t,e){var l=e,a=0,n=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var r=t.ownerDocument;if(l&1&&pn(r.documentElement),l&2&&pn(r.body),l&4)for(l=r.head,pn(l),r=l.firstChild;r;){var f=r.nextSibling,g=r.nodeName;r[Da]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=f}}if(n===0){t.removeChild(i),En(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);En(e)}function tc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":tc(l),iu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function $g(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Da])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ne(t.nextSibling),t===null)break}return null}function kg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ne(t.nextSibling),t===null))return null;return t}function ec(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Fg(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ne(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var lc=null;function Po(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function td(t,e,l){switch(e=wi(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);iu(t)}var Ee=new Map,ed=new Set;function Ci(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $e=H.d;H.d={f:Wg,r:Ig,D:Pg,C:tp,L:ep,m:lp,X:np,S:ap,M:ip};function Wg(){var t=$e.f(),e=Oi();return t||e}function Ig(t){var e=Gl(t);e!==null&&e.tag===5&&e.type==="form"?Sf(e):$e.r(t)}var xa=typeof document>"u"?null:document;function ld(t,e,l){var a=xa;if(a&&typeof e=="string"&&e){var n=me(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),ed.has(n)||(ed.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function Pg(t){$e.D(t),ld("dns-prefetch",t,null)}function tp(t,e){$e.C(t,e),ld("preconnect",t,e)}function ep(t,e,l){$e.L(t,e,l);var a=xa;if(a&&t&&e){var n='link[rel="preload"][as="'+me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+me(l.imageSizes)+'"]')):n+='[href="'+me(t)+'"]';var i=n;switch(e){case"style":i=Ta(t);break;case"script":i=Ea(t)}Ee.has(i)||(t=E({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ee.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(mn(i))||e==="script"&&a.querySelector(yn(i))||(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function lp(t,e){$e.m(t,e);var l=xa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+me(a)+'"][href="'+me(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ea(t)}if(!Ee.has(i)&&(t=E({rel:"modulepreload",href:t},e),Ee.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}a=l.createElement("link"),Jt(a,"link",t),Gt(a),l.head.appendChild(a)}}}function ap(t,e,l){$e.S(t,e,l);var a=xa;if(a&&t){var n=Vl(a).hoistableStyles,i=Ta(t);e=e||"default";var r=n.get(i);if(!r){var f={loading:0,preload:null};if(r=a.querySelector(mn(i)))f.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ee.get(i))&&ac(t,l);var g=r=a.createElement("link");Gt(g),Jt(g,"link",t),g._p=new Promise(function(O,D){g.onload=O,g.onerror=D}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,_i(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:f},n.set(i,r)}}}function np(t,e){$e.X(t,e);var l=xa;if(l&&t){var a=Vl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=E({src:t,async:!0},e),(e=Ee.get(n))&&nc(t,e),i=l.createElement("script"),Gt(i),Jt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ip(t,e){$e.M(t,e);var l=xa;if(l&&t){var a=Vl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=E({src:t,async:!0,type:"module"},e),(e=Ee.get(n))&&nc(t,e),i=l.createElement("script"),Gt(i),Jt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ad(t,e,l,a){var n=(n=lt.current)?Ci(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ta(l.href),l=Vl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ta(l.href);var i=Vl(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(mn(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Ee.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ee.set(t,l),i||up(n,t,l,r.state))),e&&a===null)throw Error(s(528,""));return r}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ea(l),l=Vl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ta(t){return'href="'+me(t)+'"'}function mn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function up(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Jt(e,"link",l),Gt(e),t.head.appendChild(e))}function Ea(t){return'[src="'+me(t)+'"]'}function yn(t){return"script[async]"+t}function id(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+me(l.href)+'"]');if(a)return e.instance=a,Gt(a),a;var n=E({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Gt(a),Jt(a,"style",n),_i(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ta(l.href);var i=t.querySelector(mn(n));if(i)return e.state.loading|=4,e.instance=i,Gt(i),i;a=nd(l),(n=Ee.get(n))&&ac(a,n),i=(t.ownerDocument||t).createElement("link"),Gt(i);var r=i;return r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Jt(i,"link",a),e.state.loading|=4,_i(i,l.precedence,t),e.instance=i;case"script":return i=Ea(l.src),(n=t.querySelector(yn(i)))?(e.instance=n,Gt(n),n):(a=l,(n=Ee.get(i))&&(a=E({},l),nc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Gt(n),Jt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,_i(a,l.precedence,t));return e.instance}function _i(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var f=a[r];if(f.dataset.precedence===e)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ac(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Hi=null;function ud(t,e,l){if(Hi===null){var a=new Map,n=Hi=new Map;n.set(l,a)}else n=Hi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Da]||i[kt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var f=a.get(r);f?f.push(i):a.set(r,[i])}}return a}function sd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function sp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function cd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var bn=null;function cp(){}function rp(t,e,l){if(bn===null)throw Error(s(475));var a=bn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ta(l.href),i=t.querySelector(mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Li.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,Gt(i);return}i=t.ownerDocument||t,l=nd(l),(n=Ee.get(n))&&ac(l,n),i=i.createElement("link"),Gt(i);var r=i;r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Jt(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Li.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function fp(){if(bn===null)throw Error(s(475));var t=bn;return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Li(){if(this.count--,this.count===0){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bi=null;function ic(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bi=new Map,e.forEach(op,t),Bi=null,Li.call(t))}function op(t,e){if(!(e.state.loading&4)){var l=Bi.get(t);if(l)var a=l.get(null);else{l=new Map,Bi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=e.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=Li.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:Q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function dp(t,e,l,a,n,i,r,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.hiddenUpdates=eu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function rd(t,e,l,a,n,i,r,f,g,O,D,U){return t=new dp(t,e,l,r,f,g,O,U),e=1,i===!0&&(e|=24),i=re(3,null,null,e),t.current=i,i.stateNode=t,e=Yu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Qu(i),t}function fd(t){return t?(t=ta,t):ta}function od(t,e,l,a,n,i){n=fd(n),a.context===null?a.context=n:a.pendingContext=n,a=el(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ll(t,a,e),l!==null&&(ge(l,t,e),$a(l,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function uc(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function hd(t){if(t.tag===13){var e=Pl(t,67108864);e!==null&&ge(e,t,67108864),uc(t,67108864)}}var ji=!0;function hp(t,e,l,a){var n=R.T;R.T=null;var i=H.p;try{H.p=2,sc(t,e,l,a)}finally{H.p=i,R.T=n}}function gp(t,e,l,a){var n=R.T;R.T=null;var i=H.p;try{H.p=8,sc(t,e,l,a)}finally{H.p=i,R.T=n}}function sc(t,e,l,a){if(ji){var n=cc(a);if(n===null)$s(t,e,a,qi,l),pd(t,a);else if(mp(n,t,e,l,a))a.stopPropagation();else if(pd(t,a),e&4&&-1<pp.indexOf(t)){for(;n!==null;){var i=Gl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Sl(i.pendingLanes);if(r!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var g=1<<31-se(r);f.entanglements[1]|=g,r&=~g}we(i),(yt&6)===0&&(Ti=ze()+500,dn(0))}}break;case 13:f=Pl(i,2),f!==null&&ge(f,i,2),Oi(),uc(i,2)}if(i=cc(a),i===null&&$s(t,e,a,qi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else $s(t,e,a,null,l)}}function cc(t){return t=hu(t),rc(t)}var qi=null;function rc(t){if(qi=null,t=Yl(t),t!==null){var e=h(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=m(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return qi=t,null}function gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(th()){case Nc:return 2;case zc:return 8;case Un:case eh:return 32;case Rc:return 268435456;default:return 32}default:return 32}}var fc=!1,pl=null,ml=null,yl=null,Sn=new Map,xn=new Map,bl=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":ml=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":Sn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Tn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Gl(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function mp(t,e,l,a,n){switch(e){case"focusin":return pl=Tn(pl,t,e,l,a,n),!0;case"dragenter":return ml=Tn(ml,t,e,l,a,n),!0;case"mouseover":return yl=Tn(yl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Sn.set(i,Tn(Sn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Tn(xn.get(i)||null,t,e,l,a,n)),!0}return!1}function md(t){var e=Yl(t.target);if(e!==null){var l=h(e);if(l!==null){if(e=l.tag,e===13){if(e=m(l),e!==null){t.blockedOn=e,rh(t.priority,function(){if(l.tag===13){var a=he();a=lu(a);var n=Pl(l,a);n!==null&&ge(n,l,a),uc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=cc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);du=a,l.target.dispatchEvent(a),du=null}else return e=Gl(l),e!==null&&hd(e),t.blockedOn=l,!1;e.shift()}return!0}function yd(t,e,l){Yi(t)&&l.delete(e)}function yp(){fc=!1,pl!==null&&Yi(pl)&&(pl=null),ml!==null&&Yi(ml)&&(ml=null),yl!==null&&Yi(yl)&&(yl=null),Sn.forEach(yd),xn.forEach(yd)}function Gi(t,e){t.blockedOn===e&&(t.blockedOn=null,fc||(fc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yp)))}var Vi=null;function bd(t){Vi!==t&&(Vi=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vi===t&&(Vi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(rc(a||l)===null)continue;break}var i=Gl(l);i!==null&&(t.splice(e,3),e-=3,rs(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function En(t){function e(g){return Gi(g,t)}pl!==null&&Gi(pl,t),ml!==null&&Gi(ml,t),yl!==null&&Gi(yl,t),Sn.forEach(e),xn.forEach(e);for(var l=0;l<bl.length;l++){var a=bl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)md(l),l.blockedOn===null&&bl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[te]||null;if(typeof i=="function")r||bd(l);else if(r){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[te]||null)f=r.formAction;else if(rc(n)!==null)continue}else f=r.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),bd(l)}}}function oc(t){this._internalRoot=t}Xi.prototype.render=oc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=he();od(l,a,t,e,null,null)},Xi.prototype.unmount=oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;od(t.current,2,null,t,null,null),Oi(),e[ql]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cc();t={blockedOn:null,target:t,priority:e};for(var l=0;l<bl.length&&e!==0&&e<bl[l].priority;l++);bl.splice(l,0,t),l===0&&md(t)}};var vd=u.version;if(vd!=="19.1.0")throw Error(s(527,vd,"19.1.0"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var bp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Na=Qi.inject(bp),ue=Qi}catch{}}return An.createRoot=function(t,e){if(!d(t))throw Error(s(299));var l=!1,a="",n=_f,i=Hf,r=Lf,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=rd(t,1,!1,null,null,l,a,n,i,r,f,null),t[ql]=e.current,Js(t),new oc(e)},An.hydrateRoot=function(t,e,l){if(!d(t))throw Error(s(299));var a=!1,n="",i=_f,r=Hf,f=Lf,g=null,O=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(g=l.unstable_transitionCallbacks),l.formState!==void 0&&(O=l.formState)),e=rd(t,1,!0,e,l??null,a,n,i,r,f,g,O),e.context=fd(null),l=e.current,a=he(),a=lu(a),n=el(a),n.callback=null,ll(l,n,a),l=a,e.current.lanes=l,Ra(e,l),we(e),t[ql]=e.current,Js(t),new Xi(e)},An.version="19.1.0",An}var Dd;function Rp(){if(Dd)return gc.exports;Dd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),gc.exports=zp(),gc.exports}var Dp=Rp();const Mp=(o,u,c,s)=>{var h,m,x,y;const d=[c,{code:u,...s||{}}];if((m=(h=o==null?void 0:o.services)==null?void 0:h.logger)!=null&&m.forward)return o.services.logger.forward(d,"warn","react-i18next::",!0);jl(d[0])&&(d[0]=`react-i18next:: ${d[0]}`),(y=(x=o==null?void 0:o.services)==null?void 0:x.logger)!=null&&y.warn?o.services.logger.warn(...d):console!=null&&console.warn&&console.warn(...d)},Md={},Sc=(o,u,c,s)=>{jl(c)&&Md[c]||(jl(c)&&(Md[c]=new Date),Mp(o,u,c,s))},Jd=(o,u)=>()=>{if(o.isInitialized)u();else{const c=()=>{setTimeout(()=>{o.off("initialized",c)},0),u()};o.on("initialized",c)}},xc=(o,u,c)=>{o.loadNamespaces(u,Jd(o,c))},Ud=(o,u,c,s)=>{if(jl(c)&&(c=[c]),o.options.preload&&o.options.preload.indexOf(u)>-1)return xc(o,c,s);c.forEach(d=>{o.options.ns.indexOf(d)<0&&o.options.ns.push(d)}),o.loadLanguages(u,Jd(o,s))},Up=(o,u,c={})=>!u.languages||!u.languages.length?(Sc(u,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:u.languages}),!0):u.hasLoadedNamespace(o,{lng:c.lng,precheck:(s,d)=>{var h;if(((h=c.bindI18n)==null?void 0:h.indexOf("languageChanging"))>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!d(s.isLanguageChangingTo,o))return!1}}),jl=o=>typeof o=="string",wp=o=>typeof o=="object"&&o!==null,Cp=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,_p={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Hp=o=>_p[o],Lp=o=>o.replace(Cp,Hp);let Tc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Lp};const Bp=(o={})=>{Tc={...Tc,...o}},jp=()=>Tc;let $d;const qp=o=>{$d=o},Yp=()=>$d,Gp={type:"3rdParty",init(o){Bp(o.options.react),qp(o)}},Vp=qt.createContext();class Xp{constructor(){this.usedNamespaces={}}addUsedNamespaces(u){u.forEach(c=>{this.usedNamespaces[c]||(this.usedNamespaces[c]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Qp=(o,u)=>{const c=qt.useRef();return qt.useEffect(()=>{c.current=o},[o,u]),c.current},kd=(o,u,c,s)=>o.getFixedT(u,c,s),Zp=(o,u,c,s)=>qt.useCallback(kd(o,u,c,s),[o,u,c,s]),Ac=(o,u={})=>{var P,V,ft,at;const{i18n:c}=u,{i18n:s,defaultNS:d}=qt.useContext(Vp)||{},h=c||s||Yp();if(h&&!h.reportNamespaces&&(h.reportNamespaces=new Xp),!h){Sc(h,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const tt=(Nt,_)=>jl(_)?_:wp(_)&&jl(_.defaultValue)?_.defaultValue:Array.isArray(Nt)?Nt[Nt.length-1]:Nt,ot=[tt,{},!1];return ot.t=tt,ot.i18n={},ot.ready=!1,ot}(P=h.options.react)!=null&&P.wait&&Sc(h,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const m={...jp(),...h.options.react,...u},{useSuspense:x,keyPrefix:y}=m;let p=d||((V=h.options)==null?void 0:V.defaultNS);p=jl(p)?[p]:p||["translation"],(at=(ft=h.reportNamespaces).addUsedNamespaces)==null||at.call(ft,p);const E=(h.isInitialized||h.initializedStoreOnce)&&p.every(tt=>Up(tt,h,m)),w=Zp(h,u.lng||null,m.nsMode==="fallback"?p:p[0],y),z=()=>w,G=()=>kd(h,u.lng||null,m.nsMode==="fallback"?p:p[0],y),[B,X]=qt.useState(z);let K=p.join();u.lng&&(K=`${u.lng}${K}`);const vt=Qp(K),ht=qt.useRef(!0);qt.useEffect(()=>{const{bindI18n:tt,bindI18nStore:ot}=m;ht.current=!0,!E&&!x&&(u.lng?Ud(h,u.lng,p,()=>{ht.current&&X(G)}):xc(h,p,()=>{ht.current&&X(G)})),E&&vt&&vt!==K&&ht.current&&X(G);const Nt=()=>{ht.current&&X(G)};return tt&&(h==null||h.on(tt,Nt)),ot&&(h==null||h.store.on(ot,Nt)),()=>{ht.current=!1,h&&(tt==null||tt.split(" ").forEach(_=>h.off(_,Nt))),ot&&h&&ot.split(" ").forEach(_=>h.store.off(_,Nt))}},[h,K]),qt.useEffect(()=>{ht.current&&E&&X(z)},[h,y,E]);const Q=[B,h,E];if(Q.t=B,Q.i18n=h,Q.ready=E,E||!E&&!x)return Q;throw new Promise(tt=>{u.lng?Ud(h,u.lng,p,()=>tt()):xc(h,p,()=>tt())})};function Kp(o){const{i18n:u}=Ac(),c=[{code:"nl",label:"NL"},{code:"fr",label:"FR"},{code:"de",label:"DE"},{code:"en",label:"EN"}];return J.jsx(J.Fragment,{children:J.jsxs("div",{id:"app-header",className:"repel | flex-wrap gap-4 mb-7",children:[J.jsxs("h1",{className:"text-3xl text-primary",children:[J.jsxs("span",{className:"font-bold",children:[o.title," "]}),J.jsxs("span",{className:"font-light",children:[o.subtitle," "]})]}),J.jsx("div",{className:"join",children:c.map(s=>J.jsx("button",{onClick:()=>u.changeLanguage(s.code),className:`btn join-item ${u.language===s.code?"btn-primary":"btn-secondary"}`,children:s.label},s.code))})]})})}function Jp(o){const{t:u}=Ac(),c={"Featured News":"sectionFeatured","Euro Tip":"sectionEuroTip","HR Tip":"sectionHrTip",Trainings:"sectionTrainings","Sector News":"sectionSectorNews","Other News":"sectionOtherNews"};return J.jsx("header",{className:"card-header flex justify-between items-center bg-primary-content py-5",children:J.jsx("h2",{className:"card-title",children:u(c[o.title])||o.title})})}function $p({label:o,id:u,name:c,type:s="text",required:d=!1,placeholder:h,rows:m,value:x,onChange:y}){return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"input-floating textarea-floating flex flex-col",children:[J.jsxs("label",{className:"input-floating-label textarea-floating-label z-10",htmlFor:u,children:[o,d&&J.jsx("span",{"aria-hidden":"true",style:{color:"red"},children:"*"})]}),s==="textarea"?J.jsx("textarea",{className:"textarea mb-2",id:u,name:c,placeholder:h,rows:m,required:d,"aria-required":d?"true":void 0,value:x,onChange:y}):J.jsx("input",{className:"input mb-2",type:s,id:u,name:c,placeholder:h,required:d,"aria-required":d?"true":void 0,value:x,onChange:y})]})})}function kp({id:o,index:u,onRemove:c}){return J.jsxs("header",{className:"card-header flex justify-between items-center bg-primary-content py-4.5",children:[J.jsxs("h3",{className:"card-title text-lg",children:["Item ",u+1]}),J.jsx("div",{className:"card-actions flex gap-0.5 sm:gap-3 flex-nowrap",children:J.jsxs("div",{className:"tooltip",children:[J.jsx("button",{type:"button",onClick:()=>c(o),className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Remove Button",children:J.jsx("span",{className:"icon-[tabler--trash] size-5"})}),J.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:J.jsx("span",{className:"tooltip-body",children:"Remove"})})]})})]})}const Fp={complex:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Summary",id:"summary",name:"summary",type:"textarea",required:!0,placeholder:"Explain what the article is about in a few sentences",rows:3},{label:"CTA",id:"cta",name:"cta",required:!0,placeholder:"Suggest a call to action (e.g., Read more)"}],training:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Title of the training"},{label:"Date",id:"date",name:"date",required:!0,placeholder:"E.g., 1 Jan. 2025"},{label:"Time",id:"time",name:"time",required:!0,placeholder:"E.g., 9:00 - 12:00"},{label:"Format",id:"format",name:"format",required:!0,placeholder:"E.g., Online, Blended, On-Site in Brussels"},{label:"Price",id:"price",name:"price",type:"number",required:!0,placeholder:"E.g., 400"}],simple:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Header",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Subheader",id:"subtitle",name:"subtitle",required:!1,placeholder:"Optional: write a subtitle"}]};function Wp({fieldsetType:o,id:u,index:c,onRemove:s,values:d,onFieldChange:h}){const m=Fp[o]||[];return J.jsx(J.Fragment,{children:J.jsxs("fieldset",{className:"card bg-transparent overflow-hidden",children:[J.jsx(kp,{id:u,index:c,onRemove:s}),J.jsx("div",{className:"card-body flex flex-col p-6 pb-4 gap-4 bg-white/75",children:m.map(x=>J.jsx($p,{...x,value:d&&d[x.name]||"",onChange:y=>h(u,x.name,y.target.value)},x.id))})]})})}function Ip({id:o,title:u,fieldsetType:c,fieldsets:s,onAddFieldset:d,onRemove:h,onFieldChange:m}){return J.jsxs("section",{className:"card w-full bg-transparent overflow-hidden",children:[J.jsx(Jp,{title:u}),J.jsx("div",{className:"card-body flex flex-col py-0 gap-6 bg-white/50",children:s.map((x,y)=>J.jsx(Wp,{fieldsetType:c,id:x.id,index:y,onRemove:h,onFieldChange:m,values:x},x.id))}),J.jsx("div",{className:"card-actions justify-center",children:J.jsxs("button",{type:"button",onClick:()=>d(o),className:"btn btn-block btn-secondary rounded-t-none",children:[J.jsx("span",{className:"icon-[tabler--plus] size-4.5 shrink-0"}),"Add fieldset"]})})]})}function Pp({sections:o,onAddFieldset:u,onRemove:c,onFieldChange:s}){return J.jsx("div",{className:"form-wrapper",children:J.jsx("form",{className:"flex flex-col gap-y-6",children:o.map(d=>J.jsx(Ip,{id:d.id,title:d.title,fieldsetType:d.fieldsetType,onAddFieldset:u,onRemove:c,onFieldChange:s,fieldsets:d.fieldsets},d.id))})})}function tm({html:o,onCopy:u,isCopied:c}){const s=!navigator.clipboard||!o;return J.jsxs("div",{className:"card w-full overflow-hidden",children:[J.jsx("div",{className:"card-actions justify-center",children:J.jsxs("button",{type:"button",className:"btn btn-block btn-primary rounded-b-none h-12",onClick:u,disabled:s,children:[J.jsx("span",{className:"icon-[tabler--copy] size-4.5 shrink-0"}),c?"Copied!":"Copy HTML"]})}),J.jsx("iframe",{className:"h-svh",srcDoc:o,sandbox:"",loading:"lazy"})]})}const wd=[{title:"Featured News",fieldsetType:"complex",fieldsets:[{url:"#",title:"Title placeholder",summary:"Short description placholder: lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"Call to action"}]},{title:"Euro Tip",fieldsetType:"complex",fieldsets:[]},{title:"HR Tip",fieldsetType:"complex",fieldsets:[]},{title:"Trainings",fieldsetType:"training",fieldsets:[]},{title:"Sector News",fieldsetType:"simple",fieldsets:[{url:"#",title:"JC 123.456 | Sector name",subtitle:"Article title: lorem ipsum dolor sit amet"}]},{title:"Other News",fieldsetType:"simple",fieldsets:[{url:"#",title:"Article title: lorem ipsum dolor sit amet",subtitle:"Article subtitle: lorem ipsum dolor sit amet"}]}],$t=[];for(let o=0;o<256;++o)$t.push((o+256).toString(16).slice(1));function em(o,u=0){return($t[o[u+0]]+$t[o[u+1]]+$t[o[u+2]]+$t[o[u+3]]+"-"+$t[o[u+4]]+$t[o[u+5]]+"-"+$t[o[u+6]]+$t[o[u+7]]+"-"+$t[o[u+8]]+$t[o[u+9]]+"-"+$t[o[u+10]]+$t[o[u+11]]+$t[o[u+12]]+$t[o[u+13]]+$t[o[u+14]]+$t[o[u+15]]).toLowerCase()}let bc;const lm=new Uint8Array(16);function am(){if(!bc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");bc=crypto.getRandomValues.bind(crypto)}return bc(lm)}const nm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Cd={randomUUID:nm};function Nn(o,u,c){var d;if(Cd.randomUUID&&!o)return Cd.randomUUID();o=o||{};const s=o.random??((d=o.rng)==null?void 0:d.call(o))??am();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,em(s)}const et=o=>typeof o=="string",zn=()=>{let o,u;const c=new Promise((s,d)=>{o=s,u=d});return c.resolve=o,c.reject=u,c},_d=o=>o==null?"":""+o,im=(o,u,c)=>{o.forEach(s=>{u[s]&&(c[s]=u[s])})},um=/###/g,Hd=o=>o&&o.indexOf("###")>-1?o.replace(um,"."):o,Ld=o=>!o||et(o),Rn=(o,u,c)=>{const s=et(u)?u.split("."):u;let d=0;for(;d<s.length-1;){if(Ld(o))return{};const h=Hd(s[d]);!o[h]&&c&&(o[h]=new c),Object.prototype.hasOwnProperty.call(o,h)?o=o[h]:o={},++d}return Ld(o)?{}:{obj:o,k:Hd(s[d])}},Bd=(o,u,c)=>{const{obj:s,k:d}=Rn(o,u,Object);if(s!==void 0||u.length===1){s[d]=c;return}let h=u[u.length-1],m=u.slice(0,u.length-1),x=Rn(o,m,Object);for(;x.obj===void 0&&m.length;)h=`${m[m.length-1]}.${h}`,m=m.slice(0,m.length-1),x=Rn(o,m,Object),x!=null&&x.obj&&typeof x.obj[`${x.k}.${h}`]<"u"&&(x.obj=void 0);x.obj[`${x.k}.${h}`]=c},sm=(o,u,c,s)=>{const{obj:d,k:h}=Rn(o,u,Object);d[h]=d[h]||[],d[h].push(c)},Ki=(o,u)=>{const{obj:c,k:s}=Rn(o,u);if(c&&Object.prototype.hasOwnProperty.call(c,s))return c[s]},cm=(o,u,c)=>{const s=Ki(o,c);return s!==void 0?s:Ki(u,c)},Fd=(o,u,c)=>{for(const s in u)s!=="__proto__"&&s!=="constructor"&&(s in o?et(o[s])||o[s]instanceof String||et(u[s])||u[s]instanceof String?c&&(o[s]=u[s]):Fd(o[s],u[s],c):o[s]=u[s]);return o},Oa=o=>o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var rm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const fm=o=>et(o)?o.replace(/[&<>"'\/]/g,u=>rm[u]):o;class om{constructor(u){this.capacity=u,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(u){const c=this.regExpMap.get(u);if(c!==void 0)return c;const s=new RegExp(u);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(u,s),this.regExpQueue.push(u),s}}const dm=[" ",",","?","!",";"],hm=new om(20),gm=(o,u,c)=>{u=u||"",c=c||"";const s=dm.filter(m=>u.indexOf(m)<0&&c.indexOf(m)<0);if(s.length===0)return!0;const d=hm.getRegExp(`(${s.map(m=>m==="?"?"\\?":m).join("|")})`);let h=!d.test(o);if(!h){const m=o.indexOf(c);m>0&&!d.test(o.substring(0,m))&&(h=!0)}return h},Ec=function(o,u){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!o)return;if(o[u])return Object.prototype.hasOwnProperty.call(o,u)?o[u]:void 0;const s=u.split(c);let d=o;for(let h=0;h<s.length;){if(!d||typeof d!="object")return;let m,x="";for(let y=h;y<s.length;++y)if(y!==h&&(x+=c),x+=s[y],m=d[x],m!==void 0){if(["string","number","boolean"].indexOf(typeof m)>-1&&y<s.length-1)continue;h+=y-h+1;break}d=m}return d},Ji=o=>o==null?void 0:o.replace("_","-"),pm={type:"logger",log(o){this.output("log",o)},warn(o){this.output("warn",o)},error(o){this.output("error",o)},output(o,u){var c,s;(s=(c=console==null?void 0:console[o])==null?void 0:c.apply)==null||s.call(c,console,u)}};class $i{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(u,c)}init(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=c.prefix||"i18next:",this.logger=u||pm,this.options=c,this.debug=c.debug}log(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"log","",!0)}warn(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"warn","",!0)}error(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"error","")}deprecate(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"warn","WARNING DEPRECATED: ",!0)}forward(u,c,s,d){return d&&!this.debug?null:(et(u[0])&&(u[0]=`${s}${this.prefix} ${u[0]}`),this.logger[c](u))}create(u){return new $i(this.logger,{prefix:`${this.prefix}:${u}:`,...this.options})}clone(u){return u=u||this.options,u.prefix=u.prefix||this.prefix,new $i(this.logger,u)}}var Ce=new $i;class Fi{constructor(){this.observers={}}on(u,c){return u.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const d=this.observers[s].get(c)||0;this.observers[s].set(c,d+1)}),this}off(u,c){if(this.observers[u]){if(!c){delete this.observers[u];return}this.observers[u].delete(c)}}emit(u){for(var c=arguments.length,s=new Array(c>1?c-1:0),d=1;d<c;d++)s[d-1]=arguments[d];this.observers[u]&&Array.from(this.observers[u].entries()).forEach(m=>{let[x,y]=m;for(let p=0;p<y;p++)x(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(m=>{let[x,y]=m;for(let p=0;p<y;p++)x.apply(x,[u,...s])})}}class jd extends Fi{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=u||{},this.options=c,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(u){this.options.ns.indexOf(u)<0&&this.options.ns.push(u)}removeNamespaces(u){const c=this.options.ns.indexOf(u);c>-1&&this.options.ns.splice(c,1)}getResource(u,c,s){var p,E;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const h=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,m=d.ignoreJSONStructure!==void 0?d.ignoreJSONStructure:this.options.ignoreJSONStructure;let x;u.indexOf(".")>-1?x=u.split("."):(x=[u,c],s&&(Array.isArray(s)?x.push(...s):et(s)&&h?x.push(...s.split(h)):x.push(s)));const y=Ki(this.data,x);return!y&&!c&&!s&&u.indexOf(".")>-1&&(u=x[0],c=x[1],s=x.slice(2).join(".")),y||!m||!et(s)?y:Ec((E=(p=this.data)==null?void 0:p[u])==null?void 0:E[c],s,h)}addResource(u,c,s,d){let h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const m=h.keySeparator!==void 0?h.keySeparator:this.options.keySeparator;let x=[u,c];s&&(x=x.concat(m?s.split(m):s)),u.indexOf(".")>-1&&(x=u.split("."),d=c,c=x[1]),this.addNamespaces(c),Bd(this.data,x,d),h.silent||this.emit("added",u,c,s,d)}addResources(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const h in s)(et(s[h])||Array.isArray(s[h]))&&this.addResource(u,c,h,s[h],{silent:!0});d.silent||this.emit("added",u,c,s)}addResourceBundle(u,c,s,d,h){let m=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},x=[u,c];u.indexOf(".")>-1&&(x=u.split("."),d=s,s=c,c=x[1]),this.addNamespaces(c);let y=Ki(this.data,x)||{};m.skipCopy||(s=JSON.parse(JSON.stringify(s))),d?Fd(y,s,h):y={...y,...s},Bd(this.data,x,y),m.silent||this.emit("added",u,c,s)}removeResourceBundle(u,c){this.hasResourceBundle(u,c)&&delete this.data[u][c],this.removeNamespaces(c),this.emit("removed",u,c)}hasResourceBundle(u,c){return this.getResource(u,c)!==void 0}getResourceBundle(u,c){return c||(c=this.options.defaultNS),this.getResource(u,c)}getDataByLanguage(u){return this.data[u]}hasLanguageSomeTranslations(u){const c=this.getDataByLanguage(u);return!!(c&&Object.keys(c)||[]).find(d=>c[d]&&Object.keys(c[d]).length>0)}toJSON(){return this.data}}var Wd={processors:{},addPostProcessor(o){this.processors[o.name]=o},handle(o,u,c,s,d){return o.forEach(h=>{var m;u=((m=this.processors[h])==null?void 0:m.process(u,c,s,d))??u}),u}};const qd={},Yd=o=>!et(o)&&typeof o!="boolean"&&typeof o!="number";class ki extends Fi{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),im(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],u,this),this.options=c,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ce.create("translator")}changeLanguage(u){u&&(this.language=u)}exists(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(u==null)return!1;const s=this.resolve(u,c);return(s==null?void 0:s.res)!==void 0}extractFromKey(u,c){let s=c.nsSeparator!==void 0?c.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const d=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let h=c.ns||this.options.defaultNS||[];const m=s&&u.indexOf(s)>-1,x=!this.options.userDefinedKeySeparator&&!c.keySeparator&&!this.options.userDefinedNsSeparator&&!c.nsSeparator&&!gm(u,s,d);if(m&&!x){const y=u.match(this.interpolator.nestingRegexp);if(y&&y.length>0)return{key:u,namespaces:et(h)?[h]:h};const p=u.split(s);(s!==d||s===d&&this.options.ns.indexOf(p[0])>-1)&&(h=p.shift()),u=p.join(d)}return{key:u,namespaces:et(h)?[h]:h}}translate(u,c,s){if(typeof c!="object"&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(c={...c}),c||(c={}),u==null)return"";Array.isArray(u)||(u=[String(u)]);const d=c.returnDetails!==void 0?c.returnDetails:this.options.returnDetails,h=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,{key:m,namespaces:x}=this.extractFromKey(u[u.length-1],c),y=x[x.length-1],p=c.lng||this.language,E=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode"){if(E){const _=c.nsSeparator||this.options.nsSeparator;return d?{res:`${y}${_}${m}`,usedKey:m,exactUsedKey:m,usedLng:p,usedNS:y,usedParams:this.getUsedParamsDetails(c)}:`${y}${_}${m}`}return d?{res:m,usedKey:m,exactUsedKey:m,usedLng:p,usedNS:y,usedParams:this.getUsedParamsDetails(c)}:m}const w=this.resolve(u,c);let z=w==null?void 0:w.res;const G=(w==null?void 0:w.usedKey)||m,B=(w==null?void 0:w.exactUsedKey)||m,X=["[object Number]","[object Function]","[object RegExp]"],K=c.joinArrays!==void 0?c.joinArrays:this.options.joinArrays,vt=!this.i18nFormat||this.i18nFormat.handleAsObject,ht=c.count!==void 0&&!et(c.count),Q=ki.hasDefaultValue(c),P=ht?this.pluralResolver.getSuffix(p,c.count,c):"",V=c.ordinal&&ht?this.pluralResolver.getSuffix(p,c.count,{ordinal:!1}):"",ft=ht&&!c.ordinal&&c.count===0,at=ft&&c[`defaultValue${this.options.pluralSeparator}zero`]||c[`defaultValue${P}`]||c[`defaultValue${V}`]||c.defaultValue;let tt=z;vt&&!z&&Q&&(tt=at);const ot=Yd(tt),Nt=Object.prototype.toString.apply(tt);if(vt&&tt&&ot&&X.indexOf(Nt)<0&&!(et(K)&&Array.isArray(tt))){if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const _=this.options.returnedObjectHandler?this.options.returnedObjectHandler(G,tt,{...c,ns:x}):`key '${m} (${this.language})' returned an object instead of string.`;return d?(w.res=_,w.usedParams=this.getUsedParamsDetails(c),w):_}if(h){const _=Array.isArray(tt),q=_?[]:{},Mt=_?B:G;for(const Yt in tt)if(Object.prototype.hasOwnProperty.call(tt,Yt)){const Ot=`${Mt}${h}${Yt}`;Q&&!z?q[Yt]=this.translate(Ot,{...c,defaultValue:Yd(at)?at[Yt]:void 0,joinArrays:!1,ns:x}):q[Yt]=this.translate(Ot,{...c,joinArrays:!1,ns:x}),q[Yt]===Ot&&(q[Yt]=tt[Yt])}z=q}}else if(vt&&et(K)&&Array.isArray(z))z=z.join(K),z&&(z=this.extendTranslation(z,u,c,s));else{let _=!1,q=!1;!this.isValidLookup(z)&&Q&&(_=!0,z=at),this.isValidLookup(z)||(q=!0,z=m);const Yt=(c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&q?void 0:z,Ot=Q&&at!==z&&this.options.updateMissing;if(q||_||Ot){if(this.logger.log(Ot?"updateKey":"missingKey",p,y,m,Ot?at:z),h){const nt=this.resolve(m,{...c,keySeparator:!1});nt&&nt.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let R=[];const H=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if(this.options.saveMissingTo==="fallback"&&H&&H[0])for(let nt=0;nt<H.length;nt++)R.push(H[nt]);else this.options.saveMissingTo==="all"?R=this.languageUtils.toResolveHierarchy(c.lng||this.language):R.push(c.lng||this.language);const $=(nt,b,C)=>{var L;const j=Q&&C!==z?C:Yt;this.options.missingKeyHandler?this.options.missingKeyHandler(nt,y,b,j,Ot,c):(L=this.backendConnector)!=null&&L.saveMissing&&this.backendConnector.saveMissing(nt,y,b,j,Ot,c),this.emit("missingKey",nt,y,b,z)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ht?R.forEach(nt=>{const b=this.pluralResolver.getSuffixes(nt,c);ft&&c[`defaultValue${this.options.pluralSeparator}zero`]&&b.indexOf(`${this.options.pluralSeparator}zero`)<0&&b.push(`${this.options.pluralSeparator}zero`),b.forEach(C=>{$([nt],m+C,c[`defaultValue${C}`]||at)})}):$(R,m,at))}z=this.extendTranslation(z,u,c,w,s),q&&z===m&&this.options.appendNamespaceToMissingKey&&(z=`${y}:${m}`),(q||_)&&this.options.parseMissingKeyHandler&&(z=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${y}:${m}`:m,_?z:void 0))}return d?(w.res=z,w.usedParams=this.getUsedParamsDetails(c),w):z}extendTranslation(u,c,s,d,h){var p,E;var m=this;if((p=this.i18nFormat)!=null&&p.parse)u=this.i18nFormat.parse(u,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||d.usedLng,d.usedNS,d.usedKey,{resolved:d});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const w=et(u)&&(((E=s==null?void 0:s.interpolation)==null?void 0:E.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let z;if(w){const B=u.match(this.interpolator.nestingRegexp);z=B&&B.length}let G=s.replace&&!et(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(G={...this.options.interpolation.defaultVariables,...G}),u=this.interpolator.interpolate(u,G,s.lng||this.language||d.usedLng,s),w){const B=u.match(this.interpolator.nestingRegexp),X=B&&B.length;z<X&&(s.nest=!1)}!s.lng&&d&&d.res&&(s.lng=this.language||d.usedLng),s.nest!==!1&&(u=this.interpolator.nest(u,function(){for(var B=arguments.length,X=new Array(B),K=0;K<B;K++)X[K]=arguments[K];return(h==null?void 0:h[0])===X[0]&&!s.context?(m.logger.warn(`It seems you are nesting recursively key: ${X[0]} in key: ${c[0]}`),null):m.translate(...X,c)},s)),s.interpolation&&this.interpolator.reset()}const x=s.postProcess||this.options.postProcess,y=et(x)?[x]:x;return u!=null&&(y!=null&&y.length)&&s.applyPostProcessor!==!1&&(u=Wd.handle(y,u,c,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...d,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),u}resolve(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,d,h,m,x;return et(u)&&(u=[u]),u.forEach(y=>{if(this.isValidLookup(s))return;const p=this.extractFromKey(y,c),E=p.key;d=E;let w=p.namespaces;this.options.fallbackNS&&(w=w.concat(this.options.fallbackNS));const z=c.count!==void 0&&!et(c.count),G=z&&!c.ordinal&&c.count===0,B=c.context!==void 0&&(et(c.context)||typeof c.context=="number")&&c.context!=="",X=c.lngs?c.lngs:this.languageUtils.toResolveHierarchy(c.lng||this.language,c.fallbackLng);w.forEach(K=>{var vt,ht;this.isValidLookup(s)||(x=K,!qd[`${X[0]}-${K}`]&&((vt=this.utils)!=null&&vt.hasLoadedNamespace)&&!((ht=this.utils)!=null&&ht.hasLoadedNamespace(x))&&(qd[`${X[0]}-${K}`]=!0,this.logger.warn(`key "${d}" for languages "${X.join(", ")}" won't get resolved as namespace "${x}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),X.forEach(Q=>{var ft;if(this.isValidLookup(s))return;m=Q;const P=[E];if((ft=this.i18nFormat)!=null&&ft.addLookupKeys)this.i18nFormat.addLookupKeys(P,E,Q,K,c);else{let at;z&&(at=this.pluralResolver.getSuffix(Q,c.count,c));const tt=`${this.options.pluralSeparator}zero`,ot=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(z&&(P.push(E+at),c.ordinal&&at.indexOf(ot)===0&&P.push(E+at.replace(ot,this.options.pluralSeparator)),G&&P.push(E+tt)),B){const Nt=`${E}${this.options.contextSeparator}${c.context}`;P.push(Nt),z&&(P.push(Nt+at),c.ordinal&&at.indexOf(ot)===0&&P.push(Nt+at.replace(ot,this.options.pluralSeparator)),G&&P.push(Nt+tt))}}let V;for(;V=P.pop();)this.isValidLookup(s)||(h=V,s=this.getResource(Q,K,V,c))}))})}),{res:s,usedKey:d,exactUsedKey:h,usedLng:m,usedNS:x}}isValidLookup(u){return u!==void 0&&!(!this.options.returnNull&&u===null)&&!(!this.options.returnEmptyString&&u==="")}getResource(u,c,s){var h;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(h=this.i18nFormat)!=null&&h.getResource?this.i18nFormat.getResource(u,c,s,d):this.resourceStore.getResource(u,c,s,d)}getUsedParamsDetails(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const c=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=u.replace&&!et(u.replace);let d=s?u.replace:u;if(s&&typeof u.count<"u"&&(d.count=u.count),this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),!s){d={...d};for(const h of c)delete d[h]}return d}static hasDefaultValue(u){const c="defaultValue";for(const s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&c===s.substring(0,c.length)&&u[s]!==void 0)return!0;return!1}}class Gd{constructor(u){this.options=u,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ce.create("languageUtils")}getScriptPartFromCode(u){if(u=Ji(u),!u||u.indexOf("-")<0)return null;const c=u.split("-");return c.length===2||(c.pop(),c[c.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(c.join("-"))}getLanguagePartFromCode(u){if(u=Ji(u),!u||u.indexOf("-")<0)return u;const c=u.split("-");return this.formatLanguageCode(c[0])}formatLanguageCode(u){if(et(u)&&u.indexOf("-")>-1){let c;try{c=Intl.getCanonicalLocales(u)[0]}catch{}return c&&this.options.lowerCaseLng&&(c=c.toLowerCase()),c||(this.options.lowerCaseLng?u.toLowerCase():u)}return this.options.cleanCode||this.options.lowerCaseLng?u.toLowerCase():u}isSupportedCode(u){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(u=this.getLanguagePartFromCode(u)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(u)>-1}getBestMatchFromCodes(u){if(!u)return null;let c;return u.forEach(s=>{if(c)return;const d=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(d))&&(c=d)}),!c&&this.options.supportedLngs&&u.forEach(s=>{if(c)return;const d=this.getScriptPartFromCode(s);if(this.isSupportedCode(d))return c=d;const h=this.getLanguagePartFromCode(s);if(this.isSupportedCode(h))return c=h;c=this.options.supportedLngs.find(m=>{if(m===h)return m;if(!(m.indexOf("-")<0&&h.indexOf("-")<0)&&(m.indexOf("-")>0&&h.indexOf("-")<0&&m.substring(0,m.indexOf("-"))===h||m.indexOf(h)===0&&h.length>1))return m})}),c||(c=this.getFallbackCodes(this.options.fallbackLng)[0]),c}getFallbackCodes(u,c){if(!u)return[];if(typeof u=="function"&&(u=u(c)),et(u)&&(u=[u]),Array.isArray(u))return u;if(!c)return u.default||[];let s=u[c];return s||(s=u[this.getScriptPartFromCode(c)]),s||(s=u[this.formatLanguageCode(c)]),s||(s=u[this.getLanguagePartFromCode(c)]),s||(s=u.default),s||[]}toResolveHierarchy(u,c){const s=this.getFallbackCodes(c||this.options.fallbackLng||[],u),d=[],h=m=>{m&&(this.isSupportedCode(m)?d.push(m):this.logger.warn(`rejecting language code not found in supportedLngs: ${m}`))};return et(u)&&(u.indexOf("-")>-1||u.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&h(this.formatLanguageCode(u)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&h(this.getScriptPartFromCode(u)),this.options.load!=="currentOnly"&&h(this.getLanguagePartFromCode(u))):et(u)&&h(this.formatLanguageCode(u)),s.forEach(m=>{d.indexOf(m)<0&&h(this.formatLanguageCode(m))}),d}}const Vd={zero:0,one:1,two:2,few:3,many:4,other:5},Xd={select:o=>o===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class mm{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=u,this.options=c,this.logger=Ce.create("pluralResolver"),this.pluralRulesCache={}}addRule(u,c){this.rules[u]=c}clearCache(){this.pluralRulesCache={}}getRule(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=Ji(u==="dev"?"en":u),d=c.ordinal?"ordinal":"cardinal",h=JSON.stringify({cleanedCode:s,type:d});if(h in this.pluralRulesCache)return this.pluralRulesCache[h];let m;try{m=new Intl.PluralRules(s,{type:d})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Xd;if(!u.match(/-|_/))return Xd;const y=this.languageUtils.getLanguagePartFromCode(u);m=this.getRule(y,c)}return this.pluralRulesCache[h]=m,m}needsPlural(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(u,c);return s||(s=this.getRule("dev",c)),(s==null?void 0:s.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(u,s).map(d=>`${c}${d}`)}getSuffixes(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(u,c);return s||(s=this.getRule("dev",c)),s?s.resolvedOptions().pluralCategories.sort((d,h)=>Vd[d]-Vd[h]).map(d=>`${this.options.prepend}${c.ordinal?`ordinal${this.options.prepend}`:""}${d}`):[]}getSuffix(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const d=this.getRule(u,s);return d?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${d.select(c)}`:(this.logger.warn(`no plural rule found for: ${u}`),this.getSuffix("dev",c,s))}}const Qd=function(o,u,c){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,h=cm(o,u,c);return!h&&d&&et(c)&&(h=Ec(o,c,s),h===void 0&&(h=Ec(u,c,s))),h},vc=o=>o.replace(/\$/g,"$$$$");class ym{constructor(){var c;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ce.create("interpolator"),this.options=u,this.format=((c=u==null?void 0:u.interpolation)==null?void 0:c.format)||(s=>s),this.init(u)}init(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};u.interpolation||(u.interpolation={escapeValue:!0});const{escape:c,escapeValue:s,useRawValueToEscape:d,prefix:h,prefixEscaped:m,suffix:x,suffixEscaped:y,formatSeparator:p,unescapeSuffix:E,unescapePrefix:w,nestingPrefix:z,nestingPrefixEscaped:G,nestingSuffix:B,nestingSuffixEscaped:X,nestingOptionsSeparator:K,maxReplaces:vt,alwaysFormat:ht}=u.interpolation;this.escape=c!==void 0?c:fm,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=d!==void 0?d:!1,this.prefix=h?Oa(h):m||"{{",this.suffix=x?Oa(x):y||"}}",this.formatSeparator=p||",",this.unescapePrefix=E?"":w||"-",this.unescapeSuffix=this.unescapePrefix?"":E||"",this.nestingPrefix=z?Oa(z):G||Oa("$t("),this.nestingSuffix=B?Oa(B):X||Oa(")"),this.nestingOptionsSeparator=K||",",this.maxReplaces=vt||1e3,this.alwaysFormat=ht!==void 0?ht:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const u=(c,s)=>(c==null?void 0:c.source)===s?(c.lastIndex=0,c):new RegExp(s,"g");this.regexp=u(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=u(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=u(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(u,c,s,d){var G;let h,m,x;const y=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=B=>{if(B.indexOf(this.formatSeparator)<0){const ht=Qd(c,y,B,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(ht,void 0,s,{...d,...c,interpolationkey:B}):ht}const X=B.split(this.formatSeparator),K=X.shift().trim(),vt=X.join(this.formatSeparator).trim();return this.format(Qd(c,y,K,this.options.keySeparator,this.options.ignoreJSONStructure),vt,s,{...d,...c,interpolationkey:K})};this.resetRegExp();const E=(d==null?void 0:d.missingInterpolationHandler)||this.options.missingInterpolationHandler,w=((G=d==null?void 0:d.interpolation)==null?void 0:G.skipOnVariables)!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:B=>vc(B)},{regex:this.regexp,safeValue:B=>this.escapeValue?vc(this.escape(B)):vc(B)}].forEach(B=>{for(x=0;h=B.regex.exec(u);){const X=h[1].trim();if(m=p(X),m===void 0)if(typeof E=="function"){const vt=E(u,h,d);m=et(vt)?vt:""}else if(d&&Object.prototype.hasOwnProperty.call(d,X))m="";else if(w){m=h[0];continue}else this.logger.warn(`missed to pass in variable ${X} for interpolating ${u}`),m="";else!et(m)&&!this.useRawValueToEscape&&(m=_d(m));const K=B.safeValue(m);if(u=u.replace(h[0],K),w?(B.regex.lastIndex+=m.length,B.regex.lastIndex-=h[0].length):B.regex.lastIndex=0,x++,x>=this.maxReplaces)break}}),u}nest(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d,h,m;const x=(y,p)=>{const E=this.nestingOptionsSeparator;if(y.indexOf(E)<0)return y;const w=y.split(new RegExp(`${E}[ ]*{`));let z=`{${w[1]}`;y=w[0],z=this.interpolate(z,m);const G=z.match(/'/g),B=z.match(/"/g);(((G==null?void 0:G.length)??0)%2===0&&!B||B.length%2!==0)&&(z=z.replace(/'/g,'"'));try{m=JSON.parse(z),p&&(m={...p,...m})}catch(X){return this.logger.warn(`failed parsing options string in nesting for key ${y}`,X),`${y}${E}${z}`}return m.defaultValue&&m.defaultValue.indexOf(this.prefix)>-1&&delete m.defaultValue,y};for(;d=this.nestingRegexp.exec(u);){let y=[];m={...s},m=m.replace&&!et(m.replace)?m.replace:m,m.applyPostProcessor=!1,delete m.defaultValue;let p=!1;if(d[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(d[1])){const E=d[1].split(this.formatSeparator).map(w=>w.trim());d[1]=E.shift(),y=E,p=!0}if(h=c(x.call(this,d[1].trim(),m),m),h&&d[0]===u&&!et(h))return h;et(h)||(h=_d(h)),h||(this.logger.warn(`missed to resolve ${d[1]} for nesting ${u}`),h=""),p&&(h=y.reduce((E,w)=>this.format(E,w,s.lng,{...s,interpolationkey:d[1].trim()}),h.trim())),u=u.replace(d[0],h),this.regexp.lastIndex=0}return u}}const bm=o=>{let u=o.toLowerCase().trim();const c={};if(o.indexOf("(")>-1){const s=o.split("(");u=s[0].toLowerCase().trim();const d=s[1].substring(0,s[1].length-1);u==="currency"&&d.indexOf(":")<0?c.currency||(c.currency=d.trim()):u==="relativetime"&&d.indexOf(":")<0?c.range||(c.range=d.trim()):d.split(";").forEach(m=>{if(m){const[x,...y]=m.split(":"),p=y.join(":").trim().replace(/^'+|'+$/g,""),E=x.trim();c[E]||(c[E]=p),p==="false"&&(c[E]=!1),p==="true"&&(c[E]=!0),isNaN(p)||(c[E]=parseInt(p,10))}})}return{formatName:u,formatOptions:c}},Aa=o=>{const u={};return(c,s,d)=>{let h=d;d&&d.interpolationkey&&d.formatParams&&d.formatParams[d.interpolationkey]&&d[d.interpolationkey]&&(h={...h,[d.interpolationkey]:void 0});const m=s+JSON.stringify(h);let x=u[m];return x||(x=o(Ji(s),d),u[m]=x),x(c)}};class vm{constructor(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ce.create("formatter"),this.options=u,this.formats={number:Aa((c,s)=>{const d=new Intl.NumberFormat(c,{...s});return h=>d.format(h)}),currency:Aa((c,s)=>{const d=new Intl.NumberFormat(c,{...s,style:"currency"});return h=>d.format(h)}),datetime:Aa((c,s)=>{const d=new Intl.DateTimeFormat(c,{...s});return h=>d.format(h)}),relativetime:Aa((c,s)=>{const d=new Intl.RelativeTimeFormat(c,{...s});return h=>d.format(h,s.range||"day")}),list:Aa((c,s)=>{const d=new Intl.ListFormat(c,{...s});return h=>d.format(h)})},this.init(u)}init(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=c.interpolation.formatSeparator||","}add(u,c){this.formats[u.toLowerCase().trim()]=c}addCached(u,c){this.formats[u.toLowerCase().trim()]=Aa(c)}format(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const h=c.split(this.formatSeparator);if(h.length>1&&h[0].indexOf("(")>1&&h[0].indexOf(")")<0&&h.find(x=>x.indexOf(")")>-1)){const x=h.findIndex(y=>y.indexOf(")")>-1);h[0]=[h[0],...h.splice(1,x)].join(this.formatSeparator)}return h.reduce((x,y)=>{var w;const{formatName:p,formatOptions:E}=bm(y);if(this.formats[p]){let z=x;try{const G=((w=d==null?void 0:d.formatParams)==null?void 0:w[d.interpolationkey])||{},B=G.locale||G.lng||d.locale||d.lng||s;z=this.formats[p](x,B,{...E,...d,...G})}catch(G){this.logger.warn(G)}return z}else this.logger.warn(`there was no format function for ${p}`);return x},u)}}const Sm=(o,u)=>{o.pending[u]!==void 0&&(delete o.pending[u],o.pendingCount--)};class xm extends Fi{constructor(u,c,s){var h,m;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=u,this.store=c,this.services=s,this.languageUtils=s.languageUtils,this.options=d,this.logger=Ce.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=d.maxParallelReads||10,this.readingCalls=0,this.maxRetries=d.maxRetries>=0?d.maxRetries:5,this.retryTimeout=d.retryTimeout>=1?d.retryTimeout:350,this.state={},this.queue=[],(m=(h=this.backend)==null?void 0:h.init)==null||m.call(h,s,d.backend,d)}queueLoad(u,c,s,d){const h={},m={},x={},y={};return u.forEach(p=>{let E=!0;c.forEach(w=>{const z=`${p}|${w}`;!s.reload&&this.store.hasResourceBundle(p,w)?this.state[z]=2:this.state[z]<0||(this.state[z]===1?m[z]===void 0&&(m[z]=!0):(this.state[z]=1,E=!1,m[z]===void 0&&(m[z]=!0),h[z]===void 0&&(h[z]=!0),y[w]===void 0&&(y[w]=!0)))}),E||(x[p]=!0)}),(Object.keys(h).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:d}),{toLoad:Object.keys(h),pending:Object.keys(m),toLoadLanguages:Object.keys(x),toLoadNamespaces:Object.keys(y)}}loaded(u,c,s){const d=u.split("|"),h=d[0],m=d[1];c&&this.emit("failedLoading",h,m,c),!c&&s&&this.store.addResourceBundle(h,m,s,void 0,void 0,{skipCopy:!0}),this.state[u]=c?-1:2,c&&s&&(this.state[u]=0);const x={};this.queue.forEach(y=>{sm(y.loaded,[h],m),Sm(y,u),c&&y.errors.push(c),y.pendingCount===0&&!y.done&&(Object.keys(y.loaded).forEach(p=>{x[p]||(x[p]={});const E=y.loaded[p];E.length&&E.forEach(w=>{x[p][w]===void 0&&(x[p][w]=!0)})}),y.done=!0,y.errors.length?y.callback(y.errors):y.callback())}),this.emit("loaded",x),this.queue=this.queue.filter(y=>!y.done)}read(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!u.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:u,ns:c,fcName:s,tried:d,wait:h,callback:m});return}this.readingCalls++;const x=(p,E)=>{if(this.readingCalls--,this.waitingReads.length>0){const w=this.waitingReads.shift();this.read(w.lng,w.ns,w.fcName,w.tried,w.wait,w.callback)}if(p&&E&&d<this.maxRetries){setTimeout(()=>{this.read.call(this,u,c,s,d+1,h*2,m)},h);return}m(p,E)},y=this.backend[s].bind(this.backend);if(y.length===2){try{const p=y(u,c);p&&typeof p.then=="function"?p.then(E=>x(null,E)).catch(x):x(null,p)}catch(p){x(p)}return}return y(u,c,x)}prepareLoading(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();et(u)&&(u=this.languageUtils.toResolveHierarchy(u)),et(c)&&(c=[c]);const h=this.queueLoad(u,c,s,d);if(!h.toLoad.length)return h.pending.length||d(),null;h.toLoad.forEach(m=>{this.loadOne(m)})}load(u,c,s){this.prepareLoading(u,c,{},s)}reload(u,c,s){this.prepareLoading(u,c,{reload:!0},s)}loadOne(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=u.split("|"),d=s[0],h=s[1];this.read(d,h,"read",void 0,void 0,(m,x)=>{m&&this.logger.warn(`${c}loading namespace ${h} for language ${d} failed`,m),!m&&x&&this.logger.log(`${c}loaded namespace ${h} for language ${d}`,x),this.loaded(u,m,x)})}saveMissing(u,c,s,d,h){var y,p,E,w,z;let m=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},x=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((p=(y=this.services)==null?void 0:y.utils)!=null&&p.hasLoadedNamespace&&!((w=(E=this.services)==null?void 0:E.utils)!=null&&w.hasLoadedNamespace(c))){this.logger.warn(`did not save key "${s}" as the namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if((z=this.backend)!=null&&z.create){const G={...m,isUpdate:h},B=this.backend.create.bind(this.backend);if(B.length<6)try{let X;B.length===5?X=B(u,c,s,d,G):X=B(u,c,s,d),X&&typeof X.then=="function"?X.then(K=>x(null,K)).catch(x):x(null,X)}catch(X){x(X)}else B(u,c,s,d,x,G)}!u||!u[0]||this.store.addResource(u[0],c,s,d)}}}const Zd=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:o=>{let u={};if(typeof o[1]=="object"&&(u=o[1]),et(o[1])&&(u.defaultValue=o[1]),et(o[2])&&(u.tDescription=o[2]),typeof o[2]=="object"||typeof o[3]=="object"){const c=o[3]||o[2];Object.keys(c).forEach(s=>{u[s]=c[s]})}return u},interpolation:{escapeValue:!0,format:o=>o,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Kd=o=>{var u,c;return et(o.ns)&&(o.ns=[o.ns]),et(o.fallbackLng)&&(o.fallbackLng=[o.fallbackLng]),et(o.fallbackNS)&&(o.fallbackNS=[o.fallbackNS]),((c=(u=o.supportedLngs)==null?void 0:u.indexOf)==null?void 0:c.call(u,"cimode"))<0&&(o.supportedLngs=o.supportedLngs.concat(["cimode"])),typeof o.initImmediate=="boolean"&&(o.initAsync=o.initImmediate),o},Zi=()=>{},Tm=o=>{Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach(c=>{typeof o[c]=="function"&&(o[c]=o[c].bind(o))})};class Dn extends Fi{constructor(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Kd(u),this.services={},this.logger=Ce,this.modules={external:[]},Tm(this),c&&!this.isInitialized&&!u.isClone){if(!this.options.initAsync)return this.init(u,c),this;setTimeout(()=>{this.init(u,c)},0)}}init(){var u=this;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof c=="function"&&(s=c,c={}),c.defaultNS==null&&c.ns&&(et(c.ns)?c.defaultNS=c.ns:c.ns.indexOf("translation")<0&&(c.defaultNS=c.ns[0]));const d=Zd();this.options={...d,...this.options,...Kd(c)},this.options.interpolation={...d.interpolation,...this.options.interpolation},c.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=c.keySeparator),c.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=c.nsSeparator);const h=E=>E?typeof E=="function"?new E:E:null;if(!this.options.isClone){this.modules.logger?Ce.init(h(this.modules.logger),this.options):Ce.init(null,this.options);let E;this.modules.formatter?E=this.modules.formatter:E=vm;const w=new Gd(this.options);this.store=new jd(this.options.resources,this.options);const z=this.services;z.logger=Ce,z.resourceStore=this.store,z.languageUtils=w,z.pluralResolver=new mm(w,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),E&&(!this.options.interpolation.format||this.options.interpolation.format===d.interpolation.format)&&(z.formatter=h(E),z.formatter.init(z,this.options),this.options.interpolation.format=z.formatter.format.bind(z.formatter)),z.interpolator=new ym(this.options),z.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},z.backendConnector=new xm(h(this.modules.backend),z.resourceStore,z,this.options),z.backendConnector.on("*",function(G){for(var B=arguments.length,X=new Array(B>1?B-1:0),K=1;K<B;K++)X[K-1]=arguments[K];u.emit(G,...X)}),this.modules.languageDetector&&(z.languageDetector=h(this.modules.languageDetector),z.languageDetector.init&&z.languageDetector.init(z,this.options.detection,this.options)),this.modules.i18nFormat&&(z.i18nFormat=h(this.modules.i18nFormat),z.i18nFormat.init&&z.i18nFormat.init(this)),this.translator=new ki(this.services,this.options),this.translator.on("*",function(G){for(var B=arguments.length,X=new Array(B>1?B-1:0),K=1;K<B;K++)X[K-1]=arguments[K];u.emit(G,...X)}),this.modules.external.forEach(G=>{G.init&&G.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Zi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const E=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);E.length>0&&E[0]!=="dev"&&(this.options.lng=E[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(E=>{this[E]=function(){return u.store[E](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(E=>{this[E]=function(){return u.store[E](...arguments),u}});const y=zn(),p=()=>{const E=(w,z)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),y.resolve(z),s(w,z)};if(this.languages&&!this.isInitialized)return E(null,this.t.bind(this));this.changeLanguage(this.options.lng,E)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),y}loadResources(u){var h,m;let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zi;const d=et(u)?u:this.language;if(typeof u=="function"&&(s=u),!this.options.resources||this.options.partialBundledLanguages){if((d==null?void 0:d.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const x=[],y=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(w=>{w!=="cimode"&&x.indexOf(w)<0&&x.push(w)})};d?y(d):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(E=>y(E)),(m=(h=this.options.preload)==null?void 0:h.forEach)==null||m.call(h,p=>y(p)),this.services.backendConnector.load(x,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(p)})}else s(null)}reloadResources(u,c,s){const d=zn();return typeof u=="function"&&(s=u,u=void 0),typeof c=="function"&&(s=c,c=void 0),u||(u=this.languages),c||(c=this.options.ns),s||(s=Zi),this.services.backendConnector.reload(u,c,h=>{d.resolve(),s(h)}),d}use(u){if(!u)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!u.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return u.type==="backend"&&(this.modules.backend=u),(u.type==="logger"||u.log&&u.warn&&u.error)&&(this.modules.logger=u),u.type==="languageDetector"&&(this.modules.languageDetector=u),u.type==="i18nFormat"&&(this.modules.i18nFormat=u),u.type==="postProcessor"&&Wd.addPostProcessor(u),u.type==="formatter"&&(this.modules.formatter=u),u.type==="3rdParty"&&this.modules.external.push(u),this}setResolvedLanguage(u){if(!(!u||!this.languages)&&!(["cimode","dev"].indexOf(u)>-1)){for(let c=0;c<this.languages.length;c++){const s=this.languages[c];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}!this.resolvedLanguage&&this.languages.indexOf(u)<0&&this.store.hasLanguageSomeTranslations(u)&&(this.resolvedLanguage=u,this.languages.unshift(u))}}changeLanguage(u,c){var s=this;this.isLanguageChangingTo=u;const d=zn();this.emit("languageChanging",u);const h=y=>{this.language=y,this.languages=this.services.languageUtils.toResolveHierarchy(y),this.resolvedLanguage=void 0,this.setResolvedLanguage(y)},m=(y,p)=>{p?this.isLanguageChangingTo===u&&(h(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,d.resolve(function(){return s.t(...arguments)}),c&&c(y,function(){return s.t(...arguments)})},x=y=>{var w,z;!u&&!y&&this.services.languageDetector&&(y=[]);const p=et(y)?y:y&&y[0],E=this.store.hasLanguageSomeTranslations(p)?p:this.services.languageUtils.getBestMatchFromCodes(et(y)?[y]:y);E&&(this.language||h(E),this.translator.language||this.translator.changeLanguage(E),(z=(w=this.services.languageDetector)==null?void 0:w.cacheUserLanguage)==null||z.call(w,E)),this.loadResources(E,G=>{m(G,E)})};return!u&&this.services.languageDetector&&!this.services.languageDetector.async?x(this.services.languageDetector.detect()):!u&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(x):this.services.languageDetector.detect(x):x(u),d}getFixedT(u,c,s){var d=this;const h=function(m,x){let y;if(typeof x!="object"){for(var p=arguments.length,E=new Array(p>2?p-2:0),w=2;w<p;w++)E[w-2]=arguments[w];y=d.options.overloadTranslationOptionHandler([m,x].concat(E))}else y={...x};y.lng=y.lng||h.lng,y.lngs=y.lngs||h.lngs,y.ns=y.ns||h.ns,y.keyPrefix!==""&&(y.keyPrefix=y.keyPrefix||s||h.keyPrefix);const z=d.options.keySeparator||".";let G;return y.keyPrefix&&Array.isArray(m)?G=m.map(B=>`${y.keyPrefix}${z}${B}`):G=y.keyPrefix?`${y.keyPrefix}${z}${m}`:m,d.t(G,y)};return et(u)?h.lng=u:h.lngs=u,h.ns=c,h.keyPrefix=s,h}t(){var d;for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return(d=this.translator)==null?void 0:d.translate(...c)}exists(){var d;for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return(d=this.translator)==null?void 0:d.exists(...c)}setDefaultNamespace(u){this.options.defaultNS=u}hasLoadedNamespace(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=c.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,h=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const m=(x,y)=>{const p=this.services.backendConnector.state[`${x}|${y}`];return p===-1||p===0||p===2};if(c.precheck){const x=c.precheck(this,m);if(x!==void 0)return x}return!!(this.hasResourceBundle(s,u)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(s,u)&&(!d||m(h,u)))}loadNamespaces(u,c){const s=zn();return this.options.ns?(et(u)&&(u=[u]),u.forEach(d=>{this.options.ns.indexOf(d)<0&&this.options.ns.push(d)}),this.loadResources(d=>{s.resolve(),c&&c(d)}),s):(c&&c(),Promise.resolve())}loadLanguages(u,c){const s=zn();et(u)&&(u=[u]);const d=this.options.preload||[],h=u.filter(m=>d.indexOf(m)<0&&this.services.languageUtils.isSupportedCode(m));return h.length?(this.options.preload=d.concat(h),this.loadResources(m=>{s.resolve(),c&&c(m)}),s):(c&&c(),Promise.resolve())}dir(u){var d,h;if(u||(u=this.resolvedLanguage||(((d=this.languages)==null?void 0:d.length)>0?this.languages[0]:this.language)),!u)return"rtl";const c=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=((h=this.services)==null?void 0:h.languageUtils)||new Gd(Zd());return c.indexOf(s.getLanguagePartFromCode(u))>-1||u.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return new Dn(u,c)}cloneInstance(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zi;const s=u.forkResourceStore;s&&delete u.forkResourceStore;const d={...this.options,...u,isClone:!0},h=new Dn(d);if((u.debug!==void 0||u.prefix!==void 0)&&(h.logger=h.logger.clone(u)),["store","services","language"].forEach(x=>{h[x]=this[x]}),h.services={...this.services},h.services.utils={hasLoadedNamespace:h.hasLoadedNamespace.bind(h)},s){const x=Object.keys(this.store.data).reduce((y,p)=>(y[p]={...this.store.data[p]},y[p]=Object.keys(y[p]).reduce((E,w)=>(E[w]={...y[p][w]},E),y[p]),y),{});h.store=new jd(x,d),h.services.resourceStore=h.store}return h.translator=new ki(h.services,d),h.translator.on("*",function(x){for(var y=arguments.length,p=new Array(y>1?y-1:0),E=1;E<y;E++)p[E-1]=arguments[E];h.emit(x,...p)}),h.init(d,c),h.translator.options=d,h.translator.backendConnector.services.utils={hasLoadedNamespace:h.hasLoadedNamespace.bind(h)},h}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const It=Dn.createInstance();It.createInstance=Dn.createInstance;It.createInstance;It.dir;It.init;It.loadResources;It.reloadResources;It.use;It.changeLanguage;It.getFixedT;It.t;It.exists;It.setDefaultNamespace;It.hasLoadedNamespace;It.loadNamespaces;It.loadLanguages;const Em={en:{translation:{sectionFeatured:"Featured news",sectionEuroTip:"Euro Tip",sectionHrTip:"HR Tip",sectionTrainings:"Trainings",sectionSectorNews:"Sector News",sectionOtherNews:"Other News"}},nl:{translation:{sectionFeatured:"Uitgelicht nieuws",sectionEuroTip:"€ Tip",sectionHrTip:"HR Tip",sectionTrainings:"Opleidingen",sectionSectorNews:"Sectornieuws",sectionOtherNews:"Overig nieuws"}},fr:{translation:{sectionFeatured:"Principales actualités",sectionEuroTip:"Conseil €",sectionHrTip:"Conseil RH",sectionTrainings:"Formations",sectionSectorNews:"Actualités des secteurs",sectionOtherNews:"Autres actualités"}},de:{translation:{sectionFeatured:"Ausgewählte Nachrichten",sectionEuroTip:"€ Tipp",sectionHrTip:"HR Tipp",sectionTrainings:"Schulungen",sectionSectorNews:"Branchen-News",sectionOtherNews:"Sonstige Nachrichten"}}};It.use(Gp).init({resources:Em,lng:"en",interpolation:{escapeValue:!1}});function Om(o,u="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png",c="Discover the latest key legal HR news",s="View online",d="https://www.securex.be/en/lex4you/employer",h="DD month YYYY",m="Stay ahead with the latest in HR law",x="https://www.securex.be/en/contact",y="Contact",p="https://www.securex.be/en/website-disclaimer",E="Disclaimer",w="Unsubscribe or change preferences"){return`
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
                              ${c}
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
                                  >${s}</a
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
                                FlasHR | ${h}
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
                                href="${d}"
                                style="text-decoration: none"
                                ><img
                                  alt="Securex Lex4You logo"
                                  class="logobrand"
                                  height="54"
                                  src="${u}"
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

    ${o}

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
                                          href="https://twitter.com/securex_be?lang=en"
                                          style="text-decoration: none"
                                          ><img
                                            alt="Twitter"
                                            height="19"
                                            src='https://emailing.securex.eu/l/64002/2019-04-18/fsvkvt/64002/188604/Twitter.png"'
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
                                  href="${d}"
                                  style="text-decoration: none"
                                  ><img
                                    alt="logo"
                                    class="logobrand"
                                    height="54"
                                    src="${u}"
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
                                    href="${x}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${y}</a
                                  >
                                  -
                                </span>
                                <span
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${p}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${E}</a
                                  >
                                  -
                                </span>
                                <a
                                  href="{{{EmailPreferenceCenter_967}}}"
                                  rel="nofollow,noreferrer"
                                  style="text-decoration: none; color: #555555"
                                  ><span
                                    style="
                                      color: #666666;
                                      text-decoration: none;
                                    "
                                    >${w}</span
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
`}function Am(o="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",s="CTA",d="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                              <a href="${o}" style="display: block">
                                <img
                                  alt="Click image to read article"
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
                                <strong>${u}</strong>
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
                                ${c}
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
                                          href="${o}}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${s}</a
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
  `}function Nm(o="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",s="CTA",d="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                                <strong>${u}</strong>
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
                                ${c}
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
                                          href="${o}}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${s}</a
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
                              <a href="${o}" style="display: block; text-align: right;">
                                <img
                                  alt="Click image to read article"
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
  `}function zm(o="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",s="CTA"){return`
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
                € Tip |&nbsp;${u}
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
                ${c}
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
                                          href="${o}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${s}</a
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
`}function Rm(o="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",s="CTA"){return`
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
                HR Tip | ${u}
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
                ${c}
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
                                          href="${o}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${s}</a
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
`}function Dm(o="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="1 jan. 2025",s="9:00 - 12:00",d="Online",h="400"){return`
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
                                        HR &amp; Legal trainings (in Dutch &amp;
                                        French)
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
              Training
            </th>
            <th
              pardot-data=""
              pardot-region=""
              style="background: rgb(77, 22, 86)"
            >
              Day - Time
            </th>
            <th pardot-region="">Format</th>
            <th pardot-region="">Price ex VAT</th>
          </tr>
          <tr pardot-repeatable="" style="">
            <td colspan="2" pardot-region="">
              <a
                href="${o}"
                style="text-decoration: underline; color: #4d1656"
                >${u}</a
              >
            </td>
            <td pardot-region="">
              ${c}<br />
              ${s}
            </td>
            <td pardot-region="">${d}</td>
            <td pardot-region="">€${h}</td>
          </tr>
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
                        href="https://www.securex.be/nl/opleidingen"
                        style="text-decoration: none; color: #ffffff"
                        >Discover all our trainings</a
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
`}function Mm(o){return`
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
                    <td class="no-padding" width="70%">${o}</td>
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

  `}function Um(o){return`
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
                                News from the sectors
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
${o}
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
`}function wm(o="https://www.securex.be/en/lex4you/employer",u="JC 123.456 | Sector name",c="Article title: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${o}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${u}</b><br />
                                    ${c}</a
                                  >
                                </li>
`}function Cm(o){return`
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
                                Other News
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
${o}
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
`}function _m(o="https://www.securex.be/en/lex4you/employer",u="Article title: lorem ipsum dolor sit amet",c="Article subtitle: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${o}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${u}</b><br />
                                    ${c}</a
                                  >
                                </li>
`}function Hm(){const[o,u]=qt.useState(()=>wd.map(Q=>({id:Nn(),...Q,fieldsets:Q.fieldsets.map(P=>({id:Nn(),...P}))}))),[c,s]=qt.useState(""),[d,h]=qt.useState(""),[m,x]=qt.useState(!1),{i18n:y}=Ac(),[p,E]=qt.useState({}),w=(Q,P)=>{E(V=>({...V,[Q]:P}))},z=Q=>p[Q]||wd.map(P=>({id:Nn(),...P,fieldsets:P.fieldsets.map(V=>({id:Nn(),...V}))}));qt.useEffect(()=>{const Q=y.language,P=z(Q);u(P)},[y.language]),qt.useEffect(()=>{const Q=y.language;return()=>{w(Q,o)}},[o]);const G=Q=>({id:Nn(),url:"#",title:"Title placeholder",...Q==="complex"&&{summary:"Short description placeholder: lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"Call to action"},...Q==="training"&&{date:"1 jan. 2025",time:"9:00 - 12:00",format:"On-Site in Brussels",price:"400"},...Q==="simple"&&{subtitle:"Lorem ipsum dolor sit amet"}}),B=Q=>{u(P=>P.map(V=>{if(V.id===Q){const ft=G(V.fieldsetType);return{...V,fieldsets:[...V.fieldsets,ft]}}return V}))},X=Q=>{u(P=>P.map(V=>{const ft=V.fieldsets.filter(at=>at.id!==Q);return{...V,fieldsets:ft}}))},K=(Q,P,V)=>{u(ft=>ft.map(at=>{const tt=at.fieldsets.map(ot=>ot.id===Q?{...ot,[P]:V}:ot);return{...at,fieldsets:tt}}))},vt=qt.useMemo(()=>{const Q=(P,V=!1)=>{let ft="";for(const _ of P)if(_.title==="Featured News")for(let q=0;q<_.fieldsets.length;q++)(q+1)%2!=0?ft+=Am(_.fieldsets[q].url,_.fieldsets[q].title,_.fieldsets[q].summary,_.fieldsets[q].cta,V?"./Securex_New_Lex4You.jpg":void 0):ft+=Nm(_.fieldsets[q].url,_.fieldsets[q].title,_.fieldsets[q].summary,_.fieldsets[q].cta,V?"./Securex_New_Lex4You.jpg":void 0);for(const _ of P)if(_.title==="Euro Tip")for(let q=0;q<_.fieldsets.length;q++)ft+=zm(_.fieldsets[q].url,_.fieldsets[q].title,_.fieldsets[q].summary,_.fieldsets[q].cta);for(const _ of P)if(_.title==="HR Tip")for(let q=0;q<_.fieldsets.length;q++)ft+=Rm(_.fieldsets[q].url,_.fieldsets[q].title,_.fieldsets[q].summary,_.fieldsets[q].cta);for(const _ of P)if(_.title==="Trainings")for(let q=0;q<_.fieldsets.length;q++)ft+=Dm(_.fieldsets[q].url,_.fieldsets[q].title,_.fieldsets[q].date,_.fieldsets[q].time,_.fieldsets[q].format,_.fieldsets[q].price);let at="",tt="",ot="";for(const _ of P){if(_.title==="Sector News"){let q="";for(let Mt=0;Mt<_.fieldsets.length;Mt++)q+=wm(_.fieldsets[Mt].url,_.fieldsets[Mt].title,_.fieldsets[Mt].subtitle);tt+=Um(q)}if(_.title==="Other News"){let q="";for(let Mt=0;Mt<_.fieldsets.length;Mt++)q+=_m(_.fieldsets[Mt].url,_.fieldsets[Mt].title,_.fieldsets[Mt].subtitle);ot+=Cm(q)}}return at=tt+ot,ft+=`${Mm(at)}`,`${Om(ft,V?"./Securex_Lex4You_logo.png":void 0)}`};return{forPreview:Q(o,!0),forCopy:Q(o,!1)}},[o]),ht=()=>{d?navigator.clipboard.writeText(d).then(()=>{x(!0),setTimeout(()=>x(!1),2e3),console.log("HTML copied to clipboard!")}).catch(Q=>{console.error("Failed to copy HTML: ",Q)}):console.warn("No HTML content to copy.")};return qt.useEffect(()=>{s(vt.forPreview),h(vt.forCopy)},[vt]),J.jsxs(J.Fragment,{children:[J.jsx(Kp,{title:"FlasHR",subtitle:"composer"}),J.jsxs("div",{className:"grid",children:[J.jsx(Pp,{sections:o,onAddFieldset:B,onRemove:X,onFieldChange:K}),J.jsx(tm,{html:c,onCopy:ht,isCopied:m})]})]})}Dp.createRoot(document.getElementById("root")).render(J.jsxs(qt.StrictMode,{children:[J.jsx("main",{className:"max-w-6xl mx-auto px-6 py-6",children:J.jsx(Hm,{})}),J.jsx("script",{type:"module",src:"./node_modules/flyonui/flyonui.js"})]}));
