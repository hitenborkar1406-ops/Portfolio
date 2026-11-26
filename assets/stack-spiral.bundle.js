(()=>{var Fb=Object.create;var f_=Object.defineProperty;var zb=Object.getOwnPropertyDescriptor;var Hb=Object.getOwnPropertyNames;var Gb=Object.getPrototypeOf,Vb=Object.prototype.hasOwnProperty;var Vs=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var kb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hb(t))!Vb.call(e,s)&&s!==n&&f_(e,s,{get:()=>t[s],enumerable:!(i=zb(t,s))||i.enumerable});return e};var $o=(e,t,n)=>(n=e!=null?Fb(Gb(e)):{},kb(t||!e||!e.__esModule?f_(n,"default",{value:e,enumerable:!0}):n,e));var T_=Vs(Ft=>{"use strict";var Ld=Symbol.for("react.transitional.element"),Xb=Symbol.for("react.portal"),Wb=Symbol.for("react.fragment"),qb=Symbol.for("react.strict_mode"),Yb=Symbol.for("react.profiler"),Zb=Symbol.for("react.consumer"),Jb=Symbol.for("react.context"),Kb=Symbol.for("react.forward_ref"),Qb=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),$b=Symbol.for("react.activity"),tE=Symbol.for("react.view_transition"),d_=Symbol.iterator;function eE(e){return e===null||typeof e!="object"?null:(e=d_&&e[d_]||e["@@iterator"],typeof e=="function"?e:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y_=Object.assign,x_={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=x_,this.updater=n||v_}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S_(){}S_.prototype=Mr.prototype;function Ud(e,t,n){this.props=e,this.context=t,this.refs=x_,this.updater=n||v_}var Od=Ud.prototype=new S_;Od.constructor=Ud;y_(Od,Mr.prototype);Od.isPureReactComponent=!0;var p_=Array.isArray;function Nd(){}var Te={H:null,A:null,T:null,S:null},M_=Object.prototype.hasOwnProperty;function Id(e,t,n){var i=n.ref;return{$$typeof:Ld,type:e,key:t,ref:i!==void 0?i:null,props:n}}function nE(e,t){return Id(e.type,t,e.props)}function Pd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ld}function iE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var m_=/\/+/g;function Dd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iE(""+e.key):t.toString(36)}function sE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Nd,Nd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ld:case Xb:r=!0;break;case __:return r=e._init,Sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Dd(e,0):i,p_(s)?(n="",r!=null&&(n=r.replace(m_,"$&/")+"/"),Sr(s,t,n,"",function(c){return c})):s!=null&&(Pd(s)&&(s=nE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(m_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(p_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Dd(i,l),r+=Sr(i,t,n,a,s);else if(l=eE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Dd(i,l++),r+=Sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Sr(sE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Wc(e,t,n){if(e==null)return e;var i=[],s=0;return Sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function aE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var g_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function b_(e){var t=Te.T,n={};n.types=t!==null?t.types:null,Te.T=n;try{var i=e(),s=Te.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Nd,g_)}catch(a){g_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Te.T=t}}function E_(e){var t=Te.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else b_(E_.bind(null,e))}var rE={map:Wc,forEach:function(e,t,n){Wc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wc(e,function(){t++}),t},toArray:function(e){return Wc(e,function(t){return t})||[]},only:function(e){if(!Pd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=$b;Ft.Children=rE;Ft.Component=Mr;Ft.Fragment=Wb;Ft.Profiler=Yb;Ft.PureComponent=Ud;Ft.StrictMode=qb;Ft.Suspense=Qb;Ft.ViewTransition=tE;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Te.H.useMemoCache(e)}};Ft.addTransitionType=E_;Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=y_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!M_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Id(e.type,s,i)};Ft.createContext=function(e){return e={$$typeof:Jb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Zb,_context:e},e};Ft.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)M_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Id(e,a,s)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:Kb,render:e}};Ft.isValidElement=Pd;Ft.lazy=function(e){return{$$typeof:__,_payload:{_status:-1,_result:e},_init:aE}};Ft.memo=function(e,t){return{$$typeof:jb,type:e,compare:t===void 0?null:t}};Ft.startTransition=b_;Ft.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()};Ft.use=function(e){return Te.H.use(e)};Ft.useActionState=function(e,t,n){return Te.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Te.H.useCallback(e,t)};Ft.useContext=function(e){return Te.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Te.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Te.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Te.H.useEffectEvent(e)};Ft.useId=function(){return Te.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Te.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Te.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Te.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Te.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Te.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Te.H.useReducer(e,t,n)};Ft.useRef=function(e){return Te.H.useRef(e)};Ft.useState=function(e){return Te.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Te.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Te.H.useTransition()};Ft.version="19.3.1"});var Ba=Vs((uN,A_)=>{"use strict";A_.exports=T_()});var P_=Vs(Ue=>{"use strict";function Hd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<qc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ki(e){return e.length===0?null:e[0]}function Zc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>qc(o,n))l<s&&0>qc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>qc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function qc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(w_=performance,Ue.unstable_now=function(){return w_.now()}):(Bd=Date,R_=Bd.now(),Ue.unstable_now=function(){return Bd.now()-R_});var w_,Bd,R_,fs=[],ks=[],oE=1,pi=null,xn=3,Gd=!1,tl=!1,el=!1,Vd=!1,N_=typeof setTimeout=="function"?setTimeout:null,L_=typeof clearTimeout=="function"?clearTimeout:null,C_=typeof setImmediate<"u"?setImmediate:null;function Yc(e){for(var t=ki(ks);t!==null;){if(t.callback===null)Zc(ks);else if(t.startTime<=e)Zc(ks),t.sortIndex=t.expirationTime,Hd(fs,t);else break;t=ki(ks)}}function kd(e){if(el=!1,Yc(e),!tl)if(ki(fs)!==null)tl=!0,Er||(Er=!0,br());else{var t=ki(ks);t!==null&&Xd(kd,t.startTime-e)}}var Er=!1,nl=-1,U_=5,O_=-1;function I_(){return Vd?!0:!(Ue.unstable_now()-O_<U_)}function Fd(){if(Vd=!1,Er){var e=Ue.unstable_now();O_=e;var t=!0;try{t:{tl=!1,el&&(el=!1,L_(nl),nl=-1),Gd=!0;var n=xn;try{e:{for(Yc(e),pi=ki(fs);pi!==null&&!(pi.expirationTime>e&&I_());){var i=pi.callback;if(typeof i=="function"){pi.callback=null,xn=pi.priorityLevel;var s=i(pi.expirationTime<=e);if(e=Ue.unstable_now(),typeof s=="function"){pi.callback=s,Yc(e),t=!0;break e}pi===ki(fs)&&Zc(fs),Yc(e)}else Zc(fs);pi=ki(fs)}if(pi!==null)t=!0;else{var a=ki(ks);a!==null&&Xd(kd,a.startTime-e),t=!1}}break t}finally{pi=null,xn=n,Gd=!1}t=void 0}}finally{t?br():Er=!1}}}var br;typeof C_=="function"?br=function(){C_(Fd)}:typeof MessageChannel<"u"?(zd=new MessageChannel,D_=zd.port2,zd.port1.onmessage=Fd,br=function(){D_.postMessage(null)}):br=function(){N_(Fd,0)};var zd,D_;function Xd(e,t){nl=N_(function(){e(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(e){e.callback=null};Ue.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U_=0<e?Math.floor(1e3/e):5};Ue.unstable_getCurrentPriorityLevel=function(){return xn};Ue.unstable_next=function(e){switch(xn){case 1:case 2:case 3:var t=3;break;default:t=xn}var n=xn;xn=t;try{return e()}finally{xn=n}};Ue.unstable_requestPaint=function(){Vd=!0};Ue.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=xn;xn=e;try{return t()}finally{xn=n}};Ue.unstable_scheduleCallback=function(e,t,n){var i=Ue.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:oE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Hd(ks,e),ki(fs)===null&&e===ki(ks)&&(el?(L_(nl),nl=-1):el=!0,Xd(kd,n-i))):(e.sortIndex=s,Hd(fs,e),tl||Gd||(tl=!0,Er||(Er=!0,br()))),e};Ue.unstable_shouldYield=I_;Ue.unstable_wrapCallback=function(e){var t=xn;return function(){var n=xn;xn=t;try{return e.apply(this,arguments)}finally{xn=n}}}});var F_=Vs((fN,B_)=>{"use strict";B_.exports=P_()});var G_=Vs(Sn=>{"use strict";var lE=Ba();function H_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xs(){}var Dn={d:{f:Xs,r:function(){throw Error(H_(522))},D:Xs,C:Xs,L:Xs,m:Xs,X:Xs,S:Xs,M:Xs},p:0,findDOMNode:null},cE=Symbol.for("react.portal"),uE=Symbol.for("react.recoverable"),z_=Symbol.for("react.optimistic_key");function hE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cE,key:i==null?null:i===z_?z_:""+i,children:e,containerInfo:t,implementation:n}}var il=lE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Jc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dn;Sn.browser=function(e){return{$$typeof:uE,_reason:e}};Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(H_(299));return hE(e,t,null,n)};Sn.flushSync=function(e){var t=il.T,n=Dn.p;try{if(il.T=null,Dn.p=2,e)return e()}finally{il.T=t,Dn.p=n,Dn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Dn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&Dn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Jc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Dn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Dn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Jc(t.as,t.crossOrigin);Dn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Dn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Jc(n,t.crossOrigin);Dn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Jc(t.as,t.crossOrigin);Dn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Dn.d.m(e)};Sn.requestFormReset=function(e){Dn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return il.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return il.H.useHostTransitionStatus()};Sn.version="19.3.1"});var X_=Vs((pN,k_)=>{"use strict";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(e){console.error(e)}}V_(),k_.exports=G_()});var DM=Vs(Dh=>{"use strict";var Qe=F_(),Cy=Ba(),fE=X_();function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Ny(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ly(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W_(e){if(Xl(e)!==e)throw Error(nt(188))}function dE(e){var t=e.alternate;if(!t){if(t=Xl(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return W_(s),e;if(a===i)return W_(s),t;a=a.sibling}throw Error(nt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function Uy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Uy(e),t!==null)return t;e=e.sibling}return null}function Wn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Wn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function sr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function q_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Oy(e){var t=[null,null],n=sr(e);return n===null||Iy(t,e,n.child,{foundSelf:!1}),t}function Iy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Iy(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ke(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(nt(559))}}var Nr=null,Mp=null;function pE(e,t,n){return e===n?!0:e===t?(Nr=e,!0):!1}function mE(e,t,n){return e===n?(Mp=e,!1):e===t?(Mp!==null&&(Nr=e),!0):!1}function Y_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function bp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Se=Object.assign,gE=Symbol.for("react.element"),Kc=Symbol.for("react.transitional.element"),ul=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Py=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),By=Symbol.for("react.consumer"),Ji=Symbol.for("react.context"),Um=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Ap=Symbol.for("react.suspense_list"),Om=Symbol.for("react.memo"),Zs=Symbol.for("react.lazy"),wp=Symbol.for("react.activity"),_E=Symbol.for("react.legacy_hidden"),vE=Symbol.for("react.memo_cache_sentinel"),Rp=Symbol.for("react.view_transition"),yE=Symbol.for("react.recoverable"),Z_=Symbol.iterator;function sl(e){return e===null||typeof e!="object"?null:(e=Z_&&e[Z_]||e["@@iterator"],typeof e=="function"?e:null)}var xE=Symbol.for("react.client.reference");function Cp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lr:return"Fragment";case Ep:return"Profiler";case Py:return"StrictMode";case Tp:return"Suspense";case Ap:return"SuspenseList";case wp:return"Activity";case Rp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ul:return"Portal";case Ji:return e.displayName||"Context";case By:return(e._context.displayName||"Context")+".Consumer";case Um:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Om:return t=e.displayName||null,t!==null?t:Cp(e.type)||"Memo";case Zs:t=e._payload,e=e._init;try{return Cp(e(t))}catch{}}return null}var hl=Array.isArray,Ot=Cy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=fE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},Dp=[],Ur=-1;function ns(e){return{current:e}}function pn(e){0>Ur||(e.current=Dp[Ur],Dp[Ur]=null,Ur--)}function Re(e,t){Ur++,Dp[Ur]=e.current,e.current=t}var $i=ns(null),Rl=ns(null),ia=ns(null),Pu=ns(null);function Bu(e,t){switch(Re(ia,t),Re(Rl,e),Re($i,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ly(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ly(t),e=aM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pn($i),Re($i,e)}function $r(){pn($i),pn(Rl),pn(ia)}function Np(e){var t=e.memoizedState;t!==null&&(co._currentValue=t.memoizedState,Re(Pu,e)),t=$i.current;var n=aM(t,e.type);t!==n&&(Re(Rl,e),Re($i,n))}function Fu(e){Rl.current===e&&(pn($i),pn(Rl)),Pu.current===e&&(pn(Pu),co._currentValue=Wa)}var Wd,J_;function qs(e){if(Wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wd=t&&t[1]||"",J_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wd+e+J_}var qd=!1;function Yd(e,t){if(!e||qd)return"";qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{qd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qs(n):""}function SE(e,t){switch(e.tag){case 26:case 27:case 5:return qs(e.type);case 16:return qs("Lazy");case 13:return e.child!==t&&t!==null?qs("Suspense Fallback"):qs("Suspense");case 19:return qs("SuspenseList");case 0:case 15:return Yd(e.type,!1);case 11:return Yd(e.type.render,!1);case 1:return Yd(e.type,!0);case 31:return qs("Activity");case 30:return qs("ViewTransition");default:return""}}function K_(e){try{var t="",n=null;do t+=SE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lp=Object.prototype.hasOwnProperty,Im=Qe.unstable_scheduleCallback,Zd=Qe.unstable_cancelCallback,ME=Qe.unstable_shouldYield,bE=Qe.unstable_requestPaint,ei=Qe.unstable_now,EE=Qe.unstable_getCurrentPriorityLevel,Fy=Qe.unstable_ImmediatePriority,zy=Qe.unstable_UserBlockingPriority,zu=Qe.unstable_NormalPriority,TE=Qe.unstable_LowPriority,Hy=Qe.unstable_IdlePriority,AE=Qe.log,wE=Qe.unstable_setDisableYieldValue,Wl=null,ni=null;function Qs(e){if(typeof AE=="function"&&wE(e),ni&&typeof ni.setStrictMode=="function")try{ni.setStrictMode(Wl,e)}catch{}}var ii=Math.clz32?Math.clz32:DE,RE=Math.log,CE=Math.LN2;function DE(e){return e>>>=0,e===0?32:31-(RE(e)/CE|0)|0}var Qc=256,jc=262144,$c=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ha(i):(r&=o,r!==0?s=Ha(r):n||(n=o&~e,n!==0&&(s=Ha(n))))):(o=i&~a,o!==0?s=Ha(o):r!==0?s=Ha(r):n||(n=i&~e,n!==0&&(s=Ha(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ii(n),s=1<<i;t|=e[i],n&=~s}return t}function NE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(){var e=$c;return $c<<=1,($c&62914560)===0&&($c=4194304),e}function Jd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function LE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-ii(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&ky(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ky(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ii(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Xy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ii(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Wy(e,t){var n=t&-t;return n=(n&42)!==0?1:Pm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qy(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:wM(e.type))}function Q_(e,t){var n=oe.p;try{return oe.p=e,t()}finally{oe.p=n}}var Ts=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ts,qn="__reactProps$"+Ts,fo="__reactContainer$"+Ts,j_="__reactEvents$"+Ts,UE="__reactListeners$"+Ts,OE="__reactHandles$"+Ts,$_="__reactResources$"+Ts,Zl="__reactMarker$"+Ts,Hu="__reactLoad$"+Ts;function fh(e){delete e[fn],delete e[qn],delete e[UE],delete e[OE]}function ka(e){var t;if(t=e[fn])return t;for(var n=e.parentNode;n;){if(t=n[fo]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gy(e);e!==null;){if(n=e[fn])return n;e=gy(e)}return t}e=n,n=e.parentNode}return null}function po(e){if(e=e[fn]||e[fo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function kr(e){var t=e[$_];return t||(t=e[$_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[Zl]=!0}function Yy(e){e[Hu]=void 0}var Zy=new Set,Jy={};function ar(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for(Jy[e]=t,e=0;e<t.length;e++)Zy.add(t[e])}var IE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tv={},ev={};function PE(e){return Lp.call(ev,e)?!0:Lp.call(tv,e)?!1:IE.test(e)?ev[e]=!0:(tv[e]=!0,!1)}var se=!1;function nv(){var e=se;return se=!1,e}function _u(e,t,n){if(PE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function tu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ds(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ky(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function BE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Up(e){if(!e._valueTracker){var t=Ky(e)?"checked":"value";e._valueTracker=BE(e,t,""+e[t])}}function Qy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ky(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var FE=/[\n"\\]/g;function yi(e){return e.replace(FE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Op(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qn(t)):e.value!==""+Qn(t)&&(e.value=""+Qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Kd(e,Qn(e.value)):Kd(e,Qn(t)):n!=null?Kd(e,Qn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Qn(o):e.removeAttribute("name")}function jy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Up(e);return}n=n!=null?""+Qn(n):"",t=t!=null?""+Qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Up(e)}function Kd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Xr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function $y(e,t,n){if(t!=null&&(t=""+Qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Qn(n):""}function tx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if(hl(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Up(e)}function eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||zE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ex(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",se=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(iv(e,s,i),se=!0)}else for(var a in t)t.hasOwnProperty(a)&&iv(e,a,t[a])}function Fm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var HE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vu(e){return GE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var Ip=null;function zm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Wr=null;function sv(e){var t=po(e);if(t&&(e=t.stateNode)){var n=e[qn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Op(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[qn]||null;if(!s)throw Error(nt(90));Op(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Qy(i)}break t;case"textarea":$y(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}}}var Qd=!1;function nx(e,t,n){if(Qd)return e(t,n);Qd=!0;try{var i=e(t);return i}finally{if(Qd=!1,(Or!==null||Wr!==null)&&(Ah(),Or&&(t=Or,e=Wr,Wr=Or=null,sv(t),e)))for(t=0;t<e.length;t++)sv(e[t])}}function Cl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[qn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pp=!1;if(ys)try{Tr={},Object.defineProperty(Tr,"passive",{get:function(){Pp=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Pp=!1}var Tr,js=null,Hm=null,yu=null;function ix(){if(yu)return yu;var e,t=Hm,n=t.length,i,s="value"in js?js.value:js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return yu=s.slice(e,1<i?1-i:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function av(){return!1}function On(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?eu:av,this.isPropagationStopped=av,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=On(va),Jl=Se({},va,{view:0,detail:0}),VE=On(Jl),jd,$d,al,ph=Se({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==al&&(al&&e.type==="mousemove"?(jd=e.screenX-al.screenX,$d=e.screenY-al.screenY):$d=jd=0,al=e),jd)},movementY:function(e){return"movementY"in e?e.movementY:$d}}),rv=On(ph),kE=Se({},ph,{dataTransfer:0}),XE=On(kE),WE=Se({},Jl,{relatedTarget:0}),tp=On(WE),qE=Se({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),YE=On(qE),ZE=Se({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JE=On(ZE),KE=Se({},va,{data:0}),ov=On(KE),QE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$E[e])?!!t[e]:!1}function Gm(){return tT}var eT=Se({},Jl,{key:function(e){if(e.key){var t=QE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gm,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nT=On(eT),iT=Se({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lv=On(iT),sT=Se({},va,{submitter:0}),aT=On(sT),rT=Se({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gm}),oT=On(rT),lT=Se({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),cT=On(lT),uT=Se({},ph,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hT=On(uT),fT=Se({},va,{newState:0,oldState:0,source:0}),dT=On(fT),pT=[9,13,27,32],Vm=ys&&"CompositionEvent"in window,ml=null;ys&&"documentMode"in document&&(ml=document.documentMode);var mT=ys&&"TextEvent"in window&&!ml,sx=ys&&(!Vm||ml&&8<ml&&11>=ml),cv=" ",uv=!1;function ax(e,t){switch(e){case"keyup":return pT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function gT(e,t){switch(e){case"compositionend":return rx(t);case"keypress":return t.which!==32?null:(uv=!0,cv);case"textInput":return e=t.data,e===cv&&uv?null:e;default:return null}}function _T(e,t){if(Ir)return e==="compositionend"||!Vm&&ax(e,t)?(e=ix(),yu=Hm=js=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sx&&t.locale!=="ko"?null:t.data;default:return null}}var vT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vT[e.type]:t==="textarea"}function ox(e,t,n,i){Or?Wr?Wr.push(i):Wr=[i]:Or=i,t=lh(t,"onChange"),0<t.length&&(n=new dh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gl=null,Dl=null;function yT(e){nM(e,0)}function mh(e){var t=fl(e);if(Qy(t))return e}function fv(e,t){if(e==="change")return t}var lx=!1;ys&&(ys?(iu="oninput"in document,iu||(ep=document.createElement("div"),ep.setAttribute("oninput","return;"),iu=typeof ep.oninput=="function"),nu=iu):nu=!1,lx=nu&&(!document.documentMode||9<document.documentMode));var nu,iu,ep;function dv(){gl&&(gl.detachEvent("onpropertychange",cx),Dl=gl=null)}function cx(e){if(e.propertyName==="value"&&mh(Dl)){var t=[];ox(t,Dl,e,zm(e)),nx(yT,t)}}function xT(e,t,n){e==="focusin"?(dv(),gl=t,Dl=n,gl.attachEvent("onpropertychange",cx)):e==="focusout"&&dv()}function ST(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mh(Dl)}function MT(e,t){if(e==="click")return mh(t)}function bT(e,t){if(e==="input"||e==="change")return mh(t)}function ET(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ai=typeof Object.is=="function"?Object.is:ET;function Nl(e,t){if(ai(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Lp.call(t,s)||!ai(e[s],t[s]))return!1}return!0}function Bp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mv(e,t){var n=pv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=pv(n)}}function ux(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ux(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bp(e.document)}return t}function km(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var TT=ys&&"documentMode"in document&&11>=document.documentMode,Pr=null,Fp=null,_l=null,zp=!1;function gv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zp||Pr==null||Pr!==Bp(i)||(i=Pr,"selectionStart"in i&&km(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_l&&Nl(_l,i)||(_l=i,i=lh(Fp,"onSelect"),0<i.length&&(t=new dh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pr)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},np={},fx={};ys&&(fx=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function rr(e){if(np[e])return np[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fx)return np[e]=t[n];return e}var dx=rr("animationend"),px=rr("animationiteration"),mx=rr("animationstart"),AT=rr("transitionrun"),wT=rr("transitionstart"),RT=rr("transitioncancel"),gx=rr("transitionend"),_x=new Map,Hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hp.push("scrollEnd");function Oi(e,t){_x.set(e,t),ar(t,[e])}var CT=0;function xs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ui.identifierPrefix;var n=CT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function _v(e){if(e==null||typeof e=="string")return e;var t=null,n=jr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function As(e,t){return e=_v(e),t=_v(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],Fr=0,Xm=0;function gh(){for(var e=Fr,t=Xm=Fr=0;t<e;){var n=gi[t];gi[t++]=null;var i=gi[t];gi[t++]=null;var s=gi[t];gi[t++]=null;var a=gi[t];if(gi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&vx(n,s,a)}}function _h(e,t,n,i){gi[Fr++]=e,gi[Fr++]=t,gi[Fr++]=n,gi[Fr++]=i,Xm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wm(e,t,n,i){return _h(e,t,n,i),Vu(e)}function or(e,t){return _h(e,null,null,t),Vu(e)}function vx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ii(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Vu(e){if(50<wl)throw wl=0,Du=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zr={};function DT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,t,n,i){return new DT(e,t,n,i)}function qm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _s(e,t){var n=e.alternate;return n===null?(n=kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Su(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")qm(i)&&(r=1);else if(typeof i=="string")r=nw(e,n,$i.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case wp:return e=kn(31,n,t,s),e.elementType=wp,e.lanes=a,e;case Lr:return qa(n.children,s,a,t);case Py:r=8,s|=24;break;case Ep:return e=kn(12,n,t,s|2),e.elementType=Ep,e.lanes=a,e;case Tp:return e=kn(13,n,t,s),e.elementType=Tp,e.lanes=a,e;case Ap:return e=kn(19,n,t,s),e.elementType=Ap,e.lanes=a,e;case _E:case Rp:return e=s|32,e=kn(30,n,t,e),e.elementType=Rp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ji:r=10;break t;case By:r=9;break t;case Um:r=11;break t;case Om:r=14;break t;case Zs:r=16,i=null;break t}r=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=kn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function qa(e,t,n,i){return e=kn(7,e,i,t),e.lanes=n,e}function ip(e,t,n){return e=kn(6,e,null,t),e.lanes=n,e}function xx(e){var t=kn(18,null,null,0);return t.stateNode=e,t}function sp(e,t,n){return t=kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vv=new WeakMap;function xi(e,t){if(typeof e=="object"&&e!==null){var n=vv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:K_(t)},vv.set(e,t),t)}return{value:e,source:t,stack:K_(t)}}var Hr=[],Gr=0,ku=null,Ll=0,_i=[],vi=0,da=null,Qi=1,ji="";function ms(e,t){Hr[Gr++]=Ll,Hr[Gr++]=ku,ku=e,Ll=t}function Sx(e,t,n){_i[vi++]=Qi,_i[vi++]=ji,_i[vi++]=da,da=e;var i=Qi;e=ji;var s=32-ii(i)-1;i&=~(1<<s),n+=1;var a=32-ii(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Qi=1<<32-ii(t)+s|n<<s|i,ji=a+e}else Qi=1<<a|n<<s|i,ji=e}function vh(e){e.return!==null&&(ms(e,1),Sx(e,1,0))}function Ym(e){for(;e===ku;)ku=Hr[--Gr],Hr[Gr]=null,Ll=Hr[--Gr],Hr[Gr]=null;for(;e===da;)da=_i[--vi],_i[vi]=null,ji=_i[--vi],_i[vi]=null,Qi=_i[--vi],_i[vi]=null}function Mx(e,t){_i[vi++]=Qi,_i[vi++]=ji,_i[vi++]=da,Qi=t.id,ji=t.overflow,da=e}var on=null,we=null,Zt=!1,sa=null,Si=!1,Gp=Error(nt(519));function pa(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ul(xi(t,e)),Gp}function yv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[fn]=e,t[qn]=i,n){case"dialog":Jt("cancel",t),Jt("close",t);break;case"iframe":case"object":case"embed":Jt("load",t);break;case"video":case"audio":for(n=0;n<Bl.length;n++)Jt(Bl[n],t);break;case"source":Jt("error",t);break;case"img":case"image":case"link":Jt("error",t),Jt("load",t);break;case"details":Jt("toggle",t);break;case"input":Jt("invalid",t),jy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Jt("invalid",t);break;case"textarea":Jt("invalid",t),tx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||sM(t.textContent,n)?(i.popover!=null&&(Jt("beforetoggle",t),Jt("toggle",t)),i.onScroll!=null&&Jt("scroll",t),i.onScrollEnd!=null&&Jt("scrollend",t),i.onClick!=null&&(t.onclick=Ki),t=!0):t=!1,t||pa(e,!0)}function Xu(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:on=on.return}}function Ar(e){if(e!==on)return!1;if(!Zt)return Xu(e),Zt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tm(e.type,e.memoizedProps)),n=!n),n&&we&&pa(e),Xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));we=my(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));we=my(e)}else t===27?(t=we,ya(e.type)?(e=Cm,Cm=null,we=e):we=t):we=on?Mi(e.stateNode.nextSibling):null;return!0}function Ka(){we=on=null,Zt=!1}function ap(){var e=sa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),sa=null),e}function Ul(e){sa===null?sa=[e]:sa.push(e)}var Vp=ns(null),lr=null,gs=null;function $s(e,t,n){Re(Vp,t._currentValue),t._currentValue=n}function vs(e){e._currentValue=Vp.current,pn(Vp)}function Mu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function kp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Mu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(nt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Mu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Mu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Qa(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(nt(387));if(r=r.memoizedProps,r!==null){var o=s.type;ai(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Pu.current){if(r=s.alternate,r===null)throw Error(nt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(co):e=[co])}s=s.return}return e!==null&&kp(t,e,n,i),t.flags|=262144,e!==null}function Wu(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){lr=e,gs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return bx(lr,e)}function su(e,t){return lr===null&&ja(e),bx(e,t)}function bx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gs===null){if(e===null)throw Error(nt(308));gs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gs=gs.next=t;return n}var NT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},LT=Qe.unstable_scheduleCallback,UT=Qe.unstable_NormalPriority,qe={$$typeof:Ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zm(){return{controller:new NT,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&LT(UT,function(){e.controller.abort()})}function xv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var dl=null;function OT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var vl=null,Xp=0,$a=0,qr=null;function IT(e,t){if(vl===null){var n=vl=[];Xp=0,$a=Mg(),qr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xp++,t.then(Sv,Sv),t}function Sv(){if(--Xp===0&&(dl=null,vl!==null)){qr!==null&&(qr.status="fulfilled");var e=vl;vl=null,$a=0,qr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function PT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Mv=Ot.S;Ot.S=function(e,t){if(GS=ei(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&IT(e,t),dl!==null)for(var n=ro;n!==null;)xv(n,dl),n=n.next;if(n=e.types,n!==null){for(var i=ro;i!==null;)xv(i,n),i=i.next;if($a!==0){i=dl,i===null&&(i=dl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Mv!==null&&Mv(e,t)};var Ya=ns(null);function Jm(){var e=Ya.current;return e!==null?e:xe.pooledCache}function bu(e,t){t===null?Re(Ya,Ya.current):Re(Ya,t.pool)}function Ex(){var e=Jm();return e===null?null:{parent:qe._currentValue,pool:e}}var mo=Error(nt(460)),Km=Error(nt(474)),yh=Error(nt(542)),qu={then:function(){}};function bv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ki,Ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tv(e),e===void 0&&!("reason"in t)?Error(nt(600)):e;default:if(typeof t.status=="string")t.then(Ki,Ki);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tv(e),e}throw Za=t,mo}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Za=n,mo):n}}var Za=null;function Ev(){if(Za===null)throw Error(nt(459));var e=Za;return Za=null,e}function Tv(e){if(e===mo||e===yh)throw Error(nt(483))}var Yr=null,Ol=0;function au(e){var t=Ol;return Ol+=1,Yr===null&&(Yr=[]),Tx(Yr,e,t)}function Ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ru(e,t){throw t.$$typeof===gE?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ax(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key===null?m.set(h.index,h):m.set(h.key,h),h=h.sibling;return m}function s(h,m){return h=_s(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=134217730,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,m,x,S){return m===null||m.tag!==6?(m=ip(x,h.mode,S),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,S){var T=x.type;return T===Lr?(h=f(h,m,x.props.children,S,x.key),Ws(h,x),h):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zs&&Ga(T)===m.type)?(m=s(m,x.props),Ws(m,x),m.return=h,m):(m=Su(x.type,x.key,x.props,null,h.mode,S),Ws(m,x),m.return=h,m)}function c(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=sp(x,h.mode,S),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,S,T){return m===null||m.tag!==7?(m=qa(x,h.mode,S,T),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ip(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Kc:return x=Su(m.type,m.key,m.props,null,h.mode,x),Ws(x,m),x.return=h,x;case ul:return m=sp(m,h.mode,x),m.return=h,m;case Zs:return m=Ga(m),p(h,m,x)}if(hl(m)||sl(m))return m=qa(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,au(m),x);if(m.$$typeof===Ji)return p(h,su(h,m),x);ru(h,m)}return null}function u(h,m,x,S){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return T!==null?null:o(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:return x.key===T?l(h,m,x,S):null;case ul:return x.key===T?c(h,m,x,S):null;case Zs:return x=Ga(x),u(h,m,x,S)}if(hl(x)||sl(x))return T!==null?null:f(h,m,x,S,null);if(typeof x.then=="function")return u(h,m,au(x),S);if(x.$$typeof===Ji)return u(h,m,su(h,x),S);ru(h,x)}return null}function d(h,m,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(x)||null,o(m,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Kc:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,T);case ul:return h=h.get(S.key===null?x:S.key)||null,c(m,h,S,T);case Zs:return S=Ga(S),d(h,m,x,S,T)}if(hl(S)||sl(S))return h=h.get(x)||null,f(m,h,S,T,null);if(typeof S.then=="function")return d(h,m,x,au(S),T);if(S.$$typeof===Ji)return d(h,m,x,su(m,S),T);ru(m,S)}return null}function v(h,m,x,S){for(var T=null,A=null,g=m,E=m=0,I=null;g!==null&&E<x.length;E++){g.index>E?(I=g,g=null):I=g.sibling;var C=u(h,g,x[E],S);if(C===null){g===null&&(g=I);break}e&&g&&C.alternate===null&&t(h,g),m=a(C,m,E),A===null?T=C:A.sibling=C,A=C,g=I}if(E===x.length)return n(h,g),Zt&&ms(h,E),T;if(g===null){for(;E<x.length;E++)g=p(h,x[E],S),g!==null&&(m=a(g,m,E),A===null?T=g:A.sibling=g,A=g);return Zt&&ms(h,E),T}for(g=i(g);E<x.length;E++)I=d(g,h,E,x[E],S),I!==null&&(e&&(C=I.alternate,C!==null&&g.delete(C.key===null?E:C.key)),m=a(I,m,E),A===null?T=I:A.sibling=I,A=I);return e&&g.forEach(function(P){return t(h,P)}),Zt&&ms(h,E),T}function b(h,m,x,S){if(x==null)throw Error(nt(151));for(var T=null,A=null,g=m,E=m=0,I=null,C=x.next();g!==null&&!C.done;E++,C=x.next()){g.index>E?(I=g,g=null):I=g.sibling;var P=u(h,g,C.value,S);if(P===null){g===null&&(g=I);break}e&&g&&P.alternate===null&&t(h,g),m=a(P,m,E),A===null?T=P:A.sibling=P,A=P,g=I}if(C.done)return n(h,g),Zt&&ms(h,E),T;if(g===null){for(;!C.done;E++,C=x.next())C=p(h,C.value,S),C!==null&&(m=a(C,m,E),A===null?T=C:A.sibling=C,A=C);return Zt&&ms(h,E),T}for(g=i(g);!C.done;E++,C=x.next())C=d(g,h,E,C.value,S),C!==null&&(e&&(I=C.alternate,I!==null&&g.delete(I.key===null?E:I.key)),m=a(C,m,E),A===null?T=C:A.sibling=C,A=C);return e&&g.forEach(function(V){return t(h,V)}),Zt&&ms(h,E),T}function _(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Lr&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:t:{for(var T=x.key;m!==null;){if(m.key===T){if(T=x.type,T===Lr){if(m.tag===7){n(h,m.sibling),S=s(m,x.props.children),Ws(S,x),S.return=h,h=S;break t}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zs&&Ga(T)===m.type){n(h,m.sibling),S=s(m,x.props),Ws(S,x),S.return=h,h=S;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===Lr?(S=qa(x.props.children,h.mode,S,x.key),Ws(S,x),S.return=h,h=S):(S=Su(x.type,x.key,x.props,null,h.mode,S),Ws(S,x),S.return=h,h=S)}return r(h);case ul:t:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),S=s(m,x.children||[]),S.return=h,h=S;break t}else{n(h,m);break}else t(h,m);m=m.sibling}S=sp(x,h.mode,S),S.return=h,h=S}return r(h);case Zs:return x=Ga(x),_(h,m,x,S)}if(hl(x))return v(h,m,x,S);if(sl(x)){if(T=sl(x),typeof T!="function")throw Error(nt(150));return x=T.call(x),b(h,m,x,S)}if(typeof x.then=="function")return _(h,m,au(x),S);if(x.$$typeof===Ji)return _(h,m,su(h,x),S);ru(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),S=s(m,x),S.return=h,h=S):(n(h,m),S=ip(x,h.mode,S),S.return=h,h=S),r(h)):n(h,m)}return function(h,m,x,S){try{Ol=0;var T=_(h,m,x,S);return Yr=null,T}catch(g){if(g===mo||g===yh)throw g;var A=kn(29,g,null,h.mode);return A.lanes=S,A.return=h,A}}}var tr=Ax(!0),wx=Ax(!1),Js=!1;function Qm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Vu(e),vx(e,null,n),t}return _h(e,i,t,n),Vu(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xy(e,n)}}function rp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qp=!1;function xl(){if(qp){var e=qr;if(e!==null)throw e}}function Sl(e,t,n,i){qp=!1;var s=e.updateQueue;Js=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?($t&u)===u:(i&u)===u){u!==0&&u===$a&&(qp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var _=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(_,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(_,p,u):v,u==null)break t;p=Se({},p,u);break t;case 2:Js=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),_a|=r,e.lanes=r,e.memoizedState=p}}function Rx(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function Cx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rx(n[e],t)}var ma=ns(null),Yu=ns(0);function Av(e,t){e=Es,Re(Yu,e),Re(ma,t),Es=e|t.baseLanes}function Yp(){Re(Yu,Es),Re(ma,ma.current)}function jm(){Es=Yu.current,pn(ma),pn(Yu)}var _n=ns(null),Mn=null;function oa(e){var t=e.alternate;Re(mn,mn.current&1),Re(_n,e),Mn===null&&(t===null||ma.current!==null||t.memoizedState!==null)&&(Mn=e)}function Zp(e){Re(mn,mn.current),Re(_n,e),Mn===null&&(Mn=e)}function Dx(e){e.tag===22?(Re(mn,mn.current),Re(_n,e),Mn===null&&(Mn=e)):la()}function la(){Re(mn,mn.current),Re(_n,_n.current)}function jn(e){pn(_n),Mn===e&&(Mn=null),pn(mn)}var mn=ns(0);function Il(e,t){Re(_n,_n.current),Re(mn,t)}function $m(e){pn(mn),pn(_n),Mn===e&&(Mn=null)}function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rm(n)||Ag(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=0,Vt=null,ge=null,We=null,Ju=!1,Zr=!1,er=!1,Ku=0,Pl=0,Jr=null,BT=0;function He(){throw Error(nt(321))}function tg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ai(e[n],t[n]))return!1;return!0}function eg(e,t,n,i,s,a){return Ss=a,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?oS:lS,er=!1,a=n(i,s),er=!1,Zr&&(a=Lx(t,n,i,s)),Nx(e),a}function Nx(e){Ot.H=Qu;var t=ge!==null&&ge.next!==null;if(Ss=0,We=ge=Vt=null,Ju=!1,Pl=0,Jr=null,t)throw Error(nt(300));e===null||Ye||(e=e.dependencies,e!==null&&Wu(e)&&(Ye=!0))}function Lx(e,t,n,i){Vt=e;var s=0;do{if(Zr&&(Jr=null),Pl=0,Zr=!1,25<=s)throw Error(nt(301));if(s+=1,We=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ot.H=WT,a=t(n,i)}while(Zr);return a}function FT(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?Ql(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Vt.flags|=1024),t}function ng(){var e=Ku!==0;return Ku=0,e}function ig(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sg(e){if(Ju){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ju=!1}Ss=0,We=ge=Vt=null,Zr=!1,Pl=Ku=0,Jr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Vt.memoizedState=We=e:We=We.next=e,We}function Ve(){if(ge===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=We===null?Vt.memoizedState:We.next;if(t!==null)We=t,ge=e;else{if(e===null)throw Vt.alternate===null?Error(nt(467)):Error(nt(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},We===null?Vt.memoizedState=We=e:We=We.next=e}return We}function xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(e){var t=Pl;return Pl+=1,Jr===null&&(Jr=[]),e=Tx(Jr,e,t),t=Vt,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?oS:lS),e}function Sh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ql(e);if(e.$$typeof===yE)return;if(e.$$typeof===Ji)return dn(e)}throw Error(nt(438,String(e)))}function ag(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xh(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=vE;return t.index++,n}function Ms(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=Ve();return rg(t,ge,e)}function rg(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?($t&p)===p:(Ss&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===$a&&(f=!0);else if((Ss&u)===u){c=c.next,u===$a&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Vt.lanes|=u,_a|=u;p=c.action,er&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Vt.lanes|=p,_a|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ai(a,e.memoizedState)&&(Ye=!0,f&&(n=qr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function op(e){var t=Ve(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ai(a,t.memoizedState)||(Ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ux(e,t,n){var i=Vt,s=Ve(),a=Zt;if(a){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var r=!ai((ge||s).memoizedState,n);if(r&&(s.memoizedState=n,Ye=!0),s=s.queue,og(Px.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||We!==null&&(We.memoizedState.tag&1)!==0,no(e?9:8,{destroy:void 0},Ix.bind(null,i,s,n,t),null),e){if(i.flags|=2048,xe===null)throw Error(nt(349));a||(Ss&127)!==0||Ox(i,t,n)}return n}function Ox(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=xh(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ix(e,t,n,i){t.value=n,t.getSnapshot=i,Bx(t)&&Fx(e)}function Px(e,t,n){return n(function(){Bx(t)&&Fx(e)})}function Bx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ai(e,n)}catch{return!0}}function Fx(e){var t=or(e,2);t!==null&&Xn(t,e,2)}function Jp(e){var t=Un();if(typeof e=="function"){var n=e;if(e=n(),er){Qs(!0);try{n()}finally{Qs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},t}function zx(e,t,n,i){return e.baseState=n,rg(e,ge,typeof i=="function"?i:Ms)}function zT(e,t,n,i,s){if(bh(e))throw Error(nt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ot.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Hx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Hx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ot.T,r={};r.types=a!==null?a.types:null,Ot.T=r;try{var o=n(s,i),l=Ot.S;l!==null&&l(r,o),wv(e,t,o)}catch(c){Kp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ot.T=a}}else try{a=n(s,i),wv(e,t,a)}catch(c){Kp(e,t,c)}}function wv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Rv(e,t,i)},function(i){return Kp(e,t,i)}):Rv(e,t,n)}function Rv(e,t,n){t.status="fulfilled",t.value=n,Gx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hx(e,n)))}function Kp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Gx(t),t=t.next;while(t!==i)}e.action=null}function Gx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vx(e,t){return t}function Cv(e,t){if(Zt){var n=xe.formState;if(n!==null){t:{var i=Vt;if(Zt){if(we){e:{for(var s=we,a=Si;s.nodeType!==8;){if(!a){s=null;break e}if(s=Mi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){we=Mi(s.nextSibling),i=s.data==="F!";break t}}pa(i)}i=!1}i&&(t=n[0])}}return n=Un(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vx,lastRenderedState:t},n.queue=i,n=sS.bind(null,Vt,i),i.dispatch=n,i=Jp(!1),a=hg.bind(null,Vt,!1,i.queue),i=Un(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=zT.bind(null,Vt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Dv(e){var t=Ve();return kx(t,ge,e)}function kx(e,t,n){if(t=rg(e,t,Vx)[0],e=Eu(Ms)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ql(t)}catch(r){throw r===mo?yh:r}else i=t;t=Ve();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,no(9,{destroy:void 0},HT.bind(null,s,n),null)),[i,a,e]}function HT(e,t){e.action=t}function Nv(e){var t=Ve(),n=ge;if(n!==null)return kx(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function no(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=xh(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Xx(){return Ve().memoizedState}function Tu(e,t,n,i){var s=Un();Vt.flags|=e,s.memoizedState=no(1|t,{destroy:void 0},n,i===void 0?null:i)}function Mh(e,t,n,i){var s=Ve();i=i===void 0?null:i;var a=s.memoizedState.inst;ge!==null&&i!==null&&tg(i,ge.memoizedState.deps)?s.memoizedState=no(t,a,n,i):(Vt.flags|=e,s.memoizedState=no(1|t,a,n,i))}function Lv(e,t){Tu(8390656,8,e,t)}function og(e,t){Mh(2048,8,e,t)}function GT(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=xh(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Wx(e){var t=Ve().memoizedState;return GT({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function qx(e,t){return Mh(4,2,e,t)}function Yx(e,t){return Mh(4,4,e,t)}function Zx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jx(e,t,n){n=n!=null?n.concat([e]):null,Mh(4,4,Zx.bind(null,t,e),n)}function lg(){}function Kx(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&tg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qx(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&tg(t,i[1]))return i[0];if(i=e(),er){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i}function cg(e,t,n){return n===void 0||(Ss&1073741824)!==0&&($t&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=kS(),Vt.lanes|=e,_a|=e,n)}function jx(e,t,n,i){return ai(n,t)?n:ma.current!==null?(e=cg(e,n,i),ai(e,t)||(Ye=!0),e):(Ss&106)===0||(Ss&1073741824)!==0&&($t&261930)===0?(Ye=!0,e.memoizedState=n):(e=kS(),Vt.lanes|=e,_a|=e,t)}function $x(e,t,n,i,s){var a=oe.p;oe.p=a!==0&&8>a?a:8;var r=Ot.T,o={};o.types=r!==null?r.types:null,Ot.T=o,hg(e,!1,t,n);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=PT(l,i);Ml(e,t,f,si(e))}else Ml(e,t,i,si(e))}catch(p){Ml(e,t,{then:function(){},status:"rejected",reason:p},si())}finally{oe.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function VT(){}function Qp(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var s=tS(e).queue;$x(e,s,t,Wa,n===null?VT:function(){return eS(e),n(i)})}function tS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:Wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function eS(e){var t=tS(e);t.next===null&&(t=e.alternate.memoizedState),Ml(e,t.next.queue,{},si())}function ug(){return dn(co)}function nS(){return Ve().memoizedState}function iS(){return Ve().memoizedState}function kT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=si();e=aa(n);var i=ra(t,e,n);i!==null&&(Xn(i,t,n),yl(i,t,n)),t={cache:Zm()},e.payload=t;return}t=t.return}}function XT(e,t,n){var i=si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bh(e)?aS(t,n):(n=Wm(e,t,n,i),n!==null&&(Xn(n,e,i),rS(n,t,i)))}function sS(e,t,n){var i=si();Ml(e,t,n,i)}function Ml(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bh(e))aS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ai(o,r))return _h(e,t,s,0),xe===null&&gh(),!1}catch{}if(n=Wm(e,t,s,i),n!==null)return Xn(n,e,i),rS(n,t,i),!0}return!1}function hg(e,t,n,i){if(i={lane:2,revertLane:Mg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},bh(e)){if(t)throw Error(nt(479))}else t=Wm(e,n,i,2),t!==null&&Xn(t,e,2)}function bh(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function aS(e,t){Zr=Ju=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xy(e,n)}}var Qu={readContext:dn,use:Sh,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He,useEffectEvent:He},oS={readContext:dn,use:Sh,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:Lv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tu(4194308,4,Zx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tu(4194308,4,e,t)},useInsertionEffect:function(e,t){Tu(4,2,e,t)},useMemo:function(e,t){var n=Un();t=t===void 0?null:t;var i=e();if(er){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Un();if(n!==void 0){var s=n(t);if(er){Qs(!0);try{n(t)}finally{Qs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=XT.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:function(e){e=Jp(e);var t=e.queue,n=sS.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lg,useDeferredValue:function(e,t){var n=Un();return cg(n,e,t)},useTransition:function(){var e=Jp(!1);return e=$x.bind(null,Vt,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,s=Un();if(Zt){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),xe===null)throw Error(nt(349));($t&127)!==0||Ox(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Lv(Px.bind(null,i,a,e),[e]),i.flags|=2048,no(9,{destroy:void 0},Ix.bind(null,i,a,n,t),null),n},useId:function(){var e=Un(),t=xe.identifierPrefix;if(Zt){var n=ji,i=Qi;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ku++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=BT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ug,useFormState:Cv,useActionState:Cv,useOptimistic:function(e){var t=Un();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hg.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ag,useCacheRefresh:function(){return Un().memoizedState=kT.bind(null,Vt)},useEffectEvent:function(e){var t=Un(),n={impl:e};return t.memoizedState=n,function(){if((re&2)!==0)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},lS={readContext:dn,use:Sh,useCallback:Kx,useContext:dn,useEffect:og,useImperativeHandle:Jx,useInsertionEffect:qx,useLayoutEffect:Yx,useMemo:Qx,useReducer:Eu,useRef:Xx,useState:function(){return Eu(Ms)},useDebugValue:lg,useDeferredValue:function(e,t){var n=Ve();return jx(n,ge.memoizedState,e,t)},useTransition:function(){var e=Eu(Ms)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Ux,useId:nS,useHostTransitionStatus:ug,useFormState:Dv,useActionState:Dv,useOptimistic:function(e,t){var n=Ve();return zx(n,ge,e,t)},useMemoCache:ag,useCacheRefresh:iS,useEffectEvent:Wx},WT={readContext:dn,use:Sh,useCallback:Kx,useContext:dn,useEffect:og,useImperativeHandle:Jx,useInsertionEffect:qx,useLayoutEffect:Yx,useMemo:Qx,useReducer:op,useRef:Xx,useState:function(){return op(Ms)},useDebugValue:lg,useDeferredValue:function(e,t){var n=Ve();return ge===null?cg(n,e,t):jx(n,ge.memoizedState,e,t)},useTransition:function(){var e=op(Ms)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Ux,useId:nS,useHostTransitionStatus:ug,useFormState:Nv,useActionState:Nv,useOptimistic:function(e,t){var n=Ve();return ge!==null?zx(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ag,useCacheRefresh:iS,useEffectEvent:Wx};function lp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=si(),s=aa(i);s.payload=t,n!=null&&(s.callback=n),t=ra(e,s,i),t!==null&&(Xn(t,e,i),yl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=si(),s=aa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ra(e,s,i),t!==null&&(Xn(t,e,i),yl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=si(),i=aa(n);i.tag=2,t!=null&&(i.callback=t),t=ra(e,i,n),t!==null&&(Xn(t,e,n),yl(t,e,n))}};function Uv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Nl(n,i)||!Nl(s,a):!0}function Ov(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&jp.enqueueReplaceState(t,t.state,null)}function nr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function cS(e){Gu(e)}function uS(e){console.error(e)}function hS(e){Gu(e)}function ju(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Iv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function $p(e,t,n){return n=aa(n),n.tag=3,n.payload={element:null},n.callback=function(){ju(e,t)},n}function fS(e){return e=aa(e),e.tag=3,e}function dS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Iv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Iv(t,n,i),typeof s!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function qT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Qa(t,n,s,!0),n=_n.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mn===null?rh():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===qu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),mp(e,i,s)),!1;case 22:return n.flags|=65536,i===qu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),mp(e,i,s)),!1}throw Error(nt(435,n.tag))}return mp(e,i,s),rh(),!1}if(Zt)return t=_n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Gp&&(e=Error(nt(422),{cause:i}),Ul(xi(e,n)))):(i!==Gp&&(t=Error(nt(423),{cause:i}),Ul(xi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=xi(i,n),s=$p(e.stateNode,i,s),rp(e,s),Ge!==4&&(Ge=2)),!1;var a=Error(nt(520),{cause:i});if(a=xi(a,n),Al===null?Al=[a]:Al.push(a),Ge!==4&&(Ge=2),t===null)return!0;i=xi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=$p(n.stateNode,i,e),rp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ca===null||!ca.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=fS(s),dS(s,e,n,i),rp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var fg=Error(nt(461)),Ye=!1;function Je(e,t,n,i){t.child=e===null?wx(t,null,n,i):tr(t,e.child,n,i)}function Pv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ja(t),i=eg(e,t,n,r,a,s),o=ng(),e!==null&&!Ye?(ig(e,t,s),bs(e,t,s)):(Zt&&o&&vh(t),t.flags|=1,Je(e,t,i,s),t.child)}function Bv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!qm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,pS(e,t,a,i,s)):(e=Su(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(r,i)&&e.ref===t.ref)return bs(e,t,s)}return t.flags|=1,e=_s(a,i),e.ref=t.ref,e.return=t,t.child=e}function pS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Nl(a,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=a,pg(e,s))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,bs(e,t,s)}return tm(e,t,n,i,s)}function mS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Fv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(t,a!==null?a.cachePool:null),a!==null?Av(t,a):Yp(),Dx(t);else return i=t.lanes=536870912,Fv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(bu(t,a.cachePool),Av(t,a),la(),t.memoizedState=null):(e!==null&&bu(t,null),Yp(),la());return Je(e,t,s,n),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fv(e,t,n,i,s){var a=Jm();return a=a===null?null:{parent:qe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&bu(t,null),Yp(),Dx(t),e!==null&&Qa(e,t,i,!0),t.childLanes=s,null}function Au(e,t){return t=Eh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zv(e,t,n){return tr(t,e.child,null,n),e=Au(t,t.pendingProps),e.flags|=2,jn(t),t.memoizedState=null,e}function YT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Zt){if(i.mode==="hidden")return e=Au(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},bl(null,e);if(Zp(t),(e=we)?(e=mM(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=xx(e),n.return=t,t.child=n,on=t,we=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return Au(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Zp(t),s)if(t.flags&256)t.flags&=-257,t=zv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(Ye||Qa(e,t,n,!1),s=(n&e.childLanes)!==0,Ye||s){if(ma.current===null){if(i=xe,i!==null&&(r=Wy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,or(e,r),Xn(i,e,r),fg;rh()}t=zv(e,t,n)}else e=a.treeContext,we=Mi(r.nextSibling),on=t,Zt=!0,sa=null,Si=!1,e!==null&&Mx(t,e),t=Au(t,i),t.flags|=134221824;return t}return e=_s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tm(e,t,n,i,s){return ja(t),n=eg(e,t,n,i,void 0,s),i=ng(),e!==null&&!Ye?(ig(e,t,s),bs(e,t,s)):(Zt&&i&&vh(t),t.flags|=1,Je(e,t,n,s),t.child)}function Hv(e,t,n,i,s,a){return ja(t),t.updateQueue=null,n=Lx(t,i,n,s),Nx(e),i=ng(),e!==null&&!Ye?(ig(e,t,a),bs(e,t,a)):(Zt&&i&&vh(t),t.flags|=1,Je(e,t,n,a),t.child)}function Gv(e,t,n,i,s){if(ja(t),t.stateNode===null){var a=zr,r=n.contextType;typeof r=="object"&&r!==null&&(a=dn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=jp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Qm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?dn(r):zr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(lp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&jp.enqueueReplaceState(a,a.state,null),Sl(t,i,a,s),xl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=nr(n,o);a.props=l;var c=a.context,f=n.contextType;r=zr,typeof f=="object"&&f!==null&&(r=dn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Ov(t,a,i,r),Js=!1;var u=t.memoizedState;a.state=u,Sl(t,i,a,s),xl(),c=t.memoizedState,o||u!==c||Js?(typeof p=="function"&&(lp(t,n,p,i),c=t.memoizedState),(l=Js||Uv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Wp(e,t),r=t.memoizedProps,f=nr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=zr,typeof c=="object"&&c!==null&&(l=dn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Ov(t,a,i,l),Js=!1,u=t.memoizedState,a.state=u,Sl(t,i,a,s),xl();var d=t.memoizedState;r!==p||u!==d||Js||e!==null&&e.dependencies!==null&&Wu(e.dependencies)?(typeof o=="function"&&(lp(t,n,o,i),d=t.memoizedState),(f=Js||Uv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Wu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Rr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=tr(t,e.child,null,s),t.child=tr(t,null,n,s)):Je(e,t,n,s),t.memoizedState=a.state,e=t.child):e=bs(e,t,s),e}function Vv(e,t,n,i){return Ka(),t.flags|=256,Je(e,t,n,i),t.child}var em={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nm(e){return{baseLanes:e,cachePool:Ex()}}function im(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ti),e}function gS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Zt){if(s?oa(t):la(),(e=we)?(e=mM(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=xx(e),n.return=t,t.child=n,on=t,we=null)):e=null,e===null)throw pa(t);return Ag(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(la(),s=t.mode,a=Eh({mode:"hidden",children:a},s),i=qa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=nm(n),i.childLanes=im(e,r,n),t.memoizedState=em,bl(null,i)):(oa(t),dg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return ZT(e,t,a,r,i,l,o,n)}return s?(la(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=_s(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=_s(l,s):(s=qa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,bl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=nm(n):(a=s.cachePool,a!==null?(o=qe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Ex(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=im(e,r,n),t.memoizedState=em,bl(e.child,i)):(oa(t),n=e.child,e=n.sibling,n=_s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function dg(e,t){return t=Eh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eh(e,t){return e=kn(22,e,null,t),e.lanes=0,e}function ou(e,t,n){return tr(t,e.child,null,n),e=dg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZT(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(oa(t),t.flags&=-257,ou(e,t,o)):t.memoizedState!==null?(la(),t.child=e.child,t.flags|=128,null):(la(),a=s.fallback,r=t.mode,s=Eh({mode:"visible",children:s.children},r),a=qa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,tr(t,e.child,null,o),s=t.child,s.memoizedState=nm(o),s.childLanes=im(e,i,o),t.memoizedState=em,bl(null,s));if(oa(t),Ag(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(nt(419)),s.stack="",s.digest=i,Ul({value:s,source:null,stack:null})),ou(e,t,o)}if(Ye||Qa(e,t,o,!1),i=(o&e.childLanes)!==0,Ye||i){if(ma.current!==null)return ou(e,t,o);if(i=xe,i!==null&&(s=Wy(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,or(e,s),Xn(i,e,s),fg;return Rm(a)||rh(),ou(e,t,o)}return Rm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,we=Mi(a.nextSibling),on=t,Zt=!0,sa=null,Si=!1,e!==null&&Mx(t,e),t=dg(t,s.children),t.flags|=134221824,t)}function kv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Mu(e.return,t,n)}function Xv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Zu(n)===null&&(t=e),e=e.sibling}return t}function lu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function cp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=mn.current;if(t.flags&128)return Il(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Il(t,r),s==="backwards"&&e!==null?(cp(e),Je(e,t,i,n),cp(e)):Je(e,t,i,n),i=Zt?Ll:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kv(e,n,t);else if(e.tag===19)kv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Xv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,cp(t)),lu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Zu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}lu(t,!0,n,null,a,i);break;case"together":lu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Xv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),lu(t,!1,s,n,a,i)}return t.child}function Wv(e,t,n){var i=t.pendingProps;return $s(t,t.type,i.value),Je(e,t,i.children,n),t.child}function bs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_a|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=_s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wu(e)))}function JT(e,t,n){switch(t.tag){case 3:Bu(t,t.stateNode.containerInfo),$s(t,qe,e.memoizedState.cache),Ka();break;case 27:case 5:Np(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:$s(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return oa(t),t.flags|=128,null;i=Qa(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?gS(e,t,n):(oa(t),e=bs(e,t,n),e!==null?e.sibling:null)}oa(t);break;case 19:if(t.flags&128)return sm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Qa(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return sm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Il(t,mn.current),i)break;return null;case 22:return t.lanes=0,mS(e,t,n,t.pendingProps);case 24:$s(t,qe,e.memoizedState.cache)}return bs(e,t,n)}function _S(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!pg(e,n)&&(t.flags&128)===0)return Ye=!1,JT(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,Zt&&(t.flags&1048576)!==0&&Sx(t,Ll,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")qm(e)?(i=nr(e,i),t.tag=1,t=Gv(null,t,e,i,n)):(t.tag=0,t=tm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Um){t.tag=11,t=Pv(null,t,e,i,n);break t}else if(s===Om){t.tag=14,t=Bv(null,t,e,i,n);break t}else if(s===Ji){t.tag=10,t.type=e,t=Wv(null,t,n);break t}}throw t=Cp(e)||e,Error(nt(306,t,""))}}return t;case 0:return tm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=nr(i,t.pendingProps),Gv(e,t,i,s,n);case 3:t:{if(Bu(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Wp(e,t),Sl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,$s(t,qe,i),i!==a.cache&&kp(t,[qe],n,!0),xl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Vv(e,t,i,n);break t}else if(i!==s){s=xi(Error(nt(424)),t),Ul(s),t=Vv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Mi(e.firstChild),on=t,Zt=!0,sa=null,Si=!0,n=wx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ka(),i===s){t=bs(e,t,n);break t}Je(e,t,i,n)}t=t.child}return t;case 26:return Rr(e,t),e===null?(n=vy(t.type,null,t.pendingProps,null))?t.memoizedState=n:Zt||(t.stateNode=rM(t.type,t.pendingProps,ia.current,t)):t.memoizedState=vy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Np(t),e===null&&Zt&&(i=t.stateNode=gM(t.type,t.pendingProps,ia.current),on=t,Si=!0,s=we,ya(t.type)?(Cm=s,we=Mi(i.firstChild)):we=s),Je(e,t,t.pendingProps.children,n),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Zt&&((s=i=we)&&(i=GA(i,t.type,t.pendingProps,Si),i!==null?(t.stateNode=i,on=t,we=Mi(i.firstChild),Si=!1,s=!0):s=!1),s||pa(t)),Np(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Tm(s,a)?i=null:r!==null&&Tm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=eg(e,t,FT,null,null,n),co._currentValue=s),Rr(e,t),Je(e,t,i,n),t.child;case 6:return e===null&&Zt&&((e=n=we)&&(n=VA(n,t.pendingProps,Si),n!==null?(t.stateNode=n,on=t,we=null,e=!0):e=!1),e||pa(t)),null;case 13:return gS(e,t,n);case 4:return Bu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=tr(t,null,i,n):Je(e,t,i,n),t.child;case 11:return Pv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Rr(e,t),Je(e,t,i,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return Wv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,ja(t),s=dn(s),i=i(s),t.flags|=1,Je(e,t,i,n),t.child;case 14:return Bv(e,t,t.type,t.pendingProps,n);case 15:return pS(e,t,t.type,t.pendingProps,n);case 19:return sm(e,t,n);case 31:return YT(e,t,n);case 22:return mS(e,t,n,t.pendingProps);case 24:return ja(t),i=dn(qe),e===null?(s=Jm(),s===null&&(s=xe,a=Zm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Qm(t),$s(t,qe,s)):((e.lanes&n)!==0&&(Wp(e,t),Sl(t,null,null,n),xl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),$s(t,qe,i)):(i=a.cache,$s(t,qe,i),i!==s.cache&&kp(t,[qe],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Zt&&vh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Rr(e,t),Je(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function ps(e){e.flags|=4}function up(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Sy(t,i):Sy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(qS())e.flags|=8192;else throw Za=qu,Km}else e.flags&=-16777217}function qv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xM(t))if(qS())e.flags|=8192;else throw Za=qu,Km}function cu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vy():536870912,e.lanes|=t,io|=t)}function rl(e,t){if(!Zt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function KT(e,t,n){var i=t.pendingProps;switch(Ym(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vs(qe),$r(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?ps(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ap())),Ae(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ps(t),a!==null?(Ae(t),qv(t,a)):(Ae(t),up(t,s,null,i,n))):a?a!==e.memoizedState?(ps(t),Ae(t),qv(t,a)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ps(t),Ae(t),up(t,s,e,i,n)),null;case 27:if(Fu(t),n=ia.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Ae(t),t.subtreeFlags&=-33554433,null}e=$i.current,Ar(t)?yv(t,e):(e=gM(s,i,n),t.stateNode=e,ps(t))}return Ae(t),t.subtreeFlags&=-33554433,null;case 5:if(Fu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Ae(t),t.subtreeFlags&=-33554433,null}if(a=$i.current,Ar(t))yv(t,a);else{var r=zl(ia.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[fn]=t,a[qn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(gn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ps(t)}}return Ae(t),t.subtreeFlags&=-33554433,up(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=ia.current,Ar(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=on,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[fn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||sM(e.nodeValue,n)),e||pa(t,!0)}else e=zl(e).createTextNode(i),e[fn]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ar(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[fn]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jn(t),t):(jn(t),null);if((t.flags&128)!==0)throw Error(nt(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ar(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(nt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(nt(317));s[fn]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else s=ap(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(jn(t),t):(jn(t),null)}return jn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cu(t,t.updateQueue),Ae(t),null);case 4:return $r(),e===null&&bg(t.stateNode.containerInfo),t.flags|=67108864,Ae(t),null;case 10:return vs(t.type),Ae(t),null;case 19:if($m(t),i=t.memoizedState,i===null)return Ae(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)rl(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Zu(e),a!==null){for(t.flags|=128,rl(i,!1),e=a.updateQueue,t.updateQueue=e,cu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yx(n,e),n=n.sibling;return Il(t,mn.current&1|2),Zt&&ms(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ei()>sh&&(t.flags|=128,s=!0,rl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Zu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,cu(t,e),rl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Zt)return Ae(t),null}else 2*ei()-i.renderingStartTime>sh&&n!==536870912&&(t.flags|=128,s=!0,rl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ei(),e.sibling=null,a=mn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Zt?Il(t,a):(n=a,Re(_n,t),Re(mn,n),Mn===null&&(Mn=t)),Zt&&ms(t,i.treeForkCount),e}return Ae(t),null;case 22:case 23:return jn(t),jm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&cu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&pn(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vs(qe),Ae(t),null;case 25:return null;case 30:return t.flags|=33554432,Ae(t),null}throw Error(nt(156,t.tag))}function QT(e,t){switch(Ym(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vs(qe),$r(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fu(t),null;case 31:if(t.memoizedState!==null){if(jn(t),t.alternate===null)throw Error(nt(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $m(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return $r(),null;case 10:return vs(t.type),null;case 22:case 23:return jn(t),jm(),e!==null&&pn(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vs(qe),null;case 25:return null;default:return null}}function vS(e,t){switch(Ym(t),t.tag){case 3:vs(qe),$r();break;case 26:case 27:case 5:Fu(t);break;case 4:$r();break;case 31:t.memoizedState!==null&&jn(t);break;case 13:jn(t);break;case 19:$m(t);break;case 10:vs(t.type);break;case 22:case 23:jn(t),jm(),e!==null&&pn(Ya);break;case 24:vs(qe)}}function jl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){me(t,t.return,o)}}function ga(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){me(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){me(t,t.return,f)}}function yS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cx(t,n)}catch(i){me(e,e.return,i)}}}function xS(e,t,n){n.props=nr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function Yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=xs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=uM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ri(e);Wn(e.child,!1,zA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){me(e,t,o)}}function hn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){me(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){me(e,t,s)}else n.current=null}function $u(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)pM(e.stateNode,t[n])}function Yv(e){for(var t=e.return;t!==null&&(gg(t)&&pM(e.stateNode,t.stateNode),!mg(t));)t=t.return}function El(e){for(var t=e.return;t!==null&&(gg(t)&&HA(e.stateNode,t.stateNode),!mg(t));)t=t.return}function mg(e){return e.tag===5||e.tag===3||e.tag===27}function gg(e){return e&&e.tag===7&&e.stateNode!==null}function am(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){me(e,e.return,s)}}function hp(e,t,n){try{var i=e.stateNode;SA(i,e.type,n,t),i[qn]=t}catch(s){me(e,e.return,s)}}function SS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function fp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||SS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki)),$u(e,i),se=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,ya(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(rm(e,t,n,i),e=e.sibling;e!==null;)rm(e,t,n,i),e=e.sibling}function th(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),$u(e,i),se=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,ya(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(th(e,t,n,i),e=e.sibling;e!==null;)th(e,t,n,i),e=e.sibling}function MS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gn(t,i,n),t[fn]=e,t[qn]=n}catch(a){me(e,e.return,a)}}var eh=!1,$n=null;function Zv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(eh=!0)}var Zi=null;function Jv(){var e=Zi;return Zi=null,e}var Vn=0;function go(e,t,n,i,s){return Vn=0,bS(e.child,t,n,i,s)}function bS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Am(r);i.push(o),o.view&&(a=!0)}else a||Am(r).view&&(a=!0);eh=!0,oM(r,Vn===0?t:t+"_"+Vn,n),Vn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||bS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function es(e,t){for(;e!==null;)e.tag===5?lM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||es(e.child,t)),e=e.sibling}function wu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(nt(544));var n=t.name;t=As(t.default,t.share),t!=="none"&&(go(e,n,t,null,!1)||es(e.child,!1))}e=e.sibling}}function om(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=xs(i,n),a=As(i.default,n.paired?i.share:i.enter);a!=="none"?go(e,s,a,null,!1)?(wu(e),n.paired||t||so(e,i.onEnter)):es(e.child,!1):wu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)om(e,t),e=e.sibling;else wu(e)}function lm(e){if($n!==null&&$n.size!==0){var t=$n;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=As(n.default,n.share);if(a!=="none"&&(go(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,so(e,n.onShare)):es(e.child,!1)),t.delete(i),t.size===0)break}}}lm(e)}e=e.sibling}}}function cm(e){if(e.tag===30){var t=e.memoizedProps,n=xs(t,e.stateNode),i=$n!==null?$n.get(n):void 0,s=As(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(go(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,$n.delete(n),so(e,t.onShare)):so(e,t.onExit):es(e.child,!1)),$n!==null&&lm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cm(e),e=e.sibling;else $n!==null&&lm(e)}function ES(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=xs(t,e.stateNode);t=As(t.default,t.update),e.flags&=-5,t!=="none"&&go(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&ES(e);e=e.sibling}}function um(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,es(e.child,!1))}um(e)}e=e.sibling}}function Ru(e){if(e.tag===30)e.stateNode.paired=null,es(e.child,!1),um(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ru(e),e=e.sibling;else um(e)}function TS(e){for(e=e.child;e!==null;)e.tag===30?es(e.child,!1):(e.subtreeFlags&33554432)!==0&&TS(e),e=e.sibling}function _g(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Vn<a.length){var c=a[Vn],f=Am(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&oM(l,Vn===0?n:n+"_"+Vn,s),o&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(l,Vn===0?i:i+"_"+Vn,t.memoizedProps)),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:_g(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function AS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=xs(n,i),a=As(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(wA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Vn=0,s=_g(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||so(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&AS(e,t);e=e.sibling}}var sn=!1,ce=!1,Xi=!1,dp=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,an=null,Wi=!1,pl=!1,nh=!1,hm=!1;function jT(e,t,n){if(e=e.containerInfo,bm=uo,e=hx(e),km(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Em={focusedElem:e,selectionRange:i},uo=!1,n=(n&335544064)===n,an=t,t=n?9270:1024;an!==null;){if(e=an,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&cm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Zv(e),uu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&cm(i),uu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Zv(e),uu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,an=i):(n&&ES(e),uu(n))}}$n=null}function uu(e){for(;an!==null;){var t=an,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=nr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){me(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)wm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":wm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=xs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=As(s.default,s.update),s!=="none"&&go(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(nt(163))}if(i=t.sibling,i!==null){i.return=t.return,an=i;break}an=t.return}}function wS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n),i&4&&jl(5,n);break;case 1:if(qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var s=nr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&yS(n),i&512&&Yi(n,n.return);break;case 3:if(qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cx(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&MS(n);case 26:case 5:qi(e,n),t===null&&i&4&&am(n),i&512&&Yi(n,n.return);break;case 12:qi(e,n);break;case 31:qi(e,n),i&4&&NS(e,n);break;case 13:qi(e,n),i&4&&LS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uA.bind(null,n),kA(e,n))));break;case 22:if(i=n.memoizedState!==null||sn,!i){var a=t!==null&&t.memoizedState!==null||ce;t=sn,s=ce,sn=i,(ce=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Di(e,n,i)):qi(e,n),sn=t,ce=s}break;case 30:qi(e,n),i&512&&Yi(n,n.return);break;case 7:i&512&&Yi(n,n.return);default:qi(e,n)}}function fm(e,t){for(e=e.child;e!==null;)RS(e,t),e=e.sibling}function RS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){me(e,e.return,l)}dm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,se=!0}catch(l){me(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?fy(o,!0):fy(e.stateNode,!1)}catch(l){me(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&fm(e,t);break;default:fm(e,t)}}function dm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:RS(n,i);break t;case 22:n.memoizedState===null&&dm(n,i);break t;default:dm(n,i)}}e=e.sibling}}function CS(e){var t=e.alternate;t!==null&&(e.alternate=null,CS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,Hn=!1;function Ci(e,t,n){for(n=n.child;n!==null;)DS(e,t,n),n=n.sibling}function DS(e,t,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 26:ce||hn(n,t),Ci(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ce&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ce||hn(n,t),El(n);var i=Oe,s=Hn;ya(n.type)&&(Oe=n.stateNode,Hn=!1),Ci(e,t,n),_M(n.stateNode,n.type,n.memoizedProps),Oe=i,Hn=s;break;case 5:ce||hn(n,t),El(n);case 6:if(n.tag===6&&El(n),i=Oe,s=Hn,Oe=null,Ci(e,t,n),Oe=i,Hn=s,Oe!==null)if(Hn)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode),se=!0}catch(a){me(n,t,a)}else try{Oe.removeChild(n.stateNode),se=!0}catch(a){me(n,t,a)}break;case 18:Oe!==null&&(Hn?(e=Oe,hy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ho(e)):hy(Oe,n.stateNode));break;case 4:i=Oe,s=Hn,Oe=n.stateNode.containerInfo,Hn=!0,Ci(e,t,n),Oe=i,Hn=s;break;case 0:case 11:case 14:case 15:ga(2,n,t),ce||ga(4,n,t),Ci(e,t,n);break;case 1:ce||(hn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&xS(n,t,i)),Ci(e,t,n);break;case 21:Ci(e,t,n);break;case 22:ce=(i=ce)||n.memoizedState!==null,Ci(e,t,n),ce=i;break;case 30:hn(n,t),Ci(e,t,n);break;case 7:ce||hn(n,t),Ci(e,t,n);break;default:Ci(e,t,n)}}function NS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ho(e)}catch(n){me(t,t.return,n)}}}function LS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ho(e)}catch(n){me(t,t.return,n)}}function $T(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kv),t;default:throw Error(nt(435,e.tag))}}function hu(e,t){var n=$T(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=hA.bind(null,e,i);i.then(s,s)}})}function Nn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ya(l.type)){Oe=l.stateNode,Hn=!1;break t}break;case 5:Oe=l.stateNode,Hn=!1;break t;case 3:case 4:Oe=l.stateNode.containerInfo,Hn=!0;break t}l=l.return}if(Oe===null)throw Error(nt(160));DS(r,o,a),Oe=null,Hn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)US(t,e,n),t=t.sibling}var Ni=null;function US(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Nn(t,e,n),Ln(e),s&4&&(ga(3,e,e.return),jl(3,e),ga(5,e,e.return));break;case 1:Nn(t,e,n),Ln(e),s&512&&(ce||i===null||hn(i,i.return)),s&64&&sn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ni,Nn(t,e,n),Ln(e),s&512&&(ce||i===null||hn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(sn)e.stateNode=rM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Zl]||i[fn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),gn(i,t,n),i[fn]=e,rn(i),t=i;break t;case"link":if(a=xy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),gn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=xy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),gn(i,t,n),s.head.appendChild(i);break;default:throw Error(nt(468,t))}i[fn]=e,rn(i),t=i}e.stateNode=t}else sn||Dm(a,e.type,e.stateNode);else e.stateNode=yy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ce||t.parentNode.removeChild(t)):s.count--,n===null?sn||Dm(a,e.type,e.stateNode):yy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&hp(e,e.memoizedProps,i.memoizedProps);break;case 27:Nn(t,e,n),Ln(e),s&512&&(ce||i===null||hn(i,i.return)),i!==null&&s&4&&hp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Xi,Xi=!1,Nn(t,e,n),Xi=a,Ln(e),s&512&&(ce||i===null||hn(i,i.return)),e.flags&32){t=e.stateNode;try{eo(t,""),se=!0}catch(f){me(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,hp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(dp=!0);break;case 6:if(Nn(t,e,n),Ln(e),s&4){if(e.stateNode===null)throw Error(nt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,se=!0}catch(f){me(e,e.return,f)}}break;case 3:if(se=!1,Lu=null,a=Ni,Ni=Hl(t.containerInfo),Nn(t,e,n),Ni=a,Ln(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{ho(t.containerInfo)}catch(f){me(e,e.return,f)}dp&&(dp=!1,OS(e)),se=!1;break;case 4:s=Xi,Xi=sn,i=nv(),a=Ni,Ni=Hl(e.stateNode.containerInfo),Nn(t,e,n),Ln(e),Ni=a,se&&pl&&(nh=!0),se=i,Xi=s;break;case 12:Nn(t,e,n),Ln(e);break;case 31:Nn(t,e,n),Ln(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 13:Nn(t,e,n),Ln(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Th=ei()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=sn,l=ce,c=Xi;sn=o||a,Xi=c||a,ce=l||r,Nn(t,e,n),ce=l,Xi=c,sn=o,Ln(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||sn||ce||(t=r||ce,n=sn,i=ce,sn=a||sn,ce=t,Ys(e,2),sn=n,ce=i),!a&&Xi||fm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,hu(e,n))));break;case 19:Nn(t,e,n),Ln(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 30:s&512&&(ce||i===null||hn(i,i.return)),s=nv(),a=pl,r=(n&335544064)===n,o=e.memoizedProps,pl=r&&As(o.default,o.update)!=="none",Nn(t,e,n),Ln(e),r&&i!==null&&se&&(e.flags|=4),pl=a,se=s;break;case 21:break;case 7:s&512&&(ce||i===null||hn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Nn(t,e,n),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(SS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(gg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(mg(s))break;s=s.return}var r=i;if(n==null)throw Error(nt(160));switch(n.tag){case 27:var o=n.stateNode,l=fp(e);th(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(eo(c,""),n.flags&=-33);var f=fp(e);th(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=fp(e);rm(e,u,p,r);break;default:throw Error(nt(161))}}catch(d){me(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;OS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,uo=!0,t.reset(),uo=!1),e=e.sibling}}function wr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)IS(t,e),t=t.sibling;else AS(t,!1)}function IS(e,t){var n=e.alternate;if(n===null)om(e,!1);else switch(e.tag){case 3:if(hm=Wi=!1,Jv(),wr(t,e),!Wi&&!nh){if(e=Zi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];lM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),hm=!0}Zi=null;break;case 5:wr(t,e);break;case 4:i=Wi,Wi=!1,wr(t,e),Wi&&(nh=!0),Wi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?om(e,!1):wr(t,e));break;case 30:i=Wi,s=Jv(),Wi=!1,wr(t,e),Wi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=xs(a,r),r=xs(n.memoizedProps,r);var o=As(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Vn=0,t=_g(e,n,t,r,o,a,!0),Vn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(so(e,e.memoizedProps.onUpdate),Zi=s):s!==null&&(s.push.apply(s,Zi),Zi=s),Wi=(e.flags&32)!==0?!0:i;break;default:wr(t,e)}}function qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wS(e,t.alternate,t),t=t.sibling}function Ys(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),Ys(n,i);break;case 1:hn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&xS(n,n.return,s),Ys(n,i);break;case 27:(i&2)!==0&&_M(n.stateNode,n.type,n.memoizedProps);case 5:hn(n,n.return),n.tag!==5&&n.tag!==27||El(n),Ys(n,i);break;case 6:El(n);break;case 26:hn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ce||s.parentNode.removeChild(s),Ys(n,i);break;case 22:n.memoizedState===null&&Ys(n,i);break;case 30:hn(n,n.return),Ys(n,i);break;case 7:hn(n,n.return);default:Ys(n,i)}e=e.sibling}}function Di(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Di(s,a,n),jl(4,a);break;case 1:if(Di(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){me(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Rx(c[s],l)}catch(f){me(i,i.return,f)}}o&&r&64&&yS(a),Yi(a,a.return);break;case 27:(n&2)!==0&&MS(a);case 5:a.tag!==5&&a.tag!==27||Yv(a),Di(s,a,n),o&&i===null&&r&4&&am(a),Yi(a,a.return);break;case 6:Yv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||sn||Dm(Hl(l.ownerDocument),a.type,l),Di(s,a,n),o&&i===null&&r&4&&am(a),Yi(a,a.return);break;case 12:Di(s,a,n);break;case 31:Di(s,a,n),o&&r&4&&NS(s,a);break;case 13:Di(s,a,n),o&&r&4&&LS(s,a);break;case 22:a.memoizedState===null&&Di(s,a,n),Yi(a,a.return);break;case 30:Di(s,a,n),Yi(a,a.return);break;case 7:Yi(a,a.return);default:Di(s,a,n)}t=t.sibling}}function vg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Kl(n))}function yg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function mi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)PS(e,t,n,i),t=t.sibling;else s&&TS(t)}function PS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:mi(e,t,n,i),a&2048&&jl(9,t);break;case 1:mi(e,t,n,i);break;case 3:mi(e,t,n,i),s&&hm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Kl(a)));break;case 12:if(a&2048){mi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){me(t,t.return,c)}}else mi(e,t,n,i);break;case 31:mi(e,t,n,i);break;case 13:mi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ru(o),r._visibility&2?mi(e,t,n,i):Tl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ru(t),r._visibility&2?mi(e,t,n,i):(r._visibility|=2,Cr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&vg(o,t);break;case 24:mi(e,t,n,i),a&2048&&yg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(es(a.child,!0),es(t.child,!0))),mi(e,t,n,i);break;default:mi(e,t,n,i)}}function Cr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Cr(a,r,o,l,s),jl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Cr(a,r,o,l,s):Tl(a,r):(f._visibility|=2,Cr(a,r,o,l,s)),s&&c&2048&&vg(r.alternate,r);break;case 24:Cr(a,r,o,l,s),s&&c&2048&&yg(r.alternate,r);break;default:Cr(a,r,o,l,s)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Tl(n,i),s&2048&&vg(i.alternate,i);break;case 24:Tl(n,i),s&2048&&yg(i.alternate,i);break;default:Tl(n,i)}t=t.sibling}}var Va=8192;function za(e,t,n){if(e.subtreeFlags&Va)for(e=e.child;e!==null;)BS(e,t,n),e=e.sibling}function BS(e,t,n){switch(e.tag){case 26:za(e,t,n),e.flags&Va&&(e.memoizedState!==null?iw(n,Ni,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&My(n,e)));break;case 5:za(e,t,n),e.flags&Va&&(e=e.stateNode,(t&335544128)===t&&My(n,e));break;case 3:case 4:var i=Ni;Ni=Hl(e.stateNode.containerInfo),za(e,t,n),Ni=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Va,Va=16777216,za(e,t,n),Va=i):za(e,t,n));break;case 30:if((e.flags&Va)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,$n===null&&($n=new Map),$n.set(i,s)}za(e,t,n);break;default:za(e,t,n)}}function FS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];an=i,HS(i,e)}FS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zS(e),e=e.sibling}function zS(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&ga(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cu(e)):ol(e);break;default:ol(e)}}function Cu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];an=i,HS(i,e)}FS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Cu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cu(t));break;default:Cu(t)}e=e.sibling}}function HS(e,t){for(;an!==null;){var n=an;switch(n.tag){case 0:case 11:case 15:ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,an=i;else t:for(n=e;an!==null;){i=an;var s=i.sibling,a=i.return;if(CS(i),i===n){an=null;break t}if(s!==null){s.return=a,an=s;break t}an=a}}}var tA={getCacheForType:function(e){var t=dn(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dn(qe).controller.signal}},eA=typeof WeakMap=="function"?WeakMap:Map,re=0,xe=null,Kt=null,$t=0,de=0,Kn=null,ta=!1,_o=!1,xg=!1,Es=0,Ge=0,_a=0,Ja=0,ih=0,ti=0,io=0,Al=null,Gn=null,pm=!1,Th=0,GS=0,sh=1/0,ah=null,ca=null,Fe=0,Ui=null,ir=null,ts=0,mm=0,gm=null,VS=null,Kr=null,Qr=null,jr=null,wl=0,Du=null;function si(){return(re&2)!==0&&$t!==0?$t&-$t:Ot.T!==null?Mg():qy()}function kS(){if(ti===0)if(($t&536870912)===0||Zt){var e=jc;jc<<=1,(jc&3932160)===0&&(jc=262144),ti=e}else ti=536870912;return e=_n.current,e!==null&&(e.flags|=32),ti}function so(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=uM(xs(e.memoizedProps,n))),Qr===null&&(Qr=[]),Qr.push(t.bind(null,i))}}function Xn(e,t,n){(e===xe&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(ao(e,0),ea(e,$t,ti,!1)),Yl(e,n),((re&2)===0||e!==xe)&&(e===xe&&((re&2)===0&&(Ja|=n),Ge===4&&ea(e,$t,ti,!1)),is(e))}function XS(e,t,n){if((re&6)!==0)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),s=i?sA(e,t):pp(e,t,!0),a=i;do{if(s===0){_o&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!nA(n)){s=pp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Al;var l=o.current.memoizedState.isDehydrated;if(l&&(ao(o,r).flags|=256),r=pp(o,r,!1),r!==2&&r!==6){if(xg&&!l){o.errorRecoveryDisabledLanes|=a,Ja|=a,s=4;break t}a=Gn,Gn=s,a!==null&&(Gn===null?Gn=a:Gn.push.apply(Gn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){ao(e,0),ea(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ea(i,t,ti,!ta);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(s=Th+300-ei(),10<s)){if(ea(i,t,ti,!ta),hh(i,0,!0)!==0)break t;ts=t,i.timeoutHandle=Eg(Qv.bind(null,i,n,Gn,ah,pm,t,ti,Ja,io,ta,a,"Throttled",-0,0),s);break t}Qv(i,n,Gn,ah,pm,t,ti,Ja,io,ta,a,null,-0,0)}}break}while(!0);is(e)}function Qv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},$n=null,BS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=Gl.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?Th-ei():(a&4194048)===a?GS-ei():0,v=sw(p,v),v!==null)){ts=a,e.cancelPendingCommit=v($v.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),ea(e,a,r,!c);return}$v(e,t,a,n,i,s,r,o,l,c,f,p)}function nA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ai(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t=Gy(e,t),t&=~ih,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ii(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ky(e,n,t)}function Ah(){return(re&6)===0?($l(0,!1),!1):!0}function Sg(){if(Kt!==null){if(de===0)var e=Kt.return;else e=Kt,gs=lr=null,sg(e),Yr=null,Ol=0,e=Kt;for(;e!==null;)vS(e.alternate,e),e=e.return;Kt=null}}function ao(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,EA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ts=0,Sg(),xe=e,Kt=n=_s(e.current,null),$t=t,de=0,Kn=null,ta=!1,_o=ql(e,t),xg=!1,io=ti=ih=Ja=_a=Ge=0,Gn=Al=null,pm=!1,Es=Gy(e,t),gh(),n}function WS(e,t){Vt=null,Ot.H=Qu,t===mo||t===yh?(t=Ev(),de=3):t===Km?(t=Ev(),de=4):de=t===fg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Kn=t,Kt===null&&(Ge=1,ju(e,xi(t,e.current)))}function qS(){var e=_n.current;return e===null?!0:($t&4194048)===$t?Mn===null:($t&62914560)===$t||($t&536870912)!==0?e===Mn:!1}function YS(){var e=Ot.H;return Ot.H=Qu,e===null?Qu:e}function ZS(){var e=Ot.A;return Ot.A=tA,e}function rh(){Ge=4,ta||($t&4194048)!==$t&&_n.current!==null||(_o=!0),(_a&134217727)===0&&(Ja&134217727)===0||xe===null||ea(xe,$t,ti,!1)}function pp(e,t,n){var i=re;re|=2;var s=YS(),a=ZS();(xe!==e||$t!==t)&&(ah=null,ao(e,t)),t=!1;var r=Ge;t:do try{if(de!==0&&Kt!==null){var o=Kt,l=Kn;switch(de){case 8:Sg(),r=6;break t;case 3:case 2:case 9:case 6:_n.current===null&&(t=!0);var c=de;if(de=0,Kn=null,Vr(e,o,l,c),n&&_o){r=0;break t}break;default:c=de,de=0,Kn=null,Vr(e,o,l,c)}}iA(),r=Ge;break}catch(f){WS(e,f)}while(!0);return t&&e.shellSuspendCounter++,gs=lr=null,re=i,Ot.H=s,Ot.A=a,Kt===null&&(xe=null,$t=0,gh()),r}function iA(){for(;Kt!==null;)JS(Kt)}function sA(e,t){var n=re;re|=2;var i=YS(),s=ZS();xe!==e||$t!==t?(ah=null,sh=ei()+500,ao(e,t)):_o=ql(e,t);t:do try{if(de!==0&&Kt!==null){t=Kt;var a=Kn;e:switch(de){case 1:de=0,Kn=null,Vr(e,t,a,1);break;case 2:case 9:if(bv(a)){de=0,Kn=null,jv(t);break}t=function(){de!==2&&de!==9||xe!==e||(de=7),is(e)},a.then(t,t);break t;case 3:de=7;break t;case 4:de=5;break t;case 7:bv(a)?(de=0,Kn=null,jv(t)):(de=0,Kn=null,Vr(e,t,a,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?xM(r):o.stateNode.complete){de=0,Kn=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,wh(c)):Kt=null}break e}}de=0,Kn=null,Vr(e,t,a,5);break;case 6:de=0,Kn=null,Vr(e,t,a,6);break;case 8:Sg(),Ge=6;break t;default:throw Error(nt(462))}}aA();break}catch(f){WS(e,f)}while(!0);return gs=lr=null,Ot.H=i,Ot.A=s,re=n,Kt!==null?0:(xe=null,$t=0,gh(),Ge)}function aA(){for(;Kt!==null&&!ME();)JS(Kt)}function JS(e){var t=_S(e.alternate,e,Es);e.memoizedProps=e.pendingProps,t===null?wh(e):Kt=t}function jv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hv(n,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=Hv(n,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:sg(t);var i=t;i===on&&(Zt?(Xu(i),i.tag===5&&i.stateNode!=null&&(we=i.stateNode)):(Xu(i),Zt=!0));default:vS(n,t),t=Kt=yx(t,Es),t=_S(n,t,Es)}e.memoizedProps=e.pendingProps,t===null?wh(e):Kt=t}function Vr(e,t,n,i){gs=lr=null,sg(t),Yr=null,Ol=0;var s=t.return;try{if(qT(e,s,t,n,$t)){Ge=1,ju(e,xi(n,e.current)),Kt=null;return}}catch(a){if(s!==null)throw Kt=s,a;Ge=1,ju(e,xi(n,e.current)),Kt=null;return}t.flags&32768?(Zt||i===1?e=!0:_o||($t&536870912)!==0?e=!1:(ta=e=!0,(i===2||i===9||i===3||i===6)&&(i=_n.current,i!==null&&i.tag===13&&(i.flags|=16384))),KS(t,e)):wh(t)}function wh(e){var t=e;do{if((t.flags&32768)!==0){KS(t,ta);return}e=t.return;var n=KT(t.alternate,t,Es);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Ge===0&&(Ge=5)}function KS(e,t){do{var n=QT(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Ge=6,Kt=null}function $v(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do Rh();while(Fe!==0);if((re&6)!==0)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));e===xe&&(Kt=xe=null,$t=0),ir=t,Ui=e,ts=n,gm=s,VS=i,rA(e,t,n,r,o,l,p)}}function rA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(mm=o,o|=Xm,LE(e,n,o,i,s,a),Qr=null,(n&335544064)===n?(jr=OT(e),i=10262):(jr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,fA(zu,function(){return xm(),null})):(e.callbackNode=null,e.callbackPriority=0),eh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=oe.p,oe.p=2,a=re,re|=4;try{jT(e,t,n)}finally{re=a,oe.p=s,Ot.T=i}}Fe=1,eh?Kr=DA(r,e.containerInfo,jr,_m,vm,lA,ym,xm,oA,null,null):(_m(),vm(),ym())}function oA(e){if(Fe!==0){var t=Ui.onRecoverableError;t(e,{componentStack:null})}}function lA(){Fe===3&&(Fe=0,IS(ir,Ui),Fe=4)}function _m(){if(Fe===1){Fe=0;var e=Ui,t=ir,n=ts,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null;var s=oe.p;oe.p=2;var a=re;re|=4;try{pl=nh=!1,US(t,e,n),n=Em;var r=hx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&ux(o.ownerDocument.documentElement,o)){if(l!==null&&km(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),_=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>_&&(r=_,_=b,b=r);var h=mv(o,b),m=mv(o,_);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),b>_?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}uo=!!bm,Em=bm=null}finally{re=a,oe.p=s,Ot.T=i}}e.current=t,Fe=2}}function vm(){if(Fe===2){Fe=0;var e=Ui,t=ir,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ot.T,Ot.T=null;var i=oe.p;oe.p=2;var s=re;re|=4;try{wS(e,t.alternate,t)}finally{re=s,oe.p=i,Ot.T=n}}Fe=3}}function ym(){if(Fe===4||Fe===3){Fe=0;var e=Kr;Kr=null,bE();var t=Ui,n=ir,i=ts,s=VS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Fe=5:(Fe=0,ir=Ui=null,QS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ca=null),Bm(i),n=n.stateNode,ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Wl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ot.T,a=oe.p,oe.p=2,Ot.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ot.T=n,oe.p=a}}if(s=Qr,r=jr,jr=null,s!==null&&(Qr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ts&3)!==0&&Rh(),is(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Du?wl++:(wl=0,Du=t):(wl=0,Du=null),$l(0,!1)}}function QS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function Rh(){return Kr!==null&&(Kr.skipTransition(),Kr=null),_m(),vm(),ym(),xm()}function xm(){if(Fe!==5)return!1;var e=Ui,t=mm;mm=0;var n=Bm(ts),i=Ot.T,s=oe.p;try{oe.p=32>n?32:n,Ot.T=null,n=gm,gm=null;var a=Ui,r=ts;if(Fe=0,ir=Ui=null,ts=0,(re&6)!==0)throw Error(nt(331));var o=re;if(re|=4,zS(a.current),PS(a,a.current,r,n),re=o,$l(0,!1),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Wl,a)}catch{}return!0}finally{oe.p=s,Ot.T=i,QS(e,t)}}function ty(e,t,n){t=xi(n,t),t=$p(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Yl(e,2),is(e))}function me(e,t,n){if(e.tag===3)ty(e,e,n);else for(;t!==null;){if(t.tag===3){ty(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))){e=xi(n,e),n=fS(2),i=ra(t,n,2),i!==null&&(dS(n,i,t,e),Yl(i,2),is(i));break}}t=t.return}}function mp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new eA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(xg=!0,s.add(n),e=cA.bind(null,e,t,n),t.then(e,e))}function cA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&($t&n)===n&&((Ge===4||Ge===3&&($t&62914560)===$t&&300>ei()-Th)&&(re&2)===0?ao(e,0):ih|=n,io===$t&&(io=0)),is(e)}function jS(e,t){t===0&&(t=Vy()),e=or(e,t),e!==null&&(Yl(e,t),is(e))}function uA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jS(e,n)}function hA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),jS(e,n)}function fA(e,t){return Im(e,t)}var ro=null,Dr=null,Sm=!1,oh=!1,gp=!1,na=0;function is(e){e!==Dr&&e.next===null&&(Dr===null?ro=Dr=e:Dr=Dr.next=e),oh=!0,Sm||(Sm=!0,pA())}function $l(e,t){if(!gp&&oh){gp=!0;do for(var n=!1,i=ro;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ii(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ey(i,a))}else a=$t,a=hh(i,i===xe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ql(i,a)||(n=!0,ey(i,a));i=i.next}while(n);gp=!1}}function dA(){$S()}function $S(){oh=Sm=!1;var e=0;na!==0&&bA()&&(e=na);for(var t=ei(),n=null,i=ro;i!==null;){var s=i.next,a=tM(i,t);a===0?(i.next=null,n===null?ro=s:n.next=s,s===null&&(Dr=n)):(n=i,(e!==0||(a&3)!==0)&&(oh=!0)),i=s}Fe!==0&&Fe!==5||$l(e,!1),na!==0&&(na=0)}function tM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ii(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=NE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=xe,n=$t,n=hh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Zd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Zd(i),Bm(n)){case 2:case 8:n=zy;break;case 32:n=zu;break;case 268435456:n=Hy;break;default:n=zu}return i=eM.bind(null,e),n=Im(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Zd(i),e.callbackPriority=2,e.callbackNode=null,2}function eM(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rh()&&e.callbackNode!==n)return null;var i=$t;return i=hh(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(XS(e,i,t),tM(e,ei()),e.callbackNode!=null&&e.callbackNode===n?eM.bind(null,e):null)}function ey(e,t){if(Rh())return null;XS(e,t,!0)}function pA(){TA(function(){(re&6)!==0?Im(Fy,dA):$S()})}function Mg(){if(na===0){var e=$a;e===0&&(e=Qc,Qc<<=1,(Qc&261888)===0&&(Qc=256)),na=e}return na}function ny(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vu(e)}function mA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=ny((s[qn]||null).action),r=i.submitter;r&&(t=(t=r[qn]||null)?ny(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new dh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(na!==0){var l=new FormData(s,r);Qp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Qp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(fu=0;fu<Hp.length;fu++)du=Hp[fu],iy=du.toLowerCase(),sy=du[0].toUpperCase()+du.slice(1),Oi(iy,"on"+sy);var du,iy,sy,fu;Oi(dx,"onAnimationEnd");Oi(px,"onAnimationIteration");Oi(mx,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(AT,"onTransitionRun");Oi(wT,"onTransitionStart");Oi(RT,"onTransitionCancel");Oi(gx,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function nM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}}}}function Jt(e,t){var n=t[j_];n===void 0&&(n=t[j_]=new Set);var i=e+"__bubble";n.has(i)||(iM(t,e,2,!1),n.add(i))}function _p(e,t,n){var i=0;t&&(i|=4),iM(n,e,i,t)}var pu="_reactListening"+Math.random().toString(36).slice(2);function bg(e){if(!e[pu]){e[pu]=!0,Zy.forEach(function(n){n!=="selectionchange"&&(gA.has(n)||_p(n,!1,e),_p(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pu]||(t[pu]=!0,_p("selectionchange",!1,t))}}function iM(e,t,n,i){switch(wM(t)){case 2:var s=lw;break;case 8:s=cw;break;default:s=Dg}n=s.bind(null,t,n,e),s=void 0,!Pp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ka(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}nx(function(){var c=a,f=zm(n),p=[];t:{var u=_x.get(e);if(u!==void 0){var d=dh,v=e;switch(e){case"keypress":if(xu(n)===0)break t;case"keydown":case"keyup":d=nT;break;case"focusin":v="focus",d=tp;break;case"focusout":v="blur",d=tp;break;case"beforeblur":case"afterblur":d=tp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=XE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=oT;break;case dx:case px:case mx:d=YE;break;case gx:d=cT;break;case"scroll":case"scrollend":d=VE;break;case"wheel":d=hT;break;case"copy":case"cut":case"paste":d=JE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=lv;break;case"submit":d=aT;break;case"toggle":case"beforetoggle":d=dT}var b=(t&4)!==0,_=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,x;m!==null;){var S=m;if(x=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||x===null||h===null||(S=Cl(m,h),S!=null&&b.push(Fl(m,S,x))),_)break;m=m.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Ip&&(v=n.relatedTarget||n.fromElement)&&(ka(v)||v[fo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?ka(d):null,d!==null&&(_=Xl(d),b=d.tag,d!==_||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=rv,S="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=lv,S="onPointerLeave",h="onPointerEnter",m="pointer"),_=u==null?v:fl(u),x=d==null?v:fl(d),v=new b(S,m+"leave",u,n,f),v.target=_,v.relatedTarget=x,S=null,ka(f)===c&&(b=new b(h,m+"enter",d,n,f),b.target=x,b.relatedTarget=_,S=b),_=S,b=u&&d?bp(u,d,_A):null,u!==null&&ay(p,v,u,b,!1),d!==null&&_!==null&&ay(p,_,d,b,!0)))}t:{if(u=c?fl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=fv;else if(hv(u))if(lx)T=bT;else{T=ST;var A=xT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Fm(c.elementType)&&(T=fv):T=MT;if(T&&(T=T(e,c))){ox(p,T,n,f);break t}A&&A(e,u,c)}switch(A=c?fl(c):window,e){case"focusin":(hv(A)||A.contentEditable==="true")&&(Pr=A,Fp=c,_l=null);break;case"focusout":_l=Fp=Pr=null;break;case"mousedown":zp=!0;break;case"contextmenu":case"mouseup":case"dragend":zp=!1,gv(p,n,f);break;case"selectionchange":if(TT)break;case"keydown":case"keyup":gv(p,n,f)}var g;if(Vm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Ir?ax(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(sx&&n.locale!=="ko"&&(Ir||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ir&&(g=ix()):(js=f,Hm="value"in js?js.value:js.textContent,Ir=!0)),A=lh(c,E),0<A.length&&(E=new ov(E,e,null,n,f),p.push({event:E,listeners:A}),g?E.data=g:(g=rx(n),g!==null&&(E.data=g)))),(g=mT?gT(e,n):_T(e,n))&&(E=lh(c,"onBeforeInput"),0<E.length&&(A=new ov("onBeforeInput","beforeinput",null,n,f),p.push({event:A,listeners:E}),A.data=g)),mA(p,e,c,n,f)}nM(p,t)})}function Fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Cl(e,n),s!=null&&i.unshift(Fl(e,s,a)),s=Cl(e,t),s!=null&&i.push(Fl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function _A(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ay(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Cl(n,a),c!=null&&r.unshift(Fl(n,c,l))):s||(c=Cl(n,a),c!=null&&r.push(Fl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var vA=/\r\n?/g,yA=/\u0000|\uFFFD/g;function ry(e){return(typeof e=="string"?e:""+e).replace(vA,`
`).replace(yA,"")}function sM(e,t){return t=ry(t),ry(e)===t}function pe(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||eo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&eo(e,""+i);else return;break;case"className":tu(e,"class",i);break;case"tabIndex":tu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(e,n,i);break;case"style":ex(e,i,a);return;case"data":if(t!=="object"){tu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&pe(e,t,"name",s.name,s,null),pe(e,t,"formEncType",s.formEncType,s,null),pe(e,t,"formMethod",s.formMethod,s,null),pe(e,t,"formTarget",s.formTarget,s,null)):(pe(e,t,"encType",s.encType,s,null),pe(e,t,"method",s.method,s,null),pe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ki);return;case"onScroll":i!=null&&Jt("scroll",e);return;case"onScrollEnd":i!=null&&Jt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(nt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Jt("beforetoggle",e),Jt("toggle",e),_u(e,"popover",i);break;case"xlinkActuate":ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ds(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ds(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ds(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ds(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":_u(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=HE.get(n)||n,_u(e,n,i);else return}se=!0}function Mm(e,t,n,i,s,a){switch(n){case"style":ex(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(nt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")eo(e,i);else if(typeof i=="number"||typeof i=="bigint")eo(e,""+i);else return;break;case"onScroll":i!=null&&Jt("scroll",e);return;case"onScrollEnd":i!=null&&Jt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Jy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[qn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}se=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):_u(e,n,i)}return}se=!0}function gn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Jt("error",e),Jt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:pe(e,t,a,r,n,null)}}s&&pe(e,t,"srcSet",n.srcSet,n,null),i&&pe(e,t,"src",n.src,n,null);return;case"input":Jt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(nt(137,t));break;default:pe(e,t,i,f,n,null)}}jy(e,a,o,l,c,r,s,!1);return;case"select":Jt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:pe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Xr(e,!!i,t,!1):n!=null&&Xr(e,!!i,n,!0);return;case"textarea":Jt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:pe(e,t,r,o,n,null)}tx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":pe(e,t,l,i,n,null));return;case"dialog":Jt("beforetoggle",e),Jt("toggle",e),Jt("cancel",e),Jt("close",e);break;case"iframe":case"object":Jt("load",e);break;case"video":case"audio":for(i=0;i<Bl.length;i++)Jt(Bl[i],e);break;case"image":Jt("error",e),Jt("load",e);break;case"details":Jt("toggle",e);break;case"embed":case"source":case"link":Jt("error",e),Jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:pe(e,t,c,i,n,null)}return;default:if(Fm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Mm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&pe(e,t,o,i,n,null))}var xA={};function SA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||pe(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(se=!0),a=d;break;case"name":d!==p&&(se=!0),s=d;break;case"checked":d!==p&&(se=!0),c=d;break;case"defaultChecked":d!==p&&(se=!0),f=d;break;case"value":d!==p&&(se=!0),r=d;break;case"defaultValue":d!==p&&(se=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:d!==p&&pe(e,t,u,d,i,p)}}Op(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||pe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(se=!0),u=a;break;case"defaultValue":a!==l&&(se=!0),o=a;break;case"multiple":a!==l&&(se=!0),r=a;default:a!==l&&pe(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Xr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Xr(e,!!n,t,!0):Xr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(se=!0),u=s;break;case"defaultValue":s!==a&&(se=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(nt(91));break;default:s!==a&&pe(e,t,r,s,i,a)}$y(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:pe(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(se=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):pe(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&pe(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:pe(e,t,c,u,i,d)}return;default:if(Fm(t)){for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!==void 0&&!i.hasOwnProperty(_)&&Mm(e,t,_,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Mm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&pe(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||pe(e,t,p,u,i,d)}function oy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&oy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&oy(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bm=null,Em=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function ly(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function aM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rM(e,t,n,i){return n=zl(n).createElement(e),n[fn]=i,n[qn]=t,gn(n,e,t),rn(n),n}function Tm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yp=null;function bA(){var e=window.event;return e&&e.type==="popstate"?e===yp?!1:(yp=e,!0):(yp=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,EA=typeof clearTimeout=="function"?clearTimeout:void 0,cy=typeof Promise=="function"?Promise:void 0,uy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Eg,TA=typeof queueMicrotask=="function"?queueMicrotask:typeof cy<"u"?function(e){return cy.resolve(null).then(e).catch(AA)}:Eg;function AA(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function hy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),ho(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Sp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Zl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Sp(e.ownerDocument.body);n=s}while(n);ho(t)}function fy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function oM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function lM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function cM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Am(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return cM(t,n,e)}function wA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return cM(t,n,e)}function RA(e){return e.documentElement.clientHeight}function CA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function DA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(RA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var _=e.suspenseyImages,h=0,m=0;m<_.length;m++){var x=_[m];if(!x.complete){var S=x.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<u.innerHeight&&S.left<u.innerWidth){if(h+=SM(x),h>Uu){b.length=v;break}x=new Promise(CA.bind(x)),b.push(x)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,_=b.pseudoElement;if(_!=null&&_.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=_=void 0,m=!0,x=0;x<v.length;x++){var S=v[x],T=S.width;if(_===void 0)_=T;else if(_!==T){m=!1;break}if(T=S.height,h===void 0)h=T;else if(h!==T){m=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}m&&_!==void 0&&h!==void 0&&(b.setKeyframes(v),m=getComputedStyle(b.target,b.pseudoElement),m.width!==_||m.height!==h)&&(m=v[0],m.width=_,m.height=h,m=v[v.length-1],m.width=_,m.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Xa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Xa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Se({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Xa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Xa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uM(e){return{name:e,group:new Xa("group",e),imagePair:new Xa("image-pair",e),old:new Xa("old",e),new:new Xa("new",e)}}function ri(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(hM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=oo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Wn(this._fragmentFiber.child,!1,NA,e,o,i)}this._eventListeners=a}};function NA(e,t,n,i){return Ke(e).addEventListener(t,n,i),!1}ri.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=hM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=oo(s.optionsOrUseCapture),Wn(this._fragmentFiber.child,!1,LA,e,n,s),i.splice(t,1),a!==null&&a()}};function LA(e,t,n,i){return Ke(e).removeEventListener(t,n,i),!1}function oo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function dy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function hM(e,t,n,i){if(e.length===0)return-1;i=dy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&dy(a.optionsOrUseCapture)===i)return s}return-1}ri.prototype.dispatchEvent=function(e){var t=sr(this._fragmentFiber);if(t===null)return!0;t=Ke(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,oo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,oo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ri.prototype.focus=function(e){Wn(this._fragmentFiber.child,!0,fM,e,void 0,void 0)};function fM(e,t){return e.tag===6?!1:(e=Ke(e),XA(e,t))}ri.prototype.focusLast=function(e){var t=[];Wn(this._fragmentFiber.child,!0,Tg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!fM(t[n],e);n--);};function Tg(e,t){return t.push(e),!1}ri.prototype.blur=function(){var e=sr(this._fragmentFiber);e!==null&&(e=Ke(e),e=zl(e).activeElement,e!==null&&Wn(this._fragmentFiber.child,!1,UA,e,void 0,void 0))};function UA(e,t){return e.tag===6?!1:(e=Ke(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ri.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Wn(this._fragmentFiber.child,!1,OA,e,void 0,void 0)};function OA(e,t){return e.tag===6||(e=Ke(e),t.observe(e)),!1}ri.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Wn(this._fragmentFiber.child,!1,IA,e,void 0,void 0);for(var n=t=0;n<Li.length;n++){var i=Li[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Li[t++]=i}Li.length=t}};function IA(e,t){return e.tag===6||(e=Ke(e),t.unobserve(e)),!1}var Li=[],xp=!1;function PA(e,t,n){Li.push({fragmentInstance:e,observer:t,instance:n}),xp||(xp=!0,WA(function(){xp=!1;var i=Li;Li=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ri.prototype.getClientRects=function(){var e=[];return Wn(this._fragmentFiber.child,!1,BA,e,void 0,void 0),e};function BA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ke(e),t.push.apply(t,e.getClientRects());return!1}ri.prototype.getRootNode=function(e){var t=sr(this._fragmentFiber);return t===null?this:Ke(t).getRootNode(e)};ri.prototype.compareDocumentPosition=function(e){var t=sr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Wn(this._fragmentFiber.child,!1,Tg,n,void 0,void 0);var i=Ke(t);if(n.length===0){if(n=i,q_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Oy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ke(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ke(n[0]),s=Ke(n[n.length-1]);var a=q_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||FA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function FA(e,t,n,i,s){var a=ka(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=sr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=bp(n,a,Y_),t===null?t=!1:(Wn(t,!0,pE,a,n),a=Nr,Nr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=bp(i,a,Y_),t===null?t=!1:(Wn(t,!0,mE,a,i),a=Nr,Mp=Nr=null,t=a!==null)),t):!1}function py(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(nt(566));var t=[];Wn(this._fragmentFiber.child,!1,Tg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Oy(this._fragmentFiber);if(i=n?i[1]||i[0]||sr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ke(i),py(e,n);return}if(i=Ke(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ke(s),py(s,n)):Ke(s).scrollIntoView(e),i+=n?-1:1}};function zA(e,t){return e=Ke(e),dM(e,t),!1}function dM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function pM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Li.length;o++){var l=Li[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Li[r++]=l)}Li.length=r,a.observe(e)}),dM(e,t))}function HA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?PA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wm(n),fh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function GA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function VA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mi(e.nextSibling),e===null))return null;return e}function mM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mi(e.nextSibling),e===null))return null;return e}function Rm(e){return e.data==="$?"||e.data==="$~"}function Ag(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cm=null;function my(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function gy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function XA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function WA(e){uy(function(){uy(function(t){return e(t)})})}function gM(e,t,n){switch(t=zl(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function _M(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&pe(e,t,i,null,xA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ki&&(e.onclick=null),fh(e)}function Sp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fh(e)}var bi=new Map,_y=new Set;function Hl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ws=oe.d;oe.d={f:qA,r:YA,D:ZA,C:JA,L:KA,m:QA,X:$A,S:jA,M:tw};function qA(){var e=ws.f(),t=Ah();return e||t}function YA(e){var t=po(e);t!==null&&t.tag===5&&t.type==="form"?eS(t):ws.r(e)}var vo=typeof document>"u"?null:document;function vM(e,t,n){var i=vo;if(i&&typeof t=="string"&&t){var s=yi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),_y.has(s)||(_y.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gn(t,"link",e),rn(t),i.head.appendChild(t)))}}function ZA(e){ws.D(e),vM("dns-prefetch",e,null)}function JA(e,t){ws.C(e,t),vM("preconnect",e,t)}function KA(e,t,n){ws.L(e,t,n);var i=vo;if(i&&e&&t){var s='link[rel="preload"][as="'+yi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+yi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+yi(n.imageSizes)+'"]')):s+='[href="'+yi(e)+'"]';var a=s;switch(t){case"style":a=lo(e);break;case"script":a=yo(e)}if(!(bi.has(a)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),bi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(tc(a))||t==="script"&&i.querySelector(ec(a))))){var r=i.createElement("link");gn(r,"link",e),t==="style"&&(r[Hu]=!0,r.onload=r.onerror=function(){Yy(r)}),rn(r),i.head.appendChild(r)}}}function QA(e,t){ws.m(e,t);var n=vo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+yi(i)+'"][href="'+yi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=yo(e)}if(!bi.has(a)&&(e=Se({rel:"modulepreload",href:e},t),bi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ec(a)))return}i=n.createElement("link"),gn(i,"link",e),rn(i),n.head.appendChild(i)}}}function jA(e,t,n){ws.S(e,t,n);var i=vo;if(i&&e){var s=kr(i).hoistableStyles,a=lo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(tc(a)))o.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=bi.get(a))&&wg(e,n);var l=r=i.createElement("link");rn(l),gn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Nu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function $A(e,t){ws.X(e,t);var n=vo;if(n&&e){var i=kr(n).hoistableScripts,s=yo(e),a=i.get(s);a||(a=n.querySelector(ec(s)),a||(e=Se({src:e,async:!0},t),(t=bi.get(s))&&Rg(e,t),a=n.createElement("script"),rn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function tw(e,t){ws.M(e,t);var n=vo;if(n&&e){var i=kr(n).hoistableScripts,s=yo(e),a=i.get(s);a||(a=n.querySelector(ec(s)),a||(e=Se({src:e,async:!0,type:"module"},t),(t=bi.get(s))&&Rg(e,t),a=n.createElement("script"),rn(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function vy(e,t,n,i){var s=(s=ia.current)?Hl(s):null;if(!s)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=lo(n.href),t=kr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=lo(n.href);var a=kr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(tc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=bi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bi.set(e,a)),ew(s,e,a,r.state))),t&&i===null)throw Error(nt(528,""));return r}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=yo(n),t=kr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function lo(e){return'href="'+yi(e)+'"'}function tc(e){return'link[rel="stylesheet"]['+e+"]"}function yM(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function ew(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Hu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Hu]=!0,t.onload=t.onerror=Yy.bind(null,t),gn(t,"link",n),rn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function yo(e){return'[src="'+yi(e)+'"]'}function ec(e){return"script[async]"+e}function yy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+yi(n.href)+'"]');if(i)return t.instance=i,rn(i),i;var s=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),gn(i,"style",s),Nu(i,n.precedence,e),t.instance=i;case"stylesheet":s=lo(n.href);var a=e.querySelector(tc(s));if(a)return t.state.loading|=4,t.instance=a,rn(a),a;i=yM(n),(s=bi.get(s))&&wg(i,s),a=(e.ownerDocument||e).createElement("link"),rn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),t.state.loading|=4,Nu(a,n.precedence,e),t.instance=a;case"script":return a=yo(n.src),(s=e.querySelector(ec(a)))?(t.instance=s,rn(s),s):(i=n,(s=bi.get(a))&&(i=Se({},n),Rg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),rn(s),gn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nu(i,n.precedence,e));return t.instance}function Nu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lu=null;function xy(e,t,n){if(Lu===null){var i=new Map,s=Lu=new Map;s.set(n,i)}else s=Lu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Zl]||a[fn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function xM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function SM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function My(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=SM(t),e.suspenseyImages.push(t)),e=aw.bind(e),t.decode().then(e,e))}function iw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=lo(i.href),a=t.querySelector(tc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,rn(a);return}a=t.ownerDocument||t,i=yM(i),(s=bi.get(s))&&wg(i,s),a=a.createElement("link"),rn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function sw(e,t){return e.stylesheets&&e.count===0&&Ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*MA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function MM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ou(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Gl(){this.count--,MM(this)}function aw(){this.imgCount--,MM(this)}var ch=null;function Ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ch=new Map,t.forEach(rw,e),ch=null,Gl.call(e))}function rw(e,t){if(!(t.state.loading&4)){var n=ch.get(e);if(n)var i=n.get(null);else{n=new Map,ch.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Gl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var co={$$typeof:Ji,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function ow(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.hiddenUpdates=Jd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function bM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new ow(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=kn(3,null,null,t),e.current=a,a.stateNode=e,t=Zm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Qm(a),e}function EM(e){return e?(e=zr,e):zr}function TM(e,t,n,i,s,a){s=EM(s),i.context===null?i.context=s:i.pendingContext=s,i=aa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ra(e,i,t),n!==null&&(Xn(n,e,t),yl(n,e,t))}function by(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cg(e,t){by(e,t),(e=e.alternate)&&by(e,t)}function AM(e){if(e.tag===13||e.tag===31){var t=or(e,67108864);t!==null&&Xn(t,e,67108864),Cg(e,67108864)}}function Ey(e){if(e.tag===13||e.tag===31){var t=si();t=Pm(t);var n=or(e,t);n!==null&&Xn(n,e,t),Cg(e,t)}}var uo=!0;function lw(e,t,n,i){var s=Ot.T;Ot.T=null;var a=oe.p;try{oe.p=2,Dg(e,t,n,i)}finally{oe.p=a,Ot.T=s}}function cw(e,t,n,i){var s=Ot.T;Ot.T=null;var a=oe.p;try{oe.p=8,Dg(e,t,n,i)}finally{oe.p=a,Ot.T=s}}function Dg(e,t,n,i){if(uo){var s=Nm(i);if(s===null)vp(e,t,i,uh,n),Ty(e,i);else if(hw(s,e,t,n,i))i.stopPropagation();else if(Ty(e,i),t&4&&-1<uw.indexOf(e)){for(;s!==null;){var a=po(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ha(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ii(r);o.entanglements[1]|=l,r&=~l}is(a),(re&6)===0&&(sh=ei()+500,$l(0,!1))}}break;case 31:case 13:o=or(a,2),o!==null&&Xn(o,a,2),Ah(),Cg(a,2)}if(a=Nm(i),a===null&&vp(e,t,i,uh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else vp(e,t,i,null,n)}}function Nm(e){return e=zm(e),Ng(e)}var uh=null;function Ng(e){if(uh=null,e=ka(e),e!==null){var t=Xl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ny(t),e!==null)return e;e=null}else if(n===31){if(e=Ly(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return uh=e,null}function wM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(EE()){case Fy:return 2;case zy:return 8;case zu:case TE:return 32;case Hy:return 268435456;default:return 32}default:return 32}}var Lm=!1,ua=null,ha=null,fa=null,Vl=new Map,kl=new Map,Ks=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ty(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function ll(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=po(t),t!==null&&AM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function hw(e,t,n,i,s){switch(t){case"focusin":return ua=ll(ua,e,t,n,i,s),!0;case"dragenter":return ha=ll(ha,e,t,n,i,s),!0;case"mouseover":return fa=ll(fa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Vl.set(a,ll(Vl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,kl.set(a,ll(kl.get(a)||null,e,t,n,i,s)),!0}return!1}function RM(e){var t=ka(e.target);if(t!==null){var n=Xl(t);if(n!==null){if(t=n.tag,t===13){if(t=Ny(n),t!==null){e.blockedOn=t,Q_(e.priority,function(){Ey(n)});return}}else if(t===31){if(t=Ly(n),t!==null){e.blockedOn=t,Q_(e.priority,function(){Ey(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ip=i,n.target.dispatchEvent(i),Ip=null}else return t=po(n),t!==null&&AM(t),e.blockedOn=n,!1;t.shift()}return!0}function Ay(e,t,n){Iu(e)&&n.delete(t)}function fw(){Lm=!1,ua!==null&&Iu(ua)&&(ua=null),ha!==null&&Iu(ha)&&(ha=null),fa!==null&&Iu(fa)&&(fa=null),Vl.forEach(Ay),kl.forEach(Ay)}function mu(e,t){e.blockedOn===t&&(e.blockedOn=null,Lm||(Lm=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,fw)))}var gu=null;function wy(e){gu!==e&&(gu=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ng(i||n)===null)continue;break}var a=po(n);a!==null&&(e.splice(t,3),t-=3,Qp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ho(e){function t(l){return mu(l,e)}ua!==null&&mu(ua,e),ha!==null&&mu(ha,e),fa!==null&&mu(fa,e),Vl.forEach(t),kl.forEach(t);for(var n=0;n<Ks.length;n++){var i=Ks[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ks.length&&(n=Ks[0],n.blockedOn===null);)RM(n),n.blockedOn===null&&Ks.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[qn]||null;if(typeof a=="function")r||wy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[qn]||null)o=r.formAction;else if(Ng(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),wy(n)}}}function CM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Lg(e){this._internalRoot=e}Ch.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=si();TM(n,i,e,t,null,null)};Ch.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;TM(e.current,2,null,e,null,null),Ah(),t[fo]=null}};function Ch(e){this._internalRoot=e}Ch.prototype.unstable_scheduleHydration=function(e){if(e){var t=qy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ks.length&&t!==0&&t<Ks[n].priority;n++);Ks.splice(n,0,e),n===0&&RM(e)}};var Ry=Cy.version;if(Ry!=="19.3.1")throw Error(nt(527,Ry,"19.3.1"));oe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=dE(t),e=e!==null?Uy(e):null,e=e===null?null:e.stateNode,e};var dw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(cl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!cl.isDisabled&&cl.supportsFiber))try{Wl=cl.inject(dw),ni=cl}catch{}var cl;Dh.createRoot=function(e,t){if(!Dy(e))throw Error(nt(299));var n=!1,i="",s=cS,a=uS,r=hS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=bM(e,1,!1,null,null,n,i,null,s,a,r,CM),e[fo]=t.current,bg(e),new Lg(t)};Dh.hydrateRoot=function(e,t,n){if(!Dy(e))throw Error(nt(299));var i=!1,s="",a=cS,r=uS,o=hS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=bM(e,1,!0,t,n??null,i,s,l,a,r,o,CM),t.context=EM(null),n=t.current,i=si(),i=Pm(i),s=aa(i),s.callback=null,ra(n,s,i),n=i,t.current.lanes=n,Yl(t,n),is(t),e[fo]=t.current,bg(e),new Ch(t)};Dh.version="19.3.1"});var UM=Vs((gN,LM)=>{"use strict";function NM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NM)}catch(e){console.error(e)}}NM(),LM.exports=DM()});var Jn=$o(Ba()),Nb=$o(UM());var Yn=$o(Ba()),pw=Math.PI*2,Ug=[{src:"https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/5f084e5a-2e3f-4239-be1a-5084a6dcef00/w=800"}],mw={images:Ug,turns:3.5,speed:2,spacing:5,spread:6,imageSize:200,sizeAttenuation:2,fadeIn:20,fadeOut:0,cornerRadius:5};function Nh(e){e={...mw,...e};let{images:t=Ug,turns:n=3.5,speed:i=2,spacing:s=5,spread:a=6,sizeAttenuation:r=2,imageSize:o=200,fadeIn:l=20,fadeOut:c=0,cornerRadius:f=5,style:p={}}=e,u=(0,Yn.useRef)(null),d=(0,Yn.useRef)(null),v=(0,Yn.useRef)(0),b=(0,Yn.useRef)(0),_=(0,Yn.useRef)(0),h=(0,Yn.useRef)(!1),m=(0,Yn.useRef)([]),x=t.length>0?t:Ug,S=x.map(T=>T?.src||"").join("|");return(0,Yn.useEffect)(()=>{m.current=x.map(T=>{if(!T?.src)return null;let A=new Image;return T.src.startsWith("data:")||(A.crossOrigin="anonymous"),A.src=T.src,A})},[S]),(0,Yn.useEffect)(()=>{let T=d.current,A=u.current;if(!T||!A)return;let g=T.getContext("2d");if(!g)return;let E=Math.min(2,typeof window<"u"&&window.devicePixelRatio||1),I=0,C=0,P=()=>{I=A.clientWidth||600,C=A.clientHeight||600,T.width=Math.floor(I*E),T.height=Math.floor(C*E),T.style.width=`${I}px`,T.style.height=`${C}px`};P();let V=new ResizeObserver(P);V.observe(A);let J=(tt,et)=>{let St=tt*n*pw,Bt=et*(1-tt);return{x:Bt*Math.cos(St),y:-Bt*Math.sin(St)}},D=2e3,W=new Float32Array(D+1),j=J(0,1);for(let tt=1;tt<=D;tt++){let et=J(tt/D,1),St=et.x-j.x,Bt=et.y-j.y;W[tt]=W[tt-1]+Math.sqrt(St*St+Bt*Bt),j=et}let q=W[D]||1,at=1024,O=new Float32Array(at+1),H=0;for(let tt=0;tt<=at;tt++){let et=tt/at*q;for(;H<D&&W[H+1]<et;)H++;let St=W[H+1]-W[H],Bt=St>0?(et-W[H])/St:0;O[tt]=(H+Bt)/D}let Z=tt=>{let et=Math.max(0,Math.min(at,tt*at)),St=Math.floor(et),Bt=O[St],bt=O[Math.min(St+1,at)];return Bt+(bt-Bt)*(et-St)},it=(tt,et,St,Bt,bt,kt)=>{let Yt=Math.min(kt,Bt/2,bt/2);tt.beginPath(),tt.moveTo(et+Yt,St),tt.arcTo(et+Bt,St,et+Bt,St+bt,Yt),tt.arcTo(et+Bt,St+bt,et,St+bt,Yt),tt.arcTo(et,St+bt,et,St,Yt),tt.arcTo(et,St,et+Bt,St,Yt),tt.closePath()},dt=!0,B=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,ot=tt=>{if(!dt){v.current=0;return}let et=_.current?(tt-_.current)/1e3:0;_.current=tt;let St=Math.min(et,.1),Bt=B?0:h.current?i*.35:i;b.current=(b.current+Bt*St)%100;let bt=b.current;g.setTransform(E,0,0,E,0,0),g.clearRect(0,0,I,C);let kt=I/2,Yt=C/2,Ut=.48*Math.min(I,C)*(1+(a-1)*.18),ze=m.current,Ce=ze.length||1,ke=Math.max(.005,s*.5/100),le=Math.min(400,Math.ceil(1/ke)+2),Rn=bt/100,_e=[];for(let Me=0;Me<le;Me++){let ve=((Rn+Me*ke)%1+1)%1,Pe=Z(ve);_e.push({tt:ve*100,n:Pe,img:Me%Ce})}_e.sort((Me,ve)=>Me.n-ve.n);for(let Me=0;Me<_e.length;Me++){let{tt:ve,n:Pe,img:L}=_e[Me],Le=J(Pe,Ut),he=Math.sqrt(Le.x*Le.x+Le.y*Le.y),ie=1;if(l>0&&ve<l?ie=ve/l:c>0&&ve>100-c&&(ie=(100-ve)/c),ie<.01)continue;let gt=r>0?Math.pow(Math.min(he/Ut,1),r*.5):1,be=J(Math.min(Pe+.001,1),Ut),Dt=Math.atan2(be.y-Le.y,be.x-Le.x),Ct=ze[L],w=Ct&&Ct.complete&&Ct.naturalWidth>0,y=w?Ct.naturalWidth/Ct.naturalHeight:1.45,U=o*gt,st=U/y;y<1&&(st=o*gt,U=st*y);let Q=kt+Le.x,ft=Yt+Le.y,mt=f/20*(Math.min(U,st)/2);g.save(),g.translate(Q,ft),g.rotate(Dt),g.globalAlpha=ie,it(g,-U/2,-st/2,U,st,mt),g.clip(),w?g.drawImage(Ct,-U/2,-st/2,U,st):(g.fillStyle=`hsl(${L*360/Ce}, 65%, 55%)`,g.fillRect(-U/2,-st/2,U,st)),g.restore()}v.current=requestAnimationFrame(ot)},rt=typeof IntersectionObserver<"u"?new IntersectionObserver(([tt])=>{dt=tt.isIntersecting,dt&&!v.current&&(_.current=0,v.current=requestAnimationFrame(ot))}):null;return rt?.observe(A),_.current=0,v.current=requestAnimationFrame(ot),()=>{cancelAnimationFrame(v.current),rt?.disconnect(),V.disconnect()}},[S,n,i,s,a,r,o,l,c,f]),Yn.default.createElement("div",{ref:u,onPointerEnter:()=>{h.current=!0},onPointerLeave:()=>{h.current=!1},style:{...p,width:"100%",height:"100%",overflow:"hidden",position:"relative"}},Yn.default.createElement("canvas",{ref:d,style:{display:"block"}}))}Nh.displayName="Spiral Images";var Vc=$o(Ba()),tn=$o(Ba());var r1=0,u0=1,o1=2;var wc=1,If=2,qo=3,La=0,zn=1,wi=2,gr=0,Yo=1,h0=2,f0=3,d0=4,l1=5;var _r=100,c1=101,u1=102,h1=103,f1=104,d1=200,p1=201,m1=202,g1=203,p0=204,m0=205,_1=206,v1=207,y1=208,x1=209,S1=210,M1=211,b1=212,E1=213,T1=214,ef=0,nf=1,sf=2,Io=3,af=4,rf=5,of=6,lf=7,g0=0,A1=1,w1=2,ls=0,_0=1,v0=2,y0=3,Rc=4,x0=5,S0=6,M0=7;var b0=300,vr=301,Zo=302,Pf=303,Bf=304,cf=1e3,ui=1001,uf=1002,cn=1003,R1=1004;var Cc=1005;var Bn=1006,Ff=1007;var Bs=1008;var Zn=1009,E0=1010,T0=1011,Jo=1012,zf=1013,zi=1014,Hi=1015,Gi=1016,Hf=1017,Gf=1018,yr=1020,A0=35902,w0=35899,R0=1021,C0=1022,Vi=1023,Os=1026,Fs=1027,D0=1028,Vf=1029,Ua=1030,kf=1031;var Xf=1033,Dc=33776,Nc=33777,Lc=33778,Uc=33779,Wf=35840,qf=35841,Yf=35842,Zf=35843,Jf=36196,Kf=37492,Qf=37496,jf=37488,$f=37489,Oc=37490,td=37491,ed=37808,nd=37809,id=37810,sd=37811,ad=37812,rd=37813,od=37814,ld=37815,cd=37816,ud=37817,hd=37818,fd=37819,dd=37820,pd=37821,md=36492,gd=36494,_d=36495,vd=36283,yd=36284,Ic=36285,xd=36286;var rc=2300,hf=2301,jh=2302,n0=2303,i0=2400,s0=2401,a0=2402;var C1=3200;var Sd=0,D1=1,zs="",Tn="srgb",oc="srgb-linear",lc="linear",ue="srgb";var $h=7680;var N1=519,L1=512,U1=513,O1=514,N0=515,I1=516,P1=517,L0=518,U0=519,B1=35044;var O0="300 es",Ti=2e3,Po=2001;function gw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _w(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Bo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function F1(){let e=Bo("canvas");return e.style.display="block",e}var OM={},Fo=null;function I0(...e){let t="THREE."+e.shift();Fo?Fo("log",t,...e):console.log(t,...e)}function z1(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=z1(e);let t="THREE."+e.shift();if(Fo)Fo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function It(...e){e=z1(e);let t="THREE."+e.shift();if(Fo)Fo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pr(...e){let t=e.join(" ");t in OM||(OM[t]=!0,Lt(...e))}function H1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var G1={[ef]:ef,[sf]:of,[af]:af,[Io]:rf,[nf]:nf,[of]:sf,[lf]:lf,[rf]:Io},rs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Og=Math.PI/180,ff=180/Math.PI;function Pc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[e&255]+bn[e>>8&255]+bn[e>>16&255]+bn[e>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function ee(e,t,n){return Math.max(t,Math.min(n,e))}function vw(e,t){return(e%t+t)%t}function Ig(e,t,n){return(1-n)*e+n*t}function V1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function P0(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yw(e,t){if(t.constructor===Float32Array)return e;let n=P0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function xw(e,t){if(t.constructor===Float32Array)return e;let n=P0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var Wt=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let _=l*u+c*d+f*v+p*b;_<0&&(u=-u,d=-d,v=-v,b=-b,_=-_);let h=1-o;if(_<.9995){let m=Math.acos(_),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(IM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(IM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pg.copy(this).projectOnVector(t),this.sub(Pg)}reflect(t){return this.sub(Pg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pg=new G,IM=new hi,Pt=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],_=s[3],h=s[6],m=s[1],x=s[4],S=s[7],T=s[2],A=s[5],g=s[8];return a[0]=r*b+o*m+l*T,a[3]=r*_+o*x+l*A,a[6]=r*h+o*S+l*g,a[1]=c*b+f*m+p*T,a[4]=c*_+f*x+p*A,a[7]=c*h+f*S+p*g,a[2]=u*b+d*m+v*T,a[5]=u*_+d*x+v*A,a[8]=u*h+d*S+v*g,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bg.makeScale(t,n)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bg.makeRotation(-t)),this}translate(t,n){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bg=new Pt,PM=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),BM=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sw(){let e={enabled:!0,workingColorSpace:oc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ue&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(s.r=Oo(s.r),s.g=Oo(s.g),s.b=Oo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zs?lc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[oc]:{primaries:t,whitePoint:i,transfer:lc,toXYZ:PM,fromXYZ:BM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:PM,fromXYZ:BM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),e}var te=Sw();function Us(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var xo,df=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xo===void 0&&(xo=Bo("canvas")),xo.width=t.width,xo.height=t.height;let s=xo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Bo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Us(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mw=0,zo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Pc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Fg(s[r].image)):a.push(Fg(s[r]))}else a=Fg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Fg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?df.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var bw=0,zg=new G,Fn=class e extends rs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ui,s=ui,a=Bn,r=Bs,o=Vi,l=Zn,c=e.DEFAULT_ANISOTROPY,f=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Pc(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zg).x}get height(){return this.source.getSize(zg).y}get depth(){return this.source.getSize(zg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cf:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case uf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cf:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case uf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=b0;Fn.DEFAULT_ANISOTROPY=1;var Ie=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],_=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+_)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,S=(d+1)/2,T=(h+1)/2,A=(f+u)/4,g=(p+b)/4,E=(v+_)/4;return x>S&&x>T?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=A/i,a=g/i):S>T?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=A/s,a=E/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=g/a,s=E/a),this.set(i,s,a,n),this}let m=Math.sqrt((_-v)*(_-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(p-b)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this.w=ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this.w=ee(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pf=class extends rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ie(0,0,t,n),this.scissorTest=!1,this.viewport=new Ie(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Fn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new zo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends pf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},cc=class extends Fn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mf=class extends Fn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ne=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/So.setFromMatrixColumn(t,0).length(),a=1/So.setFromMatrixColumn(t,1).length(),r=1/So.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ew,t,Tw)}lookAt(t,n,i){let s=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),xa.crossVectors(i,oi),xa.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),xa.crossVectors(i,oi)),xa.normalize(),Lh.crossVectors(oi,xa),s[0]=xa.x,s[4]=Lh.x,s[8]=oi.x,s[1]=xa.y,s[5]=Lh.y,s[9]=oi.y,s[2]=xa.z,s[6]=Lh.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],_=i[10],h=i[14],m=i[3],x=i[7],S=i[11],T=i[15],A=s[0],g=s[4],E=s[8],I=s[12],C=s[1],P=s[5],V=s[9],J=s[13],D=s[2],W=s[6],j=s[10],q=s[14],at=s[3],O=s[7],H=s[11],Z=s[15];return a[0]=r*A+o*C+l*D+c*at,a[4]=r*g+o*P+l*W+c*O,a[8]=r*E+o*V+l*j+c*H,a[12]=r*I+o*J+l*q+c*Z,a[1]=f*A+p*C+u*D+d*at,a[5]=f*g+p*P+u*W+d*O,a[9]=f*E+p*V+u*j+d*H,a[13]=f*I+p*J+u*q+d*Z,a[2]=v*A+b*C+_*D+h*at,a[6]=v*g+b*P+_*W+h*O,a[10]=v*E+b*V+_*j+h*H,a[14]=v*I+b*J+_*q+h*Z,a[3]=m*A+x*C+S*D+T*at,a[7]=m*g+x*P+S*W+T*O,a[11]=m*E+x*V+S*j+T*H,a[15]=m*I+x*J+S*q+T*Z,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],_=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,S=o*u-l*p,T=r*d-c*f,A=r*u-l*f,g=r*p-o*f;return n*(b*m-_*x+h*S)-i*(v*m-_*T+h*A)+s*(v*x-b*T+h*g)-a*(v*S-b*A+_*g)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],_=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,S=n*c-a*r,T=i*l-s*o,A=i*c-a*o,g=s*c-a*l,E=f*b-p*v,I=f*_-u*v,C=f*h-d*v,P=p*_-u*b,V=p*h-d*b,J=u*h-d*_,D=m*J-x*V+S*P+T*C-A*I+g*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return t[0]=(o*J-l*V+c*P)*W,t[1]=(s*V-i*J-a*P)*W,t[2]=(b*g-_*A+h*T)*W,t[3]=(u*A-p*g-d*T)*W,t[4]=(l*C-r*J-c*I)*W,t[5]=(n*J-s*C+a*I)*W,t[6]=(_*S-v*g-h*x)*W,t[7]=(f*g-u*S+d*x)*W,t[8]=(r*V-o*C+c*E)*W,t[9]=(i*C-n*V-a*E)*W,t[10]=(v*A-b*S+h*m)*W,t[11]=(p*S-f*A-d*m)*W,t[12]=(o*I-r*P-l*E)*W,t[13]=(n*P-i*I+s*E)*W,t[14]=(b*x-v*T-_*m)*W,t[15]=(f*T-p*x+u*m)*W,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,_=r*p,h=o*p,m=l*c,x=l*f,S=l*p,T=i.x,A=i.y,g=i.z;return s[0]=(1-(b+h))*T,s[1]=(d+S)*T,s[2]=(v-x)*T,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(u+h))*A,s[6]=(_+m)*A,s[7]=0,s[8]=(v+x)*g,s[9]=(_-m)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=So.set(s[0],s[1],s[2]).length(),o=So.set(s[4],s[5],s[6]).length(),l=So.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ii.copy(this);let c=1/r,f=1/o,p=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=f,Ii.elements[5]*=f,Ii.elements[6]*=f,Ii.elements[8]*=p,Ii.elements[9]*=p,Ii.elements[10]*=p,n.setFromRotationMatrix(Ii),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===Ti)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Po)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===Ti)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===Po)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},So=new G,Ii=new Ne,Ew=new G(0,0,0),Tw=new G(1,1,1),xa=new G,Lh=new G,oi=new G,FM=new Ne,zM=new hi,Fi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return FM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(FM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return zM.setFromEuler(this),this.setFromQuaternion(zM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Aw=0,HM=new G,Mo=new hi,Rs=new Ne,Uh=new G,nc=new G,ww=new G,Rw=new hi,GM=new G(1,0,0),VM=new G(0,1,0),kM=new G(0,0,1),XM={type:"added"},Cw={type:"removed"},bo={type:"childadded",child:null},Hg={type:"childremoved",child:null},An=class e extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Pc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Fi,i=new hi,s=new G(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Pt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(GM,t)}rotateY(t){return this.rotateOnAxis(VM,t)}rotateZ(t){return this.rotateOnAxis(kM,t)}translateOnAxis(t,n){return HM.copy(t).applyQuaternion(this.quaternion),this.position.add(HM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(GM,t)}translateY(t){return this.translateOnAxis(VM,t)}translateZ(t){return this.translateOnAxis(kM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Uh.copy(t):Uh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(nc,Uh,this.up):Rs.lookAt(Uh,nc,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(Rs),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(XM),bo.child=t,this.dispatchEvent(bo),bo.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Cw),Hg.child=t,this.dispatchEvent(Hg),Hg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(XM),bo.child=t,this.dispatchEvent(bo),bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,t,ww),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,Rw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new G(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dr=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dw={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let _=n.getJointPose(b,i),h=this._getHandJoint(c,b);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},k1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},Oh={h:0,s:0,l:0};function Gg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=te.workingColorSpace){return this.r=t,this.g=n,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=te.workingColorSpace){if(t=vw(t,1),n=ee(n,0,1),i=ee(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Gg(r,a,t+1/3),this.g=Gg(r,a,t),this.b=Gg(r,a,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,n=Tn){function i(a){a!==void 0&&parseFloat(a)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Tn){let i=k1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return te.workingToColorSpace(En.copy(this),t),Math.round(ee(En.r*255,0,255))*65536+Math.round(ee(En.g*255,0,255))*256+Math.round(ee(En.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=te.workingColorSpace){te.workingToColorSpace(En.copy(this),n);let i=En.r,s=En.g,a=En.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=te.workingColorSpace){return te.workingToColorSpace(En.copy(this),n),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Tn){te.workingToColorSpace(En.copy(this),t);let n=En.r,i=En.g,s=En.b;return t!==Tn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Sa),this.setHSL(Sa.h+t,Sa.s+n,Sa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Sa),t.getHSL(Oh);let i=Ig(Sa.h,Oh.h,n),s=Ig(Sa.s,Oh.s,n),a=Ig(Sa.l,Oh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new zt;zt.NAMES=k1;var uc=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Pi=new G,Cs=new G,Vg=new G,Ds=new G,Eo=new G,To=new G,WM=new G,kg=new G,Xg=new G,Wg=new G,qg=new Ie,Yg=new Ie,Zg=new Ie,Ta=class e{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Pi.subVectors(t,n),s.cross(Pi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Pi.subVectors(s,n),Cs.subVectors(i,n),Vg.subVectors(t,n);let r=Pi.dot(Pi),o=Pi.dot(Cs),l=Pi.dot(Vg),c=Cs.dot(Cs),f=Cs.dot(Vg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ds.x),l.addScaledVector(r,Ds.y),l.addScaledVector(o,Ds.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return qg.setScalar(0),Yg.setScalar(0),Zg.setScalar(0),qg.fromBufferAttribute(t,n),Yg.fromBufferAttribute(t,i),Zg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(qg,a.x),r.addScaledVector(Yg,a.y),r.addScaledVector(Zg,a.z),r}static isFrontFacing(t,n,i,s){return Pi.subVectors(i,n),Cs.subVectors(t,n),Pi.cross(Cs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),Pi.cross(Cs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Eo.subVectors(s,i),To.subVectors(a,i),kg.subVectors(t,i);let l=Eo.dot(kg),c=To.dot(kg);if(l<=0&&c<=0)return n.copy(i);Xg.subVectors(t,s);let f=Eo.dot(Xg),p=To.dot(Xg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(i).addScaledVector(Eo,r);Wg.subVectors(t,a);let d=Eo.dot(Wg),v=To.dot(Wg);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(To,o);let _=f*v-d*p;if(_<=0&&p-f>=0&&d-v>=0)return WM.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(WM,o);let h=1/(_+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Eo,r).addScaledVector(To,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Aa=class{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Bi):Bi.fromBufferAttribute(a,r),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ih.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ih.copy(i.boundingBox)),Ih.applyMatrix4(t.matrixWorld),this.union(Ih)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ic),Ph.subVectors(this.max,ic),Ao.subVectors(t.a,ic),wo.subVectors(t.b,ic),Ro.subVectors(t.c,ic),Ma.subVectors(wo,Ao),ba.subVectors(Ro,wo),cr.subVectors(Ao,Ro);let n=[0,-Ma.z,Ma.y,0,-ba.z,ba.y,0,-cr.z,cr.y,Ma.z,0,-Ma.x,ba.z,0,-ba.x,cr.z,0,-cr.x,-Ma.y,Ma.x,0,-ba.y,ba.x,0,-cr.y,cr.x,0];return!Jg(n,Ao,wo,Ro,Ph)||(n=[1,0,0,0,1,0,0,0,1],!Jg(n,Ao,wo,Ro,Ph))?!1:(Bh.crossVectors(Ma,ba),n=[Bh.x,Bh.y,Bh.z],Jg(n,Ao,wo,Ro,Ph))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ns=[new G,new G,new G,new G,new G,new G,new G,new G],Bi=new G,Ih=new Aa,Ao=new G,wo=new G,Ro=new G,Ma=new G,ba=new G,cr=new G,ic=new G,Ph=new G,Bh=new G,ur=new G;function Jg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){ur.fromArray(e,a);let o=s.x*Math.abs(ur.x)+s.y*Math.abs(ur.y)+s.z*Math.abs(ur.z),l=t.dot(ur),c=n.dot(ur),f=i.dot(ur);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ze=new G,Fh=new Wt,Nw=0,as=class extends rs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=B1,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=t!==void 0?P0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fh.fromBufferAttribute(this,n),Fh.applyMatrix3(t),this.setXY(n,Fh.x,Fh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix3(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):yw(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):xw(t,this.array)}};var hc=class extends as{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var fc=class extends as{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Pn=class extends as{constructor(t,n,i){super(new Float32Array(t),n,i)}},Lw=new Aa,sc=new G,Kg=new G,Vo=class{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Lw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sc.subVectors(t,this.center);let n=sc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(sc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sc.copy(t.center).add(Kg)),this.expandByPoint(sc.copy(t.center).sub(Kg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Uw=0,Ei=new Ne,Qg=new An,Co=new G,li=new Aa,ac=new Aa,ln=new G,Is=class e extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=Pc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gw(t)?fc:hc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Pt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,n,i){return Ei.makeTranslation(t,n,i),this.applyMatrix4(Ei),this}scale(t,n,i){return Ei.makeScale(t,n,i),this.applyMatrix4(Ei),this}lookAt(t){return Qg.lookAt(t),Qg.updateMatrix(),this.applyMatrix4(Qg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];li.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];ac.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(li.min,ac.min),li.expandByPoint(ln),ln.addVectors(li.max,ac.max),li.expandByPoint(ln)):(li.expandByPoint(ac.min),li.expandByPoint(ac.max))}li.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)ln.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(ln));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)ln.fromBufferAttribute(o,c),l&&(Co.fromBufferAttribute(t,c),ln.add(Co)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new as(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new G,l[I]=new G;let f=new G,p=new G,u=new G,d=new Wt,v=new Wt,b=new Wt,_=new G,h=new G;function m(I,C,P){c[I]=c[C]=c[P]=1,f.fromBufferAttribute(i,I),p.fromBufferAttribute(i,C),u.fromBufferAttribute(i,P),d.fromBufferAttribute(a,I),v.fromBufferAttribute(a,C),b.fromBufferAttribute(a,P),p.sub(f),u.sub(f),v.sub(d),b.sub(d);let V=1/(v.x*b.y-b.x*v.y);isFinite(V)&&(_.copy(p).multiplyScalar(b.y).addScaledVector(u,-v.y).multiplyScalar(V),h.copy(u).multiplyScalar(v.x).addScaledVector(p,-b.x).multiplyScalar(V),o[I].add(_),o[C].add(_),o[P].add(_),l[I].add(h),l[C].add(h),l[P].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,C=x.length;I<C;++I){let P=x[I],V=P.start,J=P.count;for(let D=V,W=V+J;D<W;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new G,T=new G,A=new G,g=new G;function E(I){A.fromBufferAttribute(s,I),g.copy(A);let C=o[I];S.copy(C),S.sub(A.multiplyScalar(A.dot(C))).normalize(),T.crossVectors(g,C);let V=T.dot(l[I])<0?-1:1;r.setXYZW(I,S.x,S.y,S.z,V)}for(let I=0,C=i.count;I<C;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new as(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new G,a=new G,r=new G,o=new G,l=new G,c=new G,f=new G,p=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,_),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ln.fromBufferAttribute(t,n),ln.normalize(),t.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new as(u,f,p)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jg=new G,Ow=new G,Iw=new Pt,ci=class{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=jg.subVectors(i,n).cross(Ow.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(jg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Iw.getNormalMatrix(t),s=this.coplanarPoint(jg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pw=0,wa=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Pc(),this.name="",this.type="Material",this.blending=Yo,this.side=La,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=p0,this.blendDst=m0,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$h,this.stencilZFail=$h,this.stencilZPass=$h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ls=new G,$g=new G,zh=new G,Hh=new G,dc=class{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ls)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ls.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ls.copy(this.origin).addScaledVector(this.direction,n),Ls.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){$g.copy(t).add(n).multiplyScalar(.5),zh.copy(n).sub(t).normalize(),Hh.copy(this.origin).sub($g);let a=t.distanceTo(n)*.5,r=-this.direction.dot(zh),o=Hh.dot(this.direction),l=-Hh.dot(zh),c=Hh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy($g).addScaledVector(zh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ls.subVectors(t.center,this.origin);let i=Ls.dot(this.direction),s=Ls.dot(Ls)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ls)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,_=n.z-r.z,h=i.x-r.x,m=i.y-r.y,x=i.z-r.z,S=Math.abs(l),T=Math.abs(c),A=Math.abs(f),g,E,I,C,P,V,J,D,W,j,q,at;if(S>=T&&S>=A?(I=l,V=p,W=v,at=h,l>=0?(g=c,E=f,C=u,P=d,J=b,D=_,j=m,q=x):(g=f,E=c,C=d,P=u,J=_,D=b,j=x,q=m)):T>=A?(I=c,V=u,W=b,at=m,c>=0?(g=f,E=l,C=d,P=p,J=_,D=v,j=x,q=h):(g=l,E=f,C=p,P=d,J=v,D=_,j=h,q=x)):(I=f,V=d,W=_,at=x,f>=0?(g=l,E=c,C=p,P=u,J=v,D=b,j=h,q=m):(g=c,E=l,C=u,P=p,J=b,D=v,j=m,q=h)),I===0)return null;let O=g/I,H=E/I,Z=1/I,it=C-O*V,dt=P-H*V,B=J-O*W,ot=D-H*W,rt=j-O*at,tt=q-H*at,et=rt*ot-tt*B,St=it*tt-dt*rt,Bt=B*dt-ot*it;if(s){if(et<0||St<0||Bt<0)return null}else if((et<0||St<0||Bt<0)&&(et>0||St>0||Bt>0))return null;let bt=et+St+Bt;if(bt===0)return null;let kt=Z*(et*V+St*W+Bt*at);return(bt>0?kt<0:kt>0)?null:this.at(kt/bt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gf=class extends wa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qM=new Ne,hr=new dc,Gh=new Vo,YM=new G,Vh=new G,kh=new G,Xh=new G,t0=new G,Wh=new G,ZM=new G,qh=new G,Ai=class extends An{constructor(t=new Is,n=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Wh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(t0.fromBufferAttribute(p,t),r?Wh.addScaledVector(t0,f):Wh.addScaledVector(t0.sub(n),f))}n.add(Wh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gh.copy(i.boundingSphere),Gh.applyMatrix4(a),hr.copy(t.ray).recast(t.near),!(Gh.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Gh,YM)===null||hr.origin.distanceToSquared(YM)>(t.far-t.near)**2))&&(qM.copy(a).invert(),hr.copy(t.ray).applyMatrix4(qM),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,hr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),x=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let S=m,T=x;S<T;S+=3){let A=o.getX(S),g=o.getX(S+1),E=o.getX(S+2);s=Yh(this,h,t,i,c,f,p,A,g,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let _=v,h=b;_<h;_+=3){let m=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);s=Yh(this,r,t,i,c,f,p,m,x,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let S=m,T=x;S<T;S+=3){let A=S,g=S+1,E=S+2;s=Yh(this,h,t,i,c,f,p,A,g,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let _=v,h=b;_<h;_+=3){let m=_,x=_+1,S=_+2;s=Yh(this,r,t,i,c,f,p,m,x,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}};function Bw(e,t,n,i,s,a,r,o){let l;if(t.side===zn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===La,o),l===null)return null;qh.copy(o),qh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(qh);return c<n.near||c>n.far?null:{distance:c,point:qh.clone(),object:e}}function Yh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Vh),e.getVertexPosition(l,kh),e.getVertexPosition(c,Xh);let f=Bw(e,t,n,i,Vh,kh,Xh,ZM);if(f){let p=new G;Ta.getBarycoord(ZM,Vh,kh,Xh,p),s&&(f.uv=Ta.getInterpolatedAttribute(s,o,l,c,p,new Wt)),a&&(f.uv1=Ta.getInterpolatedAttribute(a,o,l,c,p,new Wt)),r&&(f.normal=Ta.getInterpolatedAttribute(r,o,l,c,p,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new G,materialIndex:0};Ta.getNormal(Vh,kh,Xh,u.normal),f.face=u,f.barycoord=p}return f}var _f=class extends Fn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=cn,f=cn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=new Vo,Fw=new Wt(.5,.5),Zh=new G,Ra=class{constructor(t=new ci,n=new ci,i=new ci,s=new ci,a=new ci,r=new ci){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],_=a[10],h=a[11],m=a[12],x=a[13],S=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-v,T-m).normalize(),s[1].setComponents(c+r,d+f,h+v,T+m).normalize(),s[2].setComponents(c+o,d+p,h+b,T+x).normalize(),s[3].setComponents(c-o,d-p,h-b,T-x).normalize(),i)s[4].setComponents(l,u,_,S).normalize(),s[5].setComponents(c-l,d-u,h-_,T-S).normalize();else if(s[4].setComponents(c-l,d-u,h-_,T-S).normalize(),n===Ti)s[5].setComponents(c+l,d+u,h+_,T+S).normalize();else if(n===Po)s[5].setComponents(l,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let n=Fw.distanceTo(t.center);return fr.radius=.7071067811865476+n,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Zh.x=s.normal.x>0?t.max.x:t.min.x,Zh.y=s.normal.y>0?t.max.y:t.min.y,Zh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},JM=new Ne,vf=class e{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];JM.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ra),i[s].setFromProjectionMatrix(JM,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new Ra),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var pc=class extends Fn{constructor(t=[],n=vr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ps=class extends Fn{constructor(t,n,i=zi,s,a,r,o=cn,l=cn,c,f=Os,p=1){if(f!==Os&&f!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},mc=class extends Ps{constructor(t,n=zi,i=vr,s,a,r=cn,o=cn,l,c=Os){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gc=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ko=class e extends Is{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(f,3)),this.setAttribute("uv",new Pn(p,2));function v(b,_,h,m,x,S,T,A,g,E,I){let C=S/g,P=T/E,V=S/2,J=T/2,D=A/2,W=g+1,j=E+1,q=0,at=0,O=new G;for(let H=0;H<j;H++){let Z=H*P-J;for(let it=0;it<W;it++){let dt=it*C-V;O[b]=dt*m,O[_]=Z*x,O[h]=D,c.push(O.x,O.y,O.z),O[b]=0,O[_]=0,O[h]=A>0?1:-1,f.push(O.x,O.y,O.z),p.push(it/g),p.push(1-H/E),q+=1}}for(let H=0;H<E;H++)for(let Z=0;Z<g;Z++){let it=u+Z+W*H,dt=u+Z+W*(H+1),B=u+(Z+1)+W*(H+1),ot=u+(Z+1)+W*H;l.push(it,dt,ot),l.push(dt,B,ot),at+=6}o.addGroup(d,at,I),d+=at,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _c=class e extends Is{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],_=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let S=x*p-a;v.push(S,-m,0),b.push(0,0,1),_.push(x/o),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,S=m+c*(h+1),T=m+1+c*(h+1),A=m+1+c*h;d.push(x,S,A),d.push(S,T,A)}this.setIndex(d),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(b,3)),this.setAttribute("uv",new Pn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var vc=class e extends Is{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],p=new G,u=new G,d=[],v=[],b=[],_=[];for(let h=0;h<=i;h++){let m=[],x=h/i,S=r+x*o,T=t*Math.cos(S),A=Math.sqrt(t*t-T*T),g=0;h===0&&r===0?g=.5/n:h===i&&l===Math.PI&&(g=-.5/n);for(let E=0;E<=n;E++){let I=E/n,C=s+I*a;p.x=-A*Math.cos(C),p.y=T,p.z=A*Math.sin(C),v.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),_.push(I+g,1-x),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){let x=f[h][m+1],S=f[h][m],T=f[h+1][m],A=f[h+1][m+1];(h!==0||r>0)&&d.push(x,S,A),(h!==i-1||l<Math.PI)&&d.push(S,T,A)}this.setIndex(d),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(b,3)),this.setAttribute("uv",new Pn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function xr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(KM(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(KM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function wn(e){let t={};for(let n=0;n<e.length;n++){let i=xr(e[n]);for(let s in i)t[s]=i[s]}return t}function KM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function B0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var X1={clone:xr,merge:wn},Hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,os=class extends wa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hw,this.fragmentShader=Gw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=zw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},yf=class extends os{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xf=class extends wa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yc=class extends xf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Sf=class extends wa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mf=class extends wa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Do(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Jh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ca=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bf=class extends Ca{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:i0,endingEnd:i0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case s0:a=t,o=2*n-i;break;case a0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case s0:r=t,l=2*i-n;break;case a0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,_=b*v,h=-u*_+2*u*b-u*v,m=(1+u)*_+(-1.5-2*u)*b+(-.5+u)*v+1,x=(-1-d)*_+(1.5+d)*b+.5*v,S=d*_-d*b;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+m*r[c+T]+x*r[l+T]+S*r[p+T];return a}},Ef=class extends Ca{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Tf=class extends Ca{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Af=class extends Ca{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let _=0;_!==o;++_)a[_]=r[c+_]*b+r[l+_]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],_=r[l+v],h=d*u+v*2,m=p[h],x=p[h+1],S=t*u+v*2,T=f[S],A=f[S+1],g=kw(i,n,m,T,s);a[v]=W1(g,b,x,A,_)}return a}};function W1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function Vw(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function kw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=W1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=Vw(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(n,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Jh(t.settings)&&(i.settings={inTangents:Do(t.settings.inTangents,Array),outTangents:Do(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ef(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Af(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case rc:n=this.InterpolantFactoryMethodDiscrete;break;case hf:n=this.InterpolantFactoryMethodLinear;break;case jh:n=this.InterpolantFactoryMethodSmooth;break;case n0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rc;case this.InterpolantFactoryMethodLinear:return hf;case this.InterpolantFactoryMethodSmooth:return jh;case this.InterpolantFactoryMethodBezier:return n0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;Jh(this.settings)&&(QM(this.settings.inTangents,t),QM(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Jh(this.settings)&&(jM(this.settings.inTangents,t),jM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){It("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&_w(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Jh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function QM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function jM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=hf;var Da=class extends di{constructor(t,n,i){super(t,n,i)}};Da.prototype.ValueTypeName="bool";Da.prototype.ValueBufferType=Array;Da.prototype.DefaultInterpolation=rc;Da.prototype.InterpolantFactoryMethodLinear=void 0;Da.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};wf.prototype.ValueTypeName="color";var Rf=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Rf.prototype.ValueTypeName="number";var Cf=class extends Ca{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)hi.slerpFlat(a,0,r,c-o,r,c,l);return a}},xc=class extends di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Cf(this.times,this.values,this.getValueSize(),t)}};xc.prototype.ValueTypeName="quaternion";xc.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends di{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=rc;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Df.prototype.ValueTypeName="vector";var tf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&($M(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!$M(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function $M(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Nf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},q1=new Nf,Xo=class{constructor(t){this.manager=t!==void 0?t:q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var No=new WeakMap,Lf=class extends Xo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=tf.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=No.get(r);p===void 0&&(p=[],No.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=Bo("img");function l(){f(),n&&n(this);let p=No.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}No.delete(this),a.manager.itemEnd(t)}function c(p){f(),s&&s(p),tf.remove(`image:${t}`);let u=No.get(this)||[];for(let d=0;d<u.length;d++){let v=u[d];v.onError&&v.onError(p)}No.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tf.add(`image:${t}`,o),a.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Sc=class extends Xo{constructor(t){super(t)}load(t,n,i,s){let a=new Fn,r=new Lf(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Mc=class extends An{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},bc=class extends Mc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},e0=new Ne,t1=new G,e1=new G,Uf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;t1.setFromMatrixPosition(t.matrixWorld),n.position.copy(t1),e1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(e1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){e0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(e0,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Po||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(e0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kh=new G,Qh=new hi,ss=new G,Ec=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kh,Qh,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kh,Qh,ss.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Kh,Qh,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kh,Qh,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ea=new G,n1=new Wt,i1=new Wt,In=class extends Ec{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Og*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Og*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,n1,i1),n.subVectors(i1,n1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Og*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Tc=class extends Ec{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},r0=class extends Uf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends Mc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new r0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Lo=-90,Uo=1,Wo=class extends An{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(Lo,Uo,t,n);s.layers=this.layers,this.add(s);let a=new In(Lo,Uo,t,n);a.layers=this.layers,this.add(a);let r=new In(Lo,Uo,t,n);r.layers=this.layers,this.add(r);let o=new In(Lo,Uo,t,n);o.layers=this.layers,this.add(o);let l=new In(Lo,Uo,t,n);l.layers=this.layers,this.add(l);let c=new In(Lo,Uo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=b,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Of=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var F0="\\[\\]\\.:\\/",Xw=new RegExp("["+F0+"]","g"),z0="[^"+F0+"]",Ww="[^"+F0.replace("\\.","")+"]",qw=/((?:WC+[\/:])*)/.source.replace("WC",z0),Yw=/(WCOD+)?/.source.replace("WCOD",Ww),Zw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",z0),Jw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",z0),Kw=new RegExp("^"+qw+Yw+Zw+Jw+"$"),Qw=["material","materials","bones","map"],o0=class{constructor(t,n,i){let s=i||De.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},De=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xw,"")}static parseTrackName(t){let n=Kw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Qw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=o0;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vN=new Float32Array(1);var s1=new Ne,Ac=class{constructor(t,n,i=0,s=1/0){this.ray=new dc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):It("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return s1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s1),this}intersectObject(t,n=!0,i=[]){return l0(t,this,i,n),i.sort(a1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)l0(t[s],this,i,n);return i.sort(a1),i}};function a1(e,t){return e.distance-t.distance}function l0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)l0(a[r],t,n,!0)}}var c0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function H0(e,t,n,i){let s=jw(i);switch(n){case R0:return e*t;case D0:return e*t/s.components*s.byteLength;case Vf:return e*t/s.components*s.byteLength;case Ua:return e*t*2/s.components*s.byteLength;case kf:return e*t*2/s.components*s.byteLength;case C0:return e*t*3/s.components*s.byteLength;case Vi:return e*t*4/s.components*s.byteLength;case Xf:return e*t*4/s.components*s.byteLength;case Dc:case Nc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qf:case Zf:return Math.max(e,16)*Math.max(t,8)/4;case Wf:case Yf:return Math.max(e,8)*Math.max(t,8)/2;case Jf:case Kf:case jf:case $f:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qf:case Oc:case td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case id:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ad:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case rd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case od:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ld:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case cd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case fd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case pd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case md:case gd:case _d:return Math.ceil(e/4)*Math.ceil(t/4)*16;case vd:case yd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ic:case xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jw(e){switch(e){case Zn:case E0:return{byteLength:1,components:1};case Jo:case T0:case Gi:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case zi:case zf:case Hi:return{byteLength:4,components:1};case A0:case w0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function pb(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function tR(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var eR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nR=`#ifdef USE_ALPHAHASH
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
#endif`,iR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oR=`#ifdef USE_AOMAP
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
#endif`,lR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cR=`#ifdef USE_BATCHING
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
#endif`,uR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pR=`#ifdef USE_IRIDESCENCE
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
#endif`,mR=`#ifdef USE_BUMPMAP
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
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ER=`#define PI 3.141592653589793
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
} // validated`,TR=`vec3 transformedNormal = objectNormal;
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
#endif`,AR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DR="gl_FragColor = linearToOutputTexel( gl_FragColor );",NR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LR=`#ifdef USE_ENVMAP
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
#endif`,UR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,OR=`#ifdef USE_ENVMAP
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
#endif`,IR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PR=`#ifdef USE_ENVMAP
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
#endif`,BR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GR=`#ifdef USE_GRADIENTMAP
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
}`,VR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qR=`#ifdef USE_ENVMAP
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
#endif`,YR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QR=`PhysicalMaterial material;
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
#endif`,jR=`uniform sampler2D dfgLUT;
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
}`,$R=`
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
#endif`,tC=`#if defined( RE_IndirectDiffuse )
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
#endif`,eC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uC=`#if defined( USE_POINTS_UV )
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
#endif`,hC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pC=`#if defined( USE_MORPHCOLORS )
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
#endif`,mC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gC=`#ifdef USE_MORPHTARGETS
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
#endif`,_C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bC=`#ifdef USE_NORMALMAP
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
#endif`,EC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zC=`float getShadowMask() {
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
}`,HC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GC=`#ifdef USE_SKINNING
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
#endif`,VC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kC=`#ifdef USE_SKINNING
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
#endif`,XC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZC=`#ifdef USE_TRANSMISSION
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
#endif`,JC=`#ifdef USE_TRANSMISSION
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
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$C=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e3=`uniform sampler2D t2D;
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
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`uniform float backgroundBlurriness;
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
}`,s3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`#include <common>
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
}`,o3=`#if DEPTH_PACKING == 3200
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
}`,l3=`#define DISTANCE
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
}`,c3=`#define DISTANCE
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
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`uniform float scale;
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
}`,d3=`uniform vec3 diffuse;
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
}`,p3=`#include <common>
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#define LAMBERT
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
}`,_3=`#define LAMBERT
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
}`,v3=`#define MATCAP
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
}`,y3=`#define MATCAP
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
}`,x3=`#define NORMAL
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
}`,S3=`#define NORMAL
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
}`,M3=`#define PHONG
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
}`,b3=`#define PHONG
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
}`,E3=`#define STANDARD
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
}`,T3=`#define STANDARD
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
}`,A3=`#define TOON
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
}`,w3=`#define TOON
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
}`,R3=`uniform float size;
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
}`,C3=`uniform vec3 diffuse;
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
}`,D3=`#include <common>
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
}`,N3=`uniform vec3 color;
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
}`,L3=`uniform float rotation;
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
}`,U3=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:eR,alphahash_pars_fragment:nR,alphamap_fragment:iR,alphamap_pars_fragment:sR,alphatest_fragment:aR,alphatest_pars_fragment:rR,aomap_fragment:oR,aomap_pars_fragment:lR,batching_pars_vertex:cR,batching_vertex:uR,begin_vertex:hR,beginnormal_vertex:fR,bsdfs:dR,iridescence_fragment:pR,bumpmap_pars_fragment:mR,clipping_planes_fragment:gR,clipping_planes_pars_fragment:_R,clipping_planes_pars_vertex:vR,clipping_planes_vertex:yR,color_fragment:xR,color_pars_fragment:SR,color_pars_vertex:MR,color_vertex:bR,common:ER,defaultnormal_vertex:TR,displacementmap_pars_vertex:AR,displacementmap_vertex:wR,emissivemap_fragment:RR,emissivemap_pars_fragment:CR,colorspace_fragment:DR,colorspace_pars_fragment:NR,envmap_fragment:LR,envmap_common_pars_fragment:UR,envmap_pars_fragment:OR,envmap_pars_vertex:IR,envmap_physical_pars_fragment:qR,envmap_vertex:PR,fog_vertex:BR,fog_pars_vertex:FR,fog_fragment:zR,fog_pars_fragment:HR,gradientmap_pars_fragment:GR,lightmap_pars_fragment:VR,lights_lambert_fragment:kR,lights_lambert_pars_fragment:XR,lights_pars_begin:WR,lights_toon_fragment:YR,lights_toon_pars_fragment:ZR,lights_phong_fragment:JR,lights_phong_pars_fragment:KR,lights_physical_fragment:QR,lights_physical_pars_fragment:jR,lights_fragment_begin:$R,lights_fragment_maps:tC,lights_fragment_end:eC,lightprobes_pars_fragment:nC,logdepthbuf_fragment:iC,logdepthbuf_pars_fragment:sC,logdepthbuf_pars_vertex:aC,logdepthbuf_vertex:rC,map_fragment:oC,map_pars_fragment:lC,map_particle_fragment:cC,map_particle_pars_fragment:uC,metalnessmap_fragment:hC,metalnessmap_pars_fragment:fC,morphinstance_vertex:dC,morphcolor_vertex:pC,morphnormal_vertex:mC,morphtarget_pars_vertex:gC,morphtarget_vertex:_C,normal_fragment_begin:vC,normal_fragment_maps:yC,normal_pars_fragment:xC,normal_pars_vertex:SC,normal_vertex:MC,normalmap_pars_fragment:bC,clearcoat_normal_fragment_begin:EC,clearcoat_normal_fragment_maps:TC,clearcoat_pars_fragment:AC,iridescence_pars_fragment:wC,opaque_fragment:RC,packing:CC,premultiplied_alpha_fragment:DC,project_vertex:NC,dithering_fragment:LC,dithering_pars_fragment:UC,roughnessmap_fragment:OC,roughnessmap_pars_fragment:IC,shadowmap_pars_fragment:PC,shadowmap_pars_vertex:BC,shadowmap_vertex:FC,shadowmask_pars_fragment:zC,skinbase_vertex:HC,skinning_pars_vertex:GC,skinning_vertex:VC,skinnormal_vertex:kC,specularmap_fragment:XC,specularmap_pars_fragment:WC,tonemapping_fragment:qC,tonemapping_pars_fragment:YC,transmission_fragment:ZC,transmission_pars_fragment:JC,uv_pars_fragment:KC,uv_pars_vertex:QC,uv_vertex:jC,worldpos_vertex:$C,background_vert:t3,background_frag:e3,backgroundCube_vert:n3,backgroundCube_frag:i3,cube_vert:s3,cube_frag:a3,depth_vert:r3,depth_frag:o3,distance_vert:l3,distance_frag:c3,equirect_vert:u3,equirect_frag:h3,linedashed_vert:f3,linedashed_frag:d3,meshbasic_vert:p3,meshbasic_frag:m3,meshlambert_vert:g3,meshlambert_frag:_3,meshmatcap_vert:v3,meshmatcap_frag:y3,meshnormal_vert:x3,meshnormal_frag:S3,meshphong_vert:M3,meshphong_frag:b3,meshphysical_vert:E3,meshphysical_frag:T3,meshtoon_vert:A3,meshtoon_frag:w3,points_vert:R3,points_frag:C3,shadow_vert:D3,shadow_frag:N3,sprite_vert:L3,sprite_frag:U3},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},us={basic:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:wn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:wn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:wn([xt.points,xt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:wn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:wn([xt.common,xt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:wn([xt.sprite,xt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:wn([xt.common,xt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:wn([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};us.physical={uniforms:wn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Md={r:0,b:0,g:0},O3=new Ne,mb=new Pt;mb.set(-1,0,0,0,1,0,0,0,1);function I3(e,t,n,i,s,a){let r=new zt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let S=m.backgroundBlurriness>0;x=t.get(x,S)}return x}function v(m){let x=!1,S=d(m);S===null?_(r,o):S&&S.isColor&&(_(S,1),x=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,x){let S=d(x);S&&S.isCubeTexture?(c===void 0&&(c=new Ai(new ko(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:xr(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O3.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mb),c.material.toneMapped=te.getTransfer(S.colorSpace)!==ue,(f!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ai(new _c(2,2),new os({name:"BackgroundMaterial",uniforms:xr(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:La,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,x){m.getRGB(Md,B0(e)),n.buffers.color.setClear(Md.r,Md.g,Md.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(r,o)},render:v,addToRenderList:b,dispose:h}}function P3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(P,V,J,D,W){let j=!1,q=p(P,D,J,V);a!==q&&(a=q,c(a.object)),j=d(P,D,J,W),j&&v(P,D,J,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,S(P,V,J,D),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function f(P){return e.deleteVertexArray(P)}function p(P,V,J,D){let W=D.wireframe===!0,j=i[V.id];j===void 0&&(j={},i[V.id]=j);let q=P.isInstancedMesh===!0?P.id:0,at=j[q];at===void 0&&(at={},j[q]=at);let O=at[J.id];O===void 0&&(O={},at[J.id]=O);let H=O[W];return H===void 0&&(H=u(l()),O[W]=H),H}function u(P){let V=[],J=[],D=[];for(let W=0;W<n;W++)V[W]=0,J[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,V,J,D){let W=a.attributes,j=V.attributes,q=0,at=J.getAttributes();for(let O in at)if(at[O].location>=0){let Z=W[O],it=j[O];if(it===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),Z===void 0||Z.attribute!==it||it&&Z.data!==it.data)return!0;q++}return a.attributesNum!==q||a.index!==D}function v(P,V,J,D){let W={},j=V.attributes,q=0,at=J.getAttributes();for(let O in at)if(at[O].location>=0){let Z=j[O];Z===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let it={};it.attribute=Z,Z&&Z.data&&(it.data=Z.data),W[O]=it,q++}a.attributes=W,a.attributesNum=q,a.index=D}function b(){let P=a.newAttributes;for(let V=0,J=P.length;V<J;V++)P[V]=0}function _(P){h(P,0)}function h(P,V){let J=a.newAttributes,D=a.enabledAttributes,W=a.attributeDivisors;J[P]=1,D[P]===0&&(e.enableVertexAttribArray(P),D[P]=1),W[P]!==V&&(e.vertexAttribDivisor(P,V),W[P]=V)}function m(){let P=a.newAttributes,V=a.enabledAttributes;for(let J=0,D=V.length;J<D;J++)V[J]!==P[J]&&(e.disableVertexAttribArray(J),V[J]=0)}function x(P,V,J,D,W,j,q){q===!0?e.vertexAttribIPointer(P,V,J,W,j):e.vertexAttribPointer(P,V,J,D,W,j)}function S(P,V,J,D){b();let W=D.attributes,j=J.getAttributes(),q=V.defaultAttributeValues;for(let at in j){let O=j[at];if(O.location>=0){let H=W[at];if(H===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){let Z=H.normalized,it=H.itemSize,dt=t.get(H);if(dt===void 0)continue;let B=dt.buffer,ot=dt.type,rt=dt.bytesPerElement,tt=ot===e.INT||ot===e.UNSIGNED_INT||H.gpuType===zf;if(H.isInterleavedBufferAttribute){let et=H.data,St=et.isInterleavedBuffer===!0?et.stride:et.itemSize,Bt=H.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let bt=0;bt<O.locationSize;bt++)h(O.location+bt,et.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<O.locationSize;bt++)_(O.location+bt);e.bindBuffer(e.ARRAY_BUFFER,B);for(let bt=0;bt<O.locationSize;bt++)x(O.location+bt,it/O.locationSize,ot,Z,St*rt,(Bt+it/O.locationSize*bt)*rt,tt)}else{if(H.isInstancedBufferAttribute){for(let et=0;et<O.locationSize;et++)h(O.location+et,H.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let et=0;et<O.locationSize;et++)_(O.location+et);e.bindBuffer(e.ARRAY_BUFFER,B);for(let et=0;et<O.locationSize;et++)x(O.location+et,it/O.locationSize,ot,Z,it*rt,it/O.locationSize*et*rt,tt)}}else if(q!==void 0){let Z=q[at];if(Z!==void 0)switch(Z.length){case 2:e.vertexAttrib2fv(O.location,Z);break;case 3:e.vertexAttrib3fv(O.location,Z);break;case 4:e.vertexAttrib4fv(O.location,Z);break;default:e.vertexAttrib1fv(O.location,Z)}}}}m()}function T(){I();for(let P in i){let V=i[P];for(let J in V){let D=V[J];for(let W in D){let j=D[W];for(let q in j)f(j[q].object),delete j[q];delete D[W]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;let V=i[P.id];for(let J in V){let D=V[J];for(let W in D){let j=D[W];for(let q in j)f(j[q].object),delete j[q];delete D[W]}}delete i[P.id]}function g(P){for(let V in i){let J=i[V];for(let D in J){let W=J[D];if(W[P.id]===void 0)continue;let j=W[P.id];for(let q in j)f(j[q].object),delete j[q];delete W[P.id]}}}function E(P){for(let V in i){let J=i[V],D=P.isInstancedMesh===!0?P.id:0,W=J[D];if(W!==void 0){for(let j in W){let q=W[j];for(let at in q)f(q[at].object),delete q[at];delete W[j]}delete J[D],Object.keys(J).length===0&&delete i[V]}}}function I(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:_,disableUnusedAttributes:m}}function B3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function F3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(g){return!(g!==Vi&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let E=g===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Zn&&g!==Hi&&!E&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Lt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:A}}function z3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ci,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!_)a?f(null):c();else{let m=a?0:i,x=m*4,S=h.clippingState||null;l.value=S,S=f(v,u,x,d);for(let T=0;T!==x;++T)S[T]=n[T];h.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,_=null;if(b!==0){if(_=l.value,v!==!0||_===null){let h=d+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<h)&&(_=new Float32Array(h));for(let x=0,S=d;x!==b;++x,S+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(_,S),_[S+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var zc=class extends fi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ko(5,5,5),a=new os({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:gr});a.uniforms.tEquirect.value=n;let r=new Ai(s,a),o=n.minFilter;return n.minFilter===Bs&&(n.minFilter=Bn),new Wo(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Y1=256,H3=3,G3=20,gb=256,_b=16,V3=3,k3=new G,X3=new zt,Ed=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wo(1,10,null),this._boxMesh=new Ai(new ko(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=k3}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(X3));let _=new Wo(i,s,f);return _.position.copy(o),_.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,t.background=b,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(Y1,V1(t))}_fromTexture(t,n){t.mapping===vr||t.mapping===Zo?this._setSize(t.image.length===0?Y1:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=Z1(t,!1,!1),i=Math.log2(t)-H3;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Z1(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===vr||t.mapping===Zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=K1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=J1()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=W3(),this._integrationMaterial=q3());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/_b);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-V3)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(gb*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=Y3());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function Z1(e,t,n){return new zc(e,{minFilter:Bs,generateMipmaps:t,type:Gi,colorSpace:oc,depthBuffer:n})}function Hc(e,t,n){return new os({name:e,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:n,side:zn,blending:gr,depthTest:!1,depthWrite:!1})}function W3(){return Hc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gb}u

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
	`)}function q3(){return Hc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_b}},`

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
	`)}function Y3(){return Hc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${G3}
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
	`)}function J1(){return Hc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function K1(){return Hc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Z3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Pf||d===Bf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new zc(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===Pf||d===Bf,b=d===vr||d===Zo;if(v||b){let _=n.get(u),h=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Ed(e)),_=v?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),_.texture;if(_!==void 0)return _.texture;{let m=u.image;return v&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new Ed(e)),_=v?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),u.addEventListener("dispose",f),_.texture):null}}}return u}function o(u,d){return d===Pf?u.mapping=vr:d===Bf&&(u.mapping=Zo),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function J3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function K3(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let _ in v.attributes)t.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),r.register(b,b.id,b),n.memory.geometries++),b}function f(v){let b=v.attributes;for(let _ in b)t.update(b[_],e.ARRAY_BUFFER)}function p(v){let b=v.index,_=v.attributes.position,h=0;if(_===void 0)return;let m=b!==null?b.array.length:_.array.length/3-1,x=_.count>=65535?fc:hc,S=new x(Math.ceil(m/3)*6,1),T=S.array;if(b!==null){let g=b.array;h=b.version;for(let E=0,I=0;E<m;E+=3){let C=g[E+0],P=g[E+1],V=g[E+2];T[I++]=C,T[I++]=P,T[I++]=P,T[I++]=V,T[I++]=V,T[I++]=C}}else{h=_.version;for(let g=0,E=0;g<m;g+=3){let I=g+0,C=g+1,P=g+2;T[E++]=I,T[E++]=C,T[E++]=C,T[E++]=P,T[E++]=P,T[E++]=I}}S.version=h;let A=a.get(v);A&&t.remove(A),a.set(v,S)}function u(v){let b=a.get(v);if(b){let _=v.index;_!==null&&b.version<_.version&&p(v)}else p(v);return a.get(v)}function d(){for(let v in s){let b=s[v].deref();b!==void 0&&l(b)}}return{get:c,update:f,getWireframeAttribute:u,dispose:d}}function Q3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let _=0;_<d;_++)b+=u[_];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function j3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:It("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function $3(e,t,n){let i=new WeakMap,s=new Ie;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let I=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),v===!0&&(x=2),b===!0&&(x=3);let S=o.attributes.position.count*x,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*T*4*p),g=new cc(A,S,T,p);g.type=Hi,g.needsUpdate=!0;let E=x*4;for(let C=0;C<p;C++){let P=_[C],V=h[C],J=m[C],D=S*T*4*C;for(let W=0;W<P.count;W++){let j=W*E;d===!0&&(s.fromBufferAttribute(P,W),A[D+j+0]=s.x,A[D+j+1]=s.y,A[D+j+2]=s.z,A[D+j+3]=0),v===!0&&(s.fromBufferAttribute(V,W),A[D+j+4]=s.x,A[D+j+5]=s.y,A[D+j+6]=s.z,A[D+j+7]=0),b===!0&&(s.fromBufferAttribute(J,W),A[D+j+8]=s.x,A[D+j+9]=s.y,A[D+j+10]=s.z,A[D+j+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new Wt(S,T)},i.set(o,u),o.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function t2(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var e2={[_0]:"LINEAR_TONE_MAPPING",[v0]:"REINHARD_TONE_MAPPING",[y0]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[S0]:"AGX_TONE_MAPPING",[M0]:"NEUTRAL_TONE_MAPPING",[x0]:"CUSTOM_TONE_MAPPING"};function n2(e,t,n,i,s,a){let r=new fi(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Is;f.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pn([0,2,0,0,2,0],2));let p=new yf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ai(f,p),d=new Tc(-1,1,1,-1,0,1),v=null,b=null,_=!1,h,m=null,x=[],S=!1;this.setSize=function(T,A){r.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let g=0;g<x.length;g++){let E=x[g];E.setSize&&E.setSize(T,A)}},this.setEffects=function(T){x=T,S=x.length>0&&x[0].isRenderPass===!0;let A=r.width,g=r.height;x.length>0&&o===null&&(o=new fi(A,g,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(A,g,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&x.some(I=>I.needsDepthTexture===!0);E!==(r.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ps(A,g),a===!0&&(c.format=Fs,c.type=yr)),r.dispose(),r.depthTexture=E?c:null,r.resolveDepthBuffer=E,r.storeMultisampledDepthBuffer=E);for(let I=0;I<x.length;I++){let C=x[I];C.setSize&&C.setSize(A,g),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,A){if(_||T.toneMapping===ls&&x.length===0)return!1;if(m=A,A!==null){let g=A.width,E=A.height;(r.width!==g||r.height!==E)&&this.setSize(g,E)}return S===!1&&T.setRenderTarget(r),h=T.toneMapping,T.toneMapping=ls,!0},this.hasRenderPass=function(){return S},this.end=function(T,A){T.toneMapping=h,_=!0;let g=r,E=o;for(let I=0;I<x.length;I++){let C=x[I];C.enabled!==!1&&(C.render(T,E,g,A),C.needsSwap!==!1&&(g=E,E=E===o?l:o))}if(v!==T.outputColorSpace||b!==T.toneMapping){v=T.outputColorSpace,b=T.toneMapping,p.defines={},te.getTransfer(v)===ue&&(p.defines.SRGB_TRANSFER="");let I=e2[b];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(m),T.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var vb=new Fn,yb=new Ps(1,1),xb=new mc(1),Sb=new cc,Mb=new mf,bb=new pc,Q1=[],j1=[],$1=new Float32Array(16),tb=new Float32Array(9),eb=new Float32Array(4);function Qo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Q1[s];if(a===void 0&&(a=new Float32Array(s),Q1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ad(e,t){let n=j1[t];n===void 0&&(n=new Int32Array(t),j1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function i2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function s2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function r2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function o2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;eb.set(i),e.uniformMatrix2fv(this.addr,!1,eb),$e(n,i)}}function l2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;tb.set(i),e.uniformMatrix3fv(this.addr,!1,tb),$e(n,i)}}function c2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;$1.set(i),e.uniformMatrix4fv(this.addr,!1,$1),$e(n,i)}}function u2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function h2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function f2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function d2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function p2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function m2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function g2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function _2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function wd(e){return e.version===0&&(e.compareFunction=U0,e.needsUpdate=!0),e}function v2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=wd(yb):a=vb,n.setTexture2D(t||a,s)}function y2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Mb,s)}function x2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=wd(xb):a=bb,n.setTextureCube(t||a,s)}function S2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Sb,s)}function M2(e){switch(e){case 5126:return i2;case 35664:return s2;case 35665:return a2;case 35666:return r2;case 35674:return o2;case 35675:return l2;case 35676:return c2;case 5124:case 35670:return u2;case 35667:case 35671:return h2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return S2}}function b2(e,t){e.uniform1fv(this.addr,t)}function E2(e,t){let n=Qo(t,this.size,2);e.uniform2fv(this.addr,n)}function T2(e,t){let n=Qo(t,this.size,3);e.uniform3fv(this.addr,n)}function A2(e,t){let n=Qo(t,this.size,4);e.uniform4fv(this.addr,n)}function w2(e,t){let n=Qo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function R2(e,t){let n=Qo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function C2(e,t){let n=Qo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function D2(e,t){e.uniform1iv(this.addr,t)}function N2(e,t){e.uniform2iv(this.addr,t)}function L2(e,t){e.uniform3iv(this.addr,t)}function U2(e,t){e.uniform4iv(this.addr,t)}function O2(e,t){e.uniform1uiv(this.addr,t)}function I2(e,t){e.uniform2uiv(this.addr,t)}function P2(e,t){e.uniform3uiv(this.addr,t)}function B2(e,t){e.uniform4uiv(this.addr,t)}function F2(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=wd(yb):r=vb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function z2(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Mb,a[r])}function H2(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=wd(xb):r=bb;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function G2(e,t,n){let i=this.cache,s=t.length,a=Ad(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Sb,a[r])}function V2(e){switch(e){case 5126:return b2;case 35664:return E2;case 35665:return T2;case 35666:return A2;case 35674:return w2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return D2;case 35667:case 35671:return N2;case 35668:case 35672:return L2;case 35669:case 35673:return U2;case 5125:return O2;case 36294:return I2;case 36295:return P2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}var k0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=M2(n.type)}},X0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=V2(n.type)}},W0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},G0=/(\w+)(\])?(\[|\.)?/g;function nb(e,t){e.seq.push(t),e.map[t.id]=t}function k2(e,t,n){let i=e.name,s=i.length;for(G0.lastIndex=0;;){let a=G0.exec(i),r=G0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){nb(n,c===void 0?new k0(o,e,t):new X0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new W0(o),nb(n,p)),n=p}}}var Ko=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);k2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function ib(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var X2=37297,W2=0;function q2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var sb=new Pt;function Y2(e){te._getMatrix(sb,te.workingColorSpace,e);let t=`mat3( ${sb.elements.map(n=>n.toFixed(4))} )`;switch(te.getTransfer(e)){case lc:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ab(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+q2(e.getShaderSource(t),o)}else return a}function Z2(e,t){let n=Y2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var J2={[_0]:"Linear",[v0]:"Reinhard",[y0]:"Cineon",[Rc]:"ACESFilmic",[S0]:"AgX",[M0]:"Neutral",[x0]:"Custom"};function K2(e,t){let n=J2[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var bd=new G;function Q2(){te.getLuminanceCoefficients(bd);let e=bd.x.toFixed(4),t=bd.y.toFixed(4),n=bd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fc).join(`
`)}function $2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function tD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Fc(e){return e!==""}function rb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ob(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eD=/^[ \t]*#include +<([\w\d./]+)>/gm;function q0(e){return e.replace(eD,nD)}function nD(e,t){let n=qt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return q0(n)}var iD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lb(e){return e.replace(iD,sD)}function sD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function cb(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var aD={[wc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function rD(e){return aD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oD={[Zo]:"ENVMAP_MODE_REFRACTION"};function lD(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":oD[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cD={[g0]:"ENVMAP_BLENDING_MULTIPLY",[A1]:"ENVMAP_BLENDING_MIX",[w1]:"ENVMAP_BLENDING_ADD"};function uD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":cD[e.combine]||"ENVMAP_BLENDING_NONE"}function hD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=rD(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=lD(n),p=uD(n),u=j2(n),d=$2(a),v=s.createProgram(),b,_,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Fc).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Fc).join(`
`),_.length>0&&(_+=`
`)):(b=[cb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fc).join(`
`),_=[cb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ls?"#define TONE_MAPPING":"",n.toneMapping!==ls?qt.tonemapping_pars_fragment:"",n.toneMapping!==ls?K2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Z2("linearToOutputTexel",n.outputColorSpace),Q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fc).join(`
`)),r=q0(r),r=rb(r,n),r=ob(r,n),o=q0(o),o=rb(o,n),o=ob(o,n),r=lb(r),o=lb(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",n.glslVersion===O0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let m=h+b+r,x=h+_+o,S=ib(s,s.VERTEX_SHADER,m),T=ib(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(e.debug.checkShaderErrors){let P=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(S)||"",J=s.getShaderInfoLog(T)||"",D=P.trim(),W=V.trim(),j=J.trim(),q=!0,at=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,S,T);else{let O=ab(s,S,"vertex"),H=ab(s,T,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+O+`
`+H)}else D!==""?Lt("WebGLProgram: Program Info Log:",D):(W===""||j==="")&&(at=!1);at&&(C.diagnostics={runnable:q,programLog:D,vertexShader:{log:W,prefix:b},fragmentShader:{log:j,prefix:_}})}s.deleteShader(S),s.deleteShader(T),g=new Ko(s,v),E=tD(s,v)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,X2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var fD=0,Y0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Z0(t),n.set(t,i)),i}},Z0=class{constructor(t){this.id=fD++,this.code=t,this.usedTimes=0}};function dD(e){return e===Ua||e===Oc||e===Ic}function pD(e,t,n,i,s,a){let r=new Ho,o=new Y0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,E,I,C,P,V){let J=C.fog,D=P.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=t.get(g.envMap||W,j),at=u[g.type],O=i.precision;g.precision!==null&&(O=i.getMaxPrecision(g.precision),O!==g.precision&&Lt("WebGLProgram.getParameters:",g.precision,"not supported, using",O,"instead."));let H=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Z=H!==void 0?H.length:0,it=0;D.morphAttributes.position!==void 0&&(it=1),D.morphAttributes.normal!==void 0&&(it=2),D.morphAttributes.color!==void 0&&(it=3);let dt,B,ot,rt;if(at){let yt=us[at];dt=yt.vertexShader,B=yt.fragmentShader}else{dt=g.vertexShader,B=g.fragmentShader;let yt=o.getVertexShaderStage(g),fe=o.getFragmentShaderStage(g);o.update(g,yt,fe),ot=yt.id,rt=fe.id}let tt=e.getRenderTarget(),et=e.state.buffers.depth.getReversed(),St=P.isInstancedMesh===!0,Bt=P.isBatchedMesh===!0,bt=!!g.map,kt=!!g.matcap,Yt=!!q,Ut=Yt&&q.isPMREMTexture===!0,ze=!!g.aoMap,Ce=!!g.lightMap,ke=!!g.bumpMap&&g.wireframe===!1,le=!!g.normalMap,Rn=!!g.displacementMap,_e=!!g.emissiveMap,Me=!!g.metalnessMap,ve=!!g.roughnessMap,Pe=g.anisotropy>0,L=g.clearcoat>0,Le=g.diffuseRoughness>0,he=g.dispersion>0,ie=g.retroreflectivity>0,gt=g.iridescence>0,be=g.sheen>0,Dt=g.transmission>0,Ct=Pe&&!!g.anisotropyMap,w=L&&!!g.clearcoatMap,y=L&&!!g.clearcoatNormalMap,U=L&&!!g.clearcoatRoughnessMap,st=Le&&!!g.diffuseRoughnessMap,Q=gt&&!!g.iridescenceMap,ft=gt&&!!g.iridescenceThicknessMap,mt=be&&!!g.sheenColorMap,K=be&&!!g.sheenRoughnessMap,$=!!g.specularMap,ut=!!g.specularColorMap,R=!!g.specularIntensityMap,Y=Dt&&!!g.transmissionMap,k=Dt&&!!g.thicknessMap,pt=!!g.gradientMap,lt=!!g.alphaMap,ht=g.alphaTest>0,wt=!!g.alphaHash,Gt=!!g.extensions,ct=ls;g.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ct=e.toneMapping);let Nt=Ut?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Xt={shaderID:at,shaderType:g.type,shaderName:g.name,vertexShader:dt,fragmentShader:B,defines:g.defines,customVertexShaderID:ot,customFragmentShaderID:rt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:O,batching:Bt,batchingColor:Bt&&P._colorsTexture!==null,instancing:St,instancingColor:St&&P.instanceColor!==null,instancingMorph:St&&P.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:bt,matcap:kt,envMap:Yt,envMapMode:Yt&&q.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?Nt.length-1:null,envMapSize:Ut?Nt[0].width:null,aoMap:ze,lightMap:Ce,bumpMap:ke,normalMap:le,displacementMap:Rn,emissiveMap:_e,normalMapObjectSpace:le&&g.normalMapType===D1,normalMapTangentSpace:le&&g.normalMapType===Sd,packedNormalMap:le&&g.normalMapType===Sd&&dD(g.normalMap.format),metalnessMap:Me,roughnessMap:ve,anisotropy:Pe,anisotropyMap:Ct,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:U,diffuseRoughness:Le,diffuseRoughnessMap:st,dispersion:he,retroreflection:ie,iridescence:gt,iridescenceMap:Q,iridescenceThicknessMap:ft,sheen:be,sheenColorMap:mt,sheenRoughnessMap:K,specularMap:$,specularColorMap:ut,specularIntensityMap:R,transmission:Dt,transmissionMap:Y,thicknessMap:k,gradientMap:pt,opaque:g.transparent===!1&&g.blending===Yo&&g.alphaToCoverage===!1,alphaMap:lt,alphaTest:ht,alphaHash:wt,combine:g.combine,mapUv:bt&&d(g.map.channel),aoMapUv:ze&&d(g.aoMap.channel),lightMapUv:Ce&&d(g.lightMap.channel),bumpMapUv:ke&&d(g.bumpMap.channel),normalMapUv:le&&d(g.normalMap.channel),displacementMapUv:Rn&&d(g.displacementMap.channel),emissiveMapUv:_e&&d(g.emissiveMap.channel),metalnessMapUv:Me&&d(g.metalnessMap.channel),roughnessMapUv:ve&&d(g.roughnessMap.channel),anisotropyMapUv:Ct&&d(g.anisotropyMap.channel),clearcoatMapUv:w&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(g.sheenRoughnessMap.channel),specularMapUv:$&&d(g.specularMap.channel),specularColorMapUv:ut&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:Y&&d(g.transmissionMap.channel),thicknessMapUv:k&&d(g.thicknessMap.channel),alphaMapUv:lt&&d(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(le||Pe),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(bt||lt),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&le===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:et,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:it,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.filter(yt=>yt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:ct,decodeVideoTexture:bt&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===ue,decodeVideoTextureEmissive:_e&&g.emissiveMap.isVideoTexture===!0&&te.getTransfer(g.emissiveMap.colorSpace)===ue,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===wi,flipSided:g.side===zn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function b(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)E.push(I),E.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(_(E,g),h(E,g),E.push(e.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function _(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function h(g,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.diffuseRoughness&&r.enable(25),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function m(g){let E=u[g.type],I;if(E){let C=us[E];I=X1.clone(C.uniforms)}else I=g.uniforms;return I}function x(g,E){let I=f.get(E);return I!==void 0?++I.usedTimes:(I=new hD(e,E,g,s),c.push(I),f.set(E,I)),I}function S(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:m,acquireProgram:x,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:A}}function mD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function gD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function ub(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function hb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,_,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:_,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=_,m.group=h),t++,m}function l(u,d,v,b,_,h,m){m.reversedDepth===!0&&(_=-_);let x=o(u,d,v,b,_,h);v.transmission>0?i.push(x):v.transparent===!0?s.push(x):n.push(x)}function c(u,d,v,b,_,h){let m=o(u,d,v,b,_,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||gD),i.length>1&&i.sort(d||ub),s.length>1&&s.sort(d||ub)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function _D(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new hb,e.set(i,[r])):s>=a.length?(r=new hb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function vD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new zt};break;case"SpotLight":n={position:new G,direction:new G,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function yD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var xD=0;function SD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function MD(e){let t=new vD,n=yD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,a=new Ne,r=new Ne;function o(c){let f=0,p=0,u=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let d=0,v=0,b=0,_=0,h=0,m=0,x=0,S=0,T=0,A=0,g=0,E=0,I=0,C=0;c.sort(SD);for(let V=0,J=c.length;V<J;V++){let D=c[V],W=D.color,j=D.intensity,q=D.distance,at=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ua?at=D.shadow.map.texture:at=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=W.r*j,p+=W.g*j,u+=W.b*j;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],j);C++}else if(D.isSunLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,Z=n.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[v]=Z,i.sunShadowMap[v]=at;let it=H.getViewportCount();for(let dt=0;dt<it;dt++)i.sunShadowMatrix[b+dt]=H.getMatrix(dt),i.sunShadowCascade[b+dt]=H._cascadeData[dt];b+=it,v++}i.sun[d]=O,d++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,Z=n.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=at,i.directionalShadowMatrix[_]=D.shadow.matrix,T++}i.directional[_]=O,_++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(W).multiplyScalar(j),O.distance=q,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[m]=O;let H=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,H.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[m]=H.matrix,D.castShadow){let Z=n.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=at,g++}m++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(W).multiplyScalar(j),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=O,x++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let H=D.shadow,Z=n.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,i.pointShadow[h]=Z,i.pointShadowMap[h]=at,i.pointShadowMatrix[h]=D.shadow.matrix,A++}i.point[h]=O,h++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(j),O.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[S]=O,S++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let P=i.hash;(P.sunLength!==d||P.directionalLength!==_||P.pointLength!==h||P.spotLength!==m||P.rectAreaLength!==x||P.hemiLength!==S||P.numSunShadows!==v||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==g||P.numSpotMaps!==E||P.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=_,i.spot.length=m,i.rectArea.length=x,i.point.length=h,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,P.sunLength=d,P.directionalLength=_,P.pointLength=h,P.spotLength=m,P.rectAreaLength=x,P.hemiLength=S,P.numSunShadows=v,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=g,P.numSpotMaps=E,P.numLightProbes=C,i.version=xD++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,_=0,h=f.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let S=c[m];if(S.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),p++}else if(S.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),u++}else if(S.isSpotLight){let T=i.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),v++}else if(S.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),r.identity(),a.copy(S.matrixWorld),a.premultiply(h),r.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(S.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),d++}else if(S.isHemisphereLight){let T=i.hemi[_];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),_++}}}return{setup:o,setupView:l,state:i}}function fb(e){let t=new MD(e),n=[],i=[],s=[];function a(p){f.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function bD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new fb(e),t.set(s,[o])):a>=r.length?(o=new fb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var ED=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TD=`uniform sampler2D shadow_pass;
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
}`,AD=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],wD=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],db=new Ne,Bc=new G,V0=new G;function RD(e,t,n){let i=new Ra,s=new Wt,a=new Wt,r=new Ie,o=new Sf,l=new Mf,c={},f=n.maxTextureSize,p={[La]:zn,[zn]:La,[wi]:wi},u=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:ED,fragmentShader:TD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Is;v.setAttribute("position",new as(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ai(v,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(A,g,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===If&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wc);let I=e.getRenderTarget(),C=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),V=e.state;V.setBlending(gr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let J=h!==this.type;J&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=A.length;D<W;D++){let j=A[D],q=j.shadow;if(q===void 0){Lt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let at=q.getFrameExtents();s.multiply(at),a.copy(q.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/at.x),s.x=a.x*at.x,q.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/at.y),s.y=a.y*at.y,q.mapSize.y=a.y));let O=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=O,q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===qo){if(j.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new fi(s.x,s.y,{format:Ua,type:Gi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Ps(s.x,s.y,Hi),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Os,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=cn,q.map.depthTexture.magFilter=cn}else j.isPointLight?(q.map=new zc(s.x),q.map.depthTexture=new mc(s.x,zi)):(q.map=new fi(s.x,s.y),q.map.depthTexture=new Ps(s.x,s.y,zi)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Os,this.type===wc?(q.map.depthTexture.compareFunction=O?L0:N0,q.map.depthTexture.minFilter=Bn,q.map.depthTexture.magFilter=Bn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=cn,q.map.depthTexture.magFilter=cn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let H=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,E);let Z=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:E.layers;for(let it=0;it<H;it++){let dt=q.getCamera(it);if(j.isPointLight){let B=q.camera,ot=q.matrix,rt=j.distance||B.far;rt!==B.far&&(B.far=rt,B.updateProjectionMatrix()),Bc.setFromMatrixPosition(j.matrixWorld),B.position.copy(Bc),V0.copy(B.position),V0.add(AD[it]),B.up.copy(wD[it]),B.lookAt(V0),B.updateMatrixWorld(),ot.makeTranslation(-Bc.x,-Bc.y,-Bc.z),db.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q._frustum.setFromProjectionMatrix(db,B.coordinateSystem,B.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,it),e.clear();else{it===0&&(e.setRenderTarget(q.map),e.clear());let B=q.getViewport(it);r.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),V.viewport(r)}i=q.getFrustum(it),S(g,E,dt,j,Z,this.type)}q.isPointLightShadow!==!0&&this.type===qo&&m(q,E),q.needsUpdate=!1}h=this.type,_.needsUpdate=!1,e.setRenderTarget(I,C,P)};function m(A,g){let E=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(s.x,s.y,{format:Ua,type:Gi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(g,null,E,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(g,null,E,d,b,null)}function x(A,g,E,I){let C=null,P=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)C=P;else if(C=E.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let V=C.uuid,J=g.uuid,D=c[V];D===void 0&&(D={},c[V]=D);let W=D[J];W===void 0&&(W=C.clone(),D[J]=W,g.addEventListener("dispose",T)),C=W}if(C.visible=g.visible,C.wireframe=g.wireframe,I===qo?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:p[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let V=e.properties.get(C);V.light=E}return C}function S(A,g,E,I,C,P){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===qo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let D=t.update(A),W=A.material;if(Array.isArray(W)){let j=D.groups;for(let q=0,at=j.length;q<at;q++){let O=j[q],H=W[O.materialIndex];if(H&&H.visible){let Z=x(A,H,I,P);A.onBeforeShadow(e,A,g,E,D,Z,O),e.renderBufferDirect(E,null,D,Z,A,O),A.onAfterShadow(e,A,g,E,D,Z,O)}}}else if(W.visible){let j=x(A,W,I,P);A.onBeforeShadow(e,A,g,E,D,j,null),e.renderBufferDirect(E,null,D,j,A,null),A.onAfterShadow(e,A,g,E,D,j,null)}}let J=A.children;for(let D=0,W=J.length;D<W;D++)S(J[D],g,E,I,C,P)}function T(A){A.target.removeEventListener("dispose",T);for(let E in c){let I=c[E],C=A.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function CD(e,t){function n(){let R=!1,Y=new Ie,k=null,pt=new Ie(0,0,0,0);return{setMask:function(lt){k!==lt&&!R&&(e.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){R=lt},setClear:function(lt,ht,wt,Gt,ct){ct===!0&&(lt*=Gt,ht*=Gt,wt*=Gt),Y.set(lt,ht,wt,Gt),pt.equals(Y)===!1&&(e.clearColor(lt,ht,wt,Gt),pt.copy(Y))},reset:function(){R=!1,k=null,pt.set(-1,0,0,0)}}}function i(){let R=!1,Y=!1,k=null,pt=null,lt=null;return{setReversed:function(ht){if(Y!==ht){let wt=t.get("EXT_clip_control");ht?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Y=ht;let Gt=lt;lt=null,this.setClear(Gt)}},getReversed:function(){return Y},setTest:function(ht){ht?et(e.DEPTH_TEST):St(e.DEPTH_TEST)},setMask:function(ht){k!==ht&&!R&&(e.depthMask(ht),k=ht)},setFunc:function(ht){if(Y&&(ht=G1[ht]),pt!==ht){switch(ht){case ef:e.depthFunc(e.NEVER);break;case nf:e.depthFunc(e.ALWAYS);break;case sf:e.depthFunc(e.LESS);break;case Io:e.depthFunc(e.LEQUAL);break;case af:e.depthFunc(e.EQUAL);break;case rf:e.depthFunc(e.GEQUAL);break;case of:e.depthFunc(e.GREATER);break;case lf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=ht}},setLocked:function(ht){R=ht},setClear:function(ht){lt!==ht&&(lt=ht,Y&&(ht=1-ht),e.clearDepth(ht))},reset:function(){R=!1,k=null,pt=null,lt=null,Y=!1}}}function s(){let R=!1,Y=null,k=null,pt=null,lt=null,ht=null,wt=null,Gt=null,ct=null;return{setTest:function(Nt){R||(Nt?et(e.STENCIL_TEST):St(e.STENCIL_TEST))},setMask:function(Nt){Y!==Nt&&!R&&(e.stencilMask(Nt),Y=Nt)},setFunc:function(Nt,Xt,yt){(k!==Nt||pt!==Xt||lt!==yt)&&(e.stencilFunc(Nt,Xt,yt),k=Nt,pt=Xt,lt=yt)},setOp:function(Nt,Xt,yt){(ht!==Nt||wt!==Xt||Gt!==yt)&&(e.stencilOp(Nt,Xt,yt),ht=Nt,wt=Xt,Gt=yt)},setLocked:function(Nt){R=Nt},setClear:function(Nt){ct!==Nt&&(e.clearStencil(Nt),ct=Nt)},reset:function(){R=!1,Y=null,k=null,pt=null,lt=null,ht=null,wt=null,Gt=null,ct=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,_=!1,h=null,m=null,x=null,S=null,T=null,A=null,g=null,E=new zt(0,0,0),I=0,C=!1,P=null,V=null,J=null,D=null,W=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,O=e.getParameter(e.VERSION);O.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=at>=1):O.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=at>=2);let H=null,Z={},it=e.getParameter(e.SCISSOR_BOX),dt=e.getParameter(e.VIEWPORT),B=new Ie().fromArray(it),ot=new Ie().fromArray(dt);function rt(R,Y,k,pt){let lt=new Uint8Array(4),ht=e.createTexture();e.bindTexture(R,ht),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<k;wt++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(Y,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,lt):e.texImage2D(Y+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,lt);return ht}let tt={};tt[e.TEXTURE_2D]=rt(e.TEXTURE_2D,e.TEXTURE_2D,1),tt[e.TEXTURE_CUBE_MAP]=rt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[e.TEXTURE_2D_ARRAY]=rt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),tt[e.TEXTURE_3D]=rt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(Io),ke(!1),le(u0),et(e.CULL_FACE),ze(gr);function et(R){f[R]!==!0&&(e.enable(R),f[R]=!0)}function St(R){f[R]!==!1&&(e.disable(R),f[R]=!1)}function Bt(R,Y){return u[R]!==Y?(e.bindFramebuffer(R,Y),u[R]=Y,R===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Y),R===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Y),!0):!1}function bt(R,Y){let k=v,pt=!1;if(R){k=d.get(Y),k===void 0&&(k=[],d.set(Y,k));let lt=R.textures;if(k.length!==lt.length||k[0]!==e.COLOR_ATTACHMENT0){for(let ht=0,wt=lt.length;ht<wt;ht++)k[ht]=e.COLOR_ATTACHMENT0+ht;k.length=lt.length,pt=!0}}else k[0]!==e.BACK&&(k[0]=e.BACK,pt=!0);pt&&e.drawBuffers(k)}function kt(R){return b!==R?(e.useProgram(R),b=R,!0):!1}let Yt={[_r]:e.FUNC_ADD,[c1]:e.FUNC_SUBTRACT,[u1]:e.FUNC_REVERSE_SUBTRACT};Yt[h1]=e.MIN,Yt[f1]=e.MAX;let Ut={[d1]:e.ZERO,[p1]:e.ONE,[m1]:e.SRC_COLOR,[p0]:e.SRC_ALPHA,[S1]:e.SRC_ALPHA_SATURATE,[y1]:e.DST_COLOR,[_1]:e.DST_ALPHA,[g1]:e.ONE_MINUS_SRC_COLOR,[m0]:e.ONE_MINUS_SRC_ALPHA,[x1]:e.ONE_MINUS_DST_COLOR,[v1]:e.ONE_MINUS_DST_ALPHA,[M1]:e.CONSTANT_COLOR,[b1]:e.ONE_MINUS_CONSTANT_COLOR,[E1]:e.CONSTANT_ALPHA,[T1]:e.ONE_MINUS_CONSTANT_ALPHA};function ze(R,Y,k,pt,lt,ht,wt,Gt,ct,Nt){if(R===gr){_===!0&&(St(e.BLEND),_=!1);return}if(_===!1&&(et(e.BLEND),_=!0),R!==l1){if(R!==h||Nt!==C){if((m!==_r||T!==_r)&&(e.blendEquation(e.FUNC_ADD),m=_r,T=_r),Nt)switch(R){case Yo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h0:e.blendFunc(e.ONE,e.ONE);break;case f0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case d0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:It("WebGLState: Invalid blending: ",R);break}else switch(R){case Yo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case f0:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",R);break}x=null,S=null,A=null,g=null,E.set(0,0,0),I=0,h=R,C=Nt}return}lt=lt||Y,ht=ht||k,wt=wt||pt,(Y!==m||lt!==T)&&(e.blendEquationSeparate(Yt[Y],Yt[lt]),m=Y,T=lt),(k!==x||pt!==S||ht!==A||wt!==g)&&(e.blendFuncSeparate(Ut[k],Ut[pt],Ut[ht],Ut[wt]),x=k,S=pt,A=ht,g=wt),(Gt.equals(E)===!1||ct!==I)&&(e.blendColor(Gt.r,Gt.g,Gt.b,ct),E.copy(Gt),I=ct),h=R,C=!1}function Ce(R,Y){R.side===wi?St(e.CULL_FACE):et(e.CULL_FACE);let k=R.side===zn;Y&&(k=!k),ke(k),R.blending===Yo&&R.transparent===!1?ze(gr):ze(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),a.setMask(R.colorWrite);let pt=R.stencilWrite;o.setTest(pt),pt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):St(e.SAMPLE_ALPHA_TO_COVERAGE)}function ke(R){P!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),P=R)}function le(R){R!==r1?(et(e.CULL_FACE),R!==V&&(R===u0?e.cullFace(e.BACK):R===o1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):St(e.CULL_FACE),V=R}function Rn(R){R!==J&&(q&&e.lineWidth(R),J=R)}function _e(R,Y,k){R?(et(e.POLYGON_OFFSET_FILL),(D!==Y||W!==k)&&(D=Y,W=k,r.getReversed()&&(Y=-Y,k=-k),e.polygonOffset(Y,k))):St(e.POLYGON_OFFSET_FILL)}function Me(R){R?et(e.SCISSOR_TEST):St(e.SCISSOR_TEST)}function ve(R){R===void 0&&(R=e.TEXTURE0+j-1),H!==R&&(e.activeTexture(R),H=R)}function Pe(R,Y,k){k===void 0&&(H===null?k=e.TEXTURE0+j-1:k=H);let pt=Z[k];pt===void 0&&(pt={type:void 0,texture:void 0},Z[k]=pt),(pt.type!==R||pt.texture!==Y)&&(H!==k&&(e.activeTexture(k),H=k),e.bindTexture(R,Y||tt[R]),pt.type=R,pt.texture=Y)}function L(){let R=Z[H];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Le(){try{e.compressedTexImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function he(){try{e.compressedTexImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function ie(){try{e.texSubImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function gt(){try{e.texSubImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function be(){try{e.compressedTexSubImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function Dt(){try{e.compressedTexSubImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function Ct(){try{e.texStorage2D(...arguments)}catch(R){It("WebGLState:",R)}}function w(){try{e.texStorage3D(...arguments)}catch(R){It("WebGLState:",R)}}function y(){try{e.texImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function U(){try{e.texImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function st(R){return p[R]!==void 0?p[R]:e.getParameter(R)}function Q(R,Y){p[R]!==Y&&(e.pixelStorei(R,Y),p[R]=Y)}function ft(R){B.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),B.copy(R))}function mt(R){ot.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),ot.copy(R))}function K(R,Y){let k=c.get(Y);k===void 0&&(k=new WeakMap,c.set(Y,k));let pt=k.get(R);pt===void 0&&(pt=e.getUniformBlockIndex(Y,R.name),e.uniformBlockBinding(Y,pt,pt),k.set(R,pt))}function $(R,Y,k){let lt=c.get(Y).get(R);l[lt]!==k&&(e.bindBufferBase(e.UNIFORM_BUFFER,lt,k),l[lt]=k)}function ut(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},H=null,Z={},u={},l={},d=new WeakMap,v=[],b=null,_=!1,h=null,m=null,x=null,S=null,T=null,A=null,g=null,E=new zt(0,0,0),I=0,C=!1,P=null,V=null,J=null,D=null,W=null,B.set(0,0,e.canvas.width,e.canvas.height),ot.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:St,bindFramebuffer:Bt,drawBuffers:bt,useProgram:kt,setBlending:ze,setMaterial:Ce,setFlipSided:ke,setCullFace:le,setLineWidth:Rn,setPolygonOffset:_e,setScissorTest:Me,activeTexture:ve,bindTexture:Pe,unbindTexture:L,compressedTexImage2D:Le,compressedTexImage3D:he,texImage2D:y,texImage3D:U,pixelStorei:Q,getParameter:st,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:Ct,texStorage3D:w,texSubImage2D:ie,texSubImage3D:gt,compressedTexSubImage2D:be,compressedTexSubImage3D:Dt,scissor:ft,viewport:mt,reset:ut}}function DD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,b=new FinalizationRegistry(w=>v.delete(w)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(w,y){return _?new OffscreenCanvas(w,y):Bo("canvas")}function m(w,y,U){let st=1,Q=Ct(w);if((Q.width>U||Q.height>U)&&(st=U/Math.max(Q.width,Q.height)),st<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ft=Math.floor(st*Q.width),mt=Math.floor(st*Q.height);u===void 0&&(u=h(ft,mt));let K=y?h(ft,mt):u;return K.width=ft,K.height=mt,K.getContext("2d").drawImage(w,0,0,ft,mt),Lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ft+"x"+mt+")."),K}else return"data"in w&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function x(w){return w.generateMipmaps}function S(w){e.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,y,U,st,Q,ft=!1){if(w!==null){if(e[w]!==void 0)return e[w];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let mt;st&&(mt=t.get("EXT_texture_norm16"),mt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===e.RED&&(U===e.FLOAT&&(K=e.R32F),U===e.HALF_FLOAT&&(K=e.R16F),U===e.UNSIGNED_BYTE&&(K=e.R8),U===e.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),U===e.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.R8UI),U===e.UNSIGNED_SHORT&&(K=e.R16UI),U===e.UNSIGNED_INT&&(K=e.R32UI),U===e.BYTE&&(K=e.R8I),U===e.SHORT&&(K=e.R16I),U===e.INT&&(K=e.R32I)),y===e.RG&&(U===e.FLOAT&&(K=e.RG32F),U===e.HALF_FLOAT&&(K=e.RG16F),U===e.UNSIGNED_BYTE&&(K=e.RG8),U===e.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),U===e.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RG8UI),U===e.UNSIGNED_SHORT&&(K=e.RG16UI),U===e.UNSIGNED_INT&&(K=e.RG32UI),U===e.BYTE&&(K=e.RG8I),U===e.SHORT&&(K=e.RG16I),U===e.INT&&(K=e.RG32I)),y===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RGB8UI),U===e.UNSIGNED_SHORT&&(K=e.RGB16UI),U===e.UNSIGNED_INT&&(K=e.RGB32UI),U===e.BYTE&&(K=e.RGB8I),U===e.SHORT&&(K=e.RGB16I),U===e.INT&&(K=e.RGB32I)),y===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),U===e.UNSIGNED_INT&&(K=e.RGBA32UI),U===e.BYTE&&(K=e.RGBA8I),U===e.SHORT&&(K=e.RGBA16I),U===e.INT&&(K=e.RGBA32I)),y===e.RGB&&(U===e.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),U===e.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),y===e.RGBA){let $=ft?lc:te.getTransfer(Q);U===e.FLOAT&&(K=e.RGBA32F),U===e.HALF_FLOAT&&(K=e.RGBA16F),U===e.UNSIGNED_BYTE&&(K=$===ue?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),U===e.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(w,y){let U;return w?y===null||y===zi||y===yr?U=e.DEPTH24_STENCIL8:y===Hi?U=e.DEPTH32F_STENCIL8:y===Jo&&(U=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===yr?U=e.DEPTH_COMPONENT24:y===Hi?U=e.DEPTH_COMPONENT32F:y===Jo&&(U=e.DEPTH_COMPONENT16),U}function E(w,y){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==Bn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function I(w){let y=new WeakRef(w);i.get(w).__ref=y,v.add(y),b.register(w,y,y)}function C(w){let y=i.get(w).__ref;y!==void 0&&(v.delete(y),b.unregister(y))}function P(w){J(w.target)}function V(w){D(w.target)}function J(w){w.removeEventListener("dispose",P),C(w),j(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&p.delete(w)}function D(w){w.removeEventListener("dispose",V),C(w),at(w)}function W(){for(let w of v){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?D(y):J(y))}v.clear(),p.clear()}function j(w){let y=i.get(w);if(y.__webglInit===void 0)return;let U=w.source,st=d.get(U);if(st){let Q=st[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&q(w),Object.keys(st).length===0&&d.delete(U)}i.remove(w)}function q(w){let y=i.get(w);e.deleteTexture(y.__webglTexture);let U=w.source,st=d.get(U);delete st[y.__cacheKey],r.memory.textures--}function at(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let U=w.depthTexture;if(U&&U.renderTarget===w&&J(U),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ft=0;ft<y.__webglFramebuffer[Q].length;ft++)e.deleteFramebuffer(y.__webglFramebuffer[Q][ft]);else e.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)e.deleteFramebuffer(y.__webglFramebuffer[Q]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let st=w.textures;for(let Q=0,ft=st.length;Q<ft;Q++){let mt=i.get(st[Q]);mt.__webglTexture&&(e.deleteTexture(mt.__webglTexture),r.memory.textures--),i.remove(st[Q])}i.remove(w)}let O=0;function H(){O=0}function Z(){return O}function it(w){O=w}function dt(){let w=O;return w>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function B(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ot(w,y){let U=i.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let st=w.image;if(st===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(U,w,y);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+y)}function rt(w,y){let U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Ce(U,w,y);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+y)}function tt(w,y){let U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Ce(U,w,y);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+y)}function et(w,y){let U=i.get(w);if(w.version>0&&U.__version!==w.version){ke(U,w,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+y)}let St={[cf]:e.REPEAT,[ui]:e.CLAMP_TO_EDGE,[uf]:e.MIRRORED_REPEAT},Bt={[cn]:e.NEAREST,[R1]:e.NEAREST_MIPMAP_NEAREST,[Cc]:e.NEAREST_MIPMAP_LINEAR,[Bn]:e.LINEAR,[Ff]:e.LINEAR_MIPMAP_NEAREST,[Bs]:e.LINEAR_MIPMAP_LINEAR},bt={[L1]:e.NEVER,[U0]:e.ALWAYS,[U1]:e.LESS,[N0]:e.LEQUAL,[O1]:e.EQUAL,[L0]:e.GEQUAL,[I1]:e.GREATER,[P1]:e.NOTEQUAL};function kt(w,y){if(y.type===Hi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Bn||y.magFilter===Ff||y.magFilter===Cc||y.magFilter===Bs||y.minFilter===Bn||y.minFilter===Ff||y.minFilter===Cc||y.minFilter===Bs)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,St[y.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,St[y.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,St[y.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Bt[y.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Bt[y.minFilter]),y.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==Cc&&y.minFilter!==Bs||y.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(w,y){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",P),I(y));let st=y.source,Q=d.get(st);Q===void 0&&(Q={},d.set(st,Q));let ft=B(y);if(ft!==w.__cacheKey){Q[ft]===void 0&&(Q[ft]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,U=!0),Q[ft].usedTimes++;let mt=Q[w.__cacheKey];mt!==void 0&&(Q[w.__cacheKey].usedTimes--,mt.usedTimes===0&&q(y)),w.__cacheKey=ft,w.__webglTexture=Q[ft].texture}return U}function Ut(w,y,U){return Math.floor(Math.floor(w/U)/y)}function ze(w,y,U,st){let ft=w.updateRanges;if(ft.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,U,st,y.data);else{ft.sort((R,Y)=>R.start-Y.start);let mt=0;for(let R=1;R<ft.length;R++){let Y=ft[mt],k=ft[R],pt=Y.start+Y.count,lt=Ut(k.start,y.width,4),ht=Ut(Y.start,y.width,4);k.start<=pt+1&&lt===ht&&Ut(k.start+k.count-1,y.width,4)===lt?Y.count=Math.max(Y.count,k.start+k.count-Y.start):(++mt,ft[mt]=k)}ft.length=mt+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),ut=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let R=0,Y=ft.length;R<Y;R++){let k=ft[R],pt=Math.floor(k.start/4),lt=Math.ceil(k.count/4),ht=pt%y.width,wt=Math.floor(pt/y.width),Gt=lt,ct=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(e.UNPACK_SKIP_ROWS,wt),n.texSubImage2D(e.TEXTURE_2D,0,ht,wt,Gt,ct,U,st,y.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function Ce(w,y,U){let st=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=e.TEXTURE_3D);let Q=Yt(w,y),ft=y.source;n.bindTexture(st,w.__webglTexture,e.TEXTURE0+U);let mt=i.get(ft);if(ft.version!==mt.__version||Q===!0){if(n.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ct=te.getPrimaries(te.workingColorSpace),Nt=y.colorSpace===zs?null:te.getPrimaries(y.colorSpace),Xt=y.colorSpace===zs||ct===Nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let $=m(y.image,!1,s.maxTextureSize);$=Dt(y,$);let ut=a.convert(y.format,y.colorSpace),R=a.convert(y.type),Y=A(y.internalFormat,ut,R,y.normalized,y.colorSpace,y.isVideoTexture);kt(st,y);let k,pt=y.mipmaps,lt=y.isVideoTexture!==!0,ht=mt.__version===void 0||Q===!0,wt=ft.dataReady,Gt=E(y,$);if(y.isDepthTexture)Y=g(y.format===Fs,y.type),ht&&(lt?n.texStorage2D(e.TEXTURE_2D,1,Y,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,Y,$.width,$.height,0,ut,R,null));else if(y.isDataTexture)if(pt.length>0){lt&&ht&&n.texStorage2D(e.TEXTURE_2D,Gt,Y,pt[0].width,pt[0].height);for(let ct=0,Nt=pt.length;ct<Nt;ct++)k=pt[ct],lt?wt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,k.width,k.height,ut,R,k.data):n.texImage2D(e.TEXTURE_2D,ct,Y,k.width,k.height,0,ut,R,k.data);y.generateMipmaps=!1}else lt?(ht&&n.texStorage2D(e.TEXTURE_2D,Gt,Y,$.width,$.height),wt&&ze(y,$,ut,R)):n.texImage2D(e.TEXTURE_2D,0,Y,$.width,$.height,0,ut,R,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){lt&&ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Y,pt[0].width,pt[0].height,$.depth);for(let ct=0,Nt=pt.length;ct<Nt;ct++)if(k=pt[ct],y.format!==Vi)if(ut!==null)if(lt){if(wt)if(y.layerUpdates.size>0){let Xt=H0(k.width,k.height,y.format,y.type);for(let yt of y.layerUpdates){let fe=k.data.subarray(yt*Xt/k.data.BYTES_PER_ELEMENT,(yt+1)*Xt/k.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,yt,k.width,k.height,1,ut,fe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,k.width,k.height,$.depth,ut,k.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ct,Y,k.width,k.height,$.depth,0,k.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?wt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,k.width,k.height,$.depth,ut,R,k.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ct,Y,k.width,k.height,$.depth,0,ut,R,k.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{lt&&ht&&n.texStorage2D(e.TEXTURE_2D,Gt,Y,pt[0].width,pt[0].height);for(let ct=0,Nt=pt.length;ct<Nt;ct++)k=pt[ct],y.format!==Vi?ut!==null?lt?wt&&n.compressedTexSubImage2D(e.TEXTURE_2D,ct,0,0,k.width,k.height,ut,k.data):n.compressedTexImage2D(e.TEXTURE_2D,ct,Y,k.width,k.height,0,k.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?wt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,k.width,k.height,ut,R,k.data):n.texImage2D(e.TEXTURE_2D,ct,Y,k.width,k.height,0,ut,R,k.data)}else if(y.isDataArrayTexture)if(lt){if(ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Y,$.width,$.height,$.depth),wt)if(y.layerUpdates.size>0){let ct=H0($.width,$.height,y.format,y.type);for(let Nt of y.layerUpdates){let Xt=$.data.subarray(Nt*ct/$.data.BYTES_PER_ELEMENT,(Nt+1)*ct/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Nt,$.width,$.height,1,ut,R,Xt)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ut,R,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Y,$.width,$.height,$.depth,0,ut,R,$.data);else if(y.isData3DTexture)lt?(ht&&n.texStorage3D(e.TEXTURE_3D,Gt,Y,$.width,$.height,$.depth),wt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ut,R,$.data)):n.texImage3D(e.TEXTURE_3D,0,Y,$.width,$.height,$.depth,0,ut,R,$.data);else if(y.isFramebufferTexture){if(ht)if(lt)n.texStorage2D(e.TEXTURE_2D,Gt,Y,$.width,$.height);else{let ct=$.width,Nt=$.height;for(let Xt=0;Xt<Gt;Xt++)n.texImage2D(e.TEXTURE_2D,Xt,Y,ct,Nt,0,ut,R,null),ct>>=1,Nt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let ct=e.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),$.parentNode!==ct){ct.appendChild($),p.add(y),ct.onpaint=Nt=>{let Xt=Nt.changedElements;for(let yt of p)Xt.includes(yt.image)&&(yt.needsUpdate=!0)},ct.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let Xt=e.RGBA,yt=e.RGBA,fe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Xt,yt,fe,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pt.length>0){if(lt&&ht){let ct=Ct(pt[0]);n.texStorage2D(e.TEXTURE_2D,Gt,Y,ct.width,ct.height)}for(let ct=0,Nt=pt.length;ct<Nt;ct++)k=pt[ct],lt?wt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,ut,R,k):n.texImage2D(e.TEXTURE_2D,ct,Y,ut,R,k);y.generateMipmaps=!1}else if(lt){if(ht){let ct=Ct($);n.texStorage2D(e.TEXTURE_2D,Gt,Y,ct.width,ct.height)}wt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,R,$)}else n.texImage2D(e.TEXTURE_2D,0,Y,ut,R,$);x(y)&&y.mipmapsAutoUpdate===!0&&S(st),mt.__version=ft.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ke(w,y,U){if(y.image.length!==6)return;let st=Yt(w,y),Q=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+U);let ft=i.get(Q);if(Q.version!==ft.__version||st===!0){n.activeTexture(e.TEXTURE0+U);let mt=te.getPrimaries(te.workingColorSpace),K=y.colorSpace===zs?null:te.getPrimaries(y.colorSpace),$=y.colorSpace===zs||mt===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ut=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let yt=0;yt<6;yt++)!ut&&!R?Y[yt]=m(y.image[yt],!0,s.maxCubemapSize):Y[yt]=R?y.image[yt].image:y.image[yt],Y[yt]=Dt(y,Y[yt]);let k=Y[0],pt=a.convert(y.format,y.colorSpace),lt=a.convert(y.type),ht=A(y.internalFormat,pt,lt,y.normalized,y.colorSpace),wt=y.isVideoTexture!==!0,Gt=ft.__version===void 0||st===!0,ct=Q.dataReady,Nt=E(y,k);kt(e.TEXTURE_CUBE_MAP,y);let Xt;if(y.isDepthTexture){if(ht=g(y.format===Fs,y.type),Gt)if(wt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ht,k.width,k.height);else for(let yt=0;yt<6;yt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,k.width,k.height,0,pt,lt,null)}else if(ut){wt&&Gt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ht,k.width,k.height);for(let yt=0;yt<6;yt++){Xt=Y[yt].mipmaps;for(let fe=0;fe<Xt.length;fe++){let en=Xt[fe];y.format!==Vi?pt!==null?wt?ct&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe,0,0,en.width,en.height,pt,en.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe,ht,en.width,en.height,0,en.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe,0,0,en.width,en.height,pt,lt,en.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe,ht,en.width,en.height,0,pt,lt,en.data)}}}else{if(Xt=y.mipmaps,wt&&Gt){Xt.length>0&&Nt++;let yt=Ct(Y[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ht,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(R){wt?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Y[yt].width,Y[yt].height,pt,lt,Y[yt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,Y[yt].width,Y[yt].height,0,pt,lt,Y[yt].data);for(let fe=0;fe<Xt.length;fe++){let Hs=Xt[fe].image[yt].image;wt?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe+1,0,0,Hs.width,Hs.height,pt,lt,Hs.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe+1,ht,Hs.width,Hs.height,0,pt,lt,Hs.data)}}else{wt?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,pt,lt,Y[yt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,pt,lt,Y[yt]);for(let fe=0;fe<Xt.length;fe++){let en=Xt[fe];wt?ct&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe+1,0,0,pt,lt,en.image[yt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,fe+1,ht,pt,lt,en.image[yt])}}}x(y)&&y.mipmapsAutoUpdate===!0&&S(e.TEXTURE_CUBE_MAP),ft.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function le(w,y,U,st,Q,ft){let mt=a.convert(U.format,U.colorSpace),K=a.convert(U.type),$=A(U.internalFormat,mt,K,U.normalized,U.colorSpace),ut=i.get(y),R=i.get(U);if(R.__renderTarget=y,!ut.__hasExternalTextures){let Y=Math.max(1,y.width>>ft),k=Math.max(1,y.height>>ft);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,ft,$,Y,k,y.depth,0,mt,K,null):n.texImage2D(Q,ft,$,Y,k,0,mt,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),gt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,st,Q,R.__webglTexture,0,ie(y)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,st,Q,R.__webglTexture,ft),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Rn(w,y,U){if(e.bindRenderbuffer(e.RENDERBUFFER,w),y.depthBuffer){let st=y.depthTexture,Q=st&&st.isDepthTexture?st.type:null,ft=g(y.stencilBuffer,Q),mt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;gt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(y),ft,y.width,y.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(y),ft,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ft,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,mt,e.RENDERBUFFER,w)}else{let st=y.textures;for(let Q=0;Q<st.length;Q++){let ft=st[Q],mt=a.convert(ft.format,ft.colorSpace),K=a.convert(ft.type),$=A(ft.internalFormat,mt,K,ft.normalized,ft.colorSpace);gt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(y),$,y.width,y.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(y),$,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,$,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(w,y,U){let st=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);Q.__renderTarget=y;let ft=st?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||ft.width!==y.width||ft.height!==y.height)&&(ft.width=y.width,ft.height=y.height,y.depthTexture.needsUpdate=!0),st?et(y.depthTexture,0):ot(y.depthTexture,0);let mt=Q.__webglTexture,K=ie(y),$=st?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,ut=y.depthTexture.format===Fs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Os)gt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ut,$,mt,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,ut,$,mt,0);else if(y.depthTexture.format===Fs)gt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ut,$,mt,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,ut,$,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(w){let y=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let st=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",Q)};st.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=st}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let st=0;st<6;st++)_e(y.__webglFramebuffer[st],w,st);else w.texture.mipmaps.length>0?_e(y.__webglFramebuffer[0],w,0):_e(y.__webglFramebuffer,w,0);else if(U){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=e.createRenderbuffer(),Rn(y.__webglDepthbuffer[st],w,!1);else{let Q=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer[st];e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ft)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Rn(y.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ft)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(w,y,U){let st=i.get(w);y!==void 0&&le(st.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Me(w)}function Pe(w){let y=w.texture,U=i.get(w),st=i.get(y);w.addEventListener("dispose",V),I(w);let Q=w.textures,ft=w.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(st.__webglTexture===void 0&&(st.__webglTexture=e.createTexture()),st.__version=y.version,r.memory.textures++),ft){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let $=0;$<y.mipmaps.length;$++)U.__webglFramebuffer[K][$]=e.createFramebuffer()}else U.__webglFramebuffer[K]=e.createFramebuffer()}else{if(y.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)U.__webglFramebuffer[K]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(mt)for(let K=0,$=Q.length;K<$;K++){let ut=i.get(Q[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&gt(w)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let $=Q[K];U.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let ut=a.convert($.format,$.colorSpace),R=a.convert($.type),Y=A($.internalFormat,ut,R,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),k=ie(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,k,Y,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,U.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Rn(U.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ft){n.bindTexture(e.TEXTURE_CUBE_MAP,st.__webglTexture),kt(e.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)le(U.__webglFramebuffer[K][$],w,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else le(U.__webglFramebuffer[K],w,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);x(y)?S(e.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(mt){for(let K=0,$=Q.length;K<$;K++){let ut=Q[K],R=i.get(ut),Y=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,R.__webglTexture),kt(Y,ut),le(U.__webglFramebuffer,w,ut,e.COLOR_ATTACHMENT0+K,Y,0),x(ut)&&S(Y)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,st.__webglTexture),kt(K,y),y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)le(U.__webglFramebuffer[$],w,y,e.COLOR_ATTACHMENT0,K,$);else le(U.__webglFramebuffer,w,y,e.COLOR_ATTACHMENT0,K,0);x(y)?S(K):y.mipmaps.length>0&&e.texParameteri(K,e.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&Me(w)}function L(w){let y=w.textures;for(let U=0,st=y.length;U<st;U++){let Q=y[U];if(x(Q)&&Q.mipmapsAutoUpdate===!0){let ft=T(w),mt=i.get(Q).__webglTexture;n.bindTexture(ft,mt),S(ft),n.unbindTexture()}}}let Le=[];function he(w){if(w.samples>0){if(gt(w)===!1){let y=w.textures,U=w.width,st=w.height,Q=e.COLOR_BUFFER_BIT,ft=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,mt=i.get(w),K=y.length>1;if(K)for(let ut=0;ut<y.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let R=i.get(y[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,R,0)}e.blitFramebuffer(0,0,U,st,0,0,U,st,Q,e.NEAREST),l===!0&&(Le.length=0,Le.push(e.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Le.push(ft),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<y.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let R=i.get(y[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,R,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function gt(w){let y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(w){let y=r.render.frame;f.get(w)!==y&&(f.set(w,y),w.update())}function Dt(w,y){let U=w.colorSpace,st=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==oc&&U!==zs&&(te.getTransfer(U)===ue?(st!==Vi||Q!==Zn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",U)),y}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=dt,this.resetTextureUnits=H,this.getTextureUnits=Z,this.setTextureUnits=it,this.setTexture2D=ot,this.setTexture2DArray=rt,this.setTexture3D=tt,this.setTextureCube=et,this.rebindTextures=ve,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=gt,this.dispose=W}function ND(e,t){function n(i,s=zs){let a,r=te.getTransfer(s);if(i===Zn)return e.UNSIGNED_BYTE;if(i===Hf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===A0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===E0)return e.BYTE;if(i===T0)return e.SHORT;if(i===Jo)return e.UNSIGNED_SHORT;if(i===zf)return e.INT;if(i===zi)return e.UNSIGNED_INT;if(i===Hi)return e.FLOAT;if(i===Gi)return e.HALF_FLOAT;if(i===R0)return e.ALPHA;if(i===C0)return e.RGB;if(i===Vi)return e.RGBA;if(i===Os)return e.DEPTH_COMPONENT;if(i===Fs)return e.DEPTH_STENCIL;if(i===D0)return e.RED;if(i===Vf)return e.RED_INTEGER;if(i===Ua)return e.RG;if(i===kf)return e.RG_INTEGER;if(i===Xf)return e.RGBA_INTEGER;if(i===Dc||i===Nc||i===Lc||i===Uc)if(r===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wf||i===qf||i===Yf||i===Zf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jf||i===Kf||i===Qf||i===jf||i===$f||i===Oc||i===td)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Jf||i===Kf)return r===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Qf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===jf)return a.COMPRESSED_R11_EAC;if(i===$f)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Oc)return a.COMPRESSED_RG11_EAC;if(i===td)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ed||i===nd||i===id||i===sd||i===ad||i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ed)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===id)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ad)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ld)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pd)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===md||i===gd||i===_d)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===md)return r===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_d)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===yd||i===Ic||i===xd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===vd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===yd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var LD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UD=`
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

}`,J0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new gc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new os({vertexShader:LD,fragmentShader:UD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ai(new _c(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},K0=class extends rs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",_=new J0,h={},m=n.getContextAttributes(),x=null,S=null,T=[],A=[],g=new Wt,E=null,I=null,C=new In;C.viewport=new Ie;let P=new In;P.viewport=new Ie;let V=[C,P],J=new Of,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ot=T[B];return ot===void 0&&(ot=new Go,T[B]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(B){let ot=T[B];return ot===void 0&&(ot=new Go,T[B]=ot),ot.getGripSpace()},this.getHand=function(B){let ot=T[B];return ot===void 0&&(ot=new Go,T[B]=ot),ot.getHandSpace()};function j(B){let ot=A.indexOf(B.inputSource);if(ot===-1)return;let rt=T[ot];rt!==void 0&&(rt.update(B.inputSource,B.frame,c||r),rt.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let B=0;B<T.length;B++){let ot=A[B];ot!==null&&(A[B]=null,T[B].disconnect(ot))}D=null,W=null,_.reset();for(let B in h)delete h[B];if(t.setRenderTarget(x),d=null,u=null,p=null,s=null,S=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(g.width,g.height,!1),I!==null){let B=I.camera;B.fov=I.fov,B.zoom=I.zoom,B.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,tt=null,et=null;m.depth&&(et=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=m.stencil?Fs:Os,tt=m.stencil?yr:zi);let St={colorFormat:n.RGBA8,depthFormat:et,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(St),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new fi(u.textureWidth,u.textureHeight,{format:Vi,type:Zn,depthTexture:new Ps(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new fi(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(B){for(let ot=0;ot<B.removed.length;ot++){let rt=B.removed[ot],tt=A.indexOf(rt);tt>=0&&(A[tt]=null,T[tt].disconnect(rt))}for(let ot=0;ot<B.added.length;ot++){let rt=B.added[ot],tt=A.indexOf(rt);if(tt===-1){for(let St=0;St<T.length;St++)if(St>=A.length){A.push(rt),tt=St;break}else if(A[St]===null){A[St]=rt,tt=St;break}if(tt===-1)break}let et=T[tt];et&&et.connect(rt)}}function O(B,ot){ot===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ot.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let ot=B.near,rt=B.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),J.near=P.near=C.near=ot,J.far=P.far=C.far=rt,(D!==J.near||W!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),D=J.near,W=J.far),J.layers.mask=B.layers.mask|6,C.layers.mask=J.layers.mask&-5,P.layers.mask=J.layers.mask&-3;let tt=B.parent,et=J.cameras;O(J,tt);for(let St=0;St<et.length;St++)O(et[St],tt);J.projectionMatrix.copy(C.projectionMatrix),J.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&B.isPerspectiveCamera&&(I={camera:B,fov:B.fov,zoom:B.zoom}),H(B,J,tt)};function H(B,ot,rt){rt===null?B.matrix.copy(ot.matrixWorld):(B.matrix.copy(rt.matrixWorld),B.matrix.invert(),B.matrix.multiply(ot.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ot.projectionMatrix),B.projectionMatrixInverse.copy(ot.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ff*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(B){return h[B]};let Z=null;function it(B,ot){if(f=ot.getViewerPose(c||r),v=ot,f!==null){let rt=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let tt=!1;rt.length!==J.cameras.length&&(J.cameras.length=0,tt=!0);for(let bt=0;bt<rt.length;bt++){let kt=rt[bt],Yt=null;if(d!==null)Yt=d.getViewport(kt);else{let ze=p.getViewSubImage(u,kt);Yt=ze.viewport,bt===0&&(t.setRenderTargetTextures(S,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(S))}let Ut=V[bt];Ut===void 0&&(Ut=new In,Ut.layers.enable(bt),Ut.viewport=new Ie,V[bt]=Ut),Ut.matrix.fromArray(kt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(kt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),bt===0&&(J.matrix.copy(Ut.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),tt===!0&&J.cameras.push(Ut)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let bt=p.getDepthInformation(rt[0]);bt&&bt.isValid&&bt.texture&&_.init(bt,s.renderState)}if(et&&et.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let bt=0;bt<rt.length;bt++){let kt=rt[bt].camera;if(kt){let Yt=h[kt];Yt||(Yt=new gc,h[kt]=Yt);let Ut=p.getCameraImage(kt);Yt.sourceTexture=Ut}}}}for(let rt=0;rt<T.length;rt++){let tt=A[rt],et=T[rt];tt!==null&&et!==void 0&&et.update(tt,ot,c||r)}Z&&Z(B,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}let dt=new pb;dt.setAnimationLoop(it),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}},OD=new Ne,Eb=new Pt;Eb.set(-1,0,0,0,1,0,0,0,1);function ID(e,t){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,B0(e)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,m,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(_,h):h.isMeshLambertMaterial?(a(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(_,h),p(_,h)):h.isMeshPhongMaterial?(a(_,h),f(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(_,h),u(_,h),h.isMeshPhysicalMaterial&&d(_,h,S)):h.isMeshMatcapMaterial?(a(_,h),v(_,h)):h.isMeshDepthMaterial?a(_,h):h.isMeshDistanceMaterial?(a(_,h),b(_,h)):h.isMeshNormalMaterial?a(_,h):h.isLineBasicMaterial?(r(_,h),h.isLineDashedMaterial&&o(_,h)):h.isPointsMaterial?l(_,h,m,x):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===zn&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===zn&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,S=m.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(OD.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Eb),_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function r(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function o(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,m,x){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*m,_.scale.value=x*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function f(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function p(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function u(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function d(_,h,m){_.ior.value=h.ior,h.diffuseRoughness>0&&(_.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zn&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.retroreflectivity>0&&(_.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,h){h.matcap&&(_.matcap.value=h.matcap)}function b(_,h){let m=t.get(h).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PD(e,t,n,i){let s={},a={};function r(m,x){let S=x.program;i.uniformBlockBinding(m,S,s[m.id])}function o(m,x){let S=s[m.id];S===void 0&&(v(m),S=l(m),s[m.id]=S,m.addEventListener("dispose",_));let T=x.program;i.updateUBOMapping(m,T);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let x=e.createBuffer(),S=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,S,T),e.bindBuffer(e.UNIFORM_BUFFER,null),x}function c(m){let x=s[m.id],S=m.uniforms,T=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,g=S.length;A<g;A++){let E=S[A];if(Array.isArray(E))for(let I=0,C=E.length;I<C;I++)f(E[I],A,I,T);else f(E,A,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,x,S,T){if(u(m,x,S,T)===!0){let A=m.__offset,g=m.value;if(Array.isArray(g)){let E=0;for(let I=0;I<g.length;I++){let C=g[I],P=b(C,!0);p(C,m.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,x,S){typeof m=="number"||typeof m=="boolean"?x[S]=m:m.isMatrix3?(x[S]=m.elements[0],x[S+1]=m.elements[1],x[S+2]=m.elements[2],x[S+3]=0,x[S+4]=m.elements[3],x[S+5]=m.elements[4],x[S+6]=m.elements[5],x[S+7]=0,x[S+8]=m.elements[6],x[S+9]=m.elements[7],x[S+10]=m.elements[8],x[S+11]=0):ArrayBuffer.isView(m)?x.set(m.subarray(0,x.length-S),S):m.toArray(x,S)}function u(m,x,S,T){let A=m.value,g=x+"_"+S;if(Array.isArray(A)){T[g]===void 0&&(T[g]=[]);let E=T[g],I=!1;for(let C=0;C<A.length;C++)d(A[C],E,C)===!0&&(I=!0);return I}return d(A,T,g)}function d(m,x,S){if(x[S]===void 0)return typeof m=="number"||typeof m=="boolean"?x[S]=m:ArrayBuffer.isView(m)?x[S]=m.slice():x[S]=m.clone(),!0;{let T=x[S];if(typeof m=="number"||typeof m=="boolean"){if(T!==m)return x[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(T.equals(m)===!1)return T.copy(m),!0}}return!1}function v(m){let x=m.uniforms,S=0,T=16;for(let g=0,E=x.length;g<E;g++){let I=Array.isArray(x[g])?x[g]:[x[g]];for(let C=0,P=I.length;C<P;C++){let V=I[C],J=Array.isArray(V.value)?V.value:[V.value],D=Array.isArray(x[g])||Array.isArray(V.value),W=S;for(let q=0,at=J.length;q<at;q++){let O=J[q],H=b(O,D),Z=S%T,it=Z%H.boundary,dt=Z+it;S+=it,dt!==0&&T-dt<H.storage&&(S+=T-dt),q===0&&(W=S),S+=H.storage}let j=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new j((S-W)/Float32Array.BYTES_PER_ELEMENT),V.__offset=W}}let A=S%T;return A>0&&(S+=T-A),m.__size=S,m.__cache={},this}function b(m,x){let S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=16,S.storage=48):m.isMatrix4?(S.boundary=16,S.storage=64):m.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",m),x===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function _(m){let x=m.target;x.removeEventListener("dispose",_),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:h}}var BD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function FD(){return cs===null&&(cs=new _f(BD,16,16,Ua,Gi),cs.name="DFG_LUT",cs.minFilter=Bn,cs.magFilter=Bn,cs.wrapS=ui,cs.wrapT=ui,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var Td=class{constructor(t={}){let{canvas:n=F1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Zn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,_=new Set([Xf,kf,Vf]),h=new Set([Zn,zi,Jo,yr,Hf,Gf]),m=new Uint32Array(4),x=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,A=null,g=[],E=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,V=null,J=null,D=null,W=null;this._outputColorSpace=Tn;let j=0,q=0,at=null,O=-1,H=null,Z=new Ie,it=new Ie,dt=null,B=new zt(0),ot=0,rt=n.width,tt=n.height,et=1,St=null,Bt=null,bt=new Ie(0,0,rt,tt),kt=new Ie(0,0,rt,tt),Yt=!1,Ut=new Ra,ze=new vf,Ce=!1,ke=!1,le=new Ne,Rn=new G,_e=new Ie,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Pe(){return at===null?et:1}let L=i;function Le(M,N){return n.getContext(M,N)}let he,ie,gt,be,Dt,Ct,w,y,U,st,Q,ft,mt,K,$,ut,R,Y,k,pt,lt,ht,wt;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Nt,!1),n.addEventListener("webglcontextrestored",Xt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),L===null){let N="webgl2";if(L=Le(N,M),L===null)throw Le(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(M){throw n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),It("WebGLRenderer: "+M.message),M}function Gt(){he=new J3(L),he.init(),lt=new ND(L,he),ie=new F3(L,he,t,lt),gt=new CD(L,he),ie.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),J=L.createFramebuffer(),D=L.createFramebuffer(),W=L.createFramebuffer(),be=new j3(L),Dt=new mD,Ct=new DD(L,he,gt,Dt,ie,lt,be),w=new Z3(C),y=new tR(L),ht=new P3(L,y),U=new K3(L,y,be,ht),st=new t2(L,U,y,ht,be),Y=new $3(L,ie,Ct),$=new z3(Dt),Q=new pD(C,w,he,ie,ht,$),ft=new ID(C,Dt),mt=new _D,K=new bD(he),R=new I3(C,w,gt,st,v,l),ut=new RD(C,st,ie),wt=new PD(L,be,ie,gt),k=new B3(L,he,be),pt=new Q3(L,he,be),be.programs=Q.programs,C.capabilities=ie,C.extensions=he,C.properties=Dt,C.renderLists=mt,C.shadowMap=ut,C.state=gt,C.info=be}b!==Zn&&(I=new n2(b,n.width,n.height,o,s,a));let ct=new K0(C,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(rt,tt,!1))},this.getSize=function(M){return M.set(rt,tt)},this.setSize=function(M,N,X=!0){if(ct.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=M,tt=N,n.width=Math.floor(M*et),n.height=Math.floor(N*et),X===!0&&(n.style.width=M+"px",n.style.height=N+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(rt*et,tt*et).floor()},this.setDrawingBufferSize=function(M,N,X){rt=M,tt=N,et=X,n.width=Math.floor(M*X),n.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===Zn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,N,X,F){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,N,X,F),gt.viewport(Z.copy(bt).multiplyScalar(Pe()).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,N,X,F){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,N,X,F),gt.scissor(it.copy(kt).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(M){gt.setScissorTest(Yt=M)},this.setOpaqueSort=function(M){St=M},this.setTransparentSort=function(M){Bt=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let F=0;if(M){let z=!1;if(at!==null){let vt=at.texture.format;z=_.has(vt)}if(z){let vt=at.texture.type,Et=h.has(vt),_t=R.getClearColor(),Mt=R.getClearAlpha(),Rt=_t.r,Ht=_t.g,Qt=_t.b;Et?(m[0]=Rt,m[1]=Ht,m[2]=Qt,m[3]=Mt,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Rt,x[1]=Ht,x[2]=Qt,x[3]=Mt,L.clearBufferiv(L.COLOR,0,x))}else F|=L.COLOR_BUFFER_BIT}N&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),R.dispose(),mt.dispose(),K.dispose(),Ct.dispose(),Dt.dispose(),w.dispose(),st.dispose(),U.dispose(),ht.dispose(),wt.dispose(),Q.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",n_),ct.removeEventListener("sessionend",i_),Oa.stop()};function Nt(M){M.preventDefault(),I0("WebGLRenderer: Context Lost."),P=!0}function Xt(){I0("WebGLRenderer: Context Restored."),P=!1;let M=be.autoReset,N=ut.enabled,X=ut.autoUpdate,F=ut.needsUpdate,z=ut.type;Gt(),be.autoReset=M,ut.enabled=N,ut.autoUpdate=X,ut.needsUpdate=F,ut.type=z}function yt(M){It("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fe(M){let N=M.target;N.removeEventListener("dispose",fe),en(N)}function en(M){Hs(M),Dt.remove(M)}function Hs(M){let N=Dt.get(M).programs;N!==void 0&&(N.forEach(function(X){Q.releaseProgram(X)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,F,z,vt){N===null&&(N=Me);let Et=z.isMesh&&z.matrixWorld.determinantAffine()<0,_t=Ib(M,N,X,F,z);gt.setMaterial(F,Et);let Mt=X.index,Rt=1;if(F.wireframe===!0){if(Mt=U.getWireframeAttribute(X),Mt===void 0)return;Rt=2}let Ht=X.drawRange,Qt=X.attributes.position,Tt=Ht.start*Rt,jt=(Ht.start+Ht.count)*Rt;vt!==null&&(Tt=Math.max(Tt,vt.start*Rt),jt=Math.min(jt,(vt.start+vt.count)*Rt)),Mt!==null?(Tt=Math.max(Tt,0),jt=Math.min(jt,Mt.count)):Qt!=null&&(Tt=Math.max(Tt,0),jt=Math.min(jt,Qt.count));let Xe=jt-Tt;if(Xe<0||Xe===1/0)return;ht.setup(z,F,_t,X,Mt);let Ee,ye=k;if(Mt!==null&&(Ee=y.get(Mt),ye=pt,ye.setIndex(Ee)),z.isMesh)F.wireframe===!0?(gt.setLineWidth(F.wireframeLinewidth*Pe()),ye.setMode(L.LINES)):ye.setMode(L.TRIANGLES);else if(z.isLine){let vn=F.linewidth;vn===void 0&&(vn=1),gt.setLineWidth(vn*Pe()),z.isLineSegments?ye.setMode(L.LINES):z.isLineLoop?ye.setMode(L.LINE_LOOP):ye.setMode(L.LINE_STRIP)}else z.isPoints?ye.setMode(L.POINTS):z.isSprite&&ye.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(he.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let vn=z._multiDrawStarts,At=z._multiDrawCounts,Cn=z._multiDrawCount,ae=Mt?y.get(Mt).bytesPerElement:1,Ia=Dt.get(F).currentProgram.getUniforms();for(let yn=0;yn<Cn;yn++)Ia.setValue(L,"_gl_DrawID",yn),ye.render(vn[yn]/ae,At[yn])}else if(z.isInstancedMesh)ye.renderInstances(Tt,Xe,z.count);else if(X.isInstancedBufferGeometry){let vn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,vn);ye.renderInstances(Tt,Xe,At)}else ye.render(Tt,Xe)};function e_(M,N,X,F){V!==null&&M.isNodeMaterial&&V.setObject(F,M),Ce===!0&&$.setState(M,X,!1),M.transparent===!0&&M.side===wi&&M.forceSinglePass===!1?(M.side=zn,M.needsUpdate=!0,jo(M,N,F),M.side=La,M.needsUpdate=!0,jo(M,N,F),M.side=wi):jo(M,N,F)}this.compile=function(M,N,X=null){X===null&&(X=M),V!==null&&V.renderStart(M,N,X),A=K.get(X),A.init(N),E.push(A),X.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),M!==X&&M.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),V!==null&&V.updateLights(A.state.lightsArray),ke=this.localClippingEnabled,Ce=$.init(this.clippingPlanes,ke),Ce===!0&&$.setGlobalState(this.clippingPlanes,N),V!==null&&ut.render(A.state.shadowsArray,X,N);let F=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let vt=z.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let _t=vt[Et];e_(_t,X,N,z),F.add(_t)}else e_(vt,X,N,z),F.add(vt)}),A=E.pop(),V!==null&&V.renderEnd(),F},this.compileAsync=function(M,N,X=null){let F=this.compile(M,N,X);return new Promise(z=>{function vt(){if(F.forEach(function(Et){let Mt=Dt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&F.delete(Et)}),F.size===0){z(M);return}setTimeout(vt,10)}he.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Rd=null;function Ub(M){Rd&&Rd(M)}function n_(){Oa.stop()}function i_(){Oa.start()}let Oa=new pb;Oa.setAnimationLoop(Ub),typeof self<"u"&&Oa.setContext(self),this.setAnimationLoop=function(M){Rd=M,ct.setAnimationLoop(M),M===null?Oa.stop():Oa.start()},ct.addEventListener("sessionstart",n_),ct.addEventListener("sessionend",i_),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;V!==null&&V.renderStart(M,N);let X=ct.enabled===!0&&ct.isPresenting===!0,F=I!==null&&(at===null||X)&&I.begin(C,at);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,N,at),A=K.get(M,E.length),A.init(N),A.state.textureUnits=Ct.getTextureUnits(),E.push(A),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ze.setFromArrayCamera(N):Ut.setFromProjectionMatrix(le,Ti,N.reversedDepth),ke=this.localClippingEnabled,Ce=$.init(this.clippingPlanes,ke),T=mt.get(M,g.length),T.init(),g.push(T),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Cd(Et,N,-1/0,C.sortObjects)}Cd(M,N,0,C.sortObjects),T.finish(),V!==null&&V.updateLights(A.state.lightsArray),C.sortObjects===!0&&T.sort(St,Bt),ve=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ve&&R.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&$.beginShadows();let z=A.state.shadowsArray;if(ut.render(z,M,N),Ce===!0&&$.endShadows(),(F&&I.hasRenderPass())===!1){let Et=T.opaque,_t=T.transmissive;if(A.setupLights(),N.isArrayCamera){let Mt=N.cameras;if(_t.length>0)for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){let Qt=Mt[Rt];a_(Et,_t,M,Qt)}ve&&R.render(M);for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){let Qt=Mt[Rt];s_(T,M,Qt,Qt.viewport)}}else _t.length>0&&a_(Et,_t,M,N),ve&&R.render(M),s_(T,M,N)}at!==null&&q===0&&(Ct.updateMultisampleRenderTarget(at),Ct.updateRenderTargetMipmap(at)),F&&I.end(C),M.isScene===!0&&M.onAfterRender(C,M,N),ht.resetDefaultState(),O=-1,H=null,E.pop(),E.length>0?(A=E[E.length-1],Ct.setTextureUnits(A.state.textureUnits),Ce===!0&&$.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,V!==null&&V.renderEnd()};function Cd(M,N,X,F){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let Et=N.isArrayCamera?ze:Ut;if(!M.frustumCulled||M.intersectsFrustum(Et)){F&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);let _t=st.update(M),Mt=M.material;Mt.visible&&T.push(M,_t,Mt,X,_e.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let Et=N.isArrayCamera?ze:Ut;if(!M.frustumCulled||M.intersectsFrustum(Et)){let _t=st.update(M),Mt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_e.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),_e.copy(_t.boundingSphere.center)),_e.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(Mt)){let Rt=_t.groups;for(let Ht=0,Qt=Rt.length;Ht<Qt;Ht++){let Tt=Rt[Ht],jt=Mt[Tt.materialIndex];jt&&jt.visible&&T.push(M,_t,jt,X,_e.z,Tt,N)}}else Mt.visible&&T.push(M,_t,Mt,X,_e.z,null,N)}}}let vt=M.children;for(let Et=0,_t=vt.length;Et<_t;Et++)Cd(vt[Et],N,X,F)}function s_(M,N,X,F){let{opaque:z,transmissive:vt,transparent:Et}=M;A.setupLightsView(X),Ce===!0&&$.setGlobalState(C.clippingPlanes,X),F&&gt.viewport(Z.copy(F)),z.length>0&&kc(z,N,X),vt.length>0&&kc(vt,N,X),Et.length>0&&kc(Et,N,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function a_(M,N,X,F){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Tt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new fi(1,1,{generateMipmaps:!0,type:Tt?Gi:Zn,minFilter:Bs,samples:Math.max(4,ie.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let vt=A.state.transmissionRenderTarget[F.id],Et=F.viewport||Z;vt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let _t=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Rt=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor(B),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),ve&&R.render(X);let Ht=C.toneMapping;C.toneMapping=ls;let Qt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),Ce===!0&&$.setGlobalState(C.clippingPlanes,F),kc(M,X,F),Ct.updateMultisampleRenderTarget(vt),Ct.updateRenderTargetMipmap(vt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let jt=0,Xe=N.length;jt<Xe;jt++){let Ee=N[jt],{object:ye,geometry:vn,material:At,group:Cn}=Ee;if(At.side===wi&&ye.layers.test(F.layers)){let ae=At.side;At.side=zn,At.needsUpdate=!0,r_(ye,X,F,vn,At,Cn),At.side=ae,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ct.updateMultisampleRenderTarget(vt),Ct.updateRenderTargetMipmap(vt))}C.setRenderTarget(_t,Mt,Rt),C.setClearColor(B,ot),Qt!==void 0&&(F.viewport=Qt),C.toneMapping=Ht}function kc(M,N,X){let F=N.isScene===!0?N.overrideMaterial:null;for(let z=0,vt=M.length;z<vt;z++){let Et=M[z],{object:_t,geometry:Mt,group:Rt}=Et,Ht=Et.material;Ht.allowOverride===!0&&F!==null&&(Ht=F),_t.layers.test(X.layers)&&r_(_t,N,X,Mt,Ht,Rt)}}function r_(M,N,X,F,z,vt){V!==null&&z.isNodeMaterial&&V.setObject(M,z),M.onBeforeRender(C,N,X,F,z,vt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,N,X,F,M,vt),z.transparent===!0&&z.side===wi&&z.forceSinglePass===!1?(z.side=zn,z.needsUpdate=!0,C.renderBufferDirect(X,N,F,z,M,vt),z.side=La,z.needsUpdate=!0,C.renderBufferDirect(X,N,F,z,M,vt),z.side=wi):C.renderBufferDirect(X,N,F,z,M,vt),M.onAfterRender(C,N,X,F,z,vt)}function o_(M){let N=0;for(let X of M)X.texture!==null&&N++;return N}function jo(M,N,X){N.isScene!==!0&&(N=Me);let F=Dt.get(M),z=A.state.lights,vt=A.state.shadowsArray,Et=z.state.version,_t=Q.getParameters(M,z.state,vt,N,X,A.state.lightProbeGridArray),Mt=Q.getProgramCacheKey(_t),Rt=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let Ht=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=w.get(M.envMap||F.environment,Ht),F.envMapRotation=F.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",fe),Rt=new Map,F.programs=Rt,F.programVariants=new Map);let Qt=Rt.get(Mt);if(Qt!==void 0){if(F.currentProgram===Qt&&F.lightsStateVersion===Et)return c_(M,_t),Qt}else _t.uniforms=Q.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,X,_t),M.onBeforeCompile(_t,C),Qt=Q.acquireProgram(_t,Mt),Rt.set(Mt,Qt),F.uniforms=_t.uniforms;let Tt=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=$.uniform),c_(M,_t),F.needsLights=Bb(M),F.lightsStateVersion=Et,F.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.sunLights.value=z.state.sun,Tt.sunLightShadows.value=z.state.sunShadow,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.sunShadowMatrix.value=z.state.sunShadowMatrix,Tt.sunShadowCascade.value=z.state.sunShadowCascade,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=o_(A.state.lightProbeGridArray),F.currentProgram=Qt,F.uniformsList=null,Qt}function Ob(M,N,X,F,z){let vt=Dt.get(M),Et=vt.currentProgram.id+","+F+","+z,_t=vt.programVariants.get(Et);return _t===void 0?(_t=jo(M,N,X),vt.programVariants.set(Et,_t)):(vt.currentProgram=_t,vt.uniformsList=null,vt.outputColorSpace=F,vt.toneMapping=z),_t}function l_(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Ko.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function c_(M,N){let X=Dt.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Ib(M,N,X,F,z){N.isScene!==!0&&(N=Me),Ct.resetTextureUnits();let vt=N.fog,Et=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,_t=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:te.workingColorSpace,Mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Rt=w.get(F.envMap||Et,Mt),Ht=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Tt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,Xe=!!X.morphAttributes.color,Ee=ls;F.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ee=C.toneMapping);let ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vn=ye!==void 0?ye.length:0,At=Dt.get(F),Cn=A.state.lights;if(Ce===!0&&(ke===!0||M!==H)){let Be=M===H&&F.id===O;$.setState(F,M,Be)}let ae=!1,Ia=!1;F.version===At.__version?At.needsLights&&At.lightsStateVersion!==Cn.state.version||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==Rt||F.fog===!0&&At.fog!==vt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==$.numPlanes||At.numIntersection!==$.numIntersection)||At.vertexAlphas!==Ht||At.vertexTangents!==Qt||At.morphTargets!==Tt||At.morphNormals!==jt||At.morphColors!==Xe||At.morphTargetsCount!==vn||At.numLightProbeGrids!==o_(A.state.lightProbeGridArray)?ae=!0:(At.outputColorSpace!==_t||At.toneMapping!==Ee)&&(Ia=!0):(ae=!0,At.__version=F.version);let yn=At.currentProgram;(ae===!0||Ia===!0)&&(yn=Ia===!0?Ob(F,N,z,_t,Ee):jo(F,N,z),V&&F.isNodeMaterial&&V.onUpdateProgram(F,yn,At));let Xc=!1,Gs=!1,Pa=!1,ne=yn.getUniforms(),un=At.uniforms;if(gt.useProgram(yn.program)&&(Xc=!0,Gs=!0,Pa=!0),F.id!==O&&(O=F.id,Gs=!0),Xc||H!==M){gt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ne.setValue(L,"projectionMatrix",M.projectionMatrix),ne.setValue(L,"viewMatrix",M.matrixWorldInverse);let nn=ne.map.cameraPosition;nn!==void 0&&nn.setValue(L,Rn.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&ne.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ne.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,Gs=!0,Pa=!0)}if(At.needsLights&&(Cn.state.sunShadowMap.length>0&&ne.setValue(L,"sunShadowMap",Cn.state.sunShadowMap,Ct),Cn.state.directionalShadowMap.length>0&&ne.setValue(L,"directionalShadowMap",Cn.state.directionalShadowMap,Ct),Cn.state.spotShadowMap.length>0&&ne.setValue(L,"spotShadowMap",Cn.state.spotShadowMap,Ct),Cn.state.pointShadowMap.length>0&&ne.setValue(L,"pointShadowMap",Cn.state.pointShadowMap,Ct)),z.isSkinnedMesh){ne.setOptional(L,z,"bindMatrix"),ne.setOptional(L,z,"bindMatrixInverse");let Be=z.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ne.setValue(L,"boneTexture",Be.boneTexture,Ct))}z.isBatchedMesh&&(ne.setOptional(L,z,"batchingTexture"),ne.setValue(L,"batchingTexture",z._matricesTexture,Ct),ne.setOptional(L,z,"batchingIdTexture"),ne.setValue(L,"batchingIdTexture",z._indirectTexture,Ct),ne.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ne.setValue(L,"batchingColorTexture",z._colorsTexture,Ct));let Ri=X.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Y.update(z,X,yn),(Gs||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,ne.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=FD()),Gs){if(ne.setValue(L,"toneMappingExposure",C.toneMappingExposure),At.needsLights&&Pb(un,Pa),vt&&F.fog===!0&&ft.refreshFogUniforms(un,vt),ft.refreshMaterialUniforms(un,F,et,tt,A.state.transmissionRenderTarget[M.id]),At.needsLights&&At.numLightProbeGrids>0){let Be=S,nn=0;for(let hs of A.state.lightProbeGridArray)hs.texture!==null&&(Be.textures[nn]=hs.texture,Be.min[nn]=hs.boundingBox.min,Be.max[nn]=hs.boundingBox.max,Be.resolution[nn]=hs.resolution,nn++);for(let hs in Be)Be[hs].length=nn;un.probesSH.value=Be.textures,un.probesMin.value=Be.min,un.probesMax.value=Be.max,un.probesResolution.value=Be.resolution}Ko.upload(L,l_(At),un,Ct)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ko.upload(L,l_(At),un,Ct),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ne.setValue(L,"center",z.center),ne.setValue(L,"modelViewMatrix",z.modelViewMatrix),ne.setValue(L,"normalMatrix",z.normalMatrix),ne.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let Be=F.uniformsGroups;for(let nn=0,hs=Be.length;nn<hs;nn++){let h_=Be[nn];wt.update(h_,yn),wt.bind(h_,yn)}}return yn}function Pb(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Bb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(M,N,X){let F=Dt.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Dt.get(M.texture).__webglTexture=N,Dt.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:X,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let X=Dt.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,X=0){at=M,j=N,q=X;let F=null,z=!1,vt=!1;if(M){let _t=Dt.get(M);if(_t.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(L.FRAMEBUFFER,_t.__webglFramebuffer),Z.copy(M.viewport),it.copy(M.scissor),dt=M.scissorTest,gt.viewport(Z),gt.scissor(it),gt.setScissorTest(dt),O=-1;return}else if(_t.__webglFramebuffer===void 0)Ct.setupRenderTarget(M);else if(_t.__hasExternalTextures)Ct.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ht=M.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&Dt.has(Ht)&&(M.width!==Ht.image.width||M.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(M)}}let Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(vt=!0);let Rt=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?F=Rt[N][X]:F=Rt[N],z=!0):M.samples>0&&Ct.useMultisampledRTT(M)===!1?F=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[X]:F=Rt,Z.copy(M.viewport),it.copy(M.scissor),dt=M.scissorTest}else Z.copy(bt).multiplyScalar(et).floor(),it.copy(kt).multiplyScalar(et).floor(),dt=Yt;if(X!==0&&(F=J),gt.bindFramebuffer(L.FRAMEBUFFER,F)&&gt.drawBuffers(M,F),gt.viewport(Z),gt.scissor(it),gt.setScissorTest(dt),z){let _t=Dt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,X)}else if(vt){let _t=N;for(let Mt=0;Mt<M.textures.length;Mt++){let Rt=Dt.get(M.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,X,_t)}}else if(M!==null&&X!==0){let _t=Dt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,X)}O=-1};function u_(M){let N=Dt.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=ie.textureFormatReadable(M.format),N.__typeReadable=ie.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,X,F,z,vt,Et,_t=0){if(!(M&&M.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){gt.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let Rt=M.textures[_t],Ht=Rt.format,Qt=Rt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);let Tt=u_(Rt);if(Tt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-F&&X>=0&&X<=M.height-z&&L.readPixels(N,X,F,z,lt.convert(Ht),lt.convert(Qt),vt)}finally{let Rt=at!==null?Dt.get(at).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,F,z,vt,Et,_t=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(N>=0&&N<=M.width-F&&X>=0&&X<=M.height-z){gt.bindFramebuffer(L.FRAMEBUFFER,Mt);let Rt=M.textures[_t],Ht=Rt.format,Qt=Rt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);let Tt=u_(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(N,X,F,z,lt.convert(Ht),lt.convert(Qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Xe=at!==null?Dt.get(at).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Xe);let Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await H1(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(jt),L.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){let F=Math.pow(2,-X),z=Math.floor(M.image.width*F),vt=Math.floor(M.image.height*F),Et=N!==null?N.x:0,_t=N!==null?N.y:0;Ct.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Et,_t,z,vt),gt.unbindTexture()},this.copyTextureToTexture=function(M,N,X=null,F=null,z=0,vt=0){let Et,_t,Mt,Rt,Ht,Qt,Tt,jt,Xe,Ee=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(X!==null)Et=X.max.x-X.min.x,_t=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Ht=X.min.y,Qt=X.isBox3?X.min.z:0;else{let ne=Math.pow(2,-z);Et=Math.floor(Ee.width*ne),_t=Math.floor(Ee.height*ne),M.isDataArrayTexture?Mt=Ee.depth:M.isData3DTexture?Mt=Math.floor(Ee.depth*ne):Mt=1,Rt=0,Ht=0,Qt=0}F!==null?(Tt=F.x,jt=F.y,Xe=F.z):(Tt=0,jt=0,Xe=0);let ye=lt.convert(N.format),vn=lt.convert(N.type),At;N.isData3DTexture?(Ct.setTexture3D(N,0),At=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ct.setTexture2DArray(N,0),At=L.TEXTURE_2D_ARRAY):(Ct.setTexture2D(N,0),At=L.TEXTURE_2D),gt.activeTexture(L.TEXTURE0),gt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),gt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),gt.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Cn=gt.getParameter(L.UNPACK_ROW_LENGTH),ae=gt.getParameter(L.UNPACK_IMAGE_HEIGHT),Ia=gt.getParameter(L.UNPACK_SKIP_PIXELS),yn=gt.getParameter(L.UNPACK_SKIP_ROWS),Xc=gt.getParameter(L.UNPACK_SKIP_IMAGES);gt.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),gt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),gt.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),gt.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),gt.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt);let Gs=M.isDataArrayTexture||M.isData3DTexture,Pa=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let ne=Dt.get(M),un=Dt.get(N),Ri=Dt.get(ne.__renderTarget),Be=Dt.get(un.__renderTarget);gt.bindFramebuffer(L.READ_FRAMEBUFFER,Ri.__webglFramebuffer),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let nn=0;nn<Mt;nn++)Gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.get(M).__webglTexture,z,Qt+nn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,vt,Xe+nn)),L.blitFramebuffer(Rt,Ht,Rt+Et,Ht+_t,Tt,jt,Tt+Et,jt+_t,L.DEPTH_BUFFER_BIT,L.NEAREST);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Dt.has(M)){let ne=Dt.get(M),un=Dt.get(N);gt.bindFramebuffer(L.READ_FRAMEBUFFER,D),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,W);for(let Ri=0;Ri<Mt;Ri++)Gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ne.__webglTexture,z,Qt+Ri):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ne.__webglTexture,z),Pa?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,vt,Xe+Ri):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,vt),z!==0?L.blitFramebuffer(Rt,Ht,Rt+Et,Ht+_t,Tt,jt,Tt+Et,jt+_t,L.COLOR_BUFFER_BIT,L.NEAREST):Pa?L.copyTexSubImage3D(At,vt,Tt,jt,Xe+Ri,Rt,Ht,Et,_t):L.copyTexSubImage2D(At,vt,Tt,jt,Rt,Ht,Et,_t);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Pa?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(At,vt,Tt,jt,Xe,Et,_t,Mt,ye,vn,Ee.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(At,vt,Tt,jt,Xe,Et,_t,Mt,ye,Ee.data):L.texSubImage3D(At,vt,Tt,jt,Xe,Et,_t,Mt,ye,vn,Ee):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Tt,jt,Et,_t,ye,vn,Ee.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Tt,jt,Ee.width,Ee.height,ye,Ee.data):L.texSubImage2D(L.TEXTURE_2D,vt,Tt,jt,Et,_t,ye,vn,Ee);gt.pixelStorei(L.UNPACK_ROW_LENGTH,Cn),gt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),gt.pixelStorei(L.UNPACK_SKIP_PIXELS,Ia),gt.pixelStorei(L.UNPACK_SKIP_ROWS,yn),gt.pixelStorei(L.UNPACK_SKIP_IMAGES,Xc),vt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&L.generateMipmap(At),gt.unbindTexture()},this.initRenderTarget=function(M){Dt.get(M).__webglFramebuffer===void 0&&Ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ct.setTextureCube(M,0):M.isData3DTexture?Ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ct.setTexture2DArray(M,0):Ct.setTexture2D(M,0),gt.unbindTexture()},this.resetState=function(){j=0,q=0,at=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),n.unpackColorSpace=te._getUnpackColorSpace()}};var HD=30,GD=45,VD=1.15,kD=.22,XD=.92,WD=.005,Tb=8,qD=.005,Ab=4,YD=3,ZD=150,Q0=1/60,JD=6,wb=48,Rb=2048,Gc=-9999,KD={spreadX:150,spreadY:100},QD={roughness:100,gloss:100,transparency:0},jD={gravityAnchor:"Center",bounciness:100,mouseForce:100,parallax:80};function $D(e,t){if(t==="Contain"){let n=Math.sqrt(1+e*e)||1;return[e/n,1/n]}return e>=1?[e,1]:[1,1/e]}function j0(e){return e?typeof e=="string"?e:e.src??"":""}var tN="varying vec3 vDecalPos;",eN=`uniform sampler2D uDecalMap;
uniform vec2 uDecalHalf;
uniform vec2 uDecalOffset;
varying vec3 vDecalPos;`,nN=`#include <map_fragment>
{
    vec3 dn = normalize(vDecalPos);
    float face = smoothstep(0.0, 0.35, dn.z);
    vec2 dUv = (vDecalPos.xy - uDecalOffset) / uDecalHalf;
    float inside = step(abs(dUv.x), 1.0) * step(abs(dUv.y), 1.0);
    vec4 slide = texture2D(uDecalMap, dUv * 0.5 + 0.5);
    diffuseColor.rgb = mix(diffuseColor.rgb, slide.rgb, face * inside * slide.a);
}`;function iN(e,t){e.userData.decal=t,e.onBeforeCompile=n=>{let i=e.userData.decal;n.uniforms.uDecalMap=i.uDecalMap,n.uniforms.uDecalHalf=i.uDecalHalf,n.uniforms.uDecalOffset=i.uDecalOffset,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+tN).replace("#include <begin_vertex>",`#include <begin_vertex>
vDecalPos = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+eN).replace("#include <map_fragment>",nN)},e.customProgramCacheKey=()=>"rubber-decal",e.needsUpdate=!0}function sN(e){e.userData.decal&&(e.userData.decal=null,e.onBeforeCompile=()=>{},e.customProgramCacheKey=()=>"rubber-plain",e.needsUpdate=!0)}function $0(e,t){for(let n of t){e.remove(n.root);for(let i of n.meshes){let s=i.material;Array.isArray(s)?s.forEach(a=>a.dispose()):s.dispose()}}}function t_(e){let{style:t,background:n="transparent",baseColor:i="#FFFFFF",accentColor:s="#EAAA00",colorMode:a="Multi",balloonColor:r="#13192B",balloonColors:o=["#111626","#151D33","#1A243E","#0D1220"],density:l=26,dotSize:c=165,lighting:f="Cinematic Drama",field:p,material:u,motion:d,sourceMode:v="Images",images:b=[]}=e,_=v==="Images"?b:[],h={...KD,...p??{}},m={...QD,...u??{}},x={...jD,...d??{}},S=(0,tn.useRef)(null),T=(0,tn.useRef)(null),A=(0,tn.useRef)([]),g=(0,tn.useRef)(null),E=(0,tn.useRef)(null),I=(0,tn.useRef)(new Map),C=(0,tn.useRef)([]),[P,V]=(0,tn.useState)(0),J=(0,tn.useRef)({});J.current={baseColor:i,accentColor:s,colorMode:a,balloonColor:r,balloonColors:o,dotSize:c,spreadX:h.spreadX,spreadY:h.spreadY,roughness:m.roughness,gloss:m.gloss,transparency:m.transparency,gravityAnchor:x.gravityAnchor,bounciness:x.bounciness,mouseForce:x.mouseForce,parallax:x.parallax,lighting:f};let D=Vc.useCallback(()=>{let O=J.current,H=O.colorMode==="Multi"&&O.balloonColors.length>0?O.balloonColors.map(ot=>new zt(ot)):[new zt(O.balloonColor)],Z=O.roughness/100,it=O.gloss/100,dt=O.transparency/100,B=O.dotSize/100;for(let ot of A.current)for(let rt=0;rt<ot.meshes.length;rt++){let tt=ot.meshes[rt].material,et=O.colorMode==="Multi"?H[Math.min(H.length-1,Math.floor(ot.colorRoll*H.length))]:H[0];tt.color.copy(et),tt.roughness=Z,tt.metalness=.02+it*.08,tt.clearcoat=it,tt.clearcoatRoughness=Math.max(.15,.4-it*.25),tt.sheen=.5+it*.5,tt.sheenColor.copy(et),tt.sheenRoughness=Math.max(.2,.5-it*.3),tt.reflectivity=.1+it*.4,tt.ior=1.45+it*.05,tt.transparent=dt>0,tt.opacity=1-dt*.6,tt.transmission=dt*.95,tt.thickness=B*1.5,tt.needsUpdate=!0}},[]),W=Vc.useCallback(()=>{let O=C.current,H=A.current,Z=O.length>0;for(let it=0;it<H.length;it++){let dt=H[it],B=Z?O[it%O.length]:null;for(let ot of dt.meshes){let rt=ot.material;if(!B){sN(rt);continue}let[tt,et]=$D(B.aspect,B.fit),St=B.fit==="Cover",Bt=St?B.offsetX/100*tt:0,bt=St?B.offsetY/100*et:0,kt=rt.userData.decal;kt?(kt.uDecalMap.value=B.texture,kt.uDecalHalf.value.set(tt,et),kt.uDecalOffset.value.set(Bt,bt)):iN(rt,{uDecalMap:{value:B.texture},uDecalHalf:{value:new Wt(tt,et)},uDecalOffset:{value:new Wt(Bt,bt)}})}B?dt.spin!==0&&(dt.spin=0,dt.quat.identity()):dt.spin===0&&(dt.spin=dt.baseSpin)}},[]);(0,tn.useEffect)(()=>{let O=S.current;if(!O)return;let H=new uc,Z=new In(GD,1,.1,1e3);Z.position.set(0,0,HD);let it=new Td({antialias:!0,alpha:!0});it.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),it.setClearColor(0,0),it.toneMapping=Rc,it.toneMappingExposure=VD,it.outputColorSpace=Tn,it.shadowMap.enabled=!0,it.shadowMap.type=If,it.domElement.style.display="block",O.appendChild(it.domElement);let dt=new bc(16777215,16777215,1.2);H.add(dt);let B=new mr(16777215,1.4);B.castShadow=!0,B.shadow.mapSize.width=Rb,B.shadow.mapSize.height=Rb,B.shadow.camera.near=.5,B.shadow.camera.far=150,B.shadow.bias=-5e-4,B.shadow.normalBias=.05,B.shadow.radius=4,H.add(B);let ot=new mr(16777215,.4);H.add(ot);let rt=new mr(16777215,.6);H.add(rt);let tt=new vc(1,wb,wb);E.current=tt;let et={scene:H,camera:Z,renderer:it,hemi:dt,key:B,fill:ot,rim:rt};T.current=et;let St=!0,Bt=new IntersectionObserver(y=>{for(let U of y)St=U.isIntersecting},{threshold:0});Bt.observe(O);let bt=()=>{let y=O.clientWidth||O.offsetWidth,U=O.clientHeight||O.offsetHeight;!y||!U||(Z.aspect=y/U,Z.updateProjectionMatrix(),it.setSize(y,U))},kt=new ResizeObserver(bt);kt.observe(O),bt();let Yt=new Wt,Ut=new G(0,0,Gc),ze=new ci(new G(0,0,1),0),Ce=new Ac,ke=y=>{let U=O.getBoundingClientRect();if(!(!U.width||!U.height)){if(y.clientX<U.left||y.clientX>U.right||y.clientY<U.top||y.clientY>U.bottom){Ut.set(0,0,Gc);return}Yt.x=(y.clientX-U.left)/U.width*2-1,Yt.y=-((y.clientY-U.top)/U.height)*2+1,Ce.setFromCamera(Yt,Z),Ce.ray.intersectPlane(ze,Ut)||Ut.set(0,0,Gc)}},le=()=>Ut.set(0,0,Gc);O.addEventListener("pointermove",ke,{passive:!0}),O.addEventListener("pointerleave",le),window.addEventListener("blur",le);let Rn=0,_e=()=>{Rn=-((O.getBoundingClientRect().top+O.offsetHeight/2-window.innerHeight/2)*.015*(J.current.parallax/100))};window.addEventListener("scroll",_e,{passive:!0}),_e();let Me=new G,ve=new G,Pe=new G,L=new G,Le=new G,he=new hi,ie=0,gt=()=>{let y=J.current,U=A.current,st=U.length,Q=y.dotSize/100,ft=Math.max(.01,y.spreadX/100),mt=Math.max(.01,y.spreadY/100),K=y.mouseForce/100*10*qD,$=.3+y.bounciness/100*.7;Me.set(0,y.gravityAnchor==="Bottom"?-15:y.gravityAnchor==="Top"?15:0,0);let ut=Math.round(20+15*Math.max(ft,mt));if(ut!==ie){ie=ut;let R=B.shadow.camera;R.left=-ut,R.right=ut,R.top=ut,R.bottom=-ut,R.updateProjectionMatrix()}for(let R=0;R<st;R++){let Y=U[R];if(Y.radius=Q*Y.jitter,ve.copy(Me).sub(Y.pos),ve.x/=ft,ve.y/=mt,Y.vel.addScaledVector(ve,WD),Ut.z!==Gc){let k=Y.pos.distanceTo(Ut);k<Tb&&(Pe.copy(Y.pos).sub(Ut),Pe.lengthSq()<1e-8&&Pe.set(0,1,0),Pe.normalize(),Y.vel.addScaledVector(Pe,(Tb-k)*K))}Y.vel.length()>Ab&&Y.vel.setLength(Ab),Y.vel.multiplyScalar(XD),Y.pos.add(Y.vel),he.setFromAxisAngle(Y.axis,Y.spin),Y.quat.multiply(he)}for(let R=0;R<YD;R++)for(let Y=0;Y<st;Y++){let k=U[Y];for(let pt=Y+1;pt<st;pt++){let lt=U[pt],ht=k.radius+lt.radius;if(Math.abs(k.pos.x-lt.pos.x)>ht||Math.abs(k.pos.y-lt.pos.y)>ht||Math.abs(k.pos.z-lt.pos.z)>ht)continue;let wt=k.pos.distanceTo(lt.pos);if(wt>=ht)continue;L.copy(k.pos).sub(lt.pos),L.lengthSq()<1e-8&&L.set(1,0,0),L.normalize();let Gt=(ht-wt)*.5;k.pos.addScaledVector(L,Gt),lt.pos.addScaledVector(L,-Gt),Le.copy(k.vel).sub(lt.vel);let ct=Le.dot(L);ct<0&&(k.vel.addScaledVector(L,-ct*$),lt.vel.addScaledVector(L,ct*$))}}Z.position.y+=(Rn-Z.position.y)*.05};g.current=gt;let be=0,Dt=typeof performance<"u"?performance.now():Date.now(),Ct=0,w=()=>{be=requestAnimationFrame(w);let y=typeof performance<"u"?performance.now():Date.now(),U=(y-Dt)/1e3;if(Dt=y,!St)return;U>.25&&(U=.25),Ct+=U;let st=0;for(;Ct>=Q0&&st<JD;)gt(),Ct-=Q0,st++;Ct>=Q0&&(Ct=0);for(let Q of A.current)Q.root.position.copy(Q.pos),Q.root.quaternion.copy(Q.quat),Q.root.scale.setScalar(Q.radius);it.render(H,Z)};return be=requestAnimationFrame(w),()=>{cancelAnimationFrame(be),Bt.disconnect(),kt.disconnect(),O.removeEventListener("pointermove",ke),O.removeEventListener("pointerleave",le),window.removeEventListener("blur",le),window.removeEventListener("scroll",_e),g.current=null,$0(H,A.current),A.current=[],E.current?.dispose(),E.current=null,H.clear(),it.dispose(),it.domElement.parentNode===O&&O.removeChild(it.domElement),T.current=null}},[]);let j=v==="Images"?_.map(O=>j0(O.image)).filter(Boolean):[],q=JSON.stringify(j);(0,tn.useEffect)(()=>{let O=JSON.parse(q),H=I.current,Z=new Set(O);for(let[rt,tt]of Array.from(H.entries()))Z.has(rt)||(tt.dispose(),H.delete(rt));let it=O.filter(rt=>!H.has(rt));if(it.length===0){V(rt=>rt+1);return}let dt=!1,B=new Sc;B.setCrossOrigin("anonymous");let ot=T.current?.renderer.capabilities.getMaxAnisotropy?.()??1;return Promise.all(it.map(rt=>new Promise(tt=>{B.load(rt,et=>tt([rt,et]),void 0,()=>tt([rt,null]))}))).then(rt=>{if(dt){for(let[,tt]of rt)tt?.dispose();return}for(let[tt,et]of rt)et&&(et.colorSpace=Tn,et.wrapS=ui,et.wrapT=ui,et.anisotropy=Math.min(8,ot),et.needsUpdate=!0,H.set(tt,et));V(tt=>tt+1)}),()=>{dt=!0}},[q,v]);let at=JSON.stringify((v==="Images"?_:[]).filter(O=>j0(O.image)).map(O=>[j0(O.image),O.fit==="Contain"?"Contain":"Cover",Math.round(O.offsetX??0),Math.round(O.offsetY??0)]));return(0,tn.useEffect)(()=>{let O=JSON.parse(at),H=I.current,Z=[];for(let[it,dt,B,ot]of O){let rt=H.get(it);if(!rt)continue;let tt=rt.image;Z.push({texture:rt,aspect:(tt?.width||1)/(tt?.height||1),fit:dt,offsetX:B,offsetY:ot})}C.current=Z,W()},[at,P,W,v]),(0,tn.useEffect)(()=>{let O=I.current;return()=>{for(let H of O.values())H.dispose();O.clear(),C.current=[]}},[]),(0,tn.useEffect)(()=>{let O=T.current,H=E.current;if(!O||!H)return;let Z=Math.max(1,Math.round(l)),it=[];for(let B=0;B<Z;B++){let ot=new yc({side:wi}),rt=new Ai(H,ot);rt.castShadow=!0,rt.receiveShadow=!0;let tt=1+(Math.random()-.5)*kD,et=(Math.random()-.5)*.01;it.push({root:rt,meshes:[rt],pos:new G((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*10),vel:new G,quat:new hi().setFromEuler(new Fi(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),axis:new G(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),spin:et,baseSpin:et,jitter:tt,radius:J.current.dotSize/100*tt,colorRoll:Math.random()}),O.scene.add(rt)}$0(O.scene,A.current),A.current=it,D(),W();let dt=g.current;if(dt)for(let B=0;B<ZD;B++)dt();return()=>{let B=T.current;B&&$0(B.scene,it),A.current===it&&(A.current=[])}},[l,D,W]),(0,tn.useEffect)(()=>{let O=T.current;if(!O)return;let{hemi:H,key:Z,fill:it,rim:dt}=O,B={h:0,s:0,l:0};new zt(i).getHSL(B);let ot=new zt().setHSL(B.h,1,Math.max(.5,B.l*.8));switch(H.color.copy(ot),H.groundColor.copy(ot).multiplyScalar(.7),Z.color.setHex(16777215),it.color.setHex(16777215),dt.color.setHex(16777215),f){case"Bright Professional":H.intensity=1.2,Z.intensity=1.5,Z.position.set(10,30,20),it.intensity=.5,it.position.set(-15,0,15),dt.intensity=.4,dt.position.set(0,-10,-20);break;case"Neutral Flat":H.intensity=1.5,Z.intensity=.8,Z.position.set(0,0,10),it.intensity=.3,it.position.set(0,0,-10),dt.intensity=0,dt.position.set(0,20,-20);break;case"Cinematic Drama":H.intensity=.9,Z.intensity=2,Z.position.set(-20,20,10),it.intensity=.4,it.position.set(20,-10,10),dt.intensity=1.2,dt.color.setHex(11184895),dt.position.set(0,10,-30);break;case"Neon Cyberpunk":H.intensity=.8,H.color.setHex(8959),Z.intensity=1.8,Z.color.setHex(16711765),Z.position.set(15,10,10),it.intensity=.6,it.color.setHex(56814),it.position.set(-15,-10,15),dt.intensity=1.5,dt.color.setHex(11141375),dt.position.set(0,20,-20);break;case"Sunset Warmth":H.intensity=1,H.color.setHex(16755285),Z.intensity=1.8,Z.color.setHex(16768426),Z.position.set(20,5,20),it.intensity=.4,it.color.setHex(5579349),it.position.set(-20,10,-10),dt.intensity=.8,dt.color.setHex(16733474),dt.position.set(0,15,-20);break;default:H.intensity=1.2,Z.intensity=1.3,Z.color.setHex(16775669),Z.position.set(15,20,20),it.intensity=.4,it.color.setHex(15792127),it.position.set(-15,-10,15),dt.intensity=.6,dt.position.set(0,20,-20);break}},[f,i]),(0,tn.useEffect)(()=>{D()},[D,i,s,a,r,o,c,m.roughness,m.gloss,m.transparency]),Vc.createElement("div",{ref:S,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",backgroundColor:n,...t}})}var Cb=[{name:"C++",color:"#38BDF8",svg:'<polygon points="64,18 104,41 104,87 64,110 24,87 24,41" fill="#00599C" fill-opacity="0.25" stroke="#38BDF8" stroke-width="4"/><text x="64" y="75" text-anchor="middle" font-family="ui-monospace,monospace" font-size="34" font-weight="800" fill="#E0F2FE">C++</text>'},{name:"Python",color:"#3776AB",svg:'<path d="M63 22c-13 0-24 2-24 11v11h24v4H30c-7 0-12 7-12 18 0 12 5 18 12 18h8V74c0-10 8-18 18-18h25c8 0 14-6 14-14V33c0-9-11-11-24-11z" fill="#3776AB"/><circle cx="49" cy="33" r="3.5" fill="#F8FAFC"/><path d="M65 106c13 0 24-2 24-11V84H65v-4h33c7 0 12-7 12-18 0-12-5-18-12-18h-8v10c0 10-8 18-18 18H47c-8 0-14 6-14 14v9c0 9 11 11 24 11z" fill="#FFD43B"/><circle cx="79" cy="95" r="3.5" fill="#0F172A"/>'},{name:"React",color:"#61DAFB",svg:'<g fill="none" stroke="#61DAFB" stroke-width="4"><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(30 64 64)"/><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(90 64 64)"/><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(150 64 64)"/></g><circle cx="64" cy="64" r="8" fill="#61DAFB"/>'},{name:"FastAPI",color:"#10B981",svg:'<circle cx="64" cy="64" r="40" fill="#10B981" fill-opacity="0.18" stroke="#10B981" stroke-width="4"/><polygon points="68,28 40,68 62,68 58,100 88,60 66,60" fill="#10B981"/>'},{name:"JavaScript",color:"#F7DF1E",svg:'<rect x="24" y="24" width="80" height="80" rx="14" fill="#F7DF1E"/><text x="88" y="92" text-anchor="end" font-family="system-ui,sans-serif" font-size="42" font-weight="900" fill="#0F172A">JS</text>'},{name:"Google Cloud",color:"#4285F4",svg:'<path d="M84 54a24 24 0 0 0-44-8 18 18 0 0 0-2 36h44a16 16 0 0 0 2-28z" fill="none" stroke="#4285F4" stroke-width="7" stroke-linejoin="round"/><path d="M40 46a24 24 0 0 1 36-6" fill="none" stroke="#EA4335" stroke-width="7" stroke-linecap="round"/><path d="M36 82h26" fill="none" stroke="#34A853" stroke-width="7" stroke-linecap="round"/>'},{name:"Linux",color:"#FCC624",svg:'<rect x="22" y="28" width="84" height="72" rx="12" fill="#18181B" stroke="#FCC624" stroke-width="4"/><polyline points="38,52 54,64 38,76" fill="none" stroke="#FCC624" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><line x1="62" y1="76" x2="86" y2="76" stroke="#FCC624" stroke-width="6" stroke-linecap="round"/>'},{name:"Git & GitHub",color:"#F05032",svg:'<g fill="none" stroke="#F05032" stroke-width="6" stroke-linecap="round"><line x1="42" y1="30" x2="42" y2="98"/><path d="M42 46c0 16 44 10 44 28"/><circle cx="42" cy="34" r="8" fill="#0B0E17"/><circle cx="42" cy="94" r="8" fill="#0B0E17"/><circle cx="86" cy="74" r="8" fill="#0B0E17"/></g>'},{name:"XGBoost",color:"#EAAA00",svg:'<g fill="none" stroke="#EAAA00" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><polyline points="24,90 48,66 68,76 100,34"/><polyline points="80,34 100,34 100,54"/><circle cx="48" cy="66" r="5" fill="#EAAA00"/><circle cx="68" cy="76" r="5" fill="#EAAA00"/></g>'},{name:"Leaflet",color:"#22C55E",svg:'<path d="M64 22c-18 14-30 32-30 50a30 30 0 0 0 60 0c0-18-12-36-30-50z" fill="#22C55E" fill-opacity="0.2" stroke="#22C55E" stroke-width="5"/><line x1="64" y1="38" x2="64" y2="98" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/><path d="M64 60l16-8M64 78l16-8" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>'},{name:"Java",color:"#EA2D2E",svg:'<path d="M40 56h42v20a21 21 0 0 1-42 0V56z" fill="#EA2D2E" fill-opacity="0.25" stroke="#EA2D2E" stroke-width="5"/><path d="M82 60h8a8 8 0 0 1 0 16h-8" fill="none" stroke="#EA2D2E" stroke-width="5"/><line x1="34" y1="102" x2="88" y2="102" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/><path d="M54 44c-4-8 6-12 2-20M68 44c-4-8 6-12 2-20" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>'},{name:"SQL & DBMS",color:"#38BDF8",svg:'<g fill="none" stroke="#38BDF8" stroke-width="5"><ellipse cx="64" cy="36" rx="32" ry="12" fill="#38BDF8" fill-opacity="0.18"/><path d="M32 36v54c0 6.6 14.3 12 32 12s32-5.4 32-12V36"/><path d="M32 63c0 6.6 14.3 12 32 12s32-5.4 32-12"/></g>'},{name:"ESP32 & IoT",color:"#F97316",svg:'<g fill="none" stroke="#F97316" stroke-width="4.5" stroke-linecap="round"><rect x="36" y="36" width="56" height="56" rx="8" fill="#F97316" fill-opacity="0.16"/><rect x="50" y="50" width="28" height="28" rx="4"/><line x1="22" y1="48" x2="36" y2="48"/><line x1="22" y1="64" x2="36" y2="64"/><line x1="22" y1="80" x2="36" y2="80"/><line x1="92" y1="48" x2="106" y2="48"/><line x1="92" y1="64" x2="106" y2="64"/><line x1="92" y1="80" x2="106" y2="80"/><line x1="48" y1="22" x2="48" y2="36"/><line x1="64" y1="22" x2="64" y2="36"/><line x1="80" y1="22" x2="80" y2="36"/><line x1="48" y1="92" x2="48" y2="106"/><line x1="64" y1="92" x2="64" y2="106"/><line x1="80" y1="92" x2="80" y2="106"/></g>'},{name:"MQTT",color:"#A855F7",svg:'<circle cx="64" cy="90" r="8" fill="#A855F7"/><path d="M44 72a28 28 0 0 1 40 0M30 56a48 48 0 0 1 68 0M18 40a66 66 0 0 1 92 0" fill="none" stroke="#A855F7" stroke-width="5.5" stroke-linecap="round"/>'},{name:"C",color:"#659AD2",svg:'<polygon points="64,18 104,41 104,87 64,110 24,87 24,41" fill="#659AD2" fill-opacity="0.2" stroke="#659AD2" stroke-width="4"/><text x="64" y="79" text-anchor="middle" font-family="ui-monospace,monospace" font-size="44" font-weight="800" fill="#E0F2FE">C</text>'},{name:"pandas",color:"#E70488",svg:'<rect x="38" y="24" width="14" height="80" rx="4" fill="#818CF8"/><rect x="57" y="42" width="14" height="24" rx="4" fill="#E70488"/><rect x="76" y="24" width="14" height="80" rx="4" fill="#818CF8"/><rect x="57" y="72" width="14" height="14" rx="4" fill="#FACC15"/>'},{name:"NumPy",color:"#4D77CF",svg:'<g fill="none" stroke="#4D77CF" stroke-width="5" stroke-linejoin="round"><polygon points="64,22 102,42 64,62 26,42" fill="#4D77CF" fill-opacity="0.25"/><polyline points="26,64 64,84 102,64"/><polyline points="26,86 64,106 102,86"/></g>'},{name:"Matplotlib",color:"#0EA5E9",svg:'<g fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="24,28 24,98 102,98" stroke="#64748B" stroke-width="5"/><polyline points="30,86 52,52 72,68 98,32" stroke="#0EA5E9" stroke-width="6"/><circle cx="52" cy="52" r="5" fill="#F59E0B"/><circle cx="72" cy="68" r="5" fill="#F59E0B"/><circle cx="98" cy="32" r="5" fill="#F59E0B"/></g>'},{name:"DSA & GoF",color:"#34D399",svg:'<g fill="none" stroke="#34D399" stroke-width="4.5"><line x1="64" y1="34" x2="38" y2="74"/><line x1="64" y1="34" x2="90" y2="74"/><line x1="38" y1="74" x2="26" y2="98"/><line x1="38" y1="74" x2="50" y2="98"/><circle cx="64" cy="30" r="10" fill="#0B0E17"/><circle cx="38" cy="74" r="9" fill="#0B0E17"/><circle cx="90" cy="74" r="9" fill="#0B0E17"/><circle cx="26" cy="98" r="7" fill="#34D399"/><circle cx="50" cy="98" r="7" fill="#34D399"/></g>'},{name:"Networks 6G",color:"#C084FC",svg:'<g fill="none" stroke="#C084FC" stroke-width="4.5"><line x1="34" y1="38" x2="94" y2="38"/><line x1="34" y1="38" x2="64" y2="92"/><line x1="94" y1="38" x2="64" y2="92"/><circle cx="34" cy="38" r="10" fill="#0B0E17"/><circle cx="94" cy="38" r="10" fill="#0B0E17"/><circle cx="64" cy="92" r="10" fill="#0B0E17"/><text x="64" y="64" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="800" fill="#E9D5FF">6G</text></g>'}];function Lb(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function aN(e){let t=e.color,n=Lb(e.name),i=`<svg xmlns="http://www.w3.org/2000/svg" width="168" height="148" viewBox="0 0 168 148">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#13192B"/>
        <stop offset="100%" stop-color="#07090F"/>
      </linearGradient>
      <radialGradient id="gl" cx="50%" cy="38%" r="60%">
        <stop offset="0%" stop-color="${t}" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="${t}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="168" height="148" rx="22" fill="url(#bg)"/>
    <rect width="168" height="148" rx="22" fill="url(#gl)"/>
    <rect x="1.5" y="1.5" width="165" height="145" rx="20.5" fill="none" stroke="${t}" stroke-opacity="0.48" stroke-width="2.5"/>
    <g transform="translate(36, 12) scale(0.75)">
      ${e.svg}
    </g>
    <text x="84" y="128" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#F8FAFC">${n}</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}function rN(e){let t=e.color,n=Lb(e.name),i=`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="transparent"/>
    <g transform="translate(36, 22) scale(1.44)">
      ${e.svg}
    </g>
    <text x="128" y="218" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="800" fill="#FFFFFF">${n}</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}function oN(){let[e,t]=(0,Jn.useState)("spheres"),n=(0,Jn.useMemo)(()=>Cb.map(s=>({src:aN(s)})),[]),i=(0,Jn.useMemo)(()=>Cb.map(s=>({fit:"Contain",image:{src:rN(s)},offsetX:0,offsetY:0})),[]);return Jn.default.createElement("div",{className:"stack-spiral-wrapper"},Jn.default.createElement("div",{className:"stack-mode-bar",role:"tablist","aria-label":"Choose stack visualization"},Jn.default.createElement("button",{type:"button",role:"tab","aria-selected":e==="spheres",className:`stack-mode-btn ${e==="spheres"?"is-active":""}`,onClick:()=>t("spheres")},"3D Rubber Spheres"),Jn.default.createElement("button",{type:"button",role:"tab","aria-selected":e==="spiral",className:`stack-mode-btn ${e==="spiral"?"is-active":""}`,onClick:()=>t("spiral")},"Spiral Vortex")),Jn.default.createElement("div",{className:"stack-spiral-stage","aria-label":"Interactive technical skills showcase"},e==="spheres"?Jn.default.createElement(t_,{sourceMode:"Images",images:i,background:"transparent",colorMode:"Multi",balloonColors:["#111626","#151D33","#19223B","#0D1220"],density:28,dotSize:165,lighting:"Cinematic Drama",field:{spreadX:170,spreadY:95},material:{roughness:75,gloss:95,transparency:0},motion:{gravityAnchor:"Center",bounciness:100,mouseForce:100,parallax:60}}):Jn.default.createElement(Nh,{images:n,turns:3.3,speed:2.1,spacing:5,spread:5.6,sizeAttenuation:1.45,imageSize:126,fadeIn:16,fadeOut:12,cornerRadius:7})))}function Db(){let e=document.getElementById("stackSpiralMount");e&&!e.dataset.mounted&&(e.dataset.mounted="true",(0,Nb.createRoot)(e).render(Jn.default.createElement(oN,null)))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Db):Db();})();
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
