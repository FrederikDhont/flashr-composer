(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))d(M);new MutationObserver(M=>{for(const Q of M)if(Q.type==="childList")for(const lt of Q.addedNodes)lt.tagName==="LINK"&&lt.rel==="modulepreload"&&d(lt)}).observe(document,{childList:!0,subtree:!0});function U(M){const Q={};return M.integrity&&(Q.integrity=M.integrity),M.referrerPolicy&&(Q.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?Q.credentials="include":M.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function d(M){if(M.ep)return;M.ep=!0;const Q=U(M);fetch(M.href,Q)}})();var Wc={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr;function Rh(){if(Pr)return pu;Pr=1;var p=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function U(d,M,Q){var lt=null;if(Q!==void 0&&(lt=""+Q),M.key!==void 0&&(lt=""+M.key),"key"in M){Q={};for(var I in M)I!=="key"&&(Q[I]=M[I])}else Q=M;return M=Q.ref,{$$typeof:p,type:d,key:lt,ref:M!==void 0?M:null,props:Q}}return pu.Fragment=z,pu.jsx=U,pu.jsxs=U,pu}var td;function Hh(){return td||(td=1,Wc.exports=Rh()),Wc.exports}var R=Hh(),Fc={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Bh(){if(ld)return Z;ld=1;var p=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),nt=Symbol.iterator;function at(o){return o===null||typeof o!="object"?null:(o=nt&&o[nt]||o["@@iterator"],typeof o=="function"?o:null)}var Bt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,ht={};function ut(o,E,D){this.props=o,this.context=E,this.refs=ht,this.updater=D||Bt}ut.prototype.isReactComponent={},ut.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},ut.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function xt(){}xt.prototype=ut.prototype;function qt(o,E,D){this.props=o,this.context=E,this.refs=ht,this.updater=D||Bt}var Tt=qt.prototype=new xt;Tt.constructor=qt,W(Tt,ut.prototype),Tt.isPureReactComponent=!0;var _t=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function Y(o,E,D,A,C,P){return D=P.ref,{$$typeof:p,type:o,key:E,ref:D!==void 0?D:null,props:P}}function yt(o,E){return Y(o.type,E,void 0,void 0,void 0,o.props)}function vl(o){return typeof o=="object"&&o!==null&&o.$$typeof===p}function Be(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(D){return E[D]})}var Ol=/\/+/g;function wt(o,E){return typeof o=="object"&&o!==null&&o.key!=null?Be(""+o.key):E.toString(36)}function he(){}function me(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(he,he):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function Xt(o,E,D,A,C){var P=typeof o;(P==="undefined"||P==="boolean")&&(o=null);var L=!1;if(o===null)L=!0;else switch(P){case"bigint":case"string":case"number":L=!0;break;case"object":switch(o.$$typeof){case p:case z:L=!0;break;case B:return L=o._init,Xt(L(o._payload),E,D,A,C)}}if(L)return C=C(o),L=A===""?"."+wt(o,0):A,_t(C)?(D="",L!=null&&(D=L.replace(Ol,"$&/")+"/"),Xt(C,E,D,"",function(Ql){return Ql})):C!=null&&(vl(C)&&(C=yt(C,D+(C.key==null||o&&o.key===C.key?"":(""+C.key).replace(Ol,"$&/")+"/")+L)),E.push(C)),1;L=0;var Ft=A===""?".":A+":";if(_t(o))for(var gt=0;gt<o.length;gt++)A=o[gt],P=Ft+wt(A,gt),L+=Xt(A,E,D,P,C);else if(gt=at(o),typeof gt=="function")for(o=gt.call(o),gt=0;!(A=o.next()).done;)A=A.value,P=Ft+wt(A,gt++),L+=Xt(A,E,D,P,C);else if(P==="object"){if(typeof o.then=="function")return Xt(me(o),E,D,A,C);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return L}function v(o,E,D){if(o==null)return o;var A=[],C=0;return Xt(o,A,"","",function(P){return E.call(D,P,C++)}),A}function O(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(D){(o._status===0||o._status===-1)&&(o._status=1,o._result=D)},function(D){(o._status===0||o._status===-1)&&(o._status=2,o._result=D)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var w=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)};function rt(){}return Z.Children={map:v,forEach:function(o,E,D){v(o,function(){E.apply(this,arguments)},D)},count:function(o){var E=0;return v(o,function(){E++}),E},toArray:function(o){return v(o,function(E){return E})||[]},only:function(o){if(!vl(o))throw Error("React.Children.only expected to receive a single React element child.");return o}},Z.Component=ut,Z.Fragment=U,Z.Profiler=M,Z.PureComponent=qt,Z.StrictMode=d,Z.Suspense=N,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Z.__COMPILER_RUNTIME={__proto__:null,c:function(o){return F.H.useMemoCache(o)}},Z.cache=function(o){return function(){return o.apply(null,arguments)}},Z.cloneElement=function(o,E,D){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var A=W({},o.props),C=o.key,P=void 0;if(E!=null)for(L in E.ref!==void 0&&(P=void 0),E.key!==void 0&&(C=""+E.key),E)!H.call(E,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&E.ref===void 0||(A[L]=E[L]);var L=arguments.length-2;if(L===1)A.children=D;else if(1<L){for(var Ft=Array(L),gt=0;gt<L;gt++)Ft[gt]=arguments[gt+2];A.children=Ft}return Y(o.type,C,void 0,void 0,P,A)},Z.createContext=function(o){return o={$$typeof:lt,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:Q,_context:o},o},Z.createElement=function(o,E,D){var A,C={},P=null;if(E!=null)for(A in E.key!==void 0&&(P=""+E.key),E)H.call(E,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(C[A]=E[A]);var L=arguments.length-2;if(L===1)C.children=D;else if(1<L){for(var Ft=Array(L),gt=0;gt<L;gt++)Ft[gt]=arguments[gt+2];C.children=Ft}if(o&&o.defaultProps)for(A in L=o.defaultProps,L)C[A]===void 0&&(C[A]=L[A]);return Y(o,P,void 0,void 0,null,C)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(o){return{$$typeof:I,render:o}},Z.isValidElement=vl,Z.lazy=function(o){return{$$typeof:B,_payload:{_status:-1,_result:o},_init:O}},Z.memo=function(o,E){return{$$typeof:T,type:o,compare:E===void 0?null:E}},Z.startTransition=function(o){var E=F.T,D={};F.T=D;try{var A=o(),C=F.S;C!==null&&C(D,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(rt,w)}catch(P){w(P)}finally{F.T=E}},Z.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Z.use=function(o){return F.H.use(o)},Z.useActionState=function(o,E,D){return F.H.useActionState(o,E,D)},Z.useCallback=function(o,E){return F.H.useCallback(o,E)},Z.useContext=function(o){return F.H.useContext(o)},Z.useDebugValue=function(){},Z.useDeferredValue=function(o,E){return F.H.useDeferredValue(o,E)},Z.useEffect=function(o,E,D){var A=F.H;if(typeof D=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return A.useEffect(o,E)},Z.useId=function(){return F.H.useId()},Z.useImperativeHandle=function(o,E,D){return F.H.useImperativeHandle(o,E,D)},Z.useInsertionEffect=function(o,E){return F.H.useInsertionEffect(o,E)},Z.useLayoutEffect=function(o,E){return F.H.useLayoutEffect(o,E)},Z.useMemo=function(o,E){return F.H.useMemo(o,E)},Z.useOptimistic=function(o,E){return F.H.useOptimistic(o,E)},Z.useReducer=function(o,E,D){return F.H.useReducer(o,E,D)},Z.useRef=function(o){return F.H.useRef(o)},Z.useState=function(o){return F.H.useState(o)},Z.useSyncExternalStore=function(o,E,D){return F.H.useSyncExternalStore(o,E,D)},Z.useTransition=function(){return F.H.useTransition()},Z.version="19.1.0",Z}var ed;function uf(){return ed||(ed=1,Fc.exports=Bh()),Fc.exports}var He=uf(),Ic={exports:{}},bu={},Pc={exports:{}},tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function qh(){return ad||(ad=1,function(p){function z(v,O){var w=v.length;v.push(O);t:for(;0<w;){var rt=w-1>>>1,o=v[rt];if(0<M(o,O))v[rt]=O,v[w]=o,w=rt;else break t}}function U(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var O=v[0],w=v.pop();if(w!==O){v[0]=w;t:for(var rt=0,o=v.length,E=o>>>1;rt<E;){var D=2*(rt+1)-1,A=v[D],C=D+1,P=v[C];if(0>M(A,w))C<o&&0>M(P,A)?(v[rt]=P,v[C]=w,rt=C):(v[rt]=A,v[D]=w,rt=D);else if(C<o&&0>M(P,w))v[rt]=P,v[C]=w,rt=C;else break t}}return O}function M(v,O){var w=v.sortIndex-O.sortIndex;return w!==0?w:v.id-O.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;p.unstable_now=function(){return Q.now()}}else{var lt=Date,I=lt.now();p.unstable_now=function(){return lt.now()-I}}var N=[],T=[],B=1,nt=null,at=3,Bt=!1,W=!1,ht=!1,ut=!1,xt=typeof setTimeout=="function"?setTimeout:null,qt=typeof clearTimeout=="function"?clearTimeout:null,Tt=typeof setImmediate<"u"?setImmediate:null;function _t(v){for(var O=U(T);O!==null;){if(O.callback===null)d(T);else if(O.startTime<=v)d(T),O.sortIndex=O.expirationTime,z(N,O);else break;O=U(T)}}function F(v){if(ht=!1,_t(v),!W)if(U(N)!==null)W=!0,H||(H=!0,wt());else{var O=U(T);O!==null&&Xt(F,O.startTime-v)}}var H=!1,Y=-1,yt=5,vl=-1;function Be(){return ut?!0:!(p.unstable_now()-vl<yt)}function Ol(){if(ut=!1,H){var v=p.unstable_now();vl=v;var O=!0;try{t:{W=!1,ht&&(ht=!1,qt(Y),Y=-1),Bt=!0;var w=at;try{l:{for(_t(v),nt=U(N);nt!==null&&!(nt.expirationTime>v&&Be());){var rt=nt.callback;if(typeof rt=="function"){nt.callback=null,at=nt.priorityLevel;var o=rt(nt.expirationTime<=v);if(v=p.unstable_now(),typeof o=="function"){nt.callback=o,_t(v),O=!0;break l}nt===U(N)&&d(N),_t(v)}else d(N);nt=U(N)}if(nt!==null)O=!0;else{var E=U(T);E!==null&&Xt(F,E.startTime-v),O=!1}}break t}finally{nt=null,at=w,Bt=!1}O=void 0}}finally{O?wt():H=!1}}}var wt;if(typeof Tt=="function")wt=function(){Tt(Ol)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,me=he.port2;he.port1.onmessage=Ol,wt=function(){me.postMessage(null)}}else wt=function(){xt(Ol,0)};function Xt(v,O){Y=xt(function(){v(p.unstable_now())},O)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(v){v.callback=null},p.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yt=0<v?Math.floor(1e3/v):5},p.unstable_getCurrentPriorityLevel=function(){return at},p.unstable_next=function(v){switch(at){case 1:case 2:case 3:var O=3;break;default:O=at}var w=at;at=O;try{return v()}finally{at=w}},p.unstable_requestPaint=function(){ut=!0},p.unstable_runWithPriority=function(v,O){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var w=at;at=v;try{return O()}finally{at=w}},p.unstable_scheduleCallback=function(v,O,w){var rt=p.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?rt+w:rt):w=rt,v){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=w+o,v={id:B++,callback:O,priorityLevel:v,startTime:w,expirationTime:o,sortIndex:-1},w>rt?(v.sortIndex=w,z(T,v),U(N)===null&&v===U(T)&&(ht?(qt(Y),Y=-1):ht=!0,Xt(F,w-rt))):(v.sortIndex=o,z(N,v),W||Bt||(W=!0,H||(H=!0,wt()))),v},p.unstable_shouldYield=Be,p.unstable_wrapCallback=function(v){var O=at;return function(){var w=at;at=O;try{return v.apply(this,arguments)}finally{at=w}}}}(tf)),tf}var ud;function Yh(){return ud||(ud=1,Pc.exports=qh()),Pc.exports}var lf={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function Ch(){if(nd)return Zt;nd=1;var p=uf();function z(N){var T="https://react.dev/errors/"+N;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)T+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+N+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var d={d:{f:U,r:function(){throw Error(z(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},M=Symbol.for("react.portal");function Q(N,T,B){var nt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:nt==null?null:""+nt,children:N,containerInfo:T,implementation:B}}var lt=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function I(N,T){if(N==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Zt.createPortal=function(N,T){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(z(299));return Q(N,T,null,B)},Zt.flushSync=function(N){var T=lt.T,B=d.p;try{if(lt.T=null,d.p=2,N)return N()}finally{lt.T=T,d.p=B,d.d.f()}},Zt.preconnect=function(N,T){typeof N=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,d.d.C(N,T))},Zt.prefetchDNS=function(N){typeof N=="string"&&d.d.D(N)},Zt.preinit=function(N,T){if(typeof N=="string"&&T&&typeof T.as=="string"){var B=T.as,nt=I(B,T.crossOrigin),at=typeof T.integrity=="string"?T.integrity:void 0,Bt=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;B==="style"?d.d.S(N,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:nt,integrity:at,fetchPriority:Bt}):B==="script"&&d.d.X(N,{crossOrigin:nt,integrity:at,fetchPriority:Bt,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Zt.preinitModule=function(N,T){if(typeof N=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var B=I(T.as,T.crossOrigin);d.d.M(N,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&d.d.M(N)},Zt.preload=function(N,T){if(typeof N=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var B=T.as,nt=I(B,T.crossOrigin);d.d.L(N,B,{crossOrigin:nt,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Zt.preloadModule=function(N,T){if(typeof N=="string")if(T){var B=I(T.as,T.crossOrigin);d.d.m(N,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else d.d.m(N)},Zt.requestFormReset=function(N){d.d.r(N)},Zt.unstable_batchedUpdates=function(N,T){return N(T)},Zt.useFormState=function(N,T,B){return lt.H.useFormState(N,T,B)},Zt.useFormStatus=function(){return lt.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var id;function jh(){if(id)return lf.exports;id=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),lf.exports=Ch(),lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function Gh(){if(cd)return bu;cd=1;var p=Yh(),z=uf(),U=jh();function d(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Q(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function lt(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function I(t){if(Q(t)!==t)throw Error(d(188))}function N(t){var l=t.alternate;if(!l){if(l=Q(t),l===null)throw Error(d(188));return l!==t?null:t}for(var e=t,a=l;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return I(u),t;if(n===a)return I(u),l;n=n.sibling}throw Error(d(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(d(189))}}if(e.alternate!==a)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?t:l}function T(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=T(t),l!==null)return l;t=t.sibling}return null}var B=Object.assign,nt=Symbol.for("react.element"),at=Symbol.for("react.transitional.element"),Bt=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ht=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),qt=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),vl=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),Ol=Symbol.iterator;function wt(t){return t===null||typeof t!="object"?null:(t=Ol&&t[Ol]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case ut:return"Profiler";case ht:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case vl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Bt:return"Portal";case Tt:return(t.displayName||"Context")+".Provider";case qt:return(t._context.displayName||"Context")+".Consumer";case _t:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return l=t.displayName||null,l!==null?l:me(t.type)||"Memo";case yt:l=t._payload,t=t._init;try{return me(t(l))}catch{}}return null}var Xt=Array.isArray,v=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},rt=[],o=-1;function E(t){return{current:t}}function D(t){0>o||(t.current=rt[o],rt[o]=null,o--)}function A(t,l){o++,rt[o]=t.current,t.current=l}var C=E(null),P=E(null),L=E(null),Ft=E(null);function gt(t,l){switch(A(L,l),A(P,t),A(C,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Mr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Mr(l),t=Dr(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(C),A(C,t)}function Ql(){D(C),D(P),D(L)}function qn(t){t.memoizedState!==null&&A(Ft,t);var l=C.current,e=Dr(l,t.type);l!==e&&(A(P,t),A(C,e))}function vu(t){P.current===t&&(D(C),D(P)),Ft.current===t&&(D(Ft),du._currentValue=w)}var Yn=Object.prototype.hasOwnProperty,Cn=p.unstable_scheduleCallback,jn=p.unstable_cancelCallback,sd=p.unstable_shouldYield,rd=p.unstable_requestPaint,Sl=p.unstable_now,dd=p.unstable_getCurrentPriorityLevel,nf=p.unstable_ImmediatePriority,cf=p.unstable_UserBlockingPriority,Su=p.unstable_NormalPriority,hd=p.unstable_LowPriority,ff=p.unstable_IdlePriority,md=p.log,yd=p.unstable_setDisableYieldValue,Sa=null,It=null;function Ll(t){if(typeof md=="function"&&yd(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Sa,t)}catch{}}var Pt=Math.clz32?Math.clz32:bd,gd=Math.log,pd=Math.LN2;function bd(t){return t>>>=0,t===0?32:31-(gd(t)/pd|0)|0}var xu=256,Tu=4194304;function ye(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Eu(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=ye(a):(i&=c,i!==0?u=ye(i):e||(e=c&~t,e!==0&&(u=ye(e))))):(c=a&~n,c!==0?u=ye(c):i!==0?u=ye(i):e||(e=a&~t,e!==0&&(u=ye(e)))),u===0?0:l!==0&&l!==u&&(l&n)===0&&(n=u&-u,e=l&-l,n>=e||n===32&&(e&4194048)!==0)?l:u}function xa(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function vd(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function of(){var t=xu;return xu<<=1,(xu&4194048)===0&&(xu=256),t}function sf(){var t=Tu;return Tu<<=1,(Tu&62914560)===0&&(Tu=4194304),t}function Gn(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Ta(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sd(t,l,e,a,u,n){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(e=i&~e;0<e;){var b=31-Pt(e),x=1<<b;c[b]=0,f[b]=-1;var y=m[b];if(y!==null)for(m[b]=null,b=0;b<y.length;b++){var g=y[b];g!==null&&(g.lane&=-536870913)}e&=~x}a!==0&&rf(t,a,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~l))}function rf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-Pt(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&4194090}function df(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-Pt(e),u=1<<a;u&l|t[a]&l&&(t[a]|=l),e&=~u}}function wn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function hf(){var t=O.p;return t!==0?t:(t=window.event,t===void 0?32:Jr(t.type))}function xd(t,l){var e=O.p;try{return O.p=t,l()}finally{O.p=e}}var Zl=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Zl,Kt="__reactProps$"+Zl,qe="__reactContainer$"+Zl,Qn="__reactEvents$"+Zl,Td="__reactListeners$"+Zl,Ed="__reactHandles$"+Zl,mf="__reactResources$"+Zl,Ea="__reactMarker$"+Zl;function Ln(t){delete t[Qt],delete t[Kt],delete t[Qn],delete t[Td],delete t[Ed]}function Ye(t){var l=t[Qt];if(l)return l;for(var e=t.parentNode;e;){if(l=e[qe]||e[Qt]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=Rr(t);t!==null;){if(e=t[Qt])return e;t=Rr(t)}return l}t=e,e=t.parentNode}return null}function Ce(t){if(t=t[Qt]||t[qe]){var l=t.tag;if(l===5||l===6||l===13||l===26||l===27||l===3)return t}return null}function za(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(d(33))}function je(t){var l=t[mf];return l||(l=t[mf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Nt(t){t[Ea]=!0}var yf=new Set,gf={};function ge(t,l){Ge(t,l),Ge(t+"Capture",l)}function Ge(t,l){for(gf[t]=l,t=0;t<l.length;t++)yf.add(l[t])}var zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pf={},bf={};function Ad(t){return Yn.call(bf,t)?!0:Yn.call(pf,t)?!1:zd.test(t)?bf[t]=!0:(pf[t]=!0,!1)}function zu(t,l,e){if(Ad(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Au(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Ml(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}var Zn,vf;function we(t){if(Zn===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Zn=l&&l[1]||"",vf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zn+t+vf}var Vn=!1;function Kn(t,l){if(!t||Vn)return"";Vn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var y=g}Reflect.construct(t,[],x)}else{try{x.call()}catch(g){y=g}t.call(x.prototype)}}else{try{throw Error()}catch(g){y=g}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&y&&typeof g.stack=="string")return[g.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===m.length)for(a=f.length-1,u=m.length-1;1<=a&&0<=u&&f[a]!==m[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==m[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==m[u]){var b=`
`+f[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=u);break}}}finally{Vn=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?we(e):""}function Od(t){switch(t.tag){case 26:case 27:case 5:return we(t.type);case 16:return we("Lazy");case 13:return we("Suspense");case 19:return we("SuspenseList");case 0:case 15:return Kn(t.type,!1);case 11:return Kn(t.type.render,!1);case 1:return Kn(t.type,!0);case 31:return we("Activity");default:return""}}function Sf(t){try{var l="";do l+=Od(t),t=t.return;while(t);return l}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function cl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Md(t){var l=xf(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,l),a=""+t[l];if(!t.hasOwnProperty(l)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return u.call(this)},set:function(i){a=""+i,n.call(this,i)}}),Object.defineProperty(t,l,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Ou(t){t._valueTracker||(t._valueTracker=Md(t))}function Tf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=xf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dd=/[\n"\\]/g;function fl(t){return t.replace(Dd,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Jn(t,l,e,a,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+cl(l)):t.value!==""+cl(l)&&(t.value=""+cl(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?kn(t,i,cl(l)):e!=null?kn(t,i,cl(e)):a!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+cl(c):t.removeAttribute("name")}function Ef(t,l,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),l!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||l!=null))return;e=e!=null?""+cl(e):"",l=l!=null?""+cl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i)}function kn(t,l,e){l==="number"&&Mu(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Xe(t,l,e,a){if(t=t.options,l){l={};for(var u=0;u<e.length;u++)l["$"+e[u]]=!0;for(e=0;e<t.length;e++)u=l.hasOwnProperty("$"+t[e].value),t[e].selected!==u&&(t[e].selected=u),u&&a&&(t[e].defaultSelected=!0)}else{for(e=""+cl(e),l=null,u=0;u<t.length;u++){if(t[u].value===e){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}l!==null||t[u].disabled||(l=t[u])}l!==null&&(l.selected=!0)}}function zf(t,l,e){if(l!=null&&(l=""+cl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+cl(e):""}function Af(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(d(92));if(Xt(a)){if(1<a.length)throw Error(d(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=cl(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a)}function Qe(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var _d=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Of(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||_d.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function Mf(t,l,e){if(l!=null&&typeof l!="object")throw Error(d(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in l)a=l[u],l.hasOwnProperty(u)&&e[u]!==a&&Of(t,u,a)}else for(var n in l)l.hasOwnProperty(n)&&Of(t,n,l[n])}function $n(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(t){return Ud.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Wn=null;function Fn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Ze=null;function Df(t){var l=Ce(t);if(l&&(t=l.stateNode)){var e=t[Kt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Jn(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+fl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var u=a[Kt]||null;if(!u)throw Error(d(90));Jn(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Tf(a)}break t;case"textarea":zf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&Xe(t,!!e.multiple,l,!1)}}}var In=!1;function _f(t,l,e){if(In)return t(l,e);In=!0;try{var a=t(l);return a}finally{if(In=!1,(Le!==null||Ze!==null)&&(mn(),Le&&(l=Le,t=Ze,Ze=Le=null,Df(l),t)))for(l=0;l<t.length;l++)Df(t[l])}}function Aa(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Kt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(d(231,l,typeof e));return e}var Dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(Dl)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{Pn=!1}var Vl=null,ti=null,_u=null;function Nf(){if(_u)return _u;var t,l=ti,e=l.length,a,u="value"in Vl?Vl.value:Vl.textContent,n=u.length;for(t=0;t<e&&l[t]===u[t];t++);var i=e-t;for(a=1;a<=i&&l[e-a]===u[n-a];a++);return _u=u.slice(t,1<a?1-a:void 0)}function Nu(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Uu(){return!0}function Uf(){return!1}function Jt(t){function l(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Uu:Uf,this.isPropagationStopped=Uf,this}return B(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),l}var pe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Jt(pe),Ma=B({},pe,{view:0,detail:0}),Rd=Jt(Ma),li,ei,Da,Hu=B({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(li=t.screenX-Da.screenX,ei=t.screenY-Da.screenY):ei=li=0,Da=t),li)},movementY:function(t){return"movementY"in t?t.movementY:ei}}),Rf=Jt(Hu),Hd=B({},Hu,{dataTransfer:0}),Bd=Jt(Hd),qd=B({},Ma,{relatedTarget:0}),ai=Jt(qd),Yd=B({},pe,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Jt(Yd),jd=B({},pe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gd=Jt(jd),wd=B({},pe,{data:0}),Hf=Jt(wd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zd(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Ld[t])?!!l[t]:!1}function ui(){return Zd}var Vd=B({},Ma,{key:function(t){if(t.key){var l=Xd[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(t){return t.type==="keypress"?Nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kd=Jt(Vd),Jd=B({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Jt(Jd),kd=B({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),$d=Jt(kd),Wd=B({},pe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Jt(Wd),Id=B({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Jt(Id),t0=B({},pe,{newState:0,oldState:0}),l0=Jt(t0),e0=[9,13,27,32],ni=Dl&&"CompositionEvent"in window,_a=null;Dl&&"documentMode"in document&&(_a=document.documentMode);var a0=Dl&&"TextEvent"in window&&!_a,qf=Dl&&(!ni||_a&&8<_a&&11>=_a),Yf=" ",Cf=!1;function jf(t,l){switch(t){case"keyup":return e0.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function u0(t,l){switch(t){case"compositionend":return Gf(l);case"keypress":return l.which!==32?null:(Cf=!0,Yf);case"textInput":return t=l.data,t===Yf&&Cf?null:t;default:return null}}function n0(t,l){if(Ve)return t==="compositionend"||!ni&&jf(t,l)?(t=Nf(),_u=ti=Vl=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return qf&&l.locale!=="ko"?null:l.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!i0[t.type]:l==="textarea"}function Xf(t,l,e,a){Le?Ze?Ze.push(a):Ze=[a]:Le=a,l=Sn(l,"onChange"),0<l.length&&(e=new Ru("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Na=null,Ua=null;function c0(t){Tr(t,0)}function Bu(t){var l=za(t);if(Tf(l))return t}function Qf(t,l){if(t==="change")return l}var Lf=!1;if(Dl){var ii;if(Dl){var ci="oninput"in document;if(!ci){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),ci=typeof Zf.oninput=="function"}ii=ci}else ii=!1;Lf=ii&&(!document.documentMode||9<document.documentMode)}function Vf(){Na&&(Na.detachEvent("onpropertychange",Kf),Ua=Na=null)}function Kf(t){if(t.propertyName==="value"&&Bu(Ua)){var l=[];Xf(l,Ua,t,Fn(t)),_f(c0,l)}}function f0(t,l,e){t==="focusin"?(Vf(),Na=l,Ua=e,Na.attachEvent("onpropertychange",Kf)):t==="focusout"&&Vf()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(Ua)}function s0(t,l){if(t==="click")return Bu(l)}function r0(t,l){if(t==="input"||t==="change")return Bu(l)}function d0(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var tl=typeof Object.is=="function"?Object.is:d0;function Ra(t,l){if(tl(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Yn.call(l,u)||!tl(t[u],l[u]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kf(t,l){var e=Jf(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Jf(e)}}function $f(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?$f(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function Wf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Mu(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Mu(t.document)}return l}function fi(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var h0=Dl&&"documentMode"in document&&11>=document.documentMode,Ke=null,oi=null,Ha=null,si=!1;function Ff(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;si||Ke==null||Ke!==Mu(a)||(a=Ke,"selectionStart"in a&&fi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&Ra(Ha,a)||(Ha=a,a=Sn(oi,"onSelect"),0<a.length&&(l=new Ru("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=Ke)))}function be(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var Je={animationend:be("Animation","AnimationEnd"),animationiteration:be("Animation","AnimationIteration"),animationstart:be("Animation","AnimationStart"),transitionrun:be("Transition","TransitionRun"),transitionstart:be("Transition","TransitionStart"),transitioncancel:be("Transition","TransitionCancel"),transitionend:be("Transition","TransitionEnd")},ri={},If={};Dl&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Je.animationend.animation,delete Je.animationiteration.animation,delete Je.animationstart.animation),"TransitionEvent"in window||delete Je.transitionend.transition);function ve(t){if(ri[t])return ri[t];if(!Je[t])return t;var l=Je[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in If)return ri[t]=l[e];return t}var Pf=ve("animationend"),to=ve("animationiteration"),lo=ve("animationstart"),m0=ve("transitionrun"),y0=ve("transitionstart"),g0=ve("transitioncancel"),eo=ve("transitionend"),ao=new Map,di="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");di.push("scrollEnd");function gl(t,l){ao.set(t,l),ge(l,[t])}var uo=new WeakMap;function ol(t,l){if(typeof t=="object"&&t!==null){var e=uo.get(t);return e!==void 0?e:(l={value:t,source:l,stack:Sf(l)},uo.set(t,l),l)}return{value:t,source:l,stack:Sf(l)}}var sl=[],ke=0,hi=0;function qu(){for(var t=ke,l=hi=ke=0;l<t;){var e=sl[l];sl[l++]=null;var a=sl[l];sl[l++]=null;var u=sl[l];sl[l++]=null;var n=sl[l];if(sl[l++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&no(e,u,n)}}function Yu(t,l,e,a){sl[ke++]=t,sl[ke++]=l,sl[ke++]=e,sl[ke++]=a,hi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function mi(t,l,e,a){return Yu(t,l,e,a),Cu(t)}function $e(t,l){return Yu(t,null,null,l),Cu(t)}function no(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=t.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&l!==null&&(u=31-Pt(e),t=n.hiddenUpdates,a=t[u],a===null?t[u]=[l]:a.push(l),l.lane=e|536870912),n):null}function Cu(t){if(50<uu)throw uu=0,Sc=null,Error(d(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var We={};function p0(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ll(t,l,e,a){return new p0(t,l,e,a)}function yi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _l(t,l){var e=t.alternate;return e===null?(e=ll(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function io(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function ju(t,l,e,a,u,n){var i=0;if(a=t,typeof t=="function")yi(t)&&(i=1);else if(typeof t=="string")i=vh(t,e,C.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case vl:return t=ll(31,e,l,u),t.elementType=vl,t.lanes=n,t;case W:return Se(e.children,u,n,l);case ht:i=8,u|=24;break;case ut:return t=ll(12,e,l,u|2),t.elementType=ut,t.lanes=n,t;case F:return t=ll(13,e,l,u),t.elementType=F,t.lanes=n,t;case H:return t=ll(19,e,l,u),t.elementType=H,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xt:case Tt:i=10;break t;case qt:i=9;break t;case _t:i=11;break t;case Y:i=14;break t;case yt:i=16,a=null;break t}i=29,e=Error(d(130,t===null?"null":typeof t,"")),a=null}return l=ll(i,e,l,u),l.elementType=t,l.type=a,l.lanes=n,l}function Se(t,l,e,a){return t=ll(7,t,a,l),t.lanes=e,t}function gi(t,l,e){return t=ll(6,t,null,l),t.lanes=e,t}function pi(t,l,e){return l=ll(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Fe=[],Ie=0,Gu=null,wu=0,rl=[],dl=0,xe=null,Nl=1,Ul="";function Te(t,l){Fe[Ie++]=wu,Fe[Ie++]=Gu,Gu=t,wu=l}function co(t,l,e){rl[dl++]=Nl,rl[dl++]=Ul,rl[dl++]=xe,xe=t;var a=Nl;t=Ul;var u=32-Pt(a)-1;a&=~(1<<u),e+=1;var n=32-Pt(l)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Nl=1<<32-Pt(l)+u|e<<u|a,Ul=n+t}else Nl=1<<n|e<<u|a,Ul=t}function bi(t){t.return!==null&&(Te(t,1),co(t,1,0))}function vi(t){for(;t===Gu;)Gu=Fe[--Ie],Fe[Ie]=null,wu=Fe[--Ie],Fe[Ie]=null;for(;t===xe;)xe=rl[--dl],rl[dl]=null,Ul=rl[--dl],rl[dl]=null,Nl=rl[--dl],rl[dl]=null}var Vt=null,vt=null,et=!1,Ee=null,xl=!1,Si=Error(d(519));function ze(t){var l=Error(d(418,""));throw Ya(ol(l,t)),Si}function fo(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[Qt]=t,l[Kt]=a,e){case"dialog":k("cancel",l),k("close",l);break;case"iframe":case"object":case"embed":k("load",l);break;case"video":case"audio":for(e=0;e<iu.length;e++)k(iu[e],l);break;case"source":k("error",l);break;case"img":case"image":case"link":k("error",l),k("load",l);break;case"details":k("toggle",l);break;case"input":k("invalid",l),Ef(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ou(l);break;case"select":k("invalid",l);break;case"textarea":k("invalid",l),Af(l,a.value,a.defaultValue,a.children),Ou(l)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Or(l.textContent,e)?(a.popover!=null&&(k("beforetoggle",l),k("toggle",l)),a.onScroll!=null&&k("scroll",l),a.onScrollEnd!=null&&k("scrollend",l),a.onClick!=null&&(l.onclick=xn),l=!0):l=!1,l||ze(t)}function oo(t){for(Vt=t.return;Vt;)switch(Vt.tag){case 5:case 13:xl=!1;return;case 27:case 3:xl=!0;return;default:Vt=Vt.return}}function Ba(t){if(t!==Vt)return!1;if(!et)return oo(t),et=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Yc(t.type,t.memoizedProps)),e=!e),e&&vt&&ze(t),oo(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));t:{for(t=t.nextSibling,l=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(l===0){vt=bl(t.nextSibling);break t}l--}else e!=="$"&&e!=="$!"&&e!=="$?"||l++;t=t.nextSibling}vt=null}}else l===27?(l=vt,ce(t.type)?(t=wc,wc=null,vt=t):vt=l):vt=Vt?bl(t.stateNode.nextSibling):null;return!0}function qa(){vt=Vt=null,et=!1}function so(){var t=Ee;return t!==null&&(Wt===null?Wt=t:Wt.push.apply(Wt,t),Ee=null),t}function Ya(t){Ee===null?Ee=[t]:Ee.push(t)}var xi=E(null),Ae=null,Rl=null;function Kl(t,l,e){A(xi,l._currentValue),l._currentValue=e}function Hl(t){t._currentValue=xi.current,D(xi)}function Ti(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Ei(t,l,e,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<l.length;f++)if(c.context===l[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Ti(n.return,e,t),a||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(d(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),Ti(i,e,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function Ca(t,l,e,a){t=null;for(var u=l,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var c=u.type;tl(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===Ft.current){if(i=u.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(du):t=[du])}u=u.return}t!==null&&Ei(l,t,e,a),l.flags|=262144}function Xu(t){for(t=t.firstContext;t!==null;){if(!tl(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Oe(t){Ae=t,Rl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return ro(Ae,t)}function Qu(t,l){return Ae===null&&Oe(t),ro(t,l)}function ro(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},Rl===null){if(t===null)throw Error(d(308));Rl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Rl=Rl.next=l;return e}var b0=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},v0=p.unstable_scheduleCallback,S0=p.unstable_NormalPriority,Mt={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zi(){return{controller:new b0,data:new Map,refCount:0}}function ja(t){t.refCount--,t.refCount===0&&v0(S0,function(){t.controller.abort()})}var Ga=null,Ai=0,Pe=0,ta=null;function x0(t,l){if(Ga===null){var e=Ga=[];Ai=0,Pe=Mc(),ta={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ai++,l.then(ho,ho),l}function ho(){if(--Ai===0&&Ga!==null){ta!==null&&(ta.status="fulfilled");var t=Ga;Ga=null,Pe=0,ta=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function T0(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var u=0;u<e.length;u++)(0,e[u])(l)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var mo=v.S;v.S=function(t,l){typeof l=="object"&&l!==null&&typeof l.then=="function"&&x0(t,l),mo!==null&&mo(t,l)};var Me=E(null);function Oi(){var t=Me.current;return t!==null?t:mt.pooledCache}function Lu(t,l){l===null?A(Me,Me.current):A(Me,l.pool)}function yo(){var t=Oi();return t===null?null:{parent:Mt._currentValue,pool:t}}var wa=Error(d(460)),go=Error(d(474)),Zu=Error(d(542)),Mi={then:function(){}};function po(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vu(){}function bo(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Vu,Vu),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,So(t),t;default:if(typeof l.status=="string")l.then(Vu,Vu);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var u=l;u.status="fulfilled",u.value=a}},function(a){if(l.status==="pending"){var u=l;u.status="rejected",u.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,So(t),t}throw Xa=l,wa}}var Xa=null;function vo(){if(Xa===null)throw Error(d(459));var t=Xa;return Xa=null,t}function So(t){if(t===wa||t===Zu)throw Error(d(483))}var Jl=!1;function Di(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _i(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $l(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(it&2)!==0){var u=a.pending;return u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l,l=Cu(t),no(t,null,e),l}return Yu(t,a,l,e),Cu(t)}function Qa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,df(t,e)}}function Ni(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=l:n=n.next=l}else u=n=l;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Ui=!1;function La(){if(Ui){var t=ta;if(t!==null)throw t}}function Za(t,l,e,a){Ui=!1;var u=t.updateQueue;Jl=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=m:c.next=m,b.lastBaseUpdate=f))}if(n!==null){var x=u.baseState;i=0,b=m=f=null,c=n;do{var y=c.lane&-536870913,g=y!==c.lane;if(g?($&y)===y:(a&y)===y){y!==0&&y===Pe&&(Ui=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var X=t,j=c;y=l;var st=e;switch(j.tag){case 1:if(X=j.payload,typeof X=="function"){x=X.call(st,x,y);break t}x=X;break t;case 3:X.flags=X.flags&-65537|128;case 0:if(X=j.payload,y=typeof X=="function"?X.call(st,x,y):X,y==null)break t;x=B({},x,y);break t;case 2:Jl=!0}}y=c.callback,y!==null&&(t.flags|=64,g&&(t.flags|=8192),g=u.callbacks,g===null?u.callbacks=[y]:g.push(y))}else g={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(m=b=g,f=x):b=b.next=g,i|=y;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;g=c,c=g.next,g.next=null,u.lastBaseUpdate=g,u.shared.pending=null}}while(!0);b===null&&(f=x),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=b,n===null&&(u.shared.lanes=0),ae|=i,t.lanes=i,t.memoizedState=x}}function xo(t,l){if(typeof t!="function")throw Error(d(191,t));t.call(l)}function To(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)xo(e[t],l)}var la=E(null),Ku=E(0);function Eo(t,l){t=wl,A(Ku,t),A(la,l),wl=t|l.baseLanes}function Ri(){A(Ku,wl),A(la,la.current)}function Hi(){wl=Ku.current,D(la),D(Ku)}var Wl=0,V=null,ft=null,At=null,Ju=!1,ea=!1,De=!1,ku=0,Va=0,aa=null,E0=0;function Et(){throw Error(d(321))}function Bi(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!tl(t[e],l[e]))return!1;return!0}function qi(t,l,e,a,u,n){return Wl=n,V=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,v.H=t===null||t.memoizedState===null?is:cs,De=!1,n=e(a,u),De=!1,ea&&(n=Ao(l,e,a,u)),zo(t),n}function zo(t){v.H=tn;var l=ft!==null&&ft.next!==null;if(Wl=0,At=ft=V=null,Ju=!1,Va=0,aa=null,l)throw Error(d(300));t===null||Ut||(t=t.dependencies,t!==null&&Xu(t)&&(Ut=!0))}function Ao(t,l,e,a){V=t;var u=0;do{if(ea&&(aa=null),Va=0,ea=!1,25<=u)throw Error(d(301));if(u+=1,At=ft=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}v.H=N0,n=l(e,a)}while(ea);return n}function z0(){var t=v.H,l=t.useState()[0];return l=typeof l.then=="function"?Ka(l):l,t=t.useState()[0],(ft!==null?ft.memoizedState:null)!==t&&(V.flags|=1024),l}function Yi(){var t=ku!==0;return ku=0,t}function Ci(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function ji(t){if(Ju){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Ju=!1}Wl=0,At=ft=V=null,ea=!1,Va=ku=0,aa=null}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?V.memoizedState=At=t:At=At.next=t,At}function Ot(){if(ft===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var l=At===null?V.memoizedState:At.next;if(l!==null)At=l,ft=t;else{if(t===null)throw V.alternate===null?Error(d(467)):Error(d(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},At===null?V.memoizedState=At=t:At=At.next=t}return At}function Gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(t){var l=Va;return Va+=1,aa===null&&(aa=[]),t=bo(aa,t,l),l=V,(At===null?l.memoizedState:At.next)===null&&(l=l.alternate,v.H=l===null||l.memoizedState===null?is:cs),t}function $u(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ka(t);if(t.$$typeof===Tt)return Lt(t)}throw Error(d(438,String(t)))}function wi(t){var l=null,e=V.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(u){return u.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=Gi(),V.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Be;return l.index++,e}function Bl(t,l){return typeof l=="function"?l(t):l}function Wu(t){var l=Ot();return Xi(l,ft,t)}function Xi(t,l,e){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var u=t.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}l.baseQueue=u=n,a.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{l=u.next;var c=i=null,f=null,m=l,b=!1;do{var x=m.lane&-536870913;if(x!==m.lane?($&x)===x:(Wl&x)===x){var y=m.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),x===Pe&&(b=!0);else if((Wl&y)===y){m=m.next,y===Pe&&(b=!0);continue}else x={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=x,i=n):f=f.next=x,V.lanes|=y,ae|=y;x=m.action,De&&e(n,x),n=m.hasEagerState?m.eagerState:e(n,x)}else y={lane:x,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=y,i=n):f=f.next=y,V.lanes|=x,ae|=x;m=m.next}while(m!==null&&m!==l);if(f===null?i=n:f.next=c,!tl(n,t.memoizedState)&&(Ut=!0,b&&(e=ta,e!==null)))throw e;t.memoizedState=n,t.baseState=i,t.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Qi(t){var l=Ot(),e=l.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=t;var a=e.dispatch,u=e.pending,n=l.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);tl(n,l.memoizedState)||(Ut=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),e.lastRenderedState=n}return[n,a]}function Oo(t,l,e){var a=V,u=Ot(),n=et;if(n){if(e===void 0)throw Error(d(407));e=e()}else e=l();var i=!tl((ft||u).memoizedState,e);i&&(u.memoizedState=e,Ut=!0),u=u.queue;var c=_o.bind(null,a,u,t);if(Ja(2048,8,c,[t]),u.getSnapshot!==l||i||At!==null&&At.memoizedState.tag&1){if(a.flags|=2048,ua(9,Fu(),Do.bind(null,a,u,e,l),null),mt===null)throw Error(d(349));n||(Wl&124)!==0||Mo(a,l,e)}return e}function Mo(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=V.updateQueue,l===null?(l=Gi(),V.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Do(t,l,e,a){l.value=e,l.getSnapshot=a,No(l)&&Uo(t)}function _o(t,l,e){return e(function(){No(l)&&Uo(t)})}function No(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!tl(t,e)}catch{return!0}}function Uo(t){var l=$e(t,2);l!==null&&il(l,t,2)}function Li(t){var l=kt();if(typeof t=="function"){var e=t;if(t=e(),De){Ll(!0);try{e()}finally{Ll(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bl,lastRenderedState:t},l}function Ro(t,l,e,a){return t.baseState=e,Xi(t,ft,typeof a=="function"?a:Bl)}function A0(t,l,e,a,u){if(Pu(t))throw Error(d(485));if(t=l.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};v.T!==null?e(!0):n.isTransition=!1,a(n),e=l.pending,e===null?(n.next=l.pending=n,Ho(l,n)):(n.next=e.next,l.pending=e.next=n)}}function Ho(t,l){var e=l.action,a=l.payload,u=t.state;if(l.isTransition){var n=v.T,i={};v.T=i;try{var c=e(u,a),f=v.S;f!==null&&f(i,c),Bo(t,l,c)}catch(m){Zi(t,l,m)}finally{v.T=n}}else try{n=e(u,a),Bo(t,l,n)}catch(m){Zi(t,l,m)}}function Bo(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){qo(t,l,a)},function(a){return Zi(t,l,a)}):qo(t,l,e)}function qo(t,l,e){l.status="fulfilled",l.value=e,Yo(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Ho(t,e)))}function Zi(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,Yo(l),l=l.next;while(l!==a)}t.action=null}function Yo(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Co(t,l){return l}function jo(t,l){if(et){var e=mt.formState;if(e!==null){t:{var a=V;if(et){if(vt){l:{for(var u=vt,n=xl;u.nodeType!==8;){if(!n){u=null;break l}if(u=bl(u.nextSibling),u===null){u=null;break l}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){vt=bl(u.nextSibling),a=u.data==="F!";break t}}ze(a)}a=!1}a&&(l=e[0])}}return e=kt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:l},e.queue=a,e=as.bind(null,V,a),a.dispatch=e,a=Li(!1),n=$i.bind(null,V,!1,a.queue),a=kt(),u={state:l,dispatch:null,action:t,pending:null},a.queue=u,e=A0.bind(null,V,u,n,e),u.dispatch=e,a.memoizedState=t,[l,e,!1]}function Go(t){var l=Ot();return wo(l,ft,t)}function wo(t,l,e){if(l=Xi(t,l,Co)[0],t=Wu(Bl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Ka(l)}catch(i){throw i===wa?Zu:i}else a=l;l=Ot();var u=l.queue,n=u.dispatch;return e!==l.memoizedState&&(V.flags|=2048,ua(9,Fu(),O0.bind(null,u,e),null)),[a,n,t]}function O0(t,l){t.action=l}function Xo(t){var l=Ot(),e=ft;if(e!==null)return wo(l,e,t);Ot(),l=l.memoizedState,e=Ot();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function ua(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=V.updateQueue,l===null&&(l=Gi(),V.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function Fu(){return{destroy:void 0,resource:void 0}}function Qo(){return Ot().memoizedState}function Iu(t,l,e,a){var u=kt();a=a===void 0?null:a,V.flags|=t,u.memoizedState=ua(1|l,Fu(),e,a)}function Ja(t,l,e,a){var u=Ot();a=a===void 0?null:a;var n=u.memoizedState.inst;ft!==null&&a!==null&&Bi(a,ft.memoizedState.deps)?u.memoizedState=ua(l,n,e,a):(V.flags|=t,u.memoizedState=ua(1|l,n,e,a))}function Lo(t,l){Iu(8390656,8,t,l)}function Zo(t,l){Ja(2048,8,t,l)}function Vo(t,l){return Ja(4,2,t,l)}function Ko(t,l){return Ja(4,4,t,l)}function Jo(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function ko(t,l,e){e=e!=null?e.concat([t]):null,Ja(4,4,Jo.bind(null,l,t),e)}function Vi(){}function $o(t,l){var e=Ot();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Bi(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function Wo(t,l){var e=Ot();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Bi(l,a[1]))return a[0];if(a=t(),De){Ll(!0);try{t()}finally{Ll(!1)}}return e.memoizedState=[a,l],a}function Ki(t,l,e){return e===void 0||(Wl&1073741824)!==0?t.memoizedState=l:(t.memoizedState=e,t=Ps(),V.lanes|=t,ae|=t,e)}function Fo(t,l,e,a){return tl(e,l)?e:la.current!==null?(t=Ki(t,e,a),tl(t,l)||(Ut=!0),t):(Wl&42)===0?(Ut=!0,t.memoizedState=e):(t=Ps(),V.lanes|=t,ae|=t,l)}function Io(t,l,e,a,u){var n=O.p;O.p=n!==0&&8>n?n:8;var i=v.T,c={};v.T=c,$i(t,!1,l,e);try{var f=u(),m=v.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=T0(f,a);ka(t,l,b,nl(t))}else ka(t,l,a,nl(t))}catch(x){ka(t,l,{then:function(){},status:"rejected",reason:x},nl())}finally{O.p=n,v.T=i}}function M0(){}function Ji(t,l,e,a){if(t.tag!==5)throw Error(d(476));var u=Po(t).queue;Io(t,u,l,w,e===null?M0:function(){return ts(t),e(a)})}function Po(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bl,lastRenderedState:w},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function ts(t){var l=Po(t).next.queue;ka(t,l,{},nl())}function ki(){return Lt(du)}function ls(){return Ot().memoizedState}function es(){return Ot().memoizedState}function D0(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=nl();t=kl(e);var a=$l(l,t,e);a!==null&&(il(a,l,e),Qa(a,l,e)),l={cache:zi()},t.payload=l;return}l=l.return}}function _0(t,l,e){var a=nl();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Pu(t)?us(l,e):(e=mi(t,l,e,a),e!==null&&(il(e,t,a),ns(e,l,a)))}function as(t,l,e){var a=nl();ka(t,l,e,a)}function ka(t,l,e,a){var u={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))us(l,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var i=l.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,tl(c,i))return Yu(t,l,u,0),mt===null&&qu(),!1}catch{}finally{}if(e=mi(t,l,u,a),e!==null)return il(e,t,a),ns(e,l,a),!0}return!1}function $i(t,l,e,a){if(a={lane:2,revertLane:Mc(),action:a,hasEagerState:!1,eagerState:null,next:null},Pu(t)){if(l)throw Error(d(479))}else l=mi(t,e,a,2),l!==null&&il(l,t,2)}function Pu(t){var l=t.alternate;return t===V||l!==null&&l===V}function us(t,l){ea=Ju=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function ns(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,df(t,e)}}var tn={readContext:Lt,use:$u,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et,useHostTransitionStatus:Et,useFormState:Et,useActionState:Et,useOptimistic:Et,useMemoCache:Et,useCacheRefresh:Et},is={readContext:Lt,use:$u,useCallback:function(t,l){return kt().memoizedState=[t,l===void 0?null:l],t},useContext:Lt,useEffect:Lo,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,Iu(4194308,4,Jo.bind(null,l,t),e)},useLayoutEffect:function(t,l){return Iu(4194308,4,t,l)},useInsertionEffect:function(t,l){Iu(4,2,t,l)},useMemo:function(t,l){var e=kt();l=l===void 0?null:l;var a=t();if(De){Ll(!0);try{t()}finally{Ll(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=kt();if(e!==void 0){var u=e(l);if(De){Ll(!0);try{e(l)}finally{Ll(!1)}}}else u=l;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=_0.bind(null,V,t),[a.memoizedState,t]},useRef:function(t){var l=kt();return t={current:t},l.memoizedState=t},useState:function(t){t=Li(t);var l=t.queue,e=as.bind(null,V,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:Vi,useDeferredValue:function(t,l){var e=kt();return Ki(e,t,l)},useTransition:function(){var t=Li(!1);return t=Io.bind(null,V,t.queue,!0,!1),kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=V,u=kt();if(et){if(e===void 0)throw Error(d(407));e=e()}else{if(e=l(),mt===null)throw Error(d(349));($&124)!==0||Mo(a,l,e)}u.memoizedState=e;var n={value:e,getSnapshot:l};return u.queue=n,Lo(_o.bind(null,a,n,t),[t]),a.flags|=2048,ua(9,Fu(),Do.bind(null,a,n,e,l),null),e},useId:function(){var t=kt(),l=mt.identifierPrefix;if(et){var e=Ul,a=Nl;e=(a&~(1<<32-Pt(a)-1)).toString(32)+e,l="«"+l+"R"+e,e=ku++,0<e&&(l+="H"+e.toString(32)),l+="»"}else e=E0++,l="«"+l+"r"+e.toString(32)+"»";return t.memoizedState=l},useHostTransitionStatus:ki,useFormState:jo,useActionState:jo,useOptimistic:function(t){var l=kt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=$i.bind(null,V,!0,e),e.dispatch=l,[t,l]},useMemoCache:wi,useCacheRefresh:function(){return kt().memoizedState=D0.bind(null,V)}},cs={readContext:Lt,use:$u,useCallback:$o,useContext:Lt,useEffect:Zo,useImperativeHandle:ko,useInsertionEffect:Vo,useLayoutEffect:Ko,useMemo:Wo,useReducer:Wu,useRef:Qo,useState:function(){return Wu(Bl)},useDebugValue:Vi,useDeferredValue:function(t,l){var e=Ot();return Fo(e,ft.memoizedState,t,l)},useTransition:function(){var t=Wu(Bl)[0],l=Ot().memoizedState;return[typeof t=="boolean"?t:Ka(t),l]},useSyncExternalStore:Oo,useId:ls,useHostTransitionStatus:ki,useFormState:Go,useActionState:Go,useOptimistic:function(t,l){var e=Ot();return Ro(e,ft,t,l)},useMemoCache:wi,useCacheRefresh:es},N0={readContext:Lt,use:$u,useCallback:$o,useContext:Lt,useEffect:Zo,useImperativeHandle:ko,useInsertionEffect:Vo,useLayoutEffect:Ko,useMemo:Wo,useReducer:Qi,useRef:Qo,useState:function(){return Qi(Bl)},useDebugValue:Vi,useDeferredValue:function(t,l){var e=Ot();return ft===null?Ki(e,t,l):Fo(e,ft.memoizedState,t,l)},useTransition:function(){var t=Qi(Bl)[0],l=Ot().memoizedState;return[typeof t=="boolean"?t:Ka(t),l]},useSyncExternalStore:Oo,useId:ls,useHostTransitionStatus:ki,useFormState:Xo,useActionState:Xo,useOptimistic:function(t,l){var e=Ot();return ft!==null?Ro(e,ft,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:wi,useCacheRefresh:es},na=null,$a=0;function ln(t){var l=$a;return $a+=1,na===null&&(na=[]),bo(na,t,l)}function Wa(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function en(t,l){throw l.$$typeof===nt?Error(d(525)):(t=Object.prototype.toString.call(l),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function fs(t){var l=t._init;return l(t._payload)}function os(t){function l(r,s){if(t){var h=r.deletions;h===null?(r.deletions=[s],r.flags|=16):h.push(s)}}function e(r,s){if(!t)return null;for(;s!==null;)l(r,s),s=s.sibling;return null}function a(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function u(r,s){return r=_l(r,s),r.index=0,r.sibling=null,r}function n(r,s,h){return r.index=h,t?(h=r.alternate,h!==null?(h=h.index,h<s?(r.flags|=67108866,s):h):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,h,S){return s===null||s.tag!==6?(s=gi(h,r.mode,S),s.return=r,s):(s=u(s,h),s.return=r,s)}function f(r,s,h,S){var _=h.type;return _===W?b(r,s,h.props.children,S,h.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yt&&fs(_)===s.type)?(s=u(s,h.props),Wa(s,h),s.return=r,s):(s=ju(h.type,h.key,h.props,null,r.mode,S),Wa(s,h),s.return=r,s)}function m(r,s,h,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=pi(h,r.mode,S),s.return=r,s):(s=u(s,h.children||[]),s.return=r,s)}function b(r,s,h,S,_){return s===null||s.tag!==7?(s=Se(h,r.mode,S,_),s.return=r,s):(s=u(s,h),s.return=r,s)}function x(r,s,h){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=gi(""+s,r.mode,h),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case at:return h=ju(s.type,s.key,s.props,null,r.mode,h),Wa(h,s),h.return=r,h;case Bt:return s=pi(s,r.mode,h),s.return=r,s;case yt:var S=s._init;return s=S(s._payload),x(r,s,h)}if(Xt(s)||wt(s))return s=Se(s,r.mode,h,null),s.return=r,s;if(typeof s.then=="function")return x(r,ln(s),h);if(s.$$typeof===Tt)return x(r,Qu(r,s),h);en(r,s)}return null}function y(r,s,h,S){var _=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return _!==null?null:c(r,s,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case at:return h.key===_?f(r,s,h,S):null;case Bt:return h.key===_?m(r,s,h,S):null;case yt:return _=h._init,h=_(h._payload),y(r,s,h,S)}if(Xt(h)||wt(h))return _!==null?null:b(r,s,h,S,null);if(typeof h.then=="function")return y(r,s,ln(h),S);if(h.$$typeof===Tt)return y(r,s,Qu(r,h),S);en(r,h)}return null}function g(r,s,h,S,_){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return r=r.get(h)||null,c(s,r,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case at:return r=r.get(S.key===null?h:S.key)||null,f(s,r,S,_);case Bt:return r=r.get(S.key===null?h:S.key)||null,m(s,r,S,_);case yt:var K=S._init;return S=K(S._payload),g(r,s,h,S,_)}if(Xt(S)||wt(S))return r=r.get(h)||null,b(s,r,S,_,null);if(typeof S.then=="function")return g(r,s,h,ln(S),_);if(S.$$typeof===Tt)return g(r,s,h,Qu(s,S),_);en(s,S)}return null}function X(r,s,h,S){for(var _=null,K=null,q=s,G=s=0,Ht=null;q!==null&&G<h.length;G++){q.index>G?(Ht=q,q=null):Ht=q.sibling;var tt=y(r,q,h[G],S);if(tt===null){q===null&&(q=Ht);break}t&&q&&tt.alternate===null&&l(r,q),s=n(tt,s,G),K===null?_=tt:K.sibling=tt,K=tt,q=Ht}if(G===h.length)return e(r,q),et&&Te(r,G),_;if(q===null){for(;G<h.length;G++)q=x(r,h[G],S),q!==null&&(s=n(q,s,G),K===null?_=q:K.sibling=q,K=q);return et&&Te(r,G),_}for(q=a(q);G<h.length;G++)Ht=g(q,r,G,h[G],S),Ht!==null&&(t&&Ht.alternate!==null&&q.delete(Ht.key===null?G:Ht.key),s=n(Ht,s,G),K===null?_=Ht:K.sibling=Ht,K=Ht);return t&&q.forEach(function(de){return l(r,de)}),et&&Te(r,G),_}function j(r,s,h,S){if(h==null)throw Error(d(151));for(var _=null,K=null,q=s,G=s=0,Ht=null,tt=h.next();q!==null&&!tt.done;G++,tt=h.next()){q.index>G?(Ht=q,q=null):Ht=q.sibling;var de=y(r,q,tt.value,S);if(de===null){q===null&&(q=Ht);break}t&&q&&de.alternate===null&&l(r,q),s=n(de,s,G),K===null?_=de:K.sibling=de,K=de,q=Ht}if(tt.done)return e(r,q),et&&Te(r,G),_;if(q===null){for(;!tt.done;G++,tt=h.next())tt=x(r,tt.value,S),tt!==null&&(s=n(tt,s,G),K===null?_=tt:K.sibling=tt,K=tt);return et&&Te(r,G),_}for(q=a(q);!tt.done;G++,tt=h.next())tt=g(q,r,G,tt.value,S),tt!==null&&(t&&tt.alternate!==null&&q.delete(tt.key===null?G:tt.key),s=n(tt,s,G),K===null?_=tt:K.sibling=tt,K=tt);return t&&q.forEach(function(Uh){return l(r,Uh)}),et&&Te(r,G),_}function st(r,s,h,S){if(typeof h=="object"&&h!==null&&h.type===W&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case at:t:{for(var _=h.key;s!==null;){if(s.key===_){if(_=h.type,_===W){if(s.tag===7){e(r,s.sibling),S=u(s,h.props.children),S.return=r,r=S;break t}}else if(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===yt&&fs(_)===s.type){e(r,s.sibling),S=u(s,h.props),Wa(S,h),S.return=r,r=S;break t}e(r,s);break}else l(r,s);s=s.sibling}h.type===W?(S=Se(h.props.children,r.mode,S,h.key),S.return=r,r=S):(S=ju(h.type,h.key,h.props,null,r.mode,S),Wa(S,h),S.return=r,r=S)}return i(r);case Bt:t:{for(_=h.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){e(r,s.sibling),S=u(s,h.children||[]),S.return=r,r=S;break t}else{e(r,s);break}else l(r,s);s=s.sibling}S=pi(h,r.mode,S),S.return=r,r=S}return i(r);case yt:return _=h._init,h=_(h._payload),st(r,s,h,S)}if(Xt(h))return X(r,s,h,S);if(wt(h)){if(_=wt(h),typeof _!="function")throw Error(d(150));return h=_.call(h),j(r,s,h,S)}if(typeof h.then=="function")return st(r,s,ln(h),S);if(h.$$typeof===Tt)return st(r,s,Qu(r,h),S);en(r,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,s!==null&&s.tag===6?(e(r,s.sibling),S=u(s,h),S.return=r,r=S):(e(r,s),S=gi(h,r.mode,S),S.return=r,r=S),i(r)):e(r,s)}return function(r,s,h,S){try{$a=0;var _=st(r,s,h,S);return na=null,_}catch(q){if(q===wa||q===Zu)throw q;var K=ll(29,q,null,r.mode);return K.lanes=S,K.return=r,K}finally{}}}var ia=os(!0),ss=os(!1),hl=E(null),Tl=null;function Fl(t){var l=t.alternate;A(Dt,Dt.current&1),A(hl,t),Tl===null&&(l===null||la.current!==null||l.memoizedState!==null)&&(Tl=t)}function rs(t){if(t.tag===22){if(A(Dt,Dt.current),A(hl,t),Tl===null){var l=t.alternate;l!==null&&l.memoizedState!==null&&(Tl=t)}}else Il()}function Il(){A(Dt,Dt.current),A(hl,hl.current)}function ql(t){D(hl),Tl===t&&(Tl=null),D(Dt)}var Dt=E(0);function an(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Gc(e)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}function Wi(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:B({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Fi={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=nl(),u=kl(a);u.payload=l,e!=null&&(u.callback=e),l=$l(t,u,a),l!==null&&(il(l,t,a),Qa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=nl(),u=kl(a);u.tag=1,u.payload=l,e!=null&&(u.callback=e),l=$l(t,u,a),l!==null&&(il(l,t,a),Qa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=nl(),a=kl(e);a.tag=2,l!=null&&(a.callback=l),l=$l(t,a,e),l!==null&&(il(l,t,e),Qa(l,t,e))}};function ds(t,l,e,a,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,i):l.prototype&&l.prototype.isPureReactComponent?!Ra(e,a)||!Ra(u,n):!0}function hs(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&Fi.enqueueReplaceState(l,l.state,null)}function _e(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=B({},e));for(var u in t)e[u]===void 0&&(e[u]=t[u])}return e}var un=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ms(t){un(t)}function ys(t){console.error(t)}function gs(t){un(t)}function nn(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function ps(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ii(t,l,e){return e=kl(e),e.tag=3,e.payload={element:null},e.callback=function(){nn(t,l)},e}function bs(t){return t=kl(t),t.tag=3,t}function vs(t,l,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;t.payload=function(){return u(n)},t.callback=function(){ps(l,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ps(l,e,a),typeof u!="function"&&(ue===null?ue=new Set([this]):ue.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function U0(t,l,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&Ca(l,e,u,!0),e=hl.current,e!==null){switch(e.tag){case 13:return Tl===null?Tc():e.alternate===null&&St===0&&(St=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Mi?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),zc(t,a,u)),!1;case 22:return e.flags|=65536,a===Mi?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),zc(t,a,u)),!1}throw Error(d(435,e.tag))}return zc(t,a,u),Tc(),!1}if(et)return l=hl.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=u,a!==Si&&(t=Error(d(422),{cause:a}),Ya(ol(t,e)))):(a!==Si&&(l=Error(d(423),{cause:a}),Ya(ol(l,e))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=ol(a,e),u=Ii(t.stateNode,a,u),Ni(t,u),St!==4&&(St=2)),!1;var n=Error(d(520),{cause:a});if(n=ol(n,e),au===null?au=[n]:au.push(n),St!==4&&(St=2),l===null)return!0;a=ol(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=u&-u,e.lanes|=t,t=Ii(e.stateNode,a,t),Ni(e,t),!1;case 1:if(l=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ue===null||!ue.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=bs(u),vs(u,t,e,a),Ni(e,u),!1}e=e.return}while(e!==null);return!1}var Ss=Error(d(461)),Ut=!1;function Yt(t,l,e,a){l.child=t===null?ss(l,null,e,a):ia(l,t.child,e,a)}function xs(t,l,e,a,u){e=e.render;var n=l.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Oe(l),a=qi(t,l,e,i,n,u),c=Yi(),t!==null&&!Ut?(Ci(t,l,u),Yl(t,l,u)):(et&&c&&bi(l),l.flags|=1,Yt(t,l,a,u),l.child)}function Ts(t,l,e,a,u){if(t===null){var n=e.type;return typeof n=="function"&&!yi(n)&&n.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=n,Es(t,l,n,a,u)):(t=ju(e.type,null,a,l,l.mode,u),t.ref=l.ref,t.return=l,l.child=t)}if(n=t.child,!ic(t,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:Ra,e(i,a)&&t.ref===l.ref)return Yl(t,l,u)}return l.flags|=1,t=_l(n,a),t.ref=l.ref,t.return=l,l.child=t}function Es(t,l,e,a,u){if(t!==null){var n=t.memoizedProps;if(Ra(n,a)&&t.ref===l.ref)if(Ut=!1,l.pendingProps=a=n,ic(t,u))(t.flags&131072)!==0&&(Ut=!0);else return l.lanes=t.lanes,Yl(t,l,u)}return Pi(t,l,e,a,u)}function zs(t,l,e){var a=l.pendingProps,u=a.children,n=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((l.flags&128)!==0){if(a=n!==null?n.baseLanes|e:e,t!==null){for(u=l.child=t.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;l.childLanes=n&~a}else l.childLanes=0,l.child=null;return As(t,l,a,e)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Lu(l,n!==null?n.cachePool:null),n!==null?Eo(l,n):Ri(),rs(l);else return l.lanes=l.childLanes=536870912,As(t,l,n!==null?n.baseLanes|e:e,e)}else n!==null?(Lu(l,n.cachePool),Eo(l,n),Il(),l.memoizedState=null):(t!==null&&Lu(l,null),Ri(),Il());return Yt(t,l,u,e),l.child}function As(t,l,e,a){var u=Oi();return u=u===null?null:{parent:Mt._currentValue,pool:u},l.memoizedState={baseLanes:e,cachePool:u},t!==null&&Lu(l,null),Ri(),rs(l),t!==null&&Ca(t,l,a,!0),null}function cn(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function Pi(t,l,e,a,u){return Oe(l),e=qi(t,l,e,a,void 0,u),a=Yi(),t!==null&&!Ut?(Ci(t,l,u),Yl(t,l,u)):(et&&a&&bi(l),l.flags|=1,Yt(t,l,e,u),l.child)}function Os(t,l,e,a,u,n){return Oe(l),l.updateQueue=null,e=Ao(l,a,e,u),zo(t),a=Yi(),t!==null&&!Ut?(Ci(t,l,n),Yl(t,l,n)):(et&&a&&bi(l),l.flags|=1,Yt(t,l,e,n),l.child)}function Ms(t,l,e,a,u){if(Oe(l),l.stateNode===null){var n=We,i=e.contextType;typeof i=="object"&&i!==null&&(n=Lt(i)),n=new e(a,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Fi,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=a,n.state=l.memoizedState,n.refs={},Di(l),i=e.contextType,n.context=typeof i=="object"&&i!==null?Lt(i):We,n.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wi(l,e,i,a),n.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Fi.enqueueReplaceState(n,n.state,null),Za(l,a,n,u),La(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){n=l.stateNode;var c=l.memoizedProps,f=_e(e,c);n.props=f;var m=n.context,b=e.contextType;i=We,typeof b=="object"&&b!==null&&(i=Lt(b));var x=e.getDerivedStateFromProps;b=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&hs(l,n,a,i),Jl=!1;var y=l.memoizedState;n.state=y,Za(l,a,n,u),La(),m=l.memoizedState,c||y!==m||Jl?(typeof x=="function"&&(Wi(l,e,x,a),m=l.memoizedState),(f=Jl||ds(l,e,f,a,y,m,i))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=m),n.props=a,n.state=m,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{n=l.stateNode,_i(t,l),i=l.memoizedProps,b=_e(e,i),n.props=b,x=l.pendingProps,y=n.context,m=e.contextType,f=We,typeof m=="object"&&m!==null&&(f=Lt(m)),c=e.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==x||y!==f)&&hs(l,n,a,f),Jl=!1,y=l.memoizedState,n.state=y,Za(l,a,n,u),La();var g=l.memoizedState;i!==x||y!==g||Jl||t!==null&&t.dependencies!==null&&Xu(t.dependencies)?(typeof c=="function"&&(Wi(l,e,c,a),g=l.memoizedState),(b=Jl||ds(l,e,b,a,y,g,f)||t!==null&&t.dependencies!==null&&Xu(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,g,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,g,f)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=g),n.props=a,n.state=g,n.context=f,a=b):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),a=!1)}return n=a,cn(t,l),a=(l.flags&128)!==0,n||a?(n=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,t!==null&&a?(l.child=ia(l,t.child,null,u),l.child=ia(l,null,e,u)):Yt(t,l,e,u),l.memoizedState=n.state,t=l.child):t=Yl(t,l,u),t}function Ds(t,l,e,a){return qa(),l.flags|=256,Yt(t,l,e,a),l.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(t){return{baseLanes:t,cachePool:yo()}}function ec(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=ml),t}function _s(t,l,e){var a=l.pendingProps,u=!1,n=(l.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),i&&(u=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(et){if(u?Fl(l):Il(),et){var c=vt,f;if(f=c){t:{for(f=c,c=xl;f.nodeType!==8;){if(!c){c=null;break t}if(f=bl(f.nextSibling),f===null){c=null;break t}}c=f}c!==null?(l.memoizedState={dehydrated:c,treeContext:xe!==null?{id:Nl,overflow:Ul}:null,retryLane:536870912,hydrationErrors:null},f=ll(18,null,null,0),f.stateNode=c,f.return=l,l.child=f,Vt=l,vt=null,f=!0):f=!1}f||ze(l)}if(c=l.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Gc(c)?l.lanes=32:l.lanes=536870912,null;ql(l)}return c=a.children,a=a.fallback,u?(Il(),u=l.mode,c=fn({mode:"hidden",children:c},u),a=Se(a,u,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,u=l.child,u.memoizedState=lc(e),u.childLanes=ec(t,i,e),l.memoizedState=tc,a):(Fl(l),ac(l,c))}if(f=t.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(n)l.flags&256?(Fl(l),l.flags&=-257,l=uc(t,l,e)):l.memoizedState!==null?(Il(),l.child=t.child,l.flags|=128,l=null):(Il(),u=a.fallback,c=l.mode,a=fn({mode:"visible",children:a.children},c),u=Se(u,c,e,null),u.flags|=2,a.return=l,u.return=l,a.sibling=u,l.child=a,ia(l,t.child,null,e),a=l.child,a.memoizedState=lc(e),a.childLanes=ec(t,i,e),l.memoizedState=tc,l=u);else if(Fl(l),Gc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(d(419)),a.stack="",a.digest=i,Ya({value:a,source:null,stack:null}),l=uc(t,l,e)}else if(Ut||Ca(t,l,e,!1),i=(e&t.childLanes)!==0,Ut||i){if(i=mt,i!==null&&(a=e&-e,a=(a&42)!==0?1:wn(a),a=(a&(i.suspendedLanes|e))!==0?0:a,a!==0&&a!==f.retryLane))throw f.retryLane=a,$e(t,a),il(i,t,a),Ss;c.data==="$?"||Tc(),l=uc(t,l,e)}else c.data==="$?"?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,vt=bl(c.nextSibling),Vt=l,et=!0,Ee=null,xl=!1,t!==null&&(rl[dl++]=Nl,rl[dl++]=Ul,rl[dl++]=xe,Nl=t.id,Ul=t.overflow,xe=l),l=ac(l,a.children),l.flags|=4096);return l}return u?(Il(),u=a.fallback,c=l.mode,f=t.child,m=f.sibling,a=_l(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?u=_l(m,u):(u=Se(u,c,e,null),u.flags|=2),u.return=l,a.return=l,a.sibling=u,l.child=a,a=u,u=l.child,c=t.child.memoizedState,c===null?c=lc(e):(f=c.cachePool,f!==null?(m=Mt._currentValue,f=f.parent!==m?{parent:m,pool:m}:f):f=yo(),c={baseLanes:c.baseLanes|e,cachePool:f}),u.memoizedState=c,u.childLanes=ec(t,i,e),l.memoizedState=tc,a):(Fl(l),e=t.child,t=e.sibling,e=_l(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function ac(t,l){return l=fn({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function fn(t,l){return t=ll(22,t,null,l),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function uc(t,l,e){return ia(l,t.child,null,e),t=ac(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Ns(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Ti(t.return,l,e)}function nc(t,l,e,a,u){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u}:(n.isBackwards=l,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=e,n.tailMode=u)}function Us(t,l,e){var a=l.pendingProps,u=a.revealOrder,n=a.tail;if(Yt(t,l,a.children,e),a=Dt.current,(a&2)!==0)a=a&1|2,l.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ns(t,e,l);else if(t.tag===19)Ns(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(A(Dt,a),u){case"forwards":for(e=l.child,u=null;e!==null;)t=e.alternate,t!==null&&an(t)===null&&(u=e),e=e.sibling;e=u,e===null?(u=l.child,l.child=null):(u=e.sibling,e.sibling=null),nc(l,!1,u,e,n);break;case"backwards":for(e=null,u=l.child,l.child=null;u!==null;){if(t=u.alternate,t!==null&&an(t)===null){l.child=u;break}t=u.sibling,u.sibling=e,e=u,u=t}nc(l,!0,e,null,n);break;case"together":nc(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Yl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),ae|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(Ca(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(d(153));if(l.child!==null){for(t=l.child,e=_l(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=_l(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function ic(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Xu(t)))}function R0(t,l,e){switch(l.tag){case 3:gt(l,l.stateNode.containerInfo),Kl(l,Mt,t.memoizedState.cache),qa();break;case 27:case 5:qn(l);break;case 4:gt(l,l.stateNode.containerInfo);break;case 10:Kl(l,l.type,l.memoizedProps.value);break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(Fl(l),l.flags|=128,null):(e&l.child.childLanes)!==0?_s(t,l,e):(Fl(l),t=Yl(t,l,e),t!==null?t.sibling:null);Fl(l);break;case 19:var u=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(Ca(t,l,e,!1),a=(e&l.childLanes)!==0),u){if(a)return Us(t,l,e);l.flags|=128}if(u=l.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),A(Dt,Dt.current),a)break;return null;case 22:case 23:return l.lanes=0,zs(t,l,e);case 24:Kl(l,Mt,t.memoizedState.cache)}return Yl(t,l,e)}function Rs(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)Ut=!0;else{if(!ic(t,e)&&(l.flags&128)===0)return Ut=!1,R0(t,l,e);Ut=(t.flags&131072)!==0}else Ut=!1,et&&(l.flags&1048576)!==0&&co(l,wu,l.index);switch(l.lanes=0,l.tag){case 16:t:{t=l.pendingProps;var a=l.elementType,u=a._init;if(a=u(a._payload),l.type=a,typeof a=="function")yi(a)?(t=_e(a,t),l.tag=1,l=Ms(null,l,a,t,e)):(l.tag=0,l=Pi(null,l,a,t,e));else{if(a!=null){if(u=a.$$typeof,u===_t){l.tag=11,l=xs(null,l,a,t,e);break t}else if(u===Y){l.tag=14,l=Ts(null,l,a,t,e);break t}}throw l=me(a)||a,Error(d(306,l,""))}}return l;case 0:return Pi(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,u=_e(a,l.pendingProps),Ms(t,l,a,u,e);case 3:t:{if(gt(l,l.stateNode.containerInfo),t===null)throw Error(d(387));a=l.pendingProps;var n=l.memoizedState;u=n.element,_i(t,l),Za(l,a,null,e);var i=l.memoizedState;if(a=i.cache,Kl(l,Mt,a),a!==n.cache&&Ei(l,[Mt],e,!0),La(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=Ds(t,l,a,e);break t}else if(a!==u){u=ol(Error(d(424)),l),Ya(u),l=Ds(t,l,a,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(vt=bl(t.firstChild),Vt=l,et=!0,Ee=null,xl=!0,e=ss(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(qa(),a===u){l=Yl(t,l,e);break t}Yt(t,l,a,e)}l=l.child}return l;case 26:return cn(t,l),t===null?(e=Yr(l.type,null,l.pendingProps,null))?l.memoizedState=e:et||(e=l.type,t=l.pendingProps,a=Tn(L.current).createElement(e),a[Qt]=l,a[Kt]=t,jt(a,e,t),Nt(a),l.stateNode=a):l.memoizedState=Yr(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return qn(l),t===null&&et&&(a=l.stateNode=Hr(l.type,l.pendingProps,L.current),Vt=l,xl=!0,u=vt,ce(l.type)?(wc=u,vt=bl(a.firstChild)):vt=u),Yt(t,l,l.pendingProps.children,e),cn(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&et&&((u=a=vt)&&(a=ih(a,l.type,l.pendingProps,xl),a!==null?(l.stateNode=a,Vt=l,vt=bl(a.firstChild),xl=!1,u=!0):u=!1),u||ze(l)),qn(l),u=l.type,n=l.pendingProps,i=t!==null?t.memoizedProps:null,a=n.children,Yc(u,n)?a=null:i!==null&&Yc(u,i)&&(l.flags|=32),l.memoizedState!==null&&(u=qi(t,l,z0,null,null,e),du._currentValue=u),cn(t,l),Yt(t,l,a,e),l.child;case 6:return t===null&&et&&((t=e=vt)&&(e=ch(e,l.pendingProps,xl),e!==null?(l.stateNode=e,Vt=l,vt=null,t=!0):t=!1),t||ze(l)),null;case 13:return _s(t,l,e);case 4:return gt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=ia(l,null,a,e):Yt(t,l,a,e),l.child;case 11:return xs(t,l,l.type,l.pendingProps,e);case 7:return Yt(t,l,l.pendingProps,e),l.child;case 8:return Yt(t,l,l.pendingProps.children,e),l.child;case 12:return Yt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,Kl(l,l.type,a.value),Yt(t,l,a.children,e),l.child;case 9:return u=l.type._context,a=l.pendingProps.children,Oe(l),u=Lt(u),a=a(u),l.flags|=1,Yt(t,l,a,e),l.child;case 14:return Ts(t,l,l.type,l.pendingProps,e);case 15:return Es(t,l,l.type,l.pendingProps,e);case 19:return Us(t,l,e);case 31:return a=l.pendingProps,e=l.mode,a={mode:a.mode,children:a.children},t===null?(e=fn(a,e),e.ref=l.ref,l.child=e,e.return=l,l=e):(e=_l(t.child,a),e.ref=l.ref,l.child=e,e.return=l,l=e),l;case 22:return zs(t,l,e);case 24:return Oe(l),a=Lt(Mt),t===null?(u=Oi(),u===null&&(u=mt,n=zi(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),l.memoizedState={parent:a,cache:u},Di(l),Kl(l,Mt,u)):((t.lanes&e)!==0&&(_i(t,l),Za(l,null,null,e),La()),u=t.memoizedState,n=l.memoizedState,u.parent!==a?(u={parent:a,cache:a},l.memoizedState=u,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=u),Kl(l,Mt,a)):(a=n.cache,Kl(l,Mt,a),a!==u.cache&&Ei(l,[Mt],e,!0))),Yt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(d(156,l.tag))}function Cl(t){t.flags|=4}function Hs(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Xr(l)){if(l=hl.current,l!==null&&(($&4194048)===$?Tl!==null:($&62914560)!==$&&($&536870912)===0||l!==Tl))throw Xa=Mi,go;t.flags|=8192}}function on(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?sf():536870912,t.lanes|=l,sa|=l)}function Fa(t,l){if(!et)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function bt(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function H0(t,l,e){var a=l.pendingProps;switch(vi(l),l.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(l),null;case 1:return bt(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Hl(Mt),Ql(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Ba(l)?Cl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,so())),bt(l),null;case 26:return e=l.memoizedState,t===null?(Cl(l),e!==null?(bt(l),Hs(l,e)):(bt(l),l.flags&=-16777217)):e?e!==t.memoizedState?(Cl(l),bt(l),Hs(l,e)):(bt(l),l.flags&=-16777217):(t.memoizedProps!==a&&Cl(l),bt(l),l.flags&=-16777217),null;case 27:vu(l),e=L.current;var u=l.type;if(t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Cl(l);else{if(!a){if(l.stateNode===null)throw Error(d(166));return bt(l),null}t=C.current,Ba(l)?fo(l):(t=Hr(u,a,e),l.stateNode=t,Cl(l))}return bt(l),null;case 5:if(vu(l),e=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Cl(l);else{if(!a){if(l.stateNode===null)throw Error(d(166));return bt(l),null}if(t=C.current,Ba(l))fo(l);else{switch(u=Tn(L.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(e,{is:a.is}):u.createElement(e)}}t[Qt]=l,t[Kt]=a;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=t;t:switch(jt(t,e,a),e){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Cl(l)}}return bt(l),l.flags&=-16777217,null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Cl(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(d(166));if(t=L.current,Ba(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,u=Vt,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[Qt]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Or(t.nodeValue,e)),t||ze(l)}else t=Tn(t).createTextNode(a),t[Qt]=l,l.stateNode=t}return bt(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ba(l),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(d(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(d(317));u[Qt]=l}else qa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;bt(l),u=!1}else u=so(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return l.flags&256?(ql(l),l):(ql(l),null)}if(ql(l),(l.flags&128)!==0)return l.lanes=e,l;if(e=a!==null,t=t!==null&&t.memoizedState!==null,e){a=l.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var n=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)}return e!==t&&e&&(l.child.flags|=8192),on(l,l.updateQueue),bt(l),null;case 4:return Ql(),t===null&&Uc(l.stateNode.containerInfo),bt(l),null;case 10:return Hl(l.type),bt(l),null;case 19:if(D(Dt),u=l.memoizedState,u===null)return bt(l),null;if(a=(l.flags&128)!==0,n=u.rendering,n===null)if(a)Fa(u,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(n=an(t),n!==null){for(l.flags|=128,Fa(u,!1),t=n.updateQueue,l.updateQueue=t,on(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)io(e,t),e=e.sibling;return A(Dt,Dt.current&1|2),l.child}t=t.sibling}u.tail!==null&&Sl()>dn&&(l.flags|=128,a=!0,Fa(u,!1),l.lanes=4194304)}else{if(!a)if(t=an(n),t!==null){if(l.flags|=128,a=!0,t=t.updateQueue,l.updateQueue=t,on(l,t),Fa(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!et)return bt(l),null}else 2*Sl()-u.renderingStartTime>dn&&e!==536870912&&(l.flags|=128,a=!0,Fa(u,!1),l.lanes=4194304);u.isBackwards?(n.sibling=l.child,l.child=n):(t=u.last,t!==null?t.sibling=n:l.child=n,u.last=n)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=Sl(),l.sibling=null,t=Dt.current,A(Dt,a?t&1|2:t&1),l):(bt(l),null);case 22:case 23:return ql(l),Hi(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(bt(l),l.subtreeFlags&6&&(l.flags|=8192)):bt(l),e=l.updateQueue,e!==null&&on(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&D(Me),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Hl(Mt),bt(l),null;case 25:return null;case 30:return null}throw Error(d(156,l.tag))}function B0(t,l){switch(vi(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Hl(Mt),Ql(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return vu(l),null;case 13:if(ql(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(d(340));qa()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return D(Dt),null;case 4:return Ql(),null;case 10:return Hl(l.type),null;case 22:case 23:return ql(l),Hi(),t!==null&&D(Me),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Hl(Mt),null;case 25:return null;default:return null}}function Bs(t,l){switch(vi(l),l.tag){case 3:Hl(Mt),Ql();break;case 26:case 27:case 5:vu(l);break;case 4:Ql();break;case 13:ql(l);break;case 19:D(Dt);break;case 10:Hl(l.type);break;case 22:case 23:ql(l),Hi(),t!==null&&D(Me);break;case 24:Hl(Mt)}}function Ia(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&t)===t){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){dt(l,l.return,c)}}function Pl(t,l,e){try{var a=l.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=l;var f=e,m=c;try{m()}catch(b){dt(u,f,b)}}}a=a.next}while(a!==n)}}catch(b){dt(l,l.return,b)}}function qs(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{To(l,e)}catch(a){dt(t,t.return,a)}}}function Ys(t,l,e){e.props=_e(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){dt(t,l,a)}}function Pa(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(u){dt(t,l,u)}}function El(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){dt(t,l,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){dt(t,l,u)}else e.current=null}function Cs(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){dt(t,t.return,u)}}function cc(t,l,e){try{var a=t.stateNode;lh(a,t.type,e,l),a[Kt]=l}catch(u){dt(t,t.return,u)}}function js(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ce(t.type)||t.tag===4}function fc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||js(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ce(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=xn));else if(a!==4&&(a===27&&ce(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(oc(t,l,e),t=t.sibling;t!==null;)oc(t,l,e),t=t.sibling}function sn(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&ce(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(sn(t,l,e),t=t.sibling;t!==null;)sn(t,l,e),t=t.sibling}function Gs(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);jt(l,a,e),l[Qt]=t,l[Kt]=e}catch(n){dt(t,t.return,n)}}var jl=!1,zt=!1,sc=!1,ws=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function q0(t,l){if(t=t.containerInfo,Bc=Dn,t=Wf(t),fi(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break t}var i=0,c=-1,f=-1,m=0,b=0,x=t,y=null;l:for(;;){for(var g;x!==e||u!==0&&x.nodeType!==3||(c=i+u),x!==n||a!==0&&x.nodeType!==3||(f=i+a),x.nodeType===3&&(i+=x.nodeValue.length),(g=x.firstChild)!==null;)y=x,x=g;for(;;){if(x===t)break l;if(y===e&&++m===u&&(c=i),y===n&&++b===a&&(f=i),(g=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=g}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(qc={focusedElem:t,selectionRange:e},Dn=!1,Rt=l;Rt!==null;)if(l=Rt,t=l.child,(l.subtreeFlags&1024)!==0&&t!==null)t.return=l,Rt=t;else for(;Rt!==null;){switch(l=Rt,n=l.alternate,t=l.flags,l.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,e=l,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var X=_e(e.type,u,e.elementType===e.type);t=a.getSnapshotBeforeUpdate(X,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(j){dt(e,e.return,j)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)jc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=l.sibling,t!==null){t.return=l.return,Rt=t;break}Rt=l.return}}function Xs(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:te(t,e),a&4&&Ia(5,e);break;case 1:if(te(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){dt(e,e.return,i)}else{var u=_e(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(u,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){dt(e,e.return,i)}}a&64&&qs(e),a&512&&Pa(e,e.return);break;case 3:if(te(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{To(t,l)}catch(i){dt(e,e.return,i)}}break;case 27:l===null&&a&4&&Gs(e);case 26:case 5:te(t,e),l===null&&a&4&&Cs(e),a&512&&Pa(e,e.return);break;case 12:te(t,e);break;case 13:te(t,e),a&4&&Zs(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=Z0.bind(null,e),fh(t,e))));break;case 22:if(a=e.memoizedState!==null||jl,!a){l=l!==null&&l.memoizedState!==null||zt,u=jl;var n=zt;jl=a,(zt=l)&&!n?le(t,e,(e.subtreeFlags&8772)!==0):te(t,e),jl=u,zt=n}break;case 30:break;default:te(t,e)}}function Qs(t){var l=t.alternate;l!==null&&(t.alternate=null,Qs(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Ln(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,$t=!1;function Gl(t,l,e){for(e=e.child;e!==null;)Ls(t,l,e),e=e.sibling}function Ls(t,l,e){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Sa,e)}catch{}switch(e.tag){case 26:zt||El(e,l),Gl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:zt||El(e,l);var a=pt,u=$t;ce(e.type)&&(pt=e.stateNode,$t=!1),Gl(t,l,e),fu(e.stateNode),pt=a,$t=u;break;case 5:zt||El(e,l);case 6:if(a=pt,u=$t,pt=null,Gl(t,l,e),pt=a,$t=u,pt!==null)if($t)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(e.stateNode)}catch(n){dt(e,l,n)}else try{pt.removeChild(e.stateNode)}catch(n){dt(e,l,n)}break;case 18:pt!==null&&($t?(t=pt,Ur(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),gu(t)):Ur(pt,e.stateNode));break;case 4:a=pt,u=$t,pt=e.stateNode.containerInfo,$t=!0,Gl(t,l,e),pt=a,$t=u;break;case 0:case 11:case 14:case 15:zt||Pl(2,e,l),zt||Pl(4,e,l),Gl(t,l,e);break;case 1:zt||(El(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Ys(e,l,a)),Gl(t,l,e);break;case 21:Gl(t,l,e);break;case 22:zt=(a=zt)||e.memoizedState!==null,Gl(t,l,e),zt=a;break;default:Gl(t,l,e)}}function Zs(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gu(t)}catch(e){dt(l,l.return,e)}}function Y0(t){switch(t.tag){case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new ws),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new ws),l;default:throw Error(d(435,t.tag))}}function rc(t,l){var e=Y0(t);l.forEach(function(a){var u=V0.bind(null,t,a);e.has(a)||(e.add(a),a.then(u,u))})}function el(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(ce(c.type)){pt=c.stateNode,$t=!1;break t}break;case 5:pt=c.stateNode,$t=!1;break t;case 3:case 4:pt=c.stateNode.containerInfo,$t=!0;break t}c=c.return}if(pt===null)throw Error(d(160));Ls(n,i,u),pt=null,$t=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(l.subtreeFlags&13878)for(l=l.child;l!==null;)Vs(l,t),l=l.sibling}var pl=null;function Vs(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:el(l,t),al(t),a&4&&(Pl(3,t,t.return),Ia(3,t),Pl(5,t,t.return));break;case 1:el(l,t),al(t),a&512&&(zt||e===null||El(e,e.return)),a&64&&jl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=pl;if(el(l,t),al(t),a&512&&(zt||e===null||El(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,u=u.ownerDocument||u;l:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ea]||n[Qt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),jt(n,a,e),n[Qt]=t,Nt(n),a=n;break t;case"link":var i=Gr("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break l}}n=u.createElement(a),jt(n,a,e),u.head.appendChild(n);break;case"meta":if(i=Gr("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break l}}n=u.createElement(a),jt(n,a,e),u.head.appendChild(n);break;default:throw Error(d(468,a))}n[Qt]=t,Nt(n),a=n}t.stateNode=a}else wr(u,t.type,t.stateNode);else t.stateNode=jr(u,a,t.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?wr(u,t.type,t.stateNode):jr(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&cc(t,t.memoizedProps,e.memoizedProps)}break;case 27:el(l,t),al(t),a&512&&(zt||e===null||El(e,e.return)),e!==null&&a&4&&cc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(el(l,t),al(t),a&512&&(zt||e===null||El(e,e.return)),t.flags&32){u=t.stateNode;try{Qe(u,"")}catch(g){dt(t,t.return,g)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,cc(t,u,e!==null?e.memoizedProps:u)),a&1024&&(sc=!0);break;case 6:if(el(l,t),al(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(g){dt(t,t.return,g)}}break;case 3:if(An=null,u=pl,pl=En(l.containerInfo),el(l,t),pl=u,al(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{gu(l.containerInfo)}catch(g){dt(t,t.return,g)}sc&&(sc=!1,Ks(t));break;case 4:a=pl,pl=En(t.stateNode.containerInfo),el(l,t),al(t),pl=a;break;case 12:el(l,t),al(t);break;case 13:el(l,t),al(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(pc=Sl()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rc(t,a)));break;case 22:u=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,m=jl,b=zt;if(jl=m||u,zt=b||f,el(l,t),zt=b,jl=m,al(t),a&8192)t:for(l=t.stateNode,l._visibility=u?l._visibility&-2:l._visibility|1,u&&(e===null||f||jl||zt||Ne(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){f=e=l;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var x=f.memoizedProps.style,y=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(g){dt(f,f.return,g)}}}else if(l.tag===6){if(e===null){f=l;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){dt(f,f.return,g)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,rc(t,e))));break;case 19:el(l,t),al(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rc(t,a)));break;case 30:break;case 21:break;default:el(l,t),al(t)}}function al(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(js(a)){e=a;break}a=a.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var u=e.stateNode,n=fc(t);sn(t,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(Qe(i,""),e.flags&=-33);var c=fc(t);sn(t,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,m=fc(t);oc(t,m,f);break;default:throw Error(d(161))}}catch(b){dt(t,t.return,b)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Ks(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Ks(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function te(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Xs(t,l.alternate,l),l=l.sibling}function Ne(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:Pl(4,l,l.return),Ne(l);break;case 1:El(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&Ys(l,l.return,e),Ne(l);break;case 27:fu(l.stateNode);case 26:case 5:El(l,l.return),Ne(l);break;case 22:l.memoizedState===null&&Ne(l);break;case 30:Ne(l);break;default:Ne(l)}t=t.sibling}}function le(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,u=t,n=l,i=n.flags;switch(n.tag){case 0:case 11:case 15:le(u,n,e),Ia(4,n);break;case 1:if(le(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){dt(a,a.return,m)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)xo(f[u],c)}catch(m){dt(a,a.return,m)}}e&&i&64&&qs(n),Pa(n,n.return);break;case 27:Gs(n);case 26:case 5:le(u,n,e),e&&a===null&&i&4&&Cs(n),Pa(n,n.return);break;case 12:le(u,n,e);break;case 13:le(u,n,e),e&&i&4&&Zs(u,n);break;case 22:n.memoizedState===null&&le(u,n,e),Pa(n,n.return);break;case 30:break;default:le(u,n,e)}l=l.sibling}}function dc(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&ja(e))}function hc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&ja(t))}function zl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Js(t,l,e,a),l=l.sibling}function Js(t,l,e,a){var u=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,e,a),u&2048&&Ia(9,l);break;case 1:zl(t,l,e,a);break;case 3:zl(t,l,e,a),u&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&ja(t)));break;case 12:if(u&2048){zl(t,l,e,a),t=l.stateNode;try{var n=l.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){dt(l,l.return,f)}}else zl(t,l,e,a);break;case 13:zl(t,l,e,a);break;case 23:break;case 22:n=l.stateNode,i=l.alternate,l.memoizedState!==null?n._visibility&2?zl(t,l,e,a):tu(t,l):n._visibility&2?zl(t,l,e,a):(n._visibility|=2,ca(t,l,e,a,(l.subtreeFlags&10256)!==0)),u&2048&&dc(i,l);break;case 24:zl(t,l,e,a),u&2048&&hc(l.alternate,l);break;default:zl(t,l,e,a)}}function ca(t,l,e,a,u){for(u=u&&(l.subtreeFlags&10256)!==0,l=l.child;l!==null;){var n=t,i=l,c=e,f=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,c,f,u),Ia(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ca(n,i,c,f,u):tu(n,i):(b._visibility|=2,ca(n,i,c,f,u)),u&&m&2048&&dc(i.alternate,i);break;case 24:ca(n,i,c,f,u),u&&m&2048&&hc(i.alternate,i);break;default:ca(n,i,c,f,u)}l=l.sibling}}function tu(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,u=a.flags;switch(a.tag){case 22:tu(e,a),u&2048&&dc(a.alternate,a);break;case 24:tu(e,a),u&2048&&hc(a.alternate,a);break;default:tu(e,a)}l=l.sibling}}var lu=8192;function fa(t){if(t.subtreeFlags&lu)for(t=t.child;t!==null;)ks(t),t=t.sibling}function ks(t){switch(t.tag){case 26:fa(t),t.flags&lu&&t.memoizedState!==null&&xh(pl,t.memoizedState,t.memoizedProps);break;case 5:fa(t);break;case 3:case 4:var l=pl;pl=En(t.stateNode.containerInfo),fa(t),pl=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=lu,lu=16777216,fa(t),lu=l):fa(t));break;default:fa(t)}}function $s(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function eu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Rt=a,Fs(a,t)}$s(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ws(t),t=t.sibling}function Ws(t){switch(t.tag){case 0:case 11:case 15:eu(t),t.flags&2048&&Pl(9,t,t.return);break;case 3:eu(t);break;case 12:eu(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,rn(t)):eu(t);break;default:eu(t)}}function rn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Rt=a,Fs(a,t)}$s(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:Pl(8,l,l.return),rn(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,rn(l));break;default:rn(l)}t=t.sibling}}function Fs(t,l){for(;Rt!==null;){var e=Rt;switch(e.tag){case 0:case 11:case 15:Pl(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ja(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Rt=a;else t:for(e=t;Rt!==null;){a=Rt;var u=a.sibling,n=a.return;if(Qs(a),a===e){Rt=null;break t}if(u!==null){u.return=n,Rt=u;break t}Rt=n}}}var C0={getCacheForType:function(t){var l=Lt(Mt),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e}},j0=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,J=null,$=0,ct=0,ul=null,ee=!1,oa=!1,mc=!1,wl=0,St=0,ae=0,Ue=0,yc=0,ml=0,sa=0,au=null,Wt=null,gc=!1,pc=0,dn=1/0,hn=null,ue=null,Ct=0,ne=null,ra=null,da=0,bc=0,vc=null,Is=null,uu=0,Sc=null;function nl(){if((it&2)!==0&&$!==0)return $&-$;if(v.T!==null){var t=Pe;return t!==0?t:Mc()}return hf()}function Ps(){ml===0&&(ml=($&536870912)===0||et?of():536870912);var t=hl.current;return t!==null&&(t.flags|=32),ml}function il(t,l,e){(t===mt&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(ha(t,0),ie(t,$,ml,!1)),Ta(t,e),((it&2)===0||t!==mt)&&(t===mt&&((it&2)===0&&(Ue|=e),St===4&&ie(t,$,ml,!1)),Al(t))}function tr(t,l,e){if((it&6)!==0)throw Error(d(327));var a=!e&&(l&124)===0&&(l&t.expiredLanes)===0||xa(t,l),u=a?X0(t,l):Ec(t,l,!0),n=a;do{if(u===0){oa&&!a&&ie(t,l,0,!1);break}else{if(e=t.current.alternate,n&&!G0(e)){u=Ec(t,l,!1),n=!1;continue}if(u===2){if(n=l,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;u=au;var f=c.current.memoizedState.isDehydrated;if(f&&(ha(c,i).flags|=256),i=Ec(c,i,!1),i!==2){if(mc&&!f){c.errorRecoveryDisabledLanes|=n,Ue|=n,u=4;break t}n=Wt,Wt=u,n!==null&&(Wt===null?Wt=n:Wt.push.apply(Wt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){ha(t,0),ie(t,l,0,!0);break}t:{switch(a=t,n=u,n){case 0:case 1:throw Error(d(345));case 4:if((l&4194048)!==l)break;case 6:ie(a,l,ml,!ee);break t;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((l&62914560)===l&&(u=pc+300-Sl(),10<u)){if(ie(a,l,ml,!ee),Eu(a,0,!0)!==0)break t;a.timeoutHandle=_r(lr.bind(null,a,e,Wt,hn,gc,l,ml,Ue,sa,ee,n,2,-0,0),u);break t}lr(a,e,Wt,hn,gc,l,ml,Ue,sa,ee,n,0,-0,0)}}break}while(!0);Al(t)}function lr(t,l,e,a,u,n,i,c,f,m,b,x,y,g){if(t.timeoutHandle=-1,x=l.subtreeFlags,(x&8192||(x&16785408)===16785408)&&(ru={stylesheets:null,count:0,unsuspend:Sh},ks(l),x=Th(),x!==null)){t.cancelPendingCommit=x(fr.bind(null,t,l,n,e,a,u,i,c,f,b,1,y,g)),ie(t,n,i,!m);return}fr(t,l,n,e,a,u,i,c,f)}function G0(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!tl(n(),u))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ie(t,l,e,a){l&=~yc,l&=~Ue,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var u=l;0<u;){var n=31-Pt(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&rf(t,e,l)}function mn(){return(it&6)===0?(nu(0),!1):!0}function xc(){if(J!==null){if(ct===0)var t=J.return;else t=J,Rl=Ae=null,ji(t),na=null,$a=0,t=J;for(;t!==null;)Bs(t.alternate,t),t=t.return;J=null}}function ha(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,ah(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),xc(),mt=t,J=e=_l(t.current,null),$=l,ct=0,ul=null,ee=!1,oa=xa(t,l),mc=!1,sa=ml=yc=Ue=ae=St=0,Wt=au=null,gc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var u=31-Pt(a),n=1<<u;l|=t[u],a&=~n}return wl=l,qu(),e}function er(t,l){V=null,v.H=tn,l===wa||l===Zu?(l=vo(),ct=3):l===go?(l=vo(),ct=4):ct=l===Ss?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,ul=l,J===null&&(St=1,nn(t,ol(l,t.current)))}function ar(){var t=v.H;return v.H=tn,t===null?tn:t}function ur(){var t=v.A;return v.A=C0,t}function Tc(){St=4,ee||($&4194048)!==$&&hl.current!==null||(oa=!0),(ae&134217727)===0&&(Ue&134217727)===0||mt===null||ie(mt,$,ml,!1)}function Ec(t,l,e){var a=it;it|=2;var u=ar(),n=ur();(mt!==t||$!==l)&&(hn=null,ha(t,l)),l=!1;var i=St;t:do try{if(ct!==0&&J!==null){var c=J,f=ul;switch(ct){case 8:xc(),i=6;break t;case 3:case 2:case 9:case 6:hl.current===null&&(l=!0);var m=ct;if(ct=0,ul=null,ma(t,c,f,m),e&&oa){i=0;break t}break;default:m=ct,ct=0,ul=null,ma(t,c,f,m)}}w0(),i=St;break}catch(b){er(t,b)}while(!0);return l&&t.shellSuspendCounter++,Rl=Ae=null,it=a,v.H=u,v.A=n,J===null&&(mt=null,$=0,qu()),i}function w0(){for(;J!==null;)nr(J)}function X0(t,l){var e=it;it|=2;var a=ar(),u=ur();mt!==t||$!==l?(hn=null,dn=Sl()+500,ha(t,l)):oa=xa(t,l);t:do try{if(ct!==0&&J!==null){l=J;var n=ul;l:switch(ct){case 1:ct=0,ul=null,ma(t,l,n,1);break;case 2:case 9:if(po(n)){ct=0,ul=null,ir(l);break}l=function(){ct!==2&&ct!==9||mt!==t||(ct=7),Al(t)},n.then(l,l);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:po(n)?(ct=0,ul=null,ir(l)):(ct=0,ul=null,ma(t,l,n,7));break;case 5:var i=null;switch(J.tag){case 26:i=J.memoizedState;case 5:case 27:var c=J;if(!i||Xr(i)){ct=0,ul=null;var f=c.sibling;if(f!==null)J=f;else{var m=c.return;m!==null?(J=m,yn(m)):J=null}break l}}ct=0,ul=null,ma(t,l,n,5);break;case 6:ct=0,ul=null,ma(t,l,n,6);break;case 8:xc(),St=6;break t;default:throw Error(d(462))}}Q0();break}catch(b){er(t,b)}while(!0);return Rl=Ae=null,v.H=a,v.A=u,it=e,J!==null?0:(mt=null,$=0,qu(),St)}function Q0(){for(;J!==null&&!sd();)nr(J)}function nr(t){var l=Rs(t.alternate,t,wl);t.memoizedProps=t.pendingProps,l===null?yn(t):J=l}function ir(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Os(e,l,l.pendingProps,l.type,void 0,$);break;case 11:l=Os(e,l,l.pendingProps,l.type.render,l.ref,$);break;case 5:ji(l);default:Bs(e,l),l=J=io(l,wl),l=Rs(e,l,wl)}t.memoizedProps=t.pendingProps,l===null?yn(t):J=l}function ma(t,l,e,a){Rl=Ae=null,ji(l),na=null,$a=0;var u=l.return;try{if(U0(t,u,l,e,$)){St=1,nn(t,ol(e,t.current)),J=null;return}}catch(n){if(u!==null)throw J=u,n;St=1,nn(t,ol(e,t.current)),J=null;return}l.flags&32768?(et||a===1?t=!0:oa||($&536870912)!==0?t=!1:(ee=t=!0,(a===2||a===9||a===3||a===6)&&(a=hl.current,a!==null&&a.tag===13&&(a.flags|=16384))),cr(l,t)):yn(l)}function yn(t){var l=t;do{if((l.flags&32768)!==0){cr(l,ee);return}t=l.return;var e=H0(l.alternate,l,wl);if(e!==null){J=e;return}if(l=l.sibling,l!==null){J=l;return}J=l=t}while(l!==null);St===0&&(St=5)}function cr(t,l){do{var e=B0(t.alternate,t);if(e!==null){e.flags&=32767,J=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){J=t;return}J=t=e}while(t!==null);St=6,J=null}function fr(t,l,e,a,u,n,i,c,f){t.cancelPendingCommit=null;do gn();while(Ct!==0);if((it&6)!==0)throw Error(d(327));if(l!==null){if(l===t.current)throw Error(d(177));if(n=l.lanes|l.childLanes,n|=hi,Sd(t,e,n,i,c,f),t===mt&&(J=mt=null,$=0),ra=l,ne=t,da=e,bc=n,vc=u,Is=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K0(Su,function(){return hr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,u=O.p,O.p=2,i=it,it|=4;try{q0(t,l,e)}finally{it=i,O.p=u,v.T=a}}Ct=1,or(),sr(),rr()}}function or(){if(Ct===1){Ct=0;var t=ne,l=ra,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=v.T,v.T=null;var a=O.p;O.p=2;var u=it;it|=4;try{Vs(l,t);var n=qc,i=Wf(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&$f(c.ownerDocument.documentElement,c)){if(f!==null&&fi(c)){var m=f.start,b=f.end;if(b===void 0&&(b=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(b,c.value.length);else{var x=c.ownerDocument||document,y=x&&x.defaultView||window;if(y.getSelection){var g=y.getSelection(),X=c.textContent.length,j=Math.min(f.start,X),st=f.end===void 0?j:Math.min(f.end,X);!g.extend&&j>st&&(i=st,st=j,j=i);var r=kf(c,j),s=kf(c,st);if(r&&s&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var h=x.createRange();h.setStart(r.node,r.offset),g.removeAllRanges(),j>st?(g.addRange(h),g.extend(s.node,s.offset)):(h.setEnd(s.node,s.offset),g.addRange(h))}}}}for(x=[],g=c;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var S=x[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Dn=!!Bc,qc=Bc=null}finally{it=u,O.p=a,v.T=e}}t.current=l,Ct=2}}function sr(){if(Ct===2){Ct=0;var t=ne,l=ra,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=v.T,v.T=null;var a=O.p;O.p=2;var u=it;it|=4;try{Xs(t,l.alternate,l)}finally{it=u,O.p=a,v.T=e}}Ct=3}}function rr(){if(Ct===4||Ct===3){Ct=0,rd();var t=ne,l=ra,e=da,a=Is;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Ct=5:(Ct=0,ra=ne=null,dr(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ue=null),Xn(e),l=l.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Sa,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=v.T,u=O.p,O.p=2,v.T=null;try{for(var n=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{v.T=l,O.p=u}}(da&3)!==0&&gn(),Al(t),u=t.pendingLanes,(e&4194090)!==0&&(u&42)!==0?t===Sc?uu++:(uu=0,Sc=t):uu=0,nu(0)}}function dr(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,ja(l)))}function gn(t){return or(),sr(),rr(),hr()}function hr(){if(Ct!==5)return!1;var t=ne,l=bc;bc=0;var e=Xn(da),a=v.T,u=O.p;try{O.p=32>e?32:e,v.T=null,e=vc,vc=null;var n=ne,i=da;if(Ct=0,ra=ne=null,da=0,(it&6)!==0)throw Error(d(331));var c=it;if(it|=4,Ws(n.current),Js(n,n.current,i,e),it=c,nu(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Sa,n)}catch{}return!0}finally{O.p=u,v.T=a,dr(t,l)}}function mr(t,l,e){l=ol(e,l),l=Ii(t.stateNode,l,2),t=$l(t,l,2),t!==null&&(Ta(t,2),Al(t))}function dt(t,l,e){if(t.tag===3)mr(t,t,e);else for(;l!==null;){if(l.tag===3){mr(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ue===null||!ue.has(a))){t=ol(e,t),e=bs(2),a=$l(l,e,2),a!==null&&(vs(e,a,l,t),Ta(a,2),Al(a));break}}l=l.return}}function zc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new j0;var u=new Set;a.set(l,u)}else u=a.get(l),u===void 0&&(u=new Set,a.set(l,u));u.has(e)||(mc=!0,u.add(e),t=L0.bind(null,t,l,e),l.then(t,t))}function L0(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,mt===t&&($&e)===e&&(St===4||St===3&&($&62914560)===$&&300>Sl()-pc?(it&2)===0&&ha(t,0):yc|=e,sa===$&&(sa=0)),Al(t)}function yr(t,l){l===0&&(l=sf()),t=$e(t,l),t!==null&&(Ta(t,l),Al(t))}function Z0(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),yr(t,e)}function V0(t,l){var e=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(l),yr(t,e)}function K0(t,l){return Cn(t,l)}var pn=null,ya=null,Ac=!1,bn=!1,Oc=!1,Re=0;function Al(t){t!==ya&&t.next===null&&(ya===null?pn=ya=t:ya=ya.next=t),bn=!0,Ac||(Ac=!0,k0())}function nu(t,l){if(!Oc&&bn){Oc=!0;do for(var e=!1,a=pn;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-Pt(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,vr(a,n))}else n=$,n=Eu(a,a===mt?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||xa(a,n)||(e=!0,vr(a,n));a=a.next}while(e);Oc=!1}}function J0(){gr()}function gr(){bn=Ac=!1;var t=0;Re!==0&&(eh()&&(t=Re),Re=0);for(var l=Sl(),e=null,a=pn;a!==null;){var u=a.next,n=pr(a,l);n===0?(a.next=null,e===null?pn=u:e.next=u,u===null&&(ya=e)):(e=a,(t!==0||(n&3)!==0)&&(bn=!0)),a=u}nu(t)}function pr(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-Pt(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=vd(c,l)):f<=l&&(t.expiredLanes|=c),n&=~c}if(l=mt,e=$,e=Eu(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&jn(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||xa(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&jn(a),Xn(e)){case 2:case 8:e=cf;break;case 32:e=Su;break;case 268435456:e=ff;break;default:e=Su}return a=br.bind(null,t),e=Cn(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&jn(a),t.callbackPriority=2,t.callbackNode=null,2}function br(t,l){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(gn()&&t.callbackNode!==e)return null;var a=$;return a=Eu(t,t===mt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(tr(t,a,l),pr(t,Sl()),t.callbackNode!=null&&t.callbackNode===e?br.bind(null,t):null)}function vr(t,l){if(gn())return null;tr(t,l,!0)}function k0(){uh(function(){(it&6)!==0?Cn(nf,J0):gr()})}function Mc(){return Re===0&&(Re=of()),Re}function Sr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Du(""+t)}function xr(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function $0(t,l,e,a,u){if(l==="submit"&&e&&e.stateNode===u){var n=Sr((u[Kt]||null).action),i=a.submitter;i&&(l=(l=i[Kt]||null)?Sr(l.formAction):i.getAttribute("formAction"),l!==null&&(n=l,i=null));var c=new Ru("action","action",null,a,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Re!==0){var f=i?xr(u,i):new FormData(u);Ji(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?xr(u,i):new FormData(u),Ji(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Dc=0;Dc<di.length;Dc++){var _c=di[Dc],W0=_c.toLowerCase(),F0=_c[0].toUpperCase()+_c.slice(1);gl(W0,"on"+F0)}gl(Pf,"onAnimationEnd"),gl(to,"onAnimationIteration"),gl(lo,"onAnimationStart"),gl("dblclick","onDoubleClick"),gl("focusin","onFocus"),gl("focusout","onBlur"),gl(m0,"onTransitionRun"),gl(y0,"onTransitionStart"),gl(g0,"onTransitionCancel"),gl(eo,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function Tr(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],u=a.event;a=a.listeners;t:{var n=void 0;if(l)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(b){un(b)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(b){un(b)}u.currentTarget=null,n=f}}}}function k(t,l){var e=l[Qn];e===void 0&&(e=l[Qn]=new Set);var a=t+"__bubble";e.has(a)||(Er(l,t,2,!1),e.add(a))}function Nc(t,l,e){var a=0;l&&(a|=4),Er(e,t,a,l)}var vn="_reactListening"+Math.random().toString(36).slice(2);function Uc(t){if(!t[vn]){t[vn]=!0,yf.forEach(function(e){e!=="selectionchange"&&(I0.has(e)||Nc(e,!1,t),Nc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[vn]||(l[vn]=!0,Nc("selectionchange",!1,l))}}function Er(t,l,e,a){switch(Jr(l)){case 2:var u=Ah;break;case 8:u=Oh;break;default:u=Vc}e=u.bind(null,l,e,t),u=void 0,!Pn||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(l,e,{capture:!0,passive:u}):t.addEventListener(l,e,!0):u!==void 0?t.addEventListener(l,e,{passive:u}):t.addEventListener(l,e,!1)}function Rc(t,l,e,a,u){var n=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Ye(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue t}c=c.parentNode}}a=a.return}_f(function(){var m=n,b=Fn(e),x=[];t:{var y=ao.get(t);if(y!==void 0){var g=Ru,X=t;switch(t){case"keypress":if(Nu(e)===0)break t;case"keydown":case"keyup":g=Kd;break;case"focusin":X="focus",g=ai;break;case"focusout":X="blur",g=ai;break;case"beforeblur":case"afterblur":g=ai;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$d;break;case Pf:case to:case lo:g=Cd;break;case eo:g=Fd;break;case"scroll":case"scrollend":g=Rd;break;case"wheel":g=Pd;break;case"copy":case"cut":case"paste":g=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bf;break;case"toggle":case"beforetoggle":g=l0}var j=(l&4)!==0,st=!j&&(t==="scroll"||t==="scrollend"),r=j?y!==null?y+"Capture":null:y;j=[];for(var s=m,h;s!==null;){var S=s;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||r===null||(S=Aa(s,r),S!=null&&j.push(cu(s,S,h))),st)break;s=s.return}0<j.length&&(y=new g(y,X,null,e,b),x.push({event:y,listeners:j}))}}if((l&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",y&&e!==Wn&&(X=e.relatedTarget||e.fromElement)&&(Ye(X)||X[qe]))break t;if((g||y)&&(y=b.window===b?b:(y=b.ownerDocument)?y.defaultView||y.parentWindow:window,g?(X=e.relatedTarget||e.toElement,g=m,X=X?Ye(X):null,X!==null&&(st=Q(X),j=X.tag,X!==st||j!==5&&j!==27&&j!==6)&&(X=null)):(g=null,X=m),g!==X)){if(j=Rf,S="onMouseLeave",r="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(j=Bf,S="onPointerLeave",r="onPointerEnter",s="pointer"),st=g==null?y:za(g),h=X==null?y:za(X),y=new j(S,s+"leave",g,e,b),y.target=st,y.relatedTarget=h,S=null,Ye(b)===m&&(j=new j(r,s+"enter",X,e,b),j.target=h,j.relatedTarget=st,S=j),st=S,g&&X)l:{for(j=g,r=X,s=0,h=j;h;h=ga(h))s++;for(h=0,S=r;S;S=ga(S))h++;for(;0<s-h;)j=ga(j),s--;for(;0<h-s;)r=ga(r),h--;for(;s--;){if(j===r||r!==null&&j===r.alternate)break l;j=ga(j),r=ga(r)}j=null}else j=null;g!==null&&zr(x,y,g,j,!1),X!==null&&st!==null&&zr(x,st,X,j,!0)}}t:{if(y=m?za(m):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var _=Qf;else if(wf(y))if(Lf)_=r0;else{_=o0;var K=f0}else g=y.nodeName,!g||g.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&$n(m.elementType)&&(_=Qf):_=s0;if(_&&(_=_(t,m))){Xf(x,_,e,b);break t}K&&K(t,y,m),t==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&kn(y,"number",y.value)}switch(K=m?za(m):window,t){case"focusin":(wf(K)||K.contentEditable==="true")&&(Ke=K,oi=m,Ha=null);break;case"focusout":Ha=oi=Ke=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,Ff(x,e,b);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Ff(x,e,b)}var q;if(ni)t:{switch(t){case"compositionstart":var G="onCompositionStart";break t;case"compositionend":G="onCompositionEnd";break t;case"compositionupdate":G="onCompositionUpdate";break t}G=void 0}else Ve?jf(t,e)&&(G="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(G="onCompositionStart");G&&(qf&&e.locale!=="ko"&&(Ve||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ve&&(q=Nf()):(Vl=b,ti="value"in Vl?Vl.value:Vl.textContent,Ve=!0)),K=Sn(m,G),0<K.length&&(G=new Hf(G,t,null,e,b),x.push({event:G,listeners:K}),q?G.data=q:(q=Gf(e),q!==null&&(G.data=q)))),(q=a0?u0(t,e):n0(t,e))&&(G=Sn(m,"onBeforeInput"),0<G.length&&(K=new Hf("onBeforeInput","beforeinput",null,e,b),x.push({event:K,listeners:G}),K.data=q)),$0(x,t,m,e,b)}Tr(x,l)})}function cu(t,l,e){return{instance:t,listener:l,currentTarget:e}}function Sn(t,l){for(var e=l+"Capture",a=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Aa(t,e),u!=null&&a.unshift(cu(t,u,n)),u=Aa(t,l),u!=null&&a.push(cu(t,u,n))),t.tag===3)return a;t=t.return}return[]}function ga(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zr(t,l,e,a,u){for(var n=l._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=Aa(e,n),m!=null&&i.unshift(cu(e,m,f))):u||(m=Aa(e,n),m!=null&&i.push(cu(e,m,f)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var P0=/\r\n?/g,th=/\u0000|\uFFFD/g;function Ar(t){return(typeof t=="string"?t:""+t).replace(P0,`
`).replace(th,"")}function Or(t,l){return l=Ar(l),Ar(t)===l}function xn(){}function ot(t,l,e,a,u,n){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Qe(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Qe(t,""+a);break;case"className":Au(t,"class",a);break;case"tabIndex":Au(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Au(t,e,a);break;case"style":Mf(t,a,n);break;case"data":if(l!=="object"){Au(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Du(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(l!=="input"&&ot(t,l,"name",u.name,u,null),ot(t,l,"formEncType",u.formEncType,u,null),ot(t,l,"formMethod",u.formMethod,u,null),ot(t,l,"formTarget",u.formTarget,u,null)):(ot(t,l,"encType",u.encType,u,null),ot(t,l,"method",u.method,u,null),ot(t,l,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Du(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=xn);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Du(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":k("beforetoggle",t),k("toggle",t),zu(t,"popover",a);break;case"xlinkActuate":Ml(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ml(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ml(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ml(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ml(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ml(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ml(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ml(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ml(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Nd.get(e)||e,zu(t,e,a))}}function Hc(t,l,e,a,u,n){switch(e){case"style":Mf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Qe(t,a):(typeof a=="number"||typeof a=="bigint")&&Qe(t,""+a);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"onClick":a!=null&&(t.onclick=xn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),l=e.slice(2,u?e.length-7:void 0),n=t[Kt]||null,n=n!=null?n[e]:null,typeof n=="function"&&t.removeEventListener(l,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,u);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):zu(t,e,a)}}}function jt(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",t),k("load",t);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:ot(t,l,n,i,e,null)}}u&&ot(t,l,"srcSet",e.srcSet,e,null),a&&ot(t,l,"src",e.src,e,null);return;case"input":k("invalid",t);var c=n=i=u=null,f=null,m=null;for(a in e)if(e.hasOwnProperty(a)){var b=e[a];if(b!=null)switch(a){case"name":u=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":m=b;break;case"value":n=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,l));break;default:ot(t,l,a,b,e,null)}}Ef(t,n,c,f,m,i,u,!1),Ou(t);return;case"select":k("invalid",t),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ot(t,l,u,c,e,null)}l=n,e=i,t.multiple=!!a,l!=null?Xe(t,!!a,l,!1):e!=null&&Xe(t,!!a,e,!0);return;case"textarea":k("invalid",t),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:ot(t,l,i,c,e,null)}Af(t,a,u,n),Ou(t);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ot(t,l,f,a,e,null)}return;case"dialog":k("beforetoggle",t),k("toggle",t),k("cancel",t),k("close",t);break;case"iframe":case"object":k("load",t);break;case"video":case"audio":for(a=0;a<iu.length;a++)k(iu[a],t);break;case"image":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"embed":case"source":case"link":k("error",t),k("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:ot(t,l,m,a,e,null)}return;default:if($n(l)){for(b in e)e.hasOwnProperty(b)&&(a=e[b],a!==void 0&&Hc(t,l,b,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&ot(t,l,c,a,e,null))}function lh(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,b=null;for(g in e){var x=e[g];if(e.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=x;default:a.hasOwnProperty(g)||ot(t,l,g,null,a,x)}}for(var y in a){var g=a[y];if(x=e[y],a.hasOwnProperty(y)&&(g!=null||x!=null))switch(y){case"type":n=g;break;case"name":u=g;break;case"checked":m=g;break;case"defaultChecked":b=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,l));break;default:g!==x&&ot(t,l,y,g,a,x)}}Jn(t,i,c,f,m,b,n,u);return;case"select":g=i=c=y=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":g=f;default:a.hasOwnProperty(n)||ot(t,l,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":y=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&ot(t,l,u,n,a,f)}l=c,e=i,a=g,y!=null?Xe(t,!!e,y,!1):!!a!=!!e&&(l!=null?Xe(t,!!e,l,!0):Xe(t,!!e,e?[]:"",!1));return;case"textarea":g=y=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ot(t,l,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":y=u;break;case"defaultValue":g=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:u!==n&&ot(t,l,i,u,a,n)}zf(t,y,g);return;case"option":for(var X in e)if(y=e[X],e.hasOwnProperty(X)&&y!=null&&!a.hasOwnProperty(X))switch(X){case"selected":t.selected=!1;break;default:ot(t,l,X,null,a,y)}for(f in a)if(y=a[f],g=e[f],a.hasOwnProperty(f)&&y!==g&&(y!=null||g!=null))switch(f){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ot(t,l,f,y,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in e)y=e[j],e.hasOwnProperty(j)&&y!=null&&!a.hasOwnProperty(j)&&ot(t,l,j,null,a,y);for(m in a)if(y=a[m],g=e[m],a.hasOwnProperty(m)&&y!==g&&(y!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,l));break;default:ot(t,l,m,y,a,g)}return;default:if($n(l)){for(var st in e)y=e[st],e.hasOwnProperty(st)&&y!==void 0&&!a.hasOwnProperty(st)&&Hc(t,l,st,void 0,a,y);for(b in a)y=a[b],g=e[b],!a.hasOwnProperty(b)||y===g||y===void 0&&g===void 0||Hc(t,l,b,y,a,g);return}}for(var r in e)y=e[r],e.hasOwnProperty(r)&&y!=null&&!a.hasOwnProperty(r)&&ot(t,l,r,null,a,y);for(x in a)y=a[x],g=e[x],!a.hasOwnProperty(x)||y===g||y==null&&g==null||ot(t,l,x,y,a,g)}var Bc=null,qc=null;function Tn(t){return t.nodeType===9?t:t.ownerDocument}function Mr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dr(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Yc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Cc=null;function eh(){var t=window.event;return t&&t.type==="popstate"?t===Cc?!1:(Cc=t,!0):(Cc=null,!1)}var _r=typeof setTimeout=="function"?setTimeout:void 0,ah=typeof clearTimeout=="function"?clearTimeout:void 0,Nr=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Nr<"u"?function(t){return Nr.resolve(null).then(t).catch(nh)}:_r;function nh(t){setTimeout(function(){throw t})}function ce(t){return t==="head"}function Ur(t,l){var e=l,a=0,u=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(0<a&&8>a){e=a;var i=t.ownerDocument;if(e&1&&fu(i.documentElement),e&2&&fu(i.body),e&4)for(e=i.head,fu(e),i=e.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Ea]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=c}}if(u===0){t.removeChild(n),gu(l);return}u--}else e==="$"||e==="$?"||e==="$!"?u++:a=e.charCodeAt(0)-48;else a=0;e=n}while(e);gu(l)}function jc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":jc(e),Ln(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function ih(t,l,e,a){for(;t.nodeType===1;){var u=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ea])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=bl(t.nextSibling),t===null)break}return null}function ch(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=bl(t.nextSibling),t===null))return null;return t}function Gc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fh(t,l){var e=t.ownerDocument;if(t.data!=="$?"||e.readyState==="complete")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function bl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="F!"||l==="F")break;if(l==="/$")return null}}return t}var wc=null;function Rr(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(l===0)return t;l--}else e==="/$"&&l++}t=t.previousSibling}return null}function Hr(t,l,e){switch(l=Tn(e),t){case"html":if(t=l.documentElement,!t)throw Error(d(452));return t;case"head":if(t=l.head,!t)throw Error(d(453));return t;case"body":if(t=l.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function fu(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ln(t)}var yl=new Map,Br=new Set;function En(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xl=O.d;O.d={f:oh,r:sh,D:rh,C:dh,L:hh,m:mh,X:gh,S:yh,M:ph};function oh(){var t=Xl.f(),l=mn();return t||l}function sh(t){var l=Ce(t);l!==null&&l.tag===5&&l.type==="form"?ts(l):Xl.r(t)}var pa=typeof document>"u"?null:document;function qr(t,l,e){var a=pa;if(a&&typeof l=="string"&&l){var u=fl(l);u='link[rel="'+t+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Br.has(u)||(Br.add(u),t={rel:t,crossOrigin:e,href:l},a.querySelector(u)===null&&(l=a.createElement("link"),jt(l,"link",t),Nt(l),a.head.appendChild(l)))}}function rh(t){Xl.D(t),qr("dns-prefetch",t,null)}function dh(t,l){Xl.C(t,l),qr("preconnect",t,l)}function hh(t,l,e){Xl.L(t,l,e);var a=pa;if(a&&t&&l){var u='link[rel="preload"][as="'+fl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+fl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+fl(e.imageSizes)+'"]')):u+='[href="'+fl(t)+'"]';var n=u;switch(l){case"style":n=ba(t);break;case"script":n=va(t)}yl.has(n)||(t=B({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),yl.set(n,t),a.querySelector(u)!==null||l==="style"&&a.querySelector(ou(n))||l==="script"&&a.querySelector(su(n))||(l=a.createElement("link"),jt(l,"link",t),Nt(l),a.head.appendChild(l)))}}function mh(t,l){Xl.m(t,l);var e=pa;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",u='link[rel="modulepreload"][as="'+fl(a)+'"][href="'+fl(t)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=va(t)}if(!yl.has(n)&&(t=B({rel:"modulepreload",href:t},l),yl.set(n,t),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(su(n)))return}a=e.createElement("link"),jt(a,"link",t),Nt(a),e.head.appendChild(a)}}}function yh(t,l,e){Xl.S(t,l,e);var a=pa;if(a&&t){var u=je(a).hoistableStyles,n=ba(t);l=l||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(ou(n)))c.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":l},e),(e=yl.get(n))&&Xc(t,e);var f=i=a.createElement("link");Nt(f),jt(f,"link",t),f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,zn(i,l,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function gh(t,l){Xl.X(t,l);var e=pa;if(e&&t){var a=je(e).hoistableScripts,u=va(t),n=a.get(u);n||(n=e.querySelector(su(u)),n||(t=B({src:t,async:!0},l),(l=yl.get(u))&&Qc(t,l),n=e.createElement("script"),Nt(n),jt(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function ph(t,l){Xl.M(t,l);var e=pa;if(e&&t){var a=je(e).hoistableScripts,u=va(t),n=a.get(u);n||(n=e.querySelector(su(u)),n||(t=B({src:t,async:!0,type:"module"},l),(l=yl.get(u))&&Qc(t,l),n=e.createElement("script"),Nt(n),jt(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Yr(t,l,e,a){var u=(u=L.current)?En(u):null;if(!u)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=ba(e.href),e=je(u).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=ba(e.href);var n=je(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(ou(t)))&&!n._p&&(i.instance=n,i.state.loading=5),yl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},yl.set(t,e),n||bh(u,t,e,i.state))),l&&a===null)throw Error(d(528,""));return i}if(l&&a!==null)throw Error(d(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=va(e),e=je(u).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function ba(t){return'href="'+fl(t)+'"'}function ou(t){return'link[rel="stylesheet"]['+t+"]"}function Cr(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function bh(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),jt(l,"link",e),Nt(l),t.head.appendChild(l))}function va(t){return'[src="'+fl(t)+'"]'}function su(t){return"script[async]"+t}function jr(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+fl(e.href)+'"]');if(a)return l.instance=a,Nt(a),a;var u=B({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Nt(a),jt(a,"style",u),zn(a,e.precedence,t),l.instance=a;case"stylesheet":u=ba(e.href);var n=t.querySelector(ou(u));if(n)return l.state.loading|=4,l.instance=n,Nt(n),n;a=Cr(e),(u=yl.get(u))&&Xc(a,u),n=(t.ownerDocument||t).createElement("link"),Nt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),jt(n,"link",a),l.state.loading|=4,zn(n,e.precedence,t),l.instance=n;case"script":return n=va(e.src),(u=t.querySelector(su(n)))?(l.instance=u,Nt(u),u):(a=e,(u=yl.get(n))&&(a=B({},e),Qc(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),Nt(u),jt(u,"link",a),t.head.appendChild(u),l.instance=u);case"void":return null;default:throw Error(d(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,zn(a,e.precedence,t));return l.instance}function zn(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===l)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Xc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Qc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var An=null;function Gr(t,l,e){if(An===null){var a=new Map,u=An=new Map;u.set(e,a)}else u=An,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),u=0;u<e.length;u++){var n=e[u];if(!(n[Ea]||n[Qt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(l)||"";i=t+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function wr(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function vh(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Xr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ru=null;function Sh(){}function xh(t,l,e){if(ru===null)throw Error(d(475));var a=ru;if(l.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=ba(e.href),n=t.querySelector(ou(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=On.bind(a),t.then(a,a)),l.state.loading|=4,l.instance=n,Nt(n);return}n=t.ownerDocument||t,e=Cr(e),(u=yl.get(u))&&Xc(e,u),n=n.createElement("link"),Nt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),jt(n,"link",e),l.instance=n}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(a.count++,l=On.bind(a),t.addEventListener("load",l),t.addEventListener("error",l))}}function Th(){if(ru===null)throw Error(d(475));var t=ru;return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count?function(l){var e=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(e)}}:null}function On(){if(this.count--,this.count===0){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mn=null;function Lc(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mn=new Map,l.forEach(Eh,t),Mn=null,On.call(t))}function Eh(t,l){if(!(l.state.loading&4)){var e=Mn.get(t);if(e)var a=e.get(null);else{e=new Map,Mn.set(t,e);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=l.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=On.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),l.state.loading|=4}}var du={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function zh(t,l,e,a,u,n,i,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.hiddenUpdates=Gn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Qr(t,l,e,a,u,n,i,c,f,m,b,x){return t=new zh(t,l,e,i,c,f,m,x),l=1,n===!0&&(l|=24),n=ll(3,null,null,l),t.current=n,n.stateNode=t,l=zi(),l.refCount++,t.pooledCache=l,l.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:l},Di(n),t}function Lr(t){return t?(t=We,t):We}function Zr(t,l,e,a,u,n){u=Lr(u),a.context===null?a.context=u:a.pendingContext=u,a=kl(l),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=$l(t,a,l),e!==null&&(il(e,t,l),Qa(e,t,l))}function Vr(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function Zc(t,l){Vr(t,l),(t=t.alternate)&&Vr(t,l)}function Kr(t){if(t.tag===13){var l=$e(t,67108864);l!==null&&il(l,t,67108864),Zc(t,67108864)}}var Dn=!0;function Ah(t,l,e,a){var u=v.T;v.T=null;var n=O.p;try{O.p=2,Vc(t,l,e,a)}finally{O.p=n,v.T=u}}function Oh(t,l,e,a){var u=v.T;v.T=null;var n=O.p;try{O.p=8,Vc(t,l,e,a)}finally{O.p=n,v.T=u}}function Vc(t,l,e,a){if(Dn){var u=Kc(a);if(u===null)Rc(t,l,a,_n,e),kr(t,a);else if(Dh(u,t,l,e,a))a.stopPropagation();else if(kr(t,a),l&4&&-1<Mh.indexOf(t)){for(;u!==null;){var n=Ce(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=ye(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Pt(i);c.entanglements[1]|=f,i&=~f}Al(n),(it&6)===0&&(dn=Sl()+500,nu(0))}}break;case 13:c=$e(n,2),c!==null&&il(c,n,2),mn(),Zc(n,2)}if(n=Kc(a),n===null&&Rc(t,l,a,_n,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Rc(t,l,a,null,e)}}function Kc(t){return t=Fn(t),Jc(t)}var _n=null;function Jc(t){if(_n=null,t=Ye(t),t!==null){var l=Q(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=lt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return _n=t,null}function Jr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dd()){case nf:return 2;case cf:return 8;case Su:case hd:return 32;case ff:return 268435456;default:return 32}default:return 32}}var kc=!1,fe=null,oe=null,se=null,hu=new Map,mu=new Map,re=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kr(t,l){switch(t){case"focusin":case"focusout":fe=null;break;case"dragenter":case"dragleave":oe=null;break;case"mouseover":case"mouseout":se=null;break;case"pointerover":case"pointerout":hu.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(l.pointerId)}}function yu(t,l,e,a,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},l!==null&&(l=Ce(l),l!==null&&Kr(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,u!==null&&l.indexOf(u)===-1&&l.push(u),t)}function Dh(t,l,e,a,u){switch(l){case"focusin":return fe=yu(fe,t,l,e,a,u),!0;case"dragenter":return oe=yu(oe,t,l,e,a,u),!0;case"mouseover":return se=yu(se,t,l,e,a,u),!0;case"pointerover":var n=u.pointerId;return hu.set(n,yu(hu.get(n)||null,t,l,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,mu.set(n,yu(mu.get(n)||null,t,l,e,a,u)),!0}return!1}function $r(t){var l=Ye(t.target);if(l!==null){var e=Q(l);if(e!==null){if(l=e.tag,l===13){if(l=lt(e),l!==null){t.blockedOn=l,xd(t.priority,function(){if(e.tag===13){var a=nl();a=wn(a);var u=$e(e,a);u!==null&&il(u,e,a),Zc(e,a)}});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nn(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=Kc(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);Wn=a,e.target.dispatchEvent(a),Wn=null}else return l=Ce(e),l!==null&&Kr(l),t.blockedOn=e,!1;l.shift()}return!0}function Wr(t,l,e){Nn(t)&&e.delete(l)}function _h(){kc=!1,fe!==null&&Nn(fe)&&(fe=null),oe!==null&&Nn(oe)&&(oe=null),se!==null&&Nn(se)&&(se=null),hu.forEach(Wr),mu.forEach(Wr)}function Un(t,l){t.blockedOn===l&&(t.blockedOn=null,kc||(kc=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,_h)))}var Rn=null;function Fr(t){Rn!==t&&(Rn=t,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Rn===t&&(Rn=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],u=t[l+2];if(typeof a!="function"){if(Jc(a||e)===null)continue;break}var n=Ce(e);n!==null&&(t.splice(l,3),l-=3,Ji(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function gu(t){function l(f){return Un(f,t)}fe!==null&&Un(fe,t),oe!==null&&Un(oe,t),se!==null&&Un(se,t),hu.forEach(l),mu.forEach(l);for(var e=0;e<re.length;e++){var a=re[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<re.length&&(e=re[0],e.blockedOn===null);)$r(e),e.blockedOn===null&&re.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Kt]||null;if(typeof n=="function")i||Fr(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Kt]||null)c=i.formAction;else if(Jc(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),Fr(e)}}}function $c(t){this._internalRoot=t}Hn.prototype.render=$c.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(d(409));var e=l.current,a=nl();Zr(e,a,t,l,null,null)},Hn.prototype.unmount=$c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;Zr(t.current,2,null,t,null,null),mn(),l[qe]=null}};function Hn(t){this._internalRoot=t}Hn.prototype.unstable_scheduleHydration=function(t){if(t){var l=hf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<re.length&&l!==0&&l<re[e].priority;e++);re.splice(e,0,t),e===0&&$r(t)}};var Ir=z.version;if(Ir!=="19.1.0")throw Error(d(527,Ir,"19.1.0"));O.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=N(l),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var Nh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bn.isDisabled&&Bn.supportsFiber)try{Sa=Bn.inject(Nh),It=Bn}catch{}}return bu.createRoot=function(t,l){if(!M(t))throw Error(d(299));var e=!1,a="",u=ms,n=ys,i=gs,c=null;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(c=l.unstable_transitionCallbacks)),l=Qr(t,1,!1,null,null,e,a,u,n,i,c,null),t[qe]=l.current,Uc(t),new $c(l)},bu.hydrateRoot=function(t,l,e){if(!M(t))throw Error(d(299));var a=!1,u="",n=ms,i=ys,c=gs,f=null,m=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks),e.formState!==void 0&&(m=e.formState)),l=Qr(t,1,!0,l,e??null,a,u,n,i,c,f,m),l.context=Lr(null),e=l.current,a=nl(),a=wn(a),u=kl(a),u.callback=null,$l(e,u,a),e=a,l.current.lanes=e,Ta(l,e),Al(l),t[qe]=l.current,Uc(t),new Hn(l)},bu.version="19.1.0",bu}var fd;function wh(){if(fd)return Ic.exports;fd=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),Ic.exports=Gh(),Ic.exports}var Xh=wh();function Qh(p){return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"repel | flex-wrap gap-x-4 mb-7",children:[R.jsxs("h1",{className:"text-3xl text-primary",children:[R.jsxs("span",{className:"font-bold",children:[p.title," "]}),R.jsxs("span",{className:"font-light",children:[p.subtitle," "]})]}),R.jsxs("div",{className:"join ",children:[R.jsx("button",{className:"btn btn-disabled join-item",children:"NL"}),R.jsx("button",{className:"btn btn-disabled join-item",children:"FR"}),R.jsx("button",{className:"btn btn-disabled join-item",children:"DE"}),R.jsx("button",{className:"btn btn-primary join-item shadow-none",children:"EN"})]})]})})}function Lh(p){return R.jsx("header",{className:"card-header flex justify-between items-center bg-primary-content py-5",children:R.jsx("h2",{className:"card-title",children:p.title})})}function Zh({label:p,id:z,name:U,type:d="text",required:M=!1,placeholder:Q,rows:lt,value:I,onChange:N}){return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"input-floating textarea-floating flex flex-col",children:[R.jsxs("label",{className:"input-floating-label textarea-floating-label z-10",htmlFor:z,children:[p,M&&R.jsx("span",{"aria-hidden":"true",style:{color:"red"},children:"*"})]}),d==="textarea"?R.jsx("textarea",{className:"textarea mb-2",id:z,name:U,placeholder:Q,rows:lt,required:M,"aria-required":M?"true":void 0,value:I,onChange:N}):R.jsx("input",{className:"input mb-2",type:d,id:z,name:U,placeholder:Q,required:M,"aria-required":M?"true":void 0,value:I,onChange:N})]})})}function Vh({id:p,index:z,onRemove:U}){return R.jsxs("header",{className:"card-header flex justify-between items-center bg-primary-content py-4.5",children:[R.jsxs("h3",{className:"card-title text-lg",children:["Item ",z+1]}),R.jsx("div",{className:"card-actions flex gap-0.5 sm:gap-3 flex-nowrap",children:R.jsxs("div",{className:"tooltip",children:[R.jsx("button",{type:"button",onClick:()=>U(p),className:"tooltip-toggle btn btn-text btn-sm btn-circle","aria-label":"Remove Button",children:R.jsx("span",{className:"icon-[tabler--trash] size-5"})}),R.jsx("span",{className:"tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible",role:"tooltip",children:R.jsx("span",{className:"tooltip-body",children:"Remove"})})]})})]})}const Kh={complex:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Summary",id:"summary",name:"summary",type:"textarea",required:!0,placeholder:"Explain what the article is about in a few sentences",rows:3},{label:"CTA",id:"cta",name:"cta",required:!0,placeholder:"Suggest a call to action (e.g., Read more)"}],training:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Title of the training"},{label:"Date",id:"date",name:"date",required:!0,placeholder:"E.g., 1 Jan. 2025"},{label:"Time",id:"time",name:"time",required:!0,placeholder:"E.g., 9:00 - 12:00"},{label:"Method",id:"method",name:"method",required:!0,placeholder:"E.g., Online, Blended"},{label:"Price",id:"price",name:"price",type:"number",required:!0,placeholder:"E.g., 400"}],simple:[{label:"URL",id:"url",name:"url",type:"url",required:!0,placeholder:"Paste the web address of the article (e.g., https://example.com)"},{label:"Title",id:"title",name:"title",required:!0,placeholder:"Write a short, descriptive title"},{label:"Subtitle",id:"subtitle",name:"subtitle",required:!1,placeholder:"Optional: write a subtitle"}]};function Jh({fieldsetType:p,id:z,index:U,onRemove:d,values:M,onFieldChange:Q}){const lt=Kh[p]||[];return R.jsx(R.Fragment,{children:R.jsxs("fieldset",{className:"card bg-transparent overflow-hidden",children:[R.jsx(Vh,{id:z,index:U,onRemove:d}),R.jsx("div",{className:"card-body flex flex-col p-6 pb-4 gap-4 bg-white/75",children:lt.map(I=>R.jsx(Zh,{...I,value:M&&M[I.name]||"",onChange:N=>Q(z,I.name,N.target.value)},I.id))})]})})}function kh({id:p,title:z,fieldsetType:U,fieldsets:d,onAddFieldset:M,onRemove:Q,onFieldChange:lt}){return R.jsxs("section",{className:"card w-full bg-transparent overflow-hidden",children:[R.jsx(Lh,{title:z}),R.jsx("div",{className:"card-body flex flex-col py-0 gap-6 bg-white/50",children:d.map((I,N)=>R.jsx(Jh,{fieldsetType:U,id:I.id,index:N,onRemove:Q,onFieldChange:lt,values:I},I.id))}),R.jsx("div",{className:"card-actions justify-center",children:R.jsxs("button",{type:"button",onClick:()=>M(p),className:"btn btn-block btn-secondary rounded-t-none",children:[R.jsx("span",{className:"icon-[tabler--plus] size-4.5 shrink-0"}),"Add fieldset"]})})]})}function $h({sections:p,onAddFieldset:z,onRemove:U,onFieldChange:d}){return R.jsx("div",{className:"form-wrapper",children:R.jsx("form",{className:"flex flex-col gap-y-6",children:p.map(M=>R.jsx(kh,{id:M.id,title:M.title,fieldsetType:M.fieldsetType,onAddFieldset:z,onRemove:U,onFieldChange:d,fieldsets:M.fieldsets},M.id))})})}function Wh({html:p,onCopy:z,isCopied:U}){const d=!navigator.clipboard||!p;return R.jsxs("div",{className:"card w-full overflow-hidden",children:[R.jsx("div",{className:"card-actions justify-center",children:R.jsxs("button",{type:"button",className:"btn btn-block btn-primary rounded-b-none h-12",onClick:z,disabled:d,children:[R.jsx("span",{className:"icon-[tabler--copy] size-4.5 shrink-0"}),U?"Copied!":"Copy HTML"]})}),R.jsx("iframe",{className:"h-svh",srcDoc:p,sandbox:"",loading:"lazy"})]})}const Fh=[{title:"Featured News",fieldsetType:"complex",fieldsets:[{url:"#",title:"Title placeholder",summary:"Short description placholder: lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"Call to action placeholder"}]},{title:"Euro Tip",fieldsetType:"complex",fieldsets:[]},{title:"HR Tip",fieldsetType:"complex",fieldsets:[]},{title:"Trainings",fieldsetType:"training",fieldsets:[]},{title:"Sector News",fieldsetType:"simple",fieldsets:[{url:"#",title:"JC 123.456 | Sector name",subtitle:"Article title: lorem ipsum dolor sit amet"}]},{title:"Other News",fieldsetType:"simple",fieldsets:[{url:"#",title:"Article title: lorem ipsum dolor sit amet",subtitle:"Article subtitle: lorem ipsum dolor sit amet"}]}],Gt=[];for(let p=0;p<256;++p)Gt.push((p+256).toString(16).slice(1));function Ih(p,z=0){return(Gt[p[z+0]]+Gt[p[z+1]]+Gt[p[z+2]]+Gt[p[z+3]]+"-"+Gt[p[z+4]]+Gt[p[z+5]]+"-"+Gt[p[z+6]]+Gt[p[z+7]]+"-"+Gt[p[z+8]]+Gt[p[z+9]]+"-"+Gt[p[z+10]]+Gt[p[z+11]]+Gt[p[z+12]]+Gt[p[z+13]]+Gt[p[z+14]]+Gt[p[z+15]]).toLowerCase()}let ef;const Ph=new Uint8Array(16);function tm(){if(!ef){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ef=crypto.getRandomValues.bind(crypto)}return ef(Ph)}const lm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),od={randomUUID:lm};function af(p,z,U){var M;if(od.randomUUID&&!p)return od.randomUUID();p=p||{};const d=p.random??((M=p.rng)==null?void 0:M.call(p))??tm();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,Ih(d)}function em(p,z="https://emailing.securex.eu/l/64002/2023-04-11/hj8wzz/64002/1681219920iZDaQVBr/Securex_Lex4You_logo.png",U="Discover the latest key legal HR news",d="View online",M="https://www.securex.be/en/lex4you/employer",Q="DD month YYYY",lt="Stay ahead with the latest in HR law",I="https://www.securex.be/en/contact",N="Contact",T="https://www.securex.be/en/website-disclaimer",B="Disclaimer",nt="Unsubscribe or change preferences"){return`
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
                              ${U}
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
                                  >${d}</a
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
                                FlasHR | ${Q}
                              </h2>

                              <p
                                style="
                                  margin: 0 0 0px 0;
                                  color: #fff;
                                  font-size: 16px;
                                "
                              >
                                ${lt}
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
                                href="${M}"
                                style="text-decoration: none"
                                ><img
                                  alt="Securex Lex4You logo"
                                  class="logobrand"
                                  height="54"
                                  src="${z}"
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

    ${p}

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
                                  href="${M}"
                                  style="text-decoration: none"
                                  ><img
                                    alt="logo"
                                    class="logobrand"
                                    height="54"
                                    src="${z}"
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
                                    href="${I}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${N}</a
                                  >
                                  -
                                </span>
                                <span
                                  style="color: #666666; text-decoration: none"
                                  ><a
                                    href="${T}"
                                    style="
                                      text-decoration: none;
                                      color: #555555;
                                    "
                                    >${B}</a
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
                                    >${nt}</span
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
`}function am(p="https://www.securex.be/en/lex4you/employer",z="Lorem ipsum dolor",U="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",d="CTA",M="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                              <a href="${p}" style="display: block">
                                <img
                                  alt="Click image to read article"
                                  border="0"
                                  src="${M}"
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
                                <strong>${z}</strong>
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
                                ${U}
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
                                          href="${p}}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${d}</a
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
  `}function um(p="https://www.securex.be/en/lex4you/employer",z="Lorem ipsum dolor",U="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",d="CTA",M="https://emailing.securex.eu/l/64002/2022-04-20/hchrk6/64002/1650445357CPl0hVzi/Securex_New_Lex4You.jpg"){return`
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
                                <strong>${z}</strong>
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
                                ${U}
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
                                          href="${p}}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${d}</a
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
                              <a href="${p}" style="display: block; text-align: right;">
                                <img
                                  alt="Click image to read article"
                                  border="0"
                                  src="${M}"
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
  `}function nm(p="https://www.securex.be/en/lex4you/employer",z="Lorem ipsum dolor",U="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",d="CTA"){return`
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
                € Tip |&nbsp;${z}
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
                ${U}
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
                                          href="${p}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${d}</a
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
`}function im(p="https://www.securex.be/en/lex4you/employer",z="Lorem ipsum dolor",U="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",d="CTA"){return`
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
                HR Tip | ${z}
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
                ${U}
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
                                          href="${p}"
                                          style="
                                            text-decoration: none;
                                            color: #ffffff;
                                          "
                                          >${d}</a
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
`}function cm(p="https://www.securex.be/en/lex4you/employer",z="Lorem ipsum dolor",U="1 jan. 2025",d="9:00 - 12:00",M="Online",Q="400"){return`
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
                href="${p}"
                style="text-decoration: underline; color: #4d1656"
                >${z}</a
              >
            </td>
            <td pardot-region="">
              ${U}<br />
              ${d}
            </td>
            <td pardot-region="">${M}</td>
            <td pardot-region="">€${Q}</td>
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
`}function fm(p){return`
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
                    <td class="no-padding" width="70%">${p}</td>
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

  `}function om(p){return`
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
${p}
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
`}function sm(p="https://www.securex.be/en/lex4you/employer",z="JC 123.456 | Sector name",U="Article title: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${p}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${z}</b><br />
                                    ${U}</a
                                  >
                                </li>
`}function rm(p){return`
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
${p}
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
`}function dm(p="https://www.securex.be/en/lex4you/employer",z="Article title: lorem ipsum dolor sit amet",U="Article subtitle: lorem ipsum dolor sit amet"){return`
                                <li
                                  style="
                                    margin: 12px 0px 0px 8px;
                                    color: #4d1656;
                                    line-height: 24px;
                                  "
                                >
                                  <a
                                    href="${p}"
                                    style="
                                      text-decoration: none;
                                      color: #4d1656;
                                    "
                                    ><b>${z}</b><br />
                                    ${U}</a
                                  >
                                </li>
`}function hm(){const[p,z]=He.useState(()=>Fh.map(W=>({id:af(),...W,fieldsets:W.fieldsets.map(ht=>({id:af(),...ht}))}))),[U,d]=He.useState(""),[M,Q]=He.useState(""),[lt,I]=He.useState(!1),N=(W,ht)=>({id:af(),url:"#",title:"Title placeholder",...W==="complex"&&{summary:"Short description placholder: lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid ea repellendus, iure nihil soluta illum, asperiores labore rem molestiae similique maxime quaerat ab doloremque dicta, consequatur qui fugiat dolore.",cta:"Call to action placeholder"},...W==="training"&&{date:"1 jan. 2025",time:"9:00 - 12:00",method:"Online",price:"400"},...W==="simple"&&{subtitle:"Lorem ipsum dolor sit amet"}}),T=W=>{z(ht=>ht.map(ut=>{if(ut.id===W){const xt=N(ut.fieldsetType,ut.fieldsets.length);return{...ut,fieldsets:[...ut.fieldsets,xt]}}return ut}))},B=W=>{z(ht=>ht.map(ut=>{const xt=ut.fieldsets.filter(qt=>qt.id!==W);return{...ut,fieldsets:xt}}))},nt=(W,ht,ut)=>{z(xt=>xt.map(qt=>{const Tt=qt.fieldsets.map(_t=>_t.id===W?{..._t,[ht]:ut}:_t);return{...qt,fieldsets:Tt}}))},at=He.useMemo(()=>{const W=(ht,ut=!1)=>{let xt="";for(const H of ht)if(H.title==="Featured News")for(let Y=0;Y<H.fieldsets.length;Y++)(Y+1)%2!=0?xt+=am(H.fieldsets[Y].url,H.fieldsets[Y].title,H.fieldsets[Y].summary,H.fieldsets[Y].cta,ut?"./Securex_New_Lex4You.jpg":void 0):xt+=um(H.fieldsets[Y].url,H.fieldsets[Y].title,H.fieldsets[Y].summary,H.fieldsets[Y].cta,ut?"./Securex_New_Lex4You.jpg":void 0);for(const H of ht)if(H.title==="Euro Tip")for(let Y=0;Y<H.fieldsets.length;Y++)xt+=nm(H.fieldsets[Y].url,H.fieldsets[Y].title,H.fieldsets[Y].summary,H.fieldsets[Y].cta);for(const H of ht)if(H.title==="HR Tip")for(let Y=0;Y<H.fieldsets.length;Y++)xt+=im(H.fieldsets[Y].url,H.fieldsets[Y].title,H.fieldsets[Y].summary,H.fieldsets[Y].cta);for(const H of ht)if(H.title==="Trainings")for(let Y=0;Y<H.fieldsets.length;Y++)xt+=cm(H.fieldsets[Y].url,H.fieldsets[Y].title,H.fieldsets[Y].date,H.fieldsets[Y].time,H.fieldsets[Y].format,H.fieldsets[Y].price);let qt="",Tt="",_t="";for(const H of ht){if(H.title==="Sector News"){let Y="";for(let yt=0;yt<H.fieldsets.length;yt++)Y+=sm(H.fieldsets[yt].url,H.fieldsets[yt].title,H.fieldsets[yt].subtitle);Tt+=om(Y)}if(H.title==="Other News"){let Y="";for(let yt=0;yt<H.fieldsets.length;yt++)Y+=dm(H.fieldsets[yt].url,H.fieldsets[yt].title,H.fieldsets[yt].subtitle);_t+=rm(Y)}}return qt=Tt+_t,xt+=`${fm(qt)}`,`${em(xt,ut?"src/assets/Securex_Lex4You_logo.png":void 0)}`};return{forPreview:W(p,!0),forCopy:W(p,!1)}},[p]),Bt=()=>{M?navigator.clipboard.writeText(M).then(()=>{I(!0),setTimeout(()=>I(!1),2e3),console.log("HTML copied to clipboard!")}).catch(W=>{console.error("Failed to copy HTML: ",W)}):console.warn("No HTML content to copy.")};return He.useEffect(()=>{d(at.forPreview),Q(at.forCopy)},[at]),R.jsxs(R.Fragment,{children:[R.jsx(Qh,{title:"FlasHR",subtitle:"composer"}),R.jsxs("div",{className:"grid",children:[R.jsx($h,{sections:p,onAddFieldset:T,onRemove:B,onFieldChange:nt}),R.jsx(Wh,{html:U,onCopy:Bt,isCopied:lt})]})]})}Xh.createRoot(document.getElementById("root")).render(R.jsxs(He.StrictMode,{children:[R.jsx("main",{className:"max-w-6xl mx-auto px-6 py-6",children:R.jsx(hm,{})}),R.jsx("script",{type:"module",src:"./node_modules/flyonui/flyonui.js"})]}));
