(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(u){if(u.ep)return;u.ep=!0;const m=r(u);fetch(u.href,m)}})();function qw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qm={exports:{}},dc={};var Yb;function nA(){if(Yb)return dc;Yb=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,u,m){var p=null;if(m!==void 0&&(p=""+m),u.key!==void 0&&(p=""+u.key),"key"in u){m={};for(var b in u)b!=="key"&&(m[b]=u[b])}else m=u;return u=m.ref,{$$typeof:t,type:s,key:p,ref:u!==void 0?u:null,props:m}}return dc.Fragment=i,dc.jsx=r,dc.jsxs=r,dc}var Kb;function iA(){return Kb||(Kb=1,Qm.exports=nA()),Qm.exports}var h=iA(),ep={exports:{}},Pe={};var Wb;function aA(){if(Wb)return Pe;Wb=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),j=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=j&&O[j]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,H={};function B(O,Y,ie){this.props=O,this.context=Y,this.refs=H,this.updater=ie||z}B.prototype.isReactComponent={},B.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=B.prototype;function W(O,Y,ie){this.props=O,this.context=Y,this.refs=H,this.updater=ie||z}var ue=W.prototype=new $;ue.constructor=W,P(ue,B.prototype),ue.isPureReactComponent=!0;var J=Array.isArray;function se(){}var Q={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function Ce(O,Y,ie){var oe=ie.ref;return{$$typeof:t,type:O,key:Y,ref:oe!==void 0?oe:null,props:ie}}function Ue(O,Y){return Ce(O.type,Y,O.props)}function ve(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function ke(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ie){return Y[ie]})}var ge=/\/+/g;function ae(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?ke(""+O.key):Y.toString(36)}function je(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(se,se):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function D(O,Y,ie,oe,fe){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(pe){case"bigint":case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case t:case i:Le=!0;break;case T:return Le=O._init,D(Le(O._payload),Y,ie,oe,fe)}}if(Le)return fe=fe(O),Le=oe===""?"."+ae(O,0):oe,J(fe)?(ie="",Le!=null&&(ie=Le.replace(ge,"$&/")+"/"),D(fe,Y,ie,"",function(kt){return kt})):fe!=null&&(ve(fe)&&(fe=Ue(fe,ie+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(ge,"$&/")+"/")+Le)),Y.push(fe)),1;Le=0;var nt=oe===""?".":oe+":";if(J(O))for(var Qe=0;Qe<O.length;Qe++)oe=O[Qe],pe=nt+ae(oe,Qe),Le+=D(oe,Y,ie,pe,fe);else if(Qe=M(O),typeof Qe=="function")for(O=Qe.call(O),Qe=0;!(oe=O.next()).done;)oe=oe.value,pe=nt+ae(oe,Qe++),Le+=D(oe,Y,ie,pe,fe);else if(pe==="object"){if(typeof O.then=="function")return D(je(O),Y,ie,oe,fe);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Le}function le(O,Y,ie){if(O==null)return O;var oe=[],fe=0;return D(O,oe,"","",function(pe){return Y.call(ie,pe,fe++)}),oe}function re(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=ie)},function(ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=ie)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var Me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ce={map:le,forEach:function(O,Y,ie){le(O,function(){Y.apply(this,arguments)},ie)},count:function(O){var Y=0;return le(O,function(){Y++}),Y},toArray:function(O){return le(O,function(Y){return Y})||[]},only:function(O){if(!ve(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return Pe.Activity=E,Pe.Children=ce,Pe.Component=B,Pe.Fragment=r,Pe.Profiler=u,Pe.PureComponent=W,Pe.StrictMode=s,Pe.Suspense=y,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return Q.H.useMemoCache(O)}},Pe.cache=function(O){return function(){return O.apply(null,arguments)}},Pe.cacheSignal=function(){return null},Pe.cloneElement=function(O,Y,ie){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var oe=P({},O.props),fe=O.key;if(Y!=null)for(pe in Y.key!==void 0&&(fe=""+Y.key),Y)!he.call(Y,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&Y.ref===void 0||(oe[pe]=Y[pe]);var pe=arguments.length-2;if(pe===1)oe.children=ie;else if(1<pe){for(var Le=Array(pe),nt=0;nt<pe;nt++)Le[nt]=arguments[nt+2];oe.children=Le}return Ce(O.type,fe,oe)},Pe.createContext=function(O){return O={$$typeof:p,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:m,_context:O},O},Pe.createElement=function(O,Y,ie){var oe,fe={},pe=null;if(Y!=null)for(oe in Y.key!==void 0&&(pe=""+Y.key),Y)he.call(Y,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(fe[oe]=Y[oe]);var Le=arguments.length-2;if(Le===1)fe.children=ie;else if(1<Le){for(var nt=Array(Le),Qe=0;Qe<Le;Qe++)nt[Qe]=arguments[Qe+2];fe.children=nt}if(O&&O.defaultProps)for(oe in Le=O.defaultProps,Le)fe[oe]===void 0&&(fe[oe]=Le[oe]);return Ce(O,pe,fe)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:b,render:O}},Pe.isValidElement=ve,Pe.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:re}},Pe.memo=function(O,Y){return{$$typeof:_,type:O,compare:Y===void 0?null:Y}},Pe.startTransition=function(O){var Y=Q.T,ie={};Q.T=ie;try{var oe=O(),fe=Q.S;fe!==null&&fe(ie,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(se,Me)}catch(pe){Me(pe)}finally{Y!==null&&ie.types!==null&&(Y.types=ie.types),Q.T=Y}},Pe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},Pe.use=function(O){return Q.H.use(O)},Pe.useActionState=function(O,Y,ie){return Q.H.useActionState(O,Y,ie)},Pe.useCallback=function(O,Y){return Q.H.useCallback(O,Y)},Pe.useContext=function(O){return Q.H.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O,Y){return Q.H.useDeferredValue(O,Y)},Pe.useEffect=function(O,Y){return Q.H.useEffect(O,Y)},Pe.useEffectEvent=function(O){return Q.H.useEffectEvent(O)},Pe.useId=function(){return Q.H.useId()},Pe.useImperativeHandle=function(O,Y,ie){return Q.H.useImperativeHandle(O,Y,ie)},Pe.useInsertionEffect=function(O,Y){return Q.H.useInsertionEffect(O,Y)},Pe.useLayoutEffect=function(O,Y){return Q.H.useLayoutEffect(O,Y)},Pe.useMemo=function(O,Y){return Q.H.useMemo(O,Y)},Pe.useOptimistic=function(O,Y){return Q.H.useOptimistic(O,Y)},Pe.useReducer=function(O,Y,ie){return Q.H.useReducer(O,Y,ie)},Pe.useRef=function(O){return Q.H.useRef(O)},Pe.useState=function(O){return Q.H.useState(O)},Pe.useSyncExternalStore=function(O,Y,ie){return Q.H.useSyncExternalStore(O,Y,ie)},Pe.useTransition=function(){return Q.H.useTransition()},Pe.version="19.2.4",Pe}var Xb;function a0(){return Xb||(Xb=1,ep.exports=aA()),ep.exports}var k=a0();const Wn=qw(k);var tp={exports:{}},fc={},np={exports:{}},ip={};var Jb;function rA(){return Jb||(Jb=1,(function(t){function i(D,le){var re=D.length;D.push(le);e:for(;0<re;){var Me=re-1>>>1,ce=D[Me];if(0<u(ce,le))D[Me]=le,D[re]=ce,re=Me;else break e}}function r(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var le=D[0],re=D.pop();if(re!==le){D[0]=re;e:for(var Me=0,ce=D.length,O=ce>>>1;Me<O;){var Y=2*(Me+1)-1,ie=D[Y],oe=Y+1,fe=D[oe];if(0>u(ie,re))oe<ce&&0>u(fe,ie)?(D[Me]=fe,D[oe]=re,Me=oe):(D[Me]=ie,D[Y]=re,Me=Y);else if(oe<ce&&0>u(fe,re))D[Me]=fe,D[oe]=re,Me=oe;else break e}}return le}function u(D,le){var re=D.sortIndex-le.sortIndex;return re!==0?re:D.id-le.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;t.unstable_now=function(){return m.now()}}else{var p=Date,b=p.now();t.unstable_now=function(){return p.now()-b}}var y=[],_=[],T=1,E=null,j=3,M=!1,z=!1,P=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ue(D){for(var le=r(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=D)s(_),le.sortIndex=le.expirationTime,i(y,le);else break;le=r(_)}}function J(D){if(P=!1,ue(D),!z)if(r(y)!==null)z=!0,se||(se=!0,ke());else{var le=r(_);le!==null&&je(J,le.startTime-D)}}var se=!1,Q=-1,he=5,Ce=-1;function Ue(){return H?!0:!(t.unstable_now()-Ce<he)}function ve(){if(H=!1,se){var D=t.unstable_now();Ce=D;var le=!0;try{e:{z=!1,P&&(P=!1,$(Q),Q=-1),M=!0;var re=j;try{t:{for(ue(D),E=r(y);E!==null&&!(E.expirationTime>D&&Ue());){var Me=E.callback;if(typeof Me=="function"){E.callback=null,j=E.priorityLevel;var ce=Me(E.expirationTime<=D);if(D=t.unstable_now(),typeof ce=="function"){E.callback=ce,ue(D),le=!0;break t}E===r(y)&&s(y),ue(D)}else s(y);E=r(y)}if(E!==null)le=!0;else{var O=r(_);O!==null&&je(J,O.startTime-D),le=!1}}break e}finally{E=null,j=re,M=!1}le=void 0}}finally{le?ke():se=!1}}}var ke;if(typeof W=="function")ke=function(){W(ve)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=ve,ke=function(){ae.postMessage(null)}}else ke=function(){B(ve,0)};function je(D,le){Q=B(function(){D(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return j},t.unstable_next=function(D){switch(j){case 1:case 2:case 3:var le=3;break;default:le=j}var re=j;j=le;try{return D()}finally{j=re}},t.unstable_requestPaint=function(){H=!0},t.unstable_runWithPriority=function(D,le){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var re=j;j=D;try{return le()}finally{j=re}},t.unstable_scheduleCallback=function(D,le,re){var Me=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Me+re:Me):re=Me,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=re+ce,D={id:T++,callback:le,priorityLevel:D,startTime:re,expirationTime:ce,sortIndex:-1},re>Me?(D.sortIndex=re,i(_,D),r(y)===null&&D===r(_)&&(P?($(Q),Q=-1):P=!0,je(J,re-Me))):(D.sortIndex=ce,i(y,D),z||M||(z=!0,se||(se=!0,ke()))),D},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(D){var le=j;return function(){var re=j;j=le;try{return D.apply(this,arguments)}finally{j=re}}}})(ip)),ip}var Qb;function oA(){return Qb||(Qb=1,np.exports=rA()),np.exports}var ap={exports:{}},rn={};var e_;function sA(){if(e_)return rn;e_=1;var t=a0();function i(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,_,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:""+E,children:y,containerInfo:_,implementation:T}}var p=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rn.createPortal=function(y,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(i(299));return m(y,_,null,T)},rn.flushSync=function(y){var _=p.T,T=s.p;try{if(p.T=null,s.p=2,y)return y()}finally{p.T=_,s.p=T,s.d.f()}},rn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(y,_))},rn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},rn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var T=_.as,E=b(T,_.crossOrigin),j=typeof _.integrity=="string"?_.integrity:void 0,M=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:j,fetchPriority:M}):T==="script"&&s.d.X(y,{crossOrigin:E,integrity:j,fetchPriority:M,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},rn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=b(_.as,_.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(y)},rn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,E=b(T,_.crossOrigin);s.d.L(y,T,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},rn.preloadModule=function(y,_){if(typeof y=="string")if(_){var T=b(_.as,_.crossOrigin);s.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(y)},rn.requestFormReset=function(y){s.d.r(y)},rn.unstable_batchedUpdates=function(y,_){return y(_)},rn.useFormState=function(y,_,T){return p.H.useFormState(y,_,T)},rn.useFormStatus=function(){return p.H.useHostTransitionStatus()},rn.version="19.2.4",rn}var t_;function Gw(){if(t_)return ap.exports;t_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),ap.exports=sA(),ap.exports}var n_;function lA(){if(n_)return fc;n_=1;var t=oA(),i=a0(),r=Gw();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(s(188))}function _(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(s(188));return n!==e?null:e}for(var o=e,c=n;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return y(f),e;if(g===c)return y(f),n;g=g.sibling}throw Error(s(188))}if(o.return!==c.return)o=f,c=g;else{for(var S=!1,A=f.child;A;){if(A===o){S=!0,o=f,c=g;break}if(A===c){S=!0,c=f,o=g;break}A=A.sibling}if(!S){for(A=g.child;A;){if(A===o){S=!0,o=g,c=f;break}if(A===c){S=!0,c=g,o=f;break}A=A.sibling}if(!S)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?e:n}function T(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=T(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,j=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case J:return"Suspense";case se:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case W:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case ue:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case he:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var je=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Me=[],ce=-1;function O(e){return{current:e}}function Y(e){0>ce||(e.current=Me[ce],Me[ce]=null,ce--)}function ie(e,n){ce++,Me[ce]=e.current,e.current=n}var oe=O(null),fe=O(null),pe=O(null),Le=O(null);function nt(e,n){switch(ie(pe,n),ie(fe,e),ie(oe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vb(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vb(n),e=yb(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(oe),ie(oe,e)}function Qe(){Y(oe),Y(fe),Y(pe)}function kt(e){e.memoizedState!==null&&ie(Le,e);var n=oe.current,o=yb(n,e.type);n!==o&&(ie(fe,e),ie(oe,o))}function Ei(e){fe.current===e&&(Y(oe),Y(fe)),Le.current===e&&(Y(Le),sc._currentValue=re)}var we,Tt;function Dn(e){if(we===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);we=n&&n[1]||"",Tt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Tt}var Pa=!1;function Na(e,n){if(!e||Pa)return"";Pa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(n){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(K){var G=K}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(K){G=K}e.call(ne.prototype)}}else{try{throw Error()}catch(K){G=K}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(K){if(K&&G&&typeof K.stack=="string")return[K.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),S=g[0],A=g[1];if(S&&A){var I=S.split(`
`),Z=A.split(`
`);for(f=c=0;c<I.length&&!I[c].includes("DetermineComponentFrameRoot");)c++;for(;f<Z.length&&!Z[f].includes("DetermineComponentFrameRoot");)f++;if(c===I.length||f===Z.length)for(c=I.length-1,f=Z.length-1;1<=c&&0<=f&&I[c]!==Z[f];)f--;for(;1<=c&&0<=f;c--,f--)if(I[c]!==Z[f]){if(c!==1||f!==1)do if(c--,f--,0>f||I[c]!==Z[f]){var X=`
`+I[c].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=c&&0<=f);break}}}finally{Pa=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Dn(o):""}function Gi(e,n){switch(e.tag){case 26:case 27:case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return e.child!==n&&n!==null?Dn("Suspense Fallback"):Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 15:return Na(e.type,!1);case 11:return Na(e.type.render,!1);case 1:return Na(e.type,!0);case 31:return Dn("Activity");default:return""}}function Ti(e){try{var n="",o=null;do n+=Gi(e,o),o=e,e=e.return;while(e);return n}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Da=Object.prototype.hasOwnProperty,Yi=t.unstable_scheduleCallback,Ur=t.unstable_cancelCallback,hu=t.unstable_shouldYield,mu=t.unstable_requestPaint,on=t.unstable_now,th=t.unstable_getCurrentPriorityLevel,Fo=t.unstable_ImmediatePriority,sl=t.unstable_UserBlockingPriority,Fr=t.unstable_NormalPriority,nh=t.unstable_LowPriority,ll=t.unstable_IdlePriority,pu=t.log,ih=t.unstable_setDisableYieldValue,Ba=null,Kt=null;function ti(e){if(typeof pu=="function"&&ih(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Ba,e)}catch{}}var sn=Math.clz32?Math.clz32:rh,Hr=Math.log,ah=Math.LN2;function rh(e){return e>>>=0,e===0?32:31-(Hr(e)/ah|0)|0}var $r=256,Vr=262144,Zr=4194304;function Ki(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ho(e,n,o){var c=e.pendingLanes;if(c===0)return 0;var f=0,g=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=c&134217727;return A!==0?(c=A&~g,c!==0?f=Ki(c):(S&=A,S!==0?f=Ki(S):o||(o=A&~e,o!==0&&(f=Ki(o))))):(A=c&~g,A!==0?f=Ki(A):S!==0?f=Ki(S):o||(o=c&~e,o!==0&&(f=Ki(o)))),f===0?0:n!==0&&n!==f&&(n&g)===0&&(g=f&-f,o=n&-n,g>=o||g===32&&(o&4194048)!==0)?n:f}function qr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oh(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function cl(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function Wi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sh(e,n,o,c,f,g){var S=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,Z=e.hiddenUpdates;for(o=S&~o;0<o;){var X=31-sn(o),ne=1<<X;A[X]=0,I[X]=-1;var G=Z[X];if(G!==null)for(Z[X]=null,X=0;X<G.length;X++){var K=G[X];K!==null&&(K.lane&=-536870913)}o&=~ne}c!==0&&vu(e,c,0),g!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=g&~(S&~n))}function vu(e,n,o){e.pendingLanes|=n,e.suspendedLanes&=~n;var c=31-sn(n);e.entangledLanes|=n,e.entanglements[c]=e.entanglements[c]|1073741824|o&261930}function yu(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var c=31-sn(o),f=1<<c;f&n|e[c]&n&&(e[c]|=n),o&=~f}}function bu(e,n){var o=n&-n;return o=(o&42)!==0?1:hn(o),(o&(e.suspendedLanes|n))!==0?0:o}function hn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ul(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Fb(e.type))}function dl(e,n){var o=le.p;try{return le.p=e,n()}finally{le.p=o}}var ni=Math.random().toString(36).slice(2),jt="__reactFiber$"+ni,Ht="__reactProps$"+ni,Xi="__reactContainer$"+ni,Ci="__reactEvents$"+ni,_u="__reactListeners$"+ni,lh="__reactHandles$"+ni,xu="__reactResources$"+ni,Gr="__reactMarker$"+ni;function fl(e){delete e[jt],delete e[Ht],delete e[Ci],delete e[_u],delete e[lh]}function Ji(e){var n=e[jt];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Xi]||o[jt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=Tb(e);e!==null;){if(o=e[jt])return o;e=Tb(e)}return n}e=o,o=e.parentNode}return null}function Ua(e){if(e=e[jt]||e[Xi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ai(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Fa(e){var n=e[xu];return n||(n=e[xu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ot(e){e[Gr]=!0}var wu=new Set,Su={};function Qi(e,n){ki(e,n),ki(e+"Capture",n)}function ki(e,n){for(Su[e]=n,e=0;e<n.length;e++)wu.add(n[e])}var Yr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hl={},ml={};function Kr(e){return Da.call(ml,e)?!0:Da.call(hl,e)?!1:Yr.test(e)?ml[e]=!0:(hl[e]=!0,!1)}function He(e,n,o){if(Kr(n))if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var c=n.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+o)}}function ot(e,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+o)}}function mn(e,n,o,c){if(c===null)e.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(n,o,""+c)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ea(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pl(e,n,o){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var f=c.get,g=c.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){o=""+S,g.call(this,S)}}),Object.defineProperty(e,n,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ie(e){if(!e._valueTracker){var n=ea(e)?"checked":"value";e._valueTracker=pl(e,n,""+e[n])}}function vt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return e&&(c=ea(e)?e.checked?"true":"false":e.value),e=c,e!==o?(n.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $o=/[\n"\\]/g;function ht(e){return e.replace($o,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function gl(e,n,o,c,f,g,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Nt(n)):e.value!==""+Nt(n)&&(e.value=""+Nt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?ii(e,S,Nt(n)):o!=null?ii(e,S,Nt(o)):c!=null&&e.removeAttribute("value"),f==null&&g!=null&&(e.defaultChecked=!!g),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Nt(A):e.removeAttribute("name")}function Wr(e,n,o,c,f,g,S,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.type=g),n!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||n!=null)){Ie(e);return}o=o!=null?""+Nt(o):"",n=n!=null?""+Nt(n):o,A||n===e.value||(e.value=n),e.defaultValue=n}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=A?e.checked:!!c,e.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ie(e)}function ii(e,n,o){n==="number"&&Ha(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ut(e,n,o,c){if(e=e.options,n){n={};for(var f=0;f<o.length;f++)n["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=n.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&c&&(e[o].defaultSelected=!0)}else{for(o=""+Nt(o),n=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,c&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function ji(e,n,o){if(n!=null&&(n=""+Nt(n),n!==e.value&&(e.value=n),o==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=o!=null?""+Nt(o):""}function $a(e,n,o,c){if(n==null){if(c!=null){if(o!=null)throw Error(s(92));if(je(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),n=o}o=Nt(n),e.defaultValue=o,c=e.textContent,c===o&&c!==""&&c!==null&&(e.value=c),Ie(e)}function Bn(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var vl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Va(e,n,o){var c=n.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":c?e.setProperty(n,o):typeof o!="number"||o===0||vl.has(n)?n==="float"?e.cssFloat=o:e[n]=(""+o).trim():e[n]=o+"px"}function Vo(e,n,o){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||n!=null&&n.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var f in n)c=n[f],n.hasOwnProperty(f)&&o[f]!==c&&Va(e,f,c)}else for(var g in n)n.hasOwnProperty(g)&&Va(e,g,n[g])}function Xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Za(e){return yl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pn(){}var qo=null;function Jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Re=null;function Cn(e){var n=Ua(e);if(n&&(e=n.stateNode)){var o=e[Ht]||null;e:switch(e=n.stateNode,n.type){case"input":if(gl(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ht(""+n)+'"][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==e&&c.form===e.form){var f=c[Ht]||null;if(!f)throw Error(s(90));gl(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<o.length;n++)c=o[n],c.form===e.form&&vt(c)}break e;case"textarea":ji(e,o.value,o.defaultValue);break e;case"select":n=o.value,n!=null&&ut(e,!!o.multiple,n,!1)}}}var it=!1;function bl(e,n,o){if(it)return e(n,o);it=!0;try{var c=e(n);return c}finally{if(it=!1,(qa!==null||Re!==null)&&(bd(),qa&&(n=qa,e=Re,Re=qa=null,Cn(n),e)))for(n=0;n<e.length;n++)Cn(e[n])}}function ta(e,n){var o=e.stateNode;if(o===null)return null;var c=o[Ht]||null;if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(s(231,n,typeof o));return o}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=!1;if(An)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Qr=!1}var Un=null,na=null,xt=null;function Oi(){if(xt)return xt;var e,n=na,o=n.length,c,f="value"in Un?Un.value:Un.textContent,g=f.length;for(e=0;e<o&&n[e]===f[e];e++);var S=o-e;for(c=1;c<=S&&n[o-c]===f[g-c];c++);return xt=f.slice(e,1<c?1-c:void 0)}function eo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Eu(){return!1}function Wt(e){function n(o,c,f,g,S){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?to:Eu,this.isPropagationStopped=Eu,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),n}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Wt(ai),Ga=E({},ai,{view:0,detail:0}),qe=Wt(Ga),_l,ln,ri,no=E({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(_l=e.screenX-ri.screenX,ln=e.screenY-ri.screenY):ln=_l=0,ri=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),Tu=Wt(no),xl=E({},no,{dataTransfer:0}),ch=Wt(xl),Cu=E({},Ga,{relatedTarget:0}),wl=Wt(Cu),uh=E({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Sl=Wt(uh),dh=E({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fn=Wt(dh),fh=E({},ai,{data:0}),El=Wt(fh),zi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ku[e])?!!n[e]:!1}function Cl(){return Tl}var ju=E({},Ga,{key:function(e){if(e.key){var n=zi[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Au[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ou=Wt(ju),hh=E({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zu=Wt(hh),Al=E({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),mh=Wt(Al),Lu=E({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ru=Wt(Lu),Yo=E({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ia=Wt(Yo),ph=E({},ai,{newState:0,oldState:0}),io=Wt(ph),gn=[9,13,27,32],Ko=An&&"CompositionEvent"in window,Ya=null;An&&"documentMode"in document&&(Ya=document.documentMode);var gh=An&&"TextEvent"in window&&!Ya,Wo=An&&(!Ko||Ya&&8<Ya&&11>=Ya),Xo=" ",Mu=!1;function Iu(e,n){switch(e){case"keyup":return gn.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function jn(e,n){switch(e){case"compositionend":return kl(n);case"keypress":return n.which!==32?null:(Mu=!0,Xo);case"textInput":return e=n.data,e===Xo&&Mu?null:e;default:return null}}function Wa(e,n){if(Ka)return e==="compositionend"||!Ko&&Iu(e,n)?(e=Oi(),xt=na=Un=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wo&&n.locale!=="ko"?null:n.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vh[e.type]:n==="textarea"}function Pu(e,n,o,c){qa?Re?Re.push(c):Re=[c]:qa=c,n=Cd(n,"onChange"),0<n.length&&(o=new Go("onChange","change",null,o,c),e.push({event:o,listeners:n}))}var $n=null,ao=null;function ro(e){db(e,0)}function oo(e){var n=Ai(e);if(vt(n))return e}function so(e,n){if(e==="change")return n}var Nu=!1;if(An){var Vn;if(An){var Xa="oninput"in document;if(!Xa){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Xa=typeof Du.oninput=="function"}Vn=Xa}else Vn=!1;Nu=Vn&&(!document.documentMode||9<document.documentMode)}function Jo(){$n&&($n.detachEvent("onpropertychange",Bu),ao=$n=null)}function Bu(e){if(e.propertyName==="value"&&oo(ao)){var n=[];Pu(n,ao,e,Jr(e)),bl(ro,n)}}function oi(e,n,o){e==="focusin"?(Jo(),$n=n,ao=o,$n.attachEvent("onpropertychange",Bu)):e==="focusout"&&Jo()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(ao)}function Ja(e,n){if(e==="click")return oo(n)}function bh(e,n){if(e==="input"||e==="change")return oo(n)}function si(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $t=typeof Object.is=="function"?Object.is:si;function Qa(e,n){if($t(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Da.call(n,f)||!$t(e[f],n[f]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,n){var o=Qo(e);e=0;for(var c;o;){if(o.nodeType===3){if(c=e+o.textContent.length,e<=n&&c>=n)return{node:o,offset:n-e};e=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qo(o)}}function es(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?es(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function co(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ha(e.document);n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Ha(e.document)}return n}function Li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ts=An&&"documentMode"in document&&11>=document.documentMode,Ri=null,ns=null,uo=null,er=!1;function Uu(e,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;er||Ri==null||Ri!==Ha(c)||(c=Ri,"selectionStart"in c&&Li(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),uo&&Qa(uo,c)||(uo=c,c=Cd(ns,"onSelect"),0<c.length&&(n=new Go("onSelect","select",null,n,o),e.push({event:n,listeners:c}),n.target=Ri)))}function Mi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var tr={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionrun:Mi("Transition","TransitionRun"),transitionstart:Mi("Transition","TransitionStart"),transitioncancel:Mi("Transition","TransitionCancel"),transitionend:Mi("Transition","TransitionEnd")},is={},Fu={};An&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Vt(e){if(is[e])return is[e];if(!tr[e])return e;var n=tr[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Fu)return is[e]=n[o];return e}var fo=Vt("animationend"),Hu=Vt("animationiteration"),ho=Vt("animationstart"),_h=Vt("transitionrun"),$u=Vt("transitionstart"),xh=Vt("transitioncancel"),nr=Vt("transitionend"),Vu=new Map,Ii="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ii.push("scrollEnd");function vn(e,n){Vu.set(e,n),Qi(n,[e])}var mo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yn=[],nn=0,as=0;function po(){for(var e=nn,n=as=nn=0;n<e;){var o=yn[n];yn[n++]=null;var c=yn[n];yn[n++]=null;var f=yn[n];yn[n++]=null;var g=yn[n];if(yn[n++]=null,c!==null&&f!==null){var S=c.pending;S===null?f.next=f:(f.next=S.next,S.next=f),c.pending=f}g!==0&&ir(o,f,g)}}function Pi(e,n,o,c){yn[nn++]=e,yn[nn++]=n,yn[nn++]=o,yn[nn++]=c,as|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function jl(e,n,o,c){return Pi(e,n,o,c),go(e)}function Zn(e,n){return Pi(e,null,null,n),go(e)}function ir(e,n,o){e.lanes|=o;var c=e.alternate;c!==null&&(c.lanes|=o);for(var f=!1,g=e.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(e=g.stateNode,e===null||e._visibility&1||(f=!0)),e=g,g=g.return;return e.tag===3?(g=e.stateNode,f&&n!==null&&(f=31-sn(o),e=g.hiddenUpdates,c=e[f],c===null?e[f]=[n]:c.push(n),n.lane=o|536870912),g):null}function go(e){if(50<ec)throw ec=0,Sm=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var aa={};function wh(e,n,o,c){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,o,c){return new wh(e,n,o,c)}function rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qn(e,n){var o=e.alternate;return o===null?(o=an(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Ol(e,n){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,n=o.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vo(e,n,o,c,f,g){var S=0;if(c=e,typeof e=="function")rs(e)&&(S=1);else if(typeof e=="string")S=VC(e,o,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=an(31,o,n,f),e.elementType=Ce,e.lanes=g,e;case P:return ra(o.children,f,g,n);case H:S=8,f|=24;break;case B:return e=an(12,o,n,f|2),e.elementType=B,e.lanes=g,e;case J:return e=an(13,o,n,f),e.elementType=J,e.lanes=g,e;case se:return e=an(19,o,n,f),e.elementType=se,e.lanes=g,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:S=10;break e;case $:S=9;break e;case ue:S=11;break e;case Q:S=14;break e;case he:S=16,c=null;break e}S=29,o=Error(s(130,e===null?"null":typeof e,"")),c=null}return n=an(S,o,n,f),n.elementType=e,n.type=c,n.lanes=g,n}function ra(e,n,o,c){return e=an(7,e,c,n),e.lanes=o,e}function os(e,n,o){return e=an(6,e,null,n),e.lanes=o,e}function zl(e){var n=an(18,null,null,0);return n.stateNode=e,n}function Ll(e,n,o){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var a=new WeakMap;function l(e,n){if(typeof e=="object"&&e!==null){var o=a.get(e);return o!==void 0?o:(n={value:e,source:n,stack:Ti(n)},a.set(e,n),n)}return{value:e,source:n,stack:Ti(n)}}var d=[],v=0,w=null,C=0,R=[],F=0,q=null,te=1,me="";function Se(e,n){d[v++]=C,d[v++]=w,w=e,C=n}function De(e,n,o){R[F++]=te,R[F++]=me,R[F++]=q,q=e;var c=te;e=me;var f=32-sn(c)-1;c&=~(1<<f),o+=1;var g=32-sn(n)+f;if(30<g){var S=f-f%5;g=(c&(1<<S)-1).toString(32),c>>=S,f-=S,te=1<<32-sn(n)+f|o<<f|c,me=g+e}else te=1<<g|o<<f|c,me=e}function Dt(e){e.return!==null&&(Se(e,1),De(e,1,0))}function wt(e){for(;e===w;)w=d[--v],d[v]=null,C=d[--v],d[v]=null;for(;e===q;)q=R[--F],R[F]=null,me=R[--F],R[F]=null,te=R[--F],R[F]=null}function cn(e,n){R[F++]=te,R[F++]=me,R[F++]=q,te=n.id,me=n.overflow,q=e}var Ke=null,We=null,$e=!1,Ni=null,bn=!1,ss=Error(s(519));function Di(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(l(n,e)),ss}function Rl(e){var n=e.stateNode,o=e.type,c=e.memoizedProps;switch(n[jt]=e,n[Ht]=c,o){case"dialog":Ze("cancel",n),Ze("close",n);break;case"iframe":case"object":case"embed":Ze("load",n);break;case"video":case"audio":for(o=0;o<nc.length;o++)Ze(nc[o],n);break;case"source":Ze("error",n);break;case"img":case"image":case"link":Ze("error",n),Ze("load",n);break;case"details":Ze("toggle",n);break;case"input":Ze("invalid",n),Wr(n,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ze("invalid",n);break;case"textarea":Ze("invalid",n),$a(n,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||n.textContent===""+o||c.suppressHydrationWarning===!0||pb(n.textContent,o)?(c.popover!=null&&(Ze("beforetoggle",n),Ze("toggle",n)),c.onScroll!=null&&Ze("scroll",n),c.onScrollEnd!=null&&Ze("scrollend",n),c.onClick!=null&&(n.onclick=pn),n=!0):n=!1,n||Di(e,!0)}function _t(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:bn=!1;return;case 27:case 3:bn=!0;return;default:Ke=Ke.return}}function li(e){if(e!==Ke)return!1;if(!$e)return _t(e),$e=!0,!1;var n=e.tag,o;if((o=n!==3&&n!==27)&&((o=n===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||Dm(e.type,e.memoizedProps)),o=!o),o&&We&&Di(e),_t(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Eb(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Eb(e)}else n===27?(n=We,vr(e.type)?(e=$m,$m=null,We=e):We=n):We=Ke?Yn(e.stateNode.nextSibling):null;return!0}function oa(){We=Ke=null,$e=!1}function Ml(){var e=Ni;return e!==null&&(Sn===null?Sn=e:Sn.push.apply(Sn,e),Ni=null),e}function yo(e){Ni===null?Ni=[e]:Ni.push(e)}var bo=O(null),Bi=null,ci=null;function ar(e,n,o){ie(bo,n._currentValue),n._currentValue=o}function sa(e){e._currentValue=bo.current,Y(bo)}function Sh(e,n,o){for(;e!==null;){var c=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),e===o)break;e=e.return}}function Eh(e,n,o,c){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var g=f.dependencies;if(g!==null){var S=f.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=f;for(var I=0;I<n.length;I++)if(A.context===n[I]){g.lanes|=o,A=g.alternate,A!==null&&(A.lanes|=o),Sh(g.return,o,e),c||(S=null);break e}g=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=o,g=S.alternate,g!==null&&(g.lanes|=o),Sh(S,o,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function ls(e,n,o,c){e=null;for(var f=n,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=f.type;$t(f.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(f===Le.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(sc):e=[sc])}f=f.return}e!==null&&Eh(n,e,o,c),n.flags|=262144}function Zu(e){for(e=e.firstContext;e!==null;){if(!$t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _o(e){Bi=e,ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xt(e){return ev(Bi,e)}function qu(e,n){return Bi===null&&_o(e),ev(e,n)}function ev(e,n){var o=n._currentValue;if(n={context:n,memoizedValue:o,next:null},ci===null){if(e===null)throw Error(s(308));ci=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ci=ci.next=n;return o}var UT=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(o,c){e.push(c)}};this.abort=function(){n.aborted=!0,e.forEach(function(o){return o()})}},FT=t.unstable_scheduleCallback,HT=t.unstable_NormalPriority,zt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Th(){return{controller:new UT,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&FT(HT,function(){e.controller.abort()})}var Pl=null,Ch=0,cs=0,us=null;function $T(e,n){if(Pl===null){var o=Pl=[];Ch=0,cs=jm(),us={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Ch++,n.then(tv,tv),n}function tv(){if(--Ch===0&&Pl!==null){us!==null&&(us.status="fulfilled");var e=Pl;Pl=null,cs=0,us=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function VT(e,n){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){c.status="fulfilled",c.value=n;for(var f=0;f<o.length;f++)(0,o[f])(n)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var nv=D.S;D.S=function(e,n){By=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$T(e,n),nv!==null&&nv(e,n)};var xo=O(null);function Ah(){var e=xo.current;return e!==null?e:dt.pooledCache}function Gu(e,n){n===null?ie(xo,xo.current):ie(xo,n.pool)}function iv(){var e=Ah();return e===null?null:{parent:zt._currentValue,pool:e}}var ds=Error(s(460)),kh=Error(s(474)),Yu=Error(s(542)),Ku={then:function(){}};function av(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rv(e,n,o){switch(o=e[o],o===void 0?e.push(n):o!==n&&(n.then(pn,pn),n=o),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sv(e),e;default:if(typeof n.status=="string")n.then(pn,pn);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(c){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=c}},function(c){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=c}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sv(e),e}throw So=n,ds}}function wo(e){try{var n=e._init;return n(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(So=o,ds):o}}var So=null;function ov(){if(So===null)throw Error(s(459));var e=So;return So=null,e}function sv(e){if(e===ds||e===Yu)throw Error(s(483))}var fs=null,Nl=0;function Wu(e){var n=Nl;return Nl+=1,fs===null&&(fs=[]),rv(fs,e,n)}function Dl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xu(e,n){throw n.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lv(e){function n(U,N){if(e){var V=U.deletions;V===null?(U.deletions=[N],U.flags|=16):V.push(N)}}function o(U,N){if(!e)return null;for(;N!==null;)n(U,N),N=N.sibling;return null}function c(U){for(var N=new Map;U!==null;)U.key!==null?N.set(U.key,U):N.set(U.index,U),U=U.sibling;return N}function f(U,N){return U=qn(U,N),U.index=0,U.sibling=null,U}function g(U,N,V){return U.index=V,e?(V=U.alternate,V!==null?(V=V.index,V<N?(U.flags|=67108866,N):V):(U.flags|=67108866,N)):(U.flags|=1048576,N)}function S(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function A(U,N,V,ee){return N===null||N.tag!==6?(N=os(V,U.mode,ee),N.return=U,N):(N=f(N,V),N.return=U,N)}function I(U,N,V,ee){var Ee=V.type;return Ee===P?X(U,N,V.props.children,ee,V.key):N!==null&&(N.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===he&&wo(Ee)===N.type)?(N=f(N,V.props),Dl(N,V),N.return=U,N):(N=vo(V.type,V.key,V.props,null,U.mode,ee),Dl(N,V),N.return=U,N)}function Z(U,N,V,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==V.containerInfo||N.stateNode.implementation!==V.implementation?(N=Ll(V,U.mode,ee),N.return=U,N):(N=f(N,V.children||[]),N.return=U,N)}function X(U,N,V,ee,Ee){return N===null||N.tag!==7?(N=ra(V,U.mode,ee,Ee),N.return=U,N):(N=f(N,V),N.return=U,N)}function ne(U,N,V){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=os(""+N,U.mode,V),N.return=U,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case M:return V=vo(N.type,N.key,N.props,null,U.mode,V),Dl(V,N),V.return=U,V;case z:return N=Ll(N,U.mode,V),N.return=U,N;case he:return N=wo(N),ne(U,N,V)}if(je(N)||ke(N))return N=ra(N,U.mode,V,null),N.return=U,N;if(typeof N.then=="function")return ne(U,Wu(N),V);if(N.$$typeof===W)return ne(U,qu(U,N),V);Xu(U,N)}return null}function G(U,N,V,ee){var Ee=N!==null?N.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Ee!==null?null:A(U,N,""+V,ee);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return V.key===Ee?I(U,N,V,ee):null;case z:return V.key===Ee?Z(U,N,V,ee):null;case he:return V=wo(V),G(U,N,V,ee)}if(je(V)||ke(V))return Ee!==null?null:X(U,N,V,ee,null);if(typeof V.then=="function")return G(U,N,Wu(V),ee);if(V.$$typeof===W)return G(U,N,qu(U,V),ee);Xu(U,V)}return null}function K(U,N,V,ee,Ee){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return U=U.get(V)||null,A(N,U,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return U=U.get(ee.key===null?V:ee.key)||null,I(N,U,ee,Ee);case z:return U=U.get(ee.key===null?V:ee.key)||null,Z(N,U,ee,Ee);case he:return ee=wo(ee),K(U,N,V,ee,Ee)}if(je(ee)||ke(ee))return U=U.get(V)||null,X(N,U,ee,Ee,null);if(typeof ee.then=="function")return K(U,N,V,Wu(ee),Ee);if(ee.$$typeof===W)return K(U,N,V,qu(N,ee),Ee);Xu(N,ee)}return null}function be(U,N,V,ee){for(var Ee=null,Xe=null,_e=N,Be=N=0,Ye=null;_e!==null&&Be<V.length;Be++){_e.index>Be?(Ye=_e,_e=null):Ye=_e.sibling;var Je=G(U,_e,V[Be],ee);if(Je===null){_e===null&&(_e=Ye);break}e&&_e&&Je.alternate===null&&n(U,_e),N=g(Je,N,Be),Xe===null?Ee=Je:Xe.sibling=Je,Xe=Je,_e=Ye}if(Be===V.length)return o(U,_e),$e&&Se(U,Be),Ee;if(_e===null){for(;Be<V.length;Be++)_e=ne(U,V[Be],ee),_e!==null&&(N=g(_e,N,Be),Xe===null?Ee=_e:Xe.sibling=_e,Xe=_e);return $e&&Se(U,Be),Ee}for(_e=c(_e);Be<V.length;Be++)Ye=K(_e,U,Be,V[Be],ee),Ye!==null&&(e&&Ye.alternate!==null&&_e.delete(Ye.key===null?Be:Ye.key),N=g(Ye,N,Be),Xe===null?Ee=Ye:Xe.sibling=Ye,Xe=Ye);return e&&_e.forEach(function(wr){return n(U,wr)}),$e&&Se(U,Be),Ee}function Oe(U,N,V,ee){if(V==null)throw Error(s(151));for(var Ee=null,Xe=null,_e=N,Be=N=0,Ye=null,Je=V.next();_e!==null&&!Je.done;Be++,Je=V.next()){_e.index>Be?(Ye=_e,_e=null):Ye=_e.sibling;var wr=G(U,_e,Je.value,ee);if(wr===null){_e===null&&(_e=Ye);break}e&&_e&&wr.alternate===null&&n(U,_e),N=g(wr,N,Be),Xe===null?Ee=wr:Xe.sibling=wr,Xe=wr,_e=Ye}if(Je.done)return o(U,_e),$e&&Se(U,Be),Ee;if(_e===null){for(;!Je.done;Be++,Je=V.next())Je=ne(U,Je.value,ee),Je!==null&&(N=g(Je,N,Be),Xe===null?Ee=Je:Xe.sibling=Je,Xe=Je);return $e&&Se(U,Be),Ee}for(_e=c(_e);!Je.done;Be++,Je=V.next())Je=K(_e,U,Be,Je.value,ee),Je!==null&&(e&&Je.alternate!==null&&_e.delete(Je.key===null?Be:Je.key),N=g(Je,N,Be),Xe===null?Ee=Je:Xe.sibling=Je,Xe=Je);return e&&_e.forEach(function(tA){return n(U,tA)}),$e&&Se(U,Be),Ee}function ct(U,N,V,ee){if(typeof V=="object"&&V!==null&&V.type===P&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case M:e:{for(var Ee=V.key;N!==null;){if(N.key===Ee){if(Ee=V.type,Ee===P){if(N.tag===7){o(U,N.sibling),ee=f(N,V.props.children),ee.return=U,U=ee;break e}}else if(N.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===he&&wo(Ee)===N.type){o(U,N.sibling),ee=f(N,V.props),Dl(ee,V),ee.return=U,U=ee;break e}o(U,N);break}else n(U,N);N=N.sibling}V.type===P?(ee=ra(V.props.children,U.mode,ee,V.key),ee.return=U,U=ee):(ee=vo(V.type,V.key,V.props,null,U.mode,ee),Dl(ee,V),ee.return=U,U=ee)}return S(U);case z:e:{for(Ee=V.key;N!==null;){if(N.key===Ee)if(N.tag===4&&N.stateNode.containerInfo===V.containerInfo&&N.stateNode.implementation===V.implementation){o(U,N.sibling),ee=f(N,V.children||[]),ee.return=U,U=ee;break e}else{o(U,N);break}else n(U,N);N=N.sibling}ee=Ll(V,U.mode,ee),ee.return=U,U=ee}return S(U);case he:return V=wo(V),ct(U,N,V,ee)}if(je(V))return be(U,N,V,ee);if(ke(V)){if(Ee=ke(V),typeof Ee!="function")throw Error(s(150));return V=Ee.call(V),Oe(U,N,V,ee)}if(typeof V.then=="function")return ct(U,N,Wu(V),ee);if(V.$$typeof===W)return ct(U,N,qu(U,V),ee);Xu(U,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,N!==null&&N.tag===6?(o(U,N.sibling),ee=f(N,V),ee.return=U,U=ee):(o(U,N),ee=os(V,U.mode,ee),ee.return=U,U=ee),S(U)):o(U,N)}return function(U,N,V,ee){try{Nl=0;var Ee=ct(U,N,V,ee);return fs=null,Ee}catch(_e){if(_e===ds||_e===Yu)throw _e;var Xe=an(29,_e,null,U.mode);return Xe.lanes=ee,Xe.return=U,Xe}}}var Eo=lv(!0),cv=lv(!1),rr=!1;function jh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,n,o){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(et&2)!==0){var f=c.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),c.pending=n,n=go(e),ir(e,null,o),n}return Pi(e,c,n,o),go(e)}function Bl(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194048)!==0)){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,yu(e,o)}}function zh(e,n){var o=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=S:g=g.next=S,o=o.next}while(o!==null);g===null?f=g=n:g=g.next=n}else f=g=n;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}var Lh=!1;function Ul(){if(Lh){var e=us;if(e!==null)throw e}}function Fl(e,n,o,c){Lh=!1;var f=e.updateQueue;rr=!1;var g=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,Z=I.next;I.next=null,S===null?g=Z:S.next=Z,S=I;var X=e.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==S&&(A===null?X.firstBaseUpdate=Z:A.next=Z,X.lastBaseUpdate=I))}if(g!==null){var ne=f.baseState;S=0,X=Z=I=null,A=g;do{var G=A.lane&-536870913,K=G!==A.lane;if(K?(Ge&G)===G:(c&G)===G){G!==0&&G===cs&&(Lh=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var be=e,Oe=A;G=n;var ct=o;switch(Oe.tag){case 1:if(be=Oe.payload,typeof be=="function"){ne=be.call(ct,ne,G);break e}ne=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Oe.payload,G=typeof be=="function"?be.call(ct,ne,G):be,G==null)break e;ne=E({},ne,G);break e;case 2:rr=!0}}G=A.callback,G!==null&&(e.flags|=64,K&&(e.flags|=8192),K=f.callbacks,K===null?f.callbacks=[G]:K.push(G))}else K={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(Z=X=K,I=ne):X=X.next=K,S|=G;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;K=A,A=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);X===null&&(I=ne),f.baseState=I,f.firstBaseUpdate=Z,f.lastBaseUpdate=X,g===null&&(f.shared.lanes=0),fr|=S,e.lanes=S,e.memoizedState=ne}}function uv(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function dv(e,n){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)uv(o[e],n)}var hs=O(null),Ju=O(0);function fv(e,n){e=ga,ie(Ju,e),ie(hs,n),ga=e|n.baseLanes}function Rh(){ie(Ju,ga),ie(hs,hs.current)}function Mh(){ga=Ju.current,Y(hs),Y(Ju)}var On=O(null),Gn=null;function lr(e){var n=e.alternate;ie(Ct,Ct.current&1),ie(On,e),Gn===null&&(n===null||hs.current!==null||n.memoizedState!==null)&&(Gn=e)}function Ih(e){ie(Ct,Ct.current),ie(On,e),Gn===null&&(Gn=e)}function hv(e){e.tag===22?(ie(Ct,Ct.current),ie(On,e),Gn===null&&(Gn=e)):cr()}function cr(){ie(Ct,Ct.current),ie(On,On.current)}function zn(e){Y(On),Gn===e&&(Gn=null),Y(Ct)}var Ct=O(0);function Qu(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Fm(o)||Hm(o)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,Ne=null,st=null,Lt=null,ed=!1,ms=!1,To=!1,td=0,Hl=0,ps=null,ZT=0;function St(){throw Error(s(321))}function Ph(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!$t(e[o],n[o]))return!1;return!0}function Nh(e,n,o,c,f,g){return la=g,Ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Wv:Jh,To=!1,g=o(c,f),To=!1,ms&&(g=pv(n,o,c,f)),mv(e),g}function mv(e){D.H=Zl;var n=st!==null&&st.next!==null;if(la=0,Lt=st=Ne=null,ed=!1,Hl=0,ps=null,n)throw Error(s(300));e===null||Rt||(e=e.dependencies,e!==null&&Zu(e)&&(Rt=!0))}function pv(e,n,o,c){Ne=e;var f=0;do{if(ms&&(ps=null),Hl=0,ms=!1,25<=f)throw Error(s(301));if(f+=1,Lt=st=null,e.updateQueue!=null){var g=e.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}D.H=Xv,g=n(o,c)}while(ms);return g}function qT(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?$l(n):n,e=e.useState()[0],(st!==null?st.memoizedState:null)!==e&&(Ne.flags|=1024),n}function Dh(){var e=td!==0;return td=0,e}function Bh(e,n,o){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o}function Uh(e){if(ed){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ed=!1}la=0,Lt=st=Ne=null,ms=!1,Hl=td=0,ps=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Ne.memoizedState=Lt=e:Lt=Lt.next=e,Lt}function At(){if(st===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var n=Lt===null?Ne.memoizedState:Lt.next;if(n!==null)Lt=n,st=e;else{if(e===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Lt===null?Ne.memoizedState=Lt=e:Lt=Lt.next=e}return Lt}function nd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $l(e){var n=Hl;return Hl+=1,ps===null&&(ps=[]),e=rv(ps,e,n),n=Ne,(Lt===null?n.memoizedState:Lt.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Wv:Jh),e}function id(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $l(e);if(e.$$typeof===W)return Xt(e)}throw Error(s(438,String(e)))}function Fh(e){var n=null,o=Ne.updateQueue;if(o!==null&&(n=o.memoCache),n==null){var c=Ne.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(n={data:c.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),o===null&&(o=nd(),Ne.updateQueue=o),o.memoCache=n,o=n.data[n.index],o===void 0)for(o=n.data[n.index]=Array(e),c=0;c<e;c++)o[c]=Ue;return n.index++,o}function ca(e,n){return typeof n=="function"?n(e):n}function ad(e){var n=At();return Hh(n,st,e)}function Hh(e,n,o){var c=e.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var f=e.baseQueue,g=c.pending;if(g!==null){if(f!==null){var S=f.next;f.next=g.next,g.next=S}n.baseQueue=f=g,c.pending=null}if(g=e.baseState,f===null)e.memoizedState=g;else{n=f.next;var A=S=null,I=null,Z=n,X=!1;do{var ne=Z.lane&-536870913;if(ne!==Z.lane?(Ge&ne)===ne:(la&ne)===ne){var G=Z.revertLane;if(G===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ne===cs&&(X=!0);else if((la&G)===G){Z=Z.next,G===cs&&(X=!0);continue}else ne={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(A=I=ne,S=g):I=I.next=ne,Ne.lanes|=G,fr|=G;ne=Z.action,To&&o(g,ne),g=Z.hasEagerState?Z.eagerState:o(g,ne)}else G={lane:ne,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(A=I=G,S=g):I=I.next=G,Ne.lanes|=ne,fr|=ne;Z=Z.next}while(Z!==null&&Z!==n);if(I===null?S=g:I.next=A,!$t(g,e.memoizedState)&&(Rt=!0,X&&(o=us,o!==null)))throw o;e.memoizedState=g,e.baseState=S,e.baseQueue=I,c.lastRenderedState=g}return f===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function $h(e){var n=At(),o=n.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var c=o.dispatch,f=o.pending,g=n.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do g=e(g,S.action),S=S.next;while(S!==f);$t(g,n.memoizedState)||(Rt=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),o.lastRenderedState=g}return[g,c]}function gv(e,n,o){var c=Ne,f=At(),g=$e;if(g){if(o===void 0)throw Error(s(407));o=o()}else o=n();var S=!$t((st||f).memoizedState,o);if(S&&(f.memoizedState=o,Rt=!0),f=f.queue,qh(bv.bind(null,c,f,e),[e]),f.getSnapshot!==n||S||Lt!==null&&Lt.memoizedState.tag&1){if(c.flags|=2048,gs(9,{destroy:void 0},yv.bind(null,c,f,o,n),null),dt===null)throw Error(s(349));g||(la&127)!==0||vv(c,n,o)}return o}function vv(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=Ne.updateQueue,n===null?(n=nd(),Ne.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function yv(e,n,o,c){n.value=o,n.getSnapshot=c,_v(n)&&xv(e)}function bv(e,n,o){return o(function(){_v(n)&&xv(e)})}function _v(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!$t(e,o)}catch{return!0}}function xv(e){var n=Zn(e,2);n!==null&&En(n,e,2)}function Vh(e){var n=un();if(typeof e=="function"){var o=e;if(e=o(),To){ti(!0);try{o()}finally{ti(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function wv(e,n,o,c){return e.baseState=o,Hh(e,st,typeof c=="function"?c:ca)}function GT(e,n,o,c,f){if(sd(e))throw Error(s(485));if(e=n.action,e!==null){var g={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){g.listeners.push(S)}};D.T!==null?o(!0):g.isTransition=!1,c(g),o=n.pending,o===null?(g.next=n.pending=g,Sv(n,g)):(g.next=o.next,n.pending=o.next=g)}}function Sv(e,n){var o=n.action,c=n.payload,f=e.state;if(n.isTransition){var g=D.T,S={};D.T=S;try{var A=o(f,c),I=D.S;I!==null&&I(S,A),Ev(e,n,A)}catch(Z){Zh(e,n,Z)}finally{g!==null&&S.types!==null&&(g.types=S.types),D.T=g}}else try{g=o(f,c),Ev(e,n,g)}catch(Z){Zh(e,n,Z)}}function Ev(e,n,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Tv(e,n,c)},function(c){return Zh(e,n,c)}):Tv(e,n,o)}function Tv(e,n,o){n.status="fulfilled",n.value=o,Cv(n),e.state=o,n=e.pending,n!==null&&(o=n.next,o===n?e.pending=null:(o=o.next,n.next=o,Sv(e,o)))}function Zh(e,n,o){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do n.status="rejected",n.reason=o,Cv(n),n=n.next;while(n!==c)}e.action=null}function Cv(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Av(e,n){return n}function kv(e,n){if($e){var o=dt.formState;if(o!==null){e:{var c=Ne;if($e){if(We){t:{for(var f=We,g=bn;f.nodeType!==8;){if(!g){f=null;break t}if(f=Yn(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){We=Yn(f.nextSibling),c=f.data==="F!";break e}}Di(c)}c=!1}c&&(n=o[0])}}return o=un(),o.memoizedState=o.baseState=n,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Av,lastRenderedState:n},o.queue=c,o=Gv.bind(null,Ne,c),c.dispatch=o,c=Vh(!1),g=Xh.bind(null,Ne,!1,c.queue),c=un(),f={state:n,dispatch:null,action:e,pending:null},c.queue=f,o=GT.bind(null,Ne,f,g,o),f.dispatch=o,c.memoizedState=e,[n,o,!1]}function jv(e){var n=At();return Ov(n,st,e)}function Ov(e,n,o){if(n=Hh(e,n,Av)[0],e=ad(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var c=$l(n)}catch(S){throw S===ds?Yu:S}else c=n;n=At();var f=n.queue,g=f.dispatch;return o!==n.memoizedState&&(Ne.flags|=2048,gs(9,{destroy:void 0},YT.bind(null,f,o),null)),[c,g,e]}function YT(e,n){e.action=n}function zv(e){var n=At(),o=st;if(o!==null)return Ov(n,o,e);At(),n=n.memoizedState,o=At();var c=o.queue.dispatch;return o.memoizedState=e,[n,c,!1]}function gs(e,n,o,c){return e={tag:e,create:o,deps:c,inst:n,next:null},n=Ne.updateQueue,n===null&&(n=nd(),Ne.updateQueue=n),o=n.lastEffect,o===null?n.lastEffect=e.next=e:(c=o.next,o.next=e,e.next=c,n.lastEffect=e),e}function Lv(){return At().memoizedState}function rd(e,n,o,c){var f=un();Ne.flags|=e,f.memoizedState=gs(1|n,{destroy:void 0},o,c===void 0?null:c)}function od(e,n,o,c){var f=At();c=c===void 0?null:c;var g=f.memoizedState.inst;st!==null&&c!==null&&Ph(c,st.memoizedState.deps)?f.memoizedState=gs(n,g,o,c):(Ne.flags|=e,f.memoizedState=gs(1|n,g,o,c))}function Rv(e,n){rd(8390656,8,e,n)}function qh(e,n){od(2048,8,e,n)}function KT(e){Ne.flags|=4;var n=Ne.updateQueue;if(n===null)n=nd(),Ne.updateQueue=n,n.events=[e];else{var o=n.events;o===null?n.events=[e]:o.push(e)}}function Mv(e){var n=At().memoizedState;return KT({ref:n,nextImpl:e}),function(){if((et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Iv(e,n){return od(4,2,e,n)}function Pv(e,n){return od(4,4,e,n)}function Nv(e,n){if(typeof n=="function"){e=e();var o=n(e);return function(){typeof o=="function"?o():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dv(e,n,o){o=o!=null?o.concat([e]):null,od(4,4,Nv.bind(null,n,e),o)}function Gh(){}function Bv(e,n){var o=At();n=n===void 0?null:n;var c=o.memoizedState;return n!==null&&Ph(n,c[1])?c[0]:(o.memoizedState=[e,n],e)}function Uv(e,n){var o=At();n=n===void 0?null:n;var c=o.memoizedState;if(n!==null&&Ph(n,c[1]))return c[0];if(c=e(),To){ti(!0);try{e()}finally{ti(!1)}}return o.memoizedState=[c,n],c}function Yh(e,n,o){return o===void 0||(la&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=n:(e.memoizedState=o,e=Fy(),Ne.lanes|=e,fr|=e,o)}function Fv(e,n,o,c){return $t(o,n)?o:hs.current!==null?(e=Yh(e,o,c),$t(e,n)||(Rt=!0),e):(la&42)===0||(la&1073741824)!==0&&(Ge&261930)===0?(Rt=!0,e.memoizedState=o):(e=Fy(),Ne.lanes|=e,fr|=e,n)}function Hv(e,n,o,c,f){var g=le.p;le.p=g!==0&&8>g?g:8;var S=D.T,A={};D.T=A,Xh(e,!1,n,o);try{var I=f(),Z=D.S;if(Z!==null&&Z(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=VT(I,c);Vl(e,n,X,Mn(e))}else Vl(e,n,c,Mn(e))}catch(ne){Vl(e,n,{then:function(){},status:"rejected",reason:ne},Mn())}finally{le.p=g,S!==null&&A.types!==null&&(S.types=A.types),D.T=S}}function WT(){}function Kh(e,n,o,c){if(e.tag!==5)throw Error(s(476));var f=$v(e).queue;Hv(e,f,n,re,o===null?WT:function(){return Vv(e),o(c)})}function $v(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:re},next:null};var o={};return n.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:o},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vv(e){var n=$v(e);n.next===null&&(n=e.alternate.memoizedState),Vl(e,n.next.queue,{},Mn())}function Wh(){return Xt(sc)}function Zv(){return At().memoizedState}function qv(){return At().memoizedState}function XT(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var o=Mn();e=or(o);var c=sr(n,e,o);c!==null&&(En(c,n,o),Bl(c,n,o)),n={cache:Th()},e.payload=n;return}n=n.return}}function JT(e,n,o){var c=Mn();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sd(e)?Yv(n,o):(o=jl(e,n,o,c),o!==null&&(En(o,e,c),Kv(o,n,c)))}function Gv(e,n,o){var c=Mn();Vl(e,n,o,c)}function Vl(e,n,o,c){var f={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(sd(e))Yv(n,f);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var S=n.lastRenderedState,A=g(S,o);if(f.hasEagerState=!0,f.eagerState=A,$t(A,S))return Pi(e,n,f,0),dt===null&&po(),!1}catch{}if(o=jl(e,n,f,c),o!==null)return En(o,e,c),Kv(o,n,c),!0}return!1}function Xh(e,n,o,c){if(c={lane:2,revertLane:jm(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},sd(e)){if(n)throw Error(s(479))}else n=jl(e,o,c,2),n!==null&&En(n,e,2)}function sd(e){var n=e.alternate;return e===Ne||n!==null&&n===Ne}function Yv(e,n){ms=ed=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Kv(e,n,o){if((o&4194048)!==0){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,yu(e,o)}}var Zl={readContext:Xt,use:id,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};Zl.useEffectEvent=St;var Wv={readContext:Xt,use:id,useCallback:function(e,n){return un().memoizedState=[e,n===void 0?null:n],e},useContext:Xt,useEffect:Rv,useImperativeHandle:function(e,n,o){o=o!=null?o.concat([e]):null,rd(4194308,4,Nv.bind(null,n,e),o)},useLayoutEffect:function(e,n){return rd(4194308,4,e,n)},useInsertionEffect:function(e,n){rd(4,2,e,n)},useMemo:function(e,n){var o=un();n=n===void 0?null:n;var c=e();if(To){ti(!0);try{e()}finally{ti(!1)}}return o.memoizedState=[c,n],c},useReducer:function(e,n,o){var c=un();if(o!==void 0){var f=o(n);if(To){ti(!0);try{o(n)}finally{ti(!1)}}}else f=n;return c.memoizedState=c.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},c.queue=e,e=e.dispatch=JT.bind(null,Ne,e),[c.memoizedState,e]},useRef:function(e){var n=un();return e={current:e},n.memoizedState=e},useState:function(e){e=Vh(e);var n=e.queue,o=Gv.bind(null,Ne,n);return n.dispatch=o,[e.memoizedState,o]},useDebugValue:Gh,useDeferredValue:function(e,n){var o=un();return Yh(o,e,n)},useTransition:function(){var e=Vh(!1);return e=Hv.bind(null,Ne,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,o){var c=Ne,f=un();if($e){if(o===void 0)throw Error(s(407));o=o()}else{if(o=n(),dt===null)throw Error(s(349));(Ge&127)!==0||vv(c,n,o)}f.memoizedState=o;var g={value:o,getSnapshot:n};return f.queue=g,Rv(bv.bind(null,c,g,e),[e]),c.flags|=2048,gs(9,{destroy:void 0},yv.bind(null,c,g,o,n),null),o},useId:function(){var e=un(),n=dt.identifierPrefix;if($e){var o=me,c=te;o=(c&~(1<<32-sn(c)-1)).toString(32)+o,n="_"+n+"R_"+o,o=td++,0<o&&(n+="H"+o.toString(32)),n+="_"}else o=ZT++,n="_"+n+"r_"+o.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Wh,useFormState:kv,useActionState:kv,useOptimistic:function(e){var n=un();n.memoizedState=n.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=o,n=Xh.bind(null,Ne,!0,o),o.dispatch=n,[e,n]},useMemoCache:Fh,useCacheRefresh:function(){return un().memoizedState=XT.bind(null,Ne)},useEffectEvent:function(e){var n=un(),o={impl:e};return n.memoizedState=o,function(){if((et&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},Jh={readContext:Xt,use:id,useCallback:Bv,useContext:Xt,useEffect:qh,useImperativeHandle:Dv,useInsertionEffect:Iv,useLayoutEffect:Pv,useMemo:Uv,useReducer:ad,useRef:Lv,useState:function(){return ad(ca)},useDebugValue:Gh,useDeferredValue:function(e,n){var o=At();return Fv(o,st.memoizedState,e,n)},useTransition:function(){var e=ad(ca)[0],n=At().memoizedState;return[typeof e=="boolean"?e:$l(e),n]},useSyncExternalStore:gv,useId:Zv,useHostTransitionStatus:Wh,useFormState:jv,useActionState:jv,useOptimistic:function(e,n){var o=At();return wv(o,st,e,n)},useMemoCache:Fh,useCacheRefresh:qv};Jh.useEffectEvent=Mv;var Xv={readContext:Xt,use:id,useCallback:Bv,useContext:Xt,useEffect:qh,useImperativeHandle:Dv,useInsertionEffect:Iv,useLayoutEffect:Pv,useMemo:Uv,useReducer:$h,useRef:Lv,useState:function(){return $h(ca)},useDebugValue:Gh,useDeferredValue:function(e,n){var o=At();return st===null?Yh(o,e,n):Fv(o,st.memoizedState,e,n)},useTransition:function(){var e=$h(ca)[0],n=At().memoizedState;return[typeof e=="boolean"?e:$l(e),n]},useSyncExternalStore:gv,useId:Zv,useHostTransitionStatus:Wh,useFormState:zv,useActionState:zv,useOptimistic:function(e,n){var o=At();return st!==null?wv(o,st,e,n):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Fh,useCacheRefresh:qv};Xv.useEffectEvent=Mv;function Qh(e,n,o,c){n=e.memoizedState,o=o(c,n),o=o==null?n:E({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var em={enqueueSetState:function(e,n,o){e=e._reactInternals;var c=Mn(),f=or(c);f.payload=n,o!=null&&(f.callback=o),n=sr(e,f,c),n!==null&&(En(n,e,c),Bl(n,e,c))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var c=Mn(),f=or(c);f.tag=1,f.payload=n,o!=null&&(f.callback=o),n=sr(e,f,c),n!==null&&(En(n,e,c),Bl(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Mn(),c=or(o);c.tag=2,n!=null&&(c.callback=n),n=sr(e,c,o),n!==null&&(En(n,e,o),Bl(n,e,o))}};function Jv(e,n,o,c,f,g,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,g,S):n.prototype&&n.prototype.isPureReactComponent?!Qa(o,c)||!Qa(f,g):!0}function Qv(e,n,o,c){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==e&&em.enqueueReplaceState(n,n.state,null)}function Co(e,n){var o=n;if("ref"in n){o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}if(e=e.defaultProps){o===n&&(o=E({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ey(e){mo(e)}function ty(e){console.error(e)}function ny(e){mo(e)}function ld(e,n){try{var o=e.onUncaughtError;o(n.value,{componentStack:n.stack})}catch(c){setTimeout(function(){throw c})}}function iy(e,n,o){try{var c=e.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function tm(e,n,o){return o=or(o),o.tag=3,o.payload={element:null},o.callback=function(){ld(e,n)},o}function ay(e){return e=or(e),e.tag=3,e}function ry(e,n,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;e.payload=function(){return f(g)},e.callback=function(){iy(n,o,c)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){iy(n,o,c),typeof f!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function QT(e,n,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(n=o.alternate,n!==null&&ls(n,o,f,!0),o=On.current,o!==null){switch(o.tag){case 31:case 13:return Gn===null?_d():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Ku?o.flags|=16384:(n=o.updateQueue,n===null?o.updateQueue=new Set([c]):n.add(c),Cm(e,c,f)),!1;case 22:return o.flags|=65536,c===Ku?o.flags|=16384:(n=o.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=n):(o=n.retryQueue,o===null?n.retryQueue=new Set([c]):o.add(c)),Cm(e,c,f)),!1}throw Error(s(435,o.tag))}return Cm(e,c,f),_d(),!1}if($e)return n=On.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,c!==ss&&(e=Error(s(422),{cause:c}),yo(l(e,o)))):(c!==ss&&(n=Error(s(423),{cause:c}),yo(l(n,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,c=l(c,o),f=tm(e.stateNode,c,f),zh(e,f),Et!==4&&(Et=2)),!1;var g=Error(s(520),{cause:c});if(g=l(g,o),Ql===null?Ql=[g]:Ql.push(g),Et!==4&&(Et=2),n===null)return!0;c=l(c,o),o=n;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=tm(o.stateNode,c,e),zh(o,e),!1;case 1:if(n=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hr===null||!hr.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ay(f),ry(f,e,o,c),zh(o,f),!1}o=o.return}while(o!==null);return!1}var nm=Error(s(461)),Rt=!1;function Jt(e,n,o,c){n.child=e===null?cv(n,null,o,c):Eo(n,e.child,o,c)}function oy(e,n,o,c,f){o=o.render;var g=n.ref;if("ref"in c){var S={};for(var A in c)A!=="ref"&&(S[A]=c[A])}else S=c;return _o(n),c=Nh(e,n,o,S,g,f),A=Dh(),e!==null&&!Rt?(Bh(e,n,f),ua(e,n,f)):($e&&A&&Dt(n),n.flags|=1,Jt(e,n,c,f),n.child)}function sy(e,n,o,c,f){if(e===null){var g=o.type;return typeof g=="function"&&!rs(g)&&g.defaultProps===void 0&&o.compare===null?(n.tag=15,n.type=g,ly(e,n,g,c,f)):(e=vo(o.type,null,c,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(g=e.child,!um(e,f)){var S=g.memoizedProps;if(o=o.compare,o=o!==null?o:Qa,o(S,c)&&e.ref===n.ref)return ua(e,n,f)}return n.flags|=1,e=qn(g,c),e.ref=n.ref,e.return=n,n.child=e}function ly(e,n,o,c,f){if(e!==null){var g=e.memoizedProps;if(Qa(g,c)&&e.ref===n.ref)if(Rt=!1,n.pendingProps=c=g,um(e,f))(e.flags&131072)!==0&&(Rt=!0);else return n.lanes=e.lanes,ua(e,n,f)}return im(e,n,o,c,f)}function cy(e,n,o,c){var f=c.children,g=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((n.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;c=f&~g}else c=0,n.child=null;return uy(e,n,g,o,c)}if((o&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(n,g!==null?g.cachePool:null),g!==null?fv(n,g):Rh(),hv(n);else return c=n.lanes=536870912,uy(e,n,g!==null?g.baseLanes|o:o,o,c)}else g!==null?(Gu(n,g.cachePool),fv(n,g),cr(),n.memoizedState=null):(e!==null&&Gu(n,null),Rh(),cr());return Jt(e,n,f,o),n.child}function ql(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function uy(e,n,o,c,f){var g=Ah();return g=g===null?null:{parent:zt._currentValue,pool:g},n.memoizedState={baseLanes:o,cachePool:g},e!==null&&Gu(n,null),Rh(),hv(n),e!==null&&ls(e,n,c,!0),n.childLanes=f,null}function cd(e,n){return n=dd({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function dy(e,n,o){return Eo(n,e.child,null,o),e=cd(n,n.pendingProps),e.flags|=2,zn(n),n.memoizedState=null,e}function eC(e,n,o){var c=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if($e){if(c.mode==="hidden")return e=cd(n,c),n.lanes=536870912,ql(null,e);if(Ih(n),(e=We)?(e=Sb(e,bn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:q!==null?{id:te,overflow:me}:null,retryLane:536870912,hydrationErrors:null},o=zl(e),o.return=n,n.child=o,Ke=n,We=null)):e=null,e===null)throw Di(n);return n.lanes=536870912,null}return cd(n,c)}var g=e.memoizedState;if(g!==null){var S=g.dehydrated;if(Ih(n),f)if(n.flags&256)n.flags&=-257,n=dy(e,n,o);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Rt||ls(e,n,o,!1),f=(o&e.childLanes)!==0,Rt||f){if(c=dt,c!==null&&(S=bu(c,o),S!==0&&S!==g.retryLane))throw g.retryLane=S,Zn(e,S),En(c,e,S),nm;_d(),n=dy(e,n,o)}else e=g.treeContext,We=Yn(S.nextSibling),Ke=n,$e=!0,Ni=null,bn=!1,e!==null&&cn(n,e),n=cd(n,c),n.flags|=4096;return n}return e=qn(e.child,{mode:c.mode,children:c.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ud(e,n){var o=n.ref;if(o===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(e===null||e.ref!==o)&&(n.flags|=4194816)}}function im(e,n,o,c,f){return _o(n),o=Nh(e,n,o,c,void 0,f),c=Dh(),e!==null&&!Rt?(Bh(e,n,f),ua(e,n,f)):($e&&c&&Dt(n),n.flags|=1,Jt(e,n,o,f),n.child)}function fy(e,n,o,c,f,g){return _o(n),n.updateQueue=null,o=pv(n,c,o,f),mv(e),c=Dh(),e!==null&&!Rt?(Bh(e,n,g),ua(e,n,g)):($e&&c&&Dt(n),n.flags|=1,Jt(e,n,o,g),n.child)}function hy(e,n,o,c,f){if(_o(n),n.stateNode===null){var g=aa,S=o.contextType;typeof S=="object"&&S!==null&&(g=Xt(S)),g=new o(c,g),n.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=em,n.stateNode=g,g._reactInternals=n,g=n.stateNode,g.props=c,g.state=n.memoizedState,g.refs={},jh(n),S=o.contextType,g.context=typeof S=="object"&&S!==null?Xt(S):aa,g.state=n.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Qh(n,o,S,c),g.state=n.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(S=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),S!==g.state&&em.enqueueReplaceState(g,g.state,null),Fl(n,c,g,f),Ul(),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308),c=!0}else if(e===null){g=n.stateNode;var A=n.memoizedProps,I=Co(o,A);g.props=I;var Z=g.context,X=o.contextType;S=aa,typeof X=="object"&&X!==null&&(S=Xt(X));var ne=o.getDerivedStateFromProps;X=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||Z!==S)&&Qv(n,g,c,S),rr=!1;var G=n.memoizedState;g.state=G,Fl(n,c,g,f),Ul(),Z=n.memoizedState,A||G!==Z||rr?(typeof ne=="function"&&(Qh(n,o,ne,c),Z=n.memoizedState),(I=rr||Jv(n,o,I,c,G,Z,S))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=Z),g.props=c,g.state=Z,g.context=S,c=I):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{g=n.stateNode,Oh(e,n),S=n.memoizedProps,X=Co(o,S),g.props=X,ne=n.pendingProps,G=g.context,Z=o.contextType,I=aa,typeof Z=="object"&&Z!==null&&(I=Xt(Z)),A=o.getDerivedStateFromProps,(Z=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(S!==ne||G!==I)&&Qv(n,g,c,I),rr=!1,G=n.memoizedState,g.state=G,Fl(n,c,g,f),Ul();var K=n.memoizedState;S!==ne||G!==K||rr||e!==null&&e.dependencies!==null&&Zu(e.dependencies)?(typeof A=="function"&&(Qh(n,o,A,c),K=n.memoizedState),(X=rr||Jv(n,o,X,c,G,K,I)||e!==null&&e.dependencies!==null&&Zu(e.dependencies))?(Z||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,K,I),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,K,I)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=K),g.props=c,g.state=K,g.context=I,c=X):(typeof g.componentDidUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),c=!1)}return g=c,ud(e,n),c=(n.flags&128)!==0,g||c?(g=n.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),n.flags|=1,e!==null&&c?(n.child=Eo(n,e.child,null,f),n.child=Eo(n,null,o,f)):Jt(e,n,o,f),n.memoizedState=g.state,e=n.child):e=ua(e,n,f),e}function my(e,n,o,c){return oa(),n.flags|=256,Jt(e,n,o,c),n.child}var am={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rm(e){return{baseLanes:e,cachePool:iv()}}function om(e,n,o){return e=e!==null?e.childLanes&~o:0,n&&(e|=Rn),e}function py(e,n,o){var c=n.pendingProps,f=!1,g=(n.flags&128)!==0,S;if((S=g)||(S=e!==null&&e.memoizedState===null?!1:(Ct.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if($e){if(f?lr(n):cr(),(e=We)?(e=Sb(e,bn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:q!==null?{id:te,overflow:me}:null,retryLane:536870912,hydrationErrors:null},o=zl(e),o.return=n,n.child=o,Ke=n,We=null)):e=null,e===null)throw Di(n);return Hm(e)?n.lanes=32:n.lanes=536870912,null}var A=c.children;return c=c.fallback,f?(cr(),f=n.mode,A=dd({mode:"hidden",children:A},f),c=ra(c,f,o,null),A.return=n,c.return=n,A.sibling=c,n.child=A,c=n.child,c.memoizedState=rm(o),c.childLanes=om(e,S,o),n.memoizedState=am,ql(null,c)):(lr(n),sm(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(g)n.flags&256?(lr(n),n.flags&=-257,n=lm(e,n,o)):n.memoizedState!==null?(cr(),n.child=e.child,n.flags|=128,n=null):(cr(),A=c.fallback,f=n.mode,c=dd({mode:"visible",children:c.children},f),A=ra(A,f,o,null),A.flags|=2,c.return=n,A.return=n,c.sibling=A,n.child=c,Eo(n,e.child,null,o),c=n.child,c.memoizedState=rm(o),c.childLanes=om(e,S,o),n.memoizedState=am,n=ql(null,c));else if(lr(n),Hm(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var Z=S.dgst;S=Z,c=Error(s(419)),c.stack="",c.digest=S,yo({value:c,source:null,stack:null}),n=lm(e,n,o)}else if(Rt||ls(e,n,o,!1),S=(o&e.childLanes)!==0,Rt||S){if(S=dt,S!==null&&(c=bu(S,o),c!==0&&c!==I.retryLane))throw I.retryLane=c,Zn(e,c),En(S,e,c),nm;Fm(A)||_d(),n=lm(e,n,o)}else Fm(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,We=Yn(A.nextSibling),Ke=n,$e=!0,Ni=null,bn=!1,e!==null&&cn(n,e),n=sm(n,c.children),n.flags|=4096);return n}return f?(cr(),A=c.fallback,f=n.mode,I=e.child,Z=I.sibling,c=qn(I,{mode:"hidden",children:c.children}),c.subtreeFlags=I.subtreeFlags&65011712,Z!==null?A=qn(Z,A):(A=ra(A,f,o,null),A.flags|=2),A.return=n,c.return=n,c.sibling=A,n.child=c,ql(null,c),c=n.child,A=e.child.memoizedState,A===null?A=rm(o):(f=A.cachePool,f!==null?(I=zt._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=iv(),A={baseLanes:A.baseLanes|o,cachePool:f}),c.memoizedState=A,c.childLanes=om(e,S,o),n.memoizedState=am,ql(e.child,c)):(lr(n),o=e.child,e=o.sibling,o=qn(o,{mode:"visible",children:c.children}),o.return=n,o.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=o,n.memoizedState=null,o)}function sm(e,n){return n=dd({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function dd(e,n){return e=an(22,e,null,n),e.lanes=0,e}function lm(e,n,o){return Eo(n,e.child,null,o),e=sm(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gy(e,n,o){e.lanes|=n;var c=e.alternate;c!==null&&(c.lanes|=n),Sh(e.return,n,o)}function cm(e,n,o,c,f,g){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f,treeForkCount:g}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=c,S.tail=o,S.tailMode=f,S.treeForkCount=g)}function vy(e,n,o){var c=n.pendingProps,f=c.revealOrder,g=c.tail;c=c.children;var S=Ct.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ie(Ct,S),Jt(e,n,c,o),c=$e?C:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gy(e,o,n);else if(e.tag===19)gy(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=n.child,f=null;o!==null;)e=o.alternate,e!==null&&Qu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=n.child,n.child=null):(f=o.sibling,o.sibling=null),cm(n,!1,f,o,g,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&Qu(e)===null){n.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}cm(n,!0,o,null,g,c);break;case"together":cm(n,!1,null,null,void 0,c);break;default:n.memoizedState=null}return n.child}function ua(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),fr|=n.lanes,(o&n.childLanes)===0)if(e!==null){if(ls(e,n,o,!1),(o&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,o=qn(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=qn(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function um(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zu(e)))}function tC(e,n,o){switch(n.tag){case 3:nt(n,n.stateNode.containerInfo),ar(n,zt,e.memoizedState.cache),oa();break;case 27:case 5:kt(n);break;case 4:nt(n,n.stateNode.containerInfo);break;case 10:ar(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ih(n),null;break;case 13:var c=n.memoizedState;if(c!==null)return c.dehydrated!==null?(lr(n),n.flags|=128,null):(o&n.child.childLanes)!==0?py(e,n,o):(lr(n),e=ua(e,n,o),e!==null?e.sibling:null);lr(n);break;case 19:var f=(e.flags&128)!==0;if(c=(o&n.childLanes)!==0,c||(ls(e,n,o,!1),c=(o&n.childLanes)!==0),f){if(c)return vy(e,n,o);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Ct,Ct.current),c)break;return null;case 22:return n.lanes=0,cy(e,n,o,n.pendingProps);case 24:ar(n,zt,e.memoizedState.cache)}return ua(e,n,o)}function yy(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rt=!0;else{if(!um(e,o)&&(n.flags&128)===0)return Rt=!1,tC(e,n,o);Rt=(e.flags&131072)!==0}else Rt=!1,$e&&(n.flags&1048576)!==0&&De(n,C,n.index);switch(n.lanes=0,n.tag){case 16:e:{var c=n.pendingProps;if(e=wo(n.elementType),n.type=e,typeof e=="function")rs(e)?(c=Co(e,c),n.tag=1,n=hy(null,n,e,c,o)):(n.tag=0,n=im(null,n,e,c,o));else{if(e!=null){var f=e.$$typeof;if(f===ue){n.tag=11,n=oy(null,n,e,c,o);break e}else if(f===Q){n.tag=14,n=sy(null,n,e,c,o);break e}}throw n=ae(e)||e,Error(s(306,n,""))}}return n;case 0:return im(e,n,n.type,n.pendingProps,o);case 1:return c=n.type,f=Co(c,n.pendingProps),hy(e,n,c,f,o);case 3:e:{if(nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));c=n.pendingProps;var g=n.memoizedState;f=g.element,Oh(e,n),Fl(n,c,null,o);var S=n.memoizedState;if(c=S.cache,ar(n,zt,c),c!==g.cache&&Eh(n,[zt],o,!0),Ul(),c=S.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){n=my(e,n,c,o);break e}else if(c!==f){f=l(Error(s(424)),n),yo(f),n=my(e,n,c,o);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=Yn(e.firstChild),Ke=n,$e=!0,Ni=null,bn=!0,o=cv(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(oa(),c===f){n=ua(e,n,o);break e}Jt(e,n,c,o)}n=n.child}return n;case 26:return ud(e,n),e===null?(o=jb(n.type,null,n.pendingProps,null))?n.memoizedState=o:$e||(o=n.type,e=n.pendingProps,c=Ad(pe.current).createElement(o),c[jt]=n,c[Ht]=e,Qt(c,o,e),Ot(c),n.stateNode=c):n.memoizedState=jb(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&$e&&(c=n.stateNode=Cb(n.type,n.pendingProps,pe.current),Ke=n,bn=!0,f=We,vr(n.type)?($m=f,We=Yn(c.firstChild)):We=f),Jt(e,n,n.pendingProps.children,o),ud(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&$e&&((f=c=We)&&(c=zC(c,n.type,n.pendingProps,bn),c!==null?(n.stateNode=c,Ke=n,We=Yn(c.firstChild),bn=!1,f=!0):f=!1),f||Di(n)),kt(n),f=n.type,g=n.pendingProps,S=e!==null?e.memoizedProps:null,c=g.children,Dm(f,g)?c=null:S!==null&&Dm(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Nh(e,n,qT,null,null,o),sc._currentValue=f),ud(e,n),Jt(e,n,c,o),n.child;case 6:return e===null&&$e&&((e=o=We)&&(o=LC(o,n.pendingProps,bn),o!==null?(n.stateNode=o,Ke=n,We=null,e=!0):e=!1),e||Di(n)),null;case 13:return py(e,n,o);case 4:return nt(n,n.stateNode.containerInfo),c=n.pendingProps,e===null?n.child=Eo(n,null,c,o):Jt(e,n,c,o),n.child;case 11:return oy(e,n,n.type,n.pendingProps,o);case 7:return Jt(e,n,n.pendingProps,o),n.child;case 8:return Jt(e,n,n.pendingProps.children,o),n.child;case 12:return Jt(e,n,n.pendingProps.children,o),n.child;case 10:return c=n.pendingProps,ar(n,n.type,c.value),Jt(e,n,c.children,o),n.child;case 9:return f=n.type._context,c=n.pendingProps.children,_o(n),f=Xt(f),c=c(f),n.flags|=1,Jt(e,n,c,o),n.child;case 14:return sy(e,n,n.type,n.pendingProps,o);case 15:return ly(e,n,n.type,n.pendingProps,o);case 19:return vy(e,n,o);case 31:return eC(e,n,o);case 22:return cy(e,n,o,n.pendingProps);case 24:return _o(n),c=Xt(zt),e===null?(f=Ah(),f===null&&(f=dt,g=Th(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),n.memoizedState={parent:c,cache:f},jh(n),ar(n,zt,f)):((e.lanes&o)!==0&&(Oh(e,n),Fl(n,null,null,o),Ul()),f=e.memoizedState,g=n.memoizedState,f.parent!==c?(f={parent:c,cache:c},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ar(n,zt,c)):(c=g.cache,ar(n,zt,c),c!==f.cache&&Eh(n,[zt],o,!0))),Jt(e,n,n.pendingProps.children,o),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(e){e.flags|=4}function dm(e,n,o,c,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Zy())e.flags|=8192;else throw So=Ku,kh}else e.flags&=-16777217}function by(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mb(n))if(Zy())e.flags|=8192;else throw So=Ku,kh}function fd(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gu():536870912,e.lanes|=n,_s|=n)}function Gl(e,n){if(!$e)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function mt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,c=0;if(n)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=c,e.childLanes=o,n}function nC(e,n,o){var c=n.pendingProps;switch(wt(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(n),null;case 1:return mt(n),null;case 3:return o=n.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),n.memoizedState.cache!==c&&(n.flags|=2048),sa(zt),Qe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(li(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ml())),mt(n),null;case 26:var f=n.type,g=n.memoizedState;return e===null?(da(n),g!==null?(mt(n),by(n,g)):(mt(n),dm(n,f,null,c,o))):g?g!==e.memoizedState?(da(n),mt(n),by(n,g)):(mt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==c&&da(n),mt(n),dm(n,f,e,c,o)),null;case 27:if(Ei(n),o=pe.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&da(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return mt(n),null}e=oe.current,li(n)?Rl(n):(e=Cb(f,c,o),n.stateNode=e,da(n))}return mt(n),null;case 5:if(Ei(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&da(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return mt(n),null}if(g=oe.current,li(n))Rl(n);else{var S=Ad(pe.current);switch(g){case 1:g=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:g=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":g=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":g=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":g=S.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?S.createElement("select",{is:c.is}):S.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?S.createElement(f,{is:c.is}):S.createElement(f)}}g[jt]=n,g[Ht]=c;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)g.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=g;e:switch(Qt(g,f,c),f){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&da(n)}}return mt(n),dm(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,o),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==c&&da(n);else{if(typeof c!="string"&&n.stateNode===null)throw Error(s(166));if(e=pe.current,li(n)){if(e=n.stateNode,o=n.memoizedProps,c=null,f=Ke,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}e[jt]=n,e=!!(e.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||pb(e.nodeValue,o)),e||Di(n,!0)}else e=Ad(e).createTextNode(c),e[jt]=n,n.stateNode=e}return mt(n),null;case 31:if(o=n.memoizedState,e===null||e.memoizedState!==null){if(c=li(n),o!==null){if(e===null){if(!c)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[jt]=n}else oa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mt(n),e=!1}else o=Ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return n.flags&256?(zn(n),n):(zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mt(n),null;case 13:if(c=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=li(n),c!==null&&c.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[jt]=n}else oa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mt(n),f=!1}else f=Ml(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(zn(n),n):(zn(n),null)}return zn(n),(n.flags&128)!==0?(n.lanes=o,n):(o=c!==null,e=e!==null&&e.memoizedState!==null,o&&(c=n.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)),o!==e&&o&&(n.child.flags|=8192),fd(n,n.updateQueue),mt(n),null);case 4:return Qe(),e===null&&Rm(n.stateNode.containerInfo),mt(n),null;case 10:return sa(n.type),mt(n),null;case 19:if(Y(Ct),c=n.memoizedState,c===null)return mt(n),null;if(f=(n.flags&128)!==0,g=c.rendering,g===null)if(f)Gl(c,!1);else{if(Et!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(g=Qu(e),g!==null){for(n.flags|=128,Gl(c,!1),e=g.updateQueue,n.updateQueue=e,fd(n,e),n.subtreeFlags=0,e=o,o=n.child;o!==null;)Ol(o,e),o=o.sibling;return ie(Ct,Ct.current&1|2),$e&&Se(n,c.treeForkCount),n.child}e=e.sibling}c.tail!==null&&on()>vd&&(n.flags|=128,f=!0,Gl(c,!1),n.lanes=4194304)}else{if(!f)if(e=Qu(g),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,fd(n,e),Gl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!$e)return mt(n),null}else 2*on()-c.renderingStartTime>vd&&o!==536870912&&(n.flags|=128,f=!0,Gl(c,!1),n.lanes=4194304);c.isBackwards?(g.sibling=n.child,n.child=g):(e=c.last,e!==null?e.sibling=g:n.child=g,c.last=g)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=on(),e.sibling=null,o=Ct.current,ie(Ct,f?o&1|2:o&1),$e&&Se(n,c.treeForkCount),e):(mt(n),null);case 22:case 23:return zn(n),Mh(),c=n.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(n.flags|=8192):c&&(n.flags|=8192),c?(o&536870912)!==0&&(n.flags&128)===0&&(mt(n),n.subtreeFlags&6&&(n.flags|=8192)):mt(n),o=n.updateQueue,o!==null&&fd(n,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),c=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==o&&(n.flags|=2048),e!==null&&Y(xo),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(zt),mt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function iC(e,n){switch(wt(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(zt),Qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ei(n),null;case 31:if(n.memoizedState!==null){if(zn(n),n.alternate===null)throw Error(s(340));oa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));oa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(Ct),null;case 4:return Qe(),null;case 10:return sa(n.type),null;case 22:case 23:return zn(n),Mh(),e!==null&&Y(xo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(zt),null;case 25:return null;default:return null}}function _y(e,n){switch(wt(n),n.tag){case 3:sa(zt),Qe();break;case 26:case 27:case 5:Ei(n);break;case 4:Qe();break;case 31:n.memoizedState!==null&&zn(n);break;case 13:zn(n);break;case 19:Y(Ct);break;case 10:sa(n.type);break;case 22:case 23:zn(n),Mh(),e!==null&&Y(xo);break;case 24:sa(zt)}}function Yl(e,n){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){c=void 0;var g=o.create,S=o.inst;c=g(),S.destroy=c}o=o.next}while(o!==f)}}catch(A){rt(n,n.return,A)}}function ur(e,n,o){try{var c=n.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&e)===e){var S=c.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=n;var I=o,Z=A;try{Z()}catch(X){rt(f,I,X)}}}c=c.next}while(c!==g)}}catch(X){rt(n,n.return,X)}}function xy(e){var n=e.updateQueue;if(n!==null){var o=e.stateNode;try{dv(n,o)}catch(c){rt(e,e.return,c)}}}function wy(e,n,o){o.props=Co(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(c){rt(e,n,c)}}function Kl(e,n){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof o=="function"?e.refCleanup=o(c):o.current=c}}catch(f){rt(e,n,f)}}function Ui(e,n){var o=e.ref,c=e.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){rt(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(e,n,f)}else o.current=null}function Sy(e){var n=e.type,o=e.memoizedProps,c=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){rt(e,e.return,f)}}function fm(e,n,o){try{var c=e.stateNode;TC(c,e.type,o,n),c[Ht]=n}catch(f){rt(e,e.return,f)}}function Ey(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vr(e.type)||e.tag===4}function hm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mm(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,n):(n=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,n.appendChild(e),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=pn));else if(c!==4&&(c===27&&vr(e.type)&&(o=e.stateNode,n=null),e=e.child,e!==null))for(mm(e,n,o),e=e.sibling;e!==null;)mm(e,n,o),e=e.sibling}function hd(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(c!==4&&(c===27&&vr(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(hd(e,n,o),e=e.sibling;e!==null;)hd(e,n,o),e=e.sibling}function Ty(e){var n=e.stateNode,o=e.memoizedProps;try{for(var c=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Qt(n,c,o),n[jt]=e,n[Ht]=o}catch(g){rt(e,e.return,g)}}var fa=!1,Mt=!1,pm=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function aC(e,n){if(e=e.containerInfo,Pm=Md,e=co(e),Li(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var S=0,A=-1,I=-1,Z=0,X=0,ne=e,G=null;t:for(;;){for(var K;ne!==o||f!==0&&ne.nodeType!==3||(A=S+f),ne!==g||c!==0&&ne.nodeType!==3||(I=S+c),ne.nodeType===3&&(S+=ne.nodeValue.length),(K=ne.firstChild)!==null;)G=ne,ne=K;for(;;){if(ne===e)break t;if(G===o&&++Z===f&&(A=S),G===g&&++X===c&&(I=S),(K=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=K}o=A===-1||I===-1?null:{start:A,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Nm={focusedElem:e,selectionRange:o},Md=!1,Zt=n;Zt!==null;)if(n=Zt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Zt=e;else for(;Zt!==null;){switch(n=Zt,g=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&g!==null){e=void 0,o=n,f=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var be=Co(o.type,f);e=c.getSnapshotBeforeUpdate(be,g),c.__reactInternalSnapshotBeforeUpdate=e}catch(Oe){rt(o,o.return,Oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,o=e.nodeType,o===9)Um(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Um(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Zt=e;break}Zt=n.return}}function Ay(e,n,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ma(e,o),c&4&&Yl(5,o);break;case 1:if(ma(e,o),c&4)if(e=o.stateNode,n===null)try{e.componentDidMount()}catch(S){rt(o,o.return,S)}else{var f=Co(o.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){rt(o,o.return,S)}}c&64&&xy(o),c&512&&Kl(o,o.return);break;case 3:if(ma(e,o),c&64&&(e=o.updateQueue,e!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{dv(e,n)}catch(S){rt(o,o.return,S)}}break;case 27:n===null&&c&4&&Ty(o);case 26:case 5:ma(e,o),n===null&&c&4&&Sy(o),c&512&&Kl(o,o.return);break;case 12:ma(e,o);break;case 31:ma(e,o),c&4&&Oy(e,o);break;case 13:ma(e,o),c&4&&zy(e,o),c&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=hC.bind(null,o),RC(e,o))));break;case 22:if(c=o.memoizedState!==null||fa,!c){n=n!==null&&n.memoizedState!==null||Mt,f=fa;var g=Mt;fa=c,(Mt=n)&&!g?pa(e,o,(o.subtreeFlags&8772)!==0):ma(e,o),fa=f,Mt=g}break;case 30:break;default:ma(e,o)}}function ky(e){var n=e.alternate;n!==null&&(e.alternate=null,ky(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yt=null,_n=!1;function ha(e,n,o){for(o=o.child;o!==null;)jy(e,n,o),o=o.sibling}function jy(e,n,o){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ba,o)}catch{}switch(o.tag){case 26:Mt||Ui(o,n),ha(e,n,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Mt||Ui(o,n);var c=yt,f=_n;vr(o.type)&&(yt=o.stateNode,_n=!1),ha(e,n,o),ac(o.stateNode),yt=c,_n=f;break;case 5:Mt||Ui(o,n);case 6:if(c=yt,f=_n,yt=null,ha(e,n,o),yt=c,_n=f,yt!==null)if(_n)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(g){rt(o,n,g)}else try{yt.removeChild(o.stateNode)}catch(g){rt(o,n,g)}break;case 18:yt!==null&&(_n?(e=yt,xb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ks(e)):xb(yt,o.stateNode));break;case 4:c=yt,f=_n,yt=o.stateNode.containerInfo,_n=!0,ha(e,n,o),yt=c,_n=f;break;case 0:case 11:case 14:case 15:ur(2,o,n),Mt||ur(4,o,n),ha(e,n,o);break;case 1:Mt||(Ui(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"&&wy(o,n,c)),ha(e,n,o);break;case 21:ha(e,n,o);break;case 22:Mt=(c=Mt)||o.memoizedState!==null,ha(e,n,o),Mt=c;break;default:ha(e,n,o)}}function Oy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ks(e)}catch(o){rt(n,n.return,o)}}}function zy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ks(e)}catch(o){rt(n,n.return,o)}}function rC(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cy),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cy),n;default:throw Error(s(435,e.tag))}}function md(e,n){var o=rC(e);n.forEach(function(c){if(!o.has(c)){o.add(c);var f=mC.bind(null,e,c);c.then(f,f)}})}function xn(e,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],g=e,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(vr(A.type)){yt=A.stateNode,_n=!1;break e}break;case 5:yt=A.stateNode,_n=!1;break e;case 3:case 4:yt=A.stateNode.containerInfo,_n=!0;break e}A=A.return}if(yt===null)throw Error(s(160));jy(g,S,f),yt=null,_n=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ly(n,e),n=n.sibling}var ui=null;function Ly(e,n){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(n,e),wn(e),c&4&&(ur(3,e,e.return),Yl(3,e),ur(5,e,e.return));break;case 1:xn(n,e),wn(e),c&512&&(Mt||o===null||Ui(o,o.return)),c&64&&fa&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=ui;if(xn(n,e),wn(e),c&512&&(Mt||o===null||Ui(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=e.memoizedState,o===null)if(c===null)if(e.stateNode===null){e:{c=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[Gr]||g[jt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),Qt(g,c,o),g[jt]=e,Ot(g),c=g;break e;case"link":var S=Lb("link","href",f).get(c+(o.href||""));if(S){for(var A=0;A<S.length;A++)if(g=S[A],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(A,1);break t}}g=f.createElement(c),Qt(g,c,o),f.head.appendChild(g);break;case"meta":if(S=Lb("meta","content",f).get(c+(o.content||""))){for(A=0;A<S.length;A++)if(g=S[A],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(A,1);break t}}g=f.createElement(c),Qt(g,c,o),f.head.appendChild(g);break;default:throw Error(s(468,c))}g[jt]=e,Ot(g),c=g}e.stateNode=c}else Rb(f,e.type,e.stateNode);else e.stateNode=zb(f,c,e.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?Rb(f,e.type,e.stateNode):zb(f,c,e.memoizedProps)):c===null&&e.stateNode!==null&&fm(e,e.memoizedProps,o.memoizedProps)}break;case 27:xn(n,e),wn(e),c&512&&(Mt||o===null||Ui(o,o.return)),o!==null&&c&4&&fm(e,e.memoizedProps,o.memoizedProps);break;case 5:if(xn(n,e),wn(e),c&512&&(Mt||o===null||Ui(o,o.return)),e.flags&32){f=e.stateNode;try{Bn(f,"")}catch(be){rt(e,e.return,be)}}c&4&&e.stateNode!=null&&(f=e.memoizedProps,fm(e,f,o!==null?o.memoizedProps:f)),c&1024&&(pm=!0);break;case 6:if(xn(n,e),wn(e),c&4){if(e.stateNode===null)throw Error(s(162));c=e.memoizedProps,o=e.stateNode;try{o.nodeValue=c}catch(be){rt(e,e.return,be)}}break;case 3:if(Od=null,f=ui,ui=kd(n.containerInfo),xn(n,e),ui=f,wn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ks(n.containerInfo)}catch(be){rt(e,e.return,be)}pm&&(pm=!1,Ry(e));break;case 4:c=ui,ui=kd(e.stateNode.containerInfo),xn(n,e),wn(e),ui=c;break;case 12:xn(n,e),wn(e);break;case 31:xn(n,e),wn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,md(e,c)));break;case 13:xn(n,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(gd=on()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,md(e,c)));break;case 22:f=e.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,Z=fa,X=Mt;if(fa=Z||f,Mt=X||I,xn(n,e),Mt=X,fa=Z,wn(e),c&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(o===null||I||fa||Mt||Ao(e)),o=null,n=e;;){if(n.tag===5||n.tag===26){if(o===null){I=o=n;try{if(g=I.stateNode,f)S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var ne=I.memoizedProps.style,G=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(be){rt(I,I.return,be)}}}else if(n.tag===6){if(o===null){I=n;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(be){rt(I,I.return,be)}}}else if(n.tag===18){if(o===null){I=n;try{var K=I.stateNode;f?wb(K,!0):wb(I.stateNode,!1)}catch(be){rt(I,I.return,be)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;o===n&&(o=null),n=n.return}o===n&&(o=null),n.sibling.return=n.return,n=n.sibling}c&4&&(c=e.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,md(e,o))));break;case 19:xn(n,e),wn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,md(e,c)));break;case 30:break;case 21:break;default:xn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{for(var o,c=e.return;c!==null;){if(Ey(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,g=hm(e);hd(e,g,f);break;case 5:var S=o.stateNode;o.flags&32&&(Bn(S,""),o.flags&=-33);var A=hm(e);hd(e,A,S);break;case 3:case 4:var I=o.stateNode.containerInfo,Z=hm(e);mm(e,Z,I);break;default:throw Error(s(161))}}catch(X){rt(e,e.return,X)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ry(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ry(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ay(e,n.alternate,n),n=n.sibling}function Ao(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ur(4,n,n.return),Ao(n);break;case 1:Ui(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&wy(n,n.return,o),Ao(n);break;case 27:ac(n.stateNode);case 26:case 5:Ui(n,n.return),Ao(n);break;case 22:n.memoizedState===null&&Ao(n);break;case 30:Ao(n);break;default:Ao(n)}e=e.sibling}}function pa(e,n,o){for(o=o&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var c=n.alternate,f=e,g=n,S=g.flags;switch(g.tag){case 0:case 11:case 15:pa(f,g,o),Yl(4,g);break;case 1:if(pa(f,g,o),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Z){rt(c,c.return,Z)}if(c=g,f=c.updateQueue,f!==null){var A=c.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)uv(I[f],A)}catch(Z){rt(c,c.return,Z)}}o&&S&64&&xy(g),Kl(g,g.return);break;case 27:Ty(g);case 26:case 5:pa(f,g,o),o&&c===null&&S&4&&Sy(g),Kl(g,g.return);break;case 12:pa(f,g,o);break;case 31:pa(f,g,o),o&&S&4&&Oy(f,g);break;case 13:pa(f,g,o),o&&S&4&&zy(f,g);break;case 22:g.memoizedState===null&&pa(f,g,o),Kl(g,g.return);break;case 30:break;default:pa(f,g,o)}n=n.sibling}}function gm(e,n){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Il(o))}function vm(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Il(e))}function di(e,n,o,c){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)My(e,n,o,c),n=n.sibling}function My(e,n,o,c){var f=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,o,c),f&2048&&Yl(9,n);break;case 1:di(e,n,o,c);break;case 3:di(e,n,o,c),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Il(e)));break;case 12:if(f&2048){di(e,n,o,c),e=n.stateNode;try{var g=n.memoizedProps,S=g.id,A=g.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){rt(n,n.return,I)}}else di(e,n,o,c);break;case 31:di(e,n,o,c);break;case 13:di(e,n,o,c);break;case 23:break;case 22:g=n.stateNode,S=n.alternate,n.memoizedState!==null?g._visibility&2?di(e,n,o,c):Wl(e,n):g._visibility&2?di(e,n,o,c):(g._visibility|=2,vs(e,n,o,c,(n.subtreeFlags&10256)!==0||!1)),f&2048&&gm(S,n);break;case 24:di(e,n,o,c),f&2048&&vm(n.alternate,n);break;default:di(e,n,o,c)}}function vs(e,n,o,c,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var g=e,S=n,A=o,I=c,Z=S.flags;switch(S.tag){case 0:case 11:case 15:vs(g,S,A,I,f),Yl(8,S);break;case 23:break;case 22:var X=S.stateNode;S.memoizedState!==null?X._visibility&2?vs(g,S,A,I,f):Wl(g,S):(X._visibility|=2,vs(g,S,A,I,f)),f&&Z&2048&&gm(S.alternate,S);break;case 24:vs(g,S,A,I,f),f&&Z&2048&&vm(S.alternate,S);break;default:vs(g,S,A,I,f)}n=n.sibling}}function Wl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var o=e,c=n,f=c.flags;switch(c.tag){case 22:Wl(o,c),f&2048&&gm(c.alternate,c);break;case 24:Wl(o,c),f&2048&&vm(c.alternate,c);break;default:Wl(o,c)}n=n.sibling}}var Xl=8192;function ys(e,n,o){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Iy(e,n,o),e=e.sibling}function Iy(e,n,o){switch(e.tag){case 26:ys(e,n,o),e.flags&Xl&&e.memoizedState!==null&&ZC(o,ui,e.memoizedState,e.memoizedProps);break;case 5:ys(e,n,o);break;case 3:case 4:var c=ui;ui=kd(e.stateNode.containerInfo),ys(e,n,o),ui=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=Xl,Xl=16777216,ys(e,n,o),Xl=c):ys(e,n,o));break;default:ys(e,n,o)}}function Py(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var o=0;o<n.length;o++){var c=n[o];Zt=c,Dy(c,e)}Py(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ny(e),e=e.sibling}function Ny(e){switch(e.tag){case 0:case 11:case 15:Jl(e),e.flags&2048&&ur(9,e,e.return);break;case 3:Jl(e);break;case 12:Jl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,pd(e)):Jl(e);break;default:Jl(e)}}function pd(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var o=0;o<n.length;o++){var c=n[o];Zt=c,Dy(c,e)}Py(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ur(8,n,n.return),pd(n);break;case 22:o=n.stateNode,o._visibility&2&&(o._visibility&=-3,pd(n));break;default:pd(n)}e=e.sibling}}function Dy(e,n){for(;Zt!==null;){var o=Zt;switch(o.tag){case 0:case 11:case 15:ur(8,o,n);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Il(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Zt=c;else e:for(o=e;Zt!==null;){c=Zt;var f=c.sibling,g=c.return;if(ky(c),c===o){Zt=null;break e}if(f!==null){f.return=g,Zt=f;break e}Zt=g}}}var oC={getCacheForType:function(e){var n=Xt(zt),o=n.data.get(e);return o===void 0&&(o=e(),n.data.set(e,o)),o},cacheSignal:function(){return Xt(zt).controller.signal}},sC=typeof WeakMap=="function"?WeakMap:Map,et=0,dt=null,Ve=null,Ge=0,at=0,Ln=null,dr=!1,bs=!1,ym=!1,ga=0,Et=0,fr=0,ko=0,bm=0,Rn=0,_s=0,Ql=null,Sn=null,_m=!1,gd=0,By=0,vd=1/0,yd=null,hr=null,Bt=0,mr=null,xs=null,va=0,xm=0,wm=null,Uy=null,ec=0,Sm=null;function Mn(){return(et&2)!==0&&Ge!==0?Ge&-Ge:D.T!==null?jm():ul()}function Fy(){if(Rn===0)if((Ge&536870912)===0||$e){var e=Vr;Vr<<=1,(Vr&3932160)===0&&(Vr=262144),Rn=e}else Rn=536870912;return e=On.current,e!==null&&(e.flags|=32),Rn}function En(e,n,o){(e===dt&&(at===2||at===9)||e.cancelPendingCommit!==null)&&(ws(e,0),pr(e,Ge,Rn,!1)),Wi(e,o),((et&2)===0||e!==dt)&&(e===dt&&((et&2)===0&&(ko|=o),Et===4&&pr(e,Ge,Rn,!1)),Fi(e))}function Hy(e,n,o){if((et&6)!==0)throw Error(s(327));var c=!o&&(n&127)===0&&(n&e.expiredLanes)===0||qr(e,n),f=c?uC(e,n):Tm(e,n,!0),g=c;do{if(f===0){bs&&!c&&pr(e,n,0,!1);break}else{if(o=e.current.alternate,g&&!lC(o)){f=Tm(e,n,!1),g=!1;continue}if(f===2){if(g=n,e.errorRecoveryDisabledLanes&g)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=e;f=Ql;var I=A.current.memoizedState.isDehydrated;if(I&&(ws(A,S).flags|=256),S=Tm(A,S,!1),S!==2){if(ym&&!I){A.errorRecoveryDisabledLanes|=g,ko|=g,f=4;break e}g=Sn,Sn=f,g!==null&&(Sn===null?Sn=g:Sn.push.apply(Sn,g))}f=S}if(g=!1,f!==2)continue}}if(f===1){ws(e,0),pr(e,n,0,!0);break}e:{switch(c=e,g=f,g){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:pr(c,n,Rn,!dr);break e;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(f=gd+300-on(),10<f)){if(pr(c,n,Rn,!dr),Ho(c,0,!0)!==0)break e;va=n,c.timeoutHandle=bb($y.bind(null,c,o,Sn,yd,_m,n,Rn,ko,_s,dr,g,"Throttled",-0,0),f);break e}$y(c,o,Sn,yd,_m,n,Rn,ko,_s,dr,g,null,-0,0)}}break}while(!0);Fi(e)}function $y(e,n,o,c,f,g,S,A,I,Z,X,ne,G,K){if(e.timeoutHandle=-1,ne=n.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},Iy(n,g,ne);var be=(g&62914560)===g?gd-on():(g&4194048)===g?By-on():0;if(be=qC(ne,be),be!==null){va=g,e.cancelPendingCommit=be(Xy.bind(null,e,n,g,o,c,f,S,A,I,X,ne,null,G,K)),pr(e,g,S,!Z);return}}Xy(e,n,g,o,c,f,S,A,I)}function lC(e){for(var n=e;;){var o=n.tag;if((o===0||o===11||o===15)&&n.flags&16384&&(o=n.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!$t(g(),f))return!1}catch{return!1}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pr(e,n,o,c){n&=~bm,n&=~ko,e.suspendedLanes|=n,e.pingedLanes&=~n,c&&(e.warmLanes|=n),c=e.expirationTimes;for(var f=n;0<f;){var g=31-sn(f),S=1<<g;c[g]=-1,f&=~S}o!==0&&vu(e,o,n)}function bd(){return(et&6)===0?(tc(0),!1):!0}function Em(){if(Ve!==null){if(at===0)var e=Ve.return;else e=Ve,ci=Bi=null,Uh(e),fs=null,Nl=0,e=Ve;for(;e!==null;)_y(e.alternate,e),e=e.return;Ve=null}}function ws(e,n){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,kC(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),va=0,Em(),dt=e,Ve=o=qn(e.current,null),Ge=n,at=0,Ln=null,dr=!1,bs=qr(e,n),ym=!1,_s=Rn=bm=ko=fr=Et=0,Sn=Ql=null,_m=!1,(n&8)!==0&&(n|=n&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=n;0<c;){var f=31-sn(c),g=1<<f;n|=e[f],c&=~g}return ga=n,po(),o}function Vy(e,n){Ne=null,D.H=Zl,n===ds||n===Yu?(n=ov(),at=3):n===kh?(n=ov(),at=4):at=n===nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ln=n,Ve===null&&(Et=1,ld(e,l(n,e.current)))}function Zy(){var e=On.current;return e===null?!0:(Ge&4194048)===Ge?Gn===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===Gn:!1}function qy(){var e=D.H;return D.H=Zl,e===null?Zl:e}function Gy(){var e=D.A;return D.A=oC,e}function _d(){Et=4,dr||(Ge&4194048)!==Ge&&On.current!==null||(bs=!0),(fr&134217727)===0&&(ko&134217727)===0||dt===null||pr(dt,Ge,Rn,!1)}function Tm(e,n,o){var c=et;et|=2;var f=qy(),g=Gy();(dt!==e||Ge!==n)&&(yd=null,ws(e,n)),n=!1;var S=Et;e:do try{if(at!==0&&Ve!==null){var A=Ve,I=Ln;switch(at){case 8:Em(),S=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(n=!0);var Z=at;if(at=0,Ln=null,Ss(e,A,I,Z),o&&bs){S=0;break e}break;default:Z=at,at=0,Ln=null,Ss(e,A,I,Z)}}cC(),S=Et;break}catch(X){Vy(e,X)}while(!0);return n&&e.shellSuspendCounter++,ci=Bi=null,et=c,D.H=f,D.A=g,Ve===null&&(dt=null,Ge=0,po()),S}function cC(){for(;Ve!==null;)Yy(Ve)}function uC(e,n){var o=et;et|=2;var c=qy(),f=Gy();dt!==e||Ge!==n?(yd=null,vd=on()+500,ws(e,n)):bs=qr(e,n);e:do try{if(at!==0&&Ve!==null){n=Ve;var g=Ln;t:switch(at){case 1:at=0,Ln=null,Ss(e,n,g,1);break;case 2:case 9:if(av(g)){at=0,Ln=null,Ky(n);break}n=function(){at!==2&&at!==9||dt!==e||(at=7),Fi(e)},g.then(n,n);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:av(g)?(at=0,Ln=null,Ky(n)):(at=0,Ln=null,Ss(e,n,g,7));break;case 5:var S=null;switch(Ve.tag){case 26:S=Ve.memoizedState;case 5:case 27:var A=Ve;if(S?Mb(S):A.stateNode.complete){at=0,Ln=null;var I=A.sibling;if(I!==null)Ve=I;else{var Z=A.return;Z!==null?(Ve=Z,xd(Z)):Ve=null}break t}}at=0,Ln=null,Ss(e,n,g,5);break;case 6:at=0,Ln=null,Ss(e,n,g,6);break;case 8:Em(),Et=6;break e;default:throw Error(s(462))}}dC();break}catch(X){Vy(e,X)}while(!0);return ci=Bi=null,D.H=c,D.A=f,et=o,Ve!==null?0:(dt=null,Ge=0,po(),Et)}function dC(){for(;Ve!==null&&!hu();)Yy(Ve)}function Yy(e){var n=yy(e.alternate,e,ga);e.memoizedProps=e.pendingProps,n===null?xd(e):Ve=n}function Ky(e){var n=e,o=n.alternate;switch(n.tag){case 15:case 0:n=fy(o,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=fy(o,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:Uh(n);default:_y(o,n),n=Ve=Ol(n,ga),n=yy(o,n,ga)}e.memoizedProps=e.pendingProps,n===null?xd(e):Ve=n}function Ss(e,n,o,c){ci=Bi=null,Uh(n),fs=null,Nl=0;var f=n.return;try{if(QT(e,f,n,o,Ge)){Et=1,ld(e,l(o,e.current)),Ve=null;return}}catch(g){if(f!==null)throw Ve=f,g;Et=1,ld(e,l(o,e.current)),Ve=null;return}n.flags&32768?($e||c===1?e=!0:bs||(Ge&536870912)!==0?e=!1:(dr=e=!0,(c===2||c===9||c===3||c===6)&&(c=On.current,c!==null&&c.tag===13&&(c.flags|=16384))),Wy(n,e)):xd(n)}function xd(e){var n=e;do{if((n.flags&32768)!==0){Wy(n,dr);return}e=n.return;var o=nC(n.alternate,n,ga);if(o!==null){Ve=o;return}if(n=n.sibling,n!==null){Ve=n;return}Ve=n=e}while(n!==null);Et===0&&(Et=5)}function Wy(e,n){do{var o=iC(e.alternate,e);if(o!==null){o.flags&=32767,Ve=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!n&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=o}while(e!==null);Et=6,Ve=null}function Xy(e,n,o,c,f,g,S,A,I){e.cancelPendingCommit=null;do wd();while(Bt!==0);if((et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(g=n.lanes|n.childLanes,g|=as,sh(e,o,g,S,A,I),e===dt&&(Ve=dt=null,Ge=0),xs=n,mr=e,va=o,xm=g,wm=f,Uy=c,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pC(Fr,function(){return nb(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||c){c=D.T,D.T=null,f=le.p,le.p=2,S=et,et|=4;try{aC(e,n,o)}finally{et=S,le.p=f,D.T=c}}Bt=1,Jy(),Qy(),eb()}}function Jy(){if(Bt===1){Bt=0;var e=mr,n=xs,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null;var c=le.p;le.p=2;var f=et;et|=4;try{Ly(n,e);var g=Nm,S=co(e.containerInfo),A=g.focusedElem,I=g.selectionRange;if(S!==A&&A&&A.ownerDocument&&es(A.ownerDocument.documentElement,A)){if(I!==null&&Li(A)){var Z=I.start,X=I.end;if(X===void 0&&(X=Z),"selectionStart"in A)A.selectionStart=Z,A.selectionEnd=Math.min(X,A.value.length);else{var ne=A.ownerDocument||document,G=ne&&ne.defaultView||window;if(G.getSelection){var K=G.getSelection(),be=A.textContent.length,Oe=Math.min(I.start,be),ct=I.end===void 0?Oe:Math.min(I.end,be);!K.extend&&Oe>ct&&(S=ct,ct=Oe,Oe=S);var U=lo(A,Oe),N=lo(A,ct);if(U&&N&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==N.node||K.focusOffset!==N.offset)){var V=ne.createRange();V.setStart(U.node,U.offset),K.removeAllRanges(),Oe>ct?(K.addRange(V),K.extend(N.node,N.offset)):(V.setEnd(N.node,N.offset),K.addRange(V))}}}}for(ne=[],K=A;K=K.parentNode;)K.nodeType===1&&ne.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ne.length;A++){var ee=ne[A];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Md=!!Pm,Nm=Pm=null}finally{et=f,le.p=c,D.T=o}}e.current=n,Bt=2}}function Qy(){if(Bt===2){Bt=0;var e=mr,n=xs,o=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||o){o=D.T,D.T=null;var c=le.p;le.p=2;var f=et;et|=4;try{Ay(e,n.alternate,n)}finally{et=f,le.p=c,D.T=o}}Bt=3}}function eb(){if(Bt===4||Bt===3){Bt=0,mu();var e=mr,n=xs,o=va,c=Uy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Bt=5:(Bt=0,xs=mr=null,tb(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(hr=null),xe(o),n=n.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ba,n,void 0,(n.current.flags&128)===128)}catch{}if(c!==null){n=D.T,f=le.p,le.p=2,D.T=null;try{for(var g=e.onRecoverableError,S=0;S<c.length;S++){var A=c[S];g(A.value,{componentStack:A.stack})}}finally{D.T=n,le.p=f}}(va&3)!==0&&wd(),Fi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===Sm?ec++:(ec=0,Sm=e):ec=0,tc(0)}}function tb(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Il(n)))}function wd(){return Jy(),Qy(),eb(),nb()}function nb(){if(Bt!==5)return!1;var e=mr,n=xm;xm=0;var o=xe(va),c=D.T,f=le.p;try{le.p=32>o?32:o,D.T=null,o=wm,wm=null;var g=mr,S=va;if(Bt=0,xs=mr=null,va=0,(et&6)!==0)throw Error(s(331));var A=et;if(et|=4,Ny(g.current),My(g,g.current,S,o),et=A,tc(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ba,g)}catch{}return!0}finally{le.p=f,D.T=c,tb(e,n)}}function ib(e,n,o){n=l(o,n),n=tm(e.stateNode,n,2),e=sr(e,n,2),e!==null&&(Wi(e,2),Fi(e))}function rt(e,n,o){if(e.tag===3)ib(e,e,o);else for(;n!==null;){if(n.tag===3){ib(n,e,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){e=l(o,e),o=ay(2),c=sr(n,o,2),c!==null&&(ry(o,c,n,e),Wi(c,2),Fi(c));break}}n=n.return}}function Cm(e,n,o){var c=e.pingCache;if(c===null){c=e.pingCache=new sC;var f=new Set;c.set(n,f)}else f=c.get(n),f===void 0&&(f=new Set,c.set(n,f));f.has(o)||(ym=!0,f.add(o),e=fC.bind(null,e,n,o),n.then(e,e))}function fC(e,n,o){var c=e.pingCache;c!==null&&c.delete(n),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,dt===e&&(Ge&o)===o&&(Et===4||Et===3&&(Ge&62914560)===Ge&&300>on()-gd?(et&2)===0&&ws(e,0):bm|=o,_s===Ge&&(_s=0)),Fi(e)}function ab(e,n){n===0&&(n=gu()),e=Zn(e,n),e!==null&&(Wi(e,n),Fi(e))}function hC(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),ab(e,o)}function mC(e,n){var o=0;switch(e.tag){case 31:case 13:var c=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(n),ab(e,o)}function pC(e,n){return Yi(e,n)}var Sd=null,Es=null,Am=!1,Ed=!1,km=!1,gr=0;function Fi(e){e!==Es&&e.next===null&&(Es===null?Sd=Es=e:Es=Es.next=e),Ed=!0,Am||(Am=!0,vC())}function tc(e,n){if(!km&&Ed){km=!0;do for(var o=!1,c=Sd;c!==null;){if(e!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var S=c.suspendedLanes,A=c.pingedLanes;g=(1<<31-sn(42|e)+1)-1,g&=f&~(S&~A),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,lb(c,g))}else g=Ge,g=Ho(c,c===dt?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||qr(c,g)||(o=!0,lb(c,g));c=c.next}while(o);km=!1}}function gC(){rb()}function rb(){Ed=Am=!1;var e=0;gr!==0&&AC()&&(e=gr);for(var n=on(),o=null,c=Sd;c!==null;){var f=c.next,g=ob(c,n);g===0?(c.next=null,o===null?Sd=f:o.next=f,f===null&&(Es=o)):(o=c,(e!==0||(g&3)!==0)&&(Ed=!0)),c=f}Bt!==0&&Bt!==5||tc(e),gr!==0&&(gr=0)}function ob(e,n){for(var o=e.suspendedLanes,c=e.pingedLanes,f=e.expirationTimes,g=e.pendingLanes&-62914561;0<g;){var S=31-sn(g),A=1<<S,I=f[S];I===-1?((A&o)===0||(A&c)!==0)&&(f[S]=oh(A,n)):I<=n&&(e.expiredLanes|=A),g&=~A}if(n=dt,o=Ge,o=Ho(e,e===n?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,o===0||e===n&&(at===2||at===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&Ur(c),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||qr(e,o)){if(n=o&-o,n===e.callbackPriority)return n;switch(c!==null&&Ur(c),xe(o)){case 2:case 8:o=sl;break;case 32:o=Fr;break;case 268435456:o=ll;break;default:o=Fr}return c=sb.bind(null,e),o=Yi(o,c),e.callbackPriority=n,e.callbackNode=o,n}return c!==null&&c!==null&&Ur(c),e.callbackPriority=2,e.callbackNode=null,2}function sb(e,n){if(Bt!==0&&Bt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(wd()&&e.callbackNode!==o)return null;var c=Ge;return c=Ho(e,e===dt?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(Hy(e,c,n),ob(e,on()),e.callbackNode!=null&&e.callbackNode===o?sb.bind(null,e):null)}function lb(e,n){if(wd())return null;Hy(e,n,!0)}function vC(){jC(function(){(et&6)!==0?Yi(Fo,gC):rb()})}function jm(){if(gr===0){var e=cs;e===0&&(e=$r,$r<<=1,($r&261888)===0&&($r=256)),gr=e}return gr}function cb(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Za(""+e)}function ub(e,n){var o=n.ownerDocument.createElement("input");return o.name=n.name,o.value=n.value,e.id&&o.setAttribute("form",e.id),n.parentNode.insertBefore(o,n),e=new FormData(e),o.parentNode.removeChild(o),e}function yC(e,n,o,c,f){if(n==="submit"&&o&&o.stateNode===f){var g=cb((f[Ht]||null).action),S=c.submitter;S&&(n=(n=S[Ht]||null)?cb(n.formAction):S.getAttribute("formAction"),n!==null&&(g=n,S=null));var A=new Go("action","action",null,c,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(gr!==0){var I=S?ub(f,S):new FormData(f);Kh(o,{pending:!0,data:I,method:f.method,action:g},null,I)}}else typeof g=="function"&&(A.preventDefault(),I=S?ub(f,S):new FormData(f),Kh(o,{pending:!0,data:I,method:f.method,action:g},g,I))},currentTarget:f}]})}}for(var Om=0;Om<Ii.length;Om++){var zm=Ii[Om],bC=zm.toLowerCase(),_C=zm[0].toUpperCase()+zm.slice(1);vn(bC,"on"+_C)}vn(fo,"onAnimationEnd"),vn(Hu,"onAnimationIteration"),vn(ho,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(_h,"onTransitionRun"),vn($u,"onTransitionStart"),vn(xh,"onTransitionCancel"),vn(nr,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nc));function db(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var c=e[o],f=c.event;c=c.listeners;e:{var g=void 0;if(n)for(var S=c.length-1;0<=S;S--){var A=c[S],I=A.instance,Z=A.currentTarget;if(A=A.listener,I!==g&&f.isPropagationStopped())break e;g=A,f.currentTarget=Z;try{g(f)}catch(X){mo(X)}f.currentTarget=null,g=I}else for(S=0;S<c.length;S++){if(A=c[S],I=A.instance,Z=A.currentTarget,A=A.listener,I!==g&&f.isPropagationStopped())break e;g=A,f.currentTarget=Z;try{g(f)}catch(X){mo(X)}f.currentTarget=null,g=I}}}}function Ze(e,n){var o=n[Ci];o===void 0&&(o=n[Ci]=new Set);var c=e+"__bubble";o.has(c)||(fb(n,e,2,!1),o.add(c))}function Lm(e,n,o){var c=0;n&&(c|=4),fb(o,e,c,n)}var Td="_reactListening"+Math.random().toString(36).slice(2);function Rm(e){if(!e[Td]){e[Td]=!0,wu.forEach(function(o){o!=="selectionchange"&&(xC.has(o)||Lm(o,!1,e),Lm(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Td]||(n[Td]=!0,Lm("selectionchange",!1,n))}}function fb(e,n,o,c){switch(Fb(n)){case 2:var f=KC;break;case 8:f=WC;break;default:f=Ym}o=f.bind(null,n,o,e),f=void 0,!Qr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),c?f!==void 0?e.addEventListener(n,o,{capture:!0,passive:f}):e.addEventListener(n,o,!0):f!==void 0?e.addEventListener(n,o,{passive:f}):e.addEventListener(n,o,!1)}function Mm(e,n,o,c,f){var g=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var A=c.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=c.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=Ji(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){c=g=S;continue e}A=A.parentNode}}c=c.return}bl(function(){var Z=g,X=Jr(o),ne=[];e:{var G=Vu.get(e);if(G!==void 0){var K=Go,be=e;switch(e){case"keypress":if(eo(o)===0)break e;case"keydown":case"keyup":K=Ou;break;case"focusin":be="focus",K=wl;break;case"focusout":be="blur",K=wl;break;case"beforeblur":case"afterblur":K=wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=mh;break;case fo:case Hu:case ho:K=Sl;break;case nr:K=Ru;break;case"scroll":case"scrollend":K=qe;break;case"wheel":K=ia;break;case"copy":case"cut":case"paste":K=Fn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=zu;break;case"toggle":case"beforetoggle":K=io}var Oe=(n&4)!==0,ct=!Oe&&(e==="scroll"||e==="scrollend"),U=Oe?G!==null?G+"Capture":null:G;Oe=[];for(var N=Z,V;N!==null;){var ee=N;if(V=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||V===null||U===null||(ee=ta(N,U),ee!=null&&Oe.push(ic(N,ee,V))),ct)break;N=N.return}0<Oe.length&&(G=new K(G,be,null,o,X),ne.push({event:G,listeners:Oe}))}}if((n&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",G&&o!==qo&&(be=o.relatedTarget||o.fromElement)&&(Ji(be)||be[Xi]))break e;if((K||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,K?(be=o.relatedTarget||o.toElement,K=Z,be=be?Ji(be):null,be!==null&&(ct=m(be),Oe=be.tag,be!==ct||Oe!==5&&Oe!==27&&Oe!==6)&&(be=null)):(K=null,be=Z),K!==be)){if(Oe=Tu,ee="onMouseLeave",U="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(Oe=zu,ee="onPointerLeave",U="onPointerEnter",N="pointer"),ct=K==null?G:Ai(K),V=be==null?G:Ai(be),G=new Oe(ee,N+"leave",K,o,X),G.target=ct,G.relatedTarget=V,ee=null,Ji(X)===Z&&(Oe=new Oe(U,N+"enter",be,o,X),Oe.target=V,Oe.relatedTarget=ct,ee=Oe),ct=ee,K&&be)t:{for(Oe=wC,U=K,N=be,V=0,ee=U;ee;ee=Oe(ee))V++;ee=0;for(var Ee=N;Ee;Ee=Oe(Ee))ee++;for(;0<V-ee;)U=Oe(U),V--;for(;0<ee-V;)N=Oe(N),ee--;for(;V--;){if(U===N||N!==null&&U===N.alternate){Oe=U;break t}U=Oe(U),N=Oe(N)}Oe=null}else Oe=null;K!==null&&hb(ne,G,K,Oe,!1),be!==null&&ct!==null&&hb(ne,ct,be,Oe,!0)}}e:{if(G=Z?Ai(Z):window,K=G.nodeName&&G.nodeName.toLowerCase(),K==="select"||K==="input"&&G.type==="file")var Xe=so;else if(Hn(G))if(Nu)Xe=bh;else{Xe=yh;var _e=oi}else K=G.nodeName,!K||K.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Z&&Xr(Z.elementType)&&(Xe=so):Xe=Ja;if(Xe&&(Xe=Xe(e,Z))){Pu(ne,Xe,o,X);break e}_e&&_e(e,G,Z),e==="focusout"&&Z&&G.type==="number"&&Z.memoizedProps.value!=null&&ii(G,"number",G.value)}switch(_e=Z?Ai(Z):window,e){case"focusin":(Hn(_e)||_e.contentEditable==="true")&&(Ri=_e,ns=Z,uo=null);break;case"focusout":uo=ns=Ri=null;break;case"mousedown":er=!0;break;case"contextmenu":case"mouseup":case"dragend":er=!1,Uu(ne,o,X);break;case"selectionchange":if(ts)break;case"keydown":case"keyup":Uu(ne,o,X)}var Be;if(Ko)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Ka?Iu(e,o)&&(Ye="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(Wo&&o.locale!=="ko"&&(Ka||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Ka&&(Be=Oi()):(Un=X,na="value"in Un?Un.value:Un.textContent,Ka=!0)),_e=Cd(Z,Ye),0<_e.length&&(Ye=new El(Ye,e,null,o,X),ne.push({event:Ye,listeners:_e}),Be?Ye.data=Be:(Be=kl(o),Be!==null&&(Ye.data=Be)))),(Be=gh?jn(e,o):Wa(e,o))&&(Ye=Cd(Z,"onBeforeInput"),0<Ye.length&&(_e=new El("onBeforeInput","beforeinput",null,o,X),ne.push({event:_e,listeners:Ye}),_e.data=Be)),yC(ne,e,Z,o,X)}db(ne,n)})}function ic(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Cd(e,n){for(var o=n+"Capture",c=[];e!==null;){var f=e,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=ta(e,o),f!=null&&c.unshift(ic(e,f,g)),f=ta(e,n),f!=null&&c.push(ic(e,f,g))),e.tag===3)return c;e=e.return}return[]}function wC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hb(e,n,o,c,f){for(var g=n._reactName,S=[];o!==null&&o!==c;){var A=o,I=A.alternate,Z=A.stateNode;if(A=A.tag,I!==null&&I===c)break;A!==5&&A!==26&&A!==27||Z===null||(I=Z,f?(Z=ta(o,g),Z!=null&&S.unshift(ic(o,Z,I))):f||(Z=ta(o,g),Z!=null&&S.push(ic(o,Z,I)))),o=o.return}S.length!==0&&e.push({event:n,listeners:S})}var SC=/\r\n?/g,EC=/\u0000|\uFFFD/g;function mb(e){return(typeof e=="string"?e:""+e).replace(SC,`
`).replace(EC,"")}function pb(e,n){return n=mb(n),mb(e)===n}function lt(e,n,o,c,f,g){switch(o){case"children":typeof c=="string"?n==="body"||n==="textarea"&&c===""||Bn(e,c):(typeof c=="number"||typeof c=="bigint")&&n!=="body"&&Bn(e,""+c);break;case"className":ot(e,"class",c);break;case"tabIndex":ot(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(e,o,c);break;case"style":Vo(e,c,g);break;case"data":if(n!=="object"){ot(e,"data",c);break}case"src":case"href":if(c===""&&(n!=="a"||o!=="href")){e.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(o);break}c=Za(""+c),e.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(n!=="input"&&lt(e,n,"name",f.name,f,null),lt(e,n,"formEncType",f.formEncType,f,null),lt(e,n,"formMethod",f.formMethod,f,null),lt(e,n,"formTarget",f.formTarget,f,null)):(lt(e,n,"encType",f.encType,f,null),lt(e,n,"method",f.method,f,null),lt(e,n,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(o);break}c=Za(""+c),e.setAttribute(o,c);break;case"onClick":c!=null&&(e.onclick=pn);break;case"onScroll":c!=null&&Ze("scroll",e);break;case"onScrollEnd":c!=null&&Ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=o}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}o=Za(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,""+c):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":c===!0?e.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,c):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(o,c):e.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(o):e.setAttribute(o,c);break;case"popover":Ze("beforetoggle",e),Ze("toggle",e),He(e,"popover",c);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":He(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Zo.get(o)||o,He(e,o,c))}}function Im(e,n,o,c,f,g){switch(o){case"style":Vo(e,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=o}}break;case"children":typeof c=="string"?Bn(e,c):(typeof c=="number"||typeof c=="bigint")&&Bn(e,""+c);break;case"onScroll":c!=null&&Ze("scroll",e);break;case"onScrollEnd":c!=null&&Ze("scrollend",e);break;case"onClick":c!=null&&(e.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Su.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),n=o.slice(2,f?o.length-7:void 0),g=e[Ht]||null,g=g!=null?g[o]:null,typeof g=="function"&&e.removeEventListener(n,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(n,c,f);break e}o in e?e[o]=c:c===!0?e.setAttribute(o,""):He(e,o,c)}}}function Qt(e,n,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ze("error",e),Ze("load",e);var c=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var S=o[g];if(S!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:lt(e,n,g,S,o,null)}}f&&lt(e,n,"srcSet",o.srcSet,o,null),c&&lt(e,n,"src",o.src,o,null);return;case"input":Ze("invalid",e);var A=g=S=f=null,I=null,Z=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":f=X;break;case"type":S=X;break;case"checked":I=X;break;case"defaultChecked":Z=X;break;case"value":g=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:lt(e,n,c,X,o,null)}}Wr(e,g,A,I,Z,S,f,!1);return;case"select":Ze("invalid",e),c=S=g=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":g=A;break;case"defaultValue":S=A;break;case"multiple":c=A;default:lt(e,n,f,A,o,null)}n=g,o=S,e.multiple=!!c,n!=null?ut(e,!!c,n,!1):o!=null&&ut(e,!!c,o,!0);return;case"textarea":Ze("invalid",e),g=f=c=null;for(S in o)if(o.hasOwnProperty(S)&&(A=o[S],A!=null))switch(S){case"value":c=A;break;case"defaultValue":f=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:lt(e,n,S,A,o,null)}$a(e,c,f,g);return;case"option":for(I in o)o.hasOwnProperty(I)&&(c=o[I],c!=null)&&(I==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":lt(e,n,I,c,o,null));return;case"dialog":Ze("beforetoggle",e),Ze("toggle",e),Ze("cancel",e),Ze("close",e);break;case"iframe":case"object":Ze("load",e);break;case"video":case"audio":for(c=0;c<nc.length;c++)Ze(nc[c],e);break;case"image":Ze("error",e),Ze("load",e);break;case"details":Ze("toggle",e);break;case"embed":case"source":case"link":Ze("error",e),Ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in o)if(o.hasOwnProperty(Z)&&(c=o[Z],c!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:lt(e,n,Z,c,o,null)}return;default:if(Xr(n)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&Im(e,n,X,c,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(c=o[A],c!=null&&lt(e,n,A,c,o,null))}function TC(e,n,o,c){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,S=null,A=null,I=null,Z=null,X=null;for(K in o){var ne=o[K];if(o.hasOwnProperty(K)&&ne!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=ne;default:c.hasOwnProperty(K)||lt(e,n,K,null,c,ne)}}for(var G in c){var K=c[G];if(ne=o[G],c.hasOwnProperty(G)&&(K!=null||ne!=null))switch(G){case"type":g=K;break;case"name":f=K;break;case"checked":Z=K;break;case"defaultChecked":X=K;break;case"value":S=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:K!==ne&&lt(e,n,G,K,c,ne)}}gl(e,S,A,I,Z,X,g,f);return;case"select":K=S=A=G=null;for(g in o)if(I=o[g],o.hasOwnProperty(g)&&I!=null)switch(g){case"value":break;case"multiple":K=I;default:c.hasOwnProperty(g)||lt(e,n,g,null,c,I)}for(f in c)if(g=c[f],I=o[f],c.hasOwnProperty(f)&&(g!=null||I!=null))switch(f){case"value":G=g;break;case"defaultValue":A=g;break;case"multiple":S=g;default:g!==I&&lt(e,n,f,g,c,I)}n=A,o=S,c=K,G!=null?ut(e,!!o,G,!1):!!c!=!!o&&(n!=null?ut(e,!!o,n,!0):ut(e,!!o,o?[]:"",!1));return;case"textarea":K=G=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:lt(e,n,A,null,c,f)}for(S in c)if(f=c[S],g=o[S],c.hasOwnProperty(S)&&(f!=null||g!=null))switch(S){case"value":G=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==g&&lt(e,n,S,f,c,g)}ji(e,G,K);return;case"option":for(var be in o)G=o[be],o.hasOwnProperty(be)&&G!=null&&!c.hasOwnProperty(be)&&(be==="selected"?e.selected=!1:lt(e,n,be,null,c,G));for(I in c)G=c[I],K=o[I],c.hasOwnProperty(I)&&G!==K&&(G!=null||K!=null)&&(I==="selected"?e.selected=G&&typeof G!="function"&&typeof G!="symbol":lt(e,n,I,G,c,K));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in o)G=o[Oe],o.hasOwnProperty(Oe)&&G!=null&&!c.hasOwnProperty(Oe)&&lt(e,n,Oe,null,c,G);for(Z in c)if(G=c[Z],K=o[Z],c.hasOwnProperty(Z)&&G!==K&&(G!=null||K!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:lt(e,n,Z,G,c,K)}return;default:if(Xr(n)){for(var ct in o)G=o[ct],o.hasOwnProperty(ct)&&G!==void 0&&!c.hasOwnProperty(ct)&&Im(e,n,ct,void 0,c,G);for(X in c)G=c[X],K=o[X],!c.hasOwnProperty(X)||G===K||G===void 0&&K===void 0||Im(e,n,X,G,c,K);return}}for(var U in o)G=o[U],o.hasOwnProperty(U)&&G!=null&&!c.hasOwnProperty(U)&&lt(e,n,U,null,c,G);for(ne in c)G=c[ne],K=o[ne],!c.hasOwnProperty(ne)||G===K||G==null&&K==null||lt(e,n,ne,G,c,K)}function gb(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var f=o[c],g=f.transferSize,S=f.initiatorType,A=f.duration;if(g&&A&&gb(S)){for(S=0,A=f.responseEnd,c+=1;c<o.length;c++){var I=o[c],Z=I.startTime;if(Z>A)break;var X=I.transferSize,ne=I.initiatorType;X&&gb(ne)&&(I=I.responseEnd,S+=X*(I<A?1:(A-Z)/(I-Z)))}if(--c,n+=8*(g+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pm=null,Nm=null;function Ad(e){return e.nodeType===9?e:e.ownerDocument}function vb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yb(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Dm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bm=null;function AC(){var e=window.event;return e&&e.type==="popstate"?e===Bm?!1:(Bm=e,!0):(Bm=null,!1)}var bb=typeof setTimeout=="function"?setTimeout:void 0,kC=typeof clearTimeout=="function"?clearTimeout:void 0,_b=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof _b<"u"?function(e){return _b.resolve(null).then(e).catch(OC)}:bb;function OC(e){setTimeout(function(){throw e})}function vr(e){return e==="head"}function xb(e,n){var o=n,c=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(c===0){e.removeChild(f),ks(n);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")ac(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,ac(o);for(var g=o.firstChild;g;){var S=g.nextSibling,A=g.nodeName;g[Gr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=S}}else o==="body"&&ac(e.ownerDocument.body);o=f}while(o);ks(n)}function wb(e,n){var o=e;e=0;do{var c=o.nextSibling;if(o.nodeType===1?n?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(n?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=c}while(o)}function Um(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var o=n;switch(n=n.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Um(o),fl(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function zC(e,n,o,c){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[Gr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(g=e.getAttribute("rel"),g==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(g!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(g=e.getAttribute("src"),(g!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===g)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function LC(e,n,o){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Yn(e.nextSibling),e===null))return null;return e}function Sb(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Fm(e){return e.data==="$?"||e.data==="$~"}function Hm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RC(e,n){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||o.readyState!=="loading")n();else{var c=function(){n(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $m=null;function Eb(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(n===0)return Yn(e.nextSibling);n--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||n++}e=e.nextSibling}return null}function Tb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(n===0)return e;n--}else o!=="/$"&&o!=="/&"||n++}e=e.previousSibling}return null}function Cb(e,n,o){switch(n=Ad(o),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ac(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fl(e)}var Kn=new Map,Ab=new Set;function kd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=le.d;le.d={f:MC,r:IC,D:PC,C:NC,L:DC,m:BC,X:FC,S:UC,M:HC};function MC(){var e=ya.f(),n=bd();return e||n}function IC(e){var n=Ua(e);n!==null&&n.tag===5&&n.type==="form"?Vv(n):ya.r(e)}var Ts=typeof document>"u"?null:document;function kb(e,n,o){var c=Ts;if(c&&typeof n=="string"&&n){var f=ht(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Ab.has(f)||(Ab.add(f),e={rel:e,crossOrigin:o,href:n},c.querySelector(f)===null&&(n=c.createElement("link"),Qt(n,"link",e),Ot(n),c.head.appendChild(n)))}}function PC(e){ya.D(e),kb("dns-prefetch",e,null)}function NC(e,n){ya.C(e,n),kb("preconnect",e,n)}function DC(e,n,o){ya.L(e,n,o);var c=Ts;if(c&&e&&n){var f='link[rel="preload"][as="'+ht(n)+'"]';n==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ht(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ht(o.imageSizes)+'"]')):f+='[href="'+ht(e)+'"]';var g=f;switch(n){case"style":g=Cs(e);break;case"script":g=As(e)}Kn.has(g)||(e=E({rel:"preload",href:n==="image"&&o&&o.imageSrcSet?void 0:e,as:n},o),Kn.set(g,e),c.querySelector(f)!==null||n==="style"&&c.querySelector(rc(g))||n==="script"&&c.querySelector(oc(g))||(n=c.createElement("link"),Qt(n,"link",e),Ot(n),c.head.appendChild(n)))}}function BC(e,n){ya.m(e,n);var o=Ts;if(o&&e){var c=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+ht(c)+'"][href="'+ht(e)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=As(e)}if(!Kn.has(g)&&(e=E({rel:"modulepreload",href:e},n),Kn.set(g,e),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(oc(g)))return}c=o.createElement("link"),Qt(c,"link",e),Ot(c),o.head.appendChild(c)}}}function UC(e,n,o){ya.S(e,n,o);var c=Ts;if(c&&e){var f=Fa(c).hoistableStyles,g=Cs(e);n=n||"default";var S=f.get(g);if(!S){var A={loading:0,preload:null};if(S=c.querySelector(rc(g)))A.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},o),(o=Kn.get(g))&&Vm(e,o);var I=S=c.createElement("link");Ot(I),Qt(I,"link",e),I._p=new Promise(function(Z,X){I.onload=Z,I.onerror=X}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jd(S,n,c)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(g,S)}}}function FC(e,n){ya.X(e,n);var o=Ts;if(o&&e){var c=Fa(o).hoistableScripts,f=As(e),g=c.get(f);g||(g=o.querySelector(oc(f)),g||(e=E({src:e,async:!0},n),(n=Kn.get(f))&&Zm(e,n),g=o.createElement("script"),Ot(g),Qt(g,"link",e),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function HC(e,n){ya.M(e,n);var o=Ts;if(o&&e){var c=Fa(o).hoistableScripts,f=As(e),g=c.get(f);g||(g=o.querySelector(oc(f)),g||(e=E({src:e,async:!0,type:"module"},n),(n=Kn.get(f))&&Zm(e,n),g=o.createElement("script"),Ot(g),Qt(g,"link",e),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function jb(e,n,o,c){var f=(f=pe.current)?kd(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(n=Cs(o.href),o=Fa(f).hoistableStyles,c=o.get(n),c||(c={type:"style",instance:null,count:0,state:null},o.set(n,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Cs(o.href);var g=Fa(f).hoistableStyles,S=g.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(e,S),(g=f.querySelector(rc(e)))&&!g._p&&(S.instance=g,S.state.loading=5),Kn.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Kn.set(e,o),g||$C(f,e,o,S.state))),n&&c===null)throw Error(s(528,""));return S}if(n&&c!==null)throw Error(s(529,""));return null;case"script":return n=o.async,o=o.src,typeof o=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=As(o),o=Fa(f).hoistableScripts,c=o.get(n),c||(c={type:"script",instance:null,count:0,state:null},o.set(n,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Cs(e){return'href="'+ht(e)+'"'}function rc(e){return'link[rel="stylesheet"]['+e+"]"}function Ob(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function $C(e,n,o,c){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?c.loading=1:(n=e.createElement("link"),c.preload=n,n.addEventListener("load",function(){return c.loading|=1}),n.addEventListener("error",function(){return c.loading|=2}),Qt(n,"link",o),Ot(n),e.head.appendChild(n))}function As(e){return'[src="'+ht(e)+'"]'}function oc(e){return"script[async]"+e}function zb(e,n,o){if(n.count++,n.instance===null)switch(n.type){case"style":var c=e.querySelector('style[data-href~="'+ht(o.href)+'"]');if(c)return n.instance=c,Ot(c),c;var f=E({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),Ot(c),Qt(c,"style",f),jd(c,o.precedence,e),n.instance=c;case"stylesheet":f=Cs(o.href);var g=e.querySelector(rc(f));if(g)return n.state.loading|=4,n.instance=g,Ot(g),g;c=Ob(o),(f=Kn.get(f))&&Vm(c,f),g=(e.ownerDocument||e).createElement("link"),Ot(g);var S=g;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Qt(g,"link",c),n.state.loading|=4,jd(g,o.precedence,e),n.instance=g;case"script":return g=As(o.src),(f=e.querySelector(oc(g)))?(n.instance=f,Ot(f),f):(c=o,(f=Kn.get(g))&&(c=E({},o),Zm(c,f)),e=e.ownerDocument||e,f=e.createElement("script"),Ot(f),Qt(f,"link",c),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(c=n.instance,n.state.loading|=4,jd(c,o.precedence,e));return n.instance}function jd(e,n,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,S=0;S<c.length;S++){var A=c[S];if(A.dataset.precedence===n)g=A;else if(g!==f)break}g?g.parentNode.insertBefore(e,g.nextSibling):(n=o.nodeType===9?o.head:o,n.insertBefore(e,n.firstChild))}function Vm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Od=null;function Lb(e,n,o){if(Od===null){var c=new Map,f=Od=new Map;f.set(o,c)}else f=Od,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(e))return c;for(c.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var g=o[f];if(!(g[Gr]||g[jt]||e==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var S=g.getAttribute(n)||"";S=e+S;var A=c.get(S);A?A.push(g):c.set(S,[g])}}return c}function Rb(e,n,o){e=e.ownerDocument||e,e.head.insertBefore(o,n==="title"?e.querySelector("head > title"):null)}function VC(e,n,o){if(o===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZC(e,n,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Cs(c.href),g=n.querySelector(rc(f));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=zd.bind(e),n.then(e,e)),o.state.loading|=4,o.instance=g,Ot(g);return}g=n.ownerDocument||n,c=Ob(c),(f=Kn.get(f))&&Vm(c,f),g=g.createElement("link"),Ot(g);var S=g;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Qt(g,"link",c),o.instance=g}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,n),(n=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=zd.bind(e),n.addEventListener("load",o),n.addEventListener("error",o))}}var qm=0;function qC(e,n){return e.stylesheets&&e.count===0&&Rd(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var c=setTimeout(function(){if(e.stylesheets&&Rd(e,e.stylesheets),e.unsuspend){var g=e.unsuspend;e.unsuspend=null,g()}},6e4+n);0<e.imgBytes&&qm===0&&(qm=62500*CC());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rd(e,e.stylesheets),e.unsuspend)){var g=e.unsuspend;e.unsuspend=null,g()}},(e.imgBytes>qm?50:800)+n);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(f)}}:null}function zd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ld=null;function Rd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ld=new Map,n.forEach(GC,e),Ld=null,zd.call(e))}function GC(e,n){if(!(n.state.loading&4)){var o=Ld.get(e);if(o)var c=o.get(null);else{o=new Map,Ld.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var S=f[g];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),c=S)}c&&o.set(null,c)}f=n.instance,S=f.getAttribute("data-precedence"),g=o.get(S)||c,g===c&&o.set(null,f),o.set(S,f),this.count++,c=zd.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var sc={$$typeof:W,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function YC(e,n,o,c,f,g,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.hiddenUpdates=cl(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ib(e,n,o,c,f,g,S,A,I,Z,X,ne){return e=new YC(e,n,o,S,I,Z,X,ne,A),n=1,g===!0&&(n|=24),g=an(3,null,null,n),e.current=g,g.stateNode=e,n=Th(),n.refCount++,e.pooledCache=n,n.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:n},jh(g),e}function Pb(e){return e?(e=aa,e):aa}function Nb(e,n,o,c,f,g){f=Pb(f),c.context===null?c.context=f:c.pendingContext=f,c=or(n),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=sr(e,c,n),o!==null&&(En(o,e,n),Bl(o,e,n))}function Db(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Gm(e,n){Db(e,n),(e=e.alternate)&&Db(e,n)}function Bb(e){if(e.tag===13||e.tag===31){var n=Zn(e,67108864);n!==null&&En(n,e,67108864),Gm(e,67108864)}}function Ub(e){if(e.tag===13||e.tag===31){var n=Mn();n=hn(n);var o=Zn(e,n);o!==null&&En(o,e,n),Gm(e,n)}}var Md=!0;function KC(e,n,o,c){var f=D.T;D.T=null;var g=le.p;try{le.p=2,Ym(e,n,o,c)}finally{le.p=g,D.T=f}}function WC(e,n,o,c){var f=D.T;D.T=null;var g=le.p;try{le.p=8,Ym(e,n,o,c)}finally{le.p=g,D.T=f}}function Ym(e,n,o,c){if(Md){var f=Km(c);if(f===null)Mm(e,n,c,Id,o),Hb(e,c);else if(JC(f,e,n,o,c))c.stopPropagation();else if(Hb(e,c),n&4&&-1<XC.indexOf(e)){for(;f!==null;){var g=Ua(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var S=Ki(g.pendingLanes);if(S!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-sn(S);A.entanglements[1]|=I,S&=~I}Fi(g),(et&6)===0&&(vd=on()+500,tc(0))}}break;case 31:case 13:A=Zn(g,2),A!==null&&En(A,g,2),bd(),Gm(g,2)}if(g=Km(c),g===null&&Mm(e,n,c,Id,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else Mm(e,n,c,null,o)}}function Km(e){return e=Jr(e),Wm(e)}var Id=null;function Wm(e){if(Id=null,e=Ji(e),e!==null){var n=m(e);if(n===null)e=null;else{var o=n.tag;if(o===13){if(e=p(n),e!==null)return e;e=null}else if(o===31){if(e=b(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Id=e,null}function Fb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(th()){case Fo:return 2;case sl:return 8;case Fr:case nh:return 32;case ll:return 268435456;default:return 32}default:return 32}}var Xm=!1,yr=null,br=null,_r=null,lc=new Map,cc=new Map,xr=[],XC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hb(e,n){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":lc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cc.delete(n.pointerId)}}function uc(e,n,o,c,f,g){return e===null||e.nativeEvent!==g?(e={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},n!==null&&(n=Ua(n),n!==null&&Bb(n)),e):(e.eventSystemFlags|=c,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function JC(e,n,o,c,f){switch(n){case"focusin":return yr=uc(yr,e,n,o,c,f),!0;case"dragenter":return br=uc(br,e,n,o,c,f),!0;case"mouseover":return _r=uc(_r,e,n,o,c,f),!0;case"pointerover":var g=f.pointerId;return lc.set(g,uc(lc.get(g)||null,e,n,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,cc.set(g,uc(cc.get(g)||null,e,n,o,c,f)),!0}return!1}function $b(e){var n=Ji(e.target);if(n!==null){var o=m(n);if(o!==null){if(n=o.tag,n===13){if(n=p(o),n!==null){e.blockedOn=n,dl(e.priority,function(){Ub(o)});return}}else if(n===31){if(n=b(o),n!==null){e.blockedOn=n,dl(e.priority,function(){Ub(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pd(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Km(e.nativeEvent);if(o===null){o=e.nativeEvent;var c=new o.constructor(o.type,o);qo=c,o.target.dispatchEvent(c),qo=null}else return n=Ua(o),n!==null&&Bb(n),e.blockedOn=o,!1;n.shift()}return!0}function Vb(e,n,o){Pd(e)&&o.delete(n)}function QC(){Xm=!1,yr!==null&&Pd(yr)&&(yr=null),br!==null&&Pd(br)&&(br=null),_r!==null&&Pd(_r)&&(_r=null),lc.forEach(Vb),cc.forEach(Vb)}function Nd(e,n){e.blockedOn===n&&(e.blockedOn=null,Xm||(Xm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,QC)))}var Dd=null;function Zb(e){Dd!==e&&(Dd=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Dd===e&&(Dd=null);for(var n=0;n<e.length;n+=3){var o=e[n],c=e[n+1],f=e[n+2];if(typeof c!="function"){if(Wm(c||o)===null)continue;break}var g=Ua(o);g!==null&&(e.splice(n,3),n-=3,Kh(g,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function ks(e){function n(I){return Nd(I,e)}yr!==null&&Nd(yr,e),br!==null&&Nd(br,e),_r!==null&&Nd(_r,e),lc.forEach(n),cc.forEach(n);for(var o=0;o<xr.length;o++){var c=xr[o];c.blockedOn===e&&(c.blockedOn=null)}for(;0<xr.length&&(o=xr[0],o.blockedOn===null);)$b(o),o.blockedOn===null&&xr.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],g=o[c+1],S=f[Ht]||null;if(typeof g=="function")S||Zb(o);else if(S){var A=null;if(g&&g.hasAttribute("formAction")){if(f=g,S=g[Ht]||null)A=S.formAction;else if(Wm(f)!==null)continue}else A=S.action;typeof A=="function"?o[c+1]=A:(o.splice(c,3),c-=3),Zb(o)}}}function qb(){function e(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Jm(e){this._internalRoot=e}Bd.prototype.render=Jm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var o=n.current,c=Mn();Nb(o,c,e,n,null,null)},Bd.prototype.unmount=Jm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nb(e.current,2,null,e,null,null),bd(),n[Xi]=null}};function Bd(e){this._internalRoot=e}Bd.prototype.unstable_scheduleHydration=function(e){if(e){var n=ul();e={blockedOn:null,target:e,priority:n};for(var o=0;o<xr.length&&n!==0&&n<xr[o].priority;o++);xr.splice(o,0,e),o===0&&$b(e)}};var Gb=i.version;if(Gb!=="19.2.4")throw Error(s(527,Gb,"19.2.4"));le.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=_(n),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var eA={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ud=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ud.isDisabled&&Ud.supportsFiber)try{Ba=Ud.inject(eA),Kt=Ud}catch{}}return fc.createRoot=function(e,n){if(!u(e))throw Error(s(299));var o=!1,c="",f=ey,g=ty,S=ny;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Ib(e,1,!1,null,null,o,c,null,f,g,S,qb),e[Xi]=n.current,Rm(e),new Jm(n)},fc.hydrateRoot=function(e,n,o){if(!u(e))throw Error(s(299));var c=!1,f="",g=ey,S=ty,A=ny,I=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(I=o.formState)),n=Ib(e,1,!0,n,o??null,c,f,I,g,S,A,qb),n.context=Pb(null),o=n.current,c=Mn(),c=hn(c),f=or(c),f.callback=null,sr(o,f,c),o=c,n.current.lanes=o,Wi(n,o),Fi(n),e[Xi]=n.current,Rm(e),new Bd(n)},fc.version="19.2.4",fc}var i_;function cA(){if(i_)return tp.exports;i_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),tp.exports=lA(),tp.exports}var uA=cA();var r0=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Yw=/^[\\/]{2}/;function dA(t,i){return i+t.replace(/\\/g,"/")}var a_="popstate";function r_(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function fA(t={}){function i(s,u){let m=u.state?.masked,{pathname:p,search:b,hash:y}=m||s.location;return lg("",{pathname:p,search:b,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default",m?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function r(s,u){return typeof u=="string"?u:$c(u)}return mA(i,r,null,t)}function bt(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function Jn(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function hA(){return Math.random().toString(36).substring(2,10)}function o_(t,i){return{usr:t.state,key:t.key,idx:i,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function lg(t,i,r=null,s,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?Js(i):i,state:r,key:i&&i.key||s||hA(),mask:u}}function $c({pathname:t="/",search:i="",hash:r=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Js(t){let i={};if(t){let r=t.indexOf("#");r>=0&&(i.hash=t.substring(r),t=t.substring(0,r));let s=t.indexOf("?");s>=0&&(i.search=t.substring(s),t=t.substring(0,s)),t&&(i.pathname=t)}return i}function mA(t,i,r,s={}){let{window:u=document.defaultView,v5Compat:m=!1}=s,p=u.history,b="POP",y=null,_=T();_==null&&(_=0,p.replaceState({...p.state,idx:_},""));function T(){return(p.state||{idx:null}).idx}function E(){b="POP";let H=T(),B=H==null?null:H-_;_=H,y&&y({action:b,location:P.location,delta:B})}function j(H,B){b="PUSH";let $=r_(H)?H:lg(P.location,H,B);_=T()+1;let W=o_($,_),ue=P.createHref($.mask||$);try{p.pushState(W,"",ue)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;u.location.assign(ue)}m&&y&&y({action:b,location:P.location,delta:1})}function M(H,B){b="REPLACE";let $=r_(H)?H:lg(P.location,H,B);_=T();let W=o_($,_),ue=P.createHref($.mask||$);p.replaceState(W,"",ue),m&&y&&y({action:b,location:P.location,delta:0})}function z(H){return pA(u,H)}let P={get action(){return b},get location(){return t(u,p)},listen(H){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(a_,E),y=H,()=>{u.removeEventListener(a_,E),y=null}},createHref(H){return i(u,H)},createURL:z,encodeLocation(H){let B=z(H);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:j,replace:M,go(H){return p.go(H)}};return P}function pA(t,i,r=!1){let s="http://localhost";t&&(s=t.location.origin!=="null"?t.location.origin:t.location.href),bt(s,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:$c(i);return u=u.replace(/ $/,"%20"),!r&&Yw.test(u)&&(u=s+u),new URL(u,s)}function Kw(t,i,r="/"){return gA(t,i,r,!1)}function gA(t,i,r,s,u){let m=typeof i=="string"?Js(i):i,p=Aa(m.pathname||"/",r);if(p==null)return null;let b=vA(t),y=null,_=kA(p);for(let T=0;y==null&&T<b.length;++T)y=AA(b[T],_,s);return y}function vA(t){let i=Ww(t);return yA(i),i}function Ww(t,i=[],r=[],s="",u=!1){let m=(p,b,y=u,_)=>{let T={relativePath:_===void 0?p.path||"":_,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(s)&&y)return;bt(T.relativePath.startsWith(s),`Absolute route path "${T.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(s.length)}let E=vi([s,T.relativePath]),j=r.concat(T);p.children&&p.children.length>0&&(bt(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Ww(p.children,i,j,E,y)),!(p.path==null&&!p.index)&&i.push({path:E,score:TA(E,p.index),routesMeta:j.map((M,z)=>{let[P,H]=Qw(M.relativePath,M.caseSensitive,z===j.length-1);return{...M,matcher:P,compiledParams:H}})})};return t.forEach((p,b)=>{if(p.path===""||!p.path?.includes("?"))m(p,b);else for(let y of Xw(p.path))m(p,b,!0,y)}),i}function Xw(t){let i=t.split("/");if(i.length===0)return[];let[r,...s]=i,u=r.endsWith("?"),m=r.replace(/\?$/,"");if(s.length===0)return u?[m,""]:[m];let p=Xw(s.join("/")),b=[];return b.push(...p.map(y=>y===""?m:[m,y].join("/"))),u&&b.push(...p),b.map(y=>t.startsWith("/")&&y===""?"/":y)}function yA(t){t.sort((i,r)=>i.score!==r.score?r.score-i.score:CA(i.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var bA=/^:[\w-]+$/,_A=3,xA=2,wA=1,SA=10,EA=-2,s_=t=>t==="*";function TA(t,i){let r=t.split("/"),s=r.length;return r.some(s_)&&(s+=EA),i&&(s+=xA),r.filter(u=>!s_(u)).reduce((u,m)=>u+(bA.test(m)?_A:m===""?wA:SA),s)}function CA(t,i){return t.length===i.length&&t.slice(0,-1).every((s,u)=>s===i[u])?t[t.length-1]-i[i.length-1]:0}function AA(t,i,r=!1){let{routesMeta:s}=t,u={},m="/",p=[];for(let b=0;b<s.length;++b){let y=s[b],_=b===s.length-1,T=m==="/"?i:i.slice(m.length)||"/",E={path:y.relativePath,caseSensitive:y.caseSensitive,end:_},j=y.matcher&&y.compiledParams?Jw(E,T,y.matcher,y.compiledParams):mf(E,T),M=y.route;if(!j&&_&&r&&!s[s.length-1].route.index&&(j=mf({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},T)),!j)return null;Object.assign(u,j.params),p.push({params:u,pathname:vi([m,j.pathname]),pathnameBase:zA(vi([m,j.pathnameBase])),route:M}),j.pathnameBase!=="/"&&(m=vi([m,j.pathnameBase]))}return p}function mf(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,s]=Qw(t.path,t.caseSensitive,t.end);return Jw(t,i,r,s)}function Jw(t,i,r,s){let u=i.match(r);if(!u)return null;let m=u[0],p=m.replace(/(.)\/+$/,"$1"),b=u.slice(1);return{params:s.reduce((_,{paramName:T,isOptional:E},j)=>{if(T==="*"){let z=b[j]||"";p=m.slice(0,m.length-z.length).replace(/(.)\/+$/,"$1")}const M=b[j];return E&&!M?_[T]=void 0:_[T]=(M||"").replace(/%2F/g,"/"),_},{}),pathname:m,pathnameBase:p,pattern:t}}function Qw(t,i=!1,r=!0){Jn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,b,y,_,T)=>{if(s.push({paramName:b,isOptional:y!=null}),y){let E=T.charAt(_+p.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(s.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function kA(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Jn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Aa(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,s=t.charAt(r);return s&&s!=="/"?null:t.slice(r)||"/"}function jA(t,i="/"){let{pathname:r,search:s="",hash:u=""}=typeof t=="string"?Js(t):t,m;return r?(r=e1(r),r.startsWith("/")?m=l_(r.substring(1),"/"):m=l_(r,i)):m=i,{pathname:m,search:LA(s),hash:RA(u)}}function l_(t,i){let r=pf(i).split("/");return t.split("/").forEach(u=>{u===".."?r.length>1&&r.pop():u!=="."&&r.push(u)}),r.length>1?r.join("/"):"/"}function rp(t,i,r,s){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OA(t){return t.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function o0(t){let i=OA(t);return i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase)}function Rf(t,i,r,s=!1){let u;typeof t=="string"?u=Js(t):(u={...t},bt(!u.pathname||!u.pathname.includes("?"),rp("?","pathname","search",u)),bt(!u.pathname||!u.pathname.includes("#"),rp("#","pathname","hash",u)),bt(!u.search||!u.search.includes("#"),rp("#","search","hash",u)));let m=t===""||u.pathname==="",p=m?"/":u.pathname,b;if(p==null)b=r;else{let E=i.length-1;if(!s&&p.startsWith("..")){let j=p.split("/");for(;j[0]==="..";)j.shift(),E-=1;u.pathname=j.join("/")}b=E>=0?i[E]:"/"}let y=jA(u,b),_=p&&p!=="/"&&p.endsWith("/"),T=(m||p===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(_||T)&&(y.pathname+="/"),y}var e1=t=>t.replace(/[\\/]{2,}/g,"/"),vi=t=>e1(t.join("/")),pf=t=>t.replace(/\/+$/,""),zA=t=>pf(t).replace(/^\/*/,"/"),LA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,MA=class{constructor(t,i,r,s=!1){this.status=t,this.statusText=i||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function IA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function PA(t){let i=t.map(r=>r.route.path).filter(Boolean);return vi(i)||"/"}var t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function n1(t,i){let r=t;if(typeof r!="string"||!r0.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let s=r,u=!1;if(t1)try{let m=new URL(window.location.href),p=Yw.test(r)?new URL(dA(r,m.protocol)):new URL(r),b=Aa(p.pathname,i);p.origin===m.origin&&b!=null?r=b+p.search+p.hash:u=!0}catch{Jn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var i1=["POST","PUT","PATCH","DELETE"];new Set(i1);var NA=["GET",...i1];new Set(NA);var DA=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function BA(t){try{return DA.includes(new URL(t).protocol)}catch{return!1}}var Qs=k.createContext(null);Qs.displayName="DataRouter";var Mf=k.createContext(null);Mf.displayName="DataRouterState";var a1=k.createContext(!1);function UA(){return k.useContext(a1)}var r1=k.createContext({isTransitioning:!1});r1.displayName="ViewTransition";var FA=k.createContext(new Map);FA.displayName="Fetchers";var HA=k.createContext(null);HA.displayName="Await";var Pn=k.createContext(null);Pn.displayName="Navigation";var Jc=k.createContext(null);Jc.displayName="Location";var ei=k.createContext({outlet:null,matches:[],isDataRoute:!1});ei.displayName="Route";var s0=k.createContext(null);s0.displayName="RouteError";var o1="REACT_ROUTER_ERROR",$A="REDIRECT",VA="ROUTE_ERROR_RESPONSE";function ZA(t){if(t.startsWith(`${o1}:${$A}:{`))try{let i=JSON.parse(t.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function qA(t){if(t.startsWith(`${o1}:${VA}:{`))try{let i=JSON.parse(t.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new MA(i.status,i.statusText,i.data)}catch{}}function GA(t,{relative:i}={}){bt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=k.useContext(Pn),{hash:u,pathname:m,search:p}=Qc(t,{relative:i}),b=m;return r!=="/"&&(b=m==="/"?r:vi([r,m])),s.createHref({pathname:b,search:p,hash:u})}function el(){return k.useContext(Jc)!=null}function tn(){return bt(el(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Jc).location}var s1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l1(t){k.useContext(Pn).static||k.useLayoutEffect(t)}function Yt(){let{isDataRoute:t}=k.useContext(ei);return t?c2():YA()}function YA(){bt(el(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(Qs),{basename:i,navigator:r}=k.useContext(Pn),{matches:s}=k.useContext(ei),{pathname:u}=tn(),m=JSON.stringify(o0(s)),p=k.useRef(!1);return l1(()=>{p.current=!0}),k.useCallback((y,_={})=>{if(Jn(p.current,s1),!p.current)return;if(typeof y=="number"){r.go(y);return}let T=Rf(y,JSON.parse(m),u,_.relative==="path");t==null&&i!=="/"&&(T.pathname=T.pathname==="/"?i:vi([i,T.pathname])),(_.replace?r.replace:r.push)(T,_.state,_)},[i,r,m,u,t])}var KA=k.createContext(null);function WA(t){let i=k.useContext(ei).outlet;return k.useMemo(()=>i&&k.createElement(KA.Provider,{value:t},i),[i,t])}function XA(){let{matches:t}=k.useContext(ei);return t[t.length-1]?.params??{}}function Qc(t,{relative:i}={}){let{matches:r}=k.useContext(ei),{pathname:s}=tn(),u=JSON.stringify(o0(r));return k.useMemo(()=>Rf(t,JSON.parse(u),s,i==="path"),[t,u,s,i])}function JA(t,i){return c1(t,i)}function c1(t,i,r){bt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(Pn),{matches:u}=k.useContext(ei),m=u[u.length-1],p=m?m.params:{},b=m?m.pathname:"/",y=m?m.pathnameBase:"/",_=m&&m.route;{let H=_&&_.path||"";d1(b,!_||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let T=tn(),E;if(i){let H=typeof i=="string"?Js(i):i;bt(y==="/"||H.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=T;let j=E.pathname||"/",M=j;if(y!=="/"){let H=y.replace(/^\//,"").split("/");M="/"+j.replace(/^\//,"").split("/").slice(H.length).join("/")}let z=r&&r.state.matches.length?r.state.matches.map(H=>Object.assign(H,{route:r.manifest[H.route.id]||H.route})):Kw(t,{pathname:M});Jn(_||z!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Jn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=i2(z&&z.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:vi([y,s.encodeLocation?s.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?y:vi([y,s.encodeLocation?s.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),u,r);return i&&P?k.createElement(Jc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},P):P}function QA(){let t=l2(),i=IA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",t),p=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},i),r?k.createElement("pre",{style:u},r):null,p)}var e2=k.createElement(QA,null),u1=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){this.props.onError?this.props.onError(t,i):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=qA(t.digest);r&&(t=r)}let i=t!==void 0?k.createElement(ei.Provider,{value:this.props.routeContext},k.createElement(s0.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?k.createElement(t2,{error:t},i):i}};u1.contextType=a1;var op=new WeakMap;function t2({children:t,error:i}){let{basename:r}=k.useContext(Pn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let s=ZA(i.digest);if(s){let u=op.get(i);if(u)throw u;let m=n1(s.location,r),p=m.absoluteURL||m.to;if(BA(p))throw new Error("Invalid redirect location");if(t1&&!op.get(i))if(m.isExternal||s.reloadDocument)window.location.href=p;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:s.replace}));throw op.set(i,b),b}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p}`})}}return t}function n2({routeContext:t,match:i,children:r}){let s=k.useContext(Qs);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(ei.Provider,{value:t},r)}function i2(t,i=[],r){let s=r?.state;if(t==null){if(!s)return null;if(s.errors)t=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let u=t,m=s?.errors;if(m!=null){let T=u.findIndex(E=>E.route.id&&m?.[E.route.id]!==void 0);bt(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,T+1))}let p=!1,b=-1;if(r&&s){p=s.renderFallback;for(let T=0;T<u.length;T++){let E=u[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(b=T),E.route.id){let{loaderData:j,errors:M}=s,z=E.route.loader&&!j.hasOwnProperty(E.route.id)&&(!M||M[E.route.id]===void 0);if(E.route.lazy||z){r.isStatic&&(p=!0),b>=0?u=u.slice(0,b+1):u=[u[0]];break}}}}let y=r?.onError,_=s&&y?(T,E)=>{y(T,{location:s.location,params:s.matches?.[0]?.params??{},pattern:PA(s.matches),errorInfo:E})}:void 0;return u.reduceRight((T,E,j)=>{let M,z=!1,P=null,H=null;s&&(M=m&&E.route.id?m[E.route.id]:void 0,P=E.route.errorElement||e2,p&&(b<0&&j===0?(d1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,H=null):b===j&&(z=!0,H=E.route.hydrateFallbackElement||null)));let B=i.concat(u.slice(0,j+1)),$=()=>{let W;return M?W=P:z?W=H:E.route.Component?W=k.createElement(E.route.Component,null):E.route.element?W=E.route.element:W=T,k.createElement(n2,{match:E,routeContext:{outlet:T,matches:B,isDataRoute:s!=null},children:W})};return s&&(E.route.ErrorBoundary||E.route.errorElement||j===0)?k.createElement(u1,{location:s.location,revalidation:s.revalidation,component:P,error:M,children:$(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:_}):$()},null)}function l0(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function a2(t){let i=k.useContext(Qs);return bt(i,l0(t)),i}function r2(t){let i=k.useContext(Mf);return bt(i,l0(t)),i}function o2(t){let i=k.useContext(ei);return bt(i,l0(t)),i}function c0(t){let i=o2(t),r=i.matches[i.matches.length-1];return bt(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function s2(){return c0("useRouteId")}function l2(){let t=k.useContext(s0),i=r2("useRouteError"),r=c0("useRouteError");return t!==void 0?t:i.errors?.[r]}function c2(){let{router:t}=a2("useNavigate"),i=c0("useNavigate"),r=k.useRef(!1);return l1(()=>{r.current=!0}),k.useCallback(async(u,m={})=>{Jn(r.current,s1),r.current&&(typeof u=="number"?await t.navigate(u):await t.navigate(u,{fromRouteId:i,...m}))},[t,i])}var c_={};function d1(t,i,r){!i&&!c_[t]&&(c_[t]=!0,Jn(!1,r))}k.memo(u2);function u2({routes:t,manifest:i,future:r,state:s,isStatic:u,onError:m}){return c1(t,void 0,{manifest:i,state:s,isStatic:u,onError:m})}function u0({to:t,replace:i,state:r,relative:s}){bt(el(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=k.useContext(Pn);Jn(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=k.useContext(ei),{pathname:p}=tn(),b=Yt(),y=Rf(t,o0(m),p,s==="path"),_=JSON.stringify(y);return k.useEffect(()=>{b(JSON.parse(_),{replace:i,state:r,relative:s})},[b,_,s,i,r]),null}function d0(t){return WA(t.context)}function Ut(t){bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function d2({basename:t="/",children:i=null,location:r,navigationType:s="POP",navigator:u,static:m=!1,useTransitions:p}){bt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=t.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:b,navigator:u,static:m,useTransitions:p,future:{}}),[b,u,m,p]);typeof r=="string"&&(r=Js(r));let{pathname:_="/",search:T="",hash:E="",state:j=null,key:M="default",mask:z}=r,P=k.useMemo(()=>{let H=Aa(_,b);return H==null?null:{location:{pathname:H,search:T,hash:E,state:j,key:M,mask:z},navigationType:s}},[b,_,T,E,j,M,s,z]);return Jn(P!=null,`<Router basename="${b}"> is not able to match the URL "${_}${T}${E}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:k.createElement(Pn.Provider,{value:y},k.createElement(Jc.Provider,{children:i,value:P}))}function f2({children:t,location:i}){return JA(cg(t),i)}function cg(t,i=[]){let r=[];return k.Children.forEach(t,(s,u)=>{if(!k.isValidElement(s))return;let m=[...i,u];if(s.type===k.Fragment){r.push.apply(r,cg(s.props.children,m));return}bt(s.type===Ut,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),bt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=cg(s.props.children,m)),r.push(p)}),r}var Xd="get",Jd="application/x-www-form-urlencoded";function If(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function h2(t){return If(t)&&t.tagName.toLowerCase()==="button"}function m2(t){return If(t)&&t.tagName.toLowerCase()==="form"}function p2(t){return If(t)&&t.tagName.toLowerCase()==="input"}function g2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function v2(t,i){return t.button===0&&(!i||i==="_self")&&!g2(t)}function ug(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((i,r)=>{let s=t[r];return i.concat(Array.isArray(s)?s.map(u=>[r,u]):[[r,s]])},[]))}function y2(t,i){let r=ug(t);return i&&i.forEach((s,u)=>{r.has(u)||i.getAll(u).forEach(m=>{r.append(u,m)})}),r}var Fd=null;function b2(){if(Fd===null)try{new FormData(document.createElement("form"),0),Fd=!1}catch{Fd=!0}return Fd}var _2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sp(t){return t!=null&&!_2.has(t)?(Jn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jd}"`),null):t}function x2(t,i){let r,s,u,m,p;if(m2(t)){let b=t.getAttribute("action");s=b?Aa(b,i):null,r=t.getAttribute("method")||Xd,u=sp(t.getAttribute("enctype"))||Jd,m=new FormData(t)}else if(h2(t)||p2(t)&&(t.type==="submit"||t.type==="image")){let b=t.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=t.getAttribute("formaction")||b.getAttribute("action");if(s=y?Aa(y,i):null,r=t.getAttribute("formmethod")||b.getAttribute("method")||Xd,u=sp(t.getAttribute("formenctype"))||sp(b.getAttribute("enctype"))||Jd,m=new FormData(b,t),!b2()){let{name:_,type:T,value:E}=t;if(T==="image"){let j=_?`${_}.`:"";m.append(`${j}x`,"0"),m.append(`${j}y`,"0")}else _&&m.append(_,E)}}else{if(If(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Xd,s=null,u=Jd,p=t}return m&&u==="text/plain"&&(p=m,m=void 0),{action:s,method:r.toLowerCase(),encType:u,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function f0(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function f1(t,i,r,s){let u=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:i&&Aa(u.pathname,i)==="/"?u.pathname=`${pf(i)}/_root.${s}`:u.pathname=`${pf(u.pathname)}.${s}`,u}async function w2(t,i){if(t.id in i)return i[t.id];try{let r=await import(t.module);return i[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function E2(t,i,r){let s=await Promise.all(t.map(async u=>{let m=i.routes[u.route.id];if(m){let p=await w2(m,r);return p.links?p.links():[]}return[]}));return k2(s.flat(1).filter(S2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function u_(t,i,r,s,u,m){let p=(y,_)=>r[_]?y.route.id!==r[_].route.id:!0,b=(y,_)=>r[_].pathname!==y.pathname||r[_].route.path?.endsWith("*")&&r[_].params["*"]!==y.params["*"];return m==="assets"?i.filter((y,_)=>p(y,_)||b(y,_)):m==="data"?i.filter((y,_)=>{let T=s.routes[y.route.id];if(!T||!T.hasLoader)return!1;if(p(y,_)||b(y,_))return!0;if(y.route.shouldRevalidate){let E=y.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function T2(t,i,{includeHydrateFallback:r}={}){return C2(t.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),r&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function C2(t){return[...new Set(t)]}function A2(t){let i={},r=Object.keys(t).sort();for(let s of r)i[s]=t[s];return i}function k2(t,i){let r=new Set;return new Set(i),t.reduce((s,u)=>{let m=JSON.stringify(A2(u));return r.has(m)||(r.add(m),s.push({key:m,link:u})),s},[])}function h0(){let t=k.useContext(Qs);return f0(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function j2(){let t=k.useContext(Mf);return f0(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var m0=k.createContext(void 0);m0.displayName="FrameworkContext";function Pf(){let t=k.useContext(m0);return f0(t,"You must render this element inside a <HydratedRouter> element"),t}function O2(t,i){let r=k.useContext(m0),[s,u]=k.useState(!1),[m,p]=k.useState(!1),{onFocus:b,onBlur:y,onMouseEnter:_,onMouseLeave:T,onTouchStart:E}=i,j=k.useRef(null);k.useEffect(()=>{if(t==="render"&&p(!0),t==="viewport"){let P=B=>{B.forEach($=>{p($.isIntersecting)})},H=new IntersectionObserver(P,{threshold:.5});return j.current&&H.observe(j.current),()=>{H.disconnect()}}},[t]),k.useEffect(()=>{if(s){let P=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(P)}}},[s]);let M=()=>{u(!0)},z=()=>{u(!1),p(!1)};return r?t!=="intent"?[m,j,{}]:[m,j,{onFocus:hc(b,M),onBlur:hc(y,z),onMouseEnter:hc(_,M),onMouseLeave:hc(T,z),onTouchStart:hc(E,M)}]:[!1,j,{}]}function hc(t,i){return r=>{t&&t(r),r.defaultPrevented||i(r)}}function z2({page:t,...i}){let r=UA(),{nonce:s}=Pf(),{router:u}=h0(),m=k.useMemo(()=>Kw(u.routes,t,u.basename),[u.routes,t,u.basename]);return m?(i.nonce==null&&s&&(i={...i,nonce:s}),r?k.createElement(R2,{page:t,matches:m,...i}):k.createElement(M2,{page:t,matches:m,...i})):null}function L2(t){let{manifest:i,routeModules:r}=Pf(),[s,u]=k.useState([]);return k.useEffect(()=>{let m=!1;return E2(t,i,r).then(p=>{m||u(p)}),()=>{m=!0}},[t,i,r]),s}function R2({page:t,matches:i,...r}){let s=tn(),{future:u}=Pf(),{basename:m}=h0(),p=k.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let b=f1(t,m,u.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,_=[];for(let T of i)typeof T.route.shouldRevalidate=="function"?y=!0:_.push(T.route.id);return y&&_.length>0&&b.searchParams.set("_routes",_.join(",")),[b.pathname+b.search]},[m,u.v8_trailingSlashAwareDataRequests,t,s,i]);return k.createElement(k.Fragment,null,p.map(b=>k.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})))}function M2({page:t,matches:i,...r}){let s=tn(),{future:u,manifest:m,routeModules:p}=Pf(),{basename:b}=h0(),{loaderData:y,matches:_}=j2(),T=k.useMemo(()=>u_(t,i,_,m,s,"data"),[t,i,_,m,s]),E=k.useMemo(()=>u_(t,i,_,m,s,"assets"),[t,i,_,m,s]),j=k.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let P=new Set,H=!1;if(i.forEach($=>{let W=m.routes[$.route.id];!W||!W.hasLoader||(!T.some(ue=>ue.route.id===$.route.id)&&$.route.id in y&&p[$.route.id]?.shouldRevalidate||W.hasClientLoader?H=!0:P.add($.route.id))}),P.size===0)return[];let B=f1(t,b,u.v8_trailingSlashAwareDataRequests,"data");return H&&P.size>0&&B.searchParams.set("_routes",i.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[B.pathname+B.search]},[b,u.v8_trailingSlashAwareDataRequests,y,s,m,T,i,t,p]),M=k.useMemo(()=>T2(E,m),[E,m]),z=L2(E);return k.createElement(k.Fragment,null,j.map(P=>k.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...r})),M.map(P=>k.createElement("link",{key:P,rel:"modulepreload",href:P,...r})),z.map(({key:P,link:H})=>k.createElement("link",{key:P,nonce:r.nonce,...H,crossOrigin:H.crossOrigin??r.crossOrigin})))}function I2(...t){return i=>{t.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var P2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{P2&&(window.__reactRouterVersion="7.18.2")}catch{}function N2({basename:t,children:i,useTransitions:r,window:s}){let u=k.useRef();u.current==null&&(u.current=fA({window:s,v5Compat:!0}));let m=u.current,[p,b]=k.useState({action:m.action,location:m.location}),y=k.useCallback(_=>{r===!1?b(_):k.startTransition(()=>b(_))},[r]);return k.useLayoutEffect(()=>m.listen(y),[m,y]),k.createElement(d2,{basename:t,children:i,location:p.location,navigationType:p.action,navigator:m,useTransitions:r})}var Ta=k.forwardRef(function({onClick:i,discover:r="render",prefetch:s="none",relative:u,reloadDocument:m,replace:p,mask:b,state:y,target:_,to:T,preventScrollReset:E,viewTransition:j,defaultShouldRevalidate:M,...z},P){let{basename:H,navigator:B,useTransitions:$}=k.useContext(Pn),W=typeof T=="string"&&r0.test(T),ue=n1(T,H);T=ue.to;let J=GA(T,{relative:u}),se=tn(),Q=null;if(b){let je=Rf(b,[],se.mask?se.mask.pathname:"/",!0);H!=="/"&&(je.pathname=je.pathname==="/"?H:vi([H,je.pathname])),Q=B.createHref(je)}let[he,Ce,Ue]=O2(s,z),ve=F2(T,{replace:p,mask:b,state:y,target:_,preventScrollReset:E,relative:u,viewTransition:j,defaultShouldRevalidate:M,useTransitions:$});function ke(je){i&&i(je),je.defaultPrevented||ve(je)}let ge=!(ue.isExternal||m),ae=k.createElement("a",{...z,...Ue,href:(ge?Q:void 0)||ue.absoluteURL||J,onClick:ge?ke:i,ref:I2(P,Ce),target:_,"data-discover":!W&&r==="render"?"true":void 0});return he&&!W?k.createElement(k.Fragment,null,ae,k.createElement(z2,{page:J})):ae});Ta.displayName="Link";var D2=k.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:s="",end:u=!1,style:m,to:p,viewTransition:b,children:y,..._},T){let E=Qc(p,{relative:_.relative}),j=tn(),M=k.useContext(Mf),{navigator:z,basename:P}=k.useContext(Pn),H=M!=null&&G2(E)&&b===!0,B=z.encodeLocation?z.encodeLocation(E).pathname:E.pathname,$=j.pathname,W=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;r||($=$.toLowerCase(),W=W?W.toLowerCase():null,B=B.toLowerCase()),W&&P&&(W=Aa(W,P)||W);const ue=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let J=$===B||!u&&$.startsWith(B)&&$.charAt(ue)==="/",se=W!=null&&(W===B||!u&&W.startsWith(B)&&W.charAt(B.length)==="/"),Q={isActive:J,isPending:se,isTransitioning:H},he=J?i:void 0,Ce;typeof s=="function"?Ce=s(Q):Ce=[s,J?"active":null,se?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof m=="function"?m(Q):m;return k.createElement(Ta,{..._,"aria-current":he,className:Ce,ref:T,style:Ue,to:p,viewTransition:b},typeof y=="function"?y(Q):y)});D2.displayName="NavLink";var B2=k.forwardRef(({discover:t="render",fetcherKey:i,navigate:r,reloadDocument:s,replace:u,state:m,method:p=Xd,action:b,onSubmit:y,relative:_,preventScrollReset:T,viewTransition:E,defaultShouldRevalidate:j,...M},z)=>{let{useTransitions:P}=k.useContext(Pn),H=Z2(),B=q2(b,{relative:_}),$=p.toLowerCase()==="get"?"get":"post",W=typeof b=="string"&&r0.test(b),ue=J=>{if(y&&y(J),J.defaultPrevented)return;J.preventDefault();let se=J.nativeEvent.submitter,Q=se?.getAttribute("formmethod")||p,he=()=>H(se||J.currentTarget,{fetcherKey:i,method:Q,navigate:r,replace:u,state:m,relative:_,preventScrollReset:T,viewTransition:E,defaultShouldRevalidate:j});P&&r!==!1?k.startTransition(()=>he()):he()};return k.createElement("form",{ref:z,method:$,action:B,onSubmit:s?y:ue,...M,"data-discover":!W&&t==="render"?"true":void 0})});B2.displayName="Form";function U2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h1(t){let i=k.useContext(Qs);return bt(i,U2(t)),i}function F2(t,{target:i,replace:r,mask:s,state:u,preventScrollReset:m,relative:p,viewTransition:b,defaultShouldRevalidate:y,useTransitions:_}={}){let T=Yt(),E=tn(),j=Qc(t,{relative:p});return k.useCallback(M=>{if(v2(M,i)){M.preventDefault();let z=r!==void 0?r:$c(E)===$c(j),P=()=>T(t,{replace:z,mask:s,state:u,preventScrollReset:m,relative:p,viewTransition:b,defaultShouldRevalidate:y});_?k.startTransition(()=>P()):P()}},[E,T,j,r,s,u,i,t,m,p,b,y,_])}function H2(t){Jn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=k.useRef(ug(t)),r=k.useRef(!1),s=tn(),u=k.useMemo(()=>y2(s.search,r.current?null:i.current),[s.search]),m=Yt(),p=k.useCallback((b,y)=>{const _=ug(typeof b=="function"?b(new URLSearchParams(u)):b);r.current=!0,m("?"+_,y)},[m,u]);return[u,p]}var $2=0,V2=()=>`__${String(++$2)}__`;function Z2(){let{router:t}=h1("useSubmit"),{basename:i}=k.useContext(Pn),r=s2(),s=t.fetch,u=t.navigate;return k.useCallback(async(m,p={})=>{let{action:b,method:y,encType:_,formData:T,body:E}=x2(m,i);if(p.navigate===!1){let j=p.fetcherKey||V2();await s(j,r,p.action||b,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:E,formMethod:p.method||y,formEncType:p.encType||_,flushSync:p.flushSync})}else await u(p.action||b,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:E,formMethod:p.method||y,formEncType:p.encType||_,replace:p.replace,state:p.state,fromRouteId:r,flushSync:p.flushSync,viewTransition:p.viewTransition})},[s,u,i,r])}function q2(t,{relative:i}={}){let{basename:r}=k.useContext(Pn),s=k.useContext(ei);bt(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),m={...Qc(t||".",{relative:i})},p=tn();if(t==null){m.search=p.search;let b=new URLSearchParams(m.search),y=b.getAll("index");if(y.some(T=>T==="")){b.delete("index"),y.filter(E=>E).forEach(E=>b.append("index",E));let T=b.toString();m.search=T?`?${T}`:""}}return(!t||t===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(m.pathname=m.pathname==="/"?r:vi([r,m.pathname])),$c(m)}function G2(t,{relative:i}={}){let r=k.useContext(r1);bt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=h1("useViewTransitionState"),u=Qc(t,{relative:i});if(!r.isTransitioning)return!1;let m=Aa(r.currentLocation.pathname,s)||r.currentLocation.pathname,p=Aa(r.nextLocation.pathname,s)||r.nextLocation.pathname;return mf(u.pathname,p)!=null||mf(u.pathname,m)!=null}var m1=Gw(),pt="-ms-",Oc="-moz-",tt="-webkit-",p1="comm",Nf="rule",p0="decl",Y2="@import",K2="@namespace",g1="@keyframes",W2="@layer",v1=Math.abs,g0=String.fromCharCode,dg=Object.assign;function X2(t,i){return Ft(t,0)^45?(((i<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3):0}function y1(t){return t.trim()}function _a(t,i){return(t=i.exec(t))?t[0]:t}function Fe(t,i,r){return t.replace(i,r)}function Qd(t,i,r){return t.indexOf(i,r)}function Ft(t,i){return t.charCodeAt(i)|0}function No(t,i,r){return t.slice(i,r)}function hi(t){return t.length}function b1(t){return t.length}function Sc(t,i){return i.push(t),t}function J2(t,i){return t.map(i).join("")}function d_(t,i){return t.filter(function(r){return!_a(r,i)})}var Df=1,Vs=1,_1=0,Qn=0,Pt=0,tl="";function Bf(t,i,r,s,u,m,p,b){return{value:t,root:i,parent:r,type:s,props:u,children:m,line:Df,column:Vs,length:p,return:"",siblings:b}}function Cr(t,i){return dg(Bf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function js(t){for(;t.root;)t=Cr(t.root,{children:[t]});Sc(t,t.siblings)}function Q2(){return Pt}function ek(){return Pt=Qn>0?Ft(tl,--Qn):0,Vs--,Pt===10&&(Vs=1,Df--),Pt}function yi(){return Pt=Qn<_1?Ft(tl,Qn++):0,Vs++,Pt===10&&(Vs=1,Df++),Pt}function zr(){return Ft(tl,Qn)}function ef(){return Qn}function Uf(t,i){return No(tl,t,i)}function Vc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tk(t){return Df=Vs=1,_1=hi(tl=t),Qn=0,[]}function nk(t){return tl="",t}function lp(t){return y1(Uf(Qn-1,fg(t===91?t+2:t===40?t+1:t)))}function ik(t){for(;(Pt=zr())&&Pt<33;)yi();return Vc(t)>2||Vc(Pt)>3?"":" "}function ak(t,i){for(;--i&&yi()&&!(Pt<48||Pt>102||Pt>57&&Pt<65||Pt>70&&Pt<97););return Uf(t,ef()+(i<6&&zr()==32&&yi()==32))}function fg(t){for(;yi();)switch(Pt){case t:return Qn;case 34:case 39:t!==34&&t!==39&&fg(Pt);break;case 40:t===41&&fg(t);break;case 92:yi();break}return Qn}function rk(t,i){for(;yi()&&t+Pt!==57;)if(t+Pt===84&&zr()===47)break;return"/*"+Uf(i,Qn-1)+"*"+g0(t===47?t:yi())}function ok(t){for(;!Vc(zr());)yi();return Uf(t,Qn)}function sk(t){return nk(tf("",null,null,null,[""],t=tk(t),0,[0],t))}function tf(t,i,r,s,u,m,p,b,y){for(var _=0,T=0,E=p,j=0,M=0,z=0,P=1,H=1,B=1,$=0,W="",ue=u,J=m,se=s,Q=W;H;)switch(z=$,$=yi()){case 40:if(z!=108&&Ft(Q,E-1)==58){Qd(Q+=Fe(lp($),"&","&\f"),"&\f",v1(_?b[_-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:Q+=lp($);break;case 9:case 10:case 13:case 32:Q+=ik(z);break;case 92:Q+=ak(ef()-1,7);continue;case 47:switch(zr()){case 42:case 47:Sc(lk(rk(yi(),ef()),i,r,y),y),(Vc(z||1)==5||Vc(zr()||1)==5)&&hi(Q)&&No(Q,-1,void 0)!==" "&&(Q+=" ");break;default:Q+="/"}break;case 123*P:b[_++]=hi(Q)*B;case 125*P:case 59:case 0:switch($){case 0:case 125:H=0;case 59+T:B==-1&&(Q=Fe(Q,/\f/g,"")),M>0&&(hi(Q)-E||P===0&&z===47)&&Sc(M>32?h_(Q+";",s,r,E-1,y):h_(Fe(Q," ","")+";",s,r,E-2,y),y);break;case 59:Q+=";";default:if(Sc(se=f_(Q,i,r,_,T,u,b,W,ue=[],J=[],E,m),m),$===123)if(T===0)tf(Q,i,se,se,ue,m,E,b,J);else{switch(j){case 99:if(Ft(Q,3)===110)break;case 108:if(Ft(Q,2)===97)break;default:T=0;case 100:case 109:case 115:}T?tf(t,se,se,s&&Sc(f_(t,se,se,0,0,u,b,W,u,ue=[],E,J),J),u,J,E,b,s?ue:J):tf(Q,se,se,se,[""],J,0,b,J)}}_=T=M=0,P=B=1,W=Q="",E=p;break;case 58:E=1+hi(Q),M=z;default:if(P<1){if($==123)--P;else if($==125&&P++==0&&ek()==125)continue}switch(Q+=g0($),$*P){case 38:B=T>0?1:(Q+="\f",-1);break;case 44:b[_++]=(hi(Q)-1)*B,B=1;break;case 64:zr()===45&&(Q+=lp(yi())),j=zr(),T=E=hi(W=Q+=ok(ef())),$++;break;case 45:z===45&&hi(Q)==2&&(P=0)}}return m}function f_(t,i,r,s,u,m,p,b,y,_,T,E){for(var j=u-1,M=u===0?m:[""],z=b1(M),P=0,H=0,B=0;P<s;++P)for(var $=0,W=No(t,j+1,j=v1(H=p[P])),ue=t;$<z;++$)(ue=y1(H>0?M[$]+" "+W:Fe(W,/&\f/g,M[$])))&&(y[B++]=ue);return Bf(t,i,r,u===0?Nf:b,y,_,T,E)}function lk(t,i,r,s){return Bf(t,i,r,p1,g0(Q2()),No(t,2,-2),0,s)}function h_(t,i,r,s,u){return Bf(t,i,r,p0,No(t,0,s),No(t,s+1,-1),s,u)}function x1(t,i,r){switch(X2(t,i)){case 5103:return tt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return tt+t+t;case 4855:return tt+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Oc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+t+Oc+t+pt+t+t;case 5936:switch(Ft(t,i+11)){case 114:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tt+t+pt+t+t;case 6165:return tt+t+pt+"flex-"+t+t;case 5187:return tt+t+Fe(t,/(\w+).+(:[^]+)/,tt+"box-$1$2"+pt+"flex-$1$2")+t;case 5443:return tt+t+pt+"flex-item-"+Fe(t,/flex-|-self/g,"")+(_a(t,/flex-|baseline/)?"":pt+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return tt+t+pt+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return tt+t+pt+Fe(t,"shrink","negative")+t;case 5292:return tt+t+pt+Fe(t,"basis","preferred-size")+t;case 6060:return tt+"box-"+Fe(t,"-grow","")+tt+t+pt+Fe(t,"grow","positive")+t;case 4554:return tt+Fe(t,/([^-])(transform)/g,"$1"+tt+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+tt+t+t;case 4200:if(!_a(t,/flex-|baseline/))return pt+"grid-column-align"+No(t,i)+t;break;case 2592:case 3360:return pt+Fe(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,u){return i=u,_a(s.props,/grid-\w+-end/)})?~Qd(t+(r=r[i].value),"span",0)?t:pt+Fe(t,"-start","")+t+pt+"grid-row-span:"+(~Qd(r,"span",0)?_a(r,/\d+/):+_a(r,/\d+/)-+_a(t,/\d+/))+";":pt+Fe(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return _a(s.props,/grid-\w+-start/)})?t:pt+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,tt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hi(t)-1-i>6)switch(Ft(t,i+1)){case 109:if(Ft(t,i+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Oc+(Ft(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~Qd(t,"stretch",0)?x1(Fe(t,"stretch","fill-available"),i,r)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,m,p,b,y,_){return pt+u+":"+m+_+(p?pt+u+"-span:"+(b?y:+y-+m)+_:"")+t});case 4949:if(Ft(t,i+6)===121)return Fe(t,":",":"+tt)+t;break;case 6444:switch(Ft(t,Ft(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Ft(t,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+pt+"$2box$3")+t;case 100:return Fe(t,":",":"+pt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function gf(t,i){for(var r="",s=0;s<t.length;s++)r+=i(t[s],s,t,i)||"";return r}function ck(t,i,r,s){switch(t.type){case W2:if(t.children.length)break;case Y2:case K2:case p0:return t.return=t.return||t.value;case p1:return"";case g1:return t.return=t.value+"{"+gf(t.children,s)+"}";case Nf:if(!hi(t.value=t.props.join(",")))return""}return hi(r=gf(t.children,s))?t.return=t.value+"{"+r+"}":""}function uk(t){var i=b1(t);return function(r,s,u,m){for(var p="",b=0;b<i;b++)p+=t[b](r,s,u,m)||"";return p}}function dk(t){return function(i){i.root||(i=i.return)&&t(i)}}function fk(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case p0:t.return=x1(t.value,t.length,r);return;case g1:return gf([Cr(t,{value:Fe(t.value,"@","@"+tt)})],s);case Nf:if(t.length)return J2(r=t.props,function(u){switch(_a(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":js(Cr(t,{props:[Fe(u,/:(read-\w+)/,":"+Oc+"$1")]})),js(Cr(t,{props:[u]})),dg(t,{props:d_(r,s)});break;case"::placeholder":js(Cr(t,{props:[Fe(u,/:(plac\w+)/,":"+tt+"input-$1")]})),js(Cr(t,{props:[Fe(u,/:(plac\w+)/,":"+Oc+"$1")]})),js(Cr(t,{props:[Fe(u,/:(plac\w+)/,pt+"input-$1")]})),js(Cr(t,{props:[u]})),dg(t,{props:d_(r,s)});break}return""})}}var Ds={},cp,up;const Zs=typeof process<"u"&&Ds!==void 0&&(Ds.REACT_APP_SC_ATTR||Ds.SC_ATTR)||"data-styled",w1="active",S1="data-styled-version",Ff="6.5.3",v0=`/*!sc*/
`,zc=typeof window<"u"&&typeof document<"u";function m_(t){if(typeof process<"u"&&Ds!==void 0){const i=Ds[t];if(i!==void 0&&i!=="")return i!=="false"}}const hk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(up=(cp=m_("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&cp!==void 0?cp:m_("SC_DISABLE_SPEEDY"))!==null&&up!==void 0?up:typeof process<"u"&&Ds!==void 0&&!1),E1="sc-keyframes-";function eu(t,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}let nf=new Map,vf=new Map,af=1;const Ec=t=>{if(nf.has(t))return nf.get(t);for(;vf.has(af);)af++;const i=af++;return nf.set(t,i),vf.set(i,t),i},mk=t=>vf.get(t),pk=(t,i)=>{af=i+1,nf.set(t,i),vf.set(i,t)},y0=Object.freeze([]),qs=Object.freeze({});function gk(t,i,r=qs){return t.theme!==r.theme&&t.theme||i||r.theme}const vk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yk=/(^-|-$)/g;function T1(t){return t.replace(vk,"-").replace(yk,"")}const bk=/(a)(d)/gi,p_=t=>String.fromCharCode(t+(t>25?39:97));function b0(t){let i,r="";for(i=Math.abs(t);i>52;i=i/52|0)r=p_(i%52)+r;return(p_(i%52)+r).replace(bk,"$1-$2")}const hg=5381,Mo=(t,i)=>{let r=i.length;for(;r;)t=33*t^i.charCodeAt(--r);return t},C1=t=>Mo(hg,t);function A1(t){return b0(C1(t)>>>0)}function _k(t){return t.displayName||t.name||"Component"}function mg(t){return typeof t=="string"&&!0}function xk(t){return mg(t)?`styled.${t}`:`Styled(${_k(t)})`}const k1=Symbol.for("react.memo"),wk=Symbol.for("react.forward_ref"),Sk={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ek={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},j1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tk={[wk]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[k1]:j1};function g_(t){return("type"in(i=t)&&i.type.$$typeof)===k1?j1:"$$typeof"in t?Tk[t.$$typeof]:Sk;var i}const Ck=Object.defineProperty,Ak=Object.getOwnPropertyNames,kk=Object.getOwnPropertySymbols,jk=Object.getOwnPropertyDescriptor,Ok=Object.getPrototypeOf,zk=Object.prototype;function O1(t,i,r){if(typeof i!="string"){const s=Ok(i);s&&s!==zk&&O1(t,s,r);const u=Ak(i).concat(kk(i)),m=g_(t),p=g_(i);for(let b=0;b<u.length;++b){const y=u[b];if(!(y in Ek||r&&r[y]||p&&y in p||m&&y in m)){const _=jk(i,y);try{Ck(t,y,_)}catch{}}}}return t}function Hf(t){return typeof t=="function"}const Lk=Symbol.for("react.forward_ref");function z1(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===Lk&&"styledComponentId"in t}function Tc(t,i){return t&&i?t+" "+i:t||i||""}function pg(t,i){return t.join("")}function Zc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function gg(t,i,r=!1){if(!r&&!Zc(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(let s=0;s<i.length;s++)t[s]=gg(t[s],i[s]);else if(Zc(i))for(const s in i)t[s]=gg(t[s],i[s]);return t}function _0(t,i){Object.defineProperty(t,"toString",{value:i})}const Rk=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let i=this._cIndex;if(t>this._cGroup)for(let r=this._cGroup;r<t;r++)i+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=t;r--)i-=this.groupSizes[r];return this._cGroup=t,this._cIndex=i,i}insertRules(t,i){if(t>=this.groupSizes.length){const u=this.groupSizes,m=u.length;let p=m;for(;t>=p;)if(p<<=1,p<0)throw eu(16,`${t}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(let b=m;b<p;b++)this.groupSizes[b]=0}let r=this.indexOfGroup(t+1),s=0;for(let u=0,m=i.length;u<m;u++)this.tag.insertRule(r,i[u])&&(this.groupSizes[t]++,r++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)}clearGroup(t){if(t<this.length){const i=this.groupSizes[t],r=this.indexOfGroup(t),s=r+i;this.groupSizes[t]=0;for(let u=r;u<s;u++)this.tag.deleteRule(r);i>0&&this._cGroup>t&&(this._cIndex-=i)}}getGroup(t){let i="";if(t>=this.length||this.groupSizes[t]===0)return i;const r=this.groupSizes[t],s=this.indexOfGroup(t),u=s+r;for(let m=s;m<u;m++)i+=this.tag.getRule(m)+v0;return i}},Mk=`style[${Zs}][${S1}="${Ff}"]`,Ik=new RegExp(`^${Zs}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),v_=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,vg=t=>{if(!t)return document;if(v_(t))return t;if("getRootNode"in t){const i=t.getRootNode();if(v_(i))return i}return document},Pk=(t,i,r)=>{const s=r.split(",");let u;for(let m=0,p=s.length;m<p;m++)(u=s[m])&&t.registerName(i,u)},Nk=(t,i)=>{var r;const s=((r=i.textContent)!==null&&r!==void 0?r:"").split(v0),u=[];for(let m=0,p=s.length;m<p;m++){const b=s[m].trim();if(!b)continue;const y=b.match(Ik);if(y){const _=0|parseInt(y[1],10),T=y[2];_!==0&&(pk(T,_),Pk(t,T,y[3]),t.getTag().insertRules(_,u)),u.length=0}else u.push(b)}},dp=t=>{const i=vg(t.options.target).querySelectorAll(Mk);for(let r=0,s=i.length;r<s;r++){const u=i[r];u&&u.getAttribute(Zs)!==w1&&(Nk(t,u),u.parentNode&&u.parentNode.removeChild(u))}};let mc=!1;function Dk(){if(mc!==!1)return mc;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return mc=t.nonce||t.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return mc=i.getAttribute("content")||void 0}return mc=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const L1=(t,i)=>{const r=document.head,s=t||r,u=document.createElement("style"),m=(y=>{const _=Array.from(y.querySelectorAll(`style[${Zs}]`));return _[_.length-1]})(s),p=m!==void 0?m.nextSibling:null;u.setAttribute(Zs,w1),u.setAttribute(S1,Ff);const b=i||Dk();return b&&u.setAttribute("nonce",b),s.insertBefore(u,p),u},Bk=class{constructor(t,i){this.element=L1(t,i),this.element.appendChild(document.createTextNode("")),this.sheet=(r=>{var s;if(r.sheet)return r.sheet;const u=(s=r.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let m=0,p=u.length;m<p;m++){const b=u[m];if(b.ownerNode===r)return b}throw eu(17)})(this.element),this.length=0}insertRule(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""}},Uk=class{constructor(t,i){this.element=L1(t,i),this.nodes=this.element.childNodes,this.length=0}insertRule(t,i){if(t<=this.length&&t>=0){const r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let y_=zc;const Fk={isServer:!zc,useCSSOMInjection:!hk};class $f{static registerId(i){return Ec(i)}constructor(i=qs,r={},s){this.options=Object.assign(Object.assign({},Fk),i),this.gs=r,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!i.isServer,!this.server&&zc&&y_&&(y_=!1,dp(this)),_0(this,()=>(u=>{const m=u.getTag(),{length:p}=m;let b="";for(let y=0;y<p;y++){const _=mk(y);if(_===void 0)continue;const T=u.names.get(_);if(T===void 0||!T.size)continue;const E=m.getGroup(y);if(E.length===0)continue;const j=Zs+".g"+y+'[id="'+_+'"]';let M="";for(const z of T)z.length>0&&(M+=z+",");b+=E+j+'{content:"'+M+'"}'+v0}return b})(this))}rehydrate(){!this.server&&zc&&dp(this)}reconstructWithOptions(i,r=!0){const s=new $f(Object.assign(Object.assign({},this.options),i),this.gs,r&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&zc&&i.target!==this.options.target&&vg(this.options.target)!==vg(i.target)&&dp(s),s}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:r,target:s,nonce:u})=>r?new Bk(s,u):new Uk(s,u))(this.options),new Rk(i)));var i}hasNameForId(i,r){var s,u;return(u=(s=this.names.get(i))===null||s===void 0?void 0:s.has(r))!==null&&u!==void 0&&u}registerName(i,r){Ec(i),i.startsWith(E1)&&this.keyframeIds.add(i);const s=this.names.get(i);s?s.add(r):this.names.set(i,new Set([r]))}insertRules(i,r,s){this.registerName(i,r),this.getTag().insertRules(Ec(i),s)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(Ec(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const R1=new WeakSet,Hk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $k(t,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in Hk||t.startsWith("--")?String(i).trim():i+"px"}const Lo=47;function b_(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let i="";for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);i+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):t[r]}return i.startsWith("ms-")?"-"+i:i}const M1=Symbol.for("sc-keyframes");function Vk(t){return typeof t=="object"&&t!==null&&M1 in t}function I1(t){return Hf(t)&&!(t.prototype&&t.prototype.isReactComponent)}const P1=t=>t==null||t===!1||t==="",Zk=Symbol.for("react.client.reference");function __(t){return t.$$typeof===Zk}function N1(t,i){for(const r in t){const s=t[r];t.hasOwnProperty(r)&&!P1(s)&&(Array.isArray(s)&&R1.has(s)||Hf(s)?i.push(b_(r)+":",s,";"):Zc(s)?(i.push(r+" {"),N1(s,i),i.push("}")):i.push(b_(r)+": "+$k(r,s)+";"))}}function Io(t,i,r,s,u=[]){if(P1(t))return u;const m=typeof t;if(m==="string")return u.push(t),u;if(m==="function"){if(__(t))return u;if(I1(t)&&i){const p=t(i);return Io(p,i,r,s,u)}return u.push(t),u}if(Array.isArray(t)){for(let p=0;p<t.length;p++)Io(t[p],i,r,s,u);return u}return z1(t)?(u.push(`.${t.styledComponentId}`),u):Vk(t)?(r?(t.inject(r,s),u.push(t.getName(s))):u.push(t),u):__(t)?u:Zc(t)?t.toString!==Object.prototype.toString?(u.push(t.toString()),u):(N1(t,u),u):(u.push(t.toString()),u)}const qk=C1(Ff);class Gk{constructor(i,r,s){this.rules=i,this.componentId=r,this.baseHash=Mo(qk,r),this.baseStyle=s,$f.registerId(r)}generateAndInjectStyles(i,r,s){let u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,s):"";{let m="";for(let p=0;p<this.rules.length;p++){const b=this.rules[p];if(typeof b=="string")m+=b;else if(b)if(I1(b)){const y=b(i);typeof y=="string"?m+=y:y!=null&&y!==!1&&(m+=pg(Io(y,i,r,s)))}else m+=pg(Io(b,i,r,s))}if(m){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+m:m;let b=this.dynamicNameCache.get(p);if(!b){if(b=b0(Mo(Mo(this.baseHash,s.hash),m)>>>0),this.dynamicNameCache.size>=200){const y=this.dynamicNameCache.keys().next().value;y!==void 0&&this.dynamicNameCache.delete(y)}this.dynamicNameCache.set(p,b)}if(!r.hasNameForId(this.componentId,b)){const y=s(m,"."+b,void 0,this.componentId);r.insertRules(this.componentId,b,y)}u=Tc(u,b)}}return u}}const Yk=/&/g;function D1(t,i){let r=0;for(;--i>=0&&t.charCodeAt(i)===92;)r++;return!(1&~r)}function fp(t){const i=t.length;let r="",s=0,u=0,m=0,p=!1,b=!1;for(let y=0;y<i;y++){const _=t.charCodeAt(y);if(m!==0||p||_!==Lo||t.charCodeAt(y+1)!==42)if(p)_===42&&t.charCodeAt(y+1)===Lo&&(p=!1,y++);else if(_!==34&&_!==39||D1(t,y)){if(m===0)if(_===123)u++;else if(_===125){if(u--,u<0){b=!0;let T=y+1;for(;T<i;){const E=t.charCodeAt(T);if(E===59||E===10)break;T++}T<i&&t.charCodeAt(T)===59&&T++,u=0,y=T-1,s=T;continue}u===0&&(r+=t.substring(s,y+1),s=y+1)}else _===59&&u===0&&(r+=t.substring(s,y+1),s=y+1)}else m===0?m=_:m===_&&(m=0);else p=!0,y++}return b||u!==0||m!==0?(s<i&&u===0&&m===0&&(r+=t.substring(s)),r):t}function B1(t,i){const r=i+" ",s=","+r;for(let u=0;u<t.length;u++){const m=t[u];if(m.type==="rule"){m.value=(r+m.value).replaceAll(",",s);const p=m.props,b=[];for(let y=0;y<p.length;y++)b[y]=r+p[y];m.props=b}Array.isArray(m.children)&&m.type!=="@keyframes"&&B1(m.children,i)}return t}function Kk({options:t=qs,plugins:i=y0}=qs){let r,s,u;const m=(j,M,z)=>z.startsWith(s)&&z.endsWith(s)&&z.replaceAll(s,"").length>0?`.${r}`:j,p=i.slice();p.push(j=>{j.type===Nf&&j.value.includes("&")&&(u||(u=new RegExp(`\\${s}\\b`,"g")),j.props[0]=j.props[0].replace(Yk,s).replace(u,m))}),t.prefix&&p.push(fk),p.push(ck);let b=[];const y=uk(p.concat(dk(j=>b.push(j)))),_=(j,M="",z="",P="&")=>{r=P,s=M,u=void 0;const H=(function($){const W=$.indexOf("//")!==-1,ue=$.indexOf("}")!==-1;if(!W&&!ue)return $;if(!W)return fp($);const J=$.length;let se="",Q=0,he=0,Ce=0,Ue=0,ve=0,ke=!1;for(;he<J;){const ge=$.charCodeAt(he);if(ge!==34&&ge!==39||D1($,he))if(Ce===0)if(ge===Lo&&he+1<J&&$.charCodeAt(he+1)===42){for(he+=2;he+1<J&&($.charCodeAt(he)!==42||$.charCodeAt(he+1)!==Lo);)he++;he+=2}else if(ge!==40)if(ge!==41)if(Ue>0)he++;else if(ge===42&&he+1<J&&$.charCodeAt(he+1)===Lo)se+=$.substring(Q,he),he+=2,Q=he,ke=!0;else if(ge===Lo&&he+1<J&&$.charCodeAt(he+1)===Lo){for(se+=$.substring(Q,he);he<J&&$.charCodeAt(he)!==10;)he++;Q=he,ke=!0}else ge===123?ve++:ge===125&&ve--,he++;else Ue>0&&Ue--,he++;else Ue++,he++;else he++;else Ce===0?Ce=ge:Ce===ge&&(Ce=0),he++}return ke?(Q<J&&(se+=$.substring(Q)),ve===0?se:fp(se)):ve===0?$:fp($)})(j);let B=sk(z||M?z+" "+M+" { "+H+" }":H);return t.namespace&&(B=B1(B,t.namespace)),b=[],gf(B,y),b},T=t;let E=hg;for(let j=0;j<i.length;j++)i[j].name||eu(15),E=Mo(E,i[j].name);return T?.namespace&&(E=Mo(E,T.namespace)),T?.prefix&&(E=Mo(E,"p")),_.hash=E!==hg?E.toString():"",_}const Wk=new $f,yg=Kk(),U1=Wn.createContext({shouldForwardProp:void 0,styleSheet:Wk,stylis:yg,stylisPlugins:void 0});U1.Consumer;function Xk(){return Wn.useContext(U1)}const F1=Wn.createContext(void 0);F1.Consumer;const x_=Object.prototype.hasOwnProperty,hp={};function Jk(t,i){const r=typeof t!="string"?"sc":T1(t);hp[r]=(hp[r]||0)+1;const s=r+"-"+A1(Ff+r+hp[r]);return i?i+"-"+s:s}function Qk(t,i,r){const s=z1(t),u=t,m=!mg(t),{attrs:p=y0,componentId:b=Jk(i.displayName,i.parentComponentId),displayName:y=xk(t)}=i,_=i.displayName&&i.componentId?T1(i.displayName)+"-"+i.componentId:i.componentId||b,T=s&&u.attrs?u.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:E}=i;if(s&&u.shouldForwardProp){const P=u.shouldForwardProp;if(i.shouldForwardProp){const H=i.shouldForwardProp;E=(B,$)=>P(B,$)&&H(B,$)}else E=P}const j=new Gk(r,_,s?u.componentStyle:void 0);function M(P,H){return(function(B,$,W){const{attrs:ue,componentStyle:J,defaultProps:se,foldedComponentIds:Q,styledComponentId:he,target:Ce}=B,Ue=Wn.useContext(F1),ve=Xk(),ke=B.shouldForwardProp||ve.shouldForwardProp,ge=gk($,Ue,se)||qs;let ae,je;{const Me=Wn.useRef(null),ce=Me.current;if(ce!==null&&ce[1]===ge&&ce[2]===ve.styleSheet&&ce[3]===ve.stylis&&ce[7]===J&&(function(O,Y,ie){const oe=O,fe=Y;let pe=0;for(const Le in fe)if(x_.call(fe,Le)&&(pe++,oe[Le]!==fe[Le]))return!1;return pe===ie})(ce[0],$,ce[4]))ae=ce[5],je=ce[6];else{ae=(function(Y,ie,oe){const fe=Object.assign(Object.assign({},ie),{className:void 0,theme:oe}),pe=Y.length>1;for(let Le=0;Le<Y.length;Le++){const nt=Y[Le],Qe=Hf(nt)?nt(pe?Object.assign({},fe):fe):nt;for(const kt in Qe)kt==="className"?fe.className=Tc(fe.className,Qe[kt]):kt==="style"?fe.style=Object.assign(Object.assign({},fe.style),Qe[kt]):kt in ie&&ie[kt]===void 0||(fe[kt]=Qe[kt])}return"className"in ie&&typeof ie.className=="string"&&(fe.className=Tc(fe.className,ie.className)),fe})(ue,$,ge),je=J.generateAndInjectStyles(ae,ve.styleSheet,ve.stylis);let O=0;for(const Y in $)x_.call($,Y)&&O++;Me.current=[$,ge,ve.styleSheet,ve.stylis,O,ae,je,J]}}const D=ae.as||Ce,le=(function(Me,ce,O,Y){const ie={};for(const oe in Me)Me[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&Me.theme===O||(oe==="forwardedAs"?ie.as=Me.forwardedAs:Y&&!Y(oe,ce)||(ie[oe]=Me[oe]));return ie})(ae,D,ge,ke);let re=Tc(Q,he);return je&&(re+=" "+je),ae.className&&(re+=" "+ae.className),le[mg(D)&&D.includes("-")?"class":"className"]=re,W&&(le.ref=W),k.createElement(D,le)})(z,P,H)}M.displayName=y;let z=Wn.forwardRef(M);return z.attrs=T,z.componentStyle=j,z.displayName=y,z.shouldForwardProp=E,z.foldedComponentIds=s?Tc(u.foldedComponentIds,u.styledComponentId):"",z.styledComponentId=_,z.target=s?u.target:t,Object.defineProperty(z,"defaultProps",{get(){return this._foldedDefaultProps},set(P){this._foldedDefaultProps=s?(function(H,...B){for(const $ of B)gg(H,$,!0);return H})({},u.defaultProps,P):P}}),_0(z,()=>`.${z.styledComponentId}`),m&&O1(z,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}var ej=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function w_(t,i){const r=[t[0]];for(let s=0,u=i.length;s<u;s+=1)r.push(i[s],t[s+1]);return r}const S_=t=>(R1.add(t),t);function x0(t,...i){if(Hf(t)||Zc(t))return S_(Io(w_(y0,[t,...i])));const r=t;return i.length===0&&r.length===1&&typeof r[0]=="string"?Io(r):S_(Io(w_(r,i)))}function bg(t,i,r=qs){if(!i)throw eu(1,i);const s=(u,...m)=>t(i,r,x0(u,...m));return s.attrs=u=>bg(t,i,Object.assign(Object.assign({},r),{attrs:Array.prototype.concat(r.attrs,u).filter(Boolean)})),s.withConfig=u=>bg(t,i,Object.assign(Object.assign({},r),u)),s}const H1=t=>bg(Qk,t),x=H1;ej.forEach(t=>{x[t]=H1(t)});var $1;class tj{constructor(i,r){this[$1]=!0,this.inject=(s,u=yg)=>{const m=this.getName(u);if(!s.hasNameForId(this.id,m)){const p=u(this.rules,m,"@keyframes");s.insertRules(this.id,m,p)}},this.name=i,this.id=E1+i,this.rules=r,Ec(this.id),_0(this,()=>{throw eu(12,String(this.name))})}getName(i=yg){return i.hash?this.name+b0(+i.hash>>>0):this.name}}function nj(t,...i){const r=pg(x0(t,...i)),s=A1(r);return new tj(s,r)}$1=M1;const ij=x.button`
    border-radius: 0;
    border: 1px solid black;
    background-color: ${({$clicked:t})=>t?"#E3E6FF":"white"};
    padding: 0.3rem 0.6rem;
    
    &, &:link, &:visited, &:hover, &:active {
        color: black;
        text-decoration: none;
    }
`;function V1({categoryName:t,clicked:i,onClick:r}){return h.jsx(ij,{$clicked:i,onClick:()=>{r?.()},children:t})}const aj=x.button`
    border-radius: 50%;
    border: 0.8px solid black;
    background-color: #FF9E9E;
    color: white;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
    font-size: 0.8rem;
`;function Vf({className:t,onClick:i}){return h.jsx(aj,{className:t,onClick:i,children:"X"})}const rj=x.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.1rem;
`,oj=x(Vf)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`;function sj({categoryNameProp:t,onSelectCategory:i,onRemoveCategory:r,categoryKoreanName:s,selectedCategory:u}){const m=u.includes(s);return h.jsxs(rj,{children:[h.jsx(V1,{categoryName:t,clicked:m,onClick:()=>i(s)}),m&&h.jsx(oj,{onClick:()=>r(s)})]})}const lj=x.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.1rem;
`,cj=x(Vf)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`;function uj({categoryNameProp:t,onSelectCategory:i,onRemoveCategory:r,categoryKoreanName:s,selectedCategory:u}){const m=u.includes(s);return h.jsxs(lj,{children:[h.jsx(V1,{categoryName:t,clicked:m,onClick:()=>i(s)}),m&&h.jsx(cj,{onClick:()=>r(s)})]})}const dj=x.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    gap: 1.5rem;
    padding-left: 1em;
    padding-right: 1rem;
    scrollbar-width: none;
    position: relative;
    z-index: 5;
    &::-webkit-scrollbar {
        display: none;
    }
    > * {
        flex-shrink: 0;
    }
`;function fj({className:t,onRemoveCategory:i,onSelectCategory:r,language:s,selectedCategory:u,categories:m}){return h.jsxs(dj,{className:t,children:[h.jsx(uj,{onRemoveCategory:i,onSelectCategory:r,categoryNameProp:s==="eng"?"📢open":"📢영업중",language:s,categoryKoreanName:"📢영업중",selectedCategory:u},"open"),m.map(p=>h.jsx(sj,{onRemoveCategory:i,onSelectCategory:r,categoryNameProp:s==="eng"?p.name.eng:p.name.kor,language:s,categoryKoreanName:p.name.kor,selectedCategory:u},p._id))]})}const hj=x.button`
    margin-bottom: 1.2rem;
    display: inline-flex;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.8px solid ${({$active:t})=>t?"#7965EA":"black"};
    justify-content: center;
    align-items: center;
    background-color: ${({$active:t})=>t?"#F1EDFC":"white"};
    font-size: 1.5rem;
`;function mp({optionName:t,onClick:i,active:r}){return h.jsx(hj,{type:"button",$active:r,onClick:i,children:t})}const mj=x.div`
    display: flex;
    flex-direction: column;
`;function pj({className:t,onOpenWebsiteInfo:i,onMyLocation:r,onToggleFavorites:s,favoritesOnly:u}){return h.jsxs(mj,{className:t,children:[h.jsx(mp,{optionName:"⭐",active:u,onClick:s}),h.jsx(mp,{optionName:"👤",onClick:r}),h.jsx(mp,{optionName:"❓",onClick:i})]})}var Cc={exports:{}};var gj=Cc.exports,E_;function vj(){return E_||(E_=1,(function(t,i){(function(r,s){s(i)})(gj,(function(r){var s="1.9.4";function u(a){var l,d,v,w;for(d=1,v=arguments.length;d<v;d++){w=arguments[d];for(l in w)a[l]=w[l]}return a}var m=Object.create||(function(){function a(){}return function(l){return a.prototype=l,new a}})();function p(a,l){var d=Array.prototype.slice;if(a.bind)return a.bind.apply(a,d.call(arguments,1));var v=d.call(arguments,2);return function(){return a.apply(l,v.length?v.concat(d.call(arguments)):arguments)}}var b=0;function y(a){return"_leaflet_id"in a||(a._leaflet_id=++b),a._leaflet_id}function _(a,l,d){var v,w,C,R;return R=function(){v=!1,w&&(C.apply(d,w),w=!1)},C=function(){v?w=arguments:(a.apply(d,arguments),setTimeout(R,l),v=!0)},C}function T(a,l,d){var v=l[1],w=l[0],C=v-w;return a===v&&d?a:((a-w)%C+C)%C+w}function E(){return!1}function j(a,l){if(l===!1)return a;var d=Math.pow(10,l===void 0?6:l);return Math.round(a*d)/d}function M(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function z(a){return M(a).split(/\s+/)}function P(a,l){Object.prototype.hasOwnProperty.call(a,"options")||(a.options=a.options?m(a.options):{});for(var d in l)a.options[d]=l[d];return a.options}function H(a,l,d){var v=[];for(var w in a)v.push(encodeURIComponent(d?w.toUpperCase():w)+"="+encodeURIComponent(a[w]));return(!l||l.indexOf("?")===-1?"?":"&")+v.join("&")}var B=/\{ *([\w_ -]+) *\}/g;function $(a,l){return a.replace(B,function(d,v){var w=l[v];if(w===void 0)throw new Error("No value provided for variable "+d);return typeof w=="function"&&(w=w(l)),w})}var W=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"};function ue(a,l){for(var d=0;d<a.length;d++)if(a[d]===l)return d;return-1}var J="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function se(a){return window["webkit"+a]||window["moz"+a]||window["ms"+a]}var Q=0;function he(a){var l=+new Date,d=Math.max(0,16-(l-Q));return Q=l+d,window.setTimeout(a,d)}var Ce=window.requestAnimationFrame||se("RequestAnimationFrame")||he,Ue=window.cancelAnimationFrame||se("CancelAnimationFrame")||se("CancelRequestAnimationFrame")||function(a){window.clearTimeout(a)};function ve(a,l,d){if(d&&Ce===he)a.call(l);else return Ce.call(window,p(a,l))}function ke(a){a&&Ue.call(window,a)}var ge={__proto__:null,extend:u,create:m,bind:p,get lastId(){return b},stamp:y,throttle:_,wrapNum:T,falseFn:E,formatNum:j,trim:M,splitWords:z,setOptions:P,getParamString:H,template:$,isArray:W,indexOf:ue,emptyImageUrl:J,requestFn:Ce,cancelFn:Ue,requestAnimFrame:ve,cancelAnimFrame:ke};function ae(){}ae.extend=function(a){var l=function(){P(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},d=l.__super__=this.prototype,v=m(d);v.constructor=l,l.prototype=v;for(var w in this)Object.prototype.hasOwnProperty.call(this,w)&&w!=="prototype"&&w!=="__super__"&&(l[w]=this[w]);return a.statics&&u(l,a.statics),a.includes&&(je(a.includes),u.apply(null,[v].concat(a.includes))),u(v,a),delete v.statics,delete v.includes,v.options&&(v.options=d.options?m(d.options):{},u(v.options,a.options)),v._initHooks=[],v.callInitHooks=function(){if(!this._initHooksCalled){d.callInitHooks&&d.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,R=v._initHooks.length;C<R;C++)v._initHooks[C].call(this)}},l},ae.include=function(a){var l=this.prototype.options;return u(this.prototype,a),a.options&&(this.prototype.options=l,this.mergeOptions(a.options)),this},ae.mergeOptions=function(a){return u(this.prototype.options,a),this},ae.addInitHook=function(a){var l=Array.prototype.slice.call(arguments,1),d=typeof a=="function"?a:function(){this[a].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(d),this};function je(a){if(!(typeof L>"u"||!L||!L.Mixin)){a=W(a)?a:[a];for(var l=0;l<a.length;l++)a[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var D={on:function(a,l,d){if(typeof a=="object")for(var v in a)this._on(v,a[v],l);else{a=z(a);for(var w=0,C=a.length;w<C;w++)this._on(a[w],l,d)}return this},off:function(a,l,d){if(!arguments.length)delete this._events;else if(typeof a=="object")for(var v in a)this._off(v,a[v],l);else{a=z(a);for(var w=arguments.length===1,C=0,R=a.length;C<R;C++)w?this._off(a[C]):this._off(a[C],l,d)}return this},_on:function(a,l,d,v){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(a,l,d)===!1){d===this&&(d=void 0);var w={fn:l,ctx:d};v&&(w.once=!0),this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(w)}},_off:function(a,l,d){var v,w,C;if(this._events&&(v=this._events[a],!!v)){if(arguments.length===1){if(this._firingCount)for(w=0,C=v.length;w<C;w++)v[w].fn=E;delete this._events[a];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var R=this._listens(a,l,d);if(R!==!1){var F=v[R];this._firingCount&&(F.fn=E,this._events[a]=v=v.slice()),v.splice(R,1)}}},fire:function(a,l,d){if(!this.listens(a,d))return this;var v=u({},l,{type:a,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var w=this._events[a];if(w){this._firingCount=this._firingCount+1||1;for(var C=0,R=w.length;C<R;C++){var F=w[C],q=F.fn;F.once&&this.off(a,q,F.ctx),q.call(F.ctx||this,v)}this._firingCount--}}return d&&this._propagateEvent(v),this},listens:function(a,l,d,v){typeof a!="string"&&console.warn('"string" type argument expected');var w=l;typeof l!="function"&&(v=!!l,w=void 0,d=void 0);var C=this._events&&this._events[a];if(C&&C.length&&this._listens(a,w,d)!==!1)return!0;if(v){for(var R in this._eventParents)if(this._eventParents[R].listens(a,l,d,v))return!0}return!1},_listens:function(a,l,d){if(!this._events)return!1;var v=this._events[a]||[];if(!l)return!!v.length;d===this&&(d=void 0);for(var w=0,C=v.length;w<C;w++)if(v[w].fn===l&&v[w].ctx===d)return w;return!1},once:function(a,l,d){if(typeof a=="object")for(var v in a)this._on(v,a[v],l,!0);else{a=z(a);for(var w=0,C=a.length;w<C;w++)this._on(a[w],l,d,!0)}return this},addEventParent:function(a){return this._eventParents=this._eventParents||{},this._eventParents[y(a)]=a,this},removeEventParent:function(a){return this._eventParents&&delete this._eventParents[y(a)],this},_propagateEvent:function(a){for(var l in this._eventParents)this._eventParents[l].fire(a.type,u({layer:a.target,propagatedFrom:a.target},a),!0)}};D.addEventListener=D.on,D.removeEventListener=D.clearAllEventListeners=D.off,D.addOneTimeEventListener=D.once,D.fireEvent=D.fire,D.hasEventListeners=D.listens;var le=ae.extend(D);function re(a,l,d){this.x=d?Math.round(a):a,this.y=d?Math.round(l):l}var Me=Math.trunc||function(a){return a>0?Math.floor(a):Math.ceil(a)};re.prototype={clone:function(){return new re(this.x,this.y)},add:function(a){return this.clone()._add(ce(a))},_add:function(a){return this.x+=a.x,this.y+=a.y,this},subtract:function(a){return this.clone()._subtract(ce(a))},_subtract:function(a){return this.x-=a.x,this.y-=a.y,this},divideBy:function(a){return this.clone()._divideBy(a)},_divideBy:function(a){return this.x/=a,this.y/=a,this},multiplyBy:function(a){return this.clone()._multiplyBy(a)},_multiplyBy:function(a){return this.x*=a,this.y*=a,this},scaleBy:function(a){return new re(this.x*a.x,this.y*a.y)},unscaleBy:function(a){return new re(this.x/a.x,this.y/a.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Me(this.x),this.y=Me(this.y),this},distanceTo:function(a){a=ce(a);var l=a.x-this.x,d=a.y-this.y;return Math.sqrt(l*l+d*d)},equals:function(a){return a=ce(a),a.x===this.x&&a.y===this.y},contains:function(a){return a=ce(a),Math.abs(a.x)<=Math.abs(this.x)&&Math.abs(a.y)<=Math.abs(this.y)},toString:function(){return"Point("+j(this.x)+", "+j(this.y)+")"}};function ce(a,l,d){return a instanceof re?a:W(a)?new re(a[0],a[1]):a==null?a:typeof a=="object"&&"x"in a&&"y"in a?new re(a.x,a.y):new re(a,l,d)}function O(a,l){if(a)for(var d=l?[a,l]:a,v=0,w=d.length;v<w;v++)this.extend(d[v])}O.prototype={extend:function(a){var l,d;if(!a)return this;if(a instanceof re||typeof a[0]=="number"||"x"in a)l=d=ce(a);else if(a=Y(a),l=a.min,d=a.max,!l||!d)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=d.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(d.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(d.y,this.max.y)),this},getCenter:function(a){return ce((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,a)},getBottomLeft:function(){return ce(this.min.x,this.max.y)},getTopRight:function(){return ce(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(a){var l,d;return typeof a[0]=="number"||a instanceof re?a=ce(a):a=Y(a),a instanceof O?(l=a.min,d=a.max):l=d=a,l.x>=this.min.x&&d.x<=this.max.x&&l.y>=this.min.y&&d.y<=this.max.y},intersects:function(a){a=Y(a);var l=this.min,d=this.max,v=a.min,w=a.max,C=w.x>=l.x&&v.x<=d.x,R=w.y>=l.y&&v.y<=d.y;return C&&R},overlaps:function(a){a=Y(a);var l=this.min,d=this.max,v=a.min,w=a.max,C=w.x>l.x&&v.x<d.x,R=w.y>l.y&&v.y<d.y;return C&&R},isValid:function(){return!!(this.min&&this.max)},pad:function(a){var l=this.min,d=this.max,v=Math.abs(l.x-d.x)*a,w=Math.abs(l.y-d.y)*a;return Y(ce(l.x-v,l.y-w),ce(d.x+v,d.y+w))},equals:function(a){return a?(a=Y(a),this.min.equals(a.getTopLeft())&&this.max.equals(a.getBottomRight())):!1}};function Y(a,l){return!a||a instanceof O?a:new O(a,l)}function ie(a,l){if(a)for(var d=l?[a,l]:a,v=0,w=d.length;v<w;v++)this.extend(d[v])}ie.prototype={extend:function(a){var l=this._southWest,d=this._northEast,v,w;if(a instanceof fe)v=a,w=a;else if(a instanceof ie){if(v=a._southWest,w=a._northEast,!v||!w)return this}else return a?this.extend(pe(a)||oe(a)):this;return!l&&!d?(this._southWest=new fe(v.lat,v.lng),this._northEast=new fe(w.lat,w.lng)):(l.lat=Math.min(v.lat,l.lat),l.lng=Math.min(v.lng,l.lng),d.lat=Math.max(w.lat,d.lat),d.lng=Math.max(w.lng,d.lng)),this},pad:function(a){var l=this._southWest,d=this._northEast,v=Math.abs(l.lat-d.lat)*a,w=Math.abs(l.lng-d.lng)*a;return new ie(new fe(l.lat-v,l.lng-w),new fe(d.lat+v,d.lng+w))},getCenter:function(){return new fe((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new fe(this.getNorth(),this.getWest())},getSouthEast:function(){return new fe(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(a){typeof a[0]=="number"||a instanceof fe||"lat"in a?a=pe(a):a=oe(a);var l=this._southWest,d=this._northEast,v,w;return a instanceof ie?(v=a.getSouthWest(),w=a.getNorthEast()):v=w=a,v.lat>=l.lat&&w.lat<=d.lat&&v.lng>=l.lng&&w.lng<=d.lng},intersects:function(a){a=oe(a);var l=this._southWest,d=this._northEast,v=a.getSouthWest(),w=a.getNorthEast(),C=w.lat>=l.lat&&v.lat<=d.lat,R=w.lng>=l.lng&&v.lng<=d.lng;return C&&R},overlaps:function(a){a=oe(a);var l=this._southWest,d=this._northEast,v=a.getSouthWest(),w=a.getNorthEast(),C=w.lat>l.lat&&v.lat<d.lat,R=w.lng>l.lng&&v.lng<d.lng;return C&&R},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(a,l){return a?(a=oe(a),this._southWest.equals(a.getSouthWest(),l)&&this._northEast.equals(a.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function oe(a,l){return a instanceof ie?a:new ie(a,l)}function fe(a,l,d){if(isNaN(a)||isNaN(l))throw new Error("Invalid LatLng object: ("+a+", "+l+")");this.lat=+a,this.lng=+l,d!==void 0&&(this.alt=+d)}fe.prototype={equals:function(a,l){if(!a)return!1;a=pe(a);var d=Math.max(Math.abs(this.lat-a.lat),Math.abs(this.lng-a.lng));return d<=(l===void 0?1e-9:l)},toString:function(a){return"LatLng("+j(this.lat,a)+", "+j(this.lng,a)+")"},distanceTo:function(a){return nt.distance(this,pe(a))},wrap:function(){return nt.wrapLatLng(this)},toBounds:function(a){var l=180*a/40075017,d=l/Math.cos(Math.PI/180*this.lat);return oe([this.lat-l,this.lng-d],[this.lat+l,this.lng+d])},clone:function(){return new fe(this.lat,this.lng,this.alt)}};function pe(a,l,d){return a instanceof fe?a:W(a)&&typeof a[0]!="object"?a.length===3?new fe(a[0],a[1],a[2]):a.length===2?new fe(a[0],a[1]):null:a==null?a:typeof a=="object"&&"lat"in a?new fe(a.lat,"lng"in a?a.lng:a.lon,a.alt):l===void 0?null:new fe(a,l,d)}var Le={latLngToPoint:function(a,l){var d=this.projection.project(a),v=this.scale(l);return this.transformation._transform(d,v)},pointToLatLng:function(a,l){var d=this.scale(l),v=this.transformation.untransform(a,d);return this.projection.unproject(v)},project:function(a){return this.projection.project(a)},unproject:function(a){return this.projection.unproject(a)},scale:function(a){return 256*Math.pow(2,a)},zoom:function(a){return Math.log(a/256)/Math.LN2},getProjectedBounds:function(a){if(this.infinite)return null;var l=this.projection.bounds,d=this.scale(a),v=this.transformation.transform(l.min,d),w=this.transformation.transform(l.max,d);return new O(v,w)},infinite:!1,wrapLatLng:function(a){var l=this.wrapLng?T(a.lng,this.wrapLng,!0):a.lng,d=this.wrapLat?T(a.lat,this.wrapLat,!0):a.lat,v=a.alt;return new fe(d,l,v)},wrapLatLngBounds:function(a){var l=a.getCenter(),d=this.wrapLatLng(l),v=l.lat-d.lat,w=l.lng-d.lng;if(v===0&&w===0)return a;var C=a.getSouthWest(),R=a.getNorthEast(),F=new fe(C.lat-v,C.lng-w),q=new fe(R.lat-v,R.lng-w);return new ie(F,q)}},nt=u({},Le,{wrapLng:[-180,180],R:6371e3,distance:function(a,l){var d=Math.PI/180,v=a.lat*d,w=l.lat*d,C=Math.sin((l.lat-a.lat)*d/2),R=Math.sin((l.lng-a.lng)*d/2),F=C*C+Math.cos(v)*Math.cos(w)*R*R,q=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*q}}),Qe=6378137,kt={R:Qe,MAX_LATITUDE:85.0511287798,project:function(a){var l=Math.PI/180,d=this.MAX_LATITUDE,v=Math.max(Math.min(d,a.lat),-d),w=Math.sin(v*l);return new re(this.R*a.lng*l,this.R*Math.log((1+w)/(1-w))/2)},unproject:function(a){var l=180/Math.PI;return new fe((2*Math.atan(Math.exp(a.y/this.R))-Math.PI/2)*l,a.x*l/this.R)},bounds:(function(){var a=Qe*Math.PI;return new O([-a,-a],[a,a])})()};function Ei(a,l,d,v){if(W(a)){this._a=a[0],this._b=a[1],this._c=a[2],this._d=a[3];return}this._a=a,this._b=l,this._c=d,this._d=v}Ei.prototype={transform:function(a,l){return this._transform(a.clone(),l)},_transform:function(a,l){return l=l||1,a.x=l*(this._a*a.x+this._b),a.y=l*(this._c*a.y+this._d),a},untransform:function(a,l){return l=l||1,new re((a.x/l-this._b)/this._a,(a.y/l-this._d)/this._c)}};function we(a,l,d,v){return new Ei(a,l,d,v)}var Tt=u({},nt,{code:"EPSG:3857",projection:kt,transformation:(function(){var a=.5/(Math.PI*kt.R);return we(a,.5,-a,.5)})()}),Dn=u({},Tt,{code:"EPSG:900913"});function Pa(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function Na(a,l){var d="",v,w,C,R,F,q;for(v=0,C=a.length;v<C;v++){for(F=a[v],w=0,R=F.length;w<R;w++)q=F[w],d+=(w?"L":"M")+q.x+" "+q.y;d+=l?xe.svg?"z":"x":""}return d||"M0 0"}var Gi=document.documentElement.style,Ti="ActiveXObject"in window,Da=Ti&&!document.addEventListener,Yi="msLaunchUri"in navigator&&!("documentMode"in document),Ur=hn("webkit"),hu=hn("android"),mu=hn("android 2")||hn("android 3"),on=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),th=hu&&hn("Google")&&on<537&&!("AudioNode"in window),Fo=!!window.opera,sl=!Yi&&hn("chrome"),Fr=hn("gecko")&&!Ur&&!Fo&&!Ti,nh=!sl&&hn("safari"),ll=hn("phantom"),pu="OTransition"in Gi,ih=navigator.platform.indexOf("Win")===0,Ba=Ti&&"transition"in Gi,Kt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!mu,ti="MozPerspective"in Gi,sn=!window.L_DISABLE_3D&&(Ba||Kt||ti)&&!pu&&!ll,Hr=typeof orientation<"u"||hn("mobile"),ah=Hr&&Ur,rh=Hr&&Kt,$r=!window.PointerEvent&&window.MSPointerEvent,Vr=!!(window.PointerEvent||$r),Zr="ontouchstart"in window||!!window.TouchEvent,Ki=!window.L_NO_TOUCH&&(Zr||Vr),Ho=Hr&&Fo,qr=Hr&&Fr,oh=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,gu=(function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveEventSupport",E,l),window.removeEventListener("testPassiveEventSupport",E,l)}catch{}return a})(),cl=(function(){return!!document.createElement("canvas").getContext})(),Wi=!!(document.createElementNS&&Pa("svg").createSVGRect),sh=!!Wi&&(function(){var a=document.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),vu=!Wi&&(function(){try{var a=document.createElement("div");a.innerHTML='<v:shape adj="1"/>';var l=a.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}})(),yu=navigator.platform.indexOf("Mac")===0,bu=navigator.platform.indexOf("Linux")===0;function hn(a){return navigator.userAgent.toLowerCase().indexOf(a)>=0}var xe={ie:Ti,ielt9:Da,edge:Yi,webkit:Ur,android:hu,android23:mu,androidStock:th,opera:Fo,chrome:sl,gecko:Fr,safari:nh,phantom:ll,opera12:pu,win:ih,ie3d:Ba,webkit3d:Kt,gecko3d:ti,any3d:sn,mobile:Hr,mobileWebkit:ah,mobileWebkit3d:rh,msPointer:$r,pointer:Vr,touch:Ki,touchNative:Zr,mobileOpera:Ho,mobileGecko:qr,retina:oh,passiveEvents:gu,canvas:cl,svg:Wi,vml:vu,inlineSvg:sh,mac:yu,linux:bu},ul=xe.msPointer?"MSPointerDown":"pointerdown",dl=xe.msPointer?"MSPointerMove":"pointermove",ni=xe.msPointer?"MSPointerUp":"pointerup",jt=xe.msPointer?"MSPointerCancel":"pointercancel",Ht={touchstart:ul,touchmove:dl,touchend:ni,touchcancel:jt},Xi={touchstart:Fa,touchmove:Ai,touchend:Ai,touchcancel:Ai},Ci={},_u=!1;function lh(a,l,d){return l==="touchstart"&&Ua(),Xi[l]?(d=Xi[l].bind(this,d),a.addEventListener(Ht[l],d,!1),d):(console.warn("wrong event specified:",l),E)}function xu(a,l,d){if(!Ht[l]){console.warn("wrong event specified:",l);return}a.removeEventListener(Ht[l],d,!1)}function Gr(a){Ci[a.pointerId]=a}function fl(a){Ci[a.pointerId]&&(Ci[a.pointerId]=a)}function Ji(a){delete Ci[a.pointerId]}function Ua(){_u||(document.addEventListener(ul,Gr,!0),document.addEventListener(dl,fl,!0),document.addEventListener(ni,Ji,!0),document.addEventListener(jt,Ji,!0),_u=!0)}function Ai(a,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var d in Ci)l.touches.push(Ci[d]);l.changedTouches=[l],a(l)}}function Fa(a,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&xt(l),Ai(a,l)}function Ot(a){var l={},d,v;for(v in a)d=a[v],l[v]=d&&d.bind?d.bind(a):d;return a=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var wu=200;function Su(a,l){a.addEventListener("dblclick",l);var d=0,v;function w(C){if(C.detail!==1){v=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var R=eo(C);if(!(R.some(function(q){return q instanceof HTMLLabelElement&&q.attributes.for})&&!R.some(function(q){return q instanceof HTMLInputElement||q instanceof HTMLSelectElement}))){var F=Date.now();F-d<=wu?(v++,v===2&&l(Ot(C))):v=1,d=F}}}return a.addEventListener("click",w),{dblclick:l,simDblclick:w}}function Qi(a,l){a.removeEventListener("dblclick",l.dblclick),a.removeEventListener("click",l.simDblclick)}var ki=Wr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Yr=Wr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),hl=Yr==="webkitTransition"||Yr==="OTransition"?Yr+"End":"transitionend";function ml(a){return typeof a=="string"?document.getElementById(a):a}function Kr(a,l){var d=a.style[l]||a.currentStyle&&a.currentStyle[l];if((!d||d==="auto")&&document.defaultView){var v=document.defaultView.getComputedStyle(a,null);d=v?v[l]:null}return d==="auto"?null:d}function He(a,l,d){var v=document.createElement(a);return v.className=l||"",d&&d.appendChild(v),v}function ot(a){var l=a.parentNode;l&&l.removeChild(a)}function mn(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function Nt(a){var l=a.parentNode;l&&l.lastChild!==a&&l.appendChild(a)}function ea(a){var l=a.parentNode;l&&l.firstChild!==a&&l.insertBefore(a,l.firstChild)}function pl(a,l){if(a.classList!==void 0)return a.classList.contains(l);var d=$o(a);return d.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(d)}function Ie(a,l){if(a.classList!==void 0)for(var d=z(l),v=0,w=d.length;v<w;v++)a.classList.add(d[v]);else if(!pl(a,l)){var C=$o(a);Ha(a,(C?C+" ":"")+l)}}function vt(a,l){a.classList!==void 0?a.classList.remove(l):Ha(a,M((" "+$o(a)+" ").replace(" "+l+" "," ")))}function Ha(a,l){a.className.baseVal===void 0?a.className=l:a.className.baseVal=l}function $o(a){return a.correspondingElement&&(a=a.correspondingElement),a.className.baseVal===void 0?a.className:a.className.baseVal}function ht(a,l){"opacity"in a.style?a.style.opacity=l:"filter"in a.style&&gl(a,l)}function gl(a,l){var d=!1,v="DXImageTransform.Microsoft.Alpha";try{d=a.filters.item(v)}catch{if(l===1)return}l=Math.round(l*100),d?(d.Enabled=l!==100,d.Opacity=l):a.style.filter+=" progid:"+v+"(opacity="+l+")"}function Wr(a){for(var l=document.documentElement.style,d=0;d<a.length;d++)if(a[d]in l)return a[d];return!1}function ii(a,l,d){var v=l||new re(0,0);a.style[ki]=(xe.ie3d?"translate("+v.x+"px,"+v.y+"px)":"translate3d("+v.x+"px,"+v.y+"px,0)")+(d?" scale("+d+")":"")}function ut(a,l){a._leaflet_pos=l,xe.any3d?ii(a,l):(a.style.left=l.x+"px",a.style.top=l.y+"px")}function ji(a){return a._leaflet_pos||new re(0,0)}var $a,Bn,vl;if("onselectstart"in document)$a=function(){Re(window,"selectstart",xt)},Bn=function(){it(window,"selectstart",xt)};else{var Va=Wr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);$a=function(){if(Va){var a=document.documentElement.style;vl=a[Va],a[Va]="none"}},Bn=function(){Va&&(document.documentElement.style[Va]=vl,vl=void 0)}}function Vo(){Re(window,"dragstart",xt)}function Xr(){it(window,"dragstart",xt)}var Zo,yl;function Za(a){for(;a.tabIndex===-1;)a=a.parentNode;a.style&&(pn(),Zo=a,yl=a.style.outlineStyle,a.style.outlineStyle="none",Re(window,"keydown",pn))}function pn(){Zo&&(Zo.style.outlineStyle=yl,Zo=void 0,yl=void 0,it(window,"keydown",pn))}function qo(a){do a=a.parentNode;while((!a.offsetWidth||!a.offsetHeight)&&a!==document.body);return a}function Jr(a){var l=a.getBoundingClientRect();return{x:l.width/a.offsetWidth||1,y:l.height/a.offsetHeight||1,boundingClientRect:l}}var qa={__proto__:null,TRANSFORM:ki,TRANSITION:Yr,TRANSITION_END:hl,get:ml,getStyle:Kr,create:He,remove:ot,empty:mn,toFront:Nt,toBack:ea,hasClass:pl,addClass:Ie,removeClass:vt,setClass:Ha,getClass:$o,setOpacity:ht,testProp:Wr,setTransform:ii,setPosition:ut,getPosition:ji,get disableTextSelection(){return $a},get enableTextSelection(){return Bn},disableImageDrag:Vo,enableImageDrag:Xr,preventOutline:Za,restoreOutline:pn,getSizedParentNode:qo,getScale:Jr};function Re(a,l,d,v){if(l&&typeof l=="object")for(var w in l)An(a,w,l[w],d);else{l=z(l);for(var C=0,R=l.length;C<R;C++)An(a,l[C],d,v)}return this}var Cn="_leaflet_events";function it(a,l,d,v){if(arguments.length===1)bl(a),delete a[Cn];else if(l&&typeof l=="object")for(var w in l)Qr(a,w,l[w],d);else if(l=z(l),arguments.length===2)bl(a,function(F){return ue(l,F)!==-1});else for(var C=0,R=l.length;C<R;C++)Qr(a,l[C],d,v);return this}function bl(a,l){for(var d in a[Cn]){var v=d.split(/\d/)[0];(!l||l(v))&&Qr(a,v,null,null,d)}}var ta={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function An(a,l,d,v){var w=l+y(d)+(v?"_"+y(v):"");if(a[Cn]&&a[Cn][w])return this;var C=function(F){return d.call(v||a,F||window.event)},R=C;!xe.touchNative&&xe.pointer&&l.indexOf("touch")===0?C=lh(a,l,C):xe.touch&&l==="dblclick"?C=Su(a,C):"addEventListener"in a?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?a.addEventListener(ta[l]||l,C,xe.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(C=function(F){F=F||window.event,ai(a,F)&&R(F)},a.addEventListener(ta[l],C,!1)):a.addEventListener(l,R,!1):a.attachEvent("on"+l,C),a[Cn]=a[Cn]||{},a[Cn][w]=C}function Qr(a,l,d,v,w){w=w||l+y(d)+(v?"_"+y(v):"");var C=a[Cn]&&a[Cn][w];if(!C)return this;!xe.touchNative&&xe.pointer&&l.indexOf("touch")===0?xu(a,l,C):xe.touch&&l==="dblclick"?Qi(a,C):"removeEventListener"in a?a.removeEventListener(ta[l]||l,C,!1):a.detachEvent("on"+l,C),a[Cn][w]=null}function kn(a){return a.stopPropagation?a.stopPropagation():a.originalEvent?a.originalEvent._stopped=!0:a.cancelBubble=!0,this}function Un(a){return An(a,"wheel",kn),this}function na(a){return Re(a,"mousedown touchstart dblclick contextmenu",kn),a._leaflet_disable_click=!0,this}function xt(a){return a.preventDefault?a.preventDefault():a.returnValue=!1,this}function Oi(a){return xt(a),kn(a),this}function eo(a){if(a.composedPath)return a.composedPath();for(var l=[],d=a.target;d;)l.push(d),d=d.parentNode;return l}function to(a,l){if(!l)return new re(a.clientX,a.clientY);var d=Jr(l),v=d.boundingClientRect;return new re((a.clientX-v.left)/d.x-l.clientLeft,(a.clientY-v.top)/d.y-l.clientTop)}var Eu=xe.linux&&xe.chrome?window.devicePixelRatio:xe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Wt(a){return xe.edge?a.wheelDeltaY/2:a.deltaY&&a.deltaMode===0?-a.deltaY/Eu:a.deltaY&&a.deltaMode===1?-a.deltaY*20:a.deltaY&&a.deltaMode===2?-a.deltaY*60:a.deltaX||a.deltaZ?0:a.wheelDelta?(a.wheelDeltaY||a.wheelDelta)/2:a.detail&&Math.abs(a.detail)<32765?-a.detail*20:a.detail?a.detail/-32765*60:0}function ai(a,l){var d=l.relatedTarget;if(!d)return!0;try{for(;d&&d!==a;)d=d.parentNode}catch{return!1}return d!==a}var Go={__proto__:null,on:Re,off:it,stopPropagation:kn,disableScrollPropagation:Un,disableClickPropagation:na,preventDefault:xt,stop:Oi,getPropagationPath:eo,getMousePosition:to,getWheelDelta:Wt,isExternalTarget:ai,addListener:Re,removeListener:it},Ga=le.extend({run:function(a,l,d,v){this.stop(),this._el=a,this._inProgress=!0,this._duration=d||.25,this._easeOutPower=1/Math.max(v||.5,.2),this._startPos=ji(a),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=ve(this._animate,this),this._step()},_step:function(a){var l=+new Date-this._startTime,d=this._duration*1e3;l<d?this._runFrame(this._easeOut(l/d),a):(this._runFrame(1),this._complete())},_runFrame:function(a,l){var d=this._startPos.add(this._offset.multiplyBy(a));l&&d._round(),ut(this._el,d),this.fire("step")},_complete:function(){ke(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(a){return 1-Math.pow(1-a,this._easeOutPower)}}),qe=le.extend({options:{crs:Tt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(a,l){l=P(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(a),this._initLayout(),this._onResize=p(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(pe(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Yr&&xe.any3d&&!xe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Re(this._proxy,hl,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(a,l,d){if(l=l===void 0?this._zoom:this._limitZoom(l),a=this._limitCenter(pe(a),l,this.options.maxBounds),d=d||{},this._stop(),this._loaded&&!d.reset&&d!==!0){d.animate!==void 0&&(d.zoom=u({animate:d.animate},d.zoom),d.pan=u({animate:d.animate,duration:d.duration},d.pan));var v=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(a,l,d.zoom):this._tryAnimatedPan(a,d.pan);if(v)return clearTimeout(this._sizeTimer),this}return this._resetView(a,l,d.pan&&d.pan.noMoveStart),this},setZoom:function(a,l){return this._loaded?this.setView(this.getCenter(),a,{zoom:l}):(this._zoom=a,this)},zoomIn:function(a,l){return a=a||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+a,l)},zoomOut:function(a,l){return a=a||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-a,l)},setZoomAround:function(a,l,d){var v=this.getZoomScale(l),w=this.getSize().divideBy(2),C=a instanceof re?a:this.latLngToContainerPoint(a),R=C.subtract(w).multiplyBy(1-1/v),F=this.containerPointToLatLng(w.add(R));return this.setView(F,l,{zoom:d})},_getBoundsCenterZoom:function(a,l){l=l||{},a=a.getBounds?a.getBounds():oe(a);var d=ce(l.paddingTopLeft||l.padding||[0,0]),v=ce(l.paddingBottomRight||l.padding||[0,0]),w=this.getBoundsZoom(a,!1,d.add(v));if(w=typeof l.maxZoom=="number"?Math.min(l.maxZoom,w):w,w===1/0)return{center:a.getCenter(),zoom:w};var C=v.subtract(d).divideBy(2),R=this.project(a.getSouthWest(),w),F=this.project(a.getNorthEast(),w),q=this.unproject(R.add(F).divideBy(2).add(C),w);return{center:q,zoom:w}},fitBounds:function(a,l){if(a=oe(a),!a.isValid())throw new Error("Bounds are not valid.");var d=this._getBoundsCenterZoom(a,l);return this.setView(d.center,d.zoom,l)},fitWorld:function(a){return this.fitBounds([[-90,-180],[90,180]],a)},panTo:function(a,l){return this.setView(a,this._zoom,{pan:l})},panBy:function(a,l){if(a=ce(a).round(),l=l||{},!a.x&&!a.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(a))return this._resetView(this.unproject(this.project(this.getCenter()).add(a)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ga,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){Ie(this._mapPane,"leaflet-pan-anim");var d=this._getMapPanePos().subtract(a).round();this._panAnim.run(this._mapPane,d,l.duration||.25,l.easeLinearity)}else this._rawPanBy(a),this.fire("move").fire("moveend");return this},flyTo:function(a,l,d){if(d=d||{},d.animate===!1||!xe.any3d)return this.setView(a,l,d);this._stop();var v=this.project(this.getCenter()),w=this.project(a),C=this.getSize(),R=this._zoom;a=pe(a),l=l===void 0?R:l;var F=Math.max(C.x,C.y),q=F*this.getZoomScale(R,l),te=w.distanceTo(v)||1,me=1.42,Se=me*me;function De(_t){var li=_t?-1:1,oa=_t?q:F,Ml=q*q-F*F+li*Se*Se*te*te,yo=2*oa*Se*te,bo=Ml/yo,Bi=Math.sqrt(bo*bo+1)-bo,ci=Bi<1e-9?-18:Math.log(Bi);return ci}function Dt(_t){return(Math.exp(_t)-Math.exp(-_t))/2}function wt(_t){return(Math.exp(_t)+Math.exp(-_t))/2}function cn(_t){return Dt(_t)/wt(_t)}var Ke=De(0);function We(_t){return F*(wt(Ke)/wt(Ke+me*_t))}function $e(_t){return F*(wt(Ke)*cn(Ke+me*_t)-Dt(Ke))/Se}function Ni(_t){return 1-Math.pow(1-_t,1.5)}var bn=Date.now(),ss=(De(1)-Ke)/me,Di=d.duration?1e3*d.duration:1e3*ss*.8;function Rl(){var _t=(Date.now()-bn)/Di,li=Ni(_t)*ss;_t<=1?(this._flyToFrame=ve(Rl,this),this._move(this.unproject(v.add(w.subtract(v).multiplyBy($e(li)/te)),R),this.getScaleZoom(F/We(li),R),{flyTo:!0})):this._move(a,l)._moveEnd(!0)}return this._moveStart(!0,d.noMoveStart),Rl.call(this),this},flyToBounds:function(a,l){var d=this._getBoundsCenterZoom(a,l);return this.flyTo(d.center,d.zoom,l)},setMaxBounds:function(a){return a=oe(a),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),a.isValid()?(this.options.maxBounds=a,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(a){var l=this.options.minZoom;return this.options.minZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(a):this},setMaxZoom:function(a){var l=this.options.maxZoom;return this.options.maxZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(a):this},panInsideBounds:function(a,l){this._enforcingBounds=!0;var d=this.getCenter(),v=this._limitCenter(d,this._zoom,oe(a));return d.equals(v)||this.panTo(v,l),this._enforcingBounds=!1,this},panInside:function(a,l){l=l||{};var d=ce(l.paddingTopLeft||l.padding||[0,0]),v=ce(l.paddingBottomRight||l.padding||[0,0]),w=this.project(this.getCenter()),C=this.project(a),R=this.getPixelBounds(),F=Y([R.min.add(d),R.max.subtract(v)]),q=F.getSize();if(!F.contains(C)){this._enforcingBounds=!0;var te=C.subtract(F.getCenter()),me=F.extend(C).getSize().subtract(q);w.x+=te.x<0?-me.x:me.x,w.y+=te.y<0?-me.y:me.y,this.panTo(this.unproject(w),l),this._enforcingBounds=!1}return this},invalidateSize:function(a){if(!this._loaded)return this;a=u({animate:!1,pan:!0},a===!0?{animate:!0}:a);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var d=this.getSize(),v=l.divideBy(2).round(),w=d.divideBy(2).round(),C=v.subtract(w);return!C.x&&!C.y?this:(a.animate&&a.pan?this.panBy(C):(a.pan&&this._rawPanBy(C),this.fire("move"),a.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:d}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(a){if(a=this._locateOptions=u({timeout:1e4,watch:!1},a),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=p(this._handleGeolocationResponse,this),d=p(this._handleGeolocationError,this);return a.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,d,a):navigator.geolocation.getCurrentPosition(l,d,a),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(a){if(this._container._leaflet_id){var l=a.code,d=a.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+d+"."})}},_handleGeolocationResponse:function(a){if(this._container._leaflet_id){var l=a.coords.latitude,d=a.coords.longitude,v=new fe(l,d),w=v.toBounds(a.coords.accuracy*2),C=this._locateOptions;if(C.setView){var R=this.getBoundsZoom(w);this.setView(v,C.maxZoom?Math.min(R,C.maxZoom):R)}var F={latlng:v,bounds:w,timestamp:a.timestamp};for(var q in a.coords)typeof a.coords[q]=="number"&&(F[q]=a.coords[q]);this.fire("locationfound",F)}},addHandler:function(a,l){if(!l)return this;var d=this[a]=new l(this);return this._handlers.push(d),this.options[a]&&d.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ot(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ke(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var a;for(a in this._layers)this._layers[a].remove();for(a in this._panes)ot(this._panes[a]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(a,l){var d="leaflet-pane"+(a?" leaflet-"+a.replace("Pane","")+"-pane":""),v=He("div",d,l||this._mapPane);return a&&(this._panes[a]=v),v},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var a=this.getPixelBounds(),l=this.unproject(a.getBottomLeft()),d=this.unproject(a.getTopRight());return new ie(l,d)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(a,l,d){a=oe(a),d=ce(d||[0,0]);var v=this.getZoom()||0,w=this.getMinZoom(),C=this.getMaxZoom(),R=a.getNorthWest(),F=a.getSouthEast(),q=this.getSize().subtract(d),te=Y(this.project(F,v),this.project(R,v)).getSize(),me=xe.any3d?this.options.zoomSnap:1,Se=q.x/te.x,De=q.y/te.y,Dt=l?Math.max(Se,De):Math.min(Se,De);return v=this.getScaleZoom(Dt,v),me&&(v=Math.round(v/(me/100))*(me/100),v=l?Math.ceil(v/me)*me:Math.floor(v/me)*me),Math.max(w,Math.min(C,v))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new re(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(a,l){var d=this._getTopLeftPoint(a,l);return new O(d,d.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(a){return this.options.crs.getProjectedBounds(a===void 0?this.getZoom():a)},getPane:function(a){return typeof a=="string"?this._panes[a]:a},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(a,l){var d=this.options.crs;return l=l===void 0?this._zoom:l,d.scale(a)/d.scale(l)},getScaleZoom:function(a,l){var d=this.options.crs;l=l===void 0?this._zoom:l;var v=d.zoom(a*d.scale(l));return isNaN(v)?1/0:v},project:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(pe(a),l)},unproject:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(ce(a),l)},layerPointToLatLng:function(a){var l=ce(a).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(a){var l=this.project(pe(a))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(a){return this.options.crs.wrapLatLng(pe(a))},wrapLatLngBounds:function(a){return this.options.crs.wrapLatLngBounds(oe(a))},distance:function(a,l){return this.options.crs.distance(pe(a),pe(l))},containerPointToLayerPoint:function(a){return ce(a).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(a){return ce(a).add(this._getMapPanePos())},containerPointToLatLng:function(a){var l=this.containerPointToLayerPoint(ce(a));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(a){return this.layerPointToContainerPoint(this.latLngToLayerPoint(pe(a)))},mouseEventToContainerPoint:function(a){return to(a,this._container)},mouseEventToLayerPoint:function(a){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))},mouseEventToLatLng:function(a){return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))},_initContainer:function(a){var l=this._container=ml(a);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Re(l,"scroll",this._onScroll,this),this._containerId=y(l)},_initLayout:function(){var a=this._container;this._fadeAnimated=this.options.fadeAnimation&&xe.any3d,Ie(a,"leaflet-container"+(xe.touch?" leaflet-touch":"")+(xe.retina?" leaflet-retina":"")+(xe.ielt9?" leaflet-oldie":"")+(xe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=Kr(a,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(a.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var a=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ut(this._mapPane,new re(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ie(a.markerPane,"leaflet-zoom-hide"),Ie(a.shadowPane,"leaflet-zoom-hide"))},_resetView:function(a,l,d){ut(this._mapPane,new re(0,0));var v=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var w=this._zoom!==l;this._moveStart(w,d)._move(a,l)._moveEnd(w),this.fire("viewreset"),v&&this.fire("load")},_moveStart:function(a,l){return a&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(a,l,d,v){l===void 0&&(l=this._zoom);var w=this._zoom!==l;return this._zoom=l,this._lastCenter=a,this._pixelOrigin=this._getNewPixelOrigin(a),v?d&&d.pinch&&this.fire("zoom",d):((w||d&&d.pinch)&&this.fire("zoom",d),this.fire("move",d)),this},_moveEnd:function(a){return a&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ke(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(a){ut(this._mapPane,this._getMapPanePos().subtract(a))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(a){this._targets={},this._targets[y(this._container)]=this;var l=a?it:Re;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),xe.any3d&&this.options.transform3DLimit&&(a?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ke(this._resizeRequest),this._resizeRequest=ve(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var a=this._getMapPanePos();Math.max(Math.abs(a.x),Math.abs(a.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(a,l){for(var d=[],v,w=l==="mouseout"||l==="mouseover",C=a.target||a.srcElement,R=!1;C;){if(v=this._targets[y(C)],v&&(l==="click"||l==="preclick")&&this._draggableMoved(v)){R=!0;break}if(v&&v.listens(l,!0)&&(w&&!ai(C,a)||(d.push(v),w))||C===this._container)break;C=C.parentNode}return!d.length&&!R&&!w&&this.listens(l,!0)&&(d=[this]),d},_isClickDisabled:function(a){for(;a&&a!==this._container;){if(a._leaflet_disable_click)return!0;a=a.parentNode}},_handleDOMEvent:function(a){var l=a.target||a.srcElement;if(!(!this._loaded||l._leaflet_disable_events||a.type==="click"&&this._isClickDisabled(l))){var d=a.type;d==="mousedown"&&Za(l),this._fireDOMEvent(a,d)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(a,l,d){if(a.type==="click"){var v=u({},a);v.type="preclick",this._fireDOMEvent(v,v.type,d)}var w=this._findEventTargets(a,l);if(d){for(var C=[],R=0;R<d.length;R++)d[R].listens(l,!0)&&C.push(d[R]);w=C.concat(w)}if(w.length){l==="contextmenu"&&xt(a);var F=w[0],q={originalEvent:a};if(a.type!=="keypress"&&a.type!=="keydown"&&a.type!=="keyup"){var te=F.getLatLng&&(!F._radius||F._radius<=10);q.containerPoint=te?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(a),q.layerPoint=this.containerPointToLayerPoint(q.containerPoint),q.latlng=te?F.getLatLng():this.layerPointToLatLng(q.layerPoint)}for(R=0;R<w.length;R++)if(w[R].fire(l,q,!0),q.originalEvent._stopped||w[R].options.bubblingMouseEvents===!1&&ue(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(a){return a=a.dragging&&a.dragging.enabled()?a:this,a.dragging&&a.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var a=0,l=this._handlers.length;a<l;a++)this._handlers[a].disable()},whenReady:function(a,l){return this._loaded?a.call(l||this,{target:this}):this.on("load",a,l),this},_getMapPanePos:function(){return ji(this._mapPane)||new re(0,0)},_moved:function(){var a=this._getMapPanePos();return a&&!a.equals([0,0])},_getTopLeftPoint:function(a,l){var d=a&&l!==void 0?this._getNewPixelOrigin(a,l):this.getPixelOrigin();return d.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(a,l){var d=this.getSize()._divideBy(2);return this.project(a,l)._subtract(d)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(a,l,d){var v=this._getNewPixelOrigin(d,l);return this.project(a,l)._subtract(v)},_latLngBoundsToNewLayerBounds:function(a,l,d){var v=this._getNewPixelOrigin(d,l);return Y([this.project(a.getSouthWest(),l)._subtract(v),this.project(a.getNorthWest(),l)._subtract(v),this.project(a.getSouthEast(),l)._subtract(v),this.project(a.getNorthEast(),l)._subtract(v)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(a){return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())},_limitCenter:function(a,l,d){if(!d)return a;var v=this.project(a,l),w=this.getSize().divideBy(2),C=new O(v.subtract(w),v.add(w)),R=this._getBoundsOffset(C,d,l);return Math.abs(R.x)<=1&&Math.abs(R.y)<=1?a:this.unproject(v.add(R),l)},_limitOffset:function(a,l){if(!l)return a;var d=this.getPixelBounds(),v=new O(d.min.add(a),d.max.add(a));return a.add(this._getBoundsOffset(v,l))},_getBoundsOffset:function(a,l,d){var v=Y(this.project(l.getNorthEast(),d),this.project(l.getSouthWest(),d)),w=v.min.subtract(a.min),C=v.max.subtract(a.max),R=this._rebound(w.x,-C.x),F=this._rebound(w.y,-C.y);return new re(R,F)},_rebound:function(a,l){return a+l>0?Math.round(a-l)/2:Math.max(0,Math.ceil(a))-Math.max(0,Math.floor(l))},_limitZoom:function(a){var l=this.getMinZoom(),d=this.getMaxZoom(),v=xe.any3d?this.options.zoomSnap:1;return v&&(a=Math.round(a/v)*v),Math.max(l,Math.min(d,a))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){vt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(a,l){var d=this._getCenterOffset(a)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(d)?!1:(this.panBy(d,l),!0)},_createAnimProxy:function(){var a=this._proxy=He("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(a),this.on("zoomanim",function(l){var d=ki,v=this._proxy.style[d];ii(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),v===this._proxy.style[d]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ot(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var a=this.getCenter(),l=this.getZoom();ii(this._proxy,this.project(a,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(a){this._animatingZoom&&a.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(a,l,d){if(this._animatingZoom)return!0;if(d=d||{},!this._zoomAnimated||d.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var v=this.getZoomScale(l),w=this._getCenterOffset(a)._divideBy(1-1/v);return d.animate!==!0&&!this.getSize().contains(w)?!1:(ve(function(){this._moveStart(!0,d.noMoveStart||!1)._animateZoom(a,l,!0)},this),!0)},_animateZoom:function(a,l,d,v){this._mapPane&&(d&&(this._animatingZoom=!0,this._animateToCenter=a,this._animateToZoom=l,Ie(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:a,zoom:l,noUpdate:v}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&vt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function _l(a,l){return new qe(a,l)}var ln=ae.extend({options:{position:"topright"},initialize:function(a){P(this,a)},getPosition:function(){return this.options.position},setPosition:function(a){var l=this._map;return l&&l.removeControl(this),this.options.position=a,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(a){this.remove(),this._map=a;var l=this._container=this.onAdd(a),d=this.getPosition(),v=a._controlCorners[d];return Ie(l,"leaflet-control"),d.indexOf("bottom")!==-1?v.insertBefore(l,v.firstChild):v.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ot(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(a){this._map&&a&&a.screenX>0&&a.screenY>0&&this._map.getContainer().focus()}}),ri=function(a){return new ln(a)};qe.include({addControl:function(a){return a.addTo(this),this},removeControl:function(a){return a.remove(),this},_initControlPos:function(){var a=this._controlCorners={},l="leaflet-",d=this._controlContainer=He("div",l+"control-container",this._container);function v(w,C){var R=l+w+" "+l+C;a[w+C]=He("div",R,d)}v("top","left"),v("top","right"),v("bottom","left"),v("bottom","right")},_clearControlPos:function(){for(var a in this._controlCorners)ot(this._controlCorners[a]);ot(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var no=ln.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(a,l,d,v){return d<v?-1:v<d?1:0}},initialize:function(a,l,d){P(this,d),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var v in a)this._addLayer(a[v],v);for(v in l)this._addLayer(l[v],v,!0)},onAdd:function(a){this._initLayout(),this._update(),this._map=a,a.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(a){return ln.prototype.addTo.call(this,a),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(a,l){return this._addLayer(a,l),this._map?this._update():this},addOverlay:function(a,l){return this._addLayer(a,l,!0),this._map?this._update():this},removeLayer:function(a){a.off("add remove",this._onLayerChange,this);var l=this._getLayer(y(a));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){Ie(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var a=this._map.getSize().y-(this._container.offsetTop+50);return a<this._section.clientHeight?(Ie(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=a+"px"):vt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return vt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var a="leaflet-control-layers",l=this._container=He("div",a),d=this.options.collapsed;l.setAttribute("aria-haspopup",!0),na(l),Un(l);var v=this._section=He("section",a+"-list");d&&(this._map.on("click",this.collapse,this),Re(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var w=this._layersLink=He("a",a+"-toggle",l);w.href="#",w.title="Layers",w.setAttribute("role","button"),Re(w,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){xt(C),this._expandSafely()}},this),d||this.expand(),this._baseLayersList=He("div",a+"-base",v),this._separator=He("div",a+"-separator",v),this._overlaysList=He("div",a+"-overlays",v),l.appendChild(v)},_getLayer:function(a){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&y(this._layers[l].layer)===a)return this._layers[l]},_addLayer:function(a,l,d){this._map&&a.on("add remove",this._onLayerChange,this),this._layers.push({layer:a,name:l,overlay:d}),this.options.sortLayers&&this._layers.sort(p(function(v,w){return this.options.sortFunction(v.layer,w.layer,v.name,w.name)},this)),this.options.autoZIndex&&a.setZIndex&&(this._lastZIndex++,a.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;mn(this._baseLayersList),mn(this._overlaysList),this._layerControlInputs=[];var a,l,d,v,w=0;for(d=0;d<this._layers.length;d++)v=this._layers[d],this._addItem(v),l=l||v.overlay,a=a||!v.overlay,w+=v.overlay?0:1;return this.options.hideSingleBase&&(a=a&&w>1,this._baseLayersList.style.display=a?"":"none"),this._separator.style.display=l&&a?"":"none",this},_onLayerChange:function(a){this._handlingClick||this._update();var l=this._getLayer(y(a.target)),d=l.overlay?a.type==="add"?"overlayadd":"overlayremove":a.type==="add"?"baselayerchange":null;d&&this._map.fire(d,l)},_createRadioElement:function(a,l){var d='<input type="radio" class="leaflet-control-layers-selector" name="'+a+'"'+(l?' checked="checked"':"")+"/>",v=document.createElement("div");return v.innerHTML=d,v.firstChild},_addItem:function(a){var l=document.createElement("label"),d=this._map.hasLayer(a.layer),v;a.overlay?(v=document.createElement("input"),v.type="checkbox",v.className="leaflet-control-layers-selector",v.defaultChecked=d):v=this._createRadioElement("leaflet-base-layers_"+y(this),d),this._layerControlInputs.push(v),v.layerId=y(a.layer),Re(v,"click",this._onInputClick,this);var w=document.createElement("span");w.innerHTML=" "+a.name;var C=document.createElement("span");l.appendChild(C),C.appendChild(v),C.appendChild(w);var R=a.overlay?this._overlaysList:this._baseLayersList;return R.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){if(!this._preventClick){var a=this._layerControlInputs,l,d,v=[],w=[];this._handlingClick=!0;for(var C=a.length-1;C>=0;C--)l=a[C],d=this._getLayer(l.layerId).layer,l.checked?v.push(d):l.checked||w.push(d);for(C=0;C<w.length;C++)this._map.hasLayer(w[C])&&this._map.removeLayer(w[C]);for(C=0;C<v.length;C++)this._map.hasLayer(v[C])||this._map.addLayer(v[C]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var a=this._layerControlInputs,l,d,v=this._map.getZoom(),w=a.length-1;w>=0;w--)l=a[w],d=this._getLayer(l.layerId).layer,l.disabled=d.options.minZoom!==void 0&&v<d.options.minZoom||d.options.maxZoom!==void 0&&v>d.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var a=this._section;this._preventClick=!0,Re(a,"click",xt),this.expand();var l=this;setTimeout(function(){it(a,"click",xt),l._preventClick=!1})}}),Tu=function(a,l,d){return new no(a,l,d)},xl=ln.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(a){var l="leaflet-control-zoom",d=He("div",l+" leaflet-bar"),v=this.options;return this._zoomInButton=this._createButton(v.zoomInText,v.zoomInTitle,l+"-in",d,this._zoomIn),this._zoomOutButton=this._createButton(v.zoomOutText,v.zoomOutTitle,l+"-out",d,this._zoomOut),this._updateDisabled(),a.on("zoomend zoomlevelschange",this._updateDisabled,this),d},onRemove:function(a){a.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(a){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(a.shiftKey?3:1))},_zoomOut:function(a){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(a.shiftKey?3:1))},_createButton:function(a,l,d,v,w){var C=He("a",d,v);return C.innerHTML=a,C.href="#",C.title=l,C.setAttribute("role","button"),C.setAttribute("aria-label",l),na(C),Re(C,"click",Oi),Re(C,"click",w,this),Re(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var a=this._map,l="leaflet-disabled";vt(this._zoomInButton,l),vt(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||a._zoom===a.getMinZoom())&&(Ie(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||a._zoom===a.getMaxZoom())&&(Ie(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});qe.mergeOptions({zoomControl:!0}),qe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new xl,this.addControl(this.zoomControl))});var ch=function(a){return new xl(a)},Cu=ln.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(a){var l="leaflet-control-scale",d=He("div",l),v=this.options;return this._addScales(v,l+"-line",d),a.on(v.updateWhenIdle?"moveend":"move",this._update,this),a.whenReady(this._update,this),d},onRemove:function(a){a.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(a,l,d){a.metric&&(this._mScale=He("div",l,d)),a.imperial&&(this._iScale=He("div",l,d))},_update:function(){var a=this._map,l=a.getSize().y/2,d=a.distance(a.containerPointToLatLng([0,l]),a.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(d)},_updateScales:function(a){this.options.metric&&a&&this._updateMetric(a),this.options.imperial&&a&&this._updateImperial(a)},_updateMetric:function(a){var l=this._getRoundNum(a),d=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,d,l/a)},_updateImperial:function(a){var l=a*3.2808399,d,v,w;l>5280?(d=l/5280,v=this._getRoundNum(d),this._updateScale(this._iScale,v+" mi",v/d)):(w=this._getRoundNum(l),this._updateScale(this._iScale,w+" ft",w/l))},_updateScale:function(a,l,d){a.style.width=Math.round(this.options.maxWidth*d)+"px",a.innerHTML=l},_getRoundNum:function(a){var l=Math.pow(10,(Math.floor(a)+"").length-1),d=a/l;return d=d>=10?10:d>=5?5:d>=3?3:d>=2?2:1,l*d}}),wl=function(a){return new Cu(a)},uh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Sl=ln.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(xe.inlineSvg?uh+" ":"")+"Leaflet</a>"},initialize:function(a){P(this,a),this._attributions={}},onAdd:function(a){a.attributionControl=this,this._container=He("div","leaflet-control-attribution"),na(this._container);for(var l in a._layers)a._layers[l].getAttribution&&this.addAttribution(a._layers[l].getAttribution());return this._update(),a.on("layeradd",this._addAttribution,this),this._container},onRemove:function(a){a.off("layeradd",this._addAttribution,this)},_addAttribution:function(a){a.layer.getAttribution&&(this.addAttribution(a.layer.getAttribution()),a.layer.once("remove",function(){this.removeAttribution(a.layer.getAttribution())},this))},setPrefix:function(a){return this.options.prefix=a,this._update(),this},addAttribution:function(a){return a?(this._attributions[a]||(this._attributions[a]=0),this._attributions[a]++,this._update(),this):this},removeAttribution:function(a){return a?(this._attributions[a]&&(this._attributions[a]--,this._update()),this):this},_update:function(){if(this._map){var a=[];for(var l in this._attributions)this._attributions[l]&&a.push(l);var d=[];this.options.prefix&&d.push(this.options.prefix),a.length&&d.push(a.join(", ")),this._container.innerHTML=d.join(' <span aria-hidden="true">|</span> ')}}});qe.mergeOptions({attributionControl:!0}),qe.addInitHook(function(){this.options.attributionControl&&new Sl().addTo(this)});var dh=function(a){return new Sl(a)};ln.Layers=no,ln.Zoom=xl,ln.Scale=Cu,ln.Attribution=Sl,ri.layers=Tu,ri.zoom=ch,ri.scale=wl,ri.attribution=dh;var Fn=ae.extend({initialize:function(a){this._map=a},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Fn.addTo=function(a,l){return a.addHandler(l,this),this};var fh={Events:D},El=xe.touch?"touchstart mousedown":"mousedown",zi=le.extend({options:{clickTolerance:3},initialize:function(a,l,d,v){P(this,v),this._element=a,this._dragStartTarget=l||a,this._preventOutline=d},enable:function(){this._enabled||(Re(this._dragStartTarget,El,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(zi._dragging===this&&this.finishDrag(!0),it(this._dragStartTarget,El,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(a){if(this._enabled&&(this._moved=!1,!pl(this._element,"leaflet-zoom-anim"))){if(a.touches&&a.touches.length!==1){zi._dragging===this&&this.finishDrag();return}if(!(zi._dragging||a.shiftKey||a.which!==1&&a.button!==1&&!a.touches)&&(zi._dragging=this,this._preventOutline&&Za(this._element),Vo(),$a(),!this._moving)){this.fire("down");var l=a.touches?a.touches[0]:a,d=qo(this._element);this._startPoint=new re(l.clientX,l.clientY),this._startPos=ji(this._element),this._parentScale=Jr(d);var v=a.type==="mousedown";Re(document,v?"mousemove":"touchmove",this._onMove,this),Re(document,v?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(a){if(this._enabled){if(a.touches&&a.touches.length>1){this._moved=!0;return}var l=a.touches&&a.touches.length===1?a.touches[0]:a,d=new re(l.clientX,l.clientY)._subtract(this._startPoint);!d.x&&!d.y||Math.abs(d.x)+Math.abs(d.y)<this.options.clickTolerance||(d.x/=this._parentScale.x,d.y/=this._parentScale.y,xt(a),this._moved||(this.fire("dragstart"),this._moved=!0,Ie(document.body,"leaflet-dragging"),this._lastTarget=a.target||a.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ie(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(d),this._moving=!0,this._lastEvent=a,this._updatePosition())}},_updatePosition:function(){var a={originalEvent:this._lastEvent};this.fire("predrag",a),ut(this._element,this._newPos),this.fire("drag",a)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(a){vt(document.body,"leaflet-dragging"),this._lastTarget&&(vt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),it(document,"mousemove touchmove",this._onMove,this),it(document,"mouseup touchend touchcancel",this._onUp,this),Xr(),Bn();var l=this._moved&&this._moving;this._moving=!1,zi._dragging=!1,l&&this.fire("dragend",{noInertia:a,distance:this._newPos.distanceTo(this._startPos)})}});function Au(a,l,d){var v,w=[1,4,2,8],C,R,F,q,te,me,Se,De;for(C=0,me=a.length;C<me;C++)a[C]._code=ia(a[C],l);for(F=0;F<4;F++){for(Se=w[F],v=[],C=0,me=a.length,R=me-1;C<me;R=C++)q=a[C],te=a[R],q._code&Se?te._code&Se||(De=Yo(te,q,Se,l,d),De._code=ia(De,l),v.push(De)):(te._code&Se&&(De=Yo(te,q,Se,l,d),De._code=ia(De,l),v.push(De)),v.push(q));a=v}return a}function ku(a,l){var d,v,w,C,R,F,q,te,me;if(!a||a.length===0)throw new Error("latlngs not passed");gn(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var Se=pe([0,0]),De=oe(a),Dt=De.getNorthWest().distanceTo(De.getSouthWest())*De.getNorthEast().distanceTo(De.getNorthWest());Dt<1700&&(Se=Tl(a));var wt=a.length,cn=[];for(d=0;d<wt;d++){var Ke=pe(a[d]);cn.push(l.project(pe([Ke.lat-Se.lat,Ke.lng-Se.lng])))}for(F=q=te=0,d=0,v=wt-1;d<wt;v=d++)w=cn[d],C=cn[v],R=w.y*C.x-C.y*w.x,q+=(w.x+C.x)*R,te+=(w.y+C.y)*R,F+=R*3;F===0?me=cn[0]:me=[q/F,te/F];var We=l.unproject(ce(me));return pe([We.lat+Se.lat,We.lng+Se.lng])}function Tl(a){for(var l=0,d=0,v=0,w=0;w<a.length;w++){var C=pe(a[w]);l+=C.lat,d+=C.lng,v++}return pe([l/v,d/v])}var Cl={__proto__:null,clipPolygon:Au,polygonCenter:ku,centroid:Tl};function ju(a,l){if(!l||!a.length)return a.slice();var d=l*l;return a=mh(a,d),a=zu(a,d),a}function Ou(a,l,d){return Math.sqrt(io(a,l,d,!0))}function hh(a,l,d){return io(a,l,d)}function zu(a,l){var d=a.length,v=typeof Uint8Array<"u"?Uint8Array:Array,w=new v(d);w[0]=w[d-1]=1,Al(a,w,l,0,d-1);var C,R=[];for(C=0;C<d;C++)w[C]&&R.push(a[C]);return R}function Al(a,l,d,v,w){var C=0,R,F,q;for(F=v+1;F<=w-1;F++)q=io(a[F],a[v],a[w],!0),q>C&&(R=F,C=q);C>d&&(l[R]=1,Al(a,l,d,v,R),Al(a,l,d,R,w))}function mh(a,l){for(var d=[a[0]],v=1,w=0,C=a.length;v<C;v++)ph(a[v],a[w])>l&&(d.push(a[v]),w=v);return w<C-1&&d.push(a[C-1]),d}var Lu;function Ru(a,l,d,v,w){var C=v?Lu:ia(a,d),R=ia(l,d),F,q,te;for(Lu=R;;){if(!(C|R))return[a,l];if(C&R)return!1;F=C||R,q=Yo(a,l,F,d,w),te=ia(q,d),F===C?(a=q,C=te):(l=q,R=te)}}function Yo(a,l,d,v,w){var C=l.x-a.x,R=l.y-a.y,F=v.min,q=v.max,te,me;return d&8?(te=a.x+C*(q.y-a.y)/R,me=q.y):d&4?(te=a.x+C*(F.y-a.y)/R,me=F.y):d&2?(te=q.x,me=a.y+R*(q.x-a.x)/C):d&1&&(te=F.x,me=a.y+R*(F.x-a.x)/C),new re(te,me,w)}function ia(a,l){var d=0;return a.x<l.min.x?d|=1:a.x>l.max.x&&(d|=2),a.y<l.min.y?d|=4:a.y>l.max.y&&(d|=8),d}function ph(a,l){var d=l.x-a.x,v=l.y-a.y;return d*d+v*v}function io(a,l,d,v){var w=l.x,C=l.y,R=d.x-w,F=d.y-C,q=R*R+F*F,te;return q>0&&(te=((a.x-w)*R+(a.y-C)*F)/q,te>1?(w=d.x,C=d.y):te>0&&(w+=R*te,C+=F*te)),R=a.x-w,F=a.y-C,v?R*R+F*F:new re(w,C)}function gn(a){return!W(a[0])||typeof a[0][0]!="object"&&typeof a[0][0]<"u"}function Ko(a){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),gn(a)}function Ya(a,l){var d,v,w,C,R,F,q,te;if(!a||a.length===0)throw new Error("latlngs not passed");gn(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var me=pe([0,0]),Se=oe(a),De=Se.getNorthWest().distanceTo(Se.getSouthWest())*Se.getNorthEast().distanceTo(Se.getNorthWest());De<1700&&(me=Tl(a));var Dt=a.length,wt=[];for(d=0;d<Dt;d++){var cn=pe(a[d]);wt.push(l.project(pe([cn.lat-me.lat,cn.lng-me.lng])))}for(d=0,v=0;d<Dt-1;d++)v+=wt[d].distanceTo(wt[d+1])/2;if(v===0)te=wt[0];else for(d=0,C=0;d<Dt-1;d++)if(R=wt[d],F=wt[d+1],w=R.distanceTo(F),C+=w,C>v){q=(C-v)/w,te=[F.x-q*(F.x-R.x),F.y-q*(F.y-R.y)];break}var Ke=l.unproject(ce(te));return pe([Ke.lat+me.lat,Ke.lng+me.lng])}var gh={__proto__:null,simplify:ju,pointToSegmentDistance:Ou,closestPointOnSegment:hh,clipSegment:Ru,_getEdgeIntersection:Yo,_getBitCode:ia,_sqClosestPointOnSegment:io,isFlat:gn,_flat:Ko,polylineCenter:Ya},Wo={project:function(a){return new re(a.lng,a.lat)},unproject:function(a){return new fe(a.y,a.x)},bounds:new O([-180,-90],[180,90])},Xo={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(a){var l=Math.PI/180,d=this.R,v=a.lat*l,w=this.R_MINOR/d,C=Math.sqrt(1-w*w),R=C*Math.sin(v),F=Math.tan(Math.PI/4-v/2)/Math.pow((1-R)/(1+R),C/2);return v=-d*Math.log(Math.max(F,1e-10)),new re(a.lng*l*d,v)},unproject:function(a){for(var l=180/Math.PI,d=this.R,v=this.R_MINOR/d,w=Math.sqrt(1-v*v),C=Math.exp(-a.y/d),R=Math.PI/2-2*Math.atan(C),F=0,q=.1,te;F<15&&Math.abs(q)>1e-7;F++)te=w*Math.sin(R),te=Math.pow((1-te)/(1+te),w/2),q=Math.PI/2-2*Math.atan(C*te)-R,R+=q;return new fe(R*l,a.x*l/d)}},Mu={__proto__:null,LonLat:Wo,Mercator:Xo,SphericalMercator:kt},Iu=u({},nt,{code:"EPSG:3395",projection:Xo,transformation:(function(){var a=.5/(Math.PI*Xo.R);return we(a,.5,-a,.5)})()}),kl=u({},nt,{code:"EPSG:4326",projection:Wo,transformation:we(1/180,1,-1/180,.5)}),Ka=u({},Le,{projection:Wo,transformation:we(1,0,-1,0),scale:function(a){return Math.pow(2,a)},zoom:function(a){return Math.log(a)/Math.LN2},distance:function(a,l){var d=l.lng-a.lng,v=l.lat-a.lat;return Math.sqrt(d*d+v*v)},infinite:!0});Le.Earth=nt,Le.EPSG3395=Iu,Le.EPSG3857=Tt,Le.EPSG900913=Dn,Le.EPSG4326=kl,Le.Simple=Ka;var jn=le.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(a){return a.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(a){return a&&a.removeLayer(this),this},getPane:function(a){return this._map.getPane(a?this.options[a]||a:this.options.pane)},addInteractiveTarget:function(a){return this._map._targets[y(a)]=this,this},removeInteractiveTarget:function(a){return delete this._map._targets[y(a)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(a){var l=a.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var d=this.getEvents();l.on(d,this),this.once("remove",function(){l.off(d,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});qe.include({addLayer:function(a){if(!a._layerAdd)throw new Error("The provided object is not a Layer.");var l=y(a);return this._layers[l]?this:(this._layers[l]=a,a._mapToAdd=this,a.beforeAdd&&a.beforeAdd(this),this.whenReady(a._layerAdd,a),this)},removeLayer:function(a){var l=y(a);return this._layers[l]?(this._loaded&&a.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:a}),a.fire("remove")),a._map=a._mapToAdd=null,this):this},hasLayer:function(a){return y(a)in this._layers},eachLayer:function(a,l){for(var d in this._layers)a.call(l,this._layers[d]);return this},_addLayers:function(a){a=a?W(a)?a:[a]:[];for(var l=0,d=a.length;l<d;l++)this.addLayer(a[l])},_addZoomLimit:function(a){(!isNaN(a.options.maxZoom)||!isNaN(a.options.minZoom))&&(this._zoomBoundLayers[y(a)]=a,this._updateZoomLevels())},_removeZoomLimit:function(a){var l=y(a);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var a=1/0,l=-1/0,d=this._getZoomSpan();for(var v in this._zoomBoundLayers){var w=this._zoomBoundLayers[v].options;a=w.minZoom===void 0?a:Math.min(a,w.minZoom),l=w.maxZoom===void 0?l:Math.max(l,w.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=a===1/0?void 0:a,d!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wa=jn.extend({initialize:function(a,l){P(this,l),this._layers={};var d,v;if(a)for(d=0,v=a.length;d<v;d++)this.addLayer(a[d])},addLayer:function(a){var l=this.getLayerId(a);return this._layers[l]=a,this._map&&this._map.addLayer(a),this},removeLayer:function(a){var l=a in this._layers?a:this.getLayerId(a);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(a){var l=typeof a=="number"?a:this.getLayerId(a);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(a){var l=Array.prototype.slice.call(arguments,1),d,v;for(d in this._layers)v=this._layers[d],v[a]&&v[a].apply(v,l);return this},onAdd:function(a){this.eachLayer(a.addLayer,a)},onRemove:function(a){this.eachLayer(a.removeLayer,a)},eachLayer:function(a,l){for(var d in this._layers)a.call(l,this._layers[d]);return this},getLayer:function(a){return this._layers[a]},getLayers:function(){var a=[];return this.eachLayer(a.push,a),a},setZIndex:function(a){return this.invoke("setZIndex",a)},getLayerId:function(a){return y(a)}}),vh=function(a,l){return new Wa(a,l)},Hn=Wa.extend({addLayer:function(a){return this.hasLayer(a)?this:(a.addEventParent(this),Wa.prototype.addLayer.call(this,a),this.fire("layeradd",{layer:a}))},removeLayer:function(a){return this.hasLayer(a)?(a in this._layers&&(a=this._layers[a]),a.removeEventParent(this),Wa.prototype.removeLayer.call(this,a),this.fire("layerremove",{layer:a})):this},setStyle:function(a){return this.invoke("setStyle",a)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var a=new ie;for(var l in this._layers){var d=this._layers[l];a.extend(d.getBounds?d.getBounds():d.getLatLng())}return a}}),Pu=function(a,l){return new Hn(a,l)},$n=ae.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(a){P(this,a)},createIcon:function(a){return this._createIcon("icon",a)},createShadow:function(a){return this._createIcon("shadow",a)},_createIcon:function(a,l){var d=this._getIconUrl(a);if(!d){if(a==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var v=this._createImg(d,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(v,a),(this.options.crossOrigin||this.options.crossOrigin==="")&&(v.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),v},_setIconStyles:function(a,l){var d=this.options,v=d[l+"Size"];typeof v=="number"&&(v=[v,v]);var w=ce(v),C=ce(l==="shadow"&&d.shadowAnchor||d.iconAnchor||w&&w.divideBy(2,!0));a.className="leaflet-marker-"+l+" "+(d.className||""),C&&(a.style.marginLeft=-C.x+"px",a.style.marginTop=-C.y+"px"),w&&(a.style.width=w.x+"px",a.style.height=w.y+"px")},_createImg:function(a,l){return l=l||document.createElement("img"),l.src=a,l},_getIconUrl:function(a){return xe.retina&&this.options[a+"RetinaUrl"]||this.options[a+"Url"]}});function ao(a){return new $n(a)}var ro=$n.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(a){return typeof ro.imagePath!="string"&&(ro.imagePath=this._detectIconPath()),(this.options.imagePath||ro.imagePath)+$n.prototype._getIconUrl.call(this,a)},_stripUrl:function(a){var l=function(d,v,w){var C=v.exec(d);return C&&C[w]};return a=l(a,/^url\((['"])?(.+)\1\)$/,2),a&&l(a,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var a=He("div","leaflet-default-icon-path",document.body),l=Kr(a,"background-image")||Kr(a,"backgroundImage");if(document.body.removeChild(a),l=this._stripUrl(l),l)return l;var d=document.querySelector('link[href$="leaflet.css"]');return d?d.href.substring(0,d.href.length-11-1):""}}),oo=Fn.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new zi(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ie(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&vt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(a){var l=this._marker,d=l._map,v=this._marker.options.autoPanSpeed,w=this._marker.options.autoPanPadding,C=ji(l._icon),R=d.getPixelBounds(),F=d.getPixelOrigin(),q=Y(R.min._subtract(F).add(w),R.max._subtract(F).subtract(w));if(!q.contains(C)){var te=ce((Math.max(q.max.x,C.x)-q.max.x)/(R.max.x-q.max.x)-(Math.min(q.min.x,C.x)-q.min.x)/(R.min.x-q.min.x),(Math.max(q.max.y,C.y)-q.max.y)/(R.max.y-q.max.y)-(Math.min(q.min.y,C.y)-q.min.y)/(R.min.y-q.min.y)).multiplyBy(v);d.panBy(te,{animate:!1}),this._draggable._newPos._add(te),this._draggable._startPos._add(te),ut(l._icon,this._draggable._newPos),this._onDrag(a),this._panRequest=ve(this._adjustPan.bind(this,a))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(a){this._marker.options.autoPan&&(ke(this._panRequest),this._panRequest=ve(this._adjustPan.bind(this,a)))},_onDrag:function(a){var l=this._marker,d=l._shadow,v=ji(l._icon),w=l._map.layerPointToLatLng(v);d&&ut(d,v),l._latlng=w,a.latlng=w,a.oldLatLng=this._oldLatLng,l.fire("move",a).fire("drag",a)},_onDragEnd:function(a){ke(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}}),so=jn.extend({options:{icon:new ro,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(a,l){P(this,l),this._latlng=pe(a)},onAdd:function(a){this._zoomAnimated=this._zoomAnimated&&a.options.markerZoomAnimation,this._zoomAnimated&&a.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(a){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&a.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(a){var l=this._latlng;return this._latlng=pe(a),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(a){return this.options.zIndexOffset=a,this.update()},getIcon:function(){return this.options.icon},setIcon:function(a){return this.options.icon=a,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var a=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(a)}return this},_initIcon:function(){var a=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),d=a.icon.createIcon(this._icon),v=!1;d!==this._icon&&(this._icon&&this._removeIcon(),v=!0,a.title&&(d.title=a.title),d.tagName==="IMG"&&(d.alt=a.alt||"")),Ie(d,l),a.keyboard&&(d.tabIndex="0",d.setAttribute("role","button")),this._icon=d,a.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Re(d,"focus",this._panOnFocus,this);var w=a.icon.createShadow(this._shadow),C=!1;w!==this._shadow&&(this._removeShadow(),C=!0),w&&(Ie(w,l),w.alt=""),this._shadow=w,a.opacity<1&&this._updateOpacity(),v&&this.getPane().appendChild(this._icon),this._initInteraction(),w&&C&&this.getPane(a.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&it(this._icon,"focus",this._panOnFocus,this),ot(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ot(this._shadow),this._shadow=null},_setPos:function(a){this._icon&&ut(this._icon,a),this._shadow&&ut(this._shadow,a),this._zIndex=a.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(a){this._icon&&(this._icon.style.zIndex=this._zIndex+a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&(Ie(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),oo)){var a=this.options.draggable;this.dragging&&(a=this.dragging.enabled(),this.dragging.disable()),this.dragging=new oo(this),a&&this.dragging.enable()}},setOpacity:function(a){return this.options.opacity=a,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var a=this.options.opacity;this._icon&&ht(this._icon,a),this._shadow&&ht(this._shadow,a)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var a=this._map;if(a){var l=this.options.icon.options,d=l.iconSize?ce(l.iconSize):ce(0,0),v=l.iconAnchor?ce(l.iconAnchor):ce(0,0);a.panInside(this._latlng,{paddingTopLeft:v,paddingBottomRight:d.subtract(v)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Nu(a,l){return new so(a,l)}var Vn=jn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(a){this._renderer=a.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(a){return P(this,a),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&a&&Object.prototype.hasOwnProperty.call(a,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Xa=Vn.extend({options:{fill:!0,radius:10},initialize:function(a,l){P(this,l),this._latlng=pe(a),this._radius=this.options.radius},setLatLng:function(a){var l=this._latlng;return this._latlng=pe(a),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(a){return this.options.radius=this._radius=a,this.redraw()},getRadius:function(){return this._radius},setStyle:function(a){var l=a&&a.radius||this._radius;return Vn.prototype.setStyle.call(this,a),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var a=this._radius,l=this._radiusY||a,d=this._clickTolerance(),v=[a+d,l+d];this._pxBounds=new O(this._point.subtract(v),this._point.add(v))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(a){return a.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Du(a,l){return new Xa(a,l)}var Jo=Xa.extend({initialize:function(a,l,d){if(typeof l=="number"&&(l=u({},d,{radius:l})),P(this,l),this._latlng=pe(a),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(a){return this._mRadius=a,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var a=[this._radius,this._radiusY||this._radius];return new ie(this._map.layerPointToLatLng(this._point.subtract(a)),this._map.layerPointToLatLng(this._point.add(a)))},setStyle:Vn.prototype.setStyle,_project:function(){var a=this._latlng.lng,l=this._latlng.lat,d=this._map,v=d.options.crs;if(v.distance===nt.distance){var w=Math.PI/180,C=this._mRadius/nt.R/w,R=d.project([l+C,a]),F=d.project([l-C,a]),q=R.add(F).divideBy(2),te=d.unproject(q).lat,me=Math.acos((Math.cos(C*w)-Math.sin(l*w)*Math.sin(te*w))/(Math.cos(l*w)*Math.cos(te*w)))/w;(isNaN(me)||me===0)&&(me=C/Math.cos(Math.PI/180*l)),this._point=q.subtract(d.getPixelOrigin()),this._radius=isNaN(me)?0:q.x-d.project([te,a-me]).x,this._radiusY=q.y-R.y}else{var Se=v.unproject(v.project(this._latlng).subtract([this._mRadius,0]));this._point=d.latLngToLayerPoint(this._latlng),this._radius=this._point.x-d.latLngToLayerPoint(Se).x}this._updateBounds()}});function Bu(a,l,d){return new Jo(a,l,d)}var oi=Vn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(a,l){P(this,l),this._setLatLngs(a)},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){return this._setLatLngs(a),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(a){for(var l=1/0,d=null,v=io,w,C,R=0,F=this._parts.length;R<F;R++)for(var q=this._parts[R],te=1,me=q.length;te<me;te++){w=q[te-1],C=q[te];var Se=v(a,w,C,!0);Se<l&&(l=Se,d=v(a,w,C))}return d&&(d.distance=Math.sqrt(l)),d},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ya(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(a,l){return l=l||this._defaultShape(),a=pe(a),l.push(a),this._bounds.extend(a),this.redraw()},_setLatLngs:function(a){this._bounds=new ie,this._latlngs=this._convertLatLngs(a)},_defaultShape:function(){return gn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(a){for(var l=[],d=gn(a),v=0,w=a.length;v<w;v++)d?(l[v]=pe(a[v]),this._bounds.extend(l[v])):l[v]=this._convertLatLngs(a[v]);return l},_project:function(){var a=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,a),this._bounds.isValid()&&a.isValid()&&(this._rawPxBounds=a,this._updateBounds())},_updateBounds:function(){var a=this._clickTolerance(),l=new re(a,a);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(a,l,d){var v=a[0]instanceof fe,w=a.length,C,R;if(v){for(R=[],C=0;C<w;C++)R[C]=this._map.latLngToLayerPoint(a[C]),d.extend(R[C]);l.push(R)}else for(C=0;C<w;C++)this._projectLatlngs(a[C],l,d)},_clipPoints:function(){var a=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,d,v,w,C,R,F,q;for(d=0,w=0,C=this._rings.length;d<C;d++)for(q=this._rings[d],v=0,R=q.length;v<R-1;v++)F=Ru(q[v],q[v+1],a,v,!0),F&&(l[w]=l[w]||[],l[w].push(F[0]),(F[1]!==q[v+1]||v===R-2)&&(l[w].push(F[1]),w++))}},_simplifyPoints:function(){for(var a=this._parts,l=this.options.smoothFactor,d=0,v=a.length;d<v;d++)a[d]=ju(a[d],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(a,l){var d,v,w,C,R,F,q=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(d=0,C=this._parts.length;d<C;d++)for(F=this._parts[d],v=0,R=F.length,w=R-1;v<R;w=v++)if(!(!l&&v===0)&&Ou(a,F[w],F[v])<=q)return!0;return!1}});function yh(a,l){return new oi(a,l)}oi._flat=Ko;var Ja=oi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ku(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(a){var l=oi.prototype._convertLatLngs.call(this,a),d=l.length;return d>=2&&l[0]instanceof fe&&l[0].equals(l[d-1])&&l.pop(),l},_setLatLngs:function(a){oi.prototype._setLatLngs.call(this,a),gn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return gn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var a=this._renderer._bounds,l=this.options.weight,d=new re(l,l);if(a=new O(a.min.subtract(d),a.max.add(d)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}for(var v=0,w=this._rings.length,C;v<w;v++)C=Au(this._rings[v],a,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(a){var l=!1,d,v,w,C,R,F,q,te;if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(C=0,q=this._parts.length;C<q;C++)for(d=this._parts[C],R=0,te=d.length,F=te-1;R<te;F=R++)v=d[R],w=d[F],v.y>a.y!=w.y>a.y&&a.x<(w.x-v.x)*(a.y-v.y)/(w.y-v.y)+v.x&&(l=!l);return l||oi.prototype._containsPoint.call(this,a,!0)}});function bh(a,l){return new Ja(a,l)}var si=Hn.extend({initialize:function(a,l){P(this,l),this._layers={},a&&this.addData(a)},addData:function(a){var l=W(a)?a:a.features,d,v,w;if(l){for(d=0,v=l.length;d<v;d++)w=l[d],(w.geometries||w.geometry||w.features||w.coordinates)&&this.addData(w);return this}var C=this.options;if(C.filter&&!C.filter(a))return this;var R=$t(a,C);return R?(R.feature=ts(a),R.defaultOptions=R.options,this.resetStyle(R),C.onEachFeature&&C.onEachFeature(a,R),this.addLayer(R)):this},resetStyle:function(a){return a===void 0?this.eachLayer(this.resetStyle,this):(a.options=u({},a.defaultOptions),this._setLayerStyle(a,this.options.style),this)},setStyle:function(a){return this.eachLayer(function(l){this._setLayerStyle(l,a)},this)},_setLayerStyle:function(a,l){a.setStyle&&(typeof l=="function"&&(l=l(a.feature)),a.setStyle(l))}});function $t(a,l){var d=a.type==="Feature"?a.geometry:a,v=d?d.coordinates:null,w=[],C=l&&l.pointToLayer,R=l&&l.coordsToLatLng||Qo,F,q,te,me;if(!v&&!d)return null;switch(d.type){case"Point":return F=R(v),Qa(C,a,F,l);case"MultiPoint":for(te=0,me=v.length;te<me;te++)F=R(v[te]),w.push(Qa(C,a,F,l));return new Hn(w);case"LineString":case"MultiLineString":return q=lo(v,d.type==="LineString"?0:1,R),new oi(q,l);case"Polygon":case"MultiPolygon":return q=lo(v,d.type==="Polygon"?1:2,R),new Ja(q,l);case"GeometryCollection":for(te=0,me=d.geometries.length;te<me;te++){var Se=$t({geometry:d.geometries[te],type:"Feature",properties:a.properties},l);Se&&w.push(Se)}return new Hn(w);case"FeatureCollection":for(te=0,me=d.features.length;te<me;te++){var De=$t(d.features[te],l);De&&w.push(De)}return new Hn(w);default:throw new Error("Invalid GeoJSON object.")}}function Qa(a,l,d,v){return a?a(l,d):new so(d,v&&v.markersInheritOptions&&v)}function Qo(a){return new fe(a[1],a[0],a[2])}function lo(a,l,d){for(var v=[],w=0,C=a.length,R;w<C;w++)R=l?lo(a[w],l-1,d):(d||Qo)(a[w]),v.push(R);return v}function es(a,l){return a=pe(a),a.alt!==void 0?[j(a.lng,l),j(a.lat,l),j(a.alt,l)]:[j(a.lng,l),j(a.lat,l)]}function co(a,l,d,v){for(var w=[],C=0,R=a.length;C<R;C++)w.push(l?co(a[C],gn(a[C])?0:l-1,d,v):es(a[C],v));return!l&&d&&w.length>0&&w.push(w[0].slice()),w}function Li(a,l){return a.feature?u({},a.feature,{geometry:l}):ts(l)}function ts(a){return a.type==="Feature"||a.type==="FeatureCollection"?a:{type:"Feature",properties:{},geometry:a}}var Ri={toGeoJSON:function(a){return Li(this,{type:"Point",coordinates:es(this.getLatLng(),a)})}};so.include(Ri),Jo.include(Ri),Xa.include(Ri),oi.include({toGeoJSON:function(a){var l=!gn(this._latlngs),d=co(this._latlngs,l?1:0,!1,a);return Li(this,{type:(l?"Multi":"")+"LineString",coordinates:d})}}),Ja.include({toGeoJSON:function(a){var l=!gn(this._latlngs),d=l&&!gn(this._latlngs[0]),v=co(this._latlngs,d?2:l?1:0,!0,a);return l||(v=[v]),Li(this,{type:(d?"Multi":"")+"Polygon",coordinates:v})}}),Wa.include({toMultiPoint:function(a){var l=[];return this.eachLayer(function(d){l.push(d.toGeoJSON(a).geometry.coordinates)}),Li(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(a){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(a);var d=l==="GeometryCollection",v=[];return this.eachLayer(function(w){if(w.toGeoJSON){var C=w.toGeoJSON(a);if(d)v.push(C.geometry);else{var R=ts(C);R.type==="FeatureCollection"?v.push.apply(v,R.features):v.push(R)}}}),d?Li(this,{geometries:v,type:"GeometryCollection"}):{type:"FeatureCollection",features:v}}});function ns(a,l){return new si(a,l)}var uo=ns,er=jn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(a,l,d){this._url=a,this._bounds=oe(l),P(this,d)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ie(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ot(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(a){return this.options.opacity=a,this._image&&this._updateOpacity(),this},setStyle:function(a){return a.opacity&&this.setOpacity(a.opacity),this},bringToFront:function(){return this._map&&Nt(this._image),this},bringToBack:function(){return this._map&&ea(this._image),this},setUrl:function(a){return this._url=a,this._image&&(this._image.src=a),this},setBounds:function(a){return this._bounds=oe(a),this._map&&this._reset(),this},getEvents:function(){var a={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var a=this._url.tagName==="IMG",l=this._image=a?this._url:He("img");if(Ie(l,"leaflet-image-layer"),this._zoomAnimated&&Ie(l,"leaflet-zoom-animated"),this.options.className&&Ie(l,this.options.className),l.onselectstart=E,l.onmousemove=E,l.onload=p(this.fire,this,"load"),l.onerror=p(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),a){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(a){var l=this._map.getZoomScale(a.zoom),d=this._map._latLngBoundsToNewLayerBounds(this._bounds,a.zoom,a.center).min;ii(this._image,d,l)},_reset:function(){var a=this._image,l=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),d=l.getSize();ut(a,l.min),a.style.width=d.x+"px",a.style.height=d.y+"px"},_updateOpacity:function(){ht(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var a=this.options.errorOverlayUrl;a&&this._url!==a&&(this._url=a,this._image.src=a)},getCenter:function(){return this._bounds.getCenter()}}),Uu=function(a,l,d){return new er(a,l,d)},Mi=er.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var a=this._url.tagName==="VIDEO",l=this._image=a?this._url:He("video");if(Ie(l,"leaflet-image-layer"),this._zoomAnimated&&Ie(l,"leaflet-zoom-animated"),this.options.className&&Ie(l,this.options.className),l.onselectstart=E,l.onmousemove=E,l.onloadeddata=p(this.fire,this,"load"),a){for(var d=l.getElementsByTagName("source"),v=[],w=0;w<d.length;w++)v.push(d[w].src);this._url=d.length>0?v:[l.src];return}W(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var R=He("source");R.src=this._url[C],l.appendChild(R)}}});function tr(a,l,d){return new Mi(a,l,d)}var is=er.extend({_initImage:function(){var a=this._image=this._url;Ie(a,"leaflet-image-layer"),this._zoomAnimated&&Ie(a,"leaflet-zoom-animated"),this.options.className&&Ie(a,this.options.className),a.onselectstart=E,a.onmousemove=E}});function Fu(a,l,d){return new is(a,l,d)}var Vt=jn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(a,l){a&&(a instanceof fe||W(a))?(this._latlng=pe(a),P(this,l)):(P(this,a),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(a){return a=arguments.length?a:this._source._map,a.hasLayer(this)||a.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(a){return this._map?this.close():(arguments.length?this._source=a:a=this._source,this._prepareOpen(),this.openOn(a._map)),this},onAdd:function(a){this._zoomAnimated=a._zoomAnimated,this._container||this._initLayout(),a._fadeAnimated&&ht(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),a._fadeAnimated&&ht(this._container,1),this.bringToFront(),this.options.interactive&&(Ie(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(a){a._fadeAnimated?(ht(this._container,0),this._removeTimeout=setTimeout(p(ot,void 0,this._container),200)):ot(this._container),this.options.interactive&&(vt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(a){return this._latlng=pe(a),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(a){return this._content=a,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var a={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Nt(this._container),this},bringToBack:function(){return this._map&&ea(this._container),this},_prepareOpen:function(a){var l=this._source;if(!l._map)return!1;if(l instanceof Hn){l=null;var d=this._source._layers;for(var v in d)if(d[v]._map){l=d[v];break}if(!l)return!1;this._source=l}if(!a)if(l.getCenter)a=l.getCenter();else if(l.getLatLng)a=l.getLatLng();else if(l.getBounds)a=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(a),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var a=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")a.innerHTML=l;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var a=this._map.latLngToLayerPoint(this._latlng),l=ce(this.options.offset),d=this._getAnchor();this._zoomAnimated?ut(this._container,a.add(d)):l=l.add(a).add(d);var v=this._containerBottom=-l.y,w=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=v+"px",this._container.style.left=w+"px"}},_getAnchor:function(){return[0,0]}});qe.include({_initOverlay:function(a,l,d,v){var w=l;return w instanceof a||(w=new a(v).setContent(l)),d&&w.setLatLng(d),w}}),jn.include({_initOverlay:function(a,l,d,v){var w=d;return w instanceof a?(P(w,v),w._source=this):(w=l&&!v?l:new a(v,this),w.setContent(d)),w}});var fo=Vt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(a){return a=arguments.length?a:this._source._map,!a.hasLayer(this)&&a._popup&&a._popup.options.autoClose&&a.removeLayer(a._popup),a._popup=this,Vt.prototype.openOn.call(this,a)},onAdd:function(a){Vt.prototype.onAdd.call(this,a),a.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Vn||this._source.on("preclick",kn))},onRemove:function(a){Vt.prototype.onRemove.call(this,a),a.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Vn||this._source.off("preclick",kn))},getEvents:function(){var a=Vt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(a.preclick=this.close),this.options.keepInView&&(a.moveend=this._adjustPan),a},_initLayout:function(){var a="leaflet-popup",l=this._container=He("div",a+" "+(this.options.className||"")+" leaflet-zoom-animated"),d=this._wrapper=He("div",a+"-content-wrapper",l);if(this._contentNode=He("div",a+"-content",d),na(l),Un(this._contentNode),Re(l,"contextmenu",kn),this._tipContainer=He("div",a+"-tip-container",l),this._tip=He("div",a+"-tip",this._tipContainer),this.options.closeButton){var v=this._closeButton=He("a",a+"-close-button",l);v.setAttribute("role","button"),v.setAttribute("aria-label","Close popup"),v.href="#close",v.innerHTML='<span aria-hidden="true">&#215;</span>',Re(v,"click",function(w){xt(w),this.close()},this)}},_updateLayout:function(){var a=this._contentNode,l=a.style;l.width="",l.whiteSpace="nowrap";var d=a.offsetWidth;d=Math.min(d,this.options.maxWidth),d=Math.max(d,this.options.minWidth),l.width=d+1+"px",l.whiteSpace="",l.height="";var v=a.offsetHeight,w=this.options.maxHeight,C="leaflet-popup-scrolled";w&&v>w?(l.height=w+"px",Ie(a,C)):vt(a,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center),d=this._getAnchor();ut(this._container,l.add(d))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var a=this._map,l=parseInt(Kr(this._container,"marginBottom"),10)||0,d=this._container.offsetHeight+l,v=this._containerWidth,w=new re(this._containerLeft,-d-this._containerBottom);w._add(ji(this._container));var C=a.layerPointToContainerPoint(w),R=ce(this.options.autoPanPadding),F=ce(this.options.autoPanPaddingTopLeft||R),q=ce(this.options.autoPanPaddingBottomRight||R),te=a.getSize(),me=0,Se=0;C.x+v+q.x>te.x&&(me=C.x+v-te.x+q.x),C.x-me-F.x<0&&(me=C.x-F.x),C.y+d+q.y>te.y&&(Se=C.y+d-te.y+q.y),C.y-Se-F.y<0&&(Se=C.y-F.y),(me||Se)&&(this.options.keepInView&&(this._autopanning=!0),a.fire("autopanstart").panBy([me,Se]))}},_getAnchor:function(){return ce(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Hu=function(a,l){return new fo(a,l)};qe.mergeOptions({closePopupOnClick:!0}),qe.include({openPopup:function(a,l,d){return this._initOverlay(fo,a,l,d).openOn(this),this},closePopup:function(a){return a=arguments.length?a:this._popup,a&&a.close(),this}}),jn.include({bindPopup:function(a,l){return this._popup=this._initOverlay(fo,this._popup,a,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(a){return this._popup&&(this instanceof Hn||(this._popup._source=this),this._popup._prepareOpen(a||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(a){return this._popup&&this._popup.setContent(a),this},getPopup:function(){return this._popup},_openPopup:function(a){if(!(!this._popup||!this._map)){Oi(a);var l=a.layer||a.target;if(this._popup._source===l&&!(l instanceof Vn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(a.latlng);return}this._popup._source=l,this.openPopup(a.latlng)}},_movePopup:function(a){this._popup.setLatLng(a.latlng)},_onKeyPress:function(a){a.originalEvent.keyCode===13&&this._openPopup(a)}});var ho=Vt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(a){Vt.prototype.onAdd.call(this,a),this.setOpacity(this.options.opacity),a.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(a){Vt.prototype.onRemove.call(this,a),a.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var a=Vt.prototype.getEvents.call(this);return this.options.permanent||(a.preclick=this.close),a},_initLayout:function(){var a="leaflet-tooltip",l=a+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=He("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+y(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(a){var l,d,v=this._map,w=this._container,C=v.latLngToContainerPoint(v.getCenter()),R=v.layerPointToContainerPoint(a),F=this.options.direction,q=w.offsetWidth,te=w.offsetHeight,me=ce(this.options.offset),Se=this._getAnchor();F==="top"?(l=q/2,d=te):F==="bottom"?(l=q/2,d=0):F==="center"?(l=q/2,d=te/2):F==="right"?(l=0,d=te/2):F==="left"?(l=q,d=te/2):R.x<C.x?(F="right",l=0,d=te/2):(F="left",l=q+(me.x+Se.x)*2,d=te/2),a=a.subtract(ce(l,d,!0)).add(me).add(Se),vt(w,"leaflet-tooltip-right"),vt(w,"leaflet-tooltip-left"),vt(w,"leaflet-tooltip-top"),vt(w,"leaflet-tooltip-bottom"),Ie(w,"leaflet-tooltip-"+F),ut(w,a)},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._setPosition(a)},setOpacity:function(a){this.options.opacity=a,this._container&&ht(this._container,a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center);this._setPosition(l)},_getAnchor:function(){return ce(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),_h=function(a,l){return new ho(a,l)};qe.include({openTooltip:function(a,l,d){return this._initOverlay(ho,a,l,d).openOn(this),this},closeTooltip:function(a){return a.close(),this}}),jn.include({bindTooltip:function(a,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ho,this._tooltip,a,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(a){if(!(!a&&this._tooltipHandlersAdded)){var l=a?"off":"on",d={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?d.add=this._openTooltip:(d.mouseover=this._openTooltip,d.mouseout=this.closeTooltip,d.click=this._openTooltip,this._map?this._addFocusListeners():d.add=this._addFocusListeners),this._tooltip.options.sticky&&(d.mousemove=this._moveTooltip),this[l](d),this._tooltipHandlersAdded=!a}},openTooltip:function(a){return this._tooltip&&(this instanceof Hn||(this._tooltip._source=this),this._tooltip._prepareOpen(a)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(a){return this._tooltip&&this._tooltip.setContent(a),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&(Re(l,"focus",function(){this._tooltip._source=a,this.openTooltip()},this),Re(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(a){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var l=this;this._map.once("moveend",function(){l._openOnceFlag=!1,l._openTooltip(a)});return}this._tooltip._source=a.layer||a.target,this.openTooltip(this._tooltip.options.sticky?a.latlng:void 0)}},_moveTooltip:function(a){var l=a.latlng,d,v;this._tooltip.options.sticky&&a.originalEvent&&(d=this._map.mouseEventToContainerPoint(a.originalEvent),v=this._map.containerPointToLayerPoint(d),l=this._map.layerPointToLatLng(v)),this._tooltip.setLatLng(l)}});var $u=$n.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(a){var l=a&&a.tagName==="DIV"?a:document.createElement("div"),d=this.options;if(d.html instanceof Element?(mn(l),l.appendChild(d.html)):l.innerHTML=d.html!==!1?d.html:"",d.bgPos){var v=ce(d.bgPos);l.style.backgroundPosition=-v.x+"px "+-v.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function xh(a){return new $u(a)}$n.Default=ro;var nr=jn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(a){P(this,a)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(a){a._addZoomLimit(this)},onRemove:function(a){this._removeAllTiles(),ot(this._container),a._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Nt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ea(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(a){return this.options.opacity=a,this._updateOpacity(),this},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var a=this._clampZoom(this._map.getZoom());a!==this._tileZoom&&(this._tileZoom=a,this._updateLevels()),this._update()}return this},getEvents:function(){var a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var a=this.options.tileSize;return a instanceof re?a:new re(a,a)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(a){for(var l=this.getPane().children,d=-a(-1/0,1/0),v=0,w=l.length,C;v<w;v++)C=l[v].style.zIndex,l[v]!==this._container&&C&&(d=a(d,+C));isFinite(d)&&(this.options.zIndex=d+a(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!xe.ielt9){ht(this._container,this.options.opacity);var a=+new Date,l=!1,d=!1;for(var v in this._tiles){var w=this._tiles[v];if(!(!w.current||!w.loaded)){var C=Math.min(1,(a-w.loaded)/200);ht(w.el,C),C<1?l=!0:(w.active?d=!0:this._onOpaqueTile(w),w.active=!0)}}d&&!this._noPrune&&this._pruneTiles(),l&&(ke(this._fadeFrame),this._fadeFrame=ve(this._updateOpacity,this))}},_onOpaqueTile:E,_initContainer:function(){this._container||(this._container=He("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var a=this._tileZoom,l=this.options.maxZoom;if(a!==void 0){for(var d in this._levels)d=Number(d),this._levels[d].el.children.length||d===a?(this._levels[d].el.style.zIndex=l-Math.abs(a-d),this._onUpdateLevel(d)):(ot(this._levels[d].el),this._removeTilesAtZoom(d),this._onRemoveLevel(d),delete this._levels[d]);var v=this._levels[a],w=this._map;return v||(v=this._levels[a]={},v.el=He("div","leaflet-tile-container leaflet-zoom-animated",this._container),v.el.style.zIndex=l,v.origin=w.project(w.unproject(w.getPixelOrigin()),a).round(),v.zoom=a,this._setZoomTransform(v,w.getCenter(),w.getZoom()),E(v.el.offsetWidth),this._onCreateLevel(v)),this._level=v,v}},_onUpdateLevel:E,_onRemoveLevel:E,_onCreateLevel:E,_pruneTiles:function(){if(this._map){var a,l,d=this._map.getZoom();if(d>this.options.maxZoom||d<this.options.minZoom){this._removeAllTiles();return}for(a in this._tiles)l=this._tiles[a],l.retain=l.current;for(a in this._tiles)if(l=this._tiles[a],l.current&&!l.active){var v=l.coords;this._retainParent(v.x,v.y,v.z,v.z-5)||this._retainChildren(v.x,v.y,v.z,v.z+2)}for(a in this._tiles)this._tiles[a].retain||this._removeTile(a)}},_removeTilesAtZoom:function(a){for(var l in this._tiles)this._tiles[l].coords.z===a&&this._removeTile(l)},_removeAllTiles:function(){for(var a in this._tiles)this._removeTile(a)},_invalidateAll:function(){for(var a in this._levels)ot(this._levels[a].el),this._onRemoveLevel(Number(a)),delete this._levels[a];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(a,l,d,v){var w=Math.floor(a/2),C=Math.floor(l/2),R=d-1,F=new re(+w,+C);F.z=+R;var q=this._tileCoordsToKey(F),te=this._tiles[q];return te&&te.active?(te.retain=!0,!0):(te&&te.loaded&&(te.retain=!0),R>v?this._retainParent(w,C,R,v):!1)},_retainChildren:function(a,l,d,v){for(var w=2*a;w<2*a+2;w++)for(var C=2*l;C<2*l+2;C++){var R=new re(w,C);R.z=d+1;var F=this._tileCoordsToKey(R),q=this._tiles[F];if(q&&q.active){q.retain=!0;continue}else q&&q.loaded&&(q.retain=!0);d+1<v&&this._retainChildren(w,C,d+1,v)}},_resetView:function(a){var l=a&&(a.pinch||a.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(a){this._setView(a.center,a.zoom,!0,a.noUpdate)},_clampZoom:function(a){var l=this.options;return l.minNativeZoom!==void 0&&a<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<a?l.maxNativeZoom:a},_setView:function(a,l,d,v){var w=Math.round(l);this.options.maxZoom!==void 0&&w>this.options.maxZoom||this.options.minZoom!==void 0&&w<this.options.minZoom?w=void 0:w=this._clampZoom(w);var C=this.options.updateWhenZooming&&w!==this._tileZoom;(!v||C)&&(this._tileZoom=w,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),w!==void 0&&this._update(a),d||this._pruneTiles(),this._noPrune=!!d),this._setZoomTransforms(a,l)},_setZoomTransforms:function(a,l){for(var d in this._levels)this._setZoomTransform(this._levels[d],a,l)},_setZoomTransform:function(a,l,d){var v=this._map.getZoomScale(d,a.zoom),w=a.origin.multiplyBy(v).subtract(this._map._getNewPixelOrigin(l,d)).round();xe.any3d?ii(a.el,w,v):ut(a.el,w)},_resetGrid:function(){var a=this._map,l=a.options.crs,d=this._tileSize=this.getTileSize(),v=this._tileZoom,w=this._map.getPixelWorldBounds(this._tileZoom);w&&(this._globalTileRange=this._pxBoundsToTileRange(w)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(a.project([0,l.wrapLng[0]],v).x/d.x),Math.ceil(a.project([0,l.wrapLng[1]],v).x/d.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(a.project([l.wrapLat[0],0],v).y/d.x),Math.ceil(a.project([l.wrapLat[1],0],v).y/d.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(a){var l=this._map,d=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),v=l.getZoomScale(d,this._tileZoom),w=l.project(a,this._tileZoom).floor(),C=l.getSize().divideBy(v*2);return new O(w.subtract(C),w.add(C))},_update:function(a){var l=this._map;if(l){var d=this._clampZoom(l.getZoom());if(a===void 0&&(a=l.getCenter()),this._tileZoom!==void 0){var v=this._getTiledPixelBounds(a),w=this._pxBoundsToTileRange(v),C=w.getCenter(),R=[],F=this.options.keepBuffer,q=new O(w.getBottomLeft().subtract([F,-F]),w.getTopRight().add([F,-F]));if(!(isFinite(w.min.x)&&isFinite(w.min.y)&&isFinite(w.max.x)&&isFinite(w.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var te in this._tiles){var me=this._tiles[te].coords;(me.z!==this._tileZoom||!q.contains(new re(me.x,me.y)))&&(this._tiles[te].current=!1)}if(Math.abs(d-this._tileZoom)>1){this._setView(a,d);return}for(var Se=w.min.y;Se<=w.max.y;Se++)for(var De=w.min.x;De<=w.max.x;De++){var Dt=new re(De,Se);if(Dt.z=this._tileZoom,!!this._isValidTile(Dt)){var wt=this._tiles[this._tileCoordsToKey(Dt)];wt?wt.current=!0:R.push(Dt)}}if(R.sort(function(Ke,We){return Ke.distanceTo(C)-We.distanceTo(C)}),R.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var cn=document.createDocumentFragment();for(De=0;De<R.length;De++)this._addTile(R[De],cn);this._level.el.appendChild(cn)}}}},_isValidTile:function(a){var l=this._map.options.crs;if(!l.infinite){var d=this._globalTileRange;if(!l.wrapLng&&(a.x<d.min.x||a.x>d.max.x)||!l.wrapLat&&(a.y<d.min.y||a.y>d.max.y))return!1}if(!this.options.bounds)return!0;var v=this._tileCoordsToBounds(a);return oe(this.options.bounds).overlaps(v)},_keyToBounds:function(a){return this._tileCoordsToBounds(this._keyToTileCoords(a))},_tileCoordsToNwSe:function(a){var l=this._map,d=this.getTileSize(),v=a.scaleBy(d),w=v.add(d),C=l.unproject(v,a.z),R=l.unproject(w,a.z);return[C,R]},_tileCoordsToBounds:function(a){var l=this._tileCoordsToNwSe(a),d=new ie(l[0],l[1]);return this.options.noWrap||(d=this._map.wrapLatLngBounds(d)),d},_tileCoordsToKey:function(a){return a.x+":"+a.y+":"+a.z},_keyToTileCoords:function(a){var l=a.split(":"),d=new re(+l[0],+l[1]);return d.z=+l[2],d},_removeTile:function(a){var l=this._tiles[a];l&&(ot(l.el),delete this._tiles[a],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(a)}))},_initTile:function(a){Ie(a,"leaflet-tile");var l=this.getTileSize();a.style.width=l.x+"px",a.style.height=l.y+"px",a.onselectstart=E,a.onmousemove=E,xe.ielt9&&this.options.opacity<1&&ht(a,this.options.opacity)},_addTile:function(a,l){var d=this._getTilePos(a),v=this._tileCoordsToKey(a),w=this.createTile(this._wrapCoords(a),p(this._tileReady,this,a));this._initTile(w),this.createTile.length<2&&ve(p(this._tileReady,this,a,null,w)),ut(w,d),this._tiles[v]={el:w,coords:a,current:!0},l.appendChild(w),this.fire("tileloadstart",{tile:w,coords:a})},_tileReady:function(a,l,d){l&&this.fire("tileerror",{error:l,tile:d,coords:a});var v=this._tileCoordsToKey(a);d=this._tiles[v],d&&(d.loaded=+new Date,this._map._fadeAnimated?(ht(d.el,0),ke(this._fadeFrame),this._fadeFrame=ve(this._updateOpacity,this)):(d.active=!0,this._pruneTiles()),l||(Ie(d.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:d.el,coords:a})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),xe.ielt9||!this._map._fadeAnimated?ve(this._pruneTiles,this):setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(a){return a.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(a){var l=new re(this._wrapX?T(a.x,this._wrapX):a.x,this._wrapY?T(a.y,this._wrapY):a.y);return l.z=a.z,l},_pxBoundsToTileRange:function(a){var l=this.getTileSize();return new O(a.min.unscaleBy(l).floor(),a.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var a in this._tiles)if(!this._tiles[a].loaded)return!1;return!0}});function Vu(a){return new nr(a)}var Ii=nr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(a,l){this._url=a,l=P(this,l),l.detectRetina&&xe.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(a,l){return this._url===a&&l===void 0&&(l=!0),this._url=a,l||this.redraw(),this},createTile:function(a,l){var d=document.createElement("img");return Re(d,"load",p(this._tileOnLoad,this,l,d)),Re(d,"error",p(this._tileOnError,this,l,d)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(d.referrerPolicy=this.options.referrerPolicy),d.alt="",d.src=this.getTileUrl(a),d},getTileUrl:function(a){var l={r:xe.retina?"@2x":"",s:this._getSubdomain(a),x:a.x,y:a.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var d=this._globalTileRange.max.y-a.y;this.options.tms&&(l.y=d),l["-y"]=d}return $(this._url,u(l,this.options))},_tileOnLoad:function(a,l){xe.ielt9?setTimeout(p(a,this,null,l),0):a(null,l)},_tileOnError:function(a,l,d){var v=this.options.errorTileUrl;v&&l.getAttribute("src")!==v&&(l.src=v),a(d,l)},_onTileRemove:function(a){a.tile.onload=null},_getZoomForUrl:function(){var a=this._tileZoom,l=this.options.maxZoom,d=this.options.zoomReverse,v=this.options.zoomOffset;return d&&(a=l-a),a+v},_getSubdomain:function(a){var l=Math.abs(a.x+a.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var a,l;for(a in this._tiles)if(this._tiles[a].coords.z!==this._tileZoom&&(l=this._tiles[a].el,l.onload=E,l.onerror=E,!l.complete)){l.src=J;var d=this._tiles[a].coords;ot(l),delete this._tiles[a],this.fire("tileabort",{tile:l,coords:d})}},_removeTile:function(a){var l=this._tiles[a];if(l)return l.el.setAttribute("src",J),nr.prototype._removeTile.call(this,a)},_tileReady:function(a,l,d){if(!(!this._map||d&&d.getAttribute("src")===J))return nr.prototype._tileReady.call(this,a,l,d)}});function vn(a,l){return new Ii(a,l)}var mo=Ii.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(a,l){this._url=a;var d=u({},this.defaultWmsParams);for(var v in l)v in this.options||(d[v]=l[v]);l=P(this,l);var w=l.detectRetina&&xe.retina?2:1,C=this.getTileSize();d.width=C.x*w,d.height=C.y*w,this.wmsParams=d},onAdd:function(a){this._crs=this.options.crs||a.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,Ii.prototype.onAdd.call(this,a)},getTileUrl:function(a){var l=this._tileCoordsToNwSe(a),d=this._crs,v=Y(d.project(l[0]),d.project(l[1])),w=v.min,C=v.max,R=(this._wmsVersion>=1.3&&this._crs===kl?[w.y,w.x,C.y,C.x]:[w.x,w.y,C.x,C.y]).join(","),F=Ii.prototype.getTileUrl.call(this,a);return F+H(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+R},setParams:function(a,l){return u(this.wmsParams,a),l||this.redraw(),this}});function yn(a,l){return new mo(a,l)}Ii.WMS=mo,vn.wms=yn;var nn=jn.extend({options:{padding:.1},initialize:function(a){P(this,a),y(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ie(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var a={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(a.zoomanim=this._onAnimZoom),a},_onAnimZoom:function(a){this._updateTransform(a.center,a.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(a,l){var d=this._map.getZoomScale(l,this._zoom),v=this._map.getSize().multiplyBy(.5+this.options.padding),w=this._map.project(this._center,l),C=v.multiplyBy(-d).add(w).subtract(this._map._getNewPixelOrigin(a,l));xe.any3d?ii(this._container,C,d):ut(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var a in this._layers)this._layers[a]._reset()},_onZoomEnd:function(){for(var a in this._layers)this._layers[a]._project()},_updatePaths:function(){for(var a in this._layers)this._layers[a]._update()},_update:function(){var a=this.options.padding,l=this._map.getSize(),d=this._map.containerPointToLayerPoint(l.multiplyBy(-a)).round();this._bounds=new O(d,d.add(l.multiplyBy(1+a*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),as=nn.extend({options:{tolerance:0},getEvents:function(){var a=nn.prototype.getEvents.call(this);return a.viewprereset=this._onViewPreReset,a},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){nn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var a=this._container=document.createElement("canvas");Re(a,"mousemove",this._onMouseMove,this),Re(a,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Re(a,"mouseout",this._handleMouseOut,this),a._leaflet_disable_events=!0,this._ctx=a.getContext("2d")},_destroyContainer:function(){ke(this._redrawRequest),delete this._ctx,ot(this._container),it(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var a;this._redrawBounds=null;for(var l in this._layers)a=this._layers[l],a._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nn.prototype._update.call(this);var a=this._bounds,l=this._container,d=a.getSize(),v=xe.retina?2:1;ut(l,a.min),l.width=v*d.x,l.height=v*d.y,l.style.width=d.x+"px",l.style.height=d.y+"px",xe.retina&&this._ctx.scale(2,2),this._ctx.translate(-a.min.x,-a.min.y),this.fire("update")}},_reset:function(){nn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(a){this._updateDashArray(a),this._layers[y(a)]=a;var l=a._order={layer:a,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(a){this._requestRedraw(a)},_removePath:function(a){var l=a._order,d=l.next,v=l.prev;d?d.prev=v:this._drawLast=v,v?v.next=d:this._drawFirst=d,delete a._order,delete this._layers[y(a)],this._requestRedraw(a)},_updatePath:function(a){this._extendRedrawBounds(a),a._project(),a._update(),this._requestRedraw(a)},_updateStyle:function(a){this._updateDashArray(a),this._requestRedraw(a)},_updateDashArray:function(a){if(typeof a.options.dashArray=="string"){var l=a.options.dashArray.split(/[, ]+/),d=[],v,w;for(w=0;w<l.length;w++){if(v=Number(l[w]),isNaN(v))return;d.push(v)}a.options._dashArray=d}else a.options._dashArray=a.options.dashArray},_requestRedraw:function(a){this._map&&(this._extendRedrawBounds(a),this._redrawRequest=this._redrawRequest||ve(this._redraw,this))},_extendRedrawBounds:function(a){if(a._pxBounds){var l=(a.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(a._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(a._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var a=this._redrawBounds;if(a){var l=a.getSize();this._ctx.clearRect(a.min.x,a.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var a,l=this._redrawBounds;if(this._ctx.save(),l){var d=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,d.x,d.y),this._ctx.clip()}this._drawing=!0;for(var v=this._drawFirst;v;v=v.next)a=v.layer,(!l||a._pxBounds&&a._pxBounds.intersects(l))&&a._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(a,l){if(this._drawing){var d,v,w,C,R=a._parts,F=R.length,q=this._ctx;if(F){for(q.beginPath(),d=0;d<F;d++){for(v=0,w=R[d].length;v<w;v++)C=R[d][v],q[v?"lineTo":"moveTo"](C.x,C.y);l&&q.closePath()}this._fillStroke(q,a)}}},_updateCircle:function(a){if(!(!this._drawing||a._empty())){var l=a._point,d=this._ctx,v=Math.max(Math.round(a._radius),1),w=(Math.max(Math.round(a._radiusY),1)||v)/v;w!==1&&(d.save(),d.scale(1,w)),d.beginPath(),d.arc(l.x,l.y/w,v,0,Math.PI*2,!1),w!==1&&d.restore(),this._fillStroke(d,a)}},_fillStroke:function(a,l){var d=l.options;d.fill&&(a.globalAlpha=d.fillOpacity,a.fillStyle=d.fillColor||d.color,a.fill(d.fillRule||"evenodd")),d.stroke&&d.weight!==0&&(a.setLineDash&&a.setLineDash(l.options&&l.options._dashArray||[]),a.globalAlpha=d.opacity,a.lineWidth=d.weight,a.strokeStyle=d.color,a.lineCap=d.lineCap,a.lineJoin=d.lineJoin,a.stroke())},_onClick:function(a){for(var l=this._map.mouseEventToLayerPoint(a),d,v,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(!(a.type==="click"||a.type==="preclick")||!this._map._draggableMoved(d))&&(v=d);this._fireEvent(v?[v]:!1,a)},_onMouseMove:function(a){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(a);this._handleMouseHover(a,l)}},_handleMouseOut:function(a){var l=this._hoveredLayer;l&&(vt(this._container,"leaflet-interactive"),this._fireEvent([l],a,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(a,l){if(!this._mouseHoverThrottled){for(var d,v,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(v=d);v!==this._hoveredLayer&&(this._handleMouseOut(a),v&&(Ie(this._container,"leaflet-interactive"),this._fireEvent([v],a,"mouseover"),this._hoveredLayer=v)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,a),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(a,l,d){this._map._fireDOMEvent(l,d||l.type,a)},_bringToFront:function(a){var l=a._order;if(l){var d=l.next,v=l.prev;if(d)d.prev=v;else return;v?v.next=d:d&&(this._drawFirst=d),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(a)}},_bringToBack:function(a){var l=a._order;if(l){var d=l.next,v=l.prev;if(v)v.next=d;else return;d?d.prev=v:v&&(this._drawLast=v),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(a)}}});function po(a){return xe.canvas?new as(a):null}var Pi=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch{}return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),jl={_initContainer:function(){this._container=He("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(nn.prototype._update.call(this),this.fire("update"))},_initPath:function(a){var l=a._container=Pi("shape");Ie(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",a._path=Pi("path"),l.appendChild(a._path),this._updateStyle(a),this._layers[y(a)]=a},_addPath:function(a){var l=a._container;this._container.appendChild(l),a.options.interactive&&a.addInteractiveTarget(l)},_removePath:function(a){var l=a._container;ot(l),a.removeInteractiveTarget(l),delete this._layers[y(a)]},_updateStyle:function(a){var l=a._stroke,d=a._fill,v=a.options,w=a._container;w.stroked=!!v.stroke,w.filled=!!v.fill,v.stroke?(l||(l=a._stroke=Pi("stroke")),w.appendChild(l),l.weight=v.weight+"px",l.color=v.color,l.opacity=v.opacity,v.dashArray?l.dashStyle=W(v.dashArray)?v.dashArray.join(" "):v.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=v.lineCap.replace("butt","flat"),l.joinstyle=v.lineJoin):l&&(w.removeChild(l),a._stroke=null),v.fill?(d||(d=a._fill=Pi("fill")),w.appendChild(d),d.color=v.fillColor||v.color,d.opacity=v.fillOpacity):d&&(w.removeChild(d),a._fill=null)},_updateCircle:function(a){var l=a._point.round(),d=Math.round(a._radius),v=Math.round(a._radiusY||d);this._setPath(a,a._empty()?"M0 0":"AL "+l.x+","+l.y+" "+d+","+v+" 0,"+65535*360)},_setPath:function(a,l){a._path.v=l},_bringToFront:function(a){Nt(a._container)},_bringToBack:function(a){ea(a._container)}},Zn=xe.vml?Pi:Pa,ir=nn.extend({_initContainer:function(){this._container=Zn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Zn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ot(this._container),it(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){nn.prototype._update.call(this);var a=this._bounds,l=a.getSize(),d=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,d.setAttribute("width",l.x),d.setAttribute("height",l.y)),ut(d,a.min),d.setAttribute("viewBox",[a.min.x,a.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(a){var l=a._path=Zn("path");a.options.className&&Ie(l,a.options.className),a.options.interactive&&Ie(l,"leaflet-interactive"),this._updateStyle(a),this._layers[y(a)]=a},_addPath:function(a){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(a._path),a.addInteractiveTarget(a._path)},_removePath:function(a){ot(a._path),a.removeInteractiveTarget(a._path),delete this._layers[y(a)]},_updatePath:function(a){a._project(),a._update()},_updateStyle:function(a){var l=a._path,d=a.options;l&&(d.stroke?(l.setAttribute("stroke",d.color),l.setAttribute("stroke-opacity",d.opacity),l.setAttribute("stroke-width",d.weight),l.setAttribute("stroke-linecap",d.lineCap),l.setAttribute("stroke-linejoin",d.lineJoin),d.dashArray?l.setAttribute("stroke-dasharray",d.dashArray):l.removeAttribute("stroke-dasharray"),d.dashOffset?l.setAttribute("stroke-dashoffset",d.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),d.fill?(l.setAttribute("fill",d.fillColor||d.color),l.setAttribute("fill-opacity",d.fillOpacity),l.setAttribute("fill-rule",d.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(a,l){this._setPath(a,Na(a._parts,l))},_updateCircle:function(a){var l=a._point,d=Math.max(Math.round(a._radius),1),v=Math.max(Math.round(a._radiusY),1)||d,w="a"+d+","+v+" 0 1,0 ",C=a._empty()?"M0 0":"M"+(l.x-d)+","+l.y+w+d*2+",0 "+w+-d*2+",0 ";this._setPath(a,C)},_setPath:function(a,l){a._path.setAttribute("d",l)},_bringToFront:function(a){Nt(a._path)},_bringToBack:function(a){ea(a._path)}});xe.vml&&ir.include(jl);function go(a){return xe.svg||xe.vml?new ir(a):null}qe.include({getRenderer:function(a){var l=a.options.renderer||this._getPaneRenderer(a.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(a){if(a==="overlayPane"||a===void 0)return!1;var l=this._paneRenderers[a];return l===void 0&&(l=this._createRenderer({pane:a}),this._paneRenderers[a]=l),l},_createRenderer:function(a){return this.options.preferCanvas&&po(a)||go(a)}});var aa=Ja.extend({initialize:function(a,l){Ja.prototype.initialize.call(this,this._boundsToLatLngs(a),l)},setBounds:function(a){return this.setLatLngs(this._boundsToLatLngs(a))},_boundsToLatLngs:function(a){return a=oe(a),[a.getSouthWest(),a.getNorthWest(),a.getNorthEast(),a.getSouthEast()]}});function wh(a,l){return new aa(a,l)}ir.create=Zn,ir.pointsToPath=Na,si.geometryToLayer=$t,si.coordsToLatLng=Qo,si.coordsToLatLngs=lo,si.latLngToCoords=es,si.latLngsToCoords=co,si.getFeature=Li,si.asFeature=ts,qe.mergeOptions({boxZoom:!0});var an=Fn.extend({initialize:function(a){this._map=a,this._container=a._container,this._pane=a._panes.overlayPane,this._resetStateTimeout=0,a.on("unload",this._destroy,this)},addHooks:function(){Re(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){it(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ot(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(a){if(!a.shiftKey||a.which!==1&&a.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),$a(),Vo(),this._startPoint=this._map.mouseEventToContainerPoint(a),Re(document,{contextmenu:Oi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(a){this._moved||(this._moved=!0,this._box=He("div","leaflet-zoom-box",this._container),Ie(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(a);var l=new O(this._point,this._startPoint),d=l.getSize();ut(this._box,l.min),this._box.style.width=d.x+"px",this._box.style.height=d.y+"px"},_finish:function(){this._moved&&(ot(this._box),vt(this._container,"leaflet-crosshair")),Bn(),Xr(),it(document,{contextmenu:Oi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(a){if(!(a.which!==1&&a.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0);var l=new ie(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(a){a.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});qe.addInitHook("addHandler","boxZoom",an),qe.mergeOptions({doubleClickZoom:!0});var rs=Fn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(a){var l=this._map,d=l.getZoom(),v=l.options.zoomDelta,w=a.originalEvent.shiftKey?d-v:d+v;l.options.doubleClickZoom==="center"?l.setZoom(w):l.setZoomAround(a.containerPoint,w)}});qe.addInitHook("addHandler","doubleClickZoom",rs),qe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var qn=Fn.extend({addHooks:function(){if(!this._draggable){var a=this._map;this._draggable=new zi(a._mapPane,a._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),a.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),a.on("zoomend",this._onZoomEnd,this),a.whenReady(this._onZoomEnd,this))}Ie(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){vt(this._map._container,"leaflet-grab"),vt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var a=this._map;if(a._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=oe(this._map.options.maxBounds);this._offsetLimit=Y(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;a.fire("movestart").fire("dragstart"),a.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(a){if(this._map.options.inertia){var l=this._lastTime=+new Date,d=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(d),this._times.push(l),this._prunePositions(l)}this._map.fire("move",a).fire("drag",a)},_prunePositions:function(a){for(;this._positions.length>1&&a-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var a=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(a).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(a,l){return a-(a-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var a=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;a.x<l.min.x&&(a.x=this._viscousLimit(a.x,l.min.x)),a.y<l.min.y&&(a.y=this._viscousLimit(a.y,l.min.y)),a.x>l.max.x&&(a.x=this._viscousLimit(a.x,l.max.x)),a.y>l.max.y&&(a.y=this._viscousLimit(a.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(a)}},_onPreDragWrap:function(){var a=this._worldWidth,l=Math.round(a/2),d=this._initialWorldOffset,v=this._draggable._newPos.x,w=(v-l+d)%a+l-d,C=(v+l+d)%a-l-d,R=Math.abs(w+d)<Math.abs(C+d)?w:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=R},_onDragEnd:function(a){var l=this._map,d=l.options,v=!d.inertia||a.noInertia||this._times.length<2;if(l.fire("dragend",a),v)l.fire("moveend");else{this._prunePositions(+new Date);var w=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,R=d.easeLinearity,F=w.multiplyBy(R/C),q=F.distanceTo([0,0]),te=Math.min(d.inertiaMaxSpeed,q),me=F.multiplyBy(te/q),Se=te/(d.inertiaDeceleration*R),De=me.multiplyBy(-Se/2).round();!De.x&&!De.y?l.fire("moveend"):(De=l._limitOffset(De,l.options.maxBounds),ve(function(){l.panBy(De,{duration:Se,easeLinearity:R,noMoveStart:!0,animate:!0})}))}}});qe.addInitHook("addHandler","dragging",qn),qe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ol=Fn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(a){this._map=a,this._setPanDelta(a.options.keyboardPanDelta),this._setZoomDelta(a.options.zoomDelta)},addHooks:function(){var a=this._map._container;a.tabIndex<=0&&(a.tabIndex="0"),Re(a,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),it(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var a=document.body,l=document.documentElement,d=a.scrollTop||l.scrollTop,v=a.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(v,d)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(a){var l=this._panKeys={},d=this.keyCodes,v,w;for(v=0,w=d.left.length;v<w;v++)l[d.left[v]]=[-1*a,0];for(v=0,w=d.right.length;v<w;v++)l[d.right[v]]=[a,0];for(v=0,w=d.down.length;v<w;v++)l[d.down[v]]=[0,a];for(v=0,w=d.up.length;v<w;v++)l[d.up[v]]=[0,-1*a]},_setZoomDelta:function(a){var l=this._zoomKeys={},d=this.keyCodes,v,w;for(v=0,w=d.zoomIn.length;v<w;v++)l[d.zoomIn[v]]=a;for(v=0,w=d.zoomOut.length;v<w;v++)l[d.zoomOut[v]]=-a},_addHooks:function(){Re(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){it(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(a){if(!(a.altKey||a.ctrlKey||a.metaKey)){var l=a.keyCode,d=this._map,v;if(l in this._panKeys){if(!d._panAnim||!d._panAnim._inProgress)if(v=this._panKeys[l],a.shiftKey&&(v=ce(v).multiplyBy(3)),d.options.maxBounds&&(v=d._limitOffset(ce(v),d.options.maxBounds)),d.options.worldCopyJump){var w=d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(v)));d.panTo(w)}else d.panBy(v)}else if(l in this._zoomKeys)d.setZoom(d.getZoom()+(a.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&d._popup&&d._popup.options.closeOnEscapeKey)d.closePopup();else return;Oi(a)}}});qe.addInitHook("addHandler","keyboard",Ol),qe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var vo=Fn.extend({addHooks:function(){Re(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){it(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(a){var l=Wt(a),d=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(a),this._startTime||(this._startTime=+new Date);var v=Math.max(d-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),v),Oi(a)},_performZoom:function(){var a=this._map,l=a.getZoom(),d=this._map.options.zoomSnap||0;a._stop();var v=this._delta/(this._map.options.wheelPxPerZoomLevel*4),w=4*Math.log(2/(1+Math.exp(-Math.abs(v))))/Math.LN2,C=d?Math.ceil(w/d)*d:w,R=a._limitZoom(l+(this._delta>0?C:-C))-l;this._delta=0,this._startTime=null,R&&(a.options.scrollWheelZoom==="center"?a.setZoom(l+R):a.setZoomAround(this._lastMousePos,l+R))}});qe.addInitHook("addHandler","scrollWheelZoom",vo);var ra=600;qe.mergeOptions({tapHold:xe.touchNative&&xe.safari&&xe.mobile,tapTolerance:15});var os=Fn.extend({addHooks:function(){Re(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){it(this._map._container,"touchstart",this._onDown,this)},_onDown:function(a){if(clearTimeout(this._holdTimeout),a.touches.length===1){var l=a.touches[0];this._startPos=this._newPos=new re(l.clientX,l.clientY),this._holdTimeout=setTimeout(p(function(){this._cancel(),this._isTapValid()&&(Re(document,"touchend",xt),Re(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),ra),Re(document,"touchend touchcancel contextmenu",this._cancel,this),Re(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function a(){it(document,"touchend",xt),it(document,"touchend touchcancel",a)},_cancel:function(){clearTimeout(this._holdTimeout),it(document,"touchend touchcancel contextmenu",this._cancel,this),it(document,"touchmove",this._onMove,this)},_onMove:function(a){var l=a.touches[0];this._newPos=new re(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(a,l){var d=new MouseEvent(a,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});d._simulated=!0,l.target.dispatchEvent(d)}});qe.addInitHook("addHandler","tapHold",os),qe.mergeOptions({touchZoom:xe.touch,bounceAtZoomLimits:!0});var zl=Fn.extend({addHooks:function(){Ie(this._map._container,"leaflet-touch-zoom"),Re(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){vt(this._map._container,"leaflet-touch-zoom"),it(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(a){var l=this._map;if(!(!a.touches||a.touches.length!==2||l._animatingZoom||this._zooming)){var d=l.mouseEventToContainerPoint(a.touches[0]),v=l.mouseEventToContainerPoint(a.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(d.add(v)._divideBy(2))),this._startDist=d.distanceTo(v),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Re(document,"touchmove",this._onTouchMove,this),Re(document,"touchend touchcancel",this._onTouchEnd,this),xt(a)}},_onTouchMove:function(a){if(!(!a.touches||a.touches.length!==2||!this._zooming)){var l=this._map,d=l.mouseEventToContainerPoint(a.touches[0]),v=l.mouseEventToContainerPoint(a.touches[1]),w=d.distanceTo(v)/this._startDist;if(this._zoom=l.getScaleZoom(w,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&w<1||this._zoom>l.getMaxZoom()&&w>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,w===1)return}else{var C=d._add(v)._divideBy(2)._subtract(this._centerPoint);if(w===1&&C.x===0&&C.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),ke(this._animRequest);var R=p(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=ve(R,this,!0),xt(a)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ke(this._animRequest),it(document,"touchmove",this._onTouchMove,this),it(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});qe.addInitHook("addHandler","touchZoom",zl),qe.BoxZoom=an,qe.DoubleClickZoom=rs,qe.Drag=qn,qe.Keyboard=Ol,qe.ScrollWheelZoom=vo,qe.TapHold=os,qe.TouchZoom=zl,r.Bounds=O,r.Browser=xe,r.CRS=Le,r.Canvas=as,r.Circle=Jo,r.CircleMarker=Xa,r.Class=ae,r.Control=ln,r.DivIcon=$u,r.DivOverlay=Vt,r.DomEvent=Go,r.DomUtil=qa,r.Draggable=zi,r.Evented=le,r.FeatureGroup=Hn,r.GeoJSON=si,r.GridLayer=nr,r.Handler=Fn,r.Icon=$n,r.ImageOverlay=er,r.LatLng=fe,r.LatLngBounds=ie,r.Layer=jn,r.LayerGroup=Wa,r.LineUtil=gh,r.Map=qe,r.Marker=so,r.Mixin=fh,r.Path=Vn,r.Point=re,r.PolyUtil=Cl,r.Polygon=Ja,r.Polyline=oi,r.Popup=fo,r.PosAnimation=Ga,r.Projection=Mu,r.Rectangle=aa,r.Renderer=nn,r.SVG=ir,r.SVGOverlay=is,r.TileLayer=Ii,r.Tooltip=ho,r.Transformation=Ei,r.Util=ge,r.VideoOverlay=Mi,r.bind=p,r.bounds=Y,r.canvas=po,r.circle=Bu,r.circleMarker=Du,r.control=ri,r.divIcon=xh,r.extend=u,r.featureGroup=Pu,r.geoJSON=ns,r.geoJson=uo,r.gridLayer=Vu,r.icon=ao,r.imageOverlay=Uu,r.latLng=pe,r.latLngBounds=oe,r.layerGroup=vh,r.map=_l,r.marker=Nu,r.point=ce,r.polygon=bh,r.polyline=yh,r.popup=Hu,r.rectangle=wh,r.setOptions=P,r.stamp=y,r.svg=go,r.svgOverlay=Fu,r.tileLayer=vn,r.tooltip=_h,r.transformation=we,r.version=s,r.videoOverlay=tr;var Ll=window.L;r.noConflict=function(){return window.L=Ll,this},window.L=r}))})(Cc,Cc.exports)),Cc.exports}var Zf=vj();const w0=qw(Zf);function yj(t,i){const r=k.useRef(i);k.useEffect(function(){i!==r.current&&t.attributionControl!=null&&(r.current!=null&&t.attributionControl.removeAttribution(r.current),i!=null&&t.attributionControl.addAttribution(i)),r.current=i},[t,i])}const bj=1;function _j(t){return Object.freeze({__version:bj,map:t})}function xj(t,i){return Object.freeze({...t,...i})}const S0=k.createContext(null);function Z1(){const t=k.use(S0);if(t==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function wj(t){function i(r,s){const{instance:u,context:m}=t(r).current;k.useImperativeHandle(s,()=>u);const{children:p}=r;return p==null?null:Wn.createElement(S0,{value:m},p)}return k.forwardRef(i)}function Sj(t){function i(r,s){const{instance:u}=t(r).current;return k.useImperativeHandle(s,()=>u),null}return k.forwardRef(i)}function Ej(t,i){const r=k.useRef(void 0);k.useEffect(function(){return i!=null&&t.instance.on(i),r.current=i,function(){r.current!=null&&t.instance.off(r.current),r.current=null}},[t,i])}function q1(t,i){const r=t.pane??i.pane;return r?{...t,pane:r}:t}function G1(t,i,r){return Object.freeze({instance:t,context:i,container:r})}function Y1(t,i){return i==null?function(s,u){const m=k.useRef(void 0);return m.current||(m.current=t(s,u)),m}:function(s,u){const m=k.useRef(void 0);m.current||(m.current=t(s,u));const p=k.useRef(s),{instance:b}=m.current;return k.useEffect(function(){p.current!==s&&(i(b,s,p.current),p.current=s)},[b,s,i]),m}}function Tj(t,i){k.useEffect(function(){return(i.layerContainer??i.map).addLayer(t.instance),function(){i.layerContainer?.removeLayer(t.instance),i.map.removeLayer(t.instance)}},[i,t])}function K1(t){return function(r){const s=Z1(),u=t(q1(r,s),s);return yj(s.map,r.attribution),Ej(u.current,r.eventHandlers),Tj(u.current,s),u}}function Cj(t,i){const r=Y1(t,i),s=K1(r);return wj(s)}function Aj(t,i){const r=Y1(t,i),s=K1(r);return Sj(s)}function kj(t,i,r){const{opacity:s,zIndex:u}=i;s!=null&&s!==r.opacity&&t.setOpacity(s),u!=null&&u!==r.zIndex&&t.setZIndex(u)}function jj(){return Z1().map}function Oj({bounds:t,boundsOptions:i,center:r,children:s,className:u,id:m,placeholder:p,style:b,whenReady:y,zoom:_,...T},E){const[j]=k.useState({className:u,id:m,style:b}),[M,z]=k.useState(null),P=k.useRef(void 0);k.useImperativeHandle(E,()=>M?.map??null,[M]);const H=k.useCallback($=>{if($!==null&&!P.current){const W=new Zf.Map($,T);P.current=W,r!=null&&_!=null?W.setView(r,_):t!=null&&W.fitBounds(t,i),y!=null&&W.whenReady(y),z(_j(W))}},[]);k.useEffect(()=>()=>{M?.map.remove()},[M]);const B=M?Wn.createElement(S0,{value:M},s):p??null;return Wn.createElement("div",{...j,ref:H},B)}const zj=k.forwardRef(Oj),W1=Cj(function({position:i,...r},s){const u=new Zf.Marker(i,r);return G1(u,xj(s,{overlayContainer:u}))},function(i,r,s){r.position!==s.position&&i.setLatLng(r.position),r.icon!=null&&r.icon!==s.icon&&i.setIcon(r.icon),r.zIndexOffset!=null&&r.zIndexOffset!==s.zIndexOffset&&i.setZIndexOffset(r.zIndexOffset),r.opacity!=null&&r.opacity!==s.opacity&&i.setOpacity(r.opacity),i.dragging!=null&&r.draggable!==s.draggable&&(r.draggable===!0?i.dragging.enable():i.dragging.disable())}),Lj=Aj(function({url:i,...r},s){const u=new Zf.TileLayer(i,q1(r,s));return G1(u,s)},function(i,r,s){kj(i,r,s);const{url:u}=r;u!=null&&u!==s.url&&i.setUrl(u)}),Rj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Mj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Ij="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",T_="📢영업중";function C_(t){const[i,r]=t.split(":").map(Number);return Number.isNaN(i)||Number.isNaN(r)?null:i*60+r}function Pj(t=new Date){const i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Seoul",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(t),r=Number(i.find(u=>u.type==="hour")?.value??0),s=Number(i.find(u=>u.type==="minute")?.value??0);return r*60+s}function X1(t,i){const r=C_(t),s=C_(i);if(r===null||s===null)return!1;if(r===s)return!0;const u=Pj();return s>r?u>=r&&u<=s:u>=r||u<=s}delete w0.Icon.Default.prototype._getIconUrl;w0.Icon.Default.mergeOptions({iconRetinaUrl:Rj,iconUrl:Mj,shadowUrl:Ij});function Nj({onSelectStore:t,selectedCategory:i=[],selectedStore:r,stores:s=[],favoriteIds:u=[],favoritesOnly:m=!1}){const p=k.useRef(t);k.useEffect(()=>{p.current=t},[t]);const b=k.useMemo(()=>{const y=m?s.filter(E=>u.includes(E._id)):s;if(r)return y.filter(E=>E._id===r._id);if(i.length===0)return y;const _=i.filter(E=>E!==T_),T=i.includes(T_);return y.filter(E=>{const j=_.length===0||_.includes(String(E.category.kor)),M=!T||X1(E.openTime,E.closeTime);return j&&M})},[s,i,r,u,m]);return h.jsx(h.Fragment,{children:b.map(y=>h.jsx(W1,{position:[y.lat,y.lon],eventHandlers:{click:()=>{p.current?.(y)}}},y._id))})}const Dj=x.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;

    .leaflet-container {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 767px) {
        .leaflet-top.leaflet-left {
            top: 7.5rem;
        }
    }

    .user-location {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translate(-50%, calc(-100% - 0.2rem));
        pointer-events: none;
    }

    .user-location-label {
        background: linear-gradient(180deg, #6b73d1 0%, #535FC1 100%);
        color: white;
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.02em;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        white-space: nowrap;
        line-height: 1.2;
    }

    .user-location-stem {
        width: 0;
        height: 0;
        border-left: 0.35rem solid transparent;
        border-right: 0.35rem solid transparent;
        border-top: 0.4rem solid #535FC1;
        margin-top: -0.05rem;
    }

    .user-location-dot {
        width: 1rem;
        height: 1rem;
        margin-top: 0.2rem;
        background: #535FC1;
        border: 0.18rem solid white;
        border-radius: 50%;
    }
`,_g=[37.379995,126.66281],rf=16,Bj=18;function Uj({selectedStore:t,userLocation:i,onUserMoveEnd:r}){const s=jj(),u=k.useRef(!0),m=k.useRef(!0);return k.useEffect(()=>{if(t){u.current=!1,s.setView([t.lat,t.lon],Bj,{animate:!0});return}if(u.current){u.current=!1;return}s.setView(_g,rf,{animate:!0})},[s,t]),k.useEffect(()=>{if(!i){if(m.current){m.current=!1;return}if(t)return;s.setView(_g,rf,{animate:!0});return}s.setView(i,rf,{animate:!0});let p=!1;const b=()=>{p||(p=!0,r?.())},y=()=>{window.clearTimeout(_),b()},_=window.setTimeout(b,1500);return s.once("moveend",y),()=>{window.clearTimeout(_),s.off("moveend",y)}},[s,i,t,r]),null}function Fj({className:t,onSelectStore:i,selectedCategory:r,selectedStore:s,stores:u,userLocation:m,language:p,showSchoolReturn:b,onUserMoveEnd:y,favoriteIds:_,favoritesOnly:T}){const E=k.useMemo(()=>w0.divIcon({className:"user-location-icon",html:`
            <div class="user-location">
                <span class="user-location-label"> ${p==="eng"?"My location":"내 위치"} </span>
                <span class="user-location-stem"></span>
                <span class="user-location-dot"></span>
            </div>
        `,iconSize:[0,0],iconAnchor:[0,0]}),[p]);return h.jsx(Dj,{className:t,children:h.jsxs(zj,{center:_g,zoom:rf,scrollWheelZoom:!0,style:{width:"100%",height:"100%"},children:[h.jsx(Uj,{selectedStore:s,userLocation:m,onUserMoveEnd:y}),h.jsx(Lj,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),h.jsx(Nj,{onSelectStore:i,selectedCategory:r,selectedStore:s,stores:u,favoriteIds:_,favoritesOnly:T}),b&&m&&h.jsx(W1,{position:m,icon:E,zIndexOffset:1e3})]})})}const Lc={admin:"",owner:"",student:""};function Hj(t,i){Lc[t]=i}function Mr(t){Lc[t]=""}function $j(){const t=[Lc.admin,Lc.owner,Lc.student].filter(Boolean).join(",");return t?{"X-CSRF-Token":t}:{}}function nl(t,i){typeof i.csrfToken=="string"&&i.csrfToken&&Hj(t,i.csrfToken);const r={...i};return delete r.csrfToken,r}function fn(t={}){const i=String(t.method??"GET").toUpperCase(),r=i==="GET"||i==="HEAD"||i==="OPTIONS"?{}:$j();return{...t,credentials:"include",headers:{...t.headers,...r}}}async function $i(t,i={}){try{const r=await fetch(t,fn(i));if(!r.ok)throw new Error(`HTTP 에러: ${r.status}`);return r.json()}catch(r){throw r instanceof DOMException&&r.name==="AbortError"?r:new Error(`데이터 파싱 에러: ${r instanceof Error?r.message:"알 수 없는 에러"}`)}}const il="https://outstandingspots-production.up.railway.app";function bi(t){if(!t)return"";if(t.startsWith("data:")||t.startsWith("blob:"))return t;const i=il.replace(/\/$/,"");if(t.startsWith("http://")||t.startsWith("https://")){try{const r=new URL(t);if(r.pathname.startsWith("/photos/"))return`${i}${r.pathname}`}catch{return t}return t}return`${i}${t.startsWith("/")?t:`/${t}`}`}async function A_(t){const{photo:i}=await $i(`${il}/photos`,{method:"POST",headers:{"Content-Type":t.type||"image/png"},body:t});return i}async function Vj(){return $i(`${il}/stores`)}async function Zj(t){return $i(`${il}/stores`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function qj(t,i){return $i(`${il}/stores/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}async function Gj(t){return $i(`${il}/stores/${t}`,{method:"DELETE"})}const Yj=x.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    aspect-ratio: calc((25vw * 0.92 * 0.90) / 20vh);
    margin-top: 1.5rem;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 767px) {
        aspect-ratio: calc((100vw * 0.92 * 0.90) / 16vh);
        margin-top: 0.8rem;
    }
`,Kj=x.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;function Wj({photoSrc:t,storeAltName:i}){return h.jsx(Yj,{children:h.jsx(Kj,{src:bi(t),alt:i})})}const Xj=x.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.35rem;
    height: 1.35rem;
    padding: 0;
    margin-left: 0.4rem;
    vertical-align: middle;
    font-weight: bolder;
    font-size: 0.7rem;
    line-height: 1;
    background-color: #6EEB7D;
    color: white;
    border: 0.8px solid black;
    flex-shrink: 0;
    margin-bottom: 0.3rem;
`;function J1({storeNaverMap:t}){return h.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Xj,{children:" N "})})}const Jj=x.p`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,Qj=x.p`
    font-weight: bold;
    color: #EE6969;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;function Q1({openTime:t,closeTime:i,language:r}){const s=X1(t,i);return h.jsx(h.Fragment,{children:s?h.jsxs(Jj,{children:[" ",r==="eng"?"Open":"영업 중"," "]}):h.jsxs(Qj,{children:[" ",r==="eng"?"Closed":"영업 마감"," "]})})}const Vi="https://outstandingspots-production.up.railway.app";async function eS(t,i){const r=await fetch(`${Vi}/students/login`,fn({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:i})})),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return nl("student",s)}async function eO(){await fetch(`${Vi}/students/logout`,fn({method:"POST"})),Mr("student")}async function tO(){const t=await fetch(`${Vi}/students/session`,fn());if(!t.ok)return Mr("student"),null;const i=await t.json().catch(()=>null);return i?nl("student",i):(Mr("student"),null)}async function nO(t){const i=await fetch(`${Vi}/students`,fn({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(typeof r.error=="string"?r.error:`HTTP ${i.status}`);return r}async function al(t,i){const r=await fetch(t,fn(i)),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}const iO=7;function aO(t,i){return[i,...t.filter(r=>r!==i)].slice(0,iO)}async function rO(t,i){return al(`${Vi}/students/${t}/recent-views`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:i})})}async function oO(t,i){return al(`${Vi}/students/${t}/favorites`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:i})})}async function tS(t,i){return al(`${Vi}/students/${t}/favorites/${i}`,{method:"DELETE"})}async function sO(t,i){return al(`${Vi}/students/${t}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:i})})}async function lO(t,i,r){const s=await al(`${Vi}/students/${t}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:i,newPassword:r})});if(!s.ok)throw new Error(typeof s.error=="string"?s.error:"비밀번호 변경에 실패했습니다.");return s}async function cO(t){return al(`${Vi}/students/${t}`,{method:"DELETE"})}const xg="os-student";function k_(t,i){return t.length===0?!1:i.length===0?!0:t[0]===i[0]?!1:t.indexOf(i[0])>0}function Ac(t){return{...t,favorites:Array.isArray(t.favorites)?t.favorites:[],recentViews:Array.isArray(t.recentViews)?t.recentViews:[]}}function uO(){try{const t=sessionStorage.getItem(xg);return t?Ac(JSON.parse(t)):null}catch{return null}}function jo(t){if(t){sessionStorage.setItem(xg,JSON.stringify(t));return}sessionStorage.removeItem(xg)}const nS=k.createContext(null);function dO({children:t}){const[i,r]=k.useState(uO);k.useEffect(()=>{let b=!1;return tO().then(y=>{if(!b){if(!y){jo(null),r(null);return}r(_=>{const T=Ac(y),E=_?{...T,recentViews:k_(_.recentViews,T.recentViews)?_.recentViews:T.recentViews}:T;return jo(E),E})}}).catch(()=>{b||(jo(null),r(null))}),()=>{b=!0}},[]);const s=b=>{const y=Ac(b);jo(y),r(y)},u=b=>{r(y=>{const _=Ac(b),T=y?{..._,recentViews:k_(y.recentViews,_.recentViews)?y.recentViews:_.recentViews}:_;return jo(T),T})},m=b=>{let y=!1;return r(_=>{if(!_||_.recentViews[0]===b)return _;y=!0;const T=Ac({..._,recentViews:aO(_.recentViews,b)});return jo(T),T}),y},p=()=>{eO(),jo(null),r(null)};return h.jsx(nS.Provider,{value:{student:i,isStudent:i!==null,loginStudent:s,updateStudent:u,prependRecentView:m,logoutStudent:p},children:t})}function xi(){const t=k.useContext(nS);if(!t)throw new Error("useStudentAuth는 StudentAuthProvider 안에서만 사용할 수 있습니다.");return t}const fO=x.div`
    width: 92%;
    height: 75vh;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    box-sizing: border-box;
    padding: 0 5%;

    @media (max-width: 767px) {
        width: 92%;
        height: 96%;
        left: 0;
        transform: none;
        padding: 0 5%;
    }
`,hO=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`,mO=x.p`
    color: black;
    font-weight: bolder;
    display: inline;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.3;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`,pO=x.p`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;

    &::after {
        content: '·';
        margin: 0 0.25rem;
        color: #8F8F8F;
    }

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,gO=x.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0.6rem;
`,vO=x.div`
    display: flex;
    align-items: center;
`,yO=x.button`
    width: 2rem;
    height: 2rem;
    padding: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${({$favorited:t})=>t?"/coloredLikeLogo.png":"/likeLogo.png"});
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border: 0.3px solid gray;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    box-shadow: none;

    &:focus, &:focus-visible, &:active {
        outline: none;
        box-shadow: none;
        border: 0.3px solid gray;
    }

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`,j_=x.div`
    display: flex;
    align-items: center;
    padding: 0;
`,bO=x.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,_O=x.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;
    
    &::before {
        content: '|';
        margin-left: 0.38rem;
    }

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,O_=x.div`
    width: 100%;
    height: 0.25vh;
    border-bottom: 0.5px solid black;
    margin-top: 0.4rem;
`,pp=x.h5`
    font-weight: bold;
    color: black;
    margin: 0.3rem 0;

    @media (max-width: 767px) {
        font-size: 0.85rem;
    }
`,z_=x.div`
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
`,wg=x.p`
    font-size: 0.85rem;
    color: black;
    margin: 0;
    color: gray;

    @media (max-width: 767px) {
        font-size: 0.75rem;
    }
`,xO=x(wg)`
    font-size: 0.6rem;
    color: black;
`,wO=x.p`
    color: #8F8F8F;
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 1rem;
`;function SO({store:t,language:i}){const{student:r,isStudent:s,updateStudent:u}=xi(),m=!!r?.favorites?.includes(t._id);async function p(){if(!s||!r?._id){alert(i==="eng"?"Please log in as a student to use favorites.":"즐겨찾기는 학생 로그인 후 이용할 수 있습니다.");return}try{const b=m?await tS(r._id,t._id):await oO(r._id,t._id);u(b)}catch(b){console.error(b);const y=b instanceof Error?b.message:"";if(y==="HTTP 404"||y.includes("Cannot POST")||y.includes("Cannot DELETE")){alert(i==="eng"?"The favorites API is missing. Restart the API server in the server folder.":"즐겨찾기 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.");return}if(y==="Failed to fetch"||y.includes("NetworkError")||y.includes("fetch")){alert(i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.");return}alert(i==="eng"?"Failed to update favorites.":"즐겨찾기 변경에 실패했습니다.")}}return h.jsxs(fO,{children:[h.jsx(Wj,{photoSrc:t.photo,storeAltName:i==="eng"?t.name.eng:t.name.kor}),h.jsxs(hO,{children:[h.jsxs(gO,{children:[h.jsx(vO,{children:h.jsxs(mO,{children:[i==="eng"?t.name.eng:t.name.kor,h.jsx(J1,{storeNaverMap:t.naverMap})]})}),h.jsx(yO,{type:"button",$favorited:m,onClick:()=>{p()}})]}),h.jsxs(j_,{children:[h.jsx(pO,{children:i==="eng"?t.branch.eng:t.branch.kor}),h.jsx(bO,{children:i==="eng"?t.theme?.eng:t.theme?.kor})]}),h.jsxs(j_,{children:[h.jsx(Q1,{openTime:t.openTime,closeTime:t.closeTime,language:i}),h.jsxs(_O,{children:[" ",t.openTime," - ",t.closeTime," "]})]}),h.jsx(O_,{}),h.jsxs(pp,{children:[" 🎓 ",i==="eng"?"SUNY Benefit":"SUNY 혜택"]}),h.jsxs(z_,{children:[h.jsx(wg,{children:i==="eng"?t.discount.eng:t.discount.kor}),h.jsx(xO,{children:i==="eng"?"*You must bring your SUNY student ID card to receive the discount.":"할인을 받기 위해서는 학생증을 필수 지참해야합니다."})]}),h.jsxs(pp,{children:[" ✅ ",i==="eng"?"Additional precautions":"추가 유의사항"," "]}),h.jsx(z_,{children:h.jsx(wg,{children:i==="eng"?t.description.eng:t.description.kor})}),h.jsx(O_,{}),h.jsxs(pp,{children:[" 🚡",i==="eng"?"Address":"주소"," "]}),h.jsxs(wO,{children:[" ",i==="eng"?t.address?.eng:t.address?.kor," "]})]})]})}const EO=x.div`
    position: relative;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    height: 98%;
    justify-content: flex-end;
    width: 100%;
`,TO=x(Vf)`
    z-index: 4;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;

    @media (max-width: 767px) {
        width: 1.3rem;
        height: 1.3rem;
    }
`;function iS({onClose:t}){return h.jsx(EO,{children:h.jsx(TO,{onClick:t})})}const CO=x.div`
    position: relative;
    width: 25%;
    height: 79vh;
    pointer-events: none;
    left: 2rem;
    padding-right: 1rem;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 48%;
        left: 1.5rem;
        padding-right: 0.75rem;
    }

    @media (max-width: 767px) {
        width: calc(100% - 1.2rem);
        left: 0.6rem;
        height: 100%;
        margin-left: 0.1rem;
        padding-right: 1.3rem;
    }
`,AO=x.div`
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    align-items: center;
`;function kO({className:t,onClose:i,store:r,language:s}){return h.jsx(CO,{className:t,children:h.jsxs(AO,{children:[h.jsx(SO,{store:r,language:s}),h.jsx(iS,{onClose:i??(()=>{})})]})})}const jO=x.img`
    margin-top: 3vh;

    @media (max-width: 767px) {
        margin-top: 2vh;
        max-width: 70%;
    }
`,OO=x.div`
    width: 92%;
    height: 75vh;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;

    @media (max-width: 767px) {
        width: 92%;
        height: 96%;
        left: 0;
        transform: none;
    }
`,zO=x.p`
    font-weight: bolder;
    padding: 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`,LO=x.p`
    font-size: 0.8rem;
    text-align: center;
    padding: 0.4rem 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 0.75rem;
        padding: 0.25rem 0;
    }
`,RO=x.div`
    padding: 0.3rem 1rem 0 1rem;
    margin: 0;
    font-size: 0.85rem;

    @media (max-width: 767px) {
        padding: 0.2rem 0.7rem 0 0.7rem;
        font-size: 0.75rem;
    }
`,Hd=x.a`
    width: 90%;
    height: 5vh;
    background-color: #D9D9D9;
    border-radius: 0;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    
    &, &:link, &:visited, &:hover, &:active {
        color: black;
        text-decoration: none;
    }

    @media (max-width: 767px) {
        height: 4.5vh;
        font-size: 0.65rem;
        margin-top: 1.2vh;
    }
`;function MO({language:t}){return h.jsxs(OO,{children:[h.jsx(jO,{src:"outstanding_logo.jpg",alt:"outstanding logo"}),h.jsx(zO,{children:t==="eng"?"What is 'Outstanding Spots'?":"Outstanding Spots란?"}),h.jsx(LO,{children:h.jsx(RO,{children:t==="eng"?h.jsxs(h.Fragment,{children:["Outstanding Spots is a web service for SUNY Korea students to find out the affiliate stores near SUNY Korea.",h.jsx("br",{}),"You can easily find out the store information and benefits through Outstanding Spots!"]}):h.jsxs(h.Fragment,{children:["Outstanding Spots는 한국뉴욕주립대학교 학생분들을 위한 제휴 매장 안내 웹서비스입니다.",h.jsx("br",{}),"학교와 제휴된 다양한 매장을 한눈에 확인하고, 학생들에게 제공되는 할인과 특별 혜택을 간편하게 찾아보세요!"]})})}),h.jsx(Hd,{href:"https://form.naver.com/response/6ZkQLf7FKUMSGLv4rgprCw",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Apply for Affiliate Store":"제휴 매장 신청하기"}),h.jsx(Hd,{href:"https://www.instagram.com/sunykorea_partnerships?igsh=MXdqZGJyZnRwMTMydg==",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Instagram":"인스타그램"}),h.jsx(Hd,{href:"https://pf.kakao.com/_EyprG",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"KakaoTalk":"카카오톡"}),h.jsx(Hd,{href:"https://docs.google.com/forms/d/e/1FAIpQLSesVboW69zSeb3O8Q1ZJwTF46rFmDj7v-SyL5S7NbLpj0Ql5Q/viewform",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Contract the developer":"개발자에게 문의하기"})]})}const IO=x.div`
    position: relative;
    width: 25%;
    height: 79vh;
    pointer-events: none;
    left: 2rem;
    padding-right: 1rem;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 48%;
        left: 1.5rem;
        padding-right: 0.75rem;
    }

    @media (max-width: 767px) {
        width: calc(100% - 1.2rem);
        left: 0.6rem;
        height: 100%;
        margin-left: 0.1rem;
        padding-right: 1.3rem;
    }
`,PO=x.div`
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    align-items: center;
`;function NO({className:t,onClose:i,language:r}){return h.jsx(IO,{className:t,children:h.jsxs(PO,{children:[h.jsx(MO,{language:r}),h.jsx(iS,{onClose:i??(()=>{})})]})})}const DO=x.div`
    width: 25%;
    height: 80vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    z-index: 3;

    @media(max-width: 1024px) and (min-width: 768px) {
        width: 50%;
    }

    @media(max-width: 767px) {
        width: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`,BO=x.p`
    font-weight: bolder;
    margin-bottom: 1vh;
    margin-top: 3vh;
`,UO=x.p`
    font-size: 0.8rem;
    margin-top: 1vh;
    text-align: center;
    margin-bottom: 3vh;
`,FO=x.button`
    width: 100%;
    font-size: 0.8rem;
    background-color: #EFEEEF;
    border-radius: 0;
    border: 0.3px solid black;
    padding: 3vh;
`;function HO({onOpen:t,language:i,stores:r}){const s=k.useMemo(()=>[...r].sort((u,m)=>{const p=i==="eng"?`${u.name.eng} ${u.branch.eng}`:`${u.name.kor} ${u.branch.kor}`,b=i==="eng"?`${m.name.eng} ${m.branch.eng}`:`${m.name.kor} ${m.branch.kor}`;return i==="eng"?p.localeCompare(b,"en"):p.localeCompare(b,"ko")}),[r,i]);return h.jsxs(DO,{children:[h.jsx(BO,{children:i==="eng"?"View all stores":"전체 매장 확인하기"}),h.jsxs(UO,{children:[i==="eng"?"It is arranged in alphabetical order.":"가나다 순으로 정렬되어 있습니다."," ",h.jsx("br",{})," ",i==="eng"?"Scroll through to find out more!":"스크롤을 통해 더 확인하세요!"]}),s.map(u=>h.jsxs(FO,{onClick:()=>{t?.(u)},children:[i==="eng"?u.name.eng:u.name.kor," ",i==="eng"?u.branch.eng:u.branch.kor]},u._id))]})}const $O=x.div`
    position: relative;
    width: 100%;
    height: 84vh;
    pointer-events: none;
`,VO=x(Vf)`
    z-index: 3;
    position: absolute;
    left: calc(25% + 1rem);
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;

    @media(max-width: 1024px) and (min-width: 768px) {
        left: calc(50% + 1rem);
    }

    @media(max-width: 767px) {
        left: 90%;
    }
`;function ZO({onOpen:t,onClose:i,language:r,stores:s}){return h.jsxs($O,{children:[h.jsx(HO,{onOpen:t,language:r,stores:s}),h.jsx(VO,{onClick:i})]})}const qO=x.div`
    pointer-events: none;

    & > div {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        border: 0.5px solid gray;
        padding: 0.2rem 0;
        padding-left: 1.3rem;
        background-color: white;
        opacity: 0.75;
        cursor: pointer;

        @media (max-width: 767px) {
            margin: 0 0.4rem;
        }
    }

    & > div.active {
        background-color: white;
        color: black;
    }
`;function GO({language:t,matchDataList:i,nowIndex:r,onSelectStore:s}){return h.jsx(qO,{id:"autocomplete",children:i.map((u,m)=>h.jsx("div",{className:m===r?"active":"",onMouseDown:p=>{p.preventDefault(),s(u)},children:t==="eng"?u.name.eng:u.name.kor},u._id))})}const YO=x.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    pointer-events: none;

    @media (max-width: 767px) {
        order: -1;
        width: 100%;
        flex: 1 0 100%;
    }
`,KO=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 2rem;
    padding: 0.25rem;
    pointer-events: auto;
`,WO=x.span`
    font-size: 1rem;
    color: #333;
`,XO=x.input`
    width: 100%;
    height: 2.7vh;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border: none;
    background-color: transparent;
    color: black;
    margin: 0 0.5rem;
    
    &::placeholder {
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;function JO({language:t,stores:i,onSelectStore:r,onQueryChange:s,persistSelectedName:u,engPlaceholder:m,korPlaceholder:p,className:b}){const[y,_]=k.useState([]),[T,E]=k.useState(0),[j,M]=k.useState(""),z=k.useRef(null),P=k.useRef(!1),H=()=>{P.current=!0,M(""),z.current&&(z.current.value=""),requestAnimationFrame(()=>{P.current=!1,M(""),z.current&&(z.current.value="")})},B=se=>{const Q=se.trim(),he=Q.toLowerCase();return Q?i.filter(Ce=>{const Ue=(t==="eng"?Ce.name.eng:Ce.name.kor).toLowerCase(),ve=Ce.theme?.kor??"",ke=Ce.theme?.eng?.toLowerCase()??"";return Ue.includes(he)||ve.includes(he)||ke.includes(he)}):[]},$=se=>{if(P.current=!0,u){const Q=t==="eng"?se.name.eng:se.name.kor;M(Q),z.current&&(z.current.value=Q),s?.(Q)}else H();_([]),E(0),z.current?.blur(),r?.(se),requestAnimationFrame(()=>{P.current=!1})},W=se=>{if(P.current)return;const Q=se.target.value;M(Q),E(0),_(B(Q)),s?.(Q)},ue=()=>{if(P.current)return;const se=z.current?.value??j;_(B(se)),s?.(se)},J=se=>{const Q=B(se.currentTarget.value);switch(se.keyCode){case 38:E(he=>Math.max(he-1,0)),_(Q);break;case 40:E(he=>Math.min(he+1,Math.max(Q.length-1,0))),_(Q);break;case 13:{const he=Q[T]??Q[0];he&&$(he);break}default:E(0),_(Q);break}};return h.jsxs(YO,{className:b,children:[h.jsxs(KO,{children:[h.jsx(WO,{children:" 🔍 "}),h.jsx(XO,{type:"text",id:"searchBar",ref:z,value:j,placeholder:t==="eng"?m:p,onChange:W,onCompositionEnd:ue,onKeyUp:J})]}),h.jsx(GO,{language:t,matchDataList:y,nowIndex:T,onSelectStore:$})]})}const QO=x.button`
    font-weight: bold;
    background-color: ${({$selected:t})=>t?"#E3E6FF":"white"};
    border: 0px solid black;
    border-radius: 0;
    padding: 0.5rem 0.6rem;
`;function L_({languageName:t,selected:i,onClick:r}){return h.jsx(QO,{$selected:i,onClick:r,children:t})}const E0=k.createContext(null);function ez({language:t,setLanguage:i,children:r}){return h.jsx(E0.Provider,{value:{language:t,setLanguage:i},children:r})}function ze(){const t=k.useContext(E0);if(!t)throw new Error("useLanguage는 LanguageProvider 안에서만 사용할 수 있습니다.");return t}const tz=x.div`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;function aS({className:t,language:i,onChangeLanguage:r}){const s=k.useContext(E0),u=i??s?.language??"kor",m=p=>{s?.setLanguage(p),r?.(p)};return h.jsxs(tz,{className:t,children:[h.jsx(L_,{languageName:"KOR",selected:u==="kor",onClick:()=>m("kor")}),h.jsx(L_,{languageName:"ENG",selected:u==="eng",onClick:()=>m("eng")})]})}const T0=`즐거운 이용 되세요!
Enjoy the service!`,rS=k.createContext(null),nz="https://outstandingspots-production.up.railway.app";function iz({children:t}){const[i,r]=k.useState([]),[s,u]=k.useState(`매장 정보를 불러오는 중입니다
Loading store information`);k.useEffect(()=>{const y=new AbortController;return $i(`${nz}/stores`,{signal:y.signal}).then(_=>{r(_),u(T0)}).catch(_=>{y.signal.aborted||(console.error(_),u(`다시 시도해주세요
Try again`))}),()=>y.abort()},[]);const m=y=>{r(_=>[..._,y])},p=y=>{r(_=>_.map(T=>T._id===y._id?y:T))},b=async y=>{await Gj(y._id),r(_=>_.filter(T=>T._id!==y._id))};return h.jsx(rS.Provider,{value:{stores:i,loadingState:s,addStore:m,updateStore:p,deleteStore:b},children:t})}function wi(){const t=k.useContext(rS);if(!t)throw new Error("useStores는 StoresProvider 안에서만 사용할 수 있습니다.");return t}const oS=k.createContext(null),az="https://outstandingspots-production.up.railway.app";function rz({children:t}){const[i,r]=k.useState([]);return k.useEffect(()=>{const s=new AbortController;return $i(`${az}/categories`,{signal:s.signal}).then(u=>{r(u)}).catch(u=>{s.signal.aborted||console.error(u)}),()=>s.abort()},[]),h.jsx(oS.Provider,{value:{categories:i},children:t})}function tu(){const t=k.useContext(oS);if(!t)throw new Error("useCategories는 CategoryProvider 안에서만 사용할 수 있습니다.");return t}const oz=x.div`
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 0;
`,sz=x(Fj)`
    position: absolute;
    inset: 0;
    z-index: 1;
`,lz=x(pj)`
    position: absolute;
    left: 0;
    z-index: 2;
    pointer-events: auto;

    @media (max-width: 767px) {
        position: relative;
        left: auto;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        button {
            margin-bottom: 0;
            width: 2.8rem;
            height: 2.8rem;
            font-size: 1.2rem;
        }
    }
`,cz=x(kO)`
    position: absolute;
    z-index: 4;
`,uz=x(NO)`
    position: absolute;
    z-index: 3;
`,dz=x.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 2rem;
    pointer-events: none;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0.6rem 0.6rem 0;
        gap: 0.5rem 0;
    }
`,fz=x(aS)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    display: none;

    @media (max-width: 767px) {
        scale: 0.8;
        display: block;
    }
`,hz=x.div`
    position: absolute;
    bottom: 2.5%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem; 
    width: 100%;
    height: 40%;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }

    @media (max-width: 767px) {
        bottom: 0;
        padding-bottom: 0.25rem;
    }
`,mz=nj`
    0% {
        opacity: 1;
    }
    12.5% {
        transform: scale(1.2);
    }
    25% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`,pz=x.div`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;

    @media (max-width: 47.9375rem) {
        font-size: 1rem;
    }
`,gz=x.button`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;
    cursor: pointer;

    @media (max-width: 47.9375rem) {
        font-size: 1rem;
    }
`,vz=x.div`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    height: 15%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;
    ${({$animate:t})=>t&&x0`
            animation: ${mz} 3s ease-out forwards;
        `}

    @media (max-width: 47.9375rem) {
        height: auto;
        width: fit-content;
        max-width: calc(100% - 3rem);
        margin: 0 1.5rem;
        padding: 0.9rem 1.5rem;
        font-size: 0.95rem;
        line-height: 1.55;
        display: block;
        text-align: center;
        white-space: pre-line;
        box-sizing: border-box;
    }
`;function yz({className:t,language:i,onChangeLanguage:r}){const{stores:s,loadingState:u}=wi(),{categories:m}=tu(),{student:p,isStudent:b,updateStudent:y,prependRecentView:_}=xi(),T=k.useRef(Promise.resolve()),[E]=H2(),j=E.get("store"),[M,z]=k.useState(null),[P,H]=k.useState([]),[B,$]=k.useState(!1),[W,ue]=k.useState(!1),[J,se]=k.useState(!1),[Q,he]=k.useState(!0),[Ce,Ue]=k.useState(null),[ve,ke]=k.useState(!1),ge=k.useCallback(O=>{if(!b||!p?._id||!_(O._id))return;const ie=p._id;T.current=T.current.catch(()=>{}).then(()=>rO(ie,O._id)).then(y).catch(oe=>{console.error(oe)})},[b,p?._id,_,y]),ae=k.useRef(ge);ae.current=ge;const je=k.useCallback(O=>{z(O),se(!1),ge(O)},[ge]);k.useEffect(()=>{if(!j||s.length===0)return;const O=s.find(Y=>Y._id===j);O&&(z(O),se(!1),ae.current(O))},[j,s]);const D=k.useCallback(()=>{if(!B&&!b){alert(i==="eng"?"Please log in as a student to see favorite stores.":"즐겨찾기한 매장은 학생 로그인 후 볼 수 있습니다.");return}$(O=>!O),z(O=>!O||B||(p?.favorites??[]).includes(O._id)?O:null)},[B,b,i,p?.favorites]),le=k.useCallback(()=>{ke(!0),navigator.geolocation.getCurrentPosition(O=>{Ue([O.coords.latitude,O.coords.longitude])},O=>{console.error(O),ke(!1)})},[]),re=k.useCallback(()=>{ke(!1)},[]),Me=k.useCallback(()=>{Ue(null),ke(!1)},[]),ce=u===T0;return h.jsxs(oz,{className:t,children:[M&&h.jsx(cz,{store:M,onClose:()=>z(null),language:i}),W&&h.jsx(uz,{onClose:()=>ue(!1),language:i}),h.jsx(sz,{onSelectStore:je,selectedCategory:P,selectedStore:M,stores:s,userLocation:Ce,language:i,onUserMoveEnd:re,showSchoolReturn:!!Ce&&!ve,favoriteIds:p?.favorites??[],favoritesOnly:B}),h.jsxs(dz,{children:[h.jsx(lz,{onOpenWebsiteInfo:()=>ue(!0),onMyLocation:le,onToggleFavorites:D,favoritesOnly:B}),h.jsx(JO,{language:i,stores:s,onSelectStore:je,engPlaceholder:"Search by store name or theme.",korPlaceholder:"매장 이름 혹은 테마로 검색해보세요."}),h.jsx(fz,{language:i,onChangeLanguage:r})]}),J&&h.jsx(ZO,{onOpen:je,onClose:()=>se(!1),language:i,stores:s}),h.jsxs(hz,{children:[ve&&h.jsx(pz,{children:i==="eng"?"Moving to your location":"내 위치로 이동 중입니다"}),Ce&&!ve&&h.jsx(gz,{type:"button",onClick:Me,children:i==="eng"?"Return to school":"학교 위치로 이동"}),Q&&h.jsx(vz,{$animate:ce,onAnimationEnd:()=>{ce&&he(!1)},children:u}),h.jsx(fj,{selectedCategory:P,onSelectCategory:O=>{H(Y=>[...Y,O])},onRemoveCategory:O=>{H(Y=>Y.filter(ie=>ie!==O))},language:i,categories:m})]})]})}const bz=x.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
`;function _z(){const{language:t,setLanguage:i}=ze();return h.jsx(bz,{children:h.jsx(yz,{language:t,onChangeLanguage:i})})}const xz=x.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
    padding: 0.8rem 0 0.8rem 0;
    cursor: pointer;

    @media (max-width: 767px) {
        ${({$compactOnMobile:t})=>t&&`
            padding: 0.45rem 0;
        `}
    }
`,wz=x.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    object-fit: contain;

    @media (max-width: 767px) {
        ${({$compactOnMobile:t})=>t&&`
            width: 2.1rem;
            height: 2.1rem;
        `}
    }
`,Sz=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,Ez=x.h1`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;

    @media (max-width: 767px) {
        ${({$compactOnMobile:t})=>t&&`
            font-size: 1.05rem;
            line-height: 1.2;
        `}
    }
`,Tz=x.p`
    color: gray;
    margin: 0;
    font-size: 0.75rem;
    text-align: left;

    @media (max-width: 767px) {
        ${({$compactOnMobile:t})=>t&&`
            font-size: 0.68rem;
            line-height: 1.25;
            white-space: nowrap;
        `}
    }
`,Cz=x.br`
    display: none;

    @media (max-width: 767px) {
        display: ${({$show:t})=>t?"block":"none"};
    }
`;function Az({language:t,breakSubtitleOnMobile:i=!1,compactOnMobile:r=!1}){return h.jsxs(xz,{$compactOnMobile:r,onClick:()=>window.location.reload(),children:[h.jsx(wz,{$compactOnMobile:r,src:"/headerIcon.png",alt:"Outstanding Spots"}),h.jsxs(Sz,{children:[h.jsx(Ez,{$compactOnMobile:r,children:" Outstanding Spots "}),h.jsxs(Tz,{$compactOnMobile:r,children:[t==="eng"?"SUNY Korea Nearby Partner Stores":"SUNY Korea 주변 제휴 매장"," ",h.jsx(Cz,{$show:i}),t==="eng"?"Info":"안내 서비스"]})]})]})}const kz=x(Ta)`
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding-top: 0.5rem;
    margin: 0;
    border: none;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover, &:focus {
        border: none;
        outline: none;
        box-shadow: none;
        background-color: transparent;
        color: inherit;
        text-decoration: none;
    }
`,jz=x.p`
    font-weight: bold;
    margin: 0;
    color: ${({$clicked:t})=>t?"#7965EA":"black"};
`;function gp({navName:t,clicked:i,link:r,onClick:s}){return h.jsx(kz,{to:r,onClick:s,children:h.jsxs(jz,{$clicked:i,children:[" ",t," "]})})}const C0="https://outstandingspots-production.up.railway.app";async function Oz(t,i){const r=await fetch(`${C0}/admin/login`,fn({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:i})})),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:"INVALID_ADMIN");nl("admin",s)}async function zz(){const t=await fetch(`${C0}/admin/session`,fn()),i=await t.json().catch(()=>({}));return t.ok?(nl("admin",i),!0):(Mr("admin"),!1)}async function Lz(){await fetch(`${C0}/admin/logout`,fn({method:"POST"})),Mr("admin")}const sS=k.createContext(null);function Rz({children:t}){const[i,r]=k.useState(!1),[s,u]=k.useState(!0);k.useEffect(()=>{let b=!1;return zz().then(y=>{b||(r(y),u(!1))}).catch(()=>{b||(r(!1),u(!1))}),()=>{b=!0}},[]);const m=()=>{r(!0),u(!1)},p=()=>{Lz(),r(!1),u(!1)};return h.jsx(sS.Provider,{value:{isAdmin:i,isCheckingAdmin:s,loginAdmin:m,logoutAdmin:p},children:t})}function nu(){const t=k.useContext(sS);if(!t)throw new Error("useAdminAuth는 AdminAuthProvider 안에서만 사용할 수 있습니다.");return t}const Zi="https://outstandingspots-production.up.railway.app";async function Mz(t,i){const r=await fetch(`${Zi}/owners`,fn({method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(t)})),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}class qc extends Error{status;constructor(i){super(i),this.status=i}}async function lS(t,i){const r=await fetch(`${Zi}/owners/login`,fn({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:i})})),s=await r.json().catch(()=>({}));if(r.status===403&&(s.status==="pending"||s.status==="rejected"))throw new qc(s.status);if(!r.ok)throw new qc("invalid");return nl("owner",s)}async function Iz(){await fetch(`${Zi}/owners/logout`,fn({method:"POST"})),Mr("owner")}async function Pz(){const t=await fetch(`${Zi}/owners/session`,fn());if(!t.ok)return Mr("owner"),null;const i=await t.json().catch(()=>null);return i?nl("owner",i):(Mr("owner"),null)}async function R_(){return $i(`${Zi}/owners`)}function cS(t){return/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(t)}async function qf(t,i){const r=await fetch(t,fn(i)),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}async function Nz(t,i){return qf(`${Zi}/owners/${t}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})})}async function Dz(t,i){return qf(`${Zi}/owners/${t}/phone`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({})})}async function Bz(t,i,r){const s=await qf(`${Zi}/owners/${t}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:i,newPassword:r})});if(!s.ok)throw new Error(typeof s.error=="string"?s.error:"비밀번호 변경에 실패했습니다.");return s}async function Uz(t){return qf(`${Zi}/owners/${t}`,{method:"DELETE"})}async function Fz(t,i){return $i(`${Zi}/owners/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:i})})}const Sg="os-owner";function Hz(){try{const t=sessionStorage.getItem(Sg);return t?JSON.parse(t):null}catch{return null}}function pc(t){if(t){sessionStorage.setItem(Sg,JSON.stringify(t));return}sessionStorage.removeItem(Sg)}const uS=k.createContext(null);function $z({children:t}){const[i,r]=k.useState(Hz);k.useEffect(()=>{let p=!1;return Pz().then(b=>{p||(pc(b),r(b))}).catch(()=>{p||(pc(null),r(null))}),()=>{p=!0}},[]);const s=p=>{pc(p),r(p)},u=p=>{pc(p),r(p)},m=()=>{Iz(),pc(null),r(null)};return h.jsx(uS.Provider,{value:{owner:i,isOwner:i!==null,loginOwner:s,updateOwner:u,logoutOwner:m},children:t})}function Dr(){const t=k.useContext(uS);if(!t)throw new Error("useOwnerAuth는 OwnerAuthProvider 안에서만 사용할 수 있습니다.");return t}const Vz=x.div`
    width: 100%;
    flex-shrink: 0;
    min-height: 8svh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: visible;
    border-bottom: 4px solid #A79AF5;
    padding: 0 0.8rem;

    @media (max-width: 767px) {
        ${({$innerMobile:t})=>t&&`
            align-items: center;
            min-height: 0;
        `}
    }
`,Zz=x.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-width: 0;

    @media (max-width: 767px) {
        ${({$innerMobile:t})=>t&&"flex: 1;"}
    }
`,qz=x.div`
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    align-items: stretch;

    @media (max-width: 767px) {
        display: none;
    }
`,Gz=x.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
        gap: 0.4rem;
        display: ${({$hideOnMobileMap:t})=>t?"none":"flex"};
    }
`,Yz=x(aS)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    scale: 0.7;

    @media (max-width: 767px) {
        ${({$innerMobile:t})=>t?`
            scale: none;
            transform: none;
            flex-shrink: 0;
            align-self: center;
            padding: 0.12rem 0.16rem;

            button {
                padding: 0.22rem 0.34rem;
                font-size: 0.72rem;
            }
        `:`
            scale: 0.8;
        `}
    }
`;function Kz({language:t,onChangeLanguage:i}){const{pathname:r}=tn(),{isAdmin:s}=nu(),{isOwner:u}=Dr(),{isStudent:m}=xi(),p=s?"/admin":u?"/owner":m?"/student":"/login",b=r==="/login"||r.startsWith("/signup")||r.startsWith("/admin")||r.startsWith("/owner")||r.startsWith("/student"),y=r!=="/";return h.jsxs(Vz,{$innerMobile:y,children:[h.jsxs(Zz,{$innerMobile:y,children:[h.jsx(Az,{language:t,compactOnMobile:y}),h.jsxs(qz,{children:[h.jsx(gp,{navName:t==="eng"?"Map":"지도",clicked:r==="/",link:"/",onClick:()=>{}}),h.jsx(gp,{navName:t==="eng"?"My page":"마이페이지",clicked:b,link:p,onClick:()=>{}}),h.jsx(gp,{navName:t==="eng"?"Stores":"전체 매장",clicked:r.startsWith("/stores"),link:"/stores",onClick:()=>{}})]})]}),h.jsx(Gz,{$hideOnMobileMap:r==="/",children:h.jsx(Yz,{$innerMobile:y,language:t,onChangeLanguage:i})})]})}const Wz=x.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,Xz=x.img`
    width: 1.5rem;
    height: 1.5rem;
`,Jz=x.p`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`,Qz=x.span`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;function e5(){return h.jsxs(Wz,{children:[h.jsx(Xz,{src:"/mortarboardIcon.png",alt:"mortarboard icon"}),h.jsxs(Jz,{children:[" Only for ",h.jsx(Qz,{children:" SUNY Korea "})," students "]})]})}const t5="https://docs.google.com/document/d/1C7lhu1tltYpBHycepeHe6eppXDr8pjKsM8JdEsQmTr8/edit?usp=sharing",n5=x.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`,i5=x.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
`,a5=x.img`
    width: 1.5rem;
    height: 1.5rem;
`,r5=x.p`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`,o5=x.span`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;function s5(){const{language:t}=ze();return h.jsx(n5,{children:h.jsxs(i5,{href:t5,target:"_blank",rel:"noopener noreferrer",children:[h.jsx(a5,{src:"/fileIcon.png",alt:t==="eng"?"Korean web user guide":"한글 웹 사용 설명서"}),h.jsxs(r5,{children:[t==="eng"?"Korean Web ":"한글 웹 ",h.jsxs(o5,{children:[" ",t==="eng"?"User Guide":"사용 설명서"," "]})]})]})})}const l5=x.div`
    background-color: #FAF9FE;
    min-height: 3rem;
    flex-shrink: 0;
    box-sizing: border-box;
    border-top: 1.5px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.55rem 1rem;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;function c5(){return h.jsxs(l5,{children:[h.jsx(e5,{}),h.jsx(s5,{})]})}const u5=x.div`
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    background-color: white;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`,d5=x.ul`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`,vp=x.li`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #333;
    padding: 0.4rem 0;

    &:last-child {
        border-right: none;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        text-decoration: none;

        &, &:link, &:visited, &:hover, &:active {
            color: black;
            text-decoration: none;
        }
    }
`,yp=x.img`
    width: 1rem;
    height: 1rem;
    display: block;

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`;function f5(){const{pathname:t}=tn(),{isAdmin:i}=nu(),{isOwner:r}=Dr(),{isStudent:s}=xi(),u=i?"/admin":r?"/owner":s?"/student":"/login",p=t==="/login"||t.startsWith("/signup")||t.startsWith("/admin")||t.startsWith("/owner")||t.startsWith("/student")?"/coloredMyPageIcon.png":"/myPageIcon.png",b=t==="/"?"/clickedMapPageIcon.png":"/mapPageIcon.png",_=t.startsWith("/stores")?"/coloredStoreIcon.png":"/storePageIcon.png";return h.jsx(u5,{children:h.jsx("nav",{id:"navbar",children:h.jsxs(d5,{children:[h.jsx(vp,{children:h.jsxs(Ta,{to:u,children:[" ",h.jsx(yp,{src:p,alt:"My page icon"})," "]})}),h.jsx(vp,{children:h.jsxs(Ta,{to:"/",children:[" ",h.jsx(yp,{src:b,alt:"Map page icon"})," "]})}),h.jsx(vp,{children:h.jsxs(Ta,{to:"/stores",children:[" ",h.jsx(yp,{src:_,alt:"Store page icon"})," "]})})]})})})}var h5={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},m5={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},p5={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},g5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},v5={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]};const Tn={fad:{user:p5},fas:{lock:v5,check:m5,xmark:g5},far:{eye:h5}};function Eg(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,s=Array(i);r<i;r++)s[r]=t[r];return s}function y5(t){if(Array.isArray(t))return t}function b5(t){if(Array.isArray(t))return Eg(t)}function _5(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function x5(t,i){for(var r=0;r<i.length;r++){var s=i[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,dS(s.key),s)}}function w5(t,i,r){return i&&x5(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function of(t,i){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=A0(t))||i){r&&(t=r);var s=0,u=function(){};return{s:u,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(y){throw y},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m,p=!0,b=!1;return{s:function(){r=r.call(t)},n:function(){var y=r.next();return p=y.done,y},e:function(y){b=!0,m=y},f:function(){try{p||r.return==null||r.return()}finally{if(b)throw m}}}}function Ae(t,i,r){return(i=dS(i))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,t}function S5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function E5(t,i){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,u,m,p,b=[],y=!0,_=!1;try{if(m=(r=r.call(t)).next,i===0){if(Object(r)!==r)return;y=!1}else for(;!(y=(s=m.call(r)).done)&&(b.push(s.value),b.length!==i);y=!0);}catch(T){_=!0,u=T}finally{try{if(!y&&r.return!=null&&(p=r.return(),Object(p)!==p))return}finally{if(_)throw u}}return b}}function T5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M_(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,s)}return r}function de(t){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?M_(Object(r),!0).forEach(function(s){Ae(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M_(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function Gf(t,i){return y5(t)||E5(t,i)||A0(t,i)||T5()}function _i(t){return b5(t)||S5(t)||A0(t)||C5()}function A5(t,i){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function dS(t){var i=A5(t,"string");return typeof i=="symbol"?i:i+""}function yf(t){"@babel/helpers - typeof";return yf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},yf(t)}function A0(t,i){if(t){if(typeof t=="string")return Eg(t,i);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Eg(t,i):void 0}}var I_=function(){},k0={},fS={},hS=null,mS={mark:I_,measure:I_};try{typeof window<"u"&&(k0=window),typeof document<"u"&&(fS=document),typeof MutationObserver<"u"&&(hS=MutationObserver),typeof performance<"u"&&(mS=performance)}catch{}var k5=k0.navigator||{},P_=k5.userAgent,N_=P_===void 0?"":P_,Ir=k0,gt=fS,D_=hS,$d=mS;Ir.document;var Ra=!!gt.documentElement&&!!gt.head&&typeof gt.addEventListener=="function"&&typeof gt.createElement=="function",pS=~N_.indexOf("MSIE")||~N_.indexOf("Trident/"),Vd,j5=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,O5=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,gS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},z5={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],en="classic",iu="duotone",yS="sharp",bS="sharp-duotone",_S="chisel",xS="etch",wS="graphite",SS="jelly",ES="jelly-duo",TS="jelly-fill",CS="mosaic",AS="notdog",kS="notdog-duo",jS="pixel",OS="slab",zS="slab-duo",LS="slab-press",RS="slab-press-duo",MS="thumbprint",IS="utility",PS="utility-duo",NS="utility-fill",DS="vellum",BS="whiteboard",L5="Classic",R5="Duotone",M5="Sharp",I5="Sharp Duotone",P5="Chisel",N5="Etch",D5="Graphite",B5="Jelly",U5="Jelly Duo",F5="Jelly Fill",H5="Mosaic",$5="Notdog",V5="Notdog Duo",Z5="Pixel",q5="Slab",G5="Slab Duo",Y5="Slab Press",K5="Slab Press Duo",W5="Thumbprint",X5="Utility",J5="Utility Duo",Q5="Utility Fill",eL="Vellum",tL="Whiteboard",US=[en,iu,yS,bS,_S,xS,wS,SS,ES,TS,CS,AS,kS,jS,OS,zS,LS,RS,MS,IS,PS,NS,DS,BS];Vd={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Vd,en,L5),iu,R5),yS,M5),bS,I5),_S,P5),xS,N5),wS,D5),SS,B5),ES,U5),TS,F5),Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Vd,CS,H5),AS,$5),kS,V5),jS,Z5),OS,q5),zS,G5),LS,Y5),RS,K5),MS,W5),IS,X5),Ae(Ae(Ae(Ae(Vd,PS,J5),NS,Q5),DS,eL),BS,tL);var nL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},iL={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},aL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),rL={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},FS=["fak","fa-kit","fakd","fa-kit-duotone"],B_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oL=["kit"],sL="kit",lL="kit-duotone",cL="Kit",uL="Kit Duotone";Ae(Ae({},sL,cL),lL,uL);var dL={kit:{"fa-kit":"fak"}},fL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hL={kit:{fak:"fa-kit"}},U_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Zd,qd={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],pL="classic",gL="duotone",vL="sharp",yL="sharp-duotone",bL="chisel",_L="etch",xL="graphite",wL="jelly",SL="jelly-duo",EL="jelly-fill",TL="mosaic",CL="notdog",AL="notdog-duo",kL="pixel",jL="slab",OL="slab-duo",zL="slab-press",LL="slab-press-duo",RL="thumbprint",ML="utility",IL="utility-duo",PL="utility-fill",NL="vellum",DL="whiteboard",BL="Classic",UL="Duotone",FL="Sharp",HL="Sharp Duotone",$L="Chisel",VL="Etch",ZL="Graphite",qL="Jelly",GL="Jelly Duo",YL="Jelly Fill",KL="Mosaic",WL="Notdog",XL="Notdog Duo",JL="Pixel",QL="Slab",e3="Slab Duo",t3="Slab Press",n3="Slab Press Duo",i3="Thumbprint",a3="Utility",r3="Utility Duo",o3="Utility Fill",s3="Vellum",l3="Whiteboard";Zd={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Zd,pL,BL),gL,UL),vL,FL),yL,HL),bL,$L),_L,VL),xL,ZL),wL,qL),SL,GL),EL,YL),Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Zd,TL,KL),CL,WL),AL,XL),kL,JL),jL,QL),OL,e3),zL,t3),LL,n3),RL,i3),ML,a3),Ae(Ae(Ae(Ae(Zd,IL,r3),PL,o3),NL,s3),DL,l3);var c3="kit",u3="kit-duotone",d3="Kit",f3="Kit Duotone";Ae(Ae({},c3,d3),u3,f3);var h3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},m3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Tg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},p3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],HS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(mL,p3),g3=["solid","regular","light","thin","duotone","brands","semibold"],$S=[1,2,3,4,5,6,7,8,9,10],v3=$S.concat([11,12,13,14,15,16,17,18,19,20]),y3=["aw","fw","pull-left","pull-right"],b3=[].concat(_i(Object.keys(m3)),g3,y3,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",qd.GROUP,qd.SWAP_OPACITY,qd.PRIMARY,qd.SECONDARY]).concat($S.map(function(t){return"".concat(t,"x")})).concat(v3.map(function(t){return"w-".concat(t)})),_3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ka="___FONT_AWESOME___",Cg=16,VS="fa",ZS="svg-inline--fa",Do="data-fa-i2svg",Ag="data-fa-pseudo-element",x3="data-fa-pseudo-element-pending",j0="data-prefix",O0="data-icon",F_="fontawesome-i2svg",w3="async",S3=["HTML","HEAD","STYLE","SCRIPT"],qS=["::before","::after",":before",":after"],GS=(function(){try{return!0}catch{return!1}})();function au(t){return new Proxy(t,{get:function(r,s){return s in r?r[s]:r[en]}})}var YS=de({},gS);YS[en]=de(de(de(de({},{"fa-duotone":"duotone"}),gS[en]),B_.kit),B_["kit-duotone"]);var E3=au(YS),kg=de({},rL);kg[en]=de(de(de(de({},{duotone:"fad"}),kg[en]),U_.kit),U_["kit-duotone"]);var H_=au(kg),jg=de({},Tg);jg[en]=de(de({},jg[en]),hL.kit);var z0=au(jg),Og=de({},h3);Og[en]=de(de({},Og[en]),dL.kit);au(Og);var T3=j5,KS="fa-layers-text",C3=O5,A3=de({},nL);au(A3);var k3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bp=z5,j3=[].concat(_i(oL),_i(b3)),Rc=Ir.FontAwesomeConfig||{};function O3(t){var i=gt.querySelector("script["+t+"]");if(i)return i.getAttribute(t)}function z3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(gt&&typeof gt.querySelector=="function"){var L3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];L3.forEach(function(t){var i=Gf(t,2),r=i[0],s=i[1],u=z3(O3(r));u!=null&&(Rc[s]=u)})}var WS={styleDefault:"solid",familyDefault:en,cssPrefix:VS,replacementClass:ZS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rc.familyPrefix&&(Rc.cssPrefix=Rc.familyPrefix);var Gs=de(de({},WS),Rc);Gs.autoReplaceSvg||(Gs.observeMutations=!1);var Te={};Object.keys(WS).forEach(function(t){Object.defineProperty(Te,t,{enumerable:!0,set:function(r){Gs[t]=r,Mc.forEach(function(s){return s(Te)})},get:function(){return Gs[t]}})});Object.defineProperty(Te,"familyPrefix",{enumerable:!0,set:function(i){Gs.cssPrefix=i,Mc.forEach(function(r){return r(Te)})},get:function(){return Gs.cssPrefix}});Ir.FontAwesomeConfig=Te;var Mc=[];function R3(t){return Mc.push(t),function(){Mc.splice(Mc.indexOf(t),1)}}var Os=Cg,Hi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M3(t){if(!(!t||!Ra)){var i=gt.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=t;for(var r=gt.head.childNodes,s=null,u=r.length-1;u>-1;u--){var m=r[u],p=(m.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(s=m)}return gt.head.insertBefore(i,s),t}}var I3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $_(){for(var t=12,i="";t-- >0;)i+=I3[Math.random()*62|0];return i}function rl(t){for(var i=[],r=(t||[]).length>>>0;r--;)i[r]=t[r];return i}function L0(t){return t.classList?rl(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(i){return i})}function XS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P3(t){return Object.keys(t||{}).reduce(function(i,r){return i+"".concat(r,'="').concat(XS(t[r]),'" ')},"").trim()}function Yf(t){return Object.keys(t||{}).reduce(function(i,r){return i+"".concat(r,": ").concat(t[r].trim(),";")},"")}function R0(t){return t.size!==Hi.size||t.x!==Hi.x||t.y!==Hi.y||t.rotate!==Hi.rotate||t.flipX||t.flipY}function N3(t){var i=t.transform,r=t.containerWidth,s=t.iconWidth,u={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),b="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(m," ").concat(p," ").concat(b)},_={transform:"translate(".concat(s/2*-1," -256)")};return{outer:u,inner:y,path:_}}function D3(t){var i=t.transform,r=t.width,s=r===void 0?Cg:r,u=t.height,m=u===void 0?Cg:u,p="";return pS?p+="translate(".concat(i.x/Os-s/2,"em, ").concat(i.y/Os-m/2,"em) "):p+="translate(calc(-50% + ".concat(i.x/Os,"em), calc(-50% + ").concat(i.y/Os,"em)) "),p+="scale(".concat(i.size/Os*(i.flipX?-1:1),", ").concat(i.size/Os*(i.flipY?-1:1),") "),p+="rotate(".concat(i.rotate,"deg) "),p}var B3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function JS(){var t=VS,i=ZS,r=Te.cssPrefix,s=Te.replacementClass,u=B3;if(r!==t||s!==i){var m=new RegExp("\\.".concat(t,"\\-"),"g"),p=new RegExp("\\--".concat(t,"\\-"),"g"),b=new RegExp("\\.".concat(i),"g");u=u.replace(m,".".concat(r,"-")).replace(p,"--".concat(r,"-")).replace(b,".".concat(s))}return u}var V_=!1;function _p(){Te.autoAddCss&&!V_&&(M3(JS()),V_=!0)}var U3={mixout:function(){return{dom:{css:JS,insertCss:_p}}},hooks:function(){return{beforeDOMElementCreation:function(){_p()},beforeI2svg:function(){_p()}}}},ja=Ir||{};ja[ka]||(ja[ka]={});ja[ka].styles||(ja[ka].styles={});ja[ka].hooks||(ja[ka].hooks={});ja[ka].shims||(ja[ka].shims=[]);var pi=ja[ka],QS=[],eE=function(){gt.removeEventListener("DOMContentLoaded",eE),bf=1,QS.map(function(i){return i()})},bf=!1;Ra&&(bf=(gt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(gt.readyState),bf||gt.addEventListener("DOMContentLoaded",eE));function F3(t){Ra&&(bf?setTimeout(t,0):QS.push(t))}function ru(t){var i=t.tag,r=t.attributes,s=r===void 0?{}:r,u=t.children,m=u===void 0?[]:u;return typeof t=="string"?XS(t):"<".concat(i," ").concat(P3(s),">").concat(m.map(ru).join(""),"</").concat(i,">")}function Z_(t,i,r){if(t&&t[i]&&t[i][r])return{prefix:i,iconName:r,icon:t[i][r]}}var xp=function(i,r,s,u){var m=Object.keys(i),p=m.length,b=r,y,_,T;for(s===void 0?(y=1,T=i[m[0]]):(y=0,T=s);y<p;y++)_=m[y],T=b(T,i[_],_,i);return T};function tE(t){return _i(t).length!==1?null:t.codePointAt(0).toString(16)}function q_(t){return Object.keys(t).reduce(function(i,r){var s=t[r],u=!!s.icon;return u?i[s.iconName]=s.icon:i[r]=s,i},{})}function zg(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,u=s===void 0?!1:s,m=q_(i);typeof pi.hooks.addPack=="function"&&!u?pi.hooks.addPack(t,q_(i)):pi.styles[t]=de(de({},pi.styles[t]||{}),m),t==="fas"&&zg("fa",i)}var Gc=pi.styles,H3=pi.shims,nE=Object.keys(z0),$3=nE.reduce(function(t,i){return t[i]=Object.keys(z0[i]),t},{}),M0=null,iE={},aE={},rE={},oE={},sE={};function V3(t){return~j3.indexOf(t)}function Z3(t,i){var r=i.split("-"),s=r[0],u=r.slice(1).join("-");return s===t&&u!==""&&!V3(u)?u:null}var lE=function(){var i=function(m){return xp(Gc,function(p,b,y){return p[y]=xp(b,m,{}),p},{})};iE=i(function(u,m,p){if(m[3]&&(u[m[3]]=p),m[2]){var b=m[2].filter(function(y){return typeof y=="number"});b.forEach(function(y){u[y.toString(16)]=p})}return u}),aE=i(function(u,m,p){if(u[p]=p,m[2]){var b=m[2].filter(function(y){return typeof y=="string"});b.forEach(function(y){u[y]=p})}return u}),sE=i(function(u,m,p){var b=m[2];return u[p]=p,b.forEach(function(y){u[y]=p}),u});var r="far"in Gc||Te.autoFetchSvg,s=xp(H3,function(u,m){var p=m[0],b=m[1],y=m[2];return b==="far"&&!r&&(b="fas"),typeof p=="string"&&(u.names[p]={prefix:b,iconName:y}),typeof p=="number"&&(u.unicodes[p.toString(16)]={prefix:b,iconName:y}),u},{names:{},unicodes:{}});rE=s.names,oE=s.unicodes,M0=Kf(Te.styleDefault,{family:Te.familyDefault})};R3(function(t){M0=Kf(t.styleDefault,{family:Te.familyDefault})});lE();function I0(t,i){return(iE[t]||{})[i]}function q3(t,i){return(aE[t]||{})[i]}function Ro(t,i){return(sE[t]||{})[i]}function cE(t){return rE[t]||{prefix:null,iconName:null}}function G3(t){var i=oE[t],r=I0("fas",t);return i||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Pr(){return M0}var uE=function(){return{prefix:null,iconName:null,rest:[]}};function Y3(t){var i=en,r=nE.reduce(function(s,u){return s[u]="".concat(Te.cssPrefix,"-").concat(u),s},{});return US.forEach(function(s){(t.includes(r[s])||t.some(function(u){return $3[s].includes(u)}))&&(i=s)}),i}function Kf(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.family,s=r===void 0?en:r,u=E3[s][t];if(s===iu&&!t)return"fad";var m=H_[s][t]||H_[s][u],p=t in pi.styles?t:null,b=m||p||null;return b}function K3(t){var i=[],r=null;return t.forEach(function(s){var u=Z3(Te.cssPrefix,s);u?r=u:s&&i.push(s)}),{iconName:r,rest:i}}function G_(t){return t.sort().filter(function(i,r,s){return s.indexOf(i)===r})}var Y_=HS.concat(FS);function Wf(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.skipLookups,s=r===void 0?!1:r,u=null,m=G_(t.filter(function(M){return Y_.includes(M)})),p=G_(t.filter(function(M){return!Y_.includes(M)})),b=m.filter(function(M){return u=M,!vS.includes(M)}),y=Gf(b,1),_=y[0],T=_===void 0?null:_,E=Y3(m),j=de(de({},K3(p)),{},{prefix:Kf(T,{family:E})});return de(de(de({},j),Q3({values:t,family:E,styles:Gc,config:Te,canonical:j,givenPrefix:u})),W3(s,u,j))}function W3(t,i,r){var s=r.prefix,u=r.iconName;if(t||!s||!u)return{prefix:s,iconName:u};var m=i==="fa"?cE(u):{},p=Ro(s,u);return u=m.iconName||p||u,s=m.prefix||s,s==="far"&&!Gc.far&&Gc.fas&&!Te.autoFetchSvg&&(s="fas"),{prefix:s,iconName:u}}var X3=US.filter(function(t){return t!==en||t!==iu}),J3=Object.keys(Tg).filter(function(t){return t!==en}).map(function(t){return Object.keys(Tg[t])}).flat();function Q3(t){var i=t.values,r=t.family,s=t.canonical,u=t.givenPrefix,m=u===void 0?"":u,p=t.styles,b=p===void 0?{}:p,y=t.config,_=y===void 0?{}:y,T=r===iu,E=i.includes("fa-duotone")||i.includes("fad"),j=_.familyDefault==="duotone",M=s.prefix==="fad"||s.prefix==="fa-duotone";if(!T&&(E||j||M)&&(s.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(s.prefix="fab"),!s.prefix&&X3.includes(r)){var z=Object.keys(b).find(function(H){return J3.includes(H)});if(z||_.autoFetchSvg){var P=aL.get(r).defaultShortPrefixId;s.prefix=P,s.iconName=Ro(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||m==="fa")&&(s.prefix=Pr()||"fas"),s}var eR=(function(){function t(){_5(this,t),this.definitions={}}return w5(t,[{key:"add",value:function(){for(var r=this,s=arguments.length,u=new Array(s),m=0;m<s;m++)u[m]=arguments[m];var p=u.reduce(this._pullDefinitions,{});Object.keys(p).forEach(function(b){r.definitions[b]=de(de({},r.definitions[b]||{}),p[b]),zg(b,p[b]);var y=z0[en][b];y&&zg(y,p[b]),lE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var u=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(u).map(function(m){var p=u[m],b=p.prefix,y=p.iconName,_=p.icon,T=_[2];r[b]||(r[b]={}),T.length>0&&T.forEach(function(E){typeof E=="string"&&(r[b][E]=_)}),r[b][y]=_}),r}}])})(),K_=[],Is={},Bs={},tR=Object.keys(Bs);function nR(t,i){var r=i.mixoutsTo;return K_=t,Is={},Object.keys(Bs).forEach(function(s){tR.indexOf(s)===-1&&delete Bs[s]}),K_.forEach(function(s){var u=s.mixout?s.mixout():{};if(Object.keys(u).forEach(function(p){typeof u[p]=="function"&&(r[p]=u[p]),yf(u[p])==="object"&&Object.keys(u[p]).forEach(function(b){r[p]||(r[p]={}),r[p][b]=u[p][b]})}),s.hooks){var m=s.hooks();Object.keys(m).forEach(function(p){Is[p]||(Is[p]=[]),Is[p].push(m[p])})}s.provides&&s.provides(Bs)}),r}function Lg(t,i){for(var r=arguments.length,s=new Array(r>2?r-2:0),u=2;u<r;u++)s[u-2]=arguments[u];var m=Is[t]||[];return m.forEach(function(p){i=p.apply(null,[i].concat(s))}),i}function Bo(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];var u=Is[t]||[];u.forEach(function(m){m.apply(null,r)})}function Nr(){var t=arguments[0],i=Array.prototype.slice.call(arguments,1);return Bs[t]?Bs[t].apply(null,i):void 0}function Rg(t){t.prefix==="fa"&&(t.prefix="fas");var i=t.iconName,r=t.prefix||Pr();if(i)return i=Ro(r,i)||i,Z_(dE.definitions,r,i)||Z_(pi.styles,r,i)}var dE=new eR,iR=function(){Te.autoReplaceSvg=!1,Te.observeMutations=!1,Bo("noAuto")},aR={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ra?(Bo("beforeI2svg",i),Nr("pseudoElements2svg",i),Nr("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.autoReplaceSvgRoot;Te.autoReplaceSvg===!1&&(Te.autoReplaceSvg=!0),Te.observeMutations=!0,F3(function(){oR({autoReplaceSvgRoot:r}),Bo("watch",i)})}},rR={icon:function(i){if(i===null)return null;if(yf(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Ro(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var r=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],s=Kf(i[0]);return{prefix:s,iconName:Ro(s,r)||r}}if(typeof i=="string"&&(i.indexOf("".concat(Te.cssPrefix,"-"))>-1||i.match(T3))){var u=Wf(i.split(" "),{skipLookups:!0});return{prefix:u.prefix||Pr(),iconName:Ro(u.prefix,u.iconName)||u.iconName}}if(typeof i=="string"){var m=Pr();return{prefix:m,iconName:Ro(m,i)||i}}}},Nn={noAuto:iR,config:Te,dom:aR,parse:rR,library:dE,findIconDefinition:Rg,toHtml:ru},oR=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.autoReplaceSvgRoot,s=r===void 0?gt:r;(Object.keys(pi.styles).length>0||Te.autoFetchSvg)&&Ra&&Te.autoReplaceSvg&&Nn.dom.i2svg({node:s})};function Xf(t,i){return Object.defineProperty(t,"abstract",{get:i}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return ru(s)})}}),Object.defineProperty(t,"node",{get:function(){if(Ra){var s=gt.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function sR(t){var i=t.children,r=t.main,s=t.mask,u=t.attributes,m=t.styles,p=t.transform;if(R0(p)&&r.found&&!s.found){var b=r.width,y=r.height,_={x:b/y/2,y:.5};u.style=Yf(de(de({},m),{},{"transform-origin":"".concat(_.x+p.x/16,"em ").concat(_.y+p.y/16,"em")}))}return[{tag:"svg",attributes:u,children:i}]}function lR(t){var i=t.prefix,r=t.iconName,s=t.children,u=t.attributes,m=t.symbol,p=m===!0?"".concat(i,"-").concat(Te.cssPrefix,"-").concat(r):m;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},u),{},{id:p}),children:s}]}]}function cR(t){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(r){return r in t})}function P0(t){var i=t.icons,r=i.main,s=i.mask,u=t.prefix,m=t.iconName,p=t.transform,b=t.symbol,y=t.maskId,_=t.extra,T=t.watchable,E=T===void 0?!1:T,j=s.found?s:r,M=j.width,z=j.height,P=[Te.replacementClass,m?"".concat(Te.cssPrefix,"-").concat(m):""].filter(function(J){return _.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(_.classes).join(" "),H={children:[],attributes:de(de({},_.attributes),{},{"data-prefix":u,"data-icon":m,class:P,role:_.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(z)})};!cR(_.attributes)&&!_.attributes["aria-hidden"]&&(H.attributes["aria-hidden"]="true"),E&&(H.attributes[Do]="");var B=de(de({},H),{},{prefix:u,iconName:m,main:r,mask:s,maskId:y,transform:p,symbol:b,styles:de({},_.styles)}),$=s.found&&r.found?Nr("generateAbstractMask",B)||{children:[],attributes:{}}:Nr("generateAbstractIcon",B)||{children:[],attributes:{}},W=$.children,ue=$.attributes;return B.children=W,B.attributes=ue,b?lR(B):sR(B)}function W_(t){var i=t.content,r=t.width,s=t.height,u=t.transform,m=t.extra,p=t.watchable,b=p===void 0?!1:p,y=de(de({},m.attributes),{},{class:m.classes.join(" ")});b&&(y[Do]="");var _=de({},m.styles);R0(u)&&(_.transform=D3({transform:u,width:r,height:s}),_["-webkit-transform"]=_.transform);var T=Yf(_);T.length>0&&(y.style=T);var E=[];return E.push({tag:"span",attributes:y,children:[i]}),E}function uR(t){var i=t.content,r=t.extra,s=de(de({},r.attributes),{},{class:r.classes.join(" ")}),u=Yf(r.styles);u.length>0&&(s.style=u);var m=[];return m.push({tag:"span",attributes:s,children:[i]}),m}var wp=pi.styles;function Mg(t){var i=t[0],r=t[1],s=t.slice(4),u=Gf(s,1),m=u[0],p=null;return Array.isArray(m)?p={tag:"g",attributes:{class:"".concat(Te.cssPrefix,"-").concat(bp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Te.cssPrefix,"-").concat(bp.SECONDARY),fill:"currentColor",d:m[0]}},{tag:"path",attributes:{class:"".concat(Te.cssPrefix,"-").concat(bp.PRIMARY),fill:"currentColor",d:m[1]}}]}:p={tag:"path",attributes:{fill:"currentColor",d:m}},{found:!0,width:i,height:r,icon:p}}var dR={found:!1,width:512,height:512};function fR(t,i){!GS&&!Te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(i,'" is missing.'))}function Ig(t,i){var r=i;return i==="fa"&&Te.styleDefault!==null&&(i=Pr()),new Promise(function(s,u){if(r==="fa"){var m=cE(t)||{};t=m.iconName||t,i=m.prefix||i}if(t&&i&&wp[i]&&wp[i][t]){var p=wp[i][t];return s(Mg(p))}fR(t,i),s(de(de({},dR),{},{icon:Te.showMissingIcons&&t?Nr("missingIconAbstract")||{}:{}}))})}var X_=function(){},Pg=Te.measurePerformance&&$d&&$d.mark&&$d.measure?$d:{mark:X_,measure:X_},kc='FA "7.3.1"',hR=function(i){return Pg.mark("".concat(kc," ").concat(i," begins")),function(){return fE(i)}},fE=function(i){Pg.mark("".concat(kc," ").concat(i," ends")),Pg.measure("".concat(kc," ").concat(i),"".concat(kc," ").concat(i," begins"),"".concat(kc," ").concat(i," ends"))},N0={begin:hR,end:fE},sf=function(){};function J_(t){var i=t.getAttribute?t.getAttribute(Do):null;return typeof i=="string"}function mR(t){var i=t.getAttribute?t.getAttribute(j0):null,r=t.getAttribute?t.getAttribute(O0):null;return i&&r}function pR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Te.replacementClass)}function gR(){if(Te.autoReplaceSvg===!0)return lf.replace;var t=lf[Te.autoReplaceSvg];return t||lf.replace}function vR(t){return gt.createElementNS("http://www.w3.org/2000/svg",t)}function yR(t){return gt.createElement(t)}function hE(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.ceFn,s=r===void 0?t.tag==="svg"?vR:yR:r;if(typeof t=="string")return gt.createTextNode(t);var u=s(t.tag);Object.keys(t.attributes||[]).forEach(function(p){u.setAttribute(p,t.attributes[p])});var m=t.children||[];return m.forEach(function(p){u.appendChild(hE(p,{ceFn:s}))}),u}function bR(t){var i=" ".concat(t.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var lf={replace:function(i){var r=i[0];if(r.parentNode)if(i[1].forEach(function(u){r.parentNode.insertBefore(hE(u),r)}),r.getAttribute(Do)===null&&Te.keepOriginalSource){var s=gt.createComment(bR(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(i){var r=i[0],s=i[1];if(~L0(r).indexOf(Te.replacementClass))return lf.replace(i);var u=new RegExp("".concat(Te.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var m=s[0].attributes.class.split(" ").reduce(function(b,y){return y===Te.replacementClass||y.match(u)?b.toSvg.push(y):b.toNode.push(y),b},{toNode:[],toSvg:[]});s[0].attributes.class=m.toSvg.join(" "),m.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",m.toNode.join(" "))}var p=s.map(function(b){return ru(b)}).join(`
`);r.setAttribute(Do,""),r.innerHTML=p}};function Q_(t){t()}function mE(t,i){var r=typeof i=="function"?i:sf;if(t.length===0)r();else{var s=Q_;Te.mutateApproach===w3&&(s=Ir.requestAnimationFrame||Q_),s(function(){var u=gR(),m=N0.begin("mutate");t.map(u),m(),r()})}}var D0=!1;function pE(){D0=!0}function Ng(){D0=!1}var _f=null;function ex(t){if(D_&&Te.observeMutations){var i=t.treeCallback,r=i===void 0?sf:i,s=t.nodeCallback,u=s===void 0?sf:s,m=t.pseudoElementsCallback,p=m===void 0?sf:m,b=t.observeMutationsRoot,y=b===void 0?gt:b;_f=new D_(function(_){if(!D0){var T=Pr();rl(_).forEach(function(E){if(E.type==="childList"&&E.addedNodes.length>0&&!J_(E.addedNodes[0])&&(Te.searchPseudoElements&&p(E.target),r(E.target)),E.type==="attributes"&&E.target.parentNode&&Te.searchPseudoElements&&p([E.target],!0),E.type==="attributes"&&J_(E.target)&&~k3.indexOf(E.attributeName))if(E.attributeName==="class"&&mR(E.target)){var j=Wf(L0(E.target)),M=j.prefix,z=j.iconName;E.target.setAttribute(j0,M||T),z&&E.target.setAttribute(O0,z)}else pR(E.target)&&u(E.target)})}}),Ra&&_f.observe(y,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _R(){_f&&_f.disconnect()}function xR(t){var i=t.getAttribute("style"),r=[];return i&&(r=i.split(";").reduce(function(s,u){var m=u.split(":"),p=m[0],b=m.slice(1);return p&&b.length>0&&(s[p]=b.join(":").trim()),s},{})),r}function wR(t){var i=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"",u=Wf(L0(t));return u.prefix||(u.prefix=Pr()),i&&r&&(u.prefix=i,u.iconName=r),u.iconName&&u.prefix||(u.prefix&&s.length>0&&(u.iconName=q3(u.prefix,t.innerText)||I0(u.prefix,tE(t.innerText))),!u.iconName&&Te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=t.firstChild.data)),u}function SR(t){var i=rl(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{});return i}function ER(){return{iconName:null,prefix:null,transform:Hi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tx(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=wR(t),s=r.iconName,u=r.prefix,m=r.rest,p=SR(t),b=Lg("parseNodeAttributes",{},t),y=i.styleParser?xR(t):[];return de({iconName:s,prefix:u,transform:Hi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:m,styles:y,attributes:p}},b)}var TR=pi.styles;function gE(t){var i=Te.autoReplaceSvg==="nest"?tx(t,{styleParser:!1}):tx(t);return~i.extra.classes.indexOf(KS)?Nr("generateLayersText",t,i):Nr("generateSvgReplacementMutation",t,i)}function CR(){return[].concat(_i(FS),_i(HS))}function nx(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ra)return Promise.resolve();var r=gt.documentElement.classList,s=function(E){return r.add("".concat(F_,"-").concat(E))},u=function(E){return r.remove("".concat(F_,"-").concat(E))},m=Te.autoFetchSvg?CR():vS.concat(Object.keys(TR));m.includes("fa")||m.push("fa");var p=[".".concat(KS,":not([").concat(Do,"])")].concat(m.map(function(T){return".".concat(T,":not([").concat(Do,"])")})).join(", ");if(p.length===0)return Promise.resolve();var b=[];try{b=rl(t.querySelectorAll(p))}catch{}if(b.length>0)s("pending"),u("complete");else return Promise.resolve();var y=N0.begin("onTree"),_=b.reduce(function(T,E){try{var j=gE(E);j&&T.push(j)}catch(M){GS||M.name==="MissingIcon"&&console.error(M)}return T},[]);return new Promise(function(T,E){Promise.all(_).then(function(j){mE(j,function(){s("active"),s("complete"),u("pending"),typeof i=="function"&&i(),y(),T()})}).catch(function(j){y(),E(j)})})}function AR(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gE(t).then(function(r){r&&mE([r],i)})}function kR(t){return function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(i||{}).icon?i:Rg(i||{}),u=r.mask;return u&&(u=(u||{}).icon?u:Rg(u||{})),t(s,de(de({},r),{},{mask:u}))}}var jR=function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,u=s===void 0?Hi:s,m=r.symbol,p=m===void 0?!1:m,b=r.mask,y=b===void 0?null:b,_=r.maskId,T=_===void 0?null:_,E=r.classes,j=E===void 0?[]:E,M=r.attributes,z=M===void 0?{}:M,P=r.styles,H=P===void 0?{}:P;if(i){var B=i.prefix,$=i.iconName,W=i.icon;return Xf(de({type:"icon"},i),function(){return Bo("beforeDOMElementCreation",{iconDefinition:i,params:r}),P0({icons:{main:Mg(W),mask:y?Mg(y.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:$,transform:de(de({},Hi),u),symbol:p,maskId:T,extra:{attributes:z,styles:H,classes:j}})})}},OR={mixout:function(){return{icon:kR(jR)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=nx,r.nodeCallback=AR,r}}},provides:function(i){i.i2svg=function(r){var s=r.node,u=s===void 0?gt:s,m=r.callback,p=m===void 0?function(){}:m;return nx(u,p)},i.generateSvgReplacementMutation=function(r,s){var u=s.iconName,m=s.prefix,p=s.transform,b=s.symbol,y=s.mask,_=s.maskId,T=s.extra;return new Promise(function(E,j){Promise.all([Ig(u,m),y.iconName?Ig(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var z=Gf(M,2),P=z[0],H=z[1];E([r,P0({icons:{main:P,mask:H},prefix:m,iconName:u,transform:p,symbol:b,maskId:_,extra:T,watchable:!0})])}).catch(j)})},i.generateAbstractIcon=function(r){var s=r.children,u=r.attributes,m=r.main,p=r.transform,b=r.styles,y=Yf(b);y.length>0&&(u.style=y);var _;return R0(p)&&(_=Nr("generateAbstractTransformGrouping",{main:m,transform:p,containerWidth:m.width,iconWidth:m.width})),s.push(_||m.icon),{children:s,attributes:u}}}},zR={mixout:function(){return{layer:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=s.classes,m=u===void 0?[]:u;return Xf({type:"layer"},function(){Bo("beforeDOMElementCreation",{assembler:r,params:s});var p=[];return r(function(b){Array.isArray(b)?b.map(function(y){p=p.concat(y.abstract)}):p=p.concat(b.abstract)}),[{tag:"span",attributes:{class:["".concat(Te.cssPrefix,"-layers")].concat(_i(m)).join(" ")},children:p}]})}}}},LR={mixout:function(){return{counter:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var u=s.classes,m=u===void 0?[]:u,p=s.attributes,b=p===void 0?{}:p,y=s.styles,_=y===void 0?{}:y;return Xf({type:"counter",content:r},function(){return Bo("beforeDOMElementCreation",{content:r,params:s}),uR({content:r.toString(),extra:{attributes:b,styles:_,classes:["".concat(Te.cssPrefix,"-layers-counter")].concat(_i(m))}})})}}}},RR={mixout:function(){return{text:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=s.transform,m=u===void 0?Hi:u,p=s.classes,b=p===void 0?[]:p,y=s.attributes,_=y===void 0?{}:y,T=s.styles,E=T===void 0?{}:T;return Xf({type:"text",content:r},function(){return Bo("beforeDOMElementCreation",{content:r,params:s}),W_({content:r,transform:de(de({},Hi),m),extra:{attributes:_,styles:E,classes:["".concat(Te.cssPrefix,"-layers-text")].concat(_i(b))}})})}}},provides:function(i){i.generateLayersText=function(r,s){var u=s.transform,m=s.extra,p=null,b=null;if(pS){var y=parseInt(getComputedStyle(r).fontSize,10),_=r.getBoundingClientRect();p=_.width/y,b=_.height/y}return Promise.resolve([r,W_({content:r.innerHTML,width:p,height:b,transform:u,extra:m,watchable:!0})])}}},vE=new RegExp('"',"ug"),ix=[1105920,1112319],ax=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),iL),_3),fL),Dg=Object.keys(ax).reduce(function(t,i){return t[i.toLowerCase()]=ax[i],t},{}),MR=Object.keys(Dg).reduce(function(t,i){var r=Dg[i];return t[i]=r[900]||_i(Object.entries(r))[0][1],t},{});function IR(t){var i=t.replace(vE,"");return tE(_i(i)[0]||"")}function PR(t){var i=t.getPropertyValue("font-feature-settings").includes("ss01"),r=t.getPropertyValue("content"),s=r.replace(vE,""),u=s.codePointAt(0),m=u>=ix[0]&&u<=ix[1],p=s.length===2?s[0]===s[1]:!1;return m||p||i}function NR(t,i){var r=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(i),u=isNaN(s)?"normal":s;return(Dg[r]||{})[u]||MR[r]}function rx(t,i){var r="".concat(x3).concat(i.replace(":","-"));return new Promise(function(s,u){if(t.getAttribute(r)!==null)return s();var m=rl(t.children),p=m.filter(function(se){return se.getAttribute(Ag)===i})[0],b=Ir.getComputedStyle(t,i),y=b.getPropertyValue("font-family"),_=y.match(C3),T=b.getPropertyValue("font-weight"),E=b.getPropertyValue("content");if(p&&!_)return t.removeChild(p),s();if(_&&E!=="none"&&E!==""){var j=b.getPropertyValue("content"),M=NR(y,T),z=IR(j),P=_[0].startsWith("FontAwesome"),H=PR(b),B=I0(M,z),$=B;if(P){var W=G3(z);W.iconName&&W.prefix&&(B=W.iconName,M=W.prefix)}if(B&&!H&&(!p||p.getAttribute(j0)!==M||p.getAttribute(O0)!==$)){t.setAttribute(r,$),p&&t.removeChild(p);var ue=ER(),J=ue.extra;J.attributes[Ag]=i,Ig(B,M).then(function(se){var Q=P0(de(de({},ue),{},{icons:{main:se,mask:uE()},prefix:M,iconName:$,extra:J,watchable:!0})),he=gt.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?t.insertBefore(he,t.firstChild):t.appendChild(he),he.outerHTML=Q.map(function(Ce){return ru(Ce)}).join(`
`),t.removeAttribute(r),s()}).catch(u)}else s()}else s()})}function DR(t){return Promise.all([rx(t,"::before"),rx(t,"::after")])}function BR(t){return t.parentNode!==document.head&&!~S3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ag)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var UR=function(i){return!!i&&qS.some(function(r){return i.includes(r)})},FR=function(i){if(!i)return[];var r=new Set,s=i.split(/,(?![^()]*\))/).map(function(y){return y.trim()});s=s.flatMap(function(y){return y.includes("(")?y:y.split(",").map(function(_){return _.trim()})});var u=of(s),m;try{for(u.s();!(m=u.n()).done;){var p=m.value;if(UR(p)){var b=qS.reduce(function(y,_){return y.replace(_,"")},p);b!==""&&b!=="*"&&r.add(b)}}}catch(y){u.e(y)}finally{u.f()}return r};function ox(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ra){var r;if(i)r=t;else if(Te.searchPseudoElementsFullScan)r=t.querySelectorAll("*");else{var s=new Set,u=of(document.styleSheets),m;try{for(u.s();!(m=u.n()).done;){var p=m.value;try{var b=of(p.cssRules),y;try{for(b.s();!(y=b.n()).done;){var _=y.value,T=FR(_.selectorText),E=of(T),j;try{for(E.s();!(j=E.n()).done;){var M=j.value;s.add(M)}}catch(P){E.e(P)}finally{E.f()}}}catch(P){b.e(P)}finally{b.f()}}catch(P){Te.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(p.href," (").concat(P.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(P){u.e(P)}finally{u.f()}if(!s.size)return;var z=Array.from(s).join(", ");try{r=t.querySelectorAll(z)}catch{}}return new Promise(function(P,H){var B=rl(r).filter(BR).map(DR),$=N0.begin("searchPseudoElements");pE(),Promise.all(B).then(function(){$(),Ng(),P()}).catch(function(){$(),Ng(),H()})})}}var HR={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=ox,r}}},provides:function(i){i.pseudoElements2svg=function(r){var s=r.node,u=s===void 0?gt:s;Te.searchPseudoElements&&ox(u)}}},sx=!1,$R={mixout:function(){return{dom:{unwatch:function(){pE(),sx=!0}}}},hooks:function(){return{bootstrap:function(){ex(Lg("mutationObserverCallbacks",{}))},noAuto:function(){_R()},watch:function(r){var s=r.observeMutationsRoot;sx?Ng():ex(Lg("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},lx=function(i){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(s,u){var m=u.toLowerCase().split("-"),p=m[0],b=m.slice(1).join("-");if(p&&b==="h")return s.flipX=!0,s;if(p&&b==="v")return s.flipY=!0,s;if(b=parseFloat(b),isNaN(b))return s;switch(p){case"grow":s.size=s.size+b;break;case"shrink":s.size=s.size-b;break;case"left":s.x=s.x-b;break;case"right":s.x=s.x+b;break;case"up":s.y=s.y-b;break;case"down":s.y=s.y+b;break;case"rotate":s.rotate=s.rotate+b;break}return s},r)},VR={mixout:function(){return{parse:{transform:function(r){return lx(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-transform");return u&&(r.transform=lx(u)),r}}},provides:function(i){i.generateAbstractTransformGrouping=function(r){var s=r.main,u=r.transform,m=r.containerWidth,p=r.iconWidth,b={transform:"translate(".concat(m/2," 256)")},y="translate(".concat(u.x*32,", ").concat(u.y*32,") "),_="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),T="rotate(".concat(u.rotate," 0 0)"),E={transform:"".concat(y," ").concat(_," ").concat(T)},j={transform:"translate(".concat(p/2*-1," -256)")},M={outer:b,inner:E,path:j};return{tag:"g",attributes:de({},M.outer),children:[{tag:"g",attributes:de({},M.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:de(de({},s.icon.attributes),M.path)}]}]}}}},Sp={x:0,y:0,width:"100%",height:"100%"};function cx(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||i)&&(t.attributes.fill="black"),t}function ZR(t){return t.tag==="g"?t.children:[t]}var qR={hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-mask"),m=u?Wf(u.split(" ").map(function(p){return p.trim()})):uE();return m.prefix||(m.prefix=Pr()),r.mask=m,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides:function(i){i.generateAbstractMask=function(r){var s=r.children,u=r.attributes,m=r.main,p=r.mask,b=r.maskId,y=r.transform,_=m.width,T=m.icon,E=p.width,j=p.icon,M=N3({transform:y,containerWidth:E,iconWidth:_}),z={tag:"rect",attributes:de(de({},Sp),{},{fill:"white"})},P=T.children?{children:T.children.map(cx)}:{},H={tag:"g",attributes:de({},M.inner),children:[cx(de({tag:T.tag,attributes:de(de({},T.attributes),M.path)},P))]},B={tag:"g",attributes:de({},M.outer),children:[H]},$="mask-".concat(b||$_()),W="clip-".concat(b||$_()),ue={tag:"mask",attributes:de(de({},Sp),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,B]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:ZR(j)},ue]};return s.push(J,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat($,")")},Sp)}),{children:s,attributes:u}}}},GR={provides:function(i){var r=!1;Ir.matchMedia&&(r=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var s=[],u={fill:"currentColor"},m={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:de(de({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var p=de(de({},m),{},{attributeName:"opacity"}),b={tag:"circle",attributes:de(de({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||b.children.push({tag:"animate",attributes:de(de({},m),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},p),{},{values:"1;0;1;1;0;1;"})}),s.push(b),s.push({tag:"path",attributes:de(de({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:de(de({},p),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:de(de({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},p),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},YR={hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-symbol"),m=u===null?!1:u===""?!0:u;return r.symbol=m,r}}}},KR=[U3,OR,zR,LR,RR,HR,$R,VR,qR,GR,YR];nR(KR,{mixoutsTo:Nn});Nn.noAuto;var Ys=Nn.config;Nn.library;Nn.dom;var yE=Nn.parse;Nn.findIconDefinition;Nn.toHtml;var WR=Nn.icon;Nn.layer;Nn.text;Nn.counter;function XR(t){return t=t-0,t===t}function bE(t){return XR(t)?t:(t=t.replace(/[_-]+(.)?/g,(i,r)=>r?r.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var JR=(t,i)=>Wn.createElement("stop",{key:`${i}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function QR(t){return t.charAt(0).toUpperCase()+t.slice(1)}var zs=new Map,eM=1e3;function tM(t){if(zs.has(t))return zs.get(t);const i={};let r=0;const s=t.length;for(;r<s;){const u=t.indexOf(";",r),m=u===-1?s:u,p=t.slice(r,m).trim();if(p){const b=p.indexOf(":");if(b>0){const y=p.slice(0,b).trim(),_=p.slice(b+1).trim();if(y&&_){const T=bE(y);i[T.startsWith("webkit")?QR(T):T]=_}}}r=m+1}if(zs.size===eM){const u=zs.keys().next().value;u&&zs.delete(u)}return zs.set(t,i),i}function _E(t,i,r={}){if(typeof i=="string")return i;const s=(i.children||[]).map(E=>{let j=E;return("fill"in r||r.gradientFill)&&E.tag==="path"&&"fill"in E.attributes&&(j={...E,attributes:{...E.attributes,fill:void 0}}),_E(t,j)}),u=i.attributes||{},m={};for(const[E,j]of Object.entries(u))switch(!0){case E==="class":{m.className=j;break}case E==="style":{m.style=tM(String(j));break}case E.startsWith("aria-"):case E.startsWith("data-"):{m[E.toLowerCase()]=j;break}default:m[bE(E)]=j}const{style:p,role:b,"aria-label":y,gradientFill:_,...T}=r;if(p&&(m.style=m.style?{...m.style,...p}:p),b&&(m.role=b),y&&(m["aria-label"]=y,m["aria-hidden"]="false"),_){m.fill=`url(#${_.id})`;const{type:E,stops:j=[],...M}=_;s.unshift(t(E==="linear"?"linearGradient":"radialGradient",{...M,id:_.id},j.map(JR)))}return t(i.tag,{...m,...T},...s)}var nM=_E.bind(null,Wn.createElement),ux=(t,i)=>{const r=k.useId();return t||(i?r:void 0)},iM=class{constructor(i="react-fontawesome"){this.enabled=!1;let r=!1;try{r=typeof process<"u"&&!1}catch{}this.scope=i,this.enabled=r}log(...i){this.enabled&&console.log(`[${this.scope}]`,...i)}warn(...i){this.enabled&&console.warn(`[${this.scope}]`,...i)}error(...i){this.enabled&&console.error(`[${this.scope}]`,...i)}},aM="searchPseudoElementsFullScan"in Ys&&typeof Ys.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",rM=Number.parseInt(aM)>=7,oM=()=>rM,Ic="fa",qt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},sM={left:"fa-pull-left",right:"fa-pull-right"},lM={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},cM={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},fi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function uM(t){const i=Ys.cssPrefix||Ys.familyPrefix||Ic;return i===Ic?t:t.replace(new RegExp(String.raw`(?<=^|\s)${Ic}-`,"g"),`${i}-`)}function dM(t){const{beat:i,fade:r,beatFade:s,bounce:u,shake:m,spin:p,spinPulse:b,spinReverse:y,pulse:_,fixedWidth:T,inverse:E,border:j,flip:M,size:z,rotation:P,pull:H,swapOpacity:B,rotateBy:$,widthAuto:W,canvasSquare:ue,canvasRoomy:J,flip360:se,buzz:Q,float:he,jello:Ce,spinSnap:Ue,spinSnap4:ve,spinSnap8:ke,swing:ge,wag:ae,className:je}=t,D=[];return je&&D.push(...je.split(" ")),i&&D.push(qt.beat),r&&D.push(qt.fade),s&&D.push(qt.beatFade),u&&D.push(qt.bounce),m&&D.push(qt.shake),p&&D.push(qt.spin),y&&D.push(qt.spinReverse),b&&D.push(qt.spinPulse),_&&D.push(qt.pulse),T&&D.push(fi.fixedWidth),E&&D.push(fi.inverse),j&&D.push(fi.border),M===!0&&D.push(fi.flip),(M==="horizontal"||M==="both")&&D.push(fi.flipHorizontal),(M==="vertical"||M==="both")&&D.push(fi.flipVertical),z!=null&&D.push(cM[z]),P!=null&&P!==0&&D.push(lM[P]),H!=null&&D.push(sM[H]),B&&D.push(fi.swapOpacity),oM()?($&&D.push(fi.rotateBy),W&&D.push(fi.widthAuto),ue&&D.push(fi.canvasSquare),J&&D.push(fi.canvasRoomy),se&&D.push(qt.flip360),Q&&D.push(qt.buzz),he&&D.push(qt.float),Ce&&D.push(qt.jello),Ue&&D.push(qt.spinSnap),ve&&D.push(qt.spinSnap4),ke&&D.push(qt.spinSnap8),ge&&D.push(qt.swing),ae&&D.push(qt.wag),(Ys.cssPrefix||Ys.familyPrefix||Ic)===Ic?D:D.map(uM)):D}var fM=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function dx(t){if(t)return fM(t)?t:yE.icon(t)}function hM(t){return Object.keys(t)}var fx=new iM("FontAwesomeIcon"),xE={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},mM=new Set(Object.keys(xE)),Xn=Wn.forwardRef((t,i)=>{const r={...xE,...t},{icon:s,mask:u,symbol:m,title:p,titleId:b,maskId:y,transform:_}=r,T=ux(y,!!u),E=ux(b,!!p),j=dx(s);if(!j)return fx.error("Icon lookup is undefined",s),null;const M=dM(r),z=typeof _=="string"?yE.transform(_):_,P=dx(u),H=WR(j,{...M.length>0&&{classes:M},...z&&{transform:z},...P&&{mask:P},symbol:m,title:p,titleId:E,maskId:T});if(!H)return fx.error("Could not find icon",j),null;const{abstract:B}=H,$={ref:i};for(const W of hM(r))mM.has(W)||($[W]=r[W]);return nM(B[0],$)});Xn.displayName="FontAwesomeIcon";const pM=x.div`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border: 0;
    outline: none;
    background-color: #E6E3FB;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    gap: 0.5rem;
`,gM=x(Xn)`
    height: 2.3vh;
    color: #7A77B0;
`,vM=x.input`
    width: 90%;
    height: 100%;
    border: 0;
    outline: none;
    background-color: transparent;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: 0;
        box-shadow: none;
    }
`,yM=x.div`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border: 0;
    outline: none;
    background-color: #E6E3FB;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    gap: 0.5rem;
`,wE=x(Xn)`
    height: 2.3vh;
    color: #7A77B0;
`,bM=x(wE)`
    cursor: pointer;
    flex-shrink: 0;
`,_M=x.input`
    width: 90%;
    height: 100%;
    border: 0;
    outline: none;
    background-color: transparent;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: 0;
        box-shadow: none;
    }
`;function xM({onIdChange:t,onPasswordChange:i}){const{language:r}=ze(),[s,u]=k.useState(!1),m=b=>{t(b.target.value)},p=b=>{i(b.target.value)};return h.jsxs(h.Fragment,{children:[h.jsxs(pM,{children:[h.jsx(gM,{icon:Tn.fad.user}),h.jsx(vM,{type:"text",placeholder:r==="eng"?"Enter your ID":"ID를 입력해주세요",onChange:m})]}),h.jsxs(yM,{children:[h.jsx(wE,{icon:Tn.fas.lock}),h.jsx(_M,{type:s?"text":"password",placeholder:r==="eng"?"Enter your password":"비밀번호를 입력해주세요",onChange:p}),h.jsx(bM,{icon:Tn.far.eye,onClick:()=>u(b=>!b)})]})]})}const wM=x.button`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0;
    outline: none;
    background-color: #7A77B0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;function SM({onClick:t}){const{language:i}=ze();return h.jsx(wM,{type:"button",onClick:t,children:i==="eng"?"Login":"로그인"})}const EM=x.button`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0;
    outline: none;
    border: 1px solid #7A77B0;
    color: #7A77B0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;function TM({onClick:t}){const{language:i}=ze();return h.jsx(EM,{type:"button",onClick:t,children:i==="eng"?"Sign Up":"회원가입"})}const CM=x.div`
    width: 25%;
    height: 80%;
    border: 2px solid white;
    background-color: #DBD8F750;
    box-sizing: border-box;
    padding: 3rem 0;
    flex-shrink: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 22rem;
        height: auto;
        padding: 1.6rem 0 1.3rem;
    }
`,AM=x.img`
    width: 3vw;
    height: 6vh;
    min-width: 2.5rem;
    min-height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #D1CDF4;
    padding: 0.5rem;
    box-shadow: 0px 0px 20px 0px #D1CDF4;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: 3rem;
        height: 3rem;
    }
`,kM=x.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E2A63;
    margin: 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`,jM=x.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;

    @media (max-width: 767px) {
        padding: 1rem 1.2rem;
    }
`,OM=x.p`
    font-size: 0.8rem;
    color: #2E2A63;
    margin: 0;
    padding: 0 1rem;
    text-align: center;
`,zM=x.div`
    width: 100%;
    height: 0.1rem;
    border-top: 0.5px solid black;
`;function hx({who:t,onlyForWho:i,loginRole:r}){const{loginAdmin:s}=nu(),{loginOwner:u}=Dr(),{loginStudent:m}=xi(),{language:p}=ze(),b=Yt(),[y,_]=k.useState(""),[T,E]=k.useState(""),j=async()=>{if(r==="student"){if(!y.trim()||!T){alert(p==="eng"?"Please enter your ID and password.":"아이디와 비밀번호를 입력해주세요.");return}try{const M=await eS(y.trim(),T);m(M),b("/student")}catch(M){const z=M instanceof Error?M.message:"";if(z==="HTTP 404"||z.includes("Cannot POST")){alert(p==="eng"?"The login API is missing. Restart the API server in the server folder.":"로그인 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.");return}if(z==="Failed to fetch"||z.includes("NetworkError")||z.includes("fetch")){alert(p==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.");return}alert(p==="eng"?"ID or password is incorrect.":"아이디 또는 비밀번호가 올바르지 않습니다.")}return}if(r==="store"){if(!y.trim()||!T){alert(p==="eng"?"Please enter your ID and password.":"아이디와 비밀번호를 입력해주세요.");return}try{await Oz(y.trim(),T),s(),b("/admin");return}catch{}try{const M=await lS(y.trim(),T);u(M),b("/owner")}catch(M){if(M instanceof qc&&M.status==="pending"){alert(p==="eng"?"Please wait for admin approval.":"관리자의 승인을 기다려주세요.");return}if(M instanceof qc&&M.status==="rejected"){alert(p==="eng"?"Your registration was rejected by the admin.":"관리자로부터 승인이 거절되었습니다.");return}alert(p==="eng"?"ID or password is incorrect.":"아이디 또는 비밀번호가 올바르지 않습니다.")}}};return h.jsxs(CM,{children:[h.jsx(AM,{src:"/coloredMyPageIcon.png",alt:"coloredMyPageIcon"}),h.jsxs(kM,{children:[" ",t," "]}),h.jsxs(jM,{children:[h.jsx(xM,{onIdChange:_,onPasswordChange:E}),h.jsx(SM,{onClick:()=>{j()}}),h.jsx(zM,{}),h.jsx(TM,{onClick:()=>b(r==="student"?"/signup/student":"/signup/store")})]}),h.jsxs(OM,{children:[" ",i," "]})]})}const LM=x.div`
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(#DBD8F7 0%, white 30%, white 70%, #DBD8F7 100%);
`,RM=x.div`
    position: relative;
    flex: 1;
    min-height: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7vw;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 0.9rem;
        overflow: auto;
    }
`,MM=x.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
    z-index: 0;
    scale: 0.75;

    @media (max-width: 1024px) {
        display: none;
    }
`,IM=x.div`
    display: none;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
    width: 100%;
    max-width: 22rem;
    box-sizing: border-box;
    padding: 0.28rem;
    background: #EFEAFF;
    border: 1px solid #C4BBF0;
    border-radius: 0.9rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`,PM=x.div`
    position: absolute;
    top: 0.28rem;
    bottom: 0.28rem;
    left: 0.28rem;
    width: calc(50% - 0.28rem);
    background: white;
    border-radius: 0.7rem;
    box-shadow: 0 2px 10px #2E2A6320;
    transform: translateX(${({$role:t})=>t==="store"?"100%":"0"});
    transition: transform 0.22s ease;
`,mx=x.button`
    position: relative;
    z-index: 1;
    border: none;
    background: transparent;
    color: ${({$active:t})=>t?"#2E2A63":"#8a84a0"};
    font-weight: ${({$active:t})=>t?700:500};
    padding: 0.55rem 0.4rem;
    font-size: 0.88rem;
    cursor: pointer;
`,px=x.div`
    display: contents;

    @media (max-width: 1024px) {
        display: ${({$showOnNarrow:t})=>t?"flex":"none"};
        width: 100%;
        max-width: 22rem;
        justify-content: center;
    }
`;function NM(){const{language:t}=ze(),[i,r]=k.useState("student");return h.jsx(LM,{children:h.jsxs(RM,{children:[h.jsxs(IM,{children:[h.jsx(PM,{$role:i}),h.jsx(mx,{type:"button",$active:i==="student",onClick:()=>r("student"),children:t==="eng"?"Student":"학생"}),h.jsx(mx,{type:"button",$active:i==="store",onClick:()=>r("store"),children:t==="eng"?"Owner":"사장님"})]}),h.jsx(px,{$showOnNarrow:i==="student",children:h.jsx(hx,{who:t==="eng"?"Student Login":"학생 로그인",onlyForWho:t==="eng"?"Only for SUNY Korea students":"한국뉴욕주립대학교 학생만 가능합니다.",loginRole:"student"})}),h.jsx(MM,{src:"/loginBackgroundImage.png",alt:"loginBackgroundImage"}),h.jsx(px,{$showOnNarrow:i==="store",children:h.jsx(hx,{who:t==="eng"?"Owner Login":"사장님 로그인",onlyForWho:t==="eng"?"Only for pre-contracted stores":"사전에 계약된 매장 직원만 가능합니다.",loginRole:"store"})})]})})}const DM=x.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    flex-shrink: 0;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 11.5rem;
        min-width: 11.5rem;
        padding: 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        gap: 0.25rem;
        padding: 0.45rem 0.6rem;
        border: none;
        border-bottom: 0.5px solid gray;
    }
`,BM=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        display: contents;
    }
`,UM=x.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,gx=x(Ta)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.4rem;
    line-height: 1.4rem;
    text-decoration: none;
    font-weight: 400;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;

    &, &:link, &:visited, &:hover, &:active {
        color: ${({$selected:t})=>t?"#7965EA":"black"};
        background-color: ${({$selected:t})=>t?"#F1EDFC":"transparent"};
        text-decoration: none;
    }

    @media (max-width: 767px) {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        white-space: nowrap;
    }
`,vx=x.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,FM=x.img`
    width: 0.9rem;
    height: 0.9rem;
`,HM=x.img`
    width: 1rem;
    height: 1rem;
`,$M=x.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        display: contents;
    }
`,VM=x.button`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 0.8rem;
    font-weight: 400;
    background-color: #F1EDFC;
    padding: 0.7rem 0.4rem;

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        min-height: 1.4rem;
        line-height: 1.4rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        border-radius: 0.3rem;
        white-space: nowrap;
    }
`;function ZM(){const{pathname:t}=tn(),i=Yt(),{language:r}=ze(),{logoutAdmin:s}=nu(),u=t==="/admin"||t==="/admin/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",p=t==="/admin/owners"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(DM,{children:[h.jsxs(BM,{children:[h.jsx(UM,{children:" 관리 "}),h.jsxs(gx,{to:"/admin/",$selected:u,children:[" ",h.jsxs(vx,{children:[" ",h.jsx(FM,{src:m,alt:"store icon"})," "]})," ",r==="eng"?"Stores Management":"매장 관리"," "]}),h.jsxs(gx,{to:"/admin/owners",$selected:t==="/admin/owners",children:[" ",h.jsxs(vx,{children:[" ",h.jsx(HM,{src:p,alt:"owner icon"})," "]})," ",r==="eng"?"Owners Management":"사장님 관리"," "]})]}),h.jsx($M,{children:h.jsx(VM,{onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const qM=x.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,GM=x.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
    }
`;function YM(){return h.jsxs(qM,{children:[h.jsx(ZM,{}),h.jsx(GM,{children:h.jsx(d0,{})})]})}const KM=x.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    flex-shrink: 0;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 12.5rem;
        min-width: 12.5rem;
        padding: 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0.4rem;
        padding: 0.45rem 0.6rem;
        border: none;
        border-bottom: 0.5px solid gray;
    }
`,WM=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.25rem;
        width: 100%;
        min-width: 0;
    }
`,XM=x.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,Ep=x(Ta)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.4rem;
    line-height: 1.4rem;
    text-decoration: none;
    font-weight: 400;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;

    &, &:link, &:visited, &:hover, &:active {
        color: ${({$selected:t})=>t?"#7965EA":"black"};
        background-color: ${({$selected:t})=>t?"#F1EDFC":"transparent"};
        text-decoration: none;
    }

    @media (max-width: 767px) {
        flex: 1;
        min-width: 0;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        white-space: nowrap;
    }
`,Tp=x.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,JM=x.img`
    width: 0.9rem;
    height: 0.9rem;
`,yx=x.img`
    width: 1rem;
    height: 1rem;
`,QM=x.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,eI=x.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 0.8rem;
    background-color: #F1EDFC;
    padding: 0.7rem 0.4rem;

    @media (max-width: 767px) {
        width: 100%;
        padding: 0.45rem 0.7rem;
        white-space: nowrap;
    }
`;function tI(){const{pathname:t}=tn(),i=Yt(),{language:r}=ze(),{logoutOwner:s}=Dr(),u=t==="/owner"||t==="/owner/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",p=t==="/owner/edit"?"/fileIcon.png":"/blackFileIcon.png",b=t==="/owner/account"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(KM,{children:[h.jsxs(WM,{children:[h.jsx(XM,{children:" 관리 "}),h.jsxs(Ep,{to:"/owner",$selected:u,children:[h.jsxs(Tp,{children:[" ",h.jsx(JM,{src:m,alt:"store icon"})," "]}),r==="eng"?"Store Information":"매장 정보 조회"]}),h.jsxs(Ep,{to:"/owner/edit",$selected:t==="/owner/edit",children:[h.jsxs(Tp,{children:[" ",h.jsx(yx,{src:p,alt:"edit icon"})," "]}),r==="eng"?"Edit Store Information":"매장 정보 수정"]}),h.jsxs(Ep,{to:"/owner/account",$selected:t==="/owner/account",children:[h.jsxs(Tp,{children:[" ",h.jsx(yx,{src:b,alt:"account icon"})," "]}),r==="eng"?"Account Management":"계정 관리"]})]}),h.jsx(QM,{children:h.jsx(eI,{type:"button",onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const nI=x.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,iI=x.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;
    text-align: left;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
    }
`;function aI(){return h.jsxs(nI,{children:[h.jsx(tI,{}),h.jsx(iI,{children:h.jsx(d0,{})})]})}const rI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,oI=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,sI=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,lI=x.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function bx(){const{language:t}=ze();return h.jsx(rI,{children:h.jsxs(oI,{children:[h.jsxs(sI,{children:[" ",t==="eng"?"Store Information":"매장 정보 조회"," "]}),h.jsxs(lI,{children:[" ",t==="eng"?"You can check the store information currently shown to students.":"현재 학생들에게 보여지는 매장 정보를 확인할 수 있습니다."," "]})]})})}const _x=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 100%;
        padding-bottom: 1.5rem;
    }

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1.5rem;
    }
`,cI=x.p`
    font-size: 0.9rem;
    color: #9a94b0;
    margin: 0;
`,uI=x.div`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 1rem 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background-color: white;

    @media (max-width: 767px) {
        align-items: flex-start;
        padding: 0.8rem;
        gap: 0.75rem;
    }
`,dI=x.img`
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.4rem;
    flex-shrink: 0;
    background-color: #f3f0ff;

    @media (max-width: 767px) {
        width: 6.2rem;
        height: 6.2rem;
    }
`,fI=x.div`
    flex: 1;
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    text-align: left;
`,Gd=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: ${({$tight:t})=>t?"0.25rem":"0.4rem"};
`,hI=x.p`
    color: black;
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 0.4rem;
    text-align: left;
`,mI=x.span`
    display: block;
    line-height: 1;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,pI=x.span`
    display: block;
    flex-shrink: 0;
    width: 1em;
    height: 1em;

    & a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 0;
    }

    & a button {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0;
        margin-bottom: 0;
        vertical-align: bottom;
    }
`,gI=x.p`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,vI=x.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,yI=x.span`
    color: #8F8F8F;
    font-size: 0.9rem;
    line-height: 1;
`,bI=x.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,_I=x.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;

    &::before {
        content: '|';
        margin-right: 0.38rem;
        margin-left: 0.08rem;
    }
`,xI=x.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: stretch;

    @media (max-width: 1024px) {
        margin-bottom: 1.25rem;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`,wI=`
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #b8b2cc transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #b8b2cc;
        border-radius: 4px;
    }
`,Bg=x.div`
    box-sizing: border-box;
    min-width: 0;
    max-height: 26rem;
    border: 1px solid #e6e3f2;
    border-radius: 0.5rem;
    padding: 1rem 1.1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.85rem;
    overflow: hidden;
`,Cp=x.div`
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.15rem;
    padding: 0;
    text-align: left;
    ${wI}
`,xx=x.p`
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0;
`,SI=x(Bg)`
    gap: 1.15rem;
    padding: 1.15rem 1.2rem;
`,wx=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.3rem;
    text-align: left;
`,Sx=x.p`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0.3rem 0;
    padding: 0;
    text-align: left;
`,Ex=x.div`
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
    text-align: left;
`,Ug=x.p`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.85rem;
    color: gray;
    margin: 0;
    padding: 0;
    text-align: left;
`,EI=x(Ug)`
    font-size: 0.6rem;
    color: black;
`,Tx=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,Sr=x.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid #eeeaf6;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`,Er=x.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,Oo=x.p`
    font-size: 0.85rem;
    color: #2E2A63;
    margin: 0;
    min-width: 0;
    text-align: right;
    word-break: break-word;
`,TI=x.a`
    color: #4C6EF5;
    font-size: 0.85rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    text-align: right;

    &:hover {
        text-decoration: underline;
    }
`;function CI(){const{language:t}=ze(),{owner:i}=Dr(),{stores:r}=wi(),s=r.find(u=>u._id===i?.storeId);return s?h.jsxs(_x,{children:[h.jsx(bx,{}),h.jsxs(uI,{children:[h.jsx(dI,{src:bi(s.photo),alt:t==="eng"?s.name.eng:s.name.kor}),h.jsxs(fI,{children:[h.jsx(Gd,{children:h.jsxs(hI,{children:[h.jsx(mI,{children:t==="eng"?s.name.eng:s.name.kor}),h.jsx(pI,{children:h.jsx(J1,{storeNaverMap:s.naverMap})})]})}),h.jsx(Gd,{children:h.jsxs(gI,{children:[" ",t==="eng"?s.branch.eng:s.branch.kor," "]})}),h.jsxs(Gd,{$tight:!0,children:[h.jsxs(vI,{children:[" ",t==="eng"?s.category.eng:s.category.kor," "]}),h.jsx(yI,{children:"·"}),h.jsxs(bI,{children:[" ",t==="eng"?s.theme.eng:s.theme.kor," "]})]}),h.jsxs(Gd,{children:[h.jsx(Q1,{openTime:s.openTime,closeTime:s.closeTime,language:t}),h.jsxs(_I,{children:[" ",s.openTime," - ",s.closeTime," "]})]})]})]}),h.jsxs(xI,{children:[h.jsx(SI,{children:h.jsxs(Cp,{children:[h.jsxs(wx,{children:[h.jsxs(Sx,{children:["🎓 ",t==="eng"?"SUNY Benefit":"SUNY 혜택"]}),h.jsxs(Ex,{children:[h.jsx(Ug,{children:t==="eng"?s.discount.eng:s.discount.kor}),h.jsx(EI,{children:t==="eng"?"*You must bring your SUNY student ID card to receive the discount.":"할인을 받기 위해서는 학생증을 필수 지참해야합니다."})]})]}),h.jsxs(wx,{children:[h.jsxs(Sx,{children:["✅ ",t==="eng"?"Additional precautions":"추가 유의사항"]}),h.jsx(Ex,{children:h.jsx(Ug,{children:t==="eng"?s.description.eng:s.description.kor})})]})]})}),h.jsxs(Bg,{children:[h.jsxs(xx,{children:[" ℹ️ ",t==="eng"?"Store details":"매장 정보"," "]}),h.jsx(Cp,{children:h.jsxs(Tx,{children:[h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Store name (KOR/ENG)":"매장명 (한/영)"}),h.jsx(Oo,{children:`${s.name.kor} / ${s.name.eng}`})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Category (KOR/ENG)":"카테고리 (한/영)"}),h.jsx(Oo,{children:`${s.category.kor} / ${s.category.eng}`})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Theme (KOR/ENG)":"테마 (한/영)"}),h.jsx(Oo,{children:`${s.theme.kor} / ${s.theme.eng}`})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Business hours":"영업 시간"}),h.jsxs(Oo,{children:[s.openTime," - ",s.closeTime]})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Naver map":"네이버 지도"}),h.jsxs(TI,{href:s.naverMap,target:"_blank",rel:"noopener noreferrer",children:[t==="eng"?"View on map":"지도에서 보기"," ↗"]})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Branch (KOR/ENG)":"지점명 (한/영)"}),h.jsx(Oo,{children:`${s.branch.kor} / ${s.branch.eng}`})]})]})})]}),h.jsxs(Bg,{children:[h.jsxs(xx,{children:[" 📍 ",t==="eng"?"Address":"주소"," "]}),h.jsx(Cp,{children:h.jsxs(Tx,{children:[h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Latitude":"위도"}),h.jsx(Oo,{children:s.lat})]}),h.jsxs(Sr,{children:[h.jsx(Er,{children:t==="eng"?"Longitude":"경도"}),h.jsx(Oo,{children:s.lon})]})]})})]})]})]}):h.jsxs(_x,{children:[h.jsx(bx,{}),h.jsx(cI,{children:t==="eng"?"Store information was not found.":"매장 정보를 찾을 수 없습니다."})]})}const AI=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
`,kI=x.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`,jI=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,OI=x.input`
    display: none;
`,zI=x.label`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    aspect-ratio: calc((25vw * 0.92 * 0.90) / 20vh);
    border: 0.5px solid gray;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    color: gray;

    @media (max-width: 767px) {
        aspect-ratio: calc((100vw * 0.92 * 0.90) / 16vh);
    }
`,LI=x.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`,Cx=1200;function RI(t){return new Promise(i=>{t.toBlob(r=>i(r),"image/png")})}function MI(t){return new Promise((i,r)=>{const s=new Image,u=URL.createObjectURL(t);s.onload=()=>{URL.revokeObjectURL(u),i(s)},s.onerror=m=>{URL.revokeObjectURL(u),r(m)},s.src=u})}async function II(t){if(!t)return null;let i=0,r=0;const s=document.createElement("canvas"),u=s.getContext("2d");if(!u)return t;try{const m=await createImageBitmap(t,{imageOrientation:"from-image"});i=m.width,r=m.height;const p=Math.min(1,Cx/Math.max(i,r));s.width=Math.max(1,Math.round(i*p)),s.height=Math.max(1,Math.round(r*p)),u.drawImage(m,0,0,s.width,s.height),m.close()}catch{const m=await MI(t);i=m.naturalWidth||m.width,r=m.naturalHeight||m.height;const p=Math.min(1,Cx/Math.max(i,r));s.width=Math.max(1,Math.round(i*p)),s.height=Math.max(1,Math.round(r*p)),u.drawImage(m,0,0,s.width,s.height)}return await RI(s)??t}function PI({onChangePhoto:t,initialPreviewUrl:i}){const{language:r}=ze(),[s,u]=k.useState(i??null);k.useEffect(()=>{u(i??null)},[i]);async function m(p){try{const b=await II(p.target.files?.[0]);if(t(b),!b)return;const y=URL.createObjectURL(b);u(_=>(_?.startsWith("blob:")&&URL.revokeObjectURL(_),y))}catch(b){console.error(b),t(null)}}return h.jsxs(AI,{children:[h.jsx(kI,{children:h.jsxs(jI,{children:[" ",r==="eng"?"Store Photo":"매장 사진"," "]})}),h.jsx(OI,{type:"file",accept:"image/*",id:"imageFileInput",onChange:m}),h.jsx(zI,{htmlFor:"imageFileInput",children:s?h.jsx(LI,{src:s,alt:r==="eng"?"Store preview":"매장 미리보기"}):r==="eng"?"Upload Image":"이미지 업로드"})]})}const NI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,DI=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,BI=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,UI=x.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
`,FI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,Ax=x.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,kx=x.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,jx=x.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
`;function Ap({engTitle:t,korTitle:i,engPlaceholder:r="",korPlaceholder:s="",engLabel:u,korLabel:m,engAutoText:p="",korAutoText:b="",korValue:y,engValue:_,onChangeKor:T,onChangeEng:E}){const{language:j}=ze(),[M,z]=k.useState(!1),P=j==="eng"?"Ex)":"예)",H=!!(u||m);function B($){const W=$.target.checked;if(z(W),W){T(b),E(p);return}T(""),E("")}return h.jsxs(DI,{children:[h.jsxs(NI,{children:[h.jsxs(BI,{children:[" ",j==="eng"?t:i," "]}),H&&h.jsxs(UI,{children:[h.jsx("input",{type:"checkbox",checked:M,onChange:B}),j==="eng"?u:m]})]}),h.jsxs(FI,{children:[h.jsxs(Ax,{children:[h.jsxs(kx,{children:[" ",j==="eng"?"Korean":"한국어"," "]}),h.jsx(jx,{type:"text",value:y,onChange:$=>T($.target.value),placeholder:`${P} ${s}`})]}),h.jsxs(Ax,{children:[h.jsxs(kx,{children:[" ",j==="eng"?"English":"영어"," "]}),h.jsx(jx,{type:"text",value:_,onChange:$=>E($.target.value),placeholder:`${P} ${r}`})]})]})]})}const HI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
`,$I=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,VI=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,ZI=x.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
`,qI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-height: 0;
`,Ox=x.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: gray;
    min-height: 0;
`,zx=x.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,Lx=x.textarea`
    width: 100%;
    flex: 1;
    min-height: 2.5rem;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;function Rx({engTitle:t,korTitle:i,engPlaceholder:r="",korPlaceholder:s="",engLabel:u,korLabel:m,engAutoText:p="",korAutoText:b="",korValue:y,engValue:_,onChangeKor:T,onChangeEng:E}){const{language:j}=ze(),[M,z]=k.useState(!1),P=j==="eng"?"Ex)":"예)",H=!!(u||m);function B($){const W=$.target.checked;if(z(W),W){T(b),E(p);return}T(""),E("")}return h.jsxs($I,{children:[h.jsxs(HI,{children:[h.jsxs(VI,{children:[" ",j==="eng"?t:i," "]}),H&&h.jsxs(ZI,{children:[h.jsx("input",{type:"checkbox",checked:M,onChange:B}),j==="eng"?u:m]})]}),h.jsxs(qI,{children:[h.jsxs(Ox,{children:[h.jsxs(zx,{children:[" ",j==="eng"?"Korean":"한국어"," "]}),h.jsx(Lx,{value:y,onChange:$=>T($.target.value),placeholder:`${P} ${s}`})]}),h.jsxs(Ox,{children:[h.jsxs(zx,{children:[" ",j==="eng"?"English":"영어"," "]}),h.jsx(Lx,{value:_,onChange:$=>E($.target.value),placeholder:`${P} ${r}`})]})]})]})}const GI=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,YI=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,KI=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,Mx=x.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,Ix=x.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,Px=x.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
`;function WI({engTitle:t,korTitle:i,openTime:r,closeTime:s,onChangeOpenTime:u,onChangeCloseTime:m}){const{language:p}=ze();return h.jsxs(GI,{children:[h.jsxs(YI,{children:[" ",p==="eng"?t:i," "]}),h.jsxs(KI,{children:[h.jsxs(Mx,{children:[h.jsxs(Ix,{children:[" ",p==="eng"?"Open time":"영업 시작 시간"," "]}),h.jsx(Px,{type:"time",value:r,onChange:b=>u(b.target.value)})]}),h.jsxs(Mx,{children:[h.jsxs(Ix,{children:[" ",p==="eng"?"Close time":"영업 종료 시간"," "]}),h.jsx(Px,{type:"time",value:s,onChange:b=>m(b.target.value)})]})]})]})}const XI=x.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 0;
`,JI=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,QI=x.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,eP=x.select`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.2rem 0;
    font-size: 1rem;
    text-align: center;
    pointer-events: auto;
    color: gray;
`;function tP({selectedCategory:t,onChangeSelectedCategory:i}){const{categories:r}=tu(),{language:s}=ze();return h.jsxs(XI,{children:[h.jsxs(JI,{children:[" ",s==="eng"?"Store category":"카테고리"," "]}),h.jsx(QI,{children:h.jsxs(eP,{value:t,onChange:u=>i(u.target.value),children:[h.jsxs("option",{value:"",children:[" ",s==="eng"?"Select category":"카테고리 선택"," "]}),r.map(u=>h.jsx("option",{value:u.name.kor,children:s==="eng"?u.name.eng:u.name.kor},u._id))]})})]})}const nP=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,iP=x.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,aP=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,Nx=x.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,Dx=x.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,Bx=x.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;function rP({engTitle:t,korTitle:i,latitudePlaceholder:r="",longitudePlaceholder:s="",lat:u,lon:m,onChangeLat:p,onChangeLon:b}){const{language:y}=ze();return h.jsxs(nP,{children:[h.jsxs(iP,{children:[" ",y==="eng"?t:i," "]}),h.jsxs(aP,{children:[h.jsxs(Nx,{children:[h.jsxs(Dx,{children:[" ",y==="eng"?"Latitude":"위도"," "]}),h.jsx(Bx,{type:"number",step:"any",value:u,onChange:_=>p(_.target.value),placeholder:r})]}),h.jsxs(Nx,{children:[h.jsxs(Dx,{children:[" ",y==="eng"?"Longitude":"경도"," "]}),h.jsx(Bx,{type:"number",step:"any",value:m,onChange:_=>b(_.target.value),placeholder:s})]})]})]})}async function oP(t){const i=new URL("https://photon.komoot.io/api/");i.searchParams.set("q",t),i.searchParams.set("limit","1"),i.searchParams.set("lat","37.38"),i.searchParams.set("lon","126.66");const r=await $i(i.toString()),[s,u]=r.features?.[0]?.geometry?.coordinates??[];if(!Number.isFinite(u)||!Number.isFinite(s))throw new Error("주소를 찾을 수 없습니다. Cannot find that address.");return{lat:u,lon:s}}const sP=x.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0.7rem 1rem;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 767px) {
        height: auto;
        overflow: auto;
        padding: 0.6rem;
        align-items: flex-start;
    }
`,lP=x.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    width: 100%;
    height: 100%;
    min-height: 0;

    @media (max-width: 767px) {
        flex-direction: column;
        height: auto;
        gap: 1.2rem;
    }
`,Ux=x.div`
    width: 38%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 46%;
        gap: 1rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
    }
`,Fx=x.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.45rem;
`,Hx=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex-shrink: 0;
`,$x=x.p`
    font-weight: bold;
    margin: 0;
    text-align: left;
`,Vx=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    gap: 0.5rem;
`,Zx=x.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;
    resize: none;
`,cP=x.button`
    width: 20%;
    min-width: 4.2rem;
    flex-shrink: 0;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    background-color: white;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,uP=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-shrink: 0;
    margin-top: auto;
    padding-top: 0.5rem;
`,SE=x.button`
    width: 48%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    background-color: white;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,dP=x(SE)``,fP=x(SE)``,hP={categoryKor:"",name:{kor:"",eng:""},branch:{kor:"",eng:""},theme:{kor:"",eng:""},discount:{kor:"",eng:""},description:{kor:"",eng:""},naverMap:"",address:"",openTime:"",closeTime:"",lat:"",lon:""};function Ps(t){return t.trim()!==""}function gc(t){return Ps(t.kor)&&Ps(t.eng)}function Ls(t,i){return t.kor===i.kor&&t.eng===i.eng}function mP(t){return{categoryKor:t.category.kor,name:{kor:t.name.kor,eng:t.name.eng},branch:{kor:t.branch.kor,eng:t.branch.eng},theme:{kor:t.theme?.kor??"",eng:t.theme?.eng??""},discount:{kor:t.discount.kor,eng:t.discount.eng},description:{kor:t.description.kor,eng:t.description.eng},naverMap:t.naverMap,address:t.address?.kor||t.address?.eng||"",openTime:t.openTime,closeTime:t.closeTime,lat:String(t.lat),lon:String(t.lon)}}function pP(t,i,r,s){const u={};s!==void 0&&(u.photo=s),Ls(r,t.category)||(u.category=r),Ls(i.name,t.name)||(u.name=i.name),Ls(i.branch,t.branch)||(u.branch=i.branch),Ls(i.theme,{kor:t.theme?.kor??"",eng:t.theme?.eng??""})||(u.theme=i.theme),Ls(i.discount,t.discount)||(u.discount=i.discount),Ls(i.description,t.description)||(u.description=i.description),i.naverMap.trim()!==(t.naverMap??"")&&(u.naverMap=i.naverMap.trim());const m=i.address.trim(),p=t.address?.kor||t.address?.eng||"";return m!==p&&(u.address={kor:m,eng:m}),i.openTime!==t.openTime&&(u.openTime=i.openTime),i.closeTime!==t.closeTime&&(u.closeTime=i.closeTime),(i.lat.trim()!==String(t.lat)||i.lon.trim()!==String(t.lon))&&(u.lat=Number(i.lat),u.lon=Number(i.lon)),u}function Fg({storeIdOverride:t,cancelTo:i="/admin",afterSaveTo:r="/admin"}={}){const s=Yt(),{storeId:u}=XA(),m=t??u,{language:p}=ze(),{categories:b}=tu(),{stores:y,loadingState:_,addStore:T,updateStore:E}=wi(),j=y.find(ae=>ae._id===m),M=!!m,z=k.useRef(null),[P,H]=k.useState(!1),[B,$]=k.useState(hP),[W,ue]=k.useState(!1),[J,se]=k.useState(!1);k.useEffect(()=>{if(m&&_===T0){if(!j){s(i);return}$(mP(j)),H(!!j.photo),z.current=null}},[m,j,_,s,i]);const Q=Number(B.lat),he=Number(B.lon),Ce=!!(P&&b.find(ae=>ae.name.kor===B.categoryKor)&&gc(B.name)&&gc(B.branch)&&gc(B.theme)&&gc(B.discount)&&gc(B.description)&&Ps(B.naverMap)&&Ps(B.address)&&Ps(B.openTime)&&Ps(B.closeTime)&&Number.isFinite(Q)&&Number.isFinite(he));function Ue(ae,je){$(D=>({...D,[ae]:je}))}function ve(ae,je,D){$(le=>({...le,[ae]:{...le[ae],[je]:D}}))}async function ke(){const ae=B.address.trim();if(!ae){alert(p==="eng"?"Please enter an address.":"주소를 입력해 주세요.");return}if(!J){se(!0);try{const{lat:je,lon:D}=await oP(ae);$(le=>({...le,lat:String(je),lon:String(D)}))}catch(je){console.error(je),alert(p==="eng"?"Could not find that address.":"주소를 찾을 수 없습니다.")}finally{se(!1)}}}async function ge(){if(W||!Ce)return;const ae=b.find(je=>je.name.kor===B.categoryKor);if(ae){if(M){if(!j||!m)return}else if(!z.current)return;ue(!0);try{if(M&&j&&m){let re;z.current&&(re=await A_(z.current));const Me=pP(j,B,ae.name,re);if(Object.keys(Me).length>0){const ce=await qj(m,Me);E(ce)}alert(p==="eng"?"Successfully updated.":"성공적으로 수정되었습니다."),s(r);return}const je=z.current;if(!je)return;const D=await A_(je),le=await Zj({photo:D,category:ae.name,name:B.name,branch:B.branch,theme:B.theme,discount:B.discount,description:B.description,naverMap:B.naverMap.trim(),address:{kor:B.address.trim(),eng:B.address.trim()},openTime:B.openTime,closeTime:B.closeTime,lat:Number(B.lat),lon:Number(B.lon)});T(le),alert(p==="eng"?"Successfully saved.":"저장이 완료되었습니다."),s(r)}catch(je){console.error(je),alert(p==="eng"?"Failed to save the store.":"매장 저장에 실패했습니다.")}finally{ue(!1)}}}return h.jsx(sP,{children:h.jsxs(lP,{children:[h.jsx(Ux,{children:h.jsxs(Fx,{children:[h.jsx(PI,{initialPreviewUrl:M&&j?.photo?bi(j.photo):void 0,onChangePhoto:ae=>{z.current=ae,H(!!ae||!!(M&&j?.photo))}}),h.jsx(tP,{selectedCategory:B.categoryKor,onChangeSelectedCategory:ae=>Ue("categoryKor",ae)}),h.jsx(Ap,{engTitle:"Store name",korTitle:"매장 이름",engPlaceholder:"Outstanding cafe",korPlaceholder:"아웃스탠딩 카페",korValue:B.name.kor,engValue:B.name.eng,onChangeKor:ae=>ve("name","kor",ae),onChangeEng:ae=>ve("name","eng",ae)}),h.jsx(Rx,{engTitle:"SUNY discount",korTitle:"할인 정보",engPlaceholder:"Drink 10% discount",korPlaceholder:"음료 10% 할인",korValue:B.discount.kor,engValue:B.discount.eng,onChangeKor:ae=>ve("discount","kor",ae),onChangeEng:ae=>ve("discount","eng",ae)})]})}),h.jsx(Ux,{children:h.jsxs(Fx,{children:[h.jsx(Ap,{engTitle:"Store theme",korTitle:"매장 테마",engPlaceholder:"Korean food",korPlaceholder:"한식",korValue:B.theme.kor,engValue:B.theme.eng,onChangeKor:ae=>ve("theme","kor",ae),onChangeEng:ae=>ve("theme","eng",ae)}),h.jsx(Ap,{engTitle:"Store branch",korTitle:"매장 지점명",engPlaceholder:"Songdo branch",korPlaceholder:"송도점",engAutoText:"Main branch",korAutoText:"본점",engLabel:"Main branch",korLabel:"본점",korValue:B.branch.kor,engValue:B.branch.eng,onChangeKor:ae=>ve("branch","kor",ae),onChangeEng:ae=>ve("branch","eng",ae)}),h.jsxs(Hx,{children:[h.jsxs($x,{children:[" ",p==="eng"?"Naver map link":"네이버지도 링크"," "]}),h.jsx(Vx,{children:h.jsx(Zx,{type:"text",value:B.naverMap,onChange:ae=>Ue("naverMap",ae.target.value),placeholder:"https://map.naver.com/..."})})]}),h.jsx(WI,{engTitle:"Business hours",korTitle:"영업 시간",openTime:B.openTime,closeTime:B.closeTime,onChangeOpenTime:ae=>Ue("openTime",ae),onChangeCloseTime:ae=>Ue("closeTime",ae)}),h.jsxs(Hx,{children:[h.jsxs($x,{children:[" ",p==="eng"?"Store address":"매장 주소"," "]}),h.jsxs(Vx,{children:[h.jsx(Zx,{type:"text",value:B.address,onChange:ae=>Ue("address",ae.target.value),onKeyDown:ae=>{ae.key==="Enter"&&(ae.preventDefault(),ke())},placeholder:p==="eng"?"Enter address, automatically calculate lat/lon":"주소를 입력하면 위도/경도가 자동으로 계산됩니다"}),h.jsx(cP,{type:"button",disabled:J,onClick:ke,children:J?p==="eng"?"Searching":"검색 중":p==="eng"?"Search":"검색"})]})]}),h.jsx(rP,{engTitle:"Store lat/lon",korTitle:"매장 위도/경도",latitudePlaceholder:"37.3751739",longitudePlaceholder:"126.6682747",lat:B.lat,lon:B.lon,onChangeLat:ae=>Ue("lat",ae),onChangeLon:ae=>Ue("lon",ae)}),h.jsx(Rx,{engTitle:"Additional precautions",korTitle:"추가 유의사항",engPlaceholder:"Lunch special starts from Oct 21",korPlaceholder:"점심특선은 10월 21일부터 시행",engAutoText:"None",korAutoText:"없음",engLabel:"None",korLabel:"없음",korValue:B.description.kor,engValue:B.description.eng,onChangeKor:ae=>ve("description","kor",ae),onChangeEng:ae=>ve("description","eng",ae)}),h.jsxs(uP,{children:[h.jsx(dP,{type:"button",disabled:W,onClick:()=>s(i),children:p==="eng"?"Cancel":"취소"}),h.jsx(fP,{type:"button",disabled:W||!Ce,onClick:ge,children:p==="eng"?"Save":"저장"})]})]})})]})})}function gP(){const{owner:t}=Dr(),{language:i}=ze();return t?.storeId?h.jsx(Fg,{storeIdOverride:t.storeId,cancelTo:"/owner",afterSaveTo:"/owner"}):h.jsx("p",{children:i==="eng"?"Store information was not found.":"매장 정보를 찾을 수 없습니다."})}const vP=()=>{};var qx={};const EE=function(t){const i=[];let r=0;for(let s=0;s<t.length;s++){let u=t.charCodeAt(s);u<128?i[r++]=u:u<2048?(i[r++]=u>>6|192,i[r++]=u&63|128):(u&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(u=65536+((u&1023)<<10)+(t.charCodeAt(++s)&1023),i[r++]=u>>18|240,i[r++]=u>>12&63|128,i[r++]=u>>6&63|128,i[r++]=u&63|128):(i[r++]=u>>12|224,i[r++]=u>>6&63|128,i[r++]=u&63|128)}return i},yP=function(t){const i=[];let r=0,s=0;for(;r<t.length;){const u=t[r++];if(u<128)i[s++]=String.fromCharCode(u);else if(u>191&&u<224){const m=t[r++];i[s++]=String.fromCharCode((u&31)<<6|m&63)}else if(u>239&&u<365){const m=t[r++],p=t[r++],b=t[r++],y=((u&7)<<18|(m&63)<<12|(p&63)<<6|b&63)-65536;i[s++]=String.fromCharCode(55296+(y>>10)),i[s++]=String.fromCharCode(56320+(y&1023))}else{const m=t[r++],p=t[r++];i[s++]=String.fromCharCode((u&15)<<12|(m&63)<<6|p&63)}}return i.join("")},TE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,i){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let u=0;u<t.length;u+=3){const m=t[u],p=u+1<t.length,b=p?t[u+1]:0,y=u+2<t.length,_=y?t[u+2]:0,T=m>>2,E=(m&3)<<4|b>>4;let j=(b&15)<<2|_>>6,M=_&63;y||(M=64,p||(j=64)),s.push(r[T],r[E],r[j],r[M])}return s.join("")},encodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(t):this.encodeByteArray(EE(t),i)},decodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(t):yP(this.decodeStringToByteArray(t,i))},decodeStringToByteArray(t,i){this.init_();const r=i?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let u=0;u<t.length;){const m=r[t.charAt(u++)],b=u<t.length?r[t.charAt(u)]:0;++u;const _=u<t.length?r[t.charAt(u)]:64;++u;const E=u<t.length?r[t.charAt(u)]:64;if(++u,m==null||b==null||_==null||E==null)throw new bP;const j=m<<2|b>>4;if(s.push(j),_!==64){const M=b<<4&240|_>>2;if(s.push(M),E!==64){const z=_<<6&192|E;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _P=function(t){const i=EE(t);return TE.encodeByteArray(i,!0)},CE=function(t){return _P(t).replace(/\./g,"")},AE=function(t){try{return TE.decodeString(t,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};function xP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const wP=()=>xP().__FIREBASE_DEFAULTS__,SP=()=>{if(typeof process>"u"||typeof qx>"u")return;const t=qx.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=t&&AE(t[1]);return i&&JSON.parse(i)},B0=()=>{try{return vP()||wP()||SP()||EP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TP=t=>B0()?.emulatorHosts?.[t],kE=()=>B0()?.config,jE=t=>B0()?.[`_${t}`];class OE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}wrapCallback(i){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(r):i(r,s))}}}function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function AP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OP(){const t=dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zP(){try{return typeof indexedDB=="object"}catch{return!1}}function LP(){return new Promise((t,i)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(s);u.onsuccess=()=>{u.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},u.onupgradeneeded=()=>{r=!1},u.onerror=()=>{i(u.error?.message||"")}}catch(r){i(r)}})}const RP="FirebaseError";class Br extends Error{constructor(i,r,s){super(r),this.code=i,this.customData=s,this.name=RP,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ou.prototype.create)}}class ou{constructor(i,r,s){this.service=i,this.serviceName=r,this.errors=s}create(i,...r){const s=r[0]||{},u=`${this.service}/${i}`,m=this.errors[i],p=m?MP(m,s):"Error",b=`${this.serviceName}: ${p} (${u}).`;return new Br(u,b,s)}}function MP(t,i){try{let r=0,s="";for(;r<t.length;){const u=t.indexOf("{$",r);if(u===-1){s+=t.substring(r);break}const m=t.indexOf("}",u+2);if(m===-1){s+=t.substring(r);break}const p=t.substring(u+2,m),b=i[p];s+=t.substring(r,u)+(b!=null?String(b):`<${p}?>`),r=m+1}return s}catch{return t}}function IP(t){for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i))return!1;return!0}function Ks(t,i){if(t===i)return!0;const r=Object.keys(t),s=Object.keys(i);for(const u of r){if(!s.includes(u))return!1;const m=t[u],p=i[u];if(Gx(m)&&Gx(p)){if(!Ks(m,p))return!1}else if(m!==p)return!1}for(const u of s)if(!r.includes(u))return!1;return!0}function Gx(t){return t!==null&&typeof t=="object"}function ol(t){const i=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(u=>{i.push(encodeURIComponent(r)+"="+encodeURIComponent(u))}):i.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return i.length?"&"+i.join("&"):""}function PP(t,i){const r=new NP(t,i);return r.subscribe.bind(r)}class NP{constructor(i,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{i(this)}).catch(s=>{this.error(s)})}next(i){this.forEachObserver(r=>{r.next(i)})}error(i){this.forEachObserver(r=>{r.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,r,s){let u;if(i===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");DP(i,["next","error","complete"])?u=i:u={next:i,error:r,complete:s},u.next===void 0&&(u.next=kp),u.error===void 0&&(u.error=kp),u.complete===void 0&&(u.complete=kp);const m=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),m}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,i)}sendOne(i,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{r(this.observers[i])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DP(t,i){if(typeof t!="object"||t===null)return!1;for(const r of i)if(r in t&&typeof t[r]=="function")return!0;return!1}function kp(){}function Ma(t){return t&&t._delegate?t._delegate:t}function U0(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function BP(t){return(await fetch(t,{credentials:"include"})).ok}class Ws{constructor(i,r,s){this.name=i,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}const zo="[DEFAULT]";class UP{constructor(i,r){this.name=i,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const r=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(r)){const s=new OE;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:r});u&&s.resolve(u)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(i){const r=this.normalizeInstanceIdentifier(i?.identifier),s=i?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(s)return null;throw u}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(HP(i))try{this.getOrInitializeService({instanceIdentifier:zo})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);try{const m=this.getOrInitializeService({instanceIdentifier:u});s.resolve(m)}catch{}}}}clearInstance(i=zo){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...i.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=zo){return this.instances.has(i)}getOptions(i=zo){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:r={}}=i,s=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[m,p]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(m);s===b&&p.resolve(u)}return u}onInit(i,r){const s=this.normalizeInstanceIdentifier(r),u=this.onInitCallbacks.get(s)??new Set;u.add(i),this.onInitCallbacks.set(s,u);const m=this.instances.get(s);return m&&i(m,s),()=>{u.delete(i)}}invokeOnInitCallbacks(i,r){const s=this.onInitCallbacks.get(r);if(s)for(const u of s)try{u(i,r)}catch{}}getOrInitializeService({instanceIdentifier:i,options:r={}}){let s=this.instances.get(i);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FP(i),options:r}),this.instances.set(i,s),this.instancesOptions.set(i,r),this.invokeOnInitCallbacks(s,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,s)}catch{}return s||null}normalizeInstanceIdentifier(i=zo){return this.component?this.component.multipleInstances?i:zo:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FP(t){return t===zo?void 0:t}function HP(t){return t.instantiationMode==="EAGER"}class $P{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const r=this.getProvider(i.name);if(r.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);r.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const r=new UP(i,this);return this.providers.set(i,r),r}getProviders(){return Array.from(this.providers.values())}}var ft;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ft||(ft={}));const VP={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},ZP=ft.INFO,qP={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},GP=(t,i,...r)=>{if(i<t.logLevel)return;const s=new Date().toISOString(),u=qP[i];if(u)console[u](`[${s}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class zE{constructor(i){this.name=i,this._logLevel=ZP,this._logHandler=GP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in ft))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?VP[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...i),this._logHandler(this,ft.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...i),this._logHandler(this,ft.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...i),this._logHandler(this,ft.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...i),this._logHandler(this,ft.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...i),this._logHandler(this,ft.ERROR,...i)}}const YP=(t,i)=>i.some(r=>t instanceof r);let Yx,Kx;function KP(){return Yx||(Yx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WP(){return Kx||(Kx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,Hg=new WeakMap,RE=new WeakMap,jp=new WeakMap,F0=new WeakMap;function XP(t){const i=new Promise((r,s)=>{const u=()=>{t.removeEventListener("success",m),t.removeEventListener("error",p)},m=()=>{r(Lr(t.result)),u()},p=()=>{s(t.error),u()};t.addEventListener("success",m),t.addEventListener("error",p)});return i.then(r=>{r instanceof IDBCursor&&LE.set(r,t)}).catch(()=>{}),F0.set(i,t),i}function JP(t){if(Hg.has(t))return;const i=new Promise((r,s)=>{const u=()=>{t.removeEventListener("complete",m),t.removeEventListener("error",p),t.removeEventListener("abort",p)},m=()=>{r(),u()},p=()=>{s(t.error||new DOMException("AbortError","AbortError")),u()};t.addEventListener("complete",m),t.addEventListener("error",p),t.addEventListener("abort",p)});Hg.set(t,i)}let $g={get(t,i,r){if(t instanceof IDBTransaction){if(i==="done")return Hg.get(t);if(i==="objectStoreNames")return t.objectStoreNames||RE.get(t);if(i==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Lr(t[i])},set(t,i,r){return t[i]=r,!0},has(t,i){return t instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in t}};function QP(t){$g=t($g)}function e4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...r){const s=t.call(Op(this),i,...r);return RE.set(s,i.sort?i.sort():[i]),Lr(s)}:WP().includes(t)?function(...i){return t.apply(Op(this),i),Lr(LE.get(this))}:function(...i){return Lr(t.apply(Op(this),i))}}function t4(t){return typeof t=="function"?e4(t):(t instanceof IDBTransaction&&JP(t),YP(t,KP())?new Proxy(t,$g):t)}function Lr(t){if(t instanceof IDBRequest)return XP(t);if(jp.has(t))return jp.get(t);const i=t4(t);return i!==t&&(jp.set(t,i),F0.set(i,t)),i}const Op=t=>F0.get(t);function n4(t,i,{blocked:r,upgrade:s,blocking:u,terminated:m}={}){const p=indexedDB.open(t,i),b=Lr(p);return s&&p.addEventListener("upgradeneeded",y=>{s(Lr(p.result),y.oldVersion,y.newVersion,Lr(p.transaction),y)}),r&&p.addEventListener("blocked",y=>r(y.oldVersion,y.newVersion,y)),b.then(y=>{m&&y.addEventListener("close",()=>m()),u&&y.addEventListener("versionchange",_=>u(_.oldVersion,_.newVersion,_))}).catch(()=>{}),b}const i4=["get","getKey","getAll","getAllKeys","count"],a4=["put","add","delete","clear"],zp=new Map;function Wx(t,i){if(!(t instanceof IDBDatabase&&!(i in t)&&typeof i=="string"))return;if(zp.get(i))return zp.get(i);const r=i.replace(/FromIndex$/,""),s=i!==r,u=a4.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(u||i4.includes(r)))return;const m=async function(p,...b){const y=this.transaction(p,u?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(b.shift())),(await Promise.all([_[r](...b),u&&y.done]))[0]};return zp.set(i,m),m}QP(t=>({...t,get:(i,r,s)=>Wx(i,r)||t.get(i,r,s),has:(i,r)=>!!Wx(i,r)||t.has(i,r)}));class r4{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(o4(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function o4(t){return t.getComponent()?.type==="VERSION"}const Vg="@firebase/app",Xx="0.16.1";const Oa=new zE("@firebase/app"),s4="@firebase/app-compat",l4="@firebase/analytics-compat",c4="@firebase/analytics",u4="@firebase/app-check-compat",d4="@firebase/app-check",f4="@firebase/auth",h4="@firebase/auth-compat",m4="@firebase/database",p4="@firebase/data-connect",g4="@firebase/database-compat",v4="@firebase/functions",y4="@firebase/functions-compat",b4="@firebase/installations",_4="@firebase/installations-compat",x4="@firebase/messaging",w4="@firebase/messaging-compat",S4="@firebase/performance",E4="@firebase/performance-compat",T4="@firebase/remote-config",C4="@firebase/remote-config-compat",A4="@firebase/storage",k4="@firebase/storage-compat",j4="@firebase/firestore",O4="@firebase/ai",z4="@firebase/firestore-compat",L4="firebase",R4="12.18.0";const Zg="[DEFAULT]",M4={[Vg]:"fire-core",[s4]:"fire-core-compat",[c4]:"fire-analytics",[l4]:"fire-analytics-compat",[d4]:"fire-app-check",[u4]:"fire-app-check-compat",[f4]:"fire-auth",[h4]:"fire-auth-compat",[m4]:"fire-rtdb",[p4]:"fire-data-connect",[g4]:"fire-rtdb-compat",[v4]:"fire-fn",[y4]:"fire-fn-compat",[b4]:"fire-iid",[_4]:"fire-iid-compat",[x4]:"fire-fcm",[w4]:"fire-fcm-compat",[S4]:"fire-perf",[E4]:"fire-perf-compat",[T4]:"fire-rc",[C4]:"fire-rc-compat",[A4]:"fire-gcs",[k4]:"fire-gcs-compat",[j4]:"fire-fst",[z4]:"fire-fst-compat",[O4]:"fire-vertex","fire-js":"fire-js",[L4]:"fire-js-all"};const xf=new Map,I4=new Map,qg=new Map;function Jx(t,i){try{t.container.addComponent(i)}catch(r){Oa.debug(`Component ${i.name} failed to register with FirebaseApp ${t.name}`,r)}}function Yc(t){const i=t.name;if(qg.has(i))return Oa.debug(`There were multiple attempts to register component ${i}.`),!1;qg.set(i,t);for(const r of xf.values())Jx(r,t);for(const r of I4.values())Jx(r,t);return!0}function ME(t,i){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(i)}function mi(t){return t==null?!1:t.settings!==void 0}const P4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wa=new ou("app","Firebase",P4);class N4{constructor(i,r,s){this._isDeleted=!1,this._options={...i},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw wa.create("app-deleted",{appName:this._name})}}const su=R4;function IE(t,i={}){let r=t;typeof i!="object"&&(i={name:i});const s={name:Zg,automaticDataCollectionEnabled:!0,...i},u=s.name;if(typeof u!="string"||!u)throw wa.create("bad-app-name",{appName:String(u)});if(r||(r=kE()),!r)throw wa.create("no-options");const m=xf.get(u);if(m)if(Ks(r,m.options)){if(Ks(s,m.config))return m;throw wa.create("duplicate-app",{appName:u,mismatchedParam:"config",oldValue:JSON.stringify(m.config),newValue:JSON.stringify(s)})}else throw wa.create("duplicate-app",{appName:u,mismatchedParam:"options",oldValue:JSON.stringify(m.options),newValue:JSON.stringify(r)});const p=new $P(u);for(const y of qg.values())p.addComponent(y);const b=new N4(r,s,p);return xf.set(u,b),b}function D4(t=Zg){const i=xf.get(t);if(!i&&t===Zg&&kE())return IE();if(!i)throw wa.create("no-app",{appName:t});return i}function Us(t,i,r){let s=M4[t]??t;r&&(s+=`-${r}`);const u=s.match(/\s|\//),m=i.match(/\s|\//);if(u||m){const p=[`Unable to register library "${s}" with version "${i}":`];u&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),u&&m&&p.push("and"),m&&p.push(`version name "${i}" contains illegal characters (whitespace or "/")`),Oa.warn(p.join(" "));return}Yc(new Ws(`${s}-version`,()=>({library:s,version:i}),"VERSION"))}const B4="firebase-heartbeat-database",U4=1,Kc="firebase-heartbeat-store";let Lp=null;function PE(){return Lp||(Lp=n4(B4,U4,{upgrade:(t,i)=>{switch(i){case 0:try{t.createObjectStore(Kc)}catch(r){console.warn(r)}}}}).catch(t=>{throw wa.create("idb-open",{originalErrorMessage:t.message})})),Lp}async function F4(t){try{const r=(await PE()).transaction(Kc),s=await r.objectStore(Kc).get(NE(t));return await r.done,s}catch(i){if(i instanceof Br)Oa.warn(i.message);else{const r=wa.create("idb-get",{originalErrorMessage:i?.message});Oa.warn(r.message)}}}async function Qx(t,i){try{const s=(await PE()).transaction(Kc,"readwrite");await s.objectStore(Kc).put(i,NE(t)),await s.done}catch(r){if(r instanceof Br)Oa.warn(r.message);else{const s=wa.create("idb-set",{originalErrorMessage:r?.message});Oa.warn(s.message)}}}function NE(t){return`${t.name}!${t.options.appId}`}const H4=1024,$4=30;class V4{constructor(i){this.container=i,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new q4(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ew();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(u=>u.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>$4){const u=G4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Oa.warn(i)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=ew(),{heartbeatsToSend:r,unsentEntries:s}=Z4(this._heartbeatsCache.heartbeats),u=CE(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return Oa.warn(i),""}}}function ew(){return new Date().toISOString().substring(0,10)}function Z4(t,i=H4){const r=[];let s=t.slice();for(const u of t){const m=r.find(p=>p.agent===u.agent);if(m){if(m.dates.push(u.date),tw(r)>i){m.dates.pop();break}}else if(r.push({agent:u.agent,dates:[u.date]}),tw(r)>i){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class q4{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zP()?LP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await F4(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(i){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qx(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qx(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...i.heartbeats]})}else return}}function tw(t){return CE(JSON.stringify({version:2,heartbeats:t})).length}function G4(t){if(t.length===0)return-1;let i=0,r=t[0].date;for(let s=1;s<t.length;s++)t[s].date<r&&(r=t[s].date,i=s);return i}function Y4(t){Yc(new Ws("platform-logger",i=>new r4(i),"PRIVATE")),Yc(new Ws("heartbeat",i=>new V4(i),"PRIVATE")),Us(Vg,Xx,t),Us(Vg,Xx,"esm2020"),Us("fire-js","")}Y4("");function DE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K4=DE,BE=new ou("auth","Firebase",DE());const wf=new zE("@firebase/auth");function UE(t,...i){wf.logLevel<=ft.WARN&&wf.warn(`Auth (${su}): ${t}`,...i)}function cf(t,...i){wf.logLevel<=ft.ERROR&&wf.error(`Auth (${su}): ${t}`,...i)}function za(t,...i){throw H0(t,...i)}function In(t,...i){return H0(t,...i)}function FE(t,i,r){const s={...K4(),[i]:r};return new ou("auth","Firebase",s).create(i,{appName:t.name})}function Ca(t){return FE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H0(t,...i){if(typeof t!="string"){const r=i[0],s=[...i.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(r,...s)}return BE.create(t,...i)}function ye(t,i,...r){if(!t)throw H0(i,...r)}function Sa(t){const i="INTERNAL ASSERTION FAILED: "+t;throw cf(i),new Error(i)}function La(t,i){t||Sa(i)}function Gg(){return typeof self<"u"&&self.location?.href||""}function HE(){return nw()==="http:"||nw()==="https:"}function nw(){return typeof self<"u"&&self.location?.protocol||null}function W4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HE()||kP()||"connection"in navigator)?navigator.onLine:!0}function X4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class lu{constructor(i,r){this.shortDelay=i,this.longDelay=r,La(r>i,"Short delay should be less than long delay!"),this.isMobile=CP()||jP()}get(){return W4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function $0(t,i){La(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return i?`${r}${i.startsWith("/")?i.slice(1):i}`:r}class $E{static initialize(i,r,s){this.fetchImpl=i,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const J4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Q4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eN=new lu(3e4,6e4);function qi(t,i){return t.tenantId&&!i.tenantId?{...i,tenantId:t.tenantId}:i}async function Si(t,i,r,s,u={}){return VE(t,u,async()=>{let m={},p={};s&&(i==="GET"?p=s:m={body:JSON.stringify(s)});const b=ol({...p,key:t.config.apiKey}).slice(1),y=await t._getAdditionalHeaders();y["Content-Type"]="application/json",t.languageCode&&(y["X-Firebase-Locale"]=t.languageCode);const _={method:i,headers:y,...m};return AP()||(_.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&U0(t.emulatorConfig.host)&&(_.credentials="include"),$E.fetch()(await ZE(t,t.config.apiHost,r,b),_)})}async function VE(t,i,r){t._canInitEmulator=!1;const s={...J4,...i};try{const u=new nN(t),m=await Promise.race([r(),u.promise]);u.clearNetworkTimeout();const p=await m.json();if("needConfirmation"in p)throw jc(t,"account-exists-with-different-credential",p);if(m.ok&&!("errorMessage"in p))return p;{const b=m.ok?p.errorMessage:p.error.message,[y,_]=b.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(t,"credential-already-in-use",p);if(y==="EMAIL_EXISTS")throw jc(t,"email-already-in-use",p);if(y==="USER_DISABLED")throw jc(t,"user-disabled",p);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw FE(t,T,_);za(t,T)}}catch(u){if(u instanceof Br)throw u;za(t,"network-request-failed",{message:String(u)})}}async function Jf(t,i,r,s,u={}){const m=await Si(t,i,r,s,u);return"mfaPendingCredential"in m&&za(t,"multi-factor-auth-required",{_serverResponse:m}),m}async function ZE(t,i,r,s){const u=`${i}${r}?${s}`,m=t,p=m.config.emulator?$0(t.config,u):`${t.config.apiScheme}://${u}`;return Q4.includes(r)&&(await m._persistenceManagerAvailable,m._getPersistenceType()==="COOKIE")?m._getPersistence()._getFinalTarget(p).toString():p}function tN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(In(this.auth,"network-request-failed")),eN.get())})}}function jc(t,i,r){const s={appName:t.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const u=In(t,i,s);return u.customData._tokenResponse=r,u}function iw(t){return t!==void 0&&t.getResponse!==void 0}function aw(t){return t!==void 0&&t.enterprise!==void 0}class qE{constructor(i){if(this.siteKey="",this.recaptchaEnforcementState=[],i.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=i.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=i.recaptchaEnforcementState}getProviderEnforcementState(i){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===i)return tN(r.enforcementState);return null}isProviderEnabled(i){return this.getProviderEnforcementState(i)==="ENFORCE"||this.getProviderEnforcementState(i)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iN(t){return(await Si(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function GE(t,i){return Si(t,"GET","/v2/recaptchaConfig",qi(t,i))}async function aN(t,i){return Si(t,"POST","/v1/accounts:delete",i)}async function Sf(t,i){return Si(t,"POST","/v1/accounts:lookup",i)}function Pc(t){if(t)try{const i=new Date(Number(t));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function rN(t,i=!1){const r=Ma(t),s=await r.getIdToken(i),u=V0(s);ye(u&&u.exp&&u.auth_time&&u.iat,r.auth,"internal-error");const m=typeof u.firebase=="object"?u.firebase:void 0,p=m?.sign_in_provider;return{claims:u,token:s,authTime:Pc(Rp(u.auth_time)),issuedAtTime:Pc(Rp(u.iat)),expirationTime:Pc(Rp(u.exp)),signInProvider:p||null,signInSecondFactor:m?.sign_in_second_factor||null}}function Rp(t){return Number(t)*1e3}function V0(t){const[i,r,s]=t.split(".");if(i===void 0||r===void 0||s===void 0)return cf("JWT malformed, contained fewer than 3 sections"),null;try{const u=AE(r);return u?JSON.parse(u):(cf("Failed to decode base64 JWT payload"),null)}catch(u){return cf("Caught error parsing JWT payload as JSON",u?.toString()),null}}function rw(t){const i=V0(t);return ye(i,"internal-error"),ye(typeof i.exp<"u","internal-error"),ye(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}async function Wc(t,i,r=!1){if(r)return i;try{return await i}catch(s){throw s instanceof Br&&oN(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class sN{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){if(i){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(i=!1){if(!this.isRunning)return;const r=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){i?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Yg{constructor(i,r){this.createdAt=i,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pc(this.lastLoginAt),this.creationTime=Pc(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Ef(t){const i=t.auth,r=await t.getIdToken(),s=await Wc(t,Sf(i,{idToken:r}));ye(s?.users.length,i,"internal-error");const u=s.users[0];t._notifyReloadListener(u);const m=u.providerUserInfo?.length?YE(u.providerUserInfo):[],p=cN(t.providerData,m),b=t.isAnonymous,y=!(t.email&&u.passwordHash)&&!p?.length,_=b?y:!1,T={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Yg(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(t,T)}async function lN(t){const i=Ma(t);await Ef(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function cN(t,i){return[...t.filter(s=>!i.some(u=>u.providerId===s.providerId)),...i]}function YE(t){return t.map(({providerId:i,...r})=>({providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function uN(t,i){const r=await VE(t,{},async()=>{const s=ol({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:u,apiKey:m}=t.config,p=await ZE(t,u,"/v1/token",`key=${m}`),b=await t._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:b,body:s};return t.emulatorConfig&&U0(t.emulatorConfig.host)&&(y.credentials="include"),$E.fetch()(p,y)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function dN(t,i){return Si(t,"POST","/v2/accounts:revokeToken",qi(t,i))}class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){ye(i.idToken,"internal-error"),ye(typeof i.idToken<"u","internal-error"),ye(typeof i.refreshToken<"u","internal-error");const r="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):rw(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,r)}updateFromIdToken(i){ye(i.length!==0,"internal-error");const r=rw(i);this.updateTokensAndExpiration(i,null,r)}async getToken(i,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,i,"user-token-expired"),this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(i,r){const{accessToken:s,refreshToken:u,expiresIn:m}=await uN(i,r);this.updateTokensAndExpiration(s,u,Number(m))}updateTokensAndExpiration(i,r,s){this.refreshToken=r||null,this.accessToken=i||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(i,r){const{refreshToken:s,accessToken:u,expirationTime:m}=r,p=new Fs;return s&&(ye(typeof s=="string","internal-error",{appName:i}),p.refreshToken=s),u&&(ye(typeof u=="string","internal-error",{appName:i}),p.accessToken=u),m&&(ye(typeof m=="number","internal-error",{appName:i}),p.expirationTime=m),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Sa("not implemented")}}function Tr(t,i){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:i})}class gi{constructor({uid:i,auth:r,stsTokenManager:s,...u}){this.providerId="firebase",this.proactiveRefresh=new sN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Yg(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(i){const r=await Wc(this,this.stsTokenManager.getToken(this.auth,i));return ye(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(i){return rN(this,i)}reload(){return lN(this)}_assign(i){this!==i&&(ye(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(r=>({...r})),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){const r=new gi({...this,auth:i,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(i){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,r=!1){let s=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),s=!0),r&&await Ef(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mi(this.auth.app))return Promise.reject(Ca(this.auth));const i=await this.getIdToken();return await Wc(this,aN(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>({...i})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,r){const s=r.displayName??void 0,u=r.email??void 0,m=r.phoneNumber??void 0,p=r.photoURL??void 0,b=r.tenantId??void 0,y=r._redirectEventId??void 0,_=r.createdAt??void 0,T=r.lastLoginAt??void 0,{uid:E,emailVerified:j,isAnonymous:M,providerData:z,stsTokenManager:P}=r;ye(E&&P,i,"internal-error");const H=Fs.fromJSON(this.name,P);ye(typeof E=="string",i,"internal-error"),Tr(s,i.name),Tr(u,i.name),ye(typeof j=="boolean",i,"internal-error"),ye(typeof M=="boolean",i,"internal-error"),Tr(m,i.name),Tr(p,i.name),Tr(b,i.name),Tr(y,i.name),Tr(_,i.name),Tr(T,i.name);const B=new gi({uid:E,auth:i,email:u,emailVerified:j,displayName:s,isAnonymous:M,photoURL:p,phoneNumber:m,tenantId:b,stsTokenManager:H,createdAt:_,lastLoginAt:T});return z&&Array.isArray(z)&&(B.providerData=z.map($=>({...$}))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(i,r,s=!1){const u=new Fs;u.updateFromServerResponse(r);const m=new gi({uid:r.localId,auth:i,stsTokenManager:u,isAnonymous:s});return await Ef(m),m}static async _fromGetAccountInfoResponse(i,r,s){const u=r.users[0];ye(u.localId!==void 0,"internal-error");const m=u.providerUserInfo!==void 0?YE(u.providerUserInfo):[],p=!(u.email&&u.passwordHash)&&!m?.length,b=new Fs;b.updateFromIdToken(s);const y=new gi({uid:u.localId,auth:i,stsTokenManager:b,isAnonymous:p}),_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Yg(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!m?.length};return Object.assign(y,_),y}}const ow=new Map;function Ea(t){La(t instanceof Function,"Expected a class definition");let i=ow.get(t);return i?(La(i instanceof t,"Instance stored in cache mismatched with class"),i):(i=new t,ow.set(t,i),i)}class KE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,r){this.storage[i]=r}async _get(i){const r=this.storage[i];return r===void 0?null:r}async _remove(i){delete this.storage[i]}_addListener(i,r){}_removeListener(i,r){}}KE.type="NONE";const sw=KE;function uf(t,i,r){return`firebase:${t}:${i}:${r}`}class Hs{constructor(i,r,s){this.persistence=i,this.auth=r,this.userKey=s;const{config:u,name:m}=this.auth;this.fullUserKey=uf(this.userKey,u.apiKey,m),this.fullPersistenceKey=uf("persistence",u.apiKey,m),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);if(!i)return null;if(typeof i=="string"){const r=await Sf(this.auth,{idToken:i}).catch(()=>{});return r?gi._fromGetAccountInfoResponse(this.auth,r,i):null}return gi._fromJSON(this.auth,i)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,r,s="authUser"){if(!r.length)return new Hs(Ea(sw),i,s);const u=(await Promise.all(r.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let m=u[0]||Ea(sw);const p=uf(s,i.config.apiKey,i.name);let b=null;for(const _ of r)try{const T=await _._get(p);if(T){let E;if(typeof T=="string"){const j=await Sf(i,{idToken:T}).catch(()=>{});if(!j)break;E=await gi._fromGetAccountInfoResponse(i,j,T)}else E=gi._fromJSON(i,T);_!==m&&(b=E),m=_;break}}catch{}const y=u.filter(_=>_._shouldAllowMigration);return!m._shouldAllowMigration||!y.length?new Hs(m,i,s):(m=y[0],b&&await m._set(p,b.toJSON()),await Promise.all(r.map(async _=>{if(_!==m)try{await _._remove(p)}catch{}})),new Hs(m,i,s))}}function lw(t){const i=t.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(QE(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(WE(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(tT(i))return"Blackberry";if(nT(i))return"Webos";if(XE(i))return"Safari";if((i.includes("chrome/")||JE(i))&&!i.includes("edge/"))return"Chrome";if(eT(i))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(r);if(s?.length===2)return s[1]}return"Other"}function WE(t=dn()){return/firefox\//i.test(t)}function XE(t=dn()){const i=t.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function JE(t=dn()){return/crios\//i.test(t)}function QE(t=dn()){return/iemobile/i.test(t)}function eT(t=dn()){return/android/i.test(t)}function tT(t=dn()){return/blackberry/i.test(t)}function nT(t=dn()){return/webos/i.test(t)}function Z0(t=dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fN(t=dn()){return Z0(t)&&!!window.navigator?.standalone}function hN(){return OP()&&document.documentMode===10}function iT(t=dn()){return Z0(t)||eT(t)||nT(t)||tT(t)||/windows phone/i.test(t)||QE(t)}function aT(t,i=[]){let r;switch(t){case"Browser":r=lw(dn());break;case"Worker":r=`${lw(dn())}-${t}`;break;default:r=t}const s=i.length?i.join(","):"FirebaseCore-web";return`${r}/JsCore/${su}/${s}`}class mN{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,r){const s=m=>new Promise((p,b)=>{try{const y=i(m);p(y)}catch(y){b(y)}});s.onAbort=r,this.queue.push(s);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;const r=[];try{for(const s of this.queue)await s(i),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const u of r)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}async function pN(t,i={}){return Si(t,"GET","/v2/passwordPolicy",qi(t,i))}const gN=6;class vN{constructor(i){const r=i.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??gN,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=i.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=i.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=i.forceUpgradeOnSignin??!1,this.schemaVersion=i.schemaVersion}validatePassword(i){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(i,r),this.validatePasswordCharacterOptions(i,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(i,r){const s=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=i.length>=s),u&&(r.meetsMaxPasswordLength=i.length<=u)}validatePasswordCharacterOptions(i,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let u=0;u<i.length;u++)s=i.charAt(u),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(i,r,s,u,m){this.customStrengthOptions.containsLowercaseLetter&&(i.containsLowercaseLetter||(i.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(i.containsUppercaseLetter||(i.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(i.containsNumericCharacter||(i.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(i.containsNonAlphanumericCharacter||(i.containsNonAlphanumericCharacter=m))}}class yN{constructor(i,r,s,u){this.app=i,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cw(this),this.idTokenSubscription=new cw(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=u.sdkClientVersion,this._persistenceManagerAvailable=new Promise(m=>this._resolvePersistenceManagerAvailable=m)}_initializeWithPersistence(i,r){return r&&(this._popupRedirectResolver=Ea(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Hs.create(this,i),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUserFromIdToken(i){try{const r=await Sf(this,{idToken:i}),s=await gi._fromGetAccountInfoResponse(this,r,i);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(i){if(mi(this.app)){const m=this.app.settings.authIdToken;return m?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(m).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,u=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const m=this.redirectUser?._redirectEventId,p=s?._redirectEventId,b=await this.tryRedirectSignIn(i);(!m||m===p)&&b?.user&&(s=b.user,u=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(s)}catch(m){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(m))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(i){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(i){try{await Ef(i)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=X4()}async _delete(){this._deleted=!0}async updateCurrentUser(i){if(mi(this.app))return Promise.reject(Ca(this));const r=i?Ma(i):null;return r&&ye(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(i,r=!1){if(!this._deleted)return i&&ye(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return mi(this.app)?Promise.reject(Ca(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(i){return mi(this.app)?Promise.reject(Ca(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ea(i))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(i){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(i)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const i=await pN(this),r=new vN(i);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(i){this._errorFactory=new ou("auth","Firebase",i())}onAuthStateChanged(i,r,s){return this.registerStateListener(this.authStateSubscription,i,r,s)}beforeAuthStateChanged(i,r){return this.beforeStateQueue.pushCallback(i,r)}onIdTokenChanged(i,r,s){return this.registerStateListener(this.idTokenSubscription,i,r,s)}authStateReady(){return new Promise((i,r)=>{if(this.currentUser)i();else{const s=this.onAuthStateChanged(()=>{s(),i()},r)}})}async revokeAccessToken(i){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:i,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await dN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(i,r){const s=await this.getOrInitRedirectPersistenceManager(r);return i===null?s.removeCurrentUser():s.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const r=i&&Ea(i)||this._popupRedirectResolver;ye(r,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Ea(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===i?this._currentUser:this.redirectUser?._redirectEventId===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=this.currentUser?.uid??null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,r,s,u){if(this._deleted)return()=>{};const m=typeof r=="function"?r:r.next.bind(r);let p=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(b,this,"internal-error"),b.then(()=>{p||m(this.currentUser)}),typeof r=="function"){const y=i.addObserver(r,s,u);return()=>{p=!0,y()}}else{const y=i.addObserver(r);return()=>{p=!0,y()}}}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(i["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){if(mi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return i?.error&&UE(`Error while retrieving App Check token: ${i.error}`),i?.token}}function Ia(t){return Ma(t)}class cw{constructor(i){this.auth=i,this.observer=null,this.addObserver=PP(r=>this.observer=r)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bN(t){cu=t}function q0(t){return cu.loadJS(t)}function _N(){return cu.recaptchaV2Script}function xN(){return cu.recaptchaEnterpriseScript}function wN(){return cu.gapiScript}function rT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SN=500,EN=6e4,Yd=1e12;class TN{constructor(i){this.auth=i,this.counter=Yd,this._widgets=new Map}render(i,r){const s=this.counter;return this._widgets.set(s,new kN(i,this.auth.name,r||{})),this.counter++,s}reset(i){const r=i||Yd;this._widgets.get(r)?.delete(),this._widgets.delete(r)}getResponse(i){const r=i||Yd;return this._widgets.get(r)?.getResponse()||""}async execute(i){const r=i||Yd;return this._widgets.get(r)?.execute(),""}}class CN{constructor(){this.enterprise=new AN}ready(i){i()}execute(i,r){return Promise.resolve("token")}render(i,r){return""}}class AN{ready(i){i()}execute(i,r){return Promise.resolve("token")}render(i,r){return""}}class kN{constructor(i,r,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const u=typeof i=="string"?document.getElementById(i):i;ye(u,"argument-error",{appName:r}),this.container=u,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=jN(50);const{callback:i,"expired-callback":r}=this.params;if(i)try{i(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch{}this.isVisible&&this.execute()},EN)},SN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function jN(t){const i=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)i.push(r.charAt(Math.floor(Math.random()*r.length)));return i.join("")}const ON="recaptcha-enterprise",Nc="NO_RECAPTCHA",uw="onFirebaseAuthREInstanceReady";class xa{constructor(i){this.type=ON,this.auth=Ia(i)}async verify(i="verify",r=!1){async function s(m){if(!r){if(m.tenantId==null&&m._agentRecaptchaConfig!=null)return m._agentRecaptchaConfig.siteKey;if(m.tenantId!=null&&m._tenantRecaptchaConfigs[m.tenantId]!==void 0)return m._tenantRecaptchaConfigs[m.tenantId].siteKey}return new Promise(async(p,b)=>{GE(m,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)b(new Error("recaptcha Enterprise site key undefined"));else{const _=new qE(y);return m.tenantId==null?m._agentRecaptchaConfig=_:m._tenantRecaptchaConfigs[m.tenantId]=_,p(_.siteKey)}}).catch(y=>{b(y)})})}function u(m,p,b){const y=window.grecaptcha;aw(y)?y.enterprise.ready(()=>{y.enterprise.execute(m,{action:i}).then(_=>{p(_)}).catch(()=>{p(Nc)})}):b(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CN().execute("siteKey",{action:"verify"}):new Promise((m,p)=>{s(this.auth).then(async b=>{if(!r&&aw(window.grecaptcha)&&xa.scriptInjectionDeferred)await xa.scriptInjectionDeferred.promise,u(b,m,p);else{if(typeof window>"u"){p(new Error("RecaptchaVerifier is only supported in browser"));return}let y=xN();y.length!==0&&(y+=b+`&onload=${uw}`),xa.scriptInjectionDeferred=new OE,window[uw]=()=>{xa.scriptInjectionDeferred?.resolve()},q0(y).then(()=>xa.scriptInjectionDeferred?.promise).then(()=>{u(b,m,p)}).catch(_=>{p(_)})}}).catch(b=>{p(b)})})}}xa.scriptInjectionDeferred=null;async function Mp(t,i,r,s=!1,u=!1){const m=new xa(t);let p;if(u)p=Nc;else try{p=await m.verify(r)}catch{p=await m.verify(r,!0)}const b={...i};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in b){const y=b.phoneEnrollmentInfo.phoneNumber,_=b.phoneEnrollmentInfo.recaptchaToken;Object.assign(b,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:p,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in b){const y=b.phoneSignInInfo.recaptchaToken;Object.assign(b,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:p,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return b}return s?Object.assign(b,{captchaResp:p}):Object.assign(b,{captchaResponse:p}),Object.assign(b,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(b,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),b}async function Ip(t,i,r,s,u){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const m=await Mp(t,i,r);return s(t,m).catch(async p=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);const b=await Mp(t,i,r,!1,!0);return s(t,b)}return Promise.reject(p)})}else{const m=await Mp(t,i,r,!1,!0);return s(t,m)}}async function zN(t){const i=Ia(t),r=await GE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new qE(r);i.tenantId==null?i._agentRecaptchaConfig=s:i._tenantRecaptchaConfigs[i.tenantId]=s,s.isAnyProviderEnabled()&&new xa(i).verify()}function LN(t,i){const r=ME(t,"auth");if(r.isInitialized()){const u=r.getImmediate(),m=r.getOptions();if(Ks(m,i??{}))return u;za(u,"already-initialized")}return r.initialize({options:i})}function RN(t,i){const r=i?.persistence||[],s=(Array.isArray(r)?r:[r]).map(Ea);i?.errorMap&&t._updateErrorMap(i.errorMap),t._initializeWithPersistence(s,i?.popupRedirectResolver)}function MN(t,i,r){const s=Ia(t);ye(/^https?:\/\//.test(i),s,"invalid-emulator-scheme");const u=!1,m=oT(i),{host:p,port:b}=IN(i),y=b===null?"":`:${b}`,_={url:`${m}//${p}${y}/`},T=Object.freeze({host:p,port:b,protocol:m.replace(":",""),options:Object.freeze({disableWarnings:u})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(Ks(_,s.config.emulator)&&Ks(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,U0(p)?BP(`${m}//${p}${y}`):PN()}function oT(t){const i=t.indexOf(":");return i<0?"":t.substr(0,i+1)}function IN(t){const i=oT(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(i.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(s);if(u){const m=u[1];return{host:m,port:dw(s.substr(m.length+1))}}else{const[m,p]=s.split(":");return{host:m,port:dw(p)}}}function dw(t){if(!t)return null;const i=Number(t);return isNaN(i)?null:i}function PN(){function t(){const i=document.createElement("p"),r=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class G0{constructor(i,r){this.providerId=i,this.signInMethod=r}toJSON(){return Sa("not implemented")}_getIdTokenResponse(i){return Sa("not implemented")}_linkToIdToken(i,r){return Sa("not implemented")}_getReauthenticationResolver(i){return Sa("not implemented")}}async function $s(t,i){return Jf(t,"POST","/v1/accounts:signInWithIdp",qi(t,i))}const NN="http://localhost";class Uo extends G0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const r=new Uo(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(r.idToken=i.idToken),i.accessToken&&(r.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(r.nonce=i.nonce),i.pendingToken&&(r.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(r.accessToken=i.oauthToken,r.secret=i.oauthTokenSecret):za("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i,{providerId:s,signInMethod:u,...m}=r;if(!s||!u)return null;const p=new Uo(s,u);return p.idToken=m.idToken||void 0,p.accessToken=m.accessToken||void 0,p.secret=m.secret,p.nonce=m.nonce,p.pendingToken=m.pendingToken||null,p}_getIdTokenResponse(i){const r=this.buildRequest();return $s(i,r)}_linkToIdToken(i,r){const s=this.buildRequest();return s.idToken=r,$s(i,s)}_getReauthenticationResolver(i){const r=this.buildRequest();return r.autoCreate=!1,$s(i,r)}buildRequest(){const i={requestUri:NN,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),i.postBody=ol(r)}return i}}async function fw(t,i){return Si(t,"POST","/v1/accounts:sendVerificationCode",qi(t,i))}async function DN(t,i){return Jf(t,"POST","/v1/accounts:signInWithPhoneNumber",qi(t,i))}async function BN(t,i){const r=await Jf(t,"POST","/v1/accounts:signInWithPhoneNumber",qi(t,i));if(r.temporaryProof)throw jc(t,"account-exists-with-different-credential",r);return r}const UN={USER_NOT_FOUND:"user-not-found"};async function FN(t,i){const r={...i,operation:"REAUTH"};return Jf(t,"POST","/v1/accounts:signInWithPhoneNumber",qi(t,r),UN)}class Po extends G0{constructor(i){super("phone","phone"),this.params=i}static _fromVerification(i,r){return new Po({verificationId:i,verificationCode:r})}static _fromTokenResponse(i,r){return new Po({phoneNumber:i,temporaryProof:r})}_getIdTokenResponse(i){return DN(i,this._makeVerificationRequest())}_linkToIdToken(i,r){return BN(i,{idToken:r,...this._makeVerificationRequest()})}_getReauthenticationResolver(i){return FN(i,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:i,phoneNumber:r,verificationId:s,verificationCode:u}=this.params;return i&&r?{temporaryProof:i,phoneNumber:r}:{sessionInfo:s,code:u}}toJSON(){const i={providerId:this.providerId};return this.params.phoneNumber&&(i.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(i.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(i.verificationCode=this.params.verificationCode),this.params.verificationId&&(i.verificationId=this.params.verificationId),i}static fromJSON(i){typeof i=="string"&&(i=JSON.parse(i));const{verificationId:r,verificationCode:s,phoneNumber:u,temporaryProof:m}=i;return!s&&!r&&!u&&!m?null:new Po({verificationId:r,verificationCode:s,phoneNumber:u,temporaryProof:m})}}class sT{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}class uu extends sT{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}class Ar extends uu{constructor(){super("facebook.com")}static credential(i){return Uo._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Ar.credentialFromTaggedObject(i)}static credentialFromError(i){return Ar.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Ar.credential(i.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";class kr extends uu{constructor(){super("google.com"),this.addScope("profile")}static credential(i,r){return Uo._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:r})}static credentialFromResult(i){return kr.credentialFromTaggedObject(i)}static credentialFromError(i){return kr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:r,oauthAccessToken:s}=i;if(!r&&!s)return null;try{return kr.credential(r,s)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";class jr extends uu{constructor(){super("github.com")}static credential(i){return Uo._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return jr.credentialFromTaggedObject(i)}static credentialFromError(i){return jr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return jr.credential(i.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";class Or extends uu{constructor(){super("twitter.com")}static credential(i,r){return Uo._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:r})}static credentialFromResult(i){return Or.credentialFromTaggedObject(i)}static credentialFromError(i){return Or.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=i;if(!r||!s)return null;try{return Or.credential(r,s)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";class Xs{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,r,s,u=!1){const m=await gi._fromIdTokenResponse(i,s,u),p=hw(s);return new Xs({user:m,providerId:p,_tokenResponse:s,operationType:r})}static async _forOperation(i,r,s){await i._updateTokensIfNecessary(s,!0);const u=hw(s);return new Xs({user:i,providerId:u,_tokenResponse:s,operationType:r})}}function hw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class Tf extends Br{constructor(i,r,s,u){super(r.code,r.message),this.operationType=s,this.user=u,Object.setPrototypeOf(this,Tf.prototype),this.customData={appName:i.name,tenantId:i.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(i,r,s,u){return new Tf(i,r,s,u)}}function lT(t,i,r,s){return(i==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(m=>{throw m.code==="auth/multi-factor-auth-required"?Tf._fromErrorAndOperation(t,m,i,s):m})}async function cT(t,i,r=!1){const s=await Wc(t,i._linkToIdToken(t.auth,await t.getIdToken()),r);return Xs._forOperation(t,"link",s)}async function HN(t,i,r=!1){const{auth:s}=t;if(mi(s.app))return Promise.reject(Ca(s));const u="reauthenticate";try{const m=await Wc(t,lT(s,u,i,t),r);ye(m.idToken,s,"internal-error");const p=V0(m.idToken);ye(p,s,"internal-error");const{sub:b}=p;return ye(t.uid===b,s,"user-mismatch"),Xs._forOperation(t,u,m)}catch(m){throw m?.code==="auth/user-not-found"&&za(s,"user-mismatch"),m}}async function uT(t,i,r=!1){if(mi(t.app))return Promise.reject(Ca(t));const s="signIn",u=await lT(t,s,i),m=await Xs._fromIdTokenResponse(t,s,u);return r||await t._updateCurrentUser(m.user),m}async function Kg(t,i){return uT(Ia(t),i)}function $N(t,i,r,s){return Ma(t).onIdTokenChanged(i,r,s)}function VN(t,i,r){return Ma(t).beforeAuthStateChanged(i,r)}function mw(t,i){return Si(t,"POST","/v2/accounts/mfaEnrollment:start",qi(t,i))}const Cf="__sak";class dT{constructor(i,r){this.storageRetriever=i,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Cf,"1"),this.storage.removeItem(Cf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,r){return this.storage.setItem(i,JSON.stringify(r)),Promise.resolve()}_get(i){const r=this.storage.getItem(i);return Promise.resolve(r?JSON.parse(r):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}const ZN=1e3,qN=10;class fT extends dT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,r)=>this.onStorageEvent(i,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iT(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),u=this.localCache[r];s!==u&&i(r,u,s)}}onStorageEvent(i,r=!1){if(!i.key){this.forAllChangedKeys((p,b,y)=>{this.notifyListeners(p,y)});return}const s=i.key;r?this.detachListener():this.stopPolling();const u=()=>{const p=this.storage.getItem(s);!r&&this.localCache[s]===p||this.notifyListeners(s,p)},m=this.storage.getItem(s);hN()&&m!==i.newValue&&i.newValue!==i.oldValue?setTimeout(u,qN):u()}notifyListeners(i,r){this.localCache[i]=r;const s=this.listeners[i];if(s)for(const u of Array.from(s))u(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:r,newValue:s}),!0)})},ZN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,r){await super._set(i,r),this.localCache[i]=JSON.stringify(r)}async _get(i){const r=await super._get(i);return this.localCache[i]=JSON.stringify(r),r}async _remove(i){await super._remove(i),delete this.localCache[i]}}fT.type="LOCAL";const GN=fT;class hT extends dT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,r){}_removeListener(i,r){}}hT.type="SESSION";const mT=hT;function YN(t){return Promise.all(t.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(r){return{fulfilled:!1,reason:r}}}))}class Qf{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const r=this.receivers.find(u=>u.isListeningto(i));if(r)return r;const s=new Qf(i);return this.receivers.push(s),s}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const r=i,{eventId:s,eventType:u,data:m}=r.data,p=this.handlersMap[u];if(!p?.size)return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:u});const b=Array.from(p).map(async _=>_(r.origin,m)),y=await YN(b);r.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:y})}_subscribe(i,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(r)}_unsubscribe(i,r){this.handlersMap[i]&&r&&this.handlersMap[i].delete(r),(!r||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qf.receivers=[];function Y0(t="",i=10){let r="";for(let s=0;s<i;s++)r+=Math.floor(Math.random()*10);return t+r}class KN{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,r,s=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let m,p;return new Promise((b,y)=>{const _=Y0("",20);u.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);p={messageChannel:u,onMessage(E){const j=E;if(j.data.eventId===_)switch(j.data.status){case"ack":clearTimeout(T),m=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(m),b(j.data.response);break;default:clearTimeout(T),clearTimeout(m),y(new Error("invalid_response"));break}}},this.handlers.add(p),u.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:i,eventId:_,data:r},[u.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}function It(){return window}function WN(t){It().location.href=t}function K0(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function XN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JN(){return navigator?.serviceWorker?.controller||null}function QN(){return K0()?self:null}const pT="firebaseLocalStorageDb",eD=1,Af="firebaseLocalStorage",gT="fbase_key";class du{constructor(i){this.request=i}toPromise(){return new Promise((i,r)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function eh(t,i){return t.transaction([Af],i?"readwrite":"readonly").objectStore(Af)}function tD(){const t=indexedDB.deleteDatabase(pT);return new du(t).toPromise()}function vT(){const t=indexedDB.open(pT,eD);return new Promise((i,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Af,{keyPath:gT})}catch(u){r(u)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Af)?i(s):(s.close(),await tD(),i(await vT()))})})}async function pw(t,i,r){const s=eh(t,!0).put({[gT]:i,value:r});return new du(s).toPromise()}async function nD(t,i){const r=eh(t,!1).get(i),s=await new du(r).toPromise();return s===void 0?null:s.value}function gw(t,i){const r=eh(t,!0).delete(i);return new du(r).toPromise()}const iD=800,aD=3;class yT{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(i=>i.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=vT(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(i){let r=0;for(;;)try{const s=await this._openDb();return await i(s)}catch(s){if(this.isClosing||r++>aD)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return K0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qf._getInstance(QN()),this.receiver._subscribe("keyChanged",async(i,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(i,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await XN(),!this.activeServiceWorker)return;this.sender=new KN(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&i[0]?.fulfilled&&i[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||JN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async i=>{await pw(i,Cf,"1"),await gw(i,Cf)}),!0):!1}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>pw(s,i,r)),this.localCache[i]=r,this.notifyServiceWorker(i)))}async _get(i){const r=await this._withRetries(s=>nD(s,i));return this.localCache[i]=r,r}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(r=>gw(r,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){if(this.isClosing)return[];try{const i=await this._withRetries(u=>{const m=eh(u,!1).getAll();return new du(m).toPromise()});if(this.isClosing)return[];if(!i)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(i.length!==0)for(const{fbase_key:u,value:m}of i)s.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(m)&&(this.notifyListeners(u,m),r.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!s.has(u)&&(this.notifyListeners(u,null),r.push(u));return r}catch(i){return this.isClosing||UE(`Firebase Auth cross-tab polling failed with error: ${i}`),[]}}notifyListeners(i,r){this.localCache[i]=r;const s=this.listeners[i];if(s)for(const u of Array.from(s))u(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}yT.type="LOCAL";const rD=yT;function vw(t,i){return Si(t,"POST","/v2/accounts/mfaSignIn:start",qi(t,i))}const Pp=rT("rcb"),oD=new lu(3e4,6e4);class sD{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!It().grecaptcha?.render}load(i,r=""){return ye(lD(r),i,"argument-error"),this.shouldResolveImmediately(r)&&iw(It().grecaptcha)?Promise.resolve(It().grecaptcha):new Promise((s,u)=>{const m=It().setTimeout(()=>{u(In(i,"network-request-failed"))},oD.get());It()[Pp]=()=>{It().clearTimeout(m),delete It()[Pp];const b=It().grecaptcha;if(!b||!iw(b)){u(In(i,"internal-error"));return}const y=b.render;b.render=(_,T)=>{const E=y(_,T);return this.counter++,E},this.hostLanguage=r,s(b)};const p=`${_N()}?${ol({onload:Pp,render:"explicit",hl:r})}`;q0(p).catch(()=>{clearTimeout(m),u(In(i,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(i){return!!It().grecaptcha?.render&&(i===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class cD{async load(i){return new TN(i)}clearedOneInstance(){}}const Dc="recaptcha",uD={theme:"light",type:"image"};class bT{constructor(i,r,s={...uD}){this.parameters=s,this.type=Dc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ia(i),this.isInvisible=this.parameters.size==="invisible",ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const u=typeof r=="string"?document.getElementById(r):r;ye(u,this.auth,"argument-error"),this.container=u,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new cD:new sD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const i=await this.render(),r=this.getAssertedRecaptcha(),s=r.getResponse(i);return s||new Promise(u=>{const m=p=>{p&&(this.tokenChangeListeners.delete(m),u(p))};this.tokenChangeListeners.add(m),this.isInvisible&&r.execute(i)})}render(){try{this.assertNotDestroyed()}catch(i){return Promise.reject(i)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(i=>{throw this.renderPromise=null,i}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(i=>{this.container.removeChild(i)})}validateStartingState(){ye(!this.parameters.sitekey,this.auth,"argument-error"),ye(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(i){return r=>{if(this.tokenChangeListeners.forEach(s=>s(r)),typeof i=="function")i(r);else if(typeof i=="string"){const s=It()[i];typeof s=="function"&&s(r)}}}assertNotDestroyed(){ye(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let i=this.container;if(!this.isInvisible){const r=document.createElement("div");i.appendChild(r),i=r}this.widgetId=this.getAssertedRecaptcha().render(i,this.parameters)}return this.widgetId}async init(){ye(HE()&&!K0(),this.auth,"internal-error"),await dD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const i=await iN(this.auth);ye(i,this.auth,"internal-error"),this.parameters.sitekey=i}getAssertedRecaptcha(){return ye(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function dD(){let t=null;return new Promise(i=>{if(document.readyState==="complete"){i();return}t=()=>i(),window.addEventListener("load",t)}).catch(i=>{throw t&&window.removeEventListener("load",t),i})}class fD{constructor(i,r){this.verificationId=i,this.onConfirmation=r}confirm(i){const r=Po._fromVerification(this.verificationId,i);return this.onConfirmation(r)}}async function _T(t,i,r){if(mi(t.app))return Promise.reject(Ca(t));const s=Ia(t),u=await xT(s,i,Ma(r));return new fD(u,m=>Kg(s,m))}async function xT(t,i,r){if(!t._getRecaptchaConfig())try{await zN(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof i=="string"?s={phoneNumber:i}:s=i,"session"in s){const u=s.session;if("phoneNumber"in s){ye(u.type==="enroll",t,"internal-error");const m={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ip(t,m,"mfaSmsEnrollment",async(_,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Nc){ye(r?.type===Dc,_,"argument-error");const E=await Np(_,T,r);return mw(_,E)}return mw(_,T)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{ye(u.type==="signin",t,"internal-error");const m=s.multiFactorHint?.uid||s.multiFactorUid;ye(m,t,"missing-multi-factor-info");const p={mfaPendingCredential:u.credential,mfaEnrollmentId:m,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ip(t,p,"mfaSmsSignIn",async(T,E)=>{if(E.phoneSignInInfo.captchaResponse===Nc){ye(r?.type===Dc,T,"argument-error");const j=await Np(T,E,r);return vw(T,j)}return vw(T,E)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ip(t,u,"sendVerificationCode",async(y,_)=>{if(_.captchaResponse===Nc){ye(r?.type===Dc,y,"argument-error");const T=await Np(y,_,r);return fw(y,T)}return fw(y,_)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{r?._reset()}}async function hD(t,i){const r=Ma(t);if(mi(r.auth.app))return Promise.reject(Ca(r.auth));await cT(r,i)}async function Np(t,i,r){ye(r.type===Dc,t,"argument-error");const s=await r.verify();ye(typeof s=="string",t,"argument-error");const u={...i};if("phoneEnrollmentInfo"in u){const m=u.phoneEnrollmentInfo.phoneNumber,p=u.phoneEnrollmentInfo.captchaResponse,b=u.phoneEnrollmentInfo.clientType,y=u.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:s,captchaResponse:p,clientType:b,recaptchaVersion:y}}),u}else if("phoneSignInInfo"in u){const m=u.phoneSignInInfo.captchaResponse,p=u.phoneSignInInfo.clientType,b=u.phoneSignInInfo.recaptchaVersion;return Object.assign(u,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:m,clientType:p,recaptchaVersion:b}}),u}else return Object.assign(u,{recaptchaToken:s}),u}class Rr{constructor(i){this.providerId=Rr.PROVIDER_ID,this.auth=Ia(i)}verifyPhoneNumber(i,r){return xT(this.auth,i,Ma(r))}static credential(i,r){return Po._fromVerification(i,r)}static credentialFromResult(i){const r=i;return Rr.credentialFromTaggedObject(r)}static credentialFromError(i){return Rr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{phoneNumber:r,temporaryProof:s}=i;return r&&s?Po._fromTokenResponse(r,s):null}}Rr.PROVIDER_ID="phone";Rr.PHONE_SIGN_IN_METHOD="phone";function mD(t,i){return i?Ea(i):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class W0 extends G0{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return $s(i,this._buildIdpRequest())}_linkToIdToken(i,r){return $s(i,this._buildIdpRequest(r))}_getReauthenticationResolver(i){return $s(i,this._buildIdpRequest())}_buildIdpRequest(i){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(r.idToken=i),r}}function pD(t){return uT(t.auth,new W0(t),t.bypassAuthState)}function gD(t){const{auth:i,user:r}=t;return ye(r,i,"internal-error"),HN(r,new W0(t),t.bypassAuthState)}async function vD(t){const{auth:i,user:r}=t;return ye(r,i,"internal-error"),cT(r,new W0(t),t.bypassAuthState)}class wT{constructor(i,r,s,u,m=!1){this.auth=i,this.resolver=s,this.user=u,this.bypassAuthState=m,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(i,r)=>{this.pendingPromise={resolve:i,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(i){const{urlResponse:r,sessionId:s,postBody:u,tenantId:m,error:p,type:b}=i;if(p){this.reject(p);return}const y={auth:this.auth,requestUri:r,sessionId:s,tenantId:m||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(b)(y))}catch(_){this.reject(_)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return pD;case"linkViaPopup":case"linkViaRedirect":return vD;case"reauthViaPopup":case"reauthViaRedirect":return gD;default:za(this.auth,"internal-error")}}resolve(i){La(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){La(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const yD=new lu(2e3,1e4);class Ns extends wT{constructor(i,r,s,u,m){super(i,r,u,m),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return ye(i,this.auth,"internal-error"),i}async onExecution(){La(this.filter.length===1,"Popup operations only handle one event");const i=Y0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const i=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(i,yD.get())};i()}}Ns.currentPopupAction=null;const bD="pendingRedirect",df=new Map;class _D extends wT{constructor(i,r,s=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let i=df.get(this.auth._key());if(!i){try{const s=await xD(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(s)}catch(r){i=()=>Promise.reject(r)}df.set(this.auth._key(),i)}return this.bypassAuthState||df.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const r=await this.auth._redirectUserForId(i.eventId);if(r)return this.user=r,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xD(t,i){const r=ED(i),s=SD(t);if(!await s._isAvailable())return!1;const u=await s._get(r)==="true";return await s._remove(r),u}function wD(t,i){df.set(t._key(),i)}function SD(t){return Ea(t._redirectPersistence)}function ED(t){return uf(bD,t.config.apiKey,t.name)}async function TD(t,i,r=!1){if(mi(t.app))return Promise.reject(Ca(t));const s=Ia(t),u=mD(s,i),p=await new _D(s,u,r).execute();return p&&!r&&(delete p.user._redirectEventId,await s._persistUserIfCurrent(p.user),await s._setRedirectUser(null,i)),p}const CD=600*1e3;class AD{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(i,s)&&(r=!0,this.sendToConsumer(i,s),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!kD(i)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=i,r=!0)),r}sendToConsumer(i,r){if(i.error&&!ST(i)){const s=i.error.code?.split("auth/")[1]||"internal-error";r.onError(In(this.auth,s))}else r.onAuthEvent(i)}isEventForConsumer(i,r){const s=r.eventId===null||!!i.eventId&&i.eventId===r.eventId;return r.filter.includes(i.type)&&s}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=CD&&this.cachedEventUids.clear(),this.cachedEventUids.has(yw(i))}saveEventToCache(i){this.cachedEventUids.add(yw(i)),this.lastProcessedEventTime=Date.now()}}function yw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(i=>i).join("-")}function ST({type:t,error:i}){return t==="unknown"&&i?.code==="auth/no-auth-event"}function kD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(t);default:return!1}}async function jD(t,i={}){return Si(t,"GET","/v1/projects",i)}const OD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zD=/^https?/;async function LD(t){if(t.config.emulator)return;const{authorizedDomains:i}=await jD(t);for(const r of i)try{if(RD(r))return}catch{}za(t,"unauthorized-domain")}function RD(t){const i=Gg(),{protocol:r,hostname:s}=new URL(i);if(t.startsWith("chrome-extension://")){const p=new URL(t);return p.hostname===""&&s===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===i.replace("chrome-extension://",""):r==="chrome-extension:"&&p.hostname===s}if(!zD.test(r))return!1;if(OD.test(t))return s===t;const u=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(s)}const MD=new lu(3e4,6e4);function bw(){const t=It().___jsl;if(t?.H){for(const i of Object.keys(t.H))if(t.H[i].r=t.H[i].r||[],t.H[i].L=t.H[i].L||[],t.H[i].r=[...t.H[i].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function ID(t){return new Promise((i,r)=>{function s(){bw(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{bw(),r(In(t,"network-request-failed"))},timeout:MD.get()})}if(It().gapi?.iframes?.Iframe)i(gapi.iframes.getContext());else if(It().gapi?.load)s();else{const u=rT("iframefcb");return It()[u]=()=>{gapi.load?s():r(In(t,"network-request-failed"))},q0(`${wN()}?onload=${u}`).catch(m=>r(m))}}).catch(i=>{throw ff=null,i})}let ff=null;function PD(t){return ff=ff||ID(t),ff}const ND=new lu(5e3,15e3),DD="__/auth/iframe",BD="emulator/auth/iframe",UD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HD(t){const i=t.config;ye(i.authDomain,t,"auth-domain-config-required");const r=i.emulator?$0(i,BD):`https://${t.config.authDomain}/${DD}`,s={apiKey:i.apiKey,appName:t.name,v:su},u=FD.get(t.config.apiHost);u&&(s.eid=u);const m=t._getFrameworks();return m.length&&(s.fw=m.join(",")),`${r}?${ol(s).slice(1)}`}async function $D(t){const i=await PD(t),r=It().gapi;return ye(r,t,"internal-error"),i.open({where:document.body,url:HD(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UD,dontclear:!0},s=>new Promise(async(u,m)=>{await s.restyle({setHideOnLeave:!1});const p=In(t,"network-request-failed"),b=It().setTimeout(()=>{m(p)},ND.get());function y(){It().clearTimeout(b),u(s)}s.ping(y).then(y,()=>{m(p)})}))}const VD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZD=500,qD=600,GD="_blank",YD="http://localhost";class _w{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KD(t,i,r,s=ZD,u=qD){const m=Math.max((window.screen.availHeight-u)/2,0).toString(),p=Math.max((window.screen.availWidth-s)/2,0).toString();let b="";const y={...VD,width:s.toString(),height:u.toString(),top:m,left:p},_=dn().toLowerCase();r&&(b=JE(_)?GD:r),WE(_)&&(i=i||YD,y.scrollbars="yes");const T=Object.entries(y).reduce((j,[M,z])=>`${j}${M}=${z},`,"");if(fN(_)&&b!=="_self")return WD(i||"",b),new _w(null);const E=window.open(i||"",b,T);ye(E,t,"popup-blocked");try{E.focus()}catch{}return new _w(E)}function WD(t,i){const r=document.createElement("a");r.href=t,r.target=i;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}const XD="__/auth/handler",JD="emulator/auth/handler",QD=encodeURIComponent("fac");async function xw(t,i,r,s,u,m){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const p={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:s,v:su,eventId:u};if(i instanceof sT){i.setDefaultLanguage(t.languageCode),p.providerId=i.providerId||"",IP(i.getCustomParameters())||(p.customParameters=JSON.stringify(i.getCustomParameters()));for(const[T,E]of Object.entries({}))p[T]=E}if(i instanceof uu){const T=i.getScopes().filter(E=>E!=="");T.length>0&&(p.scopes=T.join(","))}t.tenantId&&(p.tid=t.tenantId);const b=p;for(const T of Object.keys(b))b[T]===void 0&&delete b[T];const y=await t._getAppCheckToken(),_=y?`#${QD}=${encodeURIComponent(y)}`:"";return`${e6(t)}?${ol(b).slice(1)}${_}`}function e6({config:t}){return t.emulator?$0(t,JD):`https://${t.authDomain}/${XD}`}const Dp="webStorageSupport";class t6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mT,this._completeRedirectFn=TD,this._overrideRedirectResult=wD}async _openPopup(i,r,s,u){La(this.eventManagers[i._key()]?.manager,"_initialize() not called before _openPopup()");const m=await xw(i,r,s,Gg(),u);return KD(i,m,Y0())}async _openRedirect(i,r,s,u){await this._originValidation(i);const m=await xw(i,r,s,Gg(),u);return WN(m),new Promise(()=>{})}_initialize(i){const r=i._key();if(this.eventManagers[r]){const{manager:u,promise:m}=this.eventManagers[r];return u?Promise.resolve(u):(La(m,"If manager is not set, promise should be"),m)}const s=this.initAndGetManager(i);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(i){const r=await $D(i),s=new AD(i);return r.register("authEvent",u=>(ye(u?.authEvent,i,"invalid-auth-event"),{status:s.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:s},this.iframes[i._key()]=r,s}_isIframeWebStorageSupported(i,r){this.iframes[i._key()].send(Dp,{type:Dp},u=>{const m=u?.[0]?.[Dp];m!==void 0&&r(!!m),za(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const r=i._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=LD(i)),this.originValidationPromises[r]}get _shouldInitProactively(){return iT()||XE()||Z0()}}const n6=t6;var ww="@firebase/auth",Sw="1.13.5";class i6{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const r=this.auth.onIdTokenChanged(s=>{i(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(i,r),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const r=this.internalListeners.get(i);r&&(this.internalListeners.delete(i),r(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function a6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r6(t){Yc(new Ws("auth",(i,{options:r})=>{const s=i.getProvider("app").getImmediate(),u=i.getProvider("heartbeat"),m=i.getProvider("app-check-internal"),{apiKey:p,authDomain:b}=s.options;ye(p&&!p.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:p,authDomain:b,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},_=new yN(s,u,m,y);return RN(_,r),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,r,s)=>{i.getProvider("auth-internal").initialize()})),Yc(new Ws("auth-internal",i=>{const r=Ia(i.getProvider("auth").getImmediate());return(s=>new i6(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Us(ww,Sw,a6(t)),Us(ww,Sw,"esm2020")}const o6=300,s6=jE("authIdTokenMaxAge")||o6;let Ew=null;const l6=t=>async i=>{const r=i&&await i.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>s6)return;const u=r?.token;Ew!==u&&(Ew=u,await fetch(t,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function c6(t=D4()){const i=ME(t,"auth");if(i.isInitialized())return i.getImmediate();const r=LN(t,{popupRedirectResolver:n6,persistence:[rD,GN,mT]}),s=jE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const m=new URL(s,location.origin);if(location.origin===m.origin){const p=l6(m.toString());VN(r,p,()=>p(r.currentUser)),$N(r,b=>p(b))}}const u=TP("auth");return u&&MN(r,`http://${u}`),r}function u6(){return document.getElementsByTagName("head")?.[0]??document}bN({loadJS(t){return new Promise((i,r)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=i,s.onerror=u=>{const m=In("internal-error");m.customData=u,r(m)},s.type="text/javascript",s.charset="UTF-8",u6().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r6("Browser");var d6="firebase",f6="12.18.0";Us(d6,f6,"app");const h6={apiKey:"AIzaSyDhXRm1n4Bt7k8byyyaFhsAHXPoY42wNDE",authDomain:"outstandingspots.firebaseapp.com",projectId:"outstandingspots",storageBucket:"outstandingspots.firebasestorage.app",messagingSenderId:"998097994110",appId:"1:998097994110:web:19e8c4c3121ef7bc9af32f"},m6=IE(h6),Gt=c6(m6);Gt.languageCode="ko";const p6=x.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,g6=x.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: ${({$hasDescription:t})=>t?"1rem":"0"};

    @media (max-width: 767px) {
        width: auto;
        margin-bottom: 0;
    }
`,v6=x.p`
    font-size: 0.75rem;
    color: #5D53F1;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$spacer:t})=>t&&"display: none;"}
    }
`,y6=x.div`
    flex: 1;
    min-width: 0;
`,b6=x.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: ${({$inactive:t})=>t?"#EEECFA":"white"};
`,_6=x.input`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0.5rem;
    background: transparent;
    color: ${({$inactive:t})=>t?"#8A8A8A":"black"};
    cursor: ${({$inactive:t})=>t?"not-allowed":"text"};

    &:disabled, &:read-only {
        color: #8A8A8A;
        cursor: not-allowed;
    }
`,x6=x.button`
    flex-shrink: 0;
    box-sizing: border-box;
    border: none;
    border-left: 0.75px solid #5D53F1;
    color: #5D53F1;
    background-color: white;
    font-size: 0.8rem;
    width: 4rem;
    white-space: nowrap;
    border-radius: 0;
    padding: 0;

    &:active, &:focus, &:focus-visible {
        outline: none;
        box-shadow: none;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;function kf({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engButtonText:u,korButtonText:m,value:p,onChange:b,onButtonClick:y,inputDisabled:_,inputReadOnly:T,buttonDisabled:E,buttonId:j,inputType:M="text",maxLength:z,inputMode:P,description:H}){const{language:B}=ze(),$=!!(_||T),W=H===" ";return h.jsxs(p6,{children:[h.jsxs(g6,{$hasDescription:!!H&&!W,children:[" ",B==="eng"?t:i," "]}),h.jsxs(y6,{children:[h.jsxs(b6,{$inactive:$,children:[h.jsx(_6,{type:M,value:p,$inactive:$,disabled:_,readOnly:T,maxLength:z,inputMode:P,placeholder:B==="eng"?r:s,onChange:ue=>{_||T||b?.(ue.target.value)}}),h.jsx(x6,{id:j,type:"button",disabled:E,onClick:y,children:B==="eng"?u:m})]}),H&&h.jsxs(v6,{$spacer:W,children:[" ",H," "]})]})]})}function Wg(t){const i=t.replace(/\D/g,"");if(!i.startsWith("0"))throw new Error("전화번호를 다시 확인해주세요 Invalid phone number");return`+82${i.slice(1)}`}function ET(t){const i=t.replace(/\D/g,"");return/^01[016789]\d{7,8}$/.test(i)}function TT(){return window.location.hostname==="localhost"}function Xg(){return window.location.href.replace("://localhost","://127.0.0.1")}function X0(t){return t&&typeof t=="object"&&"code"in t?String(t.code):""}function w6(t,i){const r=X0(t);return r==="auth/invalid-verification-code"?i==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.":r==="auth/code-expired"||r==="auth/session-expired"?i==="eng"?"The verification code expired. Please send it again.":"인증번호가 만료되었습니다. 다시 전송해주세요.":r==="auth/credential-already-in-use"||r==="auth/account-exists-with-different-credential"?i==="eng"?"This phone number is already in use.":"이미 사용 중인 전화번호입니다.":t instanceof Error&&t.message&&!r.startsWith("auth/")?t.message:i==="eng"?`Failed to change the phone number.${r?` (${r})`:""}`:`전화번호 변경에 실패했습니다.${r?` (${r})`:""}`}function CT(t,i){const r=X0(t);return r==="auth/invalid-phone-number"?i==="eng"?"Enter a valid phone number.":"올바른 전화번호를 입력해 주세요.":r==="auth/too-many-requests"?i==="eng"?"Too many attempts. Try again later.":"시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.":r==="auth/operation-not-allowed"?i==="eng"?"Phone sign-in is not enabled in Firebase.":"Firebase에서 전화번호 로그인이 꺼져 있습니다.":r==="auth/captcha-check-failed"||r==="auth/invalid-app-credential"?i==="eng"?"reCAPTCHA failed. Use 127.0.0.1 instead of localhost, and add 127.0.0.1 in Firebase authorized domains.":"reCAPTCHA 확인에 실패했습니다. localhost 대신 127.0.0.1로 열고, Firebase 승인된 도메인에 127.0.0.1을 추가해 주세요.":i==="eng"?`Failed to send the verification code.${r?` (${r})`:""}`:`인증번호 전송에 실패했습니다.${r?` (${r})`:""}`}const S6=x.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`,E6=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,T6=x.div`
    position: absolute;
    width: 1px;
    height: 1px;
    left: -9999px;
    top: 0;
`;function C6({phone:t,onPhoneChange:i,onVerified:r}){const{language:s}=ze(),[u,m]=k.useState(""),[p,b]=k.useState(!1),[y,_]=k.useState(!1),[T,E]=k.useState(!1),j=k.useRef(null),M=k.useRef(null),z=k.useRef(null);k.useEffect(()=>{Gt.languageCode=s==="eng"?"en":"ko"},[s]),k.useEffect(()=>()=>{M.current?.clear(),M.current=null},[]);const P=()=>{if(M.current)return M.current;if(!z.current)throw new Error("reCAPTCHA container is missing.");const ue=new bT(Gt,z.current,{size:"invisible"});return M.current=ue,ue},H=()=>{M.current?.clear(),M.current=null},B=async()=>{if(TT()){alert(s==="eng"?`Firebase phone auth does not work on localhost. Open ${Xg()}`:`Firebase 전화번호 인증은 localhost에서 동작하지 않습니다. ${Xg()} 로 열어 주세요.`);return}if(!ET(t)){alert(s==="eng"?"Enter a valid Korean number.":"올바른 전화번호를 입력해주세요.");return}try{E(!0),Gt.currentUser&&await Gt.signOut(),H();const ue=Wg(t),J=P(),se=await _T(Gt,ue,J);j.current=se,b(!0),alert(s==="eng"?"The verification code has been sent.":"인증번호가 전송되었습니다.")}catch(ue){console.error(ue),H(),alert(CT(ue,s))}finally{E(!1)}},$=async()=>{if(!j.current){alert(s==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}try{E(!0);const J=await(await j.current.confirm(u)).user.getIdToken();_(!0),r(J)}catch(ue){console.error(ue),alert(s==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.")}finally{E(!1)}},W=ue=>{y||(i(ue.replace(/\D/g,"")),_(!1),b(!1),m(""),j.current=null)};return h.jsxs(S6,{children:[h.jsxs(E6,{children:[h.jsx(kf,{engTitle:"Phone",korTitle:"전화번호",engPlaceholder:"Enter only numbers.",korPlaceholder:"- 없이 숫자만 입력해주세요.",engButtonText:p?"Resend":"Verify",korButtonText:p?"재전송":"인증하기",value:t,onChange:W,onButtonClick:B,inputReadOnly:y,buttonDisabled:T||y,inputType:"tel",description:" "}),h.jsx(kf,{engTitle:"Confirm",korTitle:"전화번호 확인",engPlaceholder:"Enter verification code.",korPlaceholder:"문자로 받은 인증번호를 입력해주세요.",engButtonText:"Submit",korButtonText:"제출하기",value:u,onChange:ue=>{y||m(ue.replace(/\D/g,""))},onButtonClick:$,inputDisabled:!p&&!y,inputReadOnly:y,buttonDisabled:T||!p||y,maxLength:6,inputMode:"numeric",description:y?s==="eng"?"Phone number verified.":"전화번호 인증이 완료되었습니다.":" "})]}),h.jsx(T6,{ref:z})]})}const A6=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0;
        align-items: stretch;
    }
`,k6=x.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,j6=x.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,O6=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    pointer-events: auto;
    position: relative;
`,z6=x.span`
    font-size: 1rem;
    color: #333;
`,L6=x.input`
    width: 100%;
    min-height: 1.6rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    background-color: transparent;
    color: black;
    margin: 0 0.5rem;

    &::placeholder {
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`,R6=x.div`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,M6=x.button`
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0.45rem 0.5rem;
    border: none;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    color: black;
    cursor: pointer;

    &.active {
        background-color: #f3f0ff;
    }
`,I6=x.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;function jf(t,i){return i==="eng"?t.storeName?.eng||t.storeName?.kor||"":t.storeName?.kor||t.storeName?.eng||""}function Of(t,i){return`${t.name} · ${jf(t,i)} · ${t.phone}`}function P6(t,i){const r=i.trim().toLowerCase();if(!r)return!0;const s=r.replace(/\D/g,""),u=t.phone.replace(/\D/g,"");return[t.name,t.phone,t.storeName?.kor??"",t.storeName?.eng??"",Of(t,"kor"),Of(t,"eng")].join(" ").toLowerCase().includes(r)||s.length>0&&u.includes(s)}function N6({searchValue:t,onChangeSearchValue:i,owners:r}){const{language:s}=ze(),[u,m]=k.useState(!1),[p,b]=k.useState(0),[y,_]=k.useState({top:0,left:0,width:0}),T=k.useRef(null),E=k.useMemo(()=>{const z=t.trim();return z?r.filter(P=>P6(P,z)).slice(0,8):[]},[r,t]),j=()=>{const z=T.current?.getBoundingClientRect();z&&_({top:z.bottom+4,left:z.left,width:z.width})},M=z=>{i(Of(z,s)),m(!1)};return h.jsxs(A6,{children:[h.jsxs(k6,{children:[" ",s==="eng"?"Search":"검색"," "]}),h.jsx(j6,{children:h.jsxs(O6,{ref:T,children:[h.jsx(z6,{children:" 🔍 "}),h.jsx(L6,{type:"text",id:"ownerSearchBar",value:t,autoComplete:"off",onChange:z=>{i(z.target.value),m(!0),b(0),j()},onFocus:()=>{m(!0),j()},onBlur:()=>{window.setTimeout(()=>m(!1),120)},onKeyDown:z=>{if(!(!u||E.length===0)){if(z.key==="ArrowDown")z.preventDefault(),b(P=>Math.min(P+1,E.length-1));else if(z.key==="ArrowUp")z.preventDefault(),b(P=>Math.max(P-1,0));else if(z.key==="Enter"){z.preventDefault();const P=E[p]??E[0];P&&M(P)}}},placeholder:s==="kor"?"이름/매장명/전화번호 검색":"Search name/store name/phone number"})]})}),u&&t.trim()!==""&&m1.createPortal(h.jsx(R6,{style:{top:y.top,left:y.left,width:y.width},children:E.length===0?h.jsx(I6,{children:s==="eng"?"No matching owner.":"일치하는 사장님이 없습니다."}):E.map((z,P)=>h.jsx(M6,{type:"button",className:P===p?"active":"",onMouseDown:H=>{H.preventDefault(),M(z)},children:Of(z,s)},z._id))}),document.body)]})}const D6=x.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0.7rem 1.5rem 0.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    overflow: hidden;
    text-align: left;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
        overflow: auto;
        height: auto;
    }
`,B6=x.div`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,U6=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,F6=x.p`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,H6=x.div`
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        overflow: visible;
        height: auto;
    }
`,$6=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-height: 0;
    height: 100%;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
        overflow: visible;
    }
`,J0=x.div`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,V6=x(J0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,Z6=x.div`
    min-height: 0;
`,q6=x(J0)`
    flex-shrink: 0;
`,G6=x(J0)`
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;
`,Jg=x.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,Y6=x(Jg)`
    margin-bottom: 0.9rem;
`,Tw=x.p`
    font-size: 0.8rem;
    color: ${({$success:t})=>t?"#22a06b":"#8a84a0"};
    margin: 0 0 0.55rem 0;
`,vc=x.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    @media (max-width: 1024px) {
        ${({$stack:t})=>t&&`
            display: block;
        `}
    }
`,K6=x.div`
    min-width: 0;
    flex: 1;
`,W6=x.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,Rs=x.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,Kd=x.p`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,AT=x.button`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,hf=x.button`
    border: none;
    background: #7965EA;
    color: white;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,X6=x(AT)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,J6=x(hf)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        font-size: 0.75rem;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,Q6=x.input`
    box-sizing: border-box;
    width: 12rem;
    border: 1px solid #d8d3ea;
    border-radius: 0.3rem;
    padding: 0.35rem 0.5rem;
    font-size: 0.85rem;
    color: #2E2A63;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: none;
        height: 2.15rem;
    }
`,e7=x.span`
    display: inline-flex;
    align-items: center;
    background: #e8f8ef;
    color: #1f9d57;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 600;
`,t7=x.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0 0 0.7rem 0;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`,Bp=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 4.5rem;
`,Up=x.span`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    background: ${({$active:t,$done:i})=>t||i?"#7965EA":"#cfcadf"};
`,Fp=x.span`
    font-size: 0.7rem;
    color: ${({$active:t})=>t?"#7965EA":"#8a84a0"};
    text-align: center;
`,Cw=x.div`
    flex: 1;
    height: 2px;
    margin-bottom: 1.1rem;
    background: ${({$done:t})=>t?"#7965EA":"#e4e0f2"};
`,Aw=x.div`
    display: flex;
    align-items: flex-end;
    gap: 0.6rem;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: stretch;
    }
`,Qg=x.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,yc=x.p`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,e0=x.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    padding: 0.4rem 0.65rem;
    font-size: 0.85rem;
    color: #2E2A63;
    background: white;

    &:focus {
        outline: none;
        border-color: #7965EA;
    }
`,n7=x.div`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,i7=x(e0)`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,Hp=x.button`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,a7=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,$p=x(Qg)`
    gap: 0.2rem;
`,Vp=x(n7)`
    min-height: 2rem;
`,Zp=x(i7)`
    padding: 0.35rem 0.6rem;
`,r7=x.p`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,o7=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
`,s7=x.div`
    flex-shrink: 0;
    margin-top: 0.65rem;
    padding: 0.65rem 0.8rem 0.6rem;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.45rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`,l7=x.p`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,c7=x.p`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,u7=x.button`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,d7=x.div`
    display: flex;
    justify-content: flex-end;
`;function f7(){const{language:t}=ze(),{owner:i,updateOwner:r,logoutOwner:s}=Dr(),{stores:u}=wi(),m=Yt(),p=u.find(we=>we._id===i?.storeId),b=i?p?t==="eng"?`${p.name.eng} ${p.branch.eng}`.trim():`${p.name.kor} ${p.branch.kor}`.trim():jf(i,t):"",[y,_]=k.useState(!1),[T,E]=k.useState(i?.name??""),[j,M]=k.useState(!1),[z,P]=k.useState(1),[H,B]=k.useState(""),[$,W]=k.useState(""),[ue,J]=k.useState(!1),se=k.useRef(null),Q=k.useRef(null),he=k.useRef(null),[Ce,Ue]=k.useState(""),[ve,ke]=k.useState(""),[ge,ae]=k.useState(""),[je,D]=k.useState(!1),[le,re]=k.useState(!1),[Me,ce]=k.useState(!1),[O,Y]=k.useState(!1);if(k.useEffect(()=>{const we=sessionStorage.getItem("os-pending-phone");we&&(B(we),sessionStorage.removeItem("os-pending-phone"))},[]),k.useEffect(()=>{Gt.languageCode=t==="eng"?"en":"ko"},[t]),k.useEffect(()=>()=>{Q.current?.clear(),Q.current=null},[]),!i)return null;const ie=i,oe=()=>{if(Q.current)return Q.current;if(!he.current)throw new Error("reCAPTCHA container is missing.");const we=new bT(Gt,he.current,{size:"invisible"});return Q.current=we,we},fe=()=>{Q.current?.clear(),Q.current=null};async function pe(){const we=T.trim();if(!we){alert(t==="eng"?"Please enter your name.":"이름을 입력해주세요.");return}M(!0);try{const Tt=await Nz(ie._id,we);r(Tt),_(!1)}catch(Tt){console.error(Tt),alert(t==="eng"?"Failed to update the name.":"이름 수정에 실패했습니다.")}finally{M(!1)}}async function Le(){if(TT()){sessionStorage.setItem("os-pending-phone",H);const we=Xg();alert(t==="eng"?`Firebase phone auth does not work on localhost. Open ${we}`:`Firebase 전화번호 인증은 localhost에서 동작하지 않습니다. ${we} 로 열어 주세요.`),window.location.replace(we);return}if(!ET(H)){alert(t==="eng"?"Enter a valid Korean number.":"올바른 전화번호를 입력해주세요.");return}try{J(!0);const we=await _T(Gt,Wg(H),oe());se.current=we,P(2),alert(t==="eng"?"The verification code has been sent.":"인증번호가 전송되었습니다.")}catch(we){console.error(we),fe(),alert(CT(we,t))}finally{J(!1)}}async function nt(){const we=$.trim();if(!we){alert(t==="eng"?"Please enter the verification code.":"인증번호를 입력해주세요.");return}try{J(!0);const Tt=Wg(H);if(Gt.currentUser?.phoneNumber!==Tt){const Gi=se.current;if(!Gi){alert(t==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}const Ti=Rr.credential(Gi.verificationId,we);if(Gt.currentUser)try{await hD(Gt.currentUser,Ti)}catch(Da){const Yi=X0(Da);if(Yi!=="auth/credential-already-in-use"&&Yi!=="auth/account-exists-with-different-credential")throw Da;await Gt.signOut(),await Kg(Gt,Rr.credential(Gi.verificationId,we))}else await Kg(Gt,Ti)}const Dn=Gt.currentUser;if(!Dn)throw new Error(t==="eng"?"Phone verification failed.":"전화번호 인증에 실패했습니다.");const Pa=await Dn.getIdToken(!0),Na=await Dz(ie._id,Pa);r(Na),P(3)}catch(Tt){console.error(Tt),alert(w6(Tt,t))}finally{J(!1)}}async function Qe(){if(!Ce||!ve||!ge){alert(t==="eng"?"Please fill in all password fields.":"비밀번호를 모두 입력해주세요.");return}if(!cS(ve)){alert(t==="eng"?"Use 8-20 characters including letters and numbers.":"영문자, 숫자를 포함한 8-20자로 입력해주세요.");return}if(ve!==ge){alert(t==="eng"?"The new passwords do not match.":"새 비밀번호가 일치하지 않습니다.");return}Y(!0);try{try{await lS(ie.id,Ce)}catch(we){if(we instanceof qc){alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다.");return}throw we}await Bz(ie._id,Ce,ve),Ue(""),ke(""),ae(""),alert(t==="eng"?"Password has been changed.":"비밀번호가 변경되었습니다.")}catch(we){console.error(we);const Tt=we instanceof Error?we.message:"";Tt.includes("현재 비밀번호")||Tt.toLowerCase().includes("current password")?alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다."):alert(Tt||(t==="eng"?"Failed to change the password.":"비밀번호 변경에 실패했습니다."))}finally{Y(!1)}}async function kt(){if(window.confirm(t==="eng"?"Are you sure you want to delete this account? This cannot be undone.":"정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다."))try{await Uz(ie._id),s(),m("/login")}catch(Tt){console.error(Tt),alert(t==="eng"?"Failed to delete the account.":"계정 탈퇴에 실패했습니다.")}}const Ei=i.status==="approved"?t==="eng"?"Approved":"승인 완료":i.status==="rejected"?t==="eng"?"Rejected":"거절됨":t==="eng"?"Pending":"승인 대기";return h.jsxs(D6,{children:[h.jsxs(B6,{children:[h.jsxs(U6,{children:[" ",t==="eng"?"Account Management":"계정 관리"," "]}),h.jsxs(F6,{children:[" ",t==="eng"?"You can manage your account and security information.":"내 계정과 보안 정보를 관리할 수 있습니다."," "]})]}),h.jsxs(H6,{children:[h.jsxs(V6,{children:[h.jsxs(Jg,{children:[" ",t==="eng"?"Basic information":"기본 정보"," "]}),h.jsxs(Z6,{children:[h.jsx(vc,{$stack:y,children:y?h.jsxs(K6,{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(W6,{children:[h.jsx(Q6,{value:T,onChange:we=>E(we.target.value)}),h.jsxs(X6,{type:"button",onClick:()=>{_(!1),E(i.name)},children:[" ",t==="eng"?"Cancel":"취소"," "]}),h.jsx(J6,{type:"button",disabled:j,onClick:()=>{pe()},children:t==="eng"?"Save":"저장"})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(Kd,{children:[" ",i.name," "]})]}),h.jsxs(AT,{type:"button",onClick:()=>{E(i.name),_(!0)},children:[" ",t==="eng"?"Edit":"수정"," "]})]})}),h.jsx(vc,{children:h.jsxs("div",{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"ID":"아이디"," "]}),h.jsxs(Kd,{children:[" ",i.id," "]})]})}),h.jsx(vc,{children:h.jsxs("div",{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"Phone number":"전화번호"," "]}),h.jsxs(Kd,{children:[" ",i.phone," "]})]})}),h.jsx(vc,{children:h.jsxs("div",{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"Assigned store":"담당 매장"," "]}),h.jsxs(Kd,{children:[" ",b," "]})]})}),h.jsx(vc,{children:h.jsxs("div",{children:[h.jsxs(Rs,{children:[" ",t==="eng"?"Account status":"계정 상태"," "]}),h.jsxs(e7,{children:[" ",Ei," "]})]})}),h.jsxs(s7,{children:[h.jsxs("div",{children:[h.jsxs(l7,{children:[" ",t==="eng"?"Delete account":"계정 탈퇴"," "]}),h.jsx(c7,{children:t==="eng"?"If you delete your account, your owner information will be removed and cannot be restored. Store information will be kept.":"탈퇴하면 사장님 계정 정보가 삭제되며 다시 복구할 수 없습니다. 담당 매장 정보는 유지됩니다."})]}),h.jsx(d7,{children:h.jsx(u7,{type:"button",onClick:()=>{kt()},children:t==="eng"?"Delete account":"계정 탈퇴"})})]})]})]}),h.jsxs($6,{children:[h.jsxs(q6,{children:[h.jsxs(Y6,{children:[" ",t==="eng"?"Change phone number":"전화번호 변경"," "]}),z===3&&h.jsx(Tw,{$success:!0,children:t==="eng"?"Phone number has been changed.":"전화번호가 변경되었습니다."}),h.jsxs(t7,{children:[h.jsxs(Bp,{$active:z===1,$done:z>1,children:[h.jsx(Up,{$active:z===1,$done:z>1,children:"1"}),h.jsx(Fp,{$active:z===1,children:t==="eng"?"New number":"새 번호 입력"})]}),h.jsx(Cw,{$done:z>1}),h.jsxs(Bp,{$active:z===2,$done:z>2,children:[h.jsx(Up,{$active:z===2,$done:z>2,children:"2"}),h.jsx(Fp,{$active:z===2,children:t==="eng"?"Verify code":"인증번호 확인"})]}),h.jsx(Cw,{$done:z>2}),h.jsxs(Bp,{$active:z===3,$done:z===3,children:[h.jsx(Up,{$active:z===3,$done:z===3,children:"✓"}),h.jsx(Fp,{$active:z===3,children:t==="eng"?"Done":"변경 완료"})]})]}),z===1&&h.jsxs(Aw,{children:[h.jsxs(Qg,{children:[h.jsxs(yc,{children:[" ",t==="eng"?"New phone number":"새 전화번호"," "]}),h.jsx(e0,{type:"tel",value:H,placeholder:t==="eng"?"Enter only numbers.":"'-' 없이 숫자만 입력해주세요",onChange:we=>B(we.target.value.replace(/\D/g,""))})]}),h.jsx(hf,{type:"button",disabled:ue,onClick:()=>{Le()},children:t==="eng"?"Send code":"인증번호 전송"})]}),z===2&&h.jsxs(Aw,{children:[h.jsxs(Qg,{children:[h.jsxs(yc,{children:[" ",t==="eng"?"Verification code":"인증번호 확인"," "]}),h.jsx(e0,{type:"text",inputMode:"numeric",maxLength:6,value:$,placeholder:t==="eng"?"Enter the code":"인증번호를 입력해주세요",onChange:we=>W(we.target.value.replace(/\D/g,""))})]}),h.jsx(hf,{type:"button",disabled:ue,onClick:()=>{nt()},children:t==="eng"?"Confirm":"확인"})]}),h.jsx("div",{ref:he,style:{position:"absolute",width:1,height:1,left:-9999}})]}),h.jsxs(G6,{children:[h.jsxs(Jg,{children:[" ",t==="eng"?"Change password":"비밀번호 변경"," "]}),h.jsx(Tw,{children:t==="eng"?"8-20 characters including letters and numbers":"영문자, 숫자 포함 8-20자"}),h.jsxs(a7,{children:[h.jsxs($p,{children:[h.jsxs(yc,{children:[" ",t==="eng"?"Current password":"현재 비밀번호"," "]}),h.jsxs(Vp,{children:[h.jsx(Zp,{type:je?"text":"password",value:Ce,onChange:we=>Ue(we.target.value)}),h.jsx(Hp,{type:"button",onClick:()=>D(we=>!we),children:h.jsx(Xn,{icon:Tn.far.eye})})]})]}),h.jsxs($p,{children:[h.jsxs(yc,{children:[" ",t==="eng"?"New password":"새 비밀번호"," "]}),h.jsxs(Vp,{children:[h.jsx(Zp,{type:le?"text":"password",value:ve,onChange:we=>ke(we.target.value)}),h.jsx(Hp,{type:"button",onClick:()=>re(we=>!we),children:h.jsx(Xn,{icon:Tn.far.eye})})]})]}),h.jsxs($p,{children:[h.jsxs(yc,{children:[" ",t==="eng"?"Confirm new password":"새 비밀번호 확인"," "]}),h.jsxs(Vp,{children:[h.jsx(Zp,{type:Me?"text":"password",value:ge,onChange:we=>ae(we.target.value)}),h.jsx(Hp,{type:"button",onClick:()=>ce(we=>!we),children:h.jsx(Xn,{icon:Tn.far.eye})})]}),ge.length>0&&h.jsx(r7,{$valid:ge===ve,children:ge===ve?t==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":t==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다."})]})]}),h.jsx(o7,{children:h.jsx(hf,{type:"button",disabled:O,onClick:()=>{Qe()},children:t==="eng"?"Change password":"비밀번호 변경"})})]})]})]})]})}function h7({children:t}){const{isAdmin:i,isCheckingAdmin:r}=nu();return r?null:i?t:h.jsx(u0,{to:"/login",replace:!0})}function m7({children:t}){const{isOwner:i}=Dr();return i?t:h.jsx(u0,{to:"/login",replace:!0})}function p7({children:t}){const{isStudent:i}=xi();return i?t:h.jsx(u0,{to:"/login",replace:!0})}const g7=x.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    flex-shrink: 0;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 12.5rem;
        min-width: 12.5rem;
        padding: 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0.4rem;
        padding: 0.45rem 0.6rem;
        border: none;
        border-bottom: 0.5px solid gray;
    }
`,v7=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.25rem;
        width: 100%;
        min-width: 0;
    }
`,y7=x.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,qp=x(Ta)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.4rem;
    line-height: 1.4rem;
    text-decoration: none;
    font-weight: 400;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;

    &, &:link, &:visited, &:hover, &:active {
        color: ${({$selected:t})=>t?"#7965EA":"black"};
        background-color: ${({$selected:t})=>t?"#F1EDFC":"transparent"};
        text-decoration: none;
    }

    @media (max-width: 767px) {
        flex: 1;
        min-width: 0;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        white-space: nowrap;
    }
`,Gp=x.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,b7=x.img`
    width: 0.9rem;
    height: 0.9rem;
`,kw=x.img`
    width: 1rem;
    height: 1rem;
`,_7=x.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,x7=x.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 0.8rem;
    background-color: #F1EDFC;
    padding: 0.7rem 0.4rem;

    @media (max-width: 767px) {
        width: 100%;
        padding: 0.45rem 0.7rem;
        white-space: nowrap;
    }
`;function w7(){const{pathname:t}=tn(),i=Yt(),{language:r}=ze(),{logoutStudent:s}=xi(),u=t==="/student"||t==="/student/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",p=t==="/student/recent"?"/fileIcon.png":"/blackFileIcon.png",b=t==="/student/account"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(g7,{children:[h.jsxs(v7,{children:[h.jsxs(y7,{children:[" ",r==="eng"?"My page":"마이페이지"," "]}),h.jsxs(qp,{to:"/student",$selected:u,children:[h.jsxs(Gp,{children:[" ",h.jsx(b7,{src:m,alt:"favorites icon"})," "]}),r==="eng"?"Favorite stores":"즐겨찾기한 매장"]}),h.jsxs(qp,{to:"/student/recent",$selected:t==="/student/recent",children:[h.jsxs(Gp,{children:[" ",h.jsx(kw,{src:p,alt:"recent icon"})," "]}),r==="eng"?"Recently viewed":"최근 본 매장"]}),h.jsxs(qp,{to:"/student/account",$selected:t==="/student/account",children:[h.jsxs(Gp,{children:[" ",h.jsx(kw,{src:b,alt:"account icon"})," "]}),r==="eng"?"Account Management":"계정 관리"]})]}),h.jsx(_7,{children:h.jsx(x7,{onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const S7=x.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,E7=x.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
    }
`;function T7(){return h.jsxs(S7,{children:[h.jsx(w7,{}),h.jsx(E7,{children:h.jsx(d0,{})})]})}const C7=x.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,A7=x.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,Bc=x.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,bc=x.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,k7=x.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,j7=x(Bc)`
    width: 4.5rem;
`,O7=x(Bc)`
    width: 10rem;
`,t0=x.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`,z7=x.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,L7=x.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,R7=x.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,M7=x.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,I7=x.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,P7=x.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,jw=x.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,N7=x.div`
    display: flex;
    gap: 0.45rem;
`,Ow=x(t0)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function D7({stores:t}){const{language:i}=ze(),r=Yt(),{student:s,updateStudent:u}=xi();async function m(p){if(s?._id)try{const b=await tS(s._id,p._id);u(b),alert(i==="eng"?"Removed from favorites.":"즐겨찾기에서 해제되었습니다.")}catch(b){console.error(b),alert(i==="eng"?"Failed to remove the favorite.":"즐겨찾기 해제에 실패했습니다.")}}return h.jsxs(h.Fragment,{children:[h.jsx(C7,{children:h.jsxs(A7,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(j7,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(Bc,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(Bc,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs(Bc,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(O7,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(p=>h.jsxs("tr",{children:[h.jsx(bc,{children:h.jsx(k7,{src:bi(p.photo),alt:i==="eng"?p.name.eng:p.name.kor})}),h.jsxs(bc,{children:[" ",i==="eng"?`${p.name.eng} ${p.branch.eng}`:`${p.name.kor} ${p.branch.kor}`," "]}),h.jsxs(bc,{children:[" ",i==="eng"?p.theme?.eng:p.theme?.kor," "]}),h.jsxs(bc,{children:[" ",i==="eng"?p.discount.eng:p.discount.kor," "]}),h.jsxs(bc,{children:[h.jsx(t0,{type:"button",onClick:()=>r(`/?store=${p._id}`),children:i==="eng"?"View":"보기"}),h.jsx(t0,{type:"button",onClick:()=>{m(p)},children:i==="eng"?"Delete":"삭제"})]})]},p._id))})]})}),h.jsx(z7,{children:t.map(p=>h.jsxs(L7,{children:[h.jsxs(R7,{children:[h.jsx(M7,{src:bi(p.photo),alt:i==="eng"?p.name.eng:p.name.kor}),h.jsxs(I7,{children:[h.jsxs(P7,{children:[" ",i==="eng"?`${p.name.eng} ${p.branch.eng}`:`${p.name.kor} ${p.branch.kor}`," "]}),h.jsxs(jw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?p.theme?.eng:p.theme?.kor," "]}),h.jsxs(jw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?p.discount.eng:p.discount.kor," "]})]})]}),h.jsxs(N7,{children:[h.jsx(Ow,{type:"button",onClick:()=>r(`/?store=${p._id}`),children:i==="eng"?"View":"보기"}),h.jsx(Ow,{type:"button",onClick:()=>{m(p)},children:i==="eng"?"Delete":"삭제"})]})]},p._id))})]})}const B7=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,U7=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,F7=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,H7=x.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function $7(){const{language:t}=ze();return h.jsx(B7,{children:h.jsxs(U7,{children:[h.jsxs(F7,{children:[" ",t==="eng"?"Favorite stores":"즐겨찾기한 매장"," "]}),h.jsxs(H7,{children:[" ",t==="eng"?"Shows the stores you favorited on the map page.":"지도 페이지에서 즐겨찾기를 누른 매장들을 보여줍니다."," "]})]})})}const V7=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        padding: 0;
        align-items: stretch;
    }
`,Z7=x.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,q7=x.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,G7=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    pointer-events: auto;
`,Y7=x.span`
    font-size: 1rem;
    color: #333;
`,K7=x.input`
    width: 100%;
    min-height: 1.6rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    background-color: transparent;
    color: black;
    margin: 0 0.5rem;
    
    &::placeholder {
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;function kT({searchValue:t,onChangeSearchValue:i}){const{language:r}=ze();return h.jsxs(V7,{children:[h.jsxs(Z7,{children:[" ",r==="eng"?"Search":"검색"," "]}),h.jsx(q7,{children:h.jsxs(G7,{children:[h.jsx(Y7,{children:" 🔍 "}),h.jsx(K7,{type:"text",id:"searchBar",value:t,onChange:s=>i(s.target.value),placeholder:r==="kor"?"매장 이름 혹은 테마로 검색해보세요.":"Search by store name or theme."})]})})]})}const W7=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex: 1;
        padding: 0;
        align-items: stretch;
    }
`,X7=x.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
    box-sizing: border-box;
    padding-right: 0.7rem;

    @media (max-width: 1024px) {
        display: none;
    }
`,J7=x.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`,Q7=x.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    color: black;
    height: calc(1.6rem + 2px);
    min-height: calc(1.6rem + 2px);

    @media (max-width: 1024px) {
        font-size: 0.75rem;
    }
`,e8=x.ul`
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    right: 0;
    z-index: 30;
    margin: 0;
    padding: 0.25rem 0;
    list-style: none;
    background: white;
    border: 1px solid #333;
    border-radius: 0.3rem;
    max-height: 14rem;
    overflow: auto;
    box-shadow: 0 6px 16px #2E2A6320;
`,zw=x.li`
    padding: 0.45rem 0.7rem;
    font-size: 0.85rem;
    text-align: center;
    cursor: pointer;
    color: #2E2A63;
    background: ${({$selected:t})=>t?"#F1EDFC":"white"};

    &:hover {
        background: #F1EDFC;
    }
`;function jT({selectedCategory:t,onChangeSelectedCategory:i}){const{categories:r}=tu(),{language:s}=ze(),[u,m]=k.useState(!1),p=k.useRef(null),b=s==="eng"?"All":"전체",y=t==="all"?b:r.find(_=>_.name.kor===t)?.name[s]??b;return k.useEffect(()=>{function _(T){p.current&&!p.current.contains(T.target)&&m(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),h.jsxs(W7,{children:[h.jsxs(X7,{children:[" ",s==="eng"?"Filter":"필터"," "]}),h.jsxs(J7,{ref:p,children:[h.jsx(Q7,{type:"button",onClick:()=>m(_=>!_),children:y}),u&&h.jsxs(e8,{children:[h.jsx(zw,{$selected:t==="all",onClick:()=>{i("all"),m(!1)},children:b}),r.map(_=>h.jsx(zw,{$selected:t===_.name.kor,onClick:()=>{i(_.name.kor),m(!1)},children:s==="eng"?_.name.eng:_.name.kor},_._id))]})]})]})}const t8=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,n8=x.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`,i8=x.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;function a8({count:t}){const{language:i}=ze();return h.jsxs(t8,{children:[h.jsxs(n8,{children:[" ",i==="eng"?"Favorite stores number":"즐겨찾기한 매장 개수"," "]}),h.jsxs(i8,{children:[" ",t," "]})]})}const r8=x.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 0.7rem;
        gap: 0.7rem;
    }
`;function o8({searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,favoriteCount:u}){return h.jsxs(r8,{children:[h.jsx(kT,{searchValue:t,onChangeSearchValue:i}),h.jsx(a8,{count:u}),h.jsx(jT,{selectedCategory:r,onChangeSelectedCategory:s})]})}const s8=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`,Lw=x.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: center;
    font-size: 0.95rem;
    color: #6b6580;
`;function l8(){const[t,i]=k.useState(""),[r,s]=k.useState("all"),{stores:u}=wi(),{student:m}=xi(),{language:p}=ze(),b=m?.favorites??[],y=u.filter(j=>b.includes(j._id)),_=t.trim().toLowerCase(),T=y.filter(j=>{const M=r==="all"||j.category.kor===r;if(!_)return M;const z=j.name[p].toLowerCase(),P=j.theme[p].toLowerCase();return M&&(z.includes(_)||P.includes(_))}),E=[...T].sort((j,M)=>{const z=p==="eng"?`${j.name.eng} ${j.branch.eng}`:`${j.name.kor} ${j.branch.kor}`,P=p==="eng"?`${M.name.eng} ${M.branch.eng}`:`${M.name.kor} ${M.branch.kor}`;return p==="eng"?z.localeCompare(P,"en"):z.localeCompare(P,"ko")});return h.jsxs(s8,{children:[h.jsx($7,{}),h.jsx(o8,{searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,favoriteCount:y.length}),y.length===0?h.jsxs(Lw,{children:[" ",p==="eng"?"There are no favorite stores.":"즐겨찾기한 매장이 없습니다"," "]}):T.length===0?h.jsxs(Lw,{children:[" ",p==="eng"?"There are no stores matching this filter.":"해당 필터링에 맞는 매장이 없습니다."," "]}):h.jsx(D7,{stores:E})]})}const c8=x.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,u8=x.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,Uc=x.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,_c=x.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,d8=x.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,f8=x(Uc)`
    width: 4.5rem;
`,h8=x(Uc)`
    width: 6rem;
`,OT=x.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,m8=x.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,p8=x.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,g8=x.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,v8=x.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,y8=x.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,b8=x.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Rw=x.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,_8=x.div`
    display: flex;
    gap: 0.45rem;
`,x8=x(OT)`
    flex: 1;
    padding: 0.45rem 0.7rem;
`;function w8({stores:t}){const{language:i}=ze(),r=Yt();return h.jsxs(h.Fragment,{children:[h.jsx(c8,{children:h.jsxs(u8,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(f8,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(Uc,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(Uc,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs(Uc,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(h8,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(s=>h.jsxs("tr",{children:[h.jsx(_c,{children:h.jsx(d8,{src:bi(s.photo),alt:i==="eng"?s.name.eng:s.name.kor})}),h.jsxs(_c,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(_c,{children:[" ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(_c,{children:[" ",i==="eng"?s.discount.eng:s.discount.kor," "]}),h.jsx(_c,{children:h.jsx(OT,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}),h.jsx(m8,{children:t.map(s=>h.jsxs(p8,{children:[h.jsxs(g8,{children:[h.jsx(v8,{src:bi(s.photo),alt:i==="eng"?s.name.eng:s.name.kor}),h.jsxs(y8,{children:[h.jsxs(b8,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(Rw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(Rw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?s.discount.eng:s.discount.kor," "]})]})]}),h.jsx(_8,{children:h.jsx(x8,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}const S8=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`,E8=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,T8=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,C8=x.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`,A8=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
`,k8=x.p`
    font-size: 0.75rem;
    color: #6b6580;
    margin: 0;
`,j8=x.select`
    width: 12rem;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.85rem;
`,O8=x.p`
    display: none;
    font-size: 0.8rem;
    color: black;
    margin: 0;
    text-align: left;

    @media (max-width: 1024px) {
        display: block;
    }
`,Mw=x.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: left;
    font-size: 0.95rem;
    color: #6b6580;
`;function z8(){const{language:t}=ze(),{stores:i}=wi(),{student:r}=xi(),{categories:s}=tu(),[u,m]=k.useState("all"),b=(r?.recentViews??[]).slice(0,7).map(_=>i.find(T=>String(T._id)===String(_))).filter(_=>!!_),y=b.filter(_=>u==="all"||_.category.kor===u);return h.jsxs(S8,{children:[h.jsxs(E8,{children:[h.jsxs(T8,{children:[" ",t==="eng"?"Recently viewed stores":"최근 본 매장"," "]}),h.jsxs(C8,{children:[" ",t==="eng"?"Shows the 7 most recently viewed stores.":"최근 본 매장 7개를 보여줍니다."," "]})]}),h.jsxs(A8,{children:[h.jsxs(k8,{children:[" ",t==="eng"?"Filter":"필터"," "]}),h.jsxs(j8,{value:u,onChange:_=>m(_.target.value),children:[h.jsxs("option",{value:"all",children:[" ",t==="eng"?"All":"전체"," "]}),s.map(_=>h.jsx("option",{value:_.name.kor,children:t==="eng"?_.name.eng:_.name.kor},_._id))]}),h.jsxs(O8,{children:[" ",t==="eng"?"Shows the 7 most recently viewed stores.":"최근 본 매장 7개를 보여줍니다."," "]})]}),b.length===0?h.jsxs(Mw,{children:[" ",t==="eng"?"There are no recently viewed stores.":"최근 본 매장이 없습니다."," "]}):y.length===0?h.jsxs(Mw,{children:[" ",t==="eng"?"There are no stores matching this filter.":"해당 필터링에 맞는 매장이 없습니다."," "]}):h.jsx(w8,{stores:y})]})}const L8="https://docs.google.com/document/d/1C7lhu1tltYpBHycepeHe6eppXDr8pjKsM8JdEsQmTr8/edit?usp=sharing",R8=x.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0.7rem 1.5rem 0.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    overflow: hidden;
    text-align: left;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
        overflow: auto;
        height: auto;
    }
`,M8=x.div`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,I8=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,P8=x.p`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,N8=x.div`
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        overflow: visible;
        height: auto;
    }
`,Q0=x.div`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,D8=x(Q0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,B8=x.div`
    flex: 1;
    min-height: 0;
`,U8=x(Q0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,F8=x(Q0)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,Yp=x.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,H8=x.p`
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.55rem 0;
`,$8=x.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    line-height: 1.45;
`,Kp=x.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
        ${({$stack:t})=>t&&`
            display: block;
            flex-wrap: nowrap;
        `}
    }
`,V8=x.div`
    min-width: 0;
    flex: 1;
`,Z8=x.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,Wd=x.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,Wp=x.p`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,zT=x.button`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,n0=x.button`
    border: none;
    background: #7965EA;
    color: white;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,q8=x(zT)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,G8=x(n0)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        font-size: 0.75rem;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,Y8=x.input`
    box-sizing: border-box;
    width: 12rem;
    border: 1px solid #d8d3ea;
    border-radius: 0.3rem;
    padding: 0.35rem 0.5rem;
    font-size: 0.85rem;
    color: #2E2A63;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: none;
        height: 2.15rem;
    }
`,K8=x.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,Xp=x.p`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,W8=x.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    padding: 0.4rem 0.65rem;
    font-size: 0.85rem;
    color: #2E2A63;
    background: white;

    &:focus {
        outline: none;
        border-color: #7965EA;
    }
`,X8=x.div`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,J8=x(W8)`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,Jp=x.button`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,Q8=x.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,Qp=x(K8)`
    gap: 0.2rem;
`,eg=x(X8)`
    min-height: 2rem;
`,tg=x(J8)`
    padding: 0.35rem 0.6rem;
`,eB=x.p`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,Iw=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`,tB=x.div`
    height: 100%;
    padding: 0.85rem 1.05rem;

    @media (max-width: 1024px) {
        height: auto;
    }
    box-sizing: border-box;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.55rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`,nB=x.p`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,iB=x.p`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,aB=x.button`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,rB=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`;function oB(){const{language:t}=ze(),{student:i,updateStudent:r,logoutStudent:s}=xi(),u=Yt(),[m,p]=k.useState(!1),[b,y]=k.useState(i?.nickname??""),[_,T]=k.useState(!1),[E,j]=k.useState(""),[M,z]=k.useState(""),[P,H]=k.useState(""),[B,$]=k.useState(!1),[W,ue]=k.useState(!1),[J,se]=k.useState(!1),[Q,he]=k.useState(!1);if(!i)return null;const Ce=i;async function Ue(){const ge=b.trim();if(!ge){alert(t==="eng"?"Please enter your name.":"이름을 입력해주세요.");return}T(!0);try{const ae=await sO(Ce._id,ge);r(ae),p(!1)}catch(ae){console.error(ae),alert(t==="eng"?"Failed to update the name.":"이름 수정에 실패했습니다.")}finally{T(!1)}}async function ve(){if(!E||!M||!P){alert(t==="eng"?"Please fill in all password fields.":"비밀번호를 모두 입력해주세요.");return}if(!cS(M)){alert(t==="eng"?"Use 8-20 characters including letters and numbers.":"영문자, 숫자를 포함한 8-20자로 입력해주세요.");return}if(M!==P){alert(t==="eng"?"The new passwords do not match.":"새 비밀번호가 일치하지 않습니다.");return}he(!0);try{try{await eS(Ce.id,E)}catch(ge){const ae=ge instanceof Error?ge.message:"";if(ae==="INVALID_CREDENTIALS"||ae.includes("올바르지")){alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다.");return}throw ge}await lO(Ce._id,E,M),j(""),z(""),H(""),alert(t==="eng"?"Password has been changed.":"비밀번호가 변경되었습니다.")}catch(ge){console.error(ge);const ae=ge instanceof Error?ge.message:"";ae.includes("현재 비밀번호")||ae.toLowerCase().includes("current password")?alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다."):alert(ae||(t==="eng"?"Failed to change the password.":"비밀번호 변경에 실패했습니다."))}finally{he(!1)}}async function ke(){if(window.confirm(t==="eng"?"Are you sure you want to delete this account? This cannot be undone.":"정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다."))try{await cO(Ce._id),s(),u("/login")}catch(ae){console.error(ae),alert(t==="eng"?"Failed to delete the account.":"계정 탈퇴에 실패했습니다.")}}return h.jsxs(R8,{children:[h.jsxs(M8,{children:[h.jsxs(I8,{children:[" ",t==="eng"?"Account Management":"계정 관리"," "]}),h.jsxs(P8,{children:[" ",t==="eng"?"You can manage your account and security information.":"내 계정과 보안 정보를 관리할 수 있습니다."," "]})]}),h.jsxs(N8,{children:[h.jsxs(D8,{children:[h.jsxs(Yp,{children:[" ",t==="eng"?"Basic information":"기본 정보"," "]}),h.jsxs(B8,{children:[h.jsx(Kp,{$stack:m,children:m?h.jsxs(V8,{children:[h.jsxs(Wd,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(Z8,{children:[h.jsx(Y8,{value:b,onChange:ge=>y(ge.target.value)}),h.jsxs(q8,{type:"button",onClick:()=>{p(!1),y(i.nickname)},children:[" ",t==="eng"?"Cancel":"취소"," "]}),h.jsx(G8,{type:"button",disabled:_,onClick:()=>{Ue()},children:t==="eng"?"Save":"저장"})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{children:[h.jsxs(Wd,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(Wp,{children:[" ",i.nickname," "]})]}),h.jsxs(zT,{type:"button",onClick:()=>{y(i.nickname),p(!0)},children:[" ",t==="eng"?"Edit":"수정"," "]})]})}),h.jsx(Kp,{children:h.jsxs("div",{children:[h.jsxs(Wd,{children:[" ",t==="eng"?"ID":"아이디"," "]}),h.jsxs(Wp,{children:[" ",i.id," "]})]})}),h.jsx(Kp,{children:h.jsxs("div",{children:[h.jsxs(Wd,{children:[" ",t==="eng"?"Email":"이메일"," "]}),h.jsxs(Wp,{children:[" ",i.email," "]})]})})]})]}),h.jsxs(U8,{children:[h.jsxs(Yp,{children:[" ",t==="eng"?"Change password":"비밀번호 변경"," "]}),h.jsx(H8,{children:t==="eng"?"8-20 characters including letters and numbers":"영문자, 숫자 포함 8-20자"}),h.jsxs(Q8,{children:[h.jsxs(Qp,{children:[h.jsxs(Xp,{children:[" ",t==="eng"?"Current password":"현재 비밀번호"," "]}),h.jsxs(eg,{children:[h.jsx(tg,{type:B?"text":"password",value:E,onChange:ge=>j(ge.target.value)}),h.jsx(Jp,{type:"button",onClick:()=>$(ge=>!ge),children:h.jsx(Xn,{icon:Tn.far.eye})})]})]}),h.jsxs(Qp,{children:[h.jsxs(Xp,{children:[" ",t==="eng"?"New password":"새 비밀번호"," "]}),h.jsxs(eg,{children:[h.jsx(tg,{type:W?"text":"password",value:M,onChange:ge=>z(ge.target.value)}),h.jsx(Jp,{type:"button",onClick:()=>ue(ge=>!ge),children:h.jsx(Xn,{icon:Tn.far.eye})})]})]}),h.jsxs(Qp,{children:[h.jsxs(Xp,{children:[" ",t==="eng"?"Confirm new password":"새 비밀번호 확인"," "]}),h.jsxs(eg,{children:[h.jsx(tg,{type:J?"text":"password",value:P,onChange:ge=>H(ge.target.value)}),h.jsx(Jp,{type:"button",onClick:()=>se(ge=>!ge),children:h.jsx(Xn,{icon:Tn.far.eye})})]}),P.length>0&&h.jsx(eB,{$valid:P===M,children:P===M?t==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":t==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다."})]})]}),h.jsx(Iw,{children:h.jsx(n0,{type:"button",disabled:Q,onClick:()=>{ve()},children:t==="eng"?"Change password":"비밀번호 변경"})})]}),h.jsxs(tB,{children:[h.jsxs("div",{children:[h.jsxs(nB,{children:[" ",t==="eng"?"Delete account":"계정 탈퇴"," "]}),h.jsx(iB,{children:t==="eng"?"If you delete your account, your student information will be removed and cannot be restored.":"탈퇴하면 학생 계정 정보가 삭제되며 다시 복구할 수 없습니다."})]}),h.jsx(rB,{children:h.jsx(aB,{type:"button",onClick:()=>{ke()},children:t==="eng"?"Delete account":"계정 탈퇴"})})]}),h.jsxs(F8,{children:[h.jsxs(Yp,{children:[" ",t==="eng"?"Korean Web User Guide":"한글 웹 사용 설명서"," "]}),h.jsx($8,{children:t==="eng"?"You can view the Korean web user guide.":"한글 웹 사용 설명서를 확인할 수 있습니다."}),h.jsx(Iw,{children:h.jsx(n0,{type:"button",onClick:()=>window.open(L8,"_blank","noopener,noreferrer"),children:t==="eng"?"Open":"열기"})})]})]})]})}const sB=x.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,lB=x.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,fu=x.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,xc=x.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow-wrap: anywhere;
    word-break: break-word;
`,cB=x.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,uB=x(fu)`
    width: ${({$equal:t})=>t?"10rem":"4.5rem"};
`,dB=x(fu)`
    ${({$wide:t})=>t?"":"width: 24%;"}
`,fB=x(fu)`
    ${({$wide:t})=>t?"":"width: 18%;"}
`,hB=x(fu)`
    ${({$wide:t})=>t?"":"width: 34%;"}
`,mB=x(fu)`
    width: 9.5rem;
`,i0=x.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`,pB=x.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 3.5rem;
        box-sizing: border-box;
    }
`,gB=x.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,vB=x.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,yB=x.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,bB=x.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,_B=x.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Pw=x.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,xB=x.div`
    display: flex;
    gap: 0.45rem;
`,Nw=x(i0)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function wB({stores:t,showActions:i=!0}){const{language:r}=ze(),s=Yt(),{deleteStore:u}=wi();async function m(p){try{await u(p),alert(r==="eng"?"Successfully deleted.":"매장이 삭제되었습니다.")}catch(b){console.error(b),alert(r==="eng"?"Failed to delete the store.":"매장 삭제에 실패했습니다.")}}return h.jsxs(h.Fragment,{children:[h.jsx(sB,{children:h.jsxs(lB,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(uB,{$equal:!i,children:[" ",r==="eng"?"Photo":"사진"," "]}),h.jsxs(dB,{$wide:!i,children:[" ",r==="eng"?"Name":"이름"," "]}),h.jsxs(fB,{$wide:!i,children:[" ",r==="eng"?"Theme":"테마"," "]}),h.jsxs(hB,{$wide:!i,children:[" ",r==="eng"?"Discount":"할인"," "]}),i?h.jsxs(mB,{children:[" ",r==="eng"?"Actions":"관리"," "]}):null]})}),h.jsx("tbody",{children:t.map(p=>h.jsxs("tr",{children:[h.jsx(xc,{children:h.jsx(cB,{src:bi(p.photo),alt:r==="eng"?p.name.eng:p.name.kor})}),h.jsxs(xc,{children:[" ",r==="eng"?`${p.name.eng} ${p.branch.eng}`:`${p.name.kor} ${p.branch.kor}`," "]}),h.jsxs(xc,{children:[" ",r==="eng"?p.theme?.eng:p.theme?.kor," "]}),h.jsxs(xc,{children:[" ",r==="eng"?p.discount.eng:p.discount.kor," "]}),i?h.jsxs(xc,{children:[h.jsx(i0,{type:"button",onClick:()=>s(`/admin/store/edit/${p._id}`),children:r==="eng"?"Edit":"수정"}),h.jsx(i0,{type:"button",onClick:()=>{m(p)},children:r==="eng"?"Delete":"삭제"})]}):null]},p._id))})]})}),h.jsx(pB,{children:t.map(p=>h.jsxs(gB,{children:[h.jsxs(vB,{children:[h.jsx(yB,{src:bi(p.photo),alt:r==="eng"?p.name.eng:p.name.kor}),h.jsxs(bB,{children:[h.jsxs(_B,{children:[" ",r==="eng"?`${p.name.eng} ${p.branch.eng}`:`${p.name.kor} ${p.branch.kor}`," "]}),h.jsxs(Pw,{children:[" ",r==="eng"?"Theme":"테마",": ",r==="eng"?p.theme?.eng:p.theme?.kor," "]}),h.jsxs(Pw,{children:[" ",r==="eng"?"Discount":"할인",": ",r==="eng"?p.discount.eng:p.discount.kor," "]})]})]}),i?h.jsxs(xB,{children:[h.jsx(Nw,{type:"button",onClick:()=>s(`/admin/store/edit/${p._id}`),children:r==="eng"?"Edit":"수정"}),h.jsx(Nw,{type:"button",onClick:()=>{m(p)},children:r==="eng"?"Delete":"삭제"})]}):null]},p._id))})]})}const SB=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,EB=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,TB=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,CB=x.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`,AB=x.div`
    display: flex;
    align-items: flex-end;
`,kB=x.button`
    background-color: #A79CEE;
    scale: 0.75;
`;function jB(){const{language:t}=ze(),i=Yt();return h.jsxs(SB,{children:[h.jsxs(EB,{children:[h.jsxs(TB,{children:[" ",t==="eng"?"Stores Management":"매장 관리"," "]}),h.jsxs(CB,{children:[" ",t==="eng"?"Manage all stores and add, edit, delete them.":"전체 매장을 관리하고 추가, 수정, 삭제할 수 있습니다."," "]})]}),h.jsx(AB,{children:h.jsxs(kB,{onClick:()=>i("/admin/store/add"),children:[" + ",t==="eng"?"Add Store":"매장 추가"," "]})})]})}const OB=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,zB=x.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`,LB=x.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;function RB(){const{language:t}=ze(),{stores:i}=wi();return h.jsxs(OB,{children:[h.jsxs(zB,{children:[" ",t==="eng"?"Total stores number":"전체 매장 개수"," "]}),h.jsxs(LB,{children:[" ",i.length," "]})]})}const MB=x.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 0.7rem;
        gap: 0.7rem;
    }
`,IB=x.div`
    display: contents;

    @media (max-width: 1024px) {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
        min-width: 0;
    }
`,PB=x.button`
    display: none;

    @media (max-width: 1024px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        height: calc(1.6rem + 2px);
        box-sizing: border-box;
        border: none;
        border-radius: 0.3rem;
        background-color: #A79CEE;
        color: white;
        padding: 0 0.75rem;
        font-size: 0.75rem;
        white-space: nowrap;
        cursor: pointer;
    }
`;function LT({searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,showAddButton:u=!0}){const{language:m}=ze(),p=Yt();return h.jsxs(MB,{children:[h.jsx(kT,{searchValue:t,onChangeSearchValue:i}),h.jsx(RB,{}),h.jsxs(IB,{children:[h.jsx(jT,{selectedCategory:r,onChangeSelectedCategory:s}),u?h.jsxs(PB,{type:"button",onClick:()=>p("/admin/store/add"),children:["+ ",m==="eng"?"Add Store":"매장 추가"]}):null]})]})}const NB=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`;function DB(){const[t,i]=k.useState(""),[r,s]=k.useState("all"),{stores:u}=wi(),{language:m}=ze(),p=t.trim().toLowerCase(),y=[...u.filter(_=>{const T=r==="all"||_.category.kor===r;if(!p)return T;const E=_.name[m].toLowerCase(),j=_.theme[m].toLowerCase();return T&&(E.includes(p)||j.includes(p))})].sort((_,T)=>{const E=m==="eng"?`${_.name.eng} ${_.branch.eng}`:`${_.name.kor} ${_.branch.kor}`,j=m==="eng"?`${T.name.eng} ${T.branch.eng}`:`${T.name.kor} ${T.branch.kor}`;return m==="eng"?E.localeCompare(j,"en"):E.localeCompare(j,"ko")});return h.jsxs(NB,{children:[h.jsx(jB,{}),h.jsx(LT,{searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s}),h.jsx(wB,{stores:y})]})}const BB=x.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,UB=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,FB=x.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,HB=x.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function $B(){const{language:t}=ze();return h.jsx(BB,{children:h.jsxs(UB,{children:[h.jsxs(FB,{children:[" ",t==="eng"?"Owners Management":"사장님 관리"," "]}),h.jsxs(HB,{children:[" ",t==="eng"?"You can allow or manage owner registration.":"사장님 가입 신청을 승인하거나 관리할 수 있습니다."," "]})]})})}const VB=x.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        padding: 0.7rem;
    }
`;function ZB({searchValue:t,onChangeSearchValue:i,owners:r}){return h.jsx(VB,{children:h.jsx(N6,{searchValue:t,onChangeSearchValue:i,owners:r})})}const qB=x.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,GB=x.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,Fc=x.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,Ms=x.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,YB=x(Fc)`
    width: 10rem;
`,KB=x(Fc)`
    width: 7.5rem;
`,WB=x(Ms)`
    color: #9a94b0;
`,zf=x.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`,RT=x(zf)`
    background-color: #7965EA;
    color: white;
`,XB=x.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1rem;
        box-sizing: border-box;
    }
`,JB=x.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,QB=x.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,eU=x.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,ng=x.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,tU=x.div`
    display: flex;
    gap: 0.45rem;
`,Dw=x(zf)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,nU=x(RT)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,iU=x.p`
    margin: 0;
    padding: 0.9rem 0.2rem;
    font-size: 0.85rem;
    color: #9a94b0;
    text-align: left;
`;function Bw(t){if(!t)return"";const i=new Date(t);if(Number.isNaN(i.getTime()))return t.slice(0,10);const r=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0");return`${r}-${s}-${u}`}function ig({owners:t,variant:i,onApprove:r,onReject:s,onPending:u}){const{language:m}=ze(),p=i==="pending",b=p?5:4;return h.jsxs(h.Fragment,{children:[h.jsx(qB,{children:h.jsxs(GB,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(Fc,{children:[" ",m==="eng"?p?"Applicant":"Owner":p?"신청자 정보":"사장님"," "]}),h.jsxs(Fc,{children:[" ",m==="eng"?"Contact":"연락처"," "]}),h.jsxs(Fc,{children:[" ",m==="eng"?"Linked store":"연결 매장"," "]}),p&&h.jsxs(KB,{children:[" ",m==="eng"?"Applied date":"신청일"," "]}),h.jsxs(YB,{children:[" ",m==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.length===0?h.jsx("tr",{children:h.jsx(WB,{colSpan:b,children:m==="eng"?"No owners in this list.":"해당하는 사장님이 없습니다."})}):t.map(y=>h.jsxs("tr",{children:[h.jsxs(Ms,{children:[" ",y.name," "]}),h.jsxs(Ms,{children:[" ",y.phone," "]}),h.jsxs(Ms,{children:[" ",jf(y,m)," "]}),p&&h.jsxs(Ms,{children:[" ",Bw(y.createdAt)," "]}),h.jsx(Ms,{children:p?h.jsxs(h.Fragment,{children:[h.jsx(zf,{type:"button",onClick:()=>s?.(y),children:m==="eng"?"Reject":"거절"}),h.jsx(RT,{type:"button",onClick:()=>r?.(y),children:m==="eng"?"Approve":"승인"})]}):h.jsx(zf,{type:"button",onClick:()=>u?.(y),children:m==="eng"?"Pending":"대기"})})]},y._id))})]})}),h.jsx(XB,{children:t.length===0?h.jsx(iU,{children:m==="eng"?"No owners in this list.":"해당하는 사장님이 없습니다."}):t.map(y=>h.jsxs(JB,{children:[h.jsxs(QB,{children:[h.jsxs(eU,{children:[" ",y.name," "]}),h.jsxs(ng,{children:[" ",m==="eng"?"Contact":"연락처",": ",y.phone," "]}),h.jsxs(ng,{children:[" ",m==="eng"?"Linked store":"연결 매장",": ",jf(y,m)," "]}),p&&h.jsxs(ng,{children:[m==="eng"?"Applied date":"신청일",": ",Bw(y.createdAt)]})]}),h.jsx(tU,{children:p?h.jsxs(h.Fragment,{children:[h.jsx(Dw,{type:"button",onClick:()=>s?.(y),children:m==="eng"?"Reject":"거절"}),h.jsx(nU,{type:"button",onClick:()=>r?.(y),children:m==="eng"?"Approve":"승인"})]}):h.jsx(Dw,{type:"button",onClick:()=>u?.(y),children:m==="eng"?"Pending":"대기"})})]},y._id))})]})}const aU=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`,ag=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,rg=x.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,og=x.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
`,sg=x.span`
    font-weight: bold;
    font-size: 1rem;
    color: #7965EA;
`;function rU(){const{language:t}=ze(),[i,r]=k.useState(""),[s,u]=k.useState([]),[m,p]=k.useState(!0),b=k.useCallback(async()=>{const j=await R_();u(j)},[]);k.useEffect(()=>{let j=!1;return p(!0),R_().then(M=>{j||u(M)}).catch(M=>{console.error(M),j||alert(t==="eng"?"Failed to load owners.":"사장님 목록을 불러오지 못했습니다.")}).finally(()=>{j||p(!1)}),()=>{j=!0}},[]);const y=s.filter(j=>j.status==="pending"),_=s.filter(j=>j.status==="approved"),T=s.filter(j=>j.status==="rejected");async function E(j,M){try{await Fz(j._id,M),await b()}catch(z){console.error(z),alert(t==="eng"?"Failed to update the owner.":"사장님 상태 변경에 실패했습니다.")}}return h.jsxs(aU,{children:[h.jsx($B,{}),h.jsx(ZB,{searchValue:i,onChangeSearchValue:r,owners:s}),h.jsxs(ag,{children:[h.jsxs(rg,{children:[h.jsxs(og,{children:[" ",t==="eng"?"Pending applications":"가입 신청 대기"," "]}),h.jsxs(sg,{children:[" ",m?"-":y.length," "]})]}),h.jsx(ig,{variant:"pending",owners:y,onApprove:j=>{E(j,"approved")},onReject:j=>{E(j,"rejected")}})]}),h.jsxs(ag,{children:[h.jsxs(rg,{children:[h.jsxs(og,{children:[" ",t==="eng"?"Approved owners":"승인된 사장님"," "]}),h.jsxs(sg,{children:[" ",m?"-":_.length," "]})]}),h.jsx(ig,{variant:"approved",owners:_,onPending:j=>{E(j,"pending")}})]}),h.jsxs(ag,{children:[h.jsxs(rg,{children:[h.jsxs(og,{children:[" ",t==="eng"?"Rejected owners":"거절된 사장님"," "]}),h.jsxs(sg,{children:[" ",m?"-":T.length," "]})]}),h.jsx(ig,{variant:"rejected",owners:T,onPending:j=>{E(j,"pending")}})]})]})}const oU=x.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,sU=x.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,lU=x.div`
    flex: 1;
    min-width: 0;
`,cU=x.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,uU=x.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;function MT({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,value:u,onChange:m}){const{language:p}=ze();return h.jsxs(oU,{children:[h.jsxs(sU,{children:[" ",p==="eng"?t:i," "]}),h.jsxs(lU,{children:[h.jsx(cU,{type:"text",value:u,placeholder:p==="eng"?r:s,onChange:b=>m?.(b.target.value)}),h.jsx(uU,{children:" "})]})]})}function dU(t){return t.trim().replace(/\s+/g," ").toLowerCase().normalize("NFC")}function IT(t){return dU(t).replace(/\s/g,"")}function Xc(t,i){const r=((i==="eng"?t.name?.eng:t.name?.kor)??"").trim(),s=((i==="eng"?t.branch?.eng:t.branch?.kor)??"").trim();return!s||r.endsWith(s)?r:`${r} ${s}`}function fU(t){return[Xc(t,"kor"),Xc(t,"eng"),`${t.name?.kor??""} ${t.branch?.kor??""}`,`${t.name?.eng??""} ${t.branch?.eng??""}`,`${t.name?.kor??""}${t.branch?.kor??""}`,`${t.name?.eng??""}${t.branch?.eng??""}`].map(IT).filter(Boolean)}function hU(t,i){const r=IT(t);return r?i.filter(u=>fU(u).includes(r))[0]?._id??"":""}const mU=x.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 10;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,pU=x.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,gU=x.div`
    flex: 1;
    min-width: 0;
`,vU=x.div`
    position: relative;
    width: 100%;
`,yU=x.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
`,bU=x.input`
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.85rem;
    background: transparent;

    &::placeholder {
        font-size: 0.85rem;
    }
`,_U=x.div`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,xU=x.button`
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0.45rem 0.5rem;
    border: none;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    color: black;
    cursor: pointer;
`,wU=x.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`,SU=x.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;function EU(t,i){const r=i.trim().toLowerCase();if(!r)return!0;const s=Xc(t,"kor").toLowerCase(),u=Xc(t,"eng").toLowerCase();return s.includes(r)||u.includes(r)||(t.name?.kor??"").includes(r)||(t.name?.eng??"").toLowerCase().includes(r)||(t.branch?.kor??"").includes(r)||(t.branch?.eng??"").toLowerCase().includes(r)}function TU({storeInputRef:t,onQueryChange:i}){const{language:r}=ze(),{stores:s}=wi(),[u,m]=k.useState(""),[p,b]=k.useState(!1),[y,_]=k.useState(0),[T,E]=k.useState({top:0,left:0,width:0}),j=k.useRef(null),M=k.useRef(null),z=k.useMemo(()=>s.filter(J=>EU(J,u)),[s,u]),P=J=>Xc(J,r),H=J=>{M.current=J,t&&(t.current=J)},B=J=>{m(J),i?.(J)},$=()=>{const J=j.current?.getBoundingClientRect();J&&E({top:J.bottom+4,left:J.left,width:J.width})},W=J=>{B(J),b(!0),_(0),$()},ue=J=>{const se=P(J);M.current&&(M.current.value=se),B(se),b(!1)};return h.jsxs(mU,{children:[h.jsxs(pU,{children:[" ",r==="eng"?"Store":"가게 선택"," "]}),h.jsxs(gU,{children:[h.jsxs(vU,{children:[h.jsx(yU,{ref:j,children:h.jsx(bU,{name:"storeQuery",type:"text",defaultValue:"",autoComplete:"off",ref:H,placeholder:r==="eng"?"Enter the store name and branch.":"매장명과 지점명을 입력해주세요.",onInput:J=>W(J.currentTarget.value),onChange:J=>W(J.currentTarget.value),onCompositionEnd:J=>W(J.currentTarget.value),onFocus:()=>{b(!0),$()},onBlur:J=>{B(J.currentTarget.value),window.setTimeout(()=>b(!1),120)},onKeyDown:J=>{if(!(!p||z.length===0)){if(J.key==="ArrowDown")J.preventDefault(),_(se=>Math.min(se+1,z.length-1));else if(J.key==="ArrowUp")J.preventDefault(),_(se=>Math.max(se-1,0));else if(J.key==="Enter"){J.preventDefault();const se=z[y]??z[0];se&&ue(se)}}}})}),p&&m1.createPortal(h.jsx(_U,{style:{top:T.top,left:T.left,width:T.width},children:z.length===0?h.jsx(wU,{children:s.length===0?r==="eng"?"No stores loaded.":"가게 목록을 불러오지 못했습니다.":r==="eng"?"No matching store.":"일치하는 가게가 없습니다."}):z.map(J=>h.jsx(xU,{type:"button",onMouseDown:se=>{se.preventDefault(),ue(J)},children:P(J)},J._id))}),document.body)]}),h.jsx(SU,{children:" "})]})]})}const CU=x.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,AU=x.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,kU=x.div`
    flex: 1;
    min-width: 0;
`,jU=x.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,OU=x.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,zU=x.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,LU=x(Xn)`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
`;function RU(t){return/^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(t)}function PT({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engDescription:u,korDescription:m,value:p,onChange:b,hideHintOnNarrow:y}){const{language:_}=ze(),T=(p??"").length>0,E=RU(p??"");return h.jsxs(CU,{children:[h.jsxs(AU,{children:[" ",_==="eng"?t:i," "]}),h.jsxs(kU,{children:[h.jsx(jU,{type:"text",value:p,placeholder:_==="eng"?r:s,onChange:j=>b?.(j.target.value)}),h.jsxs(OU,{$hideOnNarrow:y,children:[h.jsxs(zU,{children:[" ",_==="eng"?u:m," "]}),T&&h.jsx(LU,{icon:E?Tn.fas.check:Tn.fas.xmark,$valid:E})]})]})]})}const MU=x.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,IU=x.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: ${({$hasDescription:t})=>t?"1rem":"0"};

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,PU=x.div`
    flex: 1;
    min-width: 0;
`,NU=x.input`
    box-sizing: border-box;
    width: 90%;
    padding: 0.4rem 0.4rem 0.4rem 0.3rem;
    margin: 0;
    border: none;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`,DU=x.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,Uw=x.p`
    font-size: 0.75rem;
    color: ${({$tone:t})=>t==="valid"?"#22c55e":t==="invalid"?"#ef4444":"gray"};
    margin: 0;
    margin-left: 0.2rem;
    flex-shrink: 0;
    text-align: left;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,BU=x(Xn)`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
`,UU=x.div`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0.15rem;
`,FU=x(Xn)`
    height: 1.5vh;
    color: #7A77B0;
`,HU=x(FU)`
    cursor: pointer;
    flex-shrink: 0;
`;function $U(t){return/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(t)}function Lf({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engDescription:u,korDescription:m,value:p,onChange:b,matchWith:y,hideHintOnNarrow:_}){const{language:T}=ze(),[E,j]=k.useState(!1),M=y!==void 0,z=(p??"").length>0,P=$U(p??""),H=z&&p===y;let B;M&&z&&(B=H?T==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":T==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다.");const $=M?!!B:!0;return h.jsxs(MU,{children:[h.jsxs(IU,{$hasDescription:$,children:[" ",T==="eng"?t:i," "]}),h.jsxs(PU,{children:[h.jsxs(UU,{children:[h.jsx(NU,{type:E?"text":"password",value:p,placeholder:T==="eng"?r:s,onChange:W=>b?.(W.target.value)}),h.jsx(HU,{icon:Tn.far.eye,onClick:()=>j(W=>!W)})]}),M?B&&h.jsxs(Uw,{$hideOnNarrow:_,$tone:H?"valid":"invalid",children:[" ",B," "]}):h.jsxs(DU,{$hideOnNarrow:_,children:[h.jsxs(Uw,{$tone:"gray",children:[" ",T==="eng"?u:m," "]}),z&&h.jsx(BU,{icon:P?Tn.fas.check:Tn.fas.xmark,$valid:P})]})]})]})}const VU=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(white 0%, #DBD8F7 30%, #DBD8F7 70%, white 100%);
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.6rem 0;
    text-align: left;

    @media (max-width: 1024px) {
        padding: 0.45rem;
    }
`,ZU=x.div`
    width: 60%;
    height: 90%;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px 0 #00000030;
    display: flex;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 100%;
        max-width: 52rem;
        height: 100%;
        min-height: 0;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        min-height: 0;
        flex-direction: column;
        overflow: hidden;
    }
`,qU=x.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        flex-shrink: 0;
        height: auto;
        padding-top: 1rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 1rem 0 0.6rem;
    }
`,GU=x.div`
    box-sizing: border-box;
    width: 5rem;
    height: 5rem;
    padding: 0.75rem;
    border: 0.5px solid #5D53F1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,YU=x.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,KU=x.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,Fw=x.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,WU=x.form`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        flex: 1;
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        gap: 0.12rem;
        padding: 0.8rem 0 1.2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`,XU=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,JU=x.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin-top: 0.25rem;
    }

    @media (max-width: 767px) {
        width: 92%;
        margin-top: 0.7rem;
    }
`,QU=x.button`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
    }
`,e9=x.button`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    box-sizing: border-box;
    padding: 0.5rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
        font-weight: 400;
    }
`;function t9(t,i){const r=t instanceof Error?t.message:"";return r.includes("아이디")?i==="eng"?"This ID is already in use.":"이미 있는 아이디입니다.":r.includes("이미 가입된 전화번호")||r.includes("이미 사용 중인 전화번호")?i==="eng"?"This phone number is already registered.":"이미 가입된 전화번호입니다.":r.includes("이미 가입")?i==="eng"?"This account is already registered.":"이미 가입된 계정입니다.":r.includes("서버")&&r.includes("Firebase")?i==="eng"?"Server Firebase settings are invalid. Check FIREBASE_PRIVATE_KEY in server/.env.":"서버 Firebase 설정이 올바르지 않습니다. server/.env의 FIREBASE_PRIVATE_KEY를 확인해 주세요.":r.includes("전화번호 인증")?i==="eng"?"Please verify your phone number again.":"전화번호 인증을 다시 완료해 주세요.":r.includes("일치하지")?i==="eng"?"The phone number does not match the verified number.":"전화번호가 인증 정보와 일치하지 않습니다.":r.includes("매장")?i==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.":i==="eng"?"Failed to sign up.":"회원가입에 실패했습니다."}function n9(){const{language:t}=ze(),i=Yt(),[r,s]=k.useState(""),[u,m]=k.useState(""),[p,b]=k.useState(""),y=k.useRef(null),[_,T]=k.useState(""),[E,j]=k.useState(""),[M,z]=k.useState(""),[P,H]=k.useState(!1);async function B($){if(P)return;const W=String(new FormData($).get("storeQuery")??y.current?.value??"");if(!r.trim()||!u.trim()||!_.trim()||!E){alert(t==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.");return}if(!W.trim()){alert(t==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.");return}if(!p){alert(t==="eng"?"Please verify your phone number.":"전화번호 인증을 완료해 주세요.");return}if(E!==M){alert(t==="eng"?"Passwords do not match.":"비밀번호가 일치하지 않습니다.");return}H(!0);try{const ue=await Vj(),J=hU(W,ue);if(!J){alert(t==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.");return}let se=p;try{Gt.currentUser&&(se=await Gt.currentUser.getIdToken(!0))}catch(Q){console.error(Q)}if(!se){alert(t==="eng"?"Please verify your phone number again.":"전화번호 인증을 다시 완료해 주세요.");return}await Mz({name:r.trim(),phone:u.replace(/\D/g,""),id:_.trim(),password:E,storeId:J},se),alert(t==="eng"?"Sign up completed.":"회원가입이 완료되었습니다."),i("/login")}catch(ue){console.error(ue),alert(t9(ue,t))}finally{H(!1)}}return h.jsx(VU,{children:h.jsxs(ZU,{children:[h.jsxs(qU,{children:[h.jsx(GU,{children:h.jsx(YU,{src:"/coloredStoreIcon.png",alt:"store icon"})}),h.jsxs(KU,{children:[" ",t==="eng"?"Store owner sign up":"매장 사장님 회원가입"," "]}),h.jsxs(Fw,{children:[" ",t==="eng"?"Only the owner of the":"사전 계약된 매장의 사장님만"," "]}),h.jsxs(Fw,{children:[" ",t==="eng"?"pre-contracted store can sign up.":"회원가입 가능합니다."," "]})]}),h.jsxs(WU,{onSubmit:$=>{$.preventDefault(),B($.currentTarget)},children:[h.jsx(MT,{engTitle:"Name",korTitle:"성함",engPlaceholder:"Enter your full name.",korPlaceholder:"사장님 실명을 입력해주세요.",value:r,onChange:s}),h.jsx(C6,{phone:u,onPhoneChange:$=>{m($),b("")},onVerified:b}),h.jsx(TU,{storeInputRef:y}),h.jsxs(XU,{children:[h.jsx(PT,{engTitle:"ID",korTitle:"아이디",engPlaceholder:"Enter your id.",korPlaceholder:"아이디를 입력해주세요.",engDescription:"4-20 characters including number, lowercase eng letter",korDescription:"영문 소문자, 숫자 포함 4-20자",value:_,onChange:T}),h.jsx(Lf,{engTitle:"Password",korTitle:"비밀번호",engPlaceholder:"Enter your password.",korPlaceholder:"비밀번호를 입력해주세요.",engDescription:"8-20 characters including number, eng letter",korDescription:"영문자, 숫자 포함 8-20자",value:E,onChange:j}),h.jsx(Lf,{engTitle:"Check",korTitle:"비밀번호 확인",engPlaceholder:"Enter your password again.",korPlaceholder:"비밀번호를 다시 입력해주세요.",value:M,onChange:z,matchWith:E})]}),h.jsxs(JU,{children:[h.jsx(QU,{type:"button",onClick:()=>i("/login"),children:t==="eng"?"Cancel":"취소"}),h.jsx(e9,{type:"submit",disabled:P,children:t==="eng"?"Submit":"제출"})]})]})]})})}const NT="https://outstandingspots-production.up.railway.app";async function DT(t,i){const r=await fetch(t,fn({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}async function i9(t){return DT(`${NT}/students/email/code`,{email:t})}async function a9(t,i){return DT(`${NT}/students/email/verify`,{email:t,code:i})}const r9=["stonybrook.edu","fitnyc.edu"];function o9(t){const i=t.trim().toLowerCase(),r=i.lastIndexOf("@");if(r<=0||r===i.length-1)return!1;const s=i.slice(r+1);return r9.includes(s)}function Hw(t,i){const r=t instanceof Error?t.message:"";return r==="INVALID_SCHOOL_EMAIL"?i==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.":r==="TOO_MANY_REQUESTS"?i==="eng"?"Too many attempts. Try again later.":"시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.":r==="SMTP_NOT_CONFIGURED"?i==="eng"?"Email sending is not configured. Set RESEND_API_KEY and RESEND_FROM on the API server, then restart it.":"메일 발송 설정이 없습니다. API 서버에 RESEND_API_KEY와 RESEND_FROM을 넣고 재시작해 주세요.":r==="SMTP_SEND_FAILED"?i==="eng"?"Could not send the email. Check the Resend API key and verified FROM domain.":"메일을 보내지 못했습니다. Resend API 키와 인증된 FROM 도메인을 확인해 주세요.":r==="HTTP 404"||r.includes("Cannot POST")?i==="eng"?"The email API is missing. Restart the API server in the server folder.":"이메일 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.":r==="Failed to fetch"||r.includes("NetworkError")||r.includes("fetch")?i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.":r==="CODE_NOT_SENT"?i==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.":r==="CODE_EXPIRED"?i==="eng"?"The verification code expired. Please send it again.":"인증번호가 만료되었습니다. 다시 전송해주세요.":r==="TOO_MANY_ATTEMPTS"||r==="INVALID_CODE"?i==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.":i==="eng"?"Failed to send the verification email.":"인증 메일 전송에 실패했습니다."}const s9=x.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`,l9=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;function c9({email:t,onEmailChange:i,onVerified:r}){const{language:s}=ze(),[u,m]=k.useState(""),[p,b]=k.useState(!1),[y,_]=k.useState(!1),[T,E]=k.useState(!1),j=async()=>{if(!o9(t)){alert(s==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.");return}try{E(!0),await i9(t.trim()),b(!0),alert(s==="eng"?"The verification code has been sent. If you do not see it, please check your spam folder.":"인증번호가 전송되었습니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.")}catch(P){console.error(P),alert(Hw(P,s))}finally{E(!1)}},M=async()=>{if(!p){alert(s==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}try{E(!0),await a9(t.trim(),u),_(!0),r?.()}catch(P){console.error(P),alert(Hw(P,s))}finally{E(!1)}},z=P=>{y||(i(P),_(!1),b(!1),m(""))};return h.jsx(s9,{children:h.jsxs(l9,{children:[h.jsx(kf,{engTitle:"School email",korTitle:"학교 이메일 인증",engPlaceholder:"Enter your school email.",korPlaceholder:"학교 이메일을 입력해주세요.",engButtonText:p?"Resend":"Verify",korButtonText:p?"재전송":"인증하기",value:t,onChange:z,onButtonClick:j,inputReadOnly:y,buttonDisabled:T||y,inputType:"email",description:s==="eng"?"Only school emails can be verified.":"학교 이메일만 인증 가능합니다"}),h.jsx(kf,{engTitle:"Confirm",korTitle:"이메일 확인",engPlaceholder:"Enter verification code.",korPlaceholder:"이메일로 받은 인증번호를 입력해주세요.",engButtonText:"Submit",korButtonText:"제출하기",value:u,onChange:P=>{y||m(P.replace(/\D/g,""))},onButtonClick:M,inputDisabled:!p&&!y,inputReadOnly:y,buttonDisabled:T||!p||y,maxLength:6,inputMode:"numeric",description:y?s==="eng"?"Email verified.":"이메일 인증이 완료되었습니다.":p?s==="eng"?"If you do not see the email, please check your spam folder.":"메일이 보이지 않으면 스팸함을 확인해 주세요.":" "})]})})}const u9=x.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(white 0%, #DBD8F7 30%, #DBD8F7 70%, white 100%);
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.6rem 0;
    text-align: left;

    @media (max-width: 1024px) {
        padding: 0.6rem;
    }
`,d9=x.div`
    width: 60%;
    height: 90%;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px 0 #00000030;
    display: flex;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 100%;
        max-width: 52rem;
        height: 100%;
        min-height: 0;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        min-height: 0;
        flex-direction: column;
        overflow: hidden;
    }
`,f9=x.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        flex-shrink: 0;
        height: auto;
        padding-top: 1rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 1rem 0 0.6rem;
    }
`,h9=x.div`
    box-sizing: border-box;
    width: 5rem;
    height: 5rem;
    padding: 0.75rem;
    border: 0.5px solid #5D53F1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,m9=x.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,p9=x.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,$w=x.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,g9=x.form`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        padding: 0.8rem 0 1.2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        flex: 1;
    }
`,v9=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,y9=x.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin-top: 0.7rem;
    }

    @media (max-width: 767px) {
        width: 92%;
    }
`,b9=x.button`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
    }
`,_9=x.button`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    box-sizing: border-box;
    padding: 0.5rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
        font-weight: 400;
    }
`;function x9(t,i){const r=t instanceof Error?t.message:"";return r==="DUPLICATE_ID"?i==="eng"?"It is already a duplicate ID.":"이미 있는 아이디입니다.":r==="DUPLICATE_EMAIL"?i==="eng"?"This email is already registered.":"이미 가입된 이메일입니다.":r==="EMAIL_NOT_VERIFIED"?i==="eng"?"Please verify your school email.":"학교 이메일 인증을 완료해 주세요.":r==="MISSING_FIELDS"?i==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.":r==="INVALID_SCHOOL_EMAIL"?i==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.":r==="INVALID_ID"?i==="eng"?"ID must be 4-20 characters including a number and a lowercase letter.":"아이디는 영문 소문자, 숫자를 포함해 4-20자여야 합니다.":r==="INVALID_PASSWORD"?i==="eng"?"Password must be 8-20 characters including a letter and a number.":"비밀번호는 영문자, 숫자를 포함해 8-20자여야 합니다.":r==="HTTP 404"||r.includes("Cannot POST")?i==="eng"?"The signup API is missing. Restart the API server in the server folder.":"회원가입 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.":r==="Failed to fetch"||r.includes("NetworkError")||r.includes("fetch")?i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.":i==="eng"?"Failed to sign up.":"회원가입에 실패했습니다."}function w9(){const{language:t}=ze(),i=Yt(),[r,s]=k.useState(""),[u,m]=k.useState(""),[p,b]=k.useState(!1),[y,_]=k.useState(""),[T,E]=k.useState(""),[j,M]=k.useState(""),[z,P]=k.useState(!1);async function H(){if(!z){if(!r.trim()||!u.trim()||!y.trim()||!T||!j){alert(t==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.");return}if(!p){alert(t==="eng"?"Please verify your school email.":"학교 이메일 인증을 완료해 주세요.");return}if(T!==j){alert(t==="eng"?"Passwords do not match.":"비밀번호가 일치하지 않습니다.");return}P(!0);try{await nO({nickname:r.trim(),email:u.trim(),id:y.trim(),password:T}),alert(t==="eng"?"Sign up completed.":"회원가입이 완료되었습니다."),i("/login")}catch(B){console.error(B),alert(x9(B,t))}finally{P(!1)}}}return h.jsx(u9,{children:h.jsxs(d9,{children:[h.jsxs(f9,{children:[h.jsx(h9,{children:h.jsx(m9,{src:"/mortarboardIcon.png",alt:"student icon"})}),h.jsxs(p9,{children:[" ",t==="eng"?"Student sign up":"학생 회원가입"," "]}),h.jsxs($w,{children:[" ",t==="eng"?"Only SUNY Korea students":"SUNY Korea 학생만"," "]}),h.jsxs($w,{children:[" ",t==="eng"?"can sign up.":"회원가입 가능합니다."," "]})]}),h.jsxs(g9,{onSubmit:B=>{B.preventDefault(),H()},children:[h.jsx(MT,{engTitle:"Nickname",korTitle:"닉네임",engPlaceholder:"Enter your nickname.",korPlaceholder:"닉네임을 입력해주세요.",value:r,onChange:s}),h.jsx(c9,{email:u,onEmailChange:B=>{m(B),b(!1)},onVerified:()=>b(!0)}),h.jsxs(v9,{children:[h.jsx(PT,{engTitle:"Set ID",korTitle:"아이디 설정",engPlaceholder:"Enter your id.",korPlaceholder:"아이디를 입력해주세요.",engDescription:"4-20 characters including number, lowercase eng letter",korDescription:"영문 소문자, 숫자 포함 4-20자",value:y,onChange:_}),h.jsx(Lf,{engTitle:"Set password",korTitle:"비밀번호 설정",engPlaceholder:"Enter your password.",korPlaceholder:"비밀번호를 입력해주세요.",engDescription:"8-20 characters including number, eng letter",korDescription:"영문자, 숫자 포함 8-20자",value:T,onChange:E}),h.jsx(Lf,{engTitle:"Check",korTitle:"비밀번호 확인",engPlaceholder:"Enter your password again.",korPlaceholder:"비밀번호를 다시 입력해주세요.",value:j,onChange:M,matchWith:T})]}),h.jsxs(y9,{children:[h.jsx(b9,{type:"button",onClick:()=>i("/login"),children:t==="eng"?"Cancel":"취소"}),h.jsx(_9,{type:"submit",disabled:z,children:t==="eng"?"Submit":"제출"})]})]})]})})}const S9=x.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,E9=x.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,Hc=x.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,wc=x.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,T9=x.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,C9=x(Hc)`
    width: 4.5rem;
`,A9=x(Hc)`
    width: 10rem;
`,BT=x.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`,k9=x.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,j9=x.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,O9=x.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,z9=x.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,L9=x.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,R9=x.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Vw=x.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,M9=x.div`
    display: flex;
    gap: 0.45rem;
`,I9=x(BT)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function P9({stores:t}){const{language:i}=ze(),r=Yt();return h.jsxs(h.Fragment,{children:[h.jsx(S9,{children:h.jsxs(E9,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(C9,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(Hc,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(Hc,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs(Hc,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(A9,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(s=>h.jsxs("tr",{children:[h.jsx(wc,{children:h.jsx(T9,{src:bi(s.photo),alt:i==="eng"?s.name.eng:s.name.kor})}),h.jsxs(wc,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(wc,{children:[" ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(wc,{children:[" ",i==="eng"?s.discount.eng:s.discount.kor," "]}),h.jsx(wc,{children:h.jsx(BT,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}),h.jsx(k9,{children:t.map(s=>h.jsxs(j9,{children:[h.jsxs(O9,{children:[h.jsx(z9,{src:bi(s.photo),alt:i==="eng"?s.name.eng:s.name.kor}),h.jsxs(L9,{children:[h.jsxs(R9,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(Vw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(Vw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?s.discount.eng:s.discount.kor," "]})]})]}),h.jsx(M9,{children:h.jsx(I9,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}const N9=x.div`
    width: 100%;
    height: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }
`,D9=x.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`;function B9(){const[t,i]=k.useState(""),[r,s]=k.useState("all"),{stores:u}=wi(),{language:m}=ze(),p=t.trim().toLowerCase(),y=[...u.filter(_=>{const T=r==="all"||_.category.kor===r;if(!p)return T;const E=_.name[m].toLowerCase(),j=_.theme[m].toLowerCase();return T&&(E.includes(p)||j.includes(p))})].sort((_,T)=>{const E=m==="eng"?_.name.eng:_.name.kor,j=m==="eng"?T.name.eng:T.name.kor;return m==="eng"?E.localeCompare(j,"en"):E.localeCompare(j,"ko")});return h.jsx(N9,{children:h.jsxs(D9,{children:[h.jsx(LT,{searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,showAddButton:!1}),h.jsx(P9,{stores:y})]})})}const Zw="https://outstandingspots.com";function ba(t,i){let r=document.head.querySelector(t);r||(r=document.createElement("meta"),document.head.appendChild(r));for(const[s,u]of Object.entries(i))r.setAttribute(s,u)}function U9(t,i){let r=document.head.querySelector(`link[rel="${t}"]`);r||(r=document.createElement("link"),r.setAttribute("rel",t),document.head.appendChild(r)),r.setAttribute("href",i)}function F9(t,i){const r=i==="kor";return t==="/stores"?{title:r?"전체 매장 | Outstanding Spots":"All Stores | Outstanding Spots",description:r?"SUNY Korea 주변 제휴 매장 목록과 할인 혜택을 확인하세요.":"Browse partner stores and discounts near SUNY Korea.",robots:"index,follow",path:"/stores"}:t==="/"?{title:r?"Outstanding Spots | SUNY Korea 주변 제휴 매장":"Outstanding Spots | Partner Stores near SUNY Korea",description:r?"SUNY Korea 주변 제휴 매장 지도와 할인 정보를 한눈에 확인하세요.":"Find partner stores and discounts near SUNY Korea on the Outstanding Spots map.",robots:"index,follow",path:"/"}:{title:"Outstanding Spots",description:r?"SUNY Korea 주변 제휴 매장 안내 서비스입니다.":"Partner store guide for SUNY Korea.",robots:"noindex,nofollow",path:t}}function H9(){const{pathname:t}=tn(),{language:i}=ze();return k.useEffect(()=>{const r=F9(t,i),s=`${Zw}${r.path==="/"?"/":r.path}`,u=`${Zw}/loginBackgroundImage.png`;document.title=r.title,document.documentElement.lang=i==="eng"?"en":"ko",ba('meta[name="description"]',{name:"description",content:r.description}),ba('meta[name="robots"]',{name:"robots",content:r.robots}),ba('meta[property="og:title"]',{property:"og:title",content:r.title}),ba('meta[property="og:description"]',{property:"og:description",content:r.description}),ba('meta[property="og:url"]',{property:"og:url",content:s}),ba('meta[property="og:image"]',{property:"og:image",content:u}),ba('meta[property="og:locale"]',{property:"og:locale",content:i==="eng"?"en_US":"ko_KR"}),ba('meta[name="twitter:title"]',{name:"twitter:title",content:r.title}),ba('meta[name="twitter:description"]',{name:"twitter:description",content:r.description}),U9("canonical",s)},[t,i]),null}const $9=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,V9=x.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;function Z9(){const[t,i]=k.useState("kor");return h.jsx(N2,{children:h.jsx(ez,{language:t,setLanguage:i,children:h.jsx(Rz,{children:h.jsx($z,{children:h.jsx(dO,{children:h.jsx(iz,{children:h.jsx(rz,{children:h.jsxs($9,{children:[h.jsx(H9,{}),h.jsx(Kz,{language:t,onChangeLanguage:i}),h.jsx(V9,{children:h.jsxs(f2,{children:[h.jsx(Ut,{path:"/",element:h.jsx(_z,{})}),h.jsx(Ut,{path:"/stores",element:h.jsx(B9,{})}),h.jsx(Ut,{path:"/login",element:h.jsx(NM,{})}),h.jsx(Ut,{path:"/signup/store",element:h.jsx(n9,{})}),h.jsx(Ut,{path:"/signup/student",element:h.jsx(w9,{})}),h.jsxs(Ut,{path:"/student",element:h.jsx(p7,{children:h.jsx(T7,{})}),children:[h.jsx(Ut,{index:!0,element:h.jsx(l8,{})}),h.jsx(Ut,{path:"recent",element:h.jsx(z8,{})}),h.jsx(Ut,{path:"account",element:h.jsx(oB,{})})]}),h.jsxs(Ut,{path:"/owner",element:h.jsx(m7,{children:h.jsx(aI,{})}),children:[h.jsx(Ut,{index:!0,element:h.jsx(CI,{})}),h.jsx(Ut,{path:"edit",element:h.jsx(gP,{})}),h.jsx(Ut,{path:"account",element:h.jsx(f7,{})})]}),h.jsxs(Ut,{path:"/admin",element:h.jsx(h7,{children:h.jsx(YM,{})}),children:[h.jsx(Ut,{index:!0,element:h.jsx(DB,{})}),h.jsx(Ut,{path:"store/add",element:h.jsx(Fg,{})}),h.jsx(Ut,{path:"store/edit/:storeId",element:h.jsx(Fg,{})}),h.jsx(Ut,{path:"owners",element:h.jsx(rU,{})})]})]})}),h.jsx(f5,{}),h.jsx(c5,{})]})})})})})})})})}uA.createRoot(document.getElementById("root")).render(h.jsx(k.StrictMode,{children:h.jsx(Z9,{})}));
