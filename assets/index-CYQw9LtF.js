(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();var hc={exports:{}},On={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function xp(){if(xd)return On;xd=1;var f=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,d,h){var y=null;if(h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),"key"in d){h={};for(var S in d)S!=="key"&&(h[S]=d[S])}else h=d;return d=h.ref,{$$typeof:f,type:s,key:y,ref:d!==void 0?d:null,props:h}}return On.Fragment=u,On.jsx=c,On.jsxs=c,On}var Sd;function Sp(){return Sd||(Sd=1,hc.exports=xp()),hc.exports}var V=Sp(),gc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Tp(){if(Td)return ut;Td=1;var f=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.iterator;function z(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,X={};function Z(b,U,B){this.props=b,this.context=U,this.refs=X,this.updater=B||G}Z.prototype.isReactComponent={},Z.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},Z.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function I(){}I.prototype=Z.prototype;function ft(b,U,B){this.props=b,this.context=U,this.refs=X,this.updater=B||G}var dt=ft.prototype=new I;dt.constructor=ft,L(dt,Z.prototype),dt.isPureReactComponent=!0;var K=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function et(b,U,B,C,$,mt){return B=mt.ref,{$$typeof:f,type:b,key:U,ref:B!==void 0?B:null,props:mt}}function P(b,U){return et(b.type,U,void 0,void 0,void 0,b.props)}function pt(b){return typeof b=="object"&&b!==null&&b.$$typeof===f}function bt(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return U[B]})}var ht=/\/+/g;function j(b,U){return typeof b=="object"&&b!==null&&b.key!=null?bt(""+b.key):U.toString(36)}function k(){}function xt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(k,k):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function zt(b,U,B,C,$){var mt=typeof b;(mt==="undefined"||mt==="boolean")&&(b=null);var at=!1;if(b===null)at=!0;else switch(mt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(b.$$typeof){case f:case u:at=!0;break;case T:return at=b._init,zt(at(b._payload),U,B,C,$)}}if(at)return $=$(b),at=C===""?"."+j(b,0):C,K($)?(B="",at!=null&&(B=at.replace(ht,"$&/")+"/"),zt($,U,B,"",function($e){return $e})):$!=null&&(pt($)&&($=P($,B+($.key==null||b&&b.key===$.key?"":(""+$.key).replace(ht,"$&/")+"/")+at)),U.push($)),1;at=0;var ie=C===""?".":C+":";if(K(b))for(var _t=0;_t<b.length;_t++)C=b[_t],mt=ie+j(C,_t),at+=zt(C,U,B,mt,$);else if(_t=z(b),typeof _t=="function")for(b=_t.call(b),_t=0;!(C=b.next()).done;)C=C.value,mt=ie+j(C,_t++),at+=zt(C,U,B,mt,$);else if(mt==="object"){if(typeof b.then=="function")return zt(xt(b),U,B,C,$);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return at}function R(b,U,B){if(b==null)return b;var C=[],$=0;return zt(b,C,"","",function(mt){return U.call(B,mt,$++)}),C}function H(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var J=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function it(){}return ut.Children={map:R,forEach:function(b,U,B){R(b,function(){U.apply(this,arguments)},B)},count:function(b){var U=0;return R(b,function(){U++}),U},toArray:function(b){return R(b,function(U){return U})||[]},only:function(b){if(!pt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ut.Component=Z,ut.Fragment=c,ut.Profiler=d,ut.PureComponent=ft,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ut.__COMPILER_RUNTIME={__proto__:null,c:function(b){return q.H.useMemoCache(b)}},ut.cache=function(b){return function(){return b.apply(null,arguments)}},ut.cloneElement=function(b,U,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var C=L({},b.props),$=b.key,mt=void 0;if(U!=null)for(at in U.ref!==void 0&&(mt=void 0),U.key!==void 0&&($=""+U.key),U)!nt.call(U,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&U.ref===void 0||(C[at]=U[at]);var at=arguments.length-2;if(at===1)C.children=B;else if(1<at){for(var ie=Array(at),_t=0;_t<at;_t++)ie[_t]=arguments[_t+2];C.children=ie}return et(b.type,$,void 0,void 0,mt,C)},ut.createContext=function(b){return b={$$typeof:y,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},ut.createElement=function(b,U,B){var C,$={},mt=null;if(U!=null)for(C in U.key!==void 0&&(mt=""+U.key),U)nt.call(U,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&($[C]=U[C]);var at=arguments.length-2;if(at===1)$.children=B;else if(1<at){for(var ie=Array(at),_t=0;_t<at;_t++)ie[_t]=arguments[_t+2];$.children=ie}if(b&&b.defaultProps)for(C in at=b.defaultProps,at)$[C]===void 0&&($[C]=at[C]);return et(b,mt,void 0,void 0,null,$)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(b){return{$$typeof:S,render:b}},ut.isValidElement=pt,ut.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:H}},ut.memo=function(b,U){return{$$typeof:g,type:b,compare:U===void 0?null:U}},ut.startTransition=function(b){var U=q.T,B={};q.T=B;try{var C=b(),$=q.S;$!==null&&$(B,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(it,J)}catch(mt){J(mt)}finally{q.T=U}},ut.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ut.use=function(b){return q.H.use(b)},ut.useActionState=function(b,U,B){return q.H.useActionState(b,U,B)},ut.useCallback=function(b,U){return q.H.useCallback(b,U)},ut.useContext=function(b){return q.H.useContext(b)},ut.useDebugValue=function(){},ut.useDeferredValue=function(b,U){return q.H.useDeferredValue(b,U)},ut.useEffect=function(b,U,B){var C=q.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return C.useEffect(b,U)},ut.useId=function(){return q.H.useId()},ut.useImperativeHandle=function(b,U,B){return q.H.useImperativeHandle(b,U,B)},ut.useInsertionEffect=function(b,U){return q.H.useInsertionEffect(b,U)},ut.useLayoutEffect=function(b,U){return q.H.useLayoutEffect(b,U)},ut.useMemo=function(b,U){return q.H.useMemo(b,U)},ut.useOptimistic=function(b,U){return q.H.useOptimistic(b,U)},ut.useReducer=function(b,U,B){return q.H.useReducer(b,U,B)},ut.useRef=function(b){return q.H.useRef(b)},ut.useState=function(b){return q.H.useState(b)},ut.useSyncExternalStore=function(b,U,B){return q.H.useSyncExternalStore(b,U,B)},ut.useTransition=function(){return q.H.useTransition()},ut.version="19.1.0",ut}var Ed;function Ac(){return Ed||(Ed=1,gc.exports=Tp()),gc.exports}var Yt=Ac(),pc={exports:{}},An={},mc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Ep(){return Od||(Od=1,function(f){function u(R,H){var J=R.length;R.push(H);t:for(;0<J;){var it=J-1>>>1,b=R[it];if(0<d(b,H))R[it]=H,R[J]=b,J=it;else break t}}function c(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var H=R[0],J=R.pop();if(J!==H){R[0]=J;t:for(var it=0,b=R.length,U=b>>>1;it<U;){var B=2*(it+1)-1,C=R[B],$=B+1,mt=R[$];if(0>d(C,J))$<b&&0>d(mt,C)?(R[it]=mt,R[$]=J,it=$):(R[it]=C,R[B]=J,it=B);else if($<b&&0>d(mt,J))R[it]=mt,R[$]=J,it=$;else break t}}return H}function d(R,H){var J=R.sortIndex-H.sortIndex;return J!==0?J:R.id-H.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;f.unstable_now=function(){return h.now()}}else{var y=Date,S=y.now();f.unstable_now=function(){return y.now()-S}}var m=[],g=[],T=1,w=null,z=3,G=!1,L=!1,X=!1,Z=!1,I=typeof setTimeout=="function"?setTimeout:null,ft=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;function K(R){for(var H=c(g);H!==null;){if(H.callback===null)s(g);else if(H.startTime<=R)s(g),H.sortIndex=H.expirationTime,u(m,H);else break;H=c(g)}}function q(R){if(X=!1,K(R),!L)if(c(m)!==null)L=!0,nt||(nt=!0,j());else{var H=c(g);H!==null&&zt(q,H.startTime-R)}}var nt=!1,et=-1,P=5,pt=-1;function bt(){return Z?!0:!(f.unstable_now()-pt<P)}function ht(){if(Z=!1,nt){var R=f.unstable_now();pt=R;var H=!0;try{t:{L=!1,X&&(X=!1,ft(et),et=-1),G=!0;var J=z;try{e:{for(K(R),w=c(m);w!==null&&!(w.expirationTime>R&&bt());){var it=w.callback;if(typeof it=="function"){w.callback=null,z=w.priorityLevel;var b=it(w.expirationTime<=R);if(R=f.unstable_now(),typeof b=="function"){w.callback=b,K(R),H=!0;break e}w===c(m)&&s(m),K(R)}else s(m);w=c(m)}if(w!==null)H=!0;else{var U=c(g);U!==null&&zt(q,U.startTime-R),H=!1}}break t}finally{w=null,z=J,G=!1}H=void 0}}finally{H?j():nt=!1}}}var j;if(typeof dt=="function")j=function(){dt(ht)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,xt=k.port2;k.port1.onmessage=ht,j=function(){xt.postMessage(null)}}else j=function(){I(ht,0)};function zt(R,H){et=I(function(){R(f.unstable_now())},H)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(R){R.callback=null},f.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},f.unstable_getCurrentPriorityLevel=function(){return z},f.unstable_next=function(R){switch(z){case 1:case 2:case 3:var H=3;break;default:H=z}var J=z;z=H;try{return R()}finally{z=J}},f.unstable_requestPaint=function(){Z=!0},f.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=z;z=R;try{return H()}finally{z=J}},f.unstable_scheduleCallback=function(R,H,J){var it=f.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?it+J:it):J=it,R){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=J+b,R={id:T++,callback:H,priorityLevel:R,startTime:J,expirationTime:b,sortIndex:-1},J>it?(R.sortIndex=J,u(g,R),c(m)===null&&R===c(g)&&(X?(ft(et),et=-1):X=!0,zt(q,J-it))):(R.sortIndex=b,u(m,R),L||G||(L=!0,nt||(nt=!0,j()))),R},f.unstable_shouldYield=bt,f.unstable_wrapCallback=function(R){var H=z;return function(){var J=z;z=H;try{return R.apply(this,arguments)}finally{z=J}}}}(yc)),yc}var Ad;function Op(){return Ad||(Ad=1,mc.exports=Ep()),mc.exports}var bc={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Ap(){if(Nd)return Wt;Nd=1;var f=Ac();function u(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(m,g,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:m,containerInfo:g,implementation:T}}var y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(m,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return h(m,g,null,T)},Wt.flushSync=function(m){var g=y.T,T=s.p;try{if(y.T=null,s.p=2,m)return m()}finally{y.T=g,s.p=T,s.d.f()}},Wt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},Wt.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Wt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var T=g.as,w=S(T,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,G=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:G}):T==="script"&&s.d.X(m,{crossOrigin:w,integrity:z,fetchPriority:G,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=S(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},Wt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,w=S(T,g.crossOrigin);s.d.L(m,T,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wt.preloadModule=function(m,g){if(typeof m=="string")if(g){var T=S(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},Wt.requestFormReset=function(m){s.d.r(m)},Wt.unstable_batchedUpdates=function(m,g){return m(g)},Wt.useFormState=function(m,g,T){return y.H.useFormState(m,g,T)},Wt.useFormStatus=function(){return y.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var zd;function Np(){if(zd)return bc.exports;zd=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(u){console.error(u)}}return f(),bc.exports=Ap(),bc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function zp(){if(Rd)return An;Rd=1;var f=Op(),u=Ac(),c=Np();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(h(t)!==t)throw Error(s(188))}function m(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return S(n),t;if(i===a)return S(n),e;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,o=n.child;o;){if(o===l){r=!0,l=n,a=i;break}if(o===a){r=!0,a=n,l=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===l){r=!0,l=i,a=n;break}if(o===a){r=!0,a=i,l=n;break}o=o.sibling}if(!r)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),ft=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),bt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var k=Symbol.for("react.client.reference");function xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===k?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case Z:return"Profiler";case X:return"StrictMode";case q:return"Suspense";case nt:return"SuspenseList";case pt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case dt:return(t.displayName||"Context")+".Provider";case ft:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case et:return e=t.displayName||null,e!==null?e:xt(t.type)||"Memo";case P:e=t._payload,t=t._init;try{return xt(t(e))}catch{}}return null}var zt=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},it=[],b=-1;function U(t){return{current:t}}function B(t){0>b||(t.current=it[b],it[b]=null,b--)}function C(t,e){b++,it[b]=t.current,t.current=e}var $=U(null),mt=U(null),at=U(null),ie=U(null);function _t(t,e){switch(C(at,e),C(mt,t),C($,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?kf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=kf(e),t=$f(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B($),C($,t)}function $e(){B($),B(mt),B(at)}function Pi(t){t.memoizedState!==null&&C(ie,t);var e=$.current,l=$f(e,t.type);e!==l&&(C(mt,t),C($,l))}function Dn(t){mt.current===t&&(B($),B(mt)),ie.current===t&&(B(ie),vn._currentValue=J)}var Ii=Object.prototype.hasOwnProperty,tu=f.unstable_scheduleCallback,eu=f.unstable_cancelCallback,Pd=f.unstable_shouldYield,Id=f.unstable_requestPaint,ze=f.unstable_now,th=f.unstable_getCurrentPriorityLevel,Nc=f.unstable_ImmediatePriority,zc=f.unstable_UserBlockingPriority,wn=f.unstable_NormalPriority,eh=f.unstable_LowPriority,Rc=f.unstable_IdlePriority,lh=f.log,ah=f.unstable_setDisableYieldValue,Na=null,ue=null;function Fe(t){if(typeof lh=="function"&&ah(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Na,t)}catch{}}var se=Math.clz32?Math.clz32:uh,nh=Math.log,ih=Math.LN2;function uh(t){return t>>>=0,t===0?32:31-(nh(t)/ih|0)|0}var Mn=256,Un=4194304;function xl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?n=xl(a):(r&=o,r!==0?n=xl(r):l||(l=o&~t,l!==0&&(n=xl(l))))):(o=a&~i,o!==0?n=xl(o):r!==0?n=xl(r):l||(l=a&~t,l!==0&&(n=xl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function za(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function sh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var t=Mn;return Mn<<=1,(Mn&4194048)===0&&(Mn=256),t}function Dc(){var t=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),t}function lu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ra(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ch(t,e,l,a,n,i){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var o=t.entanglements,p=t.expirationTimes,O=t.hiddenUpdates;for(l=r&~l;0<l;){var _=31-se(l),M=1<<_;o[_]=0,p[_]=-1;var A=O[_];if(A!==null)for(O[_]=null,_=0;_<A.length;_++){var N=A[_];N!==null&&(N.lane&=-536870913)}l&=~M}a!==0&&wc(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function wc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-se(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Mc(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-se(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function au(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Uc(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:gd(t.type))}function rh(t,e){var l=H.p;try{return H.p=t,e()}finally{H.p=l}}var We=Math.random().toString(36).slice(2),$t="__reactFiber$"+We,te="__reactProps$"+We,ql="__reactContainer$"+We,iu="__reactEvents$"+We,oh="__reactListeners$"+We,fh="__reactHandles$"+We,Hc="__reactResources$"+We,_a="__reactMarker$"+We;function uu(t){delete t[$t],delete t[te],delete t[iu],delete t[oh],delete t[fh]}function Yl(t){var e=t[$t];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ql]||l[$t]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=If(t);t!==null;){if(l=t[$t])return l;t=If(t)}return e}t=l,l=t.parentNode}return null}function Gl(t){if(t=t[$t]||t[ql]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Da(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Vl(t){var e=t[Hc];return e||(e=t[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[_a]=!0}var Cc=new Set,Lc={};function Sl(t,e){Xl(t,e),Xl(t+"Capture",e)}function Xl(t,e){for(Lc[t]=e,t=0;t<e.length;t++)Cc.add(e[t])}var dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jc={},Bc={};function hh(t){return Ii.call(Bc,t)?!0:Ii.call(jc,t)?!1:dh.test(t)?Bc[t]=!0:(jc[t]=!0,!1)}function Cn(t,e,l){if(hh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Ln(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function He(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var su,qc;function Ql(t){if(su===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||"",qc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+su+t+qc}var cu=!1;function ru(t,e){if(!t||cu)return"";cu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var A=N}Reflect.construct(t,[],M)}else{try{M.call()}catch(N){A=N}t.call(M.prototype)}}else{try{throw Error()}catch(N){A=N}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&A&&typeof N.stack=="string")return[N.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var p=r.split(`
`),O=o.split(`
`);for(n=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;n<O.length&&!O[n].includes("DetermineComponentFrameRoot");)n++;if(a===p.length||n===O.length)for(a=p.length-1,n=O.length-1;1<=a&&0<=n&&p[a]!==O[n];)n--;for(;1<=a&&0<=n;a--,n--)if(p[a]!==O[n]){if(a!==1||n!==1)do if(a--,n--,0>n||p[a]!==O[n]){var _=`
`+p[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=n);break}}}finally{cu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ql(l):""}function gh(t){switch(t.tag){case 26:case 27:case 5:return Ql(t.type);case 16:return Ql("Lazy");case 13:return Ql("Suspense");case 19:return Ql("SuspenseList");case 0:case 15:return ru(t.type,!1);case 11:return ru(t.type.render,!1);case 1:return ru(t.type,!0);case 31:return Ql("Activity");default:return""}}function Yc(t){try{var e="";do e+=gh(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ph(t){var e=Gc(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jn(t){t._valueTracker||(t._valueTracker=ph(t))}function Vc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Gc(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mh=/[\n"\\]/g;function me(t){return t.replace(mh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ou(t,e,l,a,n,i,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?fu(t,r,pe(e)):l!=null?fu(t,r,pe(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+pe(o):t.removeAttribute("name")}function Xc(t,e,l,a,n,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+pe(l):"",e=e!=null?""+pe(e):l,o||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function fu(t,e,l){e==="number"&&Bn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Zl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+pe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Qc(t,e,l){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+pe(l):""}function Zc(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(zt(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=pe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Kl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var yh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||yh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Jc(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Kc(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Kc(t,i,e[i])}function du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(t){return vh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var hu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jl=null,kl=null;function kc(t){var e=Gl(t);if(e&&(t=e.stateNode)){var l=t[te]||null;t:switch(t=e.stateNode,e.type){case"input":if(ou(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[te]||null;if(!n)throw Error(s(90));ou(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Vc(a)}break t;case"textarea":Qc(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Zl(t,!!l.multiple,e,!1)}}}var pu=!1;function $c(t,e,l){if(pu)return t(e,l);pu=!0;try{var a=t(e);return a}finally{if(pu=!1,(Jl!==null||kl!==null)&&(Oi(),Jl&&(e=Jl,t=kl,kl=Jl=null,kc(e),t)))for(e=0;e<t.length;e++)kc(t[e])}}function wa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[te]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var Ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Ce)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{mu=!1}var Pe=null,yu=null,Yn=null;function Fc(){if(Yn)return Yn;var t,e=yu,l=e.length,a,n="value"in Pe?Pe.value:Pe.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===n[i-a];a++);return Yn=n.slice(t,1<a?1-a:void 0)}function Gn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vn(){return!0}function Wc(){return!1}function ee(t){function e(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(l=t[o],this[o]=l?l(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vn:Wc,this.isPropagationStopped=Wc,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),e}var Tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xn=ee(Tl),Ua=T({},Tl,{view:0,detail:0}),xh=ee(Ua),bu,vu,Ha,Qn=T({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(bu=t.screenX-Ha.screenX,vu=t.screenY-Ha.screenY):vu=bu=0,Ha=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),Pc=ee(Qn),Sh=T({},Qn,{dataTransfer:0}),Th=ee(Sh),Eh=T({},Ua,{relatedTarget:0}),xu=ee(Eh),Oh=T({},Tl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ah=ee(Oh),Nh=T({},Tl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zh=ee(Nh),Rh=T({},Tl,{data:0}),Ic=ee(Rh),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wh[t])?!!e[t]:!1}function Su(){return Mh}var Uh=T({},Ua,{key:function(t){if(t.key){var e=_h[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?Gn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hh=ee(Uh),Ch=T({},Qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tr=ee(Ch),Lh=T({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),jh=ee(Lh),Bh=T({},Tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=ee(Bh),Yh=T({},Qn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=ee(Yh),Vh=T({},Tl,{newState:0,oldState:0}),Xh=ee(Vh),Qh=[9,13,27,32],Tu=Ce&&"CompositionEvent"in window,Ca=null;Ce&&"documentMode"in document&&(Ca=document.documentMode);var Zh=Ce&&"TextEvent"in window&&!Ca,er=Ce&&(!Tu||Ca&&8<Ca&&11>=Ca),lr=" ",ar=!1;function nr(t,e){switch(t){case"keyup":return Qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ir(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $l=!1;function Kh(t,e){switch(t){case"compositionend":return ir(e);case"keypress":return e.which!==32?null:(ar=!0,lr);case"textInput":return t=e.data,t===lr&&ar?null:t;default:return null}}function Jh(t,e){if($l)return t==="compositionend"||!Tu&&nr(t,e)?(t=Fc(),Yn=yu=Pe=null,$l=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return er&&e.locale!=="ko"?null:e.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kh[t.type]:e==="textarea"}function sr(t,e,l,a){Jl?kl?kl.push(a):kl=[a]:Jl=a,e=Di(e,"onChange"),0<e.length&&(l=new Xn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var La=null,ja=null;function $h(t){Xf(t,0)}function Zn(t){var e=Da(t);if(Vc(e))return t}function cr(t,e){if(t==="change")return e}var rr=!1;if(Ce){var Eu;if(Ce){var Ou="oninput"in document;if(!Ou){var or=document.createElement("div");or.setAttribute("oninput","return;"),Ou=typeof or.oninput=="function"}Eu=Ou}else Eu=!1;rr=Eu&&(!document.documentMode||9<document.documentMode)}function fr(){La&&(La.detachEvent("onpropertychange",dr),ja=La=null)}function dr(t){if(t.propertyName==="value"&&Zn(ja)){var e=[];sr(e,ja,t,gu(t)),$c($h,e)}}function Fh(t,e,l){t==="focusin"?(fr(),La=e,ja=l,La.attachEvent("onpropertychange",dr)):t==="focusout"&&fr()}function Wh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zn(ja)}function Ph(t,e){if(t==="click")return Zn(e)}function Ih(t,e){if(t==="input"||t==="change")return Zn(e)}function tg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ce=typeof Object.is=="function"?Object.is:tg;function Ba(t,e){if(ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ii.call(e,n)||!ce(t[n],e[n]))return!1}return!0}function hr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gr(t,e){var l=hr(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=hr(l)}}function pr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Bn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Bn(t.document)}return e}function Au(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var eg=Ce&&"documentMode"in document&&11>=document.documentMode,Fl=null,Nu=null,qa=null,zu=!1;function yr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||Fl==null||Fl!==Bn(a)||(a=Fl,"selectionStart"in a&&Au(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ba(qa,a)||(qa=a,a=Di(Nu,"onSelect"),0<a.length&&(e=new Xn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Fl)))}function El(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Wl={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionrun:El("Transition","TransitionRun"),transitionstart:El("Transition","TransitionStart"),transitioncancel:El("Transition","TransitionCancel"),transitionend:El("Transition","TransitionEnd")},Ru={},br={};Ce&&(br=document.createElement("div").style,"AnimationEvent"in window||(delete Wl.animationend.animation,delete Wl.animationiteration.animation,delete Wl.animationstart.animation),"TransitionEvent"in window||delete Wl.transitionend.transition);function Ol(t){if(Ru[t])return Ru[t];if(!Wl[t])return t;var e=Wl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in br)return Ru[t]=e[l];return t}var vr=Ol("animationend"),xr=Ol("animationiteration"),Sr=Ol("animationstart"),lg=Ol("transitionrun"),ag=Ol("transitionstart"),ng=Ol("transitioncancel"),Tr=Ol("transitionend"),Er=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function Oe(t,e){Er.set(t,e),Sl(e,[t])}var Or=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var l=Or.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Yc(e)},Or.set(t,e),e)}return{value:t,source:e,stack:Yc(e)}}var be=[],Pl=0,Du=0;function Kn(){for(var t=Pl,e=Du=Pl=0;e<t;){var l=be[e];be[e++]=null;var a=be[e];be[e++]=null;var n=be[e];be[e++]=null;var i=be[e];if(be[e++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&Ar(l,n,i)}}function Jn(t,e,l,a){be[Pl++]=t,be[Pl++]=e,be[Pl++]=l,be[Pl++]=a,Du|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function wu(t,e,l,a){return Jn(t,e,l,a),kn(t)}function Il(t,e){return Jn(t,null,null,e),kn(t)}function Ar(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-se(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function kn(t){if(50<fn)throw fn=0,js=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ta={};function ig(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function re(t,e,l,a){return new ig(t,e,l,a)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Le(t,e){var l=t.alternate;return l===null?(l=re(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Nr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $n(t,e,l,a,n,i){var r=0;if(a=t,typeof t=="function")Mu(t)&&(r=1);else if(typeof t=="string")r=sp(t,l,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pt:return t=re(31,l,e,n),t.elementType=pt,t.lanes=i,t;case L:return Al(l.children,n,i,e);case X:r=8,n|=24;break;case Z:return t=re(12,l,e,n|2),t.elementType=Z,t.lanes=i,t;case q:return t=re(13,l,e,n),t.elementType=q,t.lanes=i,t;case nt:return t=re(19,l,e,n),t.elementType=nt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:case dt:r=10;break t;case ft:r=9;break t;case K:r=11;break t;case et:r=14;break t;case P:r=16,a=null;break t}r=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=re(r,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Al(t,e,l,a){return t=re(7,t,a,e),t.lanes=l,t}function Uu(t,e,l){return t=re(6,t,null,e),t.lanes=l,t}function Hu(t,e,l){return e=re(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ea=[],la=0,Fn=null,Wn=0,ve=[],xe=0,Nl=null,je=1,Be="";function zl(t,e){ea[la++]=Wn,ea[la++]=Fn,Fn=t,Wn=e}function zr(t,e,l){ve[xe++]=je,ve[xe++]=Be,ve[xe++]=Nl,Nl=t;var a=je;t=Be;var n=32-se(a)-1;a&=~(1<<n),l+=1;var i=32-se(e)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,je=1<<32-se(e)+n|l<<n|a,Be=i+t}else je=1<<i|l<<n|a,Be=t}function Cu(t){t.return!==null&&(zl(t,1),zr(t,1,0))}function Lu(t){for(;t===Fn;)Fn=ea[--la],ea[la]=null,Wn=ea[--la],ea[la]=null;for(;t===Nl;)Nl=ve[--xe],ve[xe]=null,Be=ve[--xe],ve[xe]=null,je=ve[--xe],ve[xe]=null}var It=null,Mt=null,vt=!1,Rl=null,Re=!1,ju=Error(s(519));function _l(t){var e=Error(s(418,""));throw Va(ye(e,t)),ju}function Rr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[$t]=t,e[te]=a,l){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(l=0;l<hn.length;l++)ot(hn[l],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),Xc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),jn(e);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),Zc(e,a.value,a.defaultValue,a.children),jn(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Jf(e.textContent,l)?(a.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),a.onScroll!=null&&ot("scroll",e),a.onScrollEnd!=null&&ot("scrollend",e),a.onClick!=null&&(e.onclick=wi),e=!0):e=!1,e||_l(t)}function _r(t){for(It=t.return;It;)switch(It.tag){case 5:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:It=It.return}}function Ya(t){if(t!==It)return!1;if(!vt)return _r(t),vt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Is(t.type,t.memoizedProps)),l=!l),l&&Mt&&_l(t),_r(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Mt=Ne(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Mt=null}}else e===27?(e=Mt,gl(t.type)?(t=ac,ac=null,Mt=t):Mt=e):Mt=It?Ne(t.stateNode.nextSibling):null;return!0}function Ga(){Mt=It=null,vt=!1}function Dr(){var t=Rl;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),Rl=null),t}function Va(t){Rl===null?Rl=[t]:Rl.push(t)}var Bu=U(null),Dl=null,qe=null;function Ie(t,e,l){C(Bu,e._currentValue),e._currentValue=l}function Ye(t){t._currentValue=Bu.current,B(Bu)}function qu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Yu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var p=0;p<e.length;p++)if(o.context===e[p]){i.lanes|=l,o=i.alternate,o!==null&&(o.lanes|=l),qu(i.return,l,t),a||(r=null);break t}i=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(s(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),qu(r,l,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Xa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var o=n.type;ce(n.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(n===ie.current){if(r=n.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&Yu(e,t,l,a),e.flags|=262144}function Pn(t){for(t=t.firstContext;t!==null;){if(!ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wl(t){Dl=t,qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return wr(Dl,t)}function In(t,e){return Dl===null&&wl(t),wr(t,e)}function wr(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},qe===null){if(t===null)throw Error(s(308));qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else qe=qe.next=e;return l}var ug=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},sg=f.unstable_scheduleCallback,cg=f.unstable_NormalPriority,Bt={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new ug,data:new Map,refCount:0}}function Qa(t){t.refCount--,t.refCount===0&&sg(cg,function(){t.controller.abort()})}var Za=null,Vu=0,aa=0,na=null;function rg(t,e){if(Za===null){var l=Za=[];Vu=0,aa=Qs(),na={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Vu++,e.then(Mr,Mr),e}function Mr(){if(--Vu===0&&Za!==null){na!==null&&(na.status="fulfilled");var t=Za;Za=null,aa=0,na=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function og(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ur=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&rg(t,e),Ur!==null&&Ur(t,e)};var Ml=U(null);function Xu(){var t=Ml.current;return t!==null?t:Rt.pooledCache}function ti(t,e){e===null?C(Ml,Ml.current):C(Ml,e.pool)}function Hr(){var t=Xu();return t===null?null:{parent:Bt._currentValue,pool:t}}var Ka=Error(s(460)),Cr=Error(s(474)),ei=Error(s(542)),Qu={then:function(){}};function Lr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function li(){}function jr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(li,li),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t;default:if(typeof e.status=="string")e.then(li,li);else{if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t}throw Ja=e,Ka}}var Ja=null;function Br(){if(Ja===null)throw Error(s(459));var t=Ja;return Ja=null,t}function qr(t){if(t===Ka||t===ei)throw Error(s(483))}var tl=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function el(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ll(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(St&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=kn(t),Ar(t,null,l),e}return Jn(t,a,e,l),kn(t)}function ka(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Mc(t,l)}}function Ju(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var ku=!1;function $a(){if(ku){var t=na;if(t!==null)throw t}}function Fa(t,e,l,a){ku=!1;var n=t.updateQueue;tl=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,O=p.next;p.next=null,r===null?i=O:r.next=O,r=p;var _=t.alternate;_!==null&&(_=_.updateQueue,o=_.lastBaseUpdate,o!==r&&(o===null?_.firstBaseUpdate=O:o.next=O,_.lastBaseUpdate=p))}if(i!==null){var M=n.baseState;r=0,_=O=p=null,o=i;do{var A=o.lane&-536870913,N=A!==o.lane;if(N?(gt&A)===A:(a&A)===A){A!==0&&A===aa&&(ku=!0),_!==null&&(_=_.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var tt=t,F=o;A=e;var At=l;switch(F.tag){case 1:if(tt=F.payload,typeof tt=="function"){M=tt.call(At,M,A);break t}M=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=F.payload,A=typeof tt=="function"?tt.call(At,M,A):tt,A==null)break t;M=T({},M,A);break t;case 2:tl=!0}}A=o.callback,A!==null&&(t.flags|=64,N&&(t.flags|=8192),N=n.callbacks,N===null?n.callbacks=[A]:N.push(A))}else N={lane:A,tag:o.tag,payload:o.payload,callback:o.callback,next:null},_===null?(O=_=N,p=M):_=_.next=N,r|=A;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;N=o,o=N.next,N.next=null,n.lastBaseUpdate=N,n.shared.pending=null}}while(!0);_===null&&(p=M),n.baseState=p,n.firstBaseUpdate=O,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),ol|=r,t.lanes=r,t.memoizedState=M}}function Yr(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Gr(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Yr(l[t],e)}var ia=U(null),ai=U(0);function Vr(t,e){t=Je,C(ai,t),C(ia,e),Je=t|e.baseLanes}function $u(){C(ai,Je),C(ia,ia.current)}function Fu(){Je=ai.current,B(ia),B(ai)}var al=0,st=null,Et=null,Lt=null,ni=!1,ua=!1,Ul=!1,ii=0,Wa=0,sa=null,fg=0;function Ht(){throw Error(s(321))}function Wu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ce(t[l],e[l]))return!1;return!0}function Pu(t,e,l,a,n,i){return al=i,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?No:zo,Ul=!1,i=l(a,n),Ul=!1,ua&&(i=Qr(e,l,a,n)),Xr(t),i}function Xr(t){R.H=fi;var e=Et!==null&&Et.next!==null;if(al=0,Lt=Et=st=null,ni=!1,Wa=0,sa=null,e)throw Error(s(300));t===null||Vt||(t=t.dependencies,t!==null&&Pn(t)&&(Vt=!0))}function Qr(t,e,l,a){st=t;var n=0;do{if(ua&&(sa=null),Wa=0,ua=!1,25<=n)throw Error(s(301));if(n+=1,Lt=Et=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=bg,i=e(l,a)}while(ua);return i}function dg(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(st.flags|=1024),e}function Iu(){var t=ii!==0;return ii=0,t}function ts(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function es(t){if(ni){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ni=!1}al=0,Lt=Et=st=null,ua=!1,Wa=ii=0,sa=null}function le(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?st.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function jt(){if(Et===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Lt===null?st.memoizedState:Lt.next;if(e!==null)Lt=e,Et=t;else{if(t===null)throw st.alternate===null?Error(s(467)):Error(s(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Lt===null?st.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=Wa;return Wa+=1,sa===null&&(sa=[]),t=jr(sa,t,e),e=st,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?No:zo),t}function ui(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===dt)return Ft(t)}throw Error(s(438,String(t)))}function as(t){var e=null,l=st.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=st.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ls(),st.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=bt;return e.index++,l}function Ge(t,e){return typeof e=="function"?e(t):e}function si(t){var e=jt();return ns(e,Et,t)}function ns(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=r=null,p=null,O=e,_=!1;do{var M=O.lane&-536870913;if(M!==O.lane?(gt&M)===M:(al&M)===M){var A=O.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),M===aa&&(_=!0);else if((al&A)===A){O=O.next,A===aa&&(_=!0);continue}else M={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},p===null?(o=p=M,r=i):p=p.next=M,st.lanes|=A,ol|=A;M=O.action,Ul&&l(i,M),i=O.hasEagerState?O.eagerState:l(i,M)}else A={lane:M,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},p===null?(o=p=A,r=i):p=p.next=A,st.lanes|=M,ol|=M;O=O.next}while(O!==null&&O!==e);if(p===null?r=i:p.next=o,!ce(i,t.memoizedState)&&(Vt=!0,_&&(l=na,l!==null)))throw l;t.memoizedState=i,t.baseState=r,t.baseQueue=p,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function is(t){var e=jt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);ce(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Zr(t,e,l){var a=st,n=jt(),i=vt;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=e();var r=!ce((Et||n).memoizedState,l);r&&(n.memoizedState=l,Vt=!0),n=n.queue;var o=kr.bind(null,a,n,t);if(Ia(2048,8,o,[t]),n.getSnapshot!==e||r||Lt!==null&&Lt.memoizedState.tag&1){if(a.flags|=2048,ca(9,ci(),Jr.bind(null,a,n,l,e),null),Rt===null)throw Error(s(349));i||(al&124)!==0||Kr(a,e,l)}return l}function Kr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=st.updateQueue,e===null?(e=ls(),st.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Jr(t,e,l,a){e.value=l,e.getSnapshot=a,$r(e)&&Fr(t)}function kr(t,e,l){return l(function(){$r(e)&&Fr(t)})}function $r(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ce(t,l)}catch{return!0}}function Fr(t){var e=Il(t,2);e!==null&&ge(e,t,2)}function us(t){var e=le();if(typeof t=="function"){var l=t;if(t=l(),Ul){Fe(!0);try{l()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:t},e}function Wr(t,e,l,a){return t.baseState=l,ns(t,Et,typeof a=="function"?a:Ge)}function hg(t,e,l,a,n){if(oi(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};R.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Pr(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Pr(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=R.T,r={};R.T=r;try{var o=l(n,a),p=R.S;p!==null&&p(r,o),Ir(t,e,o)}catch(O){ss(t,e,O)}finally{R.T=i}}else try{i=l(n,a),Ir(t,e,i)}catch(O){ss(t,e,O)}}function Ir(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){to(t,e,a)},function(a){return ss(t,e,a)}):to(t,e,l)}function to(t,e,l){e.status="fulfilled",e.value=l,eo(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Pr(t,l)))}function ss(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,eo(e),e=e.next;while(e!==a)}t.action=null}function eo(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lo(t,e){return e}function ao(t,e){if(vt){var l=Rt.formState;if(l!==null){t:{var a=st;if(vt){if(Mt){e:{for(var n=Mt,i=Re;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ne(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Mt=Ne(n.nextSibling),a=n.data==="F!";break t}}_l(a)}a=!1}a&&(e=l[0])}}return l=le(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},l.queue=a,l=Eo.bind(null,st,a),a.dispatch=l,a=us(!1),i=ds.bind(null,st,!1,a.queue),a=le(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=hg.bind(null,st,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function no(t){var e=jt();return io(e,Et,t)}function io(t,e,l){if(e=ns(t,e,lo)[0],t=si(Ge)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(r){throw r===Ka?ei:r}else a=e;e=jt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(st.flags|=2048,ca(9,ci(),gg.bind(null,n,l),null)),[a,i,t]}function gg(t,e){t.action=e}function uo(t){var e=jt(),l=Et;if(l!==null)return io(e,l,t);jt(),e=e.memoizedState,l=jt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ca(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=st.updateQueue,e===null&&(e=ls(),st.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ci(){return{destroy:void 0,resource:void 0}}function so(){return jt().memoizedState}function ri(t,e,l,a){var n=le();a=a===void 0?null:a,st.flags|=t,n.memoizedState=ca(1|e,ci(),l,a)}function Ia(t,e,l,a){var n=jt();a=a===void 0?null:a;var i=n.memoizedState.inst;Et!==null&&a!==null&&Wu(a,Et.memoizedState.deps)?n.memoizedState=ca(e,i,l,a):(st.flags|=t,n.memoizedState=ca(1|e,i,l,a))}function co(t,e){ri(8390656,8,t,e)}function ro(t,e){Ia(2048,8,t,e)}function oo(t,e){return Ia(4,2,t,e)}function fo(t,e){return Ia(4,4,t,e)}function ho(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function go(t,e,l){l=l!=null?l.concat([t]):null,Ia(4,4,ho.bind(null,e,t),l)}function cs(){}function po(t,e){var l=jt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Wu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function mo(t,e){var l=jt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Wu(e,a[1]))return a[0];if(a=t(),Ul){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a}function rs(t,e,l){return l===void 0||(al&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=xf(),st.lanes|=t,ol|=t,l)}function yo(t,e,l,a){return ce(l,e)?l:ia.current!==null?(t=rs(t,l,a),ce(t,e)||(Vt=!0),t):(al&42)===0?(Vt=!0,t.memoizedState=l):(t=xf(),st.lanes|=t,ol|=t,e)}function bo(t,e,l,a,n){var i=H.p;H.p=i!==0&&8>i?i:8;var r=R.T,o={};R.T=o,ds(t,!1,e,l);try{var p=n(),O=R.S;if(O!==null&&O(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=og(p,a);tn(t,e,_,he(t))}else tn(t,e,a,he(t))}catch(M){tn(t,e,{then:function(){},status:"rejected",reason:M},he())}finally{H.p=i,R.T=r}}function pg(){}function os(t,e,l,a){if(t.tag!==5)throw Error(s(476));var n=vo(t).queue;bo(t,n,e,J,l===null?pg:function(){return xo(t),l(a)})}function vo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:J},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function xo(t){var e=vo(t).next.queue;tn(t,e,{},he())}function fs(){return Ft(vn)}function So(){return jt().memoizedState}function To(){return jt().memoizedState}function mg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=he();t=el(l);var a=ll(e,t,l);a!==null&&(ge(a,e,l),ka(a,e,l)),e={cache:Gu()},t.payload=e;return}e=e.return}}function yg(t,e,l){var a=he();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},oi(t)?Oo(e,l):(l=wu(t,e,l,a),l!==null&&(ge(l,t,a),Ao(l,e,a)))}function Eo(t,e,l){var a=he();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(oi(t))Oo(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,o=i(r,l);if(n.hasEagerState=!0,n.eagerState=o,ce(o,r))return Jn(t,e,n,0),Rt===null&&Kn(),!1}catch{}finally{}if(l=wu(t,e,n,a),l!==null)return ge(l,t,a),Ao(l,e,a),!0}return!1}function ds(t,e,l,a){if(a={lane:2,revertLane:Qs(),action:a,hasEagerState:!1,eagerState:null,next:null},oi(t)){if(e)throw Error(s(479))}else e=wu(t,l,a,2),e!==null&&ge(e,t,2)}function oi(t){var e=t.alternate;return t===st||e!==null&&e===st}function Oo(t,e){ua=ni=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Ao(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Mc(t,l)}}var fi={readContext:Ft,use:ui,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht},No={readContext:Ft,use:ui,useCallback:function(t,e){return le().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:co,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ri(4194308,4,ho.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var l=le();e=e===void 0?null:e;var a=t();if(Ul){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=le();if(l!==void 0){var n=l(e);if(Ul){Fe(!0);try{l(e)}finally{Fe(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=yg.bind(null,st,t),[a.memoizedState,t]},useRef:function(t){var e=le();return t={current:t},e.memoizedState=t},useState:function(t){t=us(t);var e=t.queue,l=Eo.bind(null,st,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:cs,useDeferredValue:function(t,e){var l=le();return rs(l,t,e)},useTransition:function(){var t=us(!1);return t=bo.bind(null,st,t.queue,!0,!1),le().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=st,n=le();if(vt){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),Rt===null)throw Error(s(349));(gt&124)!==0||Kr(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,co(kr.bind(null,a,i,t),[t]),a.flags|=2048,ca(9,ci(),Jr.bind(null,a,i,l,e),null),l},useId:function(){var t=le(),e=Rt.identifierPrefix;if(vt){var l=Be,a=je;l=(a&~(1<<32-se(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ii++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=fg++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:fs,useFormState:ao,useActionState:ao,useOptimistic:function(t){var e=le();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ds.bind(null,st,!0,l),l.dispatch=e,[t,e]},useMemoCache:as,useCacheRefresh:function(){return le().memoizedState=mg.bind(null,st)}},zo={readContext:Ft,use:ui,useCallback:po,useContext:Ft,useEffect:ro,useImperativeHandle:go,useInsertionEffect:oo,useLayoutEffect:fo,useMemo:mo,useReducer:si,useRef:so,useState:function(){return si(Ge)},useDebugValue:cs,useDeferredValue:function(t,e){var l=jt();return yo(l,Et.memoizedState,t,e)},useTransition:function(){var t=si(Ge)[0],e=jt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Zr,useId:So,useHostTransitionStatus:fs,useFormState:no,useActionState:no,useOptimistic:function(t,e){var l=jt();return Wr(l,Et,t,e)},useMemoCache:as,useCacheRefresh:To},bg={readContext:Ft,use:ui,useCallback:po,useContext:Ft,useEffect:ro,useImperativeHandle:go,useInsertionEffect:oo,useLayoutEffect:fo,useMemo:mo,useReducer:is,useRef:so,useState:function(){return is(Ge)},useDebugValue:cs,useDeferredValue:function(t,e){var l=jt();return Et===null?rs(l,t,e):yo(l,Et.memoizedState,t,e)},useTransition:function(){var t=is(Ge)[0],e=jt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Zr,useId:So,useHostTransitionStatus:fs,useFormState:uo,useActionState:uo,useOptimistic:function(t,e){var l=jt();return Et!==null?Wr(l,Et,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:as,useCacheRefresh:To},ra=null,en=0;function di(t){var e=en;return en+=1,ra===null&&(ra=[]),jr(ra,t,e)}function ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hi(t,e){throw e.$$typeof===w?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ro(t){var e=t._init;return e(t._payload)}function _o(t){function e(x,v){if(t){var E=x.deletions;E===null?(x.deletions=[v],x.flags|=16):E.push(v)}}function l(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function a(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(x,v){return x=Le(x,v),x.index=0,x.sibling=null,x}function i(x,v,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<v?(x.flags|=67108866,v):E):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function r(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function o(x,v,E,D){return v===null||v.tag!==6?(v=Uu(E,x.mode,D),v.return=x,v):(v=n(v,E),v.return=x,v)}function p(x,v,E,D){var Y=E.type;return Y===L?_(x,v,E.props.children,D,E.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===P&&Ro(Y)===v.type)?(v=n(v,E.props),ln(v,E),v.return=x,v):(v=$n(E.type,E.key,E.props,null,x.mode,D),ln(v,E),v.return=x,v)}function O(x,v,E,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Hu(E,x.mode,D),v.return=x,v):(v=n(v,E.children||[]),v.return=x,v)}function _(x,v,E,D,Y){return v===null||v.tag!==7?(v=Al(E,x.mode,D,Y),v.return=x,v):(v=n(v,E),v.return=x,v)}function M(x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Uu(""+v,x.mode,E),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case z:return E=$n(v.type,v.key,v.props,null,x.mode,E),ln(E,v),E.return=x,E;case G:return v=Hu(v,x.mode,E),v.return=x,v;case P:var D=v._init;return v=D(v._payload),M(x,v,E)}if(zt(v)||j(v))return v=Al(v,x.mode,E,null),v.return=x,v;if(typeof v.then=="function")return M(x,di(v),E);if(v.$$typeof===dt)return M(x,In(x,v),E);hi(x,v)}return null}function A(x,v,E,D){var Y=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return Y!==null?null:o(x,v,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return E.key===Y?p(x,v,E,D):null;case G:return E.key===Y?O(x,v,E,D):null;case P:return Y=E._init,E=Y(E._payload),A(x,v,E,D)}if(zt(E)||j(E))return Y!==null?null:_(x,v,E,D,null);if(typeof E.then=="function")return A(x,v,di(E),D);if(E.$$typeof===dt)return A(x,v,In(x,E),D);hi(x,E)}return null}function N(x,v,E,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(E)||null,o(v,x,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case z:return x=x.get(D.key===null?E:D.key)||null,p(v,x,D,Y);case G:return x=x.get(D.key===null?E:D.key)||null,O(v,x,D,Y);case P:var ct=D._init;return D=ct(D._payload),N(x,v,E,D,Y)}if(zt(D)||j(D))return x=x.get(E)||null,_(v,x,D,Y,null);if(typeof D.then=="function")return N(x,v,E,di(D),Y);if(D.$$typeof===dt)return N(x,v,E,In(v,D),Y);hi(v,D)}return null}function tt(x,v,E,D){for(var Y=null,ct=null,Q=v,W=v=0,Qt=null;Q!==null&&W<E.length;W++){Q.index>W?(Qt=Q,Q=null):Qt=Q.sibling;var yt=A(x,Q,E[W],D);if(yt===null){Q===null&&(Q=Qt);break}t&&Q&&yt.alternate===null&&e(x,Q),v=i(yt,v,W),ct===null?Y=yt:ct.sibling=yt,ct=yt,Q=Qt}if(W===E.length)return l(x,Q),vt&&zl(x,W),Y;if(Q===null){for(;W<E.length;W++)Q=M(x,E[W],D),Q!==null&&(v=i(Q,v,W),ct===null?Y=Q:ct.sibling=Q,ct=Q);return vt&&zl(x,W),Y}for(Q=a(Q);W<E.length;W++)Qt=N(Q,x,W,E[W],D),Qt!==null&&(t&&Qt.alternate!==null&&Q.delete(Qt.key===null?W:Qt.key),v=i(Qt,v,W),ct===null?Y=Qt:ct.sibling=Qt,ct=Qt);return t&&Q.forEach(function(vl){return e(x,vl)}),vt&&zl(x,W),Y}function F(x,v,E,D){if(E==null)throw Error(s(151));for(var Y=null,ct=null,Q=v,W=v=0,Qt=null,yt=E.next();Q!==null&&!yt.done;W++,yt=E.next()){Q.index>W?(Qt=Q,Q=null):Qt=Q.sibling;var vl=A(x,Q,yt.value,D);if(vl===null){Q===null&&(Q=Qt);break}t&&Q&&vl.alternate===null&&e(x,Q),v=i(vl,v,W),ct===null?Y=vl:ct.sibling=vl,ct=vl,Q=Qt}if(yt.done)return l(x,Q),vt&&zl(x,W),Y;if(Q===null){for(;!yt.done;W++,yt=E.next())yt=M(x,yt.value,D),yt!==null&&(v=i(yt,v,W),ct===null?Y=yt:ct.sibling=yt,ct=yt);return vt&&zl(x,W),Y}for(Q=a(Q);!yt.done;W++,yt=E.next())yt=N(Q,x,W,yt.value,D),yt!==null&&(t&&yt.alternate!==null&&Q.delete(yt.key===null?W:yt.key),v=i(yt,v,W),ct===null?Y=yt:ct.sibling=yt,ct=yt);return t&&Q.forEach(function(vp){return e(x,vp)}),vt&&zl(x,W),Y}function At(x,v,E,D){if(typeof E=="object"&&E!==null&&E.type===L&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case z:t:{for(var Y=E.key;v!==null;){if(v.key===Y){if(Y=E.type,Y===L){if(v.tag===7){l(x,v.sibling),D=n(v,E.props.children),D.return=x,x=D;break t}}else if(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===P&&Ro(Y)===v.type){l(x,v.sibling),D=n(v,E.props),ln(D,E),D.return=x,x=D;break t}l(x,v);break}else e(x,v);v=v.sibling}E.type===L?(D=Al(E.props.children,x.mode,D,E.key),D.return=x,x=D):(D=$n(E.type,E.key,E.props,null,x.mode,D),ln(D,E),D.return=x,x=D)}return r(x);case G:t:{for(Y=E.key;v!==null;){if(v.key===Y)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){l(x,v.sibling),D=n(v,E.children||[]),D.return=x,x=D;break t}else{l(x,v);break}else e(x,v);v=v.sibling}D=Hu(E,x.mode,D),D.return=x,x=D}return r(x);case P:return Y=E._init,E=Y(E._payload),At(x,v,E,D)}if(zt(E))return tt(x,v,E,D);if(j(E)){if(Y=j(E),typeof Y!="function")throw Error(s(150));return E=Y.call(E),F(x,v,E,D)}if(typeof E.then=="function")return At(x,v,di(E),D);if(E.$$typeof===dt)return At(x,v,In(x,E),D);hi(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(l(x,v.sibling),D=n(v,E),D.return=x,x=D):(l(x,v),D=Uu(E,x.mode,D),D.return=x,x=D),r(x)):l(x,v)}return function(x,v,E,D){try{en=0;var Y=At(x,v,E,D);return ra=null,Y}catch(Q){if(Q===Ka||Q===ei)throw Q;var ct=re(29,Q,null,x.mode);return ct.lanes=D,ct.return=x,ct}finally{}}}var oa=_o(!0),Do=_o(!1),Se=U(null),_e=null;function nl(t){var e=t.alternate;C(qt,qt.current&1),C(Se,t),_e===null&&(e===null||ia.current!==null||e.memoizedState!==null)&&(_e=t)}function wo(t){if(t.tag===22){if(C(qt,qt.current),C(Se,t),_e===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(_e=t)}}else il()}function il(){C(qt,qt.current),C(Se,Se.current)}function Ve(t){B(Se),_e===t&&(_e=null),B(qt)}var qt=U(0);function gi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||lc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function hs(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:T({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var gs={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=he(),n=el(a);n.payload=e,l!=null&&(n.callback=l),e=ll(t,n,a),e!==null&&(ge(e,t,a),ka(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=he(),n=el(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=ll(t,n,a),e!==null&&(ge(e,t,a),ka(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=he(),a=el(l);a.tag=2,e!=null&&(a.callback=e),e=ll(t,a,l),e!==null&&(ge(e,t,l),ka(e,t,l))}};function Mo(t,e,l,a,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,r):e.prototype&&e.prototype.isPureReactComponent?!Ba(l,a)||!Ba(n,i):!0}function Uo(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&gs.enqueueReplaceState(e,e.state,null)}function Hl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=T({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var pi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ho(t){pi(t)}function Co(t){console.error(t)}function Lo(t){pi(t)}function mi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function jo(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ps(t,e,l){return l=el(l),l.tag=3,l.payload={element:null},l.callback=function(){mi(t,e)},l}function Bo(t){return t=el(t),t.tag=3,t}function qo(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){jo(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){jo(e,l,a),typeof n!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function vg(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Xa(e,l,n,!0),l=Se.current,l!==null){switch(l.tag){case 13:return _e===null?qs():l.alternate===null&&Ut===0&&(Ut=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Qu?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Gs(t,a,n)),!1;case 22:return l.flags|=65536,a===Qu?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Gs(t,a,n)),!1}throw Error(s(435,l.tag))}return Gs(t,a,n),qs(),!1}if(vt)return e=Se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==ju&&(t=Error(s(422),{cause:a}),Va(ye(t,l)))):(a!==ju&&(e=Error(s(423),{cause:a}),Va(ye(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ye(a,l),n=ps(t.stateNode,a,n),Ju(t,n),Ut!==4&&(Ut=2)),!1;var i=Error(s(520),{cause:a});if(i=ye(i,l),on===null?on=[i]:on.push(i),Ut!==4&&(Ut=2),e===null)return!0;a=ye(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=ps(l.stateNode,a,t),Ju(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fl===null||!fl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Bo(n),qo(n,t,l,a),Ju(l,n),!1}l=l.return}while(l!==null);return!1}var Yo=Error(s(461)),Vt=!1;function Zt(t,e,l,a){e.child=t===null?Do(e,null,l,a):oa(e,t.child,l,a)}function Go(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return wl(e),a=Pu(t,e,l,r,i,n),o=Iu(),t!==null&&!Vt?(ts(t,e,n),Xe(t,e,n)):(vt&&o&&Cu(e),e.flags|=1,Zt(t,e,a,n),e.child)}function Vo(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Mu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Xo(t,e,i,a,n)):(t=$n(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Es(t,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ba,l(r,a)&&t.ref===e.ref)return Xe(t,e,n)}return e.flags|=1,t=Le(i,a),t.ref=e.ref,t.return=e,e.child=t}function Xo(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Ba(i,a)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=a=i,Es(t,n))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,Xe(t,e,n)}return ms(t,e,l,a,n)}function Qo(t,e,l){var a=e.pendingProps,n=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Zo(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ti(e,i!==null?i.cachePool:null),i!==null?Vr(e,i):$u(),wo(e);else return e.lanes=e.childLanes=536870912,Zo(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ti(e,i.cachePool),Vr(e,i),il(),e.memoizedState=null):(t!==null&&ti(e,null),$u(),il());return Zt(t,e,n,l),e.child}function Zo(t,e,l,a){var n=Xu();return n=n===null?null:{parent:Bt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&ti(e,null),$u(),wo(e),t!==null&&Xa(t,e,a,!0),null}function yi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function ms(t,e,l,a,n){return wl(e),l=Pu(t,e,l,a,void 0,n),a=Iu(),t!==null&&!Vt?(ts(t,e,n),Xe(t,e,n)):(vt&&a&&Cu(e),e.flags|=1,Zt(t,e,l,n),e.child)}function Ko(t,e,l,a,n,i){return wl(e),e.updateQueue=null,l=Qr(e,a,l,n),Xr(t),a=Iu(),t!==null&&!Vt?(ts(t,e,i),Xe(t,e,i)):(vt&&a&&Cu(e),e.flags|=1,Zt(t,e,l,i),e.child)}function Jo(t,e,l,a,n){if(wl(e),e.stateNode===null){var i=ta,r=l.contextType;typeof r=="object"&&r!==null&&(i=Ft(r)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gs,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Zu(e),r=l.contextType,i.context=typeof r=="object"&&r!==null?Ft(r):ta,i.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(hs(e,l,r,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&gs.enqueueReplaceState(i,i.state,null),Fa(e,a,i,n),$a(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,p=Hl(l,o);i.props=p;var O=i.context,_=l.contextType;r=ta,typeof _=="object"&&_!==null&&(r=Ft(_));var M=l.getDerivedStateFromProps;_=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||O!==r)&&Uo(e,i,a,r),tl=!1;var A=e.memoizedState;i.state=A,Fa(e,a,i,n),$a(),O=e.memoizedState,o||A!==O||tl?(typeof M=="function"&&(hs(e,l,M,a),O=e.memoizedState),(p=tl||Mo(e,l,p,a,A,O,r))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=O),i.props=a,i.state=O,i.context=r,a=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Ku(t,e),r=e.memoizedProps,_=Hl(l,r),i.props=_,M=e.pendingProps,A=i.context,O=l.contextType,p=ta,typeof O=="object"&&O!==null&&(p=Ft(O)),o=l.getDerivedStateFromProps,(O=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==M||A!==p)&&Uo(e,i,a,p),tl=!1,A=e.memoizedState,i.state=A,Fa(e,a,i,n),$a();var N=e.memoizedState;r!==M||A!==N||tl||t!==null&&t.dependencies!==null&&Pn(t.dependencies)?(typeof o=="function"&&(hs(e,l,o,a),N=e.memoizedState),(_=tl||Mo(e,l,_,a,A,N,p)||t!==null&&t.dependencies!==null&&Pn(t.dependencies))?(O||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,N,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,N,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),i.props=a,i.state=N,i.context=p,a=_):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,yi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=oa(e,t.child,null,n),e.child=oa(e,null,l,n)):Zt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Xe(t,e,n),t}function ko(t,e,l,a){return Ga(),e.flags|=256,Zt(t,e,l,a),e.child}var ys={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bs(t){return{baseLanes:t,cachePool:Hr()}}function vs(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Te),t}function $o(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(n?nl(e):il(),vt){var o=Mt,p;if(p=o){t:{for(p=o,o=Re;p.nodeType!==8;){if(!o){o=null;break t}if(p=Ne(p.nextSibling),p===null){o=null;break t}}o=p}o!==null?(e.memoizedState={dehydrated:o,treeContext:Nl!==null?{id:je,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},p=re(18,null,null,0),p.stateNode=o,p.return=e,e.child=p,It=e,Mt=null,p=!0):p=!1}p||_l(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return lc(o)?e.lanes=32:e.lanes=536870912,null;Ve(e)}return o=a.children,a=a.fallback,n?(il(),n=e.mode,o=bi({mode:"hidden",children:o},n),a=Al(a,n,l,null),o.return=e,a.return=e,o.sibling=a,e.child=o,n=e.child,n.memoizedState=bs(l),n.childLanes=vs(t,r,l),e.memoizedState=ys,a):(nl(e),xs(e,o))}if(p=t.memoizedState,p!==null&&(o=p.dehydrated,o!==null)){if(i)e.flags&256?(nl(e),e.flags&=-257,e=Ss(t,e,l)):e.memoizedState!==null?(il(),e.child=t.child,e.flags|=128,e=null):(il(),n=a.fallback,o=e.mode,a=bi({mode:"visible",children:a.children},o),n=Al(n,o,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,oa(e,t.child,null,l),a=e.child,a.memoizedState=bs(l),a.childLanes=vs(t,r,l),e.memoizedState=ys,e=n);else if(nl(e),lc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var O=r.dgst;r=O,a=Error(s(419)),a.stack="",a.digest=r,Va({value:a,source:null,stack:null}),e=Ss(t,e,l)}else if(Vt||Xa(t,e,l,!1),r=(l&t.childLanes)!==0,Vt||r){if(r=Rt,r!==null&&(a=l&-l,a=(a&42)!==0?1:au(a),a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,Il(t,a),ge(r,t,a),Yo;o.data==="$?"||qs(),e=Ss(t,e,l)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Mt=Ne(o.nextSibling),It=e,vt=!0,Rl=null,Re=!1,t!==null&&(ve[xe++]=je,ve[xe++]=Be,ve[xe++]=Nl,je=t.id,Be=t.overflow,Nl=e),e=xs(e,a.children),e.flags|=4096);return e}return n?(il(),n=a.fallback,o=e.mode,p=t.child,O=p.sibling,a=Le(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,O!==null?n=Le(O,n):(n=Al(n,o,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,o=t.child.memoizedState,o===null?o=bs(l):(p=o.cachePool,p!==null?(O=Bt._currentValue,p=p.parent!==O?{parent:O,pool:O}:p):p=Hr(),o={baseLanes:o.baseLanes|l,cachePool:p}),n.memoizedState=o,n.childLanes=vs(t,r,l),e.memoizedState=ys,a):(nl(e),l=t.child,t=l.sibling,l=Le(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function xs(t,e){return e=bi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function bi(t,e){return t=re(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ss(t,e,l){return oa(e,t.child,null,l),t=xs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fo(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),qu(t.return,e,l)}function Ts(t,e,l,a,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function Wo(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;if(Zt(t,e,a.children,l),a=qt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fo(t,l,e);else if(t.tag===19)Fo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(C(qt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&gi(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Ts(e,!1,n,l,i);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&gi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Ts(e,!0,l,null,i);break;case"together":Ts(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ol|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Xa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=Le(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Le(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Es(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pn(t)))}function xg(t,e,l){switch(e.tag){case 3:_t(e,e.stateNode.containerInfo),Ie(e,Bt,t.memoizedState.cache),Ga();break;case 27:case 5:Pi(e);break;case 4:_t(e,e.stateNode.containerInfo);break;case 10:Ie(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(nl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?$o(t,e,l):(nl(e),t=Xe(t,e,l),t!==null?t.sibling:null);nl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Xa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Wo(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),C(qt,qt.current),a)break;return null;case 22:case 23:return e.lanes=0,Qo(t,e,l);case 24:Ie(e,Bt,t.memoizedState.cache)}return Xe(t,e,l)}function Po(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!Es(t,l)&&(e.flags&128)===0)return Vt=!1,xg(t,e,l);Vt=(t.flags&131072)!==0}else Vt=!1,vt&&(e.flags&1048576)!==0&&zr(e,Wn,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")Mu(a)?(t=Hl(a,t),e.tag=1,e=Jo(null,e,a,t,l)):(e.tag=0,e=ms(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===K){e.tag=11,e=Go(null,e,a,t,l);break t}else if(n===et){e.tag=14,e=Vo(null,e,a,t,l);break t}}throw e=xt(a)||a,Error(s(306,e,""))}}return e;case 0:return ms(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Hl(a,e.pendingProps),Jo(t,e,a,n,l);case 3:t:{if(_t(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Ku(t,e),Fa(e,a,null,l);var r=e.memoizedState;if(a=r.cache,Ie(e,Bt,a),a!==i.cache&&Yu(e,[Bt],l,!0),$a(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=ko(t,e,a,l);break t}else if(a!==n){n=ye(Error(s(424)),e),Va(n),e=ko(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=Ne(t.firstChild),It=e,vt=!0,Rl=null,Re=!0,l=Do(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ga(),a===n){e=Xe(t,e,l);break t}Zt(t,e,a,l)}e=e.child}return e;case 26:return yi(t,e),t===null?(l=ad(e.type,null,e.pendingProps,null))?e.memoizedState=l:vt||(l=e.type,t=e.pendingProps,a=Mi(at.current).createElement(l),a[$t]=e,a[te]=t,Jt(a,l,t),Gt(a),e.stateNode=a):e.memoizedState=ad(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Pi(e),t===null&&vt&&(a=e.stateNode=td(e.type,e.pendingProps,at.current),It=e,Re=!0,n=Mt,gl(e.type)?(ac=n,Mt=Ne(a.firstChild)):Mt=n),Zt(t,e,e.pendingProps.children,l),yi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((n=a=Mt)&&(a=kg(a,e.type,e.pendingProps,Re),a!==null?(e.stateNode=a,It=e,Mt=Ne(a.firstChild),Re=!1,n=!0):n=!1),n||_l(e)),Pi(e),n=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,a=i.children,Is(n,i)?a=null:r!==null&&Is(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=Pu(t,e,dg,null,null,l),vn._currentValue=n),yi(t,e),Zt(t,e,a,l),e.child;case 6:return t===null&&vt&&((t=l=Mt)&&(l=$g(l,e.pendingProps,Re),l!==null?(e.stateNode=l,It=e,Mt=null,t=!0):t=!1),t||_l(e)),null;case 13:return $o(t,e,l);case 4:return _t(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=oa(e,null,a,l):Zt(t,e,a,l),e.child;case 11:return Go(t,e,e.type,e.pendingProps,l);case 7:return Zt(t,e,e.pendingProps,l),e.child;case 8:return Zt(t,e,e.pendingProps.children,l),e.child;case 12:return Zt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ie(e,e.type,a.value),Zt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,wl(e),n=Ft(n),a=a(n),e.flags|=1,Zt(t,e,a,l),e.child;case 14:return Vo(t,e,e.type,e.pendingProps,l);case 15:return Xo(t,e,e.type,e.pendingProps,l);case 19:return Wo(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=bi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=Le(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return Qo(t,e,l);case 24:return wl(e),a=Ft(Bt),t===null?(n=Xu(),n===null&&(n=Rt,i=Gu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Zu(e),Ie(e,Bt,n)):((t.lanes&l)!==0&&(Ku(t,e),Fa(e,null,null,l),$a()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ie(e,Bt,a)):(a=i.cache,Ie(e,Bt,a),a!==n.cache&&Yu(e,[Bt],l,!0))),Zt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Qe(t){t.flags|=4}function Io(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cd(e)){if(e=Se.current,e!==null&&((gt&4194048)===gt?_e!==null:(gt&62914560)!==gt&&(gt&536870912)===0||e!==_e))throw Ja=Qu,Cr;t.flags|=8192}}function vi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Dc():536870912,t.lanes|=e,ga|=e)}function an(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Sg(t,e,l){var a=e.pendingProps;switch(Lu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ye(Bt),$e(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?Qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Dr())),wt(e),null;case 26:return l=e.memoizedState,t===null?(Qe(e),l!==null?(wt(e),Io(e,l)):(wt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Qe(e),wt(e),Io(e,l)):(wt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Qe(e),wt(e),e.flags&=-16777217),null;case 27:Dn(e),l=at.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return wt(e),null}t=$.current,Ya(e)?Rr(e):(t=td(n,a,l),e.stateNode=t,Qe(e))}return wt(e),null;case 5:if(Dn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return wt(e),null}if(t=$.current,Ya(e))Rr(e);else{switch(n=Mi(at.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[$t]=e,t[te]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Jt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Qe(e)}}return wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,Ya(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=It,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[$t]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Jf(t.nodeValue,l)),t||_l(e)}else t=Mi(t).createTextNode(a),t[$t]=e,e.stateNode=t}return wt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ya(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[$t]=e}else Ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),n=!1}else n=Dr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ve(e),e):(Ve(e),null)}if(Ve(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),vi(e,e.updateQueue),wt(e),null;case 4:return $e(),t===null&&ks(e.stateNode.containerInfo),wt(e),null;case 10:return Ye(e.type),wt(e),null;case 19:if(B(qt),n=e.memoizedState,n===null)return wt(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)an(n,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=gi(t),i!==null){for(e.flags|=128,an(n,!1),t=i.updateQueue,e.updateQueue=t,vi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Nr(l,t),l=l.sibling;return C(qt,qt.current&1|2),e.child}t=t.sibling}n.tail!==null&&ze()>Ti&&(e.flags|=128,a=!0,an(n,!1),e.lanes=4194304)}else{if(!a)if(t=gi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,vi(e,t),an(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!vt)return wt(e),null}else 2*ze()-n.renderingStartTime>Ti&&l!==536870912&&(e.flags|=128,a=!0,an(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ze(),e.sibling=null,t=qt.current,C(qt,a?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return Ve(e),Fu(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),l=e.updateQueue,l!==null&&vi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&B(Ml),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(Bt),wt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Tg(t,e){switch(Lu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ye(Bt),$e(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Dn(e),null;case 13:if(Ve(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(qt),null;case 4:return $e(),null;case 10:return Ye(e.type),null;case 22:case 23:return Ve(e),Fu(),t!==null&&B(Ml),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ye(Bt),null;case 25:return null;default:return null}}function tf(t,e){switch(Lu(e),e.tag){case 3:Ye(Bt),$e();break;case 26:case 27:case 5:Dn(e);break;case 4:$e();break;case 13:Ve(e);break;case 19:B(qt);break;case 10:Ye(e.type);break;case 22:case 23:Ve(e),Fu(),t!==null&&B(Ml);break;case 24:Ye(Bt)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(o){Nt(e,e.return,o)}}function ul(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=e;var p=l,O=o;try{O()}catch(_){Nt(n,p,_)}}}a=a.next}while(a!==i)}}catch(_){Nt(e,e.return,_)}}function ef(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Gr(e,l)}catch(a){Nt(t,t.return,a)}}}function lf(t,e,l){l.props=Hl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Nt(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Nt(t,e,n)}}function De(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Nt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Nt(t,e,n)}else l.current=null}function af(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Nt(t,t.return,n)}}function Os(t,e,l){try{var a=t.stateNode;Xg(a,t.type,l,e),a[te]=e}catch(n){Nt(t,t.return,n)}}function nf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gl(t.type)||t.tag===4}function As(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ns(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=wi));else if(a!==4&&(a===27&&gl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ns(t,e,l),t=t.sibling;t!==null;)Ns(t,e,l),t=t.sibling}function xi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&gl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(xi(t,e,l),t=t.sibling;t!==null;)xi(t,e,l),t=t.sibling}function uf(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jt(e,a,l),e[$t]=t,e[te]=l}catch(i){Nt(t,t.return,i)}}var Ze=!1,Ct=!1,zs=!1,sf=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function Eg(t,e){if(t=t.containerInfo,Ws=Bi,t=mr(t),Au(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var r=0,o=-1,p=-1,O=0,_=0,M=t,A=null;e:for(;;){for(var N;M!==l||n!==0&&M.nodeType!==3||(o=r+n),M!==i||a!==0&&M.nodeType!==3||(p=r+a),M.nodeType===3&&(r+=M.nodeValue.length),(N=M.firstChild)!==null;)A=M,M=N;for(;;){if(M===t)break e;if(A===l&&++O===n&&(o=r),A===i&&++_===a&&(p=r),(N=M.nextSibling)!==null)break;M=A,A=M.parentNode}M=N}l=o===-1||p===-1?null:{start:o,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ps={focusedElem:t,selectionRange:l},Bi=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var tt=Hl(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(tt,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(F){Nt(l,l.return,F)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)ec(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ec(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function cf(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:sl(t,l),a&4&&nn(5,l);break;case 1:if(sl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){Nt(l,l.return,r)}else{var n=Hl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Nt(l,l.return,r)}}a&64&&ef(l),a&512&&un(l,l.return);break;case 3:if(sl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Gr(t,e)}catch(r){Nt(l,l.return,r)}}break;case 27:e===null&&a&4&&uf(l);case 26:case 5:sl(t,l),e===null&&a&4&&af(l),a&512&&un(l,l.return);break;case 12:sl(t,l);break;case 13:sl(t,l),a&4&&ff(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Mg.bind(null,l),Fg(t,l))));break;case 22:if(a=l.memoizedState!==null||Ze,!a){e=e!==null&&e.memoizedState!==null||Ct,n=Ze;var i=Ct;Ze=a,(Ct=e)&&!i?cl(t,l,(l.subtreeFlags&8772)!==0):sl(t,l),Ze=n,Ct=i}break;case 30:break;default:sl(t,l)}}function rf(t){var e=t.alternate;e!==null&&(t.alternate=null,rf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&uu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,ae=!1;function Ke(t,e,l){for(l=l.child;l!==null;)of(t,e,l),l=l.sibling}function of(t,e,l){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Na,l)}catch{}switch(l.tag){case 26:Ct||De(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ct||De(l,e);var a=Dt,n=ae;gl(l.type)&&(Dt=l.stateNode,ae=!1),Ke(t,e,l),pn(l.stateNode),Dt=a,ae=n;break;case 5:Ct||De(l,e);case 6:if(a=Dt,n=ae,Dt=null,Ke(t,e,l),Dt=a,ae=n,Dt!==null)if(ae)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(l.stateNode)}catch(i){Nt(l,e,i)}else try{Dt.removeChild(l.stateNode)}catch(i){Nt(l,e,i)}break;case 18:Dt!==null&&(ae?(t=Dt,Pf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),En(t)):Pf(Dt,l.stateNode));break;case 4:a=Dt,n=ae,Dt=l.stateNode.containerInfo,ae=!0,Ke(t,e,l),Dt=a,ae=n;break;case 0:case 11:case 14:case 15:Ct||ul(2,l,e),Ct||ul(4,l,e),Ke(t,e,l);break;case 1:Ct||(De(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&lf(l,e,a)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:Ct=(a=Ct)||l.memoizedState!==null,Ke(t,e,l),Ct=a;break;default:Ke(t,e,l)}}function ff(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{En(t)}catch(l){Nt(e,e.return,l)}}function Og(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new sf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new sf),e;default:throw Error(s(435,t.tag))}}function Rs(t,e){var l=Og(t);e.forEach(function(a){var n=Ug.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function oe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(gl(o.type)){Dt=o.stateNode,ae=!1;break t}break;case 5:Dt=o.stateNode,ae=!1;break t;case 3:case 4:Dt=o.stateNode.containerInfo,ae=!0;break t}o=o.return}if(Dt===null)throw Error(s(160));of(i,r,n),Dt=null,ae=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)df(e,t),e=e.sibling}var Ae=null;function df(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oe(e,t),fe(t),a&4&&(ul(3,t,t.return),nn(3,t),ul(5,t,t.return));break;case 1:oe(e,t),fe(t),a&512&&(Ct||l===null||De(l,l.return)),a&64&&Ze&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ae;if(oe(e,t),fe(t),a&512&&(Ct||l===null||De(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[$t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Jt(i,a,l),i[$t]=t,Gt(i),a=i;break t;case"link":var r=ud("link","href",n).get(a+(l.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(o,1);break e}}i=n.createElement(a),Jt(i,a,l),n.head.appendChild(i);break;case"meta":if(r=ud("meta","content",n).get(a+(l.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(o,1);break e}}i=n.createElement(a),Jt(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[$t]=t,Gt(i),a=i}t.stateNode=a}else sd(n,t.type,t.stateNode);else t.stateNode=id(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?sd(n,t.type,t.stateNode):id(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Os(t,t.memoizedProps,l.memoizedProps)}break;case 27:oe(e,t),fe(t),a&512&&(Ct||l===null||De(l,l.return)),l!==null&&a&4&&Os(t,t.memoizedProps,l.memoizedProps);break;case 5:if(oe(e,t),fe(t),a&512&&(Ct||l===null||De(l,l.return)),t.flags&32){n=t.stateNode;try{Kl(n,"")}catch(N){Nt(t,t.return,N)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Os(t,n,l!==null?l.memoizedProps:n)),a&1024&&(zs=!0);break;case 6:if(oe(e,t),fe(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(N){Nt(t,t.return,N)}}break;case 3:if(Ci=null,n=Ae,Ae=Ui(e.containerInfo),oe(e,t),Ae=n,fe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{En(e.containerInfo)}catch(N){Nt(t,t.return,N)}zs&&(zs=!1,hf(t));break;case 4:a=Ae,Ae=Ui(t.stateNode.containerInfo),oe(e,t),fe(t),Ae=a;break;case 12:oe(e,t),fe(t);break;case 13:oe(e,t),fe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Hs=ze()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Rs(t,a)));break;case 22:n=t.memoizedState!==null;var p=l!==null&&l.memoizedState!==null,O=Ze,_=Ct;if(Ze=O||n,Ct=_||p,oe(e,t),Ct=_,Ze=O,fe(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||p||Ze||Ct||Cl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){p=l=e;try{if(i=p.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=p.stateNode;var M=p.memoizedProps.style,A=M!=null&&M.hasOwnProperty("display")?M.display:null;o.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(N){Nt(p,p.return,N)}}}else if(e.tag===6){if(l===null){p=e;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(N){Nt(p,p.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Rs(t,l))));break;case 19:oe(e,t),fe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Rs(t,a)));break;case 30:break;case 21:break;default:oe(e,t),fe(t)}}function fe(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(nf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=As(t);xi(t,i,n);break;case 5:var r=l.stateNode;l.flags&32&&(Kl(r,""),l.flags&=-33);var o=As(t);xi(t,o,r);break;case 3:case 4:var p=l.stateNode.containerInfo,O=As(t);Ns(t,O,p);break;default:throw Error(s(161))}}catch(_){Nt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;hf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function sl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)cf(t,e.alternate,e),e=e.sibling}function Cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ul(4,e,e.return),Cl(e);break;case 1:De(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&lf(e,e.return,l),Cl(e);break;case 27:pn(e.stateNode);case 26:case 5:De(e,e.return),Cl(e);break;case 22:e.memoizedState===null&&Cl(e);break;case 30:Cl(e);break;default:Cl(e)}t=t.sibling}}function cl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:cl(n,i,l),nn(4,i);break;case 1:if(cl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(O){Nt(a,a.return,O)}if(a=i,n=a.updateQueue,n!==null){var o=a.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)Yr(p[n],o)}catch(O){Nt(a,a.return,O)}}l&&r&64&&ef(i),un(i,i.return);break;case 27:uf(i);case 26:case 5:cl(n,i,l),l&&a===null&&r&4&&af(i),un(i,i.return);break;case 12:cl(n,i,l);break;case 13:cl(n,i,l),l&&r&4&&ff(n,i);break;case 22:i.memoizedState===null&&cl(n,i,l),un(i,i.return);break;case 30:break;default:cl(n,i,l)}e=e.sibling}}function _s(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Qa(l))}function Ds(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qa(t))}function we(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gf(t,e,l,a),e=e.sibling}function gf(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:we(t,e,l,a),n&2048&&nn(9,e);break;case 1:we(t,e,l,a);break;case 3:we(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qa(t)));break;case 12:if(n&2048){we(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Nt(e,e.return,p)}}else we(t,e,l,a);break;case 13:we(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?we(t,e,l,a):sn(t,e):i._visibility&2?we(t,e,l,a):(i._visibility|=2,fa(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&_s(r,e);break;case 24:we(t,e,l,a),n&2048&&Ds(e.alternate,e);break;default:we(t,e,l,a)}}function fa(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,r=e,o=l,p=a,O=r.flags;switch(r.tag){case 0:case 11:case 15:fa(i,r,o,p,n),nn(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?fa(i,r,o,p,n):sn(i,r):(_._visibility|=2,fa(i,r,o,p,n)),n&&O&2048&&_s(r.alternate,r);break;case 24:fa(i,r,o,p,n),n&&O&2048&&Ds(r.alternate,r);break;default:fa(i,r,o,p,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:sn(l,a),n&2048&&_s(a.alternate,a);break;case 24:sn(l,a),n&2048&&Ds(a.alternate,a);break;default:sn(l,a)}e=e.sibling}}var cn=8192;function da(t){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)pf(t),t=t.sibling}function pf(t){switch(t.tag){case 26:da(t),t.flags&cn&&t.memoizedState!==null&&rp(Ae,t.memoizedState,t.memoizedProps);break;case 5:da(t);break;case 3:case 4:var e=Ae;Ae=Ui(t.stateNode.containerInfo),da(t),Ae=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,da(t),cn=e):da(t));break;default:da(t)}}function mf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Xt=a,bf(a,t)}mf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yf(t),t=t.sibling}function yf(t){switch(t.tag){case 0:case 11:case 15:rn(t),t.flags&2048&&ul(9,t,t.return);break;case 3:rn(t);break;case 12:rn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Si(t)):rn(t);break;default:rn(t)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Xt=a,bf(a,t)}mf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ul(8,e,e.return),Si(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Si(e));break;default:Si(e)}t=t.sibling}}function bf(t,e){for(;Xt!==null;){var l=Xt;switch(l.tag){case 0:case 11:case 15:ul(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Xt=a;else t:for(l=t;Xt!==null;){a=Xt;var n=a.sibling,i=a.return;if(rf(a),a===l){Xt=null;break t}if(n!==null){n.return=i,Xt=n;break t}Xt=i}}}var Ag={getCacheForType:function(t){var e=Ft(Bt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Ng=typeof WeakMap=="function"?WeakMap:Map,St=0,Rt=null,rt=null,gt=0,Tt=0,de=null,rl=!1,ha=!1,ws=!1,Je=0,Ut=0,ol=0,Ll=0,Ms=0,Te=0,ga=0,on=null,ne=null,Us=!1,Hs=0,Ti=1/0,Ei=null,fl=null,Kt=0,dl=null,pa=null,ma=0,Cs=0,Ls=null,vf=null,fn=0,js=null;function he(){if((St&2)!==0&&gt!==0)return gt&-gt;if(R.T!==null){var t=aa;return t!==0?t:Qs()}return Uc()}function xf(){Te===0&&(Te=(gt&536870912)===0||vt?_c():536870912);var t=Se.current;return t!==null&&(t.flags|=32),Te}function ge(t,e,l){(t===Rt&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(ya(t,0),hl(t,gt,Te,!1)),Ra(t,l),((St&2)===0||t!==Rt)&&(t===Rt&&((St&2)===0&&(Ll|=l),Ut===4&&hl(t,gt,Te,!1)),Me(t))}function Sf(t,e,l){if((St&6)!==0)throw Error(s(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||za(t,e),n=a?_g(t,e):Ys(t,e,!0),i=a;do{if(n===0){ha&&!a&&hl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!zg(l)){n=Ys(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var o=t;n=on;var p=o.current.memoizedState.isDehydrated;if(p&&(ya(o,r).flags|=256),r=Ys(o,r,!1),r!==2){if(ws&&!p){o.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break t}i=ne,ne=n,i!==null&&(ne===null?ne=i:ne.push.apply(ne,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){ya(t,0),hl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:hl(a,e,Te,!rl);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(n=Hs+300-ze(),10<n)){if(hl(a,e,Te,!rl),Hn(a,0,!0)!==0)break t;a.timeoutHandle=Ff(Tf.bind(null,a,l,ne,Ei,Us,e,Te,Ll,ga,rl,i,2,-0,0),n);break t}Tf(a,l,ne,Ei,Us,e,Te,Ll,ga,rl,i,0,-0,0)}}break}while(!0);Me(t)}function Tf(t,e,l,a,n,i,r,o,p,O,_,M,A,N){if(t.timeoutHandle=-1,M=e.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(bn={stylesheets:null,count:0,unsuspend:cp},pf(e),M=op(),M!==null)){t.cancelPendingCommit=M(_f.bind(null,t,e,i,l,a,n,r,o,p,_,1,A,N)),hl(t,i,r,!O);return}_f(t,e,i,l,a,n,r,o,p)}function zg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ce(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hl(t,e,l,a){e&=~Ms,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-se(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&wc(t,l,e)}function Oi(){return(St&6)===0?(dn(0),!1):!0}function Bs(){if(rt!==null){if(Tt===0)var t=rt.return;else t=rt,qe=Dl=null,es(t),ra=null,en=0,t=rt;for(;t!==null;)tf(t.alternate,t),t=t.return;rt=null}}function ya(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Zg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Bs(),Rt=t,rt=l=Le(t.current,null),gt=e,Tt=0,de=null,rl=!1,ha=za(t,e),ws=!1,ga=Te=Ms=Ll=ol=Ut=0,ne=on=null,Us=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-se(a),i=1<<n;e|=t[n],a&=~i}return Je=e,Kn(),l}function Ef(t,e){st=null,R.H=fi,e===Ka||e===ei?(e=Br(),Tt=3):e===Cr?(e=Br(),Tt=4):Tt=e===Yo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,de=e,rt===null&&(Ut=1,mi(t,ye(e,t.current)))}function Of(){var t=R.H;return R.H=fi,t===null?fi:t}function Af(){var t=R.A;return R.A=Ag,t}function qs(){Ut=4,rl||(gt&4194048)!==gt&&Se.current!==null||(ha=!0),(ol&134217727)===0&&(Ll&134217727)===0||Rt===null||hl(Rt,gt,Te,!1)}function Ys(t,e,l){var a=St;St|=2;var n=Of(),i=Af();(Rt!==t||gt!==e)&&(Ei=null,ya(t,e)),e=!1;var r=Ut;t:do try{if(Tt!==0&&rt!==null){var o=rt,p=de;switch(Tt){case 8:Bs(),r=6;break t;case 3:case 2:case 9:case 6:Se.current===null&&(e=!0);var O=Tt;if(Tt=0,de=null,ba(t,o,p,O),l&&ha){r=0;break t}break;default:O=Tt,Tt=0,de=null,ba(t,o,p,O)}}Rg(),r=Ut;break}catch(_){Ef(t,_)}while(!0);return e&&t.shellSuspendCounter++,qe=Dl=null,St=a,R.H=n,R.A=i,rt===null&&(Rt=null,gt=0,Kn()),r}function Rg(){for(;rt!==null;)Nf(rt)}function _g(t,e){var l=St;St|=2;var a=Of(),n=Af();Rt!==t||gt!==e?(Ei=null,Ti=ze()+500,ya(t,e)):ha=za(t,e);t:do try{if(Tt!==0&&rt!==null){e=rt;var i=de;e:switch(Tt){case 1:Tt=0,de=null,ba(t,e,i,1);break;case 2:case 9:if(Lr(i)){Tt=0,de=null,zf(e);break}e=function(){Tt!==2&&Tt!==9||Rt!==t||(Tt=7),Me(t)},i.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Lr(i)?(Tt=0,de=null,zf(e)):(Tt=0,de=null,ba(t,e,i,7));break;case 5:var r=null;switch(rt.tag){case 26:r=rt.memoizedState;case 5:case 27:var o=rt;if(!r||cd(r)){Tt=0,de=null;var p=o.sibling;if(p!==null)rt=p;else{var O=o.return;O!==null?(rt=O,Ai(O)):rt=null}break e}}Tt=0,de=null,ba(t,e,i,5);break;case 6:Tt=0,de=null,ba(t,e,i,6);break;case 8:Bs(),Ut=6;break t;default:throw Error(s(462))}}Dg();break}catch(_){Ef(t,_)}while(!0);return qe=Dl=null,R.H=a,R.A=n,St=l,rt!==null?0:(Rt=null,gt=0,Kn(),Ut)}function Dg(){for(;rt!==null&&!Pd();)Nf(rt)}function Nf(t){var e=Po(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Ai(t):rt=e}function zf(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ko(l,e,e.pendingProps,e.type,void 0,gt);break;case 11:e=Ko(l,e,e.pendingProps,e.type.render,e.ref,gt);break;case 5:es(e);default:tf(l,e),e=rt=Nr(e,Je),e=Po(l,e,Je)}t.memoizedProps=t.pendingProps,e===null?Ai(t):rt=e}function ba(t,e,l,a){qe=Dl=null,es(e),ra=null,en=0;var n=e.return;try{if(vg(t,n,e,l,gt)){Ut=1,mi(t,ye(l,t.current)),rt=null;return}}catch(i){if(n!==null)throw rt=n,i;Ut=1,mi(t,ye(l,t.current)),rt=null;return}e.flags&32768?(vt||a===1?t=!0:ha||(gt&536870912)!==0?t=!1:(rl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Se.current,a!==null&&a.tag===13&&(a.flags|=16384))),Rf(e,t)):Ai(e)}function Ai(t){var e=t;do{if((e.flags&32768)!==0){Rf(e,rl);return}t=e.return;var l=Sg(e.alternate,e,Je);if(l!==null){rt=l;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Rf(t,e){do{var l=Tg(t.alternate,t);if(l!==null){l.flags&=32767,rt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){rt=t;return}rt=t=l}while(t!==null);Ut=6,rt=null}function _f(t,e,l,a,n,i,r,o,p){t.cancelPendingCommit=null;do Ni();while(Kt!==0);if((St&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(i=e.lanes|e.childLanes,i|=Du,ch(t,l,i,r,o,p),t===Rt&&(rt=Rt=null,gt=0),pa=e,dl=t,ma=l,Cs=i,Ls=n,vf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hg(wn,function(){return Hf(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,n=H.p,H.p=2,r=St,St|=4;try{Eg(t,e,l)}finally{St=r,H.p=n,R.T=a}}Kt=1,Df(),wf(),Mf()}}function Df(){if(Kt===1){Kt=0;var t=dl,e=pa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null;var a=H.p;H.p=2;var n=St;St|=4;try{df(e,t);var i=Ps,r=mr(t.containerInfo),o=i.focusedElem,p=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&pr(o.ownerDocument.documentElement,o)){if(p!==null&&Au(o)){var O=p.start,_=p.end;if(_===void 0&&(_=O),"selectionStart"in o)o.selectionStart=O,o.selectionEnd=Math.min(_,o.value.length);else{var M=o.ownerDocument||document,A=M&&M.defaultView||window;if(A.getSelection){var N=A.getSelection(),tt=o.textContent.length,F=Math.min(p.start,tt),At=p.end===void 0?F:Math.min(p.end,tt);!N.extend&&F>At&&(r=At,At=F,F=r);var x=gr(o,F),v=gr(o,At);if(x&&v&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var E=M.createRange();E.setStart(x.node,x.offset),N.removeAllRanges(),F>At?(N.addRange(E),N.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),N.addRange(E))}}}}for(M=[],N=o;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<M.length;o++){var D=M[o];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Bi=!!Ws,Ps=Ws=null}finally{St=n,H.p=a,R.T=l}}t.current=e,Kt=2}}function wf(){if(Kt===2){Kt=0;var t=dl,e=pa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=R.T,R.T=null;var a=H.p;H.p=2;var n=St;St|=4;try{cf(t,e.alternate,e)}finally{St=n,H.p=a,R.T=l}}Kt=3}}function Mf(){if(Kt===4||Kt===3){Kt=0,Id();var t=dl,e=pa,l=ma,a=vf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kt=5:(Kt=0,pa=dl=null,Uf(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(fl=null),nu(l),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=t.onRecoverableError,r=0;r<a.length;r++){var o=a[r];i(o.value,{componentStack:o.stack})}}finally{R.T=e,H.p=n}}(ma&3)!==0&&Ni(),Me(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===js?fn++:(fn=0,js=t):fn=0,dn(0)}}function Uf(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Qa(e)))}function Ni(t){return Df(),wf(),Mf(),Hf()}function Hf(){if(Kt!==5)return!1;var t=dl,e=Cs;Cs=0;var l=nu(ma),a=R.T,n=H.p;try{H.p=32>l?32:l,R.T=null,l=Ls,Ls=null;var i=dl,r=ma;if(Kt=0,pa=dl=null,ma=0,(St&6)!==0)throw Error(s(331));var o=St;if(St|=4,yf(i.current),gf(i,i.current,r,l),St=o,dn(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Na,i)}catch{}return!0}finally{H.p=n,R.T=a,Uf(t,e)}}function Cf(t,e,l){e=ye(l,e),e=ps(t.stateNode,e,2),t=ll(t,e,2),t!==null&&(Ra(t,2),Me(t))}function Nt(t,e,l){if(t.tag===3)Cf(t,t,l);else for(;e!==null;){if(e.tag===3){Cf(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fl===null||!fl.has(a))){t=ye(l,t),l=Bo(2),a=ll(e,l,2),a!==null&&(qo(l,a,e,t),Ra(a,2),Me(a));break}}e=e.return}}function Gs(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ng;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(ws=!0,n.add(l),t=wg.bind(null,t,e,l),e.then(t,t))}function wg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Rt===t&&(gt&l)===l&&(Ut===4||Ut===3&&(gt&62914560)===gt&&300>ze()-Hs?(St&2)===0&&ya(t,0):Ms|=l,ga===gt&&(ga=0)),Me(t)}function Lf(t,e){e===0&&(e=Dc()),t=Il(t,e),t!==null&&(Ra(t,e),Me(t))}function Mg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Lf(t,l)}function Ug(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Lf(t,l)}function Hg(t,e){return tu(t,e)}var zi=null,va=null,Vs=!1,Ri=!1,Xs=!1,jl=0;function Me(t){t!==va&&t.next===null&&(va===null?zi=va=t:va=va.next=t),Ri=!0,Vs||(Vs=!0,Lg())}function dn(t,e){if(!Xs&&Ri){Xs=!0;do for(var l=!1,a=zi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-se(42|t)+1)-1,i&=n&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Yf(a,i))}else i=gt,i=Hn(a,a===Rt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||za(a,i)||(l=!0,Yf(a,i));a=a.next}while(l);Xs=!1}}function Cg(){jf()}function jf(){Ri=Vs=!1;var t=0;jl!==0&&(Qg()&&(t=jl),jl=0);for(var e=ze(),l=null,a=zi;a!==null;){var n=a.next,i=Bf(a,e);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(va=l)):(l=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=n}dn(t)}function Bf(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-se(i),o=1<<r,p=n[r];p===-1?((o&l)===0||(o&a)!==0)&&(n[r]=sh(o,e)):p<=e&&(t.expiredLanes|=o),i&=~o}if(e=Rt,l=gt,l=Hn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&eu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||za(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&eu(a),nu(l)){case 2:case 8:l=zc;break;case 32:l=wn;break;case 268435456:l=Rc;break;default:l=wn}return a=qf.bind(null,t),l=tu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&eu(a),t.callbackPriority=2,t.callbackNode=null,2}function qf(t,e){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ni()&&t.callbackNode!==l)return null;var a=gt;return a=Hn(t,t===Rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Sf(t,a,e),Bf(t,ze()),t.callbackNode!=null&&t.callbackNode===l?qf.bind(null,t):null)}function Yf(t,e){if(Ni())return null;Sf(t,e,!0)}function Lg(){Kg(function(){(St&6)!==0?tu(Nc,Cg):jf()})}function Qs(){return jl===0&&(jl=_c()),jl}function Gf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qn(""+t)}function Vf(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function jg(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Gf((n[te]||null).action),r=a.submitter;r&&(e=(e=r[te]||null)?Gf(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var o=new Xn("action","action",null,a,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(jl!==0){var p=r?Vf(n,r):new FormData(n);os(l,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(o.preventDefault(),p=r?Vf(n,r):new FormData(n),os(l,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var Zs=0;Zs<_u.length;Zs++){var Ks=_u[Zs],Bg=Ks.toLowerCase(),qg=Ks[0].toUpperCase()+Ks.slice(1);Oe(Bg,"on"+qg)}Oe(vr,"onAnimationEnd"),Oe(xr,"onAnimationIteration"),Oe(Sr,"onAnimationStart"),Oe("dblclick","onDoubleClick"),Oe("focusin","onFocus"),Oe("focusout","onBlur"),Oe(lg,"onTransitionRun"),Oe(ag,"onTransitionStart"),Oe(ng,"onTransitionCancel"),Oe(Tr,"onTransitionEnd"),Xl("onMouseEnter",["mouseout","mouseover"]),Xl("onMouseLeave",["mouseout","mouseover"]),Xl("onPointerEnter",["pointerout","pointerover"]),Xl("onPointerLeave",["pointerout","pointerover"]),Sl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function Xf(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var r=a.length-1;0<=r;r--){var o=a[r],p=o.instance,O=o.currentTarget;if(o=o.listener,p!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=O;try{i(n)}catch(_){pi(_)}n.currentTarget=null,i=p}else for(r=0;r<a.length;r++){if(o=a[r],p=o.instance,O=o.currentTarget,o=o.listener,p!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=O;try{i(n)}catch(_){pi(_)}n.currentTarget=null,i=p}}}}function ot(t,e){var l=e[iu];l===void 0&&(l=e[iu]=new Set);var a=t+"__bubble";l.has(a)||(Qf(e,t,2,!1),l.add(a))}function Js(t,e,l){var a=0;e&&(a|=4),Qf(l,t,a,e)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ks(t){if(!t[_i]){t[_i]=!0,Cc.forEach(function(l){l!=="selectionchange"&&(Yg.has(l)||Js(l,!1,t),Js(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_i]||(e[_i]=!0,Js("selectionchange",!1,e))}}function Qf(t,e,l,a){switch(gd(e)){case 2:var n=hp;break;case 8:n=gp;break;default:n=cc}l=n.bind(null,e,l,t),n=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function $s(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=a.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Yl(o),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){a=i=r;continue t}o=o.parentNode}}a=a.return}$c(function(){var O=i,_=gu(l),M=[];t:{var A=Er.get(t);if(A!==void 0){var N=Xn,tt=t;switch(t){case"keypress":if(Gn(l)===0)break t;case"keydown":case"keyup":N=Hh;break;case"focusin":tt="focus",N=xu;break;case"focusout":tt="blur",N=xu;break;case"beforeblur":case"afterblur":N=xu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=jh;break;case vr:case xr:case Sr:N=Ah;break;case Tr:N=qh;break;case"scroll":case"scrollend":N=xh;break;case"wheel":N=Gh;break;case"copy":case"cut":case"paste":N=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=tr;break;case"toggle":case"beforetoggle":N=Xh}var F=(e&4)!==0,At=!F&&(t==="scroll"||t==="scrollend"),x=F?A!==null?A+"Capture":null:A;F=[];for(var v=O,E;v!==null;){var D=v;if(E=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||E===null||x===null||(D=wa(v,x),D!=null&&F.push(gn(v,D,E))),At)break;v=v.return}0<F.length&&(A=new N(A,tt,null,l,_),M.push({event:A,listeners:F}))}}if((e&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",A&&l!==hu&&(tt=l.relatedTarget||l.fromElement)&&(Yl(tt)||tt[ql]))break t;if((N||A)&&(A=_.window===_?_:(A=_.ownerDocument)?A.defaultView||A.parentWindow:window,N?(tt=l.relatedTarget||l.toElement,N=O,tt=tt?Yl(tt):null,tt!==null&&(At=h(tt),F=tt.tag,tt!==At||F!==5&&F!==27&&F!==6)&&(tt=null)):(N=null,tt=O),N!==tt)){if(F=Pc,D="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(F=tr,D="onPointerLeave",x="onPointerEnter",v="pointer"),At=N==null?A:Da(N),E=tt==null?A:Da(tt),A=new F(D,v+"leave",N,l,_),A.target=At,A.relatedTarget=E,D=null,Yl(_)===O&&(F=new F(x,v+"enter",tt,l,_),F.target=E,F.relatedTarget=At,D=F),At=D,N&&tt)e:{for(F=N,x=tt,v=0,E=F;E;E=xa(E))v++;for(E=0,D=x;D;D=xa(D))E++;for(;0<v-E;)F=xa(F),v--;for(;0<E-v;)x=xa(x),E--;for(;v--;){if(F===x||x!==null&&F===x.alternate)break e;F=xa(F),x=xa(x)}F=null}else F=null;N!==null&&Zf(M,A,N,F,!1),tt!==null&&At!==null&&Zf(M,At,tt,F,!0)}}t:{if(A=O?Da(O):window,N=A.nodeName&&A.nodeName.toLowerCase(),N==="select"||N==="input"&&A.type==="file")var Y=cr;else if(ur(A))if(rr)Y=Ih;else{Y=Wh;var ct=Fh}else N=A.nodeName,!N||N.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?O&&du(O.elementType)&&(Y=cr):Y=Ph;if(Y&&(Y=Y(t,O))){sr(M,Y,l,_);break t}ct&&ct(t,A,O),t==="focusout"&&O&&A.type==="number"&&O.memoizedProps.value!=null&&fu(A,"number",A.value)}switch(ct=O?Da(O):window,t){case"focusin":(ur(ct)||ct.contentEditable==="true")&&(Fl=ct,Nu=O,qa=null);break;case"focusout":qa=Nu=Fl=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,yr(M,l,_);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":yr(M,l,_)}var Q;if(Tu)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else $l?nr(t,l)&&(W="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(W="onCompositionStart");W&&(er&&l.locale!=="ko"&&($l||W!=="onCompositionStart"?W==="onCompositionEnd"&&$l&&(Q=Fc()):(Pe=_,yu="value"in Pe?Pe.value:Pe.textContent,$l=!0)),ct=Di(O,W),0<ct.length&&(W=new Ic(W,t,null,l,_),M.push({event:W,listeners:ct}),Q?W.data=Q:(Q=ir(l),Q!==null&&(W.data=Q)))),(Q=Zh?Kh(t,l):Jh(t,l))&&(W=Di(O,"onBeforeInput"),0<W.length&&(ct=new Ic("onBeforeInput","beforeinput",null,l,_),M.push({event:ct,listeners:W}),ct.data=Q)),jg(M,t,O,l,_)}Xf(M,e)})}function gn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Di(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=wa(t,l),n!=null&&a.unshift(gn(t,n,i)),n=wa(t,e),n!=null&&a.push(gn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function xa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zf(t,e,l,a,n){for(var i=e._reactName,r=[];l!==null&&l!==a;){var o=l,p=o.alternate,O=o.stateNode;if(o=o.tag,p!==null&&p===a)break;o!==5&&o!==26&&o!==27||O===null||(p=O,n?(O=wa(l,i),O!=null&&r.unshift(gn(l,O,p))):n||(O=wa(l,i),O!=null&&r.push(gn(l,O,p)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var Gg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Kf(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(Vg,"")}function Jf(t,e){return e=Kf(e),Kf(t)===e}function wi(){}function Ot(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Kl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Kl(t,""+a);break;case"className":Ln(t,"class",a);break;case"tabIndex":Ln(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(t,l,a);break;case"style":Jc(t,a,i);break;case"data":if(e!=="object"){Ln(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Ot(t,e,"name",n.name,n,null),Ot(t,e,"formEncType",n.formEncType,n,null),Ot(t,e,"formMethod",n.formMethod,n,null),Ot(t,e,"formTarget",n.formTarget,n,null)):(Ot(t,e,"encType",n.encType,n,null),Ot(t,e,"method",n.method,n,null),Ot(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=wi);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=qn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ot("beforetoggle",t),ot("toggle",t),Cn(t,"popover",a);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=bh.get(l)||l,Cn(t,l,a))}}function Fs(t,e,l,a,n,i){switch(l){case"style":Jc(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Kl(t,a):(typeof a=="number"||typeof a=="bigint")&&Kl(t,""+a);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"onClick":a!=null&&(t.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[te]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Cn(t,l,a)}}}function Jt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ot(t,e,i,r,l,null)}}n&&Ot(t,e,"srcSet",l.srcSet,l,null),a&&Ot(t,e,"src",l.src,l,null);return;case"input":ot("invalid",t);var o=i=r=n=null,p=null,O=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":n=_;break;case"type":r=_;break;case"checked":p=_;break;case"defaultChecked":O=_;break;case"value":i=_;break;case"defaultValue":o=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:Ot(t,e,a,_,l,null)}}Xc(t,i,o,p,O,r,n,!1),jn(t);return;case"select":ot("invalid",t),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:Ot(t,e,n,o,l,null)}e=i,l=r,t.multiple=!!a,e!=null?Zl(t,!!a,e,!1):l!=null&&Zl(t,!!a,l,!0);return;case"textarea":ot("invalid",t),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(o=l[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:Ot(t,e,r,o,l,null)}Zc(t,a,n,i),jn(t);return;case"option":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ot(t,e,p,a,l,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(a=0;a<hn.length;a++)ot(hn[a],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in l)if(l.hasOwnProperty(O)&&(a=l[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ot(t,e,O,a,l,null)}return;default:if(du(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&Fs(t,e,_,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&Ot(t,e,o,a,l,null))}function Xg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,o=null,p=null,O=null,_=null;for(N in l){var M=l[N];if(l.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":p=M;default:a.hasOwnProperty(N)||Ot(t,e,N,null,a,M)}}for(var A in a){var N=a[A];if(M=l[A],a.hasOwnProperty(A)&&(N!=null||M!=null))switch(A){case"type":i=N;break;case"name":n=N;break;case"checked":O=N;break;case"defaultChecked":_=N;break;case"value":r=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==M&&Ot(t,e,A,N,a,M)}}ou(t,r,o,p,O,_,i,n);return;case"select":N=r=o=A=null;for(i in l)if(p=l[i],l.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":N=p;default:a.hasOwnProperty(i)||Ot(t,e,i,null,a,p)}for(n in a)if(i=a[n],p=l[n],a.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":A=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==p&&Ot(t,e,n,i,a,p)}e=o,l=r,a=N,A!=null?Zl(t,!!l,A,!1):!!a!=!!l&&(e!=null?Zl(t,!!l,e,!0):Zl(t,!!l,l?[]:"",!1));return;case"textarea":N=A=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ot(t,e,o,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":A=n;break;case"defaultValue":N=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Ot(t,e,r,n,a,i)}Qc(t,A,N);return;case"option":for(var tt in l)if(A=l[tt],l.hasOwnProperty(tt)&&A!=null&&!a.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ot(t,e,tt,null,a,A)}for(p in a)if(A=a[p],N=l[p],a.hasOwnProperty(p)&&A!==N&&(A!=null||N!=null))switch(p){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ot(t,e,p,A,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in l)A=l[F],l.hasOwnProperty(F)&&A!=null&&!a.hasOwnProperty(F)&&Ot(t,e,F,null,a,A);for(O in a)if(A=a[O],N=l[O],a.hasOwnProperty(O)&&A!==N&&(A!=null||N!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:Ot(t,e,O,A,a,N)}return;default:if(du(e)){for(var At in l)A=l[At],l.hasOwnProperty(At)&&A!==void 0&&!a.hasOwnProperty(At)&&Fs(t,e,At,void 0,a,A);for(_ in a)A=a[_],N=l[_],!a.hasOwnProperty(_)||A===N||A===void 0&&N===void 0||Fs(t,e,_,A,a,N);return}}for(var x in l)A=l[x],l.hasOwnProperty(x)&&A!=null&&!a.hasOwnProperty(x)&&Ot(t,e,x,null,a,A);for(M in a)A=a[M],N=l[M],!a.hasOwnProperty(M)||A===N||A==null&&N==null||Ot(t,e,M,A,a,N)}var Ws=null,Ps=null;function Mi(t){return t.nodeType===9?t:t.ownerDocument}function kf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $f(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Is(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tc=null;function Qg(){var t=window.event;return t&&t.type==="popstate"?t===tc?!1:(tc=t,!0):(tc=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(t){return Wf.resolve(null).then(t).catch(Jg)}:Ff;function Jg(t){setTimeout(function(){throw t})}function gl(t){return t==="head"}function Pf(t,e){var l=e,a=0,n=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var r=t.ownerDocument;if(l&1&&pn(r.documentElement),l&2&&pn(r.body),l&4)for(l=r.head,pn(l),r=l.firstChild;r;){var o=r.nextSibling,p=r.nodeName;r[_a]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=o}}if(n===0){t.removeChild(i),En(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);En(e)}function ec(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ec(l),uu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function kg(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_a])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ne(t.nextSibling),t===null)break}return null}function $g(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ne(t.nextSibling),t===null))return null;return t}function lc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Fg(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ne(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ac=null;function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function td(t,e,l){switch(e=Mi(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);uu(t)}var Ee=new Map,ed=new Set;function Ui(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ke=H.d;H.d={f:Wg,r:Pg,D:Ig,C:tp,L:ep,m:lp,X:np,S:ap,M:ip};function Wg(){var t=ke.f(),e=Oi();return t||e}function Pg(t){var e=Gl(t);e!==null&&e.tag===5&&e.type==="form"?xo(e):ke.r(t)}var Sa=typeof document>"u"?null:document;function ld(t,e,l){var a=Sa;if(a&&typeof e=="string"&&e){var n=me(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),ed.has(n)||(ed.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function Ig(t){ke.D(t),ld("dns-prefetch",t,null)}function tp(t,e){ke.C(t,e),ld("preconnect",t,e)}function ep(t,e,l){ke.L(t,e,l);var a=Sa;if(a&&t&&e){var n='link[rel="preload"][as="'+me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+me(l.imageSizes)+'"]')):n+='[href="'+me(t)+'"]';var i=n;switch(e){case"style":i=Ta(t);break;case"script":i=Ea(t)}Ee.has(i)||(t=T({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ee.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(mn(i))||e==="script"&&a.querySelector(yn(i))||(e=a.createElement("link"),Jt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function lp(t,e){ke.m(t,e);var l=Sa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+me(a)+'"][href="'+me(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ea(t)}if(!Ee.has(i)&&(t=T({rel:"modulepreload",href:t},e),Ee.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}a=l.createElement("link"),Jt(a,"link",t),Gt(a),l.head.appendChild(a)}}}function ap(t,e,l){ke.S(t,e,l);var a=Sa;if(a&&t){var n=Vl(a).hoistableStyles,i=Ta(t);e=e||"default";var r=n.get(i);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(mn(i)))o.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ee.get(i))&&nc(t,l);var p=r=a.createElement("link");Gt(p),Jt(p,"link",t),p._p=new Promise(function(O,_){p.onload=O,p.onerror=_}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hi(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(i,r)}}}function np(t,e){ke.X(t,e);var l=Sa;if(l&&t){var a=Vl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=T({src:t,async:!0},e),(e=Ee.get(n))&&ic(t,e),i=l.createElement("script"),Gt(i),Jt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ip(t,e){ke.M(t,e);var l=Sa;if(l&&t){var a=Vl(l).hoistableScripts,n=Ea(t),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(t=T({src:t,async:!0,type:"module"},e),(e=Ee.get(n))&&ic(t,e),i=l.createElement("script"),Gt(i),Jt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ad(t,e,l,a){var n=(n=at.current)?Ui(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ta(l.href),l=Vl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ta(l.href);var i=Vl(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(mn(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Ee.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ee.set(t,l),i||up(n,t,l,r.state))),e&&a===null)throw Error(s(528,""));return r}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ea(l),l=Vl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ta(t){return'href="'+me(t)+'"'}function mn(t){return'link[rel="stylesheet"]['+t+"]"}function nd(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function up(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Jt(e,"link",l),Gt(e),t.head.appendChild(e))}function Ea(t){return'[src="'+me(t)+'"]'}function yn(t){return"script[async]"+t}function id(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+me(l.href)+'"]');if(a)return e.instance=a,Gt(a),a;var n=T({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Gt(a),Jt(a,"style",n),Hi(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ta(l.href);var i=t.querySelector(mn(n));if(i)return e.state.loading|=4,e.instance=i,Gt(i),i;a=nd(l),(n=Ee.get(n))&&nc(a,n),i=(t.ownerDocument||t).createElement("link"),Gt(i);var r=i;return r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),Jt(i,"link",a),e.state.loading|=4,Hi(i,l.precedence,t),e.instance=i;case"script":return i=Ea(l.src),(n=t.querySelector(yn(i)))?(e.instance=n,Gt(n),n):(a=l,(n=Ee.get(i))&&(a=T({},l),ic(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Gt(n),Jt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Hi(a,l.precedence,t));return e.instance}function Hi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function nc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ci=null;function ud(t,e,l){if(Ci===null){var a=new Map,n=Ci=new Map;n.set(l,a)}else n=Ci,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[$t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var o=a.get(r);o?o.push(i):a.set(r,[i])}}return a}function sd(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function sp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function cd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var bn=null;function cp(){}function rp(t,e,l){if(bn===null)throw Error(s(475));var a=bn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ta(l.href),i=t.querySelector(mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Li.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,Gt(i);return}i=t.ownerDocument||t,l=nd(l),(n=Ee.get(n))&&nc(l,n),i=i.createElement("link"),Gt(i);var r=i;r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),Jt(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Li.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function op(){if(bn===null)throw Error(s(475));var t=bn;return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Li(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ji=null;function uc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ji=new Map,e.forEach(fp,t),ji=null,Li.call(t))}function fp(t,e){if(!(e.state.loading&4)){var l=ji.get(t);if(l)var a=l.get(null);else{l=new Map,ji.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=e.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=Li.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:dt,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function dp(t,e,l,a,n,i,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function rd(t,e,l,a,n,i,r,o,p,O,_,M){return t=new dp(t,e,l,r,o,p,O,M),e=1,i===!0&&(e|=24),i=re(3,null,null,e),t.current=i,i.stateNode=t,e=Gu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Zu(i),t}function od(t){return t?(t=ta,t):ta}function fd(t,e,l,a,n,i){n=od(n),a.context===null?a.context=n:a.pendingContext=n,a=el(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ll(t,a,e),l!==null&&(ge(l,t,e),ka(l,t,e))}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function sc(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function hd(t){if(t.tag===13){var e=Il(t,67108864);e!==null&&ge(e,t,67108864),sc(t,67108864)}}var Bi=!0;function hp(t,e,l,a){var n=R.T;R.T=null;var i=H.p;try{H.p=2,cc(t,e,l,a)}finally{H.p=i,R.T=n}}function gp(t,e,l,a){var n=R.T;R.T=null;var i=H.p;try{H.p=8,cc(t,e,l,a)}finally{H.p=i,R.T=n}}function cc(t,e,l,a){if(Bi){var n=rc(a);if(n===null)$s(t,e,a,qi,l),pd(t,a);else if(mp(n,t,e,l,a))a.stopPropagation();else if(pd(t,a),e&4&&-1<pp.indexOf(t)){for(;n!==null;){var i=Gl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=xl(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var p=1<<31-se(r);o.entanglements[1]|=p,r&=~p}Me(i),(St&6)===0&&(Ti=ze()+500,dn(0))}}break;case 13:o=Il(i,2),o!==null&&ge(o,i,2),Oi(),sc(i,2)}if(i=rc(a),i===null&&$s(t,e,a,qi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else $s(t,e,a,null,l)}}function rc(t){return t=gu(t),oc(t)}var qi=null;function oc(t){if(qi=null,t=Yl(t),t!==null){var e=h(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=y(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return qi=t,null}function gd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(th()){case Nc:return 2;case zc:return 8;case wn:case eh:return 32;case Rc:return 268435456;default:return 32}default:return 32}}var fc=!1,pl=null,ml=null,yl=null,xn=new Map,Sn=new Map,bl=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":ml=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":xn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(e.pointerId)}}function Tn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Gl(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function mp(t,e,l,a,n){switch(e){case"focusin":return pl=Tn(pl,t,e,l,a,n),!0;case"dragenter":return ml=Tn(ml,t,e,l,a,n),!0;case"mouseover":return yl=Tn(yl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,Tn(xn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,Tn(Sn.get(i)||null,t,e,l,a,n)),!0}return!1}function md(t){var e=Yl(t.target);if(e!==null){var l=h(e);if(l!==null){if(e=l.tag,e===13){if(e=y(l),e!==null){t.blockedOn=e,rh(t.priority,function(){if(l.tag===13){var a=he();a=au(a);var n=Il(l,a);n!==null&&ge(n,l,a),sc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=rc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);hu=a,l.target.dispatchEvent(a),hu=null}else return e=Gl(l),e!==null&&hd(e),t.blockedOn=l,!1;e.shift()}return!0}function yd(t,e,l){Yi(t)&&l.delete(e)}function yp(){fc=!1,pl!==null&&Yi(pl)&&(pl=null),ml!==null&&Yi(ml)&&(ml=null),yl!==null&&Yi(yl)&&(yl=null),xn.forEach(yd),Sn.forEach(yd)}function Gi(t,e){t.blockedOn===e&&(t.blockedOn=null,fc||(fc=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,yp)))}var Vi=null;function bd(t){Vi!==t&&(Vi=t,f.unstable_scheduleCallback(f.unstable_NormalPriority,function(){Vi===t&&(Vi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(oc(a||l)===null)continue;break}var i=Gl(l);i!==null&&(t.splice(e,3),e-=3,os(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function En(t){function e(p){return Gi(p,t)}pl!==null&&Gi(pl,t),ml!==null&&Gi(ml,t),yl!==null&&Gi(yl,t),xn.forEach(e),Sn.forEach(e);for(var l=0;l<bl.length;l++){var a=bl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)md(l),l.blockedOn===null&&bl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[te]||null;if(typeof i=="function")r||bd(l);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[te]||null)o=r.formAction;else if(oc(n)!==null)continue}else o=r.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),bd(l)}}}function dc(t){this._internalRoot=t}Xi.prototype.render=dc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=he();fd(l,a,t,e,null,null)},Xi.prototype.unmount=dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fd(t.current,2,null,t,null,null),Oi(),e[ql]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uc();t={blockedOn:null,target:t,priority:e};for(var l=0;l<bl.length&&e!==0&&e<bl[l].priority;l++);bl.splice(l,0,t),l===0&&md(t)}};var vd=u.version;if(vd!=="19.1.0")throw Error(s(527,vd,"19.1.0"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var bp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Na=Qi.inject(bp),ue=Qi}catch{}}return An.createRoot=function(t,e){if(!d(t))throw Error(s(299));var l=!1,a="",n=Ho,i=Co,r=Lo,o=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=rd(t,1,!1,null,null,l,a,n,i,r,o,null),t[ql]=e.current,ks(t),new dc(e)},An.hydrateRoot=function(t,e,l){if(!d(t))throw Error(s(299));var a=!1,n="",i=Ho,r=Co,o=Lo,p=null,O=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(p=l.unstable_transitionCallbacks),l.formState!==void 0&&(O=l.formState)),e=rd(t,1,!0,e,l??null,a,n,i,r,o,p,O),e.context=od(null),l=e.current,a=he(),a=au(a),n=el(a),n.callback=null,ll(l,n,a),l=a,e.current.lanes=l,Ra(e,l),Me(e),t[ql]=e.current,ks(t),new Xi(e)},An.version="19.1.0",An}var _d;function Rp(){if(_d)return pc.exports;_d=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(u){console.error(u)}}return f(),pc.exports=zp(),pc.exports}var _p=Rp();const Dp=(f,u,c,s)=>{var h,y,S,m;const d=[c,{code:u,...s||{}}];if((y=(h=f==null?void 0:f.services)==null?void 0:h.logger)!=null&&y.forward)return f.services.logger.forward(d,"warn","react-i18next::",!0);Bl(d[0])&&(d[0]=`react-i18next:: ${d[0]}`),(m=(S=f==null?void 0:f.services)==null?void 0:S.logger)!=null&&m.warn?f.services.logger.warn(...d):console!=null&&console.warn&&console.warn(...d)},Dd={},Sc=(f,u,c,s)=>{Bl(c)&&Dd[c]||(Bl(c)&&(Dd[c]=new Date),Dp(f,u,c,s))},Jd=(f,u)=>()=>{if(f.isInitialized)u();else{const c=()=>{setTimeout(()=>{f.off("initialized",c)},0),u()};f.on("initialized",c)}},Tc=(f,u,c)=>{f.loadNamespaces(u,Jd(f,c))},wd=(f,u,c,s)=>{if(Bl(c)&&(c=[c]),f.options.preload&&f.options.preload.indexOf(u)>-1)return Tc(f,c,s);c.forEach(d=>{f.options.ns.indexOf(d)<0&&f.options.ns.push(d)}),f.loadLanguages(u,Jd(f,s))},wp=(f,u,c={})=>!u.languages||!u.languages.length?(Sc(u,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:u.languages}),!0):u.hasLoadedNamespace(f,{lng:c.lng,precheck:(s,d)=>{var h;if(((h=c.bindI18n)==null?void 0:h.indexOf("languageChanging"))>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!d(s.isLanguageChangingTo,f))return!1}}),Bl=f=>typeof f=="string",Mp=f=>typeof f=="object"&&f!==null,Up=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Hp={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Cp=f=>Hp[f],Lp=f=>f.replace(Up,Cp);let Ec={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Lp};const jp=(f={})=>{Ec={...Ec,...f}},Bp=()=>Ec;let kd;const qp=f=>{kd=f},Yp=()=>kd,Gp={type:"3rdParty",init(f){jp(f.options.react),qp(f)}},Vp=Yt.createContext();class Xp{constructor(){this.usedNamespaces={}}addUsedNamespaces(u){u.forEach(c=>{this.usedNamespaces[c]||(this.usedNamespaces[c]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Qp=(f,u)=>{const c=Yt.useRef();return Yt.useEffect(()=>{c.current=f},[f,u]),c.current},$d=(f,u,c,s)=>f.getFixedT(u,c,s),Zp=(f,u,c,s)=>Yt.useCallback($d(f,u,c,s),[f,u,c,s]),Ki=(f,u={})=>{var K,q,nt,et;const{i18n:c}=u,{i18n:s,defaultNS:d}=Yt.useContext(Vp)||{},h=c||s||Yp();if(h&&!h.reportNamespaces&&(h.reportNamespaces=new Xp),!h){Sc(h,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const P=(bt,ht)=>Bl(ht)?ht:Mp(ht)&&Bl(ht.defaultValue)?ht.defaultValue:Array.isArray(bt)?bt[bt.length-1]:bt,pt=[P,{},!1];return pt.t=P,pt.i18n={},pt.ready=!1,pt}(K=h.options.react)!=null&&K.wait&&Sc(h,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const y={...Bp(),...h.options.react,...u},{useSuspense:S,keyPrefix:m}=y;let g=d||((q=h.options)==null?void 0:q.defaultNS);g=Bl(g)?[g]:g||["translation"],(et=(nt=h.reportNamespaces).addUsedNamespaces)==null||et.call(nt,g);const T=(h.isInitialized||h.initializedStoreOnce)&&g.every(P=>wp(P,h,y)),w=Zp(h,u.lng||null,y.nsMode==="fallback"?g:g[0],m),z=()=>w,G=()=>$d(h,u.lng||null,y.nsMode==="fallback"?g:g[0],m),[L,X]=Yt.useState(z);let Z=g.join();u.lng&&(Z=`${u.lng}${Z}`);const I=Qp(Z),ft=Yt.useRef(!0);Yt.useEffect(()=>{const{bindI18n:P,bindI18nStore:pt}=y;ft.current=!0,!T&&!S&&(u.lng?wd(h,u.lng,g,()=>{ft.current&&X(G)}):Tc(h,g,()=>{ft.current&&X(G)})),T&&I&&I!==Z&&ft.current&&X(G);const bt=()=>{ft.current&&X(G)};return P&&(h==null||h.on(P,bt)),pt&&(h==null||h.store.on(pt,bt)),()=>{ft.current=!1,h&&(P==null||P.split(" ").forEach(ht=>h.off(ht,bt))),pt&&h&&pt.split(" ").forEach(ht=>h.store.off(ht,bt))}},[h,Z]),Yt.useEffect(()=>{ft.current&&T&&X(z)},[h,m,T]);const dt=[L,h,T];if(dt.t=L,dt.i18n=h,dt.ready=T,T||!T&&!S)return dt;throw new Promise(P=>{u.lng?wd(h,u.lng,g,()=>P()):Tc(h,g,()=>P())})};function Kp(f){const{i18n:u}=Ki(),c=[{code:"nl",label:"NL"},{code:"fr",label:"FR"},{code:"de",label:"DE"},{code:"en",label:"EN"}];return V.jsx(V.Fragment,{children:V.jsxs("div",{id:"app-header",className:"repel | flex-wrap gap-4 mb-7",children:[V.jsxs("h1",{className:"text-3xl text-primary",children:[V.jsxs("span",{className:"font-bold",children:[f.title," "]}),V.jsxs("span",{className:"font-light",children:[f.subtitle," "]})]}),V.jsx("div",{className:"join",children:c.map(s=>V.jsx("button",{onClick:()=>u.changeLanguage(s.code),className:`btn join-item ${u.language===s.code?"btn-primary":"btn-secondary"}`,children:s.label},s.code))})]})})}function Jp(f){const{t:u}=Ki(),c={"Featured News":"sectionFeatured","Euro Tip":"sectionEuroTip","HR Tip":"sectionHrTip",Trainings:"sectionTrainings","Sector News":"sectionSectorNews","Other News":"sectionOtherNews"};return V.jsx("header",{className:"card-header flex justify-between items-center bg-primary-content py-5",children:V.jsx("h2",{className:"card-title",children:u(c[f.title])||f.title})})}function kp({label:f,id:u,name:c,type:s="text",required:d=!1,placeholder:h,rows:y,value:S,onChange:m}){const g=T=>{T.target.select()};return V.jsx(V.Fragment,{children:V.jsxs("div",{className:"input-floating textarea-floating flex flex-col",children:[V.jsxs("label",{className:"input-floating-label textarea-floating-label z-10",htmlFor:u,children:[f,d&&V.jsx("span",{"aria-hidden":"true",style:{color:"red"},children:"*"})]}),s==="textarea"?V.jsx("textarea",{className:"textarea mb-2",id:u,name:c,placeholder:h,rows:y,required:d,"aria-required":d?"true":void 0,value:S,onChange:m,onFocus:g}):V.jsx("input",{className:"input mb-2",type:s,id:u,name:c,placeholder:h,required:d,"aria-required":d?"true":void 0,value:S,onChange:m,onFocus:g})]})})}function $p({id:f,index:u,onRemove:c,onClear:s}){return V.jsxs("header",{className:"card-header flex justify-between items-center bg-primary-content py-4.5",children:[V.jsxs("h3",{className:"card-title text-lg",children:["Item ",u+1]}),V.jsxs("div",{className:"card-actions flex gap-0.5 sm:gap-3 flex-nowrap",children:[V.jsxs("div",{className:"tooltip",children:[V.jsx("button",{type:"button",onClick:s,className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Clear",children:V.jsx("span",{className:"icon-[tabler--eraser] size-5"})}),V.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:V.jsx("span",{className:"tooltip-body",children:"Clear"})})]}),V.jsxs("div",{className:"tooltip",children:[V.jsx("button",{type:"button",onClick:()=>c(f),className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Remove Button",children:V.jsx("span",{className:"icon-[tabler--trash] size-5"})}),V.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:V.jsx("span",{className:"tooltip-body",children:"Remove"})})]})]})]})}const Fp={complex:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Summary",id:"summary",name:"summary",type:"textarea",required:!0,placeholder:"Explain what the article is about in a few sentences",rows:3},{label:"CTA",id:"cta",name:"cta",required:!0,placeholder:"Suggest a call to action (e.g., Read more)"}],training:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Title of the training"},{label:"Date",id:"date",name:"date",required:!0,placeholder:"E.g., 1 Jan. 2025"},{label:"Time",id:"time",name:"time",required:!0,placeholder:"E.g., 9:00 - 12:00"},{label:"Format",id:"format",name:"format",required:!0,placeholder:"E.g., Online, Blended, On-Site in Brussels"},{label:"Price",id:"price",name:"price",type:"number",required:!0,placeholder:"E.g., 400"}],simple:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Header",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Subheader",id:"subtitle",name:"subtitle",required:!1,placeholder:"Optional: write a subtitle"}]};function Wp({fieldsetType:f,id:u,index:c,onRemove:s,values:d,onFieldChange:h}){const y=Fp[f]||[],S=()=>{const m={};y.forEach(g=>{m[g.name]=""}),h(u,m)};return V.jsx(V.Fragment,{children:V.jsxs("fieldset",{className:"card bg-transparent overflow-hidden",children:[V.jsx($p,{id:u,index:c,onRemove:s,onClear:S}),V.jsx("div",{className:"card-body flex flex-col p-6 pb-4 gap-4 bg-white/75",children:y.map(m=>V.jsx(kp,{...m,value:d&&d[m.name]||"",onChange:g=>h(u,m.name,g.target.value)},m.id))})]})})}function Pp({id:f,title:u,fieldsetType:c,fieldsets:s,onAddFieldset:d,onRemove:h,onFieldChange:y}){return V.jsxs("section",{className:"card w-full bg-transparent overflow-hidden",children:[V.jsx(Jp,{title:u}),V.jsx("div",{className:"card-body flex flex-col py-0 gap-6 bg-white/50",children:s.map((S,m)=>V.jsx(Wp,{fieldsetType:c,id:S.id,index:m,onRemove:h,onFieldChange:y,values:S},S.id))}),V.jsx("div",{className:"card-actions justify-center",children:V.jsxs("button",{type:"button",onClick:()=>d(f),className:"btn btn-block btn-secondary rounded-t-none",children:[V.jsx("span",{className:"icon-[tabler--plus] size-4.5 shrink-0"}),"Add fieldset"]})})]})}function Ip({sections:f,onAddFieldset:u,onRemove:c,onFieldChange:s}){return V.jsx("div",{className:"form-wrapper",children:V.jsx("form",{className:"flex flex-col gap-y-6",children:f.map(d=>V.jsx(Pp,{id:d.id,title:d.title,fieldsetType:d.fieldsetType,onAddFieldset:u,onRemove:c,onFieldChange:s,fieldsets:d.fieldsets},d.id))})})}function tm({html:f,onCopy:u,isCopied:c}){const s=!navigator.clipboard||!f;return V.jsxs("div",{className:"card w-full overflow-hidden",children:[V.jsx("div",{className:"card-actions justify-center",children:V.jsxs("button",{type:"button",className:"btn btn-block btn-primary rounded-b-none h-12",onClick:u,disabled:s,children:[V.jsx("span",{className:"icon-[tabler--copy] size-4.5 shrink-0"}),c?"Copied!":"Copy HTML"]})}),V.jsx("iframe",{className:"h-svh",srcDoc:f,sandbox:"",loading:"lazy"})]})}const Md=[{title:"Featured News",fieldsetType:"complex",fieldsets:[{url:"#",title:"Lorem ipsum dolor",summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"}]},{title:"Euro Tip",fieldsetType:"complex",fieldsets:[]},{title:"HR Tip",fieldsetType:"complex",fieldsets:[]},{title:"Trainings",fieldsetType:"training",fieldsets:[]},{title:"Sector News",fieldsetType:"simple",fieldsets:[{url:"#",title:"JC 123.456 | Sector name",subtitle:"Lorem ipsum dolor sit amet"}]},{title:"Other News",fieldsetType:"simple",fieldsets:[{url:"#",title:"Lorem ipsum dolor sit amet",subtitle:"Lorem ipsum dolor sit amet"}]}],kt=[];for(let f=0;f<256;++f)kt.push((f+256).toString(16).slice(1));function em(f,u=0){return(kt[f[u+0]]+kt[f[u+1]]+kt[f[u+2]]+kt[f[u+3]]+"-"+kt[f[u+4]]+kt[f[u+5]]+"-"+kt[f[u+6]]+kt[f[u+7]]+"-"+kt[f[u+8]]+kt[f[u+9]]+"-"+kt[f[u+10]]+kt[f[u+11]]+kt[f[u+12]]+kt[f[u+13]]+kt[f[u+14]]+kt[f[u+15]]).toLowerCase()}let vc;const lm=new Uint8Array(16);function am(){if(!vc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");vc=crypto.getRandomValues.bind(crypto)}return vc(lm)}const nm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ud={randomUUID:nm};function Nn(f,u,c){var d;if(Ud.randomUUID&&!f)return Ud.randomUUID();f=f||{};const s=f.random??((d=f.rng)==null?void 0:d.call(f))??am();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,em(s)}const lt=f=>typeof f=="string",zn=()=>{let f,u;const c=new Promise((s,d)=>{f=s,u=d});return c.resolve=f,c.reject=u,c},Hd=f=>f==null?"":""+f,im=(f,u,c)=>{f.forEach(s=>{u[s]&&(c[s]=u[s])})},um=/###/g,Cd=f=>f&&f.indexOf("###")>-1?f.replace(um,"."):f,Ld=f=>!f||lt(f),Rn=(f,u,c)=>{const s=lt(u)?u.split("."):u;let d=0;for(;d<s.length-1;){if(Ld(f))return{};const h=Cd(s[d]);!f[h]&&c&&(f[h]=new c),Object.prototype.hasOwnProperty.call(f,h)?f=f[h]:f={},++d}return Ld(f)?{}:{obj:f,k:Cd(s[d])}},jd=(f,u,c)=>{const{obj:s,k:d}=Rn(f,u,Object);if(s!==void 0||u.length===1){s[d]=c;return}let h=u[u.length-1],y=u.slice(0,u.length-1),S=Rn(f,y,Object);for(;S.obj===void 0&&y.length;)h=`${y[y.length-1]}.${h}`,y=y.slice(0,y.length-1),S=Rn(f,y,Object),S!=null&&S.obj&&typeof S.obj[`${S.k}.${h}`]<"u"&&(S.obj=void 0);S.obj[`${S.k}.${h}`]=c},sm=(f,u,c,s)=>{const{obj:d,k:h}=Rn(f,u,Object);d[h]=d[h]||[],d[h].push(c)},Ji=(f,u)=>{const{obj:c,k:s}=Rn(f,u);if(c&&Object.prototype.hasOwnProperty.call(c,s))return c[s]},cm=(f,u,c)=>{const s=Ji(f,c);return s!==void 0?s:Ji(u,c)},Fd=(f,u,c)=>{for(const s in u)s!=="__proto__"&&s!=="constructor"&&(s in f?lt(f[s])||f[s]instanceof String||lt(u[s])||u[s]instanceof String?c&&(f[s]=u[s]):Fd(f[s],u[s],c):f[s]=u[s]);return f},Oa=f=>f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var rm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const om=f=>lt(f)?f.replace(/[&<>"'\/]/g,u=>rm[u]):f;class fm{constructor(u){this.capacity=u,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(u){const c=this.regExpMap.get(u);if(c!==void 0)return c;const s=new RegExp(u);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(u,s),this.regExpQueue.push(u),s}}const dm=[" ",",","?","!",";"],hm=new fm(20),gm=(f,u,c)=>{u=u||"",c=c||"";const s=dm.filter(y=>u.indexOf(y)<0&&c.indexOf(y)<0);if(s.length===0)return!0;const d=hm.getRegExp(`(${s.map(y=>y==="?"?"\\?":y).join("|")})`);let h=!d.test(f);if(!h){const y=f.indexOf(c);y>0&&!d.test(f.substring(0,y))&&(h=!0)}return h},Oc=function(f,u){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!f)return;if(f[u])return Object.prototype.hasOwnProperty.call(f,u)?f[u]:void 0;const s=u.split(c);let d=f;for(let h=0;h<s.length;){if(!d||typeof d!="object")return;let y,S="";for(let m=h;m<s.length;++m)if(m!==h&&(S+=c),S+=s[m],y=d[S],y!==void 0){if(["string","number","boolean"].indexOf(typeof y)>-1&&m<s.length-1)continue;h+=m-h+1;break}d=y}return d},ki=f=>f==null?void 0:f.replace("_","-"),pm={type:"logger",log(f){this.output("log",f)},warn(f){this.output("warn",f)},error(f){this.output("error",f)},output(f,u){var c,s;(s=(c=console==null?void 0:console[f])==null?void 0:c.apply)==null||s.call(c,console,u)}};class $i{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(u,c)}init(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=c.prefix||"i18next:",this.logger=u||pm,this.options=c,this.debug=c.debug}log(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"log","",!0)}warn(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"warn","",!0)}error(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"error","")}deprecate(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return this.forward(c,"warn","WARNING DEPRECATED: ",!0)}forward(u,c,s,d){return d&&!this.debug?null:(lt(u[0])&&(u[0]=`${s}${this.prefix} ${u[0]}`),this.logger[c](u))}create(u){return new $i(this.logger,{prefix:`${this.prefix}:${u}:`,...this.options})}clone(u){return u=u||this.options,u.prefix=u.prefix||this.prefix,new $i(this.logger,u)}}var Ue=new $i;class Wi{constructor(){this.observers={}}on(u,c){return u.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const d=this.observers[s].get(c)||0;this.observers[s].set(c,d+1)}),this}off(u,c){if(this.observers[u]){if(!c){delete this.observers[u];return}this.observers[u].delete(c)}}emit(u){for(var c=arguments.length,s=new Array(c>1?c-1:0),d=1;d<c;d++)s[d-1]=arguments[d];this.observers[u]&&Array.from(this.observers[u].entries()).forEach(y=>{let[S,m]=y;for(let g=0;g<m;g++)S(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(y=>{let[S,m]=y;for(let g=0;g<m;g++)S.apply(S,[u,...s])})}}class Bd extends Wi{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=u||{},this.options=c,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(u){this.options.ns.indexOf(u)<0&&this.options.ns.push(u)}removeNamespaces(u){const c=this.options.ns.indexOf(u);c>-1&&this.options.ns.splice(c,1)}getResource(u,c,s){var g,T;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const h=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,y=d.ignoreJSONStructure!==void 0?d.ignoreJSONStructure:this.options.ignoreJSONStructure;let S;u.indexOf(".")>-1?S=u.split("."):(S=[u,c],s&&(Array.isArray(s)?S.push(...s):lt(s)&&h?S.push(...s.split(h)):S.push(s)));const m=Ji(this.data,S);return!m&&!c&&!s&&u.indexOf(".")>-1&&(u=S[0],c=S[1],s=S.slice(2).join(".")),m||!y||!lt(s)?m:Oc((T=(g=this.data)==null?void 0:g[u])==null?void 0:T[c],s,h)}addResource(u,c,s,d){let h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const y=h.keySeparator!==void 0?h.keySeparator:this.options.keySeparator;let S=[u,c];s&&(S=S.concat(y?s.split(y):s)),u.indexOf(".")>-1&&(S=u.split("."),d=c,c=S[1]),this.addNamespaces(c),jd(this.data,S,d),h.silent||this.emit("added",u,c,s,d)}addResources(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const h in s)(lt(s[h])||Array.isArray(s[h]))&&this.addResource(u,c,h,s[h],{silent:!0});d.silent||this.emit("added",u,c,s)}addResourceBundle(u,c,s,d,h){let y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},S=[u,c];u.indexOf(".")>-1&&(S=u.split("."),d=s,s=c,c=S[1]),this.addNamespaces(c);let m=Ji(this.data,S)||{};y.skipCopy||(s=JSON.parse(JSON.stringify(s))),d?Fd(m,s,h):m={...m,...s},jd(this.data,S,m),y.silent||this.emit("added",u,c,s)}removeResourceBundle(u,c){this.hasResourceBundle(u,c)&&delete this.data[u][c],this.removeNamespaces(c),this.emit("removed",u,c)}hasResourceBundle(u,c){return this.getResource(u,c)!==void 0}getResourceBundle(u,c){return c||(c=this.options.defaultNS),this.getResource(u,c)}getDataByLanguage(u){return this.data[u]}hasLanguageSomeTranslations(u){const c=this.getDataByLanguage(u);return!!(c&&Object.keys(c)||[]).find(d=>c[d]&&Object.keys(c[d]).length>0)}toJSON(){return this.data}}var Wd={processors:{},addPostProcessor(f){this.processors[f.name]=f},handle(f,u,c,s,d){return f.forEach(h=>{var y;u=((y=this.processors[h])==null?void 0:y.process(u,c,s,d))??u}),u}};const qd={},Yd=f=>!lt(f)&&typeof f!="boolean"&&typeof f!="number";class Fi extends Wi{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),im(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],u,this),this.options=c,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ue.create("translator")}changeLanguage(u){u&&(this.language=u)}exists(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(u==null)return!1;const s=this.resolve(u,c);return(s==null?void 0:s.res)!==void 0}extractFromKey(u,c){let s=c.nsSeparator!==void 0?c.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const d=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let h=c.ns||this.options.defaultNS||[];const y=s&&u.indexOf(s)>-1,S=!this.options.userDefinedKeySeparator&&!c.keySeparator&&!this.options.userDefinedNsSeparator&&!c.nsSeparator&&!gm(u,s,d);if(y&&!S){const m=u.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:u,namespaces:lt(h)?[h]:h};const g=u.split(s);(s!==d||s===d&&this.options.ns.indexOf(g[0])>-1)&&(h=g.shift()),u=g.join(d)}return{key:u,namespaces:lt(h)?[h]:h}}translate(u,c,s){if(typeof c!="object"&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(c={...c}),c||(c={}),u==null)return"";Array.isArray(u)||(u=[String(u)]);const d=c.returnDetails!==void 0?c.returnDetails:this.options.returnDetails,h=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,{key:y,namespaces:S}=this.extractFromKey(u[u.length-1],c),m=S[S.length-1],g=c.lng||this.language,T=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode"){if(T){const ht=c.nsSeparator||this.options.nsSeparator;return d?{res:`${m}${ht}${y}`,usedKey:y,exactUsedKey:y,usedLng:g,usedNS:m,usedParams:this.getUsedParamsDetails(c)}:`${m}${ht}${y}`}return d?{res:y,usedKey:y,exactUsedKey:y,usedLng:g,usedNS:m,usedParams:this.getUsedParamsDetails(c)}:y}const w=this.resolve(u,c);let z=w==null?void 0:w.res;const G=(w==null?void 0:w.usedKey)||y,L=(w==null?void 0:w.exactUsedKey)||y,X=["[object Number]","[object Function]","[object RegExp]"],Z=c.joinArrays!==void 0?c.joinArrays:this.options.joinArrays,I=!this.i18nFormat||this.i18nFormat.handleAsObject,ft=c.count!==void 0&&!lt(c.count),dt=Fi.hasDefaultValue(c),K=ft?this.pluralResolver.getSuffix(g,c.count,c):"",q=c.ordinal&&ft?this.pluralResolver.getSuffix(g,c.count,{ordinal:!1}):"",nt=ft&&!c.ordinal&&c.count===0,et=nt&&c[`defaultValue${this.options.pluralSeparator}zero`]||c[`defaultValue${K}`]||c[`defaultValue${q}`]||c.defaultValue;let P=z;I&&!z&&dt&&(P=et);const pt=Yd(P),bt=Object.prototype.toString.apply(P);if(I&&P&&pt&&X.indexOf(bt)<0&&!(lt(Z)&&Array.isArray(P))){if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ht=this.options.returnedObjectHandler?this.options.returnedObjectHandler(G,P,{...c,ns:S}):`key '${y} (${this.language})' returned an object instead of string.`;return d?(w.res=ht,w.usedParams=this.getUsedParamsDetails(c),w):ht}if(h){const ht=Array.isArray(P),j=ht?[]:{},k=ht?L:G;for(const xt in P)if(Object.prototype.hasOwnProperty.call(P,xt)){const zt=`${k}${h}${xt}`;dt&&!z?j[xt]=this.translate(zt,{...c,defaultValue:Yd(et)?et[xt]:void 0,joinArrays:!1,ns:S}):j[xt]=this.translate(zt,{...c,joinArrays:!1,ns:S}),j[xt]===zt&&(j[xt]=P[xt])}z=j}}else if(I&&lt(Z)&&Array.isArray(z))z=z.join(Z),z&&(z=this.extendTranslation(z,u,c,s));else{let ht=!1,j=!1;!this.isValidLookup(z)&&dt&&(ht=!0,z=et),this.isValidLookup(z)||(j=!0,z=y);const xt=(c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&j?void 0:z,zt=dt&&et!==z&&this.options.updateMissing;if(j||ht||zt){if(this.logger.log(zt?"updateKey":"missingKey",g,m,y,zt?et:z),h){const it=this.resolve(y,{...c,keySeparator:!1});it&&it.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let R=[];const H=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if(this.options.saveMissingTo==="fallback"&&H&&H[0])for(let it=0;it<H.length;it++)R.push(H[it]);else this.options.saveMissingTo==="all"?R=this.languageUtils.toResolveHierarchy(c.lng||this.language):R.push(c.lng||this.language);const J=(it,b,U)=>{var C;const B=dt&&U!==z?U:xt;this.options.missingKeyHandler?this.options.missingKeyHandler(it,m,b,B,zt,c):(C=this.backendConnector)!=null&&C.saveMissing&&this.backendConnector.saveMissing(it,m,b,B,zt,c),this.emit("missingKey",it,m,b,z)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ft?R.forEach(it=>{const b=this.pluralResolver.getSuffixes(it,c);nt&&c[`defaultValue${this.options.pluralSeparator}zero`]&&b.indexOf(`${this.options.pluralSeparator}zero`)<0&&b.push(`${this.options.pluralSeparator}zero`),b.forEach(U=>{J([it],y+U,c[`defaultValue${U}`]||et)})}):J(R,y,et))}z=this.extendTranslation(z,u,c,w,s),j&&z===y&&this.options.appendNamespaceToMissingKey&&(z=`${m}:${y}`),(j||ht)&&this.options.parseMissingKeyHandler&&(z=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}:${y}`:y,ht?z:void 0))}return d?(w.res=z,w.usedParams=this.getUsedParamsDetails(c),w):z}extendTranslation(u,c,s,d,h){var g,T;var y=this;if((g=this.i18nFormat)!=null&&g.parse)u=this.i18nFormat.parse(u,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||d.usedLng,d.usedNS,d.usedKey,{resolved:d});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const w=lt(u)&&(((T=s==null?void 0:s.interpolation)==null?void 0:T.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let z;if(w){const L=u.match(this.interpolator.nestingRegexp);z=L&&L.length}let G=s.replace&&!lt(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(G={...this.options.interpolation.defaultVariables,...G}),u=this.interpolator.interpolate(u,G,s.lng||this.language||d.usedLng,s),w){const L=u.match(this.interpolator.nestingRegexp),X=L&&L.length;z<X&&(s.nest=!1)}!s.lng&&d&&d.res&&(s.lng=this.language||d.usedLng),s.nest!==!1&&(u=this.interpolator.nest(u,function(){for(var L=arguments.length,X=new Array(L),Z=0;Z<L;Z++)X[Z]=arguments[Z];return(h==null?void 0:h[0])===X[0]&&!s.context?(y.logger.warn(`It seems you are nesting recursively key: ${X[0]} in key: ${c[0]}`),null):y.translate(...X,c)},s)),s.interpolation&&this.interpolator.reset()}const S=s.postProcess||this.options.postProcess,m=lt(S)?[S]:S;return u!=null&&(m!=null&&m.length)&&s.applyPostProcessor!==!1&&(u=Wd.handle(m,u,c,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...d,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),u}resolve(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,d,h,y,S;return lt(u)&&(u=[u]),u.forEach(m=>{if(this.isValidLookup(s))return;const g=this.extractFromKey(m,c),T=g.key;d=T;let w=g.namespaces;this.options.fallbackNS&&(w=w.concat(this.options.fallbackNS));const z=c.count!==void 0&&!lt(c.count),G=z&&!c.ordinal&&c.count===0,L=c.context!==void 0&&(lt(c.context)||typeof c.context=="number")&&c.context!=="",X=c.lngs?c.lngs:this.languageUtils.toResolveHierarchy(c.lng||this.language,c.fallbackLng);w.forEach(Z=>{var I,ft;this.isValidLookup(s)||(S=Z,!qd[`${X[0]}-${Z}`]&&((I=this.utils)!=null&&I.hasLoadedNamespace)&&!((ft=this.utils)!=null&&ft.hasLoadedNamespace(S))&&(qd[`${X[0]}-${Z}`]=!0,this.logger.warn(`key "${d}" for languages "${X.join(", ")}" won't get resolved as namespace "${S}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),X.forEach(dt=>{var nt;if(this.isValidLookup(s))return;y=dt;const K=[T];if((nt=this.i18nFormat)!=null&&nt.addLookupKeys)this.i18nFormat.addLookupKeys(K,T,dt,Z,c);else{let et;z&&(et=this.pluralResolver.getSuffix(dt,c.count,c));const P=`${this.options.pluralSeparator}zero`,pt=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(z&&(K.push(T+et),c.ordinal&&et.indexOf(pt)===0&&K.push(T+et.replace(pt,this.options.pluralSeparator)),G&&K.push(T+P)),L){const bt=`${T}${this.options.contextSeparator}${c.context}`;K.push(bt),z&&(K.push(bt+et),c.ordinal&&et.indexOf(pt)===0&&K.push(bt+et.replace(pt,this.options.pluralSeparator)),G&&K.push(bt+P))}}let q;for(;q=K.pop();)this.isValidLookup(s)||(h=q,s=this.getResource(dt,Z,q,c))}))})}),{res:s,usedKey:d,exactUsedKey:h,usedLng:y,usedNS:S}}isValidLookup(u){return u!==void 0&&!(!this.options.returnNull&&u===null)&&!(!this.options.returnEmptyString&&u==="")}getResource(u,c,s){var h;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(h=this.i18nFormat)!=null&&h.getResource?this.i18nFormat.getResource(u,c,s,d):this.resourceStore.getResource(u,c,s,d)}getUsedParamsDetails(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const c=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=u.replace&&!lt(u.replace);let d=s?u.replace:u;if(s&&typeof u.count<"u"&&(d.count=u.count),this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),!s){d={...d};for(const h of c)delete d[h]}return d}static hasDefaultValue(u){const c="defaultValue";for(const s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&c===s.substring(0,c.length)&&u[s]!==void 0)return!0;return!1}}class Gd{constructor(u){this.options=u,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ue.create("languageUtils")}getScriptPartFromCode(u){if(u=ki(u),!u||u.indexOf("-")<0)return null;const c=u.split("-");return c.length===2||(c.pop(),c[c.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(c.join("-"))}getLanguagePartFromCode(u){if(u=ki(u),!u||u.indexOf("-")<0)return u;const c=u.split("-");return this.formatLanguageCode(c[0])}formatLanguageCode(u){if(lt(u)&&u.indexOf("-")>-1){let c;try{c=Intl.getCanonicalLocales(u)[0]}catch{}return c&&this.options.lowerCaseLng&&(c=c.toLowerCase()),c||(this.options.lowerCaseLng?u.toLowerCase():u)}return this.options.cleanCode||this.options.lowerCaseLng?u.toLowerCase():u}isSupportedCode(u){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(u=this.getLanguagePartFromCode(u)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(u)>-1}getBestMatchFromCodes(u){if(!u)return null;let c;return u.forEach(s=>{if(c)return;const d=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(d))&&(c=d)}),!c&&this.options.supportedLngs&&u.forEach(s=>{if(c)return;const d=this.getScriptPartFromCode(s);if(this.isSupportedCode(d))return c=d;const h=this.getLanguagePartFromCode(s);if(this.isSupportedCode(h))return c=h;c=this.options.supportedLngs.find(y=>{if(y===h)return y;if(!(y.indexOf("-")<0&&h.indexOf("-")<0)&&(y.indexOf("-")>0&&h.indexOf("-")<0&&y.substring(0,y.indexOf("-"))===h||y.indexOf(h)===0&&h.length>1))return y})}),c||(c=this.getFallbackCodes(this.options.fallbackLng)[0]),c}getFallbackCodes(u,c){if(!u)return[];if(typeof u=="function"&&(u=u(c)),lt(u)&&(u=[u]),Array.isArray(u))return u;if(!c)return u.default||[];let s=u[c];return s||(s=u[this.getScriptPartFromCode(c)]),s||(s=u[this.formatLanguageCode(c)]),s||(s=u[this.getLanguagePartFromCode(c)]),s||(s=u.default),s||[]}toResolveHierarchy(u,c){const s=this.getFallbackCodes(c||this.options.fallbackLng||[],u),d=[],h=y=>{y&&(this.isSupportedCode(y)?d.push(y):this.logger.warn(`rejecting language code not found in supportedLngs: ${y}`))};return lt(u)&&(u.indexOf("-")>-1||u.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&h(this.formatLanguageCode(u)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&h(this.getScriptPartFromCode(u)),this.options.load!=="currentOnly"&&h(this.getLanguagePartFromCode(u))):lt(u)&&h(this.formatLanguageCode(u)),s.forEach(y=>{d.indexOf(y)<0&&h(this.formatLanguageCode(y))}),d}}const Vd={zero:0,one:1,two:2,few:3,many:4,other:5},Xd={select:f=>f===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class mm{constructor(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=u,this.options=c,this.logger=Ue.create("pluralResolver"),this.pluralRulesCache={}}addRule(u,c){this.rules[u]=c}clearCache(){this.pluralRulesCache={}}getRule(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=ki(u==="dev"?"en":u),d=c.ordinal?"ordinal":"cardinal",h=JSON.stringify({cleanedCode:s,type:d});if(h in this.pluralRulesCache)return this.pluralRulesCache[h];let y;try{y=new Intl.PluralRules(s,{type:d})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Xd;if(!u.match(/-|_/))return Xd;const m=this.languageUtils.getLanguagePartFromCode(u);y=this.getRule(m,c)}return this.pluralRulesCache[h]=y,y}needsPlural(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(u,c);return s||(s=this.getRule("dev",c)),(s==null?void 0:s.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(u,s).map(d=>`${c}${d}`)}getSuffixes(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=this.getRule(u,c);return s||(s=this.getRule("dev",c)),s?s.resolvedOptions().pluralCategories.sort((d,h)=>Vd[d]-Vd[h]).map(d=>`${this.options.prepend}${c.ordinal?`ordinal${this.options.prepend}`:""}${d}`):[]}getSuffix(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const d=this.getRule(u,s);return d?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${d.select(c)}`:(this.logger.warn(`no plural rule found for: ${u}`),this.getSuffix("dev",c,s))}}const Qd=function(f,u,c){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,h=cm(f,u,c);return!h&&d&&lt(c)&&(h=Oc(f,c,s),h===void 0&&(h=Oc(u,c,s))),h},xc=f=>f.replace(/\$/g,"$$$$");class ym{constructor(){var c;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ue.create("interpolator"),this.options=u,this.format=((c=u==null?void 0:u.interpolation)==null?void 0:c.format)||(s=>s),this.init(u)}init(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};u.interpolation||(u.interpolation={escapeValue:!0});const{escape:c,escapeValue:s,useRawValueToEscape:d,prefix:h,prefixEscaped:y,suffix:S,suffixEscaped:m,formatSeparator:g,unescapeSuffix:T,unescapePrefix:w,nestingPrefix:z,nestingPrefixEscaped:G,nestingSuffix:L,nestingSuffixEscaped:X,nestingOptionsSeparator:Z,maxReplaces:I,alwaysFormat:ft}=u.interpolation;this.escape=c!==void 0?c:om,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=d!==void 0?d:!1,this.prefix=h?Oa(h):y||"{{",this.suffix=S?Oa(S):m||"}}",this.formatSeparator=g||",",this.unescapePrefix=T?"":w||"-",this.unescapeSuffix=this.unescapePrefix?"":T||"",this.nestingPrefix=z?Oa(z):G||Oa("$t("),this.nestingSuffix=L?Oa(L):X||Oa(")"),this.nestingOptionsSeparator=Z||",",this.maxReplaces=I||1e3,this.alwaysFormat=ft!==void 0?ft:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const u=(c,s)=>(c==null?void 0:c.source)===s?(c.lastIndex=0,c):new RegExp(s,"g");this.regexp=u(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=u(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=u(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(u,c,s,d){var G;let h,y,S;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=L=>{if(L.indexOf(this.formatSeparator)<0){const ft=Qd(c,m,L,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(ft,void 0,s,{...d,...c,interpolationkey:L}):ft}const X=L.split(this.formatSeparator),Z=X.shift().trim(),I=X.join(this.formatSeparator).trim();return this.format(Qd(c,m,Z,this.options.keySeparator,this.options.ignoreJSONStructure),I,s,{...d,...c,interpolationkey:Z})};this.resetRegExp();const T=(d==null?void 0:d.missingInterpolationHandler)||this.options.missingInterpolationHandler,w=((G=d==null?void 0:d.interpolation)==null?void 0:G.skipOnVariables)!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:L=>xc(L)},{regex:this.regexp,safeValue:L=>this.escapeValue?xc(this.escape(L)):xc(L)}].forEach(L=>{for(S=0;h=L.regex.exec(u);){const X=h[1].trim();if(y=g(X),y===void 0)if(typeof T=="function"){const I=T(u,h,d);y=lt(I)?I:""}else if(d&&Object.prototype.hasOwnProperty.call(d,X))y="";else if(w){y=h[0];continue}else this.logger.warn(`missed to pass in variable ${X} for interpolating ${u}`),y="";else!lt(y)&&!this.useRawValueToEscape&&(y=Hd(y));const Z=L.safeValue(y);if(u=u.replace(h[0],Z),w?(L.regex.lastIndex+=y.length,L.regex.lastIndex-=h[0].length):L.regex.lastIndex=0,S++,S>=this.maxReplaces)break}}),u}nest(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d,h,y;const S=(m,g)=>{const T=this.nestingOptionsSeparator;if(m.indexOf(T)<0)return m;const w=m.split(new RegExp(`${T}[ ]*{`));let z=`{${w[1]}`;m=w[0],z=this.interpolate(z,y);const G=z.match(/'/g),L=z.match(/"/g);(((G==null?void 0:G.length)??0)%2===0&&!L||L.length%2!==0)&&(z=z.replace(/'/g,'"'));try{y=JSON.parse(z),g&&(y={...g,...y})}catch(X){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,X),`${m}${T}${z}`}return y.defaultValue&&y.defaultValue.indexOf(this.prefix)>-1&&delete y.defaultValue,m};for(;d=this.nestingRegexp.exec(u);){let m=[];y={...s},y=y.replace&&!lt(y.replace)?y.replace:y,y.applyPostProcessor=!1,delete y.defaultValue;let g=!1;if(d[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(d[1])){const T=d[1].split(this.formatSeparator).map(w=>w.trim());d[1]=T.shift(),m=T,g=!0}if(h=c(S.call(this,d[1].trim(),y),y),h&&d[0]===u&&!lt(h))return h;lt(h)||(h=Hd(h)),h||(this.logger.warn(`missed to resolve ${d[1]} for nesting ${u}`),h=""),g&&(h=m.reduce((T,w)=>this.format(T,w,s.lng,{...s,interpolationkey:d[1].trim()}),h.trim())),u=u.replace(d[0],h),this.regexp.lastIndex=0}return u}}const bm=f=>{let u=f.toLowerCase().trim();const c={};if(f.indexOf("(")>-1){const s=f.split("(");u=s[0].toLowerCase().trim();const d=s[1].substring(0,s[1].length-1);u==="currency"&&d.indexOf(":")<0?c.currency||(c.currency=d.trim()):u==="relativetime"&&d.indexOf(":")<0?c.range||(c.range=d.trim()):d.split(";").forEach(y=>{if(y){const[S,...m]=y.split(":"),g=m.join(":").trim().replace(/^'+|'+$/g,""),T=S.trim();c[T]||(c[T]=g),g==="false"&&(c[T]=!1),g==="true"&&(c[T]=!0),isNaN(g)||(c[T]=parseInt(g,10))}})}return{formatName:u,formatOptions:c}},Aa=f=>{const u={};return(c,s,d)=>{let h=d;d&&d.interpolationkey&&d.formatParams&&d.formatParams[d.interpolationkey]&&d[d.interpolationkey]&&(h={...h,[d.interpolationkey]:void 0});const y=s+JSON.stringify(h);let S=u[y];return S||(S=f(ki(s),d),u[y]=S),S(c)}};class vm{constructor(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ue.create("formatter"),this.options=u,this.formats={number:Aa((c,s)=>{const d=new Intl.NumberFormat(c,{...s});return h=>d.format(h)}),currency:Aa((c,s)=>{const d=new Intl.NumberFormat(c,{...s,style:"currency"});return h=>d.format(h)}),datetime:Aa((c,s)=>{const d=new Intl.DateTimeFormat(c,{...s});return h=>d.format(h)}),relativetime:Aa((c,s)=>{const d=new Intl.RelativeTimeFormat(c,{...s});return h=>d.format(h,s.range||"day")}),list:Aa((c,s)=>{const d=new Intl.ListFormat(c,{...s});return h=>d.format(h)})},this.init(u)}init(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=c.interpolation.formatSeparator||","}add(u,c){this.formats[u.toLowerCase().trim()]=c}addCached(u,c){this.formats[u.toLowerCase().trim()]=Aa(c)}format(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const h=c.split(this.formatSeparator);if(h.length>1&&h[0].indexOf("(")>1&&h[0].indexOf(")")<0&&h.find(S=>S.indexOf(")")>-1)){const S=h.findIndex(m=>m.indexOf(")")>-1);h[0]=[h[0],...h.splice(1,S)].join(this.formatSeparator)}return h.reduce((S,m)=>{var w;const{formatName:g,formatOptions:T}=bm(m);if(this.formats[g]){let z=S;try{const G=((w=d==null?void 0:d.formatParams)==null?void 0:w[d.interpolationkey])||{},L=G.locale||G.lng||d.locale||d.lng||s;z=this.formats[g](S,L,{...T,...d,...G})}catch(G){this.logger.warn(G)}return z}else this.logger.warn(`there was no format function for ${g}`);return S},u)}}const xm=(f,u)=>{f.pending[u]!==void 0&&(delete f.pending[u],f.pendingCount--)};class Sm extends Wi{constructor(u,c,s){var h,y;let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=u,this.store=c,this.services=s,this.languageUtils=s.languageUtils,this.options=d,this.logger=Ue.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=d.maxParallelReads||10,this.readingCalls=0,this.maxRetries=d.maxRetries>=0?d.maxRetries:5,this.retryTimeout=d.retryTimeout>=1?d.retryTimeout:350,this.state={},this.queue=[],(y=(h=this.backend)==null?void 0:h.init)==null||y.call(h,s,d.backend,d)}queueLoad(u,c,s,d){const h={},y={},S={},m={};return u.forEach(g=>{let T=!0;c.forEach(w=>{const z=`${g}|${w}`;!s.reload&&this.store.hasResourceBundle(g,w)?this.state[z]=2:this.state[z]<0||(this.state[z]===1?y[z]===void 0&&(y[z]=!0):(this.state[z]=1,T=!1,y[z]===void 0&&(y[z]=!0),h[z]===void 0&&(h[z]=!0),m[w]===void 0&&(m[w]=!0)))}),T||(S[g]=!0)}),(Object.keys(h).length||Object.keys(y).length)&&this.queue.push({pending:y,pendingCount:Object.keys(y).length,loaded:{},errors:[],callback:d}),{toLoad:Object.keys(h),pending:Object.keys(y),toLoadLanguages:Object.keys(S),toLoadNamespaces:Object.keys(m)}}loaded(u,c,s){const d=u.split("|"),h=d[0],y=d[1];c&&this.emit("failedLoading",h,y,c),!c&&s&&this.store.addResourceBundle(h,y,s,void 0,void 0,{skipCopy:!0}),this.state[u]=c?-1:2,c&&s&&(this.state[u]=0);const S={};this.queue.forEach(m=>{sm(m.loaded,[h],y),xm(m,u),c&&m.errors.push(c),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(g=>{S[g]||(S[g]={});const T=m.loaded[g];T.length&&T.forEach(w=>{S[g][w]===void 0&&(S[g][w]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",S),this.queue=this.queue.filter(m=>!m.done)}read(u,c,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,y=arguments.length>5?arguments[5]:void 0;if(!u.length)return y(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:u,ns:c,fcName:s,tried:d,wait:h,callback:y});return}this.readingCalls++;const S=(g,T)=>{if(this.readingCalls--,this.waitingReads.length>0){const w=this.waitingReads.shift();this.read(w.lng,w.ns,w.fcName,w.tried,w.wait,w.callback)}if(g&&T&&d<this.maxRetries){setTimeout(()=>{this.read.call(this,u,c,s,d+1,h*2,y)},h);return}y(g,T)},m=this.backend[s].bind(this.backend);if(m.length===2){try{const g=m(u,c);g&&typeof g.then=="function"?g.then(T=>S(null,T)).catch(S):S(null,g)}catch(g){S(g)}return}return m(u,c,S)}prepareLoading(u,c){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();lt(u)&&(u=this.languageUtils.toResolveHierarchy(u)),lt(c)&&(c=[c]);const h=this.queueLoad(u,c,s,d);if(!h.toLoad.length)return h.pending.length||d(),null;h.toLoad.forEach(y=>{this.loadOne(y)})}load(u,c,s){this.prepareLoading(u,c,{},s)}reload(u,c,s){this.prepareLoading(u,c,{reload:!0},s)}loadOne(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=u.split("|"),d=s[0],h=s[1];this.read(d,h,"read",void 0,void 0,(y,S)=>{y&&this.logger.warn(`${c}loading namespace ${h} for language ${d} failed`,y),!y&&S&&this.logger.log(`${c}loaded namespace ${h} for language ${d}`,S),this.loaded(u,y,S)})}saveMissing(u,c,s,d,h){var m,g,T,w,z;let y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},S=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((g=(m=this.services)==null?void 0:m.utils)!=null&&g.hasLoadedNamespace&&!((w=(T=this.services)==null?void 0:T.utils)!=null&&w.hasLoadedNamespace(c))){this.logger.warn(`did not save key "${s}" as the namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if((z=this.backend)!=null&&z.create){const G={...y,isUpdate:h},L=this.backend.create.bind(this.backend);if(L.length<6)try{let X;L.length===5?X=L(u,c,s,d,G):X=L(u,c,s,d),X&&typeof X.then=="function"?X.then(Z=>S(null,Z)).catch(S):S(null,X)}catch(X){S(X)}else L(u,c,s,d,S,G)}!u||!u[0]||this.store.addResource(u[0],c,s,d)}}}const Zd=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:f=>{let u={};if(typeof f[1]=="object"&&(u=f[1]),lt(f[1])&&(u.defaultValue=f[1]),lt(f[2])&&(u.tDescription=f[2]),typeof f[2]=="object"||typeof f[3]=="object"){const c=f[3]||f[2];Object.keys(c).forEach(s=>{u[s]=c[s]})}return u},interpolation:{escapeValue:!0,format:f=>f,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Kd=f=>{var u,c;return lt(f.ns)&&(f.ns=[f.ns]),lt(f.fallbackLng)&&(f.fallbackLng=[f.fallbackLng]),lt(f.fallbackNS)&&(f.fallbackNS=[f.fallbackNS]),((c=(u=f.supportedLngs)==null?void 0:u.indexOf)==null?void 0:c.call(u,"cimode"))<0&&(f.supportedLngs=f.supportedLngs.concat(["cimode"])),typeof f.initImmediate=="boolean"&&(f.initAsync=f.initImmediate),f},Zi=()=>{},Tm=f=>{Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach(c=>{typeof f[c]=="function"&&(f[c]=f[c].bind(f))})};class _n extends Wi{constructor(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Kd(u),this.services={},this.logger=Ue,this.modules={external:[]},Tm(this),c&&!this.isInitialized&&!u.isClone){if(!this.options.initAsync)return this.init(u,c),this;setTimeout(()=>{this.init(u,c)},0)}}init(){var u=this;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof c=="function"&&(s=c,c={}),c.defaultNS==null&&c.ns&&(lt(c.ns)?c.defaultNS=c.ns:c.ns.indexOf("translation")<0&&(c.defaultNS=c.ns[0]));const d=Zd();this.options={...d,...this.options,...Kd(c)},this.options.interpolation={...d.interpolation,...this.options.interpolation},c.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=c.keySeparator),c.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=c.nsSeparator);const h=T=>T?typeof T=="function"?new T:T:null;if(!this.options.isClone){this.modules.logger?Ue.init(h(this.modules.logger),this.options):Ue.init(null,this.options);let T;this.modules.formatter?T=this.modules.formatter:T=vm;const w=new Gd(this.options);this.store=new Bd(this.options.resources,this.options);const z=this.services;z.logger=Ue,z.resourceStore=this.store,z.languageUtils=w,z.pluralResolver=new mm(w,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),T&&(!this.options.interpolation.format||this.options.interpolation.format===d.interpolation.format)&&(z.formatter=h(T),z.formatter.init(z,this.options),this.options.interpolation.format=z.formatter.format.bind(z.formatter)),z.interpolator=new ym(this.options),z.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},z.backendConnector=new Sm(h(this.modules.backend),z.resourceStore,z,this.options),z.backendConnector.on("*",function(G){for(var L=arguments.length,X=new Array(L>1?L-1:0),Z=1;Z<L;Z++)X[Z-1]=arguments[Z];u.emit(G,...X)}),this.modules.languageDetector&&(z.languageDetector=h(this.modules.languageDetector),z.languageDetector.init&&z.languageDetector.init(z,this.options.detection,this.options)),this.modules.i18nFormat&&(z.i18nFormat=h(this.modules.i18nFormat),z.i18nFormat.init&&z.i18nFormat.init(this)),this.translator=new Fi(this.services,this.options),this.translator.on("*",function(G){for(var L=arguments.length,X=new Array(L>1?L-1:0),Z=1;Z<L;Z++)X[Z-1]=arguments[Z];u.emit(G,...X)}),this.modules.external.forEach(G=>{G.init&&G.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Zi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const T=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);T.length>0&&T[0]!=="dev"&&(this.options.lng=T[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(T=>{this[T]=function(){return u.store[T](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(T=>{this[T]=function(){return u.store[T](...arguments),u}});const m=zn(),g=()=>{const T=(w,z)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),m.resolve(z),s(w,z)};if(this.languages&&!this.isInitialized)return T(null,this.t.bind(this));this.changeLanguage(this.options.lng,T)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),m}loadResources(u){var h,y;let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zi;const d=lt(u)?u:this.language;if(typeof u=="function"&&(s=u),!this.options.resources||this.options.partialBundledLanguages){if((d==null?void 0:d.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const S=[],m=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(w=>{w!=="cimode"&&S.indexOf(w)<0&&S.push(w)})};d?m(d):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(T=>m(T)),(y=(h=this.options.preload)==null?void 0:h.forEach)==null||y.call(h,g=>m(g)),this.services.backendConnector.load(S,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(g)})}else s(null)}reloadResources(u,c,s){const d=zn();return typeof u=="function"&&(s=u,u=void 0),typeof c=="function"&&(s=c,c=void 0),u||(u=this.languages),c||(c=this.options.ns),s||(s=Zi),this.services.backendConnector.reload(u,c,h=>{d.resolve(),s(h)}),d}use(u){if(!u)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!u.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return u.type==="backend"&&(this.modules.backend=u),(u.type==="logger"||u.log&&u.warn&&u.error)&&(this.modules.logger=u),u.type==="languageDetector"&&(this.modules.languageDetector=u),u.type==="i18nFormat"&&(this.modules.i18nFormat=u),u.type==="postProcessor"&&Wd.addPostProcessor(u),u.type==="formatter"&&(this.modules.formatter=u),u.type==="3rdParty"&&this.modules.external.push(u),this}setResolvedLanguage(u){if(!(!u||!this.languages)&&!(["cimode","dev"].indexOf(u)>-1)){for(let c=0;c<this.languages.length;c++){const s=this.languages[c];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}!this.resolvedLanguage&&this.languages.indexOf(u)<0&&this.store.hasLanguageSomeTranslations(u)&&(this.resolvedLanguage=u,this.languages.unshift(u))}}changeLanguage(u,c){var s=this;this.isLanguageChangingTo=u;const d=zn();this.emit("languageChanging",u);const h=m=>{this.language=m,this.languages=this.services.languageUtils.toResolveHierarchy(m),this.resolvedLanguage=void 0,this.setResolvedLanguage(m)},y=(m,g)=>{g?this.isLanguageChangingTo===u&&(h(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,d.resolve(function(){return s.t(...arguments)}),c&&c(m,function(){return s.t(...arguments)})},S=m=>{var w,z;!u&&!m&&this.services.languageDetector&&(m=[]);const g=lt(m)?m:m&&m[0],T=this.store.hasLanguageSomeTranslations(g)?g:this.services.languageUtils.getBestMatchFromCodes(lt(m)?[m]:m);T&&(this.language||h(T),this.translator.language||this.translator.changeLanguage(T),(z=(w=this.services.languageDetector)==null?void 0:w.cacheUserLanguage)==null||z.call(w,T)),this.loadResources(T,G=>{y(G,T)})};return!u&&this.services.languageDetector&&!this.services.languageDetector.async?S(this.services.languageDetector.detect()):!u&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(S):this.services.languageDetector.detect(S):S(u),d}getFixedT(u,c,s){var d=this;const h=function(y,S){let m;if(typeof S!="object"){for(var g=arguments.length,T=new Array(g>2?g-2:0),w=2;w<g;w++)T[w-2]=arguments[w];m=d.options.overloadTranslationOptionHandler([y,S].concat(T))}else m={...S};m.lng=m.lng||h.lng,m.lngs=m.lngs||h.lngs,m.ns=m.ns||h.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||s||h.keyPrefix);const z=d.options.keySeparator||".";let G;return m.keyPrefix&&Array.isArray(y)?G=y.map(L=>`${m.keyPrefix}${z}${L}`):G=m.keyPrefix?`${m.keyPrefix}${z}${y}`:y,d.t(G,m)};return lt(u)?h.lng=u:h.lngs=u,h.ns=c,h.keyPrefix=s,h}t(){var d;for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return(d=this.translator)==null?void 0:d.translate(...c)}exists(){var d;for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return(d=this.translator)==null?void 0:d.exists(...c)}setDefaultNamespace(u){this.options.defaultNS=u}hasLoadedNamespace(u){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=c.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,h=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const y=(S,m)=>{const g=this.services.backendConnector.state[`${S}|${m}`];return g===-1||g===0||g===2};if(c.precheck){const S=c.precheck(this,y);if(S!==void 0)return S}return!!(this.hasResourceBundle(s,u)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||y(s,u)&&(!d||y(h,u)))}loadNamespaces(u,c){const s=zn();return this.options.ns?(lt(u)&&(u=[u]),u.forEach(d=>{this.options.ns.indexOf(d)<0&&this.options.ns.push(d)}),this.loadResources(d=>{s.resolve(),c&&c(d)}),s):(c&&c(),Promise.resolve())}loadLanguages(u,c){const s=zn();lt(u)&&(u=[u]);const d=this.options.preload||[],h=u.filter(y=>d.indexOf(y)<0&&this.services.languageUtils.isSupportedCode(y));return h.length?(this.options.preload=d.concat(h),this.loadResources(y=>{s.resolve(),c&&c(y)}),s):(c&&c(),Promise.resolve())}dir(u){var d,h;if(u||(u=this.resolvedLanguage||(((d=this.languages)==null?void 0:d.length)>0?this.languages[0]:this.language)),!u)return"rtl";const c=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=((h=this.services)==null?void 0:h.languageUtils)||new Gd(Zd());return c.indexOf(s.getLanguagePartFromCode(u))>-1||u.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return new _n(u,c)}cloneInstance(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zi;const s=u.forkResourceStore;s&&delete u.forkResourceStore;const d={...this.options,...u,isClone:!0},h=new _n(d);if((u.debug!==void 0||u.prefix!==void 0)&&(h.logger=h.logger.clone(u)),["store","services","language"].forEach(S=>{h[S]=this[S]}),h.services={...this.services},h.services.utils={hasLoadedNamespace:h.hasLoadedNamespace.bind(h)},s){const S=Object.keys(this.store.data).reduce((m,g)=>(m[g]={...this.store.data[g]},m[g]=Object.keys(m[g]).reduce((T,w)=>(T[w]={...m[g][w]},T),m[g]),m),{});h.store=new Bd(S,d),h.services.resourceStore=h.store}return h.translator=new Fi(h.services,d),h.translator.on("*",function(S){for(var m=arguments.length,g=new Array(m>1?m-1:0),T=1;T<m;T++)g[T-1]=arguments[T];h.emit(S,...g)}),h.init(d,c),h.translator.options=d,h.translator.backendConnector.services.utils={hasLoadedNamespace:h.hasLoadedNamespace.bind(h)},h}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Pt=_n.createInstance();Pt.createInstance=_n.createInstance;Pt.createInstance;Pt.dir;Pt.init;Pt.loadResources;Pt.reloadResources;Pt.use;Pt.changeLanguage;Pt.getFixedT;Pt.t;Pt.exists;Pt.setDefaultNamespace;Pt.hasLoadedNamespace;Pt.loadNamespaces;Pt.loadLanguages;const Em={en:{translation:{sectionFeatured:"Featured news",sectionEuroTip:"Euro Tip",sectionHrTip:"HR Tip",sectionTrainings:"Trainings",sectionSectorNews:"Sector News",sectionOtherNews:"Other News",pre_header_copy:"Discover the latest key legal HR news",view_online_copy:"View online",tagline:"Stay ahead with the latest in HR law",img_link:"https://www.securex.be/en/lex4you/employer",contact_link:"https://www.securex.be/en/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/en/website-disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Unsubscribe or change preferences",alt:"Click image to read article",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"HR & Legal trainings",th_training:"Training",th_day_time:"Day - Time",th_format:"Format",th_price_ex_vat:"Price ex&nbsp;VAT from",section_cta_url:"https://www.securex.be/en/training-courses",section_cta_copy:"Discover all our trainings",sectorNewsHeader:"News from the sectors",otherNewsHeader:"Other news"}},nl:{translation:{sectionFeatured:"Uitgelicht nieuws",sectionEuroTip:"€ Tip",sectionHrTip:"HR Tip",sectionTrainings:"Opleidingen",sectionSectorNews:"Sectornieuws",sectionOtherNews:"Overig nieuws",pre_header_copy:"Ontdek de belangrijkste legal HR-actualiteit",view_online_copy:"Bekijk online",tagline:"Meteen mee met het juridisch HR-nieuws",img_link:"https://www.securex.be/nl/lex4you/werkgever",contact_link:"https://www.securex.be/nl/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/nl/lex4you/disclaimer",disclaimer_copy:"Disclaimer",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Uitschrijven of voorkeuren wijzigen",alt:"Klik op de afbeelding om het artikel te lezen",euroTipPreHeader:"€ Tip",HRTipPreHeader:"HR Tip",section_header:"Opleidingen HR & Legal",th_training:"Opleiding",th_day_time:"Dag - Tijdstip",th_format:"Format",th_price_ex_vat:"Prijs ex.&nbsp;btw vanaf",section_cta_url:"https://www.securex.be/nl/opleidingen",section_cta_copy:"Ontdek al onze opleidingen",sectorNewsHeader:"Nieuws uit de sectoren",otherNewsHeader:"Meer nieuws"}},fr:{translation:{sectionFeatured:"Principales actualités",sectionEuroTip:"Conseil €",sectionHrTip:"Conseil RH",sectionTrainings:"Formations",sectionSectorNews:"Actualités des secteurs",sectionOtherNews:"Autres actualités",pre_header_copy:"Découvrez les principales nouveautés juridiques RH",view_online_copy:"Voir en ligne",tagline:"Pour être au courant des actualités juridiques RH",img_link:"https://www.securex.be/fr/lex4you/employeur",contact_link:"https://www.securex.be/fr/contact",contact_copy:"Contact",disclaimer_link:"https://www.securex.be/fr/lex4you/disclaimer",disclaimer_copy:"Mentions légales",preferences_link:"{EmailPreferenceCenter_1063}",preferences_copy:"Se désinscrire ou modifier vos préférences",alt:"Cliquez sur l'image pour lire l'article",euroTipPreHeader:"Conseil €",HRTipPreHeader:"Conseil RH",section_header:"Formations RH & Juridiques",th_training:"Formation",th_day_time:"Jour - Heure",th_format:"Format",th_price_ex_vat:"Prix HTVA à&nbsp;partir de",section_cta_url:"https://www.securex.be/fr/formations",section_cta_copy:"Découvrez toutes nos formations",sectorNewsHeader:"Actualités des secteurs",otherNewsHeader:"Autres actualités"}},de:{translation:{sectionFeatured:"Ausgewählte Nachrichten",sectionEuroTip:"€ Tipp",sectionHrTip:"HR Tipp",sectionTrainings:"Schulungen",sectionSectorNews:"Branchen-News",sectionOtherNews:"Sonstige Nachrichten",pre_header_copy:"Entdecken Sie die wichtigsten HR-Rechtsnachrichten",view_online_copy:"Online ansehen",tagline:"Ihre neuesten juristischen HR-Updates",img_link:"https://www.securex.be/de/lex4you/arbeitgeber",contact_link:"https://www.securex.be/de/kontakt",contact_copy:"Kontakt",disclaimer_link:"https://www.securex.be/de/lex4you/disclaimer-sss",disclaimer_copy:"Haftungsausschluss",preferences_link:"{EmailPreferenceCenter_967}",preferences_copy:"Abmelden oder Präferenzen ändern",alt:"Klicken Sie auf das Bild, um den Artikel zu lesen",euroTipPreHeader:"€ Tipp",HRTipPreHeader:"HR Tipp",section_header:"Schulungen",th_training:"Schulung",th_day_time:"Tag - Zeit",th_format:"Format",th_price_ex_vat:"Preis o. MwSt. ab",section_cta_url:"https://www.securex.be/de/schulungen",section_cta_copy:"Entdecken Sie alle unsere Schulungen",sectorNewsHeader:"Nachrichten aus den Branchen",otherNewsHeader:"Mehr Nachrichten"}}};Pt.use(Gp).init({resources:Em,lng:"nl",interpolation:{escapeValue:!1}});function Om(f,u="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png",c="Discover the latest key legal HR news",s="View online",d="https://www.securex.be/en/lex4you/employer",h="DD month YYYY",y="Stay ahead with the latest in HR law",S="https://www.securex.be/en/contact",m="Contact",g="https://www.securex.be/en/website-disclaimer",T="Disclaimer",w="{EmailPreferenceCenter_967}",z="Unsubscribe or change preferences"){return`
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

    ${f}

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
                                    href="${S}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${m}</a
                                  >
                                  -
                                </span>
                                <span
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${g}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${T}</a
                                  >
                                  -
                                </span>
                                <a
                                  href="{{${w}}}"
                                  rel="nofollow,noreferrer"
                                  style="text-decoration: none; color: #555555"
                                  ><span
                                    style="
                                      color: #666666;
                                      text-decoration: none;
                                    "
                                    >${z}</span
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
`}function Am(f="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",s="CTA",d="Click image to read article",h="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                              <a href="${f}" style="display: block">
                                <img
                                  alt="${d}"
                                  border="0"
                                  src="${h}"
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
                                          href="${f}"
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
  `}function Nm(f="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",s="CTA",d="Click image to read article",h="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                                          href="${f}"
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
                              <a href="${f}" style="display: block; text-align: right;">
                                <img
                                  alt="${d}"
                                  border="0"
                                  src="${h}"
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
  `}function zm(f="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",s="CTA",d="€ Tip"){return`
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
                ${d} |&nbsp;${u}
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
                                          href="${f}"
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
`}function Rm(f="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",s="CTA",d="HR Tip"){return`
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
                ${d} |&nbsp;${u}
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
                                          href="${f}"
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
`}function _m(f="https://www.securex.be/en/lex4you/employer",u="Lorem ipsum dolor",c="1 jan. 2025",s="9:00 - 12:00",d="Online",h="400",y="HR &amp; Legal trainings (in Dutch &amp; French)",S="Training",m="Day - Time",g="Format",T="Price ex VAT",w="https://www.securex.be/en/training-courses",z="Discover all our trainings"){return`
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
                                        ${y}
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
              ${S}
            </th>
            <th
              pardot-data=""
              pardot-region=""
              style="background: rgb(77, 22, 86)"
            >
              ${m}
            </th>
            <th pardot-region="">${g}</th>
            <th pardot-region="">${T}</th>
          </tr>
          <tr pardot-repeatable="" style="">
            <td colspan="2" pardot-region="">
              <a
                href="${f}"
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
                        href="${w}"
                        style="text-decoration: none; color: #ffffff"
                        >${z}</a
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
`}function Dm(f){return`
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
                    <td class="no-padding" width="70%">${f}</td>
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

  `}function wm(f,u="News from the sectors"){return`
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
                                ${u}
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
                              ${f}
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
`}function Mm(f="https://www.securex.be/en/lex4you/employer",u="JC 123.456 | Sector name",c="Article title: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${f}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${u}</b><br />
                                    ${c}</a
                                  >
                                </li>
`}function Um(f,u="Other news"){return`
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
                                ${u}
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
                              ${f}
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
`}function Hm(f="https://www.securex.be/en/lex4you/employer",u="Article title: lorem ipsum dolor sit amet",c="Article subtitle: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${f}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${u}</b><br />
                                    ${c}</a
                                  >
                                </li>
`}function Cm(){const[f,u]=Yt.useState(()=>Md.map(K=>({id:Nn(),...K,fieldsets:K.fieldsets.map(q=>({id:Nn(),...q}))}))),[c,s]=Yt.useState(""),[d,h]=Yt.useState(""),[y,S]=Yt.useState(!1),{i18n:m}=Ki(),[g,T]=Yt.useState({}),w=(K,q)=>{T(nt=>({...nt,[K]:q}))},z=K=>g[K]||Md.map(q=>({id:Nn(),...q,fieldsets:q.fieldsets.map(nt=>({id:Nn(),...nt}))}));Yt.useEffect(()=>{const K=m.language,q=z(K);u(q)},[m.language]),Yt.useEffect(()=>{const K=m.language;return()=>{w(K,f)}},[f]);const G=K=>({id:Nn(),url:"#",title:"Lorem ipsum dolor",...K==="complex"&&{summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"CTA"},...K==="training"&&{date:"1 jan. 2025",time:"9:00 - 12:00",format:"On-Site in Brussels",price:"400"},...K==="simple"&&{subtitle:"Lorem ipsum dolor sit amet"}}),L=K=>{u(q=>q.map(nt=>{if(nt.id===K){const et=G(nt.fieldsetType);return{...nt,fieldsets:[...nt.fieldsets,et]}}return nt}))},X=K=>{u(q=>q.map(nt=>{const et=nt.fieldsets.filter(P=>P.id!==K);return{...nt,fieldsets:et}}))},Z=(K,q,nt)=>{u(et=>et.map(P=>{const pt=P.fieldsets.map(bt=>bt.id===K?typeof q=="string"?{...bt,[q]:nt}:{...bt,...q}:bt);return{...P,fieldsets:pt}}))},{t:I}=Ki(),ft=Yt.useMemo(()=>{const K=(q,nt=!1)=>{let et="";for(const j of q)if(j.title==="Featured News")for(let k=0;k<j.fieldsets.length;k++)(k+1)%2!=0?et+=Am(j.fieldsets[k].url,j.fieldsets[k].title,j.fieldsets[k].summary,j.fieldsets[k].cta,I("alt"),nt?"./Securex_New_Lex4You.jpg":void 0):et+=Nm(j.fieldsets[k].url,j.fieldsets[k].title,j.fieldsets[k].summary,j.fieldsets[k].cta,I("alt"),nt?"./Securex_New_Lex4You.jpg":void 0);for(const j of q)if(j.title==="Euro Tip")for(let k=0;k<j.fieldsets.length;k++)et+=zm(j.fieldsets[k].url,j.fieldsets[k].title,j.fieldsets[k].summary,j.fieldsets[k].cta,I("euroTipPreHeader"));for(const j of q)if(j.title==="HR Tip")for(let k=0;k<j.fieldsets.length;k++)et+=Rm(j.fieldsets[k].url,j.fieldsets[k].title,j.fieldsets[k].summary,j.fieldsets[k].cta,I("HRTipPreHeader"));for(const j of q)if(j.title==="Trainings")for(let k=0;k<j.fieldsets.length;k++)et+=_m(j.fieldsets[k].url,j.fieldsets[k].title,j.fieldsets[k].date,j.fieldsets[k].time,j.fieldsets[k].format,j.fieldsets[k].price,I("section_header"),I("th_training"),I("th_day_time"),I("th_format"),I("th_price_ex_vat"),I("section_cta_url"),I("section_cta_copy"));let P="",pt="",bt="";for(const j of q){if(j.title==="Sector News"){let k="";for(let xt=0;xt<j.fieldsets.length;xt++)k+=Mm(j.fieldsets[xt].url,j.fieldsets[xt].title,j.fieldsets[xt].subtitle);pt+=wm(k,I("sectorNewsHeader"))}if(j.title==="Other News"){let k="";for(let xt=0;xt<j.fieldsets.length;xt++)k+=Hm(j.fieldsets[xt].url,j.fieldsets[xt].title,j.fieldsets[xt].subtitle);bt+=Um(k,I("otherNewsHeader"))}}return P=pt+bt,et+=`${Dm(P)}`,`${Om(et,nt?"./Securex_Lex4You_logo.png":void 0,I("pre_header_copy"),I("view_online_copy"),I("img_link"),new Date().toLocaleDateString(m.language,{day:"numeric",month:"long",year:"numeric"}),I("tagline"),I("contact_link"),I("contact_copy"),I("disclaimer_link"),I("disclaimer_copy"),I("preferences_link"),I("preferences_copy"))}`};return{forPreview:K(f,!0),forCopy:K(f,!1)}},[f]),dt=()=>{d?navigator.clipboard.writeText(d).then(()=>{S(!0),setTimeout(()=>S(!1),2e3),console.log("HTML copied to clipboard!")}).catch(K=>{console.error("Failed to copy HTML: ",K)}):console.warn("No HTML content to copy.")};return Yt.useEffect(()=>{s(ft.forPreview),h(ft.forCopy)},[ft]),V.jsxs(V.Fragment,{children:[V.jsx(Kp,{title:"FlasHR",subtitle:"composer"}),V.jsxs("div",{className:"grid",children:[V.jsx(Ip,{sections:f,onAddFieldset:L,onRemove:X,onFieldChange:Z}),V.jsx(tm,{html:c,onCopy:dt,isCopied:y})]})]})}_p.createRoot(document.getElementById("root")).render(V.jsxs(Yt.StrictMode,{children:[V.jsx("main",{className:"max-w-6xl mx-auto px-6 py-6",children:V.jsx(Cm,{})}),V.jsx("script",{type:"module",src:"./node_modules/flyonui/flyonui.js"})]}));
