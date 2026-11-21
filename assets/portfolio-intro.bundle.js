(()=>{var YE=Object.create;var p_=Object.defineProperty;var ZE=Object.getOwnPropertyDescriptor;var KE=Object.getOwnPropertyNames;var JE=Object.getPrototypeOf,QE=Object.prototype.hasOwnProperty;var nr=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var jE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of KE(t))!QE.call(e,a)&&a!==n&&p_(e,a,{get:()=>t[a],enumerable:!(i=ZE(t,a))||i.enumerable});return e};var Lf=(e,t,n)=>(n=e!=null?YE(JE(e)):{},jE(t||!e||!e.__esModule?p_(n,"default",{value:e,enumerable:!0}):n,e));var w_=nr(ge=>{"use strict";var S0=Symbol.for("react.transitional.element"),$E=Symbol.for("react.portal"),tA=Symbol.for("react.fragment"),eA=Symbol.for("react.strict_mode"),nA=Symbol.for("react.profiler"),iA=Symbol.for("react.consumer"),aA=Symbol.for("react.context"),sA=Symbol.for("react.forward_ref"),rA=Symbol.for("react.suspense"),oA=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),lA=Symbol.for("react.activity"),cA=Symbol.for("react.view_transition"),m_=Symbol.iterator;function uA(e){return e===null||typeof e!="object"?null:(e=m_&&e[m_]||e["@@iterator"],typeof e=="function"?e:null)}var x_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S_=Object.assign,M_={};function jo(e,t,n){this.props=e,this.context=t,this.refs=M_,this.updater=n||x_}jo.prototype.isReactComponent={};jo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function b_(){}b_.prototype=jo.prototype;function M0(e,t,n){this.props=e,this.context=t,this.refs=M_,this.updater=n||x_}var b0=M0.prototype=new b_;b0.constructor=M0;S_(b0,jo.prototype);b0.isPureReactComponent=!0;var g_=Array.isArray;function x0(){}var ln={H:null,A:null,T:null,S:null},T_=Object.prototype.hasOwnProperty;function T0(e,t,n){var i=n.ref;return{$$typeof:S0,type:e,key:t,ref:i!==void 0?i:null,props:n}}function fA(e,t){return T0(e.type,t,e.props)}function E0(e){return typeof e=="object"&&e!==null&&e.$$typeof===S0}function hA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var v_=/\/+/g;function _0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hA(""+e.key):t.toString(36)}function dA(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(x0,x0):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Qo(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case S0:case $E:r=!0;break;case __:return r=e._init,Qo(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+_0(e,0):i,g_(a)?(n="",r!=null&&(n=r.replace(v_,"$&/")+"/"),Qo(a,t,n,"",function(c){return c})):a!=null&&(E0(a)&&(a=fA(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(v_,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(g_(e))for(var l=0;l<e.length;l++)i=e[l],s=o+_0(i,l),r+=Qo(i,t,n,s,a);else if(l=uA(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+_0(i,l++),r+=Qo(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Qo(dA(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Uf(e,t,n){if(e==null)return e;var i=[],a=0;return Qo(e,i,"","",function(s){return t.call(n,s,a++)}),i}function pA(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var y_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function E_(e){var t=ln.T,n={};n.types=t!==null?t.types:null,ln.T=n;try{var i=e(),a=ln.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(x0,y_)}catch(s){y_(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),ln.T=t}}function A_(e){var t=ln.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else E_(A_.bind(null,e))}var mA={map:Uf,forEach:function(e,t,n){Uf(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uf(e,function(){t++}),t},toArray:function(e){return Uf(e,function(t){return t})||[]},only:function(e){if(!E0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Activity=lA;ge.Children=mA;ge.Component=jo;ge.Fragment=tA;ge.Profiler=nA;ge.PureComponent=M0;ge.StrictMode=eA;ge.Suspense=rA;ge.ViewTransition=cA;ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ln;ge.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ln.H.useMemoCache(e)}};ge.addTransitionType=A_;ge.cache=function(e){return function(){return e.apply(null,arguments)}};ge.cacheSignal=function(){return null};ge.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=S_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!T_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return T0(e.type,a,i)};ge.createContext=function(e){return e={$$typeof:aA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:iA,_context:e},e};ge.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)T_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return T0(e,s,a)};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:sA,render:e}};ge.isValidElement=E0;ge.lazy=function(e){return{$$typeof:__,_payload:{_status:-1,_result:e},_init:pA}};ge.memo=function(e,t){return{$$typeof:oA,type:e,compare:t===void 0?null:t}};ge.startTransition=E_;ge.unstable_useCacheRefresh=function(){return ln.H.useCacheRefresh()};ge.use=function(e){return ln.H.use(e)};ge.useActionState=function(e,t,n){return ln.H.useActionState(e,t,n)};ge.useCallback=function(e,t){return ln.H.useCallback(e,t)};ge.useContext=function(e){return ln.H.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e,t){return ln.H.useDeferredValue(e,t)};ge.useEffect=function(e,t){return ln.H.useEffect(e,t)};ge.useEffectEvent=function(e){return ln.H.useEffectEvent(e)};ge.useId=function(){return ln.H.useId()};ge.useImperativeHandle=function(e,t,n){return ln.H.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return ln.H.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return ln.H.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return ln.H.useMemo(e,t)};ge.useOptimistic=function(e,t){return ln.H.useOptimistic(e,t)};ge.useReducer=function(e,t,n){return ln.H.useReducer(e,t,n)};ge.useRef=function(e){return ln.H.useRef(e)};ge.useState=function(e){return ln.H.useState(e)};ge.useSyncExternalStore=function(e,t,n){return ln.H.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return ln.H.useTransition()};ge.version="19.3.1"});var $o=nr((fP,R_)=>{"use strict";R_.exports=w_()});var B_=nr(Sn=>{"use strict";function C0(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Pf(a,t))e[i]=t,e[n]=a,n=i;else break t}}function ja(e){return e.length===0?null:e[0]}function If(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Pf(o,n))l<a&&0>Pf(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>Pf(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Pf(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Sn.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(C_=performance,Sn.unstable_now=function(){return C_.now()}):(A0=Date,N_=A0.now(),Sn.unstable_now=function(){return A0.now()-N_});var C_,A0,N_,bs=[],ir=[],gA=1,_a=null,xi=3,N0=!1,Ic=!1,zc=!1,D0=!1,U_=typeof setTimeout=="function"?setTimeout:null,P_=typeof clearTimeout=="function"?clearTimeout:null,D_=typeof setImmediate<"u"?setImmediate:null;function Of(e){for(var t=ja(ir);t!==null;){if(t.callback===null)If(ir);else if(t.startTime<=e)If(ir),t.sortIndex=t.expirationTime,C0(bs,t);else break;t=ja(ir)}}function L0(e){if(zc=!1,Of(e),!Ic)if(ja(bs)!==null)Ic=!0,el||(el=!0,tl());else{var t=ja(ir);t!==null&&U0(L0,t.startTime-e)}}var el=!1,Bc=-1,O_=5,I_=-1;function z_(){return D0?!0:!(Sn.unstable_now()-I_<O_)}function w0(){if(D0=!1,el){var e=Sn.unstable_now();I_=e;var t=!0;try{t:{Ic=!1,zc&&(zc=!1,P_(Bc),Bc=-1),N0=!0;var n=xi;try{e:{for(Of(e),_a=ja(bs);_a!==null&&!(_a.expirationTime>e&&z_());){var i=_a.callback;if(typeof i=="function"){_a.callback=null,xi=_a.priorityLevel;var a=i(_a.expirationTime<=e);if(e=Sn.unstable_now(),typeof a=="function"){_a.callback=a,Of(e),t=!0;break e}_a===ja(bs)&&If(bs),Of(e)}else If(bs);_a=ja(bs)}if(_a!==null)t=!0;else{var s=ja(ir);s!==null&&U0(L0,s.startTime-e),t=!1}}break t}finally{_a=null,xi=n,N0=!1}t=void 0}}finally{t?tl():el=!1}}}var tl;typeof D_=="function"?tl=function(){D_(w0)}:typeof MessageChannel<"u"?(R0=new MessageChannel,L_=R0.port2,R0.port1.onmessage=w0,tl=function(){L_.postMessage(null)}):tl=function(){U_(w0,0)};var R0,L_;function U0(e,t){Bc=U_(function(){e(Sn.unstable_now())},t)}Sn.unstable_IdlePriority=5;Sn.unstable_ImmediatePriority=1;Sn.unstable_LowPriority=4;Sn.unstable_NormalPriority=3;Sn.unstable_Profiling=null;Sn.unstable_UserBlockingPriority=2;Sn.unstable_cancelCallback=function(e){e.callback=null};Sn.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O_=0<e?Math.floor(1e3/e):5};Sn.unstable_getCurrentPriorityLevel=function(){return xi};Sn.unstable_next=function(e){switch(xi){case 1:case 2:case 3:var t=3;break;default:t=xi}var n=xi;xi=t;try{return e()}finally{xi=n}};Sn.unstable_requestPaint=function(){D0=!0};Sn.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=xi;xi=e;try{return t()}finally{xi=n}};Sn.unstable_scheduleCallback=function(e,t,n){var i=Sn.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:gA++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,C0(ir,e),ja(bs)===null&&e===ja(ir)&&(zc?(P_(Bc),Bc=-1):zc=!0,U0(L0,n-i))):(e.sortIndex=a,C0(bs,e),Ic||N0||(Ic=!0,el||(el=!0,tl()))),e};Sn.unstable_shouldYield=z_;Sn.unstable_wrapCallback=function(e){var t=xi;return function(){var n=xi;xi=t;try{return e.apply(this,arguments)}finally{xi=n}}}});var H_=nr((dP,F_)=>{"use strict";F_.exports=B_()});var k_=nr(Si=>{"use strict";var vA=$o();function V_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ar(){}var Ci={d:{f:ar,r:function(){throw Error(V_(522))},D:ar,C:ar,L:ar,m:ar,X:ar,S:ar,M:ar},p:0,findDOMNode:null},yA=Symbol.for("react.portal"),_A=Symbol.for("react.recoverable"),G_=Symbol.for("react.optimistic_key");function xA(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yA,key:i==null?null:i===G_?G_:""+i,children:e,containerInfo:t,implementation:n}}var Fc=vA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zf(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ci;Si.browser=function(e){return{$$typeof:_A,_reason:e}};Si.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(V_(299));return xA(e,t,null,n)};Si.flushSync=function(e){var t=Fc.T,n=Ci.p;try{if(Fc.T=null,Ci.p=2,e)return e()}finally{Fc.T=t,Ci.p=n,Ci.d.f()}};Si.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ci.d.C(e,t))};Si.prefetchDNS=function(e){typeof e=="string"&&Ci.d.D(e)};Si.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=zf(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ci.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Ci.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Si.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=zf(t.as,t.crossOrigin);Ci.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Ci.d.M(e)};Si.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=zf(n,t.crossOrigin);Ci.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Si.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=zf(t.as,t.crossOrigin);Ci.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Ci.d.m(e)};Si.requestFormReset=function(e){Ci.d.r(e)};Si.unstable_batchedUpdates=function(e,t){return e(t)};Si.useFormState=function(e,t,n){return Fc.H.useFormState(e,t,n)};Si.useFormStatus=function(){return Fc.H.useHostTransitionStatus()};Si.version="19.3.1"});var q_=nr((mP,X_)=>{"use strict";function W_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W_)}catch(e){console.error(e)}}W_(),X_.exports=k_()});var Lb=nr(yd=>{"use strict";var Qn=H_(),D1=$o(),SA=q_();function lt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Au(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function U1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function P1(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y_(e){if(Au(e)!==e)throw Error(lt(188))}function MA(e){var t=e.alternate;if(!t){if(t=Au(e),t===null)throw Error(lt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Y_(a),e;if(s===i)return Y_(a),t;s=s.sibling}throw Error(lt(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(lt(189))}}if(n.alternate!==i)throw Error(lt(190))}if(n.tag!==3)throw Error(lt(188));return n.stateNode.current===n?e:t}function O1(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O1(e),t!==null)return t;e=e.sibling}return null}function Zi(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Zi(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function xo(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Z_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function I1(e){var t=[null,null],n=xo(e);return n===null||z1(t,e,n.child,{foundSelf:!1}),t}function z1(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&z1(e,t,n.child,i))return!0;n=n.sibling}return!1}function Jn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(lt(559))}}var ll=null,fm=null;function bA(e,t,n){return e===n?!0:e===t?(ll=e,!0):!1}function TA(e,t,n){return e===n?(fm=e,!1):e===t?(fm!==null&&(ll=e),!0):!1}function K_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function hm(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var sn=Object.assign,EA=Symbol.for("react.element"),Bf=Symbol.for("react.transitional.element"),qc=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),F1=Symbol.for("react.consumer"),as=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),mm=Symbol.for("react.suspense_list"),bg=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),gm=Symbol.for("react.activity"),AA=Symbol.for("react.legacy_hidden"),wA=Symbol.for("react.memo_cache_sentinel"),vm=Symbol.for("react.view_transition"),RA=Symbol.for("react.recoverable"),J_=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=J_&&e[J_]||e["@@iterator"],typeof e=="function"?e:null)}var CA=Symbol.for("react.client.reference");function ym(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===CA?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cl:return"Fragment";case dm:return"Profiler";case B1:return"StrictMode";case pm:return"Suspense";case mm:return"SuspenseList";case gm:return"Activity";case vm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case qc:return"Portal";case as:return e.displayName||"Context";case F1:return(e._context.displayName||"Context")+".Consumer";case Mg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bg:return t=e.displayName||null,t!==null?t:ym(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return ym(e(t))}catch{}}return null}var Yc=Array.isArray,re=D1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xe=SA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ro={pending:!1,data:null,method:null,action:null},_m=[],ul=-1;function fs(e){return{current:e}}function mi(e){0>ul||(e.current=_m[ul],_m[ul]=null,ul--)}function fn(e,t){ul++,_m[ul]=e.current,e.current=t}var ls=fs(null),uu=fs(null),vr=fs(null),Th=fs(null);function Eh(e,t){switch(fn(vr,t),fn(uu,e),fn(ls,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?u1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=u1(t),e=ob(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mi(ls),fn(ls,e)}function Nl(){mi(ls),mi(uu),mi(vr)}function xm(e){var t=e.memoizedState;t!==null&&(Hl._currentValue=t.memoizedState,fn(Th,e)),t=ls.current;var n=ob(t,e.type);t!==n&&(fn(uu,e),fn(ls,n))}function Ah(e){uu.current===e&&(mi(ls),mi(uu)),Th.current===e&&(mi(Th),Hl._currentValue=ro)}var P0,Q_;function rr(e){if(P0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);P0=t&&t[1]||"",Q_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P0+e+Q_}var O0=!1;function I0(e,t){if(!e||O0)return"";O0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(y){var u=y}Reflect.construct(e,[],d)}else{try{d.call()}catch(y){u=y}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(y){u=y}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(y){if(y&&u&&typeof y.stack=="string")return[y.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{O0=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?rr(n):""}function NA(e,t){switch(e.tag){case 26:case 27:case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return e.child!==t&&t!==null?rr("Suspense Fallback"):rr("Suspense");case 19:return rr("SuspenseList");case 0:case 15:return I0(e.type,!1);case 11:return I0(e.type.render,!1);case 1:return I0(e.type,!0);case 31:return rr("Activity");case 30:return rr("ViewTransition");default:return""}}function j_(e){try{var t="",n=null;do t+=NA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Sm=Object.prototype.hasOwnProperty,Tg=Qn.unstable_scheduleCallback,z0=Qn.unstable_cancelCallback,DA=Qn.unstable_shouldYield,LA=Qn.unstable_requestPaint,sa=Qn.unstable_now,UA=Qn.unstable_getCurrentPriorityLevel,H1=Qn.unstable_ImmediatePriority,G1=Qn.unstable_UserBlockingPriority,wh=Qn.unstable_NormalPriority,PA=Qn.unstable_LowPriority,V1=Qn.unstable_IdlePriority,OA=Qn.log,IA=Qn.unstable_setDisableYieldValue,wu=null,ra=null;function fr(e){if(typeof OA=="function"&&IA(e),ra&&typeof ra.setStrictMode=="function")try{ra.setStrictMode(wu,e)}catch{}}var oa=Math.clz32?Math.clz32:FA,zA=Math.log,BA=Math.LN2;function FA(e){return e>>>=0,e===0?32:31-(zA(e)/BA|0)|0}var Ff=256,Hf=262144,Gf=4194304;function eo(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $h(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=eo(i):(r&=o,r!==0?a=eo(r):n||(n=o&~e,n!==0&&(a=eo(n))))):(o=i&~s,o!==0?a=eo(o):r!==0?a=eo(r):n||(n=i&~e,n!==0&&(a=eo(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Ru(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function k1(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-oa(n),a=1<<i;t|=e[i],n&=~a}return t}function HA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(){var e=Gf;return Gf<<=1,(Gf&62914560)===0&&(Gf=4194304),e}function B0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function GA(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-oa(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&X1(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function X1(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-oa(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function q1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-oa(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Y1(e,t){var n=t&-t;return n=(n&42)!==0?1:Eg(n),(n&(e.suspendedLanes|t))!==0?0:n}function Eg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ag(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Z1(){var e=Xe.p;return e!==0?e:(e=window.event,e===void 0?32:Cb(e.type))}function $_(e,t){var n=Xe.p;try{return Xe.p=e,t()}finally{Xe.p=n}}var Is=Math.random().toString(36).slice(2),di="__reactFiber$"+Is,Ki="__reactProps$"+Is,kl="__reactContainer$"+Is,tx="__reactEvents$"+Is,VA="__reactListeners$"+Is,kA="__reactHandles$"+Is,ex="__reactResources$"+Is,Nu="__reactMarker$"+Is,Rh="__reactLoad$"+Is;function td(e){delete e[di],delete e[Ki],delete e[VA],delete e[kA]}function ao(e){var t;if(t=e[di])return t;for(var n=e.parentNode;n;){if(t=n[kl]||n[di]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=y1(e);e!==null;){if(n=e[di])return n;e=y1(e)}return t}e=n,n=e.parentNode}return null}function Wl(e){if(e=e[di]||e[kl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(lt(33))}function xl(e){var t=e[ex];return t||(t=e[ex]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function si(e){e[Nu]=!0}function K1(e){e[Rh]=void 0}var J1=new Set,Q1={};function So(e,t){Dl(e,t),Dl(e+"Capture",t)}function Dl(e,t){for(Q1[e]=t,e=0;e<t.length;e++)J1.add(t[e])}var WA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nx={},ix={};function XA(e){return Sm.call(ix,e)?!0:Sm.call(nx,e)?!1:WA.test(e)?ix[e]=!0:(nx[e]=!0,!1)}var Be=!1;function ax(){var e=Be;return Be=!1,e}function sh(e,t,n){if(XA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Vf(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ts(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ea(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function j1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mm(e){if(!e._valueTracker){var t=j1(e)?"checked":"value";e._valueTracker=qA(e,t,""+e[t])}}function $1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=j1(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var YA=/[\n"\\]/g;function Ta(e){return e.replace(YA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bm(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ea(t)):e.value!==""+ea(t)&&(e.value=""+ea(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?F0(e,ea(e.value)):F0(e,ea(t)):n!=null?F0(e,ea(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ea(o):e.removeAttribute("name")}function tS(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Mm(e);return}n=n!=null?""+ea(n):"",t=t!=null?""+ea(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Mm(e)}function F0(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Sl(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ea(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function eS(e,t,n){if(t!=null&&(t=""+ea(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ea(n):""}function nS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(lt(92));if(Yc(i)){if(1<i.length)throw Error(lt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ea(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Mm(e)}function Ll(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ZA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sx(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ZA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function iS(e,t,n){if(t!=null&&typeof t!="object")throw Error(lt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Be=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(sx(e,a,i),Be=!0)}else for(var s in t)t.hasOwnProperty(s)&&sx(e,s,t[s])}function wg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),JA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rh(e){return JA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ss(){}var Tm=null;function Rg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,Ml=null;function rx(e){var t=Wl(e);if(t&&(e=t.stateNode)){var n=e[Ki]||null;t:switch(e=t.stateNode,t.type){case"input":if(bm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ta(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Ki]||null;if(!a)throw Error(lt(90));bm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&$1(i)}break t;case"textarea":eS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Sl(e,!!n.multiple,t,!1)}}}var H0=!1;function aS(e,t,n){if(H0)return e(t,n);H0=!0;try{var i=e(t);return i}finally{if(H0=!1,(fl!==null||Ml!==null)&&(pd(),fl&&(t=fl,e=Ml,Ml=fl=null,rx(t),e)))for(t=0;t<e.length;t++)rx(e[t])}}function fu(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ki]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(lt(231,t,typeof n));return n}var Ns=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Em=!1;if(Ns)try{nl={},Object.defineProperty(nl,"passive",{get:function(){Em=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{Em=!1}var nl,hr=null,Cg=null,oh=null;function sS(){if(oh)return oh;var e,t=Cg,n=t.length,i,a="value"in hr?hr.value:hr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return oh=a.slice(e,1<i?1-i:void 0)}function lh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kf(){return!0}function ox(){return!1}function Ui(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kf:ox,this.isPropagationStopped=ox,this}return sn(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kf)},persist:function(){},isPersistent:kf}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Ui(Lr),Du=sn({},Lr,{view:0,detail:0}),QA=Ui(Du),G0,V0,Gc,nd=sn({},Du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ng,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gc&&(Gc&&e.type==="mousemove"?(G0=e.screenX-Gc.screenX,V0=e.screenY-Gc.screenY):V0=G0=0,Gc=e),G0)},movementY:function(e){return"movementY"in e?e.movementY:V0}}),lx=Ui(nd),jA=sn({},nd,{dataTransfer:0}),$A=Ui(jA),t2=sn({},Du,{relatedTarget:0}),k0=Ui(t2),e2=sn({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),n2=Ui(e2),i2=sn({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a2=Ui(i2),s2=sn({},Lr,{data:0}),cx=Ui(s2),r2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l2[e])?!!t[e]:!1}function Ng(){return c2}var u2=sn({},Du,{key:function(e){if(e.key){var t=r2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ng,charCode:function(e){return e.type==="keypress"?lh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f2=Ui(u2),h2=sn({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ux=Ui(h2),d2=sn({},Lr,{submitter:0}),p2=Ui(d2),m2=sn({},Du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ng}),g2=Ui(m2),v2=sn({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y2=Ui(v2),_2=sn({},nd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x2=Ui(_2),S2=sn({},Lr,{newState:0,oldState:0,source:0}),M2=Ui(S2),b2=[9,13,27,32],Dg=Ns&&"CompositionEvent"in window,Qc=null;Ns&&"documentMode"in document&&(Qc=document.documentMode);var T2=Ns&&"TextEvent"in window&&!Qc,rS=Ns&&(!Dg||Qc&&8<Qc&&11>=Qc),fx=" ",hx=!1;function oS(e,t){switch(e){case"keyup":return b2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hl=!1;function E2(e,t){switch(e){case"compositionend":return lS(t);case"keypress":return t.which!==32?null:(hx=!0,fx);case"textInput":return e=t.data,e===fx&&hx?null:e;default:return null}}function A2(e,t){if(hl)return e==="compositionend"||!Dg&&oS(e,t)?(e=sS(),oh=Cg=hr=null,hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rS&&t.locale!=="ko"?null:t.data;default:return null}}var w2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w2[e.type]:t==="textarea"}function cS(e,t,n,i){fl?Ml?Ml.push(i):Ml=[i]:fl=i,t=Jh(t,"onChange"),0<t.length&&(n=new ed("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var jc=null,hu=null;function R2(e){ab(e,0)}function id(e){var t=Zc(e);if($1(t))return e}function px(e,t){if(e==="change")return t}var uS=!1;Ns&&(Ns?(Xf="oninput"in document,Xf||(W0=document.createElement("div"),W0.setAttribute("oninput","return;"),Xf=typeof W0.oninput=="function"),Wf=Xf):Wf=!1,uS=Wf&&(!document.documentMode||9<document.documentMode));var Wf,Xf,W0;function mx(){jc&&(jc.detachEvent("onpropertychange",fS),hu=jc=null)}function fS(e){if(e.propertyName==="value"&&id(hu)){var t=[];cS(t,hu,e,Rg(e)),aS(R2,t)}}function C2(e,t,n){e==="focusin"?(mx(),jc=t,hu=n,jc.attachEvent("onpropertychange",fS)):e==="focusout"&&mx()}function N2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return id(hu)}function D2(e,t){if(e==="click")return id(t)}function L2(e,t){if(e==="input"||e==="change")return id(t)}function U2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ca=typeof Object.is=="function"?Object.is:U2;function du(e,t){if(ca(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Sm.call(t,a)||!ca(e[a],t[a]))return!1}return!0}function Am(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vx(e,t){var n=gx(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=gx(n)}}function hS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Am(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Am(e.document)}return t}function Lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var P2=Ns&&"documentMode"in document&&11>=document.documentMode,dl=null,wm=null,$c=null,Rm=!1;function yx(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rm||dl==null||dl!==Am(i)||(i=dl,"selectionStart"in i&&Lg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$c&&du($c,i)||($c=i,i=Jh(wm,"onSelect"),0<i.length&&(t=new ed("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=dl)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pl={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionrun:$r("Transition","TransitionRun"),transitionstart:$r("Transition","TransitionStart"),transitioncancel:$r("Transition","TransitionCancel"),transitionend:$r("Transition","TransitionEnd")},X0={},pS={};Ns&&(pS=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Mo(e){if(X0[e])return X0[e];if(!pl[e])return e;var t=pl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pS)return X0[e]=t[n];return e}var mS=Mo("animationend"),gS=Mo("animationiteration"),vS=Mo("animationstart"),O2=Mo("transitionrun"),I2=Mo("transitionstart"),z2=Mo("transitioncancel"),yS=Mo("transitionend"),_S=new Map,Cm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cm.push("scrollEnd");function Va(e,t){_S.set(e,t),So(t,[e])}var B2=0;function Ds(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ga.identifierPrefix;var n=B2++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function _x(e){if(e==null||typeof e=="string")return e;var t=null,n=Cl;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function zs(e,t){return e=_x(e),t=_x(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ch=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Sa=[],ml=0,Ug=0;function ad(){for(var e=ml,t=Ug=ml=0;t<e;){var n=Sa[t];Sa[t++]=null;var i=Sa[t];Sa[t++]=null;var a=Sa[t];Sa[t++]=null;var s=Sa[t];if(Sa[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&xS(n,a,s)}}function sd(e,t,n,i){Sa[ml++]=e,Sa[ml++]=t,Sa[ml++]=n,Sa[ml++]=i,Ug|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Pg(e,t,n,i){return sd(e,t,n,i),Nh(e)}function bo(e,t){return sd(e,null,null,t),Nh(e)}function xS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-oa(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Nh(e){if(50<cu)throw cu=0,yh=null,Error(lt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function F2(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qi(e,t,n,i){return new F2(e,t,n,i)}function Og(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rs(e,t){var n=e.alternate;return n===null?(n=qi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function SS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ch(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")Og(i)&&(r=1);else if(typeof i=="string")r=f3(e,n,ls.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case gm:return e=qi(31,n,t,a),e.elementType=gm,e.lanes=s,e;case cl:return oo(n.children,a,s,t);case B1:r=8,a|=24;break;case dm:return e=qi(12,n,t,a|2),e.elementType=dm,e.lanes=s,e;case pm:return e=qi(13,n,t,a),e.elementType=pm,e.lanes=s,e;case mm:return e=qi(19,n,t,a),e.elementType=mm,e.lanes=s,e;case AA:case vm:return e=a|32,e=qi(30,n,t,e),e.elementType=vm,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case as:r=10;break t;case F1:r=9;break t;case Mg:r=11;break t;case bg:r=14;break t;case lr:r=16,i=null;break t}r=29,n=Error(lt(130,e===null?"null":typeof e,"")),i=null}return t=qi(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function oo(e,t,n,i){return e=qi(7,e,i,t),e.lanes=n,e}function q0(e,t,n){return e=qi(6,e,null,t),e.lanes=n,e}function MS(e){var t=qi(18,null,null,0);return t.stateNode=e,t}function Y0(e,t,n){return t=qi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xx=new WeakMap;function Ea(e,t){if(typeof e=="object"&&e!==null){var n=xx.get(e);return n!==void 0?n:(t={value:e,source:t,stack:j_(t)},xx.set(e,t),t)}return{value:e,source:t,stack:j_(t)}}var vl=[],yl=0,Dh=null,pu=0,Ma=[],ba=0,wr=null,rs=1,os="";function As(e,t){vl[yl++]=pu,vl[yl++]=Dh,Dh=e,pu=t}function bS(e,t,n){Ma[ba++]=rs,Ma[ba++]=os,Ma[ba++]=wr,wr=e;var i=rs;e=os;var a=32-oa(i)-1;i&=~(1<<a),n+=1;var s=32-oa(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,rs=1<<32-oa(t)+a|n<<a|i,os=s+e}else rs=1<<s|n<<a|i,os=e}function rd(e){e.return!==null&&(As(e,1),bS(e,1,0))}function Ig(e){for(;e===Dh;)Dh=vl[--yl],vl[yl]=null,pu=vl[--yl],vl[yl]=null;for(;e===wr;)wr=Ma[--ba],Ma[ba]=null,os=Ma[--ba],Ma[ba]=null,rs=Ma[--ba],Ma[ba]=null}function TS(e,t){Ma[ba++]=rs,Ma[ba++]=os,Ma[ba++]=wr,rs=t.id,os=t.overflow,wr=e}var ri=null,un=null,Ae=!1,yr=null,Aa=!1,Nm=Error(lt(519));function Rr(e){var t=Error(lt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mu(Ea(t,e)),Nm}function Sx(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[di]=e,t[Ki]=i,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<_u.length;n++)we(_u[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),tS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),nS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||rb(t.textContent,n)?(i.popover!=null&&(we("beforetoggle",t),we("toggle",t)),i.onScroll!=null&&we("scroll",t),i.onScrollEnd!=null&&we("scrollend",t),i.onClick!=null&&(t.onclick=ss),t=!0):t=!1,t||Rr(e,!0)}function Lh(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:ri=ri.return}}function il(e){if(e!==ri)return!1;if(!Ae)return Lh(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pg(e.type,e.memoizedProps)),n=!n),n&&un&&Rr(e),Lh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(lt(317));un=v1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(lt(317));un=v1(e)}else t===27?(t=un,Ur(e.type)?(e=yg,yg=null,un=e):un=t):un=ri?wa(e.stateNode.nextSibling):null;return!0}function fo(){un=ri=null,Ae=!1}function Z0(){var e=yr;return e!==null&&(Wi===null?Wi=e:Wi.push.apply(Wi,e),yr=null),e}function mu(e){yr===null?yr=[e]:yr.push(e)}var Dm=fs(null),To=null,ws=null;function dr(e,t,n){fn(Dm,t._currentValue),t._currentValue=n}function Cs(e){e._currentValue=Dm.current,mi(Dm)}function uh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Lm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),uh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(lt(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),uh(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),uh(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function ho(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(lt(387));if(r=r.memoizedProps,r!==null){var o=a.type;ca(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Th.current){if(r=a.alternate,r===null)throw Error(lt(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}a=a.return}return e!==null&&Lm(t,e,n,i),t.flags|=262144,e!==null}function Uh(e){for(e=e.firstContext;e!==null;){if(!ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function po(e){To=e,ws=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pi(e){return ES(To,e)}function qf(e,t){return To===null&&po(e),ES(e,t)}function ES(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ws===null){if(e===null)throw Error(lt(308));ws=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ws=ws.next=t;return n}var H2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G2=Qn.unstable_scheduleCallback,V2=Qn.unstable_NormalPriority,Gn={$$typeof:as,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zg(){return{controller:new H2,data:new Map,refCount:0}}function Lu(e){e.refCount--,e.refCount===0&&G2(V2,function(){e.controller.abort()})}function Mx(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Kc=null;function k2(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var tu=null,Um=0,mo=0,bl=null;function W2(e,t){if(tu===null){var n=tu=[];Um=0,mo=fv(),bl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Um++,t.then(bx,bx),t}function bx(){if(--Um===0&&(Kc=null,tu!==null)){bl!==null&&(bl.status="fulfilled");var e=tu;tu=null,mo=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function X2(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Tx=re.S;re.S=function(e,t){if(kM=sa(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&W2(e,t),Kc!==null)for(var n=zl;n!==null;)Mx(n,Kc),n=n.next;if(n=e.types,n!==null){for(var i=zl;i!==null;)Mx(i,n),i=i.next;if(mo!==0){i=Kc,i===null&&(i=Kc=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}Tx!==null&&Tx(e,t)};var lo=fs(null);function Bg(){var e=lo.current;return e!==null?e:an.pooledCache}function fh(e,t){t===null?fn(lo,lo.current):fn(lo,t.pool)}function AS(){var e=Bg();return e===null?null:{parent:Gn._currentValue,pool:e}}var Xl=Error(lt(460)),Fg=Error(lt(474)),od=Error(lt(542)),Ph={then:function(){}};function Ex(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ss,ss),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wx(e),e===void 0&&!("reason"in t)?Error(lt(600)):e;default:if(typeof t.status=="string")t.then(ss,ss);else{if(e=an,e!==null&&100<e.shellSuspendCounter)throw Error(lt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wx(e),e}throw co=t,Xl}}function no(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(co=n,Xl):n}}var co=null;function Ax(){if(co===null)throw Error(lt(459));var e=co;return co=null,e}function wx(e){if(e===Xl||e===od)throw Error(lt(483))}var Tl=null,gu=0;function Yf(e){var t=gu;return gu+=1,Tl===null&&(Tl=[]),wS(Tl,e,t)}function sr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zf(e,t){throw t.$$typeof===EA?Error(lt(525)):(e=Object.prototype.toString.call(t),Error(lt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function RS(e){function t(f,m){if(e){var S=f.deletions;S===null?(f.deletions=[m],f.flags|=16):S.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key===null?m.set(f.index,f):m.set(f.key,f),f=f.sibling;return m}function a(f,m){return f=Rs(f,m),f.index=0,f.sibling=null,f}function s(f,m,S){return f.index=S,e?(S=f.alternate,S!==null?(S=S.index,S<m?(f.flags|=2,m):S):(f.flags|=134217730,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,m,S,x){return m===null||m.tag!==6?(m=q0(S,f.mode,x),m.return=f,m):(m=a(m,S),m.return=f,m)}function l(f,m,S,x){var A=S.type;return A===cl?(f=h(f,m,S.props.children,x,S.key),sr(f,S),f):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===lr&&no(A)===m.type)?(m=a(m,S.props),sr(m,S),m.return=f,m):(m=ch(S.type,S.key,S.props,null,f.mode,x),sr(m,S),m.return=f,m)}function c(f,m,S,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Y0(S,f.mode,x),m.return=f,m):(m=a(m,S.children||[]),m.return=f,m)}function h(f,m,S,x,A){return m===null||m.tag!==7?(m=oo(S,f.mode,x,A),m.return=f,m):(m=a(m,S),m.return=f,m)}function d(f,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=q0(""+m,f.mode,S),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bf:return S=ch(m.type,m.key,m.props,null,f.mode,S),sr(S,m),S.return=f,S;case qc:return m=Y0(m,f.mode,S),m.return=f,m;case lr:return m=no(m),d(f,m,S)}if(Yc(m)||Hc(m))return m=oo(m,f.mode,S,null),m.return=f,m;if(typeof m.then=="function")return d(f,Yf(m),S);if(m.$$typeof===as)return d(f,qf(f,m),S);Zf(f,m)}return null}function u(f,m,S,x){var A=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return A!==null?null:o(f,m,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bf:return S.key===A?l(f,m,S,x):null;case qc:return S.key===A?c(f,m,S,x):null;case lr:return S=no(S),u(f,m,S,x)}if(Yc(S)||Hc(S))return A!==null?null:h(f,m,S,x,null);if(typeof S.then=="function")return u(f,m,Yf(S),x);if(S.$$typeof===as)return u(f,m,qf(f,S),x);Zf(f,S)}return null}function p(f,m,S,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(S)||null,o(m,f,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bf:return f=f.get(x.key===null?S:x.key)||null,l(m,f,x,A);case qc:return f=f.get(x.key===null?S:x.key)||null,c(m,f,x,A);case lr:return x=no(x),p(f,m,S,x,A)}if(Yc(x)||Hc(x))return f=f.get(S)||null,h(m,f,x,A,null);if(typeof x.then=="function")return p(f,m,S,Yf(x),A);if(x.$$typeof===as)return p(f,m,S,qf(m,x),A);Zf(m,x)}return null}function y(f,m,S,x){for(var A=null,w=null,g=m,b=m=0,P=null;g!==null&&b<S.length;b++){g.index>b?(P=g,g=null):P=g.sibling;var C=u(f,g,S[b],x);if(C===null){g===null&&(g=P);break}e&&g&&C.alternate===null&&t(f,g),m=s(C,m,b),w===null?A=C:w.sibling=C,w=C,g=P}if(b===S.length)return n(f,g),Ae&&As(f,b),A;if(g===null){for(;b<S.length;b++)g=d(f,S[b],x),g!==null&&(m=s(g,m,b),w===null?A=g:w.sibling=g,w=g);return Ae&&As(f,b),A}for(g=i(g);b<S.length;b++)P=p(g,f,b,S[b],x),P!==null&&(e&&(C=P.alternate,C!==null&&g.delete(C.key===null?b:C.key)),m=s(P,m,b),w===null?A=P:w.sibling=P,w=P);return e&&g.forEach(function(O){return t(f,O)}),Ae&&As(f,b),A}function _(f,m,S,x){if(S==null)throw Error(lt(151));for(var A=null,w=null,g=m,b=m=0,P=null,C=S.next();g!==null&&!C.done;b++,C=S.next()){g.index>b?(P=g,g=null):P=g.sibling;var O=u(f,g,C.value,x);if(O===null){g===null&&(g=P);break}e&&g&&O.alternate===null&&t(f,g),m=s(O,m,b),w===null?A=O:w.sibling=O,w=O,g=P}if(C.done)return n(f,g),Ae&&As(f,b),A;if(g===null){for(;!C.done;b++,C=S.next())C=d(f,C.value,x),C!==null&&(m=s(C,m,b),w===null?A=C:w.sibling=C,w=C);return Ae&&As(f,b),A}for(g=i(g);!C.done;b++,C=S.next())C=p(g,f,b,C.value,x),C!==null&&(e&&(P=C.alternate,P!==null&&g.delete(P.key===null?b:P.key)),m=s(C,m,b),w===null?A=C:w.sibling=C,w=C);return e&&g.forEach(function(B){return t(f,B)}),Ae&&As(f,b),A}function v(f,m,S,x){if(typeof S=="object"&&S!==null&&S.type===cl&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Bf:t:{for(var A=S.key;m!==null;){if(m.key===A){if(A=S.type,A===cl){if(m.tag===7){n(f,m.sibling),x=a(m,S.props.children),sr(x,S),x.return=f,f=x;break t}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===lr&&no(A)===m.type){n(f,m.sibling),x=a(m,S.props),sr(x,S),x.return=f,f=x;break t}n(f,m);break}else t(f,m);m=m.sibling}S.type===cl?(x=oo(S.props.children,f.mode,x,S.key),sr(x,S),x.return=f,f=x):(x=ch(S.type,S.key,S.props,null,f.mode,x),sr(x,S),x.return=f,f=x)}return r(f);case qc:t:{for(A=S.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(f,m.sibling),x=a(m,S.children||[]),x.return=f,f=x;break t}else{n(f,m);break}else t(f,m);m=m.sibling}x=Y0(S,f.mode,x),x.return=f,f=x}return r(f);case lr:return S=no(S),v(f,m,S,x)}if(Yc(S))return y(f,m,S,x);if(Hc(S)){if(A=Hc(S),typeof A!="function")throw Error(lt(150));return S=A.call(S),_(f,m,S,x)}if(typeof S.then=="function")return v(f,m,Yf(S),x);if(S.$$typeof===as)return v(f,m,qf(f,S),x);Zf(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(f,m.sibling),x=a(m,S),x.return=f,f=x):(n(f,m),x=q0(S,f.mode,x),x.return=f,f=x),r(f)):n(f,m)}return function(f,m,S,x){try{gu=0;var A=v(f,m,S,x);return Tl=null,A}catch(g){if(g===Xl||g===od)throw g;var w=qi(29,g,null,f.mode);return w.lanes=x,w.return=f,w}}}var go=RS(!0),CS=RS(!1),cr=!1;function Hg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _r(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(We&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Nh(e),xS(e,null,n),t}return sd(e,i,t,n),Nh(e)}function eu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,q1(e,n)}}function K0(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Om=!1;function nu(){if(Om){var e=bl;if(e!==null)throw e}}function iu(e,t,n,i){Om=!1;var a=e.updateQueue;cr=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Ne&u)===u:(i&u)===u){u!==0&&u===mo&&(Om=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var y=e,_=o;u=t;var v=n;switch(_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,u);break t}d=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,u=typeof y=="function"?y.call(v,d,u):y,u==null)break t;d=sn({},d,u);break t;case 2:cr=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Dr|=r,e.lanes=r,e.memoizedState=d}}function NS(e,t){if(typeof e!="function")throw Error(lt(191,e));e.call(t)}function DS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)NS(n[e],t)}var Cr=fs(null),Oh=fs(0);function Rx(e,t){e=Os,fn(Oh,e),fn(Cr,t),Os=e|t.baseLanes}function Im(){fn(Oh,Os),fn(Cr,Cr.current)}function Gg(){Os=Oh.current,mi(Cr),mi(Oh)}var yi=fs(null),Mi=null;function Sr(e){var t=e.alternate;fn(gi,gi.current&1),fn(yi,e),Mi===null&&(t===null||Cr.current!==null||t.memoizedState!==null)&&(Mi=e)}function zm(e){fn(gi,gi.current),fn(yi,e),Mi===null&&(Mi=e)}function LS(e){e.tag===22?(fn(gi,gi.current),fn(yi,e),Mi===null&&(Mi=e)):Mr()}function Mr(){fn(gi,gi.current),fn(yi,yi.current)}function na(e){mi(yi),Mi===e&&(Mi=null),mi(gi)}var gi=fs(0);function vu(e,t){fn(yi,yi.current),fn(gi,t)}function Vg(e){mi(gi),mi(yi),Mi===e&&(Mi=null)}function Ih(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||vg(n)||mv(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ls=0,Se=null,en=null,Hn=null,zh=!1,El=!1,vo=!1,Bh=0,yu=0,Al=null,q2=0;function wn(){throw Error(lt(321))}function kg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ca(e[n],t[n]))return!1;return!0}function Wg(e,t,n,i,a,s){return Ls=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,re.H=e===null||e.memoizedState===null?cM:uM,vo=!1,s=n(i,a),vo=!1,El&&(s=PS(t,n,i,a)),US(e),s}function US(e){re.H=Fh;var t=en!==null&&en.next!==null;if(Ls=0,Hn=en=Se=null,zh=!1,yu=0,Al=null,t)throw Error(lt(300));e===null||Vn||(e=e.dependencies,e!==null&&Uh(e)&&(Vn=!0))}function PS(e,t,n,i){Se=e;var a=0;do{if(El&&(Al=null),yu=0,El=!1,25<=a)throw Error(lt(301));if(a+=1,Hn=en=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}re.H=tw,s=t(n,i)}while(El);return s}function Y2(){var e=re.H,t=e.useState()[0];return t=typeof t.then=="function"?Uu(t):t,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(Se.flags|=1024),t}function Xg(){var e=Bh!==0;return Bh=0,e}function qg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yg(e){if(zh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zh=!1}Ls=0,Hn=en=Se=null,El=!1,yu=Bh=0,Al=null}function Li(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?Se.memoizedState=Hn=e:Hn=Hn.next=e,Hn}function Un(){if(en===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var t=Hn===null?Se.memoizedState:Hn.next;if(t!==null)Hn=t,en=e;else{if(e===null)throw Se.alternate===null?Error(lt(467)):Error(lt(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Hn===null?Se.memoizedState=Hn=e:Hn=Hn.next=e}return Hn}function ld(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uu(e){var t=yu;return yu+=1,Al===null&&(Al=[]),e=wS(Al,e,t),t=Se,(Hn===null?t.memoizedState:Hn.next)===null&&(t=t.alternate,re.H=t===null||t.memoizedState===null?cM:uM),e}function cd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uu(e);if(e.$$typeof===RA)return;if(e.$$typeof===as)return pi(e)}throw Error(lt(438,String(e)))}function Zg(e){var t=null,n=Se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ld(),Se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=wA;return t.index++,n}function Us(e,t){return typeof t=="function"?t(e):t}function hh(e){var t=Un();return Kg(t,en,e)}function Kg(e,t,n){var i=e.queue;if(i===null)throw Error(lt(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Ne&d)===d:(Ls&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===mo&&(h=!0);else if((Ls&u)===u){c=c.next,u===mo&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Se.lanes|=u,Dr|=u;d=c.action,vo&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Se.lanes|=d,Dr|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!ca(s,e.memoizedState)&&(Vn=!0,h&&(n=bl,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function J0(e){var t=Un(),n=t.queue;if(n===null)throw Error(lt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);ca(s,t.memoizedState)||(Vn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function OS(e,t,n){var i=Se,a=Un(),s=Ae;if(s){if(n===void 0)throw Error(lt(407));n=n()}else n=t();var r=!ca((en||a).memoizedState,n);if(r&&(a.memoizedState=n,Vn=!0),a=a.queue,Jg(BS.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||Hn!==null&&(Hn.memoizedState.tag&1)!==0,Ul(e?9:8,{destroy:void 0},zS.bind(null,i,a,n,t),null),e){if(i.flags|=2048,an===null)throw Error(lt(349));s||(Ls&127)!==0||IS(i,t,n)}return n}function IS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t=ld(),Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zS(e,t,n,i){t.value=n,t.getSnapshot=i,FS(t)&&HS(e)}function BS(e,t,n){return n(function(){FS(t)&&HS(e)})}function FS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ca(e,n)}catch{return!0}}function HS(e){var t=bo(e,2);t!==null&&Yi(t,e,2)}function Bm(e){var t=Li();if(typeof e=="function"){var n=e;if(e=n(),vo){fr(!0);try{n()}finally{fr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:e},t}function GS(e,t,n,i){return e.baseState=n,Kg(e,en,typeof i=="function"?i:Us)}function Z2(e,t,n,i,a){if(fd(e))throw Error(lt(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};re.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,VS(t,s)):(s.next=n.next,t.pending=n.next=s)}}function VS(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=re.T,r={};r.types=s!==null?s.types:null,re.T=r;try{var o=n(a,i),l=re.S;l!==null&&l(r,o),Cx(e,t,o)}catch(c){Fm(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),re.T=s}}else try{s=n(a,i),Cx(e,t,s)}catch(c){Fm(e,t,c)}}function Cx(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Nx(e,t,i)},function(i){return Fm(e,t,i)}):Nx(e,t,n)}function Nx(e,t,n){t.status="fulfilled",t.value=n,kS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,VS(e,n)))}function Fm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,kS(t),t=t.next;while(t!==i)}e.action=null}function kS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function WS(e,t){return t}function Dx(e,t){if(Ae){var n=an.formState;if(n!==null){t:{var i=Se;if(Ae){if(un){e:{for(var a=un,s=Aa;a.nodeType!==8;){if(!s){a=null;break e}if(a=wa(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){un=wa(a.nextSibling),i=a.data==="F!";break t}}Rr(i)}i=!1}i&&(t=n[0])}}return n=Li(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:WS,lastRenderedState:t},n.queue=i,n=rM.bind(null,Se,i),i.dispatch=n,i=Bm(!1),s=tv.bind(null,Se,!1,i.queue),i=Li(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Z2.bind(null,Se,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Lx(e){var t=Un();return XS(t,en,e)}function XS(e,t,n){if(t=Kg(e,t,WS)[0],e=hh(Us)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Uu(t)}catch(r){throw r===Xl?od:r}else i=t;t=Un();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Se.flags|=2048,Ul(9,{destroy:void 0},K2.bind(null,a,n),null)),[i,s,e]}function K2(e,t){e.action=t}function Ux(e){var t=Un(),n=en;if(n!==null)return XS(t,n,e);Un(),t=t.memoizedState,n=Un();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ul(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Se.updateQueue,t===null&&(t=ld(),Se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function qS(){return Un().memoizedState}function dh(e,t,n,i){var a=Li();Se.flags|=e,a.memoizedState=Ul(1|t,{destroy:void 0},n,i===void 0?null:i)}function ud(e,t,n,i){var a=Un();i=i===void 0?null:i;var s=a.memoizedState.inst;en!==null&&i!==null&&kg(i,en.memoizedState.deps)?a.memoizedState=Ul(t,s,n,i):(Se.flags|=e,a.memoizedState=Ul(1|t,s,n,i))}function Px(e,t){dh(8390656,8,e,t)}function Jg(e,t){ud(2048,8,e,t)}function J2(e){Se.flags|=4;var t=Se.updateQueue;if(t===null)t=ld(),Se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function YS(e){var t=Un().memoizedState;return J2({ref:t,nextImpl:e}),function(){if((We&2)!==0)throw Error(lt(440));return t.impl.apply(void 0,arguments)}}function ZS(e,t){return ud(4,2,e,t)}function KS(e,t){return ud(4,4,e,t)}function JS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function QS(e,t,n){n=n!=null?n.concat([e]):null,ud(4,4,JS.bind(null,t,e),n)}function Qg(){}function jS(e,t){var n=Un();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&kg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function $S(e,t){var n=Un();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&kg(t,i[1]))return i[0];if(i=e(),vo){fr(!0);try{e()}finally{fr(!1)}}return n.memoizedState=[i,t],i}function jg(e,t,n){return n===void 0||(Ls&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=XM(),Se.lanes|=e,Dr|=e,n)}function tM(e,t,n,i){return ca(n,t)?n:Cr.current!==null?(e=jg(e,n,i),ca(e,t)||(Vn=!0),e):(Ls&106)===0||(Ls&1073741824)!==0&&(Ne&261930)===0?(Vn=!0,e.memoizedState=n):(e=XM(),Se.lanes|=e,Dr|=e,t)}function eM(e,t,n,i,a){var s=Xe.p;Xe.p=s!==0&&8>s?s:8;var r=re.T,o={};o.types=r!==null?r.types:null,re.T=o,tv(e,!1,t,n);try{var l=a(),c=re.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=X2(l,i);au(e,t,h,la(e))}else au(e,t,i,la(e))}catch(d){au(e,t,{then:function(){},status:"rejected",reason:d},la())}finally{Xe.p=s,r!==null&&o.types!==null&&(r.types=o.types),re.T=r}}function Q2(){}function Hm(e,t,n,i){if(e.tag!==5)throw Error(lt(476));var a=nM(e).queue;eM(e,a,t,ro,n===null?Q2:function(){return iM(e),n(i)})}function nM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ro,baseState:ro,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:ro},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function iM(e){var t=nM(e);t.next===null&&(t=e.alternate.memoizedState),au(e,t.next.queue,{},la())}function $g(){return pi(Hl)}function aM(){return Un().memoizedState}function sM(){return Un().memoizedState}function j2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=la();e=_r(n);var i=xr(t,e,n);i!==null&&(Yi(i,t,n),eu(i,t,n)),t={cache:zg()},e.payload=t;return}t=t.return}}function $2(e,t,n){var i=la();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fd(e)?oM(t,n):(n=Pg(e,t,n,i),n!==null&&(Yi(n,e,i),lM(n,t,i)))}function rM(e,t,n){var i=la();au(e,t,n,i)}function au(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fd(e))oM(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,ca(o,r))return sd(e,t,a,0),an===null&&ad(),!1}catch{}if(n=Pg(e,t,a,i),n!==null)return Yi(n,e,i),lM(n,t,i),!0}return!1}function tv(e,t,n,i){if(i={lane:2,revertLane:fv(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fd(e)){if(t)throw Error(lt(479))}else t=Pg(e,n,i,2),t!==null&&Yi(t,e,2)}function fd(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function oM(e,t){El=zh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,q1(e,n)}}var Fh={readContext:pi,use:cd,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn,useEffectEvent:wn},cM={readContext:pi,use:cd,useCallback:function(e,t){return Li().memoizedState=[e,t===void 0?null:t],e},useContext:pi,useEffect:Px,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,dh(4194308,4,JS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return dh(4194308,4,e,t)},useInsertionEffect:function(e,t){dh(4,2,e,t)},useMemo:function(e,t){var n=Li();t=t===void 0?null:t;var i=e();if(vo){fr(!0);try{e()}finally{fr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Li();if(n!==void 0){var a=n(t);if(vo){fr(!0);try{n(t)}finally{fr(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=$2.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=Li();return e={current:e},t.memoizedState=e},useState:function(e){e=Bm(e);var t=e.queue,n=rM.bind(null,Se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qg,useDeferredValue:function(e,t){var n=Li();return jg(n,e,t)},useTransition:function(){var e=Bm(!1);return e=eM.bind(null,Se,e.queue,!0,!1),Li().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Se,a=Li();if(Ae){if(n===void 0)throw Error(lt(407));n=n()}else{if(n=t(),an===null)throw Error(lt(349));(Ne&127)!==0||IS(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Px(BS.bind(null,i,s,e),[e]),i.flags|=2048,Ul(9,{destroy:void 0},zS.bind(null,i,s,n,t),null),n},useId:function(){var e=Li(),t=an.identifierPrefix;if(Ae){var n=os,i=rs;n=(i&~(1<<32-oa(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=q2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$g,useFormState:Dx,useActionState:Dx,useOptimistic:function(e){var t=Li();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=tv.bind(null,Se,!0,n),n.dispatch=t,[e,t]},useMemoCache:Zg,useCacheRefresh:function(){return Li().memoizedState=j2.bind(null,Se)},useEffectEvent:function(e){var t=Li(),n={impl:e};return t.memoizedState=n,function(){if((We&2)!==0)throw Error(lt(440));return n.impl.apply(void 0,arguments)}}},uM={readContext:pi,use:cd,useCallback:jS,useContext:pi,useEffect:Jg,useImperativeHandle:QS,useInsertionEffect:ZS,useLayoutEffect:KS,useMemo:$S,useReducer:hh,useRef:qS,useState:function(){return hh(Us)},useDebugValue:Qg,useDeferredValue:function(e,t){var n=Un();return tM(n,en.memoizedState,e,t)},useTransition:function(){var e=hh(Us)[0],t=Un().memoizedState;return[typeof e=="boolean"?e:Uu(e),t]},useSyncExternalStore:OS,useId:aM,useHostTransitionStatus:$g,useFormState:Lx,useActionState:Lx,useOptimistic:function(e,t){var n=Un();return GS(n,en,e,t)},useMemoCache:Zg,useCacheRefresh:sM,useEffectEvent:YS},tw={readContext:pi,use:cd,useCallback:jS,useContext:pi,useEffect:Jg,useImperativeHandle:QS,useInsertionEffect:ZS,useLayoutEffect:KS,useMemo:$S,useReducer:J0,useRef:qS,useState:function(){return J0(Us)},useDebugValue:Qg,useDeferredValue:function(e,t){var n=Un();return en===null?jg(n,e,t):tM(n,en.memoizedState,e,t)},useTransition:function(){var e=J0(Us)[0],t=Un().memoizedState;return[typeof e=="boolean"?e:Uu(e),t]},useSyncExternalStore:OS,useId:aM,useHostTransitionStatus:$g,useFormState:Ux,useActionState:Ux,useOptimistic:function(e,t){var n=Un();return en!==null?GS(n,en,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Zg,useCacheRefresh:sM,useEffectEvent:YS};function Q0(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:sn({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=la(),a=_r(i);a.payload=t,n!=null&&(a.callback=n),t=xr(e,a,i),t!==null&&(Yi(t,e,i),eu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=la(),a=_r(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xr(e,a,i),t!==null&&(Yi(t,e,i),eu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=la(),i=_r(n);i.tag=2,t!=null&&(i.callback=t),t=xr(e,i,n),t!==null&&(Yi(t,e,n),eu(t,e,n))}};function Ox(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!du(n,i)||!du(a,s):!0}function Ix(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Gm.enqueueReplaceState(t,t.state,null)}function yo(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=sn({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function fM(e){Ch(e)}function hM(e){console.error(e)}function dM(e){Ch(e)}function Hh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function zx(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Vm(e,t,n){return n=_r(n),n.tag=3,n.payload={element:null},n.callback=function(){Hh(e,t)},n}function pM(e){return e=_r(e),e.tag=3,e}function mM(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){zx(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){zx(t,n,i),typeof a!="function"&&(br===null?br=new Set([this]):br.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ew(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ho(t,n,a,!0),n=yi.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mi===null?Zh():n.alternate===null&&Rn===0&&(Rn=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Ph?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),am(e,i,a)),!1;case 22:return n.flags|=65536,i===Ph?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),am(e,i,a)),!1}throw Error(lt(435,n.tag))}return am(e,i,a),Zh(),!1}if(Ae)return t=yi.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Nm&&(e=Error(lt(422),{cause:i}),mu(Ea(e,n)))):(i!==Nm&&(t=Error(lt(423),{cause:i}),mu(Ea(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ea(i,n),a=Vm(e.stateNode,i,a),K0(e,a),Rn!==4&&(Rn=2)),!1;var s=Error(lt(520),{cause:i});if(s=Ea(s,n),lu===null?lu=[s]:lu.push(s),Rn!==4&&(Rn=2),t===null)return!0;i=Ea(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Vm(n.stateNode,i,e),K0(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(br===null||!br.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=pM(a),mM(a,e,n,i),K0(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ev=Error(lt(461)),Vn=!1;function Kn(e,t,n,i){t.child=e===null?CS(t,null,n,i):go(t,e.child,n,i)}function Bx(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return po(t),i=Wg(e,t,n,r,s,a),o=Xg(),e!==null&&!Vn?(qg(e,t,a),Ps(e,t,a)):(Ae&&o&&rd(t),t.flags|=1,Kn(e,t,i,a),t.child)}function Fx(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Og(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,gM(e,t,s,i,a)):(e=ch(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!iv(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:du,n(r,i)&&e.ref===t.ref)return Ps(e,t,a)}return t.flags|=1,e=Rs(s,i),e.ref=t.ref,e.return=t,t.child=e}function gM(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(du(s,i)&&e.ref===t.ref)if(Vn=!1,t.pendingProps=i=s,iv(e,a))(e.flags&131072)!==0&&(Vn=!0);else return t.lanes=e.lanes,Ps(e,t,a)}return km(e,t,n,i,a)}function vM(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Hx(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fh(t,s!==null?s.cachePool:null),s!==null?Rx(t,s):Im(),LS(t);else return i=t.lanes=536870912,Hx(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(fh(t,s.cachePool),Rx(t,s),Mr(),t.memoizedState=null):(e!==null&&fh(t,null),Im(),Mr());return Kn(e,t,a,n),t.child}function su(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hx(e,t,n,i,a){var s=Bg();return s=s===null?null:{parent:Gn._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&fh(t,null),Im(),LS(t),e!==null&&ho(e,t,i,!0),t.childLanes=a,null}function ph(e,t){return t=hd({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gx(e,t,n){return go(t,e.child,null,n),e=ph(t,t.pendingProps),e.flags|=2,na(t),t.memoizedState=null,e}function nw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(i.mode==="hidden")return e=ph(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},su(null,e);if(zm(t),(e=un)?(e=vb(e,Aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wr!==null?{id:rs,overflow:os}:null,retryLane:536870912,hydrationErrors:null},n=MS(e),n.return=t,t.child=n,ri=t,un=null)):e=null,e===null)throw Rr(t);return t.lanes=536870912,null}return ph(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(zm(t),a)if(t.flags&256)t.flags&=-257,t=Gx(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(lt(558));else if(Vn||ho(e,t,n,!1),a=(n&e.childLanes)!==0,Vn||a){if(Cr.current===null){if(i=an,i!==null&&(r=Y1(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bo(e,r),Yi(i,e,r),ev;Zh()}t=Gx(e,t,n)}else e=s.treeContext,un=wa(r.nextSibling),ri=t,Ae=!0,yr=null,Aa=!1,e!==null&&TS(t,e),t=ph(t,i),t.flags|=134221824;return t}return e=Rs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(lt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function km(e,t,n,i,a){return po(t),n=Wg(e,t,n,i,void 0,a),i=Xg(),e!==null&&!Vn?(qg(e,t,a),Ps(e,t,a)):(Ae&&i&&rd(t),t.flags|=1,Kn(e,t,n,a),t.child)}function Vx(e,t,n,i,a,s){return po(t),t.updateQueue=null,n=PS(t,i,n,a),US(e),i=Xg(),e!==null&&!Vn?(qg(e,t,s),Ps(e,t,s)):(Ae&&i&&rd(t),t.flags|=1,Kn(e,t,n,s),t.child)}function kx(e,t,n,i,a){if(po(t),t.stateNode===null){var s=gl,r=n.contextType;typeof r=="object"&&r!==null&&(s=pi(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gm,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Hg(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?pi(r):gl,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Q0(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Gm.enqueueReplaceState(s,s.state,null),iu(t,i,s,a),nu(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=yo(n,o);s.props=l;var c=s.context,h=n.contextType;r=gl,typeof h=="object"&&h!==null&&(r=pi(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Ix(t,s,i,r),cr=!1;var u=t.memoizedState;s.state=u,iu(t,i,s,a),nu(),c=t.memoizedState,o||u!==c||cr?(typeof d=="function"&&(Q0(t,n,d,i),c=t.memoizedState),(l=cr||Ox(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Pm(e,t),r=t.memoizedProps,h=yo(n,r),s.props=h,d=t.pendingProps,u=s.context,c=n.contextType,l=gl,typeof c=="object"&&c!==null&&(l=pi(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||u!==l)&&Ix(t,s,i,l),cr=!1,u=t.memoizedState,s.state=u,iu(t,i,s,a),nu();var p=t.memoizedState;r!==d||u!==p||cr||e!==null&&e.dependencies!==null&&Uh(e.dependencies)?(typeof o=="function"&&(Q0(t,n,o,i),p=t.memoizedState),(h=cr||Ox(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&Uh(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,sl(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=go(t,e.child,null,a),t.child=go(t,null,n,a)):Kn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Ps(e,t,a),e}function Wx(e,t,n,i){return fo(),t.flags|=256,Kn(e,t,n,i),t.child}var Wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xm(e){return{baseLanes:e,cachePool:AS()}}function qm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=aa),e}function yM(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(gi.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(a?Sr(t):Mr(),(e=un)?(e=vb(e,Aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wr!==null?{id:rs,overflow:os}:null,retryLane:536870912,hydrationErrors:null},n=MS(e),n.return=t,t.child=n,ri=t,un=null)):e=null,e===null)throw Rr(t);return mv(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(Mr(),a=t.mode,s=hd({mode:"hidden",children:s},a),i=oo(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=Xm(n),i.childLanes=qm(e,r,n),t.memoizedState=Wm,su(null,i)):(Sr(t),nv(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return iw(e,t,s,r,i,l,o,n)}return a?(Mr(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Rs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Rs(l,a):(a=oo(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,su(null,i),i=t.child,a=e.child.memoizedState,a===null?a=Xm(n):(s=a.cachePool,s!==null?(o=Gn._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=AS(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=qm(e,r,n),t.memoizedState=Wm,su(e.child,i)):(Sr(t),n=e.child,e=n.sibling,n=Rs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function nv(e,t){return t=hd({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hd(e,t){return e=qi(22,e,null,t),e.lanes=0,e}function Kf(e,t,n){return go(t,e.child,null,n),e=nv(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iw(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(Sr(t),t.flags&=-257,Kf(e,t,o)):t.memoizedState!==null?(Mr(),t.child=e.child,t.flags|=128,null):(Mr(),s=a.fallback,r=t.mode,a=hd({mode:"visible",children:a.children},r),s=oo(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,go(t,e.child,null,o),a=t.child,a.memoizedState=Xm(o),a.childLanes=qm(e,i,o),t.memoizedState=Wm,su(null,a));if(Sr(t),mv(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(lt(419)),a.stack="",a.digest=i,mu({value:a,source:null,stack:null})),Kf(e,t,o)}if(Vn||ho(e,t,o,!1),i=(o&e.childLanes)!==0,Vn||i){if(Cr.current!==null)return Kf(e,t,o);if(i=an,i!==null&&(a=Y1(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,bo(e,a),Yi(i,e,a),ev;return vg(s)||Zh(),Kf(e,t,o)}return vg(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,un=wa(s.nextSibling),ri=t,Ae=!0,yr=null,Aa=!1,e!==null&&TS(t,e),t=nv(t,a.children),t.flags|=134221824,t)}function Xx(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),uh(e.return,t,n)}function qx(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ih(n)===null&&(t=e),e=e.sibling}return t}function Jf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function j0(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ym(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=gi.current;if(t.flags&128)return vu(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,vu(t,r),a==="backwards"&&e!==null?(j0(e),Kn(e,t,i,n),j0(e)):Kn(e,t,i,n),i=Ae?pu:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xx(e,n,t);else if(e.tag===19)Xx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=qx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,j0(t)),Jf(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ih(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Jf(t,!0,n,null,s,i);break;case"together":Jf(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=qx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Jf(t,!1,a,n,s,i)}return t.child}function Yx(e,t,n){var i=t.pendingProps;return dr(t,t.type,i.value),Kn(e,t,i.children,n),t.child}function Ps(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ho(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(lt(153));if(t.child!==null){for(e=t.child,n=Rs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iv(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Uh(e)))}function aw(e,t,n){switch(t.tag){case 3:Eh(t,t.stateNode.containerInfo),dr(t,Gn,e.memoizedState.cache),fo();break;case 27:case 5:xm(t);break;case 4:Eh(t,t.stateNode.containerInfo);break;case 10:dr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Sr(t),t.flags|=128,null;i=ho(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?yM(e,t,n):(Sr(t),e=Ps(e,t,n),e!==null?e.sibling:null)}Sr(t);break;case 19:if(t.flags&128)return Ym(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(ho(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Ym(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),vu(t,gi.current),i)break;return null;case 22:return t.lanes=0,vM(e,t,n,t.pendingProps);case 24:dr(t,Gn,e.memoizedState.cache)}return Ps(e,t,n)}function _M(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Vn=!0;else{if(!iv(e,n)&&(t.flags&128)===0)return Vn=!1,aw(e,t,n);Vn=(e.flags&131072)!==0}else Vn=!1,Ae&&(t.flags&1048576)!==0&&bS(t,pu,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=no(t.elementType),t.type=e,typeof e=="function")Og(e)?(i=yo(e,i),t.tag=1,t=kx(null,t,e,i,n)):(t.tag=0,t=km(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Mg){t.tag=11,t=Bx(null,t,e,i,n);break t}else if(a===bg){t.tag=14,t=Fx(null,t,e,i,n);break t}else if(a===as){t.tag=10,t.type=e,t=Yx(null,t,n);break t}}throw t=ym(e)||e,Error(lt(306,t,""))}}return t;case 0:return km(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=yo(i,t.pendingProps),kx(e,t,i,a,n);case 3:t:{if(Eh(t,t.stateNode.containerInfo),e===null)throw Error(lt(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Pm(e,t),iu(t,i,null,n);var r=t.memoizedState;if(i=r.cache,dr(t,Gn,i),i!==s.cache&&Lm(t,[Gn],n,!0),nu(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Wx(e,t,i,n);break t}else if(i!==a){a=Ea(Error(lt(424)),t),mu(a),t=Wx(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,un=wa(e.firstChild),ri=t,Ae=!0,yr=null,Aa=!0,n=CS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(fo(),i===a){t=Ps(e,t,n);break t}Kn(e,t,i,n)}t=t.child}return t;case 26:return sl(e,t),e===null?(n=x1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(t.stateNode=lb(t.type,t.pendingProps,vr.current,t)):t.memoizedState=x1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xm(t),e===null&&Ae&&(i=t.stateNode=yb(t.type,t.pendingProps,vr.current),ri=t,Aa=!0,a=un,Ur(t.type)?(yg=a,un=wa(i.firstChild)):un=a),Kn(e,t,t.pendingProps.children,n),sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((a=i=un)&&(i=Jw(i,t.type,t.pendingProps,Aa),i!==null?(t.stateNode=i,ri=t,un=wa(i.firstChild),Aa=!1,a=!0):a=!1),a||Rr(t)),xm(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,pg(a,s)?i=null:r!==null&&pg(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Wg(e,t,Y2,null,null,n),Hl._currentValue=a),sl(e,t),Kn(e,t,i,n),t.child;case 6:return e===null&&Ae&&((e=n=un)&&(n=Qw(n,t.pendingProps,Aa),n!==null?(t.stateNode=n,ri=t,un=null,e=!0):e=!1),e||Rr(t)),null;case 13:return yM(e,t,n);case 4:return Eh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=go(t,null,i,n):Kn(e,t,i,n),t.child;case 11:return Bx(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,sl(e,t),Kn(e,t,i,n),t.child;case 8:return Kn(e,t,t.pendingProps.children,n),t.child;case 12:return Kn(e,t,t.pendingProps.children,n),t.child;case 10:return Yx(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,po(t),a=pi(a),i=i(a),t.flags|=1,Kn(e,t,i,n),t.child;case 14:return Fx(e,t,t.type,t.pendingProps,n);case 15:return gM(e,t,t.type,t.pendingProps,n);case 19:return Ym(e,t,n);case 31:return nw(e,t,n);case 22:return vM(e,t,n,t.pendingProps);case 24:return po(t),i=pi(Gn),e===null?(a=Bg(),a===null&&(a=an,s=zg(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Hg(t),dr(t,Gn,a)):((e.lanes&n)!==0&&(Pm(e,t),iu(t,null,null,n),nu()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),dr(t,Gn,i)):(i=s.cache,dr(t,Gn,i),i!==a.cache&&Lm(t,[Gn],n,!0))),Kn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Ae&&rd(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:sl(e,t),Kn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(lt(156,t.tag))}function Es(e){e.flags|=4}function $0(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?b1(t,i):b1(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(ZM())e.flags|=8192;else throw co=Ph,Fg}else e.flags&=-16777217}function Zx(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mb(t))if(ZM())e.flags|=8192;else throw co=Ph,Fg}function Qf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?W1():536870912,e.lanes|=t,Pl|=t)}function Vc(e,t){if(!Ae)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function cn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sw(e,t,n){var i=t.pendingProps;switch(Ig(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(t),null;case 1:return cn(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Cs(Gn),Nl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(il(t)?Es(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Z0())),cn(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Es(t),s!==null?(cn(t),Zx(t,s)):(cn(t),$0(t,a,null,i,n))):s?s!==e.memoizedState?(Es(t),cn(t),Zx(t,s)):(cn(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Es(t),cn(t),$0(t,a,e,i,n)),null;case 27:if(Ah(t),n=vr.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Es(t);else{if(!i){if(t.stateNode===null)throw Error(lt(166));return cn(t),t.subtreeFlags&=-33554433,null}e=ls.current,il(t)?Sx(t,e):(e=yb(a,i,n),t.stateNode=e,Es(t))}return cn(t),t.subtreeFlags&=-33554433,null;case 5:if(Ah(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Es(t);else{if(!i){if(t.stateNode===null)throw Error(lt(166));return cn(t),t.subtreeFlags&=-33554433,null}if(s=ls.current,il(t))Sx(t,s);else{var r=Su(vr.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[di]=t,s[Ki]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(vi(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Es(t)}}return cn(t),t.subtreeFlags&=-33554433,$0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Es(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(lt(166));if(e=vr.current,il(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=ri,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[di]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||rb(e.nodeValue,n)),e||Rr(t,!0)}else e=Su(e).createTextNode(i),e[di]=t,t.stateNode=e}return cn(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=il(t),n!==null){if(e===null){if(!i)throw Error(lt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(lt(557));e[di]=t}else fo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cn(t),e=!1}else n=Z0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(na(t),t):(na(t),null);if((t.flags&128)!==0)throw Error(lt(558))}return cn(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=il(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(lt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(lt(317));a[di]=t}else fo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cn(t),a=!1}else a=Z0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(na(t),t):(na(t),null)}return na(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qf(t,t.updateQueue),cn(t),null);case 4:return Nl(),e===null&&hv(t.stateNode.containerInfo),t.flags|=67108864,cn(t),null;case 10:return Cs(t.type),cn(t),null;case 19:if(Vg(t),i=t.memoizedState,i===null)return cn(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Vc(i,!1);else{if(Rn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ih(e),s!==null){for(t.flags|=128,Vc(i,!1),e=s.updateQueue,t.updateQueue=e,Qf(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)SS(n,e),n=n.sibling;return vu(t,gi.current&1|2),Ae&&As(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&sa()>qh&&(t.flags|=128,a=!0,Vc(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ih(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Qf(t,e),Vc(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!Ae)return cn(t),null}else 2*sa()-i.renderingStartTime>qh&&n!==536870912&&(t.flags|=128,a=!0,Vc(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=sa(),e.sibling=null,s=gi.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Ae?vu(t,s):(n=s,fn(yi,t),fn(gi,n),Mi===null&&(Mi=t)),Ae&&As(t,i.treeForkCount),e}return cn(t),null;case 22:case 23:return na(t),Gg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(cn(t),t.subtreeFlags&6&&(t.flags|=8192)):cn(t),n=t.updateQueue,n!==null&&Qf(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&mi(lo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Cs(Gn),cn(t),null;case 25:return null;case 30:return t.flags|=33554432,cn(t),null}throw Error(lt(156,t.tag))}function rw(e,t){switch(Ig(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cs(Gn),Nl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ah(t),null;case 31:if(t.memoizedState!==null){if(na(t),t.alternate===null)throw Error(lt(340));fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(na(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(lt(340));fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Vg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Nl(),null;case 10:return Cs(t.type),null;case 22:case 23:return na(t),Gg(),e!==null&&mi(lo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Cs(Gn),null;case 25:return null;default:return null}}function xM(e,t){switch(Ig(t),t.tag){case 3:Cs(Gn),Nl();break;case 26:case 27:case 5:Ah(t);break;case 4:Nl();break;case 31:t.memoizedState!==null&&na(t);break;case 13:na(t);break;case 19:Vg(t);break;case 10:Cs(t.type);break;case 22:case 23:na(t),Gg(),e!==null&&mi(lo);break;case 24:Cs(Gn)}}function Pu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){$e(t,t.return,o)}}function Nr(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){$e(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){$e(t,t.return,h)}}function SM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{DS(t,n)}catch(i){$e(e,e.return,i)}}}function MM(e,t,n){n.props=yo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){$e(e,t,i)}}function ns(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Ds(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=hb(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new ua(e);Zi(e.child,!1,Zw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){$e(e,t,o)}}function hi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){$e(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){$e(e,t,a)}else n.current=null}function Gh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)gb(e.stateNode,t[n])}function Kx(e){for(var t=e.return;t!==null&&(sv(t)&&gb(e.stateNode,t.stateNode),!av(t));)t=t.return}function ru(e){for(var t=e.return;t!==null&&(sv(t)&&Kw(e.stateNode,t.stateNode),!av(t));)t=t.return}function av(e){return e.tag===5||e.tag===3||e.tag===27}function sv(e){return e&&e.tag===7&&e.stateNode!==null}function Zm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){$e(e,e.return,a)}}function tm(e,t,n){try{var i=e.stateNode;Nw(i,e.type,n,t),i[Ki]=t}catch(a){$e(e,e.return,a)}}function bM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ur(e.type)||e.tag===4}function em(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Km(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ss)),Gh(e,i),Be=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Ur(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Km(e,t,n,i),e=e.sibling;e!==null;)Km(e,t,n,i),e=e.sibling}function Vh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Gh(e,i),Be=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Ur(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Vh(e,t,n,i),e=e.sibling;e!==null;)Vh(e,t,n,i),e=e.sibling}function TM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);vi(t,i,n),t[di]=e,t[Ki]=n}catch(s){$e(e,e.return,s)}}var kh=!1,ia=null;function Jx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(kh=!0)}var is=null;function Qx(){var e=is;return is=null,e}var Xi=0;function ql(e,t,n,i,a){return Xi=0,EM(e.child,t,n,i,a)}function EM(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=mg(r);i.push(o),o.view&&(s=!0)}else s||mg(r).view&&(s=!0);kh=!0,cb(r,Xi===0?t:t+"_"+Xi,n),Xi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||EM(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function us(e,t){for(;e!==null;)e.tag===5?ub(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||us(e.child,t)),e=e.sibling}function mh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(mh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(lt(544));var n=t.name;t=zs(t.default,t.share),t!=="none"&&(ql(e,n,t,null,!1)||us(e.child,!1))}e=e.sibling}}function Jm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Ds(i,n),s=zs(i.default,n.paired?i.share:i.enter);s!=="none"?ql(e,a,s,null,!1)?(mh(e),n.paired||t||Ol(e,i.onEnter)):us(e.child,!1):mh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Jm(e,t),e=e.sibling;else mh(e)}function Qm(e){if(ia!==null&&ia.size!==0){var t=ia;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=zs(n.default,n.share);if(s!=="none"&&(ql(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,Ol(e,n.onShare)):us(e.child,!1)),t.delete(i),t.size===0)break}}}Qm(e)}e=e.sibling}}}function jm(e){if(e.tag===30){var t=e.memoizedProps,n=Ds(t,e.stateNode),i=ia!==null?ia.get(n):void 0,a=zs(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(ql(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,ia.delete(n),Ol(e,t.onShare)):Ol(e,t.onExit):us(e.child,!1)),ia!==null&&Qm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jm(e),e=e.sibling;else ia!==null&&Qm(e)}function AM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ds(t,e.stateNode);t=zs(t.default,t.update),e.flags&=-5,t!=="none"&&ql(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&AM(e);e=e.sibling}}function $m(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,us(e.child,!1))}$m(e)}e=e.sibling}}function gh(e){if(e.tag===30)e.stateNode.paired=null,us(e.child,!1),$m(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gh(e),e=e.sibling;else $m(e)}function wM(e){for(e=e.child;e!==null;)e.tag===30?us(e.child,!1):(e.subtreeFlags&33554432)!==0&&wM(e),e=e.sibling}function rv(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&Xi<s.length){var c=s[Xi],h=mg(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var u=h.rect;d=d.y!==u.y||d.x!==u.x||d.height!==u.height||d.width!==u.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&cb(l,Xi===0?n:n+"_"+Xi,a),o&&(e.flags&4)!==0||(is===null&&(is=[]),is.push(l,Xi===0?i:i+"_"+Xi,t.memoizedProps)),Xi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:rv(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function RM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Ds(n,i),s=zs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Iw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Xi=0,a=rv(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||Ol(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&RM(e,t);e=e.sibling}}var ii=!1,Ye=!1,$a=!1,nm=!1,jx=typeof WeakSet=="function"?WeakSet:Set,ai=null,ts=!1,Jc=!1,Wh=!1,tg=!1;function ow(e,t,n){if(e=e.containerInfo,hg=Gl,e=dS(e),Lg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,u=e,p=null;e:for(;;){for(var y;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(y=u.firstChild)!==null;)p=u,u=y;for(;;){if(u===e)break e;if(p===i&&++h===s&&(l=o),p===r&&++d===a&&(c=o),(y=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=y}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(dg={focusedElem:e,selectionRange:i},Gl=!1,n=(n&335544064)===n,ai=t,t=n?9270:1024;ai!==null;){if(e=ai,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&jm(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&Jx(e),jf(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&jm(i),jf(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Jx(e),jf(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,ai=i):(n&&AM(e),jf(n))}}ia=null}function jf(e){for(;ai!==null;){var t=ai,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=yo(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){$e(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)gg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":gg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ds(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=zs(a.default,a.update),a!=="none"&&ql(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(lt(163))}if(i=t.sibling,i!==null){i.return=t.return,ai=i;break}ai=t.return}}function CM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:es(e,n),i&4&&Pu(5,n);break;case 1:if(es(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){$e(n,n.return,r)}else{var a=yo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){$e(n,n.return,r)}}i&64&&SM(n),i&512&&ns(n,n.return);break;case 3:if(es(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{DS(e,t)}catch(r){$e(n,n.return,r)}}break;case 27:t===null&&i&4&&TM(n);case 26:case 5:es(e,n),t===null&&i&4&&Zm(n),i&512&&ns(n,n.return);break;case 12:es(e,n);break;case 31:es(e,n),i&4&&UM(e,n);break;case 13:es(e,n),i&4&&PM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_w.bind(null,n),jw(e,n))));break;case 22:if(i=n.memoizedState!==null||ii,!i){var s=t!==null&&t.memoizedState!==null||Ye;t=ii,a=Ye,ii=i,(Ye=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ba(e,n,i)):es(e,n),ii=t,Ye=a}break;case 30:es(e,n),i&512&&ns(n,n.return);break;case 7:i&512&&ns(n,n.return);default:es(e,n)}}function eg(e,t){for(e=e.child;e!==null;)NM(e,t),e=e.sibling}function NM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){$e(e,e.return,l)}ng(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Be=!0}catch(l){$e(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?p1(o,!0):p1(e.stateNode,!1)}catch(l){$e(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&eg(e,t);break;default:eg(e,t)}}function ng(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:NM(n,i);break t;case 22:n.memoizedState===null&&ng(n,i);break t;default:ng(n,i)}}e=e.sibling}}function DM(e){var t=e.alternate;t!==null&&(e.alternate=null,DM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&td(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mn=null,ki=!1;function za(e,t,n){for(n=n.child;n!==null;)LM(e,t,n),n=n.sibling}function LM(e,t,n){if(ra&&typeof ra.onCommitFiberUnmount=="function")try{ra.onCommitFiberUnmount(wu,n)}catch{}switch(n.tag){case 26:Ye||hi(n,t),za(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ye&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||hi(n,t),ru(n);var i=Mn,a=ki;Ur(n.type)&&(Mn=n.stateNode,ki=!1),za(e,t,n),_b(n.stateNode,n.type,n.memoizedProps),Mn=i,ki=a;break;case 5:Ye||hi(n,t),ru(n);case 6:if(n.tag===6&&ru(n),i=Mn,a=ki,Mn=null,za(e,t,n),Mn=i,ki=a,Mn!==null)if(ki)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(n.stateNode),Be=!0}catch(s){$e(n,t,s)}else try{Mn.removeChild(n.stateNode),Be=!0}catch(s){$e(n,t,s)}break;case 18:Mn!==null&&(ki?(e=Mn,d1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vl(e)):d1(Mn,n.stateNode));break;case 4:i=Mn,a=ki,Mn=n.stateNode.containerInfo,ki=!0,za(e,t,n),Mn=i,ki=a;break;case 0:case 11:case 14:case 15:Nr(2,n,t),Ye||Nr(4,n,t),za(e,t,n);break;case 1:Ye||(hi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&MM(n,t,i)),za(e,t,n);break;case 21:za(e,t,n);break;case 22:Ye=(i=Ye)||n.memoizedState!==null,za(e,t,n),Ye=i;break;case 30:hi(n,t),za(e,t,n);break;case 7:Ye||hi(n,t),za(e,t,n);break;default:za(e,t,n)}}function UM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vl(e)}catch(n){$e(t,t.return,n)}}}function PM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vl(e)}catch(n){$e(t,t.return,n)}}function lw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jx),t;default:throw Error(lt(435,e.tag))}}function $f(e,t){var n=lw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=xw.bind(null,e,i);i.then(a,a)}})}function Ni(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ur(l.type)){Mn=l.stateNode,ki=!1;break t}break;case 5:Mn=l.stateNode,ki=!1;break t;case 3:case 4:Mn=l.stateNode.containerInfo,ki=!0;break t}l=l.return}if(Mn===null)throw Error(lt(160));LM(r,o,s),Mn=null,ki=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)OM(t,e,n),t=t.sibling}var Fa=null;function OM(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Ni(t,e,n),Di(e),a&4&&(Nr(3,e,e.return),Pu(3,e),Nr(5,e,e.return));break;case 1:Ni(t,e,n),Di(e),a&512&&(Ye||i===null||hi(i,i.return)),a&64&&ii&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=Fa,Ni(t,e,n),Di(e),a&512&&(Ye||i===null||hi(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(ii)e.stateNode=lb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Nu]||i[di]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),vi(i,t,n),i[di]=e,si(i),t=i;break t;case"link":if(s=M1("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),vi(i,t,n),a.head.appendChild(i);break;case"meta":if(s=M1("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),vi(i,t,n),a.head.appendChild(i);break;default:throw Error(lt(468,t))}i[di]=e,si(i),t=i}e.stateNode=t}else ii||_g(s,e.type,e.stateNode);else e.stateNode=S1(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Ye||t.parentNode.removeChild(t)):a.count--,n===null?ii||_g(s,e.type,e.stateNode):S1(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&tm(e,e.memoizedProps,i.memoizedProps);break;case 27:Ni(t,e,n),Di(e),a&512&&(Ye||i===null||hi(i,i.return)),i!==null&&a&4&&tm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=$a,$a=!1,Ni(t,e,n),$a=s,Di(e),a&512&&(Ye||i===null||hi(i,i.return)),e.flags&32){t=e.stateNode;try{Ll(t,""),Be=!0}catch(h){$e(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,tm(e,t,i!==null?i.memoizedProps:t)),a&1024&&(nm=!0);break;case 6:if(Ni(t,e,n),Di(e),a&4){if(e.stateNode===null)throw Error(lt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Be=!0}catch(h){$e(e,e.return,h)}}break;case 3:if(Be=!1,xh=null,s=Fa,Fa=Mu(t.containerInfo),Ni(t,e,n),Fa=s,Di(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Vl(t.containerInfo)}catch(h){$e(e,e.return,h)}nm&&(nm=!1,IM(e)),Be=!1;break;case 4:a=$a,$a=ii,i=ax(),s=Fa,Fa=Mu(e.stateNode.containerInfo),Ni(t,e,n),Di(e),Fa=s,Be&&Jc&&(Wh=!0),Be=i,$a=a;break;case 12:Ni(t,e,n),Di(e);break;case 31:Ni(t,e,n),Di(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$f(e,t)));break;case 13:Ni(t,e,n),Di(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(dd=sa()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$f(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=ii,l=Ye,c=$a;ii=o||s,$a=c||s,Ye=l||r,Ni(t,e,n),Ye=l,$a=c,ii=o,Di(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||ii||Ye||(t=r||Ye,n=ii,i=Ye,ii=s||ii,Ye=t,or(e,2),ii=n,Ye=i),!s&&$a||eg(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,$f(e,n))));break;case 19:Ni(t,e,n),Di(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$f(e,t)));break;case 30:a&512&&(Ye||i===null||hi(i,i.return)),a=ax(),s=Jc,r=(n&335544064)===n,o=e.memoizedProps,Jc=r&&zs(o.default,o.update)!=="none",Ni(t,e,n),Di(e),r&&i!==null&&Be&&(e.flags|=4),Jc=s,Be=a;break;case 21:break;case 7:a&512&&(Ye||i===null||hi(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Ni(t,e,n),Di(e)}}function Di(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(bM(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(sv(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(av(a))break;a=a.return}var r=i;if(n==null)throw Error(lt(160));switch(n.tag){case 27:var o=n.stateNode,l=em(e);Vh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Ll(c,""),n.flags&=-33);var h=em(e);Vh(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,u=em(e);Km(e,u,d,r);break;default:throw Error(lt(161))}}catch(p){$e(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function IM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;IM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Gl=!0,t.reset(),Gl=!1),e=e.sibling}}function al(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)zM(t,e),t=t.sibling;else RM(t,!1)}function zM(e,t){var n=e.alternate;if(n===null)Jm(e,!1);else switch(e.tag){case 3:if(tg=ts=!1,Qx(),al(t,e),!ts&&!Wh){if(e=is,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];ub(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),tg=!0}is=null;break;case 5:al(t,e);break;case 4:i=ts,ts=!1,al(t,e),ts&&(Wh=!0),ts=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Jm(e,!1):al(t,e));break;case 30:i=ts,a=Qx(),ts=!1,al(t,e),ts&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Ds(s,r),r=Ds(n.memoizedProps,r);var o=zs(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,Xi=0,t=rv(e,n,t,r,o,s,!0),Xi!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ol(e,e.memoizedProps.onUpdate),is=a):a!==null&&(a.push.apply(a,is),is=a),ts=(e.flags&32)!==0?!0:i;break;default:al(t,e)}}function es(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)CM(e,t.alternate,t),t=t.sibling}function or(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Nr(4,n,n.return),or(n,i);break;case 1:hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&MM(n,n.return,a),or(n,i);break;case 27:(i&2)!==0&&_b(n.stateNode,n.type,n.memoizedProps);case 5:hi(n,n.return),n.tag!==5&&n.tag!==27||ru(n),or(n,i);break;case 6:ru(n);break;case 26:hi(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ye||a.parentNode.removeChild(a),or(n,i);break;case 22:n.memoizedState===null&&or(n,i);break;case 30:hi(n,n.return),or(n,i);break;case 7:hi(n,n.return);default:or(n,i)}e=e.sibling}}function Ba(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Ba(a,s,n),Pu(4,s);break;case 1:if(Ba(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){$e(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)NS(c[a],l)}catch(h){$e(i,i.return,h)}}o&&r&64&&SM(s),ns(s,s.return);break;case 27:(n&2)!==0&&TM(s);case 5:s.tag!==5&&s.tag!==27||Kx(s),Ba(a,s,n),o&&i===null&&r&4&&Zm(s),ns(s,s.return);break;case 6:Kx(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||ii||_g(Mu(l.ownerDocument),s.type,l),Ba(a,s,n),o&&i===null&&r&4&&Zm(s),ns(s,s.return);break;case 12:Ba(a,s,n);break;case 31:Ba(a,s,n),o&&r&4&&UM(a,s);break;case 13:Ba(a,s,n),o&&r&4&&PM(a,s);break;case 22:s.memoizedState===null&&Ba(a,s,n),ns(s,s.return);break;case 30:Ba(a,s,n),ns(s,s.return);break;case 7:ns(s,s.return);default:Ba(a,s,n)}t=t.sibling}}function ov(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lu(n))}function lv(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lu(e))}function xa(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)BM(e,t,n,i),t=t.sibling;else a&&wM(t)}function BM(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&gh(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:xa(e,t,n,i),s&2048&&Pu(9,t);break;case 1:xa(e,t,n,i);break;case 3:xa(e,t,n,i),a&&tg&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&Lu(s)));break;case 12:if(s&2048){xa(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){$e(t,t.return,c)}}else xa(e,t,n,i);break;case 31:xa(e,t,n,i);break;case 13:xa(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&gh(o),r._visibility&2?xa(e,t,n,i):ou(e,t)):(a&&o!==null&&o.memoizedState!==null&&gh(t),r._visibility&2?xa(e,t,n,i):(r._visibility|=2,rl(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&ov(o,t);break;case 24:xa(e,t,n,i),s&2048&&lv(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(us(s.child,!0),us(t.child,!0))),xa(e,t,n,i);break;default:xa(e,t,n,i)}}function rl(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:rl(s,r,o,l,a),Pu(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?rl(s,r,o,l,a):ou(s,r):(h._visibility|=2,rl(s,r,o,l,a)),a&&c&2048&&ov(r.alternate,r);break;case 24:rl(s,r,o,l,a),a&&c&2048&&lv(r.alternate,r);break;default:rl(s,r,o,l,a)}t=t.sibling}}function ou(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ou(n,i),a&2048&&ov(i.alternate,i);break;case 24:ou(n,i),a&2048&&lv(i.alternate,i);break;default:ou(n,i)}t=t.sibling}}var io=8192;function to(e,t,n){if(e.subtreeFlags&io)for(e=e.child;e!==null;)FM(e,t,n),e=e.sibling}function FM(e,t,n){switch(e.tag){case 26:to(e,t,n),e.flags&io&&(e.memoizedState!==null?h3(n,Fa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&T1(n,e)));break;case 5:to(e,t,n),e.flags&io&&(e=e.stateNode,(t&335544128)===t&&T1(n,e));break;case 3:case 4:var i=Fa;Fa=Mu(e.stateNode.containerInfo),to(e,t,n),Fa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=io,io=16777216,to(e,t,n),io=i):to(e,t,n));break;case 30:if((e.flags&io)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,ia===null&&(ia=new Map),ia.set(i,a)}to(e,t,n);break;default:to(e,t,n)}}function HM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ai=i,VM(i,e)}HM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)GM(e),e=e.sibling}function GM(e){switch(e.tag){case 0:case 11:case 15:kc(e),e.flags&2048&&Nr(9,e,e.return);break;case 3:kc(e);break;case 12:kc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vh(e)):kc(e);break;default:kc(e)}}function vh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ai=i,VM(i,e)}HM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nr(8,t,t.return),vh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vh(t));break;default:vh(t)}e=e.sibling}}function VM(e,t){for(;ai!==null;){var n=ai;switch(n.tag){case 0:case 11:case 15:Nr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Lu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ai=i;else t:for(n=e;ai!==null;){i=ai;var a=i.sibling,s=i.return;if(DM(i),i===n){ai=null;break t}if(a!==null){a.return=s,ai=a;break t}ai=s}}}var cw={getCacheForType:function(e){var t=pi(Gn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pi(Gn).controller.signal}},uw=typeof WeakMap=="function"?WeakMap:Map,We=0,an=null,Re=null,Ne=0,Qe=0,ta=null,pr=!1,Yl=!1,cv=!1,Os=0,Rn=0,Dr=0,uo=0,Xh=0,aa=0,Pl=0,lu=null,Wi=null,ig=!1,dd=0,kM=0,qh=1/0,Yh=null,br=null,An=0,Ga=null,_o=null,cs=0,ag=0,sg=null,WM=null,wl=null,Rl=null,Cl=null,cu=0,yh=null;function la(){return(We&2)!==0&&Ne!==0?Ne&-Ne:re.T!==null?fv():Z1()}function XM(){if(aa===0)if((Ne&536870912)===0||Ae){var e=Hf;Hf<<=1,(Hf&3932160)===0&&(Hf=262144),aa=e}else aa=536870912;return e=yi.current,e!==null&&(e.flags|=32),aa}function Ol(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=hb(Ds(e.memoizedProps,n))),Rl===null&&(Rl=[]),Rl.push(t.bind(null,i))}}function Yi(e,t,n){(e===an&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Il(e,0),mr(e,Ne,aa,!1)),Cu(e,n),((We&2)===0||e!==an)&&(e===an&&((We&2)===0&&(uo|=n),Rn===4&&mr(e,Ne,aa,!1)),hs(e))}function qM(e,t,n){if((We&6)!==0)throw Error(lt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ru(e,t),a=i?dw(e,t):im(e,t,!0),s=i;do{if(a===0){Yl&&!i&&mr(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!fw(n)){a=im(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=lu;var l=o.current.memoizedState.isDehydrated;if(l&&(Il(o,r).flags|=256),r=im(o,r,!1),r!==2&&r!==6){if(cv&&!l){o.errorRecoveryDisabledLanes|=s,uo|=s,a=4;break t}s=Wi,Wi=a,s!==null&&(Wi===null?Wi=s:Wi.push.apply(Wi,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Il(e,0),mr(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(lt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:mr(i,t,aa,!pr);break t;case 2:Wi=null;break;case 3:case 5:break;default:throw Error(lt(329))}if((t&62914560)===t&&(a=dd+300-sa(),10<a)){if(mr(i,t,aa,!pr),$h(i,0,!0)!==0)break t;cs=t,i.timeoutHandle=dv($x.bind(null,i,n,Wi,Yh,ig,t,aa,uo,Pl,pr,s,"Throttled",-0,0),a);break t}$x(i,n,Wi,Yh,ig,t,aa,uo,Pl,pr,s,null,-0,0)}}break}while(!0);hs(e)}function $x(e,t,n,i,a,s,r,o,l,c,h,d,u,p){e.timeoutHandle=-1;var y=t.subtreeFlags,_=(s&335544064)===s;if(d=null,(_||y&8192||(y&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ss},ia=null,FM(t,s,d),_&&(y=d,_=e.containerInfo,_=(_.nodeType===9?_:_.ownerDocument).__reactViewTransition,_!=null&&(y.count++,y.waitingForViewTransition=!0,y=bu.bind(y),_.finished.then(y,y))),y=(s&62914560)===s?dd-sa():(s&4194048)===s?kM-sa():0,y=d3(d,y),y!==null)){cs=s,e.cancelPendingCommit=y(e1.bind(null,e,t,s,n,i,a,r,o,l,c,h,d,null,u,p)),mr(e,s,r,!c);return}e1(e,t,s,n,i,a,r,o,l,c,h,d)}function fw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!ca(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t,n,i){t=k1(e,t),t&=~Xh,t&=~uo,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-oa(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&X1(e,n,t)}function pd(){return(We&6)===0?(Ou(0,!1),!1):!0}function uv(){if(Re!==null){if(Qe===0)var e=Re.return;else e=Re,ws=To=null,Yg(e),Tl=null,gu=0,e=Re;for(;e!==null;)xM(e.alternate,e),e=e.return;Re=null}}function Il(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Uw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cs=0,uv(),an=e,Re=n=Rs(e.current,null),Ne=t,Qe=0,ta=null,pr=!1,Yl=Ru(e,t),cv=!1,Pl=aa=Xh=uo=Dr=Rn=0,Wi=lu=null,ig=!1,Os=k1(e,t),ad(),n}function YM(e,t){Se=null,re.H=Fh,t===Xl||t===od?(t=Ax(),Qe=3):t===Fg?(t=Ax(),Qe=4):Qe=t===ev?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ta=t,Re===null&&(Rn=1,Hh(e,Ea(t,e.current)))}function ZM(){var e=yi.current;return e===null?!0:(Ne&4194048)===Ne?Mi===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Mi:!1}function KM(){var e=re.H;return re.H=Fh,e===null?Fh:e}function JM(){var e=re.A;return re.A=cw,e}function Zh(){Rn=4,pr||(Ne&4194048)!==Ne&&yi.current!==null||(Yl=!0),(Dr&134217727)===0&&(uo&134217727)===0||an===null||mr(an,Ne,aa,!1)}function im(e,t,n){var i=We;We|=2;var a=KM(),s=JM();(an!==e||Ne!==t)&&(Yh=null,Il(e,t)),t=!1;var r=Rn;t:do try{if(Qe!==0&&Re!==null){var o=Re,l=ta;switch(Qe){case 8:uv(),r=6;break t;case 3:case 2:case 9:case 6:yi.current===null&&(t=!0);var c=Qe;if(Qe=0,ta=null,_l(e,o,l,c),n&&Yl){r=0;break t}break;default:c=Qe,Qe=0,ta=null,_l(e,o,l,c)}}hw(),r=Rn;break}catch(h){YM(e,h)}while(!0);return t&&e.shellSuspendCounter++,ws=To=null,We=i,re.H=a,re.A=s,Re===null&&(an=null,Ne=0,ad()),r}function hw(){for(;Re!==null;)QM(Re)}function dw(e,t){var n=We;We|=2;var i=KM(),a=JM();an!==e||Ne!==t?(Yh=null,qh=sa()+500,Il(e,t)):Yl=Ru(e,t);t:do try{if(Qe!==0&&Re!==null){t=Re;var s=ta;e:switch(Qe){case 1:Qe=0,ta=null,_l(e,t,s,1);break;case 2:case 9:if(Ex(s)){Qe=0,ta=null,t1(t);break}t=function(){Qe!==2&&Qe!==9||an!==e||(Qe=7),hs(e)},s.then(t,t);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:Ex(s)?(Qe=0,ta=null,t1(t)):(Qe=0,ta=null,_l(e,t,s,7));break;case 5:var r=null;switch(Re.tag){case 26:r=Re.memoizedState;case 5:case 27:var o=Re;if(r?Mb(r):o.stateNode.complete){Qe=0,ta=null;var l=o.sibling;if(l!==null)Re=l;else{var c=o.return;c!==null?(Re=c,md(c)):Re=null}break e}}Qe=0,ta=null,_l(e,t,s,5);break;case 6:Qe=0,ta=null,_l(e,t,s,6);break;case 8:uv(),Rn=6;break t;default:throw Error(lt(462))}}pw();break}catch(h){YM(e,h)}while(!0);return ws=To=null,re.H=i,re.A=a,We=n,Re!==null?0:(an=null,Ne=0,ad(),Rn)}function pw(){for(;Re!==null&&!DA();)QM(Re)}function QM(e){var t=_M(e.alternate,e,Os);e.memoizedProps=e.pendingProps,t===null?md(e):Re=t}function t1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vx(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=Vx(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:Yg(t);var i=t;i===ri&&(Ae?(Lh(i),i.tag===5&&i.stateNode!=null&&(un=i.stateNode)):(Lh(i),Ae=!0));default:xM(n,t),t=Re=SS(t,Os),t=_M(n,t,Os)}e.memoizedProps=e.pendingProps,t===null?md(e):Re=t}function _l(e,t,n,i){ws=To=null,Yg(t),Tl=null,gu=0;var a=t.return;try{if(ew(e,a,t,n,Ne)){Rn=1,Hh(e,Ea(n,e.current)),Re=null;return}}catch(s){if(a!==null)throw Re=a,s;Rn=1,Hh(e,Ea(n,e.current)),Re=null;return}t.flags&32768?(Ae||i===1?e=!0:Yl||(Ne&536870912)!==0?e=!1:(pr=e=!0,(i===2||i===9||i===3||i===6)&&(i=yi.current,i!==null&&i.tag===13&&(i.flags|=16384))),jM(t,e)):md(t)}function md(e){var t=e;do{if((t.flags&32768)!==0){jM(t,pr);return}e=t.return;var n=sw(t.alternate,t,Os);if(n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Rn===0&&(Rn=5)}function jM(e,t){do{var n=rw(e.alternate,e);if(n!==null){n.flags&=32767,Re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Re=e;return}Re=e=n}while(e!==null);Rn=6,Re=null}function e1(e,t,n,i,a,s,r,o,l,c,h,d){e.cancelPendingCommit=null;do gd();while(An!==0);if((We&6)!==0)throw Error(lt(327));if(t!==null){if(t===e.current)throw Error(lt(177));e===an&&(Re=an=null,Ne=0),_o=t,Ga=e,cs=n,sg=a,WM=i,mw(e,t,n,r,o,l,d)}}function mw(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(ag=o,o|=Ug,GA(e,n,o,i,a,s),Rl=null,(n&335544064)===n?(Cl=k2(e),i=10262):(Cl=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Sw(wh,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),kh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=re.T,re.T=null,a=Xe.p,Xe.p=2,s=We,We|=4;try{ow(e,t,n)}finally{We=s,Xe.p=a,re.T=i}}An=1,kh?wl=Fw(r,e.containerInfo,Cl,rg,og,vw,lg,cg,gw,null,null):(rg(),og(),lg())}function gw(e){if(An!==0){var t=Ga.onRecoverableError;t(e,{componentStack:null})}}function vw(){An===3&&(An=0,zM(_o,Ga),An=4)}function rg(){if(An===1){An=0;var e=Ga,t=_o,n=cs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=re.T,re.T=null;var a=Xe.p;Xe.p=2;var s=We;We|=4;try{Jc=Wh=!1,OM(t,e,n),n=dg;var r=dS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&hS(o.ownerDocument.documentElement,o)){if(l!==null&&Lg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),y=o.textContent.length,_=Math.min(l.start,y),v=l.end===void 0?_:Math.min(l.end,y);!p.extend&&_>v&&(r=v,v=_,_=r);var f=vx(o,_),m=vx(o,v);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var S=d.createRange();S.setStart(f.node,f.offset),p.removeAllRanges(),_>v?(p.addRange(S),p.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),p.addRange(S))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Gl=!!hg,dg=hg=null}finally{We=s,Xe.p=a,re.T=i}}e.current=t,An=2}}function og(){if(An===2){An=0;var e=Ga,t=_o,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=re.T,re.T=null;var i=Xe.p;Xe.p=2;var a=We;We|=4;try{CM(e,t.alternate,t)}finally{We=a,Xe.p=i,re.T=n}}An=3}}function lg(){if(An===4||An===3){An=0;var e=wl;wl=null,LA();var t=Ga,n=_o,i=cs,a=WM,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?An=5:(An=0,_o=Ga=null,$M(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(br=null),Ag(i),n=n.stateNode,ra&&typeof ra.onCommitFiberRoot=="function")try{ra.onCommitFiberRoot(wu,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=re.T,s=Xe.p,Xe.p=2,re.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{re.T=n,Xe.p=s}}if(a=Rl,r=Cl,Cl=null,a!==null&&(Rl=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(cs&3)!==0&&gd(),hs(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===yh?cu++:(cu=0,yh=t):(cu=0,yh=null),Ou(0,!1)}}function $M(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lu(t)))}function gd(){return wl!==null&&(wl.skipTransition(),wl=null),rg(),og(),lg(),cg()}function cg(){if(An!==5)return!1;var e=Ga,t=ag;ag=0;var n=Ag(cs),i=re.T,a=Xe.p;try{Xe.p=32>n?32:n,re.T=null,n=sg,sg=null;var s=Ga,r=cs;if(An=0,_o=Ga=null,cs=0,(We&6)!==0)throw Error(lt(331));var o=We;if(We|=4,GM(s.current),BM(s,s.current,r,n),We=o,Ou(0,!1),ra&&typeof ra.onPostCommitFiberRoot=="function")try{ra.onPostCommitFiberRoot(wu,s)}catch{}return!0}finally{Xe.p=a,re.T=i,$M(e,t)}}function n1(e,t,n){t=Ea(n,t),t=Vm(e.stateNode,t,2),e=xr(e,t,2),e!==null&&(Cu(e,2),hs(e))}function $e(e,t,n){if(e.tag===3)n1(e,e,n);else for(;t!==null;){if(t.tag===3){n1(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(br===null||!br.has(i))){e=Ea(n,e),n=pM(2),i=xr(t,n,2),i!==null&&(mM(n,i,t,e),Cu(i,2),hs(i));break}}t=t.return}}function am(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new uw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(cv=!0,a.add(n),e=yw.bind(null,e,t,n),t.then(e,e))}function yw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,an===e&&(Ne&n)===n&&((Rn===4||Rn===3&&(Ne&62914560)===Ne&&300>sa()-dd)&&(We&2)===0?Il(e,0):Xh|=n,Pl===Ne&&(Pl=0)),hs(e)}function tb(e,t){t===0&&(t=W1()),e=bo(e,t),e!==null&&(Cu(e,t),hs(e))}function _w(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tb(e,n)}function xw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(lt(314))}i!==null&&i.delete(t),tb(e,n)}function Sw(e,t){return Tg(e,t)}var zl=null,ol=null,ug=!1,Kh=!1,sm=!1,gr=0;function hs(e){e!==ol&&e.next===null&&(ol===null?zl=ol=e:ol=ol.next=e),Kh=!0,ug||(ug=!0,bw())}function Ou(e,t){if(!sm&&Kh){sm=!0;do for(var n=!1,i=zl;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-oa(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,i1(i,s))}else s=Ne,s=$h(i,i===an?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Ru(i,s)||(n=!0,i1(i,s));i=i.next}while(n);sm=!1}}function Mw(){eb()}function eb(){Kh=ug=!1;var e=0;gr!==0&&Lw()&&(e=gr);for(var t=sa(),n=null,i=zl;i!==null;){var a=i.next,s=nb(i,t);s===0?(i.next=null,n===null?zl=a:n.next=a,a===null&&(ol=n)):(n=i,(e!==0||(s&3)!==0)&&(Kh=!0)),i=a}An!==0&&An!==5||Ou(e,!1),gr!==0&&(gr=0)}function nb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-oa(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=HA(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=an,n=Ne,n=$h(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&z0(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ru(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&z0(i),Ag(n)){case 2:case 8:n=G1;break;case 32:n=wh;break;case 268435456:n=V1;break;default:n=wh}return i=ib.bind(null,e),n=Tg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&z0(i),e.callbackPriority=2,e.callbackNode=null,2}function ib(e,t){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gd()&&e.callbackNode!==n)return null;var i=Ne;return i=$h(e,e===an?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(qM(e,i,t),nb(e,sa()),e.callbackNode!=null&&e.callbackNode===n?ib.bind(null,e):null)}function i1(e,t){if(gd())return null;qM(e,t,!0)}function bw(){Pw(function(){(We&6)!==0?Tg(H1,Mw):eb()})}function fv(){if(gr===0){var e=mo;e===0&&(e=Ff,Ff<<=1,(Ff&261888)===0&&(Ff=256)),gr=e}return gr}function a1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rh(e)}function Tw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=a1((a[Ki]||null).action),r=i.submitter;r&&(t=(t=r[Ki]||null)?a1(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new ed("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(gr!==0){var l=new FormData(a,r);Hm(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),Hm(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(th=0;th<Cm.length;th++)eh=Cm[th],s1=eh.toLowerCase(),r1=eh[0].toUpperCase()+eh.slice(1),Va(s1,"on"+r1);var eh,s1,r1,th;Va(mS,"onAnimationEnd");Va(gS,"onAnimationIteration");Va(vS,"onAnimationStart");Va("dblclick","onDoubleClick");Va("focusin","onFocus");Va("focusout","onBlur");Va(O2,"onTransitionRun");Va(I2,"onTransitionStart");Va(z2,"onTransitionCancel");Va(yS,"onTransitionEnd");Dl("onMouseEnter",["mouseout","mouseover"]);Dl("onMouseLeave",["mouseout","mouseover"]);Dl("onPointerEnter",["pointerout","pointerover"]);Dl("onPointerLeave",["pointerout","pointerover"]);So("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));So("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));So("onBeforeInput",["compositionend","keypress","textInput","paste"]);So("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));So("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));So("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));function ab(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Ch(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Ch(h)}a.currentTarget=null,s=l}}}}function we(e,t){var n=t[tx];n===void 0&&(n=t[tx]=new Set);var i=e+"__bubble";n.has(i)||(sb(t,e,2,!1),n.add(i))}function rm(e,t,n){var i=0;t&&(i|=4),sb(n,e,i,t)}var nh="_reactListening"+Math.random().toString(36).slice(2);function hv(e){if(!e[nh]){e[nh]=!0,J1.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||rm(n,!1,e),rm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nh]||(t[nh]=!0,rm("selectionchange",!1,t))}}function sb(e,t,n,i){switch(Cb(t)){case 2:var a=v3;break;case 8:a=y3;break;default:a=_v}n=a.bind(null,t,n,e),a=void 0,!Em||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function om(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=ao(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}aS(function(){var c=s,h=Rg(n),d=[];t:{var u=_S.get(e);if(u!==void 0){var p=ed,y=e;switch(e){case"keypress":if(lh(n)===0)break t;case"keydown":case"keyup":p=f2;break;case"focusin":y="focus",p=k0;break;case"focusout":y="blur",p=k0;break;case"beforeblur":case"afterblur":p=k0;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$A;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=g2;break;case mS:case gS:case vS:p=n2;break;case yS:p=y2;break;case"scroll":case"scrollend":p=QA;break;case"wheel":p=x2;break;case"copy":case"cut":case"paste":p=a2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ux;break;case"submit":p=p2;break;case"toggle":case"beforetoggle":p=M2}var _=(t&4)!==0,v=!_&&(e==="scroll"||e==="scrollend"),f=_?u!==null?u+"Capture":null:u;_=[];for(var m=c,S;m!==null;){var x=m;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||f===null||(x=fu(m,f),x!=null&&_.push(xu(m,x,S))),v)break;m=m.return}0<_.length&&(u=new p(u,y,null,n,h),d.push({event:u,listeners:_}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",p&&n!==Tm&&(y=n.relatedTarget||n.fromElement)&&(ao(y)||y[kl]))break t;(u||p)&&(y=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,u?(p=n.relatedTarget||n.toElement,u=c,p=p?ao(p):null,p!==null&&(v=Au(p),_=p.tag,p!==v||_!==5&&_!==27&&_!==6)&&(p=null)):(u=null,p=c),u!==p&&(_=lx,x="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=ux,x="onPointerLeave",f="onPointerEnter",m="pointer"),v=u==null?y:Zc(u),S=p==null?y:Zc(p),y=new _(x,m+"leave",u,n,h),y.target=v,y.relatedTarget=S,x=null,ao(h)===c&&(_=new _(f,m+"enter",p,n,h),_.target=S,_.relatedTarget=v,x=_),v=x,_=u&&p?hm(u,p,Aw):null,u!==null&&o1(d,y,u,_,!1),p!==null&&v!==null&&o1(d,v,p,_,!0)))}t:{if(u=c?Zc(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=px;else if(dx(u))if(uS)A=L2;else{A=N2;var w=C2}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&wg(c.elementType)&&(A=px):A=D2;if(A&&(A=A(e,c))){cS(d,A,n,h);break t}w&&w(e,u,c)}switch(w=c?Zc(c):window,e){case"focusin":(dx(w)||w.contentEditable==="true")&&(dl=w,wm=c,$c=null);break;case"focusout":$c=wm=dl=null;break;case"mousedown":Rm=!0;break;case"contextmenu":case"mouseup":case"dragend":Rm=!1,yx(d,n,h);break;case"selectionchange":if(P2)break;case"keydown":case"keyup":yx(d,n,h)}var g;if(Dg)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else hl?oS(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(rS&&n.locale!=="ko"&&(hl||b!=="onCompositionStart"?b==="onCompositionEnd"&&hl&&(g=sS()):(hr=h,Cg="value"in hr?hr.value:hr.textContent,hl=!0)),w=Jh(c,b),0<w.length&&(b=new cx(b,e,null,n,h),d.push({event:b,listeners:w}),g?b.data=g:(g=lS(n),g!==null&&(b.data=g)))),(g=T2?E2(e,n):A2(e,n))&&(b=Jh(c,"onBeforeInput"),0<b.length&&(w=new cx("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:b}),w.data=g)),Tw(d,e,c,n,h)}ab(d,t)})}function xu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jh(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=fu(e,n),a!=null&&i.unshift(xu(e,a,s)),a=fu(e,t),a!=null&&i.push(xu(e,a,s))),e.tag===3)return i;e=e.return}return[]}function Aw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o1(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=fu(n,s),c!=null&&r.unshift(xu(n,c,l))):a||(c=fu(n,s),c!=null&&r.push(xu(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var ww=/\r\n?/g,Rw=/\u0000|\uFFFD/g;function l1(e){return(typeof e=="string"?e:""+e).replace(ww,`
`).replace(Rw,"")}function rb(e,t){return t=l1(t),l1(e)===t}function je(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Ll(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Ll(e,""+i);else return;break;case"className":Vf(e,"class",i);break;case"tabIndex":Vf(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Vf(e,n,i);break;case"style":iS(e,i,s);return;case"data":if(t!=="object"){Vf(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",a.name,a,null),je(e,t,"formEncType",a.formEncType,a,null),je(e,t,"formMethod",a.formMethod,a,null),je(e,t,"formTarget",a.formTarget,a,null)):(je(e,t,"encType",a.encType,a,null),je(e,t,"method",a.method,a,null),je(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ss);return;case"onScroll":i!=null&&we("scroll",e);return;case"onScrollEnd":i!=null&&we("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(lt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(lt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=rh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":we("beforetoggle",e),we("toggle",e),sh(e,"popover",i);break;case"xlinkActuate":Ts(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ts(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ts(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ts(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ts(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ts(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ts(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":sh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=KA.get(n)||n,sh(e,n,i);else return}Be=!0}function fg(e,t,n,i,a,s){switch(n){case"style":iS(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(lt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(lt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Ll(e,i);else if(typeof i=="number"||typeof i=="bigint")Ll(e,""+i);else return;break;case"onScroll":i!=null&&we("scroll",e);return;case"onScrollEnd":i!=null&&we("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ss);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Q1.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[Ki]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}Be=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):sh(e,n,i)}return}Be=!0}function vi(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(lt(137,t));default:je(e,t,s,r,n,null)}}a&&je(e,t,"srcSet",n.srcSet,n,null),i&&je(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(lt(137,t));break;default:je(e,t,i,h,n,null)}}tS(e,s,o,l,c,r,a,!1);return;case"select":we("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:je(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Sl(e,!!i,t,!1):n!=null&&Sl(e,!!i,n,!0);return;case"textarea":we("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(lt(91));break;default:je(e,t,r,o,n,null)}nS(e,i,a,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":je(e,t,l,i,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(i=0;i<_u.length;i++)we(_u[i],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(lt(137,t));default:je(e,t,c,i,n,null)}return;default:if(wg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&fg(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&je(e,t,o,i,n,null))}var Cw={};function Nw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||je(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":p!==d&&(Be=!0),s=p;break;case"name":p!==d&&(Be=!0),a=p;break;case"checked":p!==d&&(Be=!0),c=p;break;case"defaultChecked":p!==d&&(Be=!0),h=p;break;case"value":p!==d&&(Be=!0),r=p;break;case"defaultValue":p!==d&&(Be=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(lt(137,t));break;default:p!==d&&je(e,t,u,p,i,d)}}bm(e,r,o,l,c,h,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||je(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(Be=!0),u=s;break;case"defaultValue":s!==l&&(Be=!0),o=s;break;case"multiple":s!==l&&(Be=!0),r=s;default:s!==l&&je(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?Sl(e,!!n,u,!1):!!i!=!!n&&(t!=null?Sl(e,!!n,t,!0):Sl(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:je(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(Be=!0),u=a;break;case"defaultValue":a!==s&&(Be=!0),p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(lt(91));break;default:a!==s&&je(e,t,r,a,i,s)}eS(e,u,p);return;case"option":for(var y in n)u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y)&&(y==="selected"?e.selected=!1:je(e,t,y,null,i,u));for(l in i)u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null)&&(l==="selected"?(u!==p&&(Be=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):je(e,t,l,u,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&je(e,t,_,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(lt(137,t));break;default:je(e,t,c,u,i,p)}return;default:if(wg(t)){for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!==void 0&&!i.hasOwnProperty(v)&&fg(e,t,v,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||fg(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&je(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||je(e,t,d,u,i,p)}function c1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&c1(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&c1(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hg=null,dg=null;function Su(e){return e.nodeType===9?e:e.ownerDocument}function u1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ob(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lb(e,t,n,i){return n=Su(n).createElement(e),n[di]=i,n[Ki]=t,vi(n,e,t),si(n),n}function pg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lm=null;function Lw(){var e=window.event;return e&&e.type==="popstate"?e===lm?!1:(lm=e,!0):(lm=null,!1)}var dv=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,f1=typeof Promise=="function"?Promise:void 0,h1=typeof requestAnimationFrame=="function"?requestAnimationFrame:dv,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof f1<"u"?function(e){return f1.resolve(null).then(e).catch(Ow)}:dv;function Ow(e){setTimeout(function(){throw e})}function Ur(e){return e==="head"}function d1(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Vl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")um(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,um(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Nu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&um(e.ownerDocument.body);n=a}while(n);Vl(t)}function p1(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function cb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function ub(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function fb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function mg(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return fb(t,n,e)}function Iw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return fb(t,n,e)}function zw(e){return e.documentElement.clientHeight}function Bw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Fw(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,p=u.navigation&&u.navigation.transition,y=c.fonts.status;i();var _=[];if(y==="loaded"&&(zw(c),c.fonts.status==="loading"&&_.push(c.fonts.ready)),y=_.length,e!==null)for(var v=e.suspenseyImages,f=0,m=0;m<v.length;m++){var S=v[m];if(!S.complete){var x=S.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(f+=bb(S),f>Sh){_.length=y;break}S=new Promise(Bw.bind(S)),_.push(S)}}}if(0<_.length)return u=Promise.race([Promise.all(_),new Promise(function(A){return setTimeout(A,500)})]).then(a,a),(p?Promise.allSettled([p.finished,u]):u).then(s,s);if(a(),p)return p.finished.then(s,s);s()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),p=0;p<u.length;p++){var y=u[p],_=y.effect,v=_.pseudoElement;if(v!=null&&v.startsWith("::view-transition")){d.push(y),y=_.getKeyframes();for(var f=v=void 0,m=!0,S=0;S<y.length;S++){var x=y[S],A=x.width;if(v===void 0)v=A;else if(v!==A){m=!1;break}if(A=x.height,f===void 0)f=A;else if(f!==A){m=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}m&&v!==void 0&&f!==void 0&&(_.setKeyframes(y),m=getComputedStyle(_.target,_.pseudoElement),m.width!==v||m.height!==f)&&(m=y[0],m.width=v,m.height=f,m=y[y.length-1],m.width=v,m.height=f,_.setKeyframes(y))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var u=0;u<d.length;u++)d[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function so(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}so.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:sn({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};so.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};so.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function hb(e){return{name:e,group:new so("group",e),imagePair:new so("image-pair",e),old:new so("old",e),new:new so("new",e)}}function ua(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ua.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(db(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Bl(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Zi(this._fragmentFiber.child,!1,Hw,e,o,i)}this._eventListeners=s}};function Hw(e,t,n,i){return Jn(e).addEventListener(t,n,i),!1}ua.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=db(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=Bl(a.optionsOrUseCapture),Zi(this._fragmentFiber.child,!1,Gw,e,n,a),i.splice(t,1),s!==null&&s()}};function Gw(e,t,n,i){return Jn(e).removeEventListener(t,n,i),!1}function Bl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function m1(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function db(e,t,n,i){if(e.length===0)return-1;i=m1(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&m1(s.optionsOrUseCapture)===i)return a}return-1}ua.prototype.dispatchEvent=function(e){var t=xo(this._fragmentFiber);if(t===null)return!0;t=Jn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Bl(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Bl(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ua.prototype.focus=function(e){Zi(this._fragmentFiber.child,!0,pb,e,void 0,void 0)};function pb(e,t){return e.tag===6?!1:(e=Jn(e),$w(e,t))}ua.prototype.focusLast=function(e){var t=[];Zi(this._fragmentFiber.child,!0,pv,t,void 0,void 0);for(var n=t.length-1;0<=n&&!pb(t[n],e);n--);};function pv(e,t){return t.push(e),!1}ua.prototype.blur=function(){var e=xo(this._fragmentFiber);e!==null&&(e=Jn(e),e=Su(e).activeElement,e!==null&&Zi(this._fragmentFiber.child,!1,Vw,e,void 0,void 0))};function Vw(e,t){return e.tag===6?!1:(e=Jn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ua.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Zi(this._fragmentFiber.child,!1,kw,e,void 0,void 0)};function kw(e,t){return e.tag===6||(e=Jn(e),t.observe(e)),!1}ua.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Zi(this._fragmentFiber.child,!1,Ww,e,void 0,void 0);for(var n=t=0;n<Ha.length;n++){var i=Ha[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ha[t++]=i}Ha.length=t}};function Ww(e,t){return e.tag===6||(e=Jn(e),t.unobserve(e)),!1}var Ha=[],cm=!1;function Xw(e,t,n){Ha.push({fragmentInstance:e,observer:t,instance:n}),cm||(cm=!0,t3(function(){cm=!1;var i=Ha;Ha=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}ua.prototype.getClientRects=function(){var e=[];return Zi(this._fragmentFiber.child,!1,qw,e,void 0,void 0),e};function qw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Jn(e),t.push.apply(t,e.getClientRects());return!1}ua.prototype.getRootNode=function(e){var t=xo(this._fragmentFiber);return t===null?this:Jn(t).getRootNode(e)};ua.prototype.compareDocumentPosition=function(e){var t=xo(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Zi(this._fragmentFiber.child,!1,pv,n,void 0,void 0);var i=Jn(t);if(n.length===0){if(n=i,Z_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=I1(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=Jn(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Jn(n[0]),a=Jn(n[n.length-1]);var s=Z_(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Yw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Yw(e,t,n,i,a){var s=ao(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=xo(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=hm(n,s,K_),t===null?t=!1:(Zi(t,!0,bA,s,n),s=ll,ll=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=hm(i,s,K_),t===null?t=!1:(Zi(t,!0,TA,s,i),s=ll,fm=ll=null,t=s!==null)),t):!1}function g1(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ua.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(lt(566));var t=[];Zi(this._fragmentFiber.child,!1,pv,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=I1(this._fragmentFiber);if(i=n?i[1]||i[0]||xo(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Jn(i),g1(e,n);return}if(i=Jn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=Jn(a),g1(a,n)):Jn(a).scrollIntoView(e),i+=n?-1:1}};function Zw(e,t){return e=Jn(e),mb(e,t),!1}function mb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function gb(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Bl(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<Ha.length;o++){var l=Ha[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(Ha[r++]=l)}Ha.length=r,s.observe(e)}),mb(e,t))}function Kw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Bl(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?Xw(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function gg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gg(n),td(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Jw(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Nu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=wa(e.nextSibling),e===null)break}return null}function Qw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wa(e.nextSibling),e===null))return null;return e}function vb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wa(e.nextSibling),e===null))return null;return e}function vg(e){return e.data==="$?"||e.data==="$~"}function mv(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function wa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yg=null;function v1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return wa(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function y1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function $w(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function t3(e){h1(function(){h1(function(t){return e(t)})})}function yb(e,t,n){switch(t=Su(n),e){case"html":if(e=t.documentElement,!e)throw Error(lt(452));return e;case"head":if(e=t.head,!e)throw Error(lt(453));return e;case"body":if(e=t.body,!e)throw Error(lt(454));return e;default:throw Error(lt(451))}}function _b(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&je(e,t,i,null,Cw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ss&&(e.onclick=null),td(e)}function um(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);td(e)}var Ra=new Map,_1=new Set;function Mu(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Bs=Xe.d;Xe.d={f:e3,r:n3,D:i3,C:a3,L:s3,m:r3,X:l3,S:o3,M:c3};function e3(){var e=Bs.f(),t=pd();return e||t}function n3(e){var t=Wl(e);t!==null&&t.tag===5&&t.type==="form"?iM(t):Bs.r(e)}var Zl=typeof document>"u"?null:document;function xb(e,t,n){var i=Zl;if(i&&typeof t=="string"&&t){var a=Ta(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),_1.has(a)||(_1.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),vi(t,"link",e),si(t),i.head.appendChild(t)))}}function i3(e){Bs.D(e),xb("dns-prefetch",e,null)}function a3(e,t){Bs.C(e,t),xb("preconnect",e,t)}function s3(e,t,n){Bs.L(e,t,n);var i=Zl;if(i&&e&&t){var a='link[rel="preload"][as="'+Ta(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ta(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ta(n.imageSizes)+'"]')):a+='[href="'+Ta(e)+'"]';var s=a;switch(t){case"style":s=Fl(e);break;case"script":s=Kl(e)}if(!(Ra.has(s)||(e=sn({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ra.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Iu(s))||t==="script"&&i.querySelector(zu(s))))){var r=i.createElement("link");vi(r,"link",e),t==="style"&&(r[Rh]=!0,r.onload=r.onerror=function(){K1(r)}),si(r),i.head.appendChild(r)}}}function r3(e,t){Bs.m(e,t);var n=Zl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ta(i)+'"][href="'+Ta(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Kl(e)}if(!Ra.has(s)&&(e=sn({rel:"modulepreload",href:e},t),Ra.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zu(s)))return}i=n.createElement("link"),vi(i,"link",e),si(i),n.head.appendChild(i)}}}function o3(e,t,n){Bs.S(e,t,n);var i=Zl;if(i&&e){var a=xl(i).hoistableStyles,s=Fl(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Iu(s)))o.loading=5;else{e=sn({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ra.get(s))&&gv(e,n);var l=r=i.createElement("link");si(l),vi(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_h(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function l3(e,t){Bs.X(e,t);var n=Zl;if(n&&e){var i=xl(n).hoistableScripts,a=Kl(e),s=i.get(a);s||(s=n.querySelector(zu(a)),s||(e=sn({src:e,async:!0},t),(t=Ra.get(a))&&vv(e,t),s=n.createElement("script"),si(s),vi(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function c3(e,t){Bs.M(e,t);var n=Zl;if(n&&e){var i=xl(n).hoistableScripts,a=Kl(e),s=i.get(a);s||(s=n.querySelector(zu(a)),s||(e=sn({src:e,async:!0,type:"module"},t),(t=Ra.get(a))&&vv(e,t),s=n.createElement("script"),si(s),vi(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function x1(e,t,n,i){var a=(a=vr.current)?Mu(a):null;if(!a)throw Error(lt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Fl(n.href),t=xl(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fl(n.href);var s=xl(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Iu(e)))?s._p||(r.instance=s,r.state.loading=5):(s=Ra.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ra.set(e,s)),u3(a,e,s,r.state))),t&&i===null)throw Error(lt(528,""));return r}if(t&&i!==null)throw Error(lt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Kl(n),t=xl(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(lt(444,e))}}function Fl(e){return'href="'+Ta(e)+'"'}function Iu(e){return'link[rel="stylesheet"]['+e+"]"}function Sb(e){return sn({},e,{"data-precedence":e.precedence,precedence:null})}function u3(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Rh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Rh]=!0,t.onload=t.onerror=K1.bind(null,t),vi(t,"link",n),si(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Kl(e){return'[src="'+Ta(e)+'"]'}function zu(e){return"script[async]"+e}function S1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ta(n.href)+'"]');if(i)return t.instance=i,si(i),i;var a=sn({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),si(i),vi(i,"style",a),_h(i,n.precedence,e),t.instance=i;case"stylesheet":a=Fl(n.href);var s=e.querySelector(Iu(a));if(s)return t.state.loading|=4,t.instance=s,si(s),s;i=Sb(n),(a=Ra.get(a))&&gv(i,a),s=(e.ownerDocument||e).createElement("link"),si(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),vi(s,"link",i),t.state.loading|=4,_h(s,n.precedence,e),t.instance=s;case"script":return s=Kl(n.src),(a=e.querySelector(zu(s)))?(t.instance=a,si(a),a):(i=n,(a=Ra.get(s))&&(i=sn({},n),vv(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),si(a),vi(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(lt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,_h(i,n.precedence,e));return t.instance}function _h(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gv(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vv(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xh=null;function M1(e,t,n){if(xh===null){var i=new Map,a=xh=new Map;a.set(n,i)}else a=xh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Nu]||s[di]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function _g(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function f3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function b1(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Mb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bb(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function T1(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=bb(t),e.suspenseyImages.push(t)),e=p3.bind(e),t.decode().then(e,e))}function h3(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Fl(i.href),s=t.querySelector(Iu(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,si(s);return}s=t.ownerDocument||t,i=Sb(i),(a=Ra.get(a))&&gv(i,a),s=s.createElement("link"),si(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),vi(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=bu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Sh=0;function d3(e,t){return e.stylesheets&&e.count===0&&Mh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Mh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Sh===0&&(Sh=62500*Dw());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mh(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Sh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Tb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Mh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function bu(){this.count--,Tb(this)}function p3(){this.imgCount--,Tb(this)}var Qh=null;function Mh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qh=new Map,t.forEach(m3,e),Qh=null,bu.call(e))}function m3(e,t){if(!(t.state.loading&4)){var n=Qh.get(e);if(n)var i=n.get(null);else{n=new Map,Qh.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=bu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:as,Provider:null,Consumer:null,_currentValue:ro,_currentValue2:ro,_threadCount:0};function g3(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=B0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=B0(0),this.hiddenUpdates=B0(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function Eb(e,t,n,i,a,s,r,o,l,c,h,d){return e=new g3(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=qi(3,null,null,t),e.current=s,s.stateNode=e,t=zg(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Hg(s),e}function Ab(e){return e?(e=gl,e):gl}function wb(e,t,n,i,a,s){a=Ab(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=xr(e,i,t),n!==null&&(Yi(n,e,t),eu(n,e,t))}function E1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yv(e,t){E1(e,t),(e=e.alternate)&&E1(e,t)}function Rb(e){if(e.tag===13||e.tag===31){var t=bo(e,67108864);t!==null&&Yi(t,e,67108864),yv(e,67108864)}}function A1(e){if(e.tag===13||e.tag===31){var t=la();t=Eg(t);var n=bo(e,t);n!==null&&Yi(n,e,t),yv(e,t)}}var Gl=!0;function v3(e,t,n,i){var a=re.T;re.T=null;var s=Xe.p;try{Xe.p=2,_v(e,t,n,i)}finally{Xe.p=s,re.T=a}}function y3(e,t,n,i){var a=re.T;re.T=null;var s=Xe.p;try{Xe.p=8,_v(e,t,n,i)}finally{Xe.p=s,re.T=a}}function _v(e,t,n,i){if(Gl){var a=xg(i);if(a===null)om(e,t,i,jh,n),w1(e,i);else if(x3(a,e,t,n,i))i.stopPropagation();else if(w1(e,i),t&4&&-1<_3.indexOf(e)){for(;a!==null;){var s=Wl(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=eo(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-oa(r);o.entanglements[1]|=l,r&=~l}hs(s),(We&6)===0&&(qh=sa()+500,Ou(0,!1))}}break;case 31:case 13:o=bo(s,2),o!==null&&Yi(o,s,2),pd(),yv(s,2)}if(s=xg(i),s===null&&om(e,t,i,jh,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else om(e,t,i,null,n)}}function xg(e){return e=Rg(e),xv(e)}var jh=null;function xv(e){if(jh=null,e=ao(e),e!==null){var t=Au(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=U1(t),e!==null)return e;e=null}else if(n===31){if(e=P1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jh=e,null}function Cb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(UA()){case H1:return 2;case G1:return 8;case wh:case PA:return 32;case V1:return 268435456;default:return 32}default:return 32}}var Sg=!1,Tr=null,Er=null,Ar=null,Tu=new Map,Eu=new Map,ur=[],_3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w1(e,t){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Tu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(t.pointerId)}}function Wc(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Wl(t),t!==null&&Rb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function x3(e,t,n,i,a){switch(t){case"focusin":return Tr=Wc(Tr,e,t,n,i,a),!0;case"dragenter":return Er=Wc(Er,e,t,n,i,a),!0;case"mouseover":return Ar=Wc(Ar,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Tu.set(s,Wc(Tu.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Eu.set(s,Wc(Eu.get(s)||null,e,t,n,i,a)),!0}return!1}function Nb(e){var t=ao(e.target);if(t!==null){var n=Au(t);if(n!==null){if(t=n.tag,t===13){if(t=U1(n),t!==null){e.blockedOn=t,$_(e.priority,function(){A1(n)});return}}else if(t===31){if(t=P1(n),t!==null){e.blockedOn=t,$_(e.priority,function(){A1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Tm=i,n.target.dispatchEvent(i),Tm=null}else return t=Wl(n),t!==null&&Rb(t),e.blockedOn=n,!1;t.shift()}return!0}function R1(e,t,n){bh(e)&&n.delete(t)}function S3(){Sg=!1,Tr!==null&&bh(Tr)&&(Tr=null),Er!==null&&bh(Er)&&(Er=null),Ar!==null&&bh(Ar)&&(Ar=null),Tu.forEach(R1),Eu.forEach(R1)}function ih(e,t){e.blockedOn===t&&(e.blockedOn=null,Sg||(Sg=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,S3)))}var ah=null;function C1(e){ah!==e&&(ah=e,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,function(){ah===e&&(ah=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(xv(i||n)===null)continue;break}var s=Wl(n);s!==null&&(e.splice(t,3),t-=3,Hm(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Vl(e){function t(l){return ih(l,e)}Tr!==null&&ih(Tr,e),Er!==null&&ih(Er,e),Ar!==null&&ih(Ar,e),Tu.forEach(t),Eu.forEach(t);for(var n=0;n<ur.length;n++){var i=ur[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Nb(n),n.blockedOn===null&&ur.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Ki]||null;if(typeof s=="function")r||C1(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Ki]||null)o=r.formAction;else if(xv(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),C1(n)}}}function Db(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Sv(e){this._internalRoot=e}vd.prototype.render=Sv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(lt(409));var n=t.current,i=la();wb(n,i,e,t,null,null)};vd.prototype.unmount=Sv.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wb(e.current,2,null,e,null,null),pd(),t[kl]=null}};function vd(e){this._internalRoot=e}vd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Z1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&Nb(e)}};var N1=D1.version;if(N1!=="19.3.1")throw Error(lt(527,N1,"19.3.1"));Xe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(lt(188)):(e=Object.keys(e).join(","),Error(lt(268,e)));return e=MA(t),e=e!==null?O1(e):null,e=e===null?null:e.stateNode,e};var M3={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:re,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Xc.isDisabled&&Xc.supportsFiber))try{wu=Xc.inject(M3),ra=Xc}catch{}var Xc;yd.createRoot=function(e,t){if(!L1(e))throw Error(lt(299));var n=!1,i="",a=fM,s=hM,r=dM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Eb(e,1,!1,null,null,n,i,null,a,s,r,Db),e[kl]=t.current,hv(e),new Sv(t)};yd.hydrateRoot=function(e,t,n){if(!L1(e))throw Error(lt(299));var i=!1,a="",s=fM,r=hM,o=dM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Eb(e,1,!0,t,n??null,i,a,l,s,r,o,Db),t.context=Ab(null),n=t.current,i=la(),i=Eg(i),a=_r(i),a.callback=null,xr(n,a,i),n=i,t.current.lanes=n,Cu(t,n),hs(t),e[kl]=t.current,hv(e),new vd(t)};yd.version="19.3.1"});var Ob=nr((vP,Pb)=>{"use strict";function Ub(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ub)}catch(e){console.error(e)}}Ub(),Pb.exports=Lb()});var zE=Lf($o()),BE=Lf(Ob());var ce=Lf($o());var Kr=Lf($o());var sT=0,Jv=1,rT=2;var cf=1,oT=2,yc=3,Xr=0,Bi=1,Nn=2,Po=0,_c=1,Oo=2,Qv=3,jv=4,xc=5;var Io=100,lT=101,cT=102,uT=103,fT=104,hT=200,Sc=201,dT=202,pT=203,$v=204,zo=205,mT=206,gT=207,vT=208,yT=209,_T=210,xT=211,ST=212,MT=213,bT=214,Gd=0,Vd=1,kd=2,uc=3,Wd=4,Xd=5,qd=6,Yd=7,ty=0,TT=1,ET=2,ys=0,ey=1,ny=2,iy=3,ay=4,sy=5,ry=6,oy=7;var ly=300,Bo=301,Mc=302,gp=303,vp=304,fc=1e3,Ii=1001,Zd=1002,li=1003,AT=1004;var uf=1005;var Pn=1006,yp=1007;var pa=1008;var Fi=1009,cy=1010,uy=1011,bc=1012,_p=1013,ma=1014,Za=1015,ui=1016,xp=1017,Sp=1018,Fo=1020,fy=35902,hy=35899,dy=1021,py=1022,Ji=1023,qs=1026,Zs=1027,ff=1028,Mp=1029,qr=1030,bp=1031;var Tp=1033,hf=33776,df=33777,pf=33778,mf=33779,Ep=35840,Ap=35841,wp=35842,Rp=35843,Cp=36196,Np=37492,Dp=37496,Lp=37488,Up=37489,gf=37490,Pp=37491,Op=37808,Ip=37809,zp=37810,Bp=37811,Fp=37812,Hp=37813,Gp=37814,Vp=37815,kp=37816,Wp=37817,Xp=37818,qp=37819,Yp=37820,Zp=37821,Kp=36492,Jp=36494,Qp=36495,jp=36283,$p=36284,vf=36285,t0=36286;var ku=2300,Kd=2301,Fd=2302,kv=2303,Wv=2400,Xv=2401,qv=2402;var wT=3200;var my=0,RT=1,Ks="",Pi="srgb",Co="srgb-linear",Wu="linear",Ze="srgb";var Hd=7680;var CT=519,NT=512,DT=513,LT=514,gy=515,UT=516,PT=517,vy=518,yy=519,OT=35044,Tc=35048;var _y="300 es",Na=2e3,Xu=2001;function b3(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function T3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function IT(){let e=qu("canvas");return e.style.display="block",e}var Ib={},hc=null;function xy(...e){let t="THREE."+e.shift();hc?hc("log",t,...e):console.log(t,...e)}function zT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function te(...e){e=zT(e);let t="THREE."+e.shift();if(hc)hc("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function oe(...e){e=zT(e);let t="THREE."+e.shift();if(hc)hc("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Vu(...e){let t=e.join(" ");t in Ib||(Ib[t]=!0,te(...e))}function BT(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var FT={[Gd]:Gd,[kd]:qd,[Wd]:Wd,[uc]:Xd,[Vd]:Vd,[qd]:kd,[Yd]:Yd,[Xd]:uc},ms=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mv=Math.PI/180,Jd=180/Math.PI;function yf(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bi[e&255]+bi[e>>8&255]+bi[e>>16&255]+bi[e>>24&255]+"-"+bi[t&255]+bi[t>>8&255]+"-"+bi[t>>16&15|64]+bi[t>>24&255]+"-"+bi[n&63|128]+bi[n>>8&255]+"-"+bi[n>>16&255]+bi[n>>24&255]+bi[i&255]+bi[i>>8&255]+bi[i>>16&255]+bi[i>>24&255]).toLowerCase()}function Le(e,t,n){return Math.max(t,Math.min(n,e))}function E3(e,t){return(e%t+t)%t}function bv(e,t,n){return(1-n)*e+n*t}function HT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Sy(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function A3(e,t){if(t.constructor===Float32Array)return e;let n=Sy(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function w3(e,t){if(t.constructor===Float32Array)return e;let n=Sy(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var le=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Le(this.x,t.x,n.x),this.y=Le(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Le(this.x,t,n),this.y=Le(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Da=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],u=s[r+0],p=s[r+1],y=s[r+2],_=s[r+3];if(d!==_||l!==u||c!==p||h!==y){let v=l*u+c*p+h*y+d*_;v<0&&(u=-u,p=-p,y=-y,_=-_,v=-v);let f=1-o;if(v<.9995){let m=Math.acos(v),S=Math.sin(m);f=Math.sin(f*m)/S,o=Math.sin(o*m)/S,l=l*f+u*o,c=c*f+p*o,h=h*f+y*o,d=d*f+_*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+y*o,d=d*f+_*o;let m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],u=s[r+1],p=s[r+2],y=s[r+3];return t[n]=o*y+h*d+l*p-c*u,t[n+1]=l*y+h*u+c*d-o*p,t[n+2]=c*y+h*p+o*u-l*d,t[n+3]=h*y-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),u=l(i/2),p=l(a/2),y=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*y,this._y=c*p*d-u*h*y,this._z=c*h*y+u*p*d,this._w=c*h*d-u*p*y;break;case"YXZ":this._x=u*h*d+c*p*y,this._y=c*p*d-u*h*y,this._z=c*h*y-u*p*d,this._w=c*h*d+u*p*y;break;case"ZXY":this._x=u*h*d-c*p*y,this._y=c*p*d+u*h*y,this._z=c*h*y+u*p*d,this._w=c*h*d-u*p*y;break;case"ZYX":this._x=u*h*d-c*p*y,this._y=c*p*d+u*h*y,this._z=c*h*y-u*p*d,this._w=c*h*d+u*p*y;break;case"YZX":this._x=u*h*d+c*p*y,this._y=c*p*d+u*h*y,this._z=c*h*y-u*p*d,this._w=c*h*d-u*p*y;break;case"XZY":this._x=u*h*d-c*p*y,this._y=c*p*d-u*h*y,this._z=c*h*y+u*p*d,this._w=c*h*d+u*p*y;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(zb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(zb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Le(this.x,t.x,n.x),this.y=Le(this.y,t.y,n.y),this.z=Le(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Le(this.x,t,n),this.y=Le(this.y,t,n),this.z=Le(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Tv.copy(this).projectOnVector(t),this.sub(Tv)}reflect(t){return this.sub(Tv.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tv=new J,zb=new Da,pe=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],y=i[8],_=a[0],v=a[3],f=a[6],m=a[1],S=a[4],x=a[7],A=a[2],w=a[5],g=a[8];return s[0]=r*_+o*m+l*A,s[3]=r*v+o*S+l*w,s[6]=r*f+o*x+l*g,s[1]=c*_+h*m+d*A,s[4]=c*v+h*S+d*w,s[7]=c*f+h*x+d*g,s[2]=u*_+p*m+y*A,s[5]=u*v+p*S+y*w,s[8]=u*f+p*x+y*g,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,y=n*d+i*u+a*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=d*_,t[1]=(a*c-h*i)*_,t[2]=(o*i-a*r)*_,t[3]=u*_,t[4]=(h*n-a*l)*_,t[5]=(a*s-o*n)*_,t[6]=p*_,t[7]=(i*l-c*n)*_,t[8]=(r*n-i*s)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Vu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ev.makeScale(t,n)),this}rotate(t){return Vu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ev.makeRotation(-t)),this}translate(t,n){return Vu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ev.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ev=new pe,Bb=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fb=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R3(){let e={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ze&&(a.r=Xs(a.r),a.g=Xs(a.g),a.b=Xs(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ze&&(a.r=cc(a.r),a.g=cc(a.g),a.b=cc(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ks?Wu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Co]:{primaries:t,whitePoint:i,transfer:Wu,toXYZ:Bb,fromXYZ:Fb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:i,transfer:Ze,toXYZ:Bb,fromXYZ:Fb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),e}var De=R3();function Xs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function cc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Jl,Qd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jl===void 0&&(Jl=qu("canvas")),Jl.width=t.width,Jl.height=t.height;let a=Jl.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Jl}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=qu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Xs(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xs(n[i]/255)*255):n[i]=Xs(n[i]);return{data:n,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},C3=0,dc=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:C3++}),this.uuid=yf(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Av(a[r].image)):s.push(Av(a[r]))}else s=Av(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function Av(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Qd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var N3=0,wv=new J,zi=class e extends ms{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ii,a=Ii,s=Pn,r=pa,o=Ji,l=Fi,c=e.DEFAULT_ANISOTROPY,h=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N3++}),this.uuid=yf(),this.name="",this.source=new dc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wv).x}get height(){return this.source.getSize(wv).y}get depth(){return this.source.getSize(wv).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){te(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){te(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ly)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fc:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fc:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zi.DEFAULT_IMAGE=null;zi.DEFAULT_MAPPING=ly;zi.DEFAULT_ANISOTROPY=1;var vn=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],y=l[9],_=l[2],v=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(y-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(y+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,x=(p+1)/2,A=(f+1)/2,w=(h+u)/4,g=(d+_)/4,b=(y+v)/4;return S>x&&S>A?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=w/i,s=g/i):x>A?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=w/a,s=b/a):A<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(A),i=g/s,a=b/s),this.set(i,a,s,n),this}let m=Math.sqrt((v-y)*(v-y)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(v-y)/m,this.y=(d-_)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Le(this.x,t.x,n.x),this.y=Le(this.y,t.y,n.y),this.z=Le(this.z,t.z,n.z),this.w=Le(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Le(this.x,t,n),this.y=Le(this.y,t,n),this.z=Le(this.z,t,n),this.w=Le(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jd=class extends ms{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new vn(0,0,t,n),this.scissorTest=!1,this.viewport=new vn(0,0,t,n),this.textures=[];let a=i.count;for(let s=0;s<a;s++)this.textures[s]=new zi({width:t,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new dc(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends jd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Yu=class extends zi{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $d=class extends zi{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fe=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,a,s,r,o,l,c,h,d,u,p,y,_,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,u,p,y,_,v)}set(t,n,i,a,s,r,o,l,c,h,d,u,p,y,_,v){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=y,f[11]=_,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/Ql.setFromMatrixColumn(t,0).length(),s=1/Ql.setFromMatrixColumn(t,1).length(),r=1/Ql.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=r*h,p=r*d,y=o*h,_=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=u-_*c,n[9]=-o*l,n[2]=_-u*c,n[6]=y+p*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,y=c*h,_=c*d;n[0]=u+_*o,n[4]=y*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-y,n[6]=_+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,y=c*h,_=c*d;n[0]=u-_*o,n[4]=-r*d,n[8]=y+p*o,n[1]=p+y*o,n[5]=r*h,n[9]=_-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,p=r*d,y=o*h,_=o*d;n[0]=l*h,n[4]=y*c-p,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=p*c-y,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,p=r*c,y=o*l,_=o*c;n[0]=l*h,n[4]=_-u*d,n[8]=y*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+y,n[10]=u-_*d}else if(t.order==="XZY"){let u=r*l,p=r*c,y=o*l,_=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+_,n[5]=r*h,n[9]=p*d-y,n[2]=y*d-p,n[6]=o*h,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D3,t,L3)}lookAt(t,n,i){let a=this.elements;return fa.subVectors(t,n),fa.lengthSq()===0&&(fa.z=1),fa.normalize(),Pr.crossVectors(i,fa),Pr.lengthSq()===0&&(Math.abs(i.z)===1?fa.x+=1e-4:fa.z+=1e-4,fa.normalize(),Pr.crossVectors(i,fa)),Pr.normalize(),_d.crossVectors(fa,Pr),a[0]=Pr.x,a[4]=_d.x,a[8]=fa.x,a[1]=Pr.y,a[5]=_d.y,a[9]=fa.y,a[2]=Pr.z,a[6]=_d.z,a[10]=fa.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],y=i[2],_=i[6],v=i[10],f=i[14],m=i[3],S=i[7],x=i[11],A=i[15],w=a[0],g=a[4],b=a[8],P=a[12],C=a[1],O=a[5],B=a[9],V=a[13],N=a[2],X=a[6],Q=a[10],Y=a[14],mt=a[3],tt=a[7],ct=a[11],dt=a[15];return s[0]=r*w+o*C+l*N+c*mt,s[4]=r*g+o*O+l*X+c*tt,s[8]=r*b+o*B+l*Q+c*ct,s[12]=r*P+o*V+l*Y+c*dt,s[1]=h*w+d*C+u*N+p*mt,s[5]=h*g+d*O+u*X+p*tt,s[9]=h*b+d*B+u*Q+p*ct,s[13]=h*P+d*V+u*Y+p*dt,s[2]=y*w+_*C+v*N+f*mt,s[6]=y*g+_*O+v*X+f*tt,s[10]=y*b+_*B+v*Q+f*ct,s[14]=y*P+_*V+v*Y+f*dt,s[3]=m*w+S*C+x*N+A*mt,s[7]=m*g+S*O+x*X+A*tt,s[11]=m*b+S*B+x*Q+A*ct,s[15]=m*P+S*V+x*Y+A*dt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],y=t[3],_=t[7],v=t[11],f=t[15],m=l*p-c*u,S=o*p-c*d,x=o*u-l*d,A=r*p-c*h,w=r*u-l*h,g=r*d-o*h;return n*(_*m-v*S+f*x)-i*(y*m-v*A+f*w)+a*(y*S-_*A+f*g)-s*(y*x-_*w+v*g)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(s*h-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],y=t[12],_=t[13],v=t[14],f=t[15],m=n*o-i*r,S=n*l-a*r,x=n*c-s*r,A=i*l-a*o,w=i*c-s*o,g=a*c-s*l,b=h*_-d*y,P=h*v-u*y,C=h*f-p*y,O=d*v-u*_,B=d*f-p*_,V=u*f-p*v,N=m*V-S*B+x*O+A*C-w*P+g*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return t[0]=(o*V-l*B+c*O)*X,t[1]=(a*B-i*V-s*O)*X,t[2]=(_*g-v*w+f*A)*X,t[3]=(u*w-d*g-p*A)*X,t[4]=(l*C-r*V-c*P)*X,t[5]=(n*V-a*C+s*P)*X,t[6]=(v*x-y*g-f*S)*X,t[7]=(h*g-u*x+p*S)*X,t[8]=(r*B-o*C+c*b)*X,t[9]=(i*C-n*B-s*b)*X,t[10]=(y*w-_*x+f*m)*X,t[11]=(d*x-h*w-p*m)*X,t[12]=(o*P-r*O-l*b)*X,t[13]=(n*O-i*P+a*b)*X,t[14]=(_*S-y*A-v*m)*X,t[15]=(h*A-d*S+u*m)*X,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,y=s*d,_=r*h,v=r*d,f=o*d,m=l*c,S=l*h,x=l*d,A=i.x,w=i.y,g=i.z;return a[0]=(1-(_+f))*A,a[1]=(p+x)*A,a[2]=(y-S)*A,a[3]=0,a[4]=(p-x)*w,a[5]=(1-(u+f))*w,a[6]=(v+m)*w,a[7]=0,a[8]=(y+S)*g,a[9]=(v-m)*g,a[10]=(1-(u+_))*g,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ql.set(a[0],a[1],a[2]).length(),o=Ql.set(a[4],a[5],a[6]).length(),l=Ql.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ka.copy(this);let c=1/r,h=1/o,d=1/l;return ka.elements[0]*=c,ka.elements[1]*=c,ka.elements[2]*=c,ka.elements[4]*=h,ka.elements[5]*=h,ka.elements[6]*=h,ka.elements[8]*=d,ka.elements[9]*=d,ka.elements[10]*=d,n.setFromRotationMatrix(ka),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Na,l=!1){let c=this.elements,h=2*s/(n-t),d=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a),y,_;if(l)y=s/(r-s),_=r*s/(r-s);else if(o===Na)y=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===Xu)y=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Na,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a),y,_;if(l)y=1/(r-s),_=r/(r-s);else if(o===Na)y=-2/(r-s),_=-(r+s)/(r-s);else if(o===Xu)y=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ql=new J,ka=new Fe,D3=new J(0,0,0),L3=new J(1,1,1),Pr=new J,_d=new J,fa=new J,Hb=new Fe,Gb=new Da,Hr=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Hb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Gb.setFromEuler(this),this.setFromQuaternion(Gb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hr.DEFAULT_ORDER="XYZ";var pc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},U3=0,Vb=new J,jl=new Da,Fs=new Fe,xd=new J,Bu=new J,P3=new J,O3=new Da,kb=new J(1,0,0),Wb=new J(0,1,0),Xb=new J(0,0,1),qb={type:"added"},I3={type:"removed"},$l={type:"childadded",child:null},Rv={type:"childremoved",child:null},La=class e extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U3++}),this.uuid=yf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Hr,i=new Da,a=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Fe},normalMatrix:{value:new pe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return jl.setFromAxisAngle(t,n),this.quaternion.multiply(jl),this}rotateOnWorldAxis(t,n){return jl.setFromAxisAngle(t,n),this.quaternion.premultiply(jl),this}rotateX(t){return this.rotateOnAxis(kb,t)}rotateY(t){return this.rotateOnAxis(Wb,t)}rotateZ(t){return this.rotateOnAxis(Xb,t)}translateOnAxis(t,n){return Vb.copy(t).applyQuaternion(this.quaternion),this.position.add(Vb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(kb,t)}translateY(t){return this.translateOnAxis(Wb,t)}translateZ(t){return this.translateOnAxis(Xb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?xd.copy(t):xd.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Bu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(Bu,xd,this.up):Fs.lookAt(xd,Bu,this.up),this.quaternion.setFromRotationMatrix(Fs),a&&(Fs.extractRotation(a.matrixWorld),jl.setFromRotationMatrix(Fs),this.quaternion.premultiply(jl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qb),$l.child=t,this.dispatchEvent($l),$l.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(I3),Rv.child=t,this.dispatchEvent(Rv),Rv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qb),$l.child=t,this.dispatchEvent($l),$l.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bu,t,P3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bu,O3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),y=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=a,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};La.DEFAULT_UP=new J(0,1,0);La.DEFAULT_MATRIX_AUTO_UPDATE=!0;La.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ps=class extends La{constructor(){super(),this.isGroup=!0,this.type="Group"}},z3={type:"move"},mc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let v=n.getJointPose(_,i),f=this._getHandJoint(c,_);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&u>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},GT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Sd={h:0,s:0,l:0};function Cv(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ie=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=De.workingColorSpace){return this.r=t,this.g=n,this.b=i,De.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=De.workingColorSpace){if(t=E3(t,1),n=Le(n,0,1),i=Le(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Cv(r,s,t+1/3),this.g=Cv(r,s,t),this.b=Cv(r,s,t-1/3)}return De.colorSpaceToWorking(this,a),this}setStyle(t,n=Pi){function i(s){s!==void 0&&parseFloat(s)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:te("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pi){let i=GT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=cc(t.r),this.g=cc(t.g),this.b=cc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return De.workingToColorSpace(Ti.copy(this),t),Math.round(Le(Ti.r*255,0,255))*65536+Math.round(Le(Ti.g*255,0,255))*256+Math.round(Le(Ti.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(Ti.copy(this),n);let i=Ti.r,a=Ti.g,s=Ti.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(Ti.copy(this),n),t.r=Ti.r,t.g=Ti.g,t.b=Ti.b,t}getStyle(t=Pi){De.workingToColorSpace(Ti.copy(this),t);let n=Ti.r,i=Ti.g,a=Ti.b;return t!==Pi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Or),this.setHSL(Or.h+t,Or.s+n,Or.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Or),t.getHSL(Sd);let i=bv(Or.h,Sd.h,n),a=bv(Or.s,Sd.s,n),s=bv(Or.l,Sd.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ti=new Ie;Ie.NAMES=GT;var No=class extends La{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Wa=new J,Hs=new J,Nv=new J,Gs=new J,tc=new J,ec=new J,Yb=new J,Dv=new J,Lv=new J,Uv=new J,Pv=new vn,Ov=new vn,Iv=new vn,Fr=class e{constructor(t=new J,n=new J,i=new J){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Wa.subVectors(t,n),a.cross(Wa);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){Wa.subVectors(a,n),Hs.subVectors(i,n),Nv.subVectors(t,n);let r=Wa.dot(Wa),o=Wa.dot(Hs),l=Wa.dot(Nv),c=Hs.dot(Hs),h=Hs.dot(Nv),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,y=(r*h-o*l)*u;return s.set(1-p-y,y,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Gs)===null?!1:Gs.x>=0&&Gs.y>=0&&Gs.x+Gs.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gs.x),l.addScaledVector(r,Gs.y),l.addScaledVector(o,Gs.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Pv.setScalar(0),Ov.setScalar(0),Iv.setScalar(0),Pv.fromBufferAttribute(t,n),Ov.fromBufferAttribute(t,i),Iv.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Pv,s.x),r.addScaledVector(Ov,s.y),r.addScaledVector(Iv,s.z),r}static isFrontFacing(t,n,i,a){return Wa.subVectors(i,n),Hs.subVectors(t,n),Wa.cross(Hs).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wa.subVectors(this.c,this.b),Hs.subVectors(this.a,this.b),Wa.cross(Hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;tc.subVectors(a,i),ec.subVectors(s,i),Dv.subVectors(t,i);let l=tc.dot(Dv),c=ec.dot(Dv);if(l<=0&&c<=0)return n.copy(i);Lv.subVectors(t,a);let h=tc.dot(Lv),d=ec.dot(Lv);if(h>=0&&d<=h)return n.copy(a);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),n.copy(i).addScaledVector(tc,r);Uv.subVectors(t,s);let p=tc.dot(Uv),y=ec.dot(Uv);if(y>=0&&p<=y)return n.copy(s);let _=p*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(ec,o);let v=h*y-p*d;if(v<=0&&d-h>=0&&p-y>=0)return Yb.subVectors(s,a),o=(d-h)/(d-h+(p-y)),n.copy(a).addScaledVector(Yb,o);let f=1/(v+_+u);return r=_*f,o=u*f,n.copy(i).addScaledVector(tc,r).addScaledVector(ec,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gs=class{constructor(t=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Xa.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Xa.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Xa.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Xa):Xa.fromBufferAttribute(s,r),Xa.applyMatrix4(t.matrixWorld),this.expandByPoint(Xa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Md.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Md.copy(i.boundingBox)),Md.applyMatrix4(t.matrixWorld),this.union(Md)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xa),Xa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fu),bd.subVectors(this.max,Fu),nc.subVectors(t.a,Fu),ic.subVectors(t.b,Fu),ac.subVectors(t.c,Fu),Ir.subVectors(ic,nc),zr.subVectors(ac,ic),Eo.subVectors(nc,ac);let n=[0,-Ir.z,Ir.y,0,-zr.z,zr.y,0,-Eo.z,Eo.y,Ir.z,0,-Ir.x,zr.z,0,-zr.x,Eo.z,0,-Eo.x,-Ir.y,Ir.x,0,-zr.y,zr.x,0,-Eo.y,Eo.x,0];return!zv(n,nc,ic,ac,bd)||(n=[1,0,0,0,1,0,0,0,1],!zv(n,nc,ic,ac,bd))?!1:(Td.crossVectors(Ir,zr),n=[Td.x,Td.y,Td.z],zv(n,nc,ic,ac,bd))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vs=[new J,new J,new J,new J,new J,new J,new J,new J],Xa=new J,Md=new gs,nc=new J,ic=new J,ac=new J,Ir=new J,zr=new J,Eo=new J,Fu=new J,bd=new J,Td=new J,Ao=new J;function zv(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ao.fromArray(e,s);let o=a.x*Math.abs(Ao.x)+a.y*Math.abs(Ao.y)+a.z*Math.abs(Ao.z),l=t.dot(Ao),c=n.dot(Ao),h=i.dot(Ao);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ws=B3();function B3(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),i=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,a[l]=24,a[l|256]=24):(i[l]=31744,i[l|256]=64512,a[l]=13,a[l|256]=13)}let s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:n,baseTable:i,shiftTable:a,mantissaTable:s,exponentTable:r,offsetTable:o}}function F3(e){Math.abs(e)>65504&&te("DataUtils.toHalfFloat(): Value out of range."),e=Le(e,-65504,65504),Ws.floatView[0]=e;let t=Ws.uint32View[0],n=t>>23&511;return Ws.baseTable[n]+((t&8388607)>>Ws.shiftTable[n])}function H3(e){let t=e>>10;return Ws.uint32View[0]=Ws.mantissaTable[Ws.offsetTable[t]+(e&1023)]+Ws.exponentTable[t],Ws.floatView[0]}var Zu=class{static toHalfFloat(t){return F3(t)}static fromHalfFloat(t){return H3(t)}},kn=new J,Ed=new le,G3=0,jn=class extends ms{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=OT,this.updateRanges=[],this.gpuType=Za,this.version=0,this._normalizationScale=t!==void 0?Sy(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ed.fromBufferAttribute(this,n),Ed.applyMatrix3(t),this.setXY(n,Ed.x,Ed.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix3(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):A3(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):w3(t,this.array)}};var Ku=class extends jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Ju=class extends jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Wn=class extends jn{constructor(t,n,i){super(new Float32Array(t),n,i)}},V3=new gs,Hu=new J,Bv=new J,gc=class{constructor(t=new J,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):V3.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hu.subVectors(t,this.center);let n=Hu.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Hu,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bv.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hu.copy(t.center).add(Bv)),this.expandByPoint(Hu.copy(t.center).sub(Bv))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},k3=0,Ca=new Fe,Fv=new La,sc=new J,ha=new gs,Gu=new gs,oi=new J,Ei=class e extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k3++}),this.uuid=yf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(b3(t)?Ju:Ku)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new pe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ca.makeRotationFromQuaternion(t),this.applyMatrix4(Ca),this}rotateX(t){return Ca.makeRotationX(t),this.applyMatrix4(Ca),this}rotateY(t){return Ca.makeRotationY(t),this.applyMatrix4(Ca),this}rotateZ(t){return Ca.makeRotationZ(t),this.applyMatrix4(Ca),this}translate(t,n,i){return Ca.makeTranslation(t,n,i),this.applyMatrix4(Ca),this}scale(t,n,i){return Ca.makeScale(t,n,i),this.applyMatrix4(Ca),this}lookAt(t){return Fv.lookAt(t),Fv.updateMatrix(),this.applyMatrix4(Fv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sc).negate(),this.translate(sc.x,sc.y,sc.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wn(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];ha.setFromBufferAttribute(s),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,ha.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,ha.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(ha.min),this.boundingBox.expandByPoint(ha.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(ha.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Gu.setFromBufferAttribute(o),this.morphTargetsRelative?(oi.addVectors(ha.min,Gu.min),ha.expandByPoint(oi),oi.addVectors(ha.max,Gu.max),ha.expandByPoint(oi)):(ha.expandByPoint(Gu.min),ha.expandByPoint(Gu.max))}ha.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)oi.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(oi));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)oi.fromBufferAttribute(o,c),l&&(sc.fromBufferAttribute(t,c),oi.add(sc)),a=Math.max(a,i.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new J,l[P]=new J;let h=new J,d=new J,u=new J,p=new le,y=new le,_=new le,v=new J,f=new J;function m(P,C,O){c[P]=c[C]=c[O]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,O),p.fromBufferAttribute(s,P),y.fromBufferAttribute(s,C),_.fromBufferAttribute(s,O),d.sub(h),u.sub(h),y.sub(p),_.sub(p);let B=1/(y.x*_.y-_.x*y.y);isFinite(B)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(u,-y.y).multiplyScalar(B),f.copy(u).multiplyScalar(y.x).addScaledVector(d,-_.x).multiplyScalar(B),o[P].add(v),o[C].add(v),o[O].add(v),l[P].add(f),l[C].add(f),l[O].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,C=S.length;P<C;++P){let O=S[P],B=O.start,V=O.count;for(let N=B,X=B+V;N<X;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new J,A=new J,w=new J,g=new J;function b(P){w.fromBufferAttribute(a,P),g.copy(w);let C=o[P];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(g,C);let B=A.dot(l[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,B)}for(let P=0,C=i.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let a=new J,s=new J,r=new J,o=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let u=0,p=t.count;u<p;u+=3){let y=t.getX(u+0),_=t.getX(u+1),v=t.getX(u+2);a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)oi.fromBufferAttribute(t,n),oi.normalize(),t.setXYZ(n,oi.x,oi.y,oi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,y=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[y++]=c[p++]}return new jn(u,h,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hv=new J,W3=new J,X3=new pe,qa=class{constructor(t=new J(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=Hv.subVectors(i,n).cross(W3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(Hv),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||X3.getNormalMatrix(t),a=this.coplanarPoint(Hv).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},q3=0,Do=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=yf(),this.name="",this.type="Material",this.blending=_c,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$v,this.blendDst=zo,this.blendEquation=Io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hd,this.stencilZFail=Hd,this.stencilZPass=Hd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){te(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){te(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qa().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ks=new J,Gv=new J,Ad=new J,wd=new J,Qu=class{constructor(t=new J,n=new J(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ks)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ks.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ks.copy(this.origin).addScaledVector(this.direction,n),ks.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Gv.copy(t).add(n).multiplyScalar(.5),Ad.copy(n).sub(t).normalize(),wd.copy(this.origin).sub(Gv);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Ad),o=wd.dot(this.direction),l=-wd.dot(Ad),c=wd.lengthSq(),h=Math.abs(1-r*r),d,u,p,y;if(h>0)if(d=r*l-o,u=r*o-l,y=s*h,d>=0)if(u>=-y)if(u<=y){let _=1/h;d*=_,u*=_,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-y?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=y?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Gv).addScaledVector(Ad,u),p}intersectSphere(t,n){if(t.radius<0)return null;ks.subVectors(t.center,this.origin);let i=ks.dot(this.direction),a=ks.dot(ks)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ks)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,p=t.z-r.z,y=n.x-r.x,_=n.y-r.y,v=n.z-r.z,f=i.x-r.x,m=i.y-r.y,S=i.z-r.z,x=Math.abs(l),A=Math.abs(c),w=Math.abs(h),g,b,P,C,O,B,V,N,X,Q,Y,mt;if(x>=A&&x>=w?(P=l,B=d,X=y,mt=f,l>=0?(g=c,b=h,C=u,O=p,V=_,N=v,Q=m,Y=S):(g=h,b=c,C=p,O=u,V=v,N=_,Q=S,Y=m)):A>=w?(P=c,B=u,X=_,mt=m,c>=0?(g=h,b=l,C=p,O=d,V=v,N=y,Q=S,Y=f):(g=l,b=h,C=d,O=p,V=y,N=v,Q=f,Y=S)):(P=h,B=p,X=v,mt=S,h>=0?(g=l,b=c,C=d,O=u,V=y,N=_,Q=f,Y=m):(g=c,b=l,C=u,O=d,V=_,N=y,Q=m,Y=f)),P===0)return null;let tt=g/P,ct=b/P,dt=1/P,Xt=C-tt*B,ne=O-ct*B,rt=V-tt*X,Nt=N-ct*X,Ot=Q-tt*mt,zt=Y-ct*mt,Dt=Ot*Nt-zt*rt,kt=Xt*zt-ne*Ot,bn=rt*ne-Nt*Xt;if(a){if(Dt<0||kt<0||bn<0)return null}else if((Dt<0||kt<0||bn<0)&&(Dt>0||kt>0||bn>0))return null;let jt=Dt+kt+bn;if(jt===0)return null;let Pe=dt*(Dt*B+kt*X+bn*mt);return(jt>0?Pe<0:Pe>0)?null:this.at(Pe/jt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tp=class extends Do{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zb=new Fe,wo=new Qu,Rd=new gc,Kb=new J,Cd=new J,Nd=new J,Dd=new J,Vv=new J,Ld=new J,Jb=new J,Ud=new J,Ke=class extends La{constructor(t=new Ei,n=new tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Ld.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Vv.fromBufferAttribute(d,t),r?Ld.addScaledVector(Vv,h):Ld.addScaledVector(Vv.sub(n),h))}n.add(Ld)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rd.copy(i.boundingSphere),Rd.applyMatrix4(s),wo.copy(t.ray).recast(t.near),!(Rd.containsPoint(wo.origin)===!1&&(wo.intersectSphere(Rd,Kb)===null||wo.origin.distanceToSquared(Kb)>(t.far-t.near)**2))&&(Zb.copy(s).invert(),wo.copy(t.ray).applyMatrix4(Zb),!(i.boundingBox!==null&&wo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,wo)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,_=u.length;y<_;y++){let v=u[y],f=r[v.materialIndex],m=Math.max(v.start,p.start),S=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,A=S;x<A;x+=3){let w=o.getX(x),g=o.getX(x+1),b=o.getX(x+2);a=Pd(this,f,t,i,c,h,d,w,g,b),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{let y=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let v=y,f=_;v<f;v+=3){let m=o.getX(v),S=o.getX(v+1),x=o.getX(v+2);a=Pd(this,r,t,i,c,h,d,m,S,x),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,_=u.length;y<_;y++){let v=u[y],f=r[v.materialIndex],m=Math.max(v.start,p.start),S=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,A=S;x<A;x+=3){let w=x,g=x+1,b=x+2;a=Pd(this,f,t,i,c,h,d,w,g,b),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{let y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let v=y,f=_;v<f;v+=3){let m=v,S=v+1,x=v+2;a=Pd(this,r,t,i,c,h,d,m,S,x),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}};function Y3(e,t,n,i,a,s,r,o){let l;if(t.side===Bi?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Xr,o),l===null)return null;Ud.copy(o),Ud.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Ud);return c<n.near||c>n.far?null:{distance:c,point:Ud.clone(),object:e}}function Pd(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Cd),e.getVertexPosition(l,Nd),e.getVertexPosition(c,Dd);let h=Y3(e,t,n,i,Cd,Nd,Dd,Jb);if(h){let d=new J;Fr.getBarycoord(Jb,Cd,Nd,Dd,d),a&&(h.uv=Fr.getInterpolatedAttribute(a,o,l,c,d,new le)),s&&(h.uv1=Fr.getInterpolatedAttribute(s,o,l,c,d,new le)),r&&(h.normal=Fr.getInterpolatedAttribute(r,o,l,c,d,new J),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new J,materialIndex:0};Fr.getNormal(Cd,Nd,Dd,u.normal),h.face=u,h.barycoord=d}return h}var Lo=class extends zi{constructor(t=null,n=1,i=1,a,s,r,o,l,c=li,h=li,d,u){super(null,r,o,l,c,h,a,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ju=class extends jn{constructor(t,n,i,a=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Ro=new gc,Z3=new le(.5,.5),Od=new J,Uo=class{constructor(t=new qa,n=new qa,i=new qa,a=new qa,s=new qa,r=new qa){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Na,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],y=s[8],_=s[9],v=s[10],f=s[11],m=s[12],S=s[13],x=s[14],A=s[15];if(a[0].setComponents(c-r,p-h,f-y,A-m).normalize(),a[1].setComponents(c+r,p+h,f+y,A+m).normalize(),a[2].setComponents(c+o,p+d,f+_,A+S).normalize(),a[3].setComponents(c-o,p-d,f-_,A-S).normalize(),i)a[4].setComponents(l,u,v,x).normalize(),a[5].setComponents(c-l,p-u,f-v,A-x).normalize();else if(a[4].setComponents(c-l,p-u,f-v,A-x).normalize(),n===Na)a[5].setComponents(c+l,p+u,f+v,A+x).normalize();else if(n===Xu)a[5].setComponents(l,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ro.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ro)}intersectsSprite(t){Ro.center.set(0,0,0);let n=Z3.distanceTo(t.center);return Ro.radius=.7071067811865476+n,Ro.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ro)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Od.x=a.normal.x>0?t.max.x:t.min.x,Od.y=a.normal.y>0?t.max.y:t.min.y,Od.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Od)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qb=new Fe,ep=class e{constructor(){this.coordinateSystem=Na,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let a=0;a<n.length;a++){let s=n[a];Qb.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[a]===void 0&&(i[a]=new Uo),i[a].setFromProjectionMatrix(Qb,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let a=0;a<t._count;a++)n[a]===void 0&&(n[a]=new Uo),n[a].copy(i[a]);return this._count=t._count,this}clone(){return new e().copy(this)}};var $u=class extends zi{constructor(t=[],n=Bo,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tf=class extends zi{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ya=class extends zi{constructor(t,n,i=ma,a,s,r,o=li,l=li,c,h=qs,d=1){if(h!==qs&&h!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},ef=class extends Ya{constructor(t,n=ma,i=Bo,a,s,r=li,o=li,l,c=qs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nf=class extends zi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$n=class e extends Ei{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,p=0;y("z","y","x",-1,-1,i,n,t,r,s,0),y("z","y","x",1,-1,i,n,-t,r,s,1),y("x","z","y",1,1,t,i,n,a,r,2),y("x","z","y",1,-1,t,i,-n,a,r,3),y("x","y","z",1,-1,t,n,i,a,s,4),y("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(d,2));function y(_,v,f,m,S,x,A,w,g,b,P){let C=x/g,O=A/b,B=x/2,V=A/2,N=w/2,X=g+1,Q=b+1,Y=0,mt=0,tt=new J;for(let ct=0;ct<Q;ct++){let dt=ct*O-V;for(let Xt=0;Xt<X;Xt++){let ne=Xt*C-B;tt[_]=ne*m,tt[v]=dt*S,tt[f]=N,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[v]=0,tt[f]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Xt/g),d.push(1-ct/b),Y+=1}}for(let ct=0;ct<b;ct++)for(let dt=0;dt<g;dt++){let Xt=u+dt+X*ct,ne=u+dt+X*(ct+1),rt=u+(dt+1)+X*(ct+1),Nt=u+(dt+1)+X*ct;l.push(Xt,ne,Nt),l.push(ne,rt,Nt),mt+=6}o.addGroup(p,mt,P),p+=mt,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class e extends Ei{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let h=[],d=[],u=[],p=[],y=0,_=[],v=i/2,f=0;m(),r===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Wn(d,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(p,2));function m(){let x=new J,A=new J,w=0,g=(n-t)/i;for(let b=0;b<=s;b++){let P=[],C=b/s,O=C*(n-t)+t;for(let B=0;B<=a;B++){let V=B/a,N=V*l+o,X=Math.sin(N),Q=Math.cos(N);A.x=O*X,A.y=-C*i+v,A.z=O*Q,d.push(A.x,A.y,A.z),x.set(X,g,Q).normalize(),u.push(x.x,x.y,x.z),p.push(V,1-C),P.push(y++)}_.push(P)}for(let b=0;b<a;b++)for(let P=0;P<s;P++){let C=_[P][b],O=_[P+1][b],B=_[P+1][b+1],V=_[P][b+1];(t>0||P!==0)&&(h.push(C,O,V),w+=3),(n>0||P!==s-1)&&(h.push(O,B,V),w+=3)}c.addGroup(f,w,0),f+=w}function S(x){let A=y,w=new le,g=new J,b=0,P=x===!0?t:n,C=x===!0?1:-1;for(let B=1;B<=a;B++)d.push(0,v*C,0),u.push(0,C,0),p.push(.5,.5),y++;let O=y;for(let B=0;B<=a;B++){let N=B/a*l+o,X=Math.cos(N),Q=Math.sin(N);g.x=P*Q,g.y=v*C,g.z=P*X,d.push(g.x,g.y,g.z),u.push(0,C,0),w.x=X*.5+.5,w.y=Q*.5*C+.5,p.push(w.x,w.y),y++}for(let B=0;B<a;B++){let V=A+B,N=O+B;x===!0?h.push(N,N+1,V):h.push(N+1,N,V),b+=3}c.addGroup(f,b,x===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var af=class e extends Ei{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=n/l,p=[],y=[],_=[],v=[];for(let f=0;f<h;f++){let m=f*u-r;for(let S=0;S<c;S++){let x=S*d-s;y.push(x,-m,0),_.push(0,0,1),v.push(S/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let S=m+c*f,x=m+c*(f+1),A=m+1+c*(f+1),w=m+1+c*f;p.push(S,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Wn(y,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var sf=class e extends Ei{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new J,u=new J,p=[],y=[],_=[],v=[];for(let f=0;f<=i;f++){let m=[],S=f/i,x=r+S*o,A=t*Math.cos(x),w=Math.sqrt(t*t-A*A),g=0;f===0&&r===0?g=.5/n:f===i&&l===Math.PI&&(g=-.5/n);for(let b=0;b<=n;b++){let P=b/n,C=a+P*s;d.x=-w*Math.cos(C),d.y=A,d.z=w*Math.sin(C),y.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),v.push(P+g,1-S),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){let S=h[f][m+1],x=h[f][m],A=h[f+1][m],w=h[f+1][m+1];(f!==0||r>0)&&p.push(S,x,w),(f!==i-1||l<Math.PI)&&p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Wn(y,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ho(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(jb(a))a.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(jb(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Ai(e){let t={};for(let n=0;n<e.length;n++){let i=Ho(e[n]);for(let a in i)t[a]=i[a]}return t}function jb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function K3(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function My(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}var VT={clone:Ho,merge:Ai},J3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends Do{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J3,this.fragmentShader=Q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=K3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(a.value);break;case"v2":this.uniforms[i].value=new le().fromArray(a.value);break;case"v3":this.uniforms[i].value=new J().fromArray(a.value);break;case"v4":this.uniforms[i].value=new vn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},np=class extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ip=class extends Do{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ap=class extends Do{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Id(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Gr=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sp=class extends Gr{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wv,endingEnd:Wv}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case Xv:s=t,o=2*n-i;break;case qv:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xv:r=t,l=2*i-n;break;case qv:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,y=(i-n)/(a-n),_=y*y,v=_*y,f=-u*v+2*u*_-u*y,m=(1+u)*v+(-1.5-2*u)*_+(-.5+u)*y+1,S=(-1-p)*v+(1.5+p)*_+.5*y,x=p*v-p*_;for(let A=0;A!==o;++A)s[A]=f*r[h+A]+m*r[c+A]+S*r[l+A]+x*r[d+A];return s}},rp=class extends Gr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}},op=class extends Gr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},lp=class extends Gr{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let y=(i-n)/(a-n),_=1-y;for(let v=0;v!==o;++v)s[v]=r[c+v]*_+r[l+v]*y;return s}let u=o*2,p=t-1;for(let y=0;y!==o;++y){let _=r[c+y],v=r[l+y],f=p*u+y*2,m=d[f],S=d[f+1],x=t*u+y*2,A=h[x],w=h[x+1],g=$3(i,n,m,A,a);s[y]=kT(g,_,S,w,v)}return s}};function kT(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function j3(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function $3(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=kT(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=j3(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var da=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rc(n,this.TimeBufferType),this.values=rc(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:rc(t.times,Array),values:rc(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),Id(t.settings)&&(i.settings={inTangents:rc(t.settings.inTangents,Array),outTangents:rc(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new op(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new lp(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case ku:n=this.InterpolantFactoryMethodDiscrete;break;case Kd:n=this.InterpolantFactoryMethodLinear;break;case Fd:n=this.InterpolantFactoryMethodSmooth;break;case kv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return te("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ku;case this.InterpolantFactoryMethodLinear:return Kd;case this.InterpolantFactoryMethodSmooth:return Fd;case this.InterpolantFactoryMethodBezier:return kv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t;Id(this.settings)&&($b(this.settings.inTangents,t),$b(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;Id(this.settings)&&(tT(this.settings.inTangents,t),tT(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){oe("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&T3(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Fd,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let y=0;y!==i;++y){let _=n[d+y];if(_!==n[u+y]||_!==n[p+y]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,u=r*i;for(let p=0;p!==i;++p)n[u+p]=n[d+p]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,Id(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function $b(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function tT(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}da.prototype.ValueTypeName="";da.prototype.TimeBufferType=Float32Array;da.prototype.ValueBufferType=Float32Array;da.prototype.DefaultInterpolation=Kd;var Vr=class extends da{constructor(t,n,i){super(t,n,i)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=ku;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var cp=class extends da{constructor(t,n,i,a){super(t,n,i,a)}};cp.prototype.ValueTypeName="color";var up=class extends da{constructor(t,n,i,a){super(t,n,i,a)}};up.prototype.ValueTypeName="number";var fp=class extends Gr{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)Da.slerpFlat(s,0,r,c-o,r,c,l);return s}},rf=class extends da{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new fp(this.times,this.values,this.getValueSize(),t)}};rf.prototype.ValueTypeName="quaternion";rf.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends da{constructor(t,n,i){super(t,n,i)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ku;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var hp=class extends da{constructor(t,n,i,a){super(t,n,i,a)}};hp.prototype.ValueTypeName="vector";var dp=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},WT=new dp,pp=class{constructor(t){this.manager=t!==void 0?t:WT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};pp.DEFAULT_MATERIAL_NAME="__DEFAULT";var zd=new J,Bd=new Da,ds=new J,of=class extends La{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zd,Bd,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zd,Bd,ds.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(zd,Bd,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zd,Bd,ds.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Br=new J,eT=new le,nT=new le,Oi=class extends of{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mv*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Mv*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-t/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-t/Br.z)}getViewSize(t,n){return this.getViewBounds(t,eT,nT),n.subVectors(nT,eT)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Mv*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Wr=class extends of{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Ys=class extends Ei{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var oc=-90,lc=1,vc=class extends La{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Oi(oc,lc,t,n);a.layers=this.layers,this.add(a);let s=new Oi(oc,lc,t,n);s.layers=this.layers,this.add(s);let r=new Oi(oc,lc,t,n);r.layers=this.layers,this.add(r);let o=new Oi(oc,lc,t,n);o.layers=this.layers,this.add(o);let l=new Oi(oc,lc,t,n);l.layers=this.layers,this.add(l);let c=new Oi(oc,lc,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===Na)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,a),v&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},mp=class extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var by="\\[\\]\\.:\\/",tR=new RegExp("["+by+"]","g"),Ty="[^"+by+"]",eR="[^"+by.replace("\\.","")+"]",nR=/((?:WC+[\/:])*)/.source.replace("WC",Ty),iR=/(WCOD+)?/.source.replace("WCOD",eR),aR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ty),sR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ty),rR=new RegExp("^"+nR+iR+aR+sR+"$"),oR=["material","materials","bones","map"],Yv=class{constructor(t,n,i){let a=i||gn.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},gn=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tR,"")}static parseTrackName(t){let n=rR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);oR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Yv;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yP=new Float32Array(1);var iT=new Fe,lf=class{constructor(t,n,i=0,a=1/0){this.ray=new Qu(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):oe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return iT.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iT),this}intersectObject(t,n=!0,i=[]){return Zv(t,this,i,n),i.sort(aT),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Zv(t[a],this,i,n);return i.sort(aT),i}};function aT(e,t){return e.distance-t.distance}function Zv(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)Zv(s[r],t,n,!0)}}var Kv=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};function Ey(e,t,n,i){let a=lR(i);switch(n){case dy:return e*t;case ff:return e*t/a.components*a.byteLength;case Mp:return e*t/a.components*a.byteLength;case qr:return e*t*2/a.components*a.byteLength;case bp:return e*t*2/a.components*a.byteLength;case py:return e*t*3/a.components*a.byteLength;case Ji:return e*t*4/a.components*a.byteLength;case Tp:return e*t*4/a.components*a.byteLength;case hf:case df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pf:case mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ap:case Rp:return Math.max(e,16)*Math.max(t,8)/4;case Ep:case wp:return Math.max(e,8)*Math.max(t,8)/2;case Cp:case Np:case Lp:case Up:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dp:case gf:case Pp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zp:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Vp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case kp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Yp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Kp:case Jp:case Qp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case jp:case $p:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vf:case t0:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lR(e){switch(e){case Fi:case cy:return{byteLength:1,components:1};case bc:case uy:case ui:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case ma:case _p:case Za:return{byteLength:4,components:1};case fy:case hy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function hE(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function uR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,y)=>p.start-y.start);let u=0;for(let p=1;p<d.length;p++){let y=d[u],_=d[p];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,y=d.length;p<y;p++){let _=d[p];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var fR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_R=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ER=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,PR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HR="gl_FragColor = linearToOutputTexel( gl_FragColor );",GR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hC=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_C=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TC=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dN=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_N=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ON=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:fR,alphahash_pars_fragment:hR,alphamap_fragment:dR,alphamap_pars_fragment:pR,alphatest_fragment:mR,alphatest_pars_fragment:gR,aomap_fragment:vR,aomap_pars_fragment:yR,batching_pars_vertex:_R,batching_vertex:xR,begin_vertex:SR,beginnormal_vertex:MR,bsdfs:bR,iridescence_fragment:TR,bumpmap_pars_fragment:ER,clipping_planes_fragment:AR,clipping_planes_pars_fragment:wR,clipping_planes_pars_vertex:RR,clipping_planes_vertex:CR,color_fragment:NR,color_pars_fragment:DR,color_pars_vertex:LR,color_vertex:UR,common:PR,defaultnormal_vertex:OR,displacementmap_pars_vertex:IR,displacementmap_vertex:zR,emissivemap_fragment:BR,emissivemap_pars_fragment:FR,colorspace_fragment:HR,colorspace_pars_fragment:GR,envmap_fragment:VR,envmap_common_pars_fragment:kR,envmap_pars_fragment:WR,envmap_pars_vertex:XR,envmap_physical_pars_fragment:nC,envmap_vertex:qR,fog_vertex:YR,fog_pars_vertex:ZR,fog_fragment:KR,fog_pars_fragment:JR,gradientmap_pars_fragment:QR,lightmap_pars_fragment:jR,lights_lambert_fragment:$R,lights_lambert_pars_fragment:tC,lights_pars_begin:eC,lights_toon_fragment:iC,lights_toon_pars_fragment:aC,lights_phong_fragment:sC,lights_phong_pars_fragment:rC,lights_physical_fragment:oC,lights_physical_pars_fragment:lC,lights_fragment_begin:cC,lights_fragment_maps:uC,lights_fragment_end:fC,lightprobes_pars_fragment:hC,logdepthbuf_fragment:dC,logdepthbuf_pars_fragment:pC,logdepthbuf_pars_vertex:mC,logdepthbuf_vertex:gC,map_fragment:vC,map_pars_fragment:yC,map_particle_fragment:_C,map_particle_pars_fragment:xC,metalnessmap_fragment:SC,metalnessmap_pars_fragment:MC,morphinstance_vertex:bC,morphcolor_vertex:TC,morphnormal_vertex:EC,morphtarget_pars_vertex:AC,morphtarget_vertex:wC,normal_fragment_begin:RC,normal_fragment_maps:CC,normal_pars_fragment:NC,normal_pars_vertex:DC,normal_vertex:LC,normalmap_pars_fragment:UC,clearcoat_normal_fragment_begin:PC,clearcoat_normal_fragment_maps:OC,clearcoat_pars_fragment:IC,iridescence_pars_fragment:zC,opaque_fragment:BC,packing:FC,premultiplied_alpha_fragment:HC,project_vertex:GC,dithering_fragment:VC,dithering_pars_fragment:kC,roughnessmap_fragment:WC,roughnessmap_pars_fragment:XC,shadowmap_pars_fragment:qC,shadowmap_pars_vertex:YC,shadowmap_vertex:ZC,shadowmask_pars_fragment:KC,skinbase_vertex:JC,skinning_pars_vertex:QC,skinning_vertex:jC,skinnormal_vertex:$C,specularmap_fragment:tN,specularmap_pars_fragment:eN,tonemapping_fragment:nN,tonemapping_pars_fragment:iN,transmission_fragment:aN,transmission_pars_fragment:sN,uv_pars_fragment:rN,uv_pars_vertex:oN,uv_vertex:lN,worldpos_vertex:cN,background_vert:uN,background_frag:fN,backgroundCube_vert:hN,backgroundCube_frag:dN,cube_vert:pN,cube_frag:mN,depth_vert:gN,depth_frag:vN,distance_vert:yN,distance_frag:_N,equirect_vert:xN,equirect_frag:SN,linedashed_vert:MN,linedashed_frag:bN,meshbasic_vert:TN,meshbasic_frag:EN,meshlambert_vert:AN,meshlambert_frag:wN,meshmatcap_vert:RN,meshmatcap_frag:CN,meshnormal_vert:NN,meshnormal_frag:DN,meshphong_vert:LN,meshphong_frag:UN,meshphysical_vert:PN,meshphysical_frag:ON,meshtoon_vert:IN,meshtoon_frag:zN,points_vert:BN,points_frag:FN,shadow_vert:HN,shadow_frag:GN,sprite_vert:VN,sprite_frag:kN},Pt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},xs={basic:{uniforms:Ai([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Ai([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Ai([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Ai([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Ai([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Ai([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Ai([Pt.points,Pt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Ai([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Ai([Pt.common,Pt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Ai([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Ai([Pt.sprite,Pt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:Ai([Pt.common,Pt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:Ai([Pt.lights,Pt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};xs.physical={uniforms:Ai([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var e0={r:0,b:0,g:0},WN=new Fe,dE=new pe;dE.set(-1,0,0,0,1,0,0,0,1);function XN(e,t,n,i,a,s){let r=new Ie(0),o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let x=m.backgroundBlurriness>0;S=t.get(S,x)}return S}function y(m){let S=!1,x=p(m);x===null?v(r,o):x&&x.isColor&&(v(x,1),S=!0);let A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(m,S){let x=p(S);x&&x.isCubeTexture?(c===void 0&&(c=new Ke(new $n(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ho(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WN.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dE),c.material.toneMapped=De.getTransfer(x.colorSpace)!==Ze,(h!==x||d!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ke(new af(2,2),new ci({name:"BackgroundMaterial",uniforms:Ho(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=De.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,S){m.getRGB(e0,My(e)),n.buffers.color.setClear(e0.r,e0.g,e0.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,v(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,v(r,o)},render:y,addToRenderList:_,dispose:f}}function qN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(O,B,V,N,X){let Q=!1,Y=d(O,N,V,B);s!==Y&&(s=Y,c(s.object)),Q=p(O,N,V,X),Q&&y(O,N,V,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,x(O,B,V,N),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function h(O){return e.deleteVertexArray(O)}function d(O,B,V,N){let X=N.wireframe===!0,Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);let Y=O.isInstancedMesh===!0?O.id:0,mt=Q[Y];mt===void 0&&(mt={},Q[Y]=mt);let tt=mt[V.id];tt===void 0&&(tt={},mt[V.id]=tt);let ct=tt[X];return ct===void 0&&(ct=u(l()),tt[X]=ct),ct}function u(O){let B=[],V=[],N=[];for(let X=0;X<n;X++)B[X]=0,V[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:N,object:O,attributes:{},index:null}}function p(O,B,V,N){let X=s.attributes,Q=B.attributes,Y=0,mt=V.getAttributes();for(let tt in mt)if(mt[tt].location>=0){let dt=X[tt],Xt=Q[tt];if(Xt===void 0&&(tt==="instanceMatrix"&&O.instanceMatrix&&(Xt=O.instanceMatrix),tt==="instanceColor"&&O.instanceColor&&(Xt=O.instanceColor)),dt===void 0||dt.attribute!==Xt||Xt&&dt.data!==Xt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==N}function y(O,B,V,N){let X={},Q=B.attributes,Y=0,mt=V.getAttributes();for(let tt in mt)if(mt[tt].location>=0){let dt=Q[tt];dt===void 0&&(tt==="instanceMatrix"&&O.instanceMatrix&&(dt=O.instanceMatrix),tt==="instanceColor"&&O.instanceColor&&(dt=O.instanceColor));let Xt={};Xt.attribute=dt,dt&&dt.data&&(Xt.data=dt.data),X[tt]=Xt,Y++}s.attributes=X,s.attributesNum=Y,s.index=N}function _(){let O=s.newAttributes;for(let B=0,V=O.length;B<V;B++)O[B]=0}function v(O){f(O,0)}function f(O,B){let V=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;V[O]=1,N[O]===0&&(e.enableVertexAttribArray(O),N[O]=1),X[O]!==B&&(e.vertexAttribDivisor(O,B),X[O]=B)}function m(){let O=s.newAttributes,B=s.enabledAttributes;for(let V=0,N=B.length;V<N;V++)B[V]!==O[V]&&(e.disableVertexAttribArray(V),B[V]=0)}function S(O,B,V,N,X,Q,Y){Y===!0?e.vertexAttribIPointer(O,B,V,X,Q):e.vertexAttribPointer(O,B,V,N,X,Q)}function x(O,B,V,N){_();let X=N.attributes,Q=V.getAttributes(),Y=B.defaultAttributeValues;for(let mt in Q){let tt=Q[mt];if(tt.location>=0){let ct=X[mt];if(ct===void 0&&(mt==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),mt==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),ct!==void 0){let dt=ct.normalized,Xt=ct.itemSize,ne=t.get(ct);if(ne===void 0)continue;let rt=ne.buffer,Nt=ne.type,Ot=ne.bytesPerElement,zt=Nt===e.INT||Nt===e.UNSIGNED_INT||ct.gpuType===_p;if(ct.isInterleavedBufferAttribute){let Dt=ct.data,kt=Dt.isInterleavedBuffer===!0?Dt.stride:Dt.itemSize,bn=ct.offset;if(Dt.isInstancedInterleavedBuffer||Dt.isInstancedBufferAttribute){for(let jt=0;jt<tt.locationSize;jt++)f(tt.location+jt,Dt.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let jt=0;jt<tt.locationSize;jt++)v(tt.location+jt);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let jt=0;jt<tt.locationSize;jt++)S(tt.location+jt,Xt/tt.locationSize,Nt,dt,kt*Ot,(bn+Xt/tt.locationSize*jt)*Ot,zt)}else{if(ct.isInstancedBufferAttribute){for(let Dt=0;Dt<tt.locationSize;Dt++)f(tt.location+Dt,ct.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Dt=0;Dt<tt.locationSize;Dt++)v(tt.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let Dt=0;Dt<tt.locationSize;Dt++)S(tt.location+Dt,Xt/tt.locationSize,Nt,dt,Xt*Ot,Xt/tt.locationSize*Dt*Ot,zt)}}else if(Y!==void 0){let dt=Y[mt];if(dt!==void 0)switch(dt.length){case 2:e.vertexAttrib2fv(tt.location,dt);break;case 3:e.vertexAttrib3fv(tt.location,dt);break;case 4:e.vertexAttrib4fv(tt.location,dt);break;default:e.vertexAttrib1fv(tt.location,dt)}}}}m()}function A(){P();for(let O in i){let B=i[O];for(let V in B){let N=B[V];for(let X in N){let Q=N[X];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete N[X]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let B=i[O.id];for(let V in B){let N=B[V];for(let X in N){let Q=N[X];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete N[X]}}delete i[O.id]}function g(O){for(let B in i){let V=i[B];for(let N in V){let X=V[N];if(X[O.id]===void 0)continue;let Q=X[O.id];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete X[O.id]}}}function b(O){for(let B in i){let V=i[B],N=O.isInstancedMesh===!0?O.id:0,X=V[N];if(X!==void 0){for(let Q in X){let Y=X[Q];for(let mt in Y)h(Y[mt].object),delete Y[mt];delete X[Q]}delete V[N],Object.keys(V).length===0&&delete i[B]}}}function P(){C(),r=!0,s!==a&&(s=a,c(s.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:v,disableUnusedAttributes:m}}function YN(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function ZN(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(g){return!(g!==Ji&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Fi&&g!==Za&&!b&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:x,maxSamples:A,samples:w}}function KN(e){let t=this,n=null,i=0,a=!1,s=!1,r=new qa,o=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||a;return a=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let y=d.clippingPlanes,_=d.clipIntersection,v=d.clipShadows,f=e.get(d);if(!a||y===null||y.length===0||s&&!v)s?h(null):c();else{let m=s?0:i,S=m*4,x=f.clippingState||null;l.value=x,x=h(y,u,S,p);for(let A=0;A!==S;++A)x[A]=n[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,y){let _=d!==null?d.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let f=p+_*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<f)&&(v=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)r.copy(d[S]).applyMatrix4(m,o),r.normal.toArray(v,x),v[x+3]=r.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}var Sf=class extends Cn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new $u(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $n(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bi,blending:Po});s.uniforms.tEquirect.value=n;let r=new Ke(a,s),o=n.minFilter;return n.minFilter===pa&&(n.minFilter=Pn),new vc(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}},XT=256,JN=3,QN=20,pE=256,mE=16,jN=3,$N=new J,tD=new Ie,i0=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vc(1,10,null),this._boxMesh=new Ke(new $n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=$N}=s,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,y=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(tD));let v=new vc(i,a,h);return v.position.copy(o),v.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=y,t.background=_,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ZT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=YT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(XT,HT(t))}_fromTexture(t,n){t.mapping===Bo||t.mapping===Mc?this._setSize(t.image.length===0?XT:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=qT(t,!1,!1),i=Math.log2(t)-JN;for(let a=0;a<=i;a++)n.texture.mipmaps.push({width:t>>a,height:t>>a});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=qT(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let a=this._boxMesh,s=this._cubeCamera;a.material=i,s.renderTarget=t,s.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),s.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===Bo||t.mapping===Mc?(this._cubemapMaterial===null&&(this._cubemapMaterial=ZT()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=YT()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=eD(),this._integrationMaterial=nD());let n=this._cubeSize,i=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/mE);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-jN)s.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(pE*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=iD());let i=this._blurMaterial,a=i.uniforms,s=this._sourceTarget;a.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,a.envMap.value=s.texture,this._renderCube(t,0,i),a.envMap.value=t.texture,this._renderCube(s,0,i)}};function qT(e,t,n){return new Sf(e,{minFilter:pa,generateMipmaps:t,type:ui,colorSpace:Co,depthBuffer:n})}function Mf(e,t,n){return new ci({name:e,uniforms:t,vertexShader:Te.cube_vert,fragmentShader:n,side:Bi,blending:Po,depthTest:!1,depthWrite:!1})}function eD(){return Mf("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pE}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nD(){return Mf("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mE}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iD(){return Mf("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QN}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function YT(){return Mf("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ZT(){return Mf("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function aD(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===gp||p===vp)if(t.has(u)){let y=t.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let _=new Sf(y.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,y=p===gp||p===vp,_=p===Bo||p===Mc;if(y||_){let v=n.get(u),f=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new i0(e)),v=y?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{let m=u.image;return y&&m&&m.height>0||_&&m&&l(m)?(i===null&&(i=new i0(e)),v=y?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",h),v.texture):null}}}return u}function o(u,p){return p===gp?u.mapping=Bo:p===vp&&(u.mapping=Mc),u}function l(u){let p=0,y=6;for(let _=0;_<y;_++)u[_]!==void 0&&p++;return p===y}function c(u){let p=u.target;p.removeEventListener("dispose",c);let y=t.get(p);y!==void 0&&(t.delete(p),y.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let y=n.get(p);y!==void 0&&(n.delete(p),y.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function sD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Vu("WebGLRenderer: "+i+" extension not supported."),a}}}function rD(e,t,n,i){let a={},s=new WeakMap,r=new FinalizationRegistry(y=>delete a[y]);function o(y){l(y.target)}function l(y){y.index!==null&&t.remove(y.index);for(let v in y.attributes)t.remove(y.attributes[v]);y.removeEventListener("dispose",o),delete a[y.id],r.unregister(y);let _=s.get(y);_&&(t.remove(_),s.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function c(y,_){return a[_.id]!==void 0||(_.addEventListener("dispose",o),a[_.id]=new WeakRef(_),r.register(_,_.id,_),n.memory.geometries++),_}function h(y){let _=y.attributes;for(let v in _)t.update(_[v],e.ARRAY_BUFFER)}function d(y){let _=y.index,v=y.attributes.position,f=0;if(v===void 0)return;let m=_!==null?_.array.length:v.array.length/3-1,S=v.count>=65535?Ju:Ku,x=new S(Math.ceil(m/3)*6,1),A=x.array;if(_!==null){let g=_.array;f=_.version;for(let b=0,P=0;b<m;b+=3){let C=g[b+0],O=g[b+1],B=g[b+2];A[P++]=C,A[P++]=O,A[P++]=O,A[P++]=B,A[P++]=B,A[P++]=C}}else{f=v.version;for(let g=0,b=0;g<m;g+=3){let P=g+0,C=g+1,O=g+2;A[b++]=P,A[b++]=C,A[b++]=C,A[b++]=O,A[b++]=O,A[b++]=P}}x.version=f;let w=s.get(y);w&&t.remove(w),s.set(y,x)}function u(y){let _=s.get(y);if(_){let v=y.index;v!==null&&_.version<v.version&&d(y)}else d(y);return s.get(y)}function p(){for(let y in a){let _=a[y].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function oD(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,s,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let _=0;for(let v=0;v<p;v++)_+=u[v];n.update(_,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:oe("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function cD(e,t,n){let i=new WeakMap,a=new vn;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;p===!0&&(S=1),y===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*A*4*d),g=new Yu(w,x,A,d);g.type=Za,g.needsUpdate=!0;let b=S*4;for(let C=0;C<d;C++){let O=v[C],B=f[C],V=m[C],N=x*A*4*C;for(let X=0;X<O.count;X++){let Q=X*b;p===!0&&(a.fromBufferAttribute(O,X),w[N+Q+0]=a.x,w[N+Q+1]=a.y,w[N+Q+2]=a.z,w[N+Q+3]=0),y===!0&&(a.fromBufferAttribute(B,X),w[N+Q+4]=a.x,w[N+Q+5]=a.y,w[N+Q+6]=a.z,w[N+Q+7]=0),_===!0&&(a.fromBufferAttribute(V,X),w[N+Q+8]=a.x,w[N+Q+9]=a.y,w[N+Q+10]=a.z,w[N+Q+11]=V.itemSize===4?a.w:1)}}u={count:d,texture:g,size:new le(x,A)},i.set(o,u),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function uD(e,t,n,i,a){let s=new WeakMap;function r(c){let h=a.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var fD={[ey]:"LINEAR_TONE_MAPPING",[ny]:"REINHARD_TONE_MAPPING",[iy]:"CINEON_TONE_MAPPING",[ay]:"ACES_FILMIC_TONE_MAPPING",[ry]:"AGX_TONE_MAPPING",[oy]:"NEUTRAL_TONE_MAPPING",[sy]:"CUSTOM_TONE_MAPPING"};function hD(e,t,n,i,a,s){let r=new Cn(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ei;h.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wn([0,2,0,0,2,0],2));let d=new np({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ke(h,d),p=new Wr(-1,1,1,-1,0,1),y=null,_=null,v=!1,f,m=null,S=[],x=!1;this.setSize=function(A,w){r.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<S.length;g++){let b=S[g];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){S=A,x=S.length>0&&S[0].isRenderPass===!0;let w=r.width,g=r.height;S.length>0&&o===null&&(o=new Cn(w,g,{type:ui,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(w,g,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let b=a===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ya(w,g),s===!0&&(c.format=Zs,c.type=Fo)),r.dispose(),r.depthTexture=b?c:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let C=S[P];C.setSize&&C.setSize(w,g),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(v||A.toneMapping===ys&&S.length===0)return!1;if(m=w,w!==null){let g=w.width,b=w.height;(r.width!==g||r.height!==b)&&this.setSize(g,b)}return x===!1&&A.setRenderTarget(r),f=A.toneMapping,A.toneMapping=ys,!0},this.hasRenderPass=function(){return x},this.end=function(A,w){A.toneMapping=f,v=!0;let g=r,b=o;for(let P=0;P<S.length;P++){let C=S[P];C.enabled!==!1&&(C.render(A,b,g,w),C.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(y!==A.outputColorSpace||_!==A.toneMapping){y=A.outputColorSpace,_=A.toneMapping,d.defines={},De.getTransfer(y)===Ze&&(d.defines.SRGB_TRANSFER="");let P=fD[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(m),A.render(u,p),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var gE=new zi,vE=new Ya(1,1),yE=new ef(1),_E=new Yu,xE=new $d,SE=new $u,KT=[],JT=[],QT=new Float32Array(16),jT=new Float32Array(9),$T=new Float32Array(4);function Ac(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=KT[a];if(s===void 0&&(s=new Float32Array(a),KT[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function ti(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ei(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function s0(e,t){let n=JT[t];n===void 0&&(n=new Int32Array(t),JT[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function dD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ti(n,t))return;e.uniform2fv(this.addr,t),ei(n,t)}}function mD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ti(n,t))return;e.uniform3fv(this.addr,t),ei(n,t)}}function gD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ti(n,t))return;e.uniform4fv(this.addr,t),ei(n,t)}}function vD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ti(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ei(n,t)}else{if(ti(n,i))return;$T.set(i),e.uniformMatrix2fv(this.addr,!1,$T),ei(n,i)}}function yD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ti(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ei(n,t)}else{if(ti(n,i))return;jT.set(i),e.uniformMatrix3fv(this.addr,!1,jT),ei(n,i)}}function _D(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ti(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ei(n,t)}else{if(ti(n,i))return;QT.set(i),e.uniformMatrix4fv(this.addr,!1,QT),ei(n,i)}}function xD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function SD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ti(n,t))return;e.uniform2iv(this.addr,t),ei(n,t)}}function MD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ti(n,t))return;e.uniform3iv(this.addr,t),ei(n,t)}}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ti(n,t))return;e.uniform4iv(this.addr,t),ei(n,t)}}function TD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ED(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ti(n,t))return;e.uniform2uiv(this.addr,t),ei(n,t)}}function AD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ti(n,t))return;e.uniform3uiv(this.addr,t),ei(n,t)}}function wD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ti(n,t))return;e.uniform4uiv(this.addr,t),ei(n,t)}}function r0(e){return e.version===0&&(e.compareFunction=yy,e.needsUpdate=!0),e}function RD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?s=r0(vE):s=gE,n.setTexture2D(t||s,a)}function CD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||xE,a)}function ND(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_CUBE_SHADOW?s=r0(yE):s=SE,n.setTextureCube(t||s,a)}function DD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||_E,a)}function LD(e){switch(e){case 5126:return dD;case 35664:return pD;case 35665:return mD;case 35666:return gD;case 35674:return vD;case 35675:return yD;case 35676:return _D;case 5124:case 35670:return xD;case 35667:case 35671:return SD;case 35668:case 35672:return MD;case 35669:case 35673:return bD;case 5125:return TD;case 36294:return ED;case 36295:return AD;case 36296:return wD;case 35678:case 36198:case 36298:case 36306:case 35682:return RD;case 35679:case 36299:case 36307:return CD;case 35680:case 36300:case 36308:case 36293:return ND;case 36289:case 36303:case 36311:case 36292:return DD}}function UD(e,t){e.uniform1fv(this.addr,t)}function PD(e,t){let n=Ac(t,this.size,2);e.uniform2fv(this.addr,n)}function OD(e,t){let n=Ac(t,this.size,3);e.uniform3fv(this.addr,n)}function ID(e,t){let n=Ac(t,this.size,4);e.uniform4fv(this.addr,n)}function zD(e,t){let n=Ac(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function BD(e,t){let n=Ac(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function FD(e,t){let n=Ac(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function HD(e,t){e.uniform1iv(this.addr,t)}function GD(e,t){e.uniform2iv(this.addr,t)}function VD(e,t){e.uniform3iv(this.addr,t)}function kD(e,t){e.uniform4iv(this.addr,t)}function WD(e,t){e.uniform1uiv(this.addr,t)}function XD(e,t){e.uniform2uiv(this.addr,t)}function qD(e,t){e.uniform3uiv(this.addr,t)}function YD(e,t){e.uniform4uiv(this.addr,t)}function ZD(e,t,n){let i=this.cache,a=t.length,s=s0(n,a);ti(i,s)||(e.uniform1iv(this.addr,s),ei(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=r0(vE):r=gE;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function KD(e,t,n){let i=this.cache,a=t.length,s=s0(n,a);ti(i,s)||(e.uniform1iv(this.addr,s),ei(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||xE,s[r])}function JD(e,t,n){let i=this.cache,a=t.length,s=s0(n,a);ti(i,s)||(e.uniform1iv(this.addr,s),ei(i,s));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=r0(yE):r=SE;for(let o=0;o!==a;++o)n.setTextureCube(t[o]||r,s[o])}function QD(e,t,n){let i=this.cache,a=t.length,s=s0(n,a);ti(i,s)||(e.uniform1iv(this.addr,s),ei(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||_E,s[r])}function jD(e){switch(e){case 5126:return UD;case 35664:return PD;case 35665:return OD;case 35666:return ID;case 35674:return zD;case 35675:return BD;case 35676:return FD;case 5124:case 35670:return HD;case 35667:case 35671:return GD;case 35668:case 35672:return VD;case 35669:case 35673:return kD;case 5125:return WD;case 36294:return XD;case 36295:return qD;case 36296:return YD;case 35678:case 36198:case 36298:case 36306:case 35682:return ZD;case 35679:case 36299:case 36307:return KD;case 35680:case 36300:case 36308:case 36293:return JD;case 36289:case 36303:case 36311:case 36292:return QD}}var Ry=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LD(n.type)}},Cy=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jD(n.type)}},Ny=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},Ay=/(\w+)(\])?(\[|\.)?/g;function tE(e,t){e.seq.push(t),e.map[t.id]=t}function $D(e,t,n){let i=e.name,a=i.length;for(Ay.lastIndex=0;;){let s=Ay.exec(i),r=Ay.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){tE(n,c===void 0?new Ry(o,e,t):new Cy(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Ny(o),tE(n,d)),n=d}}}var Ec=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);$D(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function eE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var tL=37297,eL=0;function nL(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var nE=new pe;function iL(e){De._getMatrix(nE,De.workingColorSpace,e);let t=`mat3( ${nE.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(e)){case Wu:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function iE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+nL(e.getShaderSource(t),o)}else return s}function aL(e,t){let n=iL(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sL={[ey]:"Linear",[ny]:"Reinhard",[iy]:"Cineon",[ay]:"ACESFilmic",[ry]:"AgX",[oy]:"Neutral",[sy]:"Custom"};function rL(e,t){let n=sL[t];return n===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var n0=new J;function oL(){De.getLuminanceCoefficients(n0);let e=n0.x.toFixed(4),t=n0.y.toFixed(4),n=n0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xf).join(`
`)}function cL(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function uL(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function xf(e){return e!==""}function aE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dy(e){return e.replace(fL,hL)}function hL(e,t){let n=Te[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Dy(n)}var dL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rE(e){return e.replace(dL,pL)}function pL(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function oE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var mL={[cf]:"SHADOWMAP_TYPE_PCF",[yc]:"SHADOWMAP_TYPE_VSM"};function gL(e){return mL[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vL={[Mc]:"ENVMAP_MODE_REFRACTION"};function yL(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":vL[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _L={[ty]:"ENVMAP_BLENDING_MULTIPLY",[TT]:"ENVMAP_BLENDING_MIX",[ET]:"ENVMAP_BLENDING_ADD"};function xL(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":_L[e.combine]||"ENVMAP_BLENDING_NONE"}function SL(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=gL(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yL(n),d=xL(n),u=lL(n),p=cL(s),y=a.createProgram(),_,v,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(xf).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(xf).join(`
`),v.length>0&&(v+=`
`)):(_=[oE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xf).join(`
`),v=[oE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ys?"#define TONE_MAPPING":"",n.toneMapping!==ys?Te.tonemapping_pars_fragment:"",n.toneMapping!==ys?rL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,aL("linearToOutputTexel",n.outputColorSpace),oL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xf).join(`
`)),r=Dy(r),r=aE(r,n),r=sE(r,n),o=Dy(o),o=aE(o,n),o=sE(o,n),r=rE(r),o=rE(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===_y?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_y?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let m=f+_+r,S=f+v+o,x=eE(a,a.VERTEX_SHADER,m),A=eE(a,a.FRAGMENT_SHADER,S);a.attachShader(y,x),a.attachShader(y,A),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function w(C){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(y)||"",B=a.getShaderInfoLog(x)||"",V=a.getShaderInfoLog(A)||"",N=O.trim(),X=B.trim(),Q=V.trim(),Y=!0,mt=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,x,A);else{let tt=iE(a,x,"vertex"),ct=iE(a,A,"fragment");oe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+tt+`
`+ct)}else N!==""?te("WebGLProgram: Program Info Log:",N):(X===""||Q==="")&&(mt=!1);mt&&(C.diagnostics={runnable:Y,programLog:N,vertexShader:{log:X,prefix:_},fragmentShader:{log:Q,prefix:v}})}a.deleteShader(x),a.deleteShader(A),g=new Ec(a,y),b=uL(a,y)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(y,tL)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eL++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=A,this}var ML=0,Ly=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Uy(t),n.set(t,i)),i}},Uy=class{constructor(t){this.id=ML++,this.code=t,this.usedTimes=0}};function bL(e){return e===qr||e===gf||e===vf}function TL(e,t,n,i,a,s){let r=new pc,o=new Ly,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,P,C,O,B){let V=C.fog,N=O.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Y=t.get(g.envMap||X,Q),mt=u[g.type],tt=i.precision;g.precision!==null&&(tt=i.getMaxPrecision(g.precision),tt!==g.precision&&te("WebGLProgram.getParameters:",g.precision,"not supported, using",tt,"instead."));let ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=ct!==void 0?ct.length:0,Xt=0;N.morphAttributes.position!==void 0&&(Xt=1),N.morphAttributes.normal!==void 0&&(Xt=2),N.morphAttributes.color!==void 0&&(Xt=3);let ne,rt,Nt,Ot;if(mt){let Lt=xs[mt];ne=Lt.vertexShader,rt=Lt.fragmentShader}else{ne=g.vertexShader,rt=g.fragmentShader;let Lt=o.getVertexShaderStage(g),Ve=o.getFragmentShaderStage(g);o.update(g,Lt,Ve),Nt=Lt.id,Ot=Ve.id}let zt=e.getRenderTarget(),Dt=e.state.buffers.depth.getReversed(),kt=O.isInstancedMesh===!0,bn=O.isBatchedMesh===!0,jt=!!g.map,Pe=!!g.matcap,ue=!!Y,be=ue&&Y.isPMREMTexture===!0,Xn=!!g.aoMap,nn=!!g.lightMap,hn=!!g.bumpMap&&g.wireframe===!1,Ge=!!g.normalMap,Jt=!!g.displacementMap,_n=!!g.emissiveMap,fi=!!g.metalnessMap,_i=!!g.roughnessMap,Hi=g.anisotropy>0,z=g.clearcoat>0,wi=g.diffuseRoughness>0,_e=g.dispersion>0,ie=g.retroreflectivity>0,Mt=g.iridescence>0,dn=g.sheen>0,Qt=g.transmission>0,$t=Hi&&!!g.anisotropyMap,R=z&&!!g.clearcoatMap,M=z&&!!g.clearcoatNormalMap,k=z&&!!g.clearcoatRoughnessMap,yt=wi&&!!g.diffuseRoughnessMap,ot=Mt&&!!g.iridescenceMap,Tt=Mt&&!!g.iridescenceThicknessMap,Et=dn&&!!g.sheenColorMap,nt=dn&&!!g.sheenRoughnessMap,it=!!g.specularMap,ut=!!g.specularColorMap,D=!!g.specularIntensityMap,st=Qt&&!!g.transmissionMap,et=Qt&&!!g.thicknessMap,St=!!g.gradientMap,xt=!!g.alphaMap,bt=g.alphaTest>0,qt=!!g.alphaHash,Ct=!!g.extensions,_t=ys;g.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(_t=e.toneMapping);let Kt=be?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,fe={shaderID:mt,shaderType:g.type,shaderName:g.name,vertexShader:ne,fragmentShader:rt,defines:g.defines,customVertexShaderID:Nt,customFragmentShaderID:Ot,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:tt,batching:bn,batchingColor:bn&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,outputColorSpace:zt===null?e.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:jt,matcap:Pe,envMap:ue,envMapMode:ue&&Y.mapping,envMapPMREM:be,envMapMaxLod:be?Kt.length-1:null,envMapSize:be?Kt[0].width:null,aoMap:Xn,lightMap:nn,bumpMap:hn,normalMap:Ge,displacementMap:Jt,emissiveMap:_n,normalMapObjectSpace:Ge&&g.normalMapType===RT,normalMapTangentSpace:Ge&&g.normalMapType===my,packedNormalMap:Ge&&g.normalMapType===my&&bL(g.normalMap.format),metalnessMap:fi,roughnessMap:_i,anisotropy:Hi,anisotropyMap:$t,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:wi,diffuseRoughnessMap:yt,dispersion:_e,retroreflection:ie,iridescence:Mt,iridescenceMap:ot,iridescenceThicknessMap:Tt,sheen:dn,sheenColorMap:Et,sheenRoughnessMap:nt,specularMap:it,specularColorMap:ut,specularIntensityMap:D,transmission:Qt,transmissionMap:st,thicknessMap:et,gradientMap:St,opaque:g.transparent===!1&&g.blending===_c&&g.alphaToCoverage===!1,alphaMap:xt,alphaTest:bt,alphaHash:qt,combine:g.combine,mapUv:jt&&p(g.map.channel),aoMapUv:Xn&&p(g.aoMap.channel),lightMapUv:nn&&p(g.lightMap.channel),bumpMapUv:hn&&p(g.bumpMap.channel),normalMapUv:Ge&&p(g.normalMap.channel),displacementMapUv:Jt&&p(g.displacementMap.channel),emissiveMapUv:_n&&p(g.emissiveMap.channel),metalnessMapUv:fi&&p(g.metalnessMap.channel),roughnessMapUv:_i&&p(g.roughnessMap.channel),anisotropyMapUv:$t&&p(g.anisotropyMap.channel),clearcoatMapUv:R&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:yt&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:nt&&p(g.sheenRoughnessMap.channel),specularMapUv:it&&p(g.specularMap.channel),specularColorMapUv:ut&&p(g.specularColorMap.channel),specularIntensityMapUv:D&&p(g.specularIntensityMap.channel),transmissionMapUv:st&&p(g.transmissionMap.channel),thicknessMapUv:et&&p(g.thicknessMap.channel),alphaMapUv:xt&&p(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ge||Hi),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(jt||xt),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&Ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:_t,decodeVideoTexture:jt&&g.map.isVideoTexture===!0&&De.getTransfer(g.map.colorSpace)===Ze,decodeVideoTextureEmissive:_n&&g.emissiveMap.isVideoTexture===!0&&De.getTransfer(g.emissiveMap.colorSpace)===Ze,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Nn,flipSided:g.side===Bi,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ct&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&g.extensions.multiDraw===!0||bn)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function _(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)b.push(P),b.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(v(b,g),f(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function v(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function f(g,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function m(g){let b=u[g.type],P;if(b){let C=xs[b];P=VT.clone(C.uniforms)}else P=g.uniforms;return P}function S(g,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new SL(e,b,g,a),c.push(P),h.set(b,P)),P}function x(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:m,acquireProgram:S,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:w}}function EL(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function AL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function lE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function cE(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,y,_,v,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:y,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:v,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=y,m.materialVariant=r(u),m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function l(u,p,y,_,v,f,m){m.reversedDepth===!0&&(v=-v);let S=o(u,p,y,_,v,f);y.transmission>0?i.push(S):y.transparent===!0?a.push(S):n.push(S)}function c(u,p,y,_,v,f){let m=o(u,p,y,_,v,f);y.transmission>0?i.unshift(m):y.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||AL),i.length>1&&i.sort(p||lE),a.length>1&&a.sort(p||lE)}function d(){for(let u=t,p=e.length;u<p;u++){let y=e[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function wL(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new cE,e.set(i,[r])):a>=s.length?(r=new cE,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function RL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new J,color:new Ie};break;case"SpotLight":n={position:new J,direction:new J,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function CL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var NL=0;function DL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function LL(e){let t=new RL,n=CL(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let a=new J,s=new Fe,r=new Fe;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,y=0,_=0,v=0,f=0,m=0,S=0,x=0,A=0,w=0,g=0,b=0,P=0,C=0;c.sort(DL);for(let B=0,V=c.length;B<V;B++){let N=c[B],X=N.color,Q=N.intensity,Y=N.distance,mt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qr?mt=N.shadow.map.texture:mt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=X.r*Q,d+=X.g*Q,u+=X.b*Q;else if(N.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(N.sh.coefficients[tt],Q);C++}else if(N.isSunLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ct=N.shadow,dt=n.get(N);dt.shadowIntensity=ct.intensity,dt.shadowBias=ct.bias,dt.shadowNormalBias=ct.normalBias,dt.shadowRadius=ct.radius,dt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),i.sunShadow[y]=dt,i.sunShadowMap[y]=mt;let Xt=ct.getViewportCount();for(let ne=0;ne<Xt;ne++)i.sunShadowMatrix[_+ne]=ct.getMatrix(ne),i.sunShadowCascade[_+ne]=ct._cascadeData[ne];_+=Xt,y++}i.sun[p]=tt,p++}else if(N.isDirectionalLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ct=N.shadow,dt=n.get(N);dt.shadowIntensity=ct.intensity,dt.shadowBias=ct.bias,dt.shadowNormalBias=ct.normalBias,dt.shadowRadius=ct.radius,dt.shadowMapSize=ct.mapSize,i.directionalShadow[v]=dt,i.directionalShadowMap[v]=mt,i.directionalShadowMatrix[v]=N.shadow.matrix,A++}i.directional[v]=tt,v++}else if(N.isSpotLight){let tt=t.get(N);tt.position.setFromMatrixPosition(N.matrixWorld),tt.color.copy(X).multiplyScalar(Q),tt.distance=Y,tt.coneCos=Math.cos(N.angle),tt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),tt.decay=N.decay,i.spot[m]=tt;let ct=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,ct.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[m]=ct.matrix,N.castShadow){let dt=n.get(N);dt.shadowIntensity=ct.intensity,dt.shadowBias=ct.bias,dt.shadowNormalBias=ct.normalBias,dt.shadowRadius=ct.radius,dt.shadowMapSize=ct.mapSize,i.spotShadow[m]=dt,i.spotShadowMap[m]=mt,g++}m++}else if(N.isRectAreaLight){let tt=t.get(N);tt.color.copy(X).multiplyScalar(Q),tt.halfWidth.set(N.width*.5,0,0),tt.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=tt,S++}else if(N.isPointLight){let tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),tt.distance=N.distance,tt.decay=N.decay,N.castShadow){let ct=N.shadow,dt=n.get(N);dt.shadowIntensity=ct.intensity,dt.shadowBias=ct.bias,dt.shadowNormalBias=ct.normalBias,dt.shadowRadius=ct.radius,dt.shadowMapSize=ct.mapSize,dt.shadowCameraNear=ct.camera.near,dt.shadowCameraFar=ct.camera.far,i.pointShadow[f]=dt,i.pointShadowMap[f]=mt,i.pointShadowMatrix[f]=N.shadow.matrix,w++}i.point[f]=tt,f++}else if(N.isHemisphereLight){let tt=t.get(N);tt.skyColor.copy(N.color).multiplyScalar(Q),tt.groundColor.copy(N.groundColor).multiplyScalar(Q),i.hemi[x]=tt,x++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let O=i.hash;(O.sunLength!==p||O.directionalLength!==v||O.pointLength!==f||O.spotLength!==m||O.rectAreaLength!==S||O.hemiLength!==x||O.numSunShadows!==y||O.numDirectionalShadows!==A||O.numPointShadows!==w||O.numSpotShadows!==g||O.numSpotMaps!==b||O.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=v,i.spot.length=m,i.rectArea.length=S,i.point.length=f,i.hemi.length=x,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,O.sunLength=p,O.directionalLength=v,O.pointLength=f,O.spotLength=m,O.rectAreaLength=S,O.hemiLength=x,O.numSunShadows=y,O.numDirectionalShadows=A,O.numPointShadows=w,O.numSpotShadows=g,O.numSpotMaps=b,O.numLightProbes=C,i.version=NL++)}function l(c,h){let d=0,u=0,p=0,y=0,_=0,v=0,f=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let x=c[m];if(x.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),u++}else if(x.isSpotLight){let A=i.spot[y];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),y++}else if(x.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),r.identity(),s.copy(x.matrixWorld),s.premultiply(f),r.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let A=i.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:i}}function uE(e){let t=new LL(e),n=[],i=[],a=[];function s(d){h.camera=d,n.length=0,i.length=0,a.length=0}function r(d){d.isLightProbeGrid?a.push(d):n.push(d)}function o(d){i.push(d)}function l(){t.setup(n),a.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function UL(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new uE(e),t.set(a,[o])):s>=r.length?(o=new uE(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var PL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IL=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],zL=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],fE=new Fe,_f=new J,wy=new J;function BL(e,t,n){let i=new Uo,a=new le,s=new le,r=new vn,o=new ip,l=new ap,c={},h=n.maxTextureSize,d={[Xr]:Bi,[Bi]:Xr,[Nn]:Nn},u=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:PL,fragmentShader:OL}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let y=new Ei;y.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ke(y,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let f=this.type;this.render=function(w,g,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===oT&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cf);let P=e.getRenderTarget(),C=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Po),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=f!==this.type;V&&g.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=w.length;N<X;N++){let Q=w[N],Y=Q.shadow;if(Y===void 0){te("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);let mt=Y.getFrameExtents();a.multiply(mt),s.copy(Y.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/mt.x),a.x=s.x*mt.x,Y.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/mt.y),a.y=s.y*mt.y,Y.mapSize.y=s.y));let tt=e.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=tt,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===yc){if(Q.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Cn(a.x,a.y,{format:qr,type:ui,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new Ya(a.x,a.y,Za),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=qs,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=li,Y.map.depthTexture.magFilter=li}else Q.isPointLight?(Y.map=new Sf(a.x),Y.map.depthTexture=new ef(a.x,ma)):(Y.map=new Cn(a.x,a.y),Y.map.depthTexture=new Ya(a.x,a.y,ma)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=qs,this.type===cf?(Y.map.depthTexture.compareFunction=tt?vy:gy,Y.map.depthTexture.minFilter=Pn,Y.map.depthTexture.magFilter=Pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=li,Y.map.depthTexture.magFilter=li);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==a.x||Y.map.height!==a.y)&&Y.map.setSize(a.x,a.y);let ct=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,b);let dt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:b.layers;for(let Xt=0;Xt<ct;Xt++){let ne=Y.getCamera(Xt);if(Q.isPointLight){let rt=Y.camera,Nt=Y.matrix,Ot=Q.distance||rt.far;Ot!==rt.far&&(rt.far=Ot,rt.updateProjectionMatrix()),_f.setFromMatrixPosition(Q.matrixWorld),rt.position.copy(_f),wy.copy(rt.position),wy.add(IL[Xt]),rt.up.copy(zL[Xt]),rt.lookAt(wy),rt.updateMatrixWorld(),Nt.makeTranslation(-_f.x,-_f.y,-_f.z),fE.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(fE,rt.coordinateSystem,rt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)e.setRenderTarget(Y.map,Xt),e.clear();else{Xt===0&&(e.setRenderTarget(Y.map),e.clear());let rt=Y.getViewport(Xt);r.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),B.viewport(r)}i=Y.getFrustum(Xt),x(g,b,ne,Q,dt,this.type)}Y.isPointLightShadow!==!0&&this.type===yc&&m(Y,b),Y.needsUpdate=!1}f=this.type,v.needsUpdate=!1,e.setRenderTarget(P,C,O)};function m(w,g){let b=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Cn(a.x,a.y,{format:qr,type:ui}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(g,null,b,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(g,null,b,p,_,null)}function S(w,g,b,P){let C=null,O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)C=O;else if(C=b.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=C.uuid,V=g.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let X=N[V];X===void 0&&(X=C.clone(),N[V]=X,g.addEventListener("dispose",A)),C=X}if(C.visible=g.visible,C.wireframe=g.wireframe,P===yc?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:d[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=e.properties.get(C);B.light=b}return C}function x(w,g,b,P,C,O){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===yc)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let N=t.update(w),X=w.material;if(Array.isArray(X)){let Q=N.groups;for(let Y=0,mt=Q.length;Y<mt;Y++){let tt=Q[Y],ct=X[tt.materialIndex];if(ct&&ct.visible){let dt=S(w,ct,P,O);w.onBeforeShadow(e,w,g,b,N,dt,tt),e.renderBufferDirect(b,null,N,dt,w,tt),w.onAfterShadow(e,w,g,b,N,dt,tt)}}}else if(X.visible){let Q=S(w,X,P,O);w.onBeforeShadow(e,w,g,b,N,Q,null),e.renderBufferDirect(b,null,N,Q,w,null),w.onAfterShadow(e,w,g,b,N,Q,null)}}let V=w.children;for(let N=0,X=V.length;N<X;N++)x(V[N],g,b,P,C,O)}function A(w){w.target.removeEventListener("dispose",A);for(let b in c){let P=c[b],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function FL(e,t){function n(){let D=!1,st=new vn,et=null,St=new vn(0,0,0,0);return{setMask:function(xt){et!==xt&&!D&&(e.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){D=xt},setClear:function(xt,bt,qt,Ct,_t){_t===!0&&(xt*=Ct,bt*=Ct,qt*=Ct),st.set(xt,bt,qt,Ct),St.equals(st)===!1&&(e.clearColor(xt,bt,qt,Ct),St.copy(st))},reset:function(){D=!1,et=null,St.set(-1,0,0,0)}}}function i(){let D=!1,st=!1,et=null,St=null,xt=null;return{setReversed:function(bt){if(st!==bt){let qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),st=bt;let Ct=xt;xt=null,this.setClear(Ct)}},getReversed:function(){return st},setTest:function(bt){bt?Dt(e.DEPTH_TEST):kt(e.DEPTH_TEST)},setMask:function(bt){et!==bt&&!D&&(e.depthMask(bt),et=bt)},setFunc:function(bt){if(st&&(bt=FT[bt]),St!==bt){switch(bt){case Gd:e.depthFunc(e.NEVER);break;case Vd:e.depthFunc(e.ALWAYS);break;case kd:e.depthFunc(e.LESS);break;case uc:e.depthFunc(e.LEQUAL);break;case Wd:e.depthFunc(e.EQUAL);break;case Xd:e.depthFunc(e.GEQUAL);break;case qd:e.depthFunc(e.GREATER);break;case Yd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}St=bt}},setLocked:function(bt){D=bt},setClear:function(bt){xt!==bt&&(xt=bt,st&&(bt=1-bt),e.clearDepth(bt))},reset:function(){D=!1,et=null,St=null,xt=null,st=!1}}}function a(){let D=!1,st=null,et=null,St=null,xt=null,bt=null,qt=null,Ct=null,_t=null;return{setTest:function(Kt){D||(Kt?Dt(e.STENCIL_TEST):kt(e.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!D&&(e.stencilMask(Kt),st=Kt)},setFunc:function(Kt,fe,Lt){(et!==Kt||St!==fe||xt!==Lt)&&(e.stencilFunc(Kt,fe,Lt),et=Kt,St=fe,xt=Lt)},setOp:function(Kt,fe,Lt){(bt!==Kt||qt!==fe||Ct!==Lt)&&(e.stencilOp(Kt,fe,Lt),bt=Kt,qt=fe,Ct=Lt)},setLocked:function(Kt){D=Kt},setClear:function(Kt){_t!==Kt&&(e.clearStencil(Kt),_t=Kt)},reset:function(){D=!1,st=null,et=null,St=null,xt=null,bt=null,qt=null,Ct=null,_t=null}}}let s=new n,r=new i,o=new a,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,y=[],_=null,v=!1,f=null,m=null,S=null,x=null,A=null,w=null,g=null,b=new Ie(0,0,0),P=0,C=!1,O=null,B=null,V=null,N=null,X=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,mt=0,tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Y=mt>=1):tt.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Y=mt>=2);let ct=null,dt={},Xt=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),rt=new vn().fromArray(Xt),Nt=new vn().fromArray(ne);function Ot(D,st,et,St){let xt=new Uint8Array(4),bt=e.createTexture();e.bindTexture(D,bt),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let qt=0;qt<et;qt++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,St,0,e.RGBA,e.UNSIGNED_BYTE,xt):e.texImage2D(st+qt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xt);return bt}let zt={};zt[e.TEXTURE_2D]=Ot(e.TEXTURE_2D,e.TEXTURE_2D,1),zt[e.TEXTURE_CUBE_MAP]=Ot(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[e.TEXTURE_2D_ARRAY]=Ot(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),zt[e.TEXTURE_3D]=Ot(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Dt(e.DEPTH_TEST),r.setFunc(uc),hn(!1),Ge(Jv),Dt(e.CULL_FACE),Xn(Po);function Dt(D){h[D]!==!0&&(e.enable(D),h[D]=!0)}function kt(D){h[D]!==!1&&(e.disable(D),h[D]=!1)}function bn(D,st){return u[D]!==st?(e.bindFramebuffer(D,st),u[D]=st,D===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=st),D===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=st),!0):!1}function jt(D,st){let et=y,St=!1;if(D){et=p.get(st),et===void 0&&(et=[],p.set(st,et));let xt=D.textures;if(et.length!==xt.length||et[0]!==e.COLOR_ATTACHMENT0){for(let bt=0,qt=xt.length;bt<qt;bt++)et[bt]=e.COLOR_ATTACHMENT0+bt;et.length=xt.length,St=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,St=!0);St&&e.drawBuffers(et)}function Pe(D){return _!==D?(e.useProgram(D),_=D,!0):!1}let ue={[Io]:e.FUNC_ADD,[lT]:e.FUNC_SUBTRACT,[cT]:e.FUNC_REVERSE_SUBTRACT};ue[uT]=e.MIN,ue[fT]=e.MAX;let be={[hT]:e.ZERO,[Sc]:e.ONE,[dT]:e.SRC_COLOR,[$v]:e.SRC_ALPHA,[_T]:e.SRC_ALPHA_SATURATE,[vT]:e.DST_COLOR,[mT]:e.DST_ALPHA,[pT]:e.ONE_MINUS_SRC_COLOR,[zo]:e.ONE_MINUS_SRC_ALPHA,[yT]:e.ONE_MINUS_DST_COLOR,[gT]:e.ONE_MINUS_DST_ALPHA,[xT]:e.CONSTANT_COLOR,[ST]:e.ONE_MINUS_CONSTANT_COLOR,[MT]:e.CONSTANT_ALPHA,[bT]:e.ONE_MINUS_CONSTANT_ALPHA};function Xn(D,st,et,St,xt,bt,qt,Ct,_t,Kt){if(D===Po){v===!0&&(kt(e.BLEND),v=!1);return}if(v===!1&&(Dt(e.BLEND),v=!0),D!==xc){if(D!==f||Kt!==C){if((m!==Io||A!==Io)&&(e.blendEquation(e.FUNC_ADD),m=Io,A=Io),Kt)switch(D){case _c:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oo:e.blendFunc(e.ONE,e.ONE);break;case Qv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:oe("WebGLState: Invalid blending: ",D);break}else switch(D){case _c:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qv:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jv:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",D);break}S=null,x=null,w=null,g=null,b.set(0,0,0),P=0,f=D,C=Kt}return}xt=xt||st,bt=bt||et,qt=qt||St,(st!==m||xt!==A)&&(e.blendEquationSeparate(ue[st],ue[xt]),m=st,A=xt),(et!==S||St!==x||bt!==w||qt!==g)&&(e.blendFuncSeparate(be[et],be[St],be[bt],be[qt]),S=et,x=St,w=bt,g=qt),(Ct.equals(b)===!1||_t!==P)&&(e.blendColor(Ct.r,Ct.g,Ct.b,_t),b.copy(Ct),P=_t),f=D,C=!1}function nn(D,st){D.side===Nn?kt(e.CULL_FACE):Dt(e.CULL_FACE);let et=D.side===Bi;st&&(et=!et),hn(et),D.blending===_c&&D.transparent===!1?Xn(Po):Xn(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let St=D.stencilWrite;o.setTest(St),St&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_n(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Dt(e.SAMPLE_ALPHA_TO_COVERAGE):kt(e.SAMPLE_ALPHA_TO_COVERAGE)}function hn(D){O!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),O=D)}function Ge(D){D!==sT?(Dt(e.CULL_FACE),D!==B&&(D===Jv?e.cullFace(e.BACK):D===rT?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):kt(e.CULL_FACE),B=D}function Jt(D){D!==V&&(Y&&e.lineWidth(D),V=D)}function _n(D,st,et){D?(Dt(e.POLYGON_OFFSET_FILL),(N!==st||X!==et)&&(N=st,X=et,r.getReversed()&&(st=-st,et=-et),e.polygonOffset(st,et))):kt(e.POLYGON_OFFSET_FILL)}function fi(D){D?Dt(e.SCISSOR_TEST):kt(e.SCISSOR_TEST)}function _i(D){D===void 0&&(D=e.TEXTURE0+Q-1),ct!==D&&(e.activeTexture(D),ct=D)}function Hi(D,st,et){et===void 0&&(ct===null?et=e.TEXTURE0+Q-1:et=ct);let St=dt[et];St===void 0&&(St={type:void 0,texture:void 0},dt[et]=St),(St.type!==D||St.texture!==st)&&(ct!==et&&(e.activeTexture(et),ct=et),e.bindTexture(D,st||zt[D]),St.type=D,St.texture=st)}function z(){let D=dt[ct];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function wi(){try{e.compressedTexImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function _e(){try{e.compressedTexImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function ie(){try{e.texSubImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function Mt(){try{e.texSubImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function dn(){try{e.compressedTexSubImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function Qt(){try{e.compressedTexSubImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function $t(){try{e.texStorage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function R(){try{e.texStorage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function M(){try{e.texImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function k(){try{e.texImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function yt(D){return d[D]!==void 0?d[D]:e.getParameter(D)}function ot(D,st){d[D]!==st&&(e.pixelStorei(D,st),d[D]=st)}function Tt(D){rt.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function Et(D){Nt.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Nt.copy(D))}function nt(D,st){let et=c.get(st);et===void 0&&(et=new WeakMap,c.set(st,et));let St=et.get(D);St===void 0&&(St=e.getUniformBlockIndex(st,D.name),e.uniformBlockBinding(st,St,St),et.set(D,St))}function it(D,st,et){let xt=c.get(st).get(D);l[xt]!==et&&(e.bindBufferBase(e.UNIFORM_BUFFER,xt,et),l[xt]=et)}function ut(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,dt={},u={},l={},p=new WeakMap,y=[],_=null,v=!1,f=null,m=null,S=null,x=null,A=null,w=null,g=null,b=new Ie(0,0,0),P=0,C=!1,O=null,B=null,V=null,N=null,X=null,rt.set(0,0,e.canvas.width,e.canvas.height),Nt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Dt,disable:kt,bindFramebuffer:bn,drawBuffers:jt,useProgram:Pe,setBlending:Xn,setMaterial:nn,setFlipSided:hn,setCullFace:Ge,setLineWidth:Jt,setPolygonOffset:_n,setScissorTest:fi,activeTexture:_i,bindTexture:Hi,unbindTexture:z,compressedTexImage2D:wi,compressedTexImage3D:_e,texImage2D:M,texImage3D:k,pixelStorei:ot,getParameter:yt,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:$t,texStorage3D:R,texSubImage2D:ie,texSubImage3D:Mt,compressedTexSubImage2D:dn,compressedTexSubImage3D:Qt,scissor:Tt,viewport:Et,reset:ut}}function HL(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d=new Set,u,p=new WeakMap,y=new Set,_=new FinalizationRegistry(R=>y.delete(R)),v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,M){return v?new OffscreenCanvas(R,M):qu("canvas")}function m(R,M,k){let yt=1,ot=$t(R);if((ot.width>k||ot.height>k)&&(yt=k/Math.max(ot.width,ot.height)),yt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Tt=Math.floor(yt*ot.width),Et=Math.floor(yt*ot.height);u===void 0&&(u=f(Tt,Et));let nt=M?f(Tt,Et):u;return nt.width=Tt,nt.height=Et,nt.getContext("2d").drawImage(R,0,0,Tt,Et),te("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Tt+"x"+Et+")."),nt}else return"data"in R&&te("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function S(R){return R.generateMipmaps}function x(R){e.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(R,M,k,yt,ot,Tt=!1){if(R!==null){if(e[R]!==void 0)return e[R];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Et;yt&&(Et=t.get("EXT_texture_norm16"),Et||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=M;if(M===e.RED&&(k===e.FLOAT&&(nt=e.R32F),k===e.HALF_FLOAT&&(nt=e.R16F),k===e.UNSIGNED_BYTE&&(nt=e.R8),k===e.UNSIGNED_SHORT&&Et&&(nt=Et.R16_EXT),k===e.SHORT&&Et&&(nt=Et.R16_SNORM_EXT)),M===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(nt=e.R8UI),k===e.UNSIGNED_SHORT&&(nt=e.R16UI),k===e.UNSIGNED_INT&&(nt=e.R32UI),k===e.BYTE&&(nt=e.R8I),k===e.SHORT&&(nt=e.R16I),k===e.INT&&(nt=e.R32I)),M===e.RG&&(k===e.FLOAT&&(nt=e.RG32F),k===e.HALF_FLOAT&&(nt=e.RG16F),k===e.UNSIGNED_BYTE&&(nt=e.RG8),k===e.UNSIGNED_SHORT&&Et&&(nt=Et.RG16_EXT),k===e.SHORT&&Et&&(nt=Et.RG16_SNORM_EXT)),M===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(nt=e.RG8UI),k===e.UNSIGNED_SHORT&&(nt=e.RG16UI),k===e.UNSIGNED_INT&&(nt=e.RG32UI),k===e.BYTE&&(nt=e.RG8I),k===e.SHORT&&(nt=e.RG16I),k===e.INT&&(nt=e.RG32I)),M===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&(nt=e.RGB8UI),k===e.UNSIGNED_SHORT&&(nt=e.RGB16UI),k===e.UNSIGNED_INT&&(nt=e.RGB32UI),k===e.BYTE&&(nt=e.RGB8I),k===e.SHORT&&(nt=e.RGB16I),k===e.INT&&(nt=e.RGB32I)),M===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&(nt=e.RGBA8UI),k===e.UNSIGNED_SHORT&&(nt=e.RGBA16UI),k===e.UNSIGNED_INT&&(nt=e.RGBA32UI),k===e.BYTE&&(nt=e.RGBA8I),k===e.SHORT&&(nt=e.RGBA16I),k===e.INT&&(nt=e.RGBA32I)),M===e.RGB&&(k===e.UNSIGNED_SHORT&&Et&&(nt=Et.RGB16_EXT),k===e.SHORT&&Et&&(nt=Et.RGB16_SNORM_EXT),k===e.UNSIGNED_INT_5_9_9_9_REV&&(nt=e.RGB9_E5),k===e.UNSIGNED_INT_10F_11F_11F_REV&&(nt=e.R11F_G11F_B10F)),M===e.RGBA){let it=Tt?Wu:De.getTransfer(ot);k===e.FLOAT&&(nt=e.RGBA32F),k===e.HALF_FLOAT&&(nt=e.RGBA16F),k===e.UNSIGNED_BYTE&&(nt=it===Ze?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT&&Et&&(nt=Et.RGBA16_EXT),k===e.SHORT&&Et&&(nt=Et.RGBA16_SNORM_EXT),k===e.UNSIGNED_SHORT_4_4_4_4&&(nt=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(nt=e.RGB5_A1)}return(nt===e.R16F||nt===e.R32F||nt===e.RG16F||nt===e.RG32F||nt===e.RGBA16F||nt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function g(R,M){let k;return R?M===null||M===ma||M===Fo?k=e.DEPTH24_STENCIL8:M===Za?k=e.DEPTH32F_STENCIL8:M===bc&&(k=e.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ma||M===Fo?k=e.DEPTH_COMPONENT24:M===Za?k=e.DEPTH_COMPONENT32F:M===bc&&(k=e.DEPTH_COMPONENT16),k}function b(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==li&&R.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){let M=new WeakRef(R);i.get(R).__ref=M,y.add(M),_.register(R,M,M)}function C(R){let M=i.get(R).__ref;M!==void 0&&(y.delete(M),_.unregister(M))}function O(R){V(R.target)}function B(R){N(R.target)}function V(R){R.removeEventListener("dispose",O),C(R),Q(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function N(R){R.removeEventListener("dispose",B),C(R),mt(R)}function X(){for(let R of y){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):V(M))}y.clear(),d.clear()}function Q(R){let M=i.get(R);if(M.__webglInit===void 0)return;let k=R.source,yt=p.get(k);if(yt){let ot=yt[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&Y(R),Object.keys(yt).length===0&&p.delete(k)}i.remove(R)}function Y(R){let M=i.get(R);e.deleteTexture(M.__webglTexture);let k=R.source,yt=p.get(k);delete yt[M.__cacheKey],r.memory.textures--}function mt(R){let M=i.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&V(k),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let Tt=0;Tt<M.__webglFramebuffer[ot].length;Tt++)e.deleteFramebuffer(M.__webglFramebuffer[ot][Tt]);else e.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)e.deleteFramebuffer(M.__webglFramebuffer[ot]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let yt=R.textures;for(let ot=0,Tt=yt.length;ot<Tt;ot++){let Et=i.get(yt[ot]);Et.__webglTexture&&(e.deleteTexture(Et.__webglTexture),r.memory.textures--),i.remove(yt[ot])}i.remove(R)}let tt=0;function ct(){tt=0}function dt(){return tt}function Xt(R){tt=R}function ne(){let R=tt;return R>=a.maxTextures&&te("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),tt+=1,R}function rt(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Nt(R,M){let k=i.get(R);if(R.isVideoTexture&&dn(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let yt=R.image;if(yt===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{nn(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+M)}function Ot(R,M){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){nn(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+M)}function zt(R,M){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){nn(k,R,M);return}n.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+M)}function Dt(R,M){let k=i.get(R);if(R.version>0&&k.__version!==R.version){hn(k,R,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+M)}let kt={[fc]:e.REPEAT,[Ii]:e.CLAMP_TO_EDGE,[Zd]:e.MIRRORED_REPEAT},bn={[li]:e.NEAREST,[AT]:e.NEAREST_MIPMAP_NEAREST,[uf]:e.NEAREST_MIPMAP_LINEAR,[Pn]:e.LINEAR,[yp]:e.LINEAR_MIPMAP_NEAREST,[pa]:e.LINEAR_MIPMAP_LINEAR},jt={[NT]:e.NEVER,[yy]:e.ALWAYS,[DT]:e.LESS,[gy]:e.LEQUAL,[LT]:e.EQUAL,[vy]:e.GEQUAL,[UT]:e.GREATER,[PT]:e.NOTEQUAL};function Pe(R,M){if(M.type===Za&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===yp||M.magFilter===uf||M.magFilter===pa||M.minFilter===Pn||M.minFilter===yp||M.minFilter===uf||M.minFilter===pa)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,kt[M.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,kt[M.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,kt[M.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,bn[M.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,bn[M.minFilter]),M.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,jt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===li||M.minFilter!==uf&&M.minFilter!==pa||M.type===Za&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ue(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",O),P(M));let yt=M.source,ot=p.get(yt);ot===void 0&&(ot={},p.set(yt,ot));let Tt=rt(M);if(Tt!==R.__cacheKey){ot[Tt]===void 0&&(ot[Tt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ot[Tt].usedTimes++;let Et=ot[R.__cacheKey];Et!==void 0&&(ot[R.__cacheKey].usedTimes--,Et.usedTimes===0&&Y(M)),R.__cacheKey=Tt,R.__webglTexture=ot[Tt].texture}return k}function be(R,M,k){return Math.floor(Math.floor(R/k)/M)}function Xn(R,M,k,yt){let Tt=R.updateRanges;if(Tt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,k,yt,M.data);else{Tt.sort((D,st)=>D.start-st.start);let Et=0;for(let D=1;D<Tt.length;D++){let st=Tt[Et],et=Tt[D],St=st.start+st.count,xt=be(et.start,M.width,4),bt=be(st.start,M.width,4);et.start<=St+1&&xt===bt&&be(et.start+et.count-1,M.width,4)===xt?st.count=Math.max(st.count,et.start+et.count-st.start):(++Et,Tt[Et]=et)}Tt.length=Et+1;let nt=n.getParameter(e.UNPACK_ROW_LENGTH),it=n.getParameter(e.UNPACK_SKIP_PIXELS),ut=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let D=0,st=Tt.length;D<st;D++){let et=Tt[D],St=Math.floor(et.start/4),xt=Math.ceil(et.count/4),bt=St%M.width,qt=Math.floor(St/M.width),Ct=xt,_t=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,qt),n.texSubImage2D(e.TEXTURE_2D,0,bt,qt,Ct,_t,k,yt,M.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,nt),n.pixelStorei(e.UNPACK_SKIP_PIXELS,it),n.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function nn(R,M,k){let yt=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(yt=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(yt=e.TEXTURE_3D);let ot=ue(R,M),Tt=M.source;n.bindTexture(yt,R.__webglTexture,e.TEXTURE0+k);let Et=i.get(Tt);if(Tt.version!==Et.__version||ot===!0){if(n.activeTexture(e.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let _t=De.getPrimaries(De.workingColorSpace),Kt=M.colorSpace===Ks?null:De.getPrimaries(M.colorSpace),fe=M.colorSpace===Ks||_t===Kt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment);let it=m(M.image,!1,a.maxTextureSize);it=Qt(M,it);let ut=s.convert(M.format,M.colorSpace),D=s.convert(M.type),st=w(M.internalFormat,ut,D,M.normalized,M.colorSpace,M.isVideoTexture);Pe(yt,M);let et,St=M.mipmaps,xt=M.isVideoTexture!==!0,bt=Et.__version===void 0||ot===!0,qt=Tt.dataReady,Ct=b(M,it);if(M.isDepthTexture)st=g(M.format===Zs,M.type),bt&&(xt?n.texStorage2D(e.TEXTURE_2D,1,st,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,st,it.width,it.height,0,ut,D,null));else if(M.isDataTexture)if(St.length>0){xt&&bt&&n.texStorage2D(e.TEXTURE_2D,Ct,st,St[0].width,St[0].height);for(let _t=0,Kt=St.length;_t<Kt;_t++)et=St[_t],xt?qt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,et.width,et.height,ut,D,et.data):n.texImage2D(e.TEXTURE_2D,_t,st,et.width,et.height,0,ut,D,et.data);M.generateMipmaps=!1}else xt?(bt&&n.texStorage2D(e.TEXTURE_2D,Ct,st,it.width,it.height),qt&&Xn(M,it,ut,D)):n.texImage2D(e.TEXTURE_2D,0,st,it.width,it.height,0,ut,D,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xt&&bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ct,st,St[0].width,St[0].height,it.depth);for(let _t=0,Kt=St.length;_t<Kt;_t++)if(et=St[_t],M.format!==Ji)if(ut!==null)if(xt){if(qt)if(M.layerUpdates.size>0){let fe=Ey(et.width,et.height,M.format,M.type);for(let Lt of M.layerUpdates){let Ve=et.data.subarray(Lt*fe/et.data.BYTES_PER_ELEMENT,(Lt+1)*fe/et.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_t,0,0,Lt,et.width,et.height,1,ut,Ve)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_t,0,0,0,et.width,et.height,it.depth,ut,et.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,_t,st,et.width,et.height,it.depth,0,et.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?qt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,_t,0,0,0,et.width,et.height,it.depth,ut,D,et.data):n.texImage3D(e.TEXTURE_2D_ARRAY,_t,st,et.width,et.height,it.depth,0,ut,D,et.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{xt&&bt&&n.texStorage2D(e.TEXTURE_2D,Ct,st,St[0].width,St[0].height);for(let _t=0,Kt=St.length;_t<Kt;_t++)et=St[_t],M.format!==Ji?ut!==null?xt?qt&&n.compressedTexSubImage2D(e.TEXTURE_2D,_t,0,0,et.width,et.height,ut,et.data):n.compressedTexImage2D(e.TEXTURE_2D,_t,st,et.width,et.height,0,et.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?qt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,et.width,et.height,ut,D,et.data):n.texImage2D(e.TEXTURE_2D,_t,st,et.width,et.height,0,ut,D,et.data)}else if(M.isDataArrayTexture)if(xt){if(bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ct,st,it.width,it.height,it.depth),qt)if(M.layerUpdates.size>0){let _t=Ey(it.width,it.height,M.format,M.type);for(let Kt of M.layerUpdates){let fe=it.data.subarray(Kt*_t/it.data.BYTES_PER_ELEMENT,(Kt+1)*_t/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Kt,it.width,it.height,1,ut,D,fe)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ut,D,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,ut,D,it.data);else if(M.isData3DTexture)xt?(bt&&n.texStorage3D(e.TEXTURE_3D,Ct,st,it.width,it.height,it.depth),qt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ut,D,it.data)):n.texImage3D(e.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,ut,D,it.data);else if(M.isFramebufferTexture){if(bt)if(xt)n.texStorage2D(e.TEXTURE_2D,Ct,st,it.width,it.height);else{let _t=it.width,Kt=it.height;for(let fe=0;fe<Ct;fe++)n.texImage2D(e.TEXTURE_2D,fe,st,_t,Kt,0,ut,D,null),_t>>=1,Kt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in e){let _t=e.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),it.parentNode!==_t){_t.appendChild(it),d.add(M),_t.onpaint=Kt=>{let fe=Kt.changedElements;for(let Lt of d)fe.includes(Lt.image)&&(Lt.needsUpdate=!0)},_t.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,it);else{let fe=e.RGBA,Lt=e.RGBA,Ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,fe,Lt,Ve,it)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(St.length>0){if(xt&&bt){let _t=$t(St[0]);n.texStorage2D(e.TEXTURE_2D,Ct,st,_t.width,_t.height)}for(let _t=0,Kt=St.length;_t<Kt;_t++)et=St[_t],xt?qt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,ut,D,et):n.texImage2D(e.TEXTURE_2D,_t,st,ut,D,et);M.generateMipmaps=!1}else if(xt){if(bt){let _t=$t(it);n.texStorage2D(e.TEXTURE_2D,Ct,st,_t.width,_t.height)}qt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,D,it)}else n.texImage2D(e.TEXTURE_2D,0,st,ut,D,it);S(M)&&M.mipmapsAutoUpdate===!0&&x(yt),Et.__version=Tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function hn(R,M,k){if(M.image.length!==6)return;let yt=ue(R,M),ot=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+k);let Tt=i.get(ot);if(ot.version!==Tt.__version||yt===!0){n.activeTexture(e.TEXTURE0+k);let Et=De.getPrimaries(De.workingColorSpace),nt=M.colorSpace===Ks?null:De.getPrimaries(M.colorSpace),it=M.colorSpace===Ks||Et===nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,st=[];for(let Lt=0;Lt<6;Lt++)!ut&&!D?st[Lt]=m(M.image[Lt],!0,a.maxCubemapSize):st[Lt]=D?M.image[Lt].image:M.image[Lt],st[Lt]=Qt(M,st[Lt]);let et=st[0],St=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),bt=w(M.internalFormat,St,xt,M.normalized,M.colorSpace),qt=M.isVideoTexture!==!0,Ct=Tt.__version===void 0||yt===!0,_t=ot.dataReady,Kt=b(M,et);Pe(e.TEXTURE_CUBE_MAP,M);let fe;if(M.isDepthTexture){if(bt=g(M.format===Zs,M.type),Ct)if(qt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,bt,et.width,et.height);else for(let Lt=0;Lt<6;Lt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,et.width,et.height,0,St,xt,null)}else if(ut){qt&&Ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Kt,bt,et.width,et.height);for(let Lt=0;Lt<6;Lt++){fe=st[Lt].mipmaps;for(let Ve=0;Ve<fe.length;Ve++){let pn=fe[Ve];M.format!==Ji?St!==null?qt?_t&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve,0,0,pn.width,pn.height,St,pn.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve,bt,pn.width,pn.height,0,pn.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?_t&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve,0,0,pn.width,pn.height,St,xt,pn.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve,bt,pn.width,pn.height,0,St,xt,pn.data)}}}else{if(fe=M.mipmaps,qt&&Ct){fe.length>0&&Kt++;let Lt=$t(st[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Kt,bt,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(D){qt?_t&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,st[Lt].width,st[Lt].height,St,xt,st[Lt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,st[Lt].width,st[Lt].height,0,St,xt,st[Lt].data);for(let Ve=0;Ve<fe.length;Ve++){let Gi=fe[Ve].image[Lt].image;qt?_t&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve+1,0,0,Gi.width,Gi.height,St,xt,Gi.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve+1,bt,Gi.width,Gi.height,0,St,xt,Gi.data)}}else{qt?_t&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,St,xt,st[Lt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,St,xt,st[Lt]);for(let Ve=0;Ve<fe.length;Ve++){let pn=fe[Ve];qt?_t&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve+1,0,0,St,xt,pn.image[Lt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ve+1,bt,St,xt,pn.image[Lt])}}}S(M)&&M.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),Tt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ge(R,M,k,yt,ot,Tt){let Et=s.convert(k.format,k.colorSpace),nt=s.convert(k.type),it=w(k.internalFormat,Et,nt,k.normalized,k.colorSpace),ut=i.get(M),D=i.get(k);if(D.__renderTarget=M,!ut.__hasExternalTextures){let st=Math.max(1,M.width>>Tt),et=Math.max(1,M.height>>Tt);ot===e.TEXTURE_3D||ot===e.TEXTURE_2D_ARRAY?n.texImage3D(ot,Tt,it,st,et,M.depth,0,Et,nt,null):n.texImage2D(ot,Tt,it,st,et,0,Et,nt,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Mt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,yt,ot,D.__webglTexture,0,ie(M)):(ot===e.TEXTURE_2D||ot>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,yt,ot,D.__webglTexture,Tt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Jt(R,M,k){if(e.bindRenderbuffer(e.RENDERBUFFER,R),M.depthBuffer){let yt=M.depthTexture,ot=yt&&yt.isDepthTexture?yt.type:null,Tt=g(M.stencilBuffer,ot),Et=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Mt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(M),Tt,M.width,M.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(M),Tt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Tt,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,R)}else{let yt=M.textures;for(let ot=0;ot<yt.length;ot++){let Tt=yt[ot],Et=s.convert(Tt.format,Tt.colorSpace),nt=s.convert(Tt.type),it=w(Tt.internalFormat,Et,nt,Tt.normalized,Tt.colorSpace);Mt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(M),it,M.width,M.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(M),it,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,it,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _n(R,M,k){let yt=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(M.depthTexture);ot.__renderTarget=M;let Tt=yt?M.depthTexture.image[0]:M.depthTexture.image;(!ot.__webglTexture||Tt.width!==M.width||Tt.height!==M.height)&&(Tt.width=M.width,Tt.height=M.height,M.depthTexture.needsUpdate=!0),yt?Dt(M.depthTexture,0):Nt(M.depthTexture,0);let Et=ot.__webglTexture,nt=ie(M),it=yt?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,ut=M.depthTexture.format===Zs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(M.depthTexture.format===qs)Mt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ut,it,Et,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,ut,it,Et,0);else if(M.depthTexture.format===Zs)Mt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ut,it,Et,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,ut,it,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fi(R){let M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let yt=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),yt){let ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,yt.removeEventListener("dispose",ot)};yt.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=yt}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let yt=0;yt<6;yt++)_n(M.__webglFramebuffer[yt],R,yt);else R.texture.mipmaps.length>0?_n(M.__webglFramebuffer[0],R,0):_n(M.__webglFramebuffer,R,0);else if(k){M.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[yt]),M.__webglDepthbuffer[yt]===void 0)M.__webglDepthbuffer[yt]=e.createRenderbuffer(),Jt(M.__webglDepthbuffer[yt],R,!1);else{let ot=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Tt=M.__webglDepthbuffer[yt];e.bindRenderbuffer(e.RENDERBUFFER,Tt),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,Tt)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Jt(M.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Tt=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Tt),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,Tt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _i(R,M,k){let yt=i.get(R);M!==void 0&&Ge(yt.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&fi(R)}function Hi(R){let M=R.texture,k=i.get(R),yt=i.get(M);R.addEventListener("dispose",B),P(R);let ot=R.textures,Tt=R.isWebGLCubeRenderTarget===!0,Et=ot.length>1;if(Et||(yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture()),yt.__version=M.version,r.memory.textures++),Tt){k.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(M.mipmaps.length>0){k.__webglFramebuffer[nt]=[];for(let it=0;it<M.mipmaps.length;it++)k.__webglFramebuffer[nt][it]=e.createFramebuffer()}else k.__webglFramebuffer[nt]=e.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let nt=0;nt<M.mipmaps.length;nt++)k.__webglFramebuffer[nt]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(Et)for(let nt=0,it=ot.length;nt<it;nt++){let ut=i.get(ot[nt]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),r.memory.textures++)}if(R.samples>0&&Mt(R)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let nt=0;nt<ot.length;nt++){let it=ot[nt];k.__webglColorRenderbuffer[nt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[nt]);let ut=s.convert(it.format,it.colorSpace),D=s.convert(it.type),st=w(it.internalFormat,ut,D,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),et=ie(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,et,st,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,k.__webglColorRenderbuffer[nt])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),Jt(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Tt){n.bindTexture(e.TEXTURE_CUBE_MAP,yt.__webglTexture),Pe(e.TEXTURE_CUBE_MAP,M);for(let nt=0;nt<6;nt++)if(M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ge(k.__webglFramebuffer[nt][it],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,it);else Ge(k.__webglFramebuffer[nt],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);S(M)?x(e.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}else if(Et){for(let nt=0,it=ot.length;nt<it;nt++){let ut=ot[nt],D=i.get(ut),st=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,D.__webglTexture),Pe(st,ut),Ge(k.__webglFramebuffer,R,ut,e.COLOR_ATTACHMENT0+nt,st,0),S(ut)&&x(st)}n.unbindTexture()}else{let nt=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(nt,yt.__webglTexture),Pe(nt,M),M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ge(k.__webglFramebuffer[it],R,M,e.COLOR_ATTACHMENT0,nt,it);else Ge(k.__webglFramebuffer,R,M,e.COLOR_ATTACHMENT0,nt,0);S(M)?x(nt):M.mipmaps.length>0&&e.texParameteri(nt,e.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&fi(R)}function z(R){let M=R.textures;for(let k=0,yt=M.length;k<yt;k++){let ot=M[k];if(S(ot)&&ot.mipmapsAutoUpdate===!0){let Tt=A(R),Et=i.get(ot).__webglTexture;n.bindTexture(Tt,Et),x(Tt),n.unbindTexture()}}}let wi=[];function _e(R){if(R.samples>0){if(Mt(R)===!1){let M=R.textures,k=R.width,yt=R.height,ot=e.COLOR_BUFFER_BIT,Tt=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(R),nt=M.length>1;if(nt)for(let ut=0;ut<M.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=e.STENCIL_BUFFER_BIT)),nt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);let D=i.get(M[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,D,0)}e.blitFramebuffer(0,0,k,yt,0,0,k,yt,ot,e.NEAREST),l===!0&&(wi.length=0,wi.push(e.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&wi.push(Tt),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,wi))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),nt)for(let ut=0;ut<M.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);let D=i.get(M[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,D,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function ie(R){return Math.min(a.maxSamples,R.samples)}function Mt(R){let M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dn(R){let M=r.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Qt(R,M){let k=R.colorSpace,yt=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Co&&k!==Ks&&(De.getTransfer(k)===Ze?(yt!==Ji||ot!==Fi)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",k)),M}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=ct,this.getTextureUnits=dt,this.setTextureUnits=Xt,this.setTexture2D=Nt,this.setTexture2DArray=Ot,this.setTexture3D=zt,this.setTextureCube=Dt,this.rebindTextures=_i,this.setupRenderTarget=Hi,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=fi,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Mt,this.dispose=X}function GL(e,t){function n(i,a=Ks){let s,r=De.getTransfer(a);if(i===Fi)return e.UNSIGNED_BYTE;if(i===xp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===fy)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===hy)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===cy)return e.BYTE;if(i===uy)return e.SHORT;if(i===bc)return e.UNSIGNED_SHORT;if(i===_p)return e.INT;if(i===ma)return e.UNSIGNED_INT;if(i===Za)return e.FLOAT;if(i===ui)return e.HALF_FLOAT;if(i===dy)return e.ALPHA;if(i===py)return e.RGB;if(i===Ji)return e.RGBA;if(i===qs)return e.DEPTH_COMPONENT;if(i===Zs)return e.DEPTH_STENCIL;if(i===ff)return e.RED;if(i===Mp)return e.RED_INTEGER;if(i===qr)return e.RG;if(i===bp)return e.RG_INTEGER;if(i===Tp)return e.RGBA_INTEGER;if(i===hf||i===df||i===pf||i===mf)if(r===Ze)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ep||i===Ap||i===wp||i===Rp)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ep)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ap)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cp||i===Np||i===Dp||i===Lp||i===Up||i===gf||i===Pp)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cp||i===Np)return r===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lp)return s.COMPRESSED_R11_EAC;if(i===Up)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gf)return s.COMPRESSED_RG11_EAC;if(i===Pp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Op||i===Ip||i===zp||i===Bp||i===Fp||i===Hp||i===Gp||i===Vp||i===kp||i===Wp||i===Xp||i===qp||i===Yp||i===Zp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Op)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ip)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zp)return r===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kp||i===Jp||i===Qp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Kp)return r===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jp||i===$p||i===vf||i===t0)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===jp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$p)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===t0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var VL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Py=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new nf(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ci({vertexShader:VL,fragmentShader:kL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ke(new af(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oy=class extends ms{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,y=null,_=typeof XRWebGLBinding<"u",v=new Py,f={},m=n.getContextAttributes(),S=null,x=null,A=[],w=[],g=new le,b=null,P=null,C=new Oi;C.viewport=new vn;let O=new Oi;O.viewport=new vn;let B=[C,O],V=new mp,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let Nt=A[rt];return Nt===void 0&&(Nt=new mc,A[rt]=Nt),Nt.getTargetRaySpace()},this.getControllerGrip=function(rt){let Nt=A[rt];return Nt===void 0&&(Nt=new mc,A[rt]=Nt),Nt.getGripSpace()},this.getHand=function(rt){let Nt=A[rt];return Nt===void 0&&(Nt=new mc,A[rt]=Nt),Nt.getHandSpace()};function Q(rt){let Nt=w.indexOf(rt.inputSource);if(Nt===-1)return;let Ot=A[Nt];Ot!==void 0&&(Ot.update(rt.inputSource,rt.frame,c||r),Ot.dispatchEvent({type:rt.type,data:rt.inputSource}))}function Y(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",mt);for(let rt=0;rt<A.length;rt++){let Nt=w[rt];Nt!==null&&(w[rt]=null,A[rt].disconnect(Nt))}N=null,X=null,v.reset();for(let rt in f)delete f[rt];if(t.setRenderTarget(S),p=null,u=null,d=null,a=null,x=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),P!==null){let rt=P.camera;rt.fov=P.fov,rt.zoom=P.zoom,rt.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){o=rt,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(rt){if(a=rt,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",mt),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,zt=null,Dt=null;m.depth&&(Dt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ot=m.stencil?Zs:qs,zt=m.stencil?Fo:ma);let kt={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(kt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Cn(u.textureWidth,u.textureHeight,{format:Ji,type:Fi,depthTexture:new Ya(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,Ot),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Ji,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),ne.setContext(a),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function mt(rt){for(let Nt=0;Nt<rt.removed.length;Nt++){let Ot=rt.removed[Nt],zt=w.indexOf(Ot);zt>=0&&(w[zt]=null,A[zt].disconnect(Ot))}for(let Nt=0;Nt<rt.added.length;Nt++){let Ot=rt.added[Nt],zt=w.indexOf(Ot);if(zt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(Ot),zt=kt;break}else if(w[kt]===null){w[kt]=Ot,zt=kt;break}if(zt===-1)break}let Dt=A[zt];Dt&&Dt.connect(Ot)}}function tt(rt,Nt){Nt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(Nt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(a===null)return;let Nt=rt.near,Ot=rt.far;v.texture!==null&&(v.depthNear>0&&(Nt=v.depthNear),v.depthFar>0&&(Ot=v.depthFar)),V.near=O.near=C.near=Nt,V.far=O.far=C.far=Ot,(N!==V.near||X!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,X=V.far),V.layers.mask=rt.layers.mask|6,C.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;let zt=rt.parent,Dt=V.cameras;tt(V,zt);for(let kt=0;kt<Dt.length;kt++)tt(Dt[kt],zt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&rt.isPerspectiveCamera&&(P={camera:rt,fov:rt.fov,zoom:rt.zoom}),ct(rt,V,zt)};function ct(rt,Nt,Ot){Ot===null?rt.matrix.copy(Nt.matrixWorld):(rt.matrix.copy(Ot.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(Nt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(Nt.projectionMatrix),rt.projectionMatrixInverse.copy(Nt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Jd*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(rt){l=rt,u!==null&&(u.fixedFoveation=rt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=rt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(V)},this.getCameraTexture=function(rt){return f[rt]};let dt=null;function Xt(rt,Nt){if(h=Nt.getViewerPose(c||r),y=Nt,h!==null){let Ot=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let zt=!1;Ot.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let jt=0;jt<Ot.length;jt++){let Pe=Ot[jt],ue=null;if(p!==null)ue=p.getViewport(Pe);else{let Xn=d.getViewSubImage(u,Pe);ue=Xn.viewport,jt===0&&(t.setRenderTargetTextures(x,Xn.colorTexture,Xn.depthStencilTexture),t.setRenderTarget(x))}let be=B[jt];be===void 0&&(be=new Oi,be.layers.enable(jt),be.viewport=new vn,B[jt]=be),be.matrix.fromArray(Pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ue.x,ue.y,ue.width,ue.height),jt===0&&(V.matrix.copy(be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(be)}let Dt=a.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let jt=d.getDepthInformation(Ot[0]);jt&&jt.isValid&&jt.texture&&v.init(jt,a.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let jt=0;jt<Ot.length;jt++){let Pe=Ot[jt].camera;if(Pe){let ue=f[Pe];ue||(ue=new nf,f[Pe]=ue);let be=d.getCameraImage(Pe);ue.sourceTexture=be}}}}for(let Ot=0;Ot<A.length;Ot++){let zt=w[Ot],Dt=A[Ot];zt!==null&&Dt!==void 0&&Dt.update(zt,Nt,c||r)}dt&&dt(rt,Nt),Nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Nt}),y=null}let ne=new hE;ne.setAnimationLoop(Xt),this.setAnimationLoop=function(rt){dt=rt},this.dispose=function(){}}},WL=new Fe,ME=new pe;ME.set(-1,0,0,0,1,0,0,0,1);function XL(e,t){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,My(e)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function a(v,f,m,S,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(v,f):f.isMeshLambertMaterial?(s(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(v,f),d(v,f)):f.isMeshPhongMaterial?(s(v,f),h(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(v,f),u(v,f),f.isMeshPhysicalMaterial&&p(v,f,x)):f.isMeshMatcapMaterial?(s(v,f),y(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),_(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(r(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,m,S):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Bi&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Bi&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);let m=t.get(f),S=m.envMap,x=m.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(WL.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(ME),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function r(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,m,S){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*m,v.scale.value=S*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function d(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function u(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,m){v.ior.value=f.ior,f.diffuseRoughness>0&&(v.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bi&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.retroreflectivity>0&&(v.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,f){f.matcap&&(v.matcap.value=f.matcap)}function _(v,f){let m=t.get(f).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function qL(e,t,n,i){let a={},s={};function r(m,S){let x=S.program;i.uniformBlockBinding(m,x,a[m.id])}function o(m,S){let x=a[m.id];x===void 0&&(y(m),x=l(m),a[m.id]=x,m.addEventListener("dispose",v));let A=S.program;i.updateUBOMapping(m,A);let w=t.render.frame;s[m.id]!==w&&(c(m),s[m.id]=w)}function l(m){let S=e.createBuffer(),x=m.__size,A=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,x,A),e.bindBuffer(e.UNIFORM_BUFFER,null),S}function c(m){let S=a[m.id],x=m.uniforms,A=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let w=0,g=x.length;w<g;w++){let b=x[w];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],w,P,A);else h(b,w,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,S,x,A){if(u(m,S,x,A)===!0){let w=m.__offset,g=m.value;if(Array.isArray(g)){let b=0;for(let P=0;P<g.length;P++){let C=g[P],O=_(C,!0);d(C,m.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,m.__data)}}function d(m,S,x){typeof m=="number"||typeof m=="boolean"?S[x]=m:m.isMatrix3?(S[x]=m.elements[0],S[x+1]=m.elements[1],S[x+2]=m.elements[2],S[x+3]=0,S[x+4]=m.elements[3],S[x+5]=m.elements[4],S[x+6]=m.elements[5],S[x+7]=0,S[x+8]=m.elements[6],S[x+9]=m.elements[7],S[x+10]=m.elements[8],S[x+11]=0):ArrayBuffer.isView(m)?S.set(m.subarray(0,S.length-x),x):m.toArray(S,x)}function u(m,S,x,A){let w=m.value,g=S+"_"+x;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);let b=A[g],P=!1;for(let C=0;C<w.length;C++)p(w[C],b,C)===!0&&(P=!0);return P}return p(w,A,g)}function p(m,S,x){if(S[x]===void 0)return typeof m=="number"||typeof m=="boolean"?S[x]=m:ArrayBuffer.isView(m)?S[x]=m.slice():S[x]=m.clone(),!0;{let A=S[x];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return S[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function y(m){let S=m.uniforms,x=0,A=16;for(let g=0,b=S.length;g<b;g++){let P=Array.isArray(S[g])?S[g]:[S[g]];for(let C=0,O=P.length;C<O;C++){let B=P[C],V=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(S[g])||Array.isArray(B.value),X=x;for(let Y=0,mt=V.length;Y<mt;Y++){let tt=V[Y],ct=_(tt,N),dt=x%A,Xt=dt%ct.boundary,ne=dt+Xt;x+=Xt,ne!==0&&A-ne<ct.storage&&(x+=A-ne),Y===0&&(X=x),x+=ct.storage}let Q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Q((x-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}let w=x%A;return w>0&&(x+=A-w),m.__size=x,m.__cache={},this}function _(m,S){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):te("WebGLRenderer: Unsupported uniform value type.",m),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function v(m){let S=m.target;S.removeEventListener("dispose",v),e.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function f(){for(let m in a)e.deleteBuffer(a[m]);a={},s={}}return{bind:r,update:o,dispose:f}}var YL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_s=null;function ZL(){return _s===null&&(_s=new Lo(YL,16,16,qr,ui),_s.name="DFG_LUT",_s.minFilter=Pn,_s.magFilter=Pn,_s.wrapS=Ii,_s.wrapT=Ii,_s.generateMipmaps=!1,_s.needsUpdate=!0),_s}var a0=class{constructor(t={}){let{canvas:n=IT(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Fi}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=r;let _=p,v=new Set([Tp,bp,Mp]),f=new Set([Fi,ma,bc,Fo,xp,Sp]),m=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},A=null,w=null,g=[],b=[],P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,B=null,V=null,N=null,X=null;this._outputColorSpace=Pi;let Q=0,Y=0,mt=null,tt=-1,ct=null,dt=new vn,Xt=new vn,ne=null,rt=new Ie(0),Nt=0,Ot=n.width,zt=n.height,Dt=1,kt=null,bn=null,jt=new vn(0,0,Ot,zt),Pe=new vn(0,0,Ot,zt),ue=!1,be=new Uo,Xn=new ep,nn=!1,hn=!1,Ge=new Fe,Jt=new J,_n=new vn,fi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_i=!1;function Hi(){return mt===null?Dt:1}let z=i;function wi(T,L){return n.getContext(T,L)}let _e,ie,Mt,dn,Qt,$t,R,M,k,yt,ot,Tt,Et,nt,it,ut,D,st,et,St,xt,bt,qt;try{let T={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Kt,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),z===null){let L="webgl2";if(z=wi(L,T),z===null)throw wi(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(T){throw n.removeEventListener("webglcontextlost",Kt,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),oe("WebGLRenderer: "+T.message),T}function Ct(){_e=new sD(z),_e.init(),xt=new GL(z,_e),ie=new ZN(z,_e,t,xt),Mt=new FL(z,_e),ie.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),V=z.createFramebuffer(),N=z.createFramebuffer(),X=z.createFramebuffer(),dn=new lD(z),Qt=new EL,$t=new HL(z,_e,Mt,Qt,ie,xt,dn),R=new aD(C),M=new uR(z),bt=new qN(z,M),k=new rD(z,M,dn,bt),yt=new uD(z,k,M,bt,dn),st=new cD(z,ie,$t),it=new KN(Qt),ot=new TL(C,R,_e,ie,bt,it),Tt=new XL(C,Qt),Et=new wL,nt=new UL(_e),D=new XN(C,R,Mt,yt,y,l),ut=new BL(C,yt,ie),qt=new qL(z,dn,ie,Mt),et=new YN(z,_e,dn),St=new oD(z,_e,dn),dn.programs=ot.programs,C.capabilities=ie,C.extensions=_e,C.properties=Qt,C.renderLists=Et,C.shadowMap=ut,C.state=Mt,C.info=dn}_!==Fi&&(P=new hD(_,n.width,n.height,o,a,s));let _t=new Oy(C,z);this.xr=_t,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=_e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=_e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(T){T!==void 0&&(Dt=T,this.setSize(Ot,zt,!1))},this.getSize=function(T){return T.set(Ot,zt)},this.setSize=function(T,L,K=!0){if(_t.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=T,zt=L,n.width=Math.floor(T*Dt),n.height=Math.floor(L*Dt),K===!0&&(n.style.width=T+"px",n.style.height=L+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(Ot*Dt,zt*Dt).floor()},this.setDrawingBufferSize=function(T,L,K){Ot=T,zt=L,Dt=K,n.width=Math.floor(T*K),n.height=Math.floor(L*K),this.setViewport(0,0,T,L)},this.setEffects=function(T){if(_===Fi){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let L=0;L<T.length;L++)if(T[L].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(dt)},this.getViewport=function(T){return T.copy(jt)},this.setViewport=function(T,L,K,G){T.isVector4?jt.set(T.x,T.y,T.z,T.w):jt.set(T,L,K,G),Mt.viewport(dt.copy(jt).multiplyScalar(Hi()).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,L,K,G){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,L,K,G),Mt.scissor(Xt.copy(Pe).multiplyScalar(Hi()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){Mt.setScissorTest(ue=T)},this.setOpaqueSort=function(T){kt=T},this.setTransparentSort=function(T){bn=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,L=!0,K=!0){let G=0;if(T){let W=!1;if(mt!==null){let wt=mt.texture.format;W=v.has(wt)}if(W){let wt=mt.texture.type,Bt=f.has(wt),Rt=D.getClearColor(),Ut=D.getClearAlpha(),Ft=Rt.r,ae=Rt.g,Me=Rt.b;Bt?(m[0]=Ft,m[1]=ae,m[2]=Me,m[3]=Ut,z.clearBufferuiv(z.COLOR,0,m)):(S[0]=Ft,S[1]=ae,S[2]=Me,S[3]=Ut,z.clearBufferiv(z.COLOR,0,S))}else G|=z.COLOR_BUFFER_BIT}L&&(G|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Kt,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),D.dispose(),Et.dispose(),nt.dispose(),$t.dispose(),Qt.dispose(),R.dispose(),yt.dispose(),k.dispose(),bt.dispose(),qt.dispose(),ot.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ga),_t.removeEventListener("sessionend",ji),ve.stop()};function Kt(T){T.preventDefault(),xy("WebGLRenderer: Context Lost."),O=!0}function fe(){xy("WebGLRenderer: Context Restored."),O=!1;let T=dn.autoReset,L=ut.enabled,K=ut.autoUpdate,G=ut.needsUpdate,W=ut.type;Ct(),dn.autoReset=T,ut.enabled=L,ut.autoUpdate=K,ut.needsUpdate=G,ut.type=W}function Lt(T){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){let L=T.target;L.removeEventListener("dispose",Ve),pn(L)}function pn(T){Gi(T),Qt.remove(T)}function Gi(T){let L=Qt.get(T).programs;L!==void 0&&(L.forEach(function(K){ot.releaseProgram(K)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,K,G,W,wt){L===null&&(L=fi);let Bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Rt=p0(T,L,K,G,W);Mt.setMaterial(G,Bt);let Ut=K.index,Ft=1;if(G.wireframe===!0){if(Ut=k.getWireframeAttribute(K),Ut===void 0)return;Ft=2}let ae=K.drawRange,Me=K.attributes.position,It=ae.start*Ft,Ee=(ae.start+ae.count)*Ft;wt!==null&&(It=Math.max(It,wt.start*Ft),Ee=Math.min(Ee,(wt.start+wt.count)*Ft)),Ut!==null?(It=Math.max(It,0),Ee=Math.min(Ee,Ut.count)):Me!=null&&(It=Math.max(It,0),Ee=Math.min(Ee,Me.count));let rn=Ee-It;if(rn<0||rn===1/0)return;bt.setup(W,G,Rt,K,Ut);let tn,Je=et;if(Ut!==null&&(tn=M.get(Ut),Je=St,Je.setIndex(tn)),W.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*Hi()),Je.setMode(z.LINES)):Je.setMode(z.TRIANGLES);else if(W.isLine){let qn=G.linewidth;qn===void 0&&(qn=1),Mt.setLineWidth(qn*Hi()),W.isLineSegments?Je.setMode(z.LINES):W.isLineLoop?Je.setMode(z.LINE_LOOP):Je.setMode(z.LINE_STRIP)}else W.isPoints?Je.setMode(z.POINTS):W.isSprite&&Je.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let qn=W._multiDrawStarts,Ht=W._multiDrawCounts,ni=W._multiDrawCount,Oe=Ut?M.get(Ut).bytesPerElement:1,va=Qt.get(G).currentProgram.getUniforms();for(let zn=0;zn<ni;zn++)va.setValue(z,"_gl_DrawID",zn),Je.render(qn[zn]/Oe,Ht[zn])}else if(W.isInstancedMesh)Je.renderInstances(It,rn,W.count);else if(K.isInstancedBufferGeometry){let qn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ht=Math.min(K.instanceCount,qn);Je.renderInstances(It,rn,Ht)}else Je.render(It,rn)};function ko(T,L,K,G){B!==null&&T.isNodeMaterial&&B.setObject(G,T),nn===!0&&it.setState(T,K,!1),T.transparent===!0&&T.side===Nn&&T.forceSinglePass===!1?(T.side=Bi,T.needsUpdate=!0,js(T,L,G),T.side=Xr,T.needsUpdate=!0,js(T,L,G),T.side=Nn):js(T,L,G)}this.compile=function(T,L,K=null){K===null&&(K=T),B!==null&&B.renderStart(T,L,K),w=nt.get(K),w.init(L),b.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),T!==K&&T.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),hn=this.localClippingEnabled,nn=it.init(this.clippingPlanes,hn),nn===!0&&it.setGlobalState(this.clippingPlanes,L),B!==null&&ut.render(w.state.shadowsArray,K,L);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let wt=W.material;if(wt)if(Array.isArray(wt))for(let Bt=0;Bt<wt.length;Bt++){let Rt=wt[Bt];ko(Rt,K,L,W),G.add(Rt)}else ko(wt,K,L,W),G.add(wt)}),w=b.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(T,L,K=null){let G=this.compile(T,L,K);return new Promise(W=>{function wt(){if(G.forEach(function(Bt){let Ut=Qt.get(Bt).currentProgram;(Ut===void 0||Ut.isReady())&&G.delete(Bt)}),G.size===0){W(T);return}setTimeout(wt,10)}_e.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Jr=null;function Nc(T){Jr&&Jr(T)}function ga(){ve.stop()}function ji(){ve.start()}let ve=new hE;ve.setAnimationLoop(Nc),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(T){Jr=T,_t.setAnimationLoop(T),T===null?ve.stop():ve.start()},_t.addEventListener("sessionstart",ga),_t.addEventListener("sessionend",ji),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(T,L);let K=_t.enabled===!0&&_t.isPresenting===!0,G=P!==null&&(mt===null||K)&&P.begin(C,mt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(L),L=_t.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,L,mt),w=nt.get(T,b.length),w.init(L),w.state.textureUnits=$t.getTextureUnits(),b.push(w),Ge.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Xn.setFromArrayCamera(L):be.setFromProjectionMatrix(Ge,Na,L.reversedDepth),hn=this.localClippingEnabled,nn=it.init(this.clippingPlanes,hn),A=Et.get(T,g.length),A.init(),g.push(A),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){let Bt=C.xr.getDepthSensingMesh();Bt!==null&&Wo(Bt,L,-1/0,C.sortObjects)}Wo(T,L,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(kt,bn),_i=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,_i&&D.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),nn===!0&&it.beginShadows();let W=w.state.shadowsArray;if(ut.render(W,T,L),nn===!0&&it.endShadows(),(G&&P.hasRenderPass())===!1){let Bt=A.opaque,Rt=A.transmissive;if(w.setupLights(),L.isArrayCamera){let Ut=L.cameras;if(Rt.length>0)for(let Ft=0,ae=Ut.length;Ft<ae;Ft++){let Me=Ut[Ft];Dc(Bt,Rt,T,Me)}_i&&D.render(T);for(let Ft=0,ae=Ut.length;Ft<ae;Ft++){let Me=Ut[Ft];Xo(A,T,Me,Me.viewport)}}else Rt.length>0&&Dc(Bt,Rt,T,L),_i&&D.render(T),Xo(A,T,L)}mt!==null&&Y===0&&($t.updateMultisampleRenderTarget(mt),$t.updateRenderTargetMipmap(mt)),G&&P.end(C),T.isScene===!0&&T.onAfterRender(C,T,L),bt.resetDefaultState(),tt=-1,ct=null,b.pop(),b.length>0?(w=b[b.length-1],$t.setTextureUnits(w.state.textureUnits),nn===!0&&it.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,B!==null&&B.renderEnd()};function Wo(T,L,K,G){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Bt=L.isArrayCamera?Xn:be;if(!T.frustumCulled||T.intersectsFrustum(Bt)){G&&_n.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ge);let Rt=yt.update(T),Ut=T.material;Ut.visible&&A.push(T,Rt,Ut,K,_n.z,null,L)}}else if(T.isMesh||T.isLine||T.isPoints){let Bt=L.isArrayCamera?Xn:be;if(!T.frustumCulled||T.intersectsFrustum(Bt)){let Rt=yt.update(T),Ut=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_n.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),_n.copy(Rt.boundingSphere.center)),_n.applyMatrix4(T.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ut)){let Ft=Rt.groups;for(let ae=0,Me=Ft.length;ae<Me;ae++){let It=Ft[ae],Ee=Ut[It.materialIndex];Ee&&Ee.visible&&A.push(T,Rt,Ee,K,_n.z,It,L)}}else Ut.visible&&A.push(T,Rt,Ut,K,_n.z,null,L)}}}let wt=T.children;for(let Bt=0,Rt=wt.length;Bt<Rt;Bt++)Wo(wt[Bt],L,K,G)}function Xo(T,L,K,G){let{opaque:W,transmissive:wt,transparent:Bt}=T;w.setupLightsView(K),nn===!0&&it.setGlobalState(C.clippingPlanes,K),G&&Mt.viewport(dt.copy(G)),W.length>0&&Qr(W,L,K),wt.length>0&&Qr(wt,L,K),Bt.length>0&&Qr(Bt,L,K),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Dc(T,L,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let It=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Cn(1,1,{generateMipmaps:!0,type:It?ui:Fi,minFilter:pa,samples:Math.max(4,ie.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}let wt=w.state.transmissionRenderTarget[G.id],Bt=G.viewport||dt;wt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),Ut=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(rt),Nt=C.getClearAlpha(),Nt<1&&C.setClearColor(16777215,.5),C.clear(),_i&&D.render(K);let ae=C.toneMapping;C.toneMapping=ys;let Me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),nn===!0&&it.setGlobalState(C.clippingPlanes,G),Qr(T,K,G),$t.updateMultisampleRenderTarget(wt),$t.updateRenderTargetMipmap(wt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Ee=0,rn=L.length;Ee<rn;Ee++){let tn=L[Ee],{object:Je,geometry:qn,material:Ht,group:ni}=tn;if(Ht.side===Nn&&Je.layers.test(G.layers)){let Oe=Ht.side;Ht.side=Bi,Ht.needsUpdate=!0,jr(Je,K,G,qn,Ht,ni),Ht.side=Oe,Ht.needsUpdate=!0,It=!0}}It===!0&&($t.updateMultisampleRenderTarget(wt),$t.updateRenderTargetMipmap(wt))}C.setRenderTarget(Rt,Ut,Ft),C.setClearColor(rt,Nt),Me!==void 0&&(G.viewport=Me),C.toneMapping=ae}function Qr(T,L,K){let G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,wt=T.length;W<wt;W++){let Bt=T[W],{object:Rt,geometry:Ut,group:Ft}=Bt,ae=Bt.material;ae.allowOverride===!0&&G!==null&&(ae=G),Rt.layers.test(K.layers)&&jr(Rt,L,K,Ut,ae,Ft)}}function jr(T,L,K,G,W,wt){B!==null&&W.isNodeMaterial&&B.setObject(T,W),T.onBeforeRender(C,L,K,G,W,wt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(C,L,K,G,T,wt),W.transparent===!0&&W.side===Nn&&W.forceSinglePass===!1?(W.side=Bi,W.needsUpdate=!0,C.renderBufferDirect(K,L,G,W,T,wt),W.side=Xr,W.needsUpdate=!0,C.renderBufferDirect(K,L,G,W,T,wt),W.side=Nn):C.renderBufferDirect(K,L,G,W,T,wt),T.onAfterRender(C,L,K,G,W,wt)}function qo(T){let L=0;for(let K of T)K.texture!==null&&L++;return L}function js(T,L,K){L.isScene!==!0&&(L=fi);let G=Qt.get(T),W=w.state.lights,wt=w.state.shadowsArray,Bt=W.state.version,Rt=ot.getParameters(T,W.state,wt,L,K,w.state.lightProbeGridArray),Ut=ot.getProgramCacheKey(Rt),Ft=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let ae=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=R.get(T.envMap||G.environment,ae),G.envMapRotation=G.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Ve),Ft=new Map,G.programs=Ft,G.programVariants=new Map);let Me=Ft.get(Ut);if(Me!==void 0){if(G.currentProgram===Me&&G.lightsStateVersion===Bt)return At(T,Rt),Me}else Rt.uniforms=ot.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,K,Rt),T.onBeforeCompile(Rt,C),Me=ot.acquireProgram(Rt,Ut),Ft.set(Ut,Me),G.uniforms=Rt.uniforms;let It=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=it.uniform),At(T,Rt),G.needsLights=Ef(T),G.lightsStateVersion=Bt,G.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.sunLights.value=W.state.sun,It.sunLightShadows.value=W.state.sunShadow,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.sunShadowMatrix.value=W.state.sunShadowMatrix,It.sunShadowCascade.value=W.state.sunShadowCascade,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=qo(w.state.lightProbeGridArray),G.currentProgram=Me,G.uniformsList=null,Me}function Ss(T,L,K,G,W){let wt=Qt.get(T),Bt=wt.currentProgram.id+","+G+","+W,Rt=wt.programVariants.get(Bt);return Rt===void 0?(Rt=js(T,L,K),wt.programVariants.set(Bt,Rt)):(wt.currentProgram=Rt,wt.uniformsList=null,wt.outputColorSpace=G,wt.toneMapping=W),Rt}function Z(T){if(T.uniformsList===null){let L=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function At(T,L){let K=Qt.get(T);K.outputColorSpace=L.outputColorSpace,K.batching=L.batching,K.batchingColor=L.batchingColor,K.instancing=L.instancing,K.instancingColor=L.instancingColor,K.instancingMorph=L.instancingMorph,K.skinning=L.skinning,K.morphTargets=L.morphTargets,K.morphNormals=L.morphNormals,K.morphColors=L.morphColors,K.morphTargetsCount=L.morphTargetsCount,K.numClippingPlanes=L.numClippingPlanes,K.numIntersection=L.numClipIntersection,K.vertexAlphas=L.vertexAlphas,K.vertexTangents=L.vertexTangents,K.toneMapping=L.toneMapping}function p0(T,L,K,G,W){L.isScene!==!0&&(L=fi),$t.resetTextureUnits();let wt=L.fog,Bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,Rt=mt===null?C.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:De.workingColorSpace,Ut=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ft=R.get(G.envMap||Bt,Ut),ae=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Me=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!K.morphAttributes.position,Ee=!!K.morphAttributes.normal,rn=!!K.morphAttributes.color,tn=ys;G.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(tn=C.toneMapping);let Je=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qn=Je!==void 0?Je.length:0,Ht=Qt.get(G),ni=w.state.lights;if(nn===!0&&(hn===!0||T!==ct)){let mn=T===ct&&G.id===tt;it.setState(G,T,mn)}let Oe=!1,va=!1;G.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==ni.state.version||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isBatchedMesh&&Ht.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ht.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ht.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ht.instancingMorph===!1&&W.morphTexture!==null||Ht.envMap!==Ft||G.fog===!0&&Ht.fog!==wt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==it.numPlanes||Ht.numIntersection!==it.numIntersection)||Ht.vertexAlphas!==ae||Ht.vertexTangents!==Me||Ht.morphTargets!==It||Ht.morphNormals!==Ee||Ht.morphColors!==rn||Ht.morphTargetsCount!==qn||Ht.numLightProbeGrids!==qo(w.state.lightProbeGridArray)?Oe=!0:(Ht.outputColorSpace!==Rt||Ht.toneMapping!==tn)&&(va=!0):(Oe=!0,Ht.__version=G.version);let zn=Ht.currentProgram;(Oe===!0||va===!0)&&(zn=va===!0?Ss(G,L,W,Rt,tn):js(G,L,W),B&&G.isNodeMaterial&&B.onUpdateProgram(G,zn,Ht));let Yo=!1,Ua=!1,Ri=!1,Ce=zn.getUniforms(),Bn=Ht.uniforms;if(Mt.useProgram(zn.program)&&(Yo=!0,Ua=!0,Ri=!0),G.id!==tt&&(tt=G.id,Ua=!0),Yo||ct!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(z,"projectionMatrix",T.projectionMatrix),Ce.setValue(z,"viewMatrix",T.matrixWorldInverse);let Tn=Ce.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,Jt.setFromMatrixPosition(T.matrixWorld)),ie.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),ct!==T&&(ct=T,Ua=!0,Ri=!0)}if(Ht.needsLights&&(ni.state.sunShadowMap.length>0&&Ce.setValue(z,"sunShadowMap",ni.state.sunShadowMap,$t),ni.state.directionalShadowMap.length>0&&Ce.setValue(z,"directionalShadowMap",ni.state.directionalShadowMap,$t),ni.state.spotShadowMap.length>0&&Ce.setValue(z,"spotShadowMap",ni.state.spotShadowMap,$t),ni.state.pointShadowMap.length>0&&Ce.setValue(z,"pointShadowMap",ni.state.pointShadowMap,$t)),W.isSkinnedMesh){Ce.setOptional(z,W,"bindMatrix"),Ce.setOptional(z,W,"bindMatrixInverse");let mn=W.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ce.setValue(z,"boneTexture",mn.boneTexture,$t))}W.isBatchedMesh&&(Ce.setOptional(z,W,"batchingTexture"),Ce.setValue(z,"batchingTexture",W._matricesTexture,$t),Ce.setOptional(z,W,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",W._indirectTexture,$t),Ce.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",W._colorsTexture,$t));let Vi=K.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&st.update(W,K,zn),(Ua||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,Ce.setValue(z,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Bn.envMapIntensity.value=L.environmentIntensity),Bn.dfgLUT!==void 0&&(Bn.dfgLUT.value=ZL()),Ua){if(Ce.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ht.needsLights&&Tf(Bn,Ri),wt&&G.fog===!0&&Tt.refreshFogUniforms(Bn,wt),Tt.refreshMaterialUniforms(Bn,G,Dt,zt,w.state.transmissionRenderTarget[T.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){let mn=x,Tn=0;for(let ya of w.state.lightProbeGridArray)ya.texture!==null&&(mn.textures[Tn]=ya.texture,mn.min[Tn]=ya.boundingBox.min,mn.max[Tn]=ya.boundingBox.max,mn.resolution[Tn]=ya.resolution,Tn++);for(let ya in mn)mn[ya].length=Tn;Bn.probesSH.value=mn.textures,Bn.probesMin.value=mn.min,Bn.probesMax.value=mn.max,Bn.probesResolution.value=mn.resolution}Ec.upload(z,Z(Ht),Bn,$t)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ec.upload(z,Z(Ht),Bn,$t),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ce.setValue(z,"center",W.center),Ce.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(z,"normalMatrix",W.normalMatrix),Ce.setValue(z,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let mn=G.uniformsGroups;for(let Tn=0,ya=mn.length;Tn<ya;Tn++){let Lc=mn[Tn];qt.update(Lc,zn),qt.bind(Lc,zn)}}return zn}function Tf(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.sunLights.needsUpdate=L,T.sunLightShadows.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function Ef(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(T,L,K){let G=Qt.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Qt.get(T.texture).__webglTexture=L,Qt.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,L){let K=Qt.get(T);K.__webglFramebuffer=L,K.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,K=0){mt=T,Q=L,Y=K;let G=null,W=!1,wt=!1;if(T){let Rt=Qt.get(T);if(Rt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),dt.copy(T.viewport),Xt.copy(T.scissor),ne=T.scissorTest,Mt.viewport(dt),Mt.scissor(Xt),Mt.setScissorTest(ne),tt=-1;return}else if(Rt.__webglFramebuffer===void 0)$t.setupRenderTarget(T);else if(Rt.__hasExternalTextures)$t.rebindTextures(T,Qt.get(T.texture).__webglTexture,Qt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ae=T.depthTexture;if(Rt.__boundDepthTexture!==ae){if(ae!==null&&Qt.has(ae)&&(T.width!==ae.image.width||T.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(wt=!0);let Ft=Qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[L])?G=Ft[L][K]:G=Ft[L],W=!0):T.samples>0&&$t.useMultisampledRTT(T)===!1?G=Qt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[K]:G=Ft,dt.copy(T.viewport),Xt.copy(T.scissor),ne=T.scissorTest}else dt.copy(jt).multiplyScalar(Dt).floor(),Xt.copy(Pe).multiplyScalar(Dt).floor(),ne=ue;if(K!==0&&(G=V),Mt.bindFramebuffer(z.FRAMEBUFFER,G)&&Mt.drawBuffers(T,G),Mt.viewport(dt),Mt.scissor(Xt),Mt.setScissorTest(ne),W){let Rt=Qt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+L,Rt.__webglTexture,K)}else if(wt){let Rt=L;for(let Ut=0;Ut<T.textures.length;Ut++){let Ft=Qt.get(T.textures[Ut]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ut,Ft.__webglTexture,K,Rt)}}else if(T!==null&&K!==0){let Rt=Qt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,K)}tt=-1};function In(T){let L=Qt.get(T);return(L.__readFormat!==T.format||L.__readType!==T.type)&&(L.__readFormat=T.format,L.__readType=T.type,L.__formatReadable=ie.textureFormatReadable(T.format),L.__typeReadable=ie.textureTypeReadable(T.type)),L}this.readRenderTargetPixels=function(T,L,K,G,W,wt,Bt,Rt=0){if(!(T&&T.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ut=Ut[Bt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut){Mt.bindFramebuffer(z.FRAMEBUFFER,Ut);try{let Ft=T.textures[Rt],ae=Ft.format,Me=Ft.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let It=In(Ft);if(It.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-G&&K>=0&&K<=T.height-W&&z.readPixels(L,K,G,W,xt.convert(ae),xt.convert(Me),wt)}finally{let Ft=mt!==null?Qt.get(mt).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,L,K,G,W,wt,Bt,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ut=Ut[Bt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut)if(L>=0&&L<=T.width-G&&K>=0&&K<=T.height-W){Mt.bindFramebuffer(z.FRAMEBUFFER,Ut);let Ft=T.textures[Rt],ae=Ft.format,Me=Ft.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let It=In(Ft);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,wt.byteLength,z.STREAM_READ),z.readPixels(L,K,G,W,xt.convert(ae),xt.convert(Me),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let rn=mt!==null?Qt.get(mt).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,rn);let tn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await BT(z,tn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,wt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ee),z.deleteSync(tn),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,L=null,K=0){let G=Math.pow(2,-K),W=Math.floor(T.image.width*G),wt=Math.floor(T.image.height*G),Bt=L!==null?L.x:0,Rt=L!==null?L.y:0;$t.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Bt,Rt,W,wt),Mt.unbindTexture()},this.copyTextureToTexture=function(T,L,K=null,G=null,W=0,wt=0){let Bt,Rt,Ut,Ft,ae,Me,It,Ee,rn,tn=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(K!==null)Bt=K.max.x-K.min.x,Rt=K.max.y-K.min.y,Ut=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,ae=K.min.y,Me=K.isBox3?K.min.z:0;else{let Ce=Math.pow(2,-W);Bt=Math.floor(tn.width*Ce),Rt=Math.floor(tn.height*Ce),T.isDataArrayTexture?Ut=tn.depth:T.isData3DTexture?Ut=Math.floor(tn.depth*Ce):Ut=1,Ft=0,ae=0,Me=0}G!==null?(It=G.x,Ee=G.y,rn=G.z):(It=0,Ee=0,rn=0);let Je=xt.convert(L.format),qn=xt.convert(L.type),Ht;L.isData3DTexture?($t.setTexture3D(L,0),Ht=z.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?($t.setTexture2DArray(L,0),Ht=z.TEXTURE_2D_ARRAY):($t.setTexture2D(L,0),Ht=z.TEXTURE_2D),Mt.activeTexture(z.TEXTURE0),Mt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,L.flipY),Mt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Mt.pixelStorei(z.UNPACK_ALIGNMENT,L.unpackAlignment);let ni=Mt.getParameter(z.UNPACK_ROW_LENGTH),Oe=Mt.getParameter(z.UNPACK_IMAGE_HEIGHT),va=Mt.getParameter(z.UNPACK_SKIP_PIXELS),zn=Mt.getParameter(z.UNPACK_SKIP_ROWS),Yo=Mt.getParameter(z.UNPACK_SKIP_IMAGES);Mt.pixelStorei(z.UNPACK_ROW_LENGTH,tn.width),Mt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tn.height),Mt.pixelStorei(z.UNPACK_SKIP_PIXELS,Ft),Mt.pixelStorei(z.UNPACK_SKIP_ROWS,ae),Mt.pixelStorei(z.UNPACK_SKIP_IMAGES,Me);let Ua=T.isDataArrayTexture||T.isData3DTexture,Ri=L.isDataArrayTexture||L.isData3DTexture;if(T.isDepthTexture){let Ce=Qt.get(T),Bn=Qt.get(L),Vi=Qt.get(Ce.__renderTarget),mn=Qt.get(Bn.__renderTarget);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,Vi.__webglFramebuffer),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Tn=0;Tn<Ut;Tn++)Ua&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qt.get(T).__webglTexture,W,Me+Tn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qt.get(L).__webglTexture,wt,rn+Tn)),z.blitFramebuffer(Ft,ae,Ft+Bt,ae+Rt,It,Ee,It+Bt,Ee+Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Qt.has(T)){let Ce=Qt.get(T),Bn=Qt.get(L);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,N),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let Vi=0;Vi<Ut;Vi++)Ua?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.__webglTexture,W,Me+Vi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,W),Ri?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bn.__webglTexture,wt,rn+Vi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bn.__webglTexture,wt),W!==0?z.blitFramebuffer(Ft,ae,Ft+Bt,ae+Rt,It,Ee,It+Bt,Ee+Rt,z.COLOR_BUFFER_BIT,z.NEAREST):Ri?z.copyTexSubImage3D(Ht,wt,It,Ee,rn+Vi,Ft,ae,Bt,Rt):z.copyTexSubImage2D(Ht,wt,It,Ee,Ft,ae,Bt,Rt);Mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ri?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ht,wt,It,Ee,rn,Bt,Rt,Ut,Je,qn,tn.data):L.isCompressedArrayTexture?z.compressedTexSubImage3D(Ht,wt,It,Ee,rn,Bt,Rt,Ut,Je,tn.data):z.texSubImage3D(Ht,wt,It,Ee,rn,Bt,Rt,Ut,Je,qn,tn):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,wt,It,Ee,Bt,Rt,Je,qn,tn.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,wt,It,Ee,tn.width,tn.height,Je,tn.data):z.texSubImage2D(z.TEXTURE_2D,wt,It,Ee,Bt,Rt,Je,qn,tn);Mt.pixelStorei(z.UNPACK_ROW_LENGTH,ni),Mt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe),Mt.pixelStorei(z.UNPACK_SKIP_PIXELS,va),Mt.pixelStorei(z.UNPACK_SKIP_ROWS,zn),Mt.pixelStorei(z.UNPACK_SKIP_IMAGES,Yo),wt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&z.generateMipmap(Ht),Mt.unbindTexture()},this.initRenderTarget=function(T){Qt.get(T).__webglFramebuffer===void 0&&$t.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$t.setTextureCube(T,0):T.isData3DTexture?$t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$t.setTexture2DArray(T,0):$t.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){Q=0,Y=0,mt=null,Mt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}};var u0={tree:!0,birds:6,squirrel:!0,swallows:!0,dandelions:100,wildflowers:100,motes:!0,flowerA:"#f3c227",flowerB:"#f7f4ec",flowerC:"#9a78e2"};var JL="summer",QL={kind:"clear",rain:100,snow:100,leafFall:100},LE={height:100,density:100,bladeColor:"#405e2b",tipColor:"#5f793b",dryColor:"#7c7452",dry:8},Vo={springBlade:"#467a24",springTip:"#8fb24a",autumnBlade:"#5a5626",autumnTip:"#b58f45",winterBlade:"#7d7156",winterTip:"#cbbb95",blossom:"#a782dc",leafA:"#e0a531",leafB:"#cf5a1f",leafC:"#8f341a",snow:"#f3f6fa"},Wy={x:15.5,z:-31,size:100,turn:0,sway:5,leafTint:"#e7efdd",barkTint:"#f6f1ec"},f0={show:!0,type:"van",x:.3,z:-7.4,size:100,turn:0,body:"#7fbad0",roof:"#f1eee6",carPaint:"#c4573a",carRoof:"#efece4",bikePaint:"#a8322b",bikeFrame:"#202124",lights:"auto",headColor:"#fff0d7",windowColor:"#ffd19b",power:5},jL={exposure:100,warmth:0,sunSize:100,sunGlow:100,rays:100,haze:100,stars:100,moonSize:100,meteors:100,nightSky:100},$L={x:0,y:0,angle:0,tilt:0},tU=!0,eU={brush:5,spring:5,gusts:!0,zoom:!0},nU={start:0,scroll:"wheel",sensitivity:5},iU={strength:5,direction:51.5},aU={camHeight:1.58,fov:47,camYaw:0,detail:100,pixelRatio:1.3},UE=1200,PE=750,ht=(e=0,t=0,n=0)=>new J(e,t,n),yn=(e,t)=>new ju(e,t),Qi=(e,t)=>new Wn(e,t),bf={minFilter:Pn,magFilter:Pn},Iy={transparent:!0,depthWrite:!1,blending:xc,blendSrc:Sc,blendDst:zo},Yt=(e,t,n)=>Math.min(n,Math.max(t,e)),ee=(e,t,n)=>e+(t-e)*n,qe=(e,t,n)=>{let i=Yt((n-e)/(t-e),0,1);return i*i*(3-2*i)},o0=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,sU=(e,t)=>typeof e=="number"&&isFinite(e)?e:t;function Ka(e){let t=e;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Qs(e,t){let n=Math.imul(e,374761393)+Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function rU(e,t){let n=Math.floor(e),i=Math.floor(t),a=e-n,s=t-i,r=a*a*(3-2*a),o=s*s*(3-2*s);return ee(ee(Qs(n,i),Qs(n+1,i),r),ee(Qs(n,i+1),Qs(n+1,i+1),r),o)}function Js(e,t,n=4){let i=0,a=.5,s=0;for(let r=0;r<n;r++)i+=a*rU(e,t),s+=a,e*=2.03,t*=2.03,a*=.5;return i/s}var zy=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),bE=new Map;function Dn(e,t){let n=e||t,i=bE.get(n);if(i)return i;let a=0,s=0,r=0,o=n.trim(),l=o.match(/^rgba?\(([^)]+)\)/i);if(l){let h=l[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat);a=(h[0]||0)/255,s=(h[1]||0)/255,r=(h[2]||0)/255}else if(o[0]==="#"){let h=o.slice(1);(h.length===3||h.length===4)&&(h=h.split("").map(u=>u+u).join(""));let d=parseInt(h.slice(0,6),16)||0;a=(d>>16&255)/255,s=(d>>8&255)/255,r=(d&255)/255}else if(n!==t)return Dn(t,t);let c=[zy(a),zy(s),zy(r)];return bE.set(n,c),c}var He={x:0,z:8},Cc={x:15.5,z:-31};function On(e,t){let n=.55*Math.sin(e*.043+.6)*Math.cos(t*.037-.4);n+=.9*(Js(e*.018+11,t*.018-7,3)-.5);let i=e-Cc.x,a=t-Cc.z;n+=1.6*Math.exp(-(i*i+a*a)/1352),n+=-.012*(t-He.z)*qe(0,60,He.z-t);let s=Math.hypot(e-He.x,t-He.z),r=qe(140,620,s),o=Js(e*.0021+3,t*.0021+9,5);return n+r*(78*Math.pow(o,1.7)+4+16*Js(e*.009-4,t*.009+2,3))}function oU(e,t,n){let i=.3;for(let a=0;a<260;a++){let s=.05+i*.02,r=i+s,o=e.x+t.x*r,l=e.y+t.y*r,c=e.z+t.z*r;if(l-(On(o,c)+n)<0){let h=i,d=r;for(let u=0;u<10;u++){let p=(h+d)/2;e.y+t.y*p-(On(e.x+t.x*p,e.z+t.z*p)+n)<0?d=p:h=p}return{x:e.x+t.x*d,y:e.y+t.y*d,z:e.z+t.z*d,t:d}}if(i=r,i>160)break}return null}var lU=[.796,1.004,1.117,.321,.317,.781,-.044,-.05,-.064,-.233,-.289,-.418,-.248,-.301,-.441,-.05,-.054,-.067,-.111,-.127,-.184,.079,.083,.101,-.021,-.003,.018],cU=[1.138,1.314,1.349,.487,.511,.777,-.508,-.522,-.458,-.146,-.177,-.219,.023,-.018,-.1,-.309,-.315,-.29,.522,.527,.422,.459,.421,.283,.245,.327,.362],uU=[.932,.826,.922,.477,.445,.696,-.621,-.432,-.332,.275,.221,.222,.088,.086,.117,-.235,-.191,-.193,.49,.294,.142,-.34,-.258,-.21,.136,.07,-.013],fU=[.63,.959,1.792,.224,.393,.91,0,0,0,0,0,0,0,0,0,0,0,0,.092,.118,.146,0,0,0,.16,.205,.252],By=[.507,.522,.474,.416,.394,.437,-.017,-.016,-.014,-.026,-.019,-.013,-.013,-.009,-.005,-.032,-.031,-.031,-.059,-.059,-.061,.017,.015,.014,-.12,-.121,-.126],Fy=[.638,.711,.754,.468,.485,.632,-.178,-.17,-.159,-.029,-.018,-.003,-.031,-.021,-.005,-.186,-.177,-.166,.035,.023,.004,.063,.058,.049,-.033,-.047,-.076],l0=[{sky:0,rays:.12,sunMul:1,shMul:1,exposure:1.62,cloud:.75,fog:7e-4,bloom:.01,warm:0,sat:1.03,contrast:1,lift:[0,0,.004],fogTint:[.92,.95,1],wind:.62,sunE:[3.955,3.982,3.628],sh:lU},{sky:1,rays:.24,sunMul:.8,shMul:.85,exposure:.66,cloud:.2,fog:.001,bloom:.02,warm:.06,sat:1,contrast:1.06,lift:[.01,.005,0],fogTint:[.92,.9,.84],wind:.7,sunE:[8.595,7.27,3.629],sh:cU},{sky:2,rays:.18,sunMul:1,shMul:1,exposure:.72,cloud:0,fog:55e-5,bloom:.012,warm:0,sat:1.04,contrast:1.06,lift:[.006,.004,.012],fogTint:[.5,.48,.56],wind:.45,minSun:[.55,.28,.14],sunE:[.053,.03,.01],sh:uU},{sky:3,rays:0,sunMul:1,shMul:1.25,exposure:.36,cloud:0,fog:.0011,bloom:.035,warm:-.07,sat:.78,contrast:1.08,lift:[0,.004,.014],fogTint:[.9,.95,1.05],wind:.32,moon:!0,sunE:[1.15,1.32,1.7],sh:fU}],hU=[[-62,44],[-25,17],[3,.6],[-4,-16]],dU=[[2,-40],[0,-26],[-3,-7],[-9,16]],pU=["spring","summer","autumn","winter"],TE=[1,1.3,.85,.3],EE=[[1,1,1],[1.07,.98,.88],[.86,.86,1],[.6,.7,1]],Ue=`
#define PI 3.14159265
#define RS(a,b,x) (1.0-smoothstep(b,a,x))
uniform float uTime;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uSH[9];
uniform float uSkyKA; uniform float uSkyKB; uniform float uSkyMix; uniform float uSkyDimA; uniform float uGainA; uniform float uGainB;
uniform sampler2D uNoise; uniform vec2 uWindDir; uniform float uWind;
uniform sampler2D uShadow; uniform mat4 uShadowMat; uniform float uShadowStr;
uniform float uFog; uniform vec3 uFogTint; uniform float uCloud;
uniform sampler2D uSim; uniform vec4 uSimRect;
uniform sampler2D uField; uniform vec4 uFieldRect;
uniform float uNight; uniform vec3 uNightFog;
uniform vec4 uHead; uniform vec4 uHead2; uniform vec3 uHeadDir; uniform vec3 uHeadDir2; uniform vec4 uVanGlow; uniform vec4 uVanPos; uniform vec3 uHeadCol; uniform vec3 uWinCol;
uniform float uWxMix; uniform float uOver; uniform vec3 uOverGain;
uniform vec4 uSeason; uniform float uSnow; uniform float uWet; uniform float uRain; uniform float uSnowFall; uniform vec3 uSnowCol;
uniform sampler2D uHeight; uniform vec4 uHeightRect; uniform vec2 uTreeXZ; uniform vec3 uSkyAvg; uniform vec4 uSunDisc;
float groundAt(vec2 xz){ return textureLod(uHeight, (xz - uHeightRect.xy)/uHeightRect.zw, 0.0).r; }
// lo = 1 is the blurred sky the horizon fog is read from: coarse mips and
// soft cloud edges, so a single cloud never streaks the distant hills.
float cN(vec2 p, float lo){
float l = lo*5.0;
float n = textureLod(uNoise, p, l).r*0.56 + textureLod(uNoise, p*2.17 + 0.31, l).g*0.29;
return n + (lo > 0.5 ? 0.075 : textureLod(uNoise, p*4.63 + 0.57, 0.0).b*0.15);
}
float cov2(float a, float b, float n, float lo){ return smoothstep(a - lo*0.12, b + lo*0.12, n)*(1.0 - lo*0.55); }
// The Milky Way: a great circle falling to the right of the view, its
// bright bulge low on the right horizon, broken by dust lanes.
vec3 milky(vec3 d){
vec3 ax = normalize(vec3(0.69, 0.57, 0.43));
float t = dot(d, ax);
vec3 u = normalize(cross(ax, vec3(0.0, 1.0, 0.0)));
float a = atan(dot(d, cross(ax, u)), dot(d, u));
float n = textureLod(uNoise, vec2(a*0.7, t*2.2), 0.0).r;
float n2 = textureLod(uNoise, vec2(a*2.3, t*6.0) + 0.3, 0.0).g;
float n3 = textureLod(uNoise, vec2(a*6.0, t*14.0) + 0.6, 0.0).b;
float w = 0.15 + 0.08*n;
float band = exp(-t*t/(w*w));
float core = exp(-pow((t - 0.015)/(w*0.4), 2.0));
float lane = smoothstep(0.5, 0.72, n2)*core;
vec3 bd = normalize(vec3(0.42, 0.2, -0.88));
float bulge = exp(-dot(d - bd, d - bd)/0.18);
float g = band*(0.3 + 0.7*smoothstep(0.3, 0.72, n))*(0.6 + 0.4*n3)*(0.5 + 1.3*bulge) - lane*0.4*(0.4 + bulge);
return max(g, 0.0)*mix(vec3(0.6, 0.66, 0.9), vec3(1.0, 0.88, 0.76), core*bulge)*1.1;
}
vec3 skyK(float k, vec3 d, float lo){
float e = max(d.y, 0.0);
vec3 sd = normalize(uSunDisc.xyz + vec3(0.0, 1e-4, 0.0));
float mu = max(dot(d, sd), 0.0);
float az = max(dot(normalize(d.xz + 1e-5), normalize(sd.xz + 1e-5)), 0.0);
vec2 cp = d.xz/(e + 0.085);
vec2 dr = uWindDir*uTime*0.0016;
float hz = smoothstep(0.0, 0.035, e);
vec3 c;
if (k < 0.5) {
c = mix(vec3(0.3, 0.37, 0.52), vec3(0.035, 0.07, 0.2), pow(e, 0.4));
c += vec3(0.5, 0.48, 0.42)*pow(mu, 6.0)*0.6 + vec3(0.2, 0.2, 0.2)*pow(1.0 - e, 10.0);
vec2 p = cp*0.1 + dr*2.0 + vec2(0.31, 0.88);
float big = textureLod(uNoise, p*0.3 + 0.21, lo*3.0).g;
float n = cN(p, lo) + (big - 0.5)*0.4;
float cov = cov2(0.545, 0.585, n, lo);
float lit = 0.7;
if (lo < 0.5) {
float nu = cN(p*0.96, 0.0) + (textureLod(uNoise, p*0.96*0.3 + 0.21, 0.0).g - 0.5)*0.4;
float ns = cN(p + normalize(sd.xz + 1e-5)*0.02, 0.0);
lit = clamp(0.6 + (n - nu)*9.0 + (n - ns)*3.0, 0.0, 1.0);
}
vec3 cc = mix(vec3(0.36, 0.41, 0.52), vec3(1.85, 1.82, 1.76), lit);
cc = mix(cc, vec3(0.5, 0.55, 0.66), smoothstep(0.66, 0.8, n)*0.5);
c = mix(c, cc, cov*hz);
} else if (k < 1.5) {
c = mix(vec3(0.52, 0.57, 0.58), vec3(0.15, 0.22, 0.42), pow(e, 0.35));
c += vec3(0.3, 0.28, 0.22)*pow(mu, 3.0);
vec2 p = cp*0.035 + dr*0.7 + vec2(0.71, 0.2);
float n = cN(p, lo);
float cov = cov2(0.46, 0.7, n, lo)*smoothstep(0.08, 0.5, e);
vec3 cc = mix(vec3(0.5, 0.52, 0.52), vec3(0.95, 0.9, 0.78), clamp(0.4 + mu*0.8, 0.0, 1.0));
c = mix(c, cc, cov*0.75);
} else if (k < 2.5) {
c = mix(vec3(0.85, 0.66, 0.56), vec3(0.2, 0.19, 0.28), pow(e, 0.4));
c += vec3(2.6, 1.3, 0.45)*pow(az, 6.0)*exp(-e*10.0) + vec3(0.9, 0.6, 0.4)*pow(mu, 3.0)*0.35;
vec2 p = cp*0.11 + dr*2.0 + vec2(0.37, 0.05);
float big = textureLod(uNoise, cp*0.012 + vec2(0.62, 0.17), lo*3.0).r;
float n = cN(p, lo);
float mask = smoothstep(0.4, 0.58, big + (1.0 - az)*0.22)*smoothstep(0.03, 0.22, e);
float cov = cov2(0.42, 0.6, n, lo)*mask;
vec3 under = mix(vec3(0.42, 0.34, 0.42), vec3(1.25, 0.66, 0.52), pow(az, 3.0)*(1.0 - e));
vec3 cc = mix(vec3(0.24, 0.22, 0.28), under, smoothstep(0.45, 0.72, n));
c = mix(c, cc, cov*0.92);
} else if (k < 3.5) {
c = mix(vec3(0.3, 0.4, 0.72), vec3(0.08, 0.15, 0.38), pow(e, 0.5));
if (lo < 0.5) c += milky(d)*smoothstep(0.0, 0.2, e);
} else if (k < 4.5) {
c = mix(vec3(0.42, 0.42, 0.41), vec3(0.26, 0.27, 0.28), pow(e, 0.6));
float n = cN(cp*0.03 + dr*2.0, lo);
c *= 0.82 + 0.3*n;
} else {
c = mix(vec3(0.6, 0.63, 0.68), vec3(0.42, 0.45, 0.52), pow(e, 0.6));
float n = cN(cp*0.03 + dr*1.2, lo);
c *= 0.88 + 0.2*n;
}
return c;
}
vec3 skyMix(vec3 d, float lo){
vec3 s = vec3(0.0);
if (uOver < 0.999) {
if (uSkyMix < 0.001) s = skyK(uSkyKA, d, lo)*uSkyDimA*uGainA;
else if (uSkyMix > 0.999) s = skyK(uSkyKB, d, lo)*uGainB;
else s = mix(skyK(uSkyKA, d, lo)*uSkyDimA*uGainA, skyK(uSkyKB, d, lo)*uGainB, uSkyMix);
}
if (uOver > 0.001) s = mix(s, mix(skyK(4.0, d, lo), skyK(5.0, d, lo), uWxMix)*uOverGain, uOver);
return s;
}
vec3 skyRad(vec3 d){ return skyMix(d, 0.0); }
uniform sampler2D uFogLUT;
vec3 fogColor(vec3 dir){
float az = degrees(atan(dir.x, -dir.z));
return textureLod(uFogLUT, vec2(clamp((az + 100.0)/200.0, 0.001, 0.999), 0.5), 0.0).rgb;
}
float fogAmount(vec3 wp){
float d = length(wp - cameraPosition);
float hf = exp(-max(wp.y - 2.0, 0.0)*0.018);
return (1.0 - exp(-d*uFog))*mix(0.55, 1.0, hf);
}
vec3 shIrr(vec3 n){
float x=n.x, y=n.y, z=n.z;
vec3 r = 3.141593*0.282095*uSH[0] + 2.094395*0.488603*(uSH[1]*y + uSH[2]*z + uSH[3]*x)
+ 0.785398*(1.092548*(uSH[4]*x*y + uSH[5]*y*z + uSH[7]*x*z) + 0.315392*uSH[6]*(3.0*z*z-1.0) + 0.546274*uSH[8]*(x*x-y*y));
return max(r, vec3(0.0));
}
float gustAt(vec2 xz){
float n1 = textureLod(uNoise, xz*0.0105 - uWindDir*uTime*0.050, 0.0).r;
float n2 = textureLod(uNoise, xz*0.036 - uWindDir*uTime*0.135 + 0.37, 0.0).g;
return smoothstep(0.36, 0.80, n1*0.72 + n2*0.28);
}
float cloudAt(vec3 wp){
if (uCloud <= 0.0) return 1.0;
float n = textureLod(uNoise, wp.xz*0.0019 - uWindDir*uTime*0.0021 + vec2(0.31,0.77), 0.0).b;
return 1.0 - uCloud*smoothstep(0.56, 0.70, n)*0.6;
}
float shadowAt(vec3 wp, float bias, float spread){
vec4 sp = uShadowMat*vec4(wp,1.0);
vec3 c = sp.xyz*0.5+0.5;
if (c.x<0.0||c.x>1.0||c.y<0.0||c.y>1.0||c.z>1.0) return 1.0;
vec2 ts = spread/vec2(textureSize(uShadow,0));
float s = 0.0;
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2(-1.0,-1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 1.0,-1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2(-1.0, 1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 1.0, 1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy).r)*2.0;
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 0.0,-1.6)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 0.0, 1.6)*ts).r);
return mix(1.0, s/8.0, uShadowStr);
}
float shadow1(vec3 wp, float bias){
vec4 sp = uShadowMat*vec4(wp,1.0);
vec3 c = sp.xyz*0.5+0.5;
if (c.x<0.0||c.x>1.0||c.y<0.0||c.y>1.0||c.z>1.0) return 1.0;
return mix(1.0, step(c.z-bias, textureLod(uShadow, c.xy, 0.0).r), uShadowStr);
}
vec3 vanLights(vec3 alb, vec3 N, vec3 wp){
vec3 c = vec3(0.0);
if (uHead.w > 0.0) {
for (int i = 0; i < 2; i++) {
vec3 lp = i == 0 ? uHead.xyz : uHead2.xyz;
vec3 hd = normalize(i == 0 ? uHeadDir : uHeadDir2);
vec3 L = lp - wp; float d = length(L); L /= d;
float ca = dot(-L, hd);
float cone = smoothstep(0.9781, 0.9976, ca);
float reach = RS(15.0, 9.0, d);
c += alb*uHeadCol*cone*reach*uHead.w/(0.6 + d*d*0.06)*(0.4 + 0.6*max(dot(N, L), 0.0));
}
}
if (uVanGlow.w > 0.0) {
vec3 L = uVanGlow.xyz - wp; float d = length(L); L /= d;
c += alb*uWinCol*uVanGlow.w/(1.0 + d*d*0.9)*(0.4 + 0.6*max(dot(N, L), 0.0));
}
return c;
}
float vanShade(vec3 wp){
if (uVanPos.w <= 0.0) return 1.0;
float d = length((wp.xz - uVanPos.xy)*vec2(0.8, 1.25));
return 1.0 - uVanPos.w*RS(uVanPos.z, uVanPos.z*0.3, d);
}
vec3 sunLight(vec3 alb, vec3 N, vec3 V, float sh, float rough, float trans, vec3 tcol){
vec3 L = uSunDir;
float ndl = dot(N, L);
float nl = max(ndl, 0.0);
vec3 diff = alb*(1.0/PI)*nl;
vec3 H = normalize(L+V);
float ndh = max(dot(N,H),0.0), ndv = max(dot(N,V),0.02);
float a = rough*rough, a2 = a*a, dd = ndh*ndh*(a2-1.0)+1.0;
float D = a2/(PI*dd*dd);
float k = a*0.5;
float G = ndv/(ndv*(1.0-k)+k) * nl/(nl*(1.0-k)+k+1e-4);
float F = 0.04 + 0.96*pow(1.0-max(dot(H,V),0.0), 5.0);
vec3 spec = vec3(D*G*F/(4.0*ndv));
float back = max(-ndl, 0.0);
float fwd = pow(max(dot(-V, L), 0.0), 5.0);
vec3 tr = tcol*(back*0.55 + fwd*1.5)*trans*(1.0/PI);
return uSunCol*sh*(diff + spec + tr);
}
`,c0=`
vec4 fieldAt(vec2 xz){ return textureLod(uField, (xz - uFieldRect.xy)/uFieldRect.zw, 0.0); }
vec2 windVec(vec2 xz, float rnd, out float g){
g = fieldAt(xz).r;
vec2 perp = vec2(-uWindDir.y, uWindDir.x);
float sway = sin(uTime*(1.7+rnd*0.9) + rnd*6.283 + dot(xz, vec2(0.61,0.37)));
float flick = sin(uTime*(5.3+rnd*2.0) + rnd*17.0);
return uWindDir*uWind*(0.10 + 0.78*g + 0.06*sway) + perp*uWind*(sway*(0.05+0.10*g) + flick*0.025*g);
}
vec2 touchAt(vec2 xz){
vec2 uv = (xz - uSimRect.xy)/uSimRect.zw;
if (uv.x<=0.0||uv.y<=0.0||uv.x>=1.0||uv.y>=1.0) return vec2(0.0);
return textureLod(uSim, uv, 0.0).xy;
}
void stalk(vec2 D, float H, float t, out vec3 P, out vec3 T){
float a = length(D);
vec2 dd = a > 1e-4 ? D/a : vec2(0.0, 1.0);
float tilt = a*1.12;
vec3 tip = vec3(dd.x*sin(tilt), cos(tilt), dd.y*sin(tilt))*H;
vec3 p1 = vec3(dd.x*sin(tilt*0.45), cos(tilt*0.45), dd.y*sin(tilt*0.45))*H*0.5;
P = 2.0*t*(1.0-t)*p1 + t*t*tip;
T = normalize(2.0*(1.0-t)*p1 + 2.0*t*(tip-p1) + vec3(0.0,1e-4,0.0));
}
`,Go=`
uniform mat4 uTreeM; uniform vec3 uTreeBase; uniform float uTreeH; uniform float uSway; uniform vec3 uLeafTint; uniform vec3 uBarkTint;
uniform vec3 uBlossom; uniform vec3 uAutA; uniform vec3 uAutB; uniform vec3 uAutC;
vec3 treeWind(vec3 p, float leaf){
float h = clamp((p.y - uTreeBase.y)/uTreeH, 0.0, 1.4);
float g = gustAt(uTreeBase.xz + (p.xz - uTreeBase.xz)*0.35);
vec2 wd = uWindDir; vec2 pd = vec2(-wd.y, wd.x);
float sway = (0.3 + 0.7*g)*uWind*uSway;
float t = uTime;
vec3 off = vec3(wd.x, 0.0, wd.y)*(sway*0.55 + sin(t*0.85)*0.16*sway)*h*h;
off += vec3(pd.x, 0.0, pd.y)*sin(t*0.61 + 1.3)*0.08*sway*h*h;
vec2 r2 = p.xz - uTreeBase.xz; float r = length(r2);
float bw = smoothstep(1.5, 8.0, r)*smoothstep(0.15, 0.6, h);
vec3 n3 = textureLod(uNoise, p.xz*0.045 + vec2(t*0.045, -t*0.035), 0.0).rgb - 0.5;
off += vec3(n3.x, n3.y*0.8, n3.z)*bw*sway*1.25;
off.y += sin(t*1.6 + r*0.55 + p.x*0.3)*0.09*bw*sway;
if (leaf > 0.0) {
vec3 f = vec3(sin(t*8.3 + p.x*7.1 + p.y*3.3), sin(t*9.7 + p.z*6.3 + p.x*2.0), sin(t*7.1 + p.y*5.7 + p.z*2.2));
off += f*0.032*leaf*(0.35 + g)*uWind;
}
return off;
}
`,Yr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Hy=`
vec3 boxCentre(vec3 box){
vec3 fwd = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
vec2 f2 = normalize(fwd.xz + vec2(1e-5));
return vec3(cameraPosition.x + f2.x*box.x*0.3, cameraPosition.y - 1.6, cameraPosition.z + f2.y*box.z*0.3);
}
vec2 boxXZ(vec2 r, vec3 ctr, vec3 box){ return ctr.xz + (fract(r - ctr.xz/box.xz) - 0.5)*box.xz; }
`,h0="vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);",mU=`
uniform sampler2D uPrev; uniform vec4 uRect; uniform float uDt; uniform float uTime;
uniform vec2 uB0; uniform vec2 uB1; uniform float uBrushR; uniform float uBrushOn; uniform vec2 uMoveDir; uniform float uSpeed;
uniform vec4 uRip[6]; uniform float uSpring;
varying vec2 vUv;
void main(){
vec4 s = texture2D(uPrev, vUv);
vec2 d = s.xy, v = s.zw;
vec2 p = uRect.xy + vUv*uRect.zw;
vec2 acc = -15.0*uSpring*d - 3.1*sqrt(uSpring)*v;
for (int i=0;i<6;i++){
vec4 r = uRip[i];
float age = uTime - r.z;
if (age < 0.0 || age > 5.0) continue;
vec2 q = p - r.xy; float L = length(q);
float rad = age*7.5;
float q2 = (L-rad)/1.3; float w = exp(-q2*q2);
acc += (q/max(L,1e-3))*w*r.w*70.0*exp(-age*0.75)/(1.0 + L*0.05);
}
v += acc*uDt;
d += v*uDt;
if (uBrushOn > 0.0){
vec2 ab = uB1 - uB0;
float h = clamp(dot(p-uB0, ab)/max(dot(ab,ab),1e-6), 0.0, 1.0);
vec2 q = p - (uB0 + ab*h);
float L = length(q);
float f = RS(uBrushR, uBrushR*0.2, L);
if (f > 0.0){
vec2 rd = L > 1e-3 ? q/L : uMoveDir;
vec2 T = (rd*0.95 + uMoveDir*min(uSpeed*0.18, 0.75))*(0.55 + 0.75*f);
float m = clamp(f*uDt*26.0*uBrushOn, 0.0, 1.0);
d = mix(d, T, m);
v *= 1.0 - m*0.9;
}
}
d = clamp(d, vec2(-1.6), vec2(1.6));
gl_FragColor = vec4(d, v);
}`,gU=`
uniform mat4 uInvVP; uniform float uPixAng; uniform vec4 uMet[4]; uniform vec4 uMetB[4]; uniform vec4 uMoonDisc; uniform float uSunGlow; uniform float uSunSize; uniform float uMoonSize; uniform float uStars;
varying vec2 vNdc;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec3 starLayer(vec3 d, float N, float prob, float bright, float sharp, float seed){
float el = asin(clamp(d.y, -1.0, 1.0)), az = atan(d.x, -d.z);
float rows = N*0.5;
float iy = floor((el/PI + 0.5)*rows);
float cel = cos(((iy + 0.5)/rows - 0.5)*PI);
float cols = max(floor(N*cel), 1.0);
float ix = floor((az/(2.0*PI) + 0.5)*cols);
vec2 cell = vec2(ix, iy) + seed;
if (h21(cell) > prob) return vec3(0.0);
vec2 j = vec2(h21(cell + 1.7), h21(cell + 5.3))*0.6 + 0.2;
float sel = ((iy + j.y)/rows - 0.5)*PI, saz = ((ix + j.x)/cols - 0.5)*2.0*PI;
vec3 sd = vec3(sin(saz)*cos(sel), sin(sel), -cos(saz)*cos(sel));
float ang = length(d - sd);
float mag = pow(h21(cell + 9.1), sharp);
float b = bright*mag + 0.12;
float tw = 0.72 + 0.28*sin(uTime*(2.5 + 6.0*h21(cell + 3.3)) + h21(cell)*60.0);
float g = exp(-pow(ang/(uPixAng*(0.75 + 0.5*mag)), 2.0));
vec3 tint = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.85, 0.66), h21(cell + 2.2));
return tint*b*g*tw;
}
vec3 meteors(vec3 d){
float eld = degrees(asin(clamp(d.y, -1.0, 1.0))), azd = degrees(atan(d.x, -d.z));
float pxd = degrees(uPixAng);
vec3 c = vec3(0.0);
for (int i = 0; i < 4; i++){
vec4 m = uMet[i], mb = uMetB[i];
float age = uTime - m.w;
if (age < 0.0 || age > mb.y) continue;
float life = age/mb.y;
vec2 dir = vec2(cos(m.z), sin(m.z));
vec2 head = m.xy + dir*mb.x*age;
float ce = cos(radians(eld));
vec2 p = vec2((azd - head.x)*ce, eld - head.y);
vec2 dd = normalize(vec2(dir.x*ce, dir.y));
float along = -dot(p, dd);
float across = abs(p.x*dd.y - p.y*dd.x);
float tail = mb.z*min(1.0, age*3.0);
float fade = smoothstep(0.0, 0.12, life)*(1.0 - smoothstep(0.65, 1.0, life));
float w = pxd*(1.3 - 0.6*clamp(along/max(tail, 1e-3), 0.0, 1.0));
float trail = (along > 0.0 && along < tail) ? exp(-(across*across)/(w*w))*pow(1.0 - along/tail, 1.7) : 0.0;
float headG = exp(-dot(p, p)/(pxd*pxd*3.5));
c += vec3(0.82, 0.93, 1.0)*(trail + headG*1.8)*mb.w*fade;
}
return c;
}
void main(){
vec4 p = uInvVP*vec4(vNdc, 1.0, 1.0);
vec3 d = normalize(p.xyz/p.w - cameraPosition);
vec3 c = min(skyRad(d), vec3(80.0));
if (uSunDisc.w > 0.0) {
float a = length(d - uSunDisc.xyz);
float R = 0.0085*uSunSize;
float low = RS(0.45, 0.0, uSunDisc.y);
vec3 sc = mix(vec3(1.0, 0.95, 0.86), vec3(1.0, 0.58, 0.26), low);
float mu = sqrt(max(1.0 - (a*a)/(R*R), 0.0));
float disc = RS(R, R*0.93, a)*(0.5 + 0.5*mu);
float g = uSunGlow;
vec3 glow = sc*(exp(-a/0.035)*2.6 + exp(-a/0.14)*0.4 + exp(-a/0.5)*0.06)*g;
vec2 hz2 = normalize(d.xz + 1e-5), sz2 = normalize(uSunDisc.xz + 1e-5);
glow += sc*exp(-max(d.y, 0.0)*9.0)*pow(max(dot(hz2, sz2), 0.0), 6.0)*0.6*g*(0.4 + low);
c += (sc*disc*170.0 + glow*1.25)*uSunDisc.w;
}
if (uMoonDisc.w > 0.0) {
vec3 md = uMoonDisc.xyz;
float a = length(d - md);
float R = 0.0135*uMoonSize;
if (a < R*1.05) {
vec3 rt = normalize(cross(md, vec3(0.0, 1.0, 0.0)));
vec3 up = cross(rt, md);
vec2 q = vec2(dot(d - md, rt), dot(d - md, up))/R;
float rr = dot(q, q);
vec3 n = vec3(q, sqrt(max(1.0 - rr, 0.0)));
float lit = smoothstep(-0.05, 0.14, dot(n, normalize(vec3(0.78, 0.22, 0.42))));
float m1 = textureLod(uNoise, q*0.33 + vec2(0.41, 0.17), 0.0).a;
float m2 = textureLod(uNoise, q*1.1 + vec2(0.13, 0.71), 0.0).r;
float alb = 0.58 + 0.42*RS(0.52, 0.36, m1) - 0.08*m2;
vec3 mc = vec3(1.0, 0.97, 0.9)*alb*(lit*(0.55 + 0.45*n.z) + 0.03);
c = mix(c, mc*22.0*uMoonDisc.w, RS(1.0, 0.92, rr)*smoothstep(-0.01, 0.01, md.y + 0.004));
}
c += vec3(0.72, 0.8, 1.0)*(exp(-a/0.022)*0.35 + exp(-a/0.14)*0.07)*uMoonDisc.w;
}
if (uNight > 0.001 && d.y > -0.02) {
float ext = smoothstep(-0.01, 0.16, d.y);
float mw = dot(milky(d), vec3(0.3333));
vec3 st = starLayer(d, 520.0, 0.10, 7.0, 7.0, 0.0) + starLayer(d, 1100.0, 0.07 + clamp(mw*0.15, 0.0, 0.2), 1.4, 9.0, 31.7);
float dark = RS(1.1, 0.35, dot(c, vec3(0.2126, 0.7152, 0.0722)));
c += (st*ext*dark*uStars + meteors(d)*(1.0 - uOver))*uNight;
}
float hz = RS(0.06, -0.04, d.y);
c = mix(c, fogColor(d), hz);
gl_FragColor = vec4(c, 1.0);
}`,vU=`
varying vec3 vWP; varying vec3 vN;
void main(){
vec3 V = normalize(cameraPosition - vWP);
float dist = length(vWP - cameraPosition);
float n1 = texture2D(uNoise, vWP.xz*0.0061).r;
float n2 = texture2D(uNoise, vWP.xz*0.027 + 0.3).g;
float n3 = texture2D(uNoise, vWP.xz*0.11 + 0.7).b;
vec3 alb = mix(vec3(0.050,0.078,0.020), vec3(0.090,0.105,0.032), smoothstep(0.3,0.75,n1));
alb = mix(alb, vec3(0.16,0.14,0.065), smoothstep(0.58,0.78,n2*0.6+n1*0.4)*0.55);
alb = mix(alb, alb*vec3(0.9, 1.18, 0.8), uSeason.x);
alb = mix(alb, mix(vec3(0.13,0.10,0.04), vec3(0.20,0.15,0.06), n1), uSeason.z*0.7 + uSeason.w*0.5);
alb *= 0.82 + 0.36*n3;
float under = 1.0 - smoothstep(48.0, 92.0, dist);
alb = mix(alb, vec3(0.020,0.028,0.009), under*0.9);
if (uSeason.z > 0.001) {
float near = 1.0 - smoothstep(4.0, 13.0, length(vWP.xz - uTreeXZ));
float lit = smoothstep(0.52, 0.66, n2*0.55 + n3*0.45 + near*0.35)*uSeason.z;
vec3 lc = mix(vec3(0.36, 0.16, 0.035), vec3(0.42, 0.27, 0.05), n3);
alb = mix(alb, lc*(0.6 + 0.5*n1), lit*(0.35 + 0.5*near));
}
float sn = 0.0;
vec3 N = normalize(vN);
if (uSnow > 0.001) {
float cover = clamp((uSnow - 0.15 + (n1 - 0.5)*0.55 + (n2 - 0.5)*0.25)*2.2, 0.0, 1.0);
sn = cover;
alb = mix(alb, uSnowCol*(0.93 + 0.07*n3), sn);
under *= 1.0 - sn;
N = normalize(N + vec3(n2 - 0.5, 0.0, n3 - 0.5)*0.22*sn);
}
float wet = uWet*(1.0 - sn);
alb *= 1.0 - 0.42*wet;
float g = gustAt(vWP.xz);
vec3 Nc = normalize(N + vec3(uWindDir.x, 0.0, uWindDir.y)*g*0.5*uWind*(1.0 - sn));
float sh = shadowAt(vWP + N*0.05, 0.0015, 1.5)*cloudAt(vWP)*vanShade(vWP);
vec3 c = sunLight(alb, Nc, V, sh*mix(1.0, 0.35, under), mix(mix(0.95, 0.45, wet), 0.7, sn), 0.7*(1.0-under)*(1.0 - sn), alb*vec3(1.8,2.0,0.8));
c += alb*(1.0/PI)*shIrr(N)*mix(1.0, 0.5, under);
c *= 1.0 + 0.22*g*uWind*(1.0-under)*(1.0 - sn);
if (wet > 0.01) {
float fr = 0.04 + 0.96*pow(1.0 - max(dot(N, V), 0.0), 5.0);
c += skyRad(reflect(-V, N))*fr*wet*0.5*(1.0 - under*0.7);
}
if (sn > 0.01) {
vec2 cell = floor(vWP.xz*70.0);
float h = fract(sin(dot(cell, vec2(12.9898, 78.233)) + floor(dot(V, vec3(31.0, 17.0, 23.0))))*43758.5453);
vec3 Hs = normalize(uSunDir + V);
float gl = step(0.9965, h)*pow(max(dot(N, Hs), 0.0), 3.0)*(1.0 - smoothstep(6.0, 30.0, dist));
c += uSunCol*sh*gl*sn*6.0;
}
c += vanLights(alb, N, vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`,yU=`
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
uniform float uFadeNear; uniform float uFadeFar; uniform float uPix; uniform float uStem; uniform float uGrow;
uniform float uGrassH; uniform vec3 uBlade; uniform vec3 uTip; uniform vec3 uDryC; uniform float uDry;
varying vec3 vWP; varying vec3 vN; varying vec3 vS; varying float vT; varying float vSide;
varying vec3 vAlb; varying vec3 vFogC; varying float vFogF; varying float vSh; varying float vKind;
void main(){
vec3 root = iA.xyz; float rnd = iA.w;
float kind = iC.z;
float dist = length(root - cameraPosition);
float fade = 1.0 - smoothstep(uFadeNear, uFadeFar, dist);
float Hh = iB.x*fade*uGrow*uGrassH;
float sd = uSnow*(0.09 + 0.07*textureLod(uNoise, root.xz*0.11, 0.0).r);
if (uSnow > 0.001 && kind < 2.5) {
float tuft = smoothstep(0.52, 0.78, textureLod(uNoise, root.xz*0.21 + 0.4, 0.0).g);
float keepP = mix(1.0, (uStem > 0.5 ? 0.25 : 0.035) + 0.42*tuft, uSnow);
float keep = step(fract(rnd*31.7), keepP);
Hh = Hh*keep > sd*1.35 ? Hh - sd : 0.0;
root.y += sd;
}
float g;
vec2 w = windVec(root.xz, rnd, g);
if (uSnow > 0.001) w *= 1.0 - 0.45*uSnow;
float stiff = kind > 1.5 ? 0.55 : clamp(Hh/0.55, 0.45, 1.5);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w*(1.0 + 0.35*uWet) + w*stiff + touchAt(root.xz)*(kind > 2.5 ? 0.8 : 1.0);
if (uRain > 0.001) {
float ph = uTime*2.3 + rnd*41.0;
float k = floor(ph), f = ph - k;
float h = fract(sin(k*12.9898 + rnd*78.233)*43758.5453);
float kick = step(1.0 - 0.55*uRain, h)*exp(-f*7.0)*sin(f*34.0);
float ang = h*40.0;
D += vec2(cos(ang), sin(ang))*kick*0.14*clamp(0.5/max(Hh, 0.12), 0.4, 2.0);
}
float a = length(D); if (a > 1.35) D *= 1.35/a;
float t = position.y;
vec3 P, T;
stalk(D, Hh, t, P, T);
vec3 S0 = vec3(-sin(iB.z), 0.0, cos(iB.z));
vec3 Sb = a > 1e-3 ? vec3(-D.y, 0.0, D.x)/a : S0;
if (dot(Sb, S0) < 0.0) Sb = -Sb;
vec3 S = normalize(mix(S0, Sb, clamp(a, 0.0, 1.0)*0.6));
S = normalize(S - T*dot(S, T));
float wdt;
if (uStem > 0.5) {
float head = kind > 2.5 ? 0.0 : smoothstep(0.78, 0.83, t)*pow(max(sin(PI*clamp((t-0.79)/0.21,0.0,1.0)),0.0), 0.6);
wdt = iB.y + head*0.0085;
} else {
wdt = iB.y*(1.0 - pow(t, 2.3))*(0.78 + 0.22*smoothstep(0.0, 0.18, t));
}
wdt = max(wdt, dist*uPix*0.75*(1.0 - t*0.8));
vec3 wp = root + P + S*position.x*wdt*0.5;
vec3 N = normalize(cross(S, T));
vWP = wp; vN = N; vS = S; vT = t; vSide = position.x; vKind = kind;
float tone = iC.y, ct = floor(iC.w)/100.0;
float pch = fract(iC.w);
vec3 c1 = uBlade, c2 = uTip, c0 = uBlade*vec3(0.27, 0.27, 0.33);
vec3 lush = c2*vec3(0.35, 0.62, 0.77), olive = c2*vec3(1.30, 0.87, 1.18);
vec3 alb = mix(c0, c1, smoothstep(0.0, 0.42, t));
vec3 tipc = mix(c2, mix(lush, olive, smoothstep(0.35, 0.75, pch)), 0.55);
alb = mix(alb, tipc, smoothstep(0.38, 1.0, t)*(0.55 + 0.45*ct));
alb = mix(alb, alb*vec3(1.14, 1.0, 0.78), smoothstep(0.55, 1.0, ct)*0.5);
alb *= tone*(0.85 + 0.3*pch);
bool isDry = (kind > 0.5 && kind < 1.5) ? fract(rnd*13.7) < uDry/0.08 : (kind < 0.5 && fract(rnd*7.31) < max(uDry - 0.08, 0.0)/0.92);
if (isDry) alb = mix(uDryC*vec3(0.25, 0.31, 0.29), uDryC*tone, smoothstep(0.05,0.6,t));
if (uStem > 0.5) {
vec3 stemC = mix(vec3(0.045,0.075,0.02), vec3(0.14,0.16,0.06), t);
vec3 headC = vec3(0.21, 0.175, 0.09)*tone;
vec3 straw = uDryC*vec3(0.55, 0.5, 0.42)*tone;
float ripe = uSeason.z + uSeason.w;
stemC = mix(stemC, mix(straw*0.55, straw, t), ripe);
headC = mix(mix(headC, vec3(0.09, 0.14, 0.04)*tone, uSeason.x), straw*1.15, ripe);
alb = kind > 2.5 ? mix(vec3(0.05,0.085,0.025), vec3(0.11,0.17,0.06), t) : mix(stemC, headC, smoothstep(0.78, 0.84, t));
}
vAlb = alb;
vec3 mid = root + vec3(0.0, Hh*0.6, 0.0);
vSh = shadow1(mid, 0.004)*(1.0 - uCloud*smoothstep(0.56, 0.70, fieldAt(root.xz).g)*0.6)*vanShade(root);
vFogF = fogAmount(wp);
vFogC = vFogF > 0.004 ? fogColor(normalize(wp - cameraPosition)) : vec3(0.0);
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,_U=`
uniform float uStem;
varying vec3 vWP; varying vec3 vN; varying vec3 vS; varying float vT; varying float vSide;
varying vec3 vAlb; varying vec3 vFogC; varying float vFogF; varying float vSh; varying float vKind;
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN);
if (dot(N, V) < 0.0) N = -N;
float t = clamp(vT, 0.0, 1.0);
float side = clamp(vSide, -1.0, 1.0);
vec3 Nr = normalize(N + normalize(vS + vec3(1e-5))*side*0.5);
vec3 alb = max(vAlb, vec3(0.0));
alb *= 0.9 + 0.14*(1.0 - abs(side));
if (uStem > 0.5 && vKind < 2.5 && t > 0.79) alb *= 0.75 + 0.5*fract(sin(floor(t*95.0)*12.9898)*43758.5);
float ao = mix(mix(0.16, 0.62, uSnow), 1.0, pow(t, 0.75));
float self = mix(mix(0.22, 0.6, uSnow), 1.0, smoothstep(0.0, 0.8, t));
alb *= 1.0 - 0.32*uWet;
vec3 tcol = alb*vec3(1.85, 2.0, 0.9) + vec3(0.008, 0.012, 0.0);
vec3 Nl = normalize(Nr + vec3(0.0, 0.55, 0.0));
vec3 c = sunLight(alb, Nl, V, vSh*self, mix(0.56, 0.3, uWet), 1.0, tcol);
c += alb*(1.0/PI)*shIrr(normalize(Nr + vec3(0.0, 0.7, 0.0)))*ao;
if (uWet > 0.01) {
float fr = 0.03 + 0.97*pow(1.0 - abs(dot(Nr, V)), 5.0);
c += uSkyAvg*fr*uWet*0.22*ao;
}
c += vanLights(alb*mix(0.5, 1.0, t), Nl, vWP);
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c, 1.0);
}`,xU=`
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC; attribute float iBlown; uniform float uYellow;
varying vec2 vUv; varying float vA; varying vec3 vWP; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vYel;
void main(){
vYel = step(fract(iA.w*7.77 + 0.13), uYellow);
vec3 root = iA.xyz;
float g; vec2 w = windVec(root.xz, iA.w, g);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w + w*0.55 + touchAt(root.xz)*0.8;
float a = length(D); if (a > 1.35) D *= 1.35/a;
vec3 P, T; stalk(D, iB.x, 1.0, P, T);
vec3 c = root + P + T*0.012;
float age = uTime - iBlown;
float gone = vYel > 0.5 ? 0.0 : smoothstep(0.0, 0.35, age)*(1.0 - smoothstep(24.0, 30.0, age));
float R = (vYel > 0.5 ? 0.021 : 0.026)*(1.0 - gone*0.85);
vA = 1.0 - gone;
${h0}
vec3 wp = c + (right*position.x + up*position.y)*R;
vUv = position.xy*0.5 + 0.5; vWP = c;
vSh = shadowAt(c, 0.004, 2.0)*cloudAt(c);
vFogF = fogAmount(c); vFogC = fogColor(normalize(c - cameraPosition));
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,SU=`
uniform sampler2D uPuff; uniform sampler2D uBloom; uniform vec3 uFlowerA;
varying vec2 vUv; varying float vA; varying vec3 vWP; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vYel;
void main(){
vec4 t = vYel > 0.5 ? texture2D(uBloom, vUv) : texture2D(uPuff, vUv);
float a = t.a*vA;
if (a < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0)*(1.0 - vYel*0.7);
vec3 alb = vYel > 0.5 ? uFlowerA*t.r*0.8 : t.rgb*0.95;
vec3 c = alb*(1.0/PI)*(shIrr(vec3(0.0,1.0,0.0))*1.5 + uSunCol*vSh*(0.85 + 2.6*back));
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c*a, a);
}`,MU=`
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vType;
void main(){
vec3 root = iA.xyz;
float g; vec2 w = windVec(root.xz, iA.w, g);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w + w*0.5 + touchAt(root.xz)*0.85;
float a = length(D); if (a > 1.35) D *= 1.35/a;
vec3 P, T; stalk(D, iB.x, 1.0, P, T);
vec3 c = root + P + T*0.004;
float type = floor((fract(iC.w) - 0.5)*10.0 + 0.5);
vType = type;
float R = (type < 0.5 ? 0.022 : type < 1.5 ? 0.027 : type < 2.5 ? 0.017 : 0.012)*(0.85 + 0.3*fract(iA.w*9.1));
vec3 toCam = normalize(cameraPosition - c);
vec3 N = normalize(vec3(0.0, 1.0, 0.0)*0.8 + toCam*0.35 + T*0.4 + vec3(fract(iA.w*17.0) - 0.5, 0.0, fract(iA.w*29.0) - 0.5)*0.5);
vec3 rgt = normalize(cross(N, abs(N.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0)));
vec3 up = cross(rgt, N);
float spin = iA.w*6.283;
vec2 q = vec2(position.x*cos(spin) - position.y*sin(spin), position.x*sin(spin) + position.y*cos(spin));
vec3 wp = c + (rgt*q.x + up*q.y)*R;
vec2 cell = vec2(mod(type, 2.0), floor(type/2.0));
vUv = (vec2(position.x, -position.y)*0.5 + 0.5)*0.5 + cell*0.5;
vUv.y = 1.0 - vUv.y;
vWP = c; vN = N;
vSh = shadowAt(c, 0.004, 2.0)*cloudAt(c);
vFogF = fogAmount(c); vFogC = fogColor(normalize(c - cameraPosition));
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,bU=`
uniform sampler2D uWild; uniform vec3 uFlowerA; uniform vec3 uFlowerB; uniform vec3 uFlowerC;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vType;
void main(){
vec4 t = texture2D(uWild, vUv);
if (t.a < 0.35) discard;
vec3 petal = vType < 0.5 ? uFlowerA : vType < 1.5 ? uFlowerB : vType < 2.5 ? uFlowerC : uFlowerC*vec3(0.62, 0.95, 1.5);
vec3 mid = vType < 0.5 ? uFlowerA*vec3(0.75, 0.8, 0.4) : vType < 2.5 ? uFlowerA : vec3(0.9);
float gm = clamp(t.g*1.6, 0.0, 1.0);
vec3 alb = mix(petal*(0.25 + 0.75*t.r), mid*(0.4 + 0.6*t.g), gm);
alb *= 1.0 - 0.25*uWet;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
float ndl = dot(N, uSunDir);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = uSunCol*vSh*alb*(1.0/PI)*(max(ndl, 0.0)*0.85 + 0.25 + back*1.2);
c += alb*(1.0/PI)*shIrr(normalize(N + vec3(0.0, 0.6, 0.0)))*0.9;
c += vanLights(alb, N, vWP);
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c, 1.0);
}`,TU=`
attribute vec4 iR; uniform vec3 uBox; uniform float uAmt; uniform float uPixAng;
varying float vA; varying float vX; varying vec3 vCol;
void main(){
if (iR.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
vec3 ctr = boxCentre(uBox);
float spd = 7.0 + 3.0*fract(iR.w*71.3);
vec2 drift = uWindDir*(0.5 + uWind*3.2);
float H = uBox.y;
float ty = fract(iR.y + uTime*spd/H);
vec3 p;
p.xz = boxXZ(iR.xz, ctr, uBox) + drift*(ty*H/spd);
p.y = ctr.y + H*0.82 - ty*H;
vec3 vel = normalize(vec3(drift.x, -spd, drift.y));
float len = spd*0.03 + 0.05;
vec3 toC = cameraPosition - p; float dist = length(toC);
vec3 side = normalize(cross(vel, toC/dist));
float wdt = max(0.0018, dist*uPixAng*0.85);
vec3 wp = p + side*position.x*wdt - vel*(position.y*0.5 + 0.5)*len;
vX = position.x;
float edge = 1.0 - smoothstep(uBox.x*0.34, uBox.x*0.5, length(p.xz - ctr.xz));
vA = edge*smoothstep(0.3, 1.5, dist)*smoothstep(0.0, 0.05, ty)*smoothstep(-0.05, 0.25, p.y - groundAt(p.xz));
vec3 V = toC/dist;
vCol = vA > 0.001 ? skyRad(normalize(vec3(-V.x, 0.4, -V.z)))*0.8 + vanLights(vec3(1.0), V, p)*3.0 : vec3(0.0);
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,EU=`
varying float vA; varying float vX; varying vec3 vCol;
void main(){
float a = vA*(1.0 - vX*vX);
if (a < 0.002) discard;
gl_FragColor = vec4(vCol*a*0.5, a*0.3);
}`,AU=`
attribute vec4 iR; uniform vec3 uBox; uniform float uAmt; uniform float uPixAng;
varying float vA; varying vec2 vQ; varying vec3 vWP; varying float vBlur;
void main(){
if (iR.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
vec3 ctr = boxCentre(uBox);
float spd = 0.7 + 0.65*fract(iR.w*51.7);
float H = uBox.y;
float ty = fract(iR.y + uTime*spd/H);
float tf = ty*H/spd;
vec2 drift = uWindDir*(0.25 + uWind*1.5);
float ph = iR.w*40.0;
vec3 p;
p.xz = boxXZ(iR.xz, ctr, uBox) + drift*tf;
p.x += sin(uTime*(0.6 + iR.x) + ph)*0.3 + sin(tf*1.1 + ph*2.0)*0.25;
p.z += cos(uTime*(0.5 + iR.z) + ph)*0.3 + cos(tf*0.9 + ph)*0.2;
p.y = ctr.y + H*0.85 - ty*H;
vec3 toC = cameraPosition - p; float dist = length(toC);
${h0}
float size = 0.0055 + 0.0075*pow(fract(iR.w*13.7), 1.5);
float blur = RS(2.2, 0.5, dist);
float S = max(size*(1.0 + blur*3.5), dist*uPixAng*1.5);
vBlur = blur;
float edge = 1.0 - smoothstep(uBox.x*0.34, uBox.x*0.5, length(p.xz - ctr.xz));
vA = edge*smoothstep(0.15, 0.5, dist)*clamp(size*2.2/S, 0.2, 1.0)*smoothstep(0.0, 0.05, ty)*smoothstep(-0.02, 0.15, p.y - groundAt(p.xz));
vQ = position.xy; vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(p + (right*position.x + up*position.y)*S, 1.0);
}`,wU=`
varying float vA; varying vec2 vQ; varying vec3 vWP; varying float vBlur;
void main(){
float d = length(vQ);
float a = vA*RS(1.0, mix(0.3, 0.0, vBlur), d)*(1.0 - 0.55*vBlur);
if (a < 0.003) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 4.0);
vec3 c = uSnowCol*(1.0/PI)*(shIrr(vec3(0.0, 1.0, 0.0))*1.5 + uSunCol*(0.6 + back*1.5)) + vanLights(uSnowCol, V, vWP)*1.6;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*a, a);
}`,RU=`
attribute vec4 iR; attribute vec4 iS;
uniform vec3 uCanopyC; uniform vec3 uCanopyR; uniform float uLeafAmt; uniform float uPetalAmt; uniform float uPetalShare; uniform vec3 uBox;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying vec3 vCol; varying float vA;
vec3 rot(vec3 v, vec3 k, float a){ return v*cos(a) + cross(k, v)*sin(a) + k*dot(k, v)*(1.0 - cos(a)); }
void main(){
bool petal = fract(iS.z*5.31) < uPetalShare;
if (iR.w > (petal ? uPetalAmt : uLeafAmt)) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
bool tree = iS.x < 0.62;
vec3 p; float landed = 0.0, a = 1.0, t;
if (tree) {
float T = 16.0 + 12.0*iS.w;
float ph = fract(uTime/T + iR.w*13.0);
t = ph*T;
vec3 s0 = uCanopyC + (iR.xyz*2.0 - 1.0)*uCanopyR*vec3(0.8, 0.55, 0.8);
float g0 = groundAt(s0.xz);
float fallT = max(s0.y - g0, 0.5)/(petal ? 0.8 : 1.15);
float tf = min(t, fallT);
vec2 d = uWindDir*(0.25 + uWind*1.5)*tf + vec2(sin(tf*1.6 + iS.y*20.0), cos(tf*1.25 + iS.w*20.0))*0.7*min(tf, 1.5);
p = vec3(s0.x + d.x, mix(s0.y, g0, tf/fallT), s0.z + d.y);
p.y = max(p.y, groundAt(p.xz) + 0.012);
landed = step(fallT, t);
a = smoothstep(0.0, 0.02, ph)*(1.0 - smoothstep(0.8, 1.0, ph));
} else {
vec3 box = uBox;
vec3 ctr = boxCentre(box);
float spd = 0.6 + uWind*2.6;
t = uTime + iR.w*50.0;
p.xz = boxXZ(iR.xz + uWindDir*uTime*spd/box.xz, ctr, box);
float gust = fieldAt(p.xz).r;
float lift = (0.25 + 0.75*max(0.0, sin(t*0.37 + iS.y*9.0)))*(0.5 + 1.8*gust);
p.y = groundAt(p.xz) + 0.05 + lift*(0.5 + 1.5*iR.y);
float edge = 1.0 - smoothstep(box.x*0.34, box.x*0.5, length(p.xz - ctr.xz));
a = edge*smoothstep(0.4, 1.2, length(cameraPosition - p));
}
vec3 k = normalize(vec3(iS.y - 0.5, iS.z - 0.5 + 0.2, iS.w - 0.5));
float ang = t*(2.2 + 3.5*iS.y) + iS.z*6.283;
vec3 X = rot(vec3(1.0, 0.0, 0.0), k, ang), Z = rot(vec3(0.0, 0.0, 1.0), k, ang);
float yaw = iS.y*6.283;
vec3 Xl = vec3(cos(yaw), 0.0, sin(yaw)), Zl = vec3(-sin(yaw), 0.0, cos(yaw));
X = normalize(mix(X, Xl, landed)); Z = normalize(mix(Z, Zl, landed));
float size = petal ? 0.016 + 0.009*iS.w : 0.042 + 0.024*iS.w;
vec3 wp = p + (X*position.x + Z*position.y)*size;
int cell = petal ? (iS.x > 0.9 ? 3 : 2) : (iS.w > 0.55 ? 1 : 0);
vec2 c2 = vec2(float(cell - (cell/2)*2), float(cell/2));
vUv = (position.xy*0.5 + 0.5)*0.5 + vec2(c2.x, 1.0 - c2.y)*0.5;
vN = normalize(cross(X, Z));
float pick = fract(iS.w*7.3 + iR.z);
vec3 au = mix(uAutA, uAutB, smoothstep(0.25, 0.65, pick));
au = mix(au, uAutC, smoothstep(0.72, 0.96, pick));
vCol = petal ? uBlossom*(0.9 + 0.2*iS.y) : au*(0.75 + 0.35*iS.y);
vA = a;
vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,CU=`
uniform sampler2D uFallTex;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying vec3 vCol; varying float vA;
void main(){
vec4 t = texture2D(uFallTex, vUv);
if (t.a < 0.4 || vA < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
vec3 alb = vCol*t.r*(1.0 - 0.25*uWet);
float ndl = dot(N, uSunDir);
float sh = shadowAt(vWP, 0.003, 1.5)*cloudAt(vWP);
float tr = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = uSunCol*sh*alb*(1.0/PI)*(0.35 + 0.65*abs(ndl) + tr*1.8);
c += alb*(1.0/PI)*shIrr(normalize(N*0.4 + vec3(0.0, 0.8, 0.0)))*1.1;
c += vanLights(alb, N, vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*vA, vA);
}`,NU=`
attribute vec4 iP; varying vec2 vUv; varying float vA; varying vec3 vWP;
void main(){
${h0}
float r = iP.w*6.283;
vec2 q = vec2(position.x*cos(r*0.15) - position.y*sin(r*0.15), position.x*sin(r*0.15) + position.y*cos(r*0.15));
vec3 wp = iP.xyz + (right*q.x + up*q.y)*0.03;
vUv = position.xy*0.5+0.5; vA = clamp(iP.w, 0.0, 1.0); vWP = iP.xyz;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,DU=`
uniform sampler2D uSeed; varying vec2 vUv; varying float vA; varying vec3 vWP;
void main(){
vec4 t = texture2D(uSeed, vUv);
float a = t.a*vA;
if (a < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = t.rgb*(1.0/PI)*(shIrr(vec3(0,1,0))*1.2 + uSunCol*(0.8 + 4.5*back));
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*a, a);
}`,LU=`
attribute vec4 iA; uniform vec3 uHome; varying vec2 vUv; varying float vB; varying vec3 vWP;
void main(){
vec3 p = iA.xyz;
float t = uTime*0.12 + iA.w*40.0;
p.x += sin(t*1.3 + iA.w*9.0)*0.8 + uWindDir.x*mod(uTime*0.35 + iA.w*30.0, 30.0) - 6.0;
p.z += cos(t*1.1 + iA.w*5.0)*0.8 + uWindDir.y*mod(uTime*0.35 + iA.w*30.0, 30.0) - 6.0;
p.y += sin(t*2.0 + iA.w*3.0)*0.35;
p += uHome;
${h0}
float s = 0.006 + 0.006*fract(iA.w*13.0);
vec3 wp = p + (right*position.x + up*position.y)*s;
vec3 V = normalize(cameraPosition - p);
float ph = fract(iA.w*31.0 + uTime*0.03);
vB = pow(max(dot(-V, uSunDir), 0.0), 6.0)*smoothstep(0.0, 0.25, ph)*RS(1.0, 0.75, ph);
vUv = position.xy; vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,UU=`
varying vec2 vUv; varying float vB; varying vec3 vWP;
void main(){
float d = length(vUv); if (d > 1.0) discard;
float a = RS(1.0, 0.0, d);
gl_FragColor = vec4(uSunCol*vB*a*0.9*shadowAt(vWP, 0.0008, 1.5), 1.0);
}`,AE=`
varying vec3 vWP; varying vec3 vN; varying vec2 vUv;
void main(){
vec4 w = uTreeM*vec4(position, 1.0);
w.xyz += treeWind(w.xyz, 0.0);
vWP = w.xyz; vN = normalize(mat3(uTreeM)*normal); vUv = uv;
gl_Position = projectionMatrix*viewMatrix*w;
}`,PU=`
uniform vec3 uCanopyC; uniform vec3 uCanopyR;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv;
float barkH(vec2 q){ return texture2D(uNoise, q*vec2(1.0, 0.16)).r*0.72 + texture2D(uNoise, q*vec2(2.0, 0.55) + 0.37).g*0.28; }
vec3 perturb(vec3 N, vec3 p, vec2 uv, vec3 tn){
vec3 dp1 = dFdx(p), dp2 = dFdy(p); vec2 du1 = dFdx(uv), du2 = dFdy(uv);
vec3 d2p = cross(dp2, N), d1p = cross(N, dp1);
vec3 T = d2p*du1.x + d1p*du2.x, B = d2p*du1.y + d1p*du2.y;
float inv = inversesqrt(max(max(dot(T,T), dot(B,B)), 1e-12));
return normalize(mat3(T*inv, B*inv, N)*tn);
}
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
vec2 q = vec2(vUv.x, vUv.y*0.35);
float h = barkH(q);
float hu = barkH(q + vec2(0.01, 0.0)), hv = barkH(q + vec2(0.0, 0.02));
vec3 tn = normalize(vec3((h - hu)*9.0, (h - hv)*5.0, 1.0));
N = perturb(N, vWP, vUv, tn);
float ridge = smoothstep(0.38, 0.66, h);
float lich = smoothstep(0.62, 0.8, texture2D(uNoise, vUv*vec2(0.5, 0.11) + 0.71).b);
vec3 alb = mix(vec3(0.028, 0.024, 0.02), vec3(0.12, 0.105, 0.088), ridge);
alb = mix(alb, vec3(0.12, 0.13, 0.09), lich*0.4)*uBarkTint;
alb *= 1.0 - 0.35*uWet;
float up = smoothstep(0.2, 0.75, normalize(vN).y + (tn.x - 0.0)*0.15);
alb = mix(alb, uSnowCol*0.9, uSnow*up*0.92);
float inside = length((vWP - uCanopyC)/uCanopyR);
float ao = mix(0.35, 1.0, smoothstep(0.2, 1.05, inside))*mix(0.55, 1.0, smoothstep(0.0, 2.5, vWP.y - uTreeBase.y));
ao = mix(ao, 1.0, uSeason.w*0.55);
float sh = shadowAt(vWP + N*0.04, 0.0009, 1.2)*cloudAt(vWP);
vec3 c = sunLight(alb, N, V, sh, 0.78, 0.0, vec3(0.0));
c += alb*(1.0/PI)*shIrr(N)*ao;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`,wE=`
attribute vec3 iM0; attribute vec3 iM1; attribute vec3 iM2; attribute vec3 iM3;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu;
void main(){
vClu = vec2(fract(sin(dot(iM3, vec3(12.9898, 78.233, 37.719)))*43758.5453), fract(sin(dot(iM3, vec3(39.346, 11.135, 83.155)))*24634.6345));
vec3 lp = iM0*position.x + iM1*position.y + iM2*position.z + iM3;
vec3 ln = iM0*normal.x + iM1*normal.y + iM2*normal.z;
vec4 w = uTreeM*vec4(lp, 1.0);
w.xyz += treeWind(w.xyz, 1.0);
vWP = w.xyz; vN = normalize(mat3(uTreeM)*ln); vUv = uv;
gl_Position = projectionMatrix*viewMatrix*w;
}`,OU=`
uniform sampler2D uLeaf; uniform vec3 uCanopyC; uniform vec3 uCanopyR; uniform float uA2C;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu;
void main(){
if (vClu.x > 1.0 - 0.18*uSeason.z - 0.985*uSeason.w) discard;
vec4 tx = texture2D(uLeaf, vUv);
float a = tx.a;
if (uA2C > 0.5) { a = clamp((a - 0.42)/max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.01) discard; }
else if (a < 0.45) discard;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN);
vec3 rel = (vWP - uCanopyC)/uCanopyR;
float inside = length(rel);
vec3 Nc = normalize(rel/uCanopyR);
if (dot(N, Nc) < 0.0) N = -N;
N = normalize(mix(N, Nc, 0.62));
vec3 alb = tx.rgb*uLeafTint;
float l = dot(tx.rgb, vec3(0.299, 0.587, 0.114));
float bloom = step(vClu.y, 0.62);
vec3 sp = mix(alb*vec3(1.06, 1.18, 0.78), uBlossom*min(0.22 + 4.2*l, 1.1), bloom*0.94);
float pick = fract(vClu.y*3.7 + vClu.x*0.31);
vec3 au = mix(uAutA, uAutB, smoothstep(0.25, 0.65, pick));
au = mix(au, uAutC, smoothstep(0.72, 0.96, pick))*min(0.16 + 5.0*l, 1.0);
au = mix(au, alb*vec3(1.15, 1.0, 0.55), step(0.9, vClu.y)*0.75);
alb = alb*uSeason.y + sp*uSeason.x + au*(uSeason.z + uSeason.w);
float turned = uSeason.z + uSeason.w + uSeason.x*bloom;
alb *= 1.0 - 0.3*uWet;
float ao = mix(0.22, 1.0, smoothstep(0.25, 1.05, inside));
ao = mix(ao, 1.0, uSeason.w*0.55);
float sh = shadowAt(vWP, 0.0016, 1.6)*cloudAt(vWP);
sh *= mix(0.45, 1.0, smoothstep(0.35, 1.0, inside));
float ndl = dot(N, uSunDir);
float wrap = max((ndl + 0.6)/1.6, 0.0);
float fwd = pow(max(dot(-V, uSunDir), 0.0), 4.0);
vec3 tcol = alb*mix(vec3(1.5, 1.85, 0.6), vec3(1.55, 1.3, 0.75), turned);
vec3 H = normalize(uSunDir + V);
float spec = pow(max(dot(N, H), 0.0), 40.0)*0.25*max(ndl, 0.0);
vec3 c = uSunCol*sh*(alb*(1.0/PI)*wrap*0.9 + tcol*(1.0/PI)*(fwd*1.5 + max(-ndl, 0.0)*0.3) + vec3(spec));
c += alb*(1.0/PI)*shIrr(normalize(N + vec3(0.0, 0.9, 0.0)))*ao;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, a);
}`,IU=`
attribute vec4 iP; attribute float iV; uniform vec2 uSize; varying vec2 vUv; varying vec3 vWP; varying float vView;
void main(){
vec3 base = iP.xyz;
vec2 to = normalize(cameraPosition.xz - base.xz);
vec3 rgt = vec3(-to.y, 0.0, to.x);
float s = abs(iP.w);
float squash = fract(iV);
vView = floor(iV);
vec3 wp = base + rgt*position.x*uSize.x*s*(0.75 + 0.5*squash) + vec3(0.0, position.y*uSize.y*s*(1.15 - 0.3*squash), 0.0);
vUv = vec2((iP.w < 0.0 ? -position.x : position.x)*0.5 + 0.5, position.y);
vWP = wp;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`,zU=`
uniform sampler2D uImp0; uniform sampler2D uImp1; uniform sampler2D uImp2; varying vec2 vUv; varying vec3 vWP; varying float vView;
void main(){
vec4 t = vView < 0.5 ? texture2D(uImp0, vUv) : vView < 1.5 ? texture2D(uImp1, vUv) : texture2D(uImp2, vUv);
float a = clamp((t.a - 0.5)/max(fwidth(t.a), 1e-3) + 0.5, 0.0, 1.0);
if (a < 0.02) discard;
vec3 c = t.rgb/max(t.a, 0.3)*0.7;
vec3 V = normalize(cameraPosition - vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, a);
}`,BU=`
attribute float aPart; varying vec3 vL; varying vec3 vLN; varying vec3 vWP; varying vec3 vN; varying float vP;
void main(){ vL = position; vLN = normal; vP = aPart; vec4 w = modelMatrix*vec4(position, 1.0); vWP = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,FU=`
uniform vec3 uBody; uniform vec3 uRoof; uniform float uLights; uniform float uGlow;
varying vec3 vL; varying vec3 vLN; varying vec3 vWP; varying vec3 vN; varying float vP;
float rbox(vec2 p, vec2 a, vec2 b, float r){ vec2 c = (a + b)*0.5, h = (b - a)*0.5 - r; vec2 q = abs(p - c) - h; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
vec3 L = vL;
vec3 alb; float rough = 0.38; float win = 0.0; float emi = 0.0;
if (vP < 0.5) {
alb = L.y > 1.16 ? uRoof : uBody;
alb *= 1.0 - 0.45*RS(0.014, 0.0, abs(L.y - 1.16));
if (abs(vLN.x) > 0.55) {
float d = rbox(vec2(L.z, L.y), vec2(1.2, 1.3), vec2(1.86, 1.8), 0.08);
d = min(d, rbox(vec2(L.z, L.y), vec2(0.18, 1.3), vec2(1.08, 1.8), 0.06));
d = min(d, rbox(vec2(L.z, L.y), vec2(-0.86, 1.3), vec2(0.06, 1.8), 0.06));
d = min(d, rbox(vec2(L.z, L.y), vec2(-1.92, 1.3), vec2(-0.98, 1.8), 0.08));
win = RS(0.0, -0.012, d);
float wa = min(length(vec2(L.z - 1.25, L.y - 0.36)), length(vec2(L.z + 1.25, L.y - 0.36)));
alb *= mix(0.05, 1.0, smoothstep(0.43, 0.45, wa));
alb *= 1.0 - 0.4*RS(0.01, 0.0, abs(L.z - 1.12))*step(0.5, L.y)*step(L.y, 1.2);
}
if (vLN.z > 0.55) {
float d = min(rbox(vec2(L.x, L.y), vec2(-0.8, 1.28), vec2(-0.03, 1.82), 0.09), rbox(vec2(L.x, L.y), vec2(0.03, 1.28), vec2(0.8, 1.82), 0.09));
win = RS(0.0, -0.012, d);
alb *= 1.0 - 0.5*RS(0.02, 0.0, abs(rbox(vec2(L.x, L.y), vec2(-0.32, 0.72), vec2(0.32, 0.86), 0.06)));
}
if (vLN.z < -0.55) win = RS(0.0, -0.012, rbox(vec2(L.x, L.y), vec2(-0.62, 1.38), vec2(0.62, 1.76), 0.1));
} else if (vP < 1.5) { alb = vec3(0.016); rough = 0.85; }
else if (vP < 2.5) { alb = vec3(0.62, 0.62, 0.6); rough = 0.25; }
else if (vP < 3.5) { alb = vec3(0.75); rough = 0.12; emi = 1.0; }
else if (vP < 4.5) { alb = vec3(0.03); rough = 0.6; }
else if (vP < 5.5) { alb = vec3(0.4, 0.03, 0.015); rough = 0.3; emi = 2.0; }
else if (vP < 6.5) { alb = uBody; rough = 0.3; }
else if (vP < 7.5) { alb = uRoof; rough = 0.32; }
else if (vP < 8.5) { alb = vec3(0.02); rough = 0.1; win = 1.0; }
else { alb = vec3(0.02, 0.018, 0.016); rough = 0.75; }
float sh = cloudAt(vWP);
float ao = mix(0.4, 1.0, smoothstep(0.3, 1.1, L.y));
vec3 c = sunLight(alb, N, V, sh, rough, 0.0, vec3(0.0)) + alb*(1.0/PI)*shIrr(N)*ao;
float fr = 0.04 + 0.96*pow(1.0 - max(dot(N, V), 0.0), 5.0);
c += fogColor(reflect(-V, N))*fr*(vP < 0.5 ? 0.25 : 0.1);
if (win > 0.0) {
vec3 glass = vec3(0.01, 0.012, 0.015)*shIrr(vec3(0.0, 1.0, 0.0)) + fogColor(reflect(-V, N))*(0.05 + fr*0.6);
float glow = uLights*(0.8 + 0.2*smoothstep(1.35, 1.7, L.y));
c = mix(c, mix(glass, uWinCol*2.6, glow*uGlow), win*0.96);
}
if (emi > 1.5) c += vec3(1.0, 0.12, 0.04)*uLights*1.6;
else if (emi > 0.5) c += uHeadCol*uLights*36.0;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`,HU=`
varying float vT; varying vec3 vWP; varying vec3 vN;
void main(){ vT = -position.y/12.0; vec4 w = modelMatrix*vec4(position, 1.0); vWP = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,GU=`
uniform float uOn; uniform vec3 uCol; varying float vT; varying vec3 vWP; varying vec3 vN;
void main(){
vec3 V = normalize(cameraPosition - vWP);
float edge = pow(abs(dot(normalize(vN), V)), 1.6);
float a = uOn*edge*(pow(1.0 - vT, 2.2)*0.26 + exp(-vT*14.0)*0.5)*smoothstep(0.0, 0.015, vT);
gl_FragColor = vec4(uCol*a, 1.0);
}`,VU=`
attribute vec3 color; attribute float aWing;
attribute vec3 iP; attribute vec3 iX; attribute vec3 iY; attribute vec3 iZ; attribute vec2 iF;
varying vec3 vWP; varying vec3 vN; varying vec3 vC; varying float vWingV;
void main(){
vec3 p = position; vec3 n = normal;
if (abs(aWing) > 0.0) {
float s = sign(p.x);
float ang = iF.x*s*(0.35 + 0.65*abs(aWing));
float c = cos(ang), sn = sin(ang);
p = vec3(p.x*c - p.y*sn*s*s, p.x*sn + p.y*c, p.z);
n = vec3(n.x*c - n.y*sn, n.x*sn + n.y*c, n.z);
}
p *= iF.y;
vec3 w = iP + iX*p.x + iY*p.y + iZ*p.z;
vWP = w; vN = normalize(iX*n.x + iY*n.y + iZ*n.z); vC = color; vWingV = abs(aWing);
gl_Position = projectionMatrix*viewMatrix*vec4(w, 1.0);
}`,kU=`
uniform vec3 uTint;
varying vec3 vWP; varying vec3 vN; varying vec3 vC; varying float vWingV;
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
vec3 alb = vC*uTint;
float sh = shadowAt(vWP, 0.002, 1.2)*cloudAt(vWP);
vec3 c = sunLight(alb, N, V, sh, 0.6, 0.6*vWingV, alb*vec3(1.6, 1.4, 1.1));
c += alb*(1.0/PI)*shIrr(N);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`,WU=`
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uFirst; varying vec2 vUv;
vec3 s(vec2 o){ return min(texture2D(uSrc, vUv + o*uTexel).rgb, vec3(uFirst > 0.5 ? 24.0 : 1e4)); }
float w(vec3 c){ return 1.0/(1.0 + dot(c, vec3(0.2126,0.7152,0.0722))); }
void main(){
vec3 a = s(vec2(-2,-2)), b = s(vec2(0,-2)), c = s(vec2(2,-2));
vec3 d = s(vec2(-1,-1)), e = s(vec2(1,-1));
vec3 f = s(vec2(-2,0)), g = s(vec2(0,0)), h = s(vec2(2,0));
vec3 i = s(vec2(-1,1)), j = s(vec2(1,1));
vec3 k = s(vec2(-2,2)), l = s(vec2(0,2)), m = s(vec2(2,2));
vec3 r;
if (uFirst > 0.5) {
a = max(a, 0.0); b = max(b, 0.0); c = max(c, 0.0); d = max(d, 0.0); e = max(e, 0.0); f = max(f, 0.0); g = max(g, 0.0);
h = max(h, 0.0); i = max(i, 0.0); j = max(j, 0.0); k = max(k, 0.0); l = max(l, 0.0); m = max(m, 0.0);
if (any(isnan(a+b+c+d+e+f+g+h+i+j+k+l+m))) { gl_FragColor = vec4(0.0); return; }
vec3 g0 = (d+e+i+j)*0.25, g1 = (a+b+f+g)*0.25, g2 = (b+c+g+h)*0.25, g3 = (f+g+k+l)*0.25, g4 = (g+h+l+m)*0.25;
float w0 = w(g0)*0.5, w1 = w(g1)*0.125, w2 = w(g2)*0.125, w3 = w(g3)*0.125, w4 = w(g4)*0.125;
r = (g0*w0 + g1*w1 + g2*w2 + g3*w3 + g4*w4)/(w0+w1+w2+w3+w4);
} else {
r = (d+e+i+j)*0.125 + (a+c+k+m)*0.03125 + (b+f+h+l)*0.0625 + g*0.125;
}
gl_FragColor = vec4(r, 1.0);
}`,XU=`
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uRadius; varying vec2 vUv;
void main(){
vec2 t = uTexel*uRadius;
vec3 c = texture2D(uSrc, vUv).rgb*4.0;
c += (texture2D(uSrc, vUv+vec2(-t.x,0.)).rgb + texture2D(uSrc, vUv+vec2(t.x,0.)).rgb + texture2D(uSrc, vUv+vec2(0.,-t.y)).rgb + texture2D(uSrc, vUv+vec2(0.,t.y)).rgb)*2.0;
c += texture2D(uSrc, vUv+vec2(-t.x,-t.y)).rgb + texture2D(uSrc, vUv+vec2(t.x,-t.y)).rgb + texture2D(uSrc, vUv+vec2(-t.x,t.y)).rgb + texture2D(uSrc, vUv+vec2(t.x,t.y)).rgb;
gl_FragColor = vec4(c/16.0, 1.0);
}`,qU=`
uniform sampler2D uSrc; uniform vec3 uSun; varying vec2 vUv;
void main(){
if (uSun.z <= 0.0) { gl_FragColor = vec4(0.0); return; }
vec2 uv = vUv;
vec2 st = (uSun.xy - uv)/48.0*0.92;
vec3 acc = vec3(0.0); float w = 1.0;
for (int i = 0; i < 48; i++) {
uv += st;
vec3 s = texture2D(uSrc, uv).rgb;
float l = dot(s, vec3(0.2126, 0.7152, 0.0722));
acc += s*smoothstep(5.0, 16.0, l)*w;
w *= 0.965;
}
gl_FragColor = vec4(min(acc/48.0, vec3(6.0))*uSun.z, 1.0);
}`,YU=`
uniform sampler2D uScene; uniform sampler2D uBloom; uniform sampler2D uRays; uniform float uRayAmt; uniform float uBloomAmt; uniform float uExposure;
uniform float uSat; uniform float uWarm; uniform float uContrast; uniform float uVig; uniform float uTime; uniform vec2 uRes; uniform vec3 uLift; uniform float uFade;
varying vec2 vUv;
vec3 RRTAndODTFit(vec3 v){ vec3 a = v*(v + 0.0245786) - 0.000090537; vec3 b = v*(0.983729*v + 0.4329510) + 0.238081; return a/b; }
vec3 aces(vec3 c){
const mat3 i = mat3(0.59719,0.07600,0.02840, 0.35458,0.90834,0.13383, 0.04823,0.01566,0.83777);
const mat3 o = mat3(1.60475,-0.10208,-0.00327, -0.53108,1.10813,-0.07276, -0.07367,-0.00605,1.07602);
return clamp(o*RRTAndODTFit(i*c), 0.0, 1.0);
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
void main(){
vec3 c = texture2D(uScene, vUv).rgb;
vec3 b = texture2D(uBloom, vUv).rgb;
if (any(isnan(c))) c = vec3(0.0);
if (any(isnan(b))) b = vec3(0.0);
c = mix(c, b, uBloomAmt);
c += texture2D(uRays, vUv).rgb*uRayAmt;
c *= uExposure;
c *= vec3(1.0 + uWarm, 1.0 + uWarm*0.25, 1.0 - uWarm*0.6);
c = aces(c);
float l = dot(c, vec3(0.2126,0.7152,0.0722));
c = mix(vec3(l), c, uSat);
c = (c - 0.5)*uContrast + 0.5;
c = c + uLift*(1.0 - c);
vec2 q = vUv - 0.5; q.x *= uRes.x/uRes.y;
c *= mix(1.0, RS(1.15, 0.25, length(q)), uVig);
c = max(c, 0.0);
c = mix(12.92*c, 1.055*pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c));
c += (hash(vUv*uRes + fract(uTime)*91.0) - 0.5)*(1.6/255.0);
c *= 1.0 - uFade;
gl_FragColor = vec4(c, 1.0);
}`;function wc(e,t){let n=document.createElement("canvas");n.width=n.height=e;let i=n.getContext("2d");i&&t(i,e);let a=new tf(n);return a.colorSpace=Pi,a.minFilter=pa,a.generateMipmaps=!0,a}function ZU(e,t){let n=Ka(77);e.translate(t/2,t/2);let i=t*.46;for(let s=0;s<520;s++){let r=n()*Math.PI*2,o=n()*2-1,l=Math.sqrt(1-o*o),c=i*l*(.88+.12*n()),h=Math.cos(r)*c,d=Math.sin(r)*c,u=o>0;e.strokeStyle=`rgba(255,255,255,${u?.32:.14})`,e.lineWidth=.7,e.beginPath(),e.moveTo(Math.cos(r)*i*.12,Math.sin(r)*i*.12),e.lineTo(h*.82,d*.82),e.stroke();for(let p=0;p<7;p++){let y=r+(p-3)*.16+(n()-.5)*.08,_=i*(.16+.05*n())*(.4+.6*l);e.strokeStyle=`rgba(255,255,255,${u?.42:.18})`,e.lineWidth=.55,e.beginPath(),e.moveTo(h*.82,d*.82),e.lineTo(h*.82+Math.cos(y)*_,d*.82+Math.sin(y)*_),e.stroke()}}let a=e.createRadialGradient(0,0,0,0,0,i*.16);a.addColorStop(0,"rgba(120,100,70,1)"),a.addColorStop(1,"rgba(150,130,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,i*.16,0,Math.PI*2),e.fill()}function KU(e,t){let n=Ka(41);e.translate(t/2,t/2);let i=t*.46;for(let s=0;s<4;s++){let r=70-s*12,o=i*(1-s*.2);for(let l=0;l<r;l++){let c=l/r*Math.PI*2+n()*.08+s*.3,h=o*(.82+.18*n()),d=190+Math.floor(n()*60)-s*18;e.strokeStyle=`rgba(${d},${d},${d},0.95)`,e.lineWidth=3.2-s*.5,e.lineCap="round",e.beginPath(),e.moveTo(Math.cos(c)*o*.18,Math.sin(c)*o*.18),e.lineTo(Math.cos(c)*h,Math.sin(c)*h),e.stroke()}}let a=e.createRadialGradient(0,0,0,0,0,i*.3);a.addColorStop(0,"rgba(150,150,150,1)"),a.addColorStop(1,"rgba(210,210,210,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,i*.3,0,Math.PI*2),e.fill()}function JU(e,t){e.translate(t/2,t*.62),e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=1,e.beginPath(),e.moveTo(0,t*.3),e.lineTo(0,-t*.05),e.stroke(),e.fillStyle="rgba(170,140,100,1)",e.beginPath(),e.ellipse(0,t*.3,2,5,0,0,Math.PI*2),e.fill();for(let n=0;n<15;n++){let i=-Math.PI/2+(n-7)*.2;e.strokeStyle="rgba(255,255,255,0.75)",e.lineWidth=.8,e.beginPath(),e.moveTo(0,-t*.05),e.lineTo(Math.cos(i)*t*.36,-t*.05+Math.sin(i)*t*.3),e.stroke()}}function QU(e,t){let n=Ka(64),i=t/2,a=(l,c,h,d,u,p)=>{e.save(),e.translate(l,c),e.rotate(h);let y=e.createLinearGradient(0,0,d,0);y.addColorStop(0,`rgb(${Math.round(p*.55)},0,0)`),y.addColorStop(.35,`rgb(${p},0,0)`),y.addColorStop(1,`rgb(${Math.round(p*.92)},0,0)`),e.fillStyle=y,e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(d*.25,-u,d*.95,-u*.9,d,0),e.bezierCurveTo(d*.95,u*.9,d*.25,u,0,0),e.fill(),e.restore()},s=(l,c,h,d)=>{let u=e.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,`rgb(0,${d},0)`),u.addColorStop(.8,`rgb(0,${Math.round(d*.85)},0)`),u.addColorStop(1,"rgba(0,120,0,0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.fill()},r=i/2,o=i/2;for(let l=0;l<5;l++)a(r,o,l/5*Math.PI*2+.3,i*.44,i*.2,235);s(r,o,i*.11,200),r=i*1.5,o=i/2;for(let l=0;l<26;l++)a(r,o,l/26*Math.PI*2+n()*.1,i*(.4+n()*.06),i*.045,230+Math.floor(n()*25));s(r,o,i*.14,255),r=i/2,o=i*1.5;for(let[l,c,h]of[[-2.2,.36,.17],[-.95,.36,.17],[-2.9,.3,.14],[-.25,.3,.14],[1.57,.42,.2]])a(r,o,l,i*c,i*h,215);s(r,o,i*.07,230),r=i*1.5,o=i*1.5;for(let l=0;l<4;l++)a(r,o,l/4*Math.PI*2+.6,i*.32,i*.18,225);s(r,o,i*.06,255)}function jU(e,t){let n=t/2;e.save(),e.translate(n/2,n/2),e.rotate(-Math.PI/4);let i=n*.42,a=n*.22,s=e.createLinearGradient(-a,0,a,0);s.addColorStop(0,"rgb(190,190,190)"),s.addColorStop(.5,"rgb(240,240,240)"),s.addColorStop(1,"rgb(175,175,175)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-i),e.bezierCurveTo(a*1.2,-i*.5,a,i*.5,0,i*.8),e.bezierCurveTo(-a,i*.5,-a*1.2,-i*.5,0,-i),e.fill(),e.strokeStyle="rgb(120,120,120)",e.lineWidth=2,e.beginPath(),e.moveTo(0,-i*.9),e.lineTo(0,i),e.stroke();for(let o=-3;o<=3;o++)o&&(e.lineWidth=1,e.beginPath(),e.moveTo(0,o*i*.2),e.lineTo(Math.sign(o)*a*.7,o*i*.2-i*.18),e.stroke(),e.beginPath(),e.moveTo(0,o*i*.2),e.lineTo(-Math.sign(o)*a*.7,o*i*.2-i*.18),e.stroke());e.restore(),e.save(),e.translate(n*1.5,n/2),e.fillStyle="rgb(225,225,225)",e.beginPath();for(let o=0;o<=60;o++){let l=o/60*Math.PI*2,c=n*.38*(.62+.38*Math.pow(Math.abs(Math.cos(l*2.5)),.6))*(l>Math.PI*.35&&l<Math.PI*.65?.4:1);e.lineTo(Math.cos(l-Math.PI/2)*c,Math.sin(l-Math.PI/2)*c)}e.fill(),e.strokeStyle="rgb(140,140,140)",e.lineWidth=1.5;for(let o of[-1.57,-.5,-2.64,.6,-3.7])e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(o)*n*.33,Math.sin(o)*n*.33),e.stroke();e.restore(),e.save(),e.translate(n/2,n*1.5);let r=e.createLinearGradient(0,-n*.4,0,n*.4);r.addColorStop(0,"rgb(235,235,235)"),r.addColorStop(1,"rgb(170,170,170)"),e.fillStyle=r,e.beginPath(),e.moveTo(-n*.08,n*.38),e.bezierCurveTo(-n*.36,-n*.05,-n*.4,-n*.4,0,-n*.36),e.bezierCurveTo(n*.4,-n*.4,n*.36,-n*.05,n*.08,n*.38),e.closePath(),e.fill(),e.restore(),e.save(),e.translate(n*1.5,n*1.5),e.fillStyle="rgb(230,230,230)",e.beginPath(),e.ellipse(0,0,n*.26,n*.36,0,0,Math.PI*2),e.fill(),e.restore()}function $U(e,t){let n=Ka(23);e.translate(t/2,t/2);for(let i=0;i<3;i++){let a=n()*Math.PI*2;e.strokeStyle="rgb(52,44,30)",e.lineWidth=3-i*.6,e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(a)*t*.3,Math.sin(a)*t*.3),e.stroke()}for(let i=0;i<34;i++){let a=n()*Math.PI*2,s=t*(.06+.3*Math.sqrt(n())),r=t*(.09+.06*n()),o=r*(.32+.12*n()),l=78+n()*34,c=34+n()*22,h=15+n()*15;e.save(),e.translate(Math.cos(a)*s,Math.sin(a)*s),e.rotate(a+(n()-.5)*1.4),e.fillStyle=`hsl(${l},${c}%,${h}%)`,e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(r*.3,-o,r*.75,-o*.8,r,0),e.bezierCurveTo(r*.75,o*.8,r*.3,o,0,0),e.fill(),e.strokeStyle=`hsla(${l},${c}%,${h+14}%,0.7)`,e.lineWidth=1,e.beginPath(),e.moveTo(r*.05,0),e.lineTo(r*.9,0),e.stroke(),e.restore()}}function Gy(e,t){let n=[],i=[];for(let r=0;r<e;r++){let o=r/e;t&&(o=1-Math.pow(1-o,1.7)),n.push(-1,o,0,1,o,0)}n.push(0,1,0);for(let r=0;r<e-1;r++){let o=r*2;i.push(o,o+1,o+2,o+1,o+3,o+2)}let a=(e-1)*2;i.push(a,a+1,e*2);let s=new Ys;return s.setAttribute("position",Qi(n,3)),s.setIndex(i),s}function Rc(e){let t=new Ys;return t.setAttribute("position",Qi(e||[-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]),t}function Vy(e,t){let n=Rc(),i=Ka(t),a=new Float32Array(e*4),s=new Float32Array(e*4);for(let r=0;r<e;r++)a.set([i(),i(),i(),i()],r*4),s.set([i(),i(),i(),i()],r*4);return n.setAttribute("iR",yn(a,4)),n.setAttribute("iS",yn(s,4)),n.instanceCount=e,n}function d0(e,t){let n=0,i=0,a=e.map(p=>{let y=p.g;return n+=y.attributes.position.count,i+=y.index?y.index.count:y.attributes.position.count,y}),s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n),l=t?new Float32Array(n*3):null,c=new Uint32Array(i),h=0,d=0;a.forEach((p,y)=>{let _=p.attributes.position,v=p.attributes.normal;for(let f=0;f<_.count;f++)s[(h+f)*3]=_.getX(f),s[(h+f)*3+1]=_.getY(f),s[(h+f)*3+2]=_.getZ(f),r[(h+f)*3]=v.getX(f),r[(h+f)*3+1]=v.getY(f),r[(h+f)*3+2]=v.getZ(f),o[h+f]=t?e[y].wing||0:e[y].part,l&&l.set(e[y].color||[1,1,1],(h+f)*3);if(p.index)for(let f=0;f<p.index.count;f++)c[d+f]=p.index.getX(f)+h;else for(let f=0;f<_.count;f++)c[d+f]=h+f;d+=p.index?p.index.count:_.count,h+=_.count,p.dispose()});let u=t?new Ys:new Ei;return u.setAttribute("position",new jn(s,3)),u.setAttribute("normal",new jn(r,3)),u.setAttribute(t?"aWing":"aPart",new jn(o,1)),l&&u.setAttribute("color",new jn(l,3)),u.setIndex(new jn(c,1)),u}function tP(e){let t=Ka(e),n=[],i=[],a=[],s=[],r=[],o=[],l=ht(0,1,0),c=ht(),h=ht(),d=ht(),u=(v,f,m)=>{let S=f>.25?9:f>.08?6:4,x=n.length/3,A=0,w=Math.max(1,Math.round(2*Math.PI*f)),g=ht(1,0,0);for(let b=0;b<v.length;b++){let P=v[Math.max(0,b-1)],C=v[Math.min(v.length-1,b+1)],O=c.copy(C).sub(P).normalize();h.copy(g).sub(O.clone().multiplyScalar(g.dot(O))),h.lengthSq()<1e-6&&h.set(1,0,0).cross(O),h.normalize(),g=h.clone(),d.crossVectors(O,h).normalize(),b>0&&(A+=v[b].distanceTo(v[b-1]));let B=ee(f,m,b/(v.length-1));for(let V=0;V<=S;V++){let N=V/S*Math.PI*2,X=h.x*Math.cos(N)+d.x*Math.sin(N),Q=h.y*Math.cos(N)+d.y*Math.sin(N),Y=h.z*Math.cos(N)+d.z*Math.sin(N);n.push(v[b].x+X*B,v[b].y+Q*B,v[b].z+Y*B),i.push(X,Q,Y),a.push(V/S*w,A)}}for(let b=0;b<v.length-1;b++)for(let P=0;P<S;P++){let C=x+b*(S+1)+P,O=C+S+1;s.push(C,O,C+1,C+1,O,O+1)}},p=(v,f,m)=>{let S=ht(t()-.5,t()-.5,t()-.5).normalize(),x=f.clone().multiplyScalar(.6).add(S).normalize(),A=ht().crossVectors(x,l);A.lengthSq()<1e-4&&A.set(1,0,0),A.normalize();let w=ht().crossVectors(x,A).normalize(),g=m*(.8+.4*t());r.push(A.x*g,A.y*g,A.z*g,w.x*g,w.y*g,w.z*g,x.x*g,x.y*g,x.z*g,v.x,v.y,v.z)},y=(v,f,m,S,x)=>{let A=Math.max(2,Math.ceil(m/1.1)),w=[v.clone()],g=f.clone(),b=ht(v.x,0,v.z);for(let V=0;V<A;V++)g.add(ht(t()-.5,t()-.5,t()-.5).multiplyScalar(x===0?.08:.32)),g.y+=x===0?.05:x===1?.012:x>2?-.05:0,b.lengthSq()>.01&&g.addScaledVector(b.clone().normalize(),.05),g.normalize(),w.push(w[V].clone().addScaledVector(g,m/A));let P=x===0?S*.78:S*.35;if(u(w,S,P),x===0)for(let V=0;V<=A;V++){let N=V/A;o.push({x:w[V].x,y:w[V].y,z:w[V].z,r:ee(S,P,N)})}let C=V=>{let N=V*A,X=Math.min(A-1,Math.floor(N)),Q=N-X;return{p:w[X].clone().lerp(w[X+1],Q),d:w[X+1].clone().sub(w[X]).normalize(),r:ee(S,P,V)}};if(x>=2){let V=x===2?1.7:1.05;for(let X=m*(x===2?.5:.25);X<=m;X+=V){let Q=C(Math.min(1,X/m));p(Q.p,Q.d,x===4?1.9:2.2),x>=3&&t()<.45&&p(Q.p.clone().add(ht(t()-.5,t()-.5,t()-.5).multiplyScalar(.9)),Q.d,1.8)}let N=C(1);p(N.p,N.d,2.3)}if(x>=4)return;let O=x===0||x===1?4:3,B=t()*Math.PI*2;for(let V=0;V<O;V++){let N=x===0?.92+.08*t():.3+.7*(V+.5+(t()-.5)*.6)/O,X=C(Yt(N,0,1)),Q;if(x===0){let tt=B+V/O*Math.PI*2+(t()-.5)*.7,ct=(46+t()*22)*(Math.PI/180);Q=ht(Math.sin(ct)*Math.cos(tt),Math.cos(ct),Math.sin(ct)*Math.sin(tt))}else{let tt=ht().crossVectors(X.d,ht(t()-.5,t()-.5,t()-.5)).normalize(),ct=(28+t()*26)*(Math.PI/180);Q=X.d.clone().applyAxisAngle(tt,ct),Q.y+=.15,Q.normalize()}let Y=x===0?7.6+t()*2:m*(.56+.16*t()),mt=x===0?S*.56:X.r*.66;y(X.p,Q,Y,mt,x+1)}};y(ht(0,-.3,0),ht(.04,1,.02).normalize(),3.9,.6,0);let _=new Ei;return _.setAttribute("position",Qi(n,3)),_.setAttribute("normal",Qi(i,3)),_.setAttribute("uv",Qi(a,2)),_.setIndex(s),{bark:_,leaves:new Float32Array(r),nLeaves:r.length/12,trunk:o}}function eP(){let e=new Ys,t=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0,0,-.5,-.5,0,-.5,.5,0,.5,.5,0,.5,-.5],n=[0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0],i=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1];return e.setAttribute("position",Qi(t,3)),e.setAttribute("normal",Qi(n,3)),e.setAttribute("uv",Qi(i,2)),e.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]),e}function Zr(e,t,n,i,a){let s=new $n(e,t,n,Math.ceil(e*13),Math.ceil(t*13),Math.ceil(n*10)),r=s.attributes.position,o=s.attributes.normal,l=[e/2-i,t/2-i,n/2-i],c=ht(),h=ht(),d=ht();for(let u=0;u<r.count;u++)c.fromBufferAttribute(r,u),h.set(Yt(c.x,-l[0],l[0]),Yt(c.y,-l[1],l[1]),Yt(c.z,-l[2],l[2])),d.copy(c).sub(h),d.lengthSq()<1e-9&&d.fromBufferAttribute(o,u),d.normalize(),c.copy(h).addScaledVector(d,i),a?.(c),r.setXYZ(u,c.x,c.y,c.z),o.setXYZ(u,d.x,d.y,d.z);return s}var Xy=e=>(t,n,i=0,a=0,s=0)=>{t.translate(i,a,s),e.push({g:t,part:n})};function qy(e,t,n,i,a){for(let s of i)for(let r of a){let o=new vs(t,t,n,22);o.rotateZ(Math.PI/2),e(o,1,s,t,r);let l=new vs(t*.5,t*.5,n+.02,16);l.rotateZ(Math.PI/2),e(l,2,s,t,r)}}function nP(){let e=[],t=Xy(e);t(Zr(1.74,1.56,4.3,.26,n=>{n.y+=1.2,n.x*=1-.07*qe(1.3,1.98,n.y),n.z>0&&(n.z-=.12*qe(1.15,1.98,n.y)),n.y=Math.max(n.y,.42)}),0),qy(t,.36,.24,[-.8,.8],[-1.25,1.25]);for(let n of[-1,1])t(new $n(1.86,.13,.14),2,0,.6,n*2.19);for(let n of[-1,1]){let i=new vs(.105,.105,.06,18);i.rotateX(Math.PI/2),t(i,3,n*.58,.88,2.14),t(new $n(.08,.2,.04),5,n*.74,.86,-2.16),t(new $n(.05,.05,3.2),4,n*.66,2.06,-.2)}for(let n of[-1.6,-.6,.4,1.2])t(new $n(1.36,.04,.05),4,0,2.06,n);for(let n of[-1,1])for(let i of[-1.5,1.1])t(new $n(.04,.1,.04),4,n*.66,2,i);return d0(e,!1)}function iP(){let e=[],t=Xy(e);t(Zr(1.74,.6,4.1,.17,n=>{n.y+=.64,n.z>1.2&&(n.y-=.13*qe(1.2,2.05,n.z)*qe(.6,.94,n.y))}),6),t(Zr(1.58,.56,2.3,.14,n=>{let i=qe(-.28,.28,n.y);n.x*=1-.1*i,n.z+=n.z>0?-.6*i:.4*i,n.y+=1.2,n.z-=.2}),8),t(Zr(1.4,.07,1.25,.03),7,0,1.48,-.3),t(new $n(1.6,.5,.09),7,0,1.2,-.12),qy(t,.32,.22,[-.8,.8],[-1.32,1.32]);for(let n of[-1,1])t(new $n(1.8,.12,.12),2,0,.42,n*2.06);for(let n of[-1,1])t(new $n(.32,.11,.04),3,n*.58,.76,2.03),t(new $n(.3,.1,.04),5,n*.62,.8,-2.06);return d0(e,!1)}function aP(){let e=[],t=Xy(e),n=(s,r,o,l)=>{let c=ht(s[0],s[1],s[2]),h=ht(r[0],r[1],r[2]).sub(c),d=new vs(o,o,h.length(),10);d.applyQuaternion(new Da().setFromUnitVectors(ht(0,1,0),h.clone().normalize())),t(d,l,c.x+h.x/2,c.y+h.y/2,c.z+h.z/2)};qy(t,.32,.11,[0],[-.7,.72]);for(let s of[-.06,.06])n([s,.32,.72],[s,1,.5],.025,2);n([0,.32,-.7],[0,.84,-.22],.03,7),n([0,.42,.05],[0,.96,.46],.035,7),n([0,.42,.05],[0,.32,-.7],.03,7),t(new $n(.26,.26,.38),4,0,.47,.02),t(Zr(.34,.24,.56,.1),6,0,.9,.18),t(Zr(.28,.1,.62,.045),9,0,.87,-.37),t(Zr(.18,.06,.5,.028),6,0,.68,-.72),t(Zr(.16,.05,.4,.024),6,0,.68,.74),n([-.36,1.04,.5],[.36,1.04,.5],.018,4);let i=new vs(.085,.085,.08,18);i.rotateX(Math.PI/2),t(i,3,0,.92,.62),t(new $n(.12,.06,.04),5,0,.74,-.98),n([.16,.36,.1],[.16,.44,-.78],.04,2);let a=d0(e,!1);return a.rotateZ(.12),a}function RE(){let e=[],t=[],n=[],i=[],a=[],s=(d,u,p,y)=>{let _=e.length/3;d.forEach(v=>{e.push(...v.p),t.push(...v.n),n.push(...p),i.push(y&&v.w||0)}),u.forEach(v=>a.push(_+v[0],_+v[1],_+v[2]))},r=(d,u)=>Array.from({length:6},(p,y)=>{let _=y/6*Math.PI*2;return{p:[Math.cos(_)*u,Math.sin(_)*u*.85,d],n:[Math.cos(_),Math.sin(_),0]}}),o=[[-.16,.012],[-.08,.04],[.02,.05],[.1,.038],[.15,.028],[.19,.012]],l=[],c=[];o.forEach(([d,u])=>l.push(...r(d,u)));for(let d=0;d<o.length-1;d++)for(let u=0;u<6;u++){let p=d*6+u,y=d*6+(u+1)%6;c.push([p,p+6,y],[y,p+6,y+6])}s(l,c,[.05,.05,.055],!1),s([{p:[0,.005,-.15],n:[0,1,0]},{p:[-.05,0,-.27],n:[0,1,0]},{p:[0,.003,-.22],n:[0,1,0]},{p:[.05,0,-.27],n:[0,1,0]}],[[0,1,2],[0,2,3]],[.04,.04,.045],!1);for(let d of[-1,1])s([{p:[d*.03,.01,.06],n:[0,1,0],w:.1},{p:[d*.03,.01,-.06],n:[0,1,0],w:.1},{p:[d*.2,0,.03],n:[0,1,0],w:.55},{p:[d*.2,0,-.08],n:[0,1,0],w:.55},{p:[d*.38,-.01,-.06],n:[0,1,0],w:1}],[[0,2,1],[1,2,3],[2,4,3]],[.055,.055,.06],!0);let h=new Ys;return h.setAttribute("position",Qi(e,3)),h.setAttribute("normal",Qi(t,3)),h.setAttribute("color",Qi(n,3)),h.setAttribute("aWing",Qi(i,1)),h.setIndex(a),h}function sP(){let e=[],t=(s,r,o,l,c,h,d,u=10)=>{let p=new sf(1,u,Math.max(6,u-2));p.scale(s,r,o),p.translate(l,c,h),p.deleteAttribute("uv"),e.push({g:p,part:0,color:d,wing:0})},n=[.3,.12,.05],i=[.55,.45,.35],a=[.08,.05,.03];t(.045,.04,.09,0,.04,0,n),t(.035,.032,.04,0,.055,.095,n),t(.012,.016,.01,-.02,.085,.09,a,6),t(.012,.016,.01,.02,.085,.09,a,6),t(.03,.022,.06,0,.025,.01,i);for(let s=0;s<7;s++){let r=s/6,o=-.4-r*2.4,l=.11;t(.032+.012*Math.sin(r*3),.03,.04,0,.05+Math.sin(-o)*l*.9*r+.02,-.09-Math.cos(o)*l*r*.6-.02,n,8)}for(let[s,r]of[[-.035,.05],[.035,.05],[-.04,-.05],[.04,-.05]])t(.012,.012,.03,s,.008,r,n,6);return d0(e,!0)}function CE(e,t){let n=e.length-1,i=Yt(t,0,.99999)*n,a=Math.floor(i),s=i-a,r=u=>e[Yt(u,0,n)],o=r(a-1),l=r(a),c=r(a+1),h=r(a+2),d=(u,p,y,_)=>.5*(2*p+(-u+y)*s+(2*u-5*p+4*y-_)*s*s+(-u+3*p-3*y+_)*s*s*s);return ht(d(o.x,l.x,c.x,h.x),d(o.y,l.y,c.y,h.y),d(o.z,l.z,c.z,h.z))}function NE(e,t){let n=Math.min(e.length-2,Math.max(0,Math.floor(t))),i=Yt(t-n,0,1),a=r=>e[Yt(r,0,e.length-1)],s=(r,o,l,c,h)=>.5*(2*o+(-r+l)*h+(2*r-5*o+4*l-c)*h*h+(-r+3*o-3*l+c)*h*h*h);return[s(a(n-1)[0],a(n)[0],a(n+1)[0],a(n+2)[0],i),s(a(n-1)[1],a(n)[1],a(n+1)[1],a(n+2)[1],i)]}var ky=e=>e[0]*.2126+e[1]*.7152+e[2]*.0722,DE=(e,t)=>{let n=e*Math.PI/180,i=t*Math.PI/180;return ht(Math.sin(n)*Math.cos(i),Math.sin(i),-Math.cos(n)*Math.cos(i))};function rP(e,t,n,i){let a;try{a=new a0({canvas:t,antialias:!1,alpha:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!1})}catch{return}if(!a.capabilities.isWebGL2){a.dispose();return}a.autoClear=!1,a.outputColorSpace=Co;let s=a.extensions.has("EXT_color_buffer_float")||a.extensions.has("EXT_color_buffer_half_float"),r=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,o=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=n.current,c={dpr:1,msaa:4,grass:1},h=Yt(l.adv.detail,30,100)/100;c.grass=(r?.6:1)*h;let d={treeX:l.tree.x,treeZ:l.tree.z,treeScale:l.tree.size/100,treeTurn:l.tree.turn,vanX:l.vehicle.x,vanZ:l.vehicle.z,vanScale:l.vehicle.size/100,vanTurn:l.vehicle.turn,tree:l.meadow.tree,van:l.vehicle.show,vtype:l.vehicle.type},u=new Oi(47,1,.04,3e3),p=(()=>{let U=new Uint8Array(262144),H=(F,j,I,$)=>{let at=Math.floor(F),gt=Math.floor(j),vt=F-at,pt=j-gt,Vt=vt*vt*(3-2*vt),ft=pt*pt*(3-2*pt),Zt=(Gt,xe)=>Qs((Gt%I+I)%I+$*977,(xe%I+I)%I+$*131);return ee(ee(Zt(at,gt),Zt(at+1,gt),Vt),ee(Zt(at,gt+1),Zt(at+1,gt+1),Vt),ft)};for(let F=0;F<4;F++)for(let j=0;j<256;j++)for(let I=0;I<256;I++){let $=0,at=.5,gt=0,vt=4;for(let pt=0;pt<5;pt++)$+=at*H(I/256*vt,j/256*vt,vt,F+pt*7),gt+=at,vt*=2,at*=.5;U[(j*256+I)*4+F]=Math.round($/gt*255)}let q=new Lo(U,256,256,Ji);return q.wrapS=q.wrapT=fc,q.minFilter=pa,q.magFilter=Pn,q.generateMipmaps=!0,q.needsUpdate=!0,q})(),y=(E=0,U=0,H=0,q=0)=>new vn(E,U,H,q),_={uTime:{value:0},uSunDir:{value:ht(0,.2,-1).normalize()},uSunCol:{value:ht(1,1,1)},uSH:{value:Array.from({length:9},()=>ht())},uSkyKA:{value:0},uSkyKB:{value:0},uSkyMix:{value:0},uSkyDimA:{value:1},uGainA:{value:1},uGainB:{value:1},uSunSize:{value:3},uMoonSize:{value:1},uStars:{value:1},uNoise:{value:p},uWindDir:{value:new le(.62,.78).normalize()},uWind:{value:0},uShadow:{value:null},uShadowMat:{value:new Fe},uShadowStr:{value:1},uFog:{value:.004},uFogTint:{value:ht(1,1,1)},uCloud:{value:0},uSim:{value:null},uSimRect:{value:y(-22,-40,44,54)},uNight:{value:0},uPixAng:{value:.001},uHeadCol:{value:ht(1,.87,.68)},uWinCol:{value:ht(1,.62,.32)},uHead:{value:y()},uHead2:{value:y()},uHeadDir2:{value:ht(-.75,-.1,.66)},uHeadDir:{value:ht(-.75,-.1,.66)},uVanGlow:{value:y()},uVanPos:{value:y(0,0,2.4,0)},uSunGlow:{value:1},uRayAmt:{value:0},uSunUV:{value:ht(.5,.5,0)},uSunDisc:{value:y(0,.1,-1,0)},uMoonDisc:{value:y(0,-1,0,0)},uNightFog:{value:ht(.42,.58,.92)},uMet:{value:Array.from({length:4},()=>y(0,0,0,-99))},uMetB:{value:Array.from({length:4},()=>y(30,1,10,0))},uField:{value:null},uFieldRect:{value:y(-96,-106,192,122)},uWxMix:{value:0},uOver:{value:0},uOverGain:{value:ht(1,1,1)},uSeason:{value:y(0,1,0,0)},uSnow:{value:0},uWet:{value:0},uRain:{value:0},uSnowFall:{value:0},uFogLUT:{value:null},uSnowCol:{value:ht(.9,.92,.95)},uTreeXZ:{value:new le(15.5,-31)},uSkyAvg:{value:ht(.3,.3,.3)},uHeight:{value:null},uHeightRect:{value:y(-96,-106,192,122)},uGrow:{value:1},uYellow:{value:0},uFlowerA:{value:ht(.9,.55,.02)},uFlowerB:{value:ht(.93,.9,.84)},uFlowerC:{value:ht(.33,.19,.76)},uGrassH:{value:1},uBlade:{value:ht()},uTip:{value:ht()},uDryC:{value:ht()},uDry:{value:.08}},v=[p],f=E=>(v.push(E),E);{let E=_.uHeightRect.value,U=384,H=244,q=new Uint16Array(U*H);for(let j=0;j<H;j++)for(let I=0;I<U;I++)q[j*U+I]=Zu.toHalfFloat(On(E.x+(I+.5)/U*E.z,E.y+(j+.5)/H*E.w));let F=f(new Lo(q,U,H,ff,ui));F.minFilter=F.magFilter=Pn,F.wrapS=F.wrapT=Ii,F.needsUpdate=!0,_.uHeight.value=F}let m=(E,U,H={},q={})=>f(new ci({uniforms:Object.assign({},_,H),vertexShader:E,fragmentShader:U,...q})),S=1,x=1,A={type:ui,format:Ji,depthBuffer:!1,...bf},w=null,g=[],b=new Cn(4,4,A),P=()=>{w?.dispose(),w=new Cn(S,x,{type:ui,depthBuffer:!0,samples:c.msaa,...bf}),g.forEach(H=>H.dispose()),b.setSize(Math.max(1,S>>2),Math.max(1,x>>2)),g.length=0;let E=S,U=x;for(let H=0;H<6;H++)E=Math.max(1,E>>1),U=Math.max(1,U>>1),g.push(new Cn(E,U,A))},C=new Wr(-1,1,1,-1,0,1),O=f(new Ei);O.setAttribute("position",Qi([-1,-1,0,3,-1,0,-1,3,0],3)),O.setAttribute("uv",Qi([0,0,2,0,0,2],2));let B=new Ke(O);B.frustumCulled=!1;let V=new No;V.add(B);let N=(E,U)=>{B.material=E,a.setRenderTarget(U),a.render(V,C)},X=448,Q=548,Y=[0,1].map(()=>f(new Cn(X,Q,{type:s?ui:Fi,depthBuffer:!1,...bf}))),mt=0,tt=f(new ci({uniforms:{uPrev:{value:null},uRect:_.uSimRect,uDt:{value:1/60},uTime:_.uTime,uB0:{value:new le},uB1:{value:new le},uBrushR:{value:.62},uBrushOn:{value:0},uMoveDir:{value:new le(1,0)},uSpeed:{value:0},uRip:{value:Array.from({length:6},()=>y(0,0,-99,0))},uSpring:{value:1}},vertexShader:Yr,fragmentShader:`#define RS(a,b,x) (1.0-smoothstep(b,a,x))
`+mU})),ct=f(new ci({vertexShader:Yr,fragmentShader:"void main(){ gl_FragColor = vec4(0.0); }"})),dt=f(new Cn(256,192,{depthBuffer:!1,...bf}));_.uField.value=dt.texture;let Xt=m(Yr,Ue+"varying vec2 vUv; void main(){ vec2 xz = uFieldRect.xy + vUv*uFieldRect.zw; float n = textureLod(uNoise, xz*0.0019 - uWindDir*uTime*0.0021 + vec2(0.31,0.77), 0.0).b; gl_FragColor = vec4(gustAt(xz), n, 0.0, 1.0); }"),ne=f(new Cn(256,1,{type:ui,depthBuffer:!1,...bf,wrapS:Ii,wrapT:Ii}));_.uFogLUT.value=ne.texture;let rt=m(Yr,Ue+"varying vec2 vUv; void main(){ float az = radians(vUv.x*200.0 - 100.0); vec3 h = normalize(vec3(sin(az), 0.03, -cos(az))); vec3 f = vec3(0.0); if (uOver < 0.999) { f = skyMix(h, 1.0)*uFogTint; f = mix(f, uNightFog, uNight*0.85); } if (uOver > 0.001) f = mix(f, mix(skyK(4.0, h, 1.0), skyK(5.0, h, 1.0), uWxMix)*uOverGain, uOver); gl_FragColor = vec4(f, 1.0); }",{},{depthTest:!1,depthWrite:!1}),Nt=2048,Ot=f(new Cn(Nt,Nt,{depthBuffer:!0}));Ot.depthTexture=new Ya(Nt,Nt),Ot.depthTexture.type=ma,_.uShadow.value=Ot.depthTexture;let zt=new Wr(-12,12,12,-12,1,260),Dt=new No,kt=new No,bn=m("varying vec2 vNdc; void main(){ vNdc = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",Ue+gU,{uInvVP:{value:new Fe}},{depthWrite:!1,depthTest:!1}),jt=new Ke(O,bn);jt.frustumCulled=!1,jt.renderOrder=-10,kt.add(jt);{let H=new Float32Array(154413),q=new Float32Array(H.length),F=0;for(let at=0;at<=170;at++){let gt=at===0?0:.35*Math.exp(at*(Math.log(9142.857142857143)/170));for(let vt=0;vt<=300;vt++){let pt=vt/300*Math.PI*2,Vt=He.x+Math.sin(pt)*gt,ft=He.z-Math.cos(pt)*gt,Zt=On(Vt,ft),Gt=Math.max(.05,gt*.01),xe=On(Vt-Gt,ft)-On(Vt+Gt,ft),ye=On(Vt,ft-Gt)-On(Vt,ft+Gt),me=Math.hypot(xe,2*Gt,ye);H[F]=Vt,H[F+1]=Zt,H[F+2]=ft,q[F]=xe/me,q[F+1]=2*Gt/me,q[F+2]=ye/me,F+=3}}let j=[];for(let at=0;at<170;at++)for(let gt=0;gt<300;gt++){let vt=at*301+gt,pt=vt+300+1;j.push(vt,vt+1,pt,vt+1,pt+1,pt)}let I=f(new Ei);I.setAttribute("position",new jn(H,3)),I.setAttribute("normal",new jn(q,3)),I.setIndex(j);let $=new Ke(I,m("varying vec3 vWP; varying vec3 vN; void main(){ vWP = position; vN = normal; gl_Position = projectionMatrix*viewMatrix*vec4(position,1.0); }",Ue+vU));$.frustumCulled=!1,kt.add($)}let Pe=E=>m(Ue+c0+yU,Ue+_U,{uFadeNear:{value:64},uFadeFar:{value:92},uPix:{value:.001},uStem:{value:E?1:0}},{side:Nn}),ue=(()=>{let E=Ka(1234),U=470,H=64*Math.PI/180,q=92,F=7,j=[],I=0,$=3e3;for(let he=0;he<=$;he++){let Wt=.6+he/$*(q-.6),se=Wt<F?1:Math.pow(F/Wt,2.25);I+=se*Wt,j.push([Wt,I])}let at=I*((q-.6)/$)*2*H,gt=Math.floor(at*U*c.grass),vt=he=>{let Wt=he*I,se=0,xn=j.length-1;for(;se<xn;){let de=se+xn>>1;j[de][1]<Wt?se=de+1:xn=de}return j[se][0]},pt=()=>({A:[],B:[],C:[]}),Vt=pt(),ft=pt(),Zt=pt(),Gt=pt(),xe=(he,Wt)=>{let se=Math.floor(he/.85),xn=Math.floor(Wt/.85),de=1e9,ke=0,$i=0,Qa=0;for(let Fn=-1;Fn<=1;Fn++)for(let Jo=-1;Jo<=1;Jo++){let Ia=se+Fn,Ms=xn+Jo,Cf=(Ia+Qs(Ia,Ms))*.85,Nf=(Ms+Qs(Ms+17,Ia-5))*.85,Df=(Cf-he)**2+(Nf-Wt)**2;Df<de&&(de=Df,ke=Cf,$i=Nf,Qa=Qs(Ia*3+1,Ms*7+2))}return{x:ke,z:$i,id:Qa,d:Math.sqrt(de)}},ye=(he,Wt,se,xn)=>{let de=E(),ke=xe(Wt,se),$i=Js(Wt*.06+3,se*.06-1,3),Qa=.55+.9*qe(.25,.75,$i),Fn=0,Jo=E();Jo<.075+.08*qe(.5,.8,$i)?Fn=1:Jo<.25&&(Fn=2);let Ia,Ms,Cf=.75+.5*ke.id;Fn===1?(Ia=(.42+.45*E())*Qa,Ms=.0045+.002*E()):Fn===2?(Ia=.11+.15*E(),Ms=.0035+.0025*E()):(Ia=(.26+.36*E())*Cf*Qa,Ms=.0065+.006*E()),Ia*=qe(.3,1.6,Math.hypot(Wt-He.x,se-He.z));let Nf=ke.id*6.283+(E()-.5)*1.6,Df=Math.atan2(se-ke.z,Wt-ke.x)+(E()-.5)*1.2,kE=(.08+.32*E()*E()+Math.min(ke.d,.4)*.35)*(Fn===1?1.5:1)*(Ia>.45?1.25:1),WE=.78+.42*E()*(.6+.4*ke.id);he.A.push(Wt,On(Wt,se)-.02,se,de),he.B.push(Ia,Ms*xn,Nf,kE);let XE=Qs(Math.floor(Wt*.3),Math.floor(se*.3))*.5+.5*ke.id,qE=Js(Wt*.021*4+.13*4,se*.021*4+.13*4,3);he.C.push(Df,WE,Fn,Math.floor(XE*99)+Math.min(.999,qE))};for(let he=0;he<gt;he++){let Wt=vt(E()),se=(E()*2-1)*H;ye(Wt<7.5?Vt:Wt<24?ft:Zt,He.x+Math.sin(se)*Wt,He.z-Math.cos(se)*Wt,Wt<F?1:Math.pow(Wt/F,1.15))}let me=pt(),on=Math.floor(16e3*c.grass);for(let he=0;he<on;he++){let Wt=9*Math.sqrt(E()),se=E()*Math.PI*2;ye(me,Cc.x+Math.cos(se)*Wt,Cc.z+Math.sin(se)*Wt,2.6)}let Ln=Math.floor(9e3*c.grass);for(let he=0;he<Ln;he++){let Wt=2+Math.pow(E(),1.4)*40,se=(E()*2-1)*H,xn=He.x+Math.sin(se)*Wt,de=He.z-Math.cos(se)*Wt,ke=Js(xn*.06+3,de*.06-1,3);if(E()>.25+.75*qe(.3,.7,ke))continue;let $i=.55+.45*E();Gt.A.push(xn,On(xn,de)-.02,de,E()),Gt.B.push($i,.0018*(Wt<12?1:Wt/12),E()*6.283,.1+.3*E()),Gt.C.push(E()*6.283,.8+.4*E(),0,50.5)}let En=he=>{let Wt=he.A.length/4,se=new Uint32Array(Wt);for(let de=0;de<Wt;de++)se[de]=de;for(let de=Wt-1;de>0;de--){let ke=Math.floor(E()*(de+1)),$i=se[de];se[de]=se[ke],se[ke]=$i}let xn={A:new Float32Array(Wt*4),B:new Float32Array(Wt*4),C:new Float32Array(Wt*4),n:Wt};for(let de=0;de<Wt;de++)for(let ke=0;ke<4;ke++)xn.A[de*4+ke]=he.A[se[de]*4+ke],xn.B[de*4+ke]=he.B[se[de]*4+ke],xn.C[de*4+ke]=he.C[se[de]*4+ke];return xn},Yn=(he,Wt,se)=>{let xn=En(he),de=f(Gy(Wt,se));de.setAttribute("iA",yn(xn.A,4)),de.setAttribute("iB",yn(xn.B,4)),de.setAttribute("iC",yn(xn.C,4)),de.instanceCount=xn.n,de.userData.full=xn.n;let ke=new Ke(de,Pe(se));return ke.frustumCulled=!1,ke},Zn={near:Yn(Vt,6,!1),mid:Yn(ft,4,!1),far:Yn(Zt,2,!1),stems:Yn(Gt,10,!0),patch:Yn(me,4,!1),patchRel:new Float32Array(0)},ze=Zn.patch.geometry.attributes.iA.array;Zn.patchRel=new Float32Array(ze.length/4*2);for(let he=0,Wt=0;he<ze.length;he+=4,Wt+=2)Zn.patchRel[Wt]=ze[he]-Cc.x,Zn.patchRel[Wt+1]=ze[he+2]-Cc.z;return Zn})(),be=[ue.near,ue.mid,ue.far,ue.stems,ue.patch];kt.add(ue.far,ue.mid,ue.near,ue.stems,ue.patch);let Xn=()=>{let E=ue.patch.geometry.attributes.iA,U=E.array,H=ue.patchRel;for(let q=0,F=0;q<U.length;q+=4,F+=2){let j=d.treeX+H[F],I=d.treeZ+H[F+1];U[q]=j,U[q+1]=On(j,I)-.02,U[q+2]=I}E.needsUpdate=!0,ue.patch.visible=!!d.tree},nn=[],hn=(()=>{let E=Ka(99),U=[];for(let pt=0;pt<28;pt++){let Vt=3.2+Math.pow(E(),1.2)*24,ft=(E()*2-1)*.85;U.push({x:He.x+Math.sin(ft)*Vt,z:He.z-Math.cos(ft)*Vt,n:4+Math.floor(E()*10)})}for(let pt of U)for(let Vt=0;Vt<pt.n;Vt++){let ft=pt.x+(E()-.5)*3.2,Zt=pt.z+(E()-.5)*3.2;nn.push({x:ft,z:Zt,y:On(ft,Zt)-.02,h:.42+.26*E(),r:E(),lean:.05+.15*E(),la:E()*6.283,blown:-1e9})}let H=nn.length,q=new Float32Array(H*4),F=new Float32Array(H*4),j=new Float32Array(H*4);nn.forEach((pt,Vt)=>{q.set([pt.x,pt.y,pt.z,pt.r],Vt*4),F.set([pt.h,.0052,pt.r*6.28,pt.lean],Vt*4),j.set([pt.la,1,3,50.5],Vt*4)});let I=f(Gy(9,!0));I.setAttribute("iA",yn(q,4)),I.setAttribute("iB",yn(F,4)),I.setAttribute("iC",yn(j,4)),I.instanceCount=H;let $=new Ke(I,Pe(!0));$.frustumCulled=!1;let at=f(Rc());at.setAttribute("iA",yn(q,4)),at.setAttribute("iB",yn(F,4)),at.setAttribute("iC",yn(j,4));let gt=yn(new Float32Array(H).fill(-1e9),1);gt.setUsage(Tc),at.setAttribute("iBlown",gt),at.instanceCount=H;let vt=new Ke(at,m(Ue+c0+xU,Ue+SU,{uPuff:{value:f(wc(256,ZU))},uBloom:{value:f(wc(256,KU))}},Iy));return vt.frustumCulled=!1,vt.renderOrder=5,{stems:$,puffs:vt,blownAttr:gt,count:H}})();be.push(hn.stems),kt.add(hn.stems,hn.puffs);let Ge=900,Jt={n:0,p:new Float32Array(Ge*3),v:new Float32Array(Ge*3),age:new Float32Array(Ge),life:new Float32Array(Ge),spin:new Float32Array(Ge)},_n=f(Rc()),fi=yn(new Float32Array(Ge*4),4);fi.setUsage(Tc),_n.setAttribute("iP",fi),_n.instanceCount=0;let _i=new Ke(_n,m(Ue+NU,Ue+DU,{uSeed:{value:f(wc(64,JU))}},Iy));_i.frustumCulled=!1,_i.renderOrder=6,kt.add(_i);let Hi=(E,U,H,q)=>{for(let F=0;F<q&&Jt.n<Ge;F++){let j=Jt.n++,I=Math.random()*Math.PI*2,$=Math.random()*2-1,at=Math.sqrt(1-$*$);Jt.p[j*3]=E+Math.cos(I)*at*.02,Jt.p[j*3+1]=U+$*.02,Jt.p[j*3+2]=H+Math.sin(I)*at*.02,Jt.v[j*3]=Math.cos(I)*at*.5,Jt.v[j*3+1]=.35+Math.abs($)*.4,Jt.v[j*3+2]=Math.sin(I)*at*.5,Jt.age[j]=0,Jt.life[j]=9+Math.random()*9,Jt.spin[j]=Math.random()}},z=(E,U)=>{let H=_.uWindDir.value,q=_.uWind.value,F=Jt.n;for(let I=0;I<F;I++){if(Jt.age[I]+=E,Jt.age[I]>Jt.life[I]){F--,Jt.p.copyWithin(I*3,F*3,F*3+3),Jt.v.copyWithin(I*3,F*3,F*3+3),Jt.age[I]=Jt.age[F],Jt.life[I]=Jt.life[F],Jt.spin[I]=Jt.spin[F],I--;continue}let $=Jt.p[I*3],at=Jt.p[I*3+2],gt=Js($*.05-H.x*U*.05,at*.05-H.y*U*.05,2),vt=H.x*q*(.9+2.2*gt)+Math.sin(U*.7+I)*.25,pt=H.y*q*(.9+2.2*gt)+Math.cos(U*.6+I*1.3)*.25,Vt=.18+Math.sin(U*.9+I*.7)*.22-.08,ft=1-Math.exp(-E*1.4);Jt.v[I*3]+=(vt-Jt.v[I*3])*ft,Jt.v[I*3+1]+=(Vt-Jt.v[I*3+1])*ft,Jt.v[I*3+2]+=(pt-Jt.v[I*3+2])*ft,Jt.p[I*3]+=Jt.v[I*3]*E,Jt.p[I*3+1]=Math.max(Jt.p[I*3+1]+Jt.v[I*3+1]*E,On($,at)+.3),Jt.p[I*3+2]+=Jt.v[I*3+2]*E}Jt.n=F;let j=fi.array;for(let I=0;I<F;I++){let $=Jt.age[I],at=Jt.life[I],gt=qe(0,.3,$)*(1-qe(at-2.5,at,$));j[I*4]=Jt.p[I*3],j[I*4+1]=Jt.p[I*3+1],j[I*4+2]=Jt.p[I*3+2],j[I*4+3]=gt*.999}(F>0||_n.instanceCount>0)&&(fi.needsUpdate=!0),_n.instanceCount=F},wi=(()=>{let E=f(Rc()),U=Ka(5),H=new Float32Array(880);for(let F=0;F<220;F++)H.set([(U()-.5)*30,U()*3.2+.15,-1-U()*28,U()],F*4);E.setAttribute("iA",yn(H,4)),E.instanceCount=220;let q=new Ke(E,m(Ue+LU,Ue+UU,{uHome:{value:ht(He.x,0,He.z)}},{transparent:!0,depthWrite:!1,blending:Oo}));return q.frustumCulled=!1,q.renderOrder=7,q})();kt.add(wi);let _e=(()=>{let E=Ka(271),U=66*Math.PI/180,H=Math.floor(4200*Math.max(.5,c.grass)),q=[],F=0;for(;q.length<H&&F++<H*30;){let Gt=1.6+Math.pow(E(),1.6)*34,xe=(E()*2-1)*U,ye=He.x+Math.sin(xe)*Gt,me=He.z-Math.cos(xe)*Gt;if(E()>qe(.42,.68,Js(ye*.09+7,me*.09-3,3)))continue;let on=Js(ye*.05-11,me*.05+5,2),Ln=on<.4?0:on<.56?1:on<.64?3:2,En=(Ln===1?.42:Ln===0?.55:Ln===2?.3:.36)*(.75+.5*E());q.push({x:ye,z:me,y:On(ye,me)-.02,h:En,r:E(),type:Ln,la:E()*6.283,lean:.04+.16*E()})}let j=q.length,I=new Float32Array(j*4),$=new Float32Array(j*4),at=new Float32Array(j*4);q.forEach((Gt,xe)=>{I.set([Gt.x,Gt.y,Gt.z,Gt.r],xe*4),$.set([Gt.h,.0014,Gt.r*6.28,Gt.lean],xe*4),at.set([Gt.la,1,3,50.5+Gt.type*.1],xe*4)});let gt=f(Gy(6,!0));gt.setAttribute("iA",yn(I,4)),gt.setAttribute("iB",yn($,4)),gt.setAttribute("iC",yn(at,4)),gt.instanceCount=j,gt.userData.full=j;let vt=new Ke(gt,Pe(!0));vt.frustumCulled=!1;let pt=f(Rc());pt.setAttribute("iA",yn(I,4)),pt.setAttribute("iB",yn($,4)),pt.setAttribute("iC",yn(at,4)),pt.instanceCount=j;let Vt=new Ke(pt,m(Ue+c0+MU,Ue+bU,{uWild:{value:f(wc(512,QU))}},{side:Nn}));Vt.frustumCulled=!1;let ft=()=>{let Gt=new Ke(f(Vy(16e3,808)),m(Ue+Hy+TU,EU,{uBox:{value:ht(26,11,26)},uAmt:{value:0}},{side:Nn,transparent:!0,depthWrite:!1,blending:xc,blendSrc:Sc,blendDst:zo}));return Gt.frustumCulled=!1,Gt.renderOrder=9,Gt},Zt=()=>{let Gt=new Ke(f(Vy(36e3,909)),m(Ue+Hy+AU,Ue+wU,{uBox:{value:ht(24,10,24)},uAmt:{value:0}},Iy));return Gt.frustumCulled=!1,Gt.renderOrder=9,Gt};return{wild:{stems:vt,heads:Vt,n:j},rain:ft(),snow:Zt()}})();be.push(_e.wild.stems),kt.add(_e.wild.stems,_e.wild.heads,_e.rain,_e.snow);let ie={uTreeM:{value:new Fe},uTreeBase:{value:ht()},uTreeH:{value:13},uCanopyC:{value:ht()},uCanopyR:{value:ht(8,5,8)},uSway:{value:1},uLeafTint:{value:ht(.8,.86,.72)},uBarkTint:{value:ht(.92,.88,.84)},uBlossom:{value:ht(.25,.17,.69)},uAutA:{value:ht()},uAutB:{value:ht()},uAutC:{value:ht()}},Mt=tP(31);f(Mt.bark),Mt.bark.computeBoundingBox();let dn=new ps,Qt=new ps,$t=f(wc(512,$U));$t.wrapS=$t.wrapT=Ii;let R=c.msaa>0,M=E=>Object.assign({},ie,E),k=m(Ue+Go+AE,Ue+Go+PU,M({}),{side:Nn}),yt=m(Ue+Go+wE,Ue+Go+OU,M({uLeaf:{value:$t},uA2C:{value:R?1:0}}),{side:Nn,alphaToCoverage:R}),ot=m(Ue+Go+AE,"void main(){ gl_FragColor = vec4(1.0); }",M({}),{side:Nn}),Tt=m(Ue+Go+wE,Ue+"uniform sampler2D uLeaf; varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu; void main(){ if (vClu.x > 1.0 - 0.18*uSeason.z - 0.985*uSeason.w || texture2D(uLeaf, vUv).a < 0.5) discard; gl_FragColor = vec4(1.0); }",M({uLeaf:{value:$t}}),{side:Nn}),Et=(E,U,H)=>{let q=new Ke(E,U);q.frustumCulled=!1,dn.add(q);let F=new Ke(E,H);F.frustumCulled=!1,Qt.add(F)};Et(Mt.bark,k,ot);let nt=f(eP());{let E=Mt.leaves,U=Mt.nLeaves,H=[0,1,2,3].map(()=>new Float32Array(U*3));for(let q=0;q<U;q++)for(let F=0;F<4;F++)for(let j=0;j<3;j++)H[F][q*3+j]=E[q*12+F*3+j];H.forEach((q,F)=>nt.setAttribute("iM"+F,yn(q,3))),nt.instanceCount=U}Et(nt,yt,Tt),Dt.add(Qt),kt.add(dn);let it={center:ht(),radius:10,size:ht(),base:ht(),bb:new gs},ut={rts:[],cam:new Wr(-1,1,1,-1,1,400),mesh:null,last:-9,hw:10,hh:16};for(let E=0;E<3;E++)ut.rts.push(f(new Cn(384,480,{type:ui,depthBuffer:!0,generateMipmaps:!0,minFilter:pa,magFilter:Pn})));let D=(E,U)=>{for(let F of["iP","iX","iY","iZ"]){let j=yn(new Float32Array(U*3),3);j.setUsage(Tc),E.setAttribute(F,j)}let H=yn(new Float32Array(U*2),2);H.setUsage(Tc),E.setAttribute("iF",H),E.instanceCount=U;let q=new Ke(E,m(Ue+VU,Ue+kU,{uTint:{value:ht(1,1,1)}},{side:Nn}));return q.frustumCulled=!1,q},st=ht(),et=ht(),St=ht(),xt=(E,U,H,q,F,j,I)=>{let $=E.geometry.attributes;St.copy(q).normalize(),st.crossVectors(F,St).normalize(),et.crossVectors(St,st),$.iP.setXYZ(U,H.x,H.y,H.z),$.iX.setXYZ(U,st.x,st.y,st.z),$.iY.setXYZ(U,et.x,et.y,et.z),$.iZ.setXYZ(U,St.x,St.y,St.z),$.iF.setXY(U,j,I)},bt=E=>{for(let U of["iP","iX","iY","iZ","iF"])E.geometry.attributes[U].needsUpdate=!0},qt=14,Ct={birds:[],swallows:[],perches:[],trunk:[],sq:{t:0},sqFace:0,birdMesh:D(f(RE()),qt),swMesh:D(f(RE()),3),sqMesh:D(f(sP()),1)};kt.add(Ct.birdMesh,Ct.swMesh,Ct.sqMesh);let _t=ht(0,1,0),Kt=()=>{let E=ie.uTreeM.value,U=ie.uCanopyC.value,H=ie.uCanopyR.value;Ct.perches.length=0,Ct.trunk.length=0;let q=Mt.leaves;for(let I=0;I<q.length;I+=36){let $=ht(q[I+9],q[I+10],q[I+11]).applyMatrix4(E),at=$.clone().sub(U).divide(H);at.length()>.5&&at.y>-.35&&Ct.perches.push($)}Ct.perches.length||Ct.perches.push(U.clone());let F=ie.uTreeBase.value,j=Mt.trunk.map(I=>({v:ht(I.x,I.y,I.z).applyMatrix4(E),r:I.r*.72*d.treeScale}));for(let I=.125;;I+=.25){let $=F.y+I,at=j.findIndex(Vt=>Vt.v.y>=$);if(at<=0)if(at===0)at=1;else break;let gt=j[at-1],vt=j[at],pt=Yt(($-gt.v.y)/Math.max(1e-4,vt.v.y-gt.v.y),0,1);if(Ct.trunk.push({y:$,x:ee(gt.v.x,vt.v.x,pt),z:ee(gt.v.z,vt.v.z,pt),r:Math.min(ee(gt.r,vt.r,pt),.32)}),Ct.trunk.length>20)break}Ct.sqFace=Math.atan2(He.z-F.z,He.x-F.x),Ct.birds.forEach(I=>{let $=Ct.perches[I.pi%Math.max(1,Ct.perches.length)];$&&(I.at=$.clone(),I.p.copy($),I.state="perch",I.path=null)})},fe=ht();{let E=Mt.trunk[0];fe=ht(E.x,E.y,E.z)}let Lt=()=>{let E=.72*d.treeScale,U=On(d.treeX,d.treeZ)-.25*d.treeScale,H=new Fe().makeTranslation(d.treeX,U,d.treeZ).multiply(new Fe().makeRotationY(-.7+d.treeTurn*Math.PI/180)).multiply(new Fe().makeScale(E,E,E)).multiply(new Fe().makeTranslation(-fe.x,-fe.y,-fe.z));ie.uTreeM.value.copy(H),ie.uTreeBase.value.set(d.treeX,U,d.treeZ),_.uTreeXZ.value.set(d.treeX,d.treeZ),ie.uTreeH.value=19.3*E;let q=Mt.bark.boundingBox.clone().applyMatrix4(H),F=q.getCenter(ht()),j=q.getSize(ht());ie.uCanopyC.value.set(F.x,F.y+j.y*.08,F.z),ie.uCanopyR.value.set(j.x*.55,j.y*.5,j.z*.55),dn.visible=Qt.visible=!!d.tree,it={center:F,radius:Math.max(j.x,j.y,j.z)*.62,size:j,base:ht(d.treeX,U,d.treeZ),bb:q},Kt(),Xn(),ut.mesh&&(ut.hw=Math.max(q.max.x-q.min.x,q.max.z-q.min.z)*.56,ut.hh=(q.max.y-U)*1.04,ut.mesh.material.uniforms.uSize.value.set(ut.hw,ut.hh),ut.last=-9)};Lt();{let E=it.bb;ut.hw=Math.max(E.max.x-E.min.x,E.max.z-E.min.z)*.56,ut.hh=(E.max.y-it.base.y)*1.04;let U=Ka(31),H=[],q=[];for(let I=0;I<34;I++){let $=(U()*2-1)*(U()<.75?.85:1.35);if(Math.abs($-.42)<.12)continue;let at=200+Math.pow(U(),1.1)*700,gt=1+Math.floor(U()*U()*7),vt=$;for(let pt=0;pt<gt;pt++){vt+=(8+U()*22)/at;let Vt=at+(U()-.5)*40,ft=He.x+Math.sin(vt)*Vt,Zt=He.z-Math.cos(vt)*Vt,Gt=.4+.75*U()*U()+.25*U();H.push(ft,On(ft,Zt)-.6,Zt,Gt*(U()<.5?-1:1)),q.push(Math.floor(U()*3)+.6+.5*U())}}let F=f(Rc([-1,0,0,1,0,0,1,1,0,-1,1,0]));F.setAttribute("iP",yn(new Float32Array(H),4)),F.setAttribute("iV",yn(new Float32Array(q),1)),F.instanceCount=H.length/4;let j=m(Ue+IU,Ue+zU,{uImp0:{value:ut.rts[0].texture},uImp1:{value:ut.rts[1].texture},uImp2:{value:ut.rts[2].texture},uSize:{value:new le(ut.hw,ut.hh)}},{alphaToCoverage:c.msaa>0,side:Nn});ut.mesh=new Ke(F,j),ut.mesh.frustumCulled=!1,kt.add(ut.mesh)}let Ve=()=>{let E=it.base,U=ut.cam,H=_.uFog.value,q=_.uCloud.value;_.uFog.value=0,_.uCloud.value=0;let F=kt.children.map(I=>I.visible);kt.children.forEach(I=>I.visible=I===dn),dn.visible=!0;let j=Math.atan2(E.x-He.x,-(E.z-He.z));ut.rts.forEach((I,$)=>{let at=j+$*2.1,gt=ht(Math.sin(at),0,-Math.cos(at));U.left=-ut.hw,U.right=ut.hw,U.top=ut.hh,U.bottom=0,U.position.set(E.x,E.y,E.z).addScaledVector(gt,-150),U.lookAt(E.x,E.y,E.z),U.near=100,U.far=220,U.updateProjectionMatrix(),U.updateMatrixWorld(),a.setRenderTarget(I),a.setClearColor(0,0),a.clear(!0,!0,!1),a.render(kt,U)}),kt.children.forEach((I,$)=>I.visible=F[$]),_.uFog.value=H,_.uCloud.value=q,a.setClearColor(0,1)},pn=new Ke(f(Vy(1500,1717)),m(Ue+c0+Hy+Go+RU,Ue+CU,Object.assign({},ie,{uFallTex:{value:f(wc(256,jU))},uLeafAmt:{value:0},uPetalAmt:{value:0},uPetalShare:{value:0},uBox:{value:ht(22,4,22)}}),{side:Nn,transparent:!0,depthWrite:!0,blending:xc,blendSrc:Sc,blendDst:zo}));pn.frustumCulled=!1,pn.renderOrder=6,kt.add(pn);let Gi=m(Ue+BU,Ue+FU,{uBody:{value:ht(.2,.5,.65)},uRoof:{value:ht(.88,.86,.8)},uLights:{value:0},uGlow:{value:1}}),ko=E=>{let U=new Ke(f(E),Gi);return U.renderOrder=4,U.visible=!1,kt.add(U),U},Jr={van:ko(nP()),car:ko(iP()),bike:ko(aP())},Nc={van:{lamps:[[-.58,.88,2.2],[.58,.88,2.2]],inside:[0,1.5,0],glow:1,beam:1,shade:1.15},car:{lamps:[[-.58,.76,2.1],[.58,.76,2.1]],inside:[0,1.1,0],glow:0,beam:.85,shade:1.05},bike:{lamps:[[-.13,.91,.7],[-.09,.91,.7]],inside:[0,.9,0],glow:0,beam:.55,shade:.45}},ga=Jr.van,ji=Nc.van,ve={lights:0,target:0,manual:!1,t0:-9,front:ht(),lamp:ht(),lamp2:ht(),inside:ht(),dir1:ht(),dir2:ht(),toCam:ht(0,0,1)},Wo=()=>{let E=12*Math.tan(12*Math.PI/180),U=f(new vs(.06,E,12,32,12,!0));U.translate(0,-6,0);let H=m(Ue+HU,Ue+GU,{uOn:{value:0},uCol:{value:ht(1,.88,.7)}},{transparent:!0,depthWrite:!1,blending:Oo,side:Nn}),q=new Ke(U,H);return q.renderOrder=8,q.frustumCulled=!1,kt.add(q),q},Xo=[Wo(),Wo()],Dc=ht(0,1,0),Qr=()=>{let E=d.vanScale,U=d.vanX,H=d.vanZ,q=On(U,H)-.04,F=ht(He.x-U,0,He.z-H).normalize();ve.toCam.copy(F);let j=Math.atan2(F.x,F.z)-(34-d.vanTurn)*Math.PI/180,I=d.vtype in Nc?d.vtype:"van";for(let gt of Object.values(Jr))gt.visible=!1;ga=Jr[I],ji=Nc[I],Gi.uniforms.uGlow.value=ji.glow,ve.front.set(Math.sin(j),-.17,Math.cos(j)).normalize(),ga.position.set(U,q,H),ga.rotation.set(0,j,0),ga.scale.setScalar(E),ga.visible=!!d.van;let $=gt=>ga.localToWorld(ht(gt[0],gt[1],gt[2]));ga.updateMatrixWorld(),ve.lamp.copy($(ji.lamps[0])),ve.lamp2.copy($(ji.lamps[1])),ve.inside.copy($(ji.inside));let at=4*Math.PI/180;ve.dir1.copy(ve.front).applyAxisAngle(Dc,at),ve.dir2.copy(ve.front).applyAxisAngle(Dc,-at),_.uHeadDir.value.copy(ve.dir1),_.uHeadDir2.value.copy(ve.dir2),Xo.forEach((gt,vt)=>{gt.position.copy(vt?ve.lamp2:ve.lamp),gt.quaternion.setFromUnitVectors(ht(0,-1,0),(vt?ve.dir2:ve.dir1).clone().normalize())}),_.uVanPos.value.set(U,H,2.6*Math.max(.2,E*ji.shade),_.uVanPos.value.w)};Qr();let jr=f(new ci({uniforms:{uSrc:{value:null},uTexel:{value:new le},uFirst:{value:0}},vertexShader:Yr,fragmentShader:WU,depthTest:!1,depthWrite:!1})),qo=f(new ci({uniforms:{uSrc:{value:null},uTexel:{value:new le},uRadius:{value:1}},vertexShader:Yr,fragmentShader:XU,blending:Oo,depthTest:!1,depthWrite:!1,transparent:!0})),js=f(new ci({uniforms:{uSrc:{value:null},uSun:_.uSunUV},vertexShader:Yr,fragmentShader:qU,depthTest:!1,depthWrite:!1})),Ss=f(new ci({uniforms:{uScene:{value:null},uBloom:{value:null},uRays:{value:b.texture},uRayAmt:_.uRayAmt,uBloomAmt:{value:.05},uExposure:{value:1},uSat:{value:1},uWarm:{value:0},uContrast:{value:1},uVig:{value:.2},uTime:_.uTime,uRes:{value:new le},uLift:{value:ht()},uFade:{value:0}},vertexShader:Yr,fragmentShader:`#define RS(a,b,x) (1.0-smoothstep(b,a,x))
`+YU,depthTest:!1,depthWrite:!1})),Z={time:0,mode:0,modeTarget:0,intro:0,ptr:{x:.5,y:.5,on:!1,down:!1,px:0,py:0,moved:!1},look:{x:0,y:0},brush:null,brushPrev:null,brushSpeed:0,moveDir:new le(1,0),gust:0,ripples:[],rippleIdx:0,zoom:1,zoomT:1,aim:new le,aimT:new le,baseFov:47,windBase:.6},At={s:[0,1,0,0],rain:0,snow:0,cover:0,wet:0,over:0,mixS:0,cap:[0,1,0,0],capCover:0,capT:-9},p0=Yt(l.day.start,0,3);Z.mode=Z.modeTarget=p0,Z.intro=l.intro&&!o?0:1;let Tf=E=>{let U=l0.length-1,H=Math.floor(Yt(E,0,U)),q=Math.min(U,H+1),F=o0(Yt(E-H,0,1)),j=l0[H],I=l0[q],$=n.current.sky;_.uSkyKA.value=j.sky,_.uSkyKB.value=I.sky,_.uSkyMix.value=F,_.uSkyDimA.value=1,I.moon&&(_.uSkyMix.value=Math.pow(F,1.7),_.uSkyDimA.value=1-.75*F);let[at,gt]=NE(hU,E),[vt,pt]=NE(dU,E),Vt=DE(at,gt),ft=DE(vt,pt),Zt=ze=>{let he=ze.moon?[0,0,0]:ze.sunE.map(Wt=>Wt*ze.sunMul);if(ze.minSun)for(let Wt=0;Wt<3;Wt++)he[Wt]=Math.max(he[Wt],ze.minSun[Wt]);return he},Gt=Zt(j),xe=Zt(I),ye=qe(-1.2,1.6,gt),me=[0,1,2].map(ze=>ee(Gt[ze],xe[ze],F)*ye),on=qe(-1,6,pt)*qe(1.9,2.7,E),Ln=[.78,.9,1.18].map(ze=>ze*2.3*on),En=ky(Ln)>ky(me);_.uSunDir.value.copy(En?ft:Vt);let Yn=En?Ln:me;_.uSunCol.value.set(Yn[0],Yn[1],Yn[2]),_.uSunDisc.value.set(Vt.x,Vt.y,Vt.z,qe(-1.5,.5,gt)*(1-qe(2.2,2.6,E))),_.uSunGlow.value=Yt(ky(me)/5.5,.25,1.4)*($.sunGlow/100),_.uSunSize.value=3*$.sunSize/100,_.uMoonSize.value=$.moonSize/100,_.uStars.value=$.stars/100,_.uGainA.value=j.moon?$.nightSky/100:1,_.uGainB.value=I.moon?$.nightSky/100:1,_.uRayAmt.value=ee(j.rays,I.rays,F)*qe(-.5,3,gt)*($.rays/100),_.uMoonDisc.value.set(ft.x,ft.y,ft.z,qe(1.95,2.6,E)*qe(-2,1,pt));for(let ze=0;ze<9;ze++)_.uSH.value[ze].set(ee(j.sh[ze*3]*j.shMul,I.sh[ze*3]*I.shMul,F),ee(j.sh[ze*3+1]*j.shMul,I.sh[ze*3+1]*I.shMul,F),ee(j.sh[ze*3+2]*j.shMul,I.sh[ze*3+2]*I.shMul,F));_.uCloud.value=ee(j.cloud,I.cloud,F),_.uFog.value=ee(j.fog,I.fog,F)*($.haze/100),_.uFogTint.value.set(ee(j.fogTint[0],I.fogTint[0],F),ee(j.fogTint[1],I.fogTint[1],F),ee(j.fogTint[2],I.fogTint[2],F));let Zn=Ss.uniforms;Zn.uExposure.value=ee(j.exposure,I.exposure,F)*($.exposure/100),Zn.uBloomAmt.value=ee(j.bloom,I.bloom,F),Zn.uWarm.value=ee(j.warm,I.warm,F)+$.warmth/100,Zn.uSat.value=ee(j.sat,I.sat,F),Zn.uContrast.value=ee(j.contrast,I.contrast,F),Zn.uLift.value.set(ee(j.lift[0],I.lift[0],F),ee(j.lift[1],I.lift[1],F),ee(j.lift[2],I.lift[2],F)),Z.windBase=ee(j.wind,I.wind,F),_.uShadowStr.value=Yt(((En?pt:gt)-.3)/3,0,1)*(En?.75:1),_.uNight.value=qe(2.45,2.95,E)},Ef=(E,U)=>{let H=n.current,q=[0,0,0,0];q[Math.max(0,pU.indexOf(H.season))]=1;let F=H.weather.kind==="rain"?1:0,j=H.weather.kind==="snow"?1:0,I=U?1:1-Math.exp(-E*1.15);for(let pt=0;pt<4;pt++)At.s[pt]+=(q[pt]-At.s[pt])*I;let $=U?1:1-Math.exp(-E*.75);At.rain+=(F-At.rain)*$,At.snow+=(j-At.snow)*$,At.over=Math.min(1,At.rain+At.snow),At.rain+At.snow>.001&&(At.mixS=At.snow/(At.rain+At.snow));let at=Math.max(At.s[3],j*.85),gt=at>At.cover,vt=At.s[3]>=at-.02;At.cover=U?at:At.cover+(at-At.cover)*(1-Math.exp(-E*(gt?vt?1.1:.09:.22))),At.wet=U?F:At.wet+(F-At.wet)*(1-Math.exp(-E*(F>At.wet?.45:.07)))},In=(E,U)=>E.set(U[0],U[1],U[2]),T=()=>{let E=n.current,U=E.grass,H=E.sc,q=j=>{let I=[0,0,0];return j.forEach(($,at)=>{let gt=Dn($,"#405e2b");for(let vt=0;vt<3;vt++)I[vt]+=gt[vt]*At.s[at]}),I};In(_.uBlade.value,q([H.springBlade,U.bladeColor,H.autumnBlade,H.winterBlade])),In(_.uTip.value,q([H.springTip,U.tipColor,H.autumnTip,H.winterTip]));let F=Yt(U.dry,0,60)/100;_.uDry.value=Yt(At.s[0]*Math.min(F,.03)+At.s[1]*F+At.s[2]*Math.max(F,.42)+At.s[3]*Math.max(F,.55),0,.92),_.uSeason.value.set(At.s[0],At.s[1],At.s[2],At.s[3]),_.uSnow.value=At.cover,_.uWet.value=At.wet,_.uRain.value=At.rain*Yt(E.weather.rain/100,0,2),_.uSnowFall.value=At.snow*Yt(E.weather.snow/100,0,2),_.uOver.value=At.over,_.uWxMix.value=At.mixS,_.uYellow.value=At.s[0]*.8},L=E=>{let U=Math.floor(Yt(E,0,3)),H=Math.min(3,U+1),q=Yt(E-U,0,1),F=ee(TE[U],TE[H],q)*(1+At.mixS*.35*qe(1.5,3,E)),j=[0,1,2].map(vt=>ee(EE[U][vt],EE[H][vt],q)*F);_.uOverGain.value.set(j[0],j[1],j[2]);let I=At.over,$=Ss.uniforms;$.uWarm.value+=.035*At.s[2]-.03*At.s[3],$.uSat.value*=1+.04*At.s[0]-.05*At.s[3],$.uExposure.value*=1-.12*At.cover;let at=_.uSH.value;if(I>.001){let vt=At.mixS;for(let pt=0;pt<9;pt++){let Vt=at[pt];Vt.set(ee(Vt.x,ee(By[pt*3],Fy[pt*3],vt)*j[0],I),ee(Vt.y,ee(By[pt*3+1],Fy[pt*3+1],vt)*j[1],I),ee(Vt.z,ee(By[pt*3+2],Fy[pt*3+2],vt)*j[2],I))}_.uSunCol.value.multiplyScalar(1-.9*I),_.uShadowStr.value*=1-.85*I,_.uSunDisc.value.w*=1-I,_.uMoonDisc.value.w*=1-I,_.uStars.value*=1-I,_.uRayAmt.value*=1-I,_.uCloud.value*=1-I,_.uFog.value*=1+I*ee(2.8,1.7,vt),_.uFogTint.value.lerp(ht(1,1,1),I),$.uSat.value*=1-.16*I,$.uContrast.value=ee($.uContrast.value,.98,I),$.uWarm.value=ee($.uWarm.value,-.02,I*.6),$.uExposure.value*=1+.32*I*(1-vt),Z.windBase*=1+I*ee(.6,-.3,vt)}let gt=vt=>Math.max(0,.886227*at[0].getComponent(vt)+1.023327*at[1].getComponent(vt))/Math.PI;if(_.uSkyAvg.value.set(gt(0),gt(1),gt(2)),At.cover>.001){let vt=_.uSunDir.value,pt=_.uSunCol.value,Vt=[0,1,2].map(Zt=>Math.max(0,3.141593*.282095*at[0].getComponent(Zt)+2.094395*.488603*at[1].getComponent(Zt))+pt.getComponent(Zt)*Math.max(vt.y,0)),ft=Dn(n.current.sc.snow,Vo.snow);for(let Zt=0;Zt<3;Zt++){let Gt=At.cover*(ft[Zt]*.85-.08)*Vt[Zt]/Math.PI;at[0].setComponent(Zt,at[0].getComponent(Zt)+Gt*1.7725),at[1].setComponent(Zt,at[1].getComponent(Zt)-Gt*1.535)}}},K=()=>{let E=n.current,U=Yt(_.uRain.value*.55,0,1),H=Yt(_.uSnowFall.value*.8,0,1);_e.rain.material.uniforms.uAmt.value=U,_e.rain.visible=U>.002,_e.snow.material.uniforms.uAmt.value=H,_e.snow.visible=H>.002;let q=pn.material.uniforms,F=Yt(E.weather.leafFall/100,0,2);q.uLeafAmt.value=Yt((At.s[2]*.7+At.s[1]*.025+At.s[3]*.04)*F,0,1),q.uPetalAmt.value=Yt(At.s[0]*.5*F,0,1),q.uPetalShare.value=At.s[0],pn.visible=!!d.tree&&q.uLeafAmt.value+q.uPetalAmt.value>.002;let j=(At.s[0]+At.s[1]+.35*At.s[2])*(1-At.cover),I=Math.round(Yt(E.meadow.dandelions/100,0,2)*j*nn.length/2);hn.puffs.geometry.instanceCount=I,hn.stems.geometry.instanceCount=I,hn.count=I;let $=(At.s[0]+.3*At.s[1]+.06*At.s[2])*(1-At.cover)*Yt(E.meadow.wildflowers/100,0,2)*.75,at=Math.round(_e.wild.n*Yt($,0,1));_e.wild.stems.geometry.instanceCount=at,_e.wild.heads.geometry.instanceCount=at,_e.wild.stems.visible=_e.wild.heads.visible=at>0},G=ht(),W=E=>{let U=n.current,H=U.placement,q=U.adv,F=Z.time,j=On(He.x,He.z),I=o0(Yt(Z.intro,0,1)),$=Math.min(1,E*1.8);Z.look.x+=(Z.ptr.x-.5-Z.look.x)*$,Z.look.y+=(Z.ptr.y-.5-Z.look.y)*$;let at=Z.look.x,gt=Z.look.y,vt=j+Yt(q.camHeight,.3,6),pt=j+.18,Vt=ee(pt,vt,I),ft=He.x+at*.35+Math.sin(F*.21)*.04;u.position.set(ft,Vt,He.z);let Zt=2.2+at*2.8,Gt=-36,xe=On(Zt,Gt)+ee(7.5,2.6,I)-gt*1.6+Math.sin(F*.17)*.06;u.lookAt(G.set(Zt,xe,Gt)),u.rotateY(-q.camYaw*Math.PI/180),u.rotateX(-Yt(H.tilt,-90,90)*Math.PI/180),u.rotateZ(Math.sin(F*.13)*.002+Yt(H.angle,-180,180)*Math.PI/180),Z.zoom+=(Z.zoomT-Z.zoom)*Math.min(1,E*4),Z.aim.lerp(Z.aimT,Math.min(1,E*4));let ye=1-1/Z.zoom,me=Z.baseFov*Math.PI/360;u.rotateY(-Z.aim.x*Math.atan(Math.tan(me)*u.aspect)*ye),u.rotateX(Z.aim.y*me*ye);let on=Z.baseFov/Z.zoom,Ln=-Yt(H.x,-50,50)/100*Pa,En=-Yt(H.y,-50,50)/100*Ja,Yn=`${Ln}|${En}|${Pa}|${Ja}`;(Math.abs(u.fov-on)>1e-4||Yn!==wt)&&(u.fov=on,wt=Yn,Ln||En?u.setViewOffset(Pa,Ja,Ln,En,Pa,Ja):u.clearViewOffset(),u.updateProjectionMatrix(),Bt())},wt="",Bt=()=>{let E=2*Math.tan(u.fov*Math.PI/360)/x;_.uPixAng.value=Math.max(E,35e-5);for(let U of be)U.material.uniforms.uPix.value=E},Rt=(E,U)=>{let H=Yt(U,1,6),q=Z.zoom,F=Z.aim.clone();Z.zoom=1,Z.aim.set(0,0),W(0),u.updateMatrixWorld();let j=E.clone().project(u);Z.zoom=q,Z.aim.copy(F);let I=1-1/H,$=Math.atan(Math.tan(Z.baseFov*Math.PI/360)*u.aspect),at=Z.baseFov*Math.PI/360;Z.zoomT=H,Z.aimT.set(Math.atan(j.x*Math.tan($))/($*I),Math.atan(j.y*Math.tan(at))/(at*I))},Ut=t.getBoundingClientRect(),Ft=!0,ae=()=>(Ft&&(Ut=t.getBoundingClientRect(),Ft=!1),Ut),Me=(E,U)=>{let H=ae();return new le((E-H.left)/Math.max(1,H.width)*2-1,-((U-H.top)/Math.max(1,H.height))*2+1)},It={o:ht(),d:ht()},Ee=(E,U,H=.28)=>{let q=Me(E,U),F=ht(q.x,q.y,.5);return F.unproject(u),It.o.copy(u.position),It.d.copy(F).sub(u.position).normalize(),oU(It.o,It.d,H)},rn=new lf,tn=(E,U)=>{if(!d.tree)return null;rn.setFromCamera(Me(E,U),u);let H=ie.uCanopyC.value,q=ie.uCanopyR.value,F=rn.ray.origin,j=rn.ray.direction,I=F.clone().sub(H).divide(q),$=j.clone().divide(q),at=$.dot($),gt=2*I.dot($),vt=I.dot(I)-.8,pt=gt*gt-4*at*vt;if(pt>0){let Gt=(-gt-Math.sqrt(pt))/(2*at);if(Gt>0)return F.clone().addScaledVector(j,Gt)}let Vt=ie.uTreeBase.value,ft=(Vt.z-F.z)/j.z,Zt=F.clone().addScaledVector(j,ft);return ft>0&&Math.abs(Zt.x-Vt.x)<1.2&&Zt.y>Vt.y&&Zt.y<H.y?Zt:null},Je=(E,U)=>!d.van||!ga.visible?!1:(rn.setFromCamera(Me(E,U),u),rn.intersectObject(ga,!1).length>0),qn=E=>{let U=nn[E];Z.time-U.blown<26||(U.blown=Z.time,hn.blownAttr.array[E]=Z.time,hn.blownAttr.needsUpdate=!0,Hi(U.x,U.y+U.h,U.z,26+Math.floor(Math.random()*14)))},Ht=new Set,ni=(E,U)=>{let H=window.setTimeout(()=>{Ht.delete(H),E()},U);Ht.add(H)},Oe=(E,U,H)=>{Z.ripples[Z.rippleIdx%6]={x:E,z:U,t:Z.time,a:H},Z.rippleIdx++,Z.gust=Math.min(1.6,Z.gust+.9*H),nn.forEach((q,F)=>{if(F>=hn.count)return;let j=Math.hypot(q.x-E,q.z-U);j<9&&Math.random()<.85-j*.06&&ni(()=>qn(F),j/7.5*1e3)})},va={slot:0,next:4},zn=(E,U,H)=>{let q=va.slot++%4,F=Math.random()<.5?-Math.PI*(.62+Math.random()*.22):-Math.PI*(.16+Math.random()*.22);_.uMet.value[q].set(E,U,F,Z.time),_.uMetB.value[q].set(26+Math.random()*22,.55+Math.random()*.6,7+Math.random()*10,H??2.5+Math.random()*6)},Yo=()=>{let E=n.current.sky.meteors/100;if(_.uNight.value<.5||E<=0){va.next=Z.time+2;return}Z.time>va.next&&(zn(-55+Math.random()*120,26+Math.random()*40),Math.random()<.25&&ni(()=>zn(-40+Math.random()*100,30+Math.random()*35),300+Math.random()*700),va.next=Z.time+(2.5+Math.random()*6.5)/E)},Ua=0,Ri=()=>Ua=performance.now(),Ce=E=>{E.clientX===Z.ptr.px&&E.clientY===Z.ptr.py&&Z.ptr.on||(Z.ptr.px=E.clientX,Z.ptr.py=E.clientY,Z.ptr.on=!0,Z.ptr.moved=!0,Ft=!0,Ri())},Bn=()=>{Z.ptr.on=!1},Vi=E=>{if(E.defaultPrevented)return;Ft=!0,Z.ptr.down=!0,Z.ptr.px=E.clientX,Z.ptr.py=E.clientY,Z.ptr.on=!0,Ri();let U=n.current.act;if(tn(E.clientX,E.clientY)){if(U.zoom&&Z.zoomT<1.5){let q=ie.uTreeBase.value;Rt(ht(q.x,q.y+4.2*d.treeScale,q.z),3.4)}return}if(Je(E.clientX,E.clientY)){ve.manual=!ve.manual;return}if(!U.gusts)return;let H=Ee(E.clientX,E.clientY);if(H)mn(H.x,H.z)&&Oe(H.x,H.z,1);else if(_.uNight.value>.5){let q=It.d;zn(Math.atan2(q.x,-q.z)*180/Math.PI-4,Math.asin(Yt(q.y,-1,1))*180/Math.PI+6,9)}},mn=(E,U)=>{let H=E-He.x,q=U-He.z;return Math.hypot(H,q)<80&&Math.abs(Math.atan2(H,-q))<64*Math.PI/180?!0:!!d.tree&&Math.hypot(E-d.treeX,U-d.treeZ)<9},Tn=()=>{Z.ptr.down=!1},ya=E=>{let U=n.current.day,H=Z.modeTarget;return Z.modeTarget=Yt(Z.modeTarget+E*.0011*(U.sensitivity/5),0,l0.length-1),Ri(),Z.modeTarget!==H},Lc=E=>{if(E.ctrlKey){if(!n.current.act.zoom)return;E.preventDefault();let H=Z.zoomT;Z.zoomT=Yt(Z.zoomT*Math.exp(-E.deltaY*.0016),1,6);let q=Me(E.clientX,E.clientY);Z.zoomT>H&&Z.aimT.lerp(q.clone().multiplyScalar(1/Math.max(.35,1-1/Z.zoomT)).clampScalar(-1,1),.35),Z.zoomT<=1.02&&Z.aimT.set(0,0),Ri();return}if(n.current.day.scroll!=="wheel")return;let U=E.deltaMode===1?E.deltaY*16:E.deltaMode===2?E.deltaY*400:E.deltaY;ya(U)&&E.preventDefault()},Uc=null,Zy=E=>{Uc=E.touches.length===1?E.touches[0].clientY:null},Ky=E=>{if(Uc===null||E.touches.length!==1||n.current.day.scroll!=="wheel")return;let U=E.touches[0].clientY;ya((Uc-U)*2.2),Uc=U},Jy=()=>{Uc=null},m0=()=>{Z.zoomT=1,Z.aimT.set(0,0),Ri()},Qy=E=>{E.key==="Escape"&&Z.zoomT!==1&&m0()},g0=!0,jy=()=>{g0=!0,Ft=!0};e.addEventListener("pointermove",Ce),e.addEventListener("pointerleave",Bn),e.addEventListener("pointerdown",Vi),window.addEventListener("pointerup",Tn),window.addEventListener("pointercancel",Tn),e.addEventListener("wheel",Lc,{passive:!1}),e.addEventListener("touchstart",Zy,{passive:!0}),e.addEventListener("touchmove",Ky,{passive:!0}),e.addEventListener("touchend",Jy),e.addEventListener("dblclick",m0),window.addEventListener("keydown",Qy),window.addEventListener("scroll",jy,{passive:!0,capture:!0});let Pa=0,Ja=0,$y=1,t_=()=>{Pa=Math.max(1,e.clientWidth),Ja=Math.max(1,e.clientHeight);let E=e.getBoundingClientRect();$y=Yt(E.width/Pa,1,2),Ft=!0;let U=Math.min(window.devicePixelRatio||1,Yt(n.current.adv.pixelRatio,.75,2))*$y,H=Math.min(U,Math.sqrt(3e6/(Pa*Ja)))*c.dpr;a.setPixelRatio(1),a.setSize(Math.round(Pa*H),Math.round(Ja*H),!1),t.style.width="100%",t.style.height="100%",S=Math.round(Pa*H),x=Math.round(Ja*H),u.aspect=Pa/Ja;let q=Yt(n.current.adv.fov,20,90)*Math.PI/360;Z.baseFov=Math.atan(Math.tan(q)*Math.max(1,UE/PE/u.aspect))*360/Math.PI,u.fov=Z.baseFov/Z.zoom,u.updateProjectionMatrix(),P(),Ss.uniforms.uRes.value.set(S,x),Bt(),Ri()},Zo="",e_=typeof ResizeObserver<"u"?new ResizeObserver(()=>Zo=""):null;e_?.observe(e);let n_=!0,i_=typeof IntersectionObserver<"u"?new IntersectionObserver(E=>n_=E.some(U=>U.isIntersecting),{rootMargin:"64px"}):null;i_?.observe(e);let $s=[],Pc=16.7,Oa=0,tr=-1,Ko=0,a_=!1,s_=!1,er=null,Oc=[],FE=(E,U)=>{let H=tr<0?16.7:E-tr;if(tr=E,$s.push(H),$s.length>40&&$s.shift(),$s.length<40||Z.time<3)return;let q=$s.slice().sort((I,$)=>I-$)[20],F=Math.max(16.7,Pc*U),j=q>Math.max(22,F*1.4);if(er){if(E-er.at<1500)return;er.down&&q>er.med*.88?(Oa--,a_=!0,Af()):!er.down&&j&&(Oa++,s_=!0,Af()),er=null,$s.length=0;return}j&&Oa<4&&!a_?(er={at:E,med:q,down:!0},Oa++,Ko=0,Af(),$s.length=0):!j&&q<F*1.15?(Ko||(Ko=E),E-Ko>8e3&&Oa>0&&!s_&&(er={at:E,med:q,down:!1},Oa--,Ko=0,Af(),$s.length=0)):Ko=0},Af=()=>{c.dpr=Oa>=3?.64:Oa>=1?.8:1,c.grass=(r?.6:1)*(Oa>=4?.45:Oa>=2?.65:1),Zo="",r_()},r_=()=>{let E=Yt(n.current.grass.density/100,.15,1),U=r?.6:1;for(let H of[ue.near,ue.mid,ue.far,ue.stems,ue.patch])H.geometry.instanceCount=Math.floor(H.geometry.userData.full*(c.grass/U)*E)},wf="",o_=()=>{let E=n.current,U=JSON.stringify([E.tree.x,E.tree.z,E.tree.size,E.tree.turn,E.meadow.tree,E.vehicle.x,E.vehicle.z,E.vehicle.size,E.vehicle.turn,E.vehicle.show,E.vehicle.type,E.grass.density,E.adv.fov,E.adv.pixelRatio]);In(_.uDryC.value,Dn(E.grass.dryColor,LE.dryColor)),_.uGrassH.value=Yt(E.grass.height/100,.2,3),ie.uSway.value=Yt(E.tree.sway,0,10)/5,In(ie.uLeafTint.value,Dn(E.tree.leafTint,Wy.leafTint)),In(ie.uBarkTint.value,Dn(E.tree.barkTint,Wy.barkTint)),In(ie.uBlossom.value,Dn(E.sc.blossom,Vo.blossom)),In(ie.uAutA.value,Dn(E.sc.leafA,Vo.leafA)),In(ie.uAutB.value,Dn(E.sc.leafB,Vo.leafB)),In(ie.uAutC.value,Dn(E.sc.leafC,Vo.leafC)),In(_.uSnowCol.value,Dn(E.sc.snow,Vo.snow)),In(_.uFlowerA.value,Dn(E.meadow.flowerA,u0.flowerA)),In(_.uFlowerB.value,Dn(E.meadow.flowerB,u0.flowerB)),In(_.uFlowerC.value,Dn(E.meadow.flowerC,u0.flowerC));let H=E.vehicle.type,q=f0,[F,j]=H==="car"?[Dn(E.vehicle.carPaint,q.carPaint),Dn(E.vehicle.carRoof,q.carRoof)]:H==="bike"?[Dn(E.vehicle.bikePaint,q.bikePaint),Dn(E.vehicle.bikeFrame,q.bikeFrame)]:[Dn(E.vehicle.body,q.body),Dn(E.vehicle.roof,q.roof)];In(Gi.uniforms.uBody.value,F),In(Gi.uniforms.uRoof.value,j);let I=sU(E.wind.direction,51.5)*Math.PI/180;if(_.uWindDir.value.set(Math.cos(I),Math.sin(I)),tt.uniforms.uSpring.value=Yt(Math.pow(2,(Yt(E.act.spring,0,10)-5)/2.5),.2,4),wi.visible=!!E.meadow.motes,U===wf)return;let $=wf?JSON.parse(wf):null;wf=U,d.treeX=E.tree.x,d.treeZ=E.tree.z,d.treeScale=Yt(E.tree.size,20,300)/100,d.treeTurn=E.tree.turn,d.tree=E.meadow.tree,d.vanX=E.vehicle.x,d.vanZ=E.vehicle.z,d.vanScale=Yt(E.vehicle.size,20,300)/100,d.vanTurn=E.vehicle.turn,d.van=E.vehicle.show,d.vtype=E.vehicle.type;let at=(gt,vt)=>!$||$.slice(gt,vt).some((pt,Vt)=>pt!==JSON.parse(U)[gt+Vt]);at(0,5)&&Lt(),at(5,11)&&Qr(),at(11,12)&&r_(),at(12,14)&&(Zo="")},l_=new Fe,HE=ht(),c_=ht(),GE=-1,VE=E=>{let U=n.current;Z.time+=E;let H=Z.time;if(_.uTime.value=H,Z.intro=Math.min(1,Z.intro+E/5.2),U.day.scroll==="page"&&g0){g0=!1;let $=ae(),at=Yt(-$.top/Math.max(1,$.height*.9),0,1);Z.modeTarget=Yt(Yt(U.day.start,0,3)+at*(3-Yt(U.day.start,0,3)),0,3)}else U.day.scroll==="off"&&(Z.modeTarget=Yt(U.day.start,0,3));let q=Z.modeTarget-Z.mode;if(Z.mode+=q*Math.min(1,E*2.6),Math.abs(q)<1e-4&&(Z.mode=Z.modeTarget),n.current.onModeChange?.(Z.mode,Z.modeTarget),Ef(E,!1),Tf(Z.mode),T(),L(Z.mode),K(),N(rt,ne),Z.gust*=Math.exp(-E*.55),_.uWind.value=(Z.windBase*qe(0,1,Z.intro*1.3)*(Yt(U.wind.strength,0,10)/5)+Z.gust*.55)*(.85+.15*Math.sin(H*.21)),W(E),u.updateMatrixWorld(),Z.ptr.on&&Z.intro>.35){let $=ae();Z.ptr.x=(Z.ptr.px-$.left)/Math.max(1,$.width),Z.ptr.y=(Z.ptr.py-$.top)/Math.max(1,$.height);let at=Ee(Z.ptr.px,Z.ptr.py);if(at){if(Z.brush){let gt=at.x-Z.brush.x,vt=at.z-Z.brush.z,pt=Math.hypot(gt,vt);pt>1e-4&&Z.moveDir.set(gt/pt,vt/pt),Z.brushSpeed=ee(Z.brushSpeed,pt/Math.max(E,.001),.3),Z.brushPrev=pt>3?null:{x:Z.brush.x,z:Z.brush.z}}Z.brush=at;for(let gt=0;gt<hn.count;gt++){let vt=nn[gt];Math.abs(vt.x-at.x)<.7&&Math.abs(vt.z-at.z)<.7&&Math.hypot(vt.x-at.x,vt.z-at.z)<.55+at.t*.006&&!((vt.r*7.77+.13)%1<_.uYellow.value)&&qn(gt)}}else Z.brush=null,Z.brushPrev=null}else Z.brush=null,Z.brushPrev=null;let F=tt.uniforms;F.uDt.value=E,F.uBrushOn.value=Z.brush?1:0,Z.brush&&(F.uB1.value.set(Z.brush.x,Z.brush.z),Z.brushPrev?F.uB0.value.set(Z.brushPrev.x,Z.brushPrev.z):F.uB0.value.copy(F.uB1.value),F.uMoveDir.value.copy(Z.moveDir),F.uSpeed.value=Z.brushSpeed,F.uBrushR.value=(.72+Math.min(.6,Z.brush.t*.014))*(Yt(U.act.brush,0,10)/5)),Z.ripples.forEach(($,at)=>$&&F.uRip.value[at].set($.x,$.z,$.t,$.a)),N(Xt,dt),F.uPrev.value=Y[mt].texture,mt^=1,N(tt,Y[mt]),_.uSim.value=Y[mt].texture,z(E,H),Yo();{let $=U.vehicle.lights,at=$==="on"?!0:$==="off"?!1:_.uNight.value>.45,gt=!!d.van&&at!==ve.manual;gt!==(ve.target===1)&&(ve.target=gt?1:0,ve.t0=Z.time);let vt=Z.time-ve.t0;ve.target===1?ve.lights=vt<.07?.85:vt<.16?.05:vt<.22?.7:vt<.3?.2:Math.min(1,.2+(vt-.3)*2.2):ve.lights=Math.max(0,ve.lights-E*3);let pt=ve.lights*(Yt(U.vehicle.power,0,10)/5);Gi.uniforms.uLights.value=pt;let Vt=Dn(U.vehicle.headColor,f0.headColor),ft=Dn(U.vehicle.windowColor,f0.windowColor);In(_.uHeadCol.value,Vt),In(_.uWinCol.value,ft),_.uHead.value.set(ve.lamp.x,ve.lamp.y,ve.lamp.z,pt*34*ji.beam),_.uHead2.value.set(ve.lamp2.x,ve.lamp2.y,ve.lamp2.z,pt*34*ji.beam),Xo.forEach(Zt=>{Zt.visible=pt>.001&&!!d.van,Zt.material.uniforms.uOn.value=pt*ji.beam*(.35+.65*_.uNight.value)*(1+1.6*At.over),Zt.material.uniforms.uCol.value.set(Vt[0],Vt[1]*.97,Vt[2]*.95)}),_.uVanGlow.value.set(ve.inside.x,ve.inside.y,ve.inside.z,pt*1.4*ji.glow),_.uVanPos.value.w=d.van?(.55*qe(-1,6,Math.asin(Yt(_.uSunDir.value.y,-1,1))*180/Math.PI)+.2)*(1-.6*At.over):0}{let $=d.tree?Yt(Math.round(Yt(U.meadow.birds,0,qt)*(1-.6*At.s[3])),0,qt):0;for(;Ct.birds.length<qt;){let ft=Math.floor(Math.random()*1e6),Zt=Ct.perches[ft%Ct.perches.length];Ct.birds.push({state:"perch",pi:ft,p:Zt.clone(),at:Zt.clone(),timer:2+Math.random()*10,yaw:Math.random()*6.28,path:null,s:0,phase:Math.random()*6})}for(;Ct.swallows.length<3;)Ct.swallows.push({seed:Math.random()*100,prev:ht()});Ct.birdMesh.geometry.instanceCount=$,Ct.swMesh.visible=!!U.meadow.swallows&&At.s[0]+At.s[1]>.5,Ct.sqMesh.visible=!!(U.meadow.squirrel&&d.tree);let at=Math.max(_.uNight.value,At.over*.9),gt=(1-qe(1.7,2.3,Z.mode))*(1-At.over),vt=ht();Ct.birds.forEach((ft,Zt)=>{if(Zt>=$)return;ft.timer-=E;let Gt=.15;if(vt.set(Math.sin(ft.yaw),0,Math.cos(ft.yaw)),ft.state==="perch"){if(ft.p.copy(ft.at),Math.random()<E*.6&&(ft.yaw+=(Math.random()-.5)*1.6),vt.set(Math.sin(ft.yaw),0,Math.cos(ft.yaw)),Gt=.1+.05*Math.sin(H*3+Zt),ft.timer<0&&at<.3)if(Math.random()<.45){let xe=Ct.perches.filter(ye=>ye.distanceTo(ft.at)<2.2&&ye!==ft.at);if(xe.length){ft.state="hop",ft.from=ft.at.clone();let ye=xe[Math.floor(Math.random()*xe.length)];ft.pi=Ct.perches.indexOf(ye),ft.at=ye.clone(),ft.s=0}ft.timer=1+Math.random()*4}else{ft.pi=Math.floor(Math.random()*Ct.perches.length);let xe=Ct.perches[ft.pi].clone(),ye=ie.uCanopyC.value,me=ft.at,on=me.clone().sub(ye).setY(0).normalize(),Ln=ht(-on.z,0,on.x).multiplyScalar(Math.random()<.5?-1:1),En=14+Math.random()*18,Yn=me.clone().addScaledVector(on,En*.6).addScaledVector(Ln,En*.5).setY(me.y+3+Math.random()*6),Zn=me.clone().addScaledVector(on,En).addScaledVector(Ln,-En*.3).setY(me.y+1+Math.random()*5),ze=xe.clone().sub(ye).setY(0).normalize(),he=[me.clone(),me.clone().addScaledVector(on,2.5).setY(me.y+1.2),Yn,Zn,xe.clone().addScaledVector(ze,3).setY(xe.y+1.5),xe.clone()],Wt=0;for(let se=1;se<he.length;se++)Wt+=he[se].distanceTo(he[se-1]);ft.path={pts:he,len:Wt*1.15},ft.at=xe,ft.s=0,ft.state="fly"}}else if(ft.state==="hop"&&ft.from){ft.s+=E/.35;let xe=Math.min(1,ft.s);ft.p.lerpVectors(ft.from,ft.at,xe).y+=Math.sin(xe*Math.PI)*.25,vt.copy(ft.at).sub(ft.from).setY(0).normalize(),ft.yaw=Math.atan2(vt.x,vt.z),Gt=.9*Math.sin(H*40),ft.s>=1&&(ft.state="perch",ft.timer=2+Math.random()*8)}else if(ft.path){ft.s+=E*(8+2*Math.sin(Zt))*(at>.3?2.5:1)/ft.path.len;let xe=Math.min(1,ft.s),ye=CE(ft.path.pts,xe),me=CE(ft.path.pts,Math.min(1,xe+.01));vt.copy(me).sub(ye),vt.lengthSq()<1e-8&&vt.set(0,0,1),ft.p.copy(ye),ft.yaw=Math.atan2(vt.x,vt.z);let on=qe(.2,.6,Math.sin(H*.9+Zt*2))*(xe>.15&&xe<.8?1:0);Gt=Math.sin(H*13+ft.phase)*(.95-.8*on)+.1,xe>=1&&(ft.state="perch",ft.timer=4+Math.random()*14)}else ft.state="perch";xt(Ct.birdMesh,Zt,ft.p,vt.normalize(),_t,Gt,1.6)}),$&&bt(Ct.birdMesh);let pt=qe(2.2,2.7,Z.mode);Ct.swallows.forEach((ft,Zt)=>{let Gt=ft.seed,xe=pt>.5?.55:.32,ye=H*xe+Gt,me=ht(2+Math.sin(ye*1.3)*14+Math.sin(ye*3.1+Gt)*3,0,-18+Math.cos(ye*.9+Gt)*10+Math.sin(ye*2.3)*3);me.y=On(me.x,me.z)+(pt>.5?3.5:1.6)+Math.sin(ye*2.7+Gt)*(pt>.5?1.5:.8);let on=me.clone().sub(ft.prev);ft.prev.copy(me),on.lengthSq()<1e-8&&on.set(1,0,0);let Ln=gt*(1-pt),En=pt>.5?Math.sin(H*22+Gt)*1.1:Math.sin(H*16+Gt)*(Math.sin(ye*4)>0?.9:.15);xt(Ct.swMesh,Zt,me,on.normalize(),_t,En,Ln>.3?pt>.5?.8:.75:1e-4)}),bt(Ct.swMesh);let Vt=Ct.trunk;if(Vt.length>3&&Ct.sqMesh.visible){Ct.sq.t+=E;let ft=Ct.sq.t%26/26,Zt=Math.max(1,Vt.length-1.5),Gt=Ct.sqFace,xe=0,ye=Gt-.9,me="climb",on=0;if(ft<.3){let Fn=o0(ft/.3);xe=Fn*Zt,ye=Gt-.9+Math.sin(Fn*5)*.8}else if(ft<.42)xe=Zt,ye=Gt-.9+Math.sin(5)*.8,me="look";else if(ft<.66){let Fn=o0((ft-.42)/.24);xe=(1-Fn)*Zt,ye=Gt-.9+Math.sin(5-Fn*4)*.8,me="down"}else ft<.9?(ye=Gt+.5,me="ground",on=Math.sin((ft-.66)/.24*Math.PI)):(ye=Gt-.9,me="ground");let Ln=Yt(xe,0,Vt.length-1.001),En=Math.floor(Ln),Yn=Ln-En,Zn=Vt[En],ze=Vt[Math.min(Vt.length-1,En+1)],he=ee(Zn.x,ze.x,Yn),Wt=ee(Zn.z,ze.z,Yn),se=ee(Zn.r,ze.r,Yn)+.02,xn=ee(Zn.y,ze.y,Yn),de=ht(Math.cos(ye),0,Math.sin(ye)),ke=ht(he+de.x*se,xn,Wt+de.z*se),$i=ht(0,me==="down"?-1:1,0).addScaledVector(ht(-de.z,0,de.x),.35),Qa=de.clone();if(me==="ground"){let Fn=ht(Math.cos(ye),0,Math.sin(ye));ke=ht(he+Fn.x*(se+on*2.2),On(he,Wt)+.02,Wt+Fn.z*(se+on*2.2)),$i=Fn.clone().multiplyScalar((ft-.66)/.24<.5?1:-1),Qa=_t.clone()}me==="look"&&$i.applyAxisAngle(Qa,Math.sin(H*2.2)*.5),ke.addScaledVector(Qa,me==="look"?0:Math.abs(Math.sin(H*15))*.02),xt(Ct.sqMesh,0,ke,$i.normalize(),Qa,0,at>.6?1e-4:1.6),bt(Ct.sqMesh)}}{let $=_.uSunDir.value,at=it.center;zt.position.copy(at).addScaledVector($,120),zt.up.set(0,1,0),zt.lookAt(at);let gt=it.radius;zt.left=-gt,zt.right=gt,zt.top=gt,zt.bottom=-gt,zt.near=120-gt*1.6,zt.far=120+gt*1.6+140,zt.updateProjectionMatrix(),zt.updateMatrixWorld(),_.uShadowMat.value.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse)}At.s.reduce(($,at,gt)=>$+Math.abs(at-At.cap[gt]),0)+Math.abs(At.cover-At.capCover)>.02&&Z.time-At.capT>.25&&(ut.last=-9,At.cap=At.s.slice(),At.capCover=At.cover,At.capT=Z.time),Math.abs(Z.mode-ut.last)>.03&&d.tree&&(a.setRenderTarget(Ot),a.setClearColor(16777215,1),a.clear(!0,!0,!1),a.render(Dt,zt),Ve(),ut.last=Z.mode),ut.mesh&&(ut.mesh.visible=!!d.tree),(++GE&(Oa>=3?1:0))===0&&(a.setRenderTarget(Ot),a.setClearColor(16777215,1),a.clear(!0,!0,!1),d.tree&&a.render(Dt,zt)),l_.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse).invert(),bn.uniforms.uInvVP.value.copy(l_);let I=w;a.setRenderTarget(I),a.setClearColor(0,1),a.clear(!0,!0,!1),a.render(kt,u);for(let $=0;$<g.length;$++){let at=$===0?I:g[$-1];jr.uniforms.uSrc.value=at.texture,jr.uniforms.uTexel.value.set(1/at.width,1/at.height),jr.uniforms.uFirst.value=$===0?1:0,N(jr,g[$])}for(let $=g.length-1;$>0;$--)qo.uniforms.uSrc.value=g[$].texture,qo.uniforms.uTexel.value.set(1/g[$].width,1/g[$].height),N(qo,g[$-1]);{let $=HE.set(_.uSunDisc.value.x,_.uSunDisc.value.y,_.uSunDisc.value.z);u.getWorldDirection(c_);let at=u.position.clone().addScaledVector($,1e3).project(u),gt=c_.dot($),vt=Math.max(Math.abs(at.x),Math.abs(at.y));_.uSunUV.value.set(at.x*.5+.5,at.y*.5+.5,gt>.1&&_.uRayAmt.value>.001?qe(1.8,1,vt)*_.uSunDisc.value.w:0),_.uSunUV.value.z>0?(js.uniforms.uSrc.value=g[0].texture,N(js,b)):(a.setRenderTarget(b),a.setClearColor(0,1),a.clear(!0,!1,!1))}Ss.uniforms.uScene.value=I.texture,Ss.uniforms.uBloom.value=g[0].texture,Ss.uniforms.uFade.value=1-qe(0,.35,Z.intro),N(Ss,null)};Ef(0,!0),o_(),t_(),Zo=`${Pa}x${Ja}`,Tf(Z.mode),T(),L(Z.mode),K(),N(rt,ne),Y.forEach(E=>N(ct,E)),_.uSim.value=Y[0].texture,W(.016);{let E=[_e.rain,_e.snow,pn,_e.wild.stems,_e.wild.heads,...Xo].filter(U=>!U.visible);E.forEach(U=>U.visible=!0),a.compile(kt,u),E.forEach(U=>U.visible=!1),a.compile(Dt,zt)}let Rf=0,v0=-1,y0=!0,u_=null,f_=E=>{if(!y0)return;Rf=requestAnimationFrame(f_);let U=v0<0?16.7:E-v0;if(v0=E,Oc.push(U),Oc.length>9&&Oc.shift(),Oc.length===9&&(Pc=Math.min(Pc,Math.max(4,Oc.slice().sort((I,$)=>I-$)[4]))),!n_||document.hidden){tr=-1;return}let H=Math.max(1,Math.floor(16.7/Math.max(4,Pc)+.1));if(tr>=0&&E-tr<(H-.5)*Pc)return;let q=n.current;q!==u_&&(u_=q,o_(),Ri());let F=`${e.clientWidth}x${e.clientHeight}`;if(F!==Zo&&(Zo=F,t_()),o&&E-Ua>1500)return;let j=Math.min(.05,(E-(tr<0?E-16.7:tr))/1e3);FE(E,H),VE(o?Math.min(j,.016):j)};Rf=requestAnimationFrame(f_);let h_=E=>{E.preventDefault(),y0=!1,cancelAnimationFrame(Rf)},d_=()=>i();return t.addEventListener("webglcontextlost",h_),t.addEventListener("webglcontextrestored",d_),()=>{y0=!1,cancelAnimationFrame(Rf),Ht.forEach(E=>clearTimeout(E)),e_?.disconnect(),i_?.disconnect(),e.removeEventListener("pointermove",Ce),e.removeEventListener("pointerleave",Bn),e.removeEventListener("pointerdown",Vi),window.removeEventListener("pointerup",Tn),window.removeEventListener("pointercancel",Tn),e.removeEventListener("wheel",Lc),e.removeEventListener("touchstart",Zy),e.removeEventListener("touchmove",Ky),e.removeEventListener("touchend",Jy),e.removeEventListener("dblclick",m0),window.removeEventListener("keydown",Qy),window.removeEventListener("scroll",jy,!0),t.removeEventListener("webglcontextlost",h_),t.removeEventListener("webglcontextrestored",d_),w?.dispose(),g.forEach(E=>E.dispose()),b.dispose(),Ot.depthTexture?.dispose(),v.forEach(E=>E.dispose()),a.dispose()}}function Yy(e){let{background:t="#0b0d10",style:n}=e,i={meadow:{...u0,...e.meadow},season:e.season||JL,weather:{...QL,...e.weather},grass:{...LE,...e.grass},sc:{...Vo,...e.seasonColors},tree:{...Wy,...e.tree},vehicle:{...f0,...e.vehicle},sky:{...jL,...e.sky},placement:{...$L,...e.placement},intro:e.intro??tU,act:{...eU,...e.interaction},day:{...nU,...e.day},wind:{...iU,...e.wind},adv:{...aU,...e.advanced},onModeChange:e.onModeChange},a=(0,Kr.useRef)(null),s=(0,Kr.useRef)(null),r=(0,Kr.useRef)(i);r.current=i;let[o,l]=(0,Kr.useState)(0);return(0,Kr.useEffect)(()=>{let c=a.current,h=s.current;if(!(!c||!h))return rP(c,h,r,()=>l(d=>d+1))},[o]),React.createElement("div",{ref:a,style:{position:"relative",width:"100%",height:"100%",aspectRatio:`${UE} / ${PE}`,overflow:"hidden",background:t,touchAction:"pan-y",...n}},React.createElement("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}))}function oP(){if(typeof window>"u")return!0;try{return sessionStorage.getItem("portfolio_intro_seen")==="1"}catch{return!1}}var lP=({onComplete:e,children:t})=>{let[n,i]=(0,ce.useState)(()=>!oP()),[a,s]=(0,ce.useState)(!1),[r,o]=(0,ce.useState)(0),[l,c]=(0,ce.useState)(0),[h,d]=(0,ce.useState)("SCROLL TO MOVE PORTFOLIO"),[u,p]=(0,ce.useState)("\u2600\uFE0F NOON MEADOW"),[y,_]=(0,ce.useState)(!1),[v,f]=(0,ce.useState)(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches),m=(0,ce.useRef)(null),S=(0,ce.useRef)(null);(0,ce.useEffect)(()=>{if(typeof window>"u"||!window.matchMedia)return;let g=window.matchMedia("(prefers-reduced-motion: reduce)"),b=P=>f(P.matches);return g.addEventListener("change",b),()=>g.removeEventListener("change",b)},[]);let x=(0,ce.useCallback)(()=>{try{sessionStorage.setItem("portfolio_intro_seen","1")}catch{}s(!0),setTimeout(()=>{i(!1),e?.()},600)},[e]);(0,ce.useEffect)(()=>{v&&n&&x()},[v,n,x]);let A=(0,ce.useCallback)(g=>{o(g);let b=Math.min(1,Math.max(0,g/3)),P=Math.min(100,Math.round(b*100));c(P),m.current&&(m.current.style.transform=`scaleX(${b})`),g<.75?(d("SCROLL TO MOVE PORTFOLIO"),p("\u2600\uFE0F NOON MEADOW")):g<1.75?(d("SCROLLING TOWARD SUNSET"),p("\u{1F305} GOLDEN HOUR")):g<2.65?(d("NIGHT IS FALLING \u2022 CAMPER LIGHTS ON"),p("\u{1F306} DUSK TWILIGHT")):(d("NIGHT HAS FALLEN // ENTERING PORTFOLIO"),p("\u{1F30C} STARLIT NIGHT")),g>=2.92&&!y&&_(!0)},[y]);(0,ce.useEffect)(()=>{if(!(!y||!n))return S.current&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{s(!0),window.setTimeout(()=>{try{sessionStorage.setItem("portfolio_intro_seen","1")}catch{}i(!1),e?.()},700)},850),()=>{S.current&&window.clearTimeout(S.current)}},[y,n,e]),(0,ce.useEffect)(()=>{if(!n)return;let g=b=>{b.deltaY>15&&r>=2.85&&_(!0)};return window.addEventListener("wheel",g,{passive:!0}),()=>window.removeEventListener("wheel",g)},[n,r]),(0,ce.useEffect)(()=>{let g=b=>{b.key==="Escape"&&x()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[x]);let w=`${String(l).padStart(3,"0")}%`;return ce.default.createElement(ce.default.Fragment,null,t,n&&ce.default.createElement("div",{className:`portfolio-intro ${a?"portfolio-intro--exiting":""}`,role:"status","aria-live":"polite","aria-label":`Introduction meadow, ${l} percent`},ce.default.createElement("button",{type:"button",className:"portfolio-intro__skip",onClick:x,"aria-label":"Skip introduction"},"Skip Intro \u2192"),ce.default.createElement("div",{className:"portfolio-intro__fullscreen-stage"},ce.default.createElement(Yy,{onModeChange:A,day:{start:0,scroll:"wheel",sensitivity:5.5},style:{position:"absolute",inset:0,width:"100%",height:"100%",aspectRatio:"unset"}}),ce.default.createElement("div",{className:"portfolio-intro__vignette","aria-hidden":"true"})),ce.default.createElement("div",{className:"portfolio-intro__hud-float"},ce.default.createElement("div",{className:"portfolio-intro__banner"},ce.default.createElement("span",{className:"portfolio-intro__prompt-title"},"SCROLL TO MOVE PORTFOLIO"),ce.default.createElement("span",{className:"portfolio-intro__time-badge"},u)),ce.default.createElement("div",{className:"portfolio-intro__meta"},ce.default.createElement("span",{className:"portfolio-intro__label"},h),ce.default.createElement("span",{className:"portfolio-intro__percent"},w)),ce.default.createElement("div",{className:"portfolio-intro__track","aria-hidden":"true"},ce.default.createElement("div",{ref:m,className:"portfolio-intro__fill"})),ce.default.createElement("div",{className:"portfolio-intro__cues"},ce.default.createElement("span",{className:"portfolio-intro__cue-node"},"\u2600\uFE0F Noon"),ce.default.createElement("span",{className:"portfolio-intro__cue-arrow"},"\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),ce.default.createElement("span",{className:"portfolio-intro__cue-node"},"\u{1F305} Dusk"),ce.default.createElement("span",{className:"portfolio-intro__cue-arrow"},"\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),ce.default.createElement("span",{className:"portfolio-intro__cue-node"},"\u{1F319} Night")),ce.default.createElement("div",{className:"portfolio-intro__scroll-prompt"},ce.default.createElement("span",{className:"portfolio-intro__scroll-icon","aria-hidden":"true"},"\u2193"),ce.default.createElement("span",{className:"portfolio-intro__scroll-text"},"Scroll wheel or drag vertically to shift day into night")))))},OE=lP;function IE(){let e=document.getElementById("portfolioIntroMount");e||(e=document.createElement("div"),e.id="portfolioIntroMount",document.body.prepend(e)),e.dataset.mounted||(e.dataset.mounted="true",(0,BE.createRoot)(e).render(zE.default.createElement(OE,{onComplete:()=>{setTimeout(()=>{e&&e.parentNode&&e.remove()},800)}})))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",IE):IE();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
