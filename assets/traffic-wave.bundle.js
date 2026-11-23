(()=>{var X1=Object.create;var S_=Object.defineProperty;var W1=Object.getOwnPropertyDescriptor;var q1=Object.getOwnPropertyNames;var Y1=Object.getPrototypeOf,Z1=Object.prototype.hasOwnProperty;var Ys=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var J1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of q1(t))!Z1.call(e,s)&&s!==n&&S_(e,s,{get:()=>t[s],enumerable:!(i=W1(t,s))||i.enumerable});return e};var Od=(e,t,n)=>(n=e!=null?X1(Y1(e)):{},J1(t||!e||!e.__esModule?S_(n,"default",{value:e,enumerable:!0}):n,e));var O_=Ys(It=>{"use strict";var Bd=Symbol.for("react.transitional.element"),K1=Symbol.for("react.portal"),Q1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),tT=Symbol.for("react.consumer"),eT=Symbol.for("react.context"),nT=Symbol.for("react.forward_ref"),iT=Symbol.for("react.suspense"),sT=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),aT=Symbol.for("react.activity"),rT=Symbol.for("react.view_transition"),M_=Symbol.iterator;function oT(e){return e===null||typeof e!="object"?null:(e=M_&&e[M_]||e["@@iterator"],typeof e=="function"?e:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R_=Object.assign,C_={};function wr(e,t,n){this.props=e,this.context=t,this.refs=C_,this.updater=n||w_}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N_(){}N_.prototype=wr.prototype;function Fd(e,t,n){this.props=e,this.context=t,this.refs=C_,this.updater=n||w_}var zd=Fd.prototype=new N_;zd.constructor=Fd;R_(zd,wr.prototype);zd.isPureReactComponent=!0;var b_=Array.isArray;function Pd(){}var ve={H:null,A:null,T:null,S:null},D_=Object.prototype.hasOwnProperty;function Hd(e,t,n){var i=n.ref;return{$$typeof:Bd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function lT(e,t){return Hd(e.type,t,e.props)}function Gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bd}function cT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var T_=/\/+/g;function Id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cT(""+e.key):t.toString(36)}function uT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Pd,Pd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ar(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Bd:case K1:r=!0;break;case A_:return r=e._init,Ar(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Id(e,0):i,b_(s)?(n="",r!=null&&(n=r.replace(T_,"$&/")+"/"),Ar(s,t,n,"",function(c){return c})):s!=null&&(Gd(s)&&(s=lT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(T_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(b_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Id(i,l),r+=Ar(i,t,n,a,s);else if(l=oT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Id(i,l++),r+=Ar(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ar(uT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Xc(e,t,n){if(e==null)return e;var i=[],s=0;return Ar(e,i,"","",function(a){return t.call(n,a,s++)}),i}function hT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var E_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function L_(e){var t=ve.T,n={};n.types=t!==null?t.types:null,ve.T=n;try{var i=e(),s=ve.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Pd,E_)}catch(a){E_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ve.T=t}}function U_(e){var t=ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else L_(U_.bind(null,e))}var fT={map:Xc,forEach:function(e,t,n){Xc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xc(e,function(){t++}),t},toArray:function(e){return Xc(e,function(t){return t})||[]},only:function(e){if(!Gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=aT;It.Children=fT;It.Component=wr;It.Fragment=Q1;It.Profiler=$1;It.PureComponent=Fd;It.StrictMode=j1;It.Suspense=iT;It.ViewTransition=rT;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ve.H.useMemoCache(e)}};It.addTransitionType=U_;It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=R_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!D_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Hd(e.type,s,i)};It.createContext=function(e){return e={$$typeof:eT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:tT,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)D_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Hd(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:nT,render:e}};It.isValidElement=Gd;It.lazy=function(e){return{$$typeof:A_,_payload:{_status:-1,_result:e},_init:hT}};It.memo=function(e,t){return{$$typeof:sT,type:e,compare:t===void 0?null:t}};It.startTransition=L_;It.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()};It.use=function(e){return ve.H.use(e)};It.useActionState=function(e,t,n){return ve.H.useActionState(e,t,n)};It.useCallback=function(e,t){return ve.H.useCallback(e,t)};It.useContext=function(e){return ve.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return ve.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return ve.H.useEffect(e,t)};It.useEffectEvent=function(e){return ve.H.useEffectEvent(e)};It.useId=function(){return ve.H.useId()};It.useImperativeHandle=function(e,t,n){return ve.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return ve.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return ve.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return ve.H.useMemo(e,t)};It.useOptimistic=function(e,t){return ve.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return ve.H.useReducer(e,t,n)};It.useRef=function(e){return ve.H.useRef(e)};It.useState=function(e){return ve.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return ve.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return ve.H.useTransition()};It.version="19.3.1"});var nl=Ys((mD,I_)=>{"use strict";I_.exports=O_()});var W_=Ys(Ee=>{"use strict";function Wd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Wc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Vi(e){return e.length===0?null:e[0]}function Yc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Wc(o,n))l<s&&0>Wc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Wc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Wc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(P_=performance,Ee.unstable_now=function(){return P_.now()}):(Vd=Date,B_=Vd.now(),Ee.unstable_now=function(){return Vd.now()-B_});var P_,Vd,B_,ms=[],Zs=[],dT=1,ui=null,_n=3,qd=!1,il=!1,sl=!1,Yd=!1,H_=typeof setTimeout=="function"?setTimeout:null,G_=typeof clearTimeout=="function"?clearTimeout:null,F_=typeof setImmediate<"u"?setImmediate:null;function qc(e){for(var t=Vi(Zs);t!==null;){if(t.callback===null)Yc(Zs);else if(t.startTime<=e)Yc(Zs),t.sortIndex=t.expirationTime,Wd(ms,t);else break;t=Vi(Zs)}}function Zd(e){if(sl=!1,qc(e),!il)if(Vi(ms)!==null)il=!0,Cr||(Cr=!0,Rr());else{var t=Vi(Zs);t!==null&&Jd(Zd,t.startTime-e)}}var Cr=!1,al=-1,V_=5,k_=-1;function X_(){return Yd?!0:!(Ee.unstable_now()-k_<V_)}function kd(){if(Yd=!1,Cr){var e=Ee.unstable_now();k_=e;var t=!0;try{t:{il=!1,sl&&(sl=!1,G_(al),al=-1),qd=!0;var n=_n;try{e:{for(qc(e),ui=Vi(ms);ui!==null&&!(ui.expirationTime>e&&X_());){var i=ui.callback;if(typeof i=="function"){ui.callback=null,_n=ui.priorityLevel;var s=i(ui.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){ui.callback=s,qc(e),t=!0;break e}ui===Vi(ms)&&Yc(ms),qc(e)}else Yc(ms);ui=Vi(ms)}if(ui!==null)t=!0;else{var a=Vi(Zs);a!==null&&Jd(Zd,a.startTime-e),t=!1}}break t}finally{ui=null,_n=n,qd=!1}t=void 0}}finally{t?Rr():Cr=!1}}}var Rr;typeof F_=="function"?Rr=function(){F_(kd)}:typeof MessageChannel<"u"?(Xd=new MessageChannel,z_=Xd.port2,Xd.port1.onmessage=kd,Rr=function(){z_.postMessage(null)}):Rr=function(){H_(kd,0)};var Xd,z_;function Jd(e,t){al=H_(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V_=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return _n};Ee.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};Ee.unstable_requestPaint=function(){Yd=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:dT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Wd(Zs,e),Vi(ms)===null&&e===Vi(Zs)&&(sl?(G_(al),al=-1):sl=!0,Jd(Zd,n-i))):(e.sortIndex=s,Wd(ms,e),il||qd||(il=!0,Cr||(Cr=!0,Rr()))),e};Ee.unstable_shouldYield=X_;Ee.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var Y_=Ys((_D,q_)=>{"use strict";q_.exports=W_()});var K_=Ys(vn=>{"use strict";var pT=nl();function J_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Js(){}var Tn={d:{f:Js,r:function(){throw Error(J_(522))},D:Js,C:Js,L:Js,m:Js,X:Js,S:Js,M:Js},p:0,findDOMNode:null},mT=Symbol.for("react.portal"),gT=Symbol.for("react.recoverable"),Z_=Symbol.for("react.optimistic_key");function _T(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mT,key:i==null?null:i===Z_?Z_:""+i,children:e,containerInfo:t,implementation:n}}var rl=pT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Zc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tn;vn.browser=function(e){return{$$typeof:gT,_reason:e}};vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(J_(299));return _T(e,t,null,n)};vn.flushSync=function(e){var t=rl.T,n=Tn.p;try{if(rl.T=null,Tn.p=2,e)return e()}finally{rl.T=t,Tn.p=n,Tn.d.f()}};vn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tn.d.C(e,t))};vn.prefetchDNS=function(e){typeof e=="string"&&Tn.d.D(e)};vn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Zc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Tn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Tn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};vn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Zc(t.as,t.crossOrigin);Tn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Tn.d.M(e)};vn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Zc(n,t.crossOrigin);Tn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};vn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Zc(t.as,t.crossOrigin);Tn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Tn.d.m(e)};vn.requestFormReset=function(e){Tn.d.r(e)};vn.unstable_batchedUpdates=function(e,t){return e(t)};vn.useFormState=function(e,t,n){return rl.H.useFormState(e,t,n)};vn.useFormStatus=function(){return rl.H.useHostTransitionStatus()};vn.version="19.3.1"});var $_=Ys((yD,j_)=>{"use strict";function Q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q_)}catch(e){console.error(e)}}Q_(),j_.exports=K_()});var zM=Ys(Ch=>{"use strict";var We=Y_(),Fy=nl(),vT=$_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Hy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tv(e){if(Yl(e)!==e)throw Error(Q(188))}function yT(e){var t=e.alternate;if(!t){if(t=Yl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return tv(s),e;if(a===i)return tv(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Vy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vy(e),t!==null)return t;e=e.sibling}return null}function Gn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Gn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function or(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ev(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ky(e){var t=[null,null],n=or(e);return n===null||Xy(t,e,n.child,{foundSelf:!1}),t}function Xy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Xy(e,t,n.child,i))return!0;n=n.sibling}return!1}function Xe(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Pr=null,wp=null;function xT(e,t,n){return e===n?!0:e===t?(Pr=e,!0):!1}function ST(e,t,n){return e===n?(wp=e,!1):e===t?(wp!==null&&(Pr=e),!0):!1}function nv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Rp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var me=Object.assign,MT=Symbol.for("react.element"),Jc=Symbol.for("react.transitional.element"),dl=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),qy=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),zm=Symbol.for("react.memo"),$s=Symbol.for("react.lazy"),Lp=Symbol.for("react.activity"),bT=Symbol.for("react.legacy_hidden"),TT=Symbol.for("react.memo_cache_sentinel"),Up=Symbol.for("react.view_transition"),ET=Symbol.for("react.recoverable"),iv=Symbol.iterator;function ol(e){return e===null||typeof e!="object"?null:(e=iv&&e[iv]||e["@@iterator"],typeof e=="function"?e:null)}var AT=Symbol.for("react.client.reference");function Op(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===AT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Cp:return"Profiler";case Wy:return"StrictMode";case Np:return"Suspense";case Dp:return"SuspenseList";case Lp:return"Activity";case Up:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case dl:return"Portal";case Zi:return e.displayName||"Context";case qy:return(e._context.displayName||"Context")+".Consumer";case Fm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zm:return t=e.displayName||null,t!==null?t:Op(e.type)||"Memo";case $s:t=e._payload,e=e._init;try{return Op(e(t))}catch{}}return null}var pl=Array.isArray,Dt=Fy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=vT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Za={pending:!1,data:null,method:null,action:null},Ip=[],Fr=-1;function es(e){return{current:e}}function cn(e){0>Fr||(e.current=Ip[Fr],Ip[Fr]=null,Fr--)}function Se(e,t){Fr++,Ip[Fr]=e.current,e.current=t}var ji=es(null),Dl=es(null),la=es(null),Iu=es(null);function Pu(e,t){switch(Se(la,t),Se(Dl,e),Se(ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_y(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_y(t),e=pM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}cn(ji),Se(ji,e)}function so(){cn(ji),cn(Dl),cn(la)}function Pp(e){var t=e.memoizedState;t!==null&&(mo._currentValue=t.memoizedState,Se(Iu,e)),t=ji.current;var n=pM(t,e.type);t!==n&&(Se(Dl,e),Se(ji,n))}function Bu(e){Dl.current===e&&(cn(ji),cn(Dl)),Iu.current===e&&(cn(Iu),mo._currentValue=Za)}var Kd,sv;function Qs(e){if(Kd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kd=t&&t[1]||"",sv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kd+e+sv}var Qd=!1;function jd(e,t){if(!e||Qd)return"";Qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var f=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(f!==void 0?Object.defineProperty(e.prototype,"props",f):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Qd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qs(n):""}function wT(e,t){switch(e.tag){case 26:case 27:case 5:return Qs(e.type);case 16:return Qs("Lazy");case 13:return e.child!==t&&t!==null?Qs("Suspense Fallback"):Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 15:return jd(e.type,!1);case 11:return jd(e.type.render,!1);case 1:return jd(e.type,!0);case 31:return Qs("Activity");case 30:return Qs("ViewTransition");default:return""}}function av(e){try{var t="",n=null;do t+=wT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Bp=Object.prototype.hasOwnProperty,Hm=We.unstable_scheduleCallback,$d=We.unstable_cancelCallback,RT=We.unstable_shouldYield,CT=We.unstable_requestPaint,Jn=We.unstable_now,NT=We.unstable_getCurrentPriorityLevel,Yy=We.unstable_ImmediatePriority,Zy=We.unstable_UserBlockingPriority,Fu=We.unstable_NormalPriority,DT=We.unstable_LowPriority,Jy=We.unstable_IdlePriority,LT=We.log,UT=We.unstable_setDisableYieldValue,Zl=null,Kn=null;function na(e){if(typeof LT=="function"&&UT(e),Kn&&typeof Kn.setStrictMode=="function")try{Kn.setStrictMode(Zl,e)}catch{}}var Qn=Math.clz32?Math.clz32:PT,OT=Math.log,IT=Math.LN2;function PT(e){return e>>>=0,e===0?32:31-(OT(e)/IT|0)|0}var Kc=256,Qc=262144,jc=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function uh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ka(i):(r&=o,r!==0?s=ka(r):n||(n=o&~e,n!==0&&(s=ka(n))))):(o=i&~a,o!==0?s=ka(o):r!==0?s=ka(r):n||(n=i&~e,n!==0&&(s=ka(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ky(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Qn(n),s=1<<i;t|=e[i],n&=~s}return t}function BT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(){var e=jc;return jc<<=1,(jc&62914560)===0&&(jc=4194304),e}function tp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function FT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Qn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var f=u[h];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&jy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function jy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Qn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function $y(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Qn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function tx(e,t){var n=t&-t;return n=(n&42)!==0?1:Gm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Gm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ex(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:PM(e.type))}function rv(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var Rs=Math.random().toString(36).slice(2),on="__reactFiber$"+Rs,Vn="__reactProps$"+Rs,vo="__reactContainer$"+Rs,ov="__reactEvents$"+Rs,zT="__reactListeners$"+Rs,HT="__reactHandles$"+Rs,lv="__reactResources$"+Rs,Ql="__reactMarker$"+Rs,zu="__reactLoad$"+Rs;function hh(e){delete e[on],delete e[Vn],delete e[zT],delete e[HT]}function qa(e){var t;if(t=e[on])return t;for(var n=e.parentNode;n;){if(t=n[vo]||n[on]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ey(e);e!==null;){if(n=e[on])return n;e=Ey(e)}return t}e=n,n=e.parentNode}return null}function yo(e){if(e=e[on]||e[vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ml(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Zr(e){var t=e[lv];return t||(t=e[lv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Ql]=!0}function nx(e){e[zu]=void 0}var ix=new Set,sx={};function lr(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(sx[e]=t,e=0;e<t.length;e++)ix.add(t[e])}var GT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cv={},uv={};function VT(e){return Bp.call(uv,e)?!0:Bp.call(cv,e)?!1:GT.test(e)?uv[e]=!0:(cv[e]=!0,!1)}var te=!1;function hv(){var e=te;return te=!1,e}function gu(e,t,n){if(VT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function $c(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function gs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Wn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ax(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fp(e){if(!e._valueTracker){var t=ax(e)?"checked":"value";e._valueTracker=kT(e,t,""+e[t])}}function rx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ax(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var XT=/[\n"\\]/g;function mi(e){return e.replace(XT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wn(t)):e.value!==""+Wn(t)&&(e.value=""+Wn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?ep(e,Wn(e.value)):ep(e,Wn(t)):n!=null?ep(e,Wn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Wn(o):e.removeAttribute("name")}function ox(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Fp(e);return}n=n!=null?""+Wn(n):"",t=t!=null?""+Wn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Fp(e)}function ep(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Jr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function lx(e,t,n){if(t!=null&&(t=""+Wn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wn(n):""}function cx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(pl(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Wn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Fp(e)}function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var WT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||WT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ux(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",te=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(fv(e,s,i),te=!0)}else for(var a in t)t.hasOwnProperty(a)&&fv(e,a,t[a])}function km(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),YT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(e){return YT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Hp=null;function Xm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Kr=null;function dv(e){var t=yo(e);if(t&&(e=t.stateNode)){var n=e[Vn]||null;t:switch(e=t.stateNode,t.type){case"input":if(zp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Vn]||null;if(!s)throw Error(Q(90));zp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rx(i)}break t;case"textarea":lx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}}}var np=!1;function hx(e,t,n){if(np)return e(t,n);np=!0;try{var i=e(t);return i}finally{if(np=!1,(zr!==null||Kr!==null)&&(Eh(),zr&&(t=zr,e=Kr,Kr=zr=null,dv(t),e)))for(t=0;t<e.length;t++)dv(e[t])}}function Ll(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Vn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var Ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gp=!1;if(Ms)try{Nr={},Object.defineProperty(Nr,"passive",{get:function(){Gp=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Gp=!1}var Nr,ia=null,Wm=null,vu=null;function fx(){if(vu)return vu;var e,t=Wm,n=t.length,i,s="value"in ia?ia.value:ia.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return vu=s.slice(e,1<i?1-i:void 0)}function yu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function pv(){return!1}function Rn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?tu:pv,this.isPropagationStopped=pv,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=Rn(ba),jl=me({},ba,{view:0,detail:0}),ZT=Rn(jl),ip,sp,ll,dh=me({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ll&&(ll&&e.type==="mousemove"?(ip=e.screenX-ll.screenX,sp=e.screenY-ll.screenY):sp=ip=0,ll=e),ip)},movementY:function(e){return"movementY"in e?e.movementY:sp}}),mv=Rn(dh),JT=me({},dh,{dataTransfer:0}),KT=Rn(JT),QT=me({},jl,{relatedTarget:0}),ap=Rn(QT),jT=me({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),$T=Rn(jT),tE=me({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eE=Rn(tE),nE=me({},ba,{data:0}),gv=Rn(nE),iE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aE[e])?!!t[e]:!1}function qm(){return rE}var oE=me({},jl,{key:function(e){if(e.key){var t=iE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(e){return e.type==="keypress"?yu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lE=Rn(oE),cE=me({},dh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_v=Rn(cE),uE=me({},ba,{submitter:0}),hE=Rn(uE),fE=me({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),dE=Rn(fE),pE=me({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=Rn(pE),gE=me({},dh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_E=Rn(gE),vE=me({},ba,{newState:0,oldState:0,source:0}),yE=Rn(vE),xE=[9,13,27,32],Ym=Ms&&"CompositionEvent"in window,vl=null;Ms&&"documentMode"in document&&(vl=document.documentMode);var SE=Ms&&"TextEvent"in window&&!vl,dx=Ms&&(!Ym||vl&&8<vl&&11>=vl),vv=" ",yv=!1;function px(e,t){switch(e){case"keyup":return xE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function ME(e,t){switch(e){case"compositionend":return mx(t);case"keypress":return t.which!==32?null:(yv=!0,vv);case"textInput":return e=t.data,e===vv&&yv?null:e;default:return null}}function bE(e,t){if(Hr)return e==="compositionend"||!Ym&&px(e,t)?(e=fx(),vu=Wm=ia=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dx&&t.locale!=="ko"?null:t.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TE[e.type]:t==="textarea"}function gx(e,t,n,i){zr?Kr?Kr.push(i):Kr=[i]:zr=i,t=oh(t,"onChange"),0<t.length&&(n=new fh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var yl=null,Ul=null;function EE(e){hM(e,0)}function ph(e){var t=ml(e);if(rx(t))return e}function Sv(e,t){if(e==="change")return t}var _x=!1;Ms&&(Ms?(nu="oninput"in document,nu||(rp=document.createElement("div"),rp.setAttribute("oninput","return;"),nu=typeof rp.oninput=="function"),eu=nu):eu=!1,_x=eu&&(!document.documentMode||9<document.documentMode));var eu,nu,rp;function Mv(){yl&&(yl.detachEvent("onpropertychange",vx),Ul=yl=null)}function vx(e){if(e.propertyName==="value"&&ph(Ul)){var t=[];gx(t,Ul,e,Xm(e)),hx(EE,t)}}function AE(e,t,n){e==="focusin"?(Mv(),yl=t,Ul=n,yl.attachEvent("onpropertychange",vx)):e==="focusout"&&Mv()}function wE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ph(Ul)}function RE(e,t){if(e==="click")return ph(t)}function CE(e,t){if(e==="input"||e==="change")return ph(t)}function NE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $n=typeof Object.is=="function"?Object.is:NE;function Ol(e,t){if($n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Bp.call(t,s)||!$n(e[s],t[s]))return!1}return!0}function Vp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tv(e,t){var n=bv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=bv(n)}}function yx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vp(e.document)}return t}function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var DE=Ms&&"documentMode"in document&&11>=document.documentMode,Gr=null,kp=null,xl=null,Xp=!1;function Ev(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xp||Gr==null||Gr!==Vp(i)||(i=Gr,"selectionStart"in i&&Zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xl&&Ol(xl,i)||(xl=i,i=oh(kp,"onSelect"),0<i.length&&(t=new fh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Gr)))}function Ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},op={},Sx={};Ms&&(Sx=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function cr(e){if(op[e])return op[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sx)return op[e]=t[n];return e}var Mx=cr("animationend"),bx=cr("animationiteration"),Tx=cr("animationstart"),LE=cr("transitionrun"),UE=cr("transitionstart"),OE=cr("transitioncancel"),Ex=cr("transitionend"),Ax=new Map,Wp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wp.push("scrollEnd");function Ni(e,t){Ax.set(e,t),lr(t,[e])}var IE=0;function bs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ci.identifierPrefix;var n=IE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Av(e){if(e==null||typeof e=="string")return e;var t=null,n=io;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Cs(e,t){return e=Av(e),t=Av(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],kr=0,Jm=0;function mh(){for(var e=kr,t=Jm=kr=0;t<e;){var n=fi[t];fi[t++]=null;var i=fi[t];fi[t++]=null;var s=fi[t];fi[t++]=null;var a=fi[t];if(fi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&wx(n,s,a)}}function gh(e,t,n,i){fi[kr++]=e,fi[kr++]=t,fi[kr++]=n,fi[kr++]=i,Jm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Km(e,t,n,i){return gh(e,t,n,i),Gu(e)}function ur(e,t){return gh(e,null,null,t),Gu(e)}function wx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Qn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Gu(e){if(50<Nl)throw Nl=0,Cu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xr={};function PE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,i){return new PE(e,t,n,i)}function Qm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xs(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Qm(i)&&(r=1);else if(typeof i=="string")r=lw(e,n,ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Lp:return e=zn(31,n,t,s),e.elementType=Lp,e.lanes=a,e;case Br:return Ja(n.children,s,a,t);case Wy:r=8,s|=24;break;case Cp:return e=zn(12,n,t,s|2),e.elementType=Cp,e.lanes=a,e;case Np:return e=zn(13,n,t,s),e.elementType=Np,e.lanes=a,e;case Dp:return e=zn(19,n,t,s),e.elementType=Dp,e.lanes=a,e;case bT:case Up:return e=s|32,e=zn(30,n,t,e),e.elementType=Up,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Zi:r=10;break t;case qy:r=9;break t;case Fm:r=11;break t;case zm:r=14;break t;case $s:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=zn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ja(e,t,n,i){return e=zn(7,e,i,t),e.lanes=n,e}function lp(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function Cx(e){var t=zn(18,null,null,0);return t.stateNode=e,t}function cp(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wv=new WeakMap;function gi(e,t){if(typeof e=="object"&&e!==null){var n=wv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:av(t)},wv.set(e,t),t)}return{value:e,source:t,stack:av(t)}}var Wr=[],qr=0,Vu=null,Il=0,di=[],pi=0,va=null,Ki=1,Qi="";function vs(e,t){Wr[qr++]=Il,Wr[qr++]=Vu,Vu=e,Il=t}function Nx(e,t,n){di[pi++]=Ki,di[pi++]=Qi,di[pi++]=va,va=e;var i=Ki;e=Qi;var s=32-Qn(i)-1;i&=~(1<<s),n+=1;var a=32-Qn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ki=1<<32-Qn(t)+s|n<<s|i,Qi=a+e}else Ki=1<<a|n<<s|i,Qi=e}function _h(e){e.return!==null&&(vs(e,1),Nx(e,1,0))}function jm(e){for(;e===Vu;)Vu=Wr[--qr],Wr[qr]=null,Il=Wr[--qr],Wr[qr]=null;for(;e===va;)va=di[--pi],di[pi]=null,Qi=di[--pi],di[pi]=null,Ki=di[--pi],di[pi]=null}function Dx(e,t){di[pi++]=Ki,di[pi++]=Qi,di[pi++]=va,Ki=t.id,Qi=t.overflow,va=e}var tn=null,xe=null,Xt=!1,ca=null,_i=!1,qp=Error(Q(519));function ya(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(gi(t,e)),qp}function Rv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[on]=e,t[Vn]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<Hl.length;n++)Wt(Hl[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),ox(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),cx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||dM(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=Ji),t=!0):t=!1,t||ya(e,!0)}function ku(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:tn=tn.return}}function Dr(e){if(e!==tn)return!1;if(!Xt)return ku(e),Xt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nm(e.type,e.memoizedProps)),n=!n),n&&xe&&ya(e),ku(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=Ty(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=Ty(e)}else t===27?(t=xe,Ta(e.type)?(e=Om,Om=null,xe=e):xe=t):xe=tn?vi(e.stateNode.nextSibling):null;return!0}function $a(){xe=tn=null,Xt=!1}function up(){var e=ca;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),ca=null),e}function Pl(e){ca===null?ca=[e]:ca.push(e)}var Yp=es(null),hr=null,ys=null;function sa(e,t,n){Se(Yp,t._currentValue),t._currentValue=n}function Ss(e){e._currentValue=Yp.current,cn(Yp)}function Su(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Zp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Su(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Su(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Su(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function tr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;$n(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Iu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}s=s.return}return e!==null&&Zp(t,e,n,i),t.flags|=262144,e!==null}function Xu(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){hr=e,ys=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return Lx(hr,e)}function iu(e,t){return hr===null&&er(e),Lx(e,t)}function Lx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ys===null){if(e===null)throw Error(Q(308));ys=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ys=ys.next=t;return n}var BE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},FE=We.unstable_scheduleCallback,zE=We.unstable_NormalPriority,Fe={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $m(){return{controller:new BE,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&FE(zE,function(){e.controller.abort()})}function Cv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var gl=null;function HE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Sl=null,Jp=0,nr=0,Qr=null;function GE(e,t){if(Sl===null){var n=Sl=[];Jp=0,nr=wg(),Qr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Jp++,t.then(Nv,Nv),t}function Nv(){if(--Jp===0&&(gl=null,Sl!==null)){Qr!==null&&(Qr.status="fulfilled");var e=Sl;Sl=null,nr=0,Qr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function VE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Dv=Dt.S;Dt.S=function(e,t){if(KS=Jn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&GE(e,t),gl!==null)for(var n=ho;n!==null;)Cv(n,gl),n=n.next;if(n=e.types,n!==null){for(var i=ho;i!==null;)Cv(i,n),i=i.next;if(nr!==0){i=gl,i===null&&(i=gl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Dv!==null&&Dv(e,t)};var Ka=es(null);function tg(){var e=Ka.current;return e!==null?e:pe.pooledCache}function Mu(e,t){t===null?Se(Ka,Ka.current):Se(Ka,t.pool)}function Ux(){var e=tg();return e===null?null:{parent:Fe._currentValue,pool:e}}var xo=Error(Q(460)),eg=Error(Q(474)),vh=Error(Q(542)),Wu={then:function(){}};function Lv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ox(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ov(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ov(e),e}throw Qa=t,xo}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qa=n,xo):n}}var Qa=null;function Uv(){if(Qa===null)throw Error(Q(459));var e=Qa;return Qa=null,e}function Ov(e){if(e===xo||e===vh)throw Error(Q(483))}var jr=null,Bl=0;function su(e){var t=Bl;return Bl+=1,jr===null&&(jr=[]),Ox(jr,e,t)}function Ks(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function au(e,t){throw t.$$typeof===MT?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ix(e){function t(d,m){if(e){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function i(d){for(var m=new Map;d!==null;)d.key===null?m.set(d.index,d):m.set(d.key,d),d=d.sibling;return m}function s(d,m){return d=xs(d,m),d.index=0,d.sibling=null,d}function a(d,m,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=134217730,m)):(d.flags|=1048576,m)}function r(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function o(d,m,y,x){return m===null||m.tag!==6?(m=lp(y,d.mode,x),m.return=d,m):(m=s(m,y),m.return=d,m)}function l(d,m,y,x){var E=y.type;return E===Br?(d=h(d,m,y.props.children,x,y.key),Ks(d,y),d):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$s&&Xa(E)===m.type)?(m=s(m,y.props),Ks(m,y),m.return=d,m):(m=xu(y.type,y.key,y.props,null,d.mode,x),Ks(m,y),m.return=d,m)}function c(d,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=cp(y,d.mode,x),m.return=d,m):(m=s(m,y.children||[]),m.return=d,m)}function h(d,m,y,x,E){return m===null||m.tag!==7?(m=Ja(y,d.mode,x,E),m.return=d,m):(m=s(m,y),m.return=d,m)}function p(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=lp(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jc:return y=xu(m.type,m.key,m.props,null,d.mode,y),Ks(y,m),y.return=d,y;case dl:return m=cp(m,d.mode,y),m.return=d,m;case $s:return m=Xa(m),p(d,m,y)}if(pl(m)||ol(m))return m=Ja(m,d.mode,y,null),m.return=d,m;if(typeof m.then=="function")return p(d,su(m),y);if(m.$$typeof===Zi)return p(d,iu(d,m),y);au(d,m)}return null}function u(d,m,y,x){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:o(d,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:return y.key===E?l(d,m,y,x):null;case dl:return y.key===E?c(d,m,y,x):null;case $s:return y=Xa(y),u(d,m,y,x)}if(pl(y)||ol(y))return E!==null?null:h(d,m,y,x,null);if(typeof y.then=="function")return u(d,m,su(y),x);if(y.$$typeof===Zi)return u(d,m,iu(d,y),x);au(d,y)}return null}function f(d,m,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(y)||null,o(m,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jc:return d=d.get(x.key===null?y:x.key)||null,l(m,d,x,E);case dl:return d=d.get(x.key===null?y:x.key)||null,c(m,d,x,E);case $s:return x=Xa(x),f(d,m,y,x,E)}if(pl(x)||ol(x))return d=d.get(y)||null,h(m,d,x,E,null);if(typeof x.then=="function")return f(d,m,y,su(x),E);if(x.$$typeof===Zi)return f(d,m,y,iu(m,x),E);au(m,x)}return null}function v(d,m,y,x){for(var E=null,A=null,_=m,T=m=0,U=null;_!==null&&T<y.length;T++){_.index>T?(U=_,_=null):U=_.sibling;var R=u(d,_,y[T],x);if(R===null){_===null&&(_=U);break}e&&_&&R.alternate===null&&t(d,_),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R,_=U}if(T===y.length)return n(d,_),Xt&&vs(d,T),E;if(_===null){for(;T<y.length;T++)_=p(d,y[T],x),_!==null&&(m=a(_,m,T),A===null?E=_:A.sibling=_,A=_);return Xt&&vs(d,T),E}for(_=i(_);T<y.length;T++)U=f(_,d,T,y[T],x),U!==null&&(e&&(R=U.alternate,R!==null&&_.delete(R.key===null?T:R.key)),m=a(U,m,T),A===null?E=U:A.sibling=U,A=U);return e&&_.forEach(function(O){return t(d,O)}),Xt&&vs(d,T),E}function b(d,m,y,x){if(y==null)throw Error(Q(151));for(var E=null,A=null,_=m,T=m=0,U=null,R=y.next();_!==null&&!R.done;T++,R=y.next()){_.index>T?(U=_,_=null):U=_.sibling;var O=u(d,_,R.value,x);if(O===null){_===null&&(_=U);break}e&&_&&O.alternate===null&&t(d,_),m=a(O,m,T),A===null?E=O:A.sibling=O,A=O,_=U}if(R.done)return n(d,_),Xt&&vs(d,T),E;if(_===null){for(;!R.done;T++,R=y.next())R=p(d,R.value,x),R!==null&&(m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return Xt&&vs(d,T),E}for(_=i(_);!R.done;T++,R=y.next())R=f(_,d,T,R.value,x),R!==null&&(e&&(U=R.alternate,U!==null&&_.delete(U.key===null?T:U.key)),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return e&&_.forEach(function(H){return t(d,H)}),Xt&&vs(d,T),E}function g(d,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Br&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:t:{for(var E=y.key;m!==null;){if(m.key===E){if(E=y.type,E===Br){if(m.tag===7){n(d,m.sibling),x=s(m,y.props.children),Ks(x,y),x.return=d,d=x;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$s&&Xa(E)===m.type){n(d,m.sibling),x=s(m,y.props),Ks(x,y),x.return=d,d=x;break t}n(d,m);break}else t(d,m);m=m.sibling}y.type===Br?(x=Ja(y.props.children,d.mode,x,y.key),Ks(x,y),x.return=d,d=x):(x=xu(y.type,y.key,y.props,null,d.mode,x),Ks(x,y),x.return=d,d=x)}return r(d);case dl:t:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),x=s(m,y.children||[]),x.return=d,d=x;break t}else{n(d,m);break}else t(d,m);m=m.sibling}x=cp(y,d.mode,x),x.return=d,d=x}return r(d);case $s:return y=Xa(y),g(d,m,y,x)}if(pl(y))return v(d,m,y,x);if(ol(y)){if(E=ol(y),typeof E!="function")throw Error(Q(150));return y=E.call(y),b(d,m,y,x)}if(typeof y.then=="function")return g(d,m,su(y),x);if(y.$$typeof===Zi)return g(d,m,iu(d,y),x);au(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),x=s(m,y),x.return=d,d=x):(n(d,m),x=lp(y,d.mode,x),x.return=d,d=x),r(d)):n(d,m)}return function(d,m,y,x){try{Bl=0;var E=g(d,m,y,x);return jr=null,E}catch(_){if(_===xo||_===vh)throw _;var A=zn(29,_,null,d.mode);return A.lanes=x,A.return=d,A}}}var ir=Ix(!0),Px=Ix(!1),ta=!1;function ng(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Gu(e),wx(e,null,n),t}return gh(e,i,t,n),Gu(e)}function Ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,$y(e,n)}}function hp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qp=!1;function bl(){if(Qp){var e=Qr;if(e!==null)throw e}}function Tl(e,t,n,i){Qp=!1;var s=e.updateQueue;ta=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(Qt&u)===u:(i&u)===u){u!==0&&u===nr&&(Qp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var g=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=me({},p,u);break t;case 2:ta=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=p):h=h.next=f,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Ma|=r,e.lanes=r,e.memoizedState=p}}function Bx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Fx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Bx(n[e],t)}var xa=es(null),qu=es(0);function Iv(e,t){e=ws,Se(qu,e),Se(xa,t),ws=e|t.baseLanes}function jp(){Se(qu,ws),Se(xa,xa.current)}function ig(){ws=qu.current,cn(xa),cn(qu)}var fn=es(null),yn=null;function fa(e){var t=e.alternate;Se(un,un.current&1),Se(fn,e),yn===null&&(t===null||xa.current!==null||t.memoizedState!==null)&&(yn=e)}function $p(e){Se(un,un.current),Se(fn,e),yn===null&&(yn=e)}function zx(e){e.tag===22?(Se(un,un.current),Se(fn,e),yn===null&&(yn=e)):da()}function da(){Se(un,un.current),Se(fn,fn.current)}function qn(e){cn(fn),yn===e&&(yn=null),cn(un)}var un=es(0);function Fl(e,t){Se(fn,fn.current),Se(un,t)}function sg(e){cn(un),cn(fn),yn===e&&(yn=null)}function Yu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Um(n)||Dg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=0,Ht=null,he=null,Be=null,Zu=!1,$r=!1,sr=!1,Ju=0,zl=0,to=null,kE=0;function Le(){throw Error(Q(321))}function ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$n(e[n],t[n]))return!1;return!0}function rg(e,t,n,i,s,a){return Ts=a,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?gS:_S,sr=!1,a=n(i,s),sr=!1,$r&&(a=Gx(t,n,i,s)),Hx(e),a}function Hx(e){Dt.H=Ku;var t=he!==null&&he.next!==null;if(Ts=0,Be=he=Ht=null,Zu=!1,zl=0,to=null,t)throw Error(Q(300));e===null||ze||(e=e.dependencies,e!==null&&Xu(e)&&(ze=!0))}function Gx(e,t,n,i){Ht=e;var s=0;do{if($r&&(to=null),zl=0,$r=!1,25<=s)throw Error(Q(301));if(s+=1,Be=he=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=QE,a=t(n,i)}while($r);return a}function XE(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?tc(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(Ht.flags|=1024),t}function og(){var e=Ju!==0;return Ju=0,e}function lg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cg(e){if(Zu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zu=!1}Ts=0,Be=he=Ht=null,$r=!1,zl=Ju=0,to=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ht.memoizedState=Be=e:Be=Be.next=e,Be}function Oe(){if(he===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Be===null?Ht.memoizedState:Be.next;if(t!==null)Be=t,he=e;else{if(e===null)throw Ht.alternate===null?Error(Q(467)):Error(Q(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Be===null?Ht.memoizedState=Be=e:Be=Be.next=e}return Be}function yh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tc(e){var t=zl;return zl+=1,to===null&&(to=[]),e=Ox(to,e,t),t=Ht,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?gS:_S),e}function xh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tc(e);if(e.$$typeof===ET)return;if(e.$$typeof===Zi)return ln(e)}throw Error(Q(438,String(e)))}function ug(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yh(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=TT;return t.index++,n}function Es(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=Oe();return hg(t,he,e)}function hg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Qt&p)===p:(Ts&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===nr&&(h=!0);else if((Ts&u)===u){c=c.next,u===nr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Ht.lanes|=u,Ma|=u;p=c.action,sr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Ht.lanes|=p,Ma|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!$n(a,e.memoizedState)&&(ze=!0,h&&(n=Qr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fp(e){var t=Oe(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);$n(a,t.memoizedState)||(ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Vx(e,t,n){var i=Ht,s=Oe(),a=Xt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!$n((he||s).memoizedState,n);if(r&&(s.memoizedState=n,ze=!0),s=s.queue,fg(Wx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Be!==null&&(Be.memoizedState.tag&1)!==0,oo(e?9:8,{destroy:void 0},Xx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,pe===null)throw Error(Q(349));a||(Ts&127)!==0||kx(i,t,n)}return n}function kx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=yh(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xx(e,t,n,i){t.value=n,t.getSnapshot=i,qx(t)&&Yx(e)}function Wx(e,t,n){return n(function(){qx(t)&&Yx(e)})}function qx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$n(e,n)}catch{return!0}}function Yx(e){var t=ur(e,2);t!==null&&Hn(t,e,2)}function tm(e){var t=wn();if(typeof e=="function"){var n=e;if(e=n(),sr){na(!0);try{n()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:e},t}function Zx(e,t,n,i){return e.baseState=n,hg(e,he,typeof i=="function"?i:Es)}function WE(e,t,n,i,s){if(Mh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Jx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Jx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};r.types=a!==null?a.types:null,Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),Pv(e,t,o)}catch(c){em(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),Pv(e,t,a)}catch(c){em(e,t,c)}}function Pv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Bv(e,t,i)},function(i){return em(e,t,i)}):Bv(e,t,n)}function Bv(e,t,n){t.status="fulfilled",t.value=n,Kx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jx(e,n)))}function em(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Kx(t),t=t.next;while(t!==i)}e.action=null}function Kx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qx(e,t){return t}function Fv(e,t){if(Xt){var n=pe.formState;if(n!==null){t:{var i=Ht;if(Xt){if(xe){e:{for(var s=xe,a=_i;s.nodeType!==8;){if(!a){s=null;break e}if(s=vi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){xe=vi(s.nextSibling),i=s.data==="F!";break t}}ya(i)}i=!1}i&&(t=n[0])}}return n=wn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qx,lastRenderedState:t},n.queue=i,n=dS.bind(null,Ht,i),i.dispatch=n,i=tm(!1),a=gg.bind(null,Ht,!1,i.queue),i=wn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=WE.bind(null,Ht,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function zv(e){var t=Oe();return jx(t,he,e)}function jx(e,t,n){if(t=hg(e,t,Qx)[0],e=bu(Es)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=tc(t)}catch(r){throw r===xo?vh:r}else i=t;t=Oe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,oo(9,{destroy:void 0},qE.bind(null,s,n),null)),[i,a,e]}function qE(e,t){e.action=t}function Hv(e){var t=Oe(),n=he;if(n!==null)return jx(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function oo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=yh(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function $x(){return Oe().memoizedState}function Tu(e,t,n,i){var s=wn();Ht.flags|=e,s.memoizedState=oo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Sh(e,t,n,i){var s=Oe();i=i===void 0?null:i;var a=s.memoizedState.inst;he!==null&&i!==null&&ag(i,he.memoizedState.deps)?s.memoizedState=oo(t,a,n,i):(Ht.flags|=e,s.memoizedState=oo(1|t,a,n,i))}function Gv(e,t){Tu(8390656,8,e,t)}function fg(e,t){Sh(2048,8,e,t)}function YE(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=yh(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function tS(e){var t=Oe().memoizedState;return YE({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function eS(e,t){return Sh(4,2,e,t)}function nS(e,t){return Sh(4,4,e,t)}function iS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sS(e,t,n){n=n!=null?n.concat([e]):null,Sh(4,4,iS.bind(null,t,e),n)}function dg(){}function aS(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ag(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function rS(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ag(t,i[1]))return i[0];if(i=e(),sr){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i}function pg(e,t,n){return n===void 0||(Ts&1073741824)!==0&&(Qt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=jS(),Ht.lanes|=e,Ma|=e,n)}function oS(e,t,n,i){return $n(n,t)?n:xa.current!==null?(e=pg(e,n,i),$n(e,t)||(ze=!0),e):(Ts&106)===0||(Ts&1073741824)!==0&&(Qt&261930)===0?(ze=!0,e.memoizedState=n):(e=jS(),Ht.lanes|=e,Ma|=e,t)}function lS(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Dt.T,o={};o.types=r!==null?r.types:null,Dt.T=o,gg(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=VE(l,i);El(e,t,h,jn(e))}else El(e,t,i,jn(e))}catch(p){El(e,t,{then:function(){},status:"rejected",reason:p},jn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function ZE(){}function nm(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=cS(e).queue;lS(e,s,t,Za,n===null?ZE:function(){return uS(e),n(i)})}function cS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Za,baseState:Za,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:Za},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uS(e){var t=cS(e);t.next===null&&(t=e.alternate.memoizedState),El(e,t.next.queue,{},jn())}function mg(){return ln(mo)}function hS(){return Oe().memoizedState}function fS(){return Oe().memoizedState}function JE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jn();e=ua(n);var i=ha(t,e,n);i!==null&&(Hn(i,t,n),Ml(i,t,n)),t={cache:$m()},e.payload=t;return}t=t.return}}function KE(e,t,n){var i=jn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mh(e)?pS(t,n):(n=Km(e,t,n,i),n!==null&&(Hn(n,e,i),mS(n,t,i)))}function dS(e,t,n){var i=jn();El(e,t,n,i)}function El(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mh(e))pS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,$n(o,r))return gh(e,t,s,0),pe===null&&mh(),!1}catch{}if(n=Km(e,t,s,i),n!==null)return Hn(n,e,i),mS(n,t,i),!0}return!1}function gg(e,t,n,i){if(i={lane:2,revertLane:wg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Mh(e)){if(t)throw Error(Q(479))}else t=Km(e,n,i,2),t!==null&&Hn(t,e,2)}function Mh(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function pS(e,t){$r=Zu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,$y(e,n)}}var Ku={readContext:ln,use:xh,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le,useEffectEvent:Le},gS={readContext:ln,use:xh,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:Gv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tu(4194308,4,iS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tu(4194308,4,e,t)},useInsertionEffect:function(e,t){Tu(4,2,e,t)},useMemo:function(e,t){var n=wn();t=t===void 0?null:t;var i=e();if(sr){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=wn();if(n!==void 0){var s=n(t);if(sr){na(!0);try{n(t)}finally{na(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=KE.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:function(e){e=tm(e);var t=e.queue,n=dS.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dg,useDeferredValue:function(e,t){var n=wn();return pg(n,e,t)},useTransition:function(){var e=tm(!1);return e=lS.bind(null,Ht,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,s=wn();if(Xt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),pe===null)throw Error(Q(349));(Qt&127)!==0||kx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Gv(Wx.bind(null,i,a,e),[e]),i.flags|=2048,oo(9,{destroy:void 0},Xx.bind(null,i,a,n,t),null),n},useId:function(){var e=wn(),t=pe.identifierPrefix;if(Xt){var n=Qi,i=Ki;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ju++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=kE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mg,useFormState:Fv,useActionState:Fv,useOptimistic:function(e){var t=wn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gg.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:ug,useCacheRefresh:function(){return wn().memoizedState=JE.bind(null,Ht)},useEffectEvent:function(e){var t=wn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},_S={readContext:ln,use:xh,useCallback:aS,useContext:ln,useEffect:fg,useImperativeHandle:sS,useInsertionEffect:eS,useLayoutEffect:nS,useMemo:rS,useReducer:bu,useRef:$x,useState:function(){return bu(Es)},useDebugValue:dg,useDeferredValue:function(e,t){var n=Oe();return oS(n,he.memoizedState,e,t)},useTransition:function(){var e=bu(Es)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:tc(e),t]},useSyncExternalStore:Vx,useId:hS,useHostTransitionStatus:mg,useFormState:zv,useActionState:zv,useOptimistic:function(e,t){var n=Oe();return Zx(n,he,e,t)},useMemoCache:ug,useCacheRefresh:fS,useEffectEvent:tS},QE={readContext:ln,use:xh,useCallback:aS,useContext:ln,useEffect:fg,useImperativeHandle:sS,useInsertionEffect:eS,useLayoutEffect:nS,useMemo:rS,useReducer:fp,useRef:$x,useState:function(){return fp(Es)},useDebugValue:dg,useDeferredValue:function(e,t){var n=Oe();return he===null?pg(n,e,t):oS(n,he.memoizedState,e,t)},useTransition:function(){var e=fp(Es)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:tc(e),t]},useSyncExternalStore:Vx,useId:hS,useHostTransitionStatus:mg,useFormState:Hv,useActionState:Hv,useOptimistic:function(e,t){var n=Oe();return he!==null?Zx(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ug,useCacheRefresh:fS,useEffectEvent:tS};function dp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var im={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=jn(),s=ua(i);s.payload=t,n!=null&&(s.callback=n),t=ha(e,s,i),t!==null&&(Hn(t,e,i),Ml(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=jn(),s=ua(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ha(e,s,i),t!==null&&(Hn(t,e,i),Ml(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jn(),i=ua(n);i.tag=2,t!=null&&(i.callback=t),t=ha(e,i,n),t!==null&&(Hn(t,e,n),Ml(t,e,n))}};function Vv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ol(n,i)||!Ol(s,a):!0}function kv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&im.enqueueReplaceState(t,t.state,null)}function ar(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=me({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function vS(e){Hu(e)}function yS(e){console.error(e)}function xS(e){Hu(e)}function Qu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Xv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function sm(e,t,n){return n=ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Qu(e,t)},n}function SS(e){return e=ua(e),e.tag=3,e}function MS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Xv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Xv(t,n,i),typeof s!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function jE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&tr(t,n,s,!0),n=fn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return yn===null?ah():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xp(e,i,s)),!1;case 22:return n.flags|=65536,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xp(e,i,s)),!1}throw Error(Q(435,n.tag))}return xp(e,i,s),ah(),!1}if(Xt)return t=fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==qp&&(e=Error(Q(422),{cause:i}),Pl(gi(e,n)))):(i!==qp&&(t=Error(Q(423),{cause:i}),Pl(gi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=gi(i,n),s=sm(e.stateNode,i,s),hp(e,s),Ue!==4&&(Ue=2)),!1;var a=Error(Q(520),{cause:i});if(a=gi(a,n),Cl===null?Cl=[a]:Cl.push(a),Ue!==4&&(Ue=2),t===null)return!0;i=gi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=sm(n.stateNode,i,e),hp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(pa===null||!pa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=SS(s),MS(s,e,n,i),hp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var _g=Error(Q(461)),ze=!1;function ke(e,t,n,i){t.child=e===null?Px(t,null,n,i):ir(t,e.child,n,i)}function Wv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return er(t),i=rg(e,t,n,r,a,s),o=og(),e!==null&&!ze?(lg(e,t,s),As(e,t,s)):(Xt&&o&&_h(t),t.flags|=1,ke(e,t,i,s),t.child)}function qv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Qm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,bS(e,t,a,i,s)):(e=xu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!yg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ol,n(r,i)&&e.ref===t.ref)return As(e,t,s)}return t.flags|=1,e=xs(a,i),e.ref=t.ref,e.return=t,t.child=e}function bS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ol(a,i)&&e.ref===t.ref)if(ze=!1,t.pendingProps=i=a,yg(e,s))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,As(e,t,s)}return am(e,t,n,i,s)}function TS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Yv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mu(t,a!==null?a.cachePool:null),a!==null?Iv(t,a):jp(),zx(t);else return i=t.lanes=536870912,Yv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Mu(t,a.cachePool),Iv(t,a),da(),t.memoizedState=null):(e!==null&&Mu(t,null),jp(),da());return ke(e,t,s,n),t.child}function Al(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Yv(e,t,n,i,s){var a=tg();return a=a===null?null:{parent:Fe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Mu(t,null),jp(),zx(t),e!==null&&tr(e,t,i,!0),t.childLanes=s,null}function Eu(e,t){return t=bh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zv(e,t,n){return ir(t,e.child,null,n),e=Eu(t,t.pendingProps),e.flags|=2,qn(t),t.memoizedState=null,e}function $E(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Xt){if(i.mode==="hidden")return e=Eu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Al(null,e);if($p(t),(e=xe)?(e=TM(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,tn=t,xe=null)):e=null,e===null)throw ya(t);return t.lanes=536870912,null}return Eu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if($p(t),s)if(t.flags&256)t.flags&=-257,t=Zv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(ze||tr(e,t,n,!1),s=(n&e.childLanes)!==0,ze||s){if(xa.current===null){if(i=pe,i!==null&&(r=tx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ur(e,r),Hn(i,e,r),_g;ah()}t=Zv(e,t,n)}else e=a.treeContext,xe=vi(r.nextSibling),tn=t,Xt=!0,ca=null,_i=!1,e!==null&&Dx(t,e),t=Eu(t,i),t.flags|=134221824;return t}return e=xs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ur(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function am(e,t,n,i,s){return er(t),n=rg(e,t,n,i,void 0,s),i=og(),e!==null&&!ze?(lg(e,t,s),As(e,t,s)):(Xt&&i&&_h(t),t.flags|=1,ke(e,t,n,s),t.child)}function Jv(e,t,n,i,s,a){return er(t),t.updateQueue=null,n=Gx(t,i,n,s),Hx(e),i=og(),e!==null&&!ze?(lg(e,t,a),As(e,t,a)):(Xt&&i&&_h(t),t.flags|=1,ke(e,t,n,a),t.child)}function Kv(e,t,n,i,s){if(er(t),t.stateNode===null){var a=Xr,r=n.contextType;typeof r=="object"&&r!==null&&(a=ln(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=im,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},ng(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?ln(r):Xr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(dp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&im.enqueueReplaceState(a,a.state,null),Tl(t,i,a,s),bl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ar(n,o);a.props=l;var c=a.context,h=n.contextType;r=Xr,typeof h=="object"&&h!==null&&(r=ln(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&kv(t,a,i,r),ta=!1;var u=t.memoizedState;a.state=u,Tl(t,i,a,s),bl(),c=t.memoizedState,o||u!==c||ta?(typeof p=="function"&&(dp(t,n,p,i),c=t.memoizedState),(l=ta||Vv(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Kp(e,t),r=t.memoizedProps,h=ar(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=Xr,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&kv(t,a,i,l),ta=!1,u=t.memoizedState,a.state=u,Tl(t,i,a,s),bl();var f=t.memoizedState;r!==p||u!==f||ta||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof o=="function"&&(dp(t,n,o,i),f=t.memoizedState),(h=ta||Vv(t,n,h,i,u,f,l)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ur(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ir(t,e.child,null,s),t.child=ir(t,null,n,s)):ke(e,t,n,s),t.memoizedState=a.state,e=t.child):e=As(e,t,s),e}function Qv(e,t,n,i){return $a(),t.flags|=256,ke(e,t,n,i),t.child}var rm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function om(e){return{baseLanes:e,cachePool:Ux()}}function lm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zn),e}function ES(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Xt){if(s?fa(t):da(),(e=xe)?(e=TM(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,tn=t,xe=null)):e=null,e===null)throw ya(t);return Dg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(da(),s=t.mode,a=bh({mode:"hidden",children:a},s),i=Ja(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=om(n),i.childLanes=lm(e,r,n),t.memoizedState=rm,Al(null,i)):(fa(t),vg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return tA(e,t,a,r,i,l,o,n)}return s?(da(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=xs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=xs(l,s):(s=Ja(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Al(null,i),i=t.child,s=e.child.memoizedState,s===null?s=om(n):(a=s.cachePool,a!==null?(o=Fe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Ux(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=lm(e,r,n),t.memoizedState=rm,Al(e.child,i)):(fa(t),n=e.child,e=n.sibling,n=xs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function vg(e,t){return t=bh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bh(e,t){return e=zn(22,e,null,t),e.lanes=0,e}function ru(e,t,n){return ir(t,e.child,null,n),e=vg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(fa(t),t.flags&=-257,ru(e,t,o)):t.memoizedState!==null?(da(),t.child=e.child,t.flags|=128,null):(da(),a=s.fallback,r=t.mode,s=bh({mode:"visible",children:s.children},r),a=Ja(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ir(t,e.child,null,o),s=t.child,s.memoizedState=om(o),s.childLanes=lm(e,i,o),t.memoizedState=rm,Al(null,s));if(fa(t),Dg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Pl({value:s,source:null,stack:null})),ru(e,t,o)}if(ze||tr(e,t,o,!1),i=(o&e.childLanes)!==0,ze||i){if(xa.current!==null)return ru(e,t,o);if(i=pe,i!==null&&(s=tx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,ur(e,s),Hn(i,e,s),_g;return Um(a)||ah(),ru(e,t,o)}return Um(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,xe=vi(a.nextSibling),tn=t,Xt=!0,ca=null,_i=!1,e!==null&&Dx(t,e),t=vg(t,s.children),t.flags|=134221824,t)}function jv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Su(e.return,t,n)}function $v(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Yu(n)===null&&(t=e),e=e.sibling}return t}function ou(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function pp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=un.current;if(t.flags&128)return Fl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Fl(t,r),s==="backwards"&&e!==null?(pp(e),ke(e,t,i,n),pp(e)):ke(e,t,i,n),i=Xt?Il:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jv(e,n,t);else if(e.tag===19)jv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=$v(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,pp(t)),ou(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Yu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ou(t,!0,n,null,a,i);break;case"together":ou(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=$v(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ou(t,!1,s,n,a,i)}return t.child}function ty(e,t,n){var i=t.pendingProps;return sa(t,t.type,i.value),ke(e,t,i.children,n),t.child}function As(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(tr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=xs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function eA(e,t,n){switch(t.tag){case 3:Pu(t,t.stateNode.containerInfo),sa(t,Fe,e.memoizedState.cache),$a();break;case 27:case 5:Pp(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$p(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return fa(t),t.flags|=128,null;i=tr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?ES(e,t,n):(fa(t),e=As(e,t,n),e!==null?e.sibling:null)}fa(t);break;case 19:if(t.flags&128)return cm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(tr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return cm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Fl(t,un.current),i)break;return null;case 22:return t.lanes=0,TS(e,t,n,t.pendingProps);case 24:sa(t,Fe,e.memoizedState.cache)}return As(e,t,n)}function AS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!yg(e,n)&&(t.flags&128)===0)return ze=!1,eA(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,Xt&&(t.flags&1048576)!==0&&Nx(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Qm(e)?(i=ar(e,i),t.tag=1,t=Kv(null,t,e,i,n)):(t.tag=0,t=am(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Fm){t.tag=11,t=Wv(null,t,e,i,n);break t}else if(s===zm){t.tag=14,t=qv(null,t,e,i,n);break t}else if(s===Zi){t.tag=10,t.type=e,t=ty(null,t,n);break t}}throw t=Op(e)||e,Error(Q(306,t,""))}}return t;case 0:return am(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ar(i,t.pendingProps),Kv(e,t,i,s,n);case 3:t:{if(Pu(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Kp(e,t),Tl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,sa(t,Fe,i),i!==a.cache&&Zp(t,[Fe],n,!0),bl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Qv(e,t,i,n);break t}else if(i!==s){s=gi(Error(Q(424)),t),Pl(s),t=Qv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=vi(e.firstChild),tn=t,Xt=!0,ca=null,_i=!0,n=Px(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if($a(),i===s){t=As(e,t,n);break t}ke(e,t,i,n)}t=t.child}return t;case 26:return Ur(e,t),e===null?(n=wy(t.type,null,t.pendingProps,null))?t.memoizedState=n:Xt||(t.stateNode=mM(t.type,t.pendingProps,la.current,t)):t.memoizedState=wy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pp(t),e===null&&Xt&&(i=t.stateNode=EM(t.type,t.pendingProps,la.current),tn=t,_i=!0,s=xe,Ta(t.type)?(Om=s,xe=vi(i.firstChild)):xe=s),ke(e,t,t.pendingProps.children,n),Ur(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Xt&&((s=i=xe)&&(i=YA(i,t.type,t.pendingProps,_i),i!==null?(t.stateNode=i,tn=t,xe=vi(i.firstChild),_i=!1,s=!0):s=!1),s||ya(t)),Pp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Nm(s,a)?i=null:r!==null&&Nm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=rg(e,t,XE,null,null,n),mo._currentValue=s),Ur(e,t),ke(e,t,i,n),t.child;case 6:return e===null&&Xt&&((e=n=xe)&&(n=ZA(n,t.pendingProps,_i),n!==null?(t.stateNode=n,tn=t,xe=null,e=!0):e=!1),e||ya(t)),null;case 13:return ES(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ir(t,null,i,n):ke(e,t,i,n),t.child;case 11:return Wv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Ur(e,t),ke(e,t,i,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:return ty(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,er(t),s=ln(s),i=i(s),t.flags|=1,ke(e,t,i,n),t.child;case 14:return qv(e,t,t.type,t.pendingProps,n);case 15:return bS(e,t,t.type,t.pendingProps,n);case 19:return cm(e,t,n);case 31:return $E(e,t,n);case 22:return TS(e,t,n,t.pendingProps);case 24:return er(t),i=ln(Fe),e===null?(s=tg(),s===null&&(s=pe,a=$m(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},ng(t),sa(t,Fe,s)):((e.lanes&n)!==0&&(Kp(e,t),Tl(t,null,null,n),bl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),sa(t,Fe,i)):(i=a.cache,sa(t,Fe,i),i!==s.cache&&Zp(t,[Fe],n,!0))),ke(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Xt&&_h(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Ur(e,t),ke(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function _s(e){e.flags|=4}function mp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ny(t,i):Ny(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(eM())e.flags|=8192;else throw Qa=Wu,eg}else e.flags&=-16777217}function ey(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!CM(t))if(eM())e.flags|=8192;else throw Qa=Wu,eg}function lu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qy():536870912,e.lanes|=t,lo|=t)}function cl(e,t){if(!Xt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function nA(e,t,n){var i=t.pendingProps;switch(jm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ss(Fe),so(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?_s(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,up())),ye(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(_s(t),a!==null?(ye(t),ey(t,a)):(ye(t),mp(t,s,null,i,n))):a?a!==e.memoizedState?(_s(t),ye(t),ey(t,a)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_s(t),ye(t),mp(t,s,e,i,n)),null;case 27:if(Bu(t),n=la.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ye(t),t.subtreeFlags&=-33554433,null}e=ji.current,Dr(t)?Rv(t,e):(e=EM(s,i,n),t.stateNode=e,_s(t))}return ye(t),t.subtreeFlags&=-33554433,null;case 5:if(Bu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ye(t),t.subtreeFlags&=-33554433,null}if(a=ji.current,Dr(t))Rv(t,a);else{var r=Vl(la.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[on]=t,a[Vn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(hn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&_s(t)}}return ye(t),t.subtreeFlags&=-33554433,mp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=la.current,Dr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=tn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[on]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||dM(e.nodeValue,n)),e||ya(t,!0)}else e=Vl(e).createTextNode(i),e[on]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Dr(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[on]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qn(t),t):(qn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Dr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[on]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else s=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(qn(t),t):(qn(t),null)}return qn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),lu(t,t.updateQueue),ye(t),null);case 4:return so(),e===null&&Rg(t.stateNode.containerInfo),t.flags|=67108864,ye(t),null;case 10:return Ss(t.type),ye(t),null;case 19:if(sg(t),i=t.memoizedState,i===null)return ye(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)cl(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Yu(e),a!==null){for(t.flags|=128,cl(i,!1),e=a.updateQueue,t.updateQueue=e,lu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rx(n,e),n=n.sibling;return Fl(t,un.current&1|2),Xt&&vs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Jn()>ih&&(t.flags|=128,s=!0,cl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Yu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,lu(t,e),cl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Xt)return ye(t),null}else 2*Jn()-i.renderingStartTime>ih&&n!==536870912&&(t.flags|=128,s=!0,cl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Jn(),e.sibling=null,a=un.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Xt?Fl(t,a):(n=a,Se(fn,t),Se(un,n),yn===null&&(yn=t)),Xt&&vs(t,i.treeForkCount),e}return ye(t),null;case 22:case 23:return qn(t),ig(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&lu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&cn(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ss(Fe),ye(t),null;case 25:return null;case 30:return t.flags|=33554432,ye(t),null}throw Error(Q(156,t.tag))}function iA(e,t){switch(jm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ss(Fe),so(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bu(t),null;case 31:if(t.memoizedState!==null){if(qn(t),t.alternate===null)throw Error(Q(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return sg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return so(),null;case 10:return Ss(t.type),null;case 22:case 23:return qn(t),ig(),e!==null&&cn(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ss(Fe),null;case 25:return null;default:return null}}function wS(e,t){switch(jm(t),t.tag){case 3:Ss(Fe),so();break;case 26:case 27:case 5:Bu(t);break;case 4:so();break;case 31:t.memoizedState!==null&&qn(t);break;case 13:qn(t);break;case 19:sg(t);break;case 10:Ss(t.type);break;case 22:case 23:qn(t),ig(),e!==null&&cn(Ka);break;case 24:Ss(Fe)}}function ec(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ue(t,t.return,o)}}function Sa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ue(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ue(t,t.return,h)}}function RS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fx(t,n)}catch(i){ue(e,e.return,i)}}}function CS(e,t,n){n.props=ar(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=bs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=yM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ti(e);Gn(e.child,!1,WA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ue(e,t,o)}}function rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ue(e,t,s)}else n.current=null}function ju(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)bM(e.stateNode,t[n])}function ny(e){for(var t=e.return;t!==null&&(Sg(t)&&bM(e.stateNode,t.stateNode),!xg(t));)t=t.return}function wl(e){for(var t=e.return;t!==null&&(Sg(t)&&qA(e.stateNode,t.stateNode),!xg(t));)t=t.return}function xg(e){return e.tag===5||e.tag===3||e.tag===27}function Sg(e){return e&&e.tag===7&&e.stateNode!==null}function um(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ue(e,e.return,s)}}function gp(e,t,n){try{var i=e.stateNode;wA(i,e.type,n,t),i[Vn]=t}catch(s){ue(e,e.return,s)}}function NS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function _p(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||NS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji)),ju(e,i),te=!0;else if(s!==4&&(s===27&&(ju(e,i),i=null,Ta(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(hm(e,t,n,i),e=e.sibling;e!==null;)hm(e,t,n,i),e=e.sibling}function $u(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),ju(e,i),te=!0;else if(s!==4&&(s===27&&(ju(e,i),i=null,Ta(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for($u(e,t,n,i),e=e.sibling;e!==null;)$u(e,t,n,i),e=e.sibling}function DS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[on]=e,t[Vn]=n}catch(a){ue(e,e.return,a)}}var th=!1,Yn=null;function iy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(th=!0)}var Yi=null;function sy(){var e=Yi;return Yi=null,e}var Fn=0;function So(e,t,n,i,s){return Fn=0,LS(e.child,t,n,i,s)}function LS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Dm(r);i.push(o),o.view&&(a=!0)}else a||Dm(r).view&&(a=!0);th=!0,gM(r,Fn===0?t:t+"_"+Fn,n),Fn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||LS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ts(e,t){for(;e!==null;)e.tag===5?_M(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ts(e.child,t)),e=e.sibling}function Au(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Au(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Cs(t.default,t.share),t!=="none"&&(So(e,n,t,null,!1)||ts(e.child,!1))}e=e.sibling}}function fm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=bs(i,n),a=Cs(i.default,n.paired?i.share:i.enter);a!=="none"?So(e,s,a,null,!1)?(Au(e),n.paired||t||co(e,i.onEnter)):ts(e.child,!1):Au(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fm(e,t),e=e.sibling;else Au(e)}function dm(e){if(Yn!==null&&Yn.size!==0){var t=Yn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Cs(n.default,n.share);if(a!=="none"&&(So(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,co(e,n.onShare)):ts(e.child,!1)),t.delete(i),t.size===0)break}}}dm(e)}e=e.sibling}}}function pm(e){if(e.tag===30){var t=e.memoizedProps,n=bs(t,e.stateNode),i=Yn!==null?Yn.get(n):void 0,s=Cs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(So(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Yn.delete(n),co(e,t.onShare)):co(e,t.onExit):ts(e.child,!1)),Yn!==null&&dm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)pm(e),e=e.sibling;else Yn!==null&&dm(e)}function US(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bs(t,e.stateNode);t=Cs(t.default,t.update),e.flags&=-5,t!=="none"&&So(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&US(e);e=e.sibling}}function mm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ts(e.child,!1))}mm(e)}e=e.sibling}}function wu(e){if(e.tag===30)e.stateNode.paired=null,ts(e.child,!1),mm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)wu(e),e=e.sibling;else mm(e)}function OS(e){for(e=e.child;e!==null;)e.tag===30?ts(e.child,!1):(e.subtreeFlags&33554432)!==0&&OS(e),e=e.sibling}function Mg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Fn<a.length){var c=a[Fn],h=Dm(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&gM(l,Fn===0?n:n+"_"+Fn,s),o&&(e.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(l,Fn===0?i:i+"_"+Fn,t.memoizedProps)),Fn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Mg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function IS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=bs(n,i),a=Cs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(UA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Fn=0,s=Mg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||co(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&IS(e,t);e=e.sibling}}var Qe=!1,se=!1,ki=!1,vp=!1,ay=typeof WeakSet=="function"?WeakSet:Set,je=null,Xi=!1,_l=!1,eh=!1,gm=!1;function sA(e,t,n){if(e=e.containerInfo,Rm=go,e=xx(e),Zm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,f=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)f=u,u=v;for(;;){if(u===e)break e;if(f===i&&++h===a&&(l=o),f===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Cm={focusedElem:e,selectionRange:i},go=!1,n=(n&335544064)===n,je=t,t=n?9270:1024;je!==null;){if(e=je,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&pm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&iy(e),cu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&pm(i),cu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&iy(e),cu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,je=i):(n&&US(e),cu(n))}}Yn=null}function cu(e){for(;je!==null;){var t=je,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=ar(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ue(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Lm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Lm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=bs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Cs(s.default,s.update),s!=="none"&&So(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,je=i;break}je=t.return}}function PS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&ec(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var s=ar(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&RS(n),i&512&&qi(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fx(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&DS(n);case 26:case 5:Wi(e,n),t===null&&i&4&&um(n),i&512&&qi(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&HS(e,n);break;case 13:Wi(e,n),i&4&&GS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gA.bind(null,n),JA(e,n))));break;case 22:if(i=n.memoizedState!==null||Qe,!i){var a=t!==null&&t.memoizedState!==null||se;t=Qe,s=se,Qe=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ai(e,n,i)):Wi(e,n),Qe=t,se=s}break;case 30:Wi(e,n),i&512&&qi(n,n.return);break;case 7:i&512&&qi(n,n.return);default:Wi(e,n)}}function _m(e,t){for(e=e.child;e!==null;)BS(e,t),e=e.sibling}function BS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ue(e,e.return,l)}vm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,te=!0}catch(l){ue(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Sy(o,!0):Sy(e.stateNode,!1)}catch(l){ue(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&_m(e,t);break;default:_m(e,t)}}function vm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:BS(n,i);break t;case 22:n.memoizedState===null&&vm(n,i);break t;default:vm(n,i)}}e=e.sibling}}function FS(e){var t=e.alternate;t!==null&&(e.alternate=null,FS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Pn=!1;function Ei(e,t,n){for(n=n.child;n!==null;)zS(e,t,n),n=n.sibling}function zS(e,t,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 26:se||rn(n,t),Ei(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||rn(n,t),wl(n);var i=Ae,s=Pn;Ta(n.type)&&(Ae=n.stateNode,Pn=!1),Ei(e,t,n),AM(n.stateNode,n.type,n.memoizedProps),Ae=i,Pn=s;break;case 5:se||rn(n,t),wl(n);case 6:if(n.tag===6&&wl(n),i=Ae,s=Pn,Ae=null,Ei(e,t,n),Ae=i,Pn=s,Ae!==null)if(Pn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}else try{Ae.removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}break;case 18:Ae!==null&&(Pn?(e=Ae,xy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),_o(e)):xy(Ae,n.stateNode));break;case 4:i=Ae,s=Pn,Ae=n.stateNode.containerInfo,Pn=!0,Ei(e,t,n),Ae=i,Pn=s;break;case 0:case 11:case 14:case 15:Sa(2,n,t),se||Sa(4,n,t),Ei(e,t,n);break;case 1:se||(rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&CS(n,t,i)),Ei(e,t,n);break;case 21:Ei(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,Ei(e,t,n),se=i;break;case 30:rn(n,t),Ei(e,t,n);break;case 7:se||rn(n,t),Ei(e,t,n);break;default:Ei(e,t,n)}}function HS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_o(e)}catch(n){ue(t,t.return,n)}}}function GS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(n){ue(t,t.return,n)}}function aA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ay),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ay),t;default:throw Error(Q(435,e.tag))}}function uu(e,t){var n=aA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=_A.bind(null,e,i);i.then(s,s)}})}function En(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ta(l.type)){Ae=l.stateNode,Pn=!1;break t}break;case 5:Ae=l.stateNode,Pn=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,Pn=!0;break t}l=l.return}if(Ae===null)throw Error(Q(160));zS(r,o,a),Ae=null,Pn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)VS(t,e,n),t=t.sibling}var wi=null;function VS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}En(t,e,n),An(e),s&4&&(Sa(3,e,e.return),ec(3,e),Sa(5,e,e.return));break;case 1:En(t,e,n),An(e),s&512&&(se||i===null||rn(i,i.return)),s&64&&Qe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=wi,En(t,e,n),An(e),s&512&&(se||i===null||rn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Qe)e.stateNode=mM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Ql]||i[on]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),hn(i,t,n),i[on]=e,$e(i),t=i;break t;case"link":if(a=Cy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),hn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Cy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),hn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[on]=e,$e(i),t=i}e.stateNode=t}else Qe||Im(a,e.type,e.stateNode);else e.stateNode=Ry(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?Qe||Im(a,e.type,e.stateNode):Ry(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&gp(e,e.memoizedProps,i.memoizedProps);break;case 27:En(t,e,n),An(e),s&512&&(se||i===null||rn(i,i.return)),i!==null&&s&4&&gp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ki,ki=!1,En(t,e,n),ki=a,An(e),s&512&&(se||i===null||rn(i,i.return)),e.flags&32){t=e.stateNode;try{ro(t,""),te=!0}catch(h){ue(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,gp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(vp=!0);break;case 6:if(En(t,e,n),An(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,te=!0}catch(h){ue(e,e.return,h)}}break;case 3:if(te=!1,Du=null,a=wi,wi=kl(t.containerInfo),En(t,e,n),wi=a,An(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(h){ue(e,e.return,h)}vp&&(vp=!1,kS(e)),te=!1;break;case 4:s=ki,ki=Qe,i=hv(),a=wi,wi=kl(e.stateNode.containerInfo),En(t,e,n),An(e),wi=a,te&&_l&&(eh=!0),te=i,ki=s;break;case 12:En(t,e,n),An(e);break;case 31:En(t,e,n),An(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,uu(e,t)));break;case 13:En(t,e,n),An(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Th=Jn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,uu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Qe,l=se,c=ki;Qe=o||a,ki=c||a,se=l||r,En(t,e,n),se=l,ki=c,Qe=o,An(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Qe||se||(t=r||se,n=Qe,i=se,Qe=a||Qe,se=t,js(e,2),Qe=n,se=i),!a&&ki||_m(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,uu(e,n))));break;case 19:En(t,e,n),An(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,uu(e,t)));break;case 30:s&512&&(se||i===null||rn(i,i.return)),s=hv(),a=_l,r=(n&335544064)===n,o=e.memoizedProps,_l=r&&Cs(o.default,o.update)!=="none",En(t,e,n),An(e),r&&i!==null&&te&&(e.flags|=4),_l=a,te=s;break;case 21:break;case 7:s&512&&(se||i===null||rn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:En(t,e,n),An(e)}}function An(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(NS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Sg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(xg(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=_p(e);$u(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ro(c,""),n.flags&=-33);var h=_p(e);$u(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=_p(e);hm(e,u,p,r);break;default:throw Error(Q(161))}}catch(f){ue(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,go=!0,t.reset(),go=!1),e=e.sibling}}function Lr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)XS(t,e),t=t.sibling;else IS(t,!1)}function XS(e,t){var n=e.alternate;if(n===null)fm(e,!1);else switch(e.tag){case 3:if(gm=Xi=!1,sy(),Lr(t,e),!Xi&&!eh){if(e=Yi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];_M(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),gm=!0}Yi=null;break;case 5:Lr(t,e);break;case 4:i=Xi,Xi=!1,Lr(t,e),Xi&&(eh=!0),Xi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?fm(e,!1):Lr(t,e));break;case 30:i=Xi,s=sy(),Xi=!1,Lr(t,e),Xi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=bs(a,r),r=bs(n.memoizedProps,r);var o=Cs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Fn=0,t=Mg(e,n,t,r,o,a,!0),Fn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(co(e,e.memoizedProps.onUpdate),Yi=s):s!==null&&(s.push.apply(s,Yi),Yi=s),Xi=(e.flags&32)!==0?!0:i;break;default:Lr(t,e)}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)PS(e,t.alternate,t),t=t.sibling}function js(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),js(n,i);break;case 1:rn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&CS(n,n.return,s),js(n,i);break;case 27:(i&2)!==0&&AM(n.stateNode,n.type,n.memoizedProps);case 5:rn(n,n.return),n.tag!==5&&n.tag!==27||wl(n),js(n,i);break;case 6:wl(n);break;case 26:rn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),js(n,i);break;case 22:n.memoizedState===null&&js(n,i);break;case 30:rn(n,n.return),js(n,i);break;case 7:rn(n,n.return);default:js(n,i)}e=e.sibling}}function Ai(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ai(s,a,n),ec(4,a);break;case 1:if(Ai(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){ue(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Bx(c[s],l)}catch(h){ue(i,i.return,h)}}o&&r&64&&RS(a),qi(a,a.return);break;case 27:(n&2)!==0&&DS(a);case 5:a.tag!==5&&a.tag!==27||ny(a),Ai(s,a,n),o&&i===null&&r&4&&um(a),qi(a,a.return);break;case 6:ny(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Qe||Im(kl(l.ownerDocument),a.type,l),Ai(s,a,n),o&&i===null&&r&4&&um(a),qi(a,a.return);break;case 12:Ai(s,a,n);break;case 31:Ai(s,a,n),o&&r&4&&HS(s,a);break;case 13:Ai(s,a,n),o&&r&4&&GS(s,a);break;case 22:a.memoizedState===null&&Ai(s,a,n),qi(a,a.return);break;case 30:Ai(s,a,n),qi(a,a.return);break;case 7:qi(a,a.return);default:Ai(s,a,n)}t=t.sibling}}function bg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$l(n))}function Tg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function hi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)WS(e,t,n,i),t=t.sibling;else s&&OS(t)}function WS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&wu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:hi(e,t,n,i),a&2048&&ec(9,t);break;case 1:hi(e,t,n,i);break;case 3:hi(e,t,n,i),s&&gm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&$l(a)));break;case 12:if(a&2048){hi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ue(t,t.return,c)}}else hi(e,t,n,i);break;case 31:hi(e,t,n,i);break;case 13:hi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&wu(o),r._visibility&2?hi(e,t,n,i):Rl(e,t)):(s&&o!==null&&o.memoizedState!==null&&wu(t),r._visibility&2?hi(e,t,n,i):(r._visibility|=2,Or(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&bg(o,t);break;case 24:hi(e,t,n,i),a&2048&&Tg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ts(a.child,!0),ts(t.child,!0))),hi(e,t,n,i);break;default:hi(e,t,n,i)}}function Or(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Or(a,r,o,l,s),ec(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Or(a,r,o,l,s):Rl(a,r):(h._visibility|=2,Or(a,r,o,l,s)),s&&c&2048&&bg(r.alternate,r);break;case 24:Or(a,r,o,l,s),s&&c&2048&&Tg(r.alternate,r);break;default:Or(a,r,o,l,s)}t=t.sibling}}function Rl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Rl(n,i),s&2048&&bg(i.alternate,i);break;case 24:Rl(n,i),s&2048&&Tg(i.alternate,i);break;default:Rl(n,i)}t=t.sibling}}var Wa=8192;function Va(e,t,n){if(e.subtreeFlags&Wa)for(e=e.child;e!==null;)qS(e,t,n),e=e.sibling}function qS(e,t,n){switch(e.tag){case 26:Va(e,t,n),e.flags&Wa&&(e.memoizedState!==null?cw(n,wi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Dy(n,e)));break;case 5:Va(e,t,n),e.flags&Wa&&(e=e.stateNode,(t&335544128)===t&&Dy(n,e));break;case 3:case 4:var i=wi;wi=kl(e.stateNode.containerInfo),Va(e,t,n),wi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Wa,Wa=16777216,Va(e,t,n),Wa=i):Va(e,t,n));break;case 30:if((e.flags&Wa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Yn===null&&(Yn=new Map),Yn.set(i,s)}Va(e,t,n);break;default:Va(e,t,n)}}function YS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,JS(i,e)}YS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ZS(e),e=e.sibling}function ZS(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ru(e)):ul(e);break;default:ul(e)}}function Ru(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,JS(i,e)}YS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sa(8,t,t.return),Ru(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ru(t));break;default:Ru(t)}e=e.sibling}}function JS(e,t){for(;je!==null;){var n=je;switch(n.tag){case 0:case 11:case 15:Sa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:$l(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,je=i;else t:for(n=e;je!==null;){i=je;var s=i.sibling,a=i.return;if(FS(i),i===n){je=null;break t}if(s!==null){s.return=a,je=s;break t}je=a}}}var rA={getCacheForType:function(e){var t=ln(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(Fe).controller.signal}},oA=typeof WeakMap=="function"?WeakMap:Map,ne=0,pe=null,qt=null,Qt=0,le=0,Xn=null,aa=!1,Mo=!1,Eg=!1,ws=0,Ue=0,Ma=0,ja=0,nh=0,Zn=0,lo=0,Cl=null,Bn=null,ym=!1,Th=0,KS=0,ih=1/0,sh=null,pa=null,Ce=0,Ci=null,rr=null,$i=0,xm=0,Sm=null,QS=null,eo=null,no=null,io=null,Nl=0,Cu=null;function jn(){return(ne&2)!==0&&Qt!==0?Qt&-Qt:Dt.T!==null?wg():ex()}function jS(){if(Zn===0)if((Qt&536870912)===0||Xt){var e=Qc;Qc<<=1,(Qc&3932160)===0&&(Qc=262144),Zn=e}else Zn=536870912;return e=fn.current,e!==null&&(e.flags|=32),Zn}function co(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=yM(bs(e.memoizedProps,n))),no===null&&(no=[]),no.push(t.bind(null,i))}}function Hn(e,t,n){(e===pe&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(uo(e,0),ra(e,Qt,Zn,!1)),Kl(e,n),((ne&2)===0||e!==pe)&&(e===pe&&((ne&2)===0&&(ja|=n),Ue===4&&ra(e,Qt,Zn,!1)),ns(e))}function $S(e,t,n){if((ne&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),s=i?uA(e,t):yp(e,t,!0),a=i;do{if(s===0){Mo&&!i&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!lA(n)){s=yp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Cl;var l=o.current.memoizedState.isDehydrated;if(l&&(uo(o,r).flags|=256),r=yp(o,r,!1),r!==2&&r!==6){if(Eg&&!l){o.errorRecoveryDisabledLanes|=a,ja|=a,s=4;break t}a=Bn,Bn=s,a!==null&&(Bn===null?Bn=a:Bn.push.apply(Bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){uo(e,0),ra(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ra(i,t,Zn,!aa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Th+300-Jn(),10<s)){if(ra(i,t,Zn,!aa),uh(i,0,!0)!==0)break t;$i=t,i.timeoutHandle=Cg(ry.bind(null,i,n,Bn,sh,ym,t,Zn,ja,lo,aa,a,"Throttled",-0,0),s);break t}ry(i,n,Bn,sh,ym,t,Zn,ja,lo,aa,a,null,-0,0)}}break}while(!0);ns(e)}function ry(e,t,n,i,s,a,r,o,l,c,h,p,u,f){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Yn=null,qS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=Xl.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?Th-Jn():(a&4194048)===a?KS-Jn():0,v=uw(p,v),v!==null)){$i=a,e.cancelPendingCommit=v(ly.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,f)),ra(e,a,r,!c);return}ly(e,t,a,n,i,s,r,o,l,c,h,p)}function lA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!$n(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,i){t=Ky(e,t),t&=~nh,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Qn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&jy(e,n,t)}function Eh(){return(ne&6)===0?(nc(0,!1),!1):!0}function Ag(){if(qt!==null){if(le===0)var e=qt.return;else e=qt,ys=hr=null,cg(e),jr=null,Bl=0,e=qt;for(;e!==null;)wS(e.alternate,e),e=e.return;qt=null}}function uo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,NA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$i=0,Ag(),pe=e,qt=n=xs(e.current,null),Qt=t,le=0,Xn=null,aa=!1,Mo=Jl(e,t),Eg=!1,lo=Zn=nh=ja=Ma=Ue=0,Bn=Cl=null,ym=!1,ws=Ky(e,t),mh(),n}function tM(e,t){Ht=null,Dt.H=Ku,t===xo||t===vh?(t=Uv(),le=3):t===eg?(t=Uv(),le=4):le=t===_g?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xn=t,qt===null&&(Ue=1,Qu(e,gi(t,e.current)))}function eM(){var e=fn.current;return e===null?!0:(Qt&4194048)===Qt?yn===null:(Qt&62914560)===Qt||(Qt&536870912)!==0?e===yn:!1}function nM(){var e=Dt.H;return Dt.H=Ku,e===null?Ku:e}function iM(){var e=Dt.A;return Dt.A=rA,e}function ah(){Ue=4,aa||(Qt&4194048)!==Qt&&fn.current!==null||(Mo=!0),(Ma&134217727)===0&&(ja&134217727)===0||pe===null||ra(pe,Qt,Zn,!1)}function yp(e,t,n){var i=ne;ne|=2;var s=nM(),a=iM();(pe!==e||Qt!==t)&&(sh=null,uo(e,t)),t=!1;var r=Ue;t:do try{if(le!==0&&qt!==null){var o=qt,l=Xn;switch(le){case 8:Ag(),r=6;break t;case 3:case 2:case 9:case 6:fn.current===null&&(t=!0);var c=le;if(le=0,Xn=null,Yr(e,o,l,c),n&&Mo){r=0;break t}break;default:c=le,le=0,Xn=null,Yr(e,o,l,c)}}cA(),r=Ue;break}catch(h){tM(e,h)}while(!0);return t&&e.shellSuspendCounter++,ys=hr=null,ne=i,Dt.H=s,Dt.A=a,qt===null&&(pe=null,Qt=0,mh()),r}function cA(){for(;qt!==null;)sM(qt)}function uA(e,t){var n=ne;ne|=2;var i=nM(),s=iM();pe!==e||Qt!==t?(sh=null,ih=Jn()+500,uo(e,t)):Mo=Jl(e,t);t:do try{if(le!==0&&qt!==null){t=qt;var a=Xn;e:switch(le){case 1:le=0,Xn=null,Yr(e,t,a,1);break;case 2:case 9:if(Lv(a)){le=0,Xn=null,oy(t);break}t=function(){le!==2&&le!==9||pe!==e||(le=7),ns(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:Lv(a)?(le=0,Xn=null,oy(t)):(le=0,Xn=null,Yr(e,t,a,7));break;case 5:var r=null;switch(qt.tag){case 26:r=qt.memoizedState;case 5:case 27:var o=qt;if(r?CM(r):o.stateNode.complete){le=0,Xn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,Ah(c)):qt=null}break e}}le=0,Xn=null,Yr(e,t,a,5);break;case 6:le=0,Xn=null,Yr(e,t,a,6);break;case 8:Ag(),Ue=6;break t;default:throw Error(Q(462))}}hA();break}catch(h){tM(e,h)}while(!0);return ys=hr=null,Dt.H=i,Dt.A=s,ne=n,qt!==null?0:(pe=null,Qt=0,mh(),Ue)}function hA(){for(;qt!==null&&!RT();)sM(qt)}function sM(e){var t=AS(e.alternate,e,ws);e.memoizedProps=e.pendingProps,t===null?Ah(e):qt=t}function oy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jv(n,t,t.pendingProps,t.type,void 0,Qt);break;case 11:t=Jv(n,t,t.pendingProps,t.type.render,t.ref,Qt);break;case 5:cg(t);var i=t;i===tn&&(Xt?(ku(i),i.tag===5&&i.stateNode!=null&&(xe=i.stateNode)):(ku(i),Xt=!0));default:wS(n,t),t=qt=Rx(t,ws),t=AS(n,t,ws)}e.memoizedProps=e.pendingProps,t===null?Ah(e):qt=t}function Yr(e,t,n,i){ys=hr=null,cg(t),jr=null,Bl=0;var s=t.return;try{if(jE(e,s,t,n,Qt)){Ue=1,Qu(e,gi(n,e.current)),qt=null;return}}catch(a){if(s!==null)throw qt=s,a;Ue=1,Qu(e,gi(n,e.current)),qt=null;return}t.flags&32768?(Xt||i===1?e=!0:Mo||(Qt&536870912)!==0?e=!1:(aa=e=!0,(i===2||i===9||i===3||i===6)&&(i=fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),aM(t,e)):Ah(t)}function Ah(e){var t=e;do{if((t.flags&32768)!==0){aM(t,aa);return}e=t.return;var n=nA(t.alternate,t,ws);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Ue===0&&(Ue=5)}function aM(e,t){do{var n=iA(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Ue=6,qt=null}function ly(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do wh();while(Ce!==0);if((ne&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===pe&&(qt=pe=null,Qt=0),rr=t,Ci=e,$i=n,Sm=s,QS=i,fA(e,t,n,r,o,l,p)}}function fA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(xm=o,o|=Jm,FT(e,n,o,i,s,a),no=null,(n&335544064)===n?(io=HE(e),i=10262):(io=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,vA(Fu,function(){return Em(),null})):(e.callbackNode=null,e.callbackPriority=0),th=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{sA(e,t,n)}finally{ne=a,ie.p=s,Dt.T=i}}Ce=1,th?eo=PA(r,e.containerInfo,io,Mm,bm,pA,Tm,Em,dA,null,null):(Mm(),bm(),Tm())}function dA(e){if(Ce!==0){var t=Ci.onRecoverableError;t(e,{componentStack:null})}}function pA(){Ce===3&&(Ce=0,XS(rr,Ci),Ce=4)}function Mm(){if(Ce===1){Ce=0;var e=Ci,t=rr,n=$i,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null;var s=ie.p;ie.p=2;var a=ne;ne|=4;try{_l=eh=!1,VS(t,e,n),n=Cm;var r=xx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&yx(o.ownerDocument.documentElement,o)){if(l!==null&&Zm(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),g=l.end===void 0?b:Math.min(l.end,v);!f.extend&&b>g&&(r=g,g=b,b=r);var d=Tv(o,b),m=Tv(o,g);if(d&&m&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==m.node||f.focusOffset!==m.offset)){var y=p.createRange();y.setStart(d.node,d.offset),f.removeAllRanges(),b>g?(f.addRange(y),f.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),f.addRange(y))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}go=!!Rm,Cm=Rm=null}finally{ne=a,ie.p=s,Dt.T=i}}e.current=t,Ce=2}}function bm(){if(Ce===2){Ce=0;var e=Ci,t=rr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{PS(e,t.alternate,t)}finally{ne=s,ie.p=i,Dt.T=n}}Ce=3}}function Tm(){if(Ce===4||Ce===3){Ce=0;var e=eo;eo=null,CT();var t=Ci,n=rr,i=$i,s=QS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ce=5:(Ce=0,rr=Ci=null,rM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(pa=null),Vm(i),n=n.stateNode,Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Zl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Dt.T,a=ie.p,ie.p=2,Dt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Dt.T=n,ie.p=a}}if(s=no,r=io,io=null,s!==null&&(no=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);($i&3)!==0&&wh(),ns(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Cu?Nl++:(Nl=0,Cu=t):(Nl=0,Cu=null),nc(0,!1)}}function rM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function wh(){return eo!==null&&(eo.skipTransition(),eo=null),Mm(),bm(),Tm(),Em()}function Em(){if(Ce!==5)return!1;var e=Ci,t=xm;xm=0;var n=Vm($i),i=Dt.T,s=ie.p;try{ie.p=32>n?32:n,Dt.T=null,n=Sm,Sm=null;var a=Ci,r=$i;if(Ce=0,rr=Ci=null,$i=0,(ne&6)!==0)throw Error(Q(331));var o=ne;if(ne|=4,ZS(a.current),WS(a,a.current,r,n),ne=o,nc(0,!1),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Zl,a)}catch{}return!0}finally{ie.p=s,Dt.T=i,rM(e,t)}}function cy(e,t,n){t=gi(n,t),t=sm(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Kl(e,2),ns(e))}function ue(e,t,n){if(e.tag===3)cy(e,e,n);else for(;t!==null;){if(t.tag===3){cy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){e=gi(n,e),n=SS(2),i=ha(t,n,2),i!==null&&(MS(n,i,t,e),Kl(i,2),ns(i));break}}t=t.return}}function xp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new oA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Eg=!0,s.add(n),e=mA.bind(null,e,t,n),t.then(e,e))}function mA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(Qt&n)===n&&((Ue===4||Ue===3&&(Qt&62914560)===Qt&&300>Jn()-Th)&&(ne&2)===0?uo(e,0):nh|=n,lo===Qt&&(lo=0)),ns(e)}function oM(e,t){t===0&&(t=Qy()),e=ur(e,t),e!==null&&(Kl(e,t),ns(e))}function gA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oM(e,n)}function _A(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),oM(e,n)}function vA(e,t){return Hm(e,t)}var ho=null,Ir=null,Am=!1,rh=!1,Sp=!1,oa=0;function ns(e){e!==Ir&&e.next===null&&(Ir===null?ho=Ir=e:Ir=Ir.next=e),rh=!0,Am||(Am=!0,xA())}function nc(e,t){if(!Sp&&rh){Sp=!0;do for(var n=!1,i=ho;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Qn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,uy(i,a))}else a=Qt,a=uh(i,i===pe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Jl(i,a)||(n=!0,uy(i,a));i=i.next}while(n);Sp=!1}}function yA(){lM()}function lM(){rh=Am=!1;var e=0;oa!==0&&CA()&&(e=oa);for(var t=Jn(),n=null,i=ho;i!==null;){var s=i.next,a=cM(i,t);a===0?(i.next=null,n===null?ho=s:n.next=s,s===null&&(Ir=n)):(n=i,(e!==0||(a&3)!==0)&&(rh=!0)),i=s}Ce!==0&&Ce!==5||nc(e,!1),oa!==0&&(oa=0)}function cM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Qn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=BT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=pe,n=Qt,n=uh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&$d(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&$d(i),Vm(n)){case 2:case 8:n=Zy;break;case 32:n=Fu;break;case 268435456:n=Jy;break;default:n=Fu}return i=uM.bind(null,e),n=Hm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&$d(i),e.callbackPriority=2,e.callbackNode=null,2}function uM(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wh()&&e.callbackNode!==n)return null;var i=Qt;return i=uh(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:($S(e,i,t),cM(e,Jn()),e.callbackNode!=null&&e.callbackNode===n?uM.bind(null,e):null)}function uy(e,t){if(wh())return null;$S(e,t,!0)}function xA(){DA(function(){(ne&6)!==0?Hm(Yy,yA):lM()})}function wg(){if(oa===0){var e=nr;e===0&&(e=Kc,Kc<<=1,(Kc&261888)===0&&(Kc=256)),oa=e}return oa}function hy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_u(e)}function SA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=hy((s[Vn]||null).action),r=i.submitter;r&&(t=(t=r[Vn]||null)?hy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new fh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(oa!==0){var l=new FormData(s,r);nm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),nm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(hu=0;hu<Wp.length;hu++)fu=Wp[hu],fy=fu.toLowerCase(),dy=fu[0].toUpperCase()+fu.slice(1),Ni(fy,"on"+dy);var fu,fy,dy,hu;Ni(Mx,"onAnimationEnd");Ni(bx,"onAnimationIteration");Ni(Tx,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(LE,"onTransitionRun");Ni(UE,"onTransitionStart");Ni(OE,"onTransitionCancel");Ni(Ex,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function hM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Hu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Hu(h)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[ov];n===void 0&&(n=t[ov]=new Set);var i=e+"__bubble";n.has(i)||(fM(t,e,2,!1),n.add(i))}function Mp(e,t,n){var i=0;t&&(i|=4),fM(n,e,i,t)}var du="_reactListening"+Math.random().toString(36).slice(2);function Rg(e){if(!e[du]){e[du]=!0,ix.forEach(function(n){n!=="selectionchange"&&(MA.has(n)||Mp(n,!1,e),Mp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[du]||(t[du]=!0,Mp("selectionchange",!1,t))}}function fM(e,t,n,i){switch(PM(t)){case 2:var s=pw;break;case 8:s=mw;break;default:s=Ig}n=s.bind(null,t,n,e),s=void 0,!Gp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=qa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}hx(function(){var c=a,h=Xm(n),p=[];t:{var u=Ax.get(e);if(u!==void 0){var f=fh,v=e;switch(e){case"keypress":if(yu(n)===0)break t;case"keydown":case"keyup":f=lE;break;case"focusin":v="focus",f=ap;break;case"focusout":v="blur",f=ap;break;case"beforeblur":case"afterblur":f=ap;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=KT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=dE;break;case Mx:case bx:case Tx:f=$T;break;case Ex:f=mE;break;case"scroll":case"scrollend":f=ZT;break;case"wheel":f=_E;break;case"copy":case"cut":case"paste":f=eE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=_v;break;case"submit":f=hE;break;case"toggle":case"beforetoggle":f=yE}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),d=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,y;m!==null;){var x=m;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||d===null||(x=Ll(m,d),x!=null&&b.push(Gl(m,x,y))),g)break;m=m.return}0<b.length&&(u=new f(u,v,null,n,h),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",f&&n!==Hp&&(v=n.relatedTarget||n.fromElement)&&(qa(v)||v[vo]))break t;(u||f)&&(v=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,u?(f=n.relatedTarget||n.toElement,u=c,f=f?qa(f):null,f!==null&&(g=Yl(f),b=f.tag,f!==g||b!==5&&b!==27&&b!==6)&&(f=null)):(u=null,f=c),u!==f&&(b=mv,x="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=_v,x="onPointerLeave",d="onPointerEnter",m="pointer"),g=u==null?v:ml(u),y=f==null?v:ml(f),v=new b(x,m+"leave",u,n,h),v.target=g,v.relatedTarget=y,x=null,qa(h)===c&&(b=new b(d,m+"enter",f,n,h),b.target=y,b.relatedTarget=g,x=b),g=x,b=u&&f?Rp(u,f,bA):null,u!==null&&py(p,v,u,b,!1),f!==null&&g!==null&&py(p,g,f,b,!0)))}t:{if(u=c?ml(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var E=Sv;else if(xv(u))if(_x)E=CE;else{E=wE;var A=AE}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&km(c.elementType)&&(E=Sv):E=RE;if(E&&(E=E(e,c))){gx(p,E,n,h);break t}A&&A(e,u,c)}switch(A=c?ml(c):window,e){case"focusin":(xv(A)||A.contentEditable==="true")&&(Gr=A,kp=c,xl=null);break;case"focusout":xl=kp=Gr=null;break;case"mousedown":Xp=!0;break;case"contextmenu":case"mouseup":case"dragend":Xp=!1,Ev(p,n,h);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":Ev(p,n,h)}var _;if(Ym)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Hr?px(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(dx&&n.locale!=="ko"&&(Hr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Hr&&(_=fx()):(ia=h,Wm="value"in ia?ia.value:ia.textContent,Hr=!0)),A=oh(c,T),0<A.length&&(T=new gv(T,e,null,n,h),p.push({event:T,listeners:A}),_?T.data=_:(_=mx(n),_!==null&&(T.data=_)))),(_=SE?ME(e,n):bE(e,n))&&(T=oh(c,"onBeforeInput"),0<T.length&&(A=new gv("onBeforeInput","beforeinput",null,n,h),p.push({event:A,listeners:T}),A.data=_)),SA(p,e,c,n,h)}hM(p,t)})}function Gl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Ll(e,n),s!=null&&i.unshift(Gl(e,s,a)),s=Ll(e,t),s!=null&&i.push(Gl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function bA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function py(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Ll(n,a),c!=null&&r.unshift(Gl(n,c,l))):s||(c=Ll(n,a),c!=null&&r.push(Gl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var TA=/\r\n?/g,EA=/\u0000|\uFFFD/g;function my(e){return(typeof e=="string"?e:""+e).replace(TA,`
`).replace(EA,"")}function dM(e,t){return t=my(t),my(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ro(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ro(e,""+i);else return;break;case"className":$c(e,"class",i);break;case"tabIndex":$c(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":$c(e,n,i);break;case"style":ux(e,i,a);return;case"data":if(t!=="object"){$c(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_u(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_u(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ji);return;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=_u(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),gu(e,"popover",i);break;case"xlinkActuate":gs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":gs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":gs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":gs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":gs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":gs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":gs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":gs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":gs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":gu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=qT.get(n)||n,gu(e,n,i);else return}te=!0}function wm(e,t,n,i,s,a){switch(n){case"style":ux(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ro(e,i);else if(typeof i=="number"||typeof i=="bigint")ro(e,""+i);else return;break;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!sx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Vn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}te=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):gu(e,n,i)}return}te=!0}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,t));break;default:ce(e,t,i,h,n,null)}}ox(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Jr(e,!!i,t,!1):n!=null&&Jr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:ce(e,t,r,o,n,null)}cx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ce(e,t,l,i,n,null));return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<Hl.length;i++)Wt(Hl[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,c,i,n,null)}return;default:if(km(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&wm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}var AA={};function wA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||ce(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":f!==p&&(te=!0),a=f;break;case"name":f!==p&&(te=!0),s=f;break;case"checked":f!==p&&(te=!0),c=f;break;case"defaultChecked":f!==p&&(te=!0),h=f;break;case"value":f!==p&&(te=!0),r=f;break;case"defaultValue":f!==p&&(te=!0),o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:f!==p&&ce(e,t,u,f,i,p)}}zp(e,r,o,l,c,h,a,s);return;case"select":f=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(te=!0),u=a;break;case"defaultValue":a!==l&&(te=!0),o=a;break;case"multiple":a!==l&&(te=!0),r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=f,u!=null?Jr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Jr(e,!!n,t,!0):Jr(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(te=!0),u=s;break;case"defaultValue":s!==a&&(te=!0),f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&ce(e,t,r,s,i,a)}lx(e,u,f);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ce(e,t,v,null,i,u));for(l in i)u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null)&&(l==="selected"?(u!==f&&(te=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):ce(e,t,l,u,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&ce(e,t,b,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:ce(e,t,c,u,i,f)}return;default:if(km(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&wm(e,t,g,void 0,i,u);for(h in i)u=i[h],f=n[h],!i.hasOwnProperty(h)||u===f||u===void 0&&f===void 0||wm(e,t,h,u,i,f);return}}for(var d in n)u=n[d],n.hasOwnProperty(d)&&u!=null&&!i.hasOwnProperty(d)&&ce(e,t,d,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||ce(e,t,p,u,i,f)}function gy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&gy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&gy(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rm=null,Cm=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function _y(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mM(e,t,n,i){return n=Vl(n).createElement(e),n[on]=i,n[Vn]=t,hn(n,e,t),$e(n),n}function Nm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tp=null;function CA(){var e=window.event;return e&&e.type==="popstate"?e===Tp?!1:(Tp=e,!0):(Tp=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,NA=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,yy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Cg,DA=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(e){return vy.resolve(null).then(e).catch(LA)}:Cg;function LA(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function xy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),_o(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ap(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ap(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ql]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Ap(e.ownerDocument.body);n=s}while(n);_o(t)}function Sy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function gM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function _M(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function vM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Dm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return vM(t,n,e)}function UA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return vM(t,n,e)}function OA(e){return e.documentElement.clientHeight}function IA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function PA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,f=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(OA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var g=e.suspenseyImages,d=0,m=0;m<g.length;m++){var y=g[m];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(d+=NM(y),d>Lu){b.length=v;break}y=new Promise(IA.bind(y)),b.push(y)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(f?Promise.allSettled([f.finished,u]):u).then(a,a);if(s(),f)return f.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),f=0;f<u.length;f++){var v=u[f],b=v.effect,g=b.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var d=g=void 0,m=!0,y=0;y<v.length;y++){var x=v[y],E=x.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=x.height,d===void 0)d=E;else if(d!==E){m=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}m&&g!==void 0&&d!==void 0&&(b.setKeyframes(v),m=getComputedStyle(b.target,b.pseudoElement),m.width!==g||m.height!==d)&&(m=v[0],m.width=g,m.height=d,m=v[v.length-1],m.width=g,m.height=d,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function Ya(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ya.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:me({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ya.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ya.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function yM(e){return{name:e,group:new Ya("group",e),imagePair:new Ya("image-pair",e),old:new Ya("old",e),new:new Ya("new",e)}}function ti(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ti.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(xM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=fo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Gn(this._fragmentFiber.child,!1,BA,e,o,i)}this._eventListeners=a}};function BA(e,t,n,i){return Xe(e).addEventListener(t,n,i),!1}ti.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=xM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=fo(s.optionsOrUseCapture),Gn(this._fragmentFiber.child,!1,FA,e,n,s),i.splice(t,1),a!==null&&a()}};function FA(e,t,n,i){return Xe(e).removeEventListener(t,n,i),!1}function fo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function My(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function xM(e,t,n,i){if(e.length===0)return-1;i=My(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&My(a.optionsOrUseCapture)===i)return s}return-1}ti.prototype.dispatchEvent=function(e){var t=or(this._fragmentFiber);if(t===null)return!0;t=Xe(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,fo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,fo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ti.prototype.focus=function(e){Gn(this._fragmentFiber.child,!0,SM,e,void 0,void 0)};function SM(e,t){return e.tag===6?!1:(e=Xe(e),KA(e,t))}ti.prototype.focusLast=function(e){var t=[];Gn(this._fragmentFiber.child,!0,Ng,t,void 0,void 0);for(var n=t.length-1;0<=n&&!SM(t[n],e);n--);};function Ng(e,t){return t.push(e),!1}ti.prototype.blur=function(){var e=or(this._fragmentFiber);e!==null&&(e=Xe(e),e=Vl(e).activeElement,e!==null&&Gn(this._fragmentFiber.child,!1,zA,e,void 0,void 0))};function zA(e,t){return e.tag===6?!1:(e=Xe(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ti.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Gn(this._fragmentFiber.child,!1,HA,e,void 0,void 0)};function HA(e,t){return e.tag===6||(e=Xe(e),t.observe(e)),!1}ti.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Gn(this._fragmentFiber.child,!1,GA,e,void 0,void 0);for(var n=t=0;n<Ri.length;n++){var i=Ri[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ri[t++]=i}Ri.length=t}};function GA(e,t){return e.tag===6||(e=Xe(e),t.unobserve(e)),!1}var Ri=[],Ep=!1;function VA(e,t,n){Ri.push({fragmentInstance:e,observer:t,instance:n}),Ep||(Ep=!0,QA(function(){Ep=!1;var i=Ri;Ri=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ti.prototype.getClientRects=function(){var e=[];return Gn(this._fragmentFiber.child,!1,kA,e,void 0,void 0),e};function kA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Xe(e),t.push.apply(t,e.getClientRects());return!1}ti.prototype.getRootNode=function(e){var t=or(this._fragmentFiber);return t===null?this:Xe(t).getRootNode(e)};ti.prototype.compareDocumentPosition=function(e){var t=or(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Gn(this._fragmentFiber.child,!1,Ng,n,void 0,void 0);var i=Xe(t);if(n.length===0){if(n=i,ev(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ky(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Xe(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Xe(n[0]),s=Xe(n[n.length-1]);var a=ev(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||XA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function XA(e,t,n,i,s){var a=qa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=or(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Rp(n,a,nv),t===null?t=!1:(Gn(t,!0,xT,a,n),a=Pr,Pr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Rp(i,a,nv),t===null?t=!1:(Gn(t,!0,ST,a,i),a=Pr,wp=Pr=null,t=a!==null)),t):!1}function by(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ti.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];Gn(this._fragmentFiber.child,!1,Ng,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=ky(this._fragmentFiber);if(i=n?i[1]||i[0]||or(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Xe(i),by(e,n);return}if(i=Xe(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Xe(s),by(s,n)):Xe(s).scrollIntoView(e),i+=n?-1:1}};function WA(e,t){return e=Xe(e),MM(e,t),!1}function MM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function bM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,fo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ri.length;o++){var l=Ri[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ri[r++]=l)}Ri.length=r,a.observe(e)}),MM(e,t))}function qA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,fo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?VA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Lm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lm(n),hh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function YA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function ZA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function TM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vi(e.nextSibling),e===null))return null;return e}function Um(e){return e.data==="$?"||e.data==="$~"}function Dg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Om=null;function Ty(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return vi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ey(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function KA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function QA(e){yy(function(){yy(function(t){return e(t)})})}function EM(e,t,n){switch(t=Vl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function AM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ce(e,t,i,null,AA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ji&&(e.onclick=null),hh(e)}function Ap(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hh(e)}var yi=new Map,Ay=new Set;function kl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ns=ie.d;ie.d={f:jA,r:$A,D:tw,C:ew,L:nw,m:iw,X:aw,S:sw,M:rw};function jA(){var e=Ns.f(),t=Eh();return e||t}function $A(e){var t=yo(e);t!==null&&t.tag===5&&t.type==="form"?uS(t):Ns.r(e)}var bo=typeof document>"u"?null:document;function wM(e,t,n){var i=bo;if(i&&typeof t=="string"&&t){var s=mi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ay.has(s)||(Ay.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),$e(t),i.head.appendChild(t)))}}function tw(e){Ns.D(e),wM("dns-prefetch",e,null)}function ew(e,t){Ns.C(e,t),wM("preconnect",e,t)}function nw(e,t,n){Ns.L(e,t,n);var i=bo;if(i&&e&&t){var s='link[rel="preload"][as="'+mi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+mi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+mi(n.imageSizes)+'"]')):s+='[href="'+mi(e)+'"]';var a=s;switch(t){case"style":a=po(e);break;case"script":a=To(e)}if(!(yi.has(a)||(e=me({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),yi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ic(a))||t==="script"&&i.querySelector(sc(a))))){var r=i.createElement("link");hn(r,"link",e),t==="style"&&(r[zu]=!0,r.onload=r.onerror=function(){nx(r)}),$e(r),i.head.appendChild(r)}}}function iw(e,t){Ns.m(e,t);var n=bo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+mi(i)+'"][href="'+mi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=To(e)}if(!yi.has(a)&&(e=me({rel:"modulepreload",href:e},t),yi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sc(a)))return}i=n.createElement("link"),hn(i,"link",e),$e(i),n.head.appendChild(i)}}}function sw(e,t,n){Ns.S(e,t,n);var i=bo;if(i&&e){var s=Zr(i).hoistableStyles,a=po(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ic(a)))o.loading=5;else{e=me({rel:"stylesheet",href:e,"data-precedence":t},n),(n=yi.get(a))&&Lg(e,n);var l=r=i.createElement("link");$e(l),hn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Nu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function aw(e,t){Ns.X(e,t);var n=bo;if(n&&e){var i=Zr(n).hoistableScripts,s=To(e),a=i.get(s);a||(a=n.querySelector(sc(s)),a||(e=me({src:e,async:!0},t),(t=yi.get(s))&&Ug(e,t),a=n.createElement("script"),$e(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function rw(e,t){Ns.M(e,t);var n=bo;if(n&&e){var i=Zr(n).hoistableScripts,s=To(e),a=i.get(s);a||(a=n.querySelector(sc(s)),a||(e=me({src:e,async:!0,type:"module"},t),(t=yi.get(s))&&Ug(e,t),a=n.createElement("script"),$e(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function wy(e,t,n,i){var s=(s=la.current)?kl(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=po(n.href),t=Zr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=po(n.href);var a=Zr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(ic(e)))?a._p||(r.instance=a,r.state.loading=5):(a=yi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yi.set(e,a)),ow(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=To(n),t=Zr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function po(e){return'href="'+mi(e)+'"'}function ic(e){return'link[rel="stylesheet"]['+e+"]"}function RM(e){return me({},e,{"data-precedence":e.precedence,precedence:null})}function ow(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[zu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[zu]=!0,t.onload=t.onerror=nx.bind(null,t),hn(t,"link",n),$e(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function To(e){return'[src="'+mi(e)+'"]'}function sc(e){return"script[async]"+e}function Ry(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+mi(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var s=me({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),hn(i,"style",s),Nu(i,n.precedence,e),t.instance=i;case"stylesheet":s=po(n.href);var a=e.querySelector(ic(s));if(a)return t.state.loading|=4,t.instance=a,$e(a),a;i=RM(n),(s=yi.get(s))&&Lg(i,s),a=(e.ownerDocument||e).createElement("link"),$e(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),t.state.loading|=4,Nu(a,n.precedence,e),t.instance=a;case"script":return a=To(n.src),(s=e.querySelector(sc(a)))?(t.instance=s,$e(s),s):(i=n,(s=yi.get(a))&&(i=me({},n),Ug(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),$e(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nu(i,n.precedence,e));return t.instance}function Nu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ug(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Du=null;function Cy(e,t,n){if(Du===null){var i=new Map,s=Du=new Map;s.set(n,i)}else s=Du,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ql]||a[on]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Im(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ny(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function CM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Dy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=NM(t),e.suspenseyImages.push(t)),e=hw.bind(e),t.decode().then(e,e))}function cw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=po(i.href),a=t.querySelector(ic(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,$e(a);return}a=t.ownerDocument||t,i=RM(i),(s=yi.get(s))&&Lg(i,s),a=a.createElement("link"),$e(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Xl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Lu=0;function uw(e,t){return e.stylesheets&&e.count===0&&Uu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Uu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Lu===0&&(Lu=62500*RA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Lu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function DM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Uu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Xl(){this.count--,DM(this)}function hw(){this.imgCount--,DM(this)}var lh=null;function Uu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lh=new Map,t.forEach(fw,e),lh=null,Xl.call(e))}function fw(e,t){if(!(t.state.loading&4)){var n=lh.get(e);if(n)var i=n.get(null);else{n=new Map,lh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Xl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mo={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:Za,_currentValue2:Za,_threadCount:0};function dw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tp(0),this.hiddenUpdates=tp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function LM(e,t,n,i,s,a,r,o,l,c,h,p){return e=new dw(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=zn(3,null,null,t),e.current=a,a.stateNode=e,t=$m(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},ng(a),e}function UM(e){return e?(e=Xr,e):Xr}function OM(e,t,n,i,s,a){s=UM(s),i.context===null?i.context=s:i.pendingContext=s,i=ua(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ha(e,i,t),n!==null&&(Hn(n,e,t),Ml(n,e,t))}function Ly(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Og(e,t){Ly(e,t),(e=e.alternate)&&Ly(e,t)}function IM(e){if(e.tag===13||e.tag===31){var t=ur(e,67108864);t!==null&&Hn(t,e,67108864),Og(e,67108864)}}function Uy(e){if(e.tag===13||e.tag===31){var t=jn();t=Gm(t);var n=ur(e,t);n!==null&&Hn(n,e,t),Og(e,t)}}var go=!0;function pw(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=2,Ig(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function mw(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=8,Ig(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function Ig(e,t,n,i){if(go){var s=Pm(i);if(s===null)bp(e,t,i,ch,n),Oy(e,i);else if(_w(s,e,t,n,i))i.stopPropagation();else if(Oy(e,i),t&4&&-1<gw.indexOf(e)){for(;s!==null;){var a=yo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ka(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Qn(r);o.entanglements[1]|=l,r&=~l}ns(a),(ne&6)===0&&(ih=Jn()+500,nc(0,!1))}}break;case 31:case 13:o=ur(a,2),o!==null&&Hn(o,a,2),Eh(),Og(a,2)}if(a=Pm(i),a===null&&bp(e,t,i,ch,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else bp(e,t,i,null,n)}}function Pm(e){return e=Xm(e),Pg(e)}var ch=null;function Pg(e){if(ch=null,e=qa(e),e!==null){var t=Yl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Hy(t),e!==null)return e;e=null}else if(n===31){if(e=Gy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ch=e,null}function PM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(NT()){case Yy:return 2;case Zy:return 8;case Fu:case DT:return 32;case Jy:return 268435456;default:return 32}default:return 32}}var Bm=!1,ma=null,ga=null,_a=null,Wl=new Map,ql=new Map,ea=[],gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oy(e,t){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(t.pointerId)}}function hl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=yo(t),t!==null&&IM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function _w(e,t,n,i,s){switch(t){case"focusin":return ma=hl(ma,e,t,n,i,s),!0;case"dragenter":return ga=hl(ga,e,t,n,i,s),!0;case"mouseover":return _a=hl(_a,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Wl.set(a,hl(Wl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ql.set(a,hl(ql.get(a)||null,e,t,n,i,s)),!0}return!1}function BM(e){var t=qa(e.target);if(t!==null){var n=Yl(t);if(n!==null){if(t=n.tag,t===13){if(t=Hy(n),t!==null){e.blockedOn=t,rv(e.priority,function(){Uy(n)});return}}else if(t===31){if(t=Gy(n),t!==null){e.blockedOn=t,rv(e.priority,function(){Uy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hp=i,n.target.dispatchEvent(i),Hp=null}else return t=yo(n),t!==null&&IM(t),e.blockedOn=n,!1;t.shift()}return!0}function Iy(e,t,n){Ou(e)&&n.delete(t)}function vw(){Bm=!1,ma!==null&&Ou(ma)&&(ma=null),ga!==null&&Ou(ga)&&(ga=null),_a!==null&&Ou(_a)&&(_a=null),Wl.forEach(Iy),ql.forEach(Iy)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,Bm||(Bm=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,vw)))}var mu=null;function Py(e){mu!==e&&(mu=e,We.unstable_scheduleCallback(We.unstable_NormalPriority,function(){mu===e&&(mu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Pg(i||n)===null)continue;break}var a=yo(n);a!==null&&(e.splice(t,3),t-=3,nm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function _o(e){function t(l){return pu(l,e)}ma!==null&&pu(ma,e),ga!==null&&pu(ga,e),_a!==null&&pu(_a,e),Wl.forEach(t),ql.forEach(t);for(var n=0;n<ea.length;n++){var i=ea[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)BM(n),n.blockedOn===null&&ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Vn]||null;if(typeof a=="function")r||Py(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Vn]||null)o=r.formAction;else if(Pg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Py(n)}}}function FM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bg(e){this._internalRoot=e}Rh.prototype.render=Bg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=jn();OM(n,i,e,t,null,null)};Rh.prototype.unmount=Bg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;OM(e.current,2,null,e,null,null),Eh(),t[vo]=null}};function Rh(e){this._internalRoot=e}Rh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ex();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ea.length&&t!==0&&t<ea[n].priority;n++);ea.splice(n,0,e),n===0&&BM(e)}};var By=Fy.version;if(By!=="19.3.1")throw Error(Q(527,By,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=yT(t),e=e!==null?Vy(e):null,e=e===null?null:e.stateNode,e};var yw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(fl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!fl.isDisabled&&fl.supportsFiber))try{Zl=fl.inject(yw),Kn=fl}catch{}var fl;Ch.createRoot=function(e,t){if(!zy(e))throw Error(Q(299));var n=!1,i="",s=vS,a=yS,r=xS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=LM(e,1,!1,null,null,n,i,null,s,a,r,FM),e[vo]=t.current,Rg(e),new Bg(t)};Ch.hydrateRoot=function(e,t,n){if(!zy(e))throw Error(Q(299));var i=!1,s="",a=vS,r=yS,o=xS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=LM(e,1,!0,t,n??null,i,s,l,a,r,o,FM),t.context=UM(null),n=t.current,i=jn(),i=Gm(i),s=ua(i),s.callback=null,ha(n,s,i),n=i,t.current.lanes=n,Kl(t,n),ns(t),e[vo]=t.current,Rg(e),new Rh(t)};Ch.version="19.3.1"});var VM=Ys((SD,GM)=>{"use strict";function HM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HM)}catch(e){console.error(e)}}HM(),GM.exports=zM()});var B1=Od(nl()),F1=Od(VM());var ds=Od(nl());var db=0,p0=1,pb=2;var Rc=1,mb=2,Jo=3,Pa=0,On=1,si=2,Sr=0,Ko=1,m0=2,g0=3,_0=4,gb=5;var Mr=100,_b=101,vb=102,yb=103,xb=104,Sb=200,Mb=201,bb=202,Tb=203,v0=204,y0=205,Eb=206,Ab=207,wb=208,Rb=209,Cb=210,Nb=211,Db=212,Lb=213,Ub=214,jh=0,$h=1,tf=2,zo=3,ef=4,nf=5,sf=6,af=7,x0=0,Ob=1,Ib=2,cs=0,S0=1,M0=2,b0=3,T0=4,E0=5,A0=6,w0=7;var R0=300,br=301,Qo=302,zf=303,Hf=304,rf=1e3,ss=1001,of=1002,nn=1003,Pb=1004;var Cc=1005;var Ln=1006,Gf=1007;var Hs=1008;var ai=1009,C0=1010,N0=1011,jo=1012,Vf=1013,Bi=1014,Fi=1015,zi=1016,kf=1017,Xf=1018,Tr=1020,D0=35902,L0=35899,U0=1021,O0=1022,Hi=1023,Bs=1026,Gs=1027,I0=1028,Wf=1029,Ba=1030,qf=1031;var Yf=1033,Nc=33776,Dc=33777,Lc=33778,Uc=33779,Zf=35840,Jf=35841,Kf=35842,Qf=35843,jf=36196,$f=37492,td=37496,ed=37488,nd=37489,Oc=37490,id=37491,sd=37808,ad=37809,rd=37810,od=37811,ld=37812,cd=37813,ud=37814,hd=37815,fd=37816,dd=37817,pd=37818,md=37819,gd=37820,_d=37821,vd=36492,yd=36494,xd=36495,Sd=36283,Md=36284,Ic=36285,bd=36286;var fc=2300,lf=2301,Kh=2302,l0=2303,c0=2400,u0=2401,h0=2402;var Bb=3200;var P0=0,Fb=1,Vs="",Cn="srgb",_r="srgb-linear",dc="linear",ae="srgb";var Qh=7680;var zb=519,Hb=512,Gb=513,Vb=514,B0=515,kb=516,Xb=517,F0=518,z0=519,Wb=35044;var H0="300 es",Si=2e3,pc=2001;function xw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Sw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function mc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qb(){let e=mc("canvas");return e.style.display="block",e}var kM={},Ho=null;function G0(...e){let t="THREE."+e.shift();Ho?Ho("log",t,...e):console.log(t,...e)}function Yb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ct(...e){e=Yb(e);let t="THREE."+e.shift();if(Ho)Ho("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=Yb(e);let t="THREE."+e.shift();if(Ho)Ho("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function cc(...e){let t=e.join(" ");t in kM||(kM[t]=!0,Ct(...e))}function Zb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Jb={[jh]:jh,[tf]:sf,[ef]:ef,[zo]:nf,[$h]:$h,[sf]:tf,[af]:af,[nf]:zo},as=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fg=Math.PI/180,cf=180/Math.PI;function Pc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function Mw(e,t){return(e%t+t)%t}function zg(e,t,n){return(1-n)*e+n*t}function Kb(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function V0(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bw(e,t){if(t.constructor===Float32Array)return e;let n=V0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function Tw(e,t){if(t.constructor===Float32Array)return e;let n=V0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var At=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],f=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==f||h!==v){let g=l*u+c*f+h*v+p*b;g<0&&(u=-u,f=-f,v=-v,b=-b,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);d=Math.sin(d*m)/y,o=Math.sin(o*m)/y,l=l*d+u*o,c=c*d+f*o,h=h*d+v*o,p=p*d+b*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+v*o,p=p*d+b*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],f=a[r+2],v=a[r+3];return t[n]=o*v+h*p+l*f-c*u,t[n+1]=l*v+h*u+c*p-o*f,t[n+2]=c*v+h*f+o*u-l*p,t[n+3]=h*v-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),f=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p-u*f*v;break;case"YXZ":this._x=u*h*p+c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p+u*f*v;break;case"ZXY":this._x=u*h*p-c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p-u*f*v;break;case"ZYX":this._x=u*h*p-c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p+u*f*v;break;case"YZX":this._x=u*h*p+c*f*v,this._y=c*f*p+u*h*v,this._z=c*h*v-u*f*p,this._w=c*h*p-u*f*v;break;case"XZY":this._x=u*h*p-c*f*v,this._y=c*f*p-u*h*v,this._z=c*h*v+u*f*p,this._w=c*h*p+u*f*v;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(XM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(XM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hg.copy(this).projectOnVector(t),this.sub(Hg)}reflect(t){return this.sub(Hg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hg=new I,XM=new rs,Ut=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],v=i[8],b=s[0],g=s[3],d=s[6],m=s[1],y=s[4],x=s[7],E=s[2],A=s[5],_=s[8];return a[0]=r*b+o*m+l*E,a[3]=r*g+o*y+l*A,a[6]=r*d+o*x+l*_,a[1]=c*b+h*m+p*E,a[4]=c*g+h*y+p*A,a[7]=c*d+h*x+p*_,a[2]=u*b+f*m+v*E,a[5]=u*g+f*y+v*A,a[8]=u*d+f*x+v*_,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,f=c*a-r*l,v=n*p+i*u+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-h*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(h*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=f*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return cc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gg.makeScale(t,n)),this}rotate(t){return cc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gg.makeRotation(-t)),this}translate(t,n){return cc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gg=new Ut,WM=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qM=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ew(){let e={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vs?dc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[_r]:{primaries:t,whitePoint:i,transfer:dc,toXYZ:WM,fromXYZ:qM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:WM,fromXYZ:qM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}var jt=Ew();function Ps(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Eo,uf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Eo===void 0&&(Eo=mc("canvas")),Eo.width=t.width,Eo.height=t.height;let s=Eo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Eo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=mc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ps(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ps(n[i]/255)*255):n[i]=Ps(n[i]);return{data:n,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Aw=0,Go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Pc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Vg(s[r].image)):a.push(Vg(s[r]))}else a=Vg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Vg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?uf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var ww=0,kg=new I,kn=class e extends as{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ss,s=ss,a=Ln,r=Hs,o=Hi,l=ai,c=e.DEFAULT_ANISOTROPY,h=Vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Pc(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kg).x}get height(){return this.source.getSize(kg).y}get depth(){return this.source.getSize(kg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ct(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rf:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case of:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rf:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case of:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=R0;kn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],v=l[9],b=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(f+1)/2,E=(d+1)/2,A=(h+u)/4,_=(p+b)/4,T=(v+g)/4;return y>x&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=A/i,a=_/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=A/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=_/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-b)/m,this.z=(u-h)/m,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hf=class extends as{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new De(0,0,t,n),this.scissorTest=!1,this.viewport=new De(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new kn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Go(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends hf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},gc=class extends kn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ff=class extends kn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ne=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,h,p,u,f,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,f,v,b,g)}set(t,n,i,s,a,r,o,l,c,h,p,u,f,v,b,g){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=v,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Ao.setFromMatrixColumn(t,0).length(),a=1/Ao.setFromMatrixColumn(t,1).length(),r=1/Ao.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,f=r*p,v=o*h,b=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=f+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,v=c*h,b=c*p;n[0]=u+b*o,n[4]=v*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=f*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,v=c*h,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+f*o,n[1]=f+v*o,n[5]=r*h,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*p,v=o*h,b=o*p;n[0]=l*h,n[4]=v*c-f,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=f*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,v=o*l,b=o*c;n[0]=l*h,n[4]=b-u*p,n[8]=v*p+f,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=f*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,f=r*c,v=o*l,b=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+b,n[5]=r*h,n[9]=f*p-v,n[2]=v*p-f,n[6]=o*h,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rw,t,Cw)}lookAt(t,n,i){let s=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ea.crossVectors(i,ei),Ea.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ea.crossVectors(i,ei)),Ea.normalize(),Nh.crossVectors(ei,Ea),s[0]=Ea.x,s[4]=Nh.x,s[8]=ei.x,s[1]=Ea.y,s[5]=Nh.y,s[9]=ei.y,s[2]=Ea.z,s[6]=Nh.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],v=i[2],b=i[6],g=i[10],d=i[14],m=i[3],y=i[7],x=i[11],E=i[15],A=s[0],_=s[4],T=s[8],U=s[12],R=s[1],O=s[5],H=s[9],q=s[13],D=s[2],X=s[6],K=s[10],G=s[14],nt=s[3],k=s[7],$=s[11],tt=s[15];return a[0]=r*A+o*R+l*D+c*nt,a[4]=r*_+o*O+l*X+c*k,a[8]=r*T+o*H+l*K+c*$,a[12]=r*U+o*q+l*G+c*tt,a[1]=h*A+p*R+u*D+f*nt,a[5]=h*_+p*O+u*X+f*k,a[9]=h*T+p*H+u*K+f*$,a[13]=h*U+p*q+u*G+f*tt,a[2]=v*A+b*R+g*D+d*nt,a[6]=v*_+b*O+g*X+d*k,a[10]=v*T+b*H+g*K+d*$,a[14]=v*U+b*q+g*G+d*tt,a[3]=m*A+y*R+x*D+E*nt,a[7]=m*_+y*O+x*X+E*k,a[11]=m*T+y*H+x*K+E*$,a[15]=m*U+y*q+x*G+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],v=t[3],b=t[7],g=t[11],d=t[15],m=l*f-c*u,y=o*f-c*p,x=o*u-l*p,E=r*f-c*h,A=r*u-l*h,_=r*p-o*h;return n*(b*m-g*y+d*x)-i*(v*m-g*E+d*A)+s*(v*y-b*E+d*_)-a*(v*x-b*A+g*_)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],v=t[12],b=t[13],g=t[14],d=t[15],m=n*o-i*r,y=n*l-s*r,x=n*c-a*r,E=i*l-s*o,A=i*c-a*o,_=s*c-a*l,T=h*b-p*v,U=h*g-u*v,R=h*d-f*v,O=p*g-u*b,H=p*d-f*b,q=u*d-f*g,D=m*q-y*H+x*O+E*R-A*U+_*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/D;return t[0]=(o*q-l*H+c*O)*X,t[1]=(s*H-i*q-a*O)*X,t[2]=(b*_-g*A+d*E)*X,t[3]=(u*A-p*_-f*E)*X,t[4]=(l*R-r*q-c*U)*X,t[5]=(n*q-s*R+a*U)*X,t[6]=(g*x-v*_-d*y)*X,t[7]=(h*_-u*x+f*y)*X,t[8]=(r*H-o*R+c*T)*X,t[9]=(i*R-n*H-a*T)*X,t[10]=(v*A-b*x+d*m)*X,t[11]=(p*x-h*A-f*m)*X,t[12]=(o*U-r*O-l*T)*X,t[13]=(n*O-i*U+s*T)*X,t[14]=(b*y-v*E-g*m)*X,t[15]=(h*E-p*y+u*m)*X,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,f=a*h,v=a*p,b=r*h,g=r*p,d=o*p,m=l*c,y=l*h,x=l*p,E=i.x,A=i.y,_=i.z;return s[0]=(1-(b+d))*E,s[1]=(f+x)*E,s[2]=(v-y)*E,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(u+d))*A,s[6]=(g+m)*A,s[7]=0,s[8]=(v+y)*_,s[9]=(g-m)*_,s[10]=(1-(u+b))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Ao.set(s[0],s[1],s[2]).length(),o=Ao.set(s[4],s[5],s[6]).length(),l=Ao.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Di.copy(this);let c=1/r,h=1/o,p=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,n.setFromRotationMatrix(Di),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===Si)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===pc)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===Si)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===pc)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ao=new I,Di=new Ne,Rw=new I(0,0,0),Cw=new I(1,1,1),Ea=new I,Nh=new I,ei=new I,YM=new Ne,ZM=new rs,Da=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return YM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(YM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ZM.setFromEuler(this),this.setFromQuaternion(ZM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Da.DEFAULT_ORDER="XYZ";var _c=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nw=0,JM=new I,wo=new rs,Ds=new Ne,Dh=new I,ac=new I,Dw=new I,Lw=new rs,KM=new I(1,0,0),QM=new I(0,1,0),jM=new I(0,0,1),$M={type:"added"},Uw={type:"removed"},Ro={type:"childadded",child:null},Xg={type:"childremoved",child:null},Mi=class e extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=Pc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new Da,i=new rs,s=new I(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ut}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wo.setFromAxisAngle(t,n),this.quaternion.multiply(wo),this}rotateOnWorldAxis(t,n){return wo.setFromAxisAngle(t,n),this.quaternion.premultiply(wo),this}rotateX(t){return this.rotateOnAxis(KM,t)}rotateY(t){return this.rotateOnAxis(QM,t)}rotateZ(t){return this.rotateOnAxis(jM,t)}translateOnAxis(t,n){return JM.copy(t).applyQuaternion(this.quaternion),this.position.add(JM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(KM,t)}translateY(t){return this.translateOnAxis(QM,t)}translateZ(t){return this.translateOnAxis(jM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Dh.copy(t):Dh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(ac,Dh,this.up):Ds.lookAt(Dh,ac,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),wo.setFromRotationMatrix(Ds),this.quaternion.premultiply(wo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($M),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Uw),Xg.child=t,this.dispatchEvent(Xg),Xg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($M),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,t,Dw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,Lw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mi.DEFAULT_UP=new I(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gr=class extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ow={type:"move"},Vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),d=this._getHandJoint(c,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ow)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new gr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Qb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},Lh={h:0,s:0,l:0};function Wg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Vt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=jt.workingColorSpace){if(t=Mw(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Wg(r,a,t+1/3),this.g=Wg(r,a,t),this.b=Wg(r,a,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Cn){function i(a){a!==void 0&&parseFloat(a)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){let i=Qb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return jt.workingToColorSpace(Sn.copy(this),t),Math.round(Yt(Sn.r*255,0,255))*65536+Math.round(Yt(Sn.g*255,0,255))*256+Math.round(Yt(Sn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.workingToColorSpace(Sn.copy(this),n);let i=Sn.r,s=Sn.g,a=Sn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=jt.workingColorSpace){return jt.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Cn){jt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Aa),this.setHSL(Aa.h+t,Aa.s+n,Aa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Aa),t.getHSL(Lh);let i=zg(Aa.h,Lh.h,n),s=zg(Aa.s,Lh.s,n),a=zg(Aa.l,Lh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Vt;Vt.NAMES=Qb;var vc=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ko=class extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Li=new I,Ls=new I,qg=new I,Us=new I,Co=new I,No=new I,tb=new I,Yg=new I,Zg=new I,Jg=new I,Kg=new De,Qg=new De,jg=new De,Na=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Li.subVectors(t,n),s.cross(Li);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Li.subVectors(s,n),Ls.subVectors(i,n),qg.subVectors(t,n);let r=Li.dot(Li),o=Li.dot(Ls),l=Li.dot(qg),c=Ls.dot(Ls),h=Ls.dot(qg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-f-v,v,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Us.x),l.addScaledVector(r,Us.y),l.addScaledVector(o,Us.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Kg.setScalar(0),Qg.setScalar(0),jg.setScalar(0),Kg.fromBufferAttribute(t,n),Qg.fromBufferAttribute(t,i),jg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Kg,a.x),r.addScaledVector(Qg,a.y),r.addScaledVector(jg,a.z),r}static isFrontFacing(t,n,i,s){return Li.subVectors(i,n),Ls.subVectors(t,n),Li.cross(Ls).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),Li.cross(Ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Co.subVectors(s,i),No.subVectors(a,i),Yg.subVectors(t,i);let l=Co.dot(Yg),c=No.dot(Yg);if(l<=0&&c<=0)return n.copy(i);Zg.subVectors(t,s);let h=Co.dot(Zg),p=No.dot(Zg);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),n.copy(i).addScaledVector(Co,r);Jg.subVectors(t,a);let f=Co.dot(Jg),v=No.dot(Jg);if(v>=0&&f<=v)return n.copy(a);let b=f*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(No,o);let g=h*v-f*p;if(g<=0&&p-h>=0&&f-v>=0)return tb.subVectors(a,s),o=(p-h)/(p-h+(f-v)),n.copy(s).addScaledVector(tb,o);let d=1/(g+b+u);return r=b*d,o=u*d,n.copy(i).addScaledVector(Co,r).addScaledVector(No,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},La=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ui.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ui.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ui):Ui.fromBufferAttribute(a,r),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uh.copy(i.boundingBox)),Uh.applyMatrix4(t.matrixWorld),this.union(Uh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rc),Oh.subVectors(this.max,rc),Do.subVectors(t.a,rc),Lo.subVectors(t.b,rc),Uo.subVectors(t.c,rc),wa.subVectors(Lo,Do),Ra.subVectors(Uo,Lo),fr.subVectors(Do,Uo);let n=[0,-wa.z,wa.y,0,-Ra.z,Ra.y,0,-fr.z,fr.y,wa.z,0,-wa.x,Ra.z,0,-Ra.x,fr.z,0,-fr.x,-wa.y,wa.x,0,-Ra.y,Ra.x,0,-fr.y,fr.x,0];return!$g(n,Do,Lo,Uo,Oh)||(n=[1,0,0,0,1,0,0,0,1],!$g(n,Do,Lo,Uo,Oh))?!1:(Ih.crossVectors(wa,Ra),n=[Ih.x,Ih.y,Ih.z],$g(n,Do,Lo,Uo,Oh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new I,new I,new I,new I,new I,new I,new I,new I],Ui=new I,Uh=new La,Do=new I,Lo=new I,Uo=new I,wa=new I,Ra=new I,fr=new I,rc=new I,Oh=new I,Ih=new I,dr=new I;function $g(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){dr.fromArray(e,a);let o=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),l=t.dot(dr),c=n.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var He=new I,Ph=new At,Iw=0,Ii=class extends as{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Wb,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=t!==void 0?V0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ph.fromBufferAttribute(this,n),Ph.applyMatrix3(t),this.setXY(n,Ph.x,Ph.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):bw(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):Tw(t,this.array)}};var yc=class extends Ii{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var xc=class extends Ii{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Dn=class extends Ii{constructor(t,n,i){super(new Float32Array(t),n,i)}},Pw=new La,oc=new I,t0=new I,Xo=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Pw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oc.subVectors(t,this.center);let n=oc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(oc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(t0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oc.copy(t.center).add(t0)),this.expandByPoint(oc.copy(t.center).sub(t0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bw=0,xi=new Ne,e0=new Mi,Oo=new I,ni=new La,lc=new La,en=new I,os=class e extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=Pc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xw(t)?xc:yc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ut().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,i){return xi.makeTranslation(t,n,i),this.applyMatrix4(xi),this}scale(t,n,i){return xi.makeScale(t,n,i),this.applyMatrix4(xi),this}lookAt(t){return e0.lookAt(t),e0.updateMatrix(),this.applyMatrix4(e0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Dn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];lc.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(ni.min,lc.min),ni.expandByPoint(en),en.addVectors(ni.max,lc.max),ni.expandByPoint(en)):(ni.expandByPoint(lc.min),ni.expandByPoint(lc.max))}ni.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)en.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(en));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(Oo.fromBufferAttribute(t,c),en.add(Oo)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new I,l[U]=new I;let h=new I,p=new I,u=new I,f=new At,v=new At,b=new At,g=new I,d=new I;function m(U,R,O){c[U]=c[R]=c[O]=1,h.fromBufferAttribute(i,U),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,O),f.fromBufferAttribute(a,U),v.fromBufferAttribute(a,R),b.fromBufferAttribute(a,O),p.sub(h),u.sub(h),v.sub(f),b.sub(f);let H=1/(v.x*b.y-b.x*v.y);isFinite(H)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(u,-v.y).multiplyScalar(H),d.copy(u).multiplyScalar(v.x).addScaledVector(p,-b.x).multiplyScalar(H),o[U].add(g),o[R].add(g),o[O].add(g),l[U].add(d),l[R].add(d),l[O].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,R=y.length;U<R;++U){let O=y[U],H=O.start,q=O.count;for(let D=H,X=H+q;D<X;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let x=new I,E=new I,A=new I,_=new I;function T(U){A.fromBufferAttribute(s,U),_.copy(A);let R=o[U];x.copy(R),x.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(_,R);let H=E.dot(l[U])<0?-1:1;r.setXYZW(U,x.x,x.y,x.z,H)}for(let U=0,R=i.count;U<R;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,h=new I,p=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let v=t.getX(u+0),b=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,g),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)en.fromBufferAttribute(t,n),en.normalize(),t.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let d=0;d<h;d++)u[v++]=c[f++]}return new Ii(u,h,p)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var n0=new I,Fw=new I,zw=new Ut,Oi=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=n0.subVectors(i,n).cross(Fw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(n0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||zw.getNormalMatrix(t),s=this.coplanarPoint(n0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hw=0,vr=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=Pc(),this.name="",this.type="Material",this.blending=Ko,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=v0,this.blendDst=y0,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qh,this.stencilZFail=Qh,this.stencilZPass=Qh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ct(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Is=new I,i0=new I,Bh=new I,Fh=new I,df=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Is)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Is.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Is.copy(this.origin).addScaledVector(this.direction,n),Is.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){i0.copy(t).add(n).multiplyScalar(.5),Bh.copy(n).sub(t).normalize(),Fh.copy(this.origin).sub(i0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Bh),o=Fh.dot(this.direction),l=-Fh.dot(Bh),c=Fh.lengthSq(),h=Math.abs(1-r*r),p,u,f,v;if(h>0)if(p=r*l-o,u=r*o-l,v=a*h,p>=0)if(u>=-v)if(u<=v){let b=1/h;p*=b,u*=b,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(i0).addScaledVector(Bh,u),f}intersectSphere(t,n){if(t.radius<0)return null;Is.subVectors(t.center,this.origin);let i=Is.dot(this.direction),s=Is.dot(Is)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Is)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,f=t.z-r.z,v=n.x-r.x,b=n.y-r.y,g=n.z-r.z,d=i.x-r.x,m=i.y-r.y,y=i.z-r.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(h),_,T,U,R,O,H,q,D,X,K,G,nt;if(x>=E&&x>=A?(U=l,H=p,X=v,nt=d,l>=0?(_=c,T=h,R=u,O=f,q=b,D=g,K=m,G=y):(_=h,T=c,R=f,O=u,q=g,D=b,K=y,G=m)):E>=A?(U=c,H=u,X=b,nt=m,c>=0?(_=h,T=l,R=f,O=p,q=g,D=v,K=y,G=d):(_=l,T=h,R=p,O=f,q=v,D=g,K=d,G=y)):(U=h,H=f,X=g,nt=y,h>=0?(_=l,T=c,R=p,O=u,q=v,D=b,K=d,G=m):(_=c,T=l,R=u,O=p,q=b,D=v,K=m,G=d)),U===0)return null;let k=_/U,$=T/U,tt=1/U,Mt=R-k*H,Bt=O-$*H,Z=q-k*X,mt=D-$*X,yt=K-k*nt,wt=G-$*nt,gt=yt*mt-wt*Z,zt=Mt*wt-Bt*yt,Ie=Z*Bt-mt*Mt;if(s){if(gt<0||zt<0||Ie<0)return null}else if((gt<0||zt<0||Ie<0)&&(gt>0||zt>0||Ie>0))return null;let Nt=gt+zt+Ie;if(Nt===0)return null;let re=tt*(gt*H+zt*X+Ie*nt);return(Nt>0?re<0:re>0)?null:this.at(re/Nt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pf=class extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},eb=new Ne,pr=new df,zh=new Xo,nb=new I,Hh=new I,Gh=new I,Vh=new I,s0=new I,kh=new I,ib=new I,Xh=new I,Un=class extends Mi{constructor(t=new os,n=new pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){kh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(s0.fromBufferAttribute(p,t),r?kh.addScaledVector(s0,h):kh.addScaledVector(s0.sub(n),h))}n.add(kh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zh.copy(i.boundingSphere),zh.applyMatrix4(a),pr.copy(t.ray).recast(t.near),!(zh.containsPoint(pr.origin)===!1&&(pr.intersectSphere(zh,nb)===null||pr.origin.distanceToSquared(nb)>(t.far-t.near)**2))&&(eb.copy(a).invert(),pr.copy(t.ray).applyMatrix4(eb),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,pr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],d=r[g.materialIndex],m=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=m,E=y;x<E;x+=3){let A=o.getX(x),_=o.getX(x+1),T=o.getX(x+2);s=Wh(this,d,t,i,c,h,p,A,_,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=v,d=b;g<d;g+=3){let m=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=Wh(this,r,t,i,c,h,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],d=r[g.materialIndex],m=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=m,E=y;x<E;x+=3){let A=x,_=x+1,T=x+2;s=Wh(this,d,t,i,c,h,p,A,_,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=v,d=b;g<d;g+=3){let m=g,y=g+1,x=g+2;s=Wh(this,r,t,i,c,h,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function Gw(e,t,n,i,s,a,r,o){let l;if(t.side===On?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Pa,o),l===null)return null;Xh.copy(o),Xh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Xh);return c<n.near||c>n.far?null:{distance:c,point:Xh.clone(),object:e}}function Wh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Hh),e.getVertexPosition(l,Gh),e.getVertexPosition(c,Vh);let h=Gw(e,t,n,i,Hh,Gh,Vh,ib);if(h){let p=new I;Na.getBarycoord(ib,Hh,Gh,Vh,p),s&&(h.uv=Na.getInterpolatedAttribute(s,o,l,c,p,new At)),a&&(h.uv1=Na.getInterpolatedAttribute(a,o,l,c,p,new At)),r&&(h.normal=Na.getInterpolatedAttribute(r,o,l,c,p,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Na.getNormal(Hh,Gh,Vh,u.normal),h.face=u,h.barycoord=p}return h}var mf=class extends kn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=nn,h=nn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class extends Ii{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var mr=new Xo,Vw=new At(.5,.5),qh=new I,yr=class{constructor(t=new Oi,n=new Oi,i=new Oi,s=new Oi,a=new Oi,r=new Oi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Si,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],f=a[7],v=a[8],b=a[9],g=a[10],d=a[11],m=a[12],y=a[13],x=a[14],E=a[15];if(s[0].setComponents(c-r,f-h,d-v,E-m).normalize(),s[1].setComponents(c+r,f+h,d+v,E+m).normalize(),s[2].setComponents(c+o,f+p,d+b,E+y).normalize(),s[3].setComponents(c-o,f-p,d-b,E-y).normalize(),i)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,f-u,d-g,E-x).normalize();else if(s[4].setComponents(c-l,f-u,d-g,E-x).normalize(),n===Si)s[5].setComponents(c+l,f+u,d+g,E+x).normalize();else if(n===pc)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);let n=Vw.distanceTo(t.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(qh.x=s.normal.x>0?t.max.x:t.min.x,qh.y=s.normal.y>0?t.max.y:t.min.y,qh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sb=new Ne,gf=class e{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];sb.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new yr),i[s].setFromProjectionMatrix(sb,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new yr),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var Sc=class extends kn{constructor(t=[],n=br,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Fs=class extends kn{constructor(t,n,i=Bi,s,a,r,o=nn,l=nn,c,h=Bs,p=1){if(h!==Bs&&h!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Mc=class extends Fs{constructor(t,n=Bi,i=br,s,a,r=nn,o=nn,l,c=Bs){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bc=class extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wo=class e extends os{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,f=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(p,2));function v(b,g,d,m,y,x,E,A,_,T,U){let R=x/_,O=E/T,H=x/2,q=E/2,D=A/2,X=_+1,K=T+1,G=0,nt=0,k=new I;for(let $=0;$<K;$++){let tt=$*O-q;for(let Mt=0;Mt<X;Mt++){let Bt=Mt*R-H;k[b]=Bt*m,k[g]=tt*y,k[d]=D,c.push(k.x,k.y,k.z),k[b]=0,k[g]=0,k[d]=A>0?1:-1,h.push(k.x,k.y,k.z),p.push(Mt/_),p.push(1-$/T),G+=1}}for(let $=0;$<T;$++)for(let tt=0;tt<_;tt++){let Mt=u+tt+X*$,Bt=u+tt+X*($+1),Z=u+(tt+1)+X*($+1),mt=u+(tt+1)+X*$;l.push(Mt,Bt,mt),l.push(Bt,Z,mt),nt+=6}o.addGroup(f,nt,U),f+=nt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new At:new I);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new I,s=[],a=[],r=[],o=new I,l=new Ne;for(let f=0;f<=t;f++){let v=f/t;s[f]=this.getTangentAt(v,new I)}a[0]=new I,r[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,v))}r[f].crossVectors(s[f],a[f])}if(n===!0){let f=Math.acos(Yt(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let v=1;v<=t;v++)a[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),r[v].crossVectors(s[v],a[v])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Tc=class extends bi{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new At){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_f=class extends Tc{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function k0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,f*=h,s(r,o,u,f)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var ab=new I,rb=new I,a0=new k0,r0=new k0,o0=new k0,vf=class extends bi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new I){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(rb.subVectors(s[0],s[1]).add(s[0]),c=rb);let p=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(ab.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=ab),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(p),f),b=Math.pow(p.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),v<1e-4&&(v=b),g<1e-4&&(g=b),a0.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,v,b,g),r0.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,v,b,g),o0.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,v,b,g)}else this.curveType==="catmullrom"&&(a0.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),r0.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),o0.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(a0.calc(l),r0.calc(l),o0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ob(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function kw(e,t){let n=1-e;return n*n*t}function Xw(e,t){return 2*(1-e)*e*t}function Ww(e,t){return e*e*t}function uc(e,t,n,i){return kw(e,t)+Xw(e,n)+Ww(e,i)}function qw(e,t){let n=1-e;return n*n*n*t}function Yw(e,t){let n=1-e;return 3*n*n*e*t}function Zw(e,t){return 3*(1-e)*e*e*t}function Jw(e,t){return e*e*e*t}function hc(e,t,n,i,s){return qw(e,t)+Yw(e,n)+Zw(e,i)+Jw(e,s)}var yf=class extends bi{constructor(t=new At,n=new At,i=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new At){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(hc(t,s.x,a.x,r.x,o.x),hc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xf=class extends bi{constructor(t=new I,n=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new I){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(hc(t,s.x,a.x,r.x,o.x),hc(t,s.y,a.y,r.y,o.y),hc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sf=class extends bi{constructor(t=new At,n=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new At){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new At){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends bi{constructor(t=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new I){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mf=class extends bi{constructor(t=new At,n=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new At){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(uc(t,s.x,a.x,r.x),uc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends bi{constructor(t=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new I){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(uc(t,s.x,a.x,r.x),uc(t,s.y,a.y,r.y),uc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bf=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new At){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(ob(o,l.x,c.x,h.x,p.x),ob(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new At().fromArray(s))}return this}},Kw=Object.freeze({__proto__:null,ArcCurve:_f,CatmullRomCurve3:vf,CubicBezierCurve:yf,CubicBezierCurve3:xf,EllipseCurve:Tc,LineCurve:Sf,LineCurve3:qo,QuadraticBezierCurve:Mf,QuadraticBezierCurve3:Ec,SplineCurve:bf});var zs=class e extends os{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,f=[],v=[],b=[],g=[];for(let d=0;d<h;d++){let m=d*u-r;for(let y=0;y<c;y++){let x=y*p-a;v.push(x,-m,0),b.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let y=m+c*d,x=m+c*(d+1),E=m+1+c*(d+1),A=m+1+c*d;f.push(y,x,A),f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(b,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ac=class e extends os{constructor(t=new Ec(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),n=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:a};let r=t.computeFrenetFrames(n,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new I,l=new I,c=new At,h=new I,p=[],u=[],f=[],v=[];b(),this.setIndex(v),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(f,2));function b(){for(let y=0;y<n;y++)g(y);g(a===!1?n:0),m(),d()}function g(y){h=t.getPointAt(y/n,h);let x=r.normals[y],E=r.binormals[y];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,T=Math.sin(_),U=-Math.cos(_);l.x=U*x.x+T*E.x,l.y=U*x.y+T*E.y,l.z=U*x.z+T*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let E=(s+1)*(y-1)+(x-1),A=(s+1)*y+(x-1),_=(s+1)*y+x,T=(s+1)*(y-1)+x;v.push(E,A,T),v.push(A,_,T)}}function m(){for(let y=0;y<=n;y++)for(let x=0;x<=s;x++)c.x=y/n,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new Kw[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Er(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(lb(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(lb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Mn(e){let t={};for(let n=0;n<e.length;n++){let i=Er(e[n]);for(let s in i)t[s]=i[s]}return t}function lb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Qw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function X0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var jb={clone:Er,merge:Mn},jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$w=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=$w,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Qw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[i].value=new At().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tf=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ef=class extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Af=class extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Io(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Yh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ua=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wf=class extends Ua{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:c0,endingEnd:c0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case u0:a=t,o=2*n-i;break;case h0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case u0:r=t,l=2*i-n;break;case h0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,v=(i-n)/(s-n),b=v*v,g=b*v,d=-u*g+2*u*b-u*v,m=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*v+1,y=(-1-f)*g+(1.5+f)*b+.5*v,x=f*g-f*b;for(let E=0;E!==o;++E)a[E]=d*r[h+E]+m*r[c+E]+y*r[l+E]+x*r[p+E];return a}},Rf=class extends Ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},Cf=class extends Ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nf=class extends Ua{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let v=(i-n)/(s-n),b=1-v;for(let g=0;g!==o;++g)a[g]=r[c+g]*b+r[l+g]*v;return a}let u=o*2,f=t-1;for(let v=0;v!==o;++v){let b=r[c+v],g=r[l+v],d=f*u+v*2,m=p[d],y=p[d+1],x=t*u+v*2,E=h[x],A=h[x+1],_=eR(i,n,m,E,s);a[v]=$b(_,b,y,A,g)}return a}};function $b(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function tR(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function eR(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=$b(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=tR(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ii=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Io(n,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Io(t.times,Array),values:Io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Yh(t.settings)&&(i.settings={inTangents:Io(t.settings.inTangents,Array),outTangents:Io(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Cf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Nf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case fc:n=this.InterpolantFactoryMethodDiscrete;break;case lf:n=this.InterpolantFactoryMethodLinear;break;case Kh:n=this.InterpolantFactoryMethodSmooth;break;case l0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fc;case this.InterpolantFactoryMethodLinear:return lf;case this.InterpolantFactoryMethodSmooth:return Kh;case this.InterpolantFactoryMethodBezier:return l0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;Yh(this.settings)&&(cb(this.settings.inTangents,t),cb(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Yh(this.settings)&&(ub(this.settings.inTangents,t),ub(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Sw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[f+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Yh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function ub(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=lf;var Oa=class extends ii{constructor(t,n,i){super(t,n,i)}};Oa.prototype.ValueTypeName="bool";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=fc;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Df.prototype.ValueTypeName="color";var Lf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Lf.prototype.ValueTypeName="number";var Uf=class extends Ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)rs.slerpFlat(a,0,r,c-o,r,c,l);return a}},wc=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Uf(this.times,this.values,this.getValueSize(),t)}};wc.prototype.ValueTypeName="quaternion";wc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends ii{constructor(t,n,i){super(t,n,i)}};Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=fc;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Of=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Of.prototype.ValueTypeName="vector";var If=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],v=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},t1=new If,Pf=class{constructor(t){this.manager=t!==void 0?t:t1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Pf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zh=new I,Jh=new rs,is=new I,xr=class extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zh,Jh,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zh,Jh,is.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Zh,Jh,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zh,Jh,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ca=new I,hb=new At,fb=new At,Nn=class extends xr{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Fg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ca.x,Ca.y).multiplyScalar(-t/Ca.z),Ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ca.x,Ca.y).multiplyScalar(-t/Ca.z)}getViewSize(t,n){return this.getViewBounds(t,hb,fb),n.subVectors(fb,hb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Fg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Bf=class extends xr{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Yo=class extends os{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Po=-90,Bo=1,Zo=class extends Mi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Po,Bo,t,n);s.layers=this.layers,this.add(s);let a=new Nn(Po,Bo,t,n);a.layers=this.layers,this.add(a);let r=new Nn(Po,Bo,t,n);r.layers=this.layers,this.add(r);let o=new Nn(Po,Bo,t,n);o.layers=this.layers,this.add(o);let l=new Nn(Po,Bo,t,n);l.layers=this.layers,this.add(l);let c=new Nn(Po,Bo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Ff=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var W0="\\[\\]\\.:\\/",nR=new RegExp("["+W0+"]","g"),q0="[^"+W0+"]",iR="[^"+W0.replace("\\.","")+"]",sR=/((?:WC+[\/:])*)/.source.replace("WC",q0),aR=/(WCOD+)?/.source.replace("WCOD",iR),rR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",q0),oR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",q0),lR=new RegExp("^"+sR+aR+rR+oR+"$"),cR=["material","materials","bones","map"],f0=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nR,"")}static parseTrackName(t){let n=lR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);cR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=f0;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MD=new Float32Array(1);var Pi=class e{constructor(t){this.value=t}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}};var d0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Y0(e,t,n,i){let s=uR(i);switch(n){case U0:return e*t;case I0:return e*t/s.components*s.byteLength;case Wf:return e*t/s.components*s.byteLength;case Ba:return e*t*2/s.components*s.byteLength;case qf:return e*t*2/s.components*s.byteLength;case O0:return e*t*3/s.components*s.byteLength;case Hi:return e*t*4/s.components*s.byteLength;case Yf:return e*t*4/s.components*s.byteLength;case Nc:case Dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jf:case Qf:return Math.max(e,16)*Math.max(t,8)/4;case Zf:case Kf:return Math.max(e,8)*Math.max(t,8)/2;case jf:case $f:case ed:case nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case td:case Oc:case id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case rd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case od:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case pd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case md:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vd:case yd:case xd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Sd:case Md:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ic:case bd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uR(e){switch(e){case ai:case C0:return{byteLength:1,components:1};case jo:case N0:case zi:return{byteLength:2,components:1};case kf:case Xf:return{byteLength:2,components:4};case Bi:case Vf:case Fi:return{byteLength:4,components:1};case D0:case L0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function M1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function fR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<p.length;f++){let v=p[u],b=p[f];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let f=0,v=p.length;f<v;f++){let b=p[f];e.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var dR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pR=`#ifdef USE_ALPHAHASH
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
#endif`,mR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_R=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,xR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SR=`#ifdef USE_BATCHING
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
#endif`,MR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ER=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AR=`#ifdef USE_IRIDESCENCE
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
#endif`,wR=`#ifdef USE_BUMPMAP
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
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,BR=`vec3 transformedNormal = objectNormal;
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
#endif`,FR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VR="gl_FragColor = linearToOutputTexel( gl_FragColor );",kR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XR=`#ifdef USE_ENVMAP
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
#endif`,WR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
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
#endif`,YR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$R=`#ifdef USE_GRADIENTMAP
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
}`,tC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sC=`#ifdef USE_ENVMAP
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
#endif`,aC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cC=`PhysicalMaterial material;
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
#endif`,uC=`uniform sampler2D dfgLUT;
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
}`,hC=`
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
#endif`,fC=`#if defined( RE_IndirectDiffuse )
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
#endif`,dC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MC=`#if defined( USE_POINTS_UV )
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
#endif`,bC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AC=`#if defined( USE_MORPHCOLORS )
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
#endif`,wC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RC=`#ifdef USE_MORPHTARGETS
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
#endif`,CC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IC=`#ifdef USE_NORMALMAP
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
#endif`,BC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FC=`#ifdef USE_CLEARCOATMAP
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
#endif`,HC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QC=`float getShadowMask() {
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
}`,jC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$C=`#ifdef USE_SKINNING
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
#endif`,t3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e3=`#ifdef USE_SKINNING
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
#endif`,n3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r3=`#ifdef USE_TRANSMISSION
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
#endif`,o3=`#ifdef USE_TRANSMISSION
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d3=`uniform sampler2D t2D;
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m3=`uniform float backgroundBlurriness;
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
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v3=`#include <common>
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
}`,y3=`#if DEPTH_PACKING == 3200
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
}`,x3=`#define DISTANCE
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
}`,S3=`#define DISTANCE
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
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T3=`uniform float scale;
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
}`,E3=`uniform vec3 diffuse;
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
}`,A3=`#include <common>
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
}`,w3=`uniform vec3 diffuse;
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
}`,R3=`#define LAMBERT
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
}`,C3=`#define LAMBERT
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
}`,N3=`#define MATCAP
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
}`,D3=`#define MATCAP
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
}`,L3=`#define NORMAL
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
}`,U3=`#define NORMAL
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
}`,O3=`#define PHONG
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
}`,I3=`#define PHONG
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
}`,P3=`#define STANDARD
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
}`,B3=`#define STANDARD
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
}`,F3=`#define TOON
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
}`,z3=`#define TOON
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
}`,H3=`uniform float size;
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
}`,G3=`uniform vec3 diffuse;
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
}`,V3=`#include <common>
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
}`,k3=`uniform vec3 color;
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
}`,X3=`uniform float rotation;
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
}`,W3=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:dR,alphahash_pars_fragment:pR,alphamap_fragment:mR,alphamap_pars_fragment:gR,alphatest_fragment:_R,alphatest_pars_fragment:vR,aomap_fragment:yR,aomap_pars_fragment:xR,batching_pars_vertex:SR,batching_vertex:MR,begin_vertex:bR,beginnormal_vertex:TR,bsdfs:ER,iridescence_fragment:AR,bumpmap_pars_fragment:wR,clipping_planes_fragment:RR,clipping_planes_pars_fragment:CR,clipping_planes_pars_vertex:NR,clipping_planes_vertex:DR,color_fragment:LR,color_pars_fragment:UR,color_pars_vertex:OR,color_vertex:IR,common:PR,defaultnormal_vertex:BR,displacementmap_pars_vertex:FR,displacementmap_vertex:zR,emissivemap_fragment:HR,emissivemap_pars_fragment:GR,colorspace_fragment:VR,colorspace_pars_fragment:kR,envmap_fragment:XR,envmap_common_pars_fragment:WR,envmap_pars_fragment:qR,envmap_pars_vertex:YR,envmap_physical_pars_fragment:sC,envmap_vertex:ZR,fog_vertex:JR,fog_pars_vertex:KR,fog_fragment:QR,fog_pars_fragment:jR,gradientmap_pars_fragment:$R,lightmap_pars_fragment:tC,lights_lambert_fragment:eC,lights_lambert_pars_fragment:nC,lights_pars_begin:iC,lights_toon_fragment:aC,lights_toon_pars_fragment:rC,lights_phong_fragment:oC,lights_phong_pars_fragment:lC,lights_physical_fragment:cC,lights_physical_pars_fragment:uC,lights_fragment_begin:hC,lights_fragment_maps:fC,lights_fragment_end:dC,lightprobes_pars_fragment:pC,logdepthbuf_fragment:mC,logdepthbuf_pars_fragment:gC,logdepthbuf_pars_vertex:_C,logdepthbuf_vertex:vC,map_fragment:yC,map_pars_fragment:xC,map_particle_fragment:SC,map_particle_pars_fragment:MC,metalnessmap_fragment:bC,metalnessmap_pars_fragment:TC,morphinstance_vertex:EC,morphcolor_vertex:AC,morphnormal_vertex:wC,morphtarget_pars_vertex:RC,morphtarget_vertex:CC,normal_fragment_begin:NC,normal_fragment_maps:DC,normal_pars_fragment:LC,normal_pars_vertex:UC,normal_vertex:OC,normalmap_pars_fragment:IC,clearcoat_normal_fragment_begin:PC,clearcoat_normal_fragment_maps:BC,clearcoat_pars_fragment:FC,iridescence_pars_fragment:zC,opaque_fragment:HC,packing:GC,premultiplied_alpha_fragment:VC,project_vertex:kC,dithering_fragment:XC,dithering_pars_fragment:WC,roughnessmap_fragment:qC,roughnessmap_pars_fragment:YC,shadowmap_pars_fragment:ZC,shadowmap_pars_vertex:JC,shadowmap_vertex:KC,shadowmask_pars_fragment:QC,skinbase_vertex:jC,skinning_pars_vertex:$C,skinning_vertex:t3,skinnormal_vertex:e3,specularmap_fragment:n3,specularmap_pars_fragment:i3,tonemapping_fragment:s3,tonemapping_pars_fragment:a3,transmission_fragment:r3,transmission_pars_fragment:o3,uv_pars_fragment:l3,uv_pars_vertex:c3,uv_vertex:u3,worldpos_vertex:h3,background_vert:f3,background_frag:d3,backgroundCube_vert:p3,backgroundCube_frag:m3,cube_vert:g3,cube_frag:_3,depth_vert:v3,depth_frag:y3,distance_vert:x3,distance_frag:S3,equirect_vert:M3,equirect_frag:b3,linedashed_vert:T3,linedashed_frag:E3,meshbasic_vert:A3,meshbasic_frag:w3,meshlambert_vert:R3,meshlambert_frag:C3,meshmatcap_vert:N3,meshmatcap_frag:D3,meshnormal_vert:L3,meshnormal_frag:U3,meshphong_vert:O3,meshphong_frag:I3,meshphysical_vert:P3,meshphysical_frag:B3,meshtoon_vert:F3,meshtoon_frag:z3,points_vert:H3,points_frag:G3,shadow_vert:V3,shadow_frag:k3,sprite_vert:X3,sprite_frag:W3},pt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},hs={basic:{uniforms:Mn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Mn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Mn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Mn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Mn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Mn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Mn([pt.points,pt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Mn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Mn([pt.common,pt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Mn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Mn([pt.sprite,pt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Mn([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Mn([pt.lights,pt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};hs.physical={uniforms:Mn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var Td={r:0,b:0,g:0},q3=new Ne,b1=new Ut;b1.set(-1,0,0,0,1,0,0,0,1);function Y3(e,t,n,i,s,a){let r=new Vt(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function f(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let x=m.backgroundBlurriness>0;y=t.get(y,x)}return y}function v(m){let y=!1,x=f(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),y=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,y){let x=f(y);x&&x.isCubeTexture?(c===void 0&&(c=new Un(new Wo(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Er(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q3.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(b1),c.material.toneMapped=jt.getTransfer(x.colorSpace)!==ae,(h!==x||p!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Un(new zs(2,2),new pn({name:"BackgroundMaterial",uniforms:Er(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=jt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(Td,X0(e)),n.buffers.color.setClear(Td.r,Td.g,Td.b,y,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:b,dispose:d}}function Z3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(O,H,q,D,X){let K=!1,G=p(O,D,q,H);a!==G&&(a=G,c(a.object)),K=f(O,D,q,X),K&&v(O,D,q,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,x(O,H,q,D),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function h(O){return e.deleteVertexArray(O)}function p(O,H,q,D){let X=D.wireframe===!0,K=i[H.id];K===void 0&&(K={},i[H.id]=K);let G=O.isInstancedMesh===!0?O.id:0,nt=K[G];nt===void 0&&(nt={},K[G]=nt);let k=nt[q.id];k===void 0&&(k={},nt[q.id]=k);let $=k[X];return $===void 0&&($=u(l()),k[X]=$),$}function u(O){let H=[],q=[],D=[];for(let X=0;X<n;X++)H[X]=0,q[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:D,object:O,attributes:{},index:null}}function f(O,H,q,D){let X=a.attributes,K=H.attributes,G=0,nt=q.getAttributes();for(let k in nt)if(nt[k].location>=0){let tt=X[k],Mt=K[k];if(Mt===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(Mt=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(Mt=O.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;G++}return a.attributesNum!==G||a.index!==D}function v(O,H,q,D){let X={},K=H.attributes,G=0,nt=q.getAttributes();for(let k in nt)if(nt[k].location>=0){let tt=K[k];tt===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),X[k]=Mt,G++}a.attributes=X,a.attributesNum=G,a.index=D}function b(){let O=a.newAttributes;for(let H=0,q=O.length;H<q;H++)O[H]=0}function g(O){d(O,0)}function d(O,H){let q=a.newAttributes,D=a.enabledAttributes,X=a.attributeDivisors;q[O]=1,D[O]===0&&(e.enableVertexAttribArray(O),D[O]=1),X[O]!==H&&(e.vertexAttribDivisor(O,H),X[O]=H)}function m(){let O=a.newAttributes,H=a.enabledAttributes;for(let q=0,D=H.length;q<D;q++)H[q]!==O[q]&&(e.disableVertexAttribArray(q),H[q]=0)}function y(O,H,q,D,X,K,G){G===!0?e.vertexAttribIPointer(O,H,q,X,K):e.vertexAttribPointer(O,H,q,D,X,K)}function x(O,H,q,D){b();let X=D.attributes,K=q.getAttributes(),G=H.defaultAttributeValues;for(let nt in K){let k=K[nt];if(k.location>=0){let $=X[nt];if($===void 0&&(nt==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),nt==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let tt=$.normalized,Mt=$.itemSize,Bt=t.get($);if(Bt===void 0)continue;let Z=Bt.buffer,mt=Bt.type,yt=Bt.bytesPerElement,wt=mt===e.INT||mt===e.UNSIGNED_INT||$.gpuType===Vf;if($.isInterleavedBufferAttribute){let gt=$.data,zt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Ie=$.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Nt=0;Nt<k.locationSize;Nt++)d(k.location+Nt,gt.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Nt=0;Nt<k.locationSize;Nt++)g(k.location+Nt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Nt=0;Nt<k.locationSize;Nt++)y(k.location+Nt,Mt/k.locationSize,mt,tt,zt*yt,(Ie+Mt/k.locationSize*Nt)*yt,wt)}else{if($.isInstancedBufferAttribute){for(let gt=0;gt<k.locationSize;gt++)d(k.location+gt,$.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<k.locationSize;gt++)g(k.location+gt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let gt=0;gt<k.locationSize;gt++)y(k.location+gt,Mt/k.locationSize,mt,tt,Mt*yt,Mt/k.locationSize*gt*yt,wt)}}else if(G!==void 0){let tt=G[nt];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(k.location,tt);break;case 3:e.vertexAttrib3fv(k.location,tt);break;case 4:e.vertexAttrib4fv(k.location,tt);break;default:e.vertexAttrib1fv(k.location,tt)}}}}m()}function E(){U();for(let O in i){let H=i[O];for(let q in H){let D=H[q];for(let X in D){let K=D[X];for(let G in K)h(K[G].object),delete K[G];delete D[X]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;let H=i[O.id];for(let q in H){let D=H[q];for(let X in D){let K=D[X];for(let G in K)h(K[G].object),delete K[G];delete D[X]}}delete i[O.id]}function _(O){for(let H in i){let q=i[H];for(let D in q){let X=q[D];if(X[O.id]===void 0)continue;let K=X[O.id];for(let G in K)h(K[G].object),delete K[G];delete X[O.id]}}}function T(O){for(let H in i){let q=i[H],D=O.isInstancedMesh===!0?O.id:0,X=q[D];if(X!==void 0){for(let K in X){let G=X[K];for(let nt in G)h(G[nt].object),delete G[nt];delete X[K]}delete q[D],Object.keys(q).length===0&&delete i[H]}}}function U(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function J3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function K3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==Hi&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ai&&_!==Fi&&!T&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:A}}function Q3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Oi,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,f){let v=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,d=e.get(p);if(!s||v===null||v.length===0||a&&!g)a?h(null):c();else{let m=a?0:i,y=m*4,x=d.clippingState||null;l.value=x,x=h(v,u,y,f);for(let E=0;E!==y;++E)x[E]=n[E];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,v){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,v!==!0||g===null){let d=f+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,x=f;y!==b;++y,x+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var zc=class extends dn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wo(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:Sr});a.uniforms.tEquirect.value=n;let r=new Un(s,a),o=n.minFilter;return n.minFilter===Hs&&(n.minFilter=Ln),new Zo(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},e1=256,j3=3,$3=20,T1=256,E1=16,t2=3,e2=new I,n2=new Vt,Ad=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zo(1,10,null),this._boxMesh=new Un(new Wo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=e2}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,v=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(n2));let g=new Zo(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=v,t.background=b,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(e1,Kb(t))}_fromTexture(t,n){t.mapping===br||t.mapping===Qo?this._setSize(t.image.length===0?e1:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=n1(t,!1,!1),i=Math.log2(t)-j3;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=n1(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===br||t.mapping===Qo?(this._cubemapMaterial===null&&(this._cubemapMaterial=s1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=i1()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=i2(),this._integrationMaterial=s2());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/E1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-t2)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(T1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=a2());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function n1(e,t,n){return new zc(e,{minFilter:Hs,generateMipmaps:t,type:zi,colorSpace:_r,depthBuffer:n})}function Hc(e,t,n){return new pn({name:e,uniforms:t,vertexShader:Pt.cube_vert,fragmentShader:n,side:On,blending:Sr,depthTest:!1,depthWrite:!1})}function i2(){return Hc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${T1}u

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
	`)}function s2(){return Hc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:E1}},`

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
	`)}function a2(){return Hc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$3}
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
	`)}function i1(){return Hc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function s1(){return Hc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function r2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===zf||f===Hf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new zc(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,v=f===zf||f===Hf,b=f===br||f===Qo;if(v||b){let g=n.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Ad(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new Ad(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===zf?u.mapping=br:f===Hf&&(u.mapping=Qo),u}function l(u){let f=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&f++;return f===v}function c(u){let f=u.target;f.removeEventListener("dispose",c);let v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let v=n.get(f);v!==void 0&&(n.delete(f),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function o2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&cc("WebGLRenderer: "+i+" extension not supported."),s}}}function l2(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let g in v.attributes)t.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),r.register(b,b.id,b),n.memory.geometries++),b}function h(v){let b=v.attributes;for(let g in b)t.update(b[g],e.ARRAY_BUFFER)}function p(v){let b=v.index,g=v.attributes.position,d=0;if(g===void 0)return;let m=b!==null?b.array.length:g.array.length/3-1,y=g.count>=65535?xc:yc,x=new y(Math.ceil(m/3)*6,1),E=x.array;if(b!==null){let _=b.array;d=b.version;for(let T=0,U=0;T<m;T+=3){let R=_[T+0],O=_[T+1],H=_[T+2];E[U++]=R,E[U++]=O,E[U++]=O,E[U++]=H,E[U++]=H,E[U++]=R}}else{d=g.version;for(let _=0,T=0;_<m;_+=3){let U=_+0,R=_+1,O=_+2;E[T++]=U,E[T++]=R,E[T++]=R,E[T++]=O,E[T++]=O,E[T++]=U}}x.version=d;let A=a.get(v);A&&t.remove(A),a.set(v,x)}function u(v){let b=a.get(v);if(b){let g=v.index;g!==null&&b.version<g.version&&p(v)}else p(v);return a.get(v)}function f(){for(let v in s){let b=s[v].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function c2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,f){f!==0&&(e.drawElementsInstanced(i,u,a,p*r,f),n.update(u,i,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,f);let b=0;for(let g=0;g<f;g++)b+=u[g];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function h2(e,t,n){let i=new WeakMap,s=new De;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let U=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;f===!0&&(y=1),v===!0&&(y=2),b===!0&&(y=3);let x=o.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*E*4*p),_=new gc(A,x,E,p);_.type=Fi,_.needsUpdate=!0;let T=y*4;for(let R=0;R<p;R++){let O=g[R],H=d[R],q=m[R],D=x*E*4*R;for(let X=0;X<O.count;X++){let K=X*T;f===!0&&(s.fromBufferAttribute(O,X),A[D+K+0]=s.x,A[D+K+1]=s.y,A[D+K+2]=s.z,A[D+K+3]=0),v===!0&&(s.fromBufferAttribute(H,X),A[D+K+4]=s.x,A[D+K+5]=s.y,A[D+K+6]=s.z,A[D+K+7]=0),b===!0&&(s.fromBufferAttribute(q,X),A[D+K+8]=s.x,A[D+K+9]=s.y,A[D+K+10]=s.z,A[D+K+11]=q.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new At(x,E)},i.set(o,u),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function f2(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var d2={[S0]:"LINEAR_TONE_MAPPING",[M0]:"REINHARD_TONE_MAPPING",[b0]:"CINEON_TONE_MAPPING",[T0]:"ACES_FILMIC_TONE_MAPPING",[A0]:"AGX_TONE_MAPPING",[w0]:"NEUTRAL_TONE_MAPPING",[E0]:"CUSTOM_TONE_MAPPING"};function p2(e,t,n,i,s,a){let r=new dn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new os;h.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Dn([0,2,0,0,2,0],2));let p=new Tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Un(h,p),f=new Bf(-1,1,1,-1,0,1),v=null,b=null,g=!1,d,m=null,y=[],x=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let _=0;_<y.length;_++){let T=y[_];T.setSize&&T.setSize(E,A)}},this.setEffects=function(E){y=E,x=y.length>0&&y[0].isRenderPass===!0;let A=r.width,_=r.height;y.length>0&&o===null&&(o=new dn(A,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new dn(A,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&y.some(U=>U.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new Fs(A,_),a===!0&&(c.format=Gs,c.type=Tr)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let U=0;U<y.length;U++){let R=y[U];R.setSize&&R.setSize(A,_),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,A){if(g||E.toneMapping===cs&&y.length===0)return!1;if(m=A,A!==null){let _=A.width,T=A.height;(r.width!==_||r.height!==T)&&this.setSize(_,T)}return x===!1&&E.setRenderTarget(r),d=E.toneMapping,E.toneMapping=cs,!0},this.hasRenderPass=function(){return x},this.end=function(E,A){E.toneMapping=d,g=!0;let _=r,T=o;for(let U=0;U<y.length;U++){let R=y[U];R.enabled!==!1&&(R.render(E,T,_,A),R.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(v!==E.outputColorSpace||b!==E.toneMapping){v=E.outputColorSpace,b=E.toneMapping,p.defines={},jt.getTransfer(v)===ae&&(p.defines.SRGB_TRANSFER="");let U=d2[b];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var A1=new kn,w1=new Fs(1,1),R1=new Mc(1),C1=new gc,N1=new ff,D1=new Sc,a1=[],r1=[],o1=new Float32Array(16),l1=new Float32Array(9),c1=new Float32Array(4);function tl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=a1[s];if(a===void 0&&(a=new Float32Array(s),a1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Rd(e,t){let n=r1[t];n===void 0&&(n=new Int32Array(t),r1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function m2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function g2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2fv(this.addr,t),Ye(n,t)}}function _2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qe(n,t))return;e.uniform3fv(this.addr,t),Ye(n,t)}}function v2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4fv(this.addr,t),Ye(n,t)}}function y2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;c1.set(i),e.uniformMatrix2fv(this.addr,!1,c1),Ye(n,i)}}function x2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;l1.set(i),e.uniformMatrix3fv(this.addr,!1,l1),Ye(n,i)}}function S2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;o1.set(i),e.uniformMatrix4fv(this.addr,!1,o1),Ye(n,i)}}function M2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function b2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2iv(this.addr,t),Ye(n,t)}}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3iv(this.addr,t),Ye(n,t)}}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4iv(this.addr,t),Ye(n,t)}}function A2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function w2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2uiv(this.addr,t),Ye(n,t)}}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3uiv(this.addr,t),Ye(n,t)}}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4uiv(this.addr,t),Ye(n,t)}}function Cd(e){return e.version===0&&(e.compareFunction=z0,e.needsUpdate=!0),e}function N2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=Cd(w1):a=A1,n.setTexture2D(t||a,s)}function D2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||N1,s)}function L2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Cd(R1):a=D1,n.setTextureCube(t||a,s)}function U2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||C1,s)}function O2(e){switch(e){case 5126:return m2;case 35664:return g2;case 35665:return _2;case 35666:return v2;case 35674:return y2;case 35675:return x2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return b2;case 35668:case 35672:return T2;case 35669:case 35673:return E2;case 5125:return A2;case 36294:return w2;case 36295:return R2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return U2}}function I2(e,t){e.uniform1fv(this.addr,t)}function P2(e,t){let n=tl(t,this.size,2);e.uniform2fv(this.addr,n)}function B2(e,t){let n=tl(t,this.size,3);e.uniform3fv(this.addr,n)}function F2(e,t){let n=tl(t,this.size,4);e.uniform4fv(this.addr,n)}function z2(e,t){let n=tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function H2(e,t){let n=tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function G2(e,t){let n=tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function V2(e,t){e.uniform1iv(this.addr,t)}function k2(e,t){e.uniform2iv(this.addr,t)}function X2(e,t){e.uniform3iv(this.addr,t)}function W2(e,t){e.uniform4iv(this.addr,t)}function q2(e,t){e.uniform1uiv(this.addr,t)}function Y2(e,t){e.uniform2uiv(this.addr,t)}function Z2(e,t){e.uniform3uiv(this.addr,t)}function J2(e,t){e.uniform4uiv(this.addr,t)}function K2(e,t,n){let i=this.cache,s=t.length,a=Rd(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Cd(w1):r=A1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function Q2(e,t,n){let i=this.cache,s=t.length,a=Rd(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||N1,a[r])}function j2(e,t,n){let i=this.cache,s=t.length,a=Rd(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=Cd(R1):r=D1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function $2(e,t,n){let i=this.cache,s=t.length,a=Rd(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||C1,a[r])}function tN(e){switch(e){case 5126:return I2;case 35664:return P2;case 35665:return B2;case 35666:return F2;case 35674:return z2;case 35675:return H2;case 35676:return G2;case 5124:case 35670:return V2;case 35667:case 35671:return k2;case 35668:case 35672:return X2;case 35669:case 35673:return W2;case 5125:return q2;case 36294:return Y2;case 36295:return Z2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return $2}}var K0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O2(n.type)}},Q0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tN(n.type)}},j0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Z0=/(\w+)(\])?(\[|\.)?/g;function u1(e,t){e.seq.push(t),e.map[t.id]=t}function eN(e,t,n){let i=e.name,s=i.length;for(Z0.lastIndex=0;;){let a=Z0.exec(i),r=Z0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){u1(n,c===void 0?new K0(o,e,t):new Q0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new j0(o),u1(n,p)),n=p}}}var $o=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);eN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function h1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var nN=37297,iN=0;function sN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var f1=new Ut;function aN(e){jt._getMatrix(f1,jt.workingColorSpace,e);let t=`mat3( ${f1.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case dc:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function d1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+sN(e.getShaderSource(t),o)}else return a}function rN(e,t){let n=aN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var oN={[S0]:"Linear",[M0]:"Reinhard",[b0]:"Cineon",[T0]:"ACESFilmic",[A0]:"AgX",[w0]:"Neutral",[E0]:"Custom"};function lN(e,t){let n=oN[t];return n===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ed=new I;function cN(){jt.getLuminanceCoefficients(Ed);let e=Ed.x.toFixed(4),t=Ed.y.toFixed(4),n=Ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fc).join(`
`)}function hN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function fN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Fc(e){return e!==""}function p1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function m1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dN=/^[ \t]*#include +<([\w\d./]+)>/gm;function $0(e){return e.replace(dN,pN)}function pN(e,t){let n=Pt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $0(n)}var mN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g1(e){return e.replace(mN,gN)}function gN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var _N={[Rc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function vN(e){return _N[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yN={[Qo]:"ENVMAP_MODE_REFRACTION"};function xN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":yN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SN={[x0]:"ENVMAP_BLENDING_MULTIPLY",[Ob]:"ENVMAP_BLENDING_MIX",[Ib]:"ENVMAP_BLENDING_ADD"};function MN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":SN[e.combine]||"ENVMAP_BLENDING_NONE"}function bN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=vN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xN(n),p=MN(n),u=uN(n),f=hN(a),v=s.createProgram(),b,g,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Fc).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Fc).join(`
`),g.length>0&&(g+=`
`)):(b=[_1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fc).join(`
`),g=[_1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cs?"#define TONE_MAPPING":"",n.toneMapping!==cs?Pt.tonemapping_pars_fragment:"",n.toneMapping!==cs?lN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,rN("linearToOutputTexel",n.outputColorSpace),cN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fc).join(`
`)),r=$0(r),r=p1(r,n),r=m1(r,n),o=$0(o),o=p1(o,n),o=m1(o,n),r=g1(r),o=g1(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",n.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=d+b+r,y=d+g+o,x=h1(s,s.VERTEX_SHADER,m),E=h1(s,s.FRAGMENT_SHADER,y);s.attachShader(v,x),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(e.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(x)||"",q=s.getShaderInfoLog(E)||"",D=O.trim(),X=H.trim(),K=q.trim(),G=!0,nt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,x,E);else{let k=d1(s,x,"vertex"),$=d1(s,E,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+k+`
`+$)}else D!==""?Ct("WebGLProgram: Program Info Log:",D):(X===""||K==="")&&(nt=!1);nt&&(R.diagnostics={runnable:G,programLog:D,vertexShader:{log:X,prefix:b},fragmentShader:{log:K,prefix:g}})}s.deleteShader(x),s.deleteShader(E),_=new $o(s,v),T=fN(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,nN)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iN++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=E,this}var TN=0,t_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new e_(t),n.set(t,i)),i}},e_=class{constructor(t){this.id=TN++,this.code=t,this.usedTimes=0}};function EN(e){return e===Ba||e===Oc||e===Ic}function AN(e,t,n,i,s,a){let r=new _c,o=new t_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,U,R,O,H){let q=R.fog,D=O.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||X,K),nt=u[_.type],k=i.precision;_.precision!==null&&(k=i.getMaxPrecision(_.precision),k!==_.precision&&Ct("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=$!==void 0?$.length:0,Mt=0;D.morphAttributes.position!==void 0&&(Mt=1),D.morphAttributes.normal!==void 0&&(Mt=2),D.morphAttributes.color!==void 0&&(Mt=3);let Bt,Z,mt,yt;if(nt){let dt=hs[nt];Bt=dt.vertexShader,Z=dt.fragmentShader}else{Bt=_.vertexShader,Z=_.fragmentShader;let dt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,dt,oe),mt=dt.id,yt=oe.id}let wt=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),zt=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,Nt=!!_.map,re=!!_.matcap,fe=!!G,Zt=fe&&G.isPMREMTexture===!0,sn=!!_.aoMap,Ge=!!_.lightMap,In=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,Gi=!!_.displacementMap,Ze=!!_.emissiveMap,ri=!!_.metalnessMap,oi=!!_.roughnessMap,li=_.anisotropy>0,L=_.clearcoat>0,ci=_.diffuseRoughness>0,be=_.dispersion>0,Te=_.retroreflectivity>0,ft=_.iridescence>0,Ve=_.sheen>0,Rt=_.transmission>0,Ot=li&&!!_.anisotropyMap,w=L&&!!_.clearcoatMap,S=L&&!!_.clearcoatNormalMap,B=L&&!!_.clearcoatRoughnessMap,et=ci&&!!_.diffuseRoughnessMap,j=ft&&!!_.iridescenceMap,at=ft&&!!_.iridescenceThicknessMap,ut=Ve&&!!_.sheenColorMap,W=Ve&&!!_.sheenRoughnessMap,Y=!!_.specularMap,ot=!!_.specularColorMap,C=!!_.specularIntensityMap,J=Rt&&!!_.transmissionMap,V=Rt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,rt=_.alphaTest>0,Tt=!!_.alphaHash,kt=!!_.extensions,it=cs;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(it=e.toneMapping);let Et=Zt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Gt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:Z,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:zt,instancingColor:zt&&O.instanceColor!==null,instancingMorph:zt&&O.morphTexture!==null,outputColorSpace:wt===null?e.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:re,envMap:fe,envMapMode:fe&&G.mapping,envMapPMREM:Zt,envMapMaxLod:Zt?Et.length-1:null,envMapSize:Zt?Et[0].width:null,aoMap:sn,lightMap:Ge,bumpMap:In,normalMap:we,displacementMap:Gi,emissiveMap:Ze,normalMapObjectSpace:we&&_.normalMapType===Fb,normalMapTangentSpace:we&&_.normalMapType===P0,packedNormalMap:we&&_.normalMapType===P0&&EN(_.normalMap.format),metalnessMap:ri,roughnessMap:oi,anisotropy:li,anisotropyMap:Ot,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:ci,diffuseRoughnessMap:et,dispersion:be,retroreflection:Te,iridescence:ft,iridescenceMap:j,iridescenceThicknessMap:at,sheen:Ve,sheenColorMap:ut,sheenRoughnessMap:W,specularMap:Y,specularColorMap:ot,specularIntensityMap:C,transmission:Rt,transmissionMap:J,thicknessMap:V,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Ko&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:rt,alphaHash:Tt,combine:_.combine,mapUv:Nt&&f(_.map.channel),aoMapUv:sn&&f(_.aoMap.channel),lightMapUv:Ge&&f(_.lightMap.channel),bumpMapUv:In&&f(_.bumpMap.channel),normalMapUv:we&&f(_.normalMap.channel),displacementMapUv:Gi&&f(_.displacementMap.channel),emissiveMapUv:Ze&&f(_.emissiveMap.channel),metalnessMapUv:ri&&f(_.metalnessMap.channel),roughnessMapUv:oi&&f(_.roughnessMap.channel),anisotropyMapUv:Ot&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:W&&f(_.sheenRoughnessMap.channel),specularMapUv:Y&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:V&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(we||li),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(Nt||st),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.filter(dt=>dt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Ze&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===si,flipSided:_.side===On,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:kt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&_.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function b(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)T.push(U),T.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(g(T,_),d(T,_),T.push(e.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function d(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function m(_){let T=u[_.type],U;if(T){let R=hs[T];U=jb.clone(R.uniforms)}else U=_.uniforms;return U}function y(_,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new bN(e,T,_,s),c.push(U),h.set(T,U)),U}function x(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:m,acquireProgram:y,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:A}}function wN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function RN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function v1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function y1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,v,b,g,d){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:d},e[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=v,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=g,m.group=d),t++,m}function l(u,f,v,b,g,d,m){m.reversedDepth===!0&&(g=-g);let y=o(u,f,v,b,g,d);v.transmission>0?i.push(y):v.transparent===!0?s.push(y):n.push(y)}function c(u,f,v,b,g,d){let m=o(u,f,v,b,g,d);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function h(u,f){n.length>1&&n.sort(u||RN),i.length>1&&i.sort(f||v1),s.length>1&&s.sort(f||v1)}function p(){for(let u=t,f=e.length;u<f;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function CN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new y1,e.set(i,[r])):s>=a.length?(r=new y1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function NN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new Vt};break;case"SpotLight":n={position:new I,direction:new I,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function DN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var LN=0;function UN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ON(e){let t=new NN,n=DN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new Ne,r=new Ne;function o(c){let h=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,v=0,b=0,g=0,d=0,m=0,y=0,x=0,E=0,A=0,_=0,T=0,U=0,R=0;c.sort(UN);for(let H=0,q=c.length;H<q;H++){let D=c[H],X=D.color,K=D.intensity,G=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ba?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=X.r*K,p+=X.g*K,u+=X.b*K;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],K);R++}else if(D.isSunLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=tt,i.sunShadowMap[v]=nt;let Mt=$.getViewportCount();for(let Bt=0;Bt<Mt;Bt++)i.sunShadowMatrix[b+Bt]=$.getMatrix(Bt),i.sunShadowCascade[b+Bt]=$._cascadeData[Bt];b+=Mt,v++}i.sun[f]=k,f++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=k,g++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(X).multiplyScalar(K),k.distance=G,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[m]=k;let $=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,$.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[m]=$.matrix,D.castShadow){let tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=nt,_++}m++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(X).multiplyScalar(K),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=k,y++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[d]=tt,i.pointShadowMap[d]=nt,i.pointShadowMatrix[d]=D.shadow.matrix,A++}i.point[d]=k,d++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(K),k.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[x]=k,x++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let O=i.hash;(O.sunLength!==f||O.directionalLength!==g||O.pointLength!==d||O.spotLength!==m||O.rectAreaLength!==y||O.hemiLength!==x||O.numSunShadows!==v||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==_||O.numSpotMaps!==T||O.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=d,i.hemi.length=x,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-U,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=R,O.sunLength=f,O.directionalLength=g,O.pointLength=d,O.spotLength=m,O.rectAreaLength=y,O.hemiLength=x,O.numSunShadows=v,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=_,O.numSpotMaps=T,O.numLightProbes=R,i.version=LN++)}function l(c,h){let p=0,u=0,f=0,v=0,b=0,g=0,d=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),p++}else if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(x.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),v++}else if(x.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),r.identity(),a.copy(x.matrixWorld),a.premultiply(d),r.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(x.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function x1(e){let t=new ON(e),n=[],i=[],s=[];function a(p){h.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function IN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new x1(e),t.set(s,[o])):a>=r.length?(o=new x1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var PN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BN=`uniform sampler2D shadow_pass;
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
}`,FN=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],zN=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],S1=new Ne,Bc=new I,J0=new I;function HN(e,t,n){let i=new yr,s=new At,a=new At,r=new De,o=new Ef,l=new Af,c={},h=n.maxTextureSize,p={[Pa]:On,[On]:Pa,[si]:si},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:PN,fragmentShader:BN}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let v=new os;v.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Un(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let d=this.type;this.render=function(A,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===mb&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rc);let U=e.getRenderTarget(),R=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Sr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let q=d!==this.type;q&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=A.length;D<X;D++){let K=A[D],G=K.shadow;if(G===void 0){Ct("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),a.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,G.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,G.mapSize.y=a.y));let k=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Jo){if(K.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dn(s.x,s.y,{format:Ba,type:zi,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Fs(s.x,s.y,Fi),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Bs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn}else K.isPointLight?(G.map=new zc(s.x),G.map.depthTexture=new Mc(s.x,Bi)):(G.map=new dn(s.x,s.y),G.map.depthTexture=new Fs(s.x,s.y,Bi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Bs,this.type===Rc?(G.map.depthTexture.compareFunction=k?F0:B0,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,T);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:T.layers;for(let Mt=0;Mt<$;Mt++){let Bt=G.getCamera(Mt);if(K.isPointLight){let Z=G.camera,mt=G.matrix,yt=K.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Bc.setFromMatrixPosition(K.matrixWorld),Z.position.copy(Bc),J0.copy(Z.position),J0.add(FN[Mt]),Z.up.copy(zN[Mt]),Z.lookAt(J0),Z.updateMatrixWorld(),mt.makeTranslation(-Bc.x,-Bc.y,-Bc.z),S1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(S1,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,Mt),e.clear();else{Mt===0&&(e.setRenderTarget(G.map),e.clear());let Z=G.getViewport(Mt);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),H.viewport(r)}i=G.getFrustum(Mt),x(_,T,Bt,K,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Jo&&m(G,T),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,e.setRenderTarget(U,R,O)};function m(A,_){let T=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new dn(s.x,s.y,{format:Ba,type:zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(_,null,T,u,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(_,null,T,f,b,null)}function y(A,_,T,U){let R=null,O=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)R=O;else if(R=T.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=R.uuid,q=_.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let X=D[q];X===void 0&&(X=R.clone(),D[q]=X,_.addEventListener("dispose",E)),R=X}if(R.visible=_.visible,R.wireframe=_.wireframe,U===Jo?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=T}return R}function x(A,_,T,U,R,O){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Jo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let D=t.update(A),X=A.material;if(Array.isArray(X)){let K=D.groups;for(let G=0,nt=K.length;G<nt;G++){let k=K[G],$=X[k.materialIndex];if($&&$.visible){let tt=y(A,$,U,O);A.onBeforeShadow(e,A,_,T,D,tt,k),e.renderBufferDirect(T,null,D,tt,A,k),A.onAfterShadow(e,A,_,T,D,tt,k)}}}else if(X.visible){let K=y(A,X,U,O);A.onBeforeShadow(e,A,_,T,D,K,null),e.renderBufferDirect(T,null,D,K,A,null),A.onAfterShadow(e,A,_,T,D,K,null)}}let q=A.children;for(let D=0,X=q.length;D<X;D++)x(q[D],_,T,U,R,O)}function E(A){A.target.removeEventListener("dispose",E);for(let T in c){let U=c[T],R=A.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function GN(e,t){function n(){let C=!1,J=new De,V=null,lt=new De(0,0,0,0);return{setMask:function(st){V!==st&&!C&&(e.colorMask(st,st,st,st),V=st)},setLocked:function(st){C=st},setClear:function(st,rt,Tt,kt,it){it===!0&&(st*=kt,rt*=kt,Tt*=kt),J.set(st,rt,Tt,kt),lt.equals(J)===!1&&(e.clearColor(st,rt,Tt,kt),lt.copy(J))},reset:function(){C=!1,V=null,lt.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,V=null,lt=null,st=null;return{setReversed:function(rt){if(J!==rt){let Tt=t.get("EXT_clip_control");rt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),J=rt;let kt=st;st=null,this.setClear(kt)}},getReversed:function(){return J},setTest:function(rt){rt?gt(e.DEPTH_TEST):zt(e.DEPTH_TEST)},setMask:function(rt){V!==rt&&!C&&(e.depthMask(rt),V=rt)},setFunc:function(rt){if(J&&(rt=Jb[rt]),lt!==rt){switch(rt){case jh:e.depthFunc(e.NEVER);break;case $h:e.depthFunc(e.ALWAYS);break;case tf:e.depthFunc(e.LESS);break;case zo:e.depthFunc(e.LEQUAL);break;case ef:e.depthFunc(e.EQUAL);break;case nf:e.depthFunc(e.GEQUAL);break;case sf:e.depthFunc(e.GREATER);break;case af:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=rt}},setLocked:function(rt){C=rt},setClear:function(rt){st!==rt&&(st=rt,J&&(rt=1-rt),e.clearDepth(rt))},reset:function(){C=!1,V=null,lt=null,st=null,J=!1}}}function s(){let C=!1,J=null,V=null,lt=null,st=null,rt=null,Tt=null,kt=null,it=null;return{setTest:function(Et){C||(Et?gt(e.STENCIL_TEST):zt(e.STENCIL_TEST))},setMask:function(Et){J!==Et&&!C&&(e.stencilMask(Et),J=Et)},setFunc:function(Et,Gt,dt){(V!==Et||lt!==Gt||st!==dt)&&(e.stencilFunc(Et,Gt,dt),V=Et,lt=Gt,st=dt)},setOp:function(Et,Gt,dt){(rt!==Et||Tt!==Gt||kt!==dt)&&(e.stencilOp(Et,Gt,dt),rt=Et,Tt=Gt,kt=dt)},setLocked:function(Et){C=Et},setClear:function(Et){it!==Et&&(e.clearStencil(Et),it=Et)},reset:function(){C=!1,J=null,V=null,lt=null,st=null,rt=null,Tt=null,kt=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,h={},p={},u={},f=new WeakMap,v=[],b=null,g=!1,d=null,m=null,y=null,x=null,E=null,A=null,_=null,T=new Vt(0,0,0),U=0,R=!1,O=null,H=null,q=null,D=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=nt>=2);let $=null,tt={},Mt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Z=new De().fromArray(Mt),mt=new De().fromArray(Bt);function yt(C,J,V,lt){let st=new Uint8Array(4),rt=e.createTexture();e.bindTexture(C,rt),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<V;Tt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(J+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return rt}let wt={};wt[e.TEXTURE_2D]=yt(e.TEXTURE_2D,e.TEXTURE_2D,1),wt[e.TEXTURE_CUBE_MAP]=yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[e.TEXTURE_2D_ARRAY]=yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),wt[e.TEXTURE_3D]=yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(e.DEPTH_TEST),r.setFunc(zo),In(!1),we(p0),gt(e.CULL_FACE),sn(Sr);function gt(C){h[C]!==!0&&(e.enable(C),h[C]=!0)}function zt(C){h[C]!==!1&&(e.disable(C),h[C]=!1)}function Ie(C,J){return u[C]!==J?(e.bindFramebuffer(C,J),u[C]=J,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=J),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=J),!0):!1}function Nt(C,J){let V=v,lt=!1;if(C){V=f.get(J),V===void 0&&(V=[],f.set(J,V));let st=C.textures;if(V.length!==st.length||V[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Tt=st.length;rt<Tt;rt++)V[rt]=e.COLOR_ATTACHMENT0+rt;V.length=st.length,lt=!0}}else V[0]!==e.BACK&&(V[0]=e.BACK,lt=!0);lt&&e.drawBuffers(V)}function re(C){return b!==C?(e.useProgram(C),b=C,!0):!1}let fe={[Mr]:e.FUNC_ADD,[_b]:e.FUNC_SUBTRACT,[vb]:e.FUNC_REVERSE_SUBTRACT};fe[yb]=e.MIN,fe[xb]=e.MAX;let Zt={[Sb]:e.ZERO,[Mb]:e.ONE,[bb]:e.SRC_COLOR,[v0]:e.SRC_ALPHA,[Cb]:e.SRC_ALPHA_SATURATE,[wb]:e.DST_COLOR,[Eb]:e.DST_ALPHA,[Tb]:e.ONE_MINUS_SRC_COLOR,[y0]:e.ONE_MINUS_SRC_ALPHA,[Rb]:e.ONE_MINUS_DST_COLOR,[Ab]:e.ONE_MINUS_DST_ALPHA,[Nb]:e.CONSTANT_COLOR,[Db]:e.ONE_MINUS_CONSTANT_COLOR,[Lb]:e.CONSTANT_ALPHA,[Ub]:e.ONE_MINUS_CONSTANT_ALPHA};function sn(C,J,V,lt,st,rt,Tt,kt,it,Et){if(C===Sr){g===!0&&(zt(e.BLEND),g=!1);return}if(g===!1&&(gt(e.BLEND),g=!0),C!==gb){if(C!==d||Et!==R){if((m!==Mr||E!==Mr)&&(e.blendEquation(e.FUNC_ADD),m=Mr,E=Mr),Et)switch(C){case Ko:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case m0:e.blendFunc(e.ONE,e.ONE);break;case g0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ko:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case m0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case g0:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",C);break}y=null,x=null,A=null,_=null,T.set(0,0,0),U=0,d=C,R=Et}return}st=st||J,rt=rt||V,Tt=Tt||lt,(J!==m||st!==E)&&(e.blendEquationSeparate(fe[J],fe[st]),m=J,E=st),(V!==y||lt!==x||rt!==A||Tt!==_)&&(e.blendFuncSeparate(Zt[V],Zt[lt],Zt[rt],Zt[Tt]),y=V,x=lt,A=rt,_=Tt),(kt.equals(T)===!1||it!==U)&&(e.blendColor(kt.r,kt.g,kt.b,it),T.copy(kt),U=it),d=C,R=!1}function Ge(C,J){C.side===si?zt(e.CULL_FACE):gt(e.CULL_FACE);let V=C.side===On;J&&(V=!V),In(V),C.blending===Ko&&C.transparent===!1?sn(Sr):sn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):zt(e.SAMPLE_ALPHA_TO_COVERAGE)}function In(C){O!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),O=C)}function we(C){C!==db?(gt(e.CULL_FACE),C!==H&&(C===p0?e.cullFace(e.BACK):C===pb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):zt(e.CULL_FACE),H=C}function Gi(C){C!==q&&(G&&e.lineWidth(C),q=C)}function Ze(C,J,V){C?(gt(e.POLYGON_OFFSET_FILL),(D!==J||X!==V)&&(D=J,X=V,r.getReversed()&&(J=-J,V=-V),e.polygonOffset(J,V))):zt(e.POLYGON_OFFSET_FILL)}function ri(C){C?gt(e.SCISSOR_TEST):zt(e.SCISSOR_TEST)}function oi(C){C===void 0&&(C=e.TEXTURE0+K-1),$!==C&&(e.activeTexture(C),$=C)}function li(C,J,V){V===void 0&&($===null?V=e.TEXTURE0+K-1:V=$);let lt=tt[V];lt===void 0&&(lt={type:void 0,texture:void 0},tt[V]=lt),(lt.type!==C||lt.texture!==J)&&($!==V&&(e.activeTexture(V),$=V),e.bindTexture(C,J||wt[C]),lt.type=C,lt.texture=J)}function L(){let C=tt[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ci(){try{e.compressedTexImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Te(){try{e.texSubImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function ft(){try{e.texSubImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Ve(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Ot(){try{e.texStorage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function w(){try{e.texStorage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function S(){try{e.texImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function B(){try{e.texImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function et(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function j(C,J){p[C]!==J&&(e.pixelStorei(C,J),p[C]=J)}function at(C){Z.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ut(C){mt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function W(C,J){let V=c.get(J);V===void 0&&(V=new WeakMap,c.set(J,V));let lt=V.get(C);lt===void 0&&(lt=e.getUniformBlockIndex(J,C.name),e.uniformBlockBinding(J,lt,lt),V.set(C,lt))}function Y(C,J,V){let st=c.get(J).get(C);l[st]!==V&&(e.bindBufferBase(e.UNIFORM_BUFFER,st,V),l[st]=V)}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,tt={},u={},l={},f=new WeakMap,v=[],b=null,g=!1,d=null,m=null,y=null,x=null,E=null,A=null,_=null,T=new Vt(0,0,0),U=0,R=!1,O=null,H=null,q=null,D=null,X=null,Z.set(0,0,e.canvas.width,e.canvas.height),mt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:gt,disable:zt,bindFramebuffer:Ie,drawBuffers:Nt,useProgram:re,setBlending:sn,setMaterial:Ge,setFlipSided:In,setCullFace:we,setLineWidth:Gi,setPolygonOffset:Ze,setScissorTest:ri,activeTexture:oi,bindTexture:li,unbindTexture:L,compressedTexImage2D:ci,compressedTexImage3D:be,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:et,updateUBOMapping:W,uniformBlockBinding:Y,texStorage2D:Ot,texStorage3D:w,texSubImage2D:Te,texSubImage3D:ft,compressedTexSubImage2D:Ve,compressedTexSubImage3D:Rt,scissor:at,viewport:ut,reset:ot}}function VN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,p=new Set,u,f=new WeakMap,v=new Set,b=new FinalizationRegistry(w=>v.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,S){return g?new OffscreenCanvas(w,S):mc("canvas")}function m(w,S,B){let et=1,j=Ot(w);if((j.width>B||j.height>B)&&(et=B/Math.max(j.width,j.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let at=Math.floor(et*j.width),ut=Math.floor(et*j.height);u===void 0&&(u=d(at,ut));let W=S?d(at,ut):u;return W.width=at,W.height=ut,W.getContext("2d").drawImage(w,0,0,at,ut),Ct("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ut+")."),W}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,S,B,et,j,at=!1){if(w!==null){if(e[w]!==void 0)return e[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===e.RED&&(B===e.FLOAT&&(W=e.R32F),B===e.HALF_FLOAT&&(W=e.R16F),B===e.UNSIGNED_BYTE&&(W=e.R8),B===e.UNSIGNED_SHORT&&ut&&(W=ut.R16_EXT),B===e.SHORT&&ut&&(W=ut.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.R8UI),B===e.UNSIGNED_SHORT&&(W=e.R16UI),B===e.UNSIGNED_INT&&(W=e.R32UI),B===e.BYTE&&(W=e.R8I),B===e.SHORT&&(W=e.R16I),B===e.INT&&(W=e.R32I)),S===e.RG&&(B===e.FLOAT&&(W=e.RG32F),B===e.HALF_FLOAT&&(W=e.RG16F),B===e.UNSIGNED_BYTE&&(W=e.RG8),B===e.UNSIGNED_SHORT&&ut&&(W=ut.RG16_EXT),B===e.SHORT&&ut&&(W=ut.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RG8UI),B===e.UNSIGNED_SHORT&&(W=e.RG16UI),B===e.UNSIGNED_INT&&(W=e.RG32UI),B===e.BYTE&&(W=e.RG8I),B===e.SHORT&&(W=e.RG16I),B===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RGB8UI),B===e.UNSIGNED_SHORT&&(W=e.RGB16UI),B===e.UNSIGNED_INT&&(W=e.RGB32UI),B===e.BYTE&&(W=e.RGB8I),B===e.SHORT&&(W=e.RGB16I),B===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),B===e.UNSIGNED_INT&&(W=e.RGBA32UI),B===e.BYTE&&(W=e.RGBA8I),B===e.SHORT&&(W=e.RGBA16I),B===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&ut&&(W=ut.RGB16_EXT),B===e.SHORT&&ut&&(W=ut.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){let Y=at?dc:jt.getTransfer(j);B===e.FLOAT&&(W=e.RGBA32F),B===e.HALF_FLOAT&&(W=e.RGBA16F),B===e.UNSIGNED_BYTE&&(W=Y===ae?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ut&&(W=ut.RGBA16_EXT),B===e.SHORT&&ut&&(W=ut.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(w,S){let B;return w?S===null||S===Bi||S===Tr?B=e.DEPTH24_STENCIL8:S===Fi?B=e.DEPTH32F_STENCIL8:S===jo&&(B=e.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bi||S===Tr?B=e.DEPTH_COMPONENT24:S===Fi?B=e.DEPTH_COMPONENT32F:S===jo&&(B=e.DEPTH_COMPONENT16),B}function T(w,S){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function U(w){let S=new WeakRef(w);i.get(w).__ref=S,v.add(S),b.register(w,S,S)}function R(w){let S=i.get(w).__ref;S!==void 0&&(v.delete(S),b.unregister(S))}function O(w){q(w.target)}function H(w){D(w.target)}function q(w){w.removeEventListener("dispose",O),R(w),K(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&p.delete(w)}function D(w){w.removeEventListener("dispose",H),R(w),nt(w)}function X(){for(let w of v){let S=w.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):q(S))}v.clear(),p.clear()}function K(w){let S=i.get(w);if(S.__webglInit===void 0)return;let B=w.source,et=f.get(B);if(et){let j=et[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(w),Object.keys(et).length===0&&f.delete(B)}i.remove(w)}function G(w){let S=i.get(w);e.deleteTexture(S.__webglTexture);let B=w.source,et=f.get(B);delete et[S.__cacheKey],r.memory.textures--}function nt(w){let S=i.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&q(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let at=0;at<S.__webglFramebuffer[j].length;at++)e.deleteFramebuffer(S.__webglFramebuffer[j][at]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let et=w.textures;for(let j=0,at=et.length;j<at;j++){let ut=i.get(et[j]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(et[j])}i.remove(w)}let k=0;function $(){k=0}function tt(){return k}function Mt(w){k=w}function Bt(){let w=k;return w>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,w}function Z(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function mt(w,S){let B=i.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let et=w.image;if(et===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function yt(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Ge(B,w,S);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function wt(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Ge(B,w,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function gt(w,S){let B=i.get(w);if(w.version>0&&B.__version!==w.version){In(B,w,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let zt={[rf]:e.REPEAT,[ss]:e.CLAMP_TO_EDGE,[of]:e.MIRRORED_REPEAT},Ie={[nn]:e.NEAREST,[Pb]:e.NEAREST_MIPMAP_NEAREST,[Cc]:e.NEAREST_MIPMAP_LINEAR,[Ln]:e.LINEAR,[Gf]:e.LINEAR_MIPMAP_NEAREST,[Hs]:e.LINEAR_MIPMAP_LINEAR},Nt={[Hb]:e.NEVER,[z0]:e.ALWAYS,[Gb]:e.LESS,[B0]:e.LEQUAL,[Vb]:e.EQUAL,[F0]:e.GEQUAL,[kb]:e.GREATER,[Xb]:e.NOTEQUAL};function re(w,S){if(S.type===Fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ln||S.magFilter===Gf||S.magFilter===Cc||S.magFilter===Hs||S.minFilter===Ln||S.minFilter===Gf||S.minFilter===Cc||S.minFilter===Hs)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,zt[S.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,zt[S.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,zt[S.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Ie[S.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Ie[S.minFilter]),S.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Cc&&S.minFilter!==Hs||S.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",O),U(S));let et=S.source,j=f.get(et);j===void 0&&(j={},f.set(et,j));let at=Z(S);if(at!==w.__cacheKey){j[at]===void 0&&(j[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[at].usedTimes++;let ut=j[w.__cacheKey];ut!==void 0&&(j[w.__cacheKey].usedTimes--,ut.usedTimes===0&&G(S)),w.__cacheKey=at,w.__webglTexture=j[at].texture}return B}function Zt(w,S,B){return Math.floor(Math.floor(w/B)/S)}function sn(w,S,B,et){let at=w.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,et,S.data);else{at.sort((C,J)=>C.start-J.start);let ut=0;for(let C=1;C<at.length;C++){let J=at[ut],V=at[C],lt=J.start+J.count,st=Zt(V.start,S.width,4),rt=Zt(J.start,S.width,4);V.start<=lt+1&&st===rt&&Zt(V.start+V.count-1,S.width,4)===st?J.count=Math.max(J.count,V.start+V.count-J.start):(++ut,at[ut]=V)}at.length=ut+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let C=0,J=at.length;C<J;C++){let V=at[C],lt=Math.floor(V.start/4),st=Math.ceil(V.count/4),rt=lt%S.width,Tt=Math.floor(lt/S.width),kt=st,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Tt),n.texSubImage2D(e.TEXTURE_2D,0,rt,Tt,kt,it,B,et,S.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function Ge(w,S,B){let et=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=e.TEXTURE_3D);let j=fe(w,S),at=S.source;n.bindTexture(et,w.__webglTexture,e.TEXTURE0+B);let ut=i.get(at);if(at.version!==ut.__version||j===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let it=jt.getPrimaries(jt.workingColorSpace),Et=S.colorSpace===Vs?null:jt.getPrimaries(S.colorSpace),Gt=S.colorSpace===Vs||it===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=m(S.image,!1,s.maxTextureSize);Y=Rt(S,Y);let ot=a.convert(S.format,S.colorSpace),C=a.convert(S.type),J=A(S.internalFormat,ot,C,S.normalized,S.colorSpace,S.isVideoTexture);re(et,S);let V,lt=S.mipmaps,st=S.isVideoTexture!==!0,rt=ut.__version===void 0||j===!0,Tt=at.dataReady,kt=T(S,Y);if(S.isDepthTexture)J=_(S.format===Gs,S.type),rt&&(st?n.texStorage2D(e.TEXTURE_2D,1,J,Y.width,Y.height):n.texImage2D(e.TEXTURE_2D,0,J,Y.width,Y.height,0,ot,C,null));else if(S.isDataTexture)if(lt.length>0){st&&rt&&n.texStorage2D(e.TEXTURE_2D,kt,J,lt[0].width,lt[0].height);for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,C,V.data):n.texImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,ot,C,V.data);S.generateMipmaps=!1}else st?(rt&&n.texStorage2D(e.TEXTURE_2D,kt,J,Y.width,Y.height),Tt&&sn(S,Y,ot,C)):n.texImage2D(e.TEXTURE_2D,0,J,Y.width,Y.height,0,ot,C,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,kt,J,lt[0].width,lt[0].height,Y.depth);for(let it=0,Et=lt.length;it<Et;it++)if(V=lt[it],S.format!==Hi)if(ot!==null)if(st){if(Tt)if(S.layerUpdates.size>0){let Gt=Y0(V.width,V.height,S.format,S.type);for(let dt of S.layerUpdates){let oe=V.data.subarray(dt*Gt/V.data.BYTES_PER_ELEMENT,(dt+1)*Gt/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,dt,V.width,V.height,1,ot,oe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,V.width,V.height,Y.depth,ot,V.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,J,V.width,V.height,Y.depth,0,V.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,V.width,V.height,Y.depth,ot,C,V.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,J,V.width,V.height,Y.depth,0,ot,C,V.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{st&&rt&&n.texStorage2D(e.TEXTURE_2D,kt,J,lt[0].width,lt[0].height);for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],S.format!==Hi?ot!==null?st?Tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,V.data):n.compressedTexImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,V.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,C,V.data):n.texImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,ot,C,V.data)}else if(S.isDataArrayTexture)if(st){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,kt,J,Y.width,Y.height,Y.depth),Tt)if(S.layerUpdates.size>0){let it=Y0(Y.width,Y.height,S.format,S.type);for(let Et of S.layerUpdates){let Gt=Y.data.subarray(Et*it/Y.data.BYTES_PER_ELEMENT,(Et+1)*it/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Et,Y.width,Y.height,1,ot,C,Gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ot,C,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,J,Y.width,Y.height,Y.depth,0,ot,C,Y.data);else if(S.isData3DTexture)st?(rt&&n.texStorage3D(e.TEXTURE_3D,kt,J,Y.width,Y.height,Y.depth),Tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ot,C,Y.data)):n.texImage3D(e.TEXTURE_3D,0,J,Y.width,Y.height,Y.depth,0,ot,C,Y.data);else if(S.isFramebufferTexture){if(rt)if(st)n.texStorage2D(e.TEXTURE_2D,kt,J,Y.width,Y.height);else{let it=Y.width,Et=Y.height;for(let Gt=0;Gt<kt;Gt++)n.texImage2D(e.TEXTURE_2D,Gt,J,it,Et,0,ot,C,null),it>>=1,Et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Y.parentNode!==it){it.appendChild(Y),p.add(S),it.onpaint=Et=>{let Gt=Et.changedElements;for(let dt of p)Gt.includes(dt.image)&&(dt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Y);else{let Gt=e.RGBA,dt=e.RGBA,oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Gt,dt,oe,Y)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&rt){let it=Ot(lt[0]);n.texStorage2D(e.TEXTURE_2D,kt,J,it.width,it.height)}for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,C,V):n.texImage2D(e.TEXTURE_2D,it,J,ot,C,V);S.generateMipmaps=!1}else if(st){if(rt){let it=Ot(Y);n.texStorage2D(e.TEXTURE_2D,kt,J,it.width,it.height)}Tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,C,Y)}else n.texImage2D(e.TEXTURE_2D,0,J,ot,C,Y);y(S)&&S.mipmapsAutoUpdate===!0&&x(et),ut.__version=at.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function In(w,S,B){if(S.image.length!==6)return;let et=fe(w,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let at=i.get(j);if(j.version!==at.__version||et===!0){n.activeTexture(e.TEXTURE0+B);let ut=jt.getPrimaries(jt.workingColorSpace),W=S.colorSpace===Vs?null:jt.getPrimaries(S.colorSpace),Y=S.colorSpace===Vs||ut===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ot=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,J=[];for(let dt=0;dt<6;dt++)!ot&&!C?J[dt]=m(S.image[dt],!0,s.maxCubemapSize):J[dt]=C?S.image[dt].image:S.image[dt],J[dt]=Rt(S,J[dt]);let V=J[0],lt=a.convert(S.format,S.colorSpace),st=a.convert(S.type),rt=A(S.internalFormat,lt,st,S.normalized,S.colorSpace),Tt=S.isVideoTexture!==!0,kt=at.__version===void 0||et===!0,it=j.dataReady,Et=T(S,V);re(e.TEXTURE_CUBE_MAP,S);let Gt;if(S.isDepthTexture){if(rt=_(S.format===Gs,S.type),kt)if(Tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,rt,V.width,V.height);else for(let dt=0;dt<6;dt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,V.width,V.height,0,lt,st,null)}else if(ot){Tt&&kt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,rt,V.width,V.height);for(let dt=0;dt<6;dt++){Gt=J[dt].mipmaps;for(let oe=0;oe<Gt.length;oe++){let Je=Gt[oe];S.format!==Hi?lt!==null?Tt?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,0,0,Je.width,Je.height,lt,Je.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,rt,Je.width,Je.height,0,Je.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,0,0,Je.width,Je.height,lt,st,Je.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,rt,Je.width,Je.height,0,lt,st,Je.data)}}}else{if(Gt=S.mipmaps,Tt&&kt){Gt.length>0&&Et++;let dt=Ot(J[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,rt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(C){Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,J[dt].width,J[dt].height,lt,st,J[dt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,J[dt].width,J[dt].height,0,lt,st,J[dt].data);for(let oe=0;oe<Gt.length;oe++){let Ws=Gt[oe].image[dt].image;Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,0,0,Ws.width,Ws.height,lt,st,Ws.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,rt,Ws.width,Ws.height,0,lt,st,Ws.data)}}else{Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,lt,st,J[dt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,lt,st,J[dt]);for(let oe=0;oe<Gt.length;oe++){let Je=Gt[oe];Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,0,0,lt,st,Je.image[dt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,rt,lt,st,Je.image[dt])}}}y(S)&&S.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),at.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function we(w,S,B,et,j,at){let ut=a.convert(B.format,B.colorSpace),W=a.convert(B.type),Y=A(B.internalFormat,ut,W,B.normalized,B.colorSpace),ot=i.get(S),C=i.get(B);if(C.__renderTarget=S,!ot.__hasExternalTextures){let J=Math.max(1,S.width>>at),V=Math.max(1,S.height>>at);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,at,Y,J,V,S.depth,0,ut,W,null):n.texImage2D(j,at,Y,J,V,0,ut,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,j,C.__webglTexture,0,Te(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,j,C.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Gi(w,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),S.depthBuffer){let et=S.depthTexture,j=et&&et.isDepthTexture?et.type:null,at=_(S.stencilBuffer,j),ut=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),at,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,w)}else{let et=S.textures;for(let j=0;j<et.length;j++){let at=et[j],ut=a.convert(at.format,at.colorSpace),W=a.convert(at.type),Y=A(at.internalFormat,ut,W,at.normalized,at.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),Y,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ze(w,S,B){let et=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let at=et?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||at.width!==S.width||at.height!==S.height)&&(at.width=S.width,at.height=S.height,S.depthTexture.needsUpdate=!0),et?gt(S.depthTexture,0):mt(S.depthTexture,0);let ut=j.__webglTexture,W=Te(S),Y=et?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ot=S.depthTexture.format===Gs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Bs)ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,Y,ut,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,ot,Y,ut,0);else if(S.depthTexture.format===Gs)ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,Y,ut,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,ot,Y,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ri(w){let S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let et=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",j)};et.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=et}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let et=0;et<6;et++)Ze(S.__webglFramebuffer[et],w,et);else w.texture.mipmaps.length>0?Ze(S.__webglFramebuffer[0],w,0):Ze(S.__webglFramebuffer,w,0);else if(B){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=e.createRenderbuffer(),Gi(S.__webglDepthbuffer[et],w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[et];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Gi(S.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oi(w,S,B){let et=i.get(w);S!==void 0&&we(et.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ri(w)}function li(w){let S=w.texture,B=i.get(w),et=i.get(S);w.addEventListener("dispose",H),U(w);let j=w.textures,at=w.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=S.version,r.memory.textures++),at){B.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps.length>0){B.__webglFramebuffer[W]=[];for(let Y=0;Y<S.mipmaps.length;Y++)B.__webglFramebuffer[W][Y]=e.createFramebuffer()}else B.__webglFramebuffer[W]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)B.__webglFramebuffer[W]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ut)for(let W=0,Y=j.length;W<Y;W++){let ot=i.get(j[W]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&ft(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let W=0;W<j.length;W++){let Y=j[W];B.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[W]);let ot=a.convert(Y.format,Y.colorSpace),C=a.convert(Y.type),J=A(Y.internalFormat,ot,C,Y.normalized,Y.colorSpace,w.isXRRenderTarget===!0),V=Te(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,V,J,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,B.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Gi(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),re(e.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)we(B.__webglFramebuffer[W][Y],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else we(B.__webglFramebuffer[W],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);y(S)?x(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ut){for(let W=0,Y=j.length;W<Y;W++){let ot=j[W],C=i.get(ot),J=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,C.__webglTexture),re(J,ot),we(B.__webglFramebuffer,w,ot,e.COLOR_ATTACHMENT0+W,J,0),y(ot)&&x(J)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(W=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,et.__webglTexture),re(W,S),S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)we(B.__webglFramebuffer[Y],w,S,e.COLOR_ATTACHMENT0,W,Y);else we(B.__webglFramebuffer,w,S,e.COLOR_ATTACHMENT0,W,0);y(S)?x(W):S.mipmaps.length>0&&e.texParameteri(W,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&ri(w)}function L(w){let S=w.textures;for(let B=0,et=S.length;B<et;B++){let j=S[B];if(y(j)&&j.mipmapsAutoUpdate===!0){let at=E(w),ut=i.get(j).__webglTexture;n.bindTexture(at,ut),x(at),n.unbindTexture()}}}let ci=[];function be(w){if(w.samples>0){if(ft(w)===!1){let S=w.textures,B=w.width,et=w.height,j=e.COLOR_BUFFER_BIT,at=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(w),W=S.length>1;if(W)for(let ot=0;ot<S.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ot=0;ot<S.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,B,et,0,0,B,et,j,e.NEAREST),l===!0&&(ci.length=0,ci.push(e.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ci.push(at),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ci))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let ot=0;ot<S.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let S=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(w){return Math.min(s.maxSamples,w.samples)}function ft(w){let S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(w){let S=r.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Rt(w,S){let B=w.colorSpace,et=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==_r&&B!==Vs&&(jt.getTransfer(B)===ae?(et!==Hi||j!==ai)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),S}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=Mt,this.setTexture2D=mt,this.setTexture2DArray=yt,this.setTexture3D=wt,this.setTextureCube=gt,this.rebindTextures=oi,this.setupRenderTarget=li,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ri,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ft,this.dispose=X}function kN(e,t){function n(i,s=Vs){let a,r=jt.getTransfer(s);if(i===ai)return e.UNSIGNED_BYTE;if(i===kf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Xf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===D0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===C0)return e.BYTE;if(i===N0)return e.SHORT;if(i===jo)return e.UNSIGNED_SHORT;if(i===Vf)return e.INT;if(i===Bi)return e.UNSIGNED_INT;if(i===Fi)return e.FLOAT;if(i===zi)return e.HALF_FLOAT;if(i===U0)return e.ALPHA;if(i===O0)return e.RGB;if(i===Hi)return e.RGBA;if(i===Bs)return e.DEPTH_COMPONENT;if(i===Gs)return e.DEPTH_STENCIL;if(i===I0)return e.RED;if(i===Wf)return e.RED_INTEGER;if(i===Ba)return e.RG;if(i===qf)return e.RG_INTEGER;if(i===Yf)return e.RGBA_INTEGER;if(i===Nc||i===Dc||i===Lc||i===Uc)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Jf||i===Kf||i===Qf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Zf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jf||i===$f||i===td||i===ed||i===nd||i===Oc||i===id)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===jf||i===$f)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===td)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ed)return a.COMPRESSED_R11_EAC;if(i===nd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Oc)return a.COMPRESSED_RG11_EAC;if(i===id)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sd||i===ad||i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd||i===md||i===gd||i===_d)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===sd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ad)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===md)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_d)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vd||i===yd||i===xd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===vd)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sd||i===Md||i===Ic||i===bd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Sd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Md)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var XN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WN=`
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

}`,n_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new bc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new pn({vertexShader:XN,fragmentShader:WN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Un(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},i_=class extends as{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,v=null,b=typeof XRWebGLBinding<"u",g=new n_,d={},m=n.getContextAttributes(),y=null,x=null,E=[],A=[],_=new At,T=null,U=null,R=new Nn;R.viewport=new De;let O=new Nn;O.viewport=new De;let H=[R,O],q=new Ff,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Vo,E[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Vo,E[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Vo,E[Z]=mt),mt.getHandSpace()};function K(Z){let mt=A.indexOf(Z.inputSource);if(mt===-1)return;let yt=E[mt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<E.length;Z++){let mt=A[Z];mt!==null&&(A[Z]=null,E[Z].disconnect(mt))}D=null,X=null,g.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(y),f=null,u=null,p=null,s=null,x=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),U!==null){let Z=U.camera;Z.fov=U.fov,Z.zoom=U.zoom,Z.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,gt=null;m.depth&&(gt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=m.stencil?Gs:Bs,wt=m.stencil?Tr:Bi);let zt={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new dn(u.textureWidth,u.textureHeight,{format:Hi,type:ai,depthTexture:new Fs(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new dn(f.framebufferWidth,f.framebufferHeight,{format:Hi,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Z){for(let mt=0;mt<Z.removed.length;mt++){let yt=Z.removed[mt],wt=A.indexOf(yt);wt>=0&&(A[wt]=null,E[wt].disconnect(yt))}for(let mt=0;mt<Z.added.length;mt++){let yt=Z.added[mt],wt=A.indexOf(yt);if(wt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=A.length){A.push(yt),wt=zt;break}else if(A[zt]===null){A[zt]=yt,wt=zt;break}if(wt===-1)break}let gt=E[wt];gt&&gt.connect(yt)}}function k(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let mt=Z.near,yt=Z.far;g.texture!==null&&(g.depthNear>0&&(mt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),q.near=O.near=R.near=mt,q.far=O.far=R.far=yt,(D!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),D=q.near,X=q.far),q.layers.mask=Z.layers.mask|6,R.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let wt=Z.parent,gt=q.cameras;k(q,wt);for(let zt=0;zt<gt.length;zt++)k(gt[zt],wt);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&Z.isPerspectiveCamera&&(U={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,q,wt)};function $(Z,mt,yt){yt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(Z){return d[Z]};let tt=null;function Mt(Z,mt){if(h=mt.getViewerPose(c||r),v=mt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let wt=!1;yt.length!==q.cameras.length&&(q.cameras.length=0,wt=!0);for(let Nt=0;Nt<yt.length;Nt++){let re=yt[Nt],fe=null;if(f!==null)fe=f.getViewport(re);else{let sn=p.getViewSubImage(u,re);fe=sn.viewport,Nt===0&&(t.setRenderTargetTextures(x,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(x))}let Zt=H[Nt];Zt===void 0&&(Zt=new Nn,Zt.layers.enable(Nt),Zt.viewport=new De,H[Nt]=Zt),Zt.matrix.fromArray(re.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(re.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(fe.x,fe.y,fe.width,fe.height),Nt===0&&(q.matrix.copy(Zt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),wt===!0&&q.cameras.push(Zt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Nt=p.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,s.renderState)}if(gt&&gt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Nt=0;Nt<yt.length;Nt++){let re=yt[Nt].camera;if(re){let fe=d[re];fe||(fe=new bc,d[re]=fe);let Zt=p.getCameraImage(re);fe.sourceTexture=Zt}}}}for(let yt=0;yt<E.length;yt++){let wt=A[yt],gt=E[yt];wt!==null&&gt!==void 0&&gt.update(wt,mt,c||r)}tt&&tt(Z,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),v=null}let Bt=new M1;Bt.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}},qN=new Ne,L1=new Ut;L1.set(-1,0,0,0,1,0,0,0,1);function YN(e,t){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,X0(e)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,m,y,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(g,d):d.isMeshLambertMaterial?(a(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(g,d),p(g,d)):d.isMeshPhongMaterial?(a(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(g,d),u(g,d),d.isMeshPhysicalMaterial&&f(g,d,x)):d.isMeshMatcapMaterial?(a(g,d),v(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),b(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===On&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===On&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=t.get(d),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(qN.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(L1),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,m){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===On&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){let m=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZN(e,t,n,i){let s={},a={};function r(m,y){let x=y.program;i.uniformBlockBinding(m,x,s[m.id])}function o(m,y){let x=s[m.id];x===void 0&&(v(m),x=l(m),s[m.id]=x,m.addEventListener("dispose",g));let E=y.program;i.updateUBOMapping(m,E);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let y=e.createBuffer(),x=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,x,E),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(m){let y=s[m.id],x=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let A=0,_=x.length;A<_;A++){let T=x[A];if(Array.isArray(T))for(let U=0,R=T.length;U<R;U++)h(T[U],A,U,E);else h(T,A,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,y,x,E){if(u(m,y,x,E)===!0){let A=m.__offset,_=m.value;if(Array.isArray(_)){let T=0;for(let U=0;U<_.length;U++){let R=_[U],O=b(R,!0);p(R,m.__data,T),T+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,y,x){typeof m=="number"||typeof m=="boolean"?y[x]=m:m.isMatrix3?(y[x]=m.elements[0],y[x+1]=m.elements[1],y[x+2]=m.elements[2],y[x+3]=0,y[x+4]=m.elements[3],y[x+5]=m.elements[4],y[x+6]=m.elements[5],y[x+7]=0,y[x+8]=m.elements[6],y[x+9]=m.elements[7],y[x+10]=m.elements[8],y[x+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-x),x):m.toArray(y,x)}function u(m,y,x,E){let A=m.value,_=y+"_"+x;if(Array.isArray(A)){E[_]===void 0&&(E[_]=[]);let T=E[_],U=!1;for(let R=0;R<A.length;R++)f(A[R],T,R)===!0&&(U=!0);return U}return f(A,E,_)}function f(m,y,x){if(y[x]===void 0)return typeof m=="number"||typeof m=="boolean"?y[x]=m:ArrayBuffer.isView(m)?y[x]=m.slice():y[x]=m.clone(),!0;{let E=y[x];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return y[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let y=m.uniforms,x=0,E=16;for(let _=0,T=y.length;_<T;_++){let U=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,O=U.length;R<O;R++){let H=U[R],q=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(y[_])||Array.isArray(H.value),X=x;for(let G=0,nt=q.length;G<nt;G++){let k=q[G],$=b(k,D),tt=x%E,Mt=tt%$.boundary,Bt=tt+Mt;x+=Mt,Bt!==0&&E-Bt<$.storage&&(x+=E-Bt),G===0&&(X=x),x+=$.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((x-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}let A=x%E;return A>0&&(x+=E-A),m.__size=x,m.__cache={},this}function b(m,y){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(m){let y=m.target;y.removeEventListener("dispose",g),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function d(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:d}}var JN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;function KN(){return us===null&&(us=new mf(JN,16,16,Ba,zi),us.name="DFG_LUT",us.minFilter=Ln,us.magFilter=Ln,us.wrapS=ss,us.wrapT=ss,us.generateMipmaps=!1,us.needsUpdate=!0),us}var wd=class{constructor(t={}){let{canvas:n=qb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ai}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=f,g=new Set([Yf,qf,Wf]),d=new Set([ai,Bi,jo,Tr,kf,Xf]),m=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},E=null,A=null,_=[],T=[],U=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,O=!1,H=null,q=null,D=null,X=null;this._outputColorSpace=Cn;let K=0,G=0,nt=null,k=-1,$=null,tt=new De,Mt=new De,Bt=null,Z=new Vt(0),mt=0,yt=n.width,wt=n.height,gt=1,zt=null,Ie=null,Nt=new De(0,0,yt,wt),re=new De(0,0,yt,wt),fe=!1,Zt=new yr,sn=new gf,Ge=!1,In=!1,we=new Ne,Gi=new I,Ze=new De,ri={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oi=!1;function li(){return nt===null?gt:1}let L=i;function ci(M,N){return n.getContext(M,N)}let be,Te,ft,Ve,Rt,Ot,w,S,B,et,j,at,ut,W,Y,ot,C,J,V,lt,st,rt,Tt;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Gt,!1),n.addEventListener("webglcontextcreationerror",dt,!1),L===null){let N="webgl2";if(L=ci(N,M),L===null)throw ci(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(M){throw n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Lt("WebGLRenderer: "+M.message),M}function kt(){be=new o2(L),be.init(),st=new kN(L,be),Te=new K3(L,be,t,st),ft=new GN(L,be),Te.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),q=L.createFramebuffer(),D=L.createFramebuffer(),X=L.createFramebuffer(),Ve=new u2(L),Rt=new wN,Ot=new VN(L,be,ft,Rt,Te,st,Ve),w=new r2(R),S=new fR(L),rt=new Z3(L,S),B=new l2(L,S,Ve,rt),et=new f2(L,B,S,rt,Ve),J=new h2(L,Te,Ot),Y=new Q3(Rt),j=new AN(R,w,be,Te,rt,Y),at=new YN(R,Rt),ut=new CN,W=new IN(be),C=new Y3(R,w,ft,et,v,l),ot=new HN(R,et,Te),Tt=new ZN(L,Ve,Te,ft),V=new J3(L,be,Ve),lt=new c2(L,be,Ve),Ve.programs=j.programs,R.capabilities=Te,R.extensions=be,R.properties=Rt,R.renderLists=ut,R.shadowMap=ot,R.state=ft,R.info=Ve}b!==ai&&(U=new p2(b,n.width,n.height,o,s,a));let it=new i_(R,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){M!==void 0&&(gt=M,this.setSize(yt,wt,!1))},this.getSize=function(M){return M.set(yt,wt)},this.setSize=function(M,N,z=!0){if(it.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=M,wt=N,n.width=Math.floor(M*gt),n.height=Math.floor(N*gt),z===!0&&(n.style.width=M+"px",n.style.height=N+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(yt*gt,wt*gt).floor()},this.setDrawingBufferSize=function(M,N,z){yt=M,wt=N,gt=z,n.width=Math.floor(M*z),n.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===ai){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Nt)},this.setViewport=function(M,N,z,P){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,N,z,P),ft.viewport(tt.copy(Nt).multiplyScalar(li()).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,N,z,P){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,N,z,P),ft.scissor(Mt.copy(re).multiplyScalar(li()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){ft.setScissorTest(fe=M)},this.setOpaqueSort=function(M){zt=M},this.setTransparentSort=function(M){Ie=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,z=!0){let P=0;if(M){let F=!1;if(nt!==null){let ht=nt.texture.format;F=g.has(ht)}if(F){let ht=nt.texture.type,vt=d.has(ht),ct=C.getClearColor(),_t=C.getClearAlpha(),bt=ct.r,Ft=ct.g,Jt=ct.b;vt?(m[0]=bt,m[1]=Ft,m[2]=Jt,m[3]=_t,L.clearBufferuiv(L.COLOR,0,m)):(y[0]=bt,y[1]=Ft,y[2]=Jt,y[3]=_t,L.clearBufferiv(L.COLOR,0,y))}else P|=L.COLOR_BUFFER_BIT}N&&(P|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(P|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&L.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Gt,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),C.dispose(),ut.dispose(),W.dispose(),Ot.dispose(),Rt.dispose(),w.dispose(),et.dispose(),B.dispose(),rt.dispose(),Tt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",h_),it.removeEventListener("sessionend",f_),Fa.stop()};function Et(M){M.preventDefault(),G0("WebGLRenderer: Context Lost."),O=!0}function Gt(){G0("WebGLRenderer: Context Restored."),O=!1;let M=Ve.autoReset,N=ot.enabled,z=ot.autoUpdate,P=ot.needsUpdate,F=ot.type;kt(),Ve.autoReset=M,ot.enabled=N,ot.autoUpdate=z,ot.needsUpdate=P,ot.type=F}function dt(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let N=M.target;N.removeEventListener("dispose",oe),Je(N)}function Je(M){Ws(M),Rt.remove(M)}function Ws(M){let N=Rt.get(M).programs;N!==void 0&&(N.forEach(function(z){j.releaseProgram(z)}),M.isShaderMaterial&&j.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,P,F,ht){N===null&&(N=ri);let vt=F.isMesh&&F.matrixWorld.determinantAffine()<0,ct=G1(M,N,z,P,F);ft.setMaterial(P,vt);let _t=z.index,bt=1;if(P.wireframe===!0){if(_t=B.getWireframeAttribute(z),_t===void 0)return;bt=2}let Ft=z.drawRange,Jt=z.attributes.position,xt=Ft.start*bt,Kt=(Ft.start+Ft.count)*bt;ht!==null&&(xt=Math.max(xt,ht.start*bt),Kt=Math.min(Kt,(ht.start+ht.count)*bt)),_t!==null?(xt=Math.max(xt,0),Kt=Math.min(Kt,_t.count)):Jt!=null&&(xt=Math.max(xt,0),Kt=Math.min(Kt,Jt.count));let Pe=Kt-xt;if(Pe<0||Pe===1/0)return;rt.setup(F,P,ct,z,_t);let _e,de=V;if(_t!==null&&(_e=S.get(_t),de=lt,de.setIndex(_e)),F.isMesh)P.wireframe===!0?(ft.setLineWidth(P.wireframeLinewidth*li()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(F.isLine){let mn=P.linewidth;mn===void 0&&(mn=1),ft.setLineWidth(mn*li()),F.isLineSegments?de.setMode(L.LINES):F.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else F.isPoints?de.setMode(L.POINTS):F.isSprite&&de.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(be.get("WEBGL_multi_draw"))de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let mn=F._multiDrawStarts,St=F._multiDrawCounts,bn=F._multiDrawCount,ee=_t?S.get(_t).bytesPerElement:1,za=Rt.get(P).currentProgram.getUniforms();for(let gn=0;gn<bn;gn++)za.setValue(L,"_gl_DrawID",gn),de.render(mn[gn]/ee,St[gn])}else if(F.isInstancedMesh)de.renderInstances(xt,Pe,F.count);else if(z.isInstancedBufferGeometry){let mn=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,St=Math.min(z.instanceCount,mn);de.renderInstances(xt,Pe,St)}else de.render(xt,Pe)};function u_(M,N,z,P){H!==null&&M.isNodeMaterial&&H.setObject(P,M),Ge===!0&&Y.setState(M,z,!1),M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=On,M.needsUpdate=!0,el(M,N,P),M.side=Pa,M.needsUpdate=!0,el(M,N,P),M.side=si):el(M,N,P)}this.compile=function(M,N,z=null){z===null&&(z=M),H!==null&&H.renderStart(M,N,z),A=W.get(z),A.init(N),T.push(A),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),M!==z&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),In=this.localClippingEnabled,Ge=Y.init(this.clippingPlanes,In),Ge===!0&&Y.setGlobalState(this.clippingPlanes,N),H!==null&&ot.render(A.state.shadowsArray,z,N);let P=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ht=F.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let ct=ht[vt];u_(ct,z,N,F),P.add(ct)}else u_(ht,z,N,F),P.add(ht)}),A=T.pop(),H!==null&&H.renderEnd(),P},this.compileAsync=function(M,N,z=null){let P=this.compile(M,N,z);return new Promise(F=>{function ht(){if(P.forEach(function(vt){let _t=Rt.get(vt).currentProgram;(_t===void 0||_t.isReady())&&P.delete(vt)}),P.size===0){F(M);return}setTimeout(ht,10)}be.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ld=null;function z1(M){Ld&&Ld(M)}function h_(){Fa.stop()}function f_(){Fa.start()}let Fa=new M1;Fa.setAnimationLoop(z1),typeof self<"u"&&Fa.setContext(self),this.setAnimationLoop=function(M){Ld=M,it.setAnimationLoop(M),M===null?Fa.stop():Fa.start()},it.addEventListener("sessionstart",h_),it.addEventListener("sessionend",f_),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(M,N);let z=it.enabled===!0&&it.isPresenting===!0,P=U!==null&&(nt===null||z)&&U.begin(R,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,N,nt),A=W.get(M,T.length),A.init(N),A.state.textureUnits=Ot.getTextureUnits(),T.push(A),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?sn.setFromArrayCamera(N):Zt.setFromProjectionMatrix(we,Si,N.reversedDepth),In=this.localClippingEnabled,Ge=Y.init(this.clippingPlanes,In),E=ut.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&Ud(vt,N,-1/0,R.sortObjects)}Ud(M,N,0,R.sortObjects),E.finish(),H!==null&&H.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(zt,Ie),oi=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,oi&&C.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Ge===!0&&Y.beginShadows();let F=A.state.shadowsArray;if(ot.render(F,M,N),Ge===!0&&Y.endShadows(),(P&&U.hasRenderPass())===!1){let vt=E.opaque,ct=E.transmissive;if(A.setupLights(),N.isArrayCamera){let _t=N.cameras;if(ct.length>0)for(let bt=0,Ft=_t.length;bt<Ft;bt++){let Jt=_t[bt];p_(vt,ct,M,Jt)}oi&&C.render(M);for(let bt=0,Ft=_t.length;bt<Ft;bt++){let Jt=_t[bt];d_(E,M,Jt,Jt.viewport)}}else ct.length>0&&p_(vt,ct,M,N),oi&&C.render(M),d_(E,M,N)}nt!==null&&G===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),P&&U.end(R),M.isScene===!0&&M.onAfterRender(R,M,N),rt.resetDefaultState(),k=-1,$=null,T.pop(),T.length>0?(A=T[T.length-1],Ot.setTextureUnits(A.state.textureUnits),Ge===!0&&Y.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,H!==null&&H.renderEnd()};function Ud(M,N,z,P){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let vt=N.isArrayCamera?sn:Zt;if(!M.frustumCulled||M.intersectsFrustum(vt)){P&&Ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);let ct=et.update(M),_t=M.material;_t.visible&&E.push(M,ct,_t,z,Ze.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let vt=N.isArrayCamera?sn:Zt;if(!M.frustumCulled||M.intersectsFrustum(vt)){let ct=et.update(M),_t=M.material;if(P&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ze.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ze.copy(ct.boundingSphere.center)),Ze.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(_t)){let bt=ct.groups;for(let Ft=0,Jt=bt.length;Ft<Jt;Ft++){let xt=bt[Ft],Kt=_t[xt.materialIndex];Kt&&Kt.visible&&E.push(M,ct,Kt,z,Ze.z,xt,N)}}else _t.visible&&E.push(M,ct,_t,z,Ze.z,null,N)}}}let ht=M.children;for(let vt=0,ct=ht.length;vt<ct;vt++)Ud(ht[vt],N,z,P)}function d_(M,N,z,P){let{opaque:F,transmissive:ht,transparent:vt}=M;A.setupLightsView(z),Ge===!0&&Y.setGlobalState(R.clippingPlanes,z),P&&ft.viewport(tt.copy(P)),F.length>0&&Vc(F,N,z),ht.length>0&&Vc(ht,N,z),vt.length>0&&Vc(vt,N,z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function p_(M,N,z,P){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){let xt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new dn(1,1,{generateMipmaps:!0,type:xt?zi:ai,minFilter:Hs,samples:Math.max(4,Te.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let ht=A.state.transmissionRenderTarget[P.id],vt=P.viewport||tt;ht.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ct=R.getRenderTarget(),_t=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(ht),R.getClearColor(Z),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),oi&&C.render(z);let Ft=R.toneMapping;R.toneMapping=cs;let Jt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),Ge===!0&&Y.setGlobalState(R.clippingPlanes,P),Vc(M,z,P),Ot.updateMultisampleRenderTarget(ht),Ot.updateRenderTargetMipmap(ht),be.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Kt=0,Pe=N.length;Kt<Pe;Kt++){let _e=N[Kt],{object:de,geometry:mn,material:St,group:bn}=_e;if(St.side===si&&de.layers.test(P.layers)){let ee=St.side;St.side=On,St.needsUpdate=!0,m_(de,z,P,mn,St,bn),St.side=ee,St.needsUpdate=!0,xt=!0}}xt===!0&&(Ot.updateMultisampleRenderTarget(ht),Ot.updateRenderTargetMipmap(ht))}R.setRenderTarget(ct,_t,bt),R.setClearColor(Z,mt),Jt!==void 0&&(P.viewport=Jt),R.toneMapping=Ft}function Vc(M,N,z){let P=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ht=M.length;F<ht;F++){let vt=M[F],{object:ct,geometry:_t,group:bt}=vt,Ft=vt.material;Ft.allowOverride===!0&&P!==null&&(Ft=P),ct.layers.test(z.layers)&&m_(ct,N,z,_t,Ft,bt)}}function m_(M,N,z,P,F,ht){H!==null&&F.isNodeMaterial&&H.setObject(M,F),M.onBeforeRender(R,N,z,P,F,ht),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(R,N,z,P,M,ht),F.transparent===!0&&F.side===si&&F.forceSinglePass===!1?(F.side=On,F.needsUpdate=!0,R.renderBufferDirect(z,N,P,F,M,ht),F.side=Pa,F.needsUpdate=!0,R.renderBufferDirect(z,N,P,F,M,ht),F.side=si):R.renderBufferDirect(z,N,P,F,M,ht),M.onAfterRender(R,N,z,P,F,ht)}function g_(M){let N=0;for(let z of M)z.texture!==null&&N++;return N}function el(M,N,z){N.isScene!==!0&&(N=ri);let P=Rt.get(M),F=A.state.lights,ht=A.state.shadowsArray,vt=F.state.version,ct=j.getParameters(M,F.state,ht,N,z,A.state.lightProbeGridArray),_t=j.getProgramCacheKey(ct),bt=P.programs;P.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,P.fog=N.fog;let Ft=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;P.envMap=w.get(M.envMap||P.environment,Ft),P.envMapRotation=P.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",oe),bt=new Map,P.programs=bt,P.programVariants=new Map);let Jt=bt.get(_t);if(Jt!==void 0){if(P.currentProgram===Jt&&P.lightsStateVersion===vt)return v_(M,ct),Jt}else ct.uniforms=j.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,z,ct),M.onBeforeCompile(ct,R),Jt=j.acquireProgram(ct,_t),bt.set(_t,Jt),P.uniforms=ct.uniforms;let xt=P.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xt.clippingPlanes=Y.uniform),v_(M,ct),P.needsLights=k1(M),P.lightsStateVersion=vt,P.needsLights&&(xt.ambientLightColor.value=F.state.ambient,xt.lightProbe.value=F.state.probe,xt.sunLights.value=F.state.sun,xt.sunLightShadows.value=F.state.sunShadow,xt.directionalLights.value=F.state.directional,xt.directionalLightShadows.value=F.state.directionalShadow,xt.spotLights.value=F.state.spot,xt.spotLightShadows.value=F.state.spotShadow,xt.rectAreaLights.value=F.state.rectArea,xt.ltc_1.value=F.state.rectAreaLTC1,xt.ltc_2.value=F.state.rectAreaLTC2,xt.pointLights.value=F.state.point,xt.pointLightShadows.value=F.state.pointShadow,xt.hemisphereLights.value=F.state.hemi,xt.sunShadowMatrix.value=F.state.sunShadowMatrix,xt.sunShadowCascade.value=F.state.sunShadowCascade,xt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,xt.spotLightMatrix.value=F.state.spotLightMatrix,xt.spotLightMap.value=F.state.spotLightMap,xt.pointShadowMatrix.value=F.state.pointShadowMatrix),P.numLightProbeGrids=g_(A.state.lightProbeGridArray),P.currentProgram=Jt,P.uniformsList=null,Jt}function H1(M,N,z,P,F){let ht=Rt.get(M),vt=ht.currentProgram.id+","+P+","+F,ct=ht.programVariants.get(vt);return ct===void 0?(ct=el(M,N,z),ht.programVariants.set(vt,ct)):(ht.currentProgram=ct,ht.uniformsList=null,ht.outputColorSpace=P,ht.toneMapping=F),ct}function __(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=$o.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function v_(M,N){let z=Rt.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function G1(M,N,z,P,F){N.isScene!==!0&&(N=ri),Ot.resetTextureUnits();let ht=N.fog,vt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?N.environment:null,ct=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,_t=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,bt=w.get(P.envMap||vt,_t),Ft=P.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Jt=!!z.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),xt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,Pe=!!z.morphAttributes.color,_e=cs;P.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(_e=R.toneMapping);let de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mn=de!==void 0?de.length:0,St=Rt.get(P),bn=A.state.lights;if(Ge===!0&&(In===!0||M!==$)){let Re=M===$&&P.id===k;Y.setState(P,M,Re)}let ee=!1,za=!1;P.version===St.__version?St.needsLights&&St.lightsStateVersion!==bn.state.version||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==bt||P.fog===!0&&St.fog!==ht||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Y.numPlanes||St.numIntersection!==Y.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==Jt||St.morphTargets!==xt||St.morphNormals!==Kt||St.morphColors!==Pe||St.morphTargetsCount!==mn||St.numLightProbeGrids!==g_(A.state.lightProbeGridArray)?ee=!0:(St.outputColorSpace!==ct||St.toneMapping!==_e)&&(za=!0):(ee=!0,St.__version=P.version);let gn=St.currentProgram;(ee===!0||za===!0)&&(gn=za===!0?H1(P,N,F,ct,_e):el(P,N,F),H&&P.isNodeMaterial&&H.onUpdateProgram(P,gn,St));let kc=!1,qs=!1,Ha=!1,$t=gn.getUniforms(),an=St.uniforms;if(ft.useProgram(gn.program)&&(kc=!0,qs=!0,Ha=!0),P.id!==k&&(k=P.id,qs=!0),kc||$!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),$t.setValue(L,"projectionMatrix",M.projectionMatrix),$t.setValue(L,"viewMatrix",M.matrixWorldInverse);let Ke=$t.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,Gi.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&$t.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&$t.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,qs=!0,Ha=!0)}if(St.needsLights&&(bn.state.sunShadowMap.length>0&&$t.setValue(L,"sunShadowMap",bn.state.sunShadowMap,Ot),bn.state.directionalShadowMap.length>0&&$t.setValue(L,"directionalShadowMap",bn.state.directionalShadowMap,Ot),bn.state.spotShadowMap.length>0&&$t.setValue(L,"spotShadowMap",bn.state.spotShadowMap,Ot),bn.state.pointShadowMap.length>0&&$t.setValue(L,"pointShadowMap",bn.state.pointShadowMap,Ot)),F.isSkinnedMesh){$t.setOptional(L,F,"bindMatrix"),$t.setOptional(L,F,"bindMatrixInverse");let Re=F.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),$t.setValue(L,"boneTexture",Re.boneTexture,Ot))}F.isBatchedMesh&&($t.setOptional(L,F,"batchingTexture"),$t.setValue(L,"batchingTexture",F._matricesTexture,Ot),$t.setOptional(L,F,"batchingIdTexture"),$t.setValue(L,"batchingIdTexture",F._indirectTexture,Ot),$t.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&$t.setValue(L,"batchingColorTexture",F._colorsTexture,Ot));let Ti=z.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&J.update(F,z,gn),(qs||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,$t.setValue(L,"receiveShadow",F.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=KN()),qs){if($t.setValue(L,"toneMappingExposure",R.toneMappingExposure),St.needsLights&&V1(an,Ha),ht&&P.fog===!0&&at.refreshFogUniforms(an,ht),at.refreshMaterialUniforms(an,P,gt,wt,A.state.transmissionRenderTarget[M.id]),St.needsLights&&St.numLightProbeGrids>0){let Re=x,Ke=0;for(let ps of A.state.lightProbeGridArray)ps.texture!==null&&(Re.textures[Ke]=ps.texture,Re.min[Ke]=ps.boundingBox.min,Re.max[Ke]=ps.boundingBox.max,Re.resolution[Ke]=ps.resolution,Ke++);for(let ps in Re)Re[ps].length=Ke;an.probesSH.value=Re.textures,an.probesMin.value=Re.min,an.probesMax.value=Re.max,an.probesResolution.value=Re.resolution}$o.upload(L,__(St),an,Ot)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&($o.upload(L,__(St),an,Ot),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&$t.setValue(L,"center",F.center),$t.setValue(L,"modelViewMatrix",F.modelViewMatrix),$t.setValue(L,"normalMatrix",F.normalMatrix),$t.setValue(L,"modelMatrix",F.matrixWorld),P.uniformsGroups!==void 0){let Re=P.uniformsGroups;for(let Ke=0,ps=Re.length;Ke<ps;Ke++){let x_=Re[Ke];Tt.update(x_,gn),Tt.bind(x_,gn)}}return gn}function V1(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function k1(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,N,z){let P=Rt.get(M);P.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Rt.get(M.texture).__webglTexture=N,Rt.get(M.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:z,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let z=Rt.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,z=0){nt=M,K=N,G=z;let P=null,F=!1,ht=!1;if(M){let ct=Rt.get(M);if(ct.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(M.viewport),Mt.copy(M.scissor),Bt=M.scissorTest,ft.viewport(tt),ft.scissor(Mt),ft.setScissorTest(Bt),k=-1;return}else if(ct.__webglFramebuffer===void 0)Ot.setupRenderTarget(M);else if(ct.__hasExternalTextures)Ot.rebindTextures(M,Rt.get(M.texture).__webglTexture,Rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ft=M.depthTexture;if(ct.__boundDepthTexture!==Ft){if(Ft!==null&&Rt.has(Ft)&&(M.width!==Ft.image.width||M.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(M)}}let _t=M.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);let bt=Rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?P=bt[N][z]:P=bt[N],F=!0):M.samples>0&&Ot.useMultisampledRTT(M)===!1?P=Rt.get(M).__webglMultisampledFramebuffer:Array.isArray(bt)?P=bt[z]:P=bt,tt.copy(M.viewport),Mt.copy(M.scissor),Bt=M.scissorTest}else tt.copy(Nt).multiplyScalar(gt).floor(),Mt.copy(re).multiplyScalar(gt).floor(),Bt=fe;if(z!==0&&(P=q),ft.bindFramebuffer(L.FRAMEBUFFER,P)&&ft.drawBuffers(M,P),ft.viewport(tt),ft.scissor(Mt),ft.setScissorTest(Bt),F){let ct=Rt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ct.__webglTexture,z)}else if(ht){let ct=N;for(let _t=0;_t<M.textures.length;_t++){let bt=Rt.get(M.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,bt.__webglTexture,z,ct)}}else if(M!==null&&z!==0){let ct=Rt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,z)}k=-1};function y_(M){let N=Rt.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=Te.textureFormatReadable(M.format),N.__typeReadable=Te.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,z,P,F,ht,vt,ct=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t){ft.bindFramebuffer(L.FRAMEBUFFER,_t);try{let bt=M.textures[ct],Ft=bt.format,Jt=bt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let xt=y_(bt);if(xt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-P&&z>=0&&z<=M.height-F&&L.readPixels(N,z,P,F,st.convert(Ft),st.convert(Jt),ht)}finally{let bt=nt!==null?Rt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,P,F,ht,vt,ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t)if(N>=0&&N<=M.width-P&&z>=0&&z<=M.height-F){ft.bindFramebuffer(L.FRAMEBUFFER,_t);let bt=M.textures[ct],Ft=bt.format,Jt=bt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let xt=y_(bt);if(xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(N,z,P,F,st.convert(Ft),st.convert(Jt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Pe=nt!==null?Rt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,Pe);let _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zb(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Kt),L.deleteSync(_e),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,z=0){let P=Math.pow(2,-z),F=Math.floor(M.image.width*P),ht=Math.floor(M.image.height*P),vt=N!==null?N.x:0,ct=N!==null?N.y:0;Ot.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,vt,ct,F,ht),ft.unbindTexture()},this.copyTextureToTexture=function(M,N,z=null,P=null,F=0,ht=0){let vt,ct,_t,bt,Ft,Jt,xt,Kt,Pe,_e=M.isCompressedTexture?M.mipmaps[ht]:M.image;if(z!==null)vt=z.max.x-z.min.x,ct=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Ft=z.min.y,Jt=z.isBox3?z.min.z:0;else{let $t=Math.pow(2,-F);vt=Math.floor(_e.width*$t),ct=Math.floor(_e.height*$t),M.isDataArrayTexture?_t=_e.depth:M.isData3DTexture?_t=Math.floor(_e.depth*$t):_t=1,bt=0,Ft=0,Jt=0}P!==null?(xt=P.x,Kt=P.y,Pe=P.z):(xt=0,Kt=0,Pe=0);let de=st.convert(N.format),mn=st.convert(N.type),St;N.isData3DTexture?(Ot.setTexture3D(N,0),St=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),St=L.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),St=L.TEXTURE_2D),ft.activeTexture(L.TEXTURE0),ft.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),ft.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ft.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let bn=ft.getParameter(L.UNPACK_ROW_LENGTH),ee=ft.getParameter(L.UNPACK_IMAGE_HEIGHT),za=ft.getParameter(L.UNPACK_SKIP_PIXELS),gn=ft.getParameter(L.UNPACK_SKIP_ROWS),kc=ft.getParameter(L.UNPACK_SKIP_IMAGES);ft.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),ft.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,Jt);let qs=M.isDataArrayTexture||M.isData3DTexture,Ha=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let $t=Rt.get(M),an=Rt.get(N),Ti=Rt.get($t.__renderTarget),Re=Rt.get(an.__renderTarget);ft.bindFramebuffer(L.READ_FRAMEBUFFER,Ti.__webglFramebuffer),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ke=0;Ke<_t;Ke++)qs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(M).__webglTexture,F,Jt+Ke),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,ht,Pe+Ke)),L.blitFramebuffer(bt,Ft,bt+vt,Ft+ct,xt,Kt,xt+vt,Kt+ct,L.DEPTH_BUFFER_BIT,L.NEAREST);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||Rt.has(M)){let $t=Rt.get(M),an=Rt.get(N);ft.bindFramebuffer(L.READ_FRAMEBUFFER,D),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let Ti=0;Ti<_t;Ti++)qs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,F,Jt+Ti):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,F),Ha?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,ht,Pe+Ti):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,ht),F!==0?L.blitFramebuffer(bt,Ft,bt+vt,Ft+ct,xt,Kt,xt+vt,Kt+ct,L.COLOR_BUFFER_BIT,L.NEAREST):Ha?L.copyTexSubImage3D(St,ht,xt,Kt,Pe+Ti,bt,Ft,vt,ct):L.copyTexSubImage2D(St,ht,xt,Kt,bt,Ft,vt,ct);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ha?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(St,ht,xt,Kt,Pe,vt,ct,_t,de,mn,_e.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(St,ht,xt,Kt,Pe,vt,ct,_t,de,_e.data):L.texSubImage3D(St,ht,xt,Kt,Pe,vt,ct,_t,de,mn,_e):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,xt,Kt,vt,ct,de,mn,_e.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,xt,Kt,_e.width,_e.height,de,_e.data):L.texSubImage2D(L.TEXTURE_2D,ht,xt,Kt,vt,ct,de,mn,_e);ft.pixelStorei(L.UNPACK_ROW_LENGTH,bn),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,za),ft.pixelStorei(L.UNPACK_SKIP_ROWS,gn),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,kc),ht===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&L.generateMipmap(St),ft.unbindTexture()},this.initRenderTarget=function(M){Rt.get(M).__webglFramebuffer===void 0&&Ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ot.setTextureCube(M,0):M.isData3DTexture?Ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ot.setTexture2DArray(M,0):Ot.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){K=0,G=0,nt=null,ft.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}};var ks=400,jN=329224,ge={leftLights:["#FF007F","#FF3366","#FF0055","#FF6B00","#FFD600","#9D00FF"],rightLights:["#00F0FF","#00E5FF","#00FFB2","#38EF7D","#4361EE","#7209B7"],stickColor:"#39FF14",roadColor:"#060709",lineColor:"#00F0FF",roadWidth:22,lanes:4,traffic:20,sticks:24,speed:9,trailFade:0,glow:14,fov:155,boostOn:!0,boost:{amount:3.2,fov:145}};function fs(e,t,n,i){let s=typeof e=="number"&&isFinite(e)?e:i;return Math.max(t,Math.min(n,s))}function Gc(e){let t=fs(e.traffic,1,20,ge.traffic),n=fs(e.sticks,1,20,ge.sticks),i=e.boost??ge.boost,s=fs(e.fov,40,160,ge.fov);return{roadWidth:fs(e.roadWidth,4,30,ge.roadWidth),lanes:fs(e.lanes,2,6,ge.lanes),lightPairs:Math.round(6+t*t*.35),stickCount:Math.max(2,Math.round(5+n*n*.28)),speedScale:fs(e.speed,0,25,ge.speed)/10,fade:fs(e.trailFade,0,20,ge.trailFade)/20,glow:fs(e.glow,0,25,ge.glow)/10,fov:s,boostSpeed:e.boostOn?fs(i?.amount??3,0,10,3):0,boostFov:e.boostOn?fs(i?.fov??145,40,200,145):s}}var Xs=(e,t)=>Math.random()*(t-e)+e,$N=e=>e[Math.floor(Math.random()*e.length)];function U1(e,t,n=.1,i=.001){let s=(t-e)*n;return Math.abs(s)<i&&(s=t-e),s}var Nd=e=>Math.sin(e)*.5+.5;function tD(){let e={uFreq:new Pi(new I(3,6,10)),uAmp:new Pi(new I(30,30,20))};return{uniforms:e,glsl:`
            uniform vec3 uAmp;
            uniform vec3 uFreq;
            #define PI 3.14159265358979
            float nsin(float val){ return sin(val) * 0.5 + 0.5; }
            vec3 getDistortion(float progress){
                float movementProgressFix = 0.02;
                return vec3(
                    cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
                    nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
                    nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
                );
            }
        `,camera:(t,n)=>{let i=e.uFreq.value,s=e.uAmp.value,a=.02;return new I(Math.cos(t*Math.PI*i.x+n)*s.x-Math.cos(a*Math.PI*i.x+n)*s.x,Nd(t*Math.PI*i.y+n)*s.y-Nd(a*Math.PI*i.y+n)*s.y,Nd(t*Math.PI*i.z+n)*s.z-Nd(a*Math.PI*i.z+n)*s.z).multiply(new I(2,2,2)).add(new I(0,0,-5))}}}var Dd="#include <getDistortion_vertex>",r_=Pt.fog_pars_vertex,o_=Pt.fog_vertex,l_=Pt.fog_pars_fragment,c_=Pt.fog_fragment,eD=`
    #define USE_FOG
    ${r_}
    attribute vec3 aOffset;
    attribute vec3 aMetrics;
    attribute vec3 aColor;

    uniform float uTravelLength;
    uniform float uTime;
    uniform float uSpeedScale;

    varying vec2 vUv;
    varying vec3 vColor;
    ${Dd}

    void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float trailLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= trailLength;

        transformed.z += trailLength - mod(uTime * speed * uSpeedScale + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${o_}
    }
`,nD=`
    #define USE_FOG
    ${l_}
    varying vec3 vColor;
    varying vec2 vUv;
    uniform vec2 uFade;

    void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${c_}
    }
`,iD=`
    #define USE_FOG
    ${r_}
    attribute float aOffset;
    attribute vec3 aColor;
    attribute vec2 aMetrics;

    uniform float uTravelLength;
    uniform float uTime;
    uniform float uSpeedScale;

    varying vec3 vColor;

    mat4 rotationY(in float angle) {
        return mat4(cos(angle), 0, sin(angle), 0,
                    0, 1.0, 0, 0,
                    -sin(angle), 0, cos(angle), 0,
                    0, 0, 0, 1);
    }

    ${Dd}

    void main(){
        vec3 transformed = position.xyz;
        float stickWidth = aMetrics.x;
        float stickHeight = aMetrics.y;

        transformed.xy *= vec2(stickWidth, stickHeight);
        float travel = mod(uTime * 120. * uSpeedScale + aOffset, uTravelLength);

        transformed = (rotationY(3.14 / 2.) * vec4(transformed, 1.)).xyz;
        transformed.z += -uTravelLength + travel;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += stickHeight / 2.;
        transformed.x += -stickWidth / 2.;

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${o_}
    }
`,sD=`
    #define USE_FOG
    ${l_}
    varying vec3 vColor;
    void main(){
        gl_FragColor = vec4(vec3(vColor), 1.);
        ${c_}
    }
`,aD=`
    #define USE_FOG
    ${r_}
    uniform float uTime;
    uniform float uTravelLength;
    varying vec2 vUv;
    ${Dd}

    void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${o_}
    }
`,rD=`
    uniform float uLanes;
    uniform vec3 uBrokenLinesColor;
    uniform vec3 uShoulderLinesColor;
    uniform float uShoulderLinesWidthPercentage;
    uniform float uBrokenLinesWidthPercentage;
    uniform float uBrokenLinesLengthPercentage;
    uniform float uSpeedScale;
    highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
    }
`,oD=`
    uv.y = mod(uv.y + uTime * 0.1 * uSpeedScale, 1.);
    float brokenLineWidth = 1. / uLanes * uBrokenLinesWidthPercentage;
    float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

    float brokenLines = step(1. - brokenLineWidth * uLanes, fract(uv.x * uLanes)) * step(laneEmptySpace, fract(uv.y * 100.));
    brokenLines *= step(uv.x * uLanes, uLanes - 1.);
    color = mix(color, uBrokenLinesColor, brokenLines);

    float shoulderLinesWidth = 1. / uLanes * uShoulderLinesWidthPercentage;
    float shoulderLines = step(1. - shoulderLinesWidth, uv.x) + step(uv.x, shoulderLinesWidth);
    color = mix(color, uShoulderLinesColor, shoulderLines);

    vec2 noiseFreq = vec2(4., 7000.);
    float roadNoise = random(floor(uv * noiseFreq) / noiseFreq) * 0.02 - 0.01;
    color += roadNoise;
`,lD=`
    #define USE_FOG
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uTime;
    #include <roadMarkings_vars>
    ${l_}
    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${c_}
    }
`,cD=lD.replace("#include <roadMarkings_fragment>",oD).replace("#include <roadMarkings_vars>",rD),s_=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,uD=`
    uniform sampler2D tScene;
    uniform float uThreshold;
    varying vec2 vUv;
    void main() {
        vec4 c = texture2D(tScene, vUv);
        float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
        gl_FragColor = vec4(c.rgb * step(uThreshold, luma), 1.0);
    }
`,hD=`
    uniform sampler2D tSource;
    uniform vec2 uDirection;
    varying vec2 vUv;
    void main() {
        float weights[5];
        weights[0] = 0.2270270270;
        weights[1] = 0.1945945946;
        weights[2] = 0.1216216216;
        weights[3] = 0.0540540541;
        weights[4] = 0.0162162162;
        vec3 sum = texture2D(tSource, vUv).rgb * weights[0];
        for (int i = 1; i < 5; i++) {
            vec2 offset = uDirection * float(i);
            sum += texture2D(tSource, vUv + offset).rgb * weights[i];
            sum += texture2D(tSource, vUv - offset).rgb * weights[i];
        }
        gl_FragColor = vec4(sum, 1.0);
    }
`,fD=`
    uniform sampler2D tScene;
    uniform sampler2D tBloom;
    uniform float uStrength;
    varying vec2 vUv;
    vec3 linearToSRGB(vec3 c) {
        vec3 lo = c * 12.92;
        vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(0.4166666)) - 0.055;
        return mix(lo, hi, step(vec3(0.0031308), c));
    }
    void main() {
        vec4 base = texture2D(tScene, vUv);
        vec3 bloom = texture2D(tBloom, vUv).rgb * uStrength;
        vec3 lit = base.rgb + bloom;
        float alpha = clamp(base.a + max(bloom.r, max(bloom.g, bloom.b)), 0.0, 1.0);
        gl_FragColor = vec4(linearToSRGB(lit), alpha);
    }
`,a_=class{container;cfg;renderer;scene=new ko;camera;fog;fogUniforms;distortion;uTime=new Pi(0);uSpeedScale=new Pi(1);uTravelLength=new Pi(ks);uLeftFade=new Pi(new At(0,.6));uRightFade=new Pi(new At(1,.4));roadUniforms=[];meshes=[];quadCamera=new xr;quadScene=new ko;quad;rtScene;rtBlurA;rtBlurB;brightMat;blurMat;compositeMat;width=1;height=1;frameId=0;lastT=0;elapsed=0;timeOffset=0;speedUp=0;speedUpTarget=0;fovTarget;disposed=!1;lookTarget=new I;onDown;onUp;constructor(t,n){this.container=t,this.cfg=n;let i=Gc(n);this.renderer=new wd({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Cn;let s=this.renderer.domElement;s.style.position="absolute",s.style.inset="0",s.style.width="100%",s.style.height="100%",s.style.display="block",t.appendChild(s),this.camera=new Nn(i.fov,1,.1,1e4),this.camera.position.set(0,8,-5),this.fovTarget=i.fov,this.fog=new vc(new Vt(jN),ks*.2,ks*500),this.scene.fog=this.fog,this.fogUniforms={fogColor:{value:this.fog.color},fogNear:{value:this.fog.near},fogFar:{value:this.fog.far}},this.brightMat=new pn({vertexShader:s_,fragmentShader:uD,uniforms:{tScene:{value:null},uThreshold:{value:.18}},depthTest:!1,depthWrite:!1}),this.blurMat=new pn({vertexShader:s_,fragmentShader:hD,uniforms:{tSource:{value:null},uDirection:{value:new At}},depthTest:!1,depthWrite:!1}),this.compositeMat=new pn({vertexShader:s_,fragmentShader:fD,uniforms:{tScene:{value:null},tBloom:{value:null},uStrength:{value:i.glow}},transparent:!0,depthTest:!1,depthWrite:!1}),this.quad=new Un(new zs(2,2),this.brightMat),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);let a={colorSpace:_r};this.rtScene=new dn(1,1,a),this.rtBlurA=new dn(1,1,a),this.rtBlurB=new dn(1,1,a),this.build(),this.onDown=r=>{if(r&&r.target&&r.target.closest('a, button, input, textarea, select, [role="button"], [role="tab"]'))return;let o=Gc(this.cfg);this.speedUpTarget=o.boostSpeed,this.fovTarget=o.boostFov},this.onUp=()=>{let r=Gc(this.cfg);this.speedUpTarget=0,this.fovTarget=r.fov},window.addEventListener("pointerdown",this.onDown),window.addEventListener("pointerleave",this.onUp),window.addEventListener("pointercancel",this.onUp),window.addEventListener("pointerup",this.onUp)}withDistortion(t){let n=this.distortion.glsl;return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace(Dd,n)},t}build(){let t=Gc(this.cfg);this.distortion=tD(),this.uSpeedScale.value=t.speedScale,this.uLeftFade.value.set(0,1-t.fade),this.uRightFade.value.set(1,0+t.fade),this.roadUniforms=[],this.buildPlane(t,-1),this.buildPlane(t,1),this.buildCarLights(t,this.cfg.leftLights,60,80,this.uLeftFade).position.setX(-t.roadWidth/2),this.buildCarLights(t,this.cfg.rightLights,-120,-160,this.uRightFade).position.setX(t.roadWidth/2),this.buildSticks(t,-1),this.buildSticks(t,1)}add(t){return t.frustumCulled=!1,this.scene.add(t),this.meshes.push(t),t}buildCarLights(t,n,i,s,a){let r=new qo(new I(0,0,0),new I(0,0,-1)),o=new Ac(r,40,1,8,!1),l=new Yo;l.index=o.index,l.attributes=o.attributes;let c=t.lightPairs;l.instanceCount=c*2;let h=t.roadWidth/t.lanes,u=(n&&n.length?n:ge.leftLights).map(d=>new Vt(d)),f=[],v=[],b=[];for(let d=0;d<c;d++){let m=Xs(.06,.16),y=Xs(ks*.06,ks*.18),x=Xs(i,s),E=d%t.lanes,A=Xs(.3,.5)*h,_=E*h-t.roadWidth/2+h/2+Xs(-.2,.2)*h,T=Xs(.05,1)+m*1.3,U=-Xs(0,ks);f.push(_-A/2,T,U),f.push(_+A/2,T,U),v.push(m,y,x),v.push(m,y,x);let R=$N(u);b.push(R.r,R.g,R.b),b.push(R.r,R.g,R.b)}l.setAttribute("aOffset",new ls(new Float32Array(f),3,!1)),l.setAttribute("aMetrics",new ls(new Float32Array(v),3,!1)),l.setAttribute("aColor",new ls(new Float32Array(b),3,!1));let g=this.withDistortion(new pn({vertexShader:eD,fragmentShader:nD,transparent:!0,uniforms:Object.assign({uTime:this.uTime,uTravelLength:this.uTravelLength,uSpeedScale:this.uSpeedScale,uFade:a},this.fogUniforms,this.distortion.uniforms)}));return this.add(new Un(l,g))}buildSticks(t,n){let i=new zs(1,1),s=new Yo;s.index=i.index,s.attributes=i.attributes;let a=t.stickCount;s.instanceCount=a;let r=ks/(a-1),o=new Vt(this.cfg.stickColor||ge.stickColor),l=[],c=[],h=[];for(let f=0;f<a;f++)l.push((f-1)*r*2+r*Math.random()),c.push(o.r,o.g,o.b),h.push(Xs(.12,.5),Xs(1.3,1.7));s.setAttribute("aOffset",new ls(new Float32Array(l),1,!1)),s.setAttribute("aColor",new ls(new Float32Array(c),3,!1)),s.setAttribute("aMetrics",new ls(new Float32Array(h),2,!1));let p=this.withDistortion(new pn({vertexShader:iD,fragmentShader:sD,side:si,uniforms:Object.assign({uTime:this.uTime,uTravelLength:this.uTravelLength,uSpeedScale:this.uSpeedScale},this.fogUniforms,this.distortion.uniforms)})),u=this.add(new Un(s,p));return u.position.setX(n<0?-t.roadWidth:t.roadWidth+.5),u}buildPlane(t,n){let i=new zs(t.roadWidth,ks,20,100),s={uTravelLength:this.uTravelLength,uColor:{value:new Vt(this.cfg.roadColor)},uTime:this.uTime,uLanes:{value:t.lanes},uBrokenLinesColor:{value:new Vt(this.cfg.lineColor)},uShoulderLinesColor:{value:new Vt(this.cfg.lineColor)},uShoulderLinesWidthPercentage:{value:.05},uBrokenLinesLengthPercentage:{value:.5},uBrokenLinesWidthPercentage:{value:.1},uSpeedScale:this.uSpeedScale};this.roadUniforms.push(s);let a=this.withDistortion(new pn({vertexShader:aD,fragmentShader:cD,side:si,uniforms:Object.assign(s,this.fogUniforms,this.distortion.uniforms)})),r=new Un(i,a);return r.rotation.x=-Math.PI/2,r.position.z=-ks/2,r.position.x+=t.roadWidth/2*n,this.add(r)}teardown(){for(let t of this.meshes)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.meshes=[]}start(){this.lastT=performance.now();let t=()=>{this.disposed||(this.step(),this.frameId=requestAnimationFrame(t))};this.frameId=requestAnimationFrame(t)}setSize(t,n){if(this.disposed)return;this.width=Math.max(1,t),this.height=Math.max(1,n),this.renderer.setSize(this.width,this.height,!1);let i=this.renderer.getPixelRatio(),s=Math.max(1,Math.floor(this.width*i)),a=Math.max(1,Math.floor(this.height*i));this.rtScene.setSize(s,a),this.rtBlurA.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.rtBlurB.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}updateConfig(t){if(this.disposed)return;let n=this.cfg;this.cfg=t;let i=Gc(t);if(t.roadWidth!==n.roadWidth||t.lanes!==n.lanes||t.traffic!==n.traffic||t.sticks!==n.sticks||t.stickColor!==n.stickColor||t.leftLights?.join(",")!==n.leftLights?.join(",")||t.rightLights?.join(",")!==n.rightLights?.join(","))this.teardown(),this.build();else{this.uSpeedScale.value=i.speedScale,this.uLeftFade.value.set(0,1-i.fade),this.uRightFade.value.set(1,0+i.fade);for(let a of this.roadUniforms)a.uColor.value.set(t.roadColor),a.uBrokenLinesColor.value.set(t.lineColor),a.uShoulderLinesColor.value.set(t.lineColor)}this.compositeMat.uniforms.uStrength.value=i.glow,t.fov!==n.fov&&this.speedUpTarget===0&&(this.fovTarget=i.fov,this.camera.fov=i.fov,this.camera.updateProjectionMatrix())}step(){let t=performance.now(),n=(t-this.lastT)/1e3;this.lastT=t,(!isFinite(n)||n<0)&&(n=0),n>.05&&(n=.05),this.elapsed+=n;let i=Math.exp(-(-60*Math.log2(1-.1))*n);this.speedUp+=U1(this.speedUp,this.speedUpTarget,i,1e-5),this.timeOffset+=this.speedUp*n;let s=this.elapsed+this.timeOffset;this.uTime.value=s;let a=!1,r=U1(this.camera.fov,this.fovTarget,i);if(r!==0&&(this.camera.fov+=r*n*6,a=!0),this.distortion.camera){let o=this.distortion.camera(.025,s);this.lookTarget.set(this.camera.position.x+o.x,this.camera.position.y+o.y,this.camera.position.z+o.z),this.camera.lookAt(this.lookTarget),a=!0}a&&this.camera.updateProjectionMatrix(),this.render()}render(){let t=this.renderer;if(t.setRenderTarget(this.rtScene),t.clear(),t.render(this.scene,this.camera),this.compositeMat.uniforms.uStrength.value>.001){this.quad.material=this.brightMat,this.brightMat.uniforms.tScene.value=this.rtScene.texture,t.setRenderTarget(this.rtBlurA),t.render(this.quadScene,this.quadCamera);let i=1.5/this.rtBlurA.width,s=1.5/this.rtBlurA.height;this.quad.material=this.blurMat,this.blurMat.uniforms.tSource.value=this.rtBlurA.texture,this.blurMat.uniforms.uDirection.value.set(i,0),t.setRenderTarget(this.rtBlurB),t.render(this.quadScene,this.quadCamera),this.blurMat.uniforms.tSource.value=this.rtBlurB.texture,this.blurMat.uniforms.uDirection.value.set(0,s),t.setRenderTarget(this.rtBlurA),t.render(this.quadScene,this.quadCamera)}this.quad.material=this.compositeMat,this.compositeMat.uniforms.tScene.value=this.rtScene.texture,this.compositeMat.uniforms.tBloom.value=this.rtBlurA.texture,t.setRenderTarget(null),t.clear(),t.render(this.quadScene,this.quadCamera)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),window.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointerleave",this.onUp),window.removeEventListener("pointercancel",this.onUp),window.removeEventListener("pointerup",this.onUp),this.teardown(),this.quad.geometry.dispose(),this.brightMat.dispose(),this.blurMat.dispose(),this.compositeMat.dispose(),this.rtScene.dispose(),this.rtBlurA.dispose(),this.rtBlurB.dispose(),this.renderer.dispose();let t=this.renderer.domElement;t.parentNode===this.container&&this.container.removeChild(t)}};function O1(e){let{leftLights:t=ge.leftLights,rightLights:n=ge.rightLights,stickColor:i=ge.stickColor,roadColor:s=ge.roadColor,lineColor:a=ge.lineColor,roadWidth:r=ge.roadWidth,lanes:o=ge.lanes,traffic:l=ge.traffic,sticks:c=ge.sticks,speed:h=ge.speed,trailFade:p=ge.trailFade,glow:u=ge.glow,fov:f=ge.fov,boostOn:v=ge.boostOn,boost:b=ge.boost,style:g,className:d}=e,m=(0,ds.useRef)(null),y=(0,ds.useRef)(null),x=(0,ds.useRef)(null);return x.current={leftLights:t,rightLights:n,stickColor:i,roadColor:s,lineColor:a,roadWidth:r,lanes:o,traffic:l,sticks:c,speed:h,trailFade:p,glow:u,fov:f,boostOn:v,boost:b},(0,ds.useEffect)(()=>{let E=m.current;if(!E)return;let A;try{A=new a_(E,x.current)}catch(T){console.error("TrafficWave WebGL init error:",T);return}y.current=A,A.setSize(E.clientWidth,E.clientHeight),A.start();let _=new ResizeObserver(()=>{E&&A.setSize(E.clientWidth,E.clientHeight)});return _.observe(E),()=>{_.disconnect(),A.dispose(),y.current=null}},[]),(0,ds.useEffect)(()=>{y.current?.updateConfig(x.current)},[t?.join?.(","),n?.join?.(","),i,s,a,r,o,l,c,h,p,u,f,v,b?.amount,b?.fov]),(0,ds.useEffect)(()=>{let E=window.scrollY,A,_=()=>{let T=window.scrollY,U=Math.abs(T-E);E=T;let R=Math.min(10,U*.12);y.current&&y.current.updateConfig({...x.current,speed:(x.current.speed||ge.speed)+R}),window.clearTimeout(A),A=window.setTimeout(()=>{y.current&&y.current.updateConfig(x.current)},120)};return window.addEventListener("scroll",_,{passive:!0}),()=>{window.removeEventListener("scroll",_),window.clearTimeout(A)}},[]),ds.default.createElement("div",{ref:m,role:"img","aria-label":"A neon night highway streaked with colorful head and tail lights",className:d,style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",cursor:v?"pointer":"default",...g}})}O1.displayName="TrafficWave";var I1=O1;function P1(){let e=document.getElementById("trafficWaveMount");if(!e)return;(0,F1.createRoot)(e).render(B1.default.createElement(I1,null))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P1):P1();})();
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
