(()=>{var E1=Object.create;var s_=Object.defineProperty;var A1=Object.getOwnPropertyDescriptor;var w1=Object.getOwnPropertyNames;var R1=Object.getPrototypeOf,C1=Object.prototype.hasOwnProperty;var Gs=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var N1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of w1(t))!C1.call(e,s)&&s!==n&&s_(e,s,{get:()=>t[s],enumerable:!(i=A1(t,s))||i.enumerable});return e};var Td=(e,t,n)=>(n=e!=null?E1(R1(e)):{},N1(t||!e||!e.__esModule?s_(n,"default",{value:e,enumerable:!0}):n,e));var __=Gs(Pt=>{"use strict";var wd=Symbol.for("react.transitional.element"),D1=Symbol.for("react.portal"),L1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),O1=Symbol.for("react.profiler"),I1=Symbol.for("react.consumer"),P1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),H1=Symbol.for("react.activity"),G1=Symbol.for("react.view_transition"),a_=Symbol.iterator;function V1(e){return e===null||typeof e!="object"?null:(e=a_&&e[a_]||e["@@iterator"],typeof e=="function"?e:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,f_={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=f_,this.updater=n||u_}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function d_(){}d_.prototype=Sr.prototype;function Rd(e,t,n){this.props=e,this.context=t,this.refs=f_,this.updater=n||u_}var Cd=Rd.prototype=new d_;Cd.constructor=Rd;h_(Cd,Sr.prototype);Cd.isPureReactComponent=!0;var r_=Array.isArray;function Ad(){}var Se={H:null,A:null,T:null,S:null},p_=Object.prototype.hasOwnProperty;function Nd(e,t,n){var i=n.ref;return{$$typeof:wd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function k1(e,t){return Nd(e.type,t,e.props)}function Dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===wd}function X1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var o_=/\/+/g;function Ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X1(""+e.key):t.toString(36)}function W1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ad,Ad):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function xr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case wd:case D1:r=!0;break;case c_:return r=e._init,xr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Ed(e,0):i,r_(s)?(n="",r!=null&&(n=r.replace(o_,"$&/")+"/"),xr(s,t,n,"",function(c){return c})):s!=null&&(Dd(s)&&(s=k1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(o_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(r_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Ed(i,l),r+=xr(i,t,n,a,s);else if(l=V1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Ed(i,l++),r+=xr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return xr(W1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Wc(e,t,n){if(e==null)return e;var i=[],s=0;return xr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function q1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var l_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function m_(e){var t=Se.T,n={};n.types=t!==null?t.types:null,Se.T=n;try{var i=e(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ad,l_)}catch(a){l_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Se.T=t}}function g_(e){var t=Se.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else m_(g_.bind(null,e))}var Y1={map:Wc,forEach:function(e,t,n){Wc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wc(e,function(){t++}),t},toArray:function(e){return Wc(e,function(t){return t})||[]},only:function(e){if(!Dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=H1;Pt.Children=Y1;Pt.Component=Sr;Pt.Fragment=L1;Pt.Profiler=O1;Pt.PureComponent=Rd;Pt.StrictMode=U1;Pt.Suspense=z1;Pt.ViewTransition=G1;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};Pt.addTransitionType=g_;Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=h_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!p_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Nd(e.type,s,i)};Pt.createContext=function(e){return e={$$typeof:P1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:I1,_context:e},e};Pt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)p_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Nd(e,a,s)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:B1,render:e}};Pt.isValidElement=Dd;Pt.lazy=function(e){return{$$typeof:c_,_payload:{_status:-1,_result:e},_init:q1}};Pt.memo=function(e,t){return{$$typeof:F1,type:e,compare:t===void 0?null:t}};Pt.startTransition=m_;Pt.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};Pt.use=function(e){return Se.H.use(e)};Pt.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return Se.H.useCallback(e,t)};Pt.useContext=function(e){return Se.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return Se.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return Se.H.useEffectEvent(e)};Pt.useId=function(){return Se.H.useId()};Pt.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return Se.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};Pt.useRef=function(e){return Se.H.useRef(e)};Pt.useState=function(e){return Se.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return Se.H.useTransition()};Pt.version="19.3.1"});var tl=Gs((FN,v_)=>{"use strict";v_.exports=__()});var R_=Gs(we=>{"use strict";function Id(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<qc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function zi(e){return e.length===0?null:e[0]}function Zc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>qc(o,n))l<s&&0>qc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>qc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function qc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(y_=performance,we.unstable_now=function(){return y_.now()}):(Ld=Date,x_=Ld.now(),we.unstable_now=function(){return Ld.now()-x_});var y_,Ld,x_,us=[],Vs=[],Z1=1,ci=null,_n=3,Pd=!1,el=!1,nl=!1,Bd=!1,b_=typeof setTimeout=="function"?setTimeout:null,T_=typeof clearTimeout=="function"?clearTimeout:null,S_=typeof setImmediate<"u"?setImmediate:null;function Yc(e){for(var t=zi(Vs);t!==null;){if(t.callback===null)Zc(Vs);else if(t.startTime<=e)Zc(Vs),t.sortIndex=t.expirationTime,Id(us,t);else break;t=zi(Vs)}}function zd(e){if(nl=!1,Yc(e),!el)if(zi(us)!==null)el=!0,br||(br=!0,Mr());else{var t=zi(Vs);t!==null&&Fd(zd,t.startTime-e)}}var br=!1,il=-1,E_=5,A_=-1;function w_(){return Bd?!0:!(we.unstable_now()-A_<E_)}function Ud(){if(Bd=!1,br){var e=we.unstable_now();A_=e;var t=!0;try{t:{el=!1,nl&&(nl=!1,T_(il),il=-1),Pd=!0;var n=_n;try{e:{for(Yc(e),ci=zi(us);ci!==null&&!(ci.expirationTime>e&&w_());){var i=ci.callback;if(typeof i=="function"){ci.callback=null,_n=ci.priorityLevel;var s=i(ci.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){ci.callback=s,Yc(e),t=!0;break e}ci===zi(us)&&Zc(us),Yc(e)}else Zc(us);ci=zi(us)}if(ci!==null)t=!0;else{var a=zi(Vs);a!==null&&Fd(zd,a.startTime-e),t=!1}}break t}finally{ci=null,_n=n,Pd=!1}t=void 0}}finally{t?Mr():br=!1}}}var Mr;typeof S_=="function"?Mr=function(){S_(Ud)}:typeof MessageChannel<"u"?(Od=new MessageChannel,M_=Od.port2,Od.port1.onmessage=Ud,Mr=function(){M_.postMessage(null)}):Mr=function(){b_(Ud,0)};var Od,M_;function Fd(e,t){il=b_(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E_=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return _n};we.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};we.unstable_requestPaint=function(){Bd=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Z1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Id(Vs,e),zi(us)===null&&e===zi(Vs)&&(nl?(T_(il),il=-1):nl=!0,Fd(zd,n-i))):(e.sortIndex=s,Id(us,e),el||Pd||(el=!0,br||(br=!0,Mr()))),e};we.unstable_shouldYield=w_;we.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var N_=Gs((GN,C_)=>{"use strict";C_.exports=R_()});var U_=Gs(vn=>{"use strict";var J1=tl();function L_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ks(){}var En={d:{f:ks,r:function(){throw Error(L_(522))},D:ks,C:ks,L:ks,m:ks,X:ks,S:ks,M:ks},p:0,findDOMNode:null},K1=Symbol.for("react.portal"),Q1=Symbol.for("react.recoverable"),D_=Symbol.for("react.optimistic_key");function j1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K1,key:i==null?null:i===D_?D_:""+i,children:e,containerInfo:t,implementation:n}}var sl=J1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Jc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=En;vn.browser=function(e){return{$$typeof:Q1,_reason:e}};vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(L_(299));return j1(e,t,null,n)};vn.flushSync=function(e){var t=sl.T,n=En.p;try{if(sl.T=null,En.p=2,e)return e()}finally{sl.T=t,En.p=n,En.d.f()}};vn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,En.d.C(e,t))};vn.prefetchDNS=function(e){typeof e=="string"&&En.d.D(e)};vn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Jc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?En.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&En.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};vn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Jc(t.as,t.crossOrigin);En.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&En.d.M(e)};vn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Jc(n,t.crossOrigin);En.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};vn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Jc(t.as,t.crossOrigin);En.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else En.d.m(e)};vn.requestFormReset=function(e){En.d.r(e)};vn.unstable_batchedUpdates=function(e,t){return e(t)};vn.useFormState=function(e,t,n){return sl.H.useFormState(e,t,n)};vn.useFormStatus=function(){return sl.H.useHostTransitionStatus()};vn.version="19.3.1"});var P_=Gs((kN,I_)=>{"use strict";function O_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O_)}catch(e){console.error(e)}}O_(),I_.exports=U_()});var MM=Gs(Nh=>{"use strict";var Je=N_(),Sy=tl(),$1=P_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function My(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function by(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ty(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B_(e){if(Wl(e)!==e)throw Error(Q(188))}function tT(e){var t=e.alternate;if(!t){if(t=Wl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return B_(s),e;if(a===i)return B_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Ey(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Ey(e),t!==null)return t;e=e.sibling}return null}function Vn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Vn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function nr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function z_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Ay(e){var t=[null,null],n=nr(e);return n===null||wy(t,e,n.child,{foundSelf:!1}),t}function wy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&wy(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ze(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Nr=null,_p=null;function eT(e,t,n){return e===n?!0:e===t?(Nr=e,!0):!1}function nT(e,t,n){return e===n?(_p=e,!1):e===t?(_p!==null&&(Nr=e),!0):!1}function F_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function vp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var ye=Object.assign,iT=Symbol.for("react.element"),Kc=Symbol.for("react.transitional.element"),hl=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Ry=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),Cy=Symbol.for("react.consumer"),Xi=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),Sp=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),Ys=Symbol.for("react.lazy"),Mp=Symbol.for("react.activity"),sT=Symbol.for("react.legacy_hidden"),aT=Symbol.for("react.memo_cache_sentinel"),bp=Symbol.for("react.view_transition"),rT=Symbol.for("react.recoverable"),H_=Symbol.iterator;function al(e){return e===null||typeof e!="object"?null:(e=H_&&e[H_]||e["@@iterator"],typeof e=="function"?e:null)}var oT=Symbol.for("react.client.reference");function Tp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case yp:return"Profiler";case Ry:return"StrictMode";case xp:return"Suspense";case Sp:return"SuspenseList";case Mp:return"Activity";case bp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case hl:return"Portal";case Xi:return e.displayName||"Context";case Cy:return(e._context.displayName||"Context")+".Consumer";case Rm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cm:return t=e.displayName||null,t!==null?t:Tp(e.type)||"Memo";case Ys:t=e._payload,e=e._init;try{return Tp(e(t))}catch{}}return null}var fl=Array.isArray,Dt=Sy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=$1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka={pending:!1,data:null,method:null,action:null},Ep=[],Lr=-1;function Qi(e){return{current:e}}function hn(e){0>Lr||(e.current=Ep[Lr],Ep[Lr]=null,Lr--)}function Te(e,t){Lr++,Ep[Lr]=e.current,e.current=t}var Zi=Qi(null),Cl=Qi(null),na=Qi(null),Pu=Qi(null);function Bu(e,t){switch(Te(na,t),Te(Cl,e),Te(Zi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ty(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ty(t),e=QS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}hn(Zi),Te(Zi,e)}function jr(){hn(Zi),hn(Cl),hn(na)}function Ap(e){var t=e.memoizedState;t!==null&&(lo._currentValue=t.memoizedState,Te(Pu,e)),t=Zi.current;var n=QS(t,e.type);t!==n&&(Te(Cl,e),Te(Zi,n))}function zu(e){Cl.current===e&&(hn(Zi),hn(Cl)),Pu.current===e&&(hn(Pu),lo._currentValue=ka)}var Hd,G_;function Ws(e){if(Hd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hd=t&&t[1]||"",G_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hd+e+G_}var Gd=!1;function Vd(e,t){if(!e||Gd)return"";Gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Gd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ws(n):""}function lT(e,t){switch(e.tag){case 26:case 27:case 5:return Ws(e.type);case 16:return Ws("Lazy");case 13:return e.child!==t&&t!==null?Ws("Suspense Fallback"):Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 15:return Vd(e.type,!1);case 11:return Vd(e.type.render,!1);case 1:return Vd(e.type,!0);case 31:return Ws("Activity");case 30:return Ws("ViewTransition");default:return""}}function V_(e){try{var t="",n=null;do t+=lT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var wp=Object.prototype.hasOwnProperty,Nm=Je.unstable_scheduleCallback,kd=Je.unstable_cancelCallback,cT=Je.unstable_shouldYield,uT=Je.unstable_requestPaint,Qn=Je.unstable_now,hT=Je.unstable_getCurrentPriorityLevel,Ny=Je.unstable_ImmediatePriority,Dy=Je.unstable_UserBlockingPriority,Fu=Je.unstable_NormalPriority,fT=Je.unstable_LowPriority,Ly=Je.unstable_IdlePriority,dT=Je.log,pT=Je.unstable_setDisableYieldValue,ql=null,jn=null;function Ks(e){if(typeof dT=="function"&&pT(e),jn&&typeof jn.setStrictMode=="function")try{jn.setStrictMode(ql,e)}catch{}}var $n=Math.clz32?Math.clz32:_T,mT=Math.log,gT=Math.LN2;function _T(e){return e>>>=0,e===0?32:31-(mT(e)/gT|0)|0}var Qc=256,jc=262144,$c=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=za(i):(r&=o,r!==0?s=za(r):n||(n=o&~e,n!==0&&(s=za(n))))):(o=i&~a,o!==0?s=za(o):r!==0?s=za(r):n||(n=i&~e,n!==0&&(s=za(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-$n(n),s=1<<i;t|=e[i],n&=~s}return t}function vT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oy(){var e=$c;return $c<<=1,($c&62914560)===0&&($c=4194304),e}function Xd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-$n(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Iy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Iy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$n(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Py(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$n(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function By(e,t){var n=t&-t;return n=(n&42)!==0?1:Dm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Dm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zy(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:yM(e.type))}function k_(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var bs=Math.random().toString(36).slice(2),cn="__reactFiber$"+bs,kn="__reactProps$"+bs,ho="__reactContainer$"+bs,X_="__reactEvents$"+bs,xT="__reactListeners$"+bs,ST="__reactHandles$"+bs,W_="__reactResources$"+bs,Jl="__reactMarker$"+bs,Hu="__reactLoad$"+bs;function fh(e){delete e[cn],delete e[kn],delete e[xT],delete e[ST]}function Ga(e){var t;if(t=e[cn])return t;for(var n=e.parentNode;n;){if(t=n[ho]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ly(e);e!==null;){if(n=e[cn])return n;e=ly(e)}return t}e=n,n=e.parentNode}return null}function fo(e){if(e=e[cn]||e[ho]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Vr(e){var t=e[W_];return t||(t=e[W_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nn(e){e[Jl]=!0}function Fy(e){e[Hu]=void 0}var Hy=new Set,Gy={};function ir(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Gy[e]=t,e=0;e<t.length;e++)Hy.add(t[e])}var MT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),q_={},Y_={};function bT(e){return wp.call(Y_,e)?!0:wp.call(q_,e)?!1:MT.test(e)?Y_[e]=!0:(q_[e]=!0,!1)}var ne=!1;function Z_(){var e=ne;return ne=!1,e}function _u(e,t,n){if(bT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function tu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function hs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rp(e){if(!e._valueTracker){var t=Vy(e)?"checked":"value";e._valueTracker=TT(e,t,""+e[t])}}function ky(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Vy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var ET=/[\n"\\]/g;function pi(e){return e.replace(ET,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yn(t)):e.value!==""+Yn(t)&&(e.value=""+Yn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Wd(e,Yn(e.value)):Wd(e,Yn(t)):n!=null?Wd(e,Yn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Yn(o):e.removeAttribute("name")}function Xy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Rp(e);return}n=n!=null?""+Yn(n):"",t=t!=null?""+Yn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Rp(e)}function Wd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function kr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Wy(e,t,n){if(t!=null&&(t=""+Yn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yn(n):""}function qy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(fl(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Rp(e)}function to(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var AT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||AT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Yy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ne=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(J_(e,s,i),ne=!0)}else for(var a in t)t.hasOwnProperty(a)&&J_(e,a,t[a])}function Um(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vu(e){return RT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Np=null;function Om(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Xr=null;function K_(e){var t=fo(e);if(t&&(e=t.stateNode)){var n=e[kn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Cp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[kn]||null;if(!s)throw Error(Q(90));Cp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ky(i)}break t;case"textarea":Wy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}}}var qd=!1;function Zy(e,t,n){if(qd)return e(t,n);qd=!0;try{var i=e(t);return i}finally{if(qd=!1,(Ur!==null||Xr!==null)&&(Ah(),Ur&&(t=Ur,e=Xr,Xr=Ur=null,K_(t),e)))for(t=0;t<e.length;t++)K_(e[t])}}function Nl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[kn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var _s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dp=!1;if(_s)try{Tr={},Object.defineProperty(Tr,"passive",{get:function(){Dp=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Dp=!1}var Tr,Qs=null,Im=null,yu=null;function Jy(){if(yu)return yu;var e,t=Im,n=t.length,i,s="value"in Qs?Qs.value:Qs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return yu=s.slice(e,1<i?1-i:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function Q_(){return!1}function Cn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?eu:Q_,this.isPropagationStopped=Q_,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Cn(_a),Kl=ye({},_a,{view:0,detail:0}),CT=Cn(Kl),Yd,Zd,rl,ph=ye({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(Yd=e.screenX-rl.screenX,Zd=e.screenY-rl.screenY):Zd=Yd=0,rl=e),Yd)},movementY:function(e){return"movementY"in e?e.movementY:Zd}}),j_=Cn(ph),NT=ye({},ph,{dataTransfer:0}),DT=Cn(NT),LT=ye({},Kl,{relatedTarget:0}),Jd=Cn(LT),UT=ye({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),OT=Cn(UT),IT=ye({},_a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),PT=Cn(IT),BT=ye({},_a,{data:0}),$_=Cn(BT),zT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=HT[e])?!!t[e]:!1}function Pm(){return GT}var VT=ye({},Kl,{key:function(e){if(e.key){var t=zT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pm,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kT=Cn(VT),XT=ye({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=Cn(XT),WT=ye({},_a,{submitter:0}),qT=Cn(WT),YT=ye({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pm}),ZT=Cn(YT),JT=ye({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),KT=Cn(JT),QT=ye({},ph,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jT=Cn(QT),$T=ye({},_a,{newState:0,oldState:0,source:0}),tE=Cn($T),eE=[9,13,27,32],Bm=_s&&"CompositionEvent"in window,gl=null;_s&&"documentMode"in document&&(gl=document.documentMode);var nE=_s&&"TextEvent"in window&&!gl,Ky=_s&&(!Bm||gl&&8<gl&&11>=gl),ev=" ",nv=!1;function Qy(e,t){switch(e){case"keyup":return eE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function iE(e,t){switch(e){case"compositionend":return jy(t);case"keypress":return t.which!==32?null:(nv=!0,ev);case"textInput":return e=t.data,e===ev&&nv?null:e;default:return null}}function sE(e,t){if(Or)return e==="compositionend"||!Bm&&Qy(e,t)?(e=Jy(),yu=Im=Qs=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ky&&t.locale!=="ko"?null:t.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!aE[e.type]:t==="textarea"}function $y(e,t,n,i){Ur?Xr?Xr.push(i):Xr=[i]:Ur=i,t=lh(t,"onChange"),0<t.length&&(n=new dh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var _l=null,Dl=null;function rE(e){ZS(e,0)}function mh(e){var t=dl(e);if(ky(t))return e}function sv(e,t){if(e==="change")return t}var tx=!1;_s&&(_s?(iu="oninput"in document,iu||(Kd=document.createElement("div"),Kd.setAttribute("oninput","return;"),iu=typeof Kd.oninput=="function"),nu=iu):nu=!1,tx=nu&&(!document.documentMode||9<document.documentMode));var nu,iu,Kd;function av(){_l&&(_l.detachEvent("onpropertychange",ex),Dl=_l=null)}function ex(e){if(e.propertyName==="value"&&mh(Dl)){var t=[];$y(t,Dl,e,Om(e)),Zy(rE,t)}}function oE(e,t,n){e==="focusin"?(av(),_l=t,Dl=n,_l.attachEvent("onpropertychange",ex)):e==="focusout"&&av()}function lE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mh(Dl)}function cE(e,t){if(e==="click")return mh(t)}function uE(e,t){if(e==="input"||e==="change")return mh(t)}function hE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ei=typeof Object.is=="function"?Object.is:hE;function Ll(e,t){if(ei(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!wp.call(t,s)||!ei(e[s],t[s]))return!1}return!0}function Lp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ov(e,t){var n=rv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=rv(n)}}function nx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ix(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lp(e.document)}return t}function zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fE=_s&&"documentMode"in document&&11>=document.documentMode,Ir=null,Up=null,vl=null,Op=!1;function lv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Op||Ir==null||Ir!==Lp(i)||(i=Ir,"selectionStart"in i&&zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vl&&Ll(vl,i)||(vl=i,i=lh(Up,"onSelect"),0<i.length&&(t=new dh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ir)))}function Pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Qd={},sx={};_s&&(sx=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function sr(e){if(Qd[e])return Qd[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sx)return Qd[e]=t[n];return e}var ax=sr("animationend"),rx=sr("animationiteration"),ox=sr("animationstart"),dE=sr("transitionrun"),pE=sr("transitionstart"),mE=sr("transitioncancel"),lx=sr("transitionend"),cx=new Map,Ip="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ip.push("scrollEnd");function Ri(e,t){cx.set(e,t),ir(t,[e])}var gE=0;function vs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=wi.identifierPrefix;var n=gE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function cv(e){if(e==null||typeof e=="string")return e;var t=null,n=Qr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ts(e,t){return e=cv(e),t=cv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Br=0,Fm=0;function gh(){for(var e=Br,t=Fm=Br=0;t<e;){var n=hi[t];hi[t++]=null;var i=hi[t];hi[t++]=null;var s=hi[t];hi[t++]=null;var a=hi[t];if(hi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&ux(n,s,a)}}function _h(e,t,n,i){hi[Br++]=e,hi[Br++]=t,hi[Br++]=n,hi[Br++]=i,Fm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Hm(e,t,n,i){return _h(e,t,n,i),Vu(e)}function ar(e,t){return _h(e,null,null,t),Vu(e)}function ux(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-$n(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Vu(e){if(50<Rl)throw Rl=0,Nu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zr={};function _E(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new _E(e,t,n,i)}function Gm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ms(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Su(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Gm(i)&&(r=1);else if(typeof i=="string")r=kA(e,n,Zi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Mp:return e=Hn(31,n,t,s),e.elementType=Mp,e.lanes=a,e;case Dr:return Xa(n.children,s,a,t);case Ry:r=8,s|=24;break;case yp:return e=Hn(12,n,t,s|2),e.elementType=yp,e.lanes=a,e;case xp:return e=Hn(13,n,t,s),e.elementType=xp,e.lanes=a,e;case Sp:return e=Hn(19,n,t,s),e.elementType=Sp,e.lanes=a,e;case sT:case bp:return e=s|32,e=Hn(30,n,t,e),e.elementType=bp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Xi:r=10;break t;case Cy:r=9;break t;case Rm:r=11;break t;case Cm:r=14;break t;case Ys:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=Hn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Xa(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function jd(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function fx(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function $d(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var uv=new WeakMap;function mi(e,t){if(typeof e=="object"&&e!==null){var n=uv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:V_(t)},uv.set(e,t),t)}return{value:e,source:t,stack:V_(t)}}var Fr=[],Hr=0,ku=null,Ul=0,fi=[],di=0,fa=null,qi=1,Yi="";function ds(e,t){Fr[Hr++]=Ul,Fr[Hr++]=ku,ku=e,Ul=t}function dx(e,t,n){fi[di++]=qi,fi[di++]=Yi,fi[di++]=fa,fa=e;var i=qi;e=Yi;var s=32-$n(i)-1;i&=~(1<<s),n+=1;var a=32-$n(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,qi=1<<32-$n(t)+s|n<<s|i,Yi=a+e}else qi=1<<a|n<<s|i,Yi=e}function vh(e){e.return!==null&&(ds(e,1),dx(e,1,0))}function Vm(e){for(;e===ku;)ku=Fr[--Hr],Fr[Hr]=null,Ul=Fr[--Hr],Fr[Hr]=null;for(;e===fa;)fa=fi[--di],fi[di]=null,Yi=fi[--di],fi[di]=null,qi=fi[--di],fi[di]=null}function px(e,t){fi[di++]=qi,fi[di++]=Yi,fi[di++]=fa,qi=t.id,Yi=t.overflow,fa=e}var sn=null,be=null,kt=!1,ia=null,gi=!1,Pp=Error(Q(519));function da(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(mi(t,e)),Pp}function hv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[cn]=e,t[kn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<zl.length;n++)Xt(zl[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),Xy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),qy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||KS(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Wi),t=!0):t=!1,t||da(e,!0)}function Xu(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:sn=sn.return}}function Er(e){if(e!==sn)return!1;if(!kt)return Xu(e),kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||xm(e.type,e.memoizedProps)),n=!n),n&&be&&da(e),Xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));be=oy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));be=oy(e)}else t===27?(t=be,va(e.type)?(e=Tm,Tm=null,be=e):be=t):be=sn?_i(e.stateNode.nextSibling):null;return!0}function Za(){be=sn=null,kt=!1}function tp(){var e=ia;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ia=null),e}function Ol(e){ia===null?ia=[e]:ia.push(e)}var Bp=Qi(null),rr=null,ps=null;function js(e,t,n){Te(Bp,t._currentValue),t._currentValue=n}function gs(e){e._currentValue=Bp.current,hn(Bp)}function Mu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function zp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Mu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Mu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Mu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ja(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;ei(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Pu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(lo):e=[lo])}s=s.return}return e!==null&&zp(t,e,n,i),t.flags|=262144,e!==null}function Wu(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){rr=e,ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return mx(rr,e)}function su(e,t){return rr===null&&Ka(e),mx(e,t)}function mx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ps===null){if(e===null)throw Error(Q(308));ps=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ps=ps.next=t;return n}var vE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},yE=Je.unstable_scheduleCallback,xE=Je.unstable_NormalPriority,ke={$$typeof:Xi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function km(){return{controller:new vE,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&yE(xE,function(){e.controller.abort()})}function fv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var pl=null;function SE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var yl=null,Fp=0,Qa=0,Wr=null;function ME(e,t){if(yl===null){var n=yl=[];Fp=0,Qa=_g(),Wr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Fp++,t.then(dv,dv),t}function dv(){if(--Fp===0&&(pl=null,yl!==null)){Wr!==null&&(Wr.status="fulfilled");var e=yl;yl=null,Qa=0,Wr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var pv=Dt.S;Dt.S=function(e,t){if(US=Qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ME(e,t),pl!==null)for(var n=ao;n!==null;)fv(n,pl),n=n.next;if(n=e.types,n!==null){for(var i=ao;i!==null;)fv(i,n),i=i.next;if(Qa!==0){i=pl,i===null&&(i=pl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}pv!==null&&pv(e,t)};var Wa=Qi(null);function Xm(){var e=Wa.current;return e!==null?e:ve.pooledCache}function bu(e,t){t===null?Te(Wa,Wa.current):Te(Wa,t.pool)}function gx(){var e=Xm();return e===null?null:{parent:ke._currentValue,pool:e}}var po=Error(Q(460)),Wm=Error(Q(474)),yh=Error(Q(542)),qu={then:function(){}};function mv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _x(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wi,Wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_v(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Wi,Wi);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_v(e),e}throw qa=t,po}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(qa=n,po):n}}var qa=null;function gv(){if(qa===null)throw Error(Q(459));var e=qa;return qa=null,e}function _v(e){if(e===po||e===yh)throw Error(Q(483))}var qr=null,Il=0;function au(e){var t=Il;return Il+=1,qr===null&&(qr=[]),_x(qr,e,t)}function Xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ru(e,t){throw t.$$typeof===iT?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function vx(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key===null?m.set(h.index,h):m.set(h.key,h),h=h.sibling;return m}function s(h,m){return h=ms(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=134217730,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,m,x,y){return m===null||m.tag!==6?(m=jd(x,h.mode,y),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,y){var E=x.type;return E===Dr?(h=f(h,m,x.props.children,y,x.key),Xs(h,x),h):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ys&&Fa(E)===m.type)?(m=s(m,x.props),Xs(m,x),m.return=h,m):(m=Su(x.type,x.key,x.props,null,h.mode,y),Xs(m,x),m.return=h,m)}function c(h,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=$d(x,h.mode,y),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,y,E){return m===null||m.tag!==7?(m=Xa(x,h.mode,y,E),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=jd(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Kc:return x=Su(m.type,m.key,m.props,null,h.mode,x),Xs(x,m),x.return=h,x;case hl:return m=$d(m,h.mode,x),m.return=h,m;case Ys:return m=Fa(m),p(h,m,x)}if(fl(m)||al(m))return m=Xa(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,au(m),x);if(m.$$typeof===Xi)return p(h,su(h,m),x);ru(h,m)}return null}function u(h,m,x,y){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return E!==null?null:o(h,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:return x.key===E?l(h,m,x,y):null;case hl:return x.key===E?c(h,m,x,y):null;case Ys:return x=Fa(x),u(h,m,x,y)}if(fl(x)||al(x))return E!==null?null:f(h,m,x,y,null);if(typeof x.then=="function")return u(h,m,au(x),y);if(x.$$typeof===Xi)return u(h,m,su(h,x),y);ru(h,x)}return null}function d(h,m,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(x)||null,o(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Kc:return h=h.get(y.key===null?x:y.key)||null,l(m,h,y,E);case hl:return h=h.get(y.key===null?x:y.key)||null,c(m,h,y,E);case Ys:return y=Fa(y),d(h,m,x,y,E)}if(fl(y)||al(y))return h=h.get(x)||null,f(m,h,y,E,null);if(typeof y.then=="function")return d(h,m,x,au(y),E);if(y.$$typeof===Xi)return d(h,m,x,su(m,y),E);ru(m,y)}return null}function v(h,m,x,y){for(var E=null,A=null,_=m,T=m=0,D=null;_!==null&&T<x.length;T++){_.index>T?(D=_,_=null):D=_.sibling;var R=u(h,_,x[T],y);if(R===null){_===null&&(_=D);break}e&&_&&R.alternate===null&&t(h,_),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R,_=D}if(T===x.length)return n(h,_),kt&&ds(h,T),E;if(_===null){for(;T<x.length;T++)_=p(h,x[T],y),_!==null&&(m=a(_,m,T),A===null?E=_:A.sibling=_,A=_);return kt&&ds(h,T),E}for(_=i(_);T<x.length;T++)D=d(_,h,T,x[T],y),D!==null&&(e&&(R=D.alternate,R!==null&&_.delete(R.key===null?T:R.key)),m=a(D,m,T),A===null?E=D:A.sibling=D,A=D);return e&&_.forEach(function(U){return t(h,U)}),kt&&ds(h,T),E}function M(h,m,x,y){if(x==null)throw Error(Q(151));for(var E=null,A=null,_=m,T=m=0,D=null,R=x.next();_!==null&&!R.done;T++,R=x.next()){_.index>T?(D=_,_=null):D=_.sibling;var U=u(h,_,R.value,y);if(U===null){_===null&&(_=D);break}e&&_&&U.alternate===null&&t(h,_),m=a(U,m,T),A===null?E=U:A.sibling=U,A=U,_=D}if(R.done)return n(h,_),kt&&ds(h,T),E;if(_===null){for(;!R.done;T++,R=x.next())R=p(h,R.value,y),R!==null&&(m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return kt&&ds(h,T),E}for(_=i(_);!R.done;T++,R=x.next())R=d(_,h,T,R.value,y),R!==null&&(e&&(D=R.alternate,D!==null&&_.delete(D.key===null?T:D.key)),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return e&&_.forEach(function(I){return t(h,I)}),kt&&ds(h,T),E}function g(h,m,x,y){if(typeof x=="object"&&x!==null&&x.type===Dr&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Kc:t:{for(var E=x.key;m!==null;){if(m.key===E){if(E=x.type,E===Dr){if(m.tag===7){n(h,m.sibling),y=s(m,x.props.children),Xs(y,x),y.return=h,h=y;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ys&&Fa(E)===m.type){n(h,m.sibling),y=s(m,x.props),Xs(y,x),y.return=h,h=y;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===Dr?(y=Xa(x.props.children,h.mode,y,x.key),Xs(y,x),y.return=h,h=y):(y=Su(x.type,x.key,x.props,null,h.mode,y),Xs(y,x),y.return=h,h=y)}return r(h);case hl:t:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),y=s(m,x.children||[]),y.return=h,h=y;break t}else{n(h,m);break}else t(h,m);m=m.sibling}y=$d(x,h.mode,y),y.return=h,h=y}return r(h);case Ys:return x=Fa(x),g(h,m,x,y)}if(fl(x))return v(h,m,x,y);if(al(x)){if(E=al(x),typeof E!="function")throw Error(Q(150));return x=E.call(x),M(h,m,x,y)}if(typeof x.then=="function")return g(h,m,au(x),y);if(x.$$typeof===Xi)return g(h,m,su(h,x),y);ru(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),y=s(m,x),y.return=h,h=y):(n(h,m),y=jd(x,h.mode,y),y.return=h,h=y),r(h)):n(h,m)}return function(h,m,x,y){try{Il=0;var E=g(h,m,x,y);return qr=null,E}catch(_){if(_===po||_===yh)throw _;var A=Hn(29,_,null,h.mode);return A.lanes=y,A.return=h,A}}}var ja=vx(!0),yx=vx(!1),Zs=!1;function qm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Vu(e),ux(e,null,n),t}return _h(e,i,t,n),Vu(e)}function xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Py(e,n)}}function ep(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Gp=!1;function Sl(){if(Gp){var e=Wr;if(e!==null)throw e}}function Ml(e,t,n,i){Gp=!1;var s=e.updateQueue;Zs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Jt&u)===u:(i&u)===u){u!==0&&u===Qa&&(Gp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=ye({},p,u);break t;case 2:Zs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ga|=r,e.lanes=r,e.memoizedState=p}}function xx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Sx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)xx(n[e],t)}var pa=Qi(null),Yu=Qi(0);function vv(e,t){e=Ms,Te(Yu,e),Te(pa,t),Ms=e|t.baseLanes}function Vp(){Te(Yu,Ms),Te(pa,pa.current)}function Ym(){Ms=Yu.current,hn(pa),hn(Yu)}var pn=Qi(null),yn=null;function ra(e){var t=e.alternate;Te(fn,fn.current&1),Te(pn,e),yn===null&&(t===null||pa.current!==null||t.memoizedState!==null)&&(yn=e)}function kp(e){Te(fn,fn.current),Te(pn,e),yn===null&&(yn=e)}function Mx(e){e.tag===22?(Te(fn,fn.current),Te(pn,e),yn===null&&(yn=e)):oa()}function oa(){Te(fn,fn.current),Te(pn,pn.current)}function Zn(e){hn(pn),yn===e&&(yn=null),hn(fn)}var fn=Qi(0);function Pl(e,t){Te(pn,pn.current),Te(fn,t)}function Zm(e){hn(fn),hn(pn),yn===e&&(yn=null)}function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bm(n)||Sg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=0,zt=null,me=null,Ve=null,Ju=!1,Yr=!1,$a=!1,Ku=0,Bl=0,Zr=null,TE=0;function Ie(){throw Error(Q(321))}function Jm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ei(e[n],t[n]))return!1;return!0}function Km(e,t,n,i,s,a){return ys=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?$x:tS,$a=!1,a=n(i,s),$a=!1,Yr&&(a=Tx(t,n,i,s)),bx(e),a}function bx(e){Dt.H=Qu;var t=me!==null&&me.next!==null;if(ys=0,Ve=me=zt=null,Ju=!1,Bl=0,Zr=null,t)throw Error(Q(300));e===null||Xe||(e=e.dependencies,e!==null&&Wu(e)&&(Xe=!0))}function Tx(e,t,n,i){zt=e;var s=0;do{if(Yr&&(Zr=null),Bl=0,Yr=!1,25<=s)throw Error(Q(301));if(s+=1,Ve=me=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=LE,a=t(n,i)}while(Yr);return a}function EE(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(zt.flags|=1024),t}function Qm(){var e=Ku!==0;return Ku=0,e}function jm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $m(e){if(Ju){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ju=!1}ys=0,Ve=me=zt=null,Yr=!1,Bl=Ku=0,Zr=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?zt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function ze(){if(me===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Ve===null?zt.memoizedState:Ve.next;if(t!==null)Ve=t,me=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ve===null?zt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var t=Bl;return Bl+=1,Zr===null&&(Zr=[]),e=_x(Zr,e,t),t=zt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?$x:tS),e}function Sh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===rT)return;if(e.$$typeof===Xi)return un(e)}throw Error(Q(438,String(e)))}function tg(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=aT;return t.index++,n}function xs(e,t){return typeof t=="function"?t(e):t}function Tu(e){var t=ze();return eg(t,me,e)}function eg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Jt&p)===p:(ys&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Qa&&(f=!0);else if((ys&u)===u){c=c.next,u===Qa&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,ga|=u;p=c.action,$a&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,ga|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ei(a,e.memoizedState)&&(Xe=!0,f&&(n=Wr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function np(e){var t=ze(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ei(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ex(e,t,n){var i=zt,s=ze(),a=kt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!ei((me||s).memoizedState,n);if(r&&(s.memoizedState=n,Xe=!0),s=s.queue,ng(Rx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ve!==null&&(Ve.memoizedState.tag&1)!==0,eo(e?9:8,{destroy:void 0},wx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ve===null)throw Error(Q(349));a||(ys&127)!==0||Ax(i,t,n)}return n}function Ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=xh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wx(e,t,n,i){t.value=n,t.getSnapshot=i,Cx(t)&&Nx(e)}function Rx(e,t,n){return n(function(){Cx(t)&&Nx(e)})}function Cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ei(e,n)}catch{return!0}}function Nx(e){var t=ar(e,2);t!==null&&Gn(t,e,2)}function Xp(e){var t=Rn();if(typeof e=="function"){var n=e;if(e=n(),$a){Ks(!0);try{n()}finally{Ks(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},t}function Dx(e,t,n,i){return e.baseState=n,eg(e,me,typeof i=="function"?i:xs)}function AE(e,t,n,i,s){if(bh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Lx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Lx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};r.types=a!==null?a.types:null,Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),yv(e,t,o)}catch(c){Wp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),yv(e,t,a)}catch(c){Wp(e,t,c)}}function yv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){xv(e,t,i)},function(i){return Wp(e,t,i)}):xv(e,t,n)}function xv(e,t,n){t.status="fulfilled",t.value=n,Ux(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Lx(e,n)))}function Wp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ux(t),t=t.next;while(t!==i)}e.action=null}function Ux(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ox(e,t){return t}function Sv(e,t){if(kt){var n=ve.formState;if(n!==null){t:{var i=zt;if(kt){if(be){e:{for(var s=be,a=gi;s.nodeType!==8;){if(!a){s=null;break e}if(s=_i(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){be=_i(s.nextSibling),i=s.data==="F!";break t}}da(i)}i=!1}i&&(t=n[0])}}return n=Rn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ox,lastRenderedState:t},n.queue=i,n=Kx.bind(null,zt,i),i.dispatch=n,i=Xp(!1),a=rg.bind(null,zt,!1,i.queue),i=Rn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=AE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Mv(e){var t=ze();return Ix(t,me,e)}function Ix(e,t,n){if(t=eg(e,t,Ox)[0],e=Tu(xs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=jl(t)}catch(r){throw r===po?yh:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,eo(9,{destroy:void 0},wE.bind(null,s,n),null)),[i,a,e]}function wE(e,t){e.action=t}function bv(e){var t=ze(),n=me;if(n!==null)return Ix(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function eo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=xh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Px(){return ze().memoizedState}function Eu(e,t,n,i){var s=Rn();zt.flags|=e,s.memoizedState=eo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Mh(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;me!==null&&i!==null&&Jm(i,me.memoizedState.deps)?s.memoizedState=eo(t,a,n,i):(zt.flags|=e,s.memoizedState=eo(1|t,a,n,i))}function Tv(e,t){Eu(8390656,8,e,t)}function ng(e,t){Mh(2048,8,e,t)}function RE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=xh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Bx(e){var t=ze().memoizedState;return RE({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function zx(e,t){return Mh(4,2,e,t)}function Fx(e,t){return Mh(4,4,e,t)}function Hx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gx(e,t,n){n=n!=null?n.concat([e]):null,Mh(4,4,Hx.bind(null,t,e),n)}function ig(){}function Vx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Jm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kx(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Jm(t,i[1]))return i[0];if(i=e(),$a){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i}function sg(e,t,n){return n===void 0||(ys&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=IS(),zt.lanes|=e,ga|=e,n)}function Xx(e,t,n,i){return ei(n,t)?n:pa.current!==null?(e=sg(e,n,i),ei(e,t)||(Xe=!0),e):(ys&106)===0||(ys&1073741824)!==0&&(Jt&261930)===0?(Xe=!0,e.memoizedState=n):(e=IS(),zt.lanes|=e,ga|=e,t)}function Wx(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Dt.T,o={};o.types=r!==null?r.types:null,Dt.T=o,rg(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=bE(l,i);bl(e,t,f,ti(e))}else bl(e,t,i,ti(e))}catch(p){bl(e,t,{then:function(){},status:"rejected",reason:p},ti())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function CE(){}function qp(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=qx(e).queue;Wx(e,s,t,ka,n===null?CE:function(){return Yx(e),n(i)})}function qx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ka,baseState:ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yx(e){var t=qx(e);t.next===null&&(t=e.alternate.memoizedState),bl(e,t.next.queue,{},ti())}function ag(){return un(lo)}function Zx(){return ze().memoizedState}function Jx(){return ze().memoizedState}function NE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ti();e=sa(n);var i=aa(t,e,n);i!==null&&(Gn(i,t,n),xl(i,t,n)),t={cache:km()},e.payload=t;return}t=t.return}}function DE(e,t,n){var i=ti();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bh(e)?Qx(t,n):(n=Hm(e,t,n,i),n!==null&&(Gn(n,e,i),jx(n,t,i)))}function Kx(e,t,n){var i=ti();bl(e,t,n,i)}function bl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bh(e))Qx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ei(o,r))return _h(e,t,s,0),ve===null&&gh(),!1}catch{}if(n=Hm(e,t,s,i),n!==null)return Gn(n,e,i),jx(n,t,i),!0}return!1}function rg(e,t,n,i){if(i={lane:2,revertLane:_g(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},bh(e)){if(t)throw Error(Q(479))}else t=Hm(e,n,i,2),t!==null&&Gn(t,e,2)}function bh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function Qx(e,t){Yr=Ju=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Py(e,n)}}var Qu={readContext:un,use:Sh,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie,useEffectEvent:Ie},$x={readContext:un,use:Sh,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:Tv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Eu(4194308,4,Hx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eu(4194308,4,e,t)},useInsertionEffect:function(e,t){Eu(4,2,e,t)},useMemo:function(e,t){var n=Rn();t=t===void 0?null:t;var i=e();if($a){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Rn();if(n!==void 0){var s=n(t);if($a){Ks(!0);try{n(t)}finally{Ks(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=DE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Rn();return e={current:e},t.memoizedState=e},useState:function(e){e=Xp(e);var t=e.queue,n=Kx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ig,useDeferredValue:function(e,t){var n=Rn();return sg(n,e,t)},useTransition:function(){var e=Xp(!1);return e=Wx.bind(null,zt,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Rn();if(kt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),ve===null)throw Error(Q(349));(Jt&127)!==0||Ax(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Tv(Rx.bind(null,i,a,e),[e]),i.flags|=2048,eo(9,{destroy:void 0},wx.bind(null,i,a,n,t),null),n},useId:function(){var e=Rn(),t=ve.identifierPrefix;if(kt){var n=Yi,i=qi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ku++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=TE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ag,useFormState:Sv,useActionState:Sv,useOptimistic:function(e){var t=Rn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=rg.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:tg,useCacheRefresh:function(){return Rn().memoizedState=NE.bind(null,zt)},useEffectEvent:function(e){var t=Rn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},tS={readContext:un,use:Sh,useCallback:Vx,useContext:un,useEffect:ng,useImperativeHandle:Gx,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:kx,useReducer:Tu,useRef:Px,useState:function(){return Tu(xs)},useDebugValue:ig,useDeferredValue:function(e,t){var n=ze();return Xx(n,me.memoizedState,e,t)},useTransition:function(){var e=Tu(xs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Ex,useId:Zx,useHostTransitionStatus:ag,useFormState:Mv,useActionState:Mv,useOptimistic:function(e,t){var n=ze();return Dx(n,me,e,t)},useMemoCache:tg,useCacheRefresh:Jx,useEffectEvent:Bx},LE={readContext:un,use:Sh,useCallback:Vx,useContext:un,useEffect:ng,useImperativeHandle:Gx,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:kx,useReducer:np,useRef:Px,useState:function(){return np(xs)},useDebugValue:ig,useDeferredValue:function(e,t){var n=ze();return me===null?sg(n,e,t):Xx(n,me.memoizedState,e,t)},useTransition:function(){var e=np(xs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Ex,useId:Zx,useHostTransitionStatus:ag,useFormState:bv,useActionState:bv,useOptimistic:function(e,t){var n=ze();return me!==null?Dx(n,me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:tg,useCacheRefresh:Jx,useEffectEvent:Bx};function ip(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ti(),s=sa(i);s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Gn(t,e,i),xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ti(),s=sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Gn(t,e,i),xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ti(),i=sa(n);i.tag=2,t!=null&&(i.callback=t),t=aa(e,i,n),t!==null&&(Gn(t,e,n),xl(t,e,n))}};function Ev(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ll(n,i)||!Ll(s,a):!0}function Av(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Yp.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ye({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function eS(e){Gu(e)}function nS(e){console.error(e)}function iS(e){Gu(e)}function ju(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function wv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Zp(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){ju(e,t)},n}function sS(e){return e=sa(e),e.tag=3,e}function aS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){wv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){wv(t,n,i),typeof s!="function"&&(la===null?la=new Set([this]):la.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function UE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,s,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return yn===null?rh():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===qu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),up(e,i,s)),!1;case 22:return n.flags|=65536,i===qu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),up(e,i,s)),!1}throw Error(Q(435,n.tag))}return up(e,i,s),rh(),!1}if(kt)return t=pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Pp&&(e=Error(Q(422),{cause:i}),Ol(mi(e,n)))):(i!==Pp&&(t=Error(Q(423),{cause:i}),Ol(mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=mi(i,n),s=Zp(e.stateNode,i,s),ep(e,s),Pe!==4&&(Pe=2)),!1;var a=Error(Q(520),{cause:i});if(a=mi(a,n),wl===null?wl=[a]:wl.push(a),Pe!==4&&(Pe=2),t===null)return!0;i=mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Zp(n.stateNode,i,e),ep(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(la===null||!la.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=sS(s),aS(s,e,n,i),ep(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var og=Error(Q(461)),Xe=!1;function Ye(e,t,n,i){t.child=e===null?yx(t,null,n,i):ja(t,e.child,n,i)}function Rv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ka(t),i=Km(e,t,n,r,a,s),o=Qm(),e!==null&&!Xe?(jm(e,t,s),Ss(e,t,s)):(kt&&o&&vh(t),t.flags|=1,Ye(e,t,i,s),t.child)}function Cv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Gm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,rS(e,t,a,i,s)):(e=Su(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!cg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(r,i)&&e.ref===t.ref)return Ss(e,t,s)}return t.flags|=1,e=ms(a,i),e.ref=t.ref,e.return=t,t.child=e}function rS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ll(a,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=a,cg(e,s))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Ss(e,t,s)}return Jp(e,t,n,i,s)}function oS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Nv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(t,a!==null?a.cachePool:null),a!==null?vv(t,a):Vp(),Mx(t);else return i=t.lanes=536870912,Nv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(bu(t,a.cachePool),vv(t,a),oa(),t.memoizedState=null):(e!==null&&bu(t,null),Vp(),oa());return Ye(e,t,s,n),t.child}function Tl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nv(e,t,n,i,s){var a=Xm();return a=a===null?null:{parent:ke._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&bu(t,null),Vp(),Mx(t),e!==null&&Ja(e,t,i,!0),t.childLanes=s,null}function Au(e,t){return t=Th({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Dv(e,t,n){return ja(t,e.child,null,n),e=Au(t,t.pendingProps),e.flags|=2,Zn(t),t.memoizedState=null,e}function OE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(kt){if(i.mode==="hidden")return e=Au(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Tl(null,e);if(kp(t),(e=be)?(e=oM(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=fx(e),n.return=t,t.child=n,sn=t,be=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return Au(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(kp(t),s)if(t.flags&256)t.flags&=-257,t=Dv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(Xe||Ja(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(pa.current===null){if(i=ve,i!==null&&(r=By(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ar(e,r),Gn(i,e,r),og;rh()}t=Dv(e,t,n)}else e=a.treeContext,be=_i(r.nextSibling),sn=t,kt=!0,ia=null,gi=!1,e!==null&&px(t,e),t=Au(t,i),t.flags|=134221824;return t}return e=ms(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jp(e,t,n,i,s){return Ka(t),n=Km(e,t,n,i,void 0,s),i=Qm(),e!==null&&!Xe?(jm(e,t,s),Ss(e,t,s)):(kt&&i&&vh(t),t.flags|=1,Ye(e,t,n,s),t.child)}function Lv(e,t,n,i,s,a){return Ka(t),t.updateQueue=null,n=Tx(t,i,n,s),bx(e),i=Qm(),e!==null&&!Xe?(jm(e,t,a),Ss(e,t,a)):(kt&&i&&vh(t),t.flags|=1,Ye(e,t,n,a),t.child)}function Uv(e,t,n,i,s){if(Ka(t),t.stateNode===null){var a=zr,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Yp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},qm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):zr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ip(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Yp.enqueueReplaceState(a,a.state,null),Ml(t,i,a,s),Sl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=tr(n,o);a.props=l;var c=a.context,f=n.contextType;r=zr,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Av(t,a,i,r),Zs=!1;var u=t.memoizedState;a.state=u,Ml(t,i,a,s),Sl(),c=t.memoizedState,o||u!==c||Zs?(typeof p=="function"&&(ip(t,n,p,i),c=t.memoizedState),(l=Zs||Ev(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Hp(e,t),r=t.memoizedProps,f=tr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=zr,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Av(t,a,i,l),Zs=!1,u=t.memoizedState,a.state=u,Ml(t,i,a,s),Sl();var d=t.memoizedState;r!==p||u!==d||Zs||e!==null&&e.dependencies!==null&&Wu(e.dependencies)?(typeof o=="function"&&(ip(t,n,o,i),d=t.memoizedState),(f=Zs||Ev(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Wu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,wr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ja(t,e.child,null,s),t.child=ja(t,null,n,s)):Ye(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ss(e,t,s),e}function Ov(e,t,n,i){return Za(),t.flags|=256,Ye(e,t,n,i),t.child}var Kp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qp(e){return{baseLanes:e,cachePool:gx()}}function jp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kn),e}function lS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(kt){if(s?ra(t):oa(),(e=be)?(e=oM(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},n=fx(e),n.return=t,t.child=n,sn=t,be=null)):e=null,e===null)throw da(t);return Sg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(oa(),s=t.mode,a=Th({mode:"hidden",children:a},s),i=Xa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Qp(n),i.childLanes=jp(e,r,n),t.memoizedState=Kp,Tl(null,i)):(ra(t),lg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return IE(e,t,a,r,i,l,o,n)}return s?(oa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ms(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ms(l,s):(s=Xa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Tl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Qp(n):(a=s.cachePool,a!==null?(o=ke._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=gx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=jp(e,r,n),t.memoizedState=Kp,Tl(e.child,i)):(ra(t),n=e.child,e=n.sibling,n=ms(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function lg(e,t){return t=Th({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Th(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function ou(e,t,n){return ja(t,e.child,null,n),e=lg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function IE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ra(t),t.flags&=-257,ou(e,t,o)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,null):(oa(),a=s.fallback,r=t.mode,s=Th({mode:"visible",children:s.children},r),a=Xa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ja(t,e.child,null,o),s=t.child,s.memoizedState=Qp(o),s.childLanes=jp(e,i,o),t.memoizedState=Kp,Tl(null,s));if(ra(t),Sg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Ol({value:s,source:null,stack:null})),ou(e,t,o)}if(Xe||Ja(e,t,o,!1),i=(o&e.childLanes)!==0,Xe||i){if(pa.current!==null)return ou(e,t,o);if(i=ve,i!==null&&(s=By(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,ar(e,s),Gn(i,e,s),og;return bm(a)||rh(),ou(e,t,o)}return bm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,be=_i(a.nextSibling),sn=t,kt=!0,ia=null,gi=!1,e!==null&&px(t,e),t=lg(t,s.children),t.flags|=134221824,t)}function Iv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Mu(e.return,t,n)}function Pv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Zu(n)===null&&(t=e),e=e.sibling}return t}function lu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function sp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function $p(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=fn.current;if(t.flags&128)return Pl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Pl(t,r),s==="backwards"&&e!==null?(sp(e),Ye(e,t,i,n),sp(e)):Ye(e,t,i,n),i=kt?Ul:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iv(e,n,t);else if(e.tag===19)Iv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Pv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,sp(t)),lu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Zu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}lu(t,!0,n,null,a,i);break;case"together":lu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Pv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),lu(t,!1,s,n,a,i)}return t.child}function Bv(e,t,n){var i=t.pendingProps;return js(t,t.type,i.value),Ye(e,t,i.children,n),t.child}function Ss(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=ms(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ms(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wu(e)))}function PE(e,t,n){switch(t.tag){case 3:Bu(t,t.stateNode.containerInfo),js(t,ke,e.memoizedState.cache),Za();break;case 27:case 5:Ap(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:js(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,kp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ra(t),t.flags|=128,null;i=Ja(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?lS(e,t,n):(ra(t),e=Ss(e,t,n),e!==null?e.sibling:null)}ra(t);break;case 19:if(t.flags&128)return $p(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return $p(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pl(t,fn.current),i)break;return null;case 22:return t.lanes=0,oS(e,t,n,t.pendingProps);case 24:js(t,ke,e.memoizedState.cache)}return Ss(e,t,n)}function cS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!cg(e,n)&&(t.flags&128)===0)return Xe=!1,PE(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,kt&&(t.flags&1048576)!==0&&dx(t,Ul,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")Gm(e)?(i=tr(e,i),t.tag=1,t=Uv(null,t,e,i,n)):(t.tag=0,t=Jp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Rm){t.tag=11,t=Rv(null,t,e,i,n);break t}else if(s===Cm){t.tag=14,t=Cv(null,t,e,i,n);break t}else if(s===Xi){t.tag=10,t.type=e,t=Bv(null,t,n);break t}}throw t=Tp(e)||e,Error(Q(306,t,""))}}return t;case 0:return Jp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=tr(i,t.pendingProps),Uv(e,t,i,s,n);case 3:t:{if(Bu(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Hp(e,t),Ml(t,i,null,n);var r=t.memoizedState;if(i=r.cache,js(t,ke,i),i!==a.cache&&zp(t,[ke],n,!0),Sl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Ov(e,t,i,n);break t}else if(i!==s){s=mi(Error(Q(424)),t),Ol(s),t=Ov(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,be=_i(e.firstChild),sn=t,kt=!0,ia=null,gi=!0,n=yx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Za(),i===s){t=Ss(e,t,n);break t}Ye(e,t,i,n)}t=t.child}return t;case 26:return wr(e,t),e===null?(n=uy(t.type,null,t.pendingProps,null))?t.memoizedState=n:kt||(t.stateNode=jS(t.type,t.pendingProps,na.current,t)):t.memoizedState=uy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ap(t),e===null&&kt&&(i=t.stateNode=lM(t.type,t.pendingProps,na.current),sn=t,gi=!0,s=be,va(t.type)?(Tm=s,be=_i(i.firstChild)):be=s),Ye(e,t,t.pendingProps.children,n),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&kt&&((s=i=be)&&(i=RA(i,t.type,t.pendingProps,gi),i!==null?(t.stateNode=i,sn=t,be=_i(i.firstChild),gi=!1,s=!0):s=!1),s||da(t)),Ap(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,xm(s,a)?i=null:r!==null&&xm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Km(e,t,EE,null,null,n),lo._currentValue=s),wr(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&kt&&((e=n=be)&&(n=CA(n,t.pendingProps,gi),n!==null?(t.stateNode=n,sn=t,be=null,e=!0):e=!1),e||da(t)),null;case 13:return lS(e,t,n);case 4:return Bu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ja(t,null,i,n):Ye(e,t,i,n),t.child;case 11:return Rv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,wr(e,t),Ye(e,t,i,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return Bv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Ka(t),s=un(s),i=i(s),t.flags|=1,Ye(e,t,i,n),t.child;case 14:return Cv(e,t,t.type,t.pendingProps,n);case 15:return rS(e,t,t.type,t.pendingProps,n);case 19:return $p(e,t,n);case 31:return OE(e,t,n);case 22:return oS(e,t,n,t.pendingProps);case 24:return Ka(t),i=un(ke),e===null?(s=Xm(),s===null&&(s=ve,a=km(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},qm(t),js(t,ke,s)):((e.lanes&n)!==0&&(Hp(e,t),Ml(t,null,null,n),Sl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),js(t,ke,i)):(i=a.cache,js(t,ke,i),i!==s.cache&&zp(t,[ke],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:kt&&vh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:wr(e,t),Ye(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function fs(e){e.flags|=4}function ap(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?dy(t,i):dy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(zS())e.flags|=8192;else throw qa=qu,Wm}else e.flags&=-16777217}function zv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fM(t))if(zS())e.flags|=8192;else throw qa=qu,Wm}function cu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Oy():536870912,e.lanes|=t,no|=t)}function ol(e,t){if(!kt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function BE(e,t,n){var i=t.pendingProps;switch(Vm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),gs(ke),jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Er(t)?fs(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tp())),Me(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(fs(t),a!==null?(Me(t),zv(t,a)):(Me(t),ap(t,s,null,i,n))):a?a!==e.memoizedState?(fs(t),Me(t),zv(t,a)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&fs(t),Me(t),ap(t,s,e,i,n)),null;case 27:if(zu(t),n=na.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fs(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Me(t),t.subtreeFlags&=-33554433,null}e=Zi.current,Er(t)?hv(t,e):(e=lM(s,i,n),t.stateNode=e,fs(t))}return Me(t),t.subtreeFlags&=-33554433,null;case 5:if(zu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fs(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Me(t),t.subtreeFlags&=-33554433,null}if(a=Zi.current,Er(t))hv(t,a);else{var r=Hl(na.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[cn]=t,a[kn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(dn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&fs(t)}}return Me(t),t.subtreeFlags&=-33554433,ap(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&fs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=na.current,Er(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=sn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[cn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||KS(e.nodeValue,n)),e||da(t,!0)}else e=Hl(e).createTextNode(i),e[cn]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Er(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[cn]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Zn(t),t):(Zn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[cn]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),s=!1}else s=tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Zn(t),t):(Zn(t),null)}return Zn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cu(t,t.updateQueue),Me(t),null);case 4:return jr(),e===null&&vg(t.stateNode.containerInfo),t.flags|=67108864,Me(t),null;case 10:return gs(t.type),Me(t),null;case 19:if(Zm(t),i=t.memoizedState,i===null)return Me(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)ol(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Zu(e),a!==null){for(t.flags|=128,ol(i,!1),e=a.updateQueue,t.updateQueue=e,cu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hx(n,e),n=n.sibling;return Pl(t,fn.current&1|2),kt&&ds(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Qn()>sh&&(t.flags|=128,s=!0,ol(i,!1),t.lanes=4194304)}else{if(!s)if(e=Zu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,cu(t,e),ol(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!kt)return Me(t),null}else 2*Qn()-i.renderingStartTime>sh&&n!==536870912&&(t.flags|=128,s=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qn(),e.sibling=null,a=fn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||kt?Pl(t,a):(n=a,Te(pn,t),Te(fn,n),yn===null&&(yn=t)),kt&&ds(t,i.treeForkCount),e}return Me(t),null;case 22:case 23:return Zn(t),Ym(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&cu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&hn(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gs(ke),Me(t),null;case 25:return null;case 30:return t.flags|=33554432,Me(t),null}throw Error(Q(156,t.tag))}function zE(e,t){switch(Vm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gs(ke),jr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zu(t),null;case 31:if(t.memoizedState!==null){if(Zn(t),t.alternate===null)throw Error(Q(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Zm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return jr(),null;case 10:return gs(t.type),null;case 22:case 23:return Zn(t),Ym(),e!==null&&hn(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gs(ke),null;case 25:return null;default:return null}}function uS(e,t){switch(Vm(t),t.tag){case 3:gs(ke),jr();break;case 26:case 27:case 5:zu(t);break;case 4:jr();break;case 31:t.memoizedState!==null&&Zn(t);break;case 13:Zn(t);break;case 19:Zm(t);break;case 10:gs(t.type);break;case 22:case 23:Zn(t),Ym(),e!==null&&hn(Wa);break;case 24:gs(ke)}}function $l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){pe(t,t.return,o)}}function ma(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){pe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){pe(t,t.return,f)}}function hS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Sx(t,n)}catch(i){pe(e,e.return,i)}}}function fS(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function Vi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=vs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=nM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ni(e);Vn(e.child,!1,AA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){pe(e,t,o)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pe(e,t,s)}else n.current=null}function $u(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rM(e.stateNode,t[n])}function Fv(e){for(var t=e.return;t!==null&&(hg(t)&&rM(e.stateNode,t.stateNode),!ug(t));)t=t.return}function El(e){for(var t=e.return;t!==null&&(hg(t)&&wA(e.stateNode,t.stateNode),!ug(t));)t=t.return}function ug(e){return e.tag===5||e.tag===3||e.tag===27}function hg(e){return e&&e.tag===7&&e.stateNode!==null}function tm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pe(e,e.return,s)}}function rp(e,t,n){try{var i=e.stateNode;lA(i,e.type,n,t),i[kn]=t}catch(s){pe(e,e.return,s)}}function dS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function op(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function em(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi)),$u(e,i),ne=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,va(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(em(e,t,n,i),e=e.sibling;e!==null;)em(e,t,n,i),e=e.sibling}function th(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),$u(e,i),ne=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,va(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(th(e,t,n,i),e=e.sibling;e!==null;)th(e,t,n,i),e=e.sibling}function pS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);dn(t,i,n),t[cn]=e,t[kn]=n}catch(a){pe(e,e.return,a)}}var eh=!1,Jn=null;function Hv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(eh=!0)}var ki=null;function Gv(){var e=ki;return ki=null,e}var Fn=0;function mo(e,t,n,i,s){return Fn=0,mS(e.child,t,n,i,s)}function mS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Sm(r);i.push(o),o.view&&(a=!0)}else a||Sm(r).view&&(a=!0);eh=!0,$S(r,Fn===0?t:t+"_"+Fn,n),Fn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||mS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Ki(e,t){for(;e!==null;)e.tag===5?tM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ki(e.child,t)),e=e.sibling}function wu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Ts(t.default,t.share),t!=="none"&&(mo(e,n,t,null,!1)||Ki(e.child,!1))}e=e.sibling}}function nm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=vs(i,n),a=Ts(i.default,n.paired?i.share:i.enter);a!=="none"?mo(e,s,a,null,!1)?(wu(e),n.paired||t||io(e,i.onEnter)):Ki(e.child,!1):wu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)nm(e,t),e=e.sibling;else wu(e)}function im(e){if(Jn!==null&&Jn.size!==0){var t=Jn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ts(n.default,n.share);if(a!=="none"&&(mo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,io(e,n.onShare)):Ki(e.child,!1)),t.delete(i),t.size===0)break}}}im(e)}e=e.sibling}}}function sm(e){if(e.tag===30){var t=e.memoizedProps,n=vs(t,e.stateNode),i=Jn!==null?Jn.get(n):void 0,s=Ts(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(mo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Jn.delete(n),io(e,t.onShare)):io(e,t.onExit):Ki(e.child,!1)),Jn!==null&&im(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)sm(e),e=e.sibling;else Jn!==null&&im(e)}function gS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=vs(t,e.stateNode);t=Ts(t.default,t.update),e.flags&=-5,t!=="none"&&mo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&gS(e);e=e.sibling}}function am(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ki(e.child,!1))}am(e)}e=e.sibling}}function Ru(e){if(e.tag===30)e.stateNode.paired=null,Ki(e.child,!1),am(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ru(e),e=e.sibling;else am(e)}function _S(e){for(e=e.child;e!==null;)e.tag===30?Ki(e.child,!1):(e.subtreeFlags&33554432)!==0&&_S(e),e=e.sibling}function fg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Fn<a.length){var c=a[Fn],f=Sm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&$S(l,Fn===0?n:n+"_"+Fn,s),o&&(e.flags&4)!==0||(ki===null&&(ki=[]),ki.push(l,Fn===0?i:i+"_"+Fn,t.memoizedProps)),Fn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:fg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function vS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=vs(n,i),a=Ts(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(pA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Fn=0,s=fg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||io(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&vS(e,t);e=e.sibling}}var tn=!1,oe=!1,Fi=!1,lp=!1,Vv=typeof WeakSet=="function"?WeakSet:Set,en=null,Hi=!1,ml=!1,nh=!1,rm=!1;function FE(e,t,n){if(e=e.containerInfo,vm=co,e=ix(e),zm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(ym={focusedElem:e,selectionRange:i},co=!1,n=(n&335544064)===n,en=t,t=n?9270:1024;en!==null;){if(e=en,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&sm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Hv(e),uu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&sm(i),uu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Hv(e),uu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,en=i):(n&&gS(e),uu(n))}}Jn=null}function uu(e){for(;en!==null;){var t=en,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=tr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){pe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Mm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Mm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=vs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ts(s.default,s.update),s!=="none"&&mo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,en=i;break}en=t.return}}function yS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n),i&4&&$l(5,n);break;case 1:if(Gi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){pe(n,n.return,r)}else{var s=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){pe(n,n.return,r)}}i&64&&hS(n),i&512&&Vi(n,n.return);break;case 3:if(Gi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Sx(e,t)}catch(r){pe(n,n.return,r)}}break;case 27:t===null&&i&4&&pS(n);case 26:case 5:Gi(e,n),t===null&&i&4&&tm(n),i&512&&Vi(n,n.return);break;case 12:Gi(e,n);break;case 31:Gi(e,n),i&4&&bS(e,n);break;case 13:Gi(e,n),i&4&&TS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=QE.bind(null,n),NA(e,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){var a=t!==null&&t.memoizedState!==null||oe;t=tn,s=oe,tn=i,(oe=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ti(e,n,i)):Gi(e,n),tn=t,oe=s}break;case 30:Gi(e,n),i&512&&Vi(n,n.return);break;case 7:i&512&&Vi(n,n.return);default:Gi(e,n)}}function om(e,t){for(e=e.child;e!==null;)xS(e,t),e=e.sibling}function xS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){pe(e,e.return,l)}lm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ne=!0}catch(l){pe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?sy(o,!0):sy(e.stateNode,!1)}catch(l){pe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&om(e,t);break;default:om(e,t)}}function lm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:xS(n,i);break t;case 22:n.memoizedState===null&&lm(n,i);break t;default:lm(n,i)}}e=e.sibling}}function SS(e){var t=e.alternate;t!==null&&(e.alternate=null,SS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,Bn=!1;function bi(e,t,n){for(n=n.child;n!==null;)MS(e,t,n),n=n.sibling}function MS(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 26:oe||ln(n,t),bi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!oe&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:oe||ln(n,t),El(n);var i=Re,s=Bn;va(n.type)&&(Re=n.stateNode,Bn=!1),bi(e,t,n),cM(n.stateNode,n.type,n.memoizedProps),Re=i,Bn=s;break;case 5:oe||ln(n,t),El(n);case 6:if(n.tag===6&&El(n),i=Re,s=Bn,Re=null,bi(e,t,n),Re=i,Bn=s,Re!==null)if(Bn)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}else try{Re.removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}break;case 18:Re!==null&&(Bn?(e=Re,iy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),uo(e)):iy(Re,n.stateNode));break;case 4:i=Re,s=Bn,Re=n.stateNode.containerInfo,Bn=!0,bi(e,t,n),Re=i,Bn=s;break;case 0:case 11:case 14:case 15:ma(2,n,t),oe||ma(4,n,t),bi(e,t,n);break;case 1:oe||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&fS(n,t,i)),bi(e,t,n);break;case 21:bi(e,t,n);break;case 22:oe=(i=oe)||n.memoizedState!==null,bi(e,t,n),oe=i;break;case 30:ln(n,t),bi(e,t,n);break;case 7:oe||ln(n,t),bi(e,t,n);break;default:bi(e,t,n)}}function bS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{uo(e)}catch(n){pe(t,t.return,n)}}}function TS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{uo(e)}catch(n){pe(t,t.return,n)}}function HE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vv),t;default:throw Error(Q(435,e.tag))}}function hu(e,t){var n=HE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=jE.bind(null,e,i);i.then(s,s)}})}function An(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(va(l.type)){Re=l.stateNode,Bn=!1;break t}break;case 5:Re=l.stateNode,Bn=!1;break t;case 3:case 4:Re=l.stateNode.containerInfo,Bn=!0;break t}l=l.return}if(Re===null)throw Error(Q(160));MS(r,o,a),Re=null,Bn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ES(t,e,n),t=t.sibling}var Ei=null;function ES(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}An(t,e,n),wn(e),s&4&&(ma(3,e,e.return),$l(3,e),ma(5,e,e.return));break;case 1:An(t,e,n),wn(e),s&512&&(oe||i===null||ln(i,i.return)),s&64&&tn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ei,An(t,e,n),wn(e),s&512&&(oe||i===null||ln(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(tn)e.stateNode=jS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Jl]||i[cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),dn(i,t,n),i[cn]=e,nn(i),t=i;break t;case"link":if(a=fy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=fy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[cn]=e,nn(i),t=i}e.stateNode=t}else tn||Em(a,e.type,e.stateNode);else e.stateNode=hy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||oe||t.parentNode.removeChild(t)):s.count--,n===null?tn||Em(a,e.type,e.stateNode):hy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&rp(e,e.memoizedProps,i.memoizedProps);break;case 27:An(t,e,n),wn(e),s&512&&(oe||i===null||ln(i,i.return)),i!==null&&s&4&&rp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Fi,Fi=!1,An(t,e,n),Fi=a,wn(e),s&512&&(oe||i===null||ln(i,i.return)),e.flags&32){t=e.stateNode;try{to(t,""),ne=!0}catch(f){pe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,rp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(lp=!0);break;case 6:if(An(t,e,n),wn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ne=!0}catch(f){pe(e,e.return,f)}}break;case 3:if(ne=!1,Lu=null,a=Ei,Ei=Gl(t.containerInfo),An(t,e,n),Ei=a,wn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(f){pe(e,e.return,f)}lp&&(lp=!1,AS(e)),ne=!1;break;case 4:s=Fi,Fi=tn,i=Z_(),a=Ei,Ei=Gl(e.stateNode.containerInfo),An(t,e,n),wn(e),Ei=a,ne&&ml&&(nh=!0),ne=i,Fi=s;break;case 12:An(t,e,n),wn(e);break;case 31:An(t,e,n),wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 13:An(t,e,n),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Eh=Qn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=tn,l=oe,c=Fi;tn=o||a,Fi=c||a,oe=l||r,An(t,e,n),oe=l,Fi=c,tn=o,wn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||tn||oe||(t=r||oe,n=tn,i=oe,tn=a||tn,oe=t,qs(e,2),tn=n,oe=i),!a&&Fi||om(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,hu(e,n))));break;case 19:An(t,e,n),wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 30:s&512&&(oe||i===null||ln(i,i.return)),s=Z_(),a=ml,r=(n&335544064)===n,o=e.memoizedProps,ml=r&&Ts(o.default,o.update)!=="none",An(t,e,n),wn(e),r&&i!==null&&ne&&(e.flags|=4),ml=a,ne=s;break;case 21:break;case 7:s&512&&(oe||i===null||ln(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:An(t,e,n),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(dS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(hg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(ug(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=op(e);th(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(to(c,""),n.flags&=-33);var f=op(e);th(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=op(e);em(e,u,p,r);break;default:throw Error(Q(161))}}catch(d){pe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function AS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;AS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,co=!0,t.reset(),co=!1),e=e.sibling}}function Ar(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)wS(t,e),t=t.sibling;else vS(t,!1)}function wS(e,t){var n=e.alternate;if(n===null)nm(e,!1);else switch(e.tag){case 3:if(rm=Hi=!1,Gv(),Ar(t,e),!Hi&&!nh){if(e=ki,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];tM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),rm=!0}ki=null;break;case 5:Ar(t,e);break;case 4:i=Hi,Hi=!1,Ar(t,e),Hi&&(nh=!0),Hi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?nm(e,!1):Ar(t,e));break;case 30:i=Hi,s=Gv(),Hi=!1,Ar(t,e),Hi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=vs(a,r),r=vs(n.memoizedProps,r);var o=Ts(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Fn=0,t=fg(e,n,t,r,o,a,!0),Fn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(io(e,e.memoizedProps.onUpdate),ki=s):s!==null&&(s.push.apply(s,ki),ki=s),Hi=(e.flags&32)!==0?!0:i;break;default:Ar(t,e)}}function Gi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yS(e,t.alternate,t),t=t.sibling}function qs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),qs(n,i);break;case 1:ln(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&fS(n,n.return,s),qs(n,i);break;case 27:(i&2)!==0&&cM(n.stateNode,n.type,n.memoizedProps);case 5:ln(n,n.return),n.tag!==5&&n.tag!==27||El(n),qs(n,i);break;case 6:El(n);break;case 26:ln(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||oe||s.parentNode.removeChild(s),qs(n,i);break;case 22:n.memoizedState===null&&qs(n,i);break;case 30:ln(n,n.return),qs(n,i);break;case 7:ln(n,n.return);default:qs(n,i)}e=e.sibling}}function Ti(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ti(s,a,n),$l(4,a);break;case 1:if(Ti(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){pe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)xx(c[s],l)}catch(f){pe(i,i.return,f)}}o&&r&64&&hS(a),Vi(a,a.return);break;case 27:(n&2)!==0&&pS(a);case 5:a.tag!==5&&a.tag!==27||Fv(a),Ti(s,a,n),o&&i===null&&r&4&&tm(a),Vi(a,a.return);break;case 6:Fv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||tn||Em(Gl(l.ownerDocument),a.type,l),Ti(s,a,n),o&&i===null&&r&4&&tm(a),Vi(a,a.return);break;case 12:Ti(s,a,n);break;case 31:Ti(s,a,n),o&&r&4&&bS(s,a);break;case 13:Ti(s,a,n),o&&r&4&&TS(s,a);break;case 22:a.memoizedState===null&&Ti(s,a,n),Vi(a,a.return);break;case 30:Ti(s,a,n),Vi(a,a.return);break;case 7:Vi(a,a.return);default:Ti(s,a,n)}t=t.sibling}}function dg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ql(n))}function pg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function ui(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)RS(e,t,n,i),t=t.sibling;else s&&_S(t)}function RS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ui(e,t,n,i),a&2048&&$l(9,t);break;case 1:ui(e,t,n,i);break;case 3:ui(e,t,n,i),s&&rm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ql(a)));break;case 12:if(a&2048){ui(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){pe(t,t.return,c)}}else ui(e,t,n,i);break;case 31:ui(e,t,n,i);break;case 13:ui(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ru(o),r._visibility&2?ui(e,t,n,i):Al(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ru(t),r._visibility&2?ui(e,t,n,i):(r._visibility|=2,Rr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&dg(o,t);break;case 24:ui(e,t,n,i),a&2048&&pg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Ki(a.child,!0),Ki(t.child,!0))),ui(e,t,n,i);break;default:ui(e,t,n,i)}}function Rr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Rr(a,r,o,l,s),$l(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Rr(a,r,o,l,s):Al(a,r):(f._visibility|=2,Rr(a,r,o,l,s)),s&&c&2048&&dg(r.alternate,r);break;case 24:Rr(a,r,o,l,s),s&&c&2048&&pg(r.alternate,r);break;default:Rr(a,r,o,l,s)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Al(n,i),s&2048&&dg(i.alternate,i);break;case 24:Al(n,i),s&2048&&pg(i.alternate,i);break;default:Al(n,i)}t=t.sibling}}var Ha=8192;function Ba(e,t,n){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)CS(e,t,n),e=e.sibling}function CS(e,t,n){switch(e.tag){case 26:Ba(e,t,n),e.flags&Ha&&(e.memoizedState!==null?XA(n,Ei,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&py(n,e)));break;case 5:Ba(e,t,n),e.flags&Ha&&(e=e.stateNode,(t&335544128)===t&&py(n,e));break;case 3:case 4:var i=Ei;Ei=Gl(e.stateNode.containerInfo),Ba(e,t,n),Ei=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ha,Ha=16777216,Ba(e,t,n),Ha=i):Ba(e,t,n));break;case 30:if((e.flags&Ha)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Jn===null&&(Jn=new Map),Jn.set(i,s)}Ba(e,t,n);break;default:Ba(e,t,n)}}function NS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,LS(i,e)}NS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)DS(e),e=e.sibling}function DS(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&ma(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cu(e)):ll(e);break;default:ll(e)}}function Cu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,LS(i,e)}NS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),Cu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cu(t));break;default:Cu(t)}e=e.sibling}}function LS(e,t){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ql(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else t:for(n=e;en!==null;){i=en;var s=i.sibling,a=i.return;if(SS(i),i===n){en=null;break t}if(s!==null){s.return=a,en=s;break t}en=a}}}var GE={getCacheForType:function(e){var t=un(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(ke).controller.signal}},VE=typeof WeakMap=="function"?WeakMap:Map,se=0,ve=null,Wt=null,Jt=0,fe=0,qn=null,$s=!1,go=!1,mg=!1,Ms=0,Pe=0,ga=0,Ya=0,ih=0,Kn=0,no=0,wl=null,zn=null,cm=!1,Eh=0,US=0,sh=1/0,ah=null,la=null,Oe=0,wi=null,er=null,Ji=0,um=0,hm=null,OS=null,Jr=null,Kr=null,Qr=null,Rl=0,Nu=null;function ti(){return(se&2)!==0&&Jt!==0?Jt&-Jt:Dt.T!==null?_g():zy()}function IS(){if(Kn===0)if((Jt&536870912)===0||kt){var e=jc;jc<<=1,(jc&3932160)===0&&(jc=262144),Kn=e}else Kn=536870912;return e=pn.current,e!==null&&(e.flags|=32),Kn}function io(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=nM(vs(e.memoizedProps,n))),Kr===null&&(Kr=[]),Kr.push(t.bind(null,i))}}function Gn(e,t,n){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(so(e,0),ta(e,Jt,Kn,!1)),Zl(e,n),((se&2)===0||e!==ve)&&(e===ve&&((se&2)===0&&(Ya|=n),Pe===4&&ta(e,Jt,Kn,!1)),ji(e))}function PS(e,t,n){if((se&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),s=i?WE(e,t):cp(e,t,!0),a=i;do{if(s===0){go&&!i&&ta(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!kE(n)){s=cp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=wl;var l=o.current.memoizedState.isDehydrated;if(l&&(so(o,r).flags|=256),r=cp(o,r,!1),r!==2&&r!==6){if(mg&&!l){o.errorRecoveryDisabledLanes|=a,Ya|=a,s=4;break t}a=zn,zn=s,a!==null&&(zn===null?zn=a:zn.push.apply(zn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){so(e,0),ta(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ta(i,t,Kn,!$s);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Eh+300-Qn(),10<s)){if(ta(i,t,Kn,!$s),hh(i,0,!0)!==0)break t;Ji=t,i.timeoutHandle=yg(kv.bind(null,i,n,zn,ah,cm,t,Kn,Ya,no,$s,a,"Throttled",-0,0),s);break t}kv(i,n,zn,ah,cm,t,Kn,Ya,no,$s,a,null,-0,0)}}break}while(!0);ji(e)}function kv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,M=(a&335544064)===a;if(p=null,(M||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},Jn=null,CS(t,a,p),M&&(v=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(v.count++,v.waitingForViewTransition=!0,v=Vl.bind(v),M.finished.then(v,v))),v=(a&62914560)===a?Eh-Qn():(a&4194048)===a?US-Qn():0,v=WA(p,v),v!==null)){Ji=a,e.cancelPendingCommit=v(Wv.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),ta(e,a,r,!c);return}Wv(e,t,a,n,i,s,r,o,l,c,f,p)}function kE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ei(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,n,i){t=Uy(e,t),t&=~ih,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-$n(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Iy(e,n,t)}function Ah(){return(se&6)===0?(tc(0,!1),!1):!0}function gg(){if(Wt!==null){if(fe===0)var e=Wt.return;else e=Wt,ps=rr=null,$m(e),qr=null,Il=0,e=Wt;for(;e!==null;)uS(e.alternate,e),e=e.return;Wt=null}}function so(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,hA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ji=0,gg(),ve=e,Wt=n=ms(e.current,null),Jt=t,fe=0,qn=null,$s=!1,go=Yl(e,t),mg=!1,no=Kn=ih=Ya=ga=Pe=0,zn=wl=null,cm=!1,Ms=Uy(e,t),gh(),n}function BS(e,t){zt=null,Dt.H=Qu,t===po||t===yh?(t=gv(),fe=3):t===Wm?(t=gv(),fe=4):fe=t===og?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qn=t,Wt===null&&(Pe=1,ju(e,mi(t,e.current)))}function zS(){var e=pn.current;return e===null?!0:(Jt&4194048)===Jt?yn===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===yn:!1}function FS(){var e=Dt.H;return Dt.H=Qu,e===null?Qu:e}function HS(){var e=Dt.A;return Dt.A=GE,e}function rh(){Pe=4,$s||(Jt&4194048)!==Jt&&pn.current!==null||(go=!0),(ga&134217727)===0&&(Ya&134217727)===0||ve===null||ta(ve,Jt,Kn,!1)}function cp(e,t,n){var i=se;se|=2;var s=FS(),a=HS();(ve!==e||Jt!==t)&&(ah=null,so(e,t)),t=!1;var r=Pe;t:do try{if(fe!==0&&Wt!==null){var o=Wt,l=qn;switch(fe){case 8:gg(),r=6;break t;case 3:case 2:case 9:case 6:pn.current===null&&(t=!0);var c=fe;if(fe=0,qn=null,Gr(e,o,l,c),n&&go){r=0;break t}break;default:c=fe,fe=0,qn=null,Gr(e,o,l,c)}}XE(),r=Pe;break}catch(f){BS(e,f)}while(!0);return t&&e.shellSuspendCounter++,ps=rr=null,se=i,Dt.H=s,Dt.A=a,Wt===null&&(ve=null,Jt=0,gh()),r}function XE(){for(;Wt!==null;)GS(Wt)}function WE(e,t){var n=se;se|=2;var i=FS(),s=HS();ve!==e||Jt!==t?(ah=null,sh=Qn()+500,so(e,t)):go=Yl(e,t);t:do try{if(fe!==0&&Wt!==null){t=Wt;var a=qn;e:switch(fe){case 1:fe=0,qn=null,Gr(e,t,a,1);break;case 2:case 9:if(mv(a)){fe=0,qn=null,Xv(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),ji(e)},a.then(t,t);break t;case 3:fe=7;break t;case 4:fe=5;break t;case 7:mv(a)?(fe=0,qn=null,Xv(t)):(fe=0,qn=null,Gr(e,t,a,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?fM(r):o.stateNode.complete){fe=0,qn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,wh(c)):Wt=null}break e}}fe=0,qn=null,Gr(e,t,a,5);break;case 6:fe=0,qn=null,Gr(e,t,a,6);break;case 8:gg(),Pe=6;break t;default:throw Error(Q(462))}}qE();break}catch(f){BS(e,f)}while(!0);return ps=rr=null,Dt.H=i,Dt.A=s,se=n,Wt!==null?0:(ve=null,Jt=0,gh(),Pe)}function qE(){for(;Wt!==null&&!cT();)GS(Wt)}function GS(e){var t=cS(e.alternate,e,Ms);e.memoizedProps=e.pendingProps,t===null?wh(e):Wt=t}function Xv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lv(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=Lv(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:$m(t);var i=t;i===sn&&(kt?(Xu(i),i.tag===5&&i.stateNode!=null&&(be=i.stateNode)):(Xu(i),kt=!0));default:uS(n,t),t=Wt=hx(t,Ms),t=cS(n,t,Ms)}e.memoizedProps=e.pendingProps,t===null?wh(e):Wt=t}function Gr(e,t,n,i){ps=rr=null,$m(t),qr=null,Il=0;var s=t.return;try{if(UE(e,s,t,n,Jt)){Pe=1,ju(e,mi(n,e.current)),Wt=null;return}}catch(a){if(s!==null)throw Wt=s,a;Pe=1,ju(e,mi(n,e.current)),Wt=null;return}t.flags&32768?(kt||i===1?e=!0:go||(Jt&536870912)!==0?e=!1:($s=e=!0,(i===2||i===9||i===3||i===6)&&(i=pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),VS(t,e)):wh(t)}function wh(e){var t=e;do{if((t.flags&32768)!==0){VS(t,$s);return}e=t.return;var n=BE(t.alternate,t,Ms);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Pe===0&&(Pe=5)}function VS(e,t){do{var n=zE(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Pe=6,Wt=null}function Wv(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do Rh();while(Oe!==0);if((se&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===ve&&(Wt=ve=null,Jt=0),er=t,wi=e,Ji=n,hm=s,OS=i,YE(e,t,n,r,o,l,p)}}function YE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(um=o,o|=Fm,yT(e,n,o,i,s,a),Kr=null,(n&335544064)===n?(Qr=SE(e),i=10262):(Qr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,$E(Fu,function(){return mm(),null})):(e.callbackNode=null,e.callbackPriority=0),eh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ae.p,ae.p=2,a=se,se|=4;try{FE(e,t,n)}finally{se=a,ae.p=s,Dt.T=i}}Oe=1,eh?Jr=_A(r,e.containerInfo,Qr,fm,dm,JE,pm,mm,ZE,null,null):(fm(),dm(),pm())}function ZE(e){if(Oe!==0){var t=wi.onRecoverableError;t(e,{componentStack:null})}}function JE(){Oe===3&&(Oe=0,wS(er,wi),Oe=4)}function fm(){if(Oe===1){Oe=0;var e=wi,t=er,n=Ji,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null;var s=ae.p;ae.p=2;var a=se;se|=4;try{ml=nh=!1,ES(t,e,n),n=ym;var r=ix(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&nx(o.ownerDocument.documentElement,o)){if(l!==null&&zm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>g&&(r=g,g=M,M=r);var h=ov(o,M),m=ov(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),M>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}co=!!vm,ym=vm=null}finally{se=a,ae.p=s,Dt.T=i}}e.current=t,Oe=2}}function dm(){if(Oe===2){Oe=0;var e=wi,t=er,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{yS(e,t.alternate,t)}finally{se=s,ae.p=i,Dt.T=n}}Oe=3}}function pm(){if(Oe===4||Oe===3){Oe=0;var e=Jr;Jr=null,uT();var t=wi,n=er,i=Ji,s=OS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Oe=5:(Oe=0,er=wi=null,kS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(la=null),Lm(i),n=n.stateNode,jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ql,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Dt.T,a=ae.p,ae.p=2,Dt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Dt.T=n,ae.p=a}}if(s=Kr,r=Qr,Qr=null,s!==null&&(Kr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Ji&3)!==0&&Rh(),ji(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Nu?Rl++:(Rl=0,Nu=t):(Rl=0,Nu=null),tc(0,!1)}}function kS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function Rh(){return Jr!==null&&(Jr.skipTransition(),Jr=null),fm(),dm(),pm(),mm()}function mm(){if(Oe!==5)return!1;var e=wi,t=um;um=0;var n=Lm(Ji),i=Dt.T,s=ae.p;try{ae.p=32>n?32:n,Dt.T=null,n=hm,hm=null;var a=wi,r=Ji;if(Oe=0,er=wi=null,Ji=0,(se&6)!==0)throw Error(Q(331));var o=se;if(se|=4,DS(a.current),RS(a,a.current,r,n),se=o,tc(0,!1),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ql,a)}catch{}return!0}finally{ae.p=s,Dt.T=i,kS(e,t)}}function qv(e,t,n){t=mi(n,t),t=Zp(e.stateNode,t,2),e=aa(e,t,2),e!==null&&(Zl(e,2),ji(e))}function pe(e,t,n){if(e.tag===3)qv(e,e,n);else for(;t!==null;){if(t.tag===3){qv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(la===null||!la.has(i))){e=mi(n,e),n=sS(2),i=aa(t,n,2),i!==null&&(aS(n,i,t,e),Zl(i,2),ji(i));break}}t=t.return}}function up(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new VE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(mg=!0,s.add(n),e=KE.bind(null,e,t,n),t.then(e,e))}function KE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(Jt&n)===n&&((Pe===4||Pe===3&&(Jt&62914560)===Jt&&300>Qn()-Eh)&&(se&2)===0?so(e,0):ih|=n,no===Jt&&(no=0)),ji(e)}function XS(e,t){t===0&&(t=Oy()),e=ar(e,t),e!==null&&(Zl(e,t),ji(e))}function QE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),XS(e,n)}function jE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),XS(e,n)}function $E(e,t){return Nm(e,t)}var ao=null,Cr=null,gm=!1,oh=!1,hp=!1,ea=0;function ji(e){e!==Cr&&e.next===null&&(Cr===null?ao=Cr=e:Cr=Cr.next=e),oh=!0,gm||(gm=!0,eA())}function tc(e,t){if(!hp&&oh){hp=!0;do for(var n=!1,i=ao;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-$n(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Yv(i,a))}else a=Jt,a=hh(i,i===ve?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Yl(i,a)||(n=!0,Yv(i,a));i=i.next}while(n);hp=!1}}function tA(){WS()}function WS(){oh=gm=!1;var e=0;ea!==0&&uA()&&(e=ea);for(var t=Qn(),n=null,i=ao;i!==null;){var s=i.next,a=qS(i,t);a===0?(i.next=null,n===null?ao=s:n.next=s,s===null&&(Cr=n)):(n=i,(e!==0||(a&3)!==0)&&(oh=!0)),i=s}Oe!==0&&Oe!==5||tc(e,!1),ea!==0&&(ea=0)}function qS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-$n(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=vT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ve,n=Jt,n=hh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&kd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&kd(i),Lm(n)){case 2:case 8:n=Dy;break;case 32:n=Fu;break;case 268435456:n=Ly;break;default:n=Fu}return i=YS.bind(null,e),n=Nm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&kd(i),e.callbackPriority=2,e.callbackNode=null,2}function YS(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rh()&&e.callbackNode!==n)return null;var i=Jt;return i=hh(e,e===ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(PS(e,i,t),qS(e,Qn()),e.callbackNode!=null&&e.callbackNode===n?YS.bind(null,e):null)}function Yv(e,t){if(Rh())return null;PS(e,t,!0)}function eA(){fA(function(){(se&6)!==0?Nm(Ny,tA):WS()})}function _g(){if(ea===0){var e=Qa;e===0&&(e=Qc,Qc<<=1,(Qc&261888)===0&&(Qc=256)),ea=e}return ea}function Zv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vu(e)}function nA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Zv((s[kn]||null).action),r=i.submitter;r&&(t=(t=r[kn]||null)?Zv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new dh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ea!==0){var l=new FormData(s,r);qp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),qp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(fu=0;fu<Ip.length;fu++)du=Ip[fu],Jv=du.toLowerCase(),Kv=du[0].toUpperCase()+du.slice(1),Ri(Jv,"on"+Kv);var du,Jv,Kv,fu;Ri(ax,"onAnimationEnd");Ri(rx,"onAnimationIteration");Ri(ox,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(dE,"onTransitionRun");Ri(pE,"onTransitionStart");Ri(mE,"onTransitionCancel");Ri(lx,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function ZS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Gu(f)}s.currentTarget=null,a=l}}}}function Xt(e,t){var n=t[X_];n===void 0&&(n=t[X_]=new Set);var i=e+"__bubble";n.has(i)||(JS(t,e,2,!1),n.add(i))}function fp(e,t,n){var i=0;t&&(i|=4),JS(n,e,i,t)}var pu="_reactListening"+Math.random().toString(36).slice(2);function vg(e){if(!e[pu]){e[pu]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(iA.has(n)||fp(n,!1,e),fp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pu]||(t[pu]=!0,fp("selectionchange",!1,t))}}function JS(e,t,n,i){switch(yM(t)){case 2:var s=JA;break;case 8:s=KA;break;default:s=Eg}n=s.bind(null,t,n,e),s=void 0,!Dp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function dp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ga(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Zy(function(){var c=a,f=Om(n),p=[];t:{var u=cx.get(e);if(u!==void 0){var d=dh,v=e;switch(e){case"keypress":if(xu(n)===0)break t;case"keydown":case"keyup":d=kT;break;case"focusin":v="focus",d=Jd;break;case"focusout":v="blur",d=Jd;break;case"beforeblur":case"afterblur":d=Jd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=j_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=DT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=ZT;break;case ax:case rx:case ox:d=OT;break;case lx:d=KT;break;case"scroll":case"scrollend":d=CT;break;case"wheel":d=jT;break;case"copy":case"cut":case"paste":d=PT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=tv;break;case"submit":d=qT;break;case"toggle":case"beforetoggle":d=tE}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,x;m!==null;){var y=m;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||h===null||(y=Nl(m,h),y!=null&&M.push(Fl(m,y,x))),g)break;m=m.return}0<M.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Np&&(v=n.relatedTarget||n.fromElement)&&(Ga(v)||v[ho]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Ga(d):null,d!==null&&(g=Wl(d),M=d.tag,d!==g||M!==5&&M!==27&&M!==6)&&(d=null)):(u=null,d=c),u!==d&&(M=j_,y="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=tv,y="onPointerLeave",h="onPointerEnter",m="pointer"),g=u==null?v:dl(u),x=d==null?v:dl(d),v=new M(y,m+"leave",u,n,f),v.target=g,v.relatedTarget=x,y=null,Ga(f)===c&&(M=new M(h,m+"enter",d,n,f),M.target=x,M.relatedTarget=g,y=M),g=y,M=u&&d?vp(u,d,sA):null,u!==null&&Qv(p,v,u,M,!1),d!==null&&g!==null&&Qv(p,g,d,M,!0)))}t:{if(u=c?dl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=sv;else if(iv(u))if(tx)E=uE;else{E=lE;var A=oE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Um(c.elementType)&&(E=sv):E=cE;if(E&&(E=E(e,c))){$y(p,E,n,f);break t}A&&A(e,u,c)}switch(A=c?dl(c):window,e){case"focusin":(iv(A)||A.contentEditable==="true")&&(Ir=A,Up=c,vl=null);break;case"focusout":vl=Up=Ir=null;break;case"mousedown":Op=!0;break;case"contextmenu":case"mouseup":case"dragend":Op=!1,lv(p,n,f);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":lv(p,n,f)}var _;if(Bm)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Or?Qy(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ky&&n.locale!=="ko"&&(Or||T!=="onCompositionStart"?T==="onCompositionEnd"&&Or&&(_=Jy()):(Qs=f,Im="value"in Qs?Qs.value:Qs.textContent,Or=!0)),A=lh(c,T),0<A.length&&(T=new $_(T,e,null,n,f),p.push({event:T,listeners:A}),_?T.data=_:(_=jy(n),_!==null&&(T.data=_)))),(_=nE?iE(e,n):sE(e,n))&&(T=lh(c,"onBeforeInput"),0<T.length&&(A=new $_("onBeforeInput","beforeinput",null,n,f),p.push({event:A,listeners:T}),A.data=_)),nA(p,e,c,n,f)}ZS(p,t)})}function Fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Nl(e,n),s!=null&&i.unshift(Fl(e,s,a)),s=Nl(e,t),s!=null&&i.push(Fl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function sA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Nl(n,a),c!=null&&r.unshift(Fl(n,c,l))):s||(c=Nl(n,a),c!=null&&r.push(Fl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var aA=/\r\n?/g,rA=/\u0000|\uFFFD/g;function jv(e){return(typeof e=="string"?e:""+e).replace(aA,`
`).replace(rA,"")}function KS(e,t){return t=jv(t),jv(e)===t}function de(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||to(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&to(e,""+i);else return;break;case"className":tu(e,"class",i);break;case"tabIndex":tu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(e,n,i);break;case"style":Yy(e,i,a);return;case"data":if(t!=="object"){tu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",s.name,s,null),de(e,t,"formEncType",s.formEncType,s,null),de(e,t,"formMethod",s.formMethod,s,null),de(e,t,"formTarget",s.formTarget,s,null)):(de(e,t,"encType",s.encType,s,null),de(e,t,"method",s.method,s,null),de(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wi);return;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),_u(e,"popover",i);break;case"xlinkActuate":hs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":hs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":hs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":hs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":hs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":hs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":hs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":hs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":hs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":_u(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=wT.get(n)||n,_u(e,n,i);else return}ne=!0}function _m(e,t,n,i,s,a){switch(n){case"style":Yy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")to(e,i);else if(typeof i=="number"||typeof i=="bigint")to(e,""+i);else return;break;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Gy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[kn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ne=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):_u(e,n,i)}return}ne=!0}function dn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:de(e,t,a,r,n,null)}}s&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:de(e,t,i,f,n,null)}}Xy(e,a,o,l,c,r,s,!1);return;case"select":Xt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?kr(e,!!i,t,!1):n!=null&&kr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:de(e,t,r,o,n,null)}qy(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":de(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<zl.length;i++)Xt(zl[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:de(e,t,c,i,n,null)}return;default:if(Um(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&_m(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}var oA={};function lA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||de(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(ne=!0),a=d;break;case"name":d!==p&&(ne=!0),s=d;break;case"checked":d!==p&&(ne=!0),c=d;break;case"defaultChecked":d!==p&&(ne=!0),f=d;break;case"value":d!==p&&(ne=!0),r=d;break;case"defaultValue":d!==p&&(ne=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&de(e,t,u,d,i,p)}}Cp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||de(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ne=!0),u=a;break;case"defaultValue":a!==l&&(ne=!0),o=a;break;case"multiple":a!==l&&(ne=!0),r=a;default:a!==l&&de(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?kr(e,!!n,u,!1):!!i!=!!n&&(t!=null?kr(e,!!n,t,!0):kr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ne=!0),u=s;break;case"defaultValue":s!==a&&(ne=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&de(e,t,r,s,i,a)}Wy(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:de(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(ne=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):de(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&de(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:de(e,t,c,u,i,d)}return;default:if(Um(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&_m(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||_m(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&de(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||de(e,t,p,u,i,d)}function $v(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&$v(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&$v(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vm=null,ym=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function ty(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jS(e,t,n,i){return n=Hl(n).createElement(e),n[cn]=i,n[kn]=t,dn(n,e,t),nn(n),n}function xm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pp=null;function uA(){var e=window.event;return e&&e.type==="popstate"?e===pp?!1:(pp=e,!0):(pp=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,ny=typeof requestAnimationFrame=="function"?requestAnimationFrame:yg,fA=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(e){return ey.resolve(null).then(e).catch(dA)}:yg;function dA(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function iy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),uo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")gp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,gp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Jl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&gp(e.ownerDocument.body);n=s}while(n);uo(t)}function sy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function $S(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function tM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function eM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Sm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return eM(t,n,e)}function pA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return eM(t,n,e)}function mA(e){return e.documentElement.clientHeight}function gA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function _A(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var M=[];if(v==="loaded"&&(mA(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),v=M.length,e!==null)for(var g=e.suspenseyImages,h=0,m=0;m<g.length;m++){var x=g[m];if(!x.complete){var y=x.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=dM(x),h>Uu){M.length=v;break}x=new Promise(gA.bind(x)),M.push(x)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],M=v.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=M.getKeyframes();for(var h=g=void 0,m=!0,x=0;x<v.length;x++){var y=v[x],E=y.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=y.height,h===void 0)h=E;else if(h!==E){m=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}m&&g!==void 0&&h!==void 0&&(M.setKeyframes(v),m=getComputedStyle(M.target,M.pseudoElement),m.width!==g||m.height!==h)&&(m=v[0],m.width=g,m.height=h,m=v[v.length-1],m.width=g,m.height=h,M.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Va(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Va.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ye({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Va.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Va.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function nM(e){return{name:e,group:new Va("group",e),imagePair:new Va("image-pair",e),old:new Va("old",e),new:new Va("new",e)}}function ni(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ni.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(iM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=ro(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Vn(this._fragmentFiber.child,!1,vA,e,o,i)}this._eventListeners=a}};function vA(e,t,n,i){return Ze(e).addEventListener(t,n,i),!1}ni.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=iM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=ro(s.optionsOrUseCapture),Vn(this._fragmentFiber.child,!1,yA,e,n,s),i.splice(t,1),a!==null&&a()}};function yA(e,t,n,i){return Ze(e).removeEventListener(t,n,i),!1}function ro(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ay(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function iM(e,t,n,i){if(e.length===0)return-1;i=ay(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&ay(a.optionsOrUseCapture)===i)return s}return-1}ni.prototype.dispatchEvent=function(e){var t=nr(this._fragmentFiber);if(t===null)return!0;t=Ze(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,ro(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,ro(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ni.prototype.focus=function(e){Vn(this._fragmentFiber.child,!0,sM,e,void 0,void 0)};function sM(e,t){return e.tag===6?!1:(e=Ze(e),DA(e,t))}ni.prototype.focusLast=function(e){var t=[];Vn(this._fragmentFiber.child,!0,xg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!sM(t[n],e);n--);};function xg(e,t){return t.push(e),!1}ni.prototype.blur=function(){var e=nr(this._fragmentFiber);e!==null&&(e=Ze(e),e=Hl(e).activeElement,e!==null&&Vn(this._fragmentFiber.child,!1,xA,e,void 0,void 0))};function xA(e,t){return e.tag===6?!1:(e=Ze(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ni.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Vn(this._fragmentFiber.child,!1,SA,e,void 0,void 0)};function SA(e,t){return e.tag===6||(e=Ze(e),t.observe(e)),!1}ni.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Vn(this._fragmentFiber.child,!1,MA,e,void 0,void 0);for(var n=t=0;n<Ai.length;n++){var i=Ai[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ai[t++]=i}Ai.length=t}};function MA(e,t){return e.tag===6||(e=Ze(e),t.unobserve(e)),!1}var Ai=[],mp=!1;function bA(e,t,n){Ai.push({fragmentInstance:e,observer:t,instance:n}),mp||(mp=!0,LA(function(){mp=!1;var i=Ai;Ai=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ni.prototype.getClientRects=function(){var e=[];return Vn(this._fragmentFiber.child,!1,TA,e,void 0,void 0),e};function TA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ze(e),t.push.apply(t,e.getClientRects());return!1}ni.prototype.getRootNode=function(e){var t=nr(this._fragmentFiber);return t===null?this:Ze(t).getRootNode(e)};ni.prototype.compareDocumentPosition=function(e){var t=nr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Vn(this._fragmentFiber.child,!1,xg,n,void 0,void 0);var i=Ze(t);if(n.length===0){if(n=i,z_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Ay(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ze(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ze(n[0]),s=Ze(n[n.length-1]);var a=z_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||EA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function EA(e,t,n,i,s){var a=Ga(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=nr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=vp(n,a,F_),t===null?t=!1:(Vn(t,!0,eT,a,n),a=Nr,Nr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=vp(i,a,F_),t===null?t=!1:(Vn(t,!0,nT,a,i),a=Nr,_p=Nr=null,t=a!==null)),t):!1}function ry(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ni.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];Vn(this._fragmentFiber.child,!1,xg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Ay(this._fragmentFiber);if(i=n?i[1]||i[0]||nr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ze(i),ry(e,n);return}if(i=Ze(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ze(s),ry(s,n)):Ze(s).scrollIntoView(e),i+=n?-1:1}};function AA(e,t){return e=Ze(e),aM(e,t),!1}function aM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function rM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,ro(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ai.length;o++){var l=Ai[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ai[r++]=l)}Ai.length=r,a.observe(e)}),aM(e,t))}function wA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,ro(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?bA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Mm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mm(n),fh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function RA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function CA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function oM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_i(e.nextSibling),e===null))return null;return e}function bm(e){return e.data==="$?"||e.data==="$~"}function Sg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Tm=null;function oy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _i(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ly(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function DA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function LA(e){ny(function(){ny(function(t){return e(t)})})}function lM(e,t,n){switch(t=Hl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function cM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&de(e,t,i,null,oA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),fh(e)}function gp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fh(e)}var vi=new Map,cy=new Set;function Gl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Es=ae.d;ae.d={f:UA,r:OA,D:IA,C:PA,L:BA,m:zA,X:HA,S:FA,M:GA};function UA(){var e=Es.f(),t=Ah();return e||t}function OA(e){var t=fo(e);t!==null&&t.tag===5&&t.type==="form"?Yx(t):Es.r(e)}var _o=typeof document>"u"?null:document;function uM(e,t,n){var i=_o;if(i&&typeof t=="string"&&t){var s=pi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),cy.has(s)||(cy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),dn(t,"link",e),nn(t),i.head.appendChild(t)))}}function IA(e){Es.D(e),uM("dns-prefetch",e,null)}function PA(e,t){Es.C(e,t),uM("preconnect",e,t)}function BA(e,t,n){Es.L(e,t,n);var i=_o;if(i&&e&&t){var s='link[rel="preload"][as="'+pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+pi(n.imageSizes)+'"]')):s+='[href="'+pi(e)+'"]';var a=s;switch(t){case"style":a=oo(e);break;case"script":a=vo(e)}if(!(vi.has(a)||(e=ye({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ec(a))||t==="script"&&i.querySelector(nc(a))))){var r=i.createElement("link");dn(r,"link",e),t==="style"&&(r[Hu]=!0,r.onload=r.onerror=function(){Fy(r)}),nn(r),i.head.appendChild(r)}}}function zA(e,t){Es.m(e,t);var n=_o;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+pi(i)+'"][href="'+pi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=vo(e)}if(!vi.has(a)&&(e=ye({rel:"modulepreload",href:e},t),vi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(nc(a)))return}i=n.createElement("link"),dn(i,"link",e),nn(i),n.head.appendChild(i)}}}function FA(e,t,n){Es.S(e,t,n);var i=_o;if(i&&e){var s=Vr(i).hoistableStyles,a=oo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ec(a)))o.loading=5;else{e=ye({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vi.get(a))&&Mg(e,n);var l=r=i.createElement("link");nn(l),dn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Du(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function HA(e,t){Es.X(e,t);var n=_o;if(n&&e){var i=Vr(n).hoistableScripts,s=vo(e),a=i.get(s);a||(a=n.querySelector(nc(s)),a||(e=ye({src:e,async:!0},t),(t=vi.get(s))&&bg(e,t),a=n.createElement("script"),nn(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function GA(e,t){Es.M(e,t);var n=_o;if(n&&e){var i=Vr(n).hoistableScripts,s=vo(e),a=i.get(s);a||(a=n.querySelector(nc(s)),a||(e=ye({src:e,async:!0,type:"module"},t),(t=vi.get(s))&&bg(e,t),a=n.createElement("script"),nn(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function uy(e,t,n,i){var s=(s=na.current)?Gl(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=oo(n.href),t=Vr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=oo(n.href);var a=Vr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(ec(e)))?a._p||(r.instance=a,r.state.loading=5):(a=vi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(e,a)),VA(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=vo(n),t=Vr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function oo(e){return'href="'+pi(e)+'"'}function ec(e){return'link[rel="stylesheet"]['+e+"]"}function hM(e){return ye({},e,{"data-precedence":e.precedence,precedence:null})}function VA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Hu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Hu]=!0,t.onload=t.onerror=Fy.bind(null,t),dn(t,"link",n),nn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function vo(e){return'[src="'+pi(e)+'"]'}function nc(e){return"script[async]"+e}function hy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+pi(n.href)+'"]');if(i)return t.instance=i,nn(i),i;var s=ye({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nn(i),dn(i,"style",s),Du(i,n.precedence,e),t.instance=i;case"stylesheet":s=oo(n.href);var a=e.querySelector(ec(s));if(a)return t.state.loading|=4,t.instance=a,nn(a),a;i=hM(n),(s=vi.get(s))&&Mg(i,s),a=(e.ownerDocument||e).createElement("link"),nn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),t.state.loading|=4,Du(a,n.precedence,e),t.instance=a;case"script":return a=vo(n.src),(s=e.querySelector(nc(a)))?(t.instance=s,nn(s),s):(i=n,(s=vi.get(a))&&(i=ye({},n),bg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),nn(s),dn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Du(i,n.precedence,e));return t.instance}function Du(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lu=null;function fy(e,t,n){if(Lu===null){var i=new Map,s=Lu=new Map;s.set(n,i)}else s=Lu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Jl]||a[cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Em(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function fM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function py(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=dM(t),e.suspenseyImages.push(t)),e=qA.bind(e),t.decode().then(e,e))}function XA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=oo(i.href),a=t.querySelector(ec(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,nn(a);return}a=t.ownerDocument||t,i=hM(i),(s=vi.get(s))&&Mg(i,s),a=a.createElement("link"),nn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function WA(e,t){return e.stylesheets&&e.count===0&&Ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*cA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function pM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ou(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Vl(){this.count--,pM(this)}function qA(){this.imgCount--,pM(this)}var ch=null;function Ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ch=new Map,t.forEach(YA,e),ch=null,Vl.call(e))}function YA(e,t){if(!(t.state.loading&4)){var n=ch.get(e);if(n)var i=n.get(null);else{n=new Map,ch.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Vl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var lo={$$typeof:Xi,Provider:null,Consumer:null,_currentValue:ka,_currentValue2:ka,_threadCount:0};function ZA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xd(0),this.hiddenUpdates=Xd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function mM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new ZA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Hn(3,null,null,t),e.current=a,a.stateNode=e,t=km(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},qm(a),e}function gM(e){return e?(e=zr,e):zr}function _M(e,t,n,i,s,a){s=gM(s),i.context===null?i.context=s:i.pendingContext=s,i=sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=aa(e,i,t),n!==null&&(Gn(n,e,t),xl(n,e,t))}function my(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tg(e,t){my(e,t),(e=e.alternate)&&my(e,t)}function vM(e){if(e.tag===13||e.tag===31){var t=ar(e,67108864);t!==null&&Gn(t,e,67108864),Tg(e,67108864)}}function gy(e){if(e.tag===13||e.tag===31){var t=ti();t=Dm(t);var n=ar(e,t);n!==null&&Gn(n,e,t),Tg(e,t)}}var co=!0;function JA(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ae.p;try{ae.p=2,Eg(e,t,n,i)}finally{ae.p=a,Dt.T=s}}function KA(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ae.p;try{ae.p=8,Eg(e,t,n,i)}finally{ae.p=a,Dt.T=s}}function Eg(e,t,n,i){if(co){var s=Am(i);if(s===null)dp(e,t,i,uh,n),_y(e,i);else if(jA(s,e,t,n,i))i.stopPropagation();else if(_y(e,i),t&4&&-1<QA.indexOf(e)){for(;s!==null;){var a=fo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=za(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-$n(r);o.entanglements[1]|=l,r&=~l}ji(a),(se&6)===0&&(sh=Qn()+500,tc(0,!1))}}break;case 31:case 13:o=ar(a,2),o!==null&&Gn(o,a,2),Ah(),Tg(a,2)}if(a=Am(i),a===null&&dp(e,t,i,uh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else dp(e,t,i,null,n)}}function Am(e){return e=Om(e),Ag(e)}var uh=null;function Ag(e){if(uh=null,e=Ga(e),e!==null){var t=Wl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=by(t),e!==null)return e;e=null}else if(n===31){if(e=Ty(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return uh=e,null}function yM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hT()){case Ny:return 2;case Dy:return 8;case Fu:case fT:return 32;case Ly:return 268435456;default:return 32}default:return 32}}var wm=!1,ca=null,ua=null,ha=null,kl=new Map,Xl=new Map,Js=[],QA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _y(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(t.pointerId)}}function cl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=fo(t),t!==null&&vM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function jA(e,t,n,i,s){switch(t){case"focusin":return ca=cl(ca,e,t,n,i,s),!0;case"dragenter":return ua=cl(ua,e,t,n,i,s),!0;case"mouseover":return ha=cl(ha,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return kl.set(a,cl(kl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Xl.set(a,cl(Xl.get(a)||null,e,t,n,i,s)),!0}return!1}function xM(e){var t=Ga(e.target);if(t!==null){var n=Wl(t);if(n!==null){if(t=n.tag,t===13){if(t=by(n),t!==null){e.blockedOn=t,k_(e.priority,function(){gy(n)});return}}else if(t===31){if(t=Ty(n),t!==null){e.blockedOn=t,k_(e.priority,function(){gy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Am(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Np=i,n.target.dispatchEvent(i),Np=null}else return t=fo(n),t!==null&&vM(t),e.blockedOn=n,!1;t.shift()}return!0}function vy(e,t,n){Iu(e)&&n.delete(t)}function $A(){wm=!1,ca!==null&&Iu(ca)&&(ca=null),ua!==null&&Iu(ua)&&(ua=null),ha!==null&&Iu(ha)&&(ha=null),kl.forEach(vy),Xl.forEach(vy)}function mu(e,t){e.blockedOn===t&&(e.blockedOn=null,wm||(wm=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,$A)))}var gu=null;function yy(e){gu!==e&&(gu=e,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ag(i||n)===null)continue;break}var a=fo(n);a!==null&&(e.splice(t,3),t-=3,qp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function uo(e){function t(l){return mu(l,e)}ca!==null&&mu(ca,e),ua!==null&&mu(ua,e),ha!==null&&mu(ha,e),kl.forEach(t),Xl.forEach(t);for(var n=0;n<Js.length;n++){var i=Js[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Js.length&&(n=Js[0],n.blockedOn===null);)xM(n),n.blockedOn===null&&Js.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[kn]||null;if(typeof a=="function")r||yy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[kn]||null)o=r.formAction;else if(Ag(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),yy(n)}}}function SM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function wg(e){this._internalRoot=e}Ch.prototype.render=wg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=ti();_M(n,i,e,t,null,null)};Ch.prototype.unmount=wg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_M(e.current,2,null,e,null,null),Ah(),t[ho]=null}};function Ch(e){this._internalRoot=e}Ch.prototype.unstable_scheduleHydration=function(e){if(e){var t=zy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Js.length&&t!==0&&t<Js[n].priority;n++);Js.splice(n,0,e),n===0&&xM(e)}};var xy=Sy.version;if(xy!=="19.3.1")throw Error(Q(527,xy,"19.3.1"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=tT(t),e=e!==null?Ey(e):null,e=e===null?null:e.stateNode,e};var tw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ul=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ul.isDisabled&&ul.supportsFiber))try{ql=ul.inject(tw),jn=ul}catch{}var ul;Nh.createRoot=function(e,t){if(!My(e))throw Error(Q(299));var n=!1,i="",s=eS,a=nS,r=iS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=mM(e,1,!1,null,null,n,i,null,s,a,r,SM),e[ho]=t.current,vg(e),new wg(t)};Nh.hydrateRoot=function(e,t,n){if(!My(e))throw Error(Q(299));var i=!1,s="",a=eS,r=nS,o=iS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=mM(e,1,!0,t,n??null,i,s,l,a,r,o,SM),t.context=gM(null),n=t.current,i=ti(),i=Dm(i),s=sa(i),s.callback=null,aa(n,s,i),n=i,t.current.lanes=n,Zl(t,n),ji(t),e[ho]=t.current,vg(e),new Ch(t)};Nh.version="19.3.1"});var EM=Gs((WN,TM)=>{"use strict";function bM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bM)}catch(e){console.error(e)}}bM(),TM.exports=MM()});var v1=Td(tl()),y1=Td(EM());var jo=Td(tl());var KM=0,n0=1,QM=2;var Nc=1,jM=2,Wo=3,Da=0,Ln=1,as=2,mr=0,qo=1,i0=2,s0=3,a0=4,$M=5;var gr=100,tb=101,eb=102,nb=103,ib=104,sb=200,ab=201,rb=202,ob=203,r0=204,o0=205,lb=206,cb=207,ub=208,hb=209,fb=210,db=211,pb=212,mb=213,gb=214,$h=0,tf=1,ef=2,Uo=3,nf=4,sf=5,af=6,rf=7,l0=0,_b=1,vb=2,rs=0,c0=1,u0=2,h0=3,f0=4,d0=5,p0=6,m0=7;var g0=300,_r=301,Yo=302,Nf=303,Df=304,of=1e3,ts=1001,lf=1002,rn=1003,yb=1004;var Dc=1005;var Nn=1006,Lf=1007;var Ps=1008;var Wn=1009,_0=1010,v0=1011,Zo=1012,Uf=1013,Oi=1014,Ii=1015,Pi=1016,Of=1017,If=1018,vr=1020,y0=35902,x0=35899,S0=1021,M0=1022,Bi=1023,Ls=1026,Bs=1027,b0=1028,Pf=1029,La=1030,Bf=1031;var zf=1033,Lc=33776,Uc=33777,Oc=33778,Ic=33779,Ff=35840,Hf=35841,Gf=35842,Vf=35843,kf=36196,Xf=37492,Wf=37496,qf=37488,Yf=37489,Pc=37490,Zf=37491,Jf=37808,Kf=37809,Qf=37810,jf=37811,$f=37812,td=37813,ed=37814,nd=37815,id=37816,sd=37817,ad=37818,rd=37819,od=37820,ld=37821,cd=36492,ud=36494,hd=36495,fd=36283,dd=36284,Bc=36285,pd=36286;var uc=2300,cf=2301,Qh=2302,Zg=2303,Jg=2400,Kg=2401,Qg=2402;var xb=3200;var md=0,Sb=1,zs="",ai="srgb",hc="srgb-linear",fc="linear",le="srgb";var jh=7680;var Mb=519,bb=512,Tb=513,Eb=514,T0=515,Ab=516,wb=517,E0=518,A0=519,Rb=35044;var w0="300 es",xi=2e3,Oo=2001;function ew(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function dc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Cb(){let e=dc("canvas");return e.style.display="block",e}var AM={},Io=null;function R0(...e){let t="THREE."+e.shift();Io?Io("log",t,...e):console.log(t,...e)}function Nb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=Nb(e);let t="THREE."+e.shift();if(Io)Io("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ut(...e){e=Nb(e);let t="THREE."+e.shift();if(Io)Io("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function oc(...e){let t=e.join(" ");t in AM||(AM[t]=!0,Nt(...e))}function Db(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Lb={[$h]:$h,[ef]:af,[nf]:nf,[Uo]:sf,[tf]:tf,[af]:ef,[rf]:rf,[sf]:Uo},ns=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wM=1234567,lc=Math.PI/180,Po=180/Math.PI;function Jo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function C0(e,t){return(e%t+t)%t}function iw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function sw(e,t,n){return e!==t?(n-e)/(t-e):0}function cc(e,t,n){return(1-n)*e+n*t}function aw(e,t,n,i){return cc(e,t,1-Math.exp(-n*i))}function rw(e,t=1){return t-Math.abs(C0(e,t*2)-t)}function ow(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function lw(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function cw(e,t){return e+Math.floor(Math.random()*(t-e+1))}function uw(e,t){return e+Math.random()*(t-e)}function hw(e){return e*(.5-Math.random())}function fw(e){e!==void 0&&(wM=e);let t=wM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dw(e){return e*lc}function pw(e){return e*Po}function mw(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function gw(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function N0(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function _w(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*v,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*v,o*c);break;case"ZYZ":e.set(l*v,l*d,o*f,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function D0(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ub(e,t){if(t.constructor===Float32Array)return e;let n=D0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function Ob(e,t){if(t.constructor===Float32Array)return e;let n=D0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var zc={DEG2RAD:lc,RAD2DEG:Po,generateUUID:Jo,clamp:Qt,euclideanModulo:C0,mapLinear:iw,inverseLerp:sw,lerp:cc,damp:aw,pingpong:rw,smoothstep:ow,smootherstep:lw,randInt:cw,randFloat:uw,randFloatSpread:hw,seededRandom:fw,degToRad:dw,radToDeg:pw,isPowerOfTwo:mw,ceilPowerOfTwo:gw,floorPowerOfTwo:N0,setQuaternionFromProperEuler:_w,normalize:Ob,denormalize:Ub},jt=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},is=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==v){let g=l*u+c*d+f*v+p*M;g<0&&(u=-u,d=-d,v=-v,M=-M,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(RM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(RM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Rg.copy(this).projectOnVector(t),this.sub(Rg)}reflect(t){return this.sub(Rg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rg=new F,RM=new is,Ot=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=s[0],g=s[3],h=s[6],m=s[1],x=s[4],y=s[7],E=s[2],A=s[5],_=s[8];return a[0]=r*M+o*m+l*E,a[3]=r*g+o*x+l*A,a[6]=r*h+o*y+l*_,a[1]=c*M+f*m+p*E,a[4]=c*g+f*x+p*A,a[7]=c*h+f*y+p*_,a[2]=u*M+d*m+v*E,a[5]=u*g+d*x+v*A,a[8]=u*h+d*y+v*_,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return oc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cg.makeScale(t,n)),this}rotate(t){return oc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cg.makeRotation(-t)),this}translate(t,n){return oc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cg=new Ot,CM=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),NM=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vw(){let e={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===le&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zs?fc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[hc]:{primaries:t,whitePoint:i,transfer:fc,toXYZ:CM,fromXYZ:NM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:i,transfer:le,toXYZ:CM,fromXYZ:NM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),e}var Kt=vw();function Ds(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Lo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var yo,uf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yo===void 0&&(yo=dc("canvas")),yo.width=t.width,yo.height=t.height;let s=yo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=yo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=dc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ds(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yw=0,Bo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Ng(s[r].image)):a.push(Ng(s[r]))}else a=Ng(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Ng(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?uf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var xw=0,Dg=new F,Xn=class e extends ns{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ts,s=ts,a=Nn,r=Ps,o=Bi,l=Wn,c=e.DEFAULT_ANISOTROPY,f=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Jo(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dg).x}get height(){return this.source.getSize(Dg).y}get depth(){return this.source.getSize(Dg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==g0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case of:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case lf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case of:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case lf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=g0;Xn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(d+1)/2,E=(h+1)/2,A=(f+u)/4,_=(p+M)/4,T=(v+g)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=A/i,a=_/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=A/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=_/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-M)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hf=class extends ns{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new De(0,0,t,n),this.scissorTest=!1,this.viewport=new De(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Xn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Bo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends hf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},pc=class extends Xn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ff=class extends Xn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ce=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/xo.setFromMatrixColumn(t,0).length(),a=1/xo.setFromMatrixColumn(t,1).length(),r=1/xo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sw,t,Mw)}lookAt(t,n,i){let s=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ya.crossVectors(i,ii),ya.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ya.crossVectors(i,ii)),ya.normalize(),Dh.crossVectors(ii,ya),s[0]=ya.x,s[4]=Dh.x,s[8]=ii.x,s[1]=ya.y,s[5]=Dh.y,s[9]=ii.y,s[2]=ya.z,s[6]=Dh.z,s[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],g=i[10],h=i[14],m=i[3],x=i[7],y=i[11],E=i[15],A=s[0],_=s[4],T=s[8],D=s[12],R=s[1],U=s[5],I=s[9],H=s[13],N=s[2],k=s[6],q=s[10],V=s[14],et=s[3],X=s[7],$=s[11],tt=s[15];return a[0]=r*A+o*R+l*N+c*et,a[4]=r*_+o*U+l*k+c*X,a[8]=r*T+o*I+l*q+c*$,a[12]=r*D+o*H+l*V+c*tt,a[1]=f*A+p*R+u*N+d*et,a[5]=f*_+p*U+u*k+d*X,a[9]=f*T+p*I+u*q+d*$,a[13]=f*D+p*H+u*V+d*tt,a[2]=v*A+M*R+g*N+h*et,a[6]=v*_+M*U+g*k+h*X,a[10]=v*T+M*I+g*q+h*$,a[14]=v*D+M*H+g*V+h*tt,a[3]=m*A+x*R+y*N+E*et,a[7]=m*_+x*U+y*k+E*X,a[11]=m*T+x*I+y*q+E*$,a[15]=m*D+x*H+y*V+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],g=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,y=o*u-l*p,E=r*d-c*f,A=r*u-l*f,_=r*p-o*f;return n*(M*m-g*x+h*y)-i*(v*m-g*E+h*A)+s*(v*x-M*E+h*_)-a*(v*y-M*A+g*_)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],g=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,y=n*c-a*r,E=i*l-s*o,A=i*c-a*o,_=s*c-a*l,T=f*M-p*v,D=f*g-u*v,R=f*h-d*v,U=p*g-u*M,I=p*h-d*M,H=u*h-d*g,N=m*H-x*I+y*U+E*R-A*D+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*H-l*I+c*U)*k,t[1]=(s*I-i*H-a*U)*k,t[2]=(M*_-g*A+h*E)*k,t[3]=(u*A-p*_-d*E)*k,t[4]=(l*R-r*H-c*D)*k,t[5]=(n*H-s*R+a*D)*k,t[6]=(g*y-v*_-h*x)*k,t[7]=(f*_-u*y+d*x)*k,t[8]=(r*I-o*R+c*T)*k,t[9]=(i*R-n*I-a*T)*k,t[10]=(v*A-M*y+h*m)*k,t[11]=(p*y-f*A-d*m)*k,t[12]=(o*D-r*U-l*T)*k,t[13]=(n*U-i*D+s*T)*k,t[14]=(M*x-v*E-g*m)*k,t[15]=(f*E-p*x+u*m)*k,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,M=r*f,g=r*p,h=o*p,m=l*c,x=l*f,y=l*p,E=i.x,A=i.y,_=i.z;return s[0]=(1-(M+h))*E,s[1]=(d+y)*E,s[2]=(v-x)*E,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+h))*A,s[6]=(g+m)*A,s[7]=0,s[8]=(v+x)*_,s[9]=(g-m)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=xo.set(s[0],s[1],s[2]).length(),o=xo.set(s[4],s[5],s[6]).length(),l=xo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ci.copy(this);let c=1/r,f=1/o,p=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=f,Ci.elements[5]*=f,Ci.elements[6]*=f,Ci.elements[8]*=p,Ci.elements[9]*=p,Ci.elements[10]*=p,n.setFromRotationMatrix(Ci),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===xi)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===Oo)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===xi)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===Oo)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},xo=new F,Ci=new Ce,Sw=new F(0,0,0),Mw=new F(1,1,1),ya=new F,Dh=new F,ii=new F,DM=new Ce,LM=new is,Us=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return DM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(DM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return LM.setFromEuler(this),this.setFromQuaternion(LM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Us.DEFAULT_ORDER="XYZ";var mc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bw=0,UM=new F,So=new is,As=new Ce,Lh=new F,ic=new F,Tw=new F,Ew=new is,OM=new F(1,0,0),IM=new F(0,1,0),PM=new F(0,0,1),BM={type:"added"},Aw={type:"removed"},Mo={type:"childadded",child:null},Lg={type:"childremoved",child:null},Dn=class e extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,n=new Us,i=new is,s=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ot}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return So.setFromAxisAngle(t,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(t,n){return So.setFromAxisAngle(t,n),this.quaternion.premultiply(So),this}rotateX(t){return this.rotateOnAxis(OM,t)}rotateY(t){return this.rotateOnAxis(IM,t)}rotateZ(t){return this.rotateOnAxis(PM,t)}translateOnAxis(t,n){return UM.copy(t).applyQuaternion(this.quaternion),this.position.add(UM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(OM,t)}translateY(t){return this.translateOnAxis(IM,t)}translateZ(t){return this.translateOnAxis(PM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Lh.copy(t):Lh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(ic,Lh,this.up):As.lookAt(Lh,ic,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),So.setFromRotationMatrix(As),this.quaternion.premultiply(So.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(BM),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Aw),Lg.child=t,this.dispatchEvent(Lg),Lg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(BM),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,t,Tw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,Ew,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dn.DEFAULT_UP=new F(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ui=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ww={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ww)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xa={h:0,s:0,l:0},Uh={h:0,s:0,l:0};function Ug(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var $t=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Kt.workingColorSpace){if(t=C0(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Ug(r,a,t+1/3),this.g=Ug(r,a,t),this.b=Ug(r,a,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,n=ai){function i(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ai){let i=Ib[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return Kt.workingToColorSpace(Sn.copy(this),t),Math.round(Qt(Sn.r*255,0,255))*65536+Math.round(Qt(Sn.g*255,0,255))*256+Math.round(Qt(Sn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(Sn.copy(this),n);let i=Sn.r,s=Sn.g,a=Sn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=ai){Kt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b;return t!==ai?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(xa),this.setHSL(xa.h+t,xa.s+n,xa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(xa),t.getHSL(Uh);let i=cc(xa.h,Uh.h,n),s=cc(xa.s,Uh.s,n),a=cc(xa.l,Uh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new $t;$t.NAMES=Ib;var gc=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Us,this.environmentIntensity=1,this.environmentRotation=new Us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ni=new F,ws=new F,Og=new F,Rs=new F,bo=new F,To=new F,zM=new F,Ig=new F,Pg=new F,Bg=new F,zg=new De,Fg=new De,Hg=new De,Ta=class e{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ni.subVectors(t,n),s.cross(Ni);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ni.subVectors(s,n),ws.subVectors(i,n),Og.subVectors(t,n);let r=Ni.dot(Ni),o=Ni.dot(ws),l=Ni.dot(Og),c=ws.dot(ws),f=ws.dot(Og),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Rs)===null?!1:Rs.x>=0&&Rs.y>=0&&Rs.x+Rs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Rs.x),l.addScaledVector(r,Rs.y),l.addScaledVector(o,Rs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return zg.setScalar(0),Fg.setScalar(0),Hg.setScalar(0),zg.fromBufferAttribute(t,n),Fg.fromBufferAttribute(t,i),Hg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(zg,a.x),r.addScaledVector(Fg,a.y),r.addScaledVector(Hg,a.z),r}static isFrontFacing(t,n,i,s){return Ni.subVectors(i,n),ws.subVectors(t,n),Ni.cross(ws).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Ni.cross(ws).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;bo.subVectors(s,i),To.subVectors(a,i),Ig.subVectors(t,i);let l=bo.dot(Ig),c=To.dot(Ig);if(l<=0&&c<=0)return n.copy(i);Pg.subVectors(t,s);let f=bo.dot(Pg),p=To.dot(Pg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(i).addScaledVector(bo,r);Bg.subVectors(t,a);let d=bo.dot(Bg),v=To.dot(Bg);if(v>=0&&d<=v)return n.copy(a);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(To,o);let g=f*v-d*p;if(g<=0&&p-f>=0&&d-v>=0)return zM.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(zM,o);let h=1/(g+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(bo,r).addScaledVector(To,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ea=class{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Di.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Di.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Di.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Di):Di.fromBufferAttribute(a,r),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oh.copy(i.boundingBox)),Oh.applyMatrix4(t.matrixWorld),this.union(Oh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sc),Ih.subVectors(this.max,sc),Eo.subVectors(t.a,sc),Ao.subVectors(t.b,sc),wo.subVectors(t.c,sc),Sa.subVectors(Ao,Eo),Ma.subVectors(wo,Ao),or.subVectors(Eo,wo);let n=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-or.z,or.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,or.z,0,-or.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-or.y,or.x,0];return!Gg(n,Eo,Ao,wo,Ih)||(n=[1,0,0,0,1,0,0,0,1],!Gg(n,Eo,Ao,wo,Ih))?!1:(Ph.crossVectors(Sa,Ma),n=[Ph.x,Ph.y,Ph.z],Gg(n,Eo,Ao,wo,Ih))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Cs=[new F,new F,new F,new F,new F,new F,new F,new F],Di=new F,Oh=new Ea,Eo=new F,Ao=new F,wo=new F,Sa=new F,Ma=new F,or=new F,sc=new F,Ih=new F,Ph=new F,lr=new F;function Gg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){lr.fromArray(e,a);let o=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),l=t.dot(lr),c=n.dot(lr),f=i.dot(lr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var We=new F,Bh=new jt,Rw=0,es=class extends ns{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rb,this.updateRanges=[],this.gpuType=Ii,this.version=0,this._normalizationScale=t!==void 0?D0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bh.fromBufferAttribute(this,n),Bh.applyMatrix3(t),this.setXY(n,Bh.x,Bh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):Ub(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):Ob(t,this.array)}};var _c=class extends es{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var vc=class extends es{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ne=class extends es{constructor(t,n,i){super(new Float32Array(t),n,i)}},Cw=new Ea,ac=new F,Vg=new F,Fo=class{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Cw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ac.subVectors(t,this.center);let n=ac.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ac,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ac.copy(t.center).add(Vg)),this.expandByPoint(ac.copy(t.center).sub(Vg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nw=0,yi=new Ce,kg=new Dn,Ro=new F,si=new Ea,rc=new Ea,an=new F,Si=class e extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ew(t)?vc:_c)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,i){return yi.makeTranslation(t,n,i),this.applyMatrix4(yi),this}scale(t,n,i){return yi.makeScale(t,n,i),this.applyMatrix4(yi),this}lookAt(t){return kg.lookAt(t),kg.updateMatrix(),this.applyMatrix4(kg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];si.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];rc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(si.min,rc.min),si.expandByPoint(an),an.addVectors(si.max,rc.max),si.expandByPoint(an)):(si.expandByPoint(rc.min),si.expandByPoint(rc.max))}si.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)an.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(an));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)an.fromBufferAttribute(o,c),l&&(Ro.fromBufferAttribute(t,c),an.add(Ro)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new es(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;let f=new F,p=new F,u=new F,d=new jt,v=new jt,M=new jt,g=new F,h=new F;function m(D,R,U){c[D]=c[R]=c[U]=1,f.fromBufferAttribute(i,D),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),d.fromBufferAttribute(a,D),v.fromBufferAttribute(a,R),M.fromBufferAttribute(a,U),p.sub(f),u.sub(f),v.sub(d),M.sub(d);let I=1/(v.x*M.y-M.x*v.y);isFinite(I)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(u,-v.y).multiplyScalar(I),h.copy(u).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(I),o[D].add(g),o[R].add(g),o[U].add(g),l[D].add(h),l[R].add(h),l[U].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,R=x.length;D<R;++D){let U=x[D],I=U.start,H=U.count;for(let N=I,k=I+H;N<k;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new F,E=new F,A=new F,_=new F;function T(D){A.fromBufferAttribute(s,D),_.copy(A);let R=o[D];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(_,R);let I=E.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,I)}for(let D=0,R=i.count;D<R;++D)c[D]&&T(D);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new es(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,f=new F,p=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new es(u,f,p)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xg=new F,Dw=new F,Lw=new Ot,Li=class{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Xg.subVectors(i,n).cross(Dw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Xg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Lw.getNormalMatrix(t),s=this.coplanarPoint(Xg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Uw=0,Aa=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=qo,this.side=Da,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=r0,this.blendDst=o0,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jh,this.stencilZFail=jh,this.stencilZPass=jh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ns=new F,Wg=new F,zh=new F,Fh=new F,df=class{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ns)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ns.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ns.copy(this.origin).addScaledVector(this.direction,n),Ns.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Wg.copy(t).add(n).multiplyScalar(.5),zh.copy(n).sub(t).normalize(),Fh.copy(this.origin).sub(Wg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(zh),o=Fh.dot(this.direction),l=-Fh.dot(zh),c=Fh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Wg).addScaledVector(zh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ns.subVectors(t.center,this.origin);let i=Ns.dot(this.direction),s=Ns.dot(Ns)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ns)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,M=n.y-r.y,g=n.z-r.z,h=i.x-r.x,m=i.y-r.y,x=i.z-r.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(f),_,T,D,R,U,I,H,N,k,q,V,et;if(y>=E&&y>=A?(D=l,I=p,k=v,et=h,l>=0?(_=c,T=f,R=u,U=d,H=M,N=g,q=m,V=x):(_=f,T=c,R=d,U=u,H=g,N=M,q=x,V=m)):E>=A?(D=c,I=u,k=M,et=m,c>=0?(_=f,T=l,R=d,U=p,H=g,N=v,q=x,V=h):(_=l,T=f,R=p,U=d,H=v,N=g,q=h,V=x)):(D=f,I=d,k=g,et=x,f>=0?(_=l,T=c,R=p,U=u,H=v,N=M,q=h,V=m):(_=c,T=l,R=u,U=p,H=M,N=v,q=m,V=h)),D===0)return null;let X=_/D,$=T/D,tt=1/D,xt=R-X*I,Et=U-$*I,Y=H-X*k,ut=N-$*k,_t=q-X*et,At=V-$*et,pt=_t*ut-At*Y,Lt=xt*At-Et*_t,Le=Y*Et-ut*xt;if(s){if(pt<0||Lt<0||Le<0)return null}else if((pt<0||Lt<0||Le<0)&&(pt>0||Lt>0||Le>0))return null;let Rt=pt+Lt+Le;if(Rt===0)return null;let ee=tt*(pt*I+Lt*k+Le*et);return(Rt>0?ee<0:ee>0)?null:this.at(ee/Rt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hr=class extends Aa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},FM=new Ce,cr=new df,Hh=new Fo,HM=new F,Gh=new F,Vh=new F,kh=new F,qg=new F,Xh=new F,GM=new F,Wh=new F,Ee=class extends Dn{constructor(t=new Si,n=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Xh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(qg.fromBufferAttribute(p,t),r?Xh.addScaledVector(qg,f):Xh.addScaledVector(qg.sub(n),f))}n.add(Xh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hh.copy(i.boundingSphere),Hh.applyMatrix4(a),cr.copy(t.ray).recast(t.near),!(Hh.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Hh,HM)===null||cr.origin.distanceToSquared(HM)>(t.far-t.near)**2))&&(FM.copy(a).invert(),cr.copy(t.ray).applyMatrix4(FM),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,cr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=o.getX(y),_=o.getX(y+1),T=o.getX(y+2);s=qh(this,h,t,i,c,f,p,A,_,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let m=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=qh(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=y,_=y+1,T=y+2;s=qh(this,h,t,i,c,f,p,A,_,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let m=g,x=g+1,y=g+2;s=qh(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function Ow(e,t,n,i,s,a,r,o){let l;if(t.side===Ln?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Da,o),l===null)return null;Wh.copy(o),Wh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Wh);return c<n.near||c>n.far?null:{distance:c,point:Wh.clone(),object:e}}function qh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Gh),e.getVertexPosition(l,Vh),e.getVertexPosition(c,kh);let f=Ow(e,t,n,i,Gh,Vh,kh,GM);if(f){let p=new F;Ta.getBarycoord(GM,Gh,Vh,kh,p),s&&(f.uv=Ta.getInterpolatedAttribute(s,o,l,c,p,new jt)),a&&(f.uv1=Ta.getInterpolatedAttribute(a,o,l,c,p,new jt)),r&&(f.normal=Ta.getInterpolatedAttribute(r,o,l,c,p,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Ta.getNormal(Gh,Vh,kh,u.normal),f.face=u,f.barycoord=p}return f}var pf=class extends Xn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=rn,f=rn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=new Fo,Iw=new jt(.5,.5),Yh=new F,wa=class{constructor(t=new Li,n=new Li,i=new Li,s=new Li,a=new Li,r=new Li){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],M=a[9],g=a[10],h=a[11],m=a[12],x=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-v,E-m).normalize(),s[1].setComponents(c+r,d+f,h+v,E+m).normalize(),s[2].setComponents(c+o,d+p,h+M,E+x).normalize(),s[3].setComponents(c-o,d-p,h-M,E-x).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,h-g,E-y).normalize();else if(s[4].setComponents(c-l,d-u,h-g,E-y).normalize(),n===xi)s[5].setComponents(c+l,d+u,h+g,E+y).normalize();else if(n===Oo)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);let n=Iw.distanceTo(t.center);return ur.radius=.7071067811865476+n,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Yh.x=s.normal.x>0?t.max.x:t.min.x,Yh.y=s.normal.y>0?t.max.y:t.min.y,Yh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},VM=new Ce,mf=class e{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];VM.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new wa),i[s].setFromProjectionMatrix(VM,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new wa),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var yc=class extends Xn{constructor(t=[],n=_r,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Os=class extends Xn{constructor(t,n,i=Oi,s,a,r,o=rn,l=rn,c,f=Ls,p=1){if(f!==Ls&&f!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},xc=class extends Os{constructor(t,n=Oi,i=_r,s,a,r=rn,o=rn,l,c=Ls){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sc=class extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Is=class e extends Si{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(p,2));function v(M,g,h,m,x,y,E,A,_,T,D){let R=y/_,U=E/T,I=y/2,H=E/2,N=A/2,k=_+1,q=T+1,V=0,et=0,X=new F;for(let $=0;$<q;$++){let tt=$*U-H;for(let xt=0;xt<k;xt++){let Et=xt*R-I;X[M]=Et*m,X[g]=tt*x,X[h]=N,c.push(X.x,X.y,X.z),X[M]=0,X[g]=0,X[h]=A>0?1:-1,f.push(X.x,X.y,X.z),p.push(xt/_),p.push(1-$/T),V+=1}}for(let $=0;$<T;$++)for(let tt=0;tt<_;tt++){let xt=u+tt+k*$,Et=u+tt+k*($+1),Y=u+(tt+1)+k*($+1),ut=u+(tt+1)+k*$;l.push(xt,Et,ut),l.push(Et,Y,ut),et+=6}o.addGroup(d,et,D),d+=et,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ho=class e extends Si{constructor(t=1,n=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:s,heightSegments:a},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],f=n/2,p=Math.PI/2*t,u=n,d=2*p+u,v=i*2+a,M=s+1,g=new F,h=new F;for(let m=0;m<=v;m++){let x=0,y=0,E=0,A=0;if(m<=i){let D=m/i,R=D*Math.PI/2;y=-f-t*Math.cos(R),E=t*Math.sin(R),A=-t*Math.cos(R),x=D*p}else if(m<=i+a){let D=(m-i)/a;y=-f+D*n,E=t,A=0,x=p+D*u}else{let D=(m-i-a)/i,R=D*Math.PI/2;y=f+t*Math.sin(R),E=t*Math.cos(R),A=t*Math.sin(R),x=p+u+D*p}let _=Math.max(0,Math.min(1,x/d)),T=0;m===0?T=.5/s:m===v&&(T=-.5/s);for(let D=0;D<=s;D++){let R=D/s,U=R*Math.PI*2,I=Math.sin(U),H=Math.cos(U);h.x=-E*H,h.y=y,h.z=E*I,o.push(h.x,h.y,h.z),g.set(-E*H,A,E*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+T,_)}if(m>0){let D=(m-1)*M;for(let R=0;R<s;R++){let U=D+R,I=D+R+1,H=m*M+R,N=m*M+R+1;r.push(U,I,H),r.push(I,N,H)}}}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var fr=class e extends Si{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let f=[],p=[],u=[],d=[],v=0,M=[],g=i/2,h=0;m(),r===!1&&(t>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(d,2));function m(){let y=new F,E=new F,A=0,_=(n-t)/i;for(let T=0;T<=a;T++){let D=[],R=T/a,U=R*(n-t)+t;for(let I=0;I<=s;I++){let H=I/s,N=H*l+o,k=Math.sin(N),q=Math.cos(N);E.x=U*k,E.y=-R*i+g,E.z=U*q,p.push(E.x,E.y,E.z),y.set(k,_,q).normalize(),u.push(y.x,y.y,y.z),d.push(H,1-R),D.push(v++)}M.push(D)}for(let T=0;T<s;T++)for(let D=0;D<a;D++){let R=M[D][T],U=M[D+1][T],I=M[D+1][T+1],H=M[D][T+1];(t>0||D!==0)&&(f.push(R,U,H),A+=3),(n>0||D!==a-1)&&(f.push(U,I,H),A+=3)}c.addGroup(h,A,0),h+=A}function x(y){let E=v,A=new jt,_=new F,T=0,D=y===!0?t:n,R=y===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),v++;let U=v;for(let I=0;I<=s;I++){let N=I/s*l+o,k=Math.cos(N),q=Math.sin(N);_.x=D*q,_.y=g*R,_.z=D*k,p.push(_.x,_.y,_.z),u.push(0,R,0),A.x=k*.5+.5,A.y=q*.5*R+.5,d.push(A.x,A.y),v++}for(let I=0;I<s;I++){let H=E+I,N=U+I;y===!0?f.push(N,N+1,H):f.push(N+1,N,H),T+=3}c.addGroup(h,T,y===!0?1:2),h+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mc=class e extends Si{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],M=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let y=x*p-a;v.push(y,-m,0),M.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,y=m+c*(h+1),E=m+1+c*(h+1),A=m+1+c*h;d.push(x,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Ne(v,3)),this.setAttribute("normal",new Ne(M,3)),this.setAttribute("uv",new Ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var dr=class e extends Si{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],p=new F,u=new F,d=[],v=[],M=[],g=[];for(let h=0;h<=i;h++){let m=[],x=h/i,y=r+x*o,E=t*Math.cos(y),A=Math.sqrt(t*t-E*E),_=0;h===0&&r===0?_=.5/n:h===i&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){let D=T/n,R=s+D*a;p.x=-A*Math.cos(R),p.y=E,p.z=A*Math.sin(R),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),g.push(D+_,1-x),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){let x=f[h][m+1],y=f[h][m],E=f[h+1][m],A=f[h+1][m+1];(h!==0||r>0)&&d.push(x,y,A),(h!==i-1||l<Math.PI)&&d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Ne(v,3)),this.setAttribute("normal",new Ne(M,3)),this.setAttribute("uv",new Ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Go=class e extends Si{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],f=[],p=[],u=new F,d=new F,v=new F;for(let M=0;M<=i;M++){let g=r+M/i*o;for(let h=0;h<=s;h++){let m=h/s*a;d.x=(t+n*Math.cos(g))*Math.cos(m),d.y=(t+n*Math.cos(g))*Math.sin(m),d.z=n*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),v.subVectors(d,u).normalize(),f.push(v.x,v.y,v.z),p.push(h/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let h=(s+1)*M+g-1,m=(s+1)*(M-1)+g-1,x=(s+1)*(M-1)+g,y=(s+1)*M+g;l.push(h,m,y),l.push(m,x,y)}this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function yr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(kM(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(kM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function bn(e){let t={};for(let n=0;n<e.length;n++){let i=yr(e[n]);for(let s in i)t[s]=i[s]}return t}function kM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function L0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Pb={clone:yr,merge:bn},Bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ss=class extends Aa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bw,this.fragmentShader=zw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Pw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new $t().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gf=class extends ss{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pr=class extends Aa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var _f=class extends Aa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vf=class extends Aa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Co(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Zh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ra=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jg,endingEnd:Jg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Kg:a=t,o=2*n-i;break;case Qg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kg:r=t,l=2*i-n;break;case Qg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),M=v*v,g=M*v,h=-u*g+2*u*M-u*v,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*v+1,x=(-1-d)*g+(1.5+d)*M+.5*v,y=d*g-d*M;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+x*r[l+E]+y*r[p+E];return a}},xf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Sf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mf=class extends Ra{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),M=1-v;for(let g=0;g!==o;++g)a[g]=r[c+g]*M+r[l+g]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let M=r[c+v],g=r[l+v],h=d*u+v*2,m=p[h],x=p[h+1],y=t*u+v*2,E=f[y],A=f[y+1],_=Hw(i,n,m,E,s);a[v]=Bb(_,M,x,A,g)}return a}};function Bb(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function Fw(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function Hw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=Bb(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=Fw(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var oi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(n,this.TimeBufferType),this.values=Co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Zh(t.settings)&&(i.settings={inTangents:Co(t.settings.inTangents,Array),outTangents:Co(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Mf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case uc:n=this.InterpolantFactoryMethodDiscrete;break;case cf:n=this.InterpolantFactoryMethodLinear;break;case Qh:n=this.InterpolantFactoryMethodSmooth;break;case Zg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uc;case this.InterpolantFactoryMethodLinear:return cf;case this.InterpolantFactoryMethodSmooth:return Qh;case this.InterpolantFactoryMethodBezier:return Zg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;Zh(this.settings)&&(XM(this.settings.inTangents,t),XM(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Zh(this.settings)&&(WM(this.settings.inTangents,t),WM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&nw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Zh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function XM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function WM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=cf;var Ca=class extends oi{constructor(t,n,i){super(t,n,i)}};Ca.prototype.ValueTypeName="bool";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=uc;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var bf=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};bf.prototype.ValueTypeName="color";var Tf=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};Tf.prototype.ValueTypeName="number";var Ef=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)is.slerpFlat(a,0,r,c-o,r,c,l);return a}},bc=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ef(this.times,this.values,this.getValueSize(),t)}};bc.prototype.ValueTypeName="quaternion";bc.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends oi{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=uc;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Af=class extends oi{constructor(t,n,i,s){super(t,n,i,s)}};Af.prototype.ValueTypeName="vector";var wf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zb=new wf,Rf=class{constructor(t){this.manager=t!==void 0?t:zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Rf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vo=class extends Dn{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var Yg=new Ce,qM=new F,YM=new F,Tc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;qM.setFromMatrixPosition(t.matrixWorld),n.position.copy(qM),YM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(YM),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Yg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Yg,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Oo||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Yg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jh=new F,Kh=new is,$i=new F,Ec=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jh,Kh,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,Kh,$i.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Jh,Kh,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,Kh,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ba=new F,ZM=new jt,JM=new jt,Mn=class extends Ec{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ba.x,ba.y).multiplyScalar(-t/ba.z),ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ba.x,ba.y).multiplyScalar(-t/ba.z)}getViewSize(t,n){return this.getViewBounds(t,ZM,JM),n.subVectors(JM,ZM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(lc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var jg=class extends Tc{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},Ac=class extends Vo{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},wc=class extends Ec{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},$g=class extends Tc{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Vo{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new $g}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Rc=class extends Vo{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var No=-90,Do=1,Xo=class extends Dn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(No,Do,t,n);s.layers=this.layers,this.add(s);let a=new Mn(No,Do,t,n);a.layers=this.layers,this.add(a);let r=new Mn(No,Do,t,n);r.layers=this.layers,this.add(r);let o=new Mn(No,Do,t,n);o.layers=this.layers,this.add(o);let l=new Mn(No,Do,t,n);l.layers=this.layers,this.add(l);let c=new Mn(No,Do,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Cf=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var U0="\\[\\]\\.:\\/",Gw=new RegExp("["+U0+"]","g"),O0="[^"+U0+"]",Vw="[^"+U0.replace("\\.","")+"]",kw=/((?:WC+[\/:])*)/.source.replace("WC",O0),Xw=/(WCOD+)?/.source.replace("WCOD",Vw),Ww=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",O0),qw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",O0),Yw=new RegExp("^"+kw+Xw+Ww+qw+"$"),Zw=["material","materials","bones","map"],t0=class{constructor(t,n,i){let s=i||Ae.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ae=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gw,"")}static parseTrackName(t){let n=Yw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Zw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=t0;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qN=new Float32Array(1);var Cc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};var e0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function I0(e,t,n,i){let s=Jw(i);switch(n){case S0:return e*t;case b0:return e*t/s.components*s.byteLength;case Pf:return e*t/s.components*s.byteLength;case La:return e*t*2/s.components*s.byteLength;case Bf:return e*t*2/s.components*s.byteLength;case M0:return e*t*3/s.components*s.byteLength;case Bi:return e*t*4/s.components*s.byteLength;case zf:return e*t*4/s.components*s.byteLength;case Lc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Ic:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hf:case Vf:return Math.max(e,16)*Math.max(t,8)/4;case Ff:case Gf:return Math.max(e,8)*Math.max(t,8)/2;case kf:case Xf:case qf:case Yf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wf:case Pc:case Zf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Qf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case $f:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case td:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ed:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case nd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case id:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ad:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case rd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case od:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ld:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cd:case ud:case hd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case fd:case dd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bc:case pd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jw(e){switch(e){case Wn:case _0:return{byteLength:1,components:1};case Zo:case v0:case Pi:return{byteLength:2,components:1};case Of:case If:return{byteLength:2,components:4};case Oi:case Uf:case Ii:return{byteLength:4,components:1};case y0:case x0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function r1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Qw(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$w=`#ifdef USE_ALPHAHASH
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
#endif`,tR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sR=`#ifdef USE_AOMAP
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
#endif`,aR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rR=`#ifdef USE_BATCHING
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
#endif`,oR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hR=`#ifdef USE_IRIDESCENCE
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
#endif`,fR=`#ifdef USE_BUMPMAP
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
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SR=`#define PI 3.141592653589793
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
} // validated`,MR=`vec3 transformedNormal = objectNormal;
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
#endif`,bR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wR="gl_FragColor = linearToOutputTexel( gl_FragColor );",RR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CR=`#ifdef USE_ENVMAP
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
#endif`,NR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
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
#endif`,LR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
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
#endif`,OR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zR=`#ifdef USE_GRADIENTMAP
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
}`,FR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kR=`#ifdef USE_ENVMAP
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
#endif`,XR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZR=`PhysicalMaterial material;
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
#endif`,JR=`uniform sampler2D dfgLUT;
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
}`,KR=`
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
#endif`,QR=`#if defined( RE_IndirectDiffuse )
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
#endif`,jR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$R=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,tC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oC=`#if defined( USE_POINTS_UV )
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
#endif`,lC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hC=`#if defined( USE_MORPHCOLORS )
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
#endif`,fC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dC=`#ifdef USE_MORPHTARGETS
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
#endif`,pC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xC=`#ifdef USE_NORMALMAP
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
#endif`,SC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PC=`float getShadowMask() {
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
}`,BC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zC=`#ifdef USE_SKINNING
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
#endif`,FC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HC=`#ifdef USE_SKINNING
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
#endif`,GC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WC=`#ifdef USE_TRANSMISSION
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
#endif`,qC=`#ifdef USE_TRANSMISSION
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
#endif`,YC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jC=`uniform sampler2D t2D;
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
}`,$C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`uniform float backgroundBlurriness;
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
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i3=`#include <common>
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
}`,s3=`#if DEPTH_PACKING == 3200
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
}`,a3=`#define DISTANCE
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
}`,r3=`#define DISTANCE
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
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`uniform float scale;
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
}`,u3=`uniform vec3 diffuse;
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
}`,h3=`#include <common>
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
}`,f3=`uniform vec3 diffuse;
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
}`,d3=`#define LAMBERT
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
}`,p3=`#define LAMBERT
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
}`,m3=`#define MATCAP
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
}`,g3=`#define MATCAP
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
}`,_3=`#define NORMAL
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
}`,v3=`#define NORMAL
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
}`,y3=`#define PHONG
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
}`,x3=`#define PHONG
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
}`,S3=`#define STANDARD
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
}`,M3=`#define STANDARD
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
}`,b3=`#define TOON
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
}`,T3=`#define TOON
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
}`,E3=`uniform float size;
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
}`,A3=`uniform vec3 diffuse;
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
}`,w3=`#include <common>
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
}`,R3=`uniform vec3 color;
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
}`,C3=`uniform float rotation;
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
}`,N3=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:jw,alphahash_pars_fragment:$w,alphamap_fragment:tR,alphamap_pars_fragment:eR,alphatest_fragment:nR,alphatest_pars_fragment:iR,aomap_fragment:sR,aomap_pars_fragment:aR,batching_pars_vertex:rR,batching_vertex:oR,begin_vertex:lR,beginnormal_vertex:cR,bsdfs:uR,iridescence_fragment:hR,bumpmap_pars_fragment:fR,clipping_planes_fragment:dR,clipping_planes_pars_fragment:pR,clipping_planes_pars_vertex:mR,clipping_planes_vertex:gR,color_fragment:_R,color_pars_fragment:vR,color_pars_vertex:yR,color_vertex:xR,common:SR,defaultnormal_vertex:MR,displacementmap_pars_vertex:bR,displacementmap_vertex:TR,emissivemap_fragment:ER,emissivemap_pars_fragment:AR,colorspace_fragment:wR,colorspace_pars_fragment:RR,envmap_fragment:CR,envmap_common_pars_fragment:NR,envmap_pars_fragment:DR,envmap_pars_vertex:LR,envmap_physical_pars_fragment:kR,envmap_vertex:UR,fog_vertex:OR,fog_pars_vertex:IR,fog_fragment:PR,fog_pars_fragment:BR,gradientmap_pars_fragment:zR,lightmap_pars_fragment:FR,lights_lambert_fragment:HR,lights_lambert_pars_fragment:GR,lights_pars_begin:VR,lights_toon_fragment:XR,lights_toon_pars_fragment:WR,lights_phong_fragment:qR,lights_phong_pars_fragment:YR,lights_physical_fragment:ZR,lights_physical_pars_fragment:JR,lights_fragment_begin:KR,lights_fragment_maps:QR,lights_fragment_end:jR,lightprobes_pars_fragment:$R,logdepthbuf_fragment:tC,logdepthbuf_pars_fragment:eC,logdepthbuf_pars_vertex:nC,logdepthbuf_vertex:iC,map_fragment:sC,map_pars_fragment:aC,map_particle_fragment:rC,map_particle_pars_fragment:oC,metalnessmap_fragment:lC,metalnessmap_pars_fragment:cC,morphinstance_vertex:uC,morphcolor_vertex:hC,morphnormal_vertex:fC,morphtarget_pars_vertex:dC,morphtarget_vertex:pC,normal_fragment_begin:mC,normal_fragment_maps:gC,normal_pars_fragment:_C,normal_pars_vertex:vC,normal_vertex:yC,normalmap_pars_fragment:xC,clearcoat_normal_fragment_begin:SC,clearcoat_normal_fragment_maps:MC,clearcoat_pars_fragment:bC,iridescence_pars_fragment:TC,opaque_fragment:EC,packing:AC,premultiplied_alpha_fragment:wC,project_vertex:RC,dithering_fragment:CC,dithering_pars_fragment:NC,roughnessmap_fragment:DC,roughnessmap_pars_fragment:LC,shadowmap_pars_fragment:UC,shadowmap_pars_vertex:OC,shadowmap_vertex:IC,shadowmask_pars_fragment:PC,skinbase_vertex:BC,skinning_pars_vertex:zC,skinning_vertex:FC,skinnormal_vertex:HC,specularmap_fragment:GC,specularmap_pars_fragment:VC,tonemapping_fragment:kC,tonemapping_pars_fragment:XC,transmission_fragment:WC,transmission_pars_fragment:qC,uv_pars_fragment:YC,uv_pars_vertex:ZC,uv_vertex:JC,worldpos_vertex:KC,background_vert:QC,background_frag:jC,backgroundCube_vert:$C,backgroundCube_frag:t3,cube_vert:e3,cube_frag:n3,depth_vert:i3,depth_frag:s3,distance_vert:a3,distance_frag:r3,equirect_vert:o3,equirect_frag:l3,linedashed_vert:c3,linedashed_frag:u3,meshbasic_vert:h3,meshbasic_frag:f3,meshlambert_vert:d3,meshlambert_frag:p3,meshmatcap_vert:m3,meshmatcap_frag:g3,meshnormal_vert:_3,meshnormal_frag:v3,meshphong_vert:y3,meshphong_frag:x3,meshphysical_vert:S3,meshphysical_frag:M3,meshtoon_vert:b3,meshtoon_frag:T3,points_vert:E3,points_frag:A3,shadow_vert:w3,shadow_frag:R3,sprite_vert:C3,sprite_frag:N3},gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ls={basic:{uniforms:bn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:bn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:bn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:bn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:bn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:bn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:bn([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:bn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:bn([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:bn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:bn([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:bn([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:bn([gt.lights,gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ls.physical={uniforms:bn([ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var gd={r:0,b:0,g:0},D3=new Ce,o1=new Ot;o1.set(-1,0,0,0,1,0,0,0,1);function L3(e,t,n,i,s,a){let r=new $t(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let y=m.backgroundBlurriness>0;x=t.get(x,y)}return x}function v(m){let x=!1,y=d(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),x=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,x){let y=d(x);y&&y.isCubeTexture?(c===void 0&&(c=new Ee(new Is(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:yr(ls.backgroundCube.uniforms),vertexShader:ls.backgroundCube.vertexShader,fragmentShader:ls.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D3.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(o1),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ee(new Mc(2,2),new ss({name:"BackgroundMaterial",uniforms:yr(ls.background.uniforms),vertexShader:ls.background.vertexShader,fragmentShader:ls.background.fragmentShader,side:Da,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(gd,L0(e)),n.buffers.color.setClear(gd.r,gd.g,gd.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:h}}function U3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,I,H,N,k){let q=!1,V=p(U,N,H,I);a!==V&&(a=V,c(a.object)),q=d(U,N,H,k),q&&v(U,N,H,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,y(U,I,H,N),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function p(U,I,H,N){let k=N.wireframe===!0,q=i[I.id];q===void 0&&(q={},i[I.id]=q);let V=U.isInstancedMesh===!0?U.id:0,et=q[V];et===void 0&&(et={},q[V]=et);let X=et[H.id];X===void 0&&(X={},et[H.id]=X);let $=X[k];return $===void 0&&($=u(l()),X[k]=$),$}function u(U){let I=[],H=[],N=[];for(let k=0;k<n;k++)I[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function d(U,I,H,N){let k=a.attributes,q=I.attributes,V=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let tt=k[X],xt=q[X];if(xt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(xt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(xt=U.instanceColor)),tt===void 0||tt.attribute!==xt||xt&&tt.data!==xt.data)return!0;V++}return a.attributesNum!==V||a.index!==N}function v(U,I,H,N){let k={},q=I.attributes,V=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let xt={};xt.attribute=tt,tt&&tt.data&&(xt.data=tt.data),k[X]=xt,V++}a.attributes=k,a.attributesNum=V,a.index=N}function M(){let U=a.newAttributes;for(let I=0,H=U.length;I<H;I++)U[I]=0}function g(U){h(U,0)}function h(U,I){let H=a.newAttributes,N=a.enabledAttributes,k=a.attributeDivisors;H[U]=1,N[U]===0&&(e.enableVertexAttribArray(U),N[U]=1),k[U]!==I&&(e.vertexAttribDivisor(U,I),k[U]=I)}function m(){let U=a.newAttributes,I=a.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==U[H]&&(e.disableVertexAttribArray(H),I[H]=0)}function x(U,I,H,N,k,q,V){V===!0?e.vertexAttribIPointer(U,I,H,k,q):e.vertexAttribPointer(U,I,H,N,k,q)}function y(U,I,H,N){M();let k=N.attributes,q=H.getAttributes(),V=I.defaultAttributeValues;for(let et in q){let X=q[et];if(X.location>=0){let $=k[et];if($===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let tt=$.normalized,xt=$.itemSize,Et=t.get($);if(Et===void 0)continue;let Y=Et.buffer,ut=Et.type,_t=Et.bytesPerElement,At=ut===e.INT||ut===e.UNSIGNED_INT||$.gpuType===Uf;if($.isInterleavedBufferAttribute){let pt=$.data,Lt=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Le=$.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Rt=0;Rt<X.locationSize;Rt++)h(X.location+Rt,pt.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Rt=0;Rt<X.locationSize;Rt++)g(X.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let Rt=0;Rt<X.locationSize;Rt++)x(X.location+Rt,xt/X.locationSize,ut,tt,Lt*_t,(Le+xt/X.locationSize*Rt)*_t,At)}else{if($.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)h(X.location+pt,$.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pt=0;pt<X.locationSize;pt++)g(X.location+pt);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let pt=0;pt<X.locationSize;pt++)x(X.location+pt,xt/X.locationSize,ut,tt,xt*_t,xt/X.locationSize*pt*_t,At)}}else if(V!==void 0){let tt=V[et];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(X.location,tt);break;case 3:e.vertexAttrib3fv(X.location,tt);break;case 4:e.vertexAttrib4fv(X.location,tt);break;default:e.vertexAttrib1fv(X.location,tt)}}}}m()}function E(){D();for(let U in i){let I=i[U];for(let H in I){let N=I[H];for(let k in N){let q=N[k];for(let V in q)f(q[V].object),delete q[V];delete N[k]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let I=i[U.id];for(let H in I){let N=I[H];for(let k in N){let q=N[k];for(let V in q)f(q[V].object),delete q[V];delete N[k]}}delete i[U.id]}function _(U){for(let I in i){let H=i[I];for(let N in H){let k=H[N];if(k[U.id]===void 0)continue;let q=k[U.id];for(let V in q)f(q[V].object),delete q[V];delete k[U.id]}}}function T(U){for(let I in i){let H=i[I],N=U.isInstancedMesh===!0?U.id:0,k=H[N];if(k!==void 0){for(let q in k){let V=k[q];for(let et in V)f(V[et].object),delete V[et];delete k[q]}delete H[N],Object.keys(H).length===0&&delete i[I]}}}function D(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function O3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function I3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==Bi&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Wn&&_!==Ii&&!T&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Nt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:A}}function P3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Li,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,x=m*4,y=h.clippingState||null;l.value=y,y=f(v,u,x,d);for(let E=0;E!==x;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let h=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=d;x!==M;++x,y+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Gc=class extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Is(5,5,5),a=new ss({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:mr});a.uniforms.tEquirect.value=n;let r=new Ee(s,a),o=n.minFilter;return n.minFilter===Ps&&(n.minFilter=Nn),new Xo(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Fb=256,B3=3,z3=20,l1=256,c1=16,F3=3,H3=new F,G3=new $t,vd=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xo(1,10,null),this._boxMesh=new Ee(new Is(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=H3}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(G3));let g=new Xo(i,s,f);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,t.background=M,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(Fb,N0(t))}_fromTexture(t,n){t.mapping===_r||t.mapping===Yo?this._setSize(t.image.length===0?Fb:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=Hb(t,!1,!1),i=Math.log2(t)-B3;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Hb(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===_r||t.mapping===Yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vb()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gb()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=V3(),this._integrationMaterial=k3());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/c1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-F3)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(l1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=X3());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function Hb(e,t,n){return new Gc(e,{minFilter:Ps,generateMipmaps:t,type:Pi,colorSpace:hc,depthBuffer:n})}function Vc(e,t,n){return new ss({name:e,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:n,side:Ln,blending:mr,depthTest:!1,depthWrite:!1})}function V3(){return Vc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${l1}u

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
	`)}function k3(){return Vc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:c1}},`

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
	`)}function X3(){return Vc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${z3}
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
	`)}function Gb(){return Vc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vb(){return Vc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function W3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Nf||d===Df)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new Gc(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===Nf||d===Df,M=d===_r||d===Yo;if(v||M){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new vd(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new vd(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===Nf?u.mapping=_r:d===Df&&(u.mapping=Yo),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function q3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&oc("WebGLRenderer: "+i+" extension not supported."),s}}}function Y3(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let g in v.attributes)t.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let M=a.get(v);M&&(t.remove(M),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),r.register(M,M.id,M),n.memory.geometries++),M}function f(v){let M=v.attributes;for(let g in M)t.update(M[g],e.ARRAY_BUFFER)}function p(v){let M=v.index,g=v.attributes.position,h=0;if(g===void 0)return;let m=M!==null?M.array.length:g.array.length/3-1,x=g.count>=65535?vc:_c,y=new x(Math.ceil(m/3)*6,1),E=y.array;if(M!==null){let _=M.array;h=M.version;for(let T=0,D=0;T<m;T+=3){let R=_[T+0],U=_[T+1],I=_[T+2];E[D++]=R,E[D++]=U,E[D++]=U,E[D++]=I,E[D++]=I,E[D++]=R}}else{h=g.version;for(let _=0,T=0;_<m;_+=3){let D=_+0,R=_+1,U=_+2;E[T++]=D,E[T++]=R,E[T++]=R,E[T++]=U,E[T++]=U,E[T++]=D}}y.version=h;let A=a.get(v);A&&t.remove(A),a.set(v,y)}function u(v){let M=a.get(v);if(M){let g=v.index;g!==null&&M.version<g.version&&p(v)}else p(v);return a.get(v)}function d(){for(let v in s){let M=s[v].deref();M!==void 0&&l(M)}}return{get:c,update:f,getWireframeAttribute:u,dispose:d}}function Z3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function J3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ut("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function K3(e,t,n){let i=new WeakMap,s=new De;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),v===!0&&(x=2),M===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*p),_=new pc(A,y,E,p);_.type=Ii,_.needsUpdate=!0;let T=x*4;for(let R=0;R<p;R++){let U=g[R],I=h[R],H=m[R],N=y*E*4*R;for(let k=0;k<U.count;k++){let q=k*T;d===!0&&(s.fromBufferAttribute(U,k),A[N+q+0]=s.x,A[N+q+1]=s.y,A[N+q+2]=s.z,A[N+q+3]=0),v===!0&&(s.fromBufferAttribute(I,k),A[N+q+4]=s.x,A[N+q+5]=s.y,A[N+q+6]=s.z,A[N+q+7]=0),M===!0&&(s.fromBufferAttribute(H,k),A[N+q+8]=s.x,A[N+q+9]=s.y,A[N+q+10]=s.z,A[N+q+11]=H.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new jt(y,E)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function Q3(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var j3={[c0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[h0]:"CINEON_TONE_MAPPING",[f0]:"ACES_FILMIC_TONE_MAPPING",[p0]:"AGX_TONE_MAPPING",[m0]:"NEUTRAL_TONE_MAPPING",[d0]:"CUSTOM_TONE_MAPPING"};function $3(e,t,n,i,s,a){let r=new ri(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Si;f.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ne([0,2,0,0,2,0],2));let p=new gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(f,p),d=new wc(-1,1,1,-1,0,1),v=null,M=null,g=!1,h,m=null,x=[],y=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let _=0;_<x.length;_++){let T=x[_];T.setSize&&T.setSize(E,A)}},this.setEffects=function(E){x=E,y=x.length>0&&x[0].isRenderPass===!0;let A=r.width,_=r.height;x.length>0&&o===null&&(o=new ri(A,_,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ri(A,_,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&x.some(D=>D.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new Os(A,_),a===!0&&(c.format=Bs,c.type=vr)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let D=0;D<x.length;D++){let R=x[D];R.setSize&&R.setSize(A,_),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,A){if(g||E.toneMapping===rs&&x.length===0)return!1;if(m=A,A!==null){let _=A.width,T=A.height;(r.width!==_||r.height!==T)&&this.setSize(_,T)}return y===!1&&E.setRenderTarget(r),h=E.toneMapping,E.toneMapping=rs,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=h,g=!0;let _=r,T=o;for(let D=0;D<x.length;D++){let R=x[D];R.enabled!==!1&&(R.render(E,T,_,A),R.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(v!==E.outputColorSpace||M!==E.toneMapping){v=E.outputColorSpace,M=E.toneMapping,p.defines={},Kt.getTransfer(v)===le&&(p.defines.SRGB_TRANSFER="");let D=j3[M];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(m),E.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var u1=new Xn,h1=new Os(1,1),f1=new xc(1),d1=new pc,p1=new ff,m1=new yc,kb=[],Xb=[],Wb=new Float32Array(16),qb=new Float32Array(9),Yb=new Float32Array(4);function Qo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=kb[s];if(a===void 0&&(a=new Float32Array(s),kb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function xd(e,t){let n=Xb[t];n===void 0&&(n=new Int32Array(t),Xb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function t2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function e2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function n2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ke(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function i2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function s2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;Yb.set(i),e.uniformMatrix2fv(this.addr,!1,Yb),Qe(n,i)}}function a2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;qb.set(i),e.uniformMatrix3fv(this.addr,!1,qb),Qe(n,i)}}function r2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;Wb.set(i),e.uniformMatrix4fv(this.addr,!1,Wb),Qe(n,i)}}function o2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function l2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function c2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function u2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function h2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function f2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function d2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function p2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function Sd(e){return e.version===0&&(e.compareFunction=A0,e.needsUpdate=!0),e}function m2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=Sd(h1):a=u1,n.setTexture2D(t||a,s)}function g2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||p1,s)}function _2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Sd(f1):a=m1,n.setTextureCube(t||a,s)}function v2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||d1,s)}function y2(e){switch(e){case 5126:return t2;case 35664:return e2;case 35665:return n2;case 35666:return i2;case 35674:return s2;case 35675:return a2;case 35676:return r2;case 5124:case 35670:return o2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return u2;case 5125:return h2;case 36294:return f2;case 36295:return d2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return v2}}function x2(e,t){e.uniform1fv(this.addr,t)}function S2(e,t){let n=Qo(t,this.size,2);e.uniform2fv(this.addr,n)}function M2(e,t){let n=Qo(t,this.size,3);e.uniform3fv(this.addr,n)}function b2(e,t){let n=Qo(t,this.size,4);e.uniform4fv(this.addr,n)}function T2(e,t){let n=Qo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function E2(e,t){let n=Qo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function A2(e,t){let n=Qo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function w2(e,t){e.uniform1iv(this.addr,t)}function R2(e,t){e.uniform2iv(this.addr,t)}function C2(e,t){e.uniform3iv(this.addr,t)}function N2(e,t){e.uniform4iv(this.addr,t)}function D2(e,t){e.uniform1uiv(this.addr,t)}function L2(e,t){e.uniform2uiv(this.addr,t)}function U2(e,t){e.uniform3uiv(this.addr,t)}function O2(e,t){e.uniform4uiv(this.addr,t)}function I2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Sd(h1):r=u1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function P2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||p1,a[r])}function B2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=Sd(f1):r=m1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function z2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||d1,a[r])}function F2(e){switch(e){case 5126:return x2;case 35664:return S2;case 35665:return M2;case 35666:return b2;case 35674:return T2;case 35675:return E2;case 35676:return A2;case 5124:case 35670:return w2;case 35667:case 35671:return R2;case 35668:case 35672:return C2;case 35669:case 35673:return N2;case 5125:return D2;case 36294:return L2;case 36295:return U2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}var z0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=y2(n.type)}},F0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=F2(n.type)}},H0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},P0=/(\w+)(\])?(\[|\.)?/g;function Zb(e,t){e.seq.push(t),e.map[t.id]=t}function H2(e,t,n){let i=e.name,s=i.length;for(P0.lastIndex=0;;){let a=P0.exec(i),r=P0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Zb(n,c===void 0?new z0(o,e,t):new F0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new H0(o),Zb(n,p)),n=p}}}var Ko=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);H2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Jb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var G2=37297,V2=0;function k2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Kb=new Ot;function X2(e){Kt._getMatrix(Kb,Kt.workingColorSpace,e);let t=`mat3( ${Kb.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case fc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Qb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+k2(e.getShaderSource(t),o)}else return a}function W2(e,t){let n=X2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var q2={[c0]:"Linear",[u0]:"Reinhard",[h0]:"Cineon",[f0]:"ACESFilmic",[p0]:"AgX",[m0]:"Neutral",[d0]:"Custom"};function Y2(e,t){let n=q2[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var _d=new F;function Z2(){Kt.getLuminanceCoefficients(_d);let e=_d.x.toFixed(4),t=_d.y.toFixed(4),n=_d.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hc).join(`
`)}function K2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Q2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Hc(e){return e!==""}function jb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function $b(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function G0(e){return e.replace(j2,$2)}function $2(e,t){let n=Vt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return G0(n)}var tN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t1(e){return e.replace(tN,eN)}function eN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function e1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var nN={[Nc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function iN(e){return nN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sN={[Yo]:"ENVMAP_MODE_REFRACTION"};function aN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":sN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rN={[l0]:"ENVMAP_BLENDING_MULTIPLY",[_b]:"ENVMAP_BLENDING_MIX",[vb]:"ENVMAP_BLENDING_ADD"};function oN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":rN[e.combine]||"ENVMAP_BLENDING_NONE"}function lN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=iN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=aN(n),p=oN(n),u=J2(n),d=K2(a),v=s.createProgram(),M,g,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Hc).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Hc).join(`
`),g.length>0&&(g+=`
`)):(M=[e1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hc).join(`
`),g=[e1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rs?"#define TONE_MAPPING":"",n.toneMapping!==rs?Vt.tonemapping_pars_fragment:"",n.toneMapping!==rs?Y2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,W2("linearToOutputTexel",n.outputColorSpace),Z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hc).join(`
`)),r=G0(r),r=jb(r,n),r=$b(r,n),o=G0(o),o=jb(o,n),o=$b(o,n),r=t1(r),o=t1(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",n.glslVersion===w0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===w0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=h+M+r,x=h+g+o,y=Jb(s,s.VERTEX_SHADER,m),E=Jb(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(E)||"",N=U.trim(),k=I.trim(),q=H.trim(),V=!0,et=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,y,E);else{let X=Qb(s,y,"vertex"),$=Qb(s,E,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+X+`
`+$)}else N!==""?Nt("WebGLProgram: Program Info Log:",N):(k===""||q==="")&&(et=!1);et&&(R.diagnostics={runnable:V,programLog:N,vertexShader:{log:k,prefix:M},fragmentShader:{log:q,prefix:g}})}s.deleteShader(y),s.deleteShader(E),_=new Ko(s,v),T=Q2(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,G2)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}var cN=0,V0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new k0(t),n.set(t,i)),i}},k0=class{constructor(t){this.id=cN++,this.code=t,this.usedTimes=0}};function uN(e){return e===La||e===Pc||e===Bc}function hN(e,t,n,i,s,a){let r=new mc,o=new V0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,D,R,U,I){let H=R.fog,N=U.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||k,q),et=u[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=$!==void 0?$.length:0,xt=0;N.morphAttributes.position!==void 0&&(xt=1),N.morphAttributes.normal!==void 0&&(xt=2),N.morphAttributes.color!==void 0&&(xt=3);let Et,Y,ut,_t;if(et){let mt=ls[et];Et=mt.vertexShader,Y=mt.fragmentShader}else{Et=_.vertexShader,Y=_.fragmentShader;let mt=o.getVertexShaderStage(_),he=o.getFragmentShaderStage(_);o.update(_,mt,he),ut=mt.id,_t=he.id}let At=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,Le=U.isBatchedMesh===!0,Rt=!!_.map,ee=!!_.matcap,ce=!!V,Ht=ce&&V.isPMREMTexture===!0,Fe=!!_.aoMap,qt=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,li=!!_.displacementMap,He=!!_.emissiveMap,Un=!!_.metalnessMap,On=!!_.roughnessMap,In=_.anisotropy>0,O=_.clearcoat>0,Pn=_.diffuseRoughness>0,re=_.dispersion>0,ge=_.retroreflectivity>0,dt=_.iridescence>0,qe=_.sheen>0,Ct=_.transmission>0,It=In&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,S=O&&!!_.clearcoatNormalMap,B=O&&!!_.clearcoatRoughnessMap,nt=Pn&&!!_.diffuseRoughnessMap,j=dt&&!!_.iridescenceMap,at=dt&&!!_.iridescenceThicknessMap,ht=qe&&!!_.sheenColorMap,Z=qe&&!!_.sheenRoughnessMap,J=!!_.specularMap,ot=!!_.specularColorMap,C=!!_.specularIntensityMap,K=Ct&&!!_.transmissionMap,W=Ct&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,rt=_.alphaTest>0,Tt=!!_.alphaHash,Gt=!!_.extensions,it=rs;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=e.toneMapping);let wt=Ht?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ft={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:Y,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Le,batchingColor:Le&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,outputColorSpace:At===null?e.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:ee,envMap:ce,envMapMode:ce&&V.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?wt.length-1:null,envMapSize:Ht?wt[0].width:null,aoMap:Fe,lightMap:qt,bumpMap:Be,normalMap:ue,displacementMap:li,emissiveMap:He,normalMapObjectSpace:ue&&_.normalMapType===Sb,normalMapTangentSpace:ue&&_.normalMapType===md,packedNormalMap:ue&&_.normalMapType===md&&uN(_.normalMap.format),metalnessMap:Un,roughnessMap:On,anisotropy:In,anisotropyMap:It,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:Pn,diffuseRoughnessMap:nt,dispersion:re,retroreflection:ge,iridescence:dt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:qe,sheenColorMap:ht,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ot,specularIntensityMap:C,transmission:Ct,transmissionMap:K,thicknessMap:W,gradientMap:lt,opaque:_.transparent===!1&&_.blending===qo&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:rt,alphaHash:Tt,combine:_.combine,mapUv:Rt&&d(_.map.channel),aoMapUv:Fe&&d(_.aoMap.channel),lightMapUv:qt&&d(_.lightMap.channel),bumpMapUv:Be&&d(_.bumpMap.channel),normalMapUv:ue&&d(_.normalMap.channel),displacementMapUv:li&&d(_.displacementMap.channel),emissiveMapUv:He&&d(_.emissiveMap.channel),metalnessMapUv:Un&&d(_.metalnessMap.channel),roughnessMapUv:On&&d(_.roughnessMap.channel),anisotropyMapUv:It&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:ot&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:K&&d(_.transmissionMap.channel),thicknessMapUv:W&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||In),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Rt||st),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.filter(mt=>mt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===as,flipSided:_.side===Ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Gt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&_.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)T.push(D),T.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(T,_),h(T,_),T.push(e.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function h(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function m(_){let T=u[_.type],D;if(T){let R=ls[T];D=Pb.clone(R.uniforms)}else D=_.uniforms;return D}function x(_,T){let D=f.get(T);return D!==void 0?++D.usedTimes:(D=new lN(e,T,_,s),c.push(D),f.set(T,D)),D}function y(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:m,acquireProgram:x,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function fN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function dN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function n1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function i1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,v,M,g,h,m){m.reversedDepth===!0&&(g=-g);let x=o(u,d,v,M,g,h);v.transmission>0?i.push(x):v.transparent===!0?s.push(x):n.push(x)}function c(u,d,v,M,g,h){let m=o(u,d,v,M,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||dN),i.length>1&&i.sort(d||n1),s.length>1&&s.sort(d||n1)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function pN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new i1,e.set(i,[r])):s>=a.length?(r=new i1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function mN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new $t};break;case"SpotLight":n={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":n={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function gN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var _N=0;function vN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function yN(e){let t=new mN,n=gN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,a=new Ce,r=new Ce;function o(c){let f=0,p=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,v=0,M=0,g=0,h=0,m=0,x=0,y=0,E=0,A=0,_=0,T=0,D=0,R=0;c.sort(vN);for(let I=0,H=c.length;I<H;I++){let N=c[I],k=N.color,q=N.intensity,V=N.distance,et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===La?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=k.r*q,p+=k.g*q,u+=k.b*q;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],q);R++}else if(N.isSunLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=tt,i.sunShadowMap[v]=et;let xt=$.getViewportCount();for(let Et=0;Et<xt;Et++)i.sunShadowMatrix[M+Et]=$.getMatrix(Et),i.sunShadowCascade[M+Et]=$._cascadeData[Et];M+=xt,v++}i.sun[d]=X,d++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=et,i.directionalShadowMatrix[g]=N.shadow.matrix,E++}i.directional[g]=X,g++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(k).multiplyScalar(q),X.distance=V,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[m]=X;let $=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,$.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[m]=$.matrix,N.castShadow){let tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=et,_++}m++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(k).multiplyScalar(q),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=X,x++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[h]=tt,i.pointShadowMap[h]=et,i.pointShadowMatrix[h]=N.shadow.matrix,A++}i.point[h]=X,h++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(q),X.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[y]=X,y++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==h||U.spotLength!==m||U.rectAreaLength!==x||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==_||U.numSpotMaps!==T||U.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=x,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,U.sunLength=d,U.directionalLength=g,U.pointLength=h,U.spotLength=m,U.rectAreaLength=x,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=_,U.numSpotMaps=T,U.numLightProbes=R,i.version=_N++)}function l(c,f){let p=0,u=0,d=0,v=0,M=0,g=0,h=f.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(y.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function s1(e){let t=new yN(e),n=[],i=[],s=[];function a(p){f.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function xN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new s1(e),t.set(s,[o])):a>=r.length?(o=new s1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var SN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MN=`uniform sampler2D shadow_pass;
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
}`,bN=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],TN=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],a1=new Ce,Fc=new F,B0=new F;function EN(e,t,n){let i=new wa,s=new jt,a=new jt,r=new De,o=new _f,l=new vf,c={},f=n.maxTextureSize,p={[Da]:Ln,[Ln]:Da,[as]:as},u=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:SN,fragmentShader:MN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Si;v.setAttribute("position",new es(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ee(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let h=this.type;this.render=function(A,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===jM&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nc);let D=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),I=e.state;I.setBlending(mr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=h!==this.type;H&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=A.length;N<k;N++){let q=A[N],V=q.shadow;if(V===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),a.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/et.x),s.x=a.x*et.x,V.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/et.y),s.y=a.y*et.y,V.mapSize.y=a.y));let X=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wo){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ri(s.x,s.y,{format:La,type:Pi,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Os(s.x,s.y,Ii),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Ls,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=rn,V.map.depthTexture.magFilter=rn}else q.isPointLight?(V.map=new Gc(s.x),V.map.depthTexture=new xc(s.x,Oi)):(V.map=new ri(s.x,s.y),V.map.depthTexture=new Os(s.x,s.y,Oi)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Ls,this.type===Nc?(V.map.depthTexture.compareFunction=X?E0:T0,V.map.depthTexture.minFilter=Nn,V.map.depthTexture.magFilter=Nn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=rn,V.map.depthTexture.magFilter=rn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let $=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,T);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:T.layers;for(let xt=0;xt<$;xt++){let Et=V.getCamera(xt);if(q.isPointLight){let Y=V.camera,ut=V.matrix,_t=q.distance||Y.far;_t!==Y.far&&(Y.far=_t,Y.updateProjectionMatrix()),Fc.setFromMatrixPosition(q.matrixWorld),Y.position.copy(Fc),B0.copy(Y.position),B0.add(bN[xt]),Y.up.copy(TN[xt]),Y.lookAt(B0),Y.updateMatrixWorld(),ut.makeTranslation(-Fc.x,-Fc.y,-Fc.z),a1.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(a1,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,xt),e.clear();else{xt===0&&(e.setRenderTarget(V.map),e.clear());let Y=V.getViewport(xt);r.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),I.viewport(r)}i=V.getFrustum(xt),y(_,T,Et,q,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Wo&&m(V,T),V.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(D,R,U)};function m(A,_){let T=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new ri(s.x,s.y,{format:La,type:Pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(_,null,T,u,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(_,null,T,d,M,null)}function x(A,_,T,D){let R=null,U=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)R=U;else if(R=T.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=R.uuid,H=_.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let k=N[H];k===void 0&&(k=R.clone(),N[H]=k,_.addEventListener("dispose",E)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,D===Wo?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=e.properties.get(R);I.light=T}return R}function y(A,_,T,D,R,U){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Wo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let N=t.update(A),k=A.material;if(Array.isArray(k)){let q=N.groups;for(let V=0,et=q.length;V<et;V++){let X=q[V],$=k[X.materialIndex];if($&&$.visible){let tt=x(A,$,D,U);A.onBeforeShadow(e,A,_,T,N,tt,X),e.renderBufferDirect(T,null,N,tt,A,X),A.onAfterShadow(e,A,_,T,N,tt,X)}}}else if(k.visible){let q=x(A,k,D,U);A.onBeforeShadow(e,A,_,T,N,q,null),e.renderBufferDirect(T,null,N,q,A,null),A.onAfterShadow(e,A,_,T,N,q,null)}}let H=A.children;for(let N=0,k=H.length;N<k;N++)y(H[N],_,T,D,R,U)}function E(A){A.target.removeEventListener("dispose",E);for(let T in c){let D=c[T],R=A.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function AN(e,t){function n(){let C=!1,K=new De,W=null,lt=new De(0,0,0,0);return{setMask:function(st){W!==st&&!C&&(e.colorMask(st,st,st,st),W=st)},setLocked:function(st){C=st},setClear:function(st,rt,Tt,Gt,it){it===!0&&(st*=Gt,rt*=Gt,Tt*=Gt),K.set(st,rt,Tt,Gt),lt.equals(K)===!1&&(e.clearColor(st,rt,Tt,Gt),lt.copy(K))},reset:function(){C=!1,W=null,lt.set(-1,0,0,0)}}}function i(){let C=!1,K=!1,W=null,lt=null,st=null;return{setReversed:function(rt){if(K!==rt){let Tt=t.get("EXT_clip_control");rt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),K=rt;let Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return K},setTest:function(rt){rt?pt(e.DEPTH_TEST):Lt(e.DEPTH_TEST)},setMask:function(rt){W!==rt&&!C&&(e.depthMask(rt),W=rt)},setFunc:function(rt){if(K&&(rt=Lb[rt]),lt!==rt){switch(rt){case $h:e.depthFunc(e.NEVER);break;case tf:e.depthFunc(e.ALWAYS);break;case ef:e.depthFunc(e.LESS);break;case Uo:e.depthFunc(e.LEQUAL);break;case nf:e.depthFunc(e.EQUAL);break;case sf:e.depthFunc(e.GEQUAL);break;case af:e.depthFunc(e.GREATER);break;case rf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=rt}},setLocked:function(rt){C=rt},setClear:function(rt){st!==rt&&(st=rt,K&&(rt=1-rt),e.clearDepth(rt))},reset:function(){C=!1,W=null,lt=null,st=null,K=!1}}}function s(){let C=!1,K=null,W=null,lt=null,st=null,rt=null,Tt=null,Gt=null,it=null;return{setTest:function(wt){C||(wt?pt(e.STENCIL_TEST):Lt(e.STENCIL_TEST))},setMask:function(wt){K!==wt&&!C&&(e.stencilMask(wt),K=wt)},setFunc:function(wt,Ft,mt){(W!==wt||lt!==Ft||st!==mt)&&(e.stencilFunc(wt,Ft,mt),W=wt,lt=Ft,st=mt)},setOp:function(wt,Ft,mt){(rt!==wt||Tt!==Ft||Gt!==mt)&&(e.stencilOp(wt,Ft,mt),rt=wt,Tt=Ft,Gt=mt)},setLocked:function(wt){C=wt},setClear:function(wt){it!==wt&&(e.clearStencil(wt),it=wt)},reset:function(){C=!1,K=null,W=null,lt=null,st=null,rt=null,Tt=null,Gt=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],M=null,g=!1,h=null,m=null,x=null,y=null,E=null,A=null,_=null,T=new $t(0,0,0),D=0,R=!1,U=null,I=null,H=null,N=null,k=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let $=null,tt={},xt=e.getParameter(e.SCISSOR_BOX),Et=e.getParameter(e.VIEWPORT),Y=new De().fromArray(xt),ut=new De().fromArray(Et);function _t(C,K,W,lt){let st=new Uint8Array(4),rt=e.createTexture();e.bindTexture(C,rt),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<W;Tt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(K+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return rt}let At={};At[e.TEXTURE_2D]=_t(e.TEXTURE_2D,e.TEXTURE_2D,1),At[e.TEXTURE_CUBE_MAP]=_t(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[e.TEXTURE_2D_ARRAY]=_t(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),At[e.TEXTURE_3D]=_t(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(e.DEPTH_TEST),r.setFunc(Uo),Be(!1),ue(n0),pt(e.CULL_FACE),Fe(mr);function pt(C){f[C]!==!0&&(e.enable(C),f[C]=!0)}function Lt(C){f[C]!==!1&&(e.disable(C),f[C]=!1)}function Le(C,K){return u[C]!==K?(e.bindFramebuffer(C,K),u[C]=K,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function Rt(C,K){let W=v,lt=!1;if(C){W=d.get(K),W===void 0&&(W=[],d.set(K,W));let st=C.textures;if(W.length!==st.length||W[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Tt=st.length;rt<Tt;rt++)W[rt]=e.COLOR_ATTACHMENT0+rt;W.length=st.length,lt=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,lt=!0);lt&&e.drawBuffers(W)}function ee(C){return M!==C?(e.useProgram(C),M=C,!0):!1}let ce={[gr]:e.FUNC_ADD,[tb]:e.FUNC_SUBTRACT,[eb]:e.FUNC_REVERSE_SUBTRACT};ce[nb]=e.MIN,ce[ib]=e.MAX;let Ht={[sb]:e.ZERO,[ab]:e.ONE,[rb]:e.SRC_COLOR,[r0]:e.SRC_ALPHA,[fb]:e.SRC_ALPHA_SATURATE,[ub]:e.DST_COLOR,[lb]:e.DST_ALPHA,[ob]:e.ONE_MINUS_SRC_COLOR,[o0]:e.ONE_MINUS_SRC_ALPHA,[hb]:e.ONE_MINUS_DST_COLOR,[cb]:e.ONE_MINUS_DST_ALPHA,[db]:e.CONSTANT_COLOR,[pb]:e.ONE_MINUS_CONSTANT_COLOR,[mb]:e.CONSTANT_ALPHA,[gb]:e.ONE_MINUS_CONSTANT_ALPHA};function Fe(C,K,W,lt,st,rt,Tt,Gt,it,wt){if(C===mr){g===!0&&(Lt(e.BLEND),g=!1);return}if(g===!1&&(pt(e.BLEND),g=!0),C!==$M){if(C!==h||wt!==R){if((m!==gr||E!==gr)&&(e.blendEquation(e.FUNC_ADD),m=gr,E=gr),wt)switch(C){case qo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case i0:e.blendFunc(e.ONE,e.ONE);break;case s0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case a0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ut("WebGLState: Invalid blending: ",C);break}else switch(C){case qo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case i0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case s0:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a0:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",C);break}x=null,y=null,A=null,_=null,T.set(0,0,0),D=0,h=C,R=wt}return}st=st||K,rt=rt||W,Tt=Tt||lt,(K!==m||st!==E)&&(e.blendEquationSeparate(ce[K],ce[st]),m=K,E=st),(W!==x||lt!==y||rt!==A||Tt!==_)&&(e.blendFuncSeparate(Ht[W],Ht[lt],Ht[rt],Ht[Tt]),x=W,y=lt,A=rt,_=Tt),(Gt.equals(T)===!1||it!==D)&&(e.blendColor(Gt.r,Gt.g,Gt.b,it),T.copy(Gt),D=it),h=C,R=!1}function qt(C,K){C.side===as?Lt(e.CULL_FACE):pt(e.CULL_FACE);let W=C.side===Ln;K&&(W=!W),Be(W),C.blending===qo&&C.transparent===!1?Fe(mr):Fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),He(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(e.SAMPLE_ALPHA_TO_COVERAGE):Lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){U!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),U=C)}function ue(C){C!==KM?(pt(e.CULL_FACE),C!==I&&(C===n0?e.cullFace(e.BACK):C===QM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Lt(e.CULL_FACE),I=C}function li(C){C!==H&&(V&&e.lineWidth(C),H=C)}function He(C,K,W){C?(pt(e.POLYGON_OFFSET_FILL),(N!==K||k!==W)&&(N=K,k=W,r.getReversed()&&(K=-K,W=-W),e.polygonOffset(K,W))):Lt(e.POLYGON_OFFSET_FILL)}function Un(C){C?pt(e.SCISSOR_TEST):Lt(e.SCISSOR_TEST)}function On(C){C===void 0&&(C=e.TEXTURE0+q-1),$!==C&&(e.activeTexture(C),$=C)}function In(C,K,W){W===void 0&&($===null?W=e.TEXTURE0+q-1:W=$);let lt=tt[W];lt===void 0&&(lt={type:void 0,texture:void 0},tt[W]=lt),(lt.type!==C||lt.texture!==K)&&($!==W&&(e.activeTexture(W),$=W),e.bindTexture(C,K||At[C]),lt.type=C,lt.texture=K)}function O(){let C=tt[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Pn(){try{e.compressedTexImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function re(){try{e.compressedTexImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function ge(){try{e.texSubImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function dt(){try{e.texSubImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function qe(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function Ct(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function It(){try{e.texStorage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function w(){try{e.texStorage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function S(){try{e.texImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function B(){try{e.texImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function nt(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function j(C,K){p[C]!==K&&(e.pixelStorei(C,K),p[C]=K)}function at(C){Y.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function ht(C){ut.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),ut.copy(C))}function Z(C,K){let W=c.get(K);W===void 0&&(W=new WeakMap,c.set(K,W));let lt=W.get(C);lt===void 0&&(lt=e.getUniformBlockIndex(K,C.name),e.uniformBlockBinding(K,lt,lt),W.set(C,lt))}function J(C,K,W){let st=c.get(K).get(C);l[st]!==W&&(e.bindBufferBase(e.UNIFORM_BUFFER,st,W),l[st]=W)}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,tt={},u={},l={},d=new WeakMap,v=[],M=null,g=!1,h=null,m=null,x=null,y=null,E=null,A=null,_=null,T=new $t(0,0,0),D=0,R=!1,U=null,I=null,H=null,N=null,k=null,Y.set(0,0,e.canvas.width,e.canvas.height),ut.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:pt,disable:Lt,bindFramebuffer:Le,drawBuffers:Rt,useProgram:ee,setBlending:Fe,setMaterial:qt,setFlipSided:Be,setCullFace:ue,setLineWidth:li,setPolygonOffset:He,setScissorTest:Un,activeTexture:On,bindTexture:In,unbindTexture:O,compressedTexImage2D:Pn,compressedTexImage3D:re,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:It,texStorage3D:w,texSubImage2D:ge,texSubImage3D:dt,compressedTexSubImage2D:qe,compressedTexSubImage3D:Ct,scissor:at,viewport:ht,reset:ot}}function wN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,M=new FinalizationRegistry(w=>v.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(w,S){return g?new OffscreenCanvas(w,S):dc("canvas")}function m(w,S,B){let nt=1,j=It(w);if((j.width>B||j.height>B)&&(nt=B/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let at=Math.floor(nt*j.width),ht=Math.floor(nt*j.height);u===void 0&&(u=h(at,ht));let Z=S?h(at,ht):u;return Z.width=at,Z.height=ht,Z.getContext("2d").drawImage(w,0,0,at,ht),Nt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ht+")."),Z}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function x(w){return w.generateMipmaps}function y(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,S,B,nt,j,at=!1){if(w!==null){if(e[w]!==void 0)return e[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;nt&&(ht=t.get("EXT_texture_norm16"),ht||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===e.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),S===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===e.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===e.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),S===e.RGBA){let J=at?fc:Kt.getTransfer(j);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=J===le?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===e.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(w,S){let B;return w?S===null||S===Oi||S===vr?B=e.DEPTH24_STENCIL8:S===Ii?B=e.DEPTH32F_STENCIL8:S===Zo&&(B=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===vr?B=e.DEPTH_COMPONENT24:S===Ii?B=e.DEPTH_COMPONENT32F:S===Zo&&(B=e.DEPTH_COMPONENT16),B}function T(w,S){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function D(w){let S=new WeakRef(w);i.get(w).__ref=S,v.add(S),M.register(w,S,S)}function R(w){let S=i.get(w).__ref;S!==void 0&&(v.delete(S),M.unregister(S))}function U(w){H(w.target)}function I(w){N(w.target)}function H(w){w.removeEventListener("dispose",U),R(w),q(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&p.delete(w)}function N(w){w.removeEventListener("dispose",I),R(w),et(w)}function k(){for(let w of v){let S=w.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):H(S))}v.clear(),p.clear()}function q(w){let S=i.get(w);if(S.__webglInit===void 0)return;let B=w.source,nt=d.get(B);if(nt){let j=nt[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(w),Object.keys(nt).length===0&&d.delete(B)}i.remove(w)}function V(w){let S=i.get(w);e.deleteTexture(S.__webglTexture);let B=w.source,nt=d.get(B);delete nt[S.__cacheKey],r.memory.textures--}function et(w){let S=i.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&H(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let at=0;at<S.__webglFramebuffer[j].length;at++)e.deleteFramebuffer(S.__webglFramebuffer[j][at]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=w.textures;for(let j=0,at=nt.length;j<at;j++){let ht=i.get(nt[j]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(nt[j])}i.remove(w)}let X=0;function $(){X=0}function tt(){return X}function xt(w){X=w}function Et(){let w=X;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Y(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function ut(w,S){let B=i.get(w);if(w.isVideoTexture&&qe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let nt=w.image;if(nt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function _t(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){qt(B,w,S);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function At(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){qt(B,w,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function pt(w,S){let B=i.get(w);if(w.version>0&&B.__version!==w.version){Be(B,w,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let Lt={[of]:e.REPEAT,[ts]:e.CLAMP_TO_EDGE,[lf]:e.MIRRORED_REPEAT},Le={[rn]:e.NEAREST,[yb]:e.NEAREST_MIPMAP_NEAREST,[Dc]:e.NEAREST_MIPMAP_LINEAR,[Nn]:e.LINEAR,[Lf]:e.LINEAR_MIPMAP_NEAREST,[Ps]:e.LINEAR_MIPMAP_LINEAR},Rt={[bb]:e.NEVER,[A0]:e.ALWAYS,[Tb]:e.LESS,[T0]:e.LEQUAL,[Eb]:e.EQUAL,[E0]:e.GEQUAL,[Ab]:e.GREATER,[wb]:e.NOTEQUAL};function ee(w,S){if(S.type===Ii&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===Lf||S.magFilter===Dc||S.magFilter===Ps||S.minFilter===Nn||S.minFilter===Lf||S.minFilter===Dc||S.minFilter===Ps)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,Lt[S.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Lt[S.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,Lt[S.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Le[S.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Le[S.minFilter]),S.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Dc&&S.minFilter!==Ps||S.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ce(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",U),D(S));let nt=S.source,j=d.get(nt);j===void 0&&(j={},d.set(nt,j));let at=Y(S);if(at!==w.__cacheKey){j[at]===void 0&&(j[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[at].usedTimes++;let ht=j[w.__cacheKey];ht!==void 0&&(j[w.__cacheKey].usedTimes--,ht.usedTimes===0&&V(S)),w.__cacheKey=at,w.__webglTexture=j[at].texture}return B}function Ht(w,S,B){return Math.floor(Math.floor(w/B)/S)}function Fe(w,S,B,nt){let at=w.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,nt,S.data);else{at.sort((C,K)=>C.start-K.start);let ht=0;for(let C=1;C<at.length;C++){let K=at[ht],W=at[C],lt=K.start+K.count,st=Ht(W.start,S.width,4),rt=Ht(K.start,S.width,4);W.start<=lt+1&&st===rt&&Ht(W.start+W.count-1,S.width,4)===st?K.count=Math.max(K.count,W.start+W.count-K.start):(++ht,at[ht]=W)}at.length=ht+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let C=0,K=at.length;C<K;C++){let W=at[C],lt=Math.floor(W.start/4),st=Math.ceil(W.count/4),rt=lt%S.width,Tt=Math.floor(lt/S.width),Gt=st,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Tt),n.texSubImage2D(e.TEXTURE_2D,0,rt,Tt,Gt,it,B,nt,S.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function qt(w,S,B){let nt=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=e.TEXTURE_3D);let j=ce(w,S),at=S.source;n.bindTexture(nt,w.__webglTexture,e.TEXTURE0+B);let ht=i.get(at);if(at.version!==ht.__version||j===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let it=Kt.getPrimaries(Kt.workingColorSpace),wt=S.colorSpace===zs?null:Kt.getPrimaries(S.colorSpace),Ft=S.colorSpace===zs||it===wt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,s.maxTextureSize);J=Ct(S,J);let ot=a.convert(S.format,S.colorSpace),C=a.convert(S.type),K=A(S.internalFormat,ot,C,S.normalized,S.colorSpace,S.isVideoTexture);ee(nt,S);let W,lt=S.mipmaps,st=S.isVideoTexture!==!0,rt=ht.__version===void 0||j===!0,Tt=at.dataReady,Gt=T(S,J);if(S.isDepthTexture)K=_(S.format===Bs,S.type),rt&&(st?n.texStorage2D(e.TEXTURE_2D,1,K,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ot,C,null));else if(S.isDataTexture)if(lt.length>0){st&&rt&&n.texStorage2D(e.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)W=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,W.width,W.height,ot,C,W.data):n.texImage2D(e.TEXTURE_2D,it,K,W.width,W.height,0,ot,C,W.data);S.generateMipmaps=!1}else st?(rt&&n.texStorage2D(e.TEXTURE_2D,Gt,K,J.width,J.height),Tt&&Fe(S,J,ot,C)):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ot,C,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,K,lt[0].width,lt[0].height,J.depth);for(let it=0,wt=lt.length;it<wt;it++)if(W=lt[it],S.format!==Bi)if(ot!==null)if(st){if(Tt)if(S.layerUpdates.size>0){let Ft=I0(W.width,W.height,S.format,S.type);for(let mt of S.layerUpdates){let he=W.data.subarray(mt*Ft/W.data.BYTES_PER_ELEMENT,(mt+1)*Ft/W.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,mt,W.width,W.height,1,ot,he)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,J.depth,ot,W.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,K,W.width,W.height,J.depth,0,W.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,J.depth,ot,C,W.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,K,W.width,W.height,J.depth,0,ot,C,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{st&&rt&&n.texStorage2D(e.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)W=lt[it],S.format!==Bi?ot!==null?st?Tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,W.width,W.height,ot,W.data):n.compressedTexImage2D(e.TEXTURE_2D,it,K,W.width,W.height,0,W.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,W.width,W.height,ot,C,W.data):n.texImage2D(e.TEXTURE_2D,it,K,W.width,W.height,0,ot,C,W.data)}else if(S.isDataArrayTexture)if(st){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,K,J.width,J.height,J.depth),Tt)if(S.layerUpdates.size>0){let it=I0(J.width,J.height,S.format,S.type);for(let wt of S.layerUpdates){let Ft=J.data.subarray(wt*it/J.data.BYTES_PER_ELEMENT,(wt+1)*it/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,ot,C,Ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,C,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ot,C,J.data);else if(S.isData3DTexture)st?(rt&&n.texStorage3D(e.TEXTURE_3D,Gt,K,J.width,J.height,J.depth),Tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,C,J.data)):n.texImage3D(e.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ot,C,J.data);else if(S.isFramebufferTexture){if(rt)if(st)n.texStorage2D(e.TEXTURE_2D,Gt,K,J.width,J.height);else{let it=J.width,wt=J.height;for(let Ft=0;Ft<Gt;Ft++)n.texImage2D(e.TEXTURE_2D,Ft,K,it,wt,0,ot,C,null),it>>=1,wt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),p.add(S),it.onpaint=wt=>{let Ft=wt.changedElements;for(let mt of p)Ft.includes(mt.image)&&(mt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let Ft=e.RGBA,mt=e.RGBA,he=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ft,mt,he,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&rt){let it=It(lt[0]);n.texStorage2D(e.TEXTURE_2D,Gt,K,it.width,it.height)}for(let it=0,wt=lt.length;it<wt;it++)W=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,C,W):n.texImage2D(e.TEXTURE_2D,it,K,ot,C,W);S.generateMipmaps=!1}else if(st){if(rt){let it=It(J);n.texStorage2D(e.TEXTURE_2D,Gt,K,it.width,it.height)}Tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,C,J)}else n.texImage2D(e.TEXTURE_2D,0,K,ot,C,J);x(S)&&S.mipmapsAutoUpdate===!0&&y(nt),ht.__version=at.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Be(w,S,B){if(S.image.length!==6)return;let nt=ce(w,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let at=i.get(j);if(j.version!==at.__version||nt===!0){n.activeTexture(e.TEXTURE0+B);let ht=Kt.getPrimaries(Kt.workingColorSpace),Z=S.colorSpace===zs?null:Kt.getPrimaries(S.colorSpace),J=S.colorSpace===zs||ht===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ot=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,K=[];for(let mt=0;mt<6;mt++)!ot&&!C?K[mt]=m(S.image[mt],!0,s.maxCubemapSize):K[mt]=C?S.image[mt].image:S.image[mt],K[mt]=Ct(S,K[mt]);let W=K[0],lt=a.convert(S.format,S.colorSpace),st=a.convert(S.type),rt=A(S.internalFormat,lt,st,S.normalized,S.colorSpace),Tt=S.isVideoTexture!==!0,Gt=at.__version===void 0||nt===!0,it=j.dataReady,wt=T(S,W);ee(e.TEXTURE_CUBE_MAP,S);let Ft;if(S.isDepthTexture){if(rt=_(S.format===Bs,S.type),Gt)if(Tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,rt,W.width,W.height);else for(let mt=0;mt<6;mt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,rt,W.width,W.height,0,lt,st,null)}else if(ot){Tt&&Gt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,wt,rt,W.width,W.height);for(let mt=0;mt<6;mt++){Ft=K[mt].mipmaps;for(let he=0;he<Ft.length;he++){let je=Ft[he];S.format!==Bi?lt!==null?Tt?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he,0,0,je.width,je.height,lt,je.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he,rt,je.width,je.height,0,je.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he,0,0,je.width,je.height,lt,st,je.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he,rt,je.width,je.height,0,lt,st,je.data)}}}else{if(Ft=S.mipmaps,Tt&&Gt){Ft.length>0&&wt++;let mt=It(K[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,wt,rt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(C){Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,K[mt].width,K[mt].height,lt,st,K[mt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,rt,K[mt].width,K[mt].height,0,lt,st,K[mt].data);for(let he=0;he<Ft.length;he++){let Fs=Ft[he].image[mt].image;Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he+1,0,0,Fs.width,Fs.height,lt,st,Fs.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he+1,rt,Fs.width,Fs.height,0,lt,st,Fs.data)}}else{Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,lt,st,K[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,rt,lt,st,K[mt]);for(let he=0;he<Ft.length;he++){let je=Ft[he];Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he+1,0,0,lt,st,je.image[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,he+1,rt,lt,st,je.image[mt])}}}x(S)&&S.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),at.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ue(w,S,B,nt,j,at){let ht=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),J=A(B.internalFormat,ht,Z,B.normalized,B.colorSpace),ot=i.get(S),C=i.get(B);if(C.__renderTarget=S,!ot.__hasExternalTextures){let K=Math.max(1,S.width>>at),W=Math.max(1,S.height>>at);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,at,J,K,W,S.depth,0,ht,Z,null):n.texImage2D(j,at,J,K,W,0,ht,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,C.__webglTexture,0,ge(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,C.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function li(w,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),S.depthBuffer){let nt=S.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,at=_(S.stencilBuffer,j),ht=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(S),at,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,w)}else{let nt=S.textures;for(let j=0;j<nt.length;j++){let at=nt[j],ht=a.convert(at.format,at.colorSpace),Z=a.convert(at.type),J=A(at.internalFormat,ht,Z,at.normalized,at.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(S),J,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(S),J,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,J,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function He(w,S,B){let nt=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let at=nt?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||at.width!==S.width||at.height!==S.height)&&(at.width=S.width,at.height=S.height,S.depthTexture.needsUpdate=!0),nt?pt(S.depthTexture,0):ut(S.depthTexture,0);let ht=j.__webglTexture,Z=ge(S),J=nt?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ot=S.depthTexture.format===Bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ls)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,J,ht,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,ot,J,ht,0);else if(S.depthTexture.format===Bs)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,J,ht,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,ot,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Un(w){let S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let nt=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=nt}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)He(S.__webglFramebuffer[nt],w,nt);else w.texture.mipmaps.length>0?He(S.__webglFramebuffer[0],w,0):He(S.__webglFramebuffer,w,0);else if(B){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=e.createRenderbuffer(),li(S.__webglDepthbuffer[nt],w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[nt];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),li(S.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function On(w,S,B){let nt=i.get(w);S!==void 0&&ue(nt.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Un(w)}function In(w){let S=w.texture,B=i.get(w),nt=i.get(S);w.addEventListener("dispose",I),D(w);let j=w.textures,at=w.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(nt.__webglTexture===void 0&&(nt.__webglTexture=e.createTexture()),nt.__version=S.version,r.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Z=0,J=j.length;Z<J;Z++){let ot=i.get(j[Z]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&dt(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let J=j[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ot=a.convert(J.format,J.colorSpace),C=a.convert(J.type),K=A(J.internalFormat,ot,C,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),W=ge(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,W,K,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),li(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),ee(e.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ue(B.__webglFramebuffer[Z][J],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ue(B.__webglFramebuffer[Z],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);x(S)?y(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ht){for(let Z=0,J=j.length;Z<J;Z++){let ot=j[Z],C=i.get(ot),K=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,C.__webglTexture),ee(K,ot),ue(B.__webglFramebuffer,w,ot,e.COLOR_ATTACHMENT0+Z,K,0),x(ot)&&y(K)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,nt.__webglTexture),ee(Z,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ue(B.__webglFramebuffer[J],w,S,e.COLOR_ATTACHMENT0,Z,J);else ue(B.__webglFramebuffer,w,S,e.COLOR_ATTACHMENT0,Z,0);x(S)?y(Z):S.mipmaps.length>0&&e.texParameteri(Z,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&Un(w)}function O(w){let S=w.textures;for(let B=0,nt=S.length;B<nt;B++){let j=S[B];if(x(j)&&j.mipmapsAutoUpdate===!0){let at=E(w),ht=i.get(j).__webglTexture;n.bindTexture(at,ht),y(at),n.unbindTexture()}}}let Pn=[];function re(w){if(w.samples>0){if(dt(w)===!1){let S=w.textures,B=w.width,nt=w.height,j=e.COLOR_BUFFER_BIT,at=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(w),Z=S.length>1;if(Z)for(let ot=0;ot<S.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<S.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,B,nt,0,0,B,nt,j,e.NEAREST),l===!0&&(Pn.length=0,Pn.push(e.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Pn.push(at),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pn))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ot=0;ot<S.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let S=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ge(w){return Math.min(s.maxSamples,w.samples)}function dt(w){let S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(w){let S=r.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function Ct(w,S){let B=w.colorSpace,nt=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==hc&&B!==zs&&(Kt.getTransfer(B)===le?(nt!==Bi||j!==Wn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",B)),S}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=xt,this.setTexture2D=ut,this.setTexture2DArray=_t,this.setTexture3D=At,this.setTextureCube=pt,this.rebindTextures=On,this.setupRenderTarget=In,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Un,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=dt,this.dispose=k}function RN(e,t){function n(i,s=zs){let a,r=Kt.getTransfer(s);if(i===Wn)return e.UNSIGNED_BYTE;if(i===Of)return e.UNSIGNED_SHORT_4_4_4_4;if(i===If)return e.UNSIGNED_SHORT_5_5_5_1;if(i===y0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===x0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_0)return e.BYTE;if(i===v0)return e.SHORT;if(i===Zo)return e.UNSIGNED_SHORT;if(i===Uf)return e.INT;if(i===Oi)return e.UNSIGNED_INT;if(i===Ii)return e.FLOAT;if(i===Pi)return e.HALF_FLOAT;if(i===S0)return e.ALPHA;if(i===M0)return e.RGB;if(i===Bi)return e.RGBA;if(i===Ls)return e.DEPTH_COMPONENT;if(i===Bs)return e.DEPTH_STENCIL;if(i===b0)return e.RED;if(i===Pf)return e.RED_INTEGER;if(i===La)return e.RG;if(i===Bf)return e.RG_INTEGER;if(i===zf)return e.RGBA_INTEGER;if(i===Lc||i===Uc||i===Oc||i===Ic)if(r===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ff||i===Hf||i===Gf||i===Vf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ff)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Xf||i===Wf||i===qf||i===Yf||i===Pc||i===Zf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kf||i===Xf)return r===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Wf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===qf)return a.COMPRESSED_R11_EAC;if(i===Yf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Pc)return a.COMPRESSED_RG11_EAC;if(i===Zf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jf||i===Kf||i===Qf||i===jf||i===$f||i===td||i===ed||i===nd||i===id||i===sd||i===ad||i===rd||i===od||i===ld)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Jf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$f)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===td)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ed)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nd)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===id)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sd)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rd)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===od)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ld)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cd||i===ud||i===hd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===cd)return r===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ud)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fd||i===dd||i===Bc||i===pd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===fd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var CN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NN=`
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

}`,X0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Sc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ss({vertexShader:CN,fragmentShader:NN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ee(new Mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},W0=class extends ns{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",g=new X0,h={},m=n.getContextAttributes(),x=null,y=null,E=[],A=[],_=new jt,T=null,D=null,R=new Mn;R.viewport=new De;let U=new Mn;U.viewport=new De;let I=[R,U],H=new Cf,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=E[Y];return ut===void 0&&(ut=new zo,E[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=E[Y];return ut===void 0&&(ut=new zo,E[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=E[Y];return ut===void 0&&(ut=new zo,E[Y]=ut),ut.getHandSpace()};function q(Y){let ut=A.indexOf(Y.inputSource);if(ut===-1)return;let _t=E[ut];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||r),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<E.length;Y++){let ut=A[Y];ut!==null&&(A[Y]=null,E[Y].disconnect(ut))}N=null,k=null,g.reset();for(let Y in h)delete h[Y];if(t.setRenderTarget(x),d=null,u=null,p=null,s=null,y=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),D!==null){let Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,At=null,pt=null;m.depth&&(pt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=m.stencil?Bs:Ls,At=m.stencil?vr:Oi);let Lt={colorFormat:n.RGBA8,depthFormat:pt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ri(u.textureWidth,u.textureHeight,{format:Bi,type:Wn,depthTexture:new Os(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ri(d.framebufferWidth,d.framebufferHeight,{format:Bi,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(Y){for(let ut=0;ut<Y.removed.length;ut++){let _t=Y.removed[ut],At=A.indexOf(_t);At>=0&&(A[At]=null,E[At].disconnect(_t))}for(let ut=0;ut<Y.added.length;ut++){let _t=Y.added[ut],At=A.indexOf(_t);if(At===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=A.length){A.push(_t),At=Lt;break}else if(A[Lt]===null){A[Lt]=_t,At=Lt;break}if(At===-1)break}let pt=E[At];pt&&pt.connect(_t)}}function X(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ut=Y.near,_t=Y.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),H.near=U.near=R.near=ut,H.far=U.far=R.far=_t,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=Y.layers.mask|6,R.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let At=Y.parent,pt=H.cameras;X(H,At);for(let Lt=0;Lt<pt.length;Lt++)X(pt[Lt],At);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),$(Y,H,At)};function $(Y,ut,_t){_t===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Po*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Y){return h[Y]};let tt=null;function xt(Y,ut){if(f=ut.getViewerPose(c||r),v=ut,f!==null){let _t=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let At=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,At=!0);for(let Rt=0;Rt<_t.length;Rt++){let ee=_t[Rt],ce=null;if(d!==null)ce=d.getViewport(ee);else{let Fe=p.getViewSubImage(u,ee);ce=Fe.viewport,Rt===0&&(t.setRenderTargetTextures(y,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(y))}let Ht=I[Rt];Ht===void 0&&(Ht=new Mn,Ht.layers.enable(Rt),Ht.viewport=new De,I[Rt]=Ht),Ht.matrix.fromArray(ee.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ee.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ce.x,ce.y,ce.width,ce.height),Rt===0&&(H.matrix.copy(Ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),At===!0&&H.cameras.push(Ht)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Rt=p.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,s.renderState)}if(pt&&pt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Rt=0;Rt<_t.length;Rt++){let ee=_t[Rt].camera;if(ee){let ce=h[ee];ce||(ce=new Sc,h[ee]=ce);let Ht=p.getCameraImage(ee);ce.sourceTexture=Ht}}}}for(let _t=0;_t<E.length;_t++){let At=A[_t],pt=E[_t];At!==null&&pt!==void 0&&pt.update(At,ut,c||r)}tt&&tt(Y,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),v=null}let Et=new r1;Et.setAnimationLoop(xt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},DN=new Ce,g1=new Ot;g1.set(-1,0,0,0,1,0,0,0,1);function LN(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,L0(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,x,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,y)):h.isMeshMatcapMaterial?(a(g,h),v(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),M(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Ln&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Ln&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,y=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(DN.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(g1),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.diffuseRoughness>0&&(g.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UN(e,t,n,i){let s={},a={};function r(m,x){let y=x.program;i.uniformBlockBinding(m,y,s[m.id])}function o(m,x){let y=s[m.id];y===void 0&&(v(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",g));let E=x.program;i.updateUBOMapping(m,E);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let x=e.createBuffer(),y=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,E),e.bindBuffer(e.UNIFORM_BUFFER,null),x}function c(m){let x=s[m.id],y=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,_=y.length;A<_;A++){let T=y[A];if(Array.isArray(T))for(let D=0,R=T.length;D<R;D++)f(T[D],A,D,E);else f(T,A,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,x,y,E){if(u(m,x,y,E)===!0){let A=m.__offset,_=m.value;if(Array.isArray(_)){let T=0;for(let D=0;D<_.length;D++){let R=_[D],U=M(R,!0);p(R,m.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,x,y){typeof m=="number"||typeof m=="boolean"?x[y]=m:m.isMatrix3?(x[y]=m.elements[0],x[y+1]=m.elements[1],x[y+2]=m.elements[2],x[y+3]=0,x[y+4]=m.elements[3],x[y+5]=m.elements[4],x[y+6]=m.elements[5],x[y+7]=0,x[y+8]=m.elements[6],x[y+9]=m.elements[7],x[y+10]=m.elements[8],x[y+11]=0):ArrayBuffer.isView(m)?x.set(m.subarray(0,x.length-y),y):m.toArray(x,y)}function u(m,x,y,E){let A=m.value,_=x+"_"+y;if(Array.isArray(A)){E[_]===void 0&&(E[_]=[]);let T=E[_],D=!1;for(let R=0;R<A.length;R++)d(A[R],T,R)===!0&&(D=!0);return D}return d(A,E,_)}function d(m,x,y){if(x[y]===void 0)return typeof m=="number"||typeof m=="boolean"?x[y]=m:ArrayBuffer.isView(m)?x[y]=m.slice():x[y]=m.clone(),!0;{let E=x[y];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return x[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let x=m.uniforms,y=0,E=16;for(let _=0,T=x.length;_<T;_++){let D=Array.isArray(x[_])?x[_]:[x[_]];for(let R=0,U=D.length;R<U;R++){let I=D[R],H=Array.isArray(I.value)?I.value:[I.value],N=Array.isArray(x[_])||Array.isArray(I.value),k=y;for(let V=0,et=H.length;V<et;V++){let X=H[V],$=M(X,N),tt=y%E,xt=tt%$.boundary,Et=tt+xt;y+=xt,Et!==0&&E-Et<$.storage&&(y+=E-Et),V===0&&(k=y),y+=$.storage}let q=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new q((y-k)/Float32Array.BYTES_PER_ELEMENT),I.__offset=k}}let A=y%E;return A>0&&(y+=E-A),m.__size=y,m.__cache={},this}function M(m,x){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",m),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let x=m.target;x.removeEventListener("dispose",g),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:h}}var ON=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),os=null;function IN(){return os===null&&(os=new pf(ON,16,16,La,Pi),os.name="DFG_LUT",os.minFilter=Nn,os.magFilter=Nn,os.wrapS=ts,os.wrapT=ts,os.generateMipmaps=!1,os.needsUpdate=!0),os}var yd=class{constructor(t={}){let{canvas:n=Cb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Wn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=d,g=new Set([zf,Bf,Pf]),h=new Set([Wn,Oi,Zo,vr,Of,If]),m=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,_=[],T=[],D=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,I=null,H=null,N=null,k=null;this._outputColorSpace=ai;let q=0,V=0,et=null,X=-1,$=null,tt=new De,xt=new De,Et=null,Y=new $t(0),ut=0,_t=n.width,At=n.height,pt=1,Lt=null,Le=null,Rt=new De(0,0,_t,At),ee=new De(0,0,_t,At),ce=!1,Ht=new wa,Fe=new mf,qt=!1,Be=!1,ue=new Ce,li=new F,He=new De,Un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},On=!1;function In(){return et===null?pt:1}let O=i;function Pn(b,L){return n.getContext(b,L)}let re,ge,dt,qe,Ct,It,w,S,B,nt,j,at,ht,Z,J,ot,C,K,W,lt,st,rt,Tt;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",mt,!1),O===null){let L="webgl2";if(O=Pn(L,b),O===null)throw Pn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(b){throw n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),Ut("WebGLRenderer: "+b.message),b}function Gt(){re=new q3(O),re.init(),st=new RN(O,re),ge=new I3(O,re,t,st),dt=new AN(O,re),ge.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),H=O.createFramebuffer(),N=O.createFramebuffer(),k=O.createFramebuffer(),qe=new J3(O),Ct=new fN,It=new wN(O,re,dt,Ct,ge,st,qe),w=new W3(R),S=new Qw(O),rt=new U3(O,S),B=new Y3(O,S,qe,rt),nt=new Q3(O,B,S,rt,qe),K=new K3(O,ge,It),J=new P3(Ct),j=new hN(R,w,re,ge,rt,J),at=new LN(R,Ct),ht=new pN,Z=new xN(re),C=new L3(R,w,dt,nt,v,l),ot=new EN(R,nt,ge),Tt=new UN(O,qe,ge,dt),W=new O3(O,re,qe),lt=new Z3(O,re,qe),qe.programs=j.programs,R.capabilities=ge,R.extensions=re,R.properties=Ct,R.renderLists=ht,R.shadowMap=ot,R.state=dt,R.info=qe}M!==Wn&&(D=new $3(M,n.width,n.height,o,s,a));let it=new W0(R,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(b){b!==void 0&&(pt=b,this.setSize(_t,At,!1))},this.getSize=function(b){return b.set(_t,At)},this.setSize=function(b,L,G=!0){if(it.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=b,At=L,n.width=Math.floor(b*pt),n.height=Math.floor(L*pt),G===!0&&(n.style.width=b+"px",n.style.height=L+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(_t*pt,At*pt).floor()},this.setDrawingBufferSize=function(b,L,G){_t=b,At=L,pt=G,n.width=Math.floor(b*G),n.height=Math.floor(L*G),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(M===Wn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,L,G,P){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,L,G,P),dt.viewport(tt.copy(Rt).multiplyScalar(In()).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,L,G,P){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,L,G,P),dt.scissor(xt.copy(ee).multiplyScalar(In()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){dt.setScissorTest(ce=b)},this.setOpaqueSort=function(b){Lt=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,G=!0){let P=0;if(b){let z=!1;if(et!==null){let ft=et.texture.format;z=g.has(ft)}if(z){let ft=et.texture.type,yt=h.has(ft),ct=C.getClearColor(),vt=C.getClearAlpha(),bt=ct.r,Bt=ct.g,Yt=ct.b;yt?(m[0]=bt,m[1]=Bt,m[2]=Yt,m[3]=vt,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=bt,x[1]=Bt,x[2]=Yt,x[3]=vt,O.clearBufferiv(O.COLOR,0,x))}else P|=O.COLOR_BUFFER_BIT}L&&(P|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(P|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&O.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),C.dispose(),ht.dispose(),Z.dispose(),It.dispose(),Ct.dispose(),w.dispose(),nt.dispose(),B.dispose(),rt.dispose(),Tt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",Z0),it.removeEventListener("sessionend",J0),Ua.stop()};function wt(b){b.preventDefault(),R0("WebGLRenderer: Context Lost."),U=!0}function Ft(){R0("WebGLRenderer: Context Restored."),U=!1;let b=qe.autoReset,L=ot.enabled,G=ot.autoUpdate,P=ot.needsUpdate,z=ot.type;Gt(),qe.autoReset=b,ot.enabled=L,ot.autoUpdate=G,ot.needsUpdate=P,ot.type=z}function mt(b){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){let L=b.target;L.removeEventListener("dispose",he),je(L)}function je(b){Fs(b),Ct.remove(b)}function Fs(b){let L=Ct.get(b).programs;L!==void 0&&(L.forEach(function(G){j.releaseProgram(G)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,G,P,z,ft){L===null&&(L=Un);let yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ct=M1(b,L,G,P,z);dt.setMaterial(P,yt);let vt=G.index,bt=1;if(P.wireframe===!0){if(vt=B.getWireframeAttribute(G),vt===void 0)return;bt=2}let Bt=G.drawRange,Yt=G.attributes.position,St=Bt.start*bt,Zt=(Bt.start+Bt.count)*bt;ft!==null&&(St=Math.max(St,ft.start*bt),Zt=Math.min(Zt,(ft.start+ft.count)*bt)),vt!==null?(St=Math.max(St,0),Zt=Math.min(Zt,vt.count)):Yt!=null&&(St=Math.max(St,0),Zt=Math.min(Zt,Yt.count));let Ge=Zt-St;if(Ge<0||Ge===1/0)return;rt.setup(z,P,ct,G,vt);let xe,_e=W;if(vt!==null&&(xe=S.get(vt),_e=lt,_e.setIndex(xe)),z.isMesh)P.wireframe===!0?(dt.setLineWidth(P.wireframeLinewidth*In()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(z.isLine){let mn=P.linewidth;mn===void 0&&(mn=1),dt.setLineWidth(mn*In()),z.isLineSegments?_e.setMode(O.LINES):z.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else z.isPoints?_e.setMode(O.POINTS):z.isSprite&&_e.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(re.get("WEBGL_multi_draw"))_e.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let mn=z._multiDrawStarts,Mt=z._multiDrawCounts,Tn=z._multiDrawCount,ie=vt?S.get(vt).bytesPerElement:1,Oa=Ct.get(P).currentProgram.getUniforms();for(let gn=0;gn<Tn;gn++)Oa.setValue(O,"_gl_DrawID",gn),_e.render(mn[gn]/ie,Mt[gn])}else if(z.isInstancedMesh)_e.renderInstances(St,Ge,z.count);else if(G.isInstancedBufferGeometry){let mn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,mn);_e.renderInstances(St,Ge,Mt)}else _e.render(St,Ge)};function Y0(b,L,G,P){I!==null&&b.isNodeMaterial&&I.setObject(P,b),qt===!0&&J.setState(b,G,!1),b.transparent===!0&&b.side===as&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,$o(b,L,P),b.side=Da,b.needsUpdate=!0,$o(b,L,P),b.side=as):$o(b,L,P)}this.compile=function(b,L,G=null){G===null&&(G=b),I!==null&&I.renderStart(b,L,G),A=Z.get(G),A.init(L),T.push(A),G.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),Be=this.localClippingEnabled,qt=J.init(this.clippingPlanes,Be),qt===!0&&J.setGlobalState(this.clippingPlanes,L),I!==null&&ot.render(A.state.shadowsArray,G,L);let P=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){let ct=ft[yt];Y0(ct,G,L,z),P.add(ct)}else Y0(ft,G,L,z),P.add(ft)}),A=T.pop(),I!==null&&I.renderEnd(),P},this.compileAsync=function(b,L,G=null){let P=this.compile(b,L,G);return new Promise(z=>{function ft(){if(P.forEach(function(yt){let vt=Ct.get(yt).currentProgram;(vt===void 0||vt.isReady())&&P.delete(yt)}),P.size===0){z(b);return}setTimeout(ft,10)}re.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Md=null;function x1(b){Md&&Md(b)}function Z0(){Ua.stop()}function J0(){Ua.start()}let Ua=new r1;Ua.setAnimationLoop(x1),typeof self<"u"&&Ua.setContext(self),this.setAnimationLoop=function(b){Md=b,it.setAnimationLoop(b),b===null?Ua.stop():Ua.start()},it.addEventListener("sessionstart",Z0),it.addEventListener("sessionend",J0),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;I!==null&&I.renderStart(b,L);let G=it.enabled===!0&&it.isPresenting===!0,P=D!==null&&(et===null||G)&&D.begin(R,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(L),L=it.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,L,et),A=Z.get(b,T.length),A.init(L),A.state.textureUnits=It.getTextureUnits(),T.push(A),ue.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Fe.setFromArrayCamera(L):Ht.setFromProjectionMatrix(ue,xi,L.reversedDepth),Be=this.localClippingEnabled,qt=J.init(this.clippingPlanes,Be),E=ht.get(b,_.length),E.init(),_.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&bd(yt,L,-1/0,R.sortObjects)}bd(b,L,0,R.sortObjects),E.finish(),I!==null&&I.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(Lt,Le),On=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,On&&C.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),qt===!0&&J.beginShadows();let z=A.state.shadowsArray;if(ot.render(z,b,L),qt===!0&&J.endShadows(),(P&&D.hasRenderPass())===!1){let yt=E.opaque,ct=E.transmissive;if(A.setupLights(),L.isArrayCamera){let vt=L.cameras;if(ct.length>0)for(let bt=0,Bt=vt.length;bt<Bt;bt++){let Yt=vt[bt];Q0(yt,ct,b,Yt)}On&&C.render(b);for(let bt=0,Bt=vt.length;bt<Bt;bt++){let Yt=vt[bt];K0(E,b,Yt,Yt.viewport)}}else ct.length>0&&Q0(yt,ct,b,L),On&&C.render(b),K0(E,b,L)}et!==null&&V===0&&(It.updateMultisampleRenderTarget(et),It.updateRenderTargetMipmap(et)),P&&D.end(R),b.isScene===!0&&b.onAfterRender(R,b,L),rt.resetDefaultState(),X=-1,$=null,T.pop(),T.length>0?(A=T[T.length-1],It.setTextureUnits(A.state.textureUnits),qt===!0&&J.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,I!==null&&I.renderEnd()};function bd(b,L,G,P){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){let yt=L.isArrayCamera?Fe:Ht;if(!b.frustumCulled||b.intersectsFrustum(yt)){P&&He.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);let ct=nt.update(b),vt=b.material;vt.visible&&E.push(b,ct,vt,G,He.z,null,L)}}else if(b.isMesh||b.isLine||b.isPoints){let yt=L.isArrayCamera?Fe:Ht;if(!b.frustumCulled||b.intersectsFrustum(yt)){let ct=nt.update(b),vt=b.material;if(P&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),He.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),He.copy(ct.boundingSphere.center)),He.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(vt)){let bt=ct.groups;for(let Bt=0,Yt=bt.length;Bt<Yt;Bt++){let St=bt[Bt],Zt=vt[St.materialIndex];Zt&&Zt.visible&&E.push(b,ct,Zt,G,He.z,St,L)}}else vt.visible&&E.push(b,ct,vt,G,He.z,null,L)}}}let ft=b.children;for(let yt=0,ct=ft.length;yt<ct;yt++)bd(ft[yt],L,G,P)}function K0(b,L,G,P){let{opaque:z,transmissive:ft,transparent:yt}=b;A.setupLightsView(G),qt===!0&&J.setGlobalState(R.clippingPlanes,G),P&&dt.viewport(tt.copy(P)),z.length>0&&kc(z,L,G),ft.length>0&&kc(ft,L,G),yt.length>0&&kc(yt,L,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Q0(b,L,G,P){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){let St=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new ri(1,1,{generateMipmaps:!0,type:St?Pi:Wn,minFilter:Ps,samples:Math.max(4,ge.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let ft=A.state.transmissionRenderTarget[P.id],yt=P.viewport||tt;ft.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let ct=R.getRenderTarget(),vt=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(Y),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),On&&C.render(G);let Bt=R.toneMapping;R.toneMapping=rs;let Yt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),qt===!0&&J.setGlobalState(R.clippingPlanes,P),kc(b,G,P),It.updateMultisampleRenderTarget(ft),It.updateRenderTargetMipmap(ft),re.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Zt=0,Ge=L.length;Zt<Ge;Zt++){let xe=L[Zt],{object:_e,geometry:mn,material:Mt,group:Tn}=xe;if(Mt.side===as&&_e.layers.test(P.layers)){let ie=Mt.side;Mt.side=Ln,Mt.needsUpdate=!0,j0(_e,G,P,mn,Mt,Tn),Mt.side=ie,Mt.needsUpdate=!0,St=!0}}St===!0&&(It.updateMultisampleRenderTarget(ft),It.updateRenderTargetMipmap(ft))}R.setRenderTarget(ct,vt,bt),R.setClearColor(Y,ut),Yt!==void 0&&(P.viewport=Yt),R.toneMapping=Bt}function kc(b,L,G){let P=L.isScene===!0?L.overrideMaterial:null;for(let z=0,ft=b.length;z<ft;z++){let yt=b[z],{object:ct,geometry:vt,group:bt}=yt,Bt=yt.material;Bt.allowOverride===!0&&P!==null&&(Bt=P),ct.layers.test(G.layers)&&j0(ct,L,G,vt,Bt,bt)}}function j0(b,L,G,P,z,ft){I!==null&&z.isNodeMaterial&&I.setObject(b,z),b.onBeforeRender(R,L,G,P,z,ft),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(R,L,G,P,b,ft),z.transparent===!0&&z.side===as&&z.forceSinglePass===!1?(z.side=Ln,z.needsUpdate=!0,R.renderBufferDirect(G,L,P,z,b,ft),z.side=Da,z.needsUpdate=!0,R.renderBufferDirect(G,L,P,z,b,ft),z.side=as):R.renderBufferDirect(G,L,P,z,b,ft),b.onAfterRender(R,L,G,P,z,ft)}function $0(b){let L=0;for(let G of b)G.texture!==null&&L++;return L}function $o(b,L,G){L.isScene!==!0&&(L=Un);let P=Ct.get(b),z=A.state.lights,ft=A.state.shadowsArray,yt=z.state.version,ct=j.getParameters(b,z.state,ft,L,G,A.state.lightProbeGridArray),vt=j.getProgramCacheKey(ct),bt=P.programs;P.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,P.fog=L.fog;let Bt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;P.envMap=w.get(b.envMap||P.environment,Bt),P.envMapRotation=P.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",he),bt=new Map,P.programs=bt,P.programVariants=new Map);let Yt=bt.get(vt);if(Yt!==void 0){if(P.currentProgram===Yt&&P.lightsStateVersion===yt)return e_(b,ct),Yt}else ct.uniforms=j.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,G,ct),b.onBeforeCompile(ct,R),Yt=j.acquireProgram(ct,vt),bt.set(vt,Yt),P.uniforms=ct.uniforms;let St=P.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=J.uniform),e_(b,ct),P.needsLights=T1(b),P.lightsStateVersion=yt,P.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.sunLights.value=z.state.sun,St.sunLightShadows.value=z.state.sunShadow,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.sunShadowMatrix.value=z.state.sunShadowMatrix,St.sunShadowCascade.value=z.state.sunShadowCascade,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),P.numLightProbeGrids=$0(A.state.lightProbeGridArray),P.currentProgram=Yt,P.uniformsList=null,Yt}function S1(b,L,G,P,z){let ft=Ct.get(b),yt=ft.currentProgram.id+","+P+","+z,ct=ft.programVariants.get(yt);return ct===void 0?(ct=$o(b,L,G),ft.programVariants.set(yt,ct)):(ft.currentProgram=ct,ft.uniformsList=null,ft.outputColorSpace=P,ft.toneMapping=z),ct}function t_(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=Ko.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function e_(b,L){let G=Ct.get(b);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function M1(b,L,G,P,z){L.isScene!==!0&&(L=Un),It.resetTextureUnits();let ft=L.fog,yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?L.environment:null,ct=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Kt.workingColorSpace,vt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,bt=w.get(P.envMap||yt,vt),Bt=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),St=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,Ge=!!G.morphAttributes.color,xe=rs;P.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xe=R.toneMapping);let _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mn=_e!==void 0?_e.length:0,Mt=Ct.get(P),Tn=A.state.lights;if(qt===!0&&(Be===!0||b!==$)){let Ue=b===$&&P.id===X;J.setState(P,b,Ue)}let ie=!1,Oa=!1;P.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==Tn.state.version||z.isBatchedMesh&&Mt.batching===!1||!z.isBatchedMesh&&Mt.batching===!0||z.isBatchedMesh&&Mt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Mt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Mt.instancing===!1||!z.isInstancedMesh&&Mt.instancing===!0||z.isSkinnedMesh&&Mt.skinning===!1||!z.isSkinnedMesh&&Mt.skinning===!0||z.isInstancedMesh&&Mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Mt.instancingMorph===!1&&z.morphTexture!==null||Mt.envMap!==bt||P.fog===!0&&Mt.fog!==ft||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Bt||Mt.vertexTangents!==Yt||Mt.morphTargets!==St||Mt.morphNormals!==Zt||Mt.morphColors!==Ge||Mt.morphTargetsCount!==mn||Mt.numLightProbeGrids!==$0(A.state.lightProbeGridArray)?ie=!0:(Mt.outputColorSpace!==ct||Mt.toneMapping!==xe)&&(Oa=!0):(ie=!0,Mt.__version=P.version);let gn=Mt.currentProgram;(ie===!0||Oa===!0)&&(gn=Oa===!0?S1(P,L,z,ct,xe):$o(P,L,z),I&&P.isNodeMaterial&&I.onUpdateProgram(P,gn,Mt));let Xc=!1,Hs=!1,Ia=!1,te=gn.getUniforms(),on=Mt.uniforms;if(dt.useProgram(gn.program)&&(Xc=!0,Hs=!0,Ia=!0),P.id!==X&&(X=P.id,Hs=!0),Xc||$!==b){dt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),te.setValue(O,"projectionMatrix",b.projectionMatrix),te.setValue(O,"viewMatrix",b.matrixWorldInverse);let $e=te.map.cameraPosition;$e!==void 0&&$e.setValue(O,li.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&te.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&te.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Hs=!0,Ia=!0)}if(Mt.needsLights&&(Tn.state.sunShadowMap.length>0&&te.setValue(O,"sunShadowMap",Tn.state.sunShadowMap,It),Tn.state.directionalShadowMap.length>0&&te.setValue(O,"directionalShadowMap",Tn.state.directionalShadowMap,It),Tn.state.spotShadowMap.length>0&&te.setValue(O,"spotShadowMap",Tn.state.spotShadowMap,It),Tn.state.pointShadowMap.length>0&&te.setValue(O,"pointShadowMap",Tn.state.pointShadowMap,It)),z.isSkinnedMesh){te.setOptional(O,z,"bindMatrix"),te.setOptional(O,z,"bindMatrixInverse");let Ue=z.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),te.setValue(O,"boneTexture",Ue.boneTexture,It))}z.isBatchedMesh&&(te.setOptional(O,z,"batchingTexture"),te.setValue(O,"batchingTexture",z._matricesTexture,It),te.setOptional(O,z,"batchingIdTexture"),te.setValue(O,"batchingIdTexture",z._indirectTexture,It),te.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&te.setValue(O,"batchingColorTexture",z._colorsTexture,It));let Mi=G.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&K.update(z,G,gn),(Hs||Mt.receiveShadow!==z.receiveShadow)&&(Mt.receiveShadow=z.receiveShadow,te.setValue(O,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&L.environment!==null&&(on.envMapIntensity.value=L.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=IN()),Hs){if(te.setValue(O,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&b1(on,Ia),ft&&P.fog===!0&&at.refreshFogUniforms(on,ft),at.refreshMaterialUniforms(on,P,pt,At,A.state.transmissionRenderTarget[b.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let Ue=y,$e=0;for(let cs of A.state.lightProbeGridArray)cs.texture!==null&&(Ue.textures[$e]=cs.texture,Ue.min[$e]=cs.boundingBox.min,Ue.max[$e]=cs.boundingBox.max,Ue.resolution[$e]=cs.resolution,$e++);for(let cs in Ue)Ue[cs].length=$e;on.probesSH.value=Ue.textures,on.probesMin.value=Ue.min,on.probesMax.value=Ue.max,on.probesResolution.value=Ue.resolution}Ko.upload(O,t_(Mt),on,It)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Ko.upload(O,t_(Mt),on,It),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&te.setValue(O,"center",z.center),te.setValue(O,"modelViewMatrix",z.modelViewMatrix),te.setValue(O,"normalMatrix",z.normalMatrix),te.setValue(O,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let Ue=P.uniformsGroups;for(let $e=0,cs=Ue.length;$e<cs;$e++){let i_=Ue[$e];Tt.update(i_,gn),Tt.bind(i_,gn)}}return gn}function b1(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function T1(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,L,G){let P=Ct.get(b);P.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Ct.get(b.texture).__webglTexture=L,Ct.get(b.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:G,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let G=Ct.get(b);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,G=0){et=b,q=L,V=G;let P=null,z=!1,ft=!1;if(b){let ct=Ct.get(b);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(b.viewport),xt.copy(b.scissor),Et=b.scissorTest,dt.viewport(tt),dt.scissor(xt),dt.setScissorTest(Et),X=-1;return}else if(ct.__webglFramebuffer===void 0)It.setupRenderTarget(b);else if(ct.__hasExternalTextures)It.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Bt=b.depthTexture;if(ct.__boundDepthTexture!==Bt){if(Bt!==null&&Ct.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(b)}}let vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let bt=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(bt[L])?P=bt[L][G]:P=bt[L],z=!0):b.samples>0&&It.useMultisampledRTT(b)===!1?P=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(bt)?P=bt[G]:P=bt,tt.copy(b.viewport),xt.copy(b.scissor),Et=b.scissorTest}else tt.copy(Rt).multiplyScalar(pt).floor(),xt.copy(ee).multiplyScalar(pt).floor(),Et=ce;if(G!==0&&(P=H),dt.bindFramebuffer(O.FRAMEBUFFER,P)&&dt.drawBuffers(b,P),dt.viewport(tt),dt.scissor(xt),dt.setScissorTest(Et),z){let ct=Ct.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct.__webglTexture,G)}else if(ft){let ct=L;for(let vt=0;vt<b.textures.length;vt++){let bt=Ct.get(b.textures[vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+vt,bt.__webglTexture,G,ct)}}else if(b!==null&&G!==0){let ct=Ct.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,G)}X=-1};function n_(b){let L=Ct.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=ge.textureFormatReadable(b.format),L.__typeReadable=ge.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,G,P,z,ft,yt,ct=0){if(!(b&&b.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(O.FRAMEBUFFER,vt);try{let bt=b.textures[ct],Bt=bt.format,Yt=bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ct);let St=n_(bt);if(St.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-P&&G>=0&&G<=b.height-z&&O.readPixels(L,G,P,z,st.convert(Bt),st.convert(Yt),ft)}finally{let bt=et!==null?Ct.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,L,G,P,z,ft,yt,ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt)if(L>=0&&L<=b.width-P&&G>=0&&G<=b.height-z){dt.bindFramebuffer(O.FRAMEBUFFER,vt);let bt=b.textures[ct],Bt=bt.format,Yt=bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ct);let St=n_(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(L,G,P,z,st.convert(Bt),st.convert(Yt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ge=et!==null?Ct.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Ge);let xe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Db(O,xe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Zt),O.deleteSync(xe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,G=0){let P=Math.pow(2,-G),z=Math.floor(b.image.width*P),ft=Math.floor(b.image.height*P),yt=L!==null?L.x:0,ct=L!==null?L.y:0;It.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,yt,ct,z,ft),dt.unbindTexture()},this.copyTextureToTexture=function(b,L,G=null,P=null,z=0,ft=0){let yt,ct,vt,bt,Bt,Yt,St,Zt,Ge,xe=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(G!==null)yt=G.max.x-G.min.x,ct=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,Bt=G.min.y,Yt=G.isBox3?G.min.z:0;else{let te=Math.pow(2,-z);yt=Math.floor(xe.width*te),ct=Math.floor(xe.height*te),b.isDataArrayTexture?vt=xe.depth:b.isData3DTexture?vt=Math.floor(xe.depth*te):vt=1,bt=0,Bt=0,Yt=0}P!==null?(St=P.x,Zt=P.y,Ge=P.z):(St=0,Zt=0,Ge=0);let _e=st.convert(L.format),mn=st.convert(L.type),Mt;L.isData3DTexture?(It.setTexture3D(L,0),Mt=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(It.setTexture2DArray(L,0),Mt=O.TEXTURE_2D_ARRAY):(It.setTexture2D(L,0),Mt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let Tn=dt.getParameter(O.UNPACK_ROW_LENGTH),ie=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),Oa=dt.getParameter(O.UNPACK_SKIP_PIXELS),gn=dt.getParameter(O.UNPACK_SKIP_ROWS),Xc=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);let Hs=b.isDataArrayTexture||b.isData3DTexture,Ia=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let te=Ct.get(b),on=Ct.get(L),Mi=Ct.get(te.__renderTarget),Ue=Ct.get(on.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,Mi.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let $e=0;$e<vt;$e++)Hs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,z,Yt+$e),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(L).__webglTexture,ft,Ge+$e)),O.blitFramebuffer(bt,Bt,bt+yt,Bt+ct,St,Zt,St+yt,Zt+ct,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Ct.has(b)){let te=Ct.get(b),on=Ct.get(L);dt.bindFramebuffer(O.READ_FRAMEBUFFER,N),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Mi=0;Mi<vt;Mi++)Hs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.__webglTexture,z,Yt+Mi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,te.__webglTexture,z),Ia?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,ft,Ge+Mi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,ft),z!==0?O.blitFramebuffer(bt,Bt,bt+yt,Bt+ct,St,Zt,St+yt,Zt+ct,O.COLOR_BUFFER_BIT,O.NEAREST):Ia?O.copyTexSubImage3D(Mt,ft,St,Zt,Ge+Mi,bt,Bt,yt,ct):O.copyTexSubImage2D(Mt,ft,St,Zt,bt,Bt,yt,ct);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ia?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Mt,ft,St,Zt,Ge,yt,ct,vt,_e,mn,xe.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,ft,St,Zt,Ge,yt,ct,vt,_e,xe.data):O.texSubImage3D(Mt,ft,St,Zt,Ge,yt,ct,vt,_e,mn,xe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,St,Zt,yt,ct,_e,mn,xe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,St,Zt,xe.width,xe.height,_e,xe.data):O.texSubImage2D(O.TEXTURE_2D,ft,St,Zt,yt,ct,_e,mn,xe);dt.pixelStorei(O.UNPACK_ROW_LENGTH,Tn),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Oa),dt.pixelStorei(O.UNPACK_SKIP_ROWS,gn),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Xc),ft===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&O.generateMipmap(Mt),dt.unbindTexture()},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&It.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?It.setTextureCube(b,0):b.isData3DTexture?It.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?It.setTexture2DArray(b,0):It.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){q=0,V=0,et=null,dt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}};function q0({scale:e=.95,followEase:t=.042,idleSpeed:n=.55}){let i=(0,jo.useRef)(null);return(0,jo.useEffect)(()=>{let s=i.current;if(!s)return;let a=new gc,r=new Mn(42,window.innerWidth/Math.max(window.innerHeight,1),.1,100);r.position.set(0,0,14);let o=new yd({alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,0),o.domElement.style.display="block",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.pointerEvents="none",s.appendChild(o.domElement);let l=new Rc(14214911,.75);a.add(l);let c=new ko(16777215,1.85);c.position.set(6,9,10),a.add(c);let f=new ko(16106348,1.35);f.position.set(-8,4,-5),a.add(f);let p=new Ac(3718648,1.6,18);p.position.set(0,-3,6),a.add(p);let u=new pr({color:1448744,metalness:.72,roughness:.28}),d=new pr({color:2765639,metalness:.82,roughness:.22}),v=new pr({color:329745,metalness:.9,roughness:.12}),M=new hr({color:3718648}),g=new hr({color:16106348}),h=new Ui;h.scale.setScalar(e),a.add(h);let m=new Ui;m.position.set(0,.42,0),h.add(m);let x=new Ee(new dr(.54,28,24),u);x.scale.set(1.12,.88,.96),m.add(x);let y=new Ee(new Is(.86,.36,.22),v);y.position.set(0,0,.41),m.add(y);let E=new Ee(new Is(.92,.42,.18),d);E.position.set(0,0,.39),m.add(E);let A=new Ho(.055,.09,8,12),_=new Ee(A,M);_.position.set(-.2,.01,.53),m.add(_);let T=new Ee(A,M);T.position.set(.2,.01,.53),m.add(T);let D=new fr(.14,.14,.12,18);D.rotateZ(Math.PI/2);let R=new Ee(D,d);R.position.set(-.62,.02,0),m.add(R);let U=new Ee(D,d);U.position.set(.62,.02,0),m.add(U);let I=new Ee(new fr(.024,.032,.34,10),d);I.position.set(.22,.56,-.05),I.rotation.z=-.18,m.add(I);let H=new Ee(new dr(.065,14,14),g);H.position.set(.25,.74,-.05),m.add(H);let N=new Ui;N.position.set(0,-.28,0),h.add(N);let k=new Ee(new fr(.38,.24,.62,24),u);N.add(k);let q=new Ee(new Go(.13,.025,12,24),g);q.position.set(0,.06,.32),N.add(q);let V=new Ee(new dr(.07,16,16),M);V.position.set(0,.06,.32),N.add(V);let et=new Ho(.085,.26,8,14),X=new Ee(et,d);X.position.set(-.54,.04,.04),X.rotation.z=.25,N.add(X);let $=new Ee(et,d);$.position.set(.54,.04,.04),$.rotation.z=-.25,N.add($);let tt=new Ee(new Go(.24,.022,12,28),M);tt.rotation.x=Math.PI/2,tt.position.set(0,-.38,0),N.add(tt);let xt=()=>{let qt=r.fov*Math.PI/180,Be=2*Math.tan(qt/2)*r.position.z;return{w:Be*r.aspect,h:Be}},Et=xt(),Y=new F(Et.w*.28,Et.h*.12,0),ut=new F(Et.w*.28,Et.h*.12,0),_t=new F,At=0,pt=.65,Lt=.45,Le=qt=>{let Be=qt.clientX/Math.max(window.innerWidth,1)*2-1,ue=-(qt.clientY/Math.max(window.innerHeight,1)*2-1);pt=Be,Lt=ue,At=performance.now(),Y.x=Be*(Et.w*.46)-.85,Y.y=ue*(Et.h*.44)+.55},Rt=()=>{r.aspect=window.innerWidth/Math.max(window.innerHeight,1),r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),Et=xt()};window.addEventListener("pointermove",Le,{passive:!0}),window.addEventListener("resize",Rt);let ee=0,ce=new Cc,Ht=2.4,Fe=()=>{ee=requestAnimationFrame(Fe);let qt=ce.getElapsedTime();if(performance.now()-At>2500){let re=qt*n;Y.x=Math.sin(re*.7)*(Et.w*.34),Y.y=Math.sin(re*1.15)*(Et.h*.26)}let ue=Y.x-ut.x,li=Y.y-ut.y;_t.x=(_t.x+ue*t)*.82,_t.y=(_t.y+li*t)*.82,ut.x+=_t.x,ut.y+=_t.y;let He=Math.sin(qt*2.6)*.14;h.position.set(ut.x,ut.y+He,0);let Un=zc.clamp(-_t.x*1.1,-.38,.38),On=zc.clamp(_t.x*1.4+pt*.35,-.65,.65),In=zc.clamp(-_t.y*.9-Lt*.2,-.35,.35);h.rotation.z+=(Un-h.rotation.z)*.1,h.rotation.y+=(On-h.rotation.y)*.08,h.rotation.x+=(In-h.rotation.x)*.08,m.rotation.y=Math.sin(qt*1.2)*.12+pt*.18,m.rotation.x=Math.cos(qt*.9)*.06-Lt*.12,X.position.y=.04+Math.sin(qt*3.1)*.045,$.position.y=.04+Math.cos(qt*3.1)*.045;let O=.94+Math.sin(qt*5.2)*.08;tt.scale.set(O,O,1);let Pn=.88+Math.sin(qt*4)*.22;if(H.scale.setScalar(Pn),qt>Ht){let re=(qt-Ht)*14;if(re<Math.PI){let ge=Math.max(.12,Math.abs(Math.cos(re)));_.scale.y=ge,T.scale.y=ge}else _.scale.y=1,T.scale.y=1,Ht=qt+2.8+Math.random()*2.2}o.render(a,r)};return Fe(),()=>{cancelAnimationFrame(ee),window.removeEventListener("pointermove",Le),window.removeEventListener("resize",Rt),o.dispose(),o.domElement.parentNode===s&&s.removeChild(o.domElement)}},[e,t,n]),jo.default.createElement("div",{ref:i,style:{width:"100%",height:"100%",pointerEvents:"none"},"aria-hidden":"true"})}function _1(){let e=document.getElementById("persimmonWaftMount");e&&!e.dataset.mounted&&(e.dataset.mounted="true",(0,y1.createRoot)(e).render(v1.default.createElement(q0,{scale:.92,followEase:.042,idleSpeed:.55})))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_1):_1();})();
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
